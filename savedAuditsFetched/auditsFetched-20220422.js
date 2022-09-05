export const audit14 = {
  date: "2022-04-22",
  legacyAudit: true,
  legacyAuditType: 3,
  legacyAuditId: "22/04/2022-legacy-audit",
  audits: [
    {
      url: "https://www.yara.hu/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "https://www.yara.hu" },
          metrics: {
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9724165500699581 },
                { start: 100, end: 300, density: 0.016490105936438137 },
                { start: 300, density: 0.011093343993603837 },
              ],
              percentiles: { p75: 11 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8579142085791416 },
                { start: 2500, end: 4000, density: 0.10988901109889011 },
                { start: 4000, density: 0.032196780321968335 },
              ],
              percentiles: { p75: 1979 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9505049495050495,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.0381961803819618,
                },
                { start: "0.25", density: 0.011298870112988703 },
              ],
              percentiles: { p75: "0.01" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8426999999999993 },
                { start: 1800, end: 3000, density: 0.11889999999999995 },
                { start: 3000, density: 0.038400000000000684 },
              ],
              percentiles: { p75: 1547 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.hu/",
          normalizedUrl: "https://www.yara.hu",
        },
      },
      extractedResults: {
        fcp: 1547,
        lcp: 1979,
        cls: "0.01",
        fid: 11,
      },
      timestamp: 1650642389638,
    },
    {
      url: "https://www.yara.cl/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "https://www.yara.cl" },
          metrics: {
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6228622862286215 },
                { start: 2500, end: 4000, density: 0.22382238223822334 },
                { start: 4000, density: 0.15331533153315516 },
              ],
              percentiles: { p75: 3174 },
            },
            cumulative_layout_shift: {
              histogram: [
                { start: "0.00", end: "0.10", density: 0.8141 },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.11420000000000001,
                },
                { start: "0.25", density: 0.07169999999999997 },
              ],
              percentiles: { p75: "0.08" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5001500750375176 },
                { start: 1800, end: 3000, density: 0.3185592796398193 },
                { start: 3000, density: 0.18129064532266312 },
              ],
              percentiles: { p75: 2647 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9802000000000001 },
                { start: 100, end: 300, density: 0.017400000000000002 },
                { start: 300, density: 0.002400000000000002 },
              ],
              percentiles: { p75: 10 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.cl/",
          normalizedUrl: "https://www.yara.cl",
        },
      },
      extractedResults: {
        fcp: 2647,
        lcp: 3174,
        cls: "0.08",
        fid: 10,
      },
      timestamp: 1650642390017,
    },
    {
      url: "https://www.yara.com.pa/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "https://www.yara.com.pa" },
          metrics: {
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6524042787163844 },
                { start: 1800, end: 3000, density: 0.23482955113465942 },
                { start: 3000, density: 0.11276617014895607 },
              ],
              percentiles: { p75: 2103 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.983 },
                { start: 100, end: 300, density: 0.0109 },
                { start: 300, density: 0.0061 },
              ],
              percentiles: { p75: 11 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7324662331165582 },
                { start: 2500, end: 4000, density: 0.15097548774387184 },
                { start: 4000, density: 0.11655827913956988 },
              ],
              percentiles: { p75: 2572 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9273927392739273,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.0518051805180518,
                },
                { start: "0.25", density: 0.02080208020802081 },
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
        fcp: 2103,
        lcp: 2572,
        cls: "0.00",
        fid: 11,
      },
      timestamp: 1650642390119,
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
                  density: 0.9649612027158099,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.01564015518913676,
                },
                { start: "0.25", density: 0.019398642095053348 },
              ],
              percentiles: { p75: "0.00" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5523227383863075 },
                { start: 1800, end: 3000, density: 0.26858190709046437 },
                { start: 3000, density: 0.1790953545232281 },
              ],
              percentiles: { p75: 2648 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9457178841309825 },
                { start: 100, end: 300, density: 0.026574307304785896 },
                { start: 300, density: 0.027707808564231717 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6564256046909362 },
                { start: 2500, end: 4000, density: 0.23265331053017374 },
                { start: 4000, density: 0.11092108477889 },
              ],
              percentiles: { p75: 2947 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.ru/",
          normalizedUrl: "https://www.yara.ru",
        },
      },
      extractedResults: {
        fcp: 2648,
        lcp: 2947,
        cls: "0.00",
        fid: 12,
      },
      timestamp: 1650642390218,
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
                  density: 0.897010298970103,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.06749325067493252,
                },
                { start: "0.25", density: 0.03549645035496454 },
              ],
              percentiles: { p75: "0.03" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5458454154584538 },
                { start: 1800, end: 3000, density: 0.2929707029297069 },
                { start: 3000, density: 0.16118388161183947 },
              ],
              percentiles: { p75: 2514 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9705970597059705 },
                { start: 100, end: 300, density: 0.0236023602360236 },
                { start: 300, density: 0.005800580058005816 },
              ],
              percentiles: { p75: 11 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6559311862372468 },
                { start: 2500, end: 4000, density: 0.21704340868173613 },
                { start: 4000, density: 0.127025405081017 },
              ],
              percentiles: { p75: 3017 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.pe/",
          normalizedUrl: "https://www.yara.com.pe",
        },
      },
      extractedResults: {
        fcp: 2514,
        lcp: 3017,
        cls: "0.03",
        fid: 11,
      },
      timestamp: 1650642390367,
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
                  density: 0.9197174052665382,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.043545279383429676,
                },
                { start: "0.25", density: 0.0367373153500321 },
              ],
              percentiles: { p75: "0.01" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8394424367578727 },
                { start: 1800, end: 3000, density: 0.11280330407847183 },
                { start: 3000, density: 0.04775425916365545 },
              ],
              percentiles: { p75: 1485 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9335410176531671 },
                { start: 100, end: 300, density: 0.030373831775700924 },
                { start: 300, density: 0.036085150571132034 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8669890393294645 },
                { start: 2500, end: 4000, density: 0.09522888459058669 },
                { start: 4000, density: 0.03778207607994882 },
              ],
              percentiles: { p75: 1887 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.it/",
          normalizedUrl: "https://www.yara.it",
        },
      },
      extractedResults: {
        fcp: 1485,
        lcp: 1887,
        cls: "0.01",
        fid: 13,
      },
      timestamp: 1650642390566,
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
                  density: 0.9520579981290926,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.030753040224508883,
                },
                { start: "0.25", density: 0.017188961646398493 },
              ],
              percentiles: { p75: "0.00" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7381428739555135 },
                { start: 1800, end: 3000, density: 0.17206072731552308 },
                { start: 3000, density: 0.08979639872896351 },
              ],
              percentiles: { p75: 1874 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9485700257763593 },
                { start: 100, end: 300, density: 0.03449122376334846 },
                { start: 300, density: 0.016938750460292158 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.796217993892412 },
                { start: 2500, end: 4000, density: 0.13178294573643407 },
                { start: 4000, density: 0.07199906037115404 },
              ],
              percentiles: { p75: 2281 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.ua/",
          normalizedUrl: "https://www.yara.ua",
        },
      },
      extractedResults: {
        fcp: 1874,
        lcp: 2281,
        cls: "0.00",
        fid: 13,
      },
      timestamp: 1650642390748,
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
                { start: "0.00", end: "0.10", density: 0.7862 },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.15849999999999997,
                },
                { start: "0.25", density: 0.05530000000000005 },
              ],
              percentiles: { p75: "0.07" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8890778155631127 },
                { start: 1800, end: 3000, density: 0.08541708341668336 },
                { start: 3000, density: 0.025505101020204052 },
              ],
              percentiles: { p75: 1364 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9528141557532737 },
                { start: 100, end: 300, density: 0.025592322303309 },
                { start: 300, density: 0.02159352194341724 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8447034110233068 },
                { start: 2500, end: 4000, density: 0.12268680604181248 },
                { start: 4000, density: 0.03260978293488076 },
              ],
              percentiles: { p75: 2044 },
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
        lcp: 2044,
        cls: "0.07",
        fid: 13,
      },
      timestamp: 1650642390960,
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
                  density: 0.810981098109811,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.13841384138413843,
                },
                { start: "0.25", density: 0.050605060506050605 },
              ],
              percentiles: { p75: "0.06" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6927385477095414 },
                { start: 1800, end: 3000, density: 0.208141628325665 },
                { start: 3000, density: 0.09911982396479373 },
              ],
              percentiles: { p75: 2121 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9685031496850313 },
                { start: 100, end: 300, density: 0.012998700129986997 },
                { start: 300, density: 0.018498150184981587 },
              ],
              percentiles: { p75: 11 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7239828051584533 },
                { start: 2500, end: 4000, density: 0.18254523642907142 },
                { start: 4000, density: 0.09347195841247545 },
              ],
              percentiles: { p75: 2796 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yaracanada.ca/fr-ca/",
          normalizedUrl: "https://www.yaracanada.ca",
        },
      },
      extractedResults: {
        fcp: 2121,
        lcp: 2796,
        cls: "0.06",
        fid: 11,
      },
      timestamp: 1650642391063,
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
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8089999999999999,
                },
                { start: "0.10", end: "0.25", density: 0.1292 },
                { start: "0.25", density: 0.061800000000000056 },
              ],
              percentiles: { p75: "0.05" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6576000000000012 },
                { start: 1800, end: 3000, density: 0.21200000000000044 },
                { start: 3000, density: 0.1303999999999985 },
              ],
              percentiles: { p75: 2224 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.964985994397759 },
                { start: 100, end: 300, density: 0.023309323729491793 },
                { start: 300, density: 0.011704681872749187 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7271999999999994 },
                { start: 2500, end: 4000, density: 0.1652999999999998 },
                { start: 4000, density: 0.10750000000000065 },
              ],
              percentiles: { p75: 2625 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.in/",
          normalizedUrl: "https://www.yara.in",
        },
      },
      extractedResults: {
        fcp: 2224,
        lcp: 2625,
        cls: "0.05",
        fid: 13,
      },
      timestamp: 1650642391162,
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
                  density: 0.9355509355509356,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.058327558327558336,
                },
                { start: "0.25", density: 0.00612150612150612 },
              ],
              percentiles: { p75: "0.00" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7977267455346786 },
                { start: 1800, end: 3000, density: 0.16005567153792621 },
                { start: 3000, density: 0.042217582927395116 },
              ],
              percentiles: { p75: 1690 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.947170697346795 },
                { start: 100, end: 300, density: 0.023127494717069735 },
                { start: 300, density: 0.029701807936135166 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8150637311703356 },
                { start: 2500, end: 4000, density: 0.1380069524913094 },
                { start: 4000, density: 0.04692931633835493 },
              ],
              percentiles: { p75: 2193 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.ro/",
          normalizedUrl: "https://www.yara.ro",
        },
      },
      extractedResults: {
        fcp: 1690,
        lcp: 2193,
        cls: "0.00",
        fid: 12,
      },
      timestamp: 1650642391260,
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
                  density: 0.8735126487351265,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.07279272072792721,
                },
                { start: "0.25", density: 0.053694630536946265 },
              ],
              percentiles: { p75: "0.04" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.15943188637727507 },
                { start: 1800, end: 3000, density: 0.4329865973194628 },
                { start: 3000, density: 0.40758151630326206 },
              ],
              percentiles: { p75: 4149 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.30851914808519243 },
                { start: 2500, end: 4000, density: 0.3776122387761236 },
                { start: 4000, density: 0.313868613138684 },
              ],
              percentiles: { p75: 4637 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "http://www.yara.com.mm/",
          normalizedUrl: "http://www.yara.com.mm",
        },
      },
      extractedResults: { fcp: 4149, lcp: 4637, cls: "0.04" },
      timestamp: 1650642391407,
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
                { start: 0, end: 100, density: 0.9376484560570069 },
                { start: 100, end: 300, density: 0.03384798099762469 },
                { start: 300, density: 0.028503562945368505 },
              ],
              percentiles: { p75: 16 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8380437999408108 },
                { start: 2500, end: 4000, density: 0.12821840781296243 },
                { start: 4000, density: 0.03373779224622686 },
              ],
              percentiles: { p75: 2090 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8766642282370153,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.08880760790051208,
                },
                { start: "0.25", density: 0.03452816386247259 },
              ],
              percentiles: { p75: "0.01" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8735154394299289 },
                { start: 1800, end: 3000, density: 0.09709026128266035 },
                { start: 3000, density: 0.029394299287410722 },
              ],
              percentiles: { p75: 1418 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.fi/",
          normalizedUrl: "https://www.yara.fi",
        },
      },
      extractedResults: {
        fcp: 1418,
        lcp: 2090,
        cls: "0.01",
        fid: 16,
      },
      timestamp: 1650642391511,
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
                  density: 0.7696769676967697,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.17871787178717868,
                },
                { start: "0.25", density: 0.05160516051605162 },
              ],
              percentiles: { p75: "0.08" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6768000000000001 },
                { start: 1800, end: 3000, density: 0.23350000000000004 },
                { start: 3000, density: 0.08969999999999992 },
              ],
              percentiles: { p75: 2216 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9903009699030096 },
                { start: 100, end: 300, density: 0.009699030096990302 },
                { start: 300 },
              ],
              percentiles: { p75: 8 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7640735926407362 },
                { start: 2500, end: 4000, density: 0.16833316668333168 },
                { start: 4000, density: 0.06759324067593213 },
              ],
              percentiles: { p75: 2461 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.co.nz/",
          normalizedUrl: "https://www.yara.co.nz",
        },
      },
      extractedResults: { fcp: 2216, lcp: 2461, cls: "0.08", fid: 8 },
      timestamp: 1650642391669,
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
                  density: 0.9821851392490697,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.009809448641334985,
                },
                { start: "0.25", density: 0.008005412109595222 },
              ],
              percentiles: { p75: "0.00" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.49773857982813147 },
                { start: 1800, end: 3000, density: 0.36601085481682455 },
                { start: 3000, density: 0.13625056535504404 },
              ],
              percentiles: { p75: 2492 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9218393427658603 },
                { start: 100, end: 300, density: 0.05225924235508901 },
                { start: 300, density: 0.025901414879050764 },
              ],
              percentiles: { p75: 14 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.5755860038500731 },
                { start: 2500, end: 4000, density: 0.30845883818367087 },
                { start: 4000, density: 0.115955157966256 },
              ],
              percentiles: { p75: 3196 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.hr/",
          normalizedUrl: "https://www.yara.hr",
        },
      },
      extractedResults: {
        fcp: 2492,
        lcp: 3196,
        cls: "0.00",
        fid: 14,
      },
      timestamp: 1650642391777,
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
                  density: 0.9352064793520648,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.0321967803219678,
                },
                { start: "0.25", density: 0.03259674032596739 },
              ],
              percentiles: { p75: "0.00" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.34560368110433193 },
                { start: 1800, end: 3000, density: 0.3364009202760834 },
                { start: 3000, density: 0.3179953986195847 },
              ],
              percentiles: { p75: 3388 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9677 },
                { start: 100, end: 300, density: 0.0278 },
                { start: 300, density: 0.0045000000000000005 },
              ],
              percentiles: { p75: 11 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.4657999999999998 },
                { start: 2500, end: 4000, density: 0.3146 },
                { start: 4000, density: 0.21960000000000024 },
              ],
              percentiles: { p75: 3855 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.bo/",
          normalizedUrl: "https://www.yara.bo",
        },
      },
      extractedResults: {
        fcp: 3388,
        lcp: 3855,
        cls: "0.00",
        fid: 11,
      },
      timestamp: 1650642391943,
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
                { start: 0, end: 100, density: 0.9422960358831376 },
                { start: 100, end: 300, density: 0.0344284155655231 },
                { start: 300, density: 0.0232755485513394 },
              ],
              percentiles: { p75: 14 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6765336509827272 },
                { start: 2500, end: 4000, density: 0.18028588445503266 },
                { start: 4000, density: 0.14318046456224004 },
              ],
              percentiles: { p75: 2968 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9429684732554021,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.019837052780729718,
                },
                { start: "0.25", density: 0.037194473963868234 },
              ],
              percentiles: { p75: "0.00" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5841254752851706 },
                { start: 1800, end: 3000, density: 0.23526615969581732 },
                { start: 3000, density: 0.18060836501901203 },
              ],
              percentiles: { p75: 2553 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.co/",
          normalizedUrl: "https://www.yara.com.co",
        },
      },
      extractedResults: {
        fcp: 2553,
        lcp: 2968,
        cls: "0.00",
        fid: 14,
      },
      timestamp: 1650642392076,
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
                  density: 0.9333999999999999,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.05079999999999999,
                },
                { start: "0.25", density: 0.01580000000000001 },
              ],
              percentiles: { p75: "0.03" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.9168083191680831 },
                { start: 1800, end: 3000, density: 0.07259274072592745 },
                { start: 3000, density: 0.010598940105989435 },
              ],
              percentiles: { p75: 1291 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9592 },
                { start: 100, end: 300, density: 0.03370000000000001 },
                { start: 300, density: 0.007100000000000001 },
              ],
              percentiles: { p75: 11 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.9255648870225954 },
                { start: 2500, end: 4000, density: 0.05483903219356132 },
                { start: 4000, density: 0.01959608078384327 },
              ],
              percentiles: { p75: 1779 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.ee/",
          normalizedUrl: "https://www.yara.ee",
        },
      },
      extractedResults: {
        fcp: 1291,
        lcp: 1779,
        cls: "0.03",
        fid: 11,
      },
      timestamp: 1650642392255,
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
                  density: 0.9808606607338778,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.005241984639765939,
                },
                { start: "0.25", density: 0.01389735462635621 },
              ],
              percentiles: { p75: "0.00" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.799019006744328 },
                { start: 1800, end: 3000, density: 0.1272838749233598 },
                { start: 3000, density: 0.07369711833231207 },
              ],
              percentiles: { p75: 1633 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9647435897435898 },
                { start: 100, end: 300, density: 0.022682445759368838 },
                { start: 300, density: 0.012573964497041453 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8267411865864143 },
                { start: 2500, end: 4000, density: 0.11847438889571307 },
                { start: 4000, density: 0.05478442451787267 },
              ],
              percentiles: { p75: 2074 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.pt/",
          normalizedUrl: "https://www.yara.pt",
        },
      },
      extractedResults: {
        fcp: 1633,
        lcp: 2074,
        cls: "0.00",
        fid: 12,
      },
      timestamp: 1650642392392,
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
                  density: 0.9237333333333334,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.04657777777777779,
                },
                { start: "0.25", density: 0.029688888888888907 },
              ],
              percentiles: { p75: "0.00" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6507272727272719 },
                { start: 1800, end: 3000, density: 0.20963636363636334 },
                { start: 3000, density: 0.13963636363636467 },
              ],
              percentiles: { p75: 2292 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.961334641805692 },
                { start: 100, end: 300, density: 0.027870461236506383 },
                { start: 300, density: 0.010794896957801758 },
              ],
              percentiles: { p75: 14 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7060944825099164 },
                { start: 2500, end: 4000, density: 0.1808510638297871 },
                { start: 4000, density: 0.11305445366029657 },
              ],
              percentiles: { p75: 2788 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com/",
          normalizedUrl: "https://www.yara.com",
        },
      },
      extractedResults: {
        fcp: 2292,
        lcp: 2788,
        cls: "0.00",
        fid: 14,
      },
      timestamp: 1650642392612,
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
                  density: 0.7479999999999999,
                },
                { start: "0.10", end: "0.25", density: 0.2162 },
                { start: "0.25", density: 0.035800000000000054 },
              ],
              percentiles: { p75: "0.10" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8024592622213335 },
                { start: 1800, end: 3000, density: 0.14215735279416175 },
                { start: 3000, density: 0.05538338498450481 },
              ],
              percentiles: { p75: 1636 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9525810324129653 },
                { start: 100, end: 300, density: 0.025610244097639054 },
                { start: 300, density: 0.021808723489395623 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8208141628325667 },
                { start: 2500, end: 4000, density: 0.12867573514702943 },
                { start: 4000, density: 0.05051010202040381 },
              ],
              percentiles: { p75: 2159 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.pl/",
          normalizedUrl: "https://www.yara.pl",
        },
      },
      extractedResults: {
        fcp: 1636,
        lcp: 2159,
        cls: "0.10",
        fid: 12,
      },
      timestamp: 1650642392811,
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
                { start: "0.00", end: "0.10", density: 0.7102 },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.13400000000000004,
                },
                { start: "0.25", density: 0.15579999999999994 },
              ],
              percentiles: { p75: "0.12" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6168850655196557 },
                { start: 1800, end: 3000, density: 0.15284585375612675 },
                { start: 3000, density: 0.23026908072421745 },
              ],
              percentiles: { p75: 2673 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6622000000000001 },
                { start: 2500, end: 4000, density: 0.15940000000000004 },
                { start: 4000, density: 0.17839999999999984 },
              ],
              percentiles: { p75: 3170 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.cm/en-cm/",
          normalizedUrl: "https://www.yara.cm",
        },
      },
      extractedResults: { fcp: 2673, lcp: 3170, cls: "0.12" },
      timestamp: 1650642392932,
    },
    {
      url: "https://www.yara.cm/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "https://www.yara.cm" },
          metrics: {
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6622000000000001 },
                { start: 2500, end: 4000, density: 0.15940000000000004 },
                { start: 4000, density: 0.17839999999999984 },
              ],
              percentiles: { p75: 3170 },
            },
            cumulative_layout_shift: {
              histogram: [
                { start: "0.00", end: "0.10", density: 0.7102 },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.13400000000000004,
                },
                { start: "0.25", density: 0.15579999999999994 },
              ],
              percentiles: { p75: "0.12" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6168850655196557 },
                { start: 1800, end: 3000, density: 0.15284585375612675 },
                { start: 3000, density: 0.23026908072421745 },
              ],
              percentiles: { p75: 2673 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.cm/",
          normalizedUrl: "https://www.yara.cm",
        },
      },
      extractedResults: { fcp: 2673, lcp: 3170, cls: "0.12" },
      timestamp: 1650642393054,
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
                  density: 0.9360999999999999,
                },
                { start: "0.10", end: "0.25", density: 0.0447 },
                { start: "0.25", density: 0.0192 },
              ],
              percentiles: { p75: "0.01" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5949405059494043 },
                { start: 1800, end: 3000, density: 0.24607539246075363 },
                { start: 3000, density: 0.1589841015898421 },
              ],
              percentiles: { p75: 2489 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9553089382123575 },
                { start: 100, end: 300, density: 0.022295540891821633 },
                { start: 300, density: 0.022395520895820812 },
              ],
              percentiles: { p75: 11 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6866373274654934 },
                { start: 2500, end: 4000, density: 0.20974194838967805 },
                { start: 4000, density: 0.10362072414482855 },
              ],
              percentiles: { p75: 2832 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.ru/",
          normalizedUrl: "https://www.yara.ru",
        },
      },
      extractedResults: {
        fcp: 2489,
        lcp: 2832,
        cls: "0.01",
        fid: 11,
      },
      timestamp: 1650642393177,
    },
    {
      url: "https://www.yara.it/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "https://www.yara.it" },
          metrics: {
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8543291341731651 },
                { start: 1800, end: 3000, density: 0.10007998400319928 },
                { start: 3000, density: 0.04559088182363541 },
              ],
              percentiles: { p75: 1423 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9475052494750522 },
                { start: 100, end: 300, density: 0.024197580241975797 },
                { start: 300, density: 0.028297170282971847 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8698869886988698 },
                { start: 2500, end: 4000, density: 0.09260926092609262 },
                { start: 4000, density: 0.037503750375037566 },
              ],
              percentiles: { p75: 1873 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9298000000000001,
                },
                { start: "0.10", end: "0.25", density: 0.0389 },
                { start: "0.25", density: 0.03129999999999999 },
              ],
              percentiles: { p75: "0.01" },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.it/",
          normalizedUrl: "https://www.yara.it",
        },
      },
      extractedResults: {
        fcp: 1423,
        lcp: 1873,
        cls: "0.01",
        fid: 12,
      },
      timestamp: 1650642393305,
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
                  density: 0.8047769924445528,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.17877163051425785,
                },
                { start: "0.25", density: 0.016451377041189368 },
              ],
              percentiles: { p75: "0.07" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7754703151722451 },
                { start: 1800, end: 3000, density: 0.16210603469337878 },
                { start: 3000, density: 0.06242365013437618 },
              ],
              percentiles: { p75: 1727 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9418127564341665 },
                { start: 100, end: 300, density: 0.031580256123337064 },
                { start: 300, density: 0.02660698744249643 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.80516057857318 },
                { start: 2500, end: 4000, density: 0.1398014219171366 },
                { start: 4000, density: 0.05503799950968338 },
              ],
              percentiles: { p75: 2236 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.pl/",
          normalizedUrl: "https://www.yara.pl",
        },
      },
      extractedResults: {
        fcp: 1727,
        lcp: 2236,
        cls: "0.07",
        fid: 13,
      },
      timestamp: 1650642393428,
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
                { start: 0, end: 100, density: 0.8585889107115875 },
                { start: 100, end: 300, density: 0.05846804653270885 },
                { start: 300, density: 0.08294304275570363 },
              ],
              percentiles: { p75: 25 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6121406683204431 },
                { start: 2500, end: 4000, density: 0.20516562089595783 },
                { start: 4000, density: 0.18269371078359906 },
              ],
              percentiles: { p75: 3369 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9068901303538176,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.027646468987251115,
                },
                { start: "0.25", density: 0.06546340065893137 },
              ],
              percentiles: { p75: "0.00" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5400929692039497 },
                { start: 1800, end: 3000, density: 0.2572632190586861 },
                { start: 3000, density: 0.2026438117373643 },
              ],
              percentiles: { p75: 2667 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.us/",
          normalizedUrl: "https://www.yara.us",
        },
      },
      extractedResults: {
        fcp: 2667,
        lcp: 3369,
        cls: "0.00",
        fid: 25,
      },
      timestamp: 1650642393618,
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
                { start: 0, end: 1800, density: 0.5827902486121174 },
                { start: 1800, end: 3000, density: 0.25380159304851585 },
                { start: 3000, density: 0.16340815833936684 },
              ],
              percentiles: { p75: 2455 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9526934984520123 },
                { start: 100, end: 300, density: 0.03306501547987616 },
                { start: 300, density: 0.014241486068111422 },
              ],
              percentiles: { p75: 14 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6892917369308588 },
                { start: 2500, end: 4000, density: 0.18459407371717626 },
                { start: 4000, density: 0.12611418935196492 },
              ],
              percentiles: { p75: 2847 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9417268743337677,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.021556318844012795,
                },
                { start: "0.25", density: 0.03671680682221961 },
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
        fcp: 2455,
        lcp: 2847,
        cls: "0.00",
        fid: 14,
      },
      timestamp: 1650642393815,
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
                { start: 0, end: 1800, density: 0.5808742622786833 },
                { start: 1800, end: 3000, density: 0.16985095528658584 },
                { start: 3000, density: 0.24927478243473078 },
              ],
              percentiles: { p75: 2868 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9596 },
                { start: 100, end: 300, density: 0.026899999999999993 },
                { start: 300, density: 0.013499999999999995 },
              ],
              percentiles: { p75: 11 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.62975 },
                { start: 2500, end: 4000, density: 0.18184999999999993 },
                { start: 4000, density: 0.18839999999999998 },
              ],
              percentiles: { p75: 3277 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9264926492649265,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.04820482048204821,
                },
                { start: "0.25", density: 0.0253025302530253 },
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
        fcp: 2868,
        lcp: 3277,
        cls: "0.00",
        fid: 11,
      },
      timestamp: 1650642394012,
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
                  density: 0.9539046095390461,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.030796920307969204,
                },
                { start: "0.25", density: 0.015298470152984701 },
              ],
              percentiles: { p75: "0.00" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8176364727054585 },
                { start: 1800, end: 3000, density: 0.11537692461507693 },
                { start: 3000, density: 0.0669866026794645 },
              ],
              percentiles: { p75: 1561 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9714057188562287 },
                { start: 100, end: 300, density: 0.018396320735852827 },
                { start: 300, density: 0.010197960407918443 },
              ],
              percentiles: { p75: 11 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8352999999999998 },
                { start: 2500, end: 4000, density: 0.11199999999999995 },
                { start: 4000, density: 0.05270000000000003 },
              ],
              percentiles: { p75: 2041 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.pt/",
          normalizedUrl: "https://www.yara.pt",
        },
      },
      extractedResults: {
        fcp: 1561,
        lcp: 2041,
        cls: "0.00",
        fid: 11,
      },
      timestamp: 1650642394135,
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
                  density: 0.8904780956191237,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.06271254250850171,
                },
                { start: "0.25", density: 0.046809361872374465 },
              ],
              percentiles: { p75: "0.01" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6155615561556147 },
                { start: 1800, end: 3000, density: 0.22072207220722032 },
                { start: 3000, density: 0.16371637163716501 },
              ],
              percentiles: { p75: 2423 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.951 },
                { start: 100, end: 300, density: 0.0292 },
                { start: 300, density: 0.019799999999999988 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6917424772568227 },
                { start: 2500, end: 4000, density: 0.17019894031790456 },
                { start: 4000, density: 0.13805858242527277 },
              ],
              percentiles: { p75: 2901 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.co/",
          normalizedUrl: "https://www.yara.com.co",
        },
      },
      extractedResults: {
        fcp: 2423,
        lcp: 2901,
        cls: "0.01",
        fid: 13,
      },
      timestamp: 1650642394256,
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
                { start: 0, end: 100, density: 0.9765023497650236 },
                { start: 100, end: 300, density: 0.016698330166983303 },
                { start: 300, density: 0.006799320067993189 },
              ],
              percentiles: { p75: 10 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7635817908954474 },
                { start: 2500, end: 4000, density: 0.14507253626813404 },
                { start: 4000, density: 0.09134567283641859 },
              ],
              percentiles: { p75: 2450 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8229999999999998,
                },
                { start: "0.10", end: "0.25", density: 0.141 },
                { start: "0.25", density: 0.036000000000000046 },
              ],
              percentiles: { p75: "0.06" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7446467880728428 },
                { start: 1800, end: 3000, density: 0.15869521713027804 },
                { start: 3000, density: 0.0966579947968791 },
              ],
              percentiles: { p75: 1858 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com/",
          normalizedUrl: "https://www.yara.com",
        },
      },
      extractedResults: {
        fcp: 1858,
        lcp: 2450,
        cls: "0.06",
        fid: 10,
      },
      timestamp: 1650642394379,
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
                  density: 0.8856114388561144,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.0910908909109089,
                },
                { start: "0.25", density: 0.023297670232976693 },
              ],
              percentiles: { p75: "0.01" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7818999999999993 },
                { start: 1800, end: 3000, density: 0.15759999999999985 },
                { start: 3000, density: 0.06050000000000082 },
              ],
              percentiles: { p75: 1700 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9593122063380985 },
                { start: 100, end: 300, density: 0.027091872438268515 },
                { start: 300, density: 0.013595921223633036 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7999200079991999 },
                { start: 2500, end: 4000, density: 0.14038596140385953 },
                { start: 4000, density: 0.05969403059694059 },
              ],
              percentiles: { p75: 2245 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.gr/",
          normalizedUrl: "https://www.yara.gr",
        },
      },
      extractedResults: {
        fcp: 1700,
        lcp: 2245,
        cls: "0.01",
        fid: 12,
      },
      timestamp: 1650642394504,
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
                { start: "0.00", end: "0.10", density: 0.8582 },
                { start: "0.10", end: "0.25", density: 0.0806 },
                { start: "0.25", density: 0.06120000000000002 },
              ],
              percentiles: { p75: "0.03" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5149514951495135 },
                { start: 1800, end: 3000, density: 0.3389338933893381 },
                { start: 3000, density: 0.1461146114611485 },
              ],
              percentiles: { p75: 2524 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9373125374925014 },
                { start: 100, end: 300, density: 0.023595280943811237 },
                { start: 300, density: 0.03909218156368733 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6027602760276028 },
                { start: 2500, end: 4000, density: 0.2795279527952796 },
                { start: 4000, density: 0.1177117711771174 },
              ],
              percentiles: { p75: 3010 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.ie/",
          normalizedUrl: "https://www.yara.ie",
        },
      },
      extractedResults: {
        fcp: 2524,
        lcp: 3010,
        cls: "0.03",
        fid: 12,
      },
      timestamp: 1650642394633,
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
                { start: 0, end: 100, density: 0.9586197222611866 },
                { start: 100, end: 300, density: 0.028755786225277035 },
                { start: 300, density: 0.012624491513536243 },
              ],
              percentiles: { p75: 14 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8616369331335966 },
                { start: 2500, end: 4000, density: 0.11493939806618542 },
                { start: 4000, density: 0.02342366880021791 },
              ],
              percentiles: { p75: 2041 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9341909275558563,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.057278266756939734,
                },
                { start: "0.25", density: 0.008530805687203784 },
              ],
              percentiles: { p75: "0.00" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.835767918088737 },
                { start: 1800, end: 3000, density: 0.13447098976109212 },
                { start: 3000, density: 0.029761092150170892 },
              ],
              percentiles: { p75: 1578 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.lv/",
          normalizedUrl: "https://www.yara.lv",
        },
      },
      extractedResults: {
        fcp: 1578,
        lcp: 2041,
        cls: "0.00",
        fid: 14,
      },
      timestamp: 1650642394755,
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
                  density: 0.9264926492649265,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.04820482048204821,
                },
                { start: "0.25", density: 0.0253025302530253 },
              ],
              percentiles: { p75: "0.00" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5808742622786833 },
                { start: 1800, end: 3000, density: 0.16985095528658584 },
                { start: 3000, density: 0.24927478243473078 },
              ],
              percentiles: { p75: 3088 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9596 },
                { start: 100, end: 300, density: 0.026899999999999993 },
                { start: 300, density: 0.013499999999999995 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.62975 },
                { start: 2500, end: 4000, density: 0.18184999999999993 },
                { start: 4000, density: 0.18839999999999998 },
              ],
              percentiles: { p75: 3434 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.gh/",
          normalizedUrl: "https://www.yara.com.gh",
        },
      },
      extractedResults: {
        fcp: 3088,
        lcp: 3434,
        cls: "0.00",
        fid: 13,
      },
      timestamp: 1650642394930,
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
                  density: 0.9236670502493287,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.04206623193964965,
                },
                { start: "0.25", density: 0.03426671781102161 },
              ],
              percentiles: { p75: "0.00" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5094217862674226 },
                { start: 1800, end: 3000, density: 0.2197986577181202 },
                { start: 3000, density: 0.2707795560144571 },
              ],
              percentiles: { p75: 3335 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9523747729042304 },
                { start: 100, end: 300, density: 0.040747469504282395 },
                { start: 300, density: 0.006877757591487154 },
              ],
              percentiles: { p75: 14 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.5773115773115779 },
                { start: 2500, end: 4000, density: 0.2140637140637142 },
                { start: 4000, density: 0.20862470862470797 },
              ],
              percentiles: { p75: 3696 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.ci/",
          normalizedUrl: "https://www.yara.ci",
        },
      },
      extractedResults: {
        fcp: 3335,
        lcp: 3696,
        cls: "0.00",
        fid: 14,
      },
      timestamp: 1650642395113,
    },
    {
      url: "https://www.yaraagri.cz/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "https://www.yaraagri.cz" },
          metrics: {
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9620924184836968 },
                { start: 100, end: 300, density: 0.025605121024204848 },
                { start: 300, density: 0.012302460492098455 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.9005 },
                { start: 2500, end: 4000, density: 0.077 },
                { start: 4000, density: 0.022499999999999968 },
              ],
              percentiles: { p75: 1766 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8683868386838685,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.08490849084908492,
                },
                { start: "0.25", density: 0.04670467046704672 },
              ],
              percentiles: { p75: "0.03" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.9067906790679068 },
                { start: 1800, end: 3000, density: 0.06590659065906587 },
                { start: 3000, density: 0.02730273027302732 },
              ],
              percentiles: { p75: 1244 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yaraagri.cz/",
          normalizedUrl: "https://www.yaraagri.cz",
        },
      },
      extractedResults: {
        fcp: 1244,
        lcp: 1766,
        cls: "0.03",
        fid: 13,
      },
      timestamp: 1650642395291,
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
                { start: 0, end: 1800, density: 0.645341684375349 },
                { start: 1800, end: 3000, density: 0.22178727211721266 },
                { start: 3000, density: 0.13287104350743836 },
              ],
              percentiles: { p75: 2267 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.961720867208672 },
                { start: 100, end: 300, density: 0.025406504065040646 },
                { start: 300, density: 0.012872628726287357 },
              ],
              percentiles: { p75: 14 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7220982142857143 },
                { start: 2500, end: 4000, density: 0.17109375000000002 },
                { start: 4000, density: 0.1068080357142856 },
              ],
              percentiles: { p75: 2645 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8410027855153203,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.10518105849582171,
                },
                { start: "0.25", density: 0.053816155988858076 },
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
        fcp: 2267,
        lcp: 2645,
        cls: "0.01",
        fid: 14,
      },
      timestamp: 1650642395414,
    },
    {
      url: "https://www.yara.se/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "https://www.yara.se" },
          metrics: {
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.9118500000000003 },
                { start: 2500, end: 4000, density: 0.06675000000000005 },
                { start: 4000, density: 0.021399999999999697 },
              ],
              percentiles: { p75: 1709 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8283343331333733,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.130873825234953,
                },
                { start: "0.25", density: 0.04079184163167358 },
              ],
              percentiles: { p75: "0.06" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.9212236329101271 },
                { start: 1800, end: 3000, density: 0.06258122563231032 },
                { start: 3000, density: 0.016195141457562554 },
              ],
              percentiles: { p75: 1225 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9647894368310492 },
                { start: 100, end: 300, density: 0.01660498149444833 },
                { start: 300, density: 0.01860558167450255 },
              ],
              percentiles: { p75: 11 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.se/",
          normalizedUrl: "https://www.yara.se",
        },
      },
      extractedResults: {
        fcp: 1225,
        lcp: 1709,
        cls: "0.06",
        fid: 11,
      },
      timestamp: 1650642395613,
    },
    {
      url: "https://www.yara.com.pe/",
      deviceTargeted: "PHONE",
      results: {
        record: {
          key: { formFactor: "PHONE", origin: "https://www.yara.com.pe" },
          metrics: {
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.960632104241752 },
                { start: 100, end: 300, density: 0.03174383143886887 },
                { start: 300, density: 0.007624064319378999 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6337990685296074 },
                { start: 2500, end: 4000, density: 0.23898868928809047 },
                { start: 4000, density: 0.1272122421823021 },
              ],
              percentiles: { p75: 3057 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9354370213889622,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.025349881172432007,
                },
                { start: "0.25", density: 0.039213097438605765 },
              ],
              percentiles: { p75: "0.01" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.48131279303415925 },
                { start: 1800, end: 3000, density: 0.3279303415941058 },
                { start: 3000, density: 0.19075686537173486 },
              ],
              percentiles: { p75: 2692 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.pe/",
          normalizedUrl: "https://www.yara.com.pe",
        },
      },
      extractedResults: {
        fcp: 2692,
        lcp: 3057,
        cls: "0.01",
        fid: 13,
      },
      timestamp: 1650642395758,
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
                { start: "0.00", end: "0.10", density: 0.9448 },
                { start: "0.10", end: "0.25", density: 0.0363 },
                { start: "0.25", density: 0.018900000000000004 },
              ],
              percentiles: { p75: "0.00" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6025602560256028 },
                { start: 1800, end: 3000, density: 0.2522252225222523 },
                { start: 3000, density: 0.14521452145214478 },
              ],
              percentiles: { p75: 2307 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.950995099509951 },
                { start: 100, end: 300, density: 0.03630363036303631 },
                { start: 300, density: 0.012701270127012705 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7013798620137979 },
                { start: 2500, end: 4000, density: 0.16763323667633215 },
                { start: 4000, density: 0.13098690130986992 },
              ],
              percentiles: { p75: 2771 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.cr/",
          normalizedUrl: "https://www.yara.cr",
        },
      },
      extractedResults: {
        fcp: 2307,
        lcp: 2771,
        cls: "0.00",
        fid: 12,
      },
      timestamp: 1650642395963,
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
                { start: 0, end: 1800, density: 0.906457355559152 },
                { start: 1800, end: 3000, density: 0.07444570318821817 },
                { start: 3000, density: 0.019096941252629996 },
              ],
              percentiles: { p75: 1307 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9484656437625083 },
                { start: 100, end: 300, density: 0.024016010673782524 },
                { start: 300, density: 0.027518345563709246 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.9142303343563235 },
                { start: 2500, end: 4000, density: 0.06444839282829917 },
                { start: 4000, density: 0.02132127281537739 },
              ],
              percentiles: { p75: 1721 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9362277353689569,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.04277989821882953,
                },
                { start: "0.25", density: 0.02099236641221373 },
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
        fcp: 1307,
        lcp: 1721,
        cls: "0.00",
        fid: 13,
      },
      timestamp: 1650642396116,
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
                  density: 0.7593759375937594,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.1615161516151615,
                },
                { start: "0.25", density: 0.07910791079107904 },
              ],
              percentiles: { p75: "0.08" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8782243551289742 },
                { start: 1800, end: 3000, density: 0.08738252349530092 },
                { start: 3000, density: 0.03439312137572489 },
              ],
              percentiles: { p75: 1324 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9766070178946316 },
                { start: 100, end: 300, density: 0.010496850944716586 },
                { start: 300, density: 0.012896131160651771 },
              ],
              percentiles: { p75: 10 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8722500000000001 },
                { start: 2500, end: 4000, density: 0.09065 },
                { start: 4000, density: 0.0371 },
              ],
              percentiles: { p75: 1922 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.be/",
          normalizedUrl: "https://www.yara.be",
        },
      },
      extractedResults: {
        fcp: 1324,
        lcp: 1922,
        cls: "0.08",
        fid: 10,
      },
      timestamp: 1650642396341,
    },
    {
      url: "https://www.yara.be/fr-be/",
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
                  density: 0.7593759375937594,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.1615161516151615,
                },
                { start: "0.25", density: 0.07910791079107904 },
              ],
              percentiles: { p75: "0.08" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8782243551289742 },
                { start: 1800, end: 3000, density: 0.08738252349530092 },
                { start: 3000, density: 0.03439312137572489 },
              ],
              percentiles: { p75: 1324 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9766070178946316 },
                { start: 100, end: 300, density: 0.010496850944716586 },
                { start: 300, density: 0.012896131160651771 },
              ],
              percentiles: { p75: 10 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8722500000000001 },
                { start: 2500, end: 4000, density: 0.09065 },
                { start: 4000, density: 0.0371 },
              ],
              percentiles: { p75: 1922 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.be/fr-be/",
          normalizedUrl: "https://www.yara.be",
        },
      },
      extractedResults: {
        fcp: 1324,
        lcp: 1922,
        cls: "0.08",
        fid: 10,
      },
      timestamp: 1650642396495,
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
                { start: 0, end: 2500, density: 0.7800560112022406 },
                { start: 2500, end: 4000, density: 0.14742948589717939 },
                { start: 4000, density: 0.07251450290058013 },
              ],
              percentiles: { p75: 2371 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8694869486948695,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.07610761076107612,
                },
                { start: "0.25", density: 0.054405440544054426 },
              ],
              percentiles: { p75: "0.03" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7339999999999994 },
                { start: 1800, end: 3000, density: 0.18109999999999984 },
                { start: 3000, density: 0.0849000000000007 },
              ],
              percentiles: { p75: 1875 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9475947594759477 },
                { start: 100, end: 300, density: 0.02900290029002901 },
                { start: 300, density: 0.02340234023402336 },
              ],
              percentiles: { p75: 13 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.es/",
          normalizedUrl: "https://www.yara.es",
        },
      },
      extractedResults: {
        fcp: 1875,
        lcp: 2371,
        cls: "0.03",
        fid: 13,
      },
      timestamp: 1650642396649,
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
                { start: 0, end: 2500, density: 0.7543999999999997 },
                { start: 2500, end: 4000, density: 0.14089999999999991 },
                { start: 4000, density: 0.10470000000000033 },
              ],
              percentiles: { p75: 2538 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9312068793120688,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.039996000399960006,
                },
                { start: "0.25", density: 0.028797120287971222 },
              ],
              percentiles: { p75: "0.01" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.690538107621524 },
                { start: 1800, end: 3000, density: 0.1975395079015802 },
                { start: 3000, density: 0.11192238447689576 },
              ],
              percentiles: { p75: 2028 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9632036796320369 },
                { start: 100, end: 300, density: 0.021997800219978002 },
                { start: 300, density: 0.01479852014798517 },
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
        fcp: 2028,
        lcp: 2538,
        cls: "0.01",
        fid: 11,
      },
      timestamp: 1650642396798,
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
                { start: "0.00", end: "0.10", density: 0.7102 },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.13400000000000004,
                },
                { start: "0.25", density: 0.15579999999999994 },
              ],
              percentiles: { p75: "0.14" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6168850655196557 },
                { start: 1800, end: 3000, density: 0.15284585375612675 },
                { start: 3000, density: 0.23026908072421745 },
              ],
              percentiles: { p75: 2791 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6622000000000001 },
                { start: 2500, end: 4000, density: 0.15940000000000004 },
                { start: 4000, density: 0.17839999999999984 },
              ],
              percentiles: { p75: 3210 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.cm/",
          normalizedUrl: "https://www.yara.cm",
        },
      },
      extractedResults: { fcp: 2791, lcp: 3210, cls: "0.14" },
      timestamp: 1650642396964,
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
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8984999999999999,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.060799999999999986,
                },
                { start: "0.25", density: 0.04070000000000006 },
              ],
              percentiles: { p75: "0.03" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.48520295940811814 },
                { start: 1800, end: 3000, density: 0.2776444711057788 },
                { start: 3000, density: 0.23715256948610322 },
              ],
              percentiles: { p75: 2952 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9552910582116424 },
                { start: 100, end: 300, density: 0.031706341268253654 },
                { start: 300, density: 0.01300260052010398 },
              ],
              percentiles: { p75: 11 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.5751575157515741 },
                { start: 2500, end: 4000, density: 0.24772477247724725 },
                { start: 4000, density: 0.17711771177117858 },
              ],
              percentiles: { p75: 3416 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.ar/",
          normalizedUrl: "https://www.yara.com.ar",
        },
      },
      extractedResults: {
        fcp: 2952,
        lcp: 3416,
        cls: "0.03",
        fid: 11,
      },
      timestamp: 1650642397188,
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
                  density: 0.9046929665822174,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.0795029557244541,
                },
                { start: "0.25", density: 0.015804077693328516 },
              ],
              percentiles: { p75: "0.00" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.86682044433653 },
                { start: 1800, end: 3000, density: 0.10938448464246688 },
                { start: 3000, density: 0.023795071021002975 },
              ],
              percentiles: { p75: 1473 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9752536500866122 },
                { start: 100, end: 300, density: 0.01422915120019797 },
                { start: 300, density: 0.010517198713189816 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8986527491200389 },
                { start: 2500, end: 4000, density: 0.07925719140672415 },
                { start: 4000, density: 0.022090059473236928 },
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
        fcp: 1473,
        lcp: 1829,
        cls: "0.00",
        fid: 13,
      },
      timestamp: 1650642397335,
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
                  density: 0.8048195180481952,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.15008499150084995,
                },
                { start: "0.25", density: 0.0450954904509549 },
              ],
              percentiles: { p75: "0.07" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8861569215392303 },
                { start: 1800, end: 3000, density: 0.08285857071464268 },
                { start: 3000, density: 0.030984507746126804 },
              ],
              percentiles: { p75: 1326 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9659931986397281 },
                { start: 100, end: 300, density: 0.01860372074414883 },
                { start: 300, density: 0.015403080616123168 },
              ],
              percentiles: { p75: 10 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8665633436656327 },
                { start: 2500, end: 4000, density: 0.09544045595440448 },
                { start: 4000, density: 0.03799620037996281 },
              ],
              percentiles: { p75: 1938 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.nl/",
          normalizedUrl: "https://www.yara.nl",
        },
      },
      extractedResults: {
        fcp: 1326,
        lcp: 1938,
        cls: "0.07",
        fid: 10,
      },
      timestamp: 1650642397573,
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
                { start: 0, end: 100, density: 0.9429152542372882 },
                { start: 100, end: 300, density: 0.041762711864406776 },
                { start: 300, density: 0.01532203389830503 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.5286826735885785 },
                { start: 2500, end: 4000, density: 0.2826086956521737 },
                { start: 4000, density: 0.18870863075924785 },
              ],
              percentiles: { p75: 3578 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9289645462690388,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.030590042237296812,
                },
                { start: "0.25", density: 0.04044541149366444 },
              ],
              percentiles: { p75: "0.00" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.4195559018309302 },
                { start: 1800, end: 3000, density: 0.30606414751330924 },
                { start: 3000, density: 0.27437995065576054 },
              ],
              percentiles: { p75: 3141 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.ar/",
          normalizedUrl: "https://www.yara.com.ar",
        },
      },
      extractedResults: {
        fcp: 3141,
        lcp: 3578,
        cls: "0.00",
        fid: 13,
      },
      timestamp: 1650642397718,
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
                { start: 0, end: 2500, density: 0.7644242882338115 },
                { start: 2500, end: 4000, density: 0.1596119929453262 },
                { start: 4000, density: 0.07596371882086235 },
              ],
              percentiles: { p75: 2437 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9370927318295739,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.02581453634085213,
                },
                { start: "0.25", density: 0.03709273182957391 },
              ],
              percentiles: { p75: "0.01" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6999118498929604 },
                { start: 1800, end: 3000, density: 0.20299710363934012 },
                { start: 3000, density: 0.09709104646769937 },
              ],
              percentiles: { p75: 1981 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9360406091370557 },
                { start: 100, end: 300, density: 0.03565989847715736 },
                { start: 300, density: 0.028299492385786888 },
              ],
              percentiles: { p75: 14 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.es/",
          normalizedUrl: "https://www.yara.es",
        },
      },
      extractedResults: {
        fcp: 1981,
        lcp: 2437,
        cls: "0.01",
        fid: 14,
      },
      timestamp: 1650642397940,
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
                { start: 0, end: 1800, density: 0.9052083333333333 },
                { start: 1800, end: 3000, density: 0.0763888888888889 },
                { start: 3000, density: 0.018402777777777837 },
              ],
              percentiles: { p75: 1449 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.928042328042328 },
                { start: 100, end: 300, density: 0.05943562610229276 },
                { start: 300, density: 0.012522045855379188 },
              ],
              percentiles: { p75: 14 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.9161068044788975 },
                { start: 2500, end: 4000, density: 0.061154177433247206 },
                { start: 4000, density: 0.022739018087855327 },
              ],
              percentiles: { p75: 1864 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.950520389012114,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.03412386964681794,
                },
                { start: "0.25", density: 0.01535574134106808 },
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
        fcp: 1449,
        lcp: 1864,
        cls: "0.00",
        fid: 14,
      },
      timestamp: 1650642398202,
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
                  density: 0.9464564877540386,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.022928608650338717,
                },
                { start: "0.25", density: 0.030614903595622744 },
              ],
              percentiles: { p75: "0.00" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.46658742736397174 },
                { start: 1800, end: 3000, density: 0.3641045958795556 },
                { start: 3000, density: 0.16930797675647274 },
              ],
              percentiles: { p75: 2663 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9214482585818089 },
                { start: 100, end: 300, density: 0.02956652468053119 },
                { start: 300, density: 0.048985216737659806 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.5824154209284035 },
                { start: 2500, end: 4000, density: 0.29130605822187283 },
                { start: 4000, density: 0.12627852084972366 },
              ],
              percentiles: { p75: 3067 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.ie/",
          normalizedUrl: "https://www.yara.ie",
        },
      },
      extractedResults: {
        fcp: 2663,
        lcp: 3067,
        cls: "0.00",
        fid: 13,
      },
      timestamp: 1650642398481,
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
                  density: 0.875834602319316,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.10015227831791026,
                },
                { start: "0.25", density: 0.024013119362773803 },
              ],
              percentiles: { p75: "0.00" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7738640366326166 },
                { start: 1800, end: 3000, density: 0.163437830221909 },
                { start: 3000, density: 0.06269813314547443 },
              ],
              percentiles: { p75: 1722 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.954842543077837 },
                { start: 100, end: 300, density: 0.0303030303030303 },
                { start: 300, density: 0.014854426619132652 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8079722907126919 },
                { start: 2500, end: 4000, density: 0.13754843254667135 },
                { start: 4000, density: 0.05447927674063678 },
              ],
              percentiles: { p75: 2203 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.gr/",
          normalizedUrl: "https://www.yara.gr",
        },
      },
      extractedResults: {
        fcp: 1722,
        lcp: 2203,
        cls: "0.00",
        fid: 13,
      },
      timestamp: 1650642398740,
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
                  density: 0.9635511585524603,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.010413954699297059,
                },
                { start: "0.25", density: 0.026034886748242652 },
              ],
              percentiles: { p75: "0.00" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6454713006845698 },
                { start: 1800, end: 3000, density: 0.22840968931016284 },
                { start: 3000, density: 0.12611901000526737 },
              ],
              percentiles: { p75: 2162 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9580689655172414 },
                { start: 100, end: 300, density: 0.02731034482758621 },
                { start: 300, density: 0.01462068965517236 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.747405071606884 },
                { start: 2500, end: 4000, density: 0.15090001313887774 },
                { start: 4000, density: 0.10169491525423834 },
              ],
              percentiles: { p75: 2549 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.gt/",
          normalizedUrl: "https://www.yara.com.gt",
        },
      },
      extractedResults: {
        fcp: 2162,
        lcp: 2549,
        cls: "0.00",
        fid: 13,
      },
      timestamp: 1650642399017,
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
                  density: 0.9327700880819702,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.03541254718676973,
                },
                { start: "0.25", density: 0.031817364731260095 },
              ],
              percentiles: { p75: "0.00" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8439664600802043 },
                { start: 1800, end: 3000, density: 0.1115566897557419 },
                { start: 3000, density: 0.04447685016405392 },
              ],
              percentiles: { p75: 1522 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9634589630763344 },
                { start: 100, end: 300, density: 0.017983546967667876 },
                { start: 300, density: 0.018557489955997694 },
              ],
              percentiles: { p75: 14 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8560138081395348 },
                { start: 2500, end: 4000, density: 0.09965479651162787 },
                { start: 4000, density: 0.044331395348837455 },
              ],
              percentiles: { p75: 2107 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.be/fr-be/",
          normalizedUrl: "https://www.yara.be",
        },
      },
      extractedResults: {
        fcp: 1522,
        lcp: 2107,
        cls: "0.00",
        fid: 14,
      },
      timestamp: 1650642399281,
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
                  density: 0.9389544150462225,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.03331208160663053,
                },
                { start: "0.25", density: 0.027733503347146977 },
              ],
              percentiles: { p75: "0.01" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.39048546842019616 },
                { start: 1800, end: 3000, density: 0.3312226010716009 },
                { start: 3000, density: 0.27829193050820283 },
              ],
              percentiles: { p75: 3203 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9064795168924431 },
                { start: 100, end: 300, density: 0.044720091398726944 },
                { start: 300, density: 0.04880039170882996 },
              ],
              percentiles: { p75: 16 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.5064945608053258 },
                { start: 2500, end: 4000, density: 0.2965578827731775 },
                { start: 4000, density: 0.1969475564214967 },
              ],
              percentiles: { p75: 3634 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.co.uk/",
          normalizedUrl: "https://www.yara.co.uk",
        },
      },
      extractedResults: {
        fcp: 3203,
        lcp: 3634,
        cls: "0.01",
        fid: 16,
      },
      timestamp: 1650642399538,
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
                { start: "0.00", end: "0.10", density: 0.9051 },
                { start: "0.10", end: "0.25", density: 0.0795 },
                { start: "0.25", density: 0.015400000000000007 },
              ],
              percentiles: { p75: "0.01" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8078423527058116 },
                { start: 1800, end: 3000, density: 0.14984495348604573 },
                { start: 3000, density: 0.042312693808142704 },
              ],
              percentiles: { p75: 1654 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9543045695430458 },
                { start: 100, end: 300, density: 0.019698030196980302 },
                { start: 300, density: 0.025997400259973935 },
              ],
              percentiles: { p75: 11 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8119688031196877 },
                { start: 2500, end: 4000, density: 0.13853614638536138 },
                { start: 4000, density: 0.049495050494950885 },
              ],
              percentiles: { p75: 2203 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.ro/",
          normalizedUrl: "https://www.yara.ro",
        },
      },
      extractedResults: {
        fcp: 1654,
        lcp: 2203,
        cls: "0.01",
        fid: 11,
      },
      timestamp: 1650642399789,
    },
    {
      url: "https://www.yara.de/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "https://www.yara.de" },
          metrics: {
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8320667933206675 },
                { start: 2500, end: 4000, density: 0.11453854614538539 },
                { start: 4000, density: 0.05339466053394715 },
              ],
              percentiles: { p75: 2050 },
            },
            cumulative_layout_shift: {
              histogram: [
                { start: "0.00", end: "0.10", density: 0.8222 },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.11089999999999998,
                },
                { start: "0.25", density: 0.06689999999999996 },
              ],
              percentiles: { p75: "0.05" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8249999999999994 },
                { start: 1800, end: 3000, density: 0.11189999999999992 },
                { start: 3000, density: 0.06310000000000067 },
              ],
              percentiles: { p75: 1484 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9493949394939492 },
                { start: 100, end: 300, density: 0.02890289028902889 },
                { start: 300, density: 0.021702170217021935 },
              ],
              percentiles: { p75: 13 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.de/",
          normalizedUrl: "https://www.yara.de",
        },
      },
      extractedResults: {
        fcp: 1484,
        lcp: 2050,
        cls: "0.05",
        fid: 13,
      },
      timestamp: 1650642399953,
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
                { start: 0, end: 1800, density: 0.6156652882510332 },
                { start: 1800, end: 3000, density: 0.2595475553393332 },
                { start: 3000, density: 0.12478715640963366 },
              ],
              percentiles: { p75: 2185 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9776727081691621 },
                { start: 100, end: 300, density: 0.014315734173890201 },
                { start: 300, density: 0.008011557656947728 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7381532464368377 },
                { start: 2500, end: 4000, density: 0.15610914849555368 },
                { start: 4000, density: 0.1057376050676085 },
              ],
              percentiles: { p75: 2543 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9621202952922668,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.016579934648432774,
                },
                { start: "0.25", density: 0.021299770059300494 },
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
        fcp: 2185,
        lcp: 2543,
        cls: "0.00",
        fid: 12,
      },
      timestamp: 1650642400116,
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
                  density: 0.9286874887163749,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.04820364686766565,
                },
                { start: "0.25", density: 0.02310886441595958 },
              ],
              percentiles: { p75: "0.00" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.9191583610188261 },
                { start: 1800, end: 3000, density: 0.06496862310815799 },
                { start: 3000, density: 0.015873015873015834 },
              ],
              percentiles: { p75: 1276 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9423436915013105 },
                { start: 100, end: 300, density: 0.02583302134032198 },
                { start: 300, density: 0.031823287158367644 },
              ],
              percentiles: { p75: 14 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.9169877086773068 },
                { start: 2500, end: 4000, density: 0.07090442120711798 },
                { start: 4000, density: 0.012107870115575198 },
              ],
              percentiles: { p75: 1689 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.no/",
          normalizedUrl: "https://www.yara.no",
        },
      },
      extractedResults: {
        fcp: 1276,
        lcp: 1689,
        cls: "0.00",
        fid: 14,
      },
      timestamp: 1650642400377,
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
                  density: 0.9565217391304347,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.024925647925223057,
                },
                { start: "0.25", density: 0.018552612944342167 },
              ],
              percentiles: { p75: "0.00" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5756489315932897 },
                { start: 1800, end: 3000, density: 0.24580524881686558 },
                { start: 3000, density: 0.17854581958984475 },
              ],
              percentiles: { p75: 2522 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9621963490010061 },
                { start: 100, end: 300, density: 0.032341526520051754 },
                { start: 300, density: 0.005462124478942073 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6372436540943641 },
                { start: 2500, end: 4000, density: 0.2050050193603901 },
                { start: 4000, density: 0.15775132654524582 },
              ],
              percentiles: { p75: 3105 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.co.za/",
          normalizedUrl: "https://www.yara.co.za",
        },
      },
      extractedResults: {
        fcp: 2522,
        lcp: 3105,
        cls: "0.00",
        fid: 13,
      },
      timestamp: 1650642400630,
    },
    {
      url: "https://www.yara.com.mx/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "https://www.yara.com.mx" },
          metrics: {
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8854885488548854,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.06790679067906791,
                },
                { start: "0.25", density: 0.046604660466046624 },
              ],
              percentiles: { p75: "0.01" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6032412965186078 },
                { start: 1800, end: 3000, density: 0.24159663865546238 },
                { start: 3000, density: 0.1551620648259298 },
              ],
              percentiles: { p75: 2384 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9572085582883422 },
                { start: 100, end: 300, density: 0.028994201159768043 },
                { start: 300, density: 0.013797240551889646 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6888199379441475 },
                { start: 2500, end: 4000, density: 0.17796016414773233 },
                { start: 4000, density: 0.13321989790812008 },
              ],
              percentiles: { p75: 2872 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.mx/",
          normalizedUrl: "https://www.yara.com.mx",
        },
      },
      extractedResults: {
        fcp: 2384,
        lcp: 2872,
        cls: "0.01",
        fid: 13,
      },
      timestamp: 1650642400903,
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
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.810981098109811,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.13841384138413843,
                },
                { start: "0.25", density: 0.050605060506050605 },
              ],
              percentiles: { p75: "0.06" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6927385477095414 },
                { start: 1800, end: 3000, density: 0.208141628325665 },
                { start: 3000, density: 0.09911982396479373 },
              ],
              percentiles: { p75: 2121 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9685031496850313 },
                { start: 100, end: 300, density: 0.012998700129986997 },
                { start: 300, density: 0.018498150184981587 },
              ],
              percentiles: { p75: 11 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7239828051584533 },
                { start: 2500, end: 4000, density: 0.18254523642907142 },
                { start: 4000, density: 0.09347195841247545 },
              ],
              percentiles: { p75: 2796 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yaracanada.ca/",
          normalizedUrl: "https://www.yaracanada.ca",
        },
      },
      extractedResults: {
        fcp: 2121,
        lcp: 2796,
        cls: "0.06",
        fid: 11,
      },
      timestamp: 1650642401088,
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
                  density: 0.8206999999999999,
                },
                { start: "0.10", end: "0.25", density: 0.1288 },
                { start: "0.25", density: 0.050500000000000086 },
              ],
              percentiles: { p75: "0.07" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7276272372762725 },
                { start: 1800, end: 3000, density: 0.16998300169983008 },
                { start: 3000, density: 0.10238976102389741 },
              ],
              percentiles: { p75: 1928 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9365936593659365 },
                { start: 100, end: 300, density: 0.03610361036103611 },
                { start: 300, density: 0.0273027302730274 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7746901239504196 },
                { start: 2500, end: 4000, density: 0.1420431827269092 },
                { start: 4000, density: 0.08326669332267135 },
              ],
              percentiles: { p75: 2416 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.fr/",
          normalizedUrl: "https://www.yara.fr",
        },
      },
      extractedResults: {
        fcp: 1928,
        lcp: 2416,
        cls: "0.07",
        fid: 12,
      },
      timestamp: 1650642401263,
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
                  density: 0.916119522980035,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.060699450623073845,
                },
                { start: "0.25", density: 0.023181026396891326 },
              ],
              percentiles: { p75: "0.00" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6875421784316372 },
                { start: 1800, end: 3000, density: 0.19206370630314487 },
                { start: 3000, density: 0.12039411526521787 },
              ],
              percentiles: { p75: 2078 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9261433447098975 },
                { start: 100, end: 300, density: 0.04341296928327643 },
                { start: 300, density: 0.030443686006826155 },
              ],
              percentiles: { p75: 14 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7587115072933548 },
                { start: 2500, end: 4000, density: 0.15336304700162068 },
                { start: 4000, density: 0.08792544570502457 },
              ],
              percentiles: { p75: 2494 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.fr/",
          normalizedUrl: "https://www.yara.fr",
        },
      },
      extractedResults: {
        fcp: 2078,
        lcp: 2494,
        cls: "0.00",
        fid: 14,
      },
      timestamp: 1650642401442,
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
                { start: 0, end: 100, density: 0.9642000000000001 },
                { start: 100, end: 300, density: 0.017600000000000005 },
                { start: 300, density: 0.018200000000000015 },
              ],
              percentiles: { p75: 11 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.9275789684126349 },
                { start: 2500, end: 4000, density: 0.059926029588164745 },
                { start: 4000, density: 0.012495001999200313 },
              ],
              percentiles: { p75: 1625 },
            },
            cumulative_layout_shift: {
              histogram: [
                { start: "0.00", end: "0.10", density: 0.7914 },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.16449999999999995,
                },
                { start: "0.25", density: 0.044100000000000035 },
              ],
              percentiles: { p75: "0.07" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.9374062593740625 },
                { start: 1800, end: 3000, density: 0.05069493050694929 },
                { start: 3000, density: 0.011898810118988043 },
              ],
              percentiles: { p75: 1148 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.no/",
          normalizedUrl: "https://www.yara.no",
        },
      },
      extractedResults: {
        fcp: 1148,
        lcp: 1625,
        cls: "0.07",
        fid: 11,
      },
      timestamp: 1650642401710,
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
                  density: 0.8689779378658261,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.09207564160288159,
                },
                { start: "0.25", density: 0.038946420531292235 },
              ],
              percentiles: { p75: "0.03" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.4040529831314413 },
                { start: 1800, end: 3000, density: 0.2594814898675437 },
                { start: 3000, density: 0.33646552700101506 },
              ],
              percentiles: { p75: 3618 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.8891373425915027 },
                { start: 100, end: 300, density: 0.07120160056490524 },
                { start: 300, density: 0.03966105684359204 },
              ],
              percentiles: { p75: 20 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.4503808116403351 },
                { start: 2500, end: 4000, density: 0.2571331135614432 },
                { start: 4000, density: 0.29248607479822175 },
              ],
              percentiles: { p75: 4443 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yarabrasil.com.br/",
          normalizedUrl: "https://www.yarabrasil.com.br",
        },
      },
      extractedResults: {
        fcp: 3618,
        lcp: 4443,
        cls: "0.03",
        fid: 20,
      },
      timestamp: 1650642401897,
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
                { start: "0.00", end: "0.10", density: 0.7102 },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.13400000000000004,
                },
                { start: "0.25", density: 0.15579999999999994 },
              ],
              percentiles: { p75: "0.14" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6168850655196557 },
                { start: 1800, end: 3000, density: 0.15284585375612675 },
                { start: 3000, density: 0.23026908072421745 },
              ],
              percentiles: { p75: 2791 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6622000000000001 },
                { start: 2500, end: 4000, density: 0.15940000000000004 },
                { start: 4000, density: 0.17839999999999984 },
              ],
              percentiles: { p75: 3210 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.cm/en-cm/",
          normalizedUrl: "https://www.yara.cm",
        },
      },
      extractedResults: { fcp: 2791, lcp: 3210, cls: "0.14" },
      timestamp: 1650642402174,
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
                { start: 0, end: 2500, density: 0.5673432656734323 },
                { start: 2500, end: 4000, density: 0.26257374262573724 },
                { start: 4000, density: 0.17008299170083035 },
              ],
              percentiles: { p75: 3380 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.7784999999999999,
                },
                { start: "0.10", end: "0.25", density: 0.1366 },
                { start: "0.25", density: 0.08490000000000014 },
              ],
              percentiles: { p75: "0.08" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.4936987397479499 },
                { start: 1800, end: 3000, density: 0.290858171634327 },
                { start: 3000, density: 0.21544308861772296 },
              ],
              percentiles: { p75: 2806 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9343868773754749 },
                { start: 100, end: 300, density: 0.03040608121624324 },
                { start: 300, density: 0.0352070414082818 },
              ],
              percentiles: { p75: 12 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.co.uk/",
          normalizedUrl: "https://www.yara.co.uk",
        },
      },
      extractedResults: {
        fcp: 2806,
        lcp: 3380,
        cls: "0.08",
        fid: 12,
      },
      timestamp: 1650642402457,
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
                  density: 0.7843784378437844,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.14451445144514455,
                },
                { start: "0.25", density: 0.07110711071107098 },
              ],
              percentiles: { p75: "0.07" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8022604520904176 },
                { start: 1800, end: 3000, density: 0.12032406481296253 },
                { start: 3000, density: 0.07741548309661982 },
              ],
              percentiles: { p75: 1581 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9688968896889688 },
                { start: 100, end: 300, density: 0.0249024902490249 },
                { start: 300, density: 0.00620062006200621 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8354322838580704 },
                { start: 2500, end: 4000, density: 0.09630184907546221 },
                { start: 4000, density: 0.06826586706646749 },
              ],
              percentiles: { p75: 1990 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.my/",
          normalizedUrl: "https://www.yara.my",
        },
      },
      extractedResults: {
        fcp: 1581,
        lcp: 1990,
        cls: "0.07",
        fid: 13,
      },
      timestamp: 1650642402646,
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
                { start: 0, end: 1800, density: 0.88008800880088 },
                { start: 1800, end: 3000, density: 0.09080908090809081 },
                { start: 3000, density: 0.029102910291028992 },
              ],
              percentiles: { p75: 1354 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9637145141943223 },
                { start: 100, end: 300, density: 0.019292283086765293 },
                { start: 300, density: 0.016993202718912415 },
              ],
              percentiles: { p75: 10 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8941000000000001 },
                { start: 2500, end: 4000, density: 0.08290000000000002 },
                { start: 4000, density: 0.02300000000000003 },
              ],
              percentiles: { p75: 1850 },
            },
            cumulative_layout_shift: {
              histogram: [
                { start: "0.00", end: "0.10", density: 0.8378 },
                { start: "0.10", end: "0.25", density: 0.1358 },
                { start: "0.25", density: 0.02639999999999999 },
              ],
              percentiles: { p75: "0.06" },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.dk/",
          normalizedUrl: "https://www.yara.dk",
        },
      },
      extractedResults: {
        fcp: 1354,
        lcp: 1850,
        cls: "0.06",
        fid: 10,
      },
      timestamp: 1650642402829,
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
                { start: 0, end: 2500, density: 0.8874423650664497 },
                { start: 2500, end: 4000, density: 0.08963927312177922 },
                { start: 4000, density: 0.02291836181177104 },
              ],
              percentiles: { p75: 1839 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8922067487948581,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.06480985538296732,
                },
                { start: "0.25", density: 0.04298339582217459 },
              ],
              percentiles: { p75: "0.00" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8945518453427065 },
                { start: 1800, end: 3000, density: 0.07651750709747196 },
                { start: 3000, density: 0.028930647559821627 },
              ],
              percentiles: { p75: 1328 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9492322589569787 },
                { start: 100, end: 300, density: 0.035412920182597875 },
                { start: 300, density: 0.015354820860423316 },
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
        fcp: 1328,
        lcp: 1839,
        cls: "0.00",
        fid: 16,
      },
      timestamp: 1650642403024,
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
                { start: 0, end: 2500, density: 0.8010198980101989 },
                { start: 2500, end: 4000, density: 0.13028697130286965 },
                { start: 4000, density: 0.06869313068693152 },
              ],
              percentiles: { p75: 2265 },
            },
            cumulative_layout_shift: {
              histogram: [
                { start: "0.00", end: "0.10", density: 0.9031 },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.07749999999999999,
                },
                { start: "0.25", density: 0.0194 },
              ],
              percentiles: { p75: "0.01" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7591240875912408 },
                { start: 1800, end: 3000, density: 0.15788421157884214 },
                { start: 3000, density: 0.08299170082991701 },
              ],
              percentiles: { p75: 1803 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9568086382723455 },
                { start: 100, end: 300, density: 0.028894221155768843 },
                { start: 300, density: 0.014297140571885652 },
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
      extractedResults: {
        fcp: 1803,
        lcp: 2265,
        cls: "0.01",
        fid: 12,
      },
      timestamp: 1650642403323,
    },
    {
      url: "https://www.yara.nl/",
      deviceTargeted: "PHONE",
      results: {
        record: {
          key: { formFactor: "PHONE", origin: "https://www.yara.nl" },
          metrics: {
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9406451612903226 },
                { start: 100, end: 300, density: 0.03188940092165899 },
                { start: 300, density: 0.027465437788018333 },
              ],
              percentiles: { p75: 15 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8404136389044159 },
                { start: 2500, end: 4000, density: 0.12194894727035589 },
                { start: 4000, density: 0.037637413825228096 },
              ],
              percentiles: { p75: 2103 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9628545288197621,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.0212259835315645,
                },
                { start: "0.25", density: 0.015919487648673382 },
              ],
              percentiles: { p75: "0.00" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8472040396484013 },
                { start: 1800, end: 3000, density: 0.1211894520291753 },
                { start: 3000, density: 0.03160650832242344 },
              ],
              percentiles: { p75: 1513 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.nl/",
          normalizedUrl: "https://www.yara.nl",
        },
      },
      extractedResults: {
        fcp: 1513,
        lcp: 2103,
        cls: "0.00",
        fid: 15,
      },
      timestamp: 1650642403509,
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
                  density: 0.833983398339834,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.09850985098509851,
                },
                { start: "0.25", density: 0.06750675067506758 },
              ],
              percentiles: { p75: "0.06" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6202999999999991 },
                { start: 1800, end: 3000, density: 0.21749999999999978 },
                { start: 3000, density: 0.16220000000000118 },
              ],
              percentiles: { p75: 2373 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9025097490250973 },
                { start: 100, end: 300, density: 0.0407959204079592 },
                { start: 300, density: 0.056694330566943486 },
              ],
              percentiles: { p75: 15 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6537499999999996 },
                { start: 2500, end: 4000, density: 0.1872499999999999 },
                { start: 4000, density: 0.1590000000000005 },
              ],
              percentiles: { p75: 3162 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.us/",
          normalizedUrl: "https://www.yara.us",
        },
      },
      extractedResults: {
        fcp: 2373,
        lcp: 3162,
        cls: "0.06",
        fid: 15,
      },
      timestamp: 1650642403786,
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
                { start: 0, end: 1800, density: 0.7786976399357464 },
                { start: 1800, end: 3000, density: 0.13431360434943765 },
                { start: 3000, density: 0.08698875571481592 },
              ],
              percentiles: { p75: 1687 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9603670192430229 },
                { start: 100, end: 300, density: 0.0317318720530139 },
                { start: 300, density: 0.007901108703963312 },
              ],
              percentiles: { p75: 15 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8218873517786559 },
                { start: 2500, end: 4000, density: 0.10573122529644263 },
                { start: 4000, density: 0.07238142292490135 },
              ],
              percentiles: { p75: 2080 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8423572744014731,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.10386740331491712,
                },
                { start: "0.25", density: 0.05377532228360965 },
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
        fcp: 1687,
        lcp: 2080,
        cls: "0.02",
        fid: 15,
      },
      timestamp: 1650642403976,
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
                  density: 0.9308934778163975,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.04825189122878757,
                },
                { start: "0.25", density: 0.020854630954814962 },
              ],
              percentiles: { p75: "0.00" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8436196830692246 },
                { start: 1800, end: 3000, density: 0.11655546288573815 },
                { start: 3000, density: 0.03982485404503738 },
              ],
              percentiles: { p75: 1535 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9320244880726198 },
                { start: 100, end: 300, density: 0.03208781929491239 },
                { start: 300, density: 0.03588769263246776 },
              ],
              percentiles: { p75: 17 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8778054862842894 },
                { start: 2500, end: 4000, density: 0.09600997506234414 },
                { start: 4000, density: 0.026184538653366517 },
              ],
              percentiles: { p75: 2014 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.dk/",
          normalizedUrl: "https://www.yara.dk",
        },
      },
      extractedResults: {
        fcp: 1535,
        lcp: 2014,
        cls: "0.00",
        fid: 17,
      },
      timestamp: 1650642404266,
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
                  density: 0.9734946989397879,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.01800360072014403,
                },
                { start: "0.25", density: 0.00850170034006801 },
              ],
              percentiles: { p75: "0.00" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5136027205441083 },
                { start: 1800, end: 3000, density: 0.35267053410682114 },
                { start: 3000, density: 0.1337267453490705 },
              ],
              percentiles: { p75: 2471 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9246999999999999 },
                { start: 100, end: 300, density: 0.05089999999999999 },
                { start: 300, density: 0.024400000000000126 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.5856842737094837 },
                { start: 2500, end: 4000, density: 0.2965686274509803 },
                { start: 4000, density: 0.117747098839536 },
              ],
              percentiles: { p75: 3178 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.hr/",
          normalizedUrl: "https://www.yara.hr",
        },
      },
      extractedResults: {
        fcp: 2471,
        lcp: 3178,
        cls: "0.00",
        fid: 13,
      },
      timestamp: 1650642404557,
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
                  density: 0.9708419390110558,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.010934272870854087,
                },
                { start: "0.25", density: 0.01822378811809015 },
              ],
              percentiles: { p75: "0.00" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5641308342521124 },
                { start: 1800, end: 3000, density: 0.27563395810363805 },
                { start: 3000, density: 0.1602352076442496 },
              ],
              percentiles: { p75: 2398 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9437017994858611 },
                { start: 100, end: 300, density: 0.045372750642673515 },
                { start: 300, density: 0.010925449871465305 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7034470068694798 },
                { start: 2500, end: 4000, density: 0.16946761530912657 },
                { start: 4000, density: 0.12708537782139367 },
              ],
              percentiles: { p75: 2732 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.cr/",
          normalizedUrl: "https://www.yara.cr",
        },
      },
      extractedResults: {
        fcp: 2398,
        lcp: 2732,
        cls: "0.00",
        fid: 13,
      },
      timestamp: 1650642404760,
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
                { start: 0, end: 1800, density: 0.7762 },
                { start: 1800, end: 3000, density: 0.17859999999999993 },
                { start: 3000, density: 0.04520000000000003 },
              ],
              percentiles: { p75: 1735 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.98009800980098 },
                { start: 100, end: 300, density: 0.014601460146014602 },
                { start: 300, density: 0.005300530053005317 },
              ],
              percentiles: { p75: 9 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8194680531946804 },
                { start: 2500, end: 4000, density: 0.11153884611538849 },
                { start: 4000, density: 0.06899310068993106 },
              ],
              percentiles: { p75: 2151 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9271999999999999,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.04259999999999999,
                },
                { start: "0.25", density: 0.030199999999999998 },
              ],
              percentiles: { p75: "0.01" },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.kr/",
          normalizedUrl: "https://www.yara.kr",
        },
      },
      extractedResults: { fcp: 1735, lcp: 2151, cls: "0.01", fid: 9 },
      timestamp: 1650642405052,
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
                  density: 0.9467158671586716,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.02745387453874539,
                },
                { start: "0.25", density: 0.025830258302583023 },
              ],
              percentiles: { p75: "0.00" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.579097744360901 },
                { start: 1800, end: 3000, density: 0.2347368421052627 },
                { start: 3000, density: 0.18616541353383645 },
              ],
              percentiles: { p75: 2610 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9472114524306591 },
                { start: 100, end: 300, density: 0.038473009245451835 },
                { start: 300, density: 0.014315538323889078 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6631052002390913 },
                { start: 2500, end: 4000, density: 0.20524506873879259 },
                { start: 4000, density: 0.13164973102211608 },
              ],
              percentiles: { p75: 2971 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.au/",
          normalizedUrl: "https://www.yara.com.au",
        },
      },
      extractedResults: {
        fcp: 2610,
        lcp: 2971,
        cls: "0.00",
        fid: 13,
      },
      timestamp: 1650642405250,
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
                  density: 0.9636055861193397,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.025179856115107913,
                },
                { start: "0.25", density: 0.01121455776555226 },
              ],
              percentiles: { p75: "0.00" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5764909248055317 },
                { start: 1800, end: 3000, density: 0.3154710458081244 },
                { start: 3000, density: 0.10803802938634405 },
              ],
              percentiles: { p75: 2462 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9835680751173709 },
                { start: 100, end: 300, density: 0.016431924882629106 },
                { start: 300 },
              ],
              percentiles: { p75: 11 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6890049009162582 },
                { start: 2500, end: 4000, density: 0.23449818879181764 },
                { start: 4000, density: 0.07649691029192411 },
              ],
              percentiles: { p75: 2755 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.co.nz/",
          normalizedUrl: "https://www.yara.co.nz",
        },
      },
      extractedResults: {
        fcp: 2462,
        lcp: 2755,
        cls: "0.00",
        fid: 11,
      },
      timestamp: 1650642405548,
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
                  density: 0.9293070692930707,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.043395660433956595,
                },
                { start: "0.25", density: 0.027297270272972716 },
              ],
              percentiles: { p75: "0.01" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5875587558755874 },
                { start: 1800, end: 3000, density: 0.2457245724572457 },
                { start: 3000, density: 0.16671667166716703 },
              ],
              percentiles: { p75: 2504 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9561000000000001 },
                { start: 100, end: 300, density: 0.030199999999999998 },
                { start: 300, density: 0.013699999999999983 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6747999999999992 },
                { start: 2500, end: 4000, density: 0.19629999999999967 },
                { start: 4000, density: 0.12890000000000115 },
              ],
              percentiles: { p75: 2965 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.ec/",
          normalizedUrl: "https://www.yara.com.ec",
        },
      },
      extractedResults: {
        fcp: 2504,
        lcp: 2965,
        cls: "0.01",
        fid: 12,
      },
      timestamp: 1650642405851,
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
                { start: "0.00", end: "0.10", density: 0.8253 },
                { start: "0.10", end: "0.25", density: 0.1202 },
                { start: "0.25", density: 0.05449999999999994 },
              ],
              percentiles: { p75: "0.05" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6205482192877146 },
                { start: 1800, end: 3000, density: 0.22739095638255288 },
                { start: 3000, density: 0.15206082432973259 },
              ],
              percentiles: { p75: 2364 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9634890467140143 },
                { start: 100, end: 300, density: 0.02640792237671302 },
                { start: 300, density: 0.010103030909272814 },
              ],
              percentiles: { p75: 11 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6946915925222434 },
                { start: 2500, end: 4000, density: 0.18664400679796056 },
                { start: 4000, density: 0.11866440067979613 },
              ],
              percentiles: { p75: 2886 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.au/",
          normalizedUrl: "https://www.yara.com.au",
        },
      },
      extractedResults: {
        fcp: 2364,
        lcp: 2886,
        cls: "0.05",
        fid: 11,
      },
      timestamp: 1650642406057,
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
                { start: 0, end: 100, density: 0.9711748208164538 },
                { start: 100, end: 300, density: 0.025085696478653788 },
                { start: 300, density: 0.0037394827048924935 },
              ],
              percentiles: { p75: 11 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.5860680644181103 },
                { start: 2500, end: 4000, density: 0.2723336371923429 },
                { start: 4000, density: 0.14159829838954702 },
              ],
              percentiles: { p75: 3152 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9429469901168014,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.02440850554058101,
                },
                { start: "0.25", density: 0.03264450434261754 },
              ],
              percentiles: { p75: "0.00" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.39166920964296487 },
                { start: 1800, end: 3000, density: 0.39060115959719127 },
                { start: 3000, density: 0.2177296307598438 },
              ],
              percentiles: { p75: 2846 },
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
        lcp: 3152,
        cls: "0.00",
        fid: 11,
      },
      timestamp: 1650642406257,
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
                  density: 0.7767572863090865,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.18356600538819492,
                },
                { start: "0.25", density: 0.039676708302718626 },
              ],
              percentiles: { p75: "0.07" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6961000735835167 },
                { start: 1800, end: 3000, density: 0.22651459406426278 },
                { start: 3000, density: 0.07738533235222057 },
              ],
              percentiles: { p75: 1987 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9647789180286329 },
                { start: 100, end: 300, density: 0.02280501710376283 },
                { start: 300, density: 0.0124160648676042 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7302704025449648 },
                { start: 2500, end: 4000, density: 0.18285819160650912 },
                { start: 4000, density: 0.08687140584852604 },
              ],
              percentiles: { p75: 2589 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.co.th/",
          normalizedUrl: "https://www.yara.co.th",
        },
      },
      extractedResults: {
        fcp: 1987,
        lcp: 2589,
        cls: "0.07",
        fid: 13,
      },
      timestamp: 1650642406602,
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
                { start: 0, end: 100, density: 0.9416188402928953 },
                { start: 100, end: 300, density: 0.023748268355432412 },
                { start: 300, density: 0.034632891351672385 },
              ],
              percentiles: { p75: 15 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7169526683009613 },
                { start: 2500, end: 4000, density: 0.19140109372053551 },
                { start: 4000, density: 0.09164623797850327 },
              ],
              percentiles: { p75: 2823 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9548617305976806,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.019625334522747548,
                },
                { start: "0.25", density: 0.02551293487957181 },
              ],
              percentiles: { p75: "0.00" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6217502746246786 },
                { start: 1800, end: 3000, density: 0.24826071036250424 },
                { start: 3000, density: 0.12998901501281726 },
              ],
              percentiles: { p75: 2332 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yaracanada.ca/",
          normalizedUrl: "https://www.yaracanada.ca",
        },
      },
      extractedResults: {
        fcp: 2332,
        lcp: 2823,
        cls: "0.00",
        fid: 15,
      },
      timestamp: 1650642406950,
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
                  density: 0.9087109179067047,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.0561778966727972,
                },
                { start: "0.25", density: 0.03511118542049823 },
              ],
              percentiles: { p75: "0.00" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7342479674796748 },
                { start: 1800, end: 3000, density: 0.21087398373983737 },
                { start: 3000, density: 0.054878048780487854 },
              ],
              percentiles: { p75: 1849 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.965893849396436 },
                { start: 100, end: 300, density: 0.023950948457558914 },
                { start: 300, density: 0.010155202146005012 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8152025876744976 },
                { start: 2500, end: 4000, density: 0.13100102145045964 },
                { start: 4000, density: 0.05379639087504265 },
              ],
              percentiles: { p75: 2219 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.kr/",
          normalizedUrl: "https://www.yara.kr",
        },
      },
      extractedResults: {
        fcp: 1849,
        lcp: 2219,
        cls: "0.00",
        fid: 12,
      },
      timestamp: 1650642407273,
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
                { start: 0, end: 100, density: 0.9794958991798359 },
                { start: 100, end: 300, density: 0.012002400480096018 },
                { start: 300, density: 0.008501700340068023 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8977397739773978 },
                { start: 2500, end: 4000, density: 0.08145814581458148 },
                { start: 4000, density: 0.020802080208020695 },
              ],
              percentiles: { p75: 1841 },
            },
            cumulative_layout_shift: {
              histogram: [
                { start: "0.00", end: "0.10", density: 0.879 },
                { start: "0.10", end: "0.25", density: 0.1051 },
                { start: "0.25", density: 0.015900000000000004 },
              ],
              percentiles: { p75: "0.03" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8780121987801218 },
                { start: 1800, end: 3000, density: 0.1005899410058994 },
                { start: 3000, density: 0.021397860213978777 },
              ],
              percentiles: { p75: 1418 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.lt/",
          normalizedUrl: "https://www.yara.lt",
        },
      },
      extractedResults: {
        fcp: 1418,
        lcp: 1841,
        cls: "0.03",
        fid: 12,
      },
      timestamp: 1650642407604,
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
                  density: 0.9642946006469272,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.01393381438168699,
                },
                { start: "0.25", density: 0.02177158497138594 },
              ],
              percentiles: { p75: "0.00" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5542864315300609 },
                { start: 1800, end: 3000, density: 0.26183004895192646 },
                { start: 3000, density: 0.18388351951801263 },
              ],
              percentiles: { p75: 2625 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9463714322283373 },
                { start: 100, end: 300, density: 0.03660565723793677 },
                { start: 300, density: 0.01702291053372582 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6635408852213034 },
                { start: 2500, end: 4000, density: 0.21130282570642603 },
                { start: 4000, density: 0.1251562890722706 },
              ],
              percentiles: { p75: 2982 },
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
        lcp: 2982,
        cls: "0.00",
        fid: 13,
      },
      timestamp: 1650642407817,
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
                  density: 0.9335000000000001,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.059000000000000004,
                },
                { start: "0.25", density: 0.007499999999999998 },
              ],
              percentiles: { p75: "0.03" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8526147385261472 },
                { start: 1800, end: 3000, density: 0.11738826117388258 },
                { start: 3000, density: 0.029997000299970118 },
              ],
              percentiles: { p75: 1519 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9678032196780322 },
                { start: 100, end: 300, density: 0.021397860213978603 },
                { start: 300, density: 0.010798920107989187 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8496650334966505 },
                { start: 2500, end: 4000, density: 0.12263773622637737 },
                { start: 4000, density: 0.027697230276972223 },
              ],
              percentiles: { p75: 2090 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.lv/",
          normalizedUrl: "https://www.yara.lv",
        },
      },
      extractedResults: {
        fcp: 1519,
        lcp: 2090,
        cls: "0.03",
        fid: 12,
      },
      timestamp: 1650642408153,
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
                  density: 0.9543399638336347,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.014918625678119348,
                },
                { start: "0.25", density: 0.030741410488245937 },
              ],
              percentiles: { p75: "0.00" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.32657247037374715 },
                { start: 1800, end: 3000, density: 0.3413855970829542 },
                { start: 3000, density: 0.33204193254329867 },
              ],
              percentiles: { p75: 3445 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9642857142857143 },
                { start: 100, end: 300, density: 0.03255269320843091 },
                { start: 300, density: 0.0031615925058548007 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.4556098670001134 },
                { start: 2500, end: 4000, density: 0.33261339092872544 },
                { start: 4000, density: 0.21177674207116115 },
              ],
              percentiles: { p75: 3801 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.bo/",
          normalizedUrl: "https://www.yara.bo",
        },
      },
      extractedResults: {
        fcp: 3445,
        lcp: 3801,
        cls: "0.00",
        fid: 12,
      },
      timestamp: 1650642408371,
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
                { start: 0, end: 2500, density: 0.6111499999999991 },
                { start: 2500, end: 4000, density: 0.19284999999999985 },
                { start: 4000, density: 0.19600000000000112 },
              ],
              percentiles: { p75: 3659 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9258925892589259,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.0401040104010401,
                },
                { start: "0.25", density: 0.03400340034003403 },
              ],
              percentiles: { p75: "0.01" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5677296810956699 },
                { start: 1800, end: 3000, density: 0.1971408577426767 },
                { start: 3000, density: 0.23512946116165337 },
              ],
              percentiles: { p75: 3017 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9615038496150385 },
                { start: 100, end: 300, density: 0.031396860313968614 },
                { start: 300, density: 0.007099290070992901 },
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
        fcp: 3017,
        lcp: 3659,
        cls: "0.01",
        fid: 11,
      },
      timestamp: 1650642408698,
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
                  density: 0.8049999999999999,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.15360000000000001,
                },
                { start: "0.25", density: 0.04140000000000002 },
              ],
              percentiles: { p75: "0.05" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7371000000000001 },
                { start: 1800, end: 3000, density: 0.19600000000000006 },
                { start: 3000, density: 0.06689999999999988 },
              ],
              percentiles: { p75: 1838 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9702940588117623 },
                { start: 100, end: 300, density: 0.01840368073614723 },
                { start: 300, density: 0.011302260452090407 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7592222333300012 },
                { start: 2500, end: 4000, density: 0.16150154953513948 },
                { start: 4000, density: 0.07927621713485924 },
              ],
              percentiles: { p75: 2447 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.co.th/",
          normalizedUrl: "https://www.yara.co.th",
        },
      },
      extractedResults: {
        fcp: 1838,
        lcp: 2447,
        cls: "0.05",
        fid: 12,
      },
      timestamp: 1650642408925,
    },
    {
      url: "https://www.yara.co.za/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "https://www.yara.co.za" },
          metrics: {
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6424642464246421 },
                { start: 1800, end: 3000, density: 0.21212121212121193 },
                { start: 3000, density: 0.145414541454146 },
              ],
              percentiles: { p75: 2335 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9724 },
                { start: 100, end: 300, density: 0.022500000000000003 },
                { start: 300, density: 0.0050999999999999995 },
              ],
              percentiles: { p75: 10 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6660501849445157 },
                { start: 2500, end: 4000, density: 0.18279516145156435 },
                { start: 4000, density: 0.15115465360391994 },
              ],
              percentiles: { p75: 3108 },
            },
            cumulative_layout_shift: {
              histogram: [
                { start: "0.00", end: "0.10", density: 0.8475 },
                { start: "0.10", end: "0.25", density: 0.1163 },
                { start: "0.25", density: 0.03619999999999997 },
              ],
              percentiles: { p75: "0.05" },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.co.za/",
          normalizedUrl: "https://www.yara.co.za",
        },
      },
      extractedResults: {
        fcp: 2335,
        lcp: 3108,
        cls: "0.05",
        fid: 10,
      },
      timestamp: 1650642409147,
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
                { start: 0, end: 2500, density: 0.8246455379482899 },
                { start: 2500, end: 4000, density: 0.11919655268279118 },
                { start: 4000, density: 0.056157909368919 },
              ],
              percentiles: { p75: 2104 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9546332046332047,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.027302813017098727,
                },
                { start: "0.25", density: 0.018063982349696625 },
              ],
              percentiles: { p75: "0.01" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.799833541406575 },
                { start: 1800, end: 3000, density: 0.1281731169371619 },
                { start: 3000, density: 0.07199334165626316 },
              ],
              percentiles: { p75: 1592 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9379415431500207 },
                { start: 100, end: 300, density: 0.03435378861338135 },
                { start: 300, density: 0.02770466823659806 },
              ],
              percentiles: { p75: 15 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.de/",
          normalizedUrl: "https://www.yara.de",
        },
      },
      extractedResults: {
        fcp: 1592,
        lcp: 2104,
        cls: "0.01",
        fid: 15,
      },
      timestamp: 1650642409365,
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
                  density: 0.9548617305976806,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.019625334522747548,
                },
                { start: "0.25", density: 0.02551293487957181 },
              ],
              percentiles: { p75: "0.00" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6217502746246786 },
                { start: 1800, end: 3000, density: 0.24826071036250424 },
                { start: 3000, density: 0.12998901501281726 },
              ],
              percentiles: { p75: 2332 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9416188402928953 },
                { start: 100, end: 300, density: 0.023748268355432412 },
                { start: 300, density: 0.034632891351672385 },
              ],
              percentiles: { p75: 15 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7169526683009613 },
                { start: 2500, end: 4000, density: 0.19140109372053551 },
                { start: 4000, density: 0.09164623797850327 },
              ],
              percentiles: { p75: 2823 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yaracanada.ca/fr-ca/",
          normalizedUrl: "https://www.yaracanada.ca",
        },
      },
      extractedResults: {
        fcp: 2332,
        lcp: 2823,
        cls: "0.00",
        fid: 15,
      },
      timestamp: 1650642409697,
    },
    {
      url: "https://www.yara.hu/",
      deviceTargeted: "PHONE",
      results: {
        record: {
          key: { formFactor: "PHONE", origin: "https://www.yara.hu" },
          metrics: {
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8268387725280071 },
                { start: 1800, end: 3000, density: 0.13127131027764236 },
                { start: 3000, density: 0.04188991719435045 },
              ],
              percentiles: { p75: 1605 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9663638595629757 },
                { start: 100, end: 300, density: 0.02000982077093052 },
                { start: 300, density: 0.013626319666093787 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8594683575173765 },
                { start: 2500, end: 4000, density: 0.10882819168394108 },
                { start: 4000, density: 0.03170345079868253 },
              ],
              percentiles: { p75: 1976 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9757340451346761,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.01468090269352099,
                },
                { start: "0.25", density: 0.009585052171802961 },
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
        fcp: 1605,
        lcp: 1976,
        cls: "0.00",
        fid: 12,
      },
      timestamp: 1650642410033,
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
                  density: 0.8595859585958596,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.10111011101110111,
                },
                { start: "0.25", density: 0.03930393039303936 },
              ],
              percentiles: { p75: "0.04" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.4436887377475523 },
                { start: 1800, end: 3000, density: 0.24774954990998357 },
                { start: 3000, density: 0.30856171234246405 },
              ],
              percentiles: { p75: 3458 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9026708012403719 },
                { start: 100, end: 300, density: 0.0623186956086826 },
                { start: 300, density: 0.03501050315094545 },
              ],
              percentiles: { p75: 17 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.48209641928385844 },
                { start: 2500, end: 4000, density: 0.24434886977395565 },
                { start: 4000, density: 0.2735547109421859 },
              ],
              percentiles: { p75: 4285 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yarabrasil.com.br/",
          normalizedUrl: "https://www.yarabrasil.com.br",
        },
      },
      extractedResults: {
        fcp: 3458,
        lcp: 4285,
        cls: "0.04",
        fid: 17,
      },
      timestamp: 1650642410397,
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
                  density: 0.8735126487351265,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.07279272072792721,
                },
                { start: "0.25", density: 0.053694630536946265 },
              ],
              percentiles: { p75: "0.03" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.15943188637727507 },
                { start: 1800, end: 3000, density: 0.4329865973194628 },
                { start: 3000, density: 0.40758151630326206 },
              ],
              percentiles: { p75: 4211 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.30851914808519243 },
                { start: 2500, end: 4000, density: 0.3776122387761236 },
                { start: 4000, density: 0.313868613138684 },
              ],
              percentiles: { p75: 4845 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "http://www.yara.com.mm/",
          normalizedUrl: "http://www.yara.com.mm",
        },
      },
      extractedResults: { fcp: 4211, lcp: 4845, cls: "0.03" },
      timestamp: 1650642410654,
    },
  ],
};
