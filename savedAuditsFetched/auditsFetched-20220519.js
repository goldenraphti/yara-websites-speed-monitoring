export const audit24 = {
  date: "2022-05-19T13:14:45.263Z",
  dateParsedLocale: "19/05/2022",
  legacyAudit: true,
  legacyAuditType: 4,
  legacyAuditId: "19/05/2022-legacy-audit",
  audits: [
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
                  density: 0.9566043395660434,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.031296870312968704,
                },
                { start: "0.25", density: 0.012098790120987891 },
              ],
              percentiles: { p75: "0.01" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.667066706670667 },
                { start: 200, end: 500, density: 0.26202620262026205 },
                { start: 500, density: 0.07090709070907075 },
              ],
              percentiles: { p75: 236 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.5987 },
                { start: 800, end: 1800, density: 0.35980000000000006 },
                { start: 1800, density: 0.04149999999999994 },
              ],
              percentiles: { p75: 969 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8667466986794715 },
                { start: 1800, end: 3000, density: 0.10094037615046017 },
                { start: 3000, density: 0.032312925170068355 },
              ],
              percentiles: { p75: 1459 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9669 },
                { start: 100, end: 300, density: 0.0195 },
                { start: 300, density: 0.013599999999999968 },
              ],
              percentiles: { p75: 11 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8790499999999998 },
                { start: 2500, end: 4000, density: 0.08965000000000001 },
                { start: 4000, density: 0.03130000000000022 },
              ],
              percentiles: { p75: 1883 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.hu/",
          normalizedUrl: "https://www.yara.hu",
        },
      },
      extractedResults: {
        fcp: 1459,
        lcp: 1883,
        cls: "0.01",
        fid: 11,
      },
      timestamp: 1652965190757,
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
                { start: 0, end: 800, density: 0.2527203065134099 },
                { start: 800, end: 1800, density: 0.3846743295019156 },
                { start: 1800, density: 0.3626053639846745 },
              ],
              percentiles: { p75: 2152 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.43275034824330544 },
                { start: 1800, end: 3000, density: 0.320693391115926 },
                { start: 3000, density: 0.24655626064076852 },
              ],
              percentiles: { p75: 3008 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9157004073958006 },
                { start: 100, end: 300, density: 0.04779066123472266 },
                { start: 300, density: 0.036508931369476694 },
              ],
              percentiles: { p75: 18 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.5551363006314493 },
                { start: 2500, end: 4000, density: 0.27991683351301405 },
                { start: 4000, density: 0.16494686585553683 },
              ],
              percentiles: { p75: 3364 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9448973429951689,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.0297403381642512,
                },
                { start: "0.25", density: 0.025362318840579746 },
              ],
              percentiles: { p75: "0.01" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.4759865402263686 },
                { start: 200, end: 500, density: 0.34016518813092655 },
                { start: 500, density: 0.1838482716427047 },
              ],
              percentiles: { p75: 368 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.co.uk/",
          normalizedUrl: "https://www.yara.co.uk",
        },
      },
      extractedResults: {
        fcp: 3008,
        lcp: 3364,
        cls: "0.01",
        fid: 18,
      },
      timestamp: 1652965191401,
    },
    {
      url: "https://www.yara.it/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "https://www.yara.it" },
          metrics: {
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.562156215621562 },
                { start: 200, end: 500, density: 0.3265326532653266 },
                { start: 500, density: 0.11131113111311129 },
              ],
              percentiles: { p75: 288 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.7991799179917992 },
                { start: 800, end: 1800, density: 0.16461646164616464 },
                { start: 1800, density: 0.03620362036203617 },
              ],
              percentiles: { p75: 729 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8764 },
                { start: 1800, end: 3000, density: 0.08249999999999999 },
                { start: 3000, density: 0.04110000000000013 },
              ],
              percentiles: { p75: 1341 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9476947694769474 },
                { start: 100, end: 300, density: 0.029502950295029494 },
                { start: 300, density: 0.022802280228022987 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8854999999999998 },
                { start: 2500, end: 4000, density: 0.07750000000000001 },
                { start: 4000, density: 0.03700000000000027 },
              ],
              percentiles: { p75: 1744 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9368063193680632,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.035496450354964515,
                },
                { start: "0.25", density: 0.027697230276972302 },
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
        fcp: 1341,
        lcp: 1744,
        cls: "0.01",
        fid: 12,
      },
      timestamp: 1652965191939,
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
                  density: 0.9453204108201939,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.039490814407637784,
                },
                { start: "0.25", density: 0.015188774772168383 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.642846893384991 },
                { start: 200, end: 500, density: 0.2579997130147798 },
                { start: 500, density: 0.0991533936002292 },
              ],
              percentiles: { p75: 248 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.6915776986951366 },
                { start: 800, end: 1800, density: 0.280693950177936 },
                { start: 1800, density: 0.027728351126927467 },
              ],
              percentiles: { p75: 896 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8968451944240649 },
                { start: 1800, end: 3000, density: 0.08202494497432136 },
                { start: 3000, density: 0.021129860601613936 },
              ],
              percentiles: { p75: 1351 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9577422275882886 },
                { start: 100, end: 300, density: 0.020374283127075166 },
                { start: 300, density: 0.021883489284636123 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.9151876636601689 },
                { start: 2500, end: 4000, density: 0.06619144602851323 },
                { start: 4000, density: 0.01862089031131784 },
              ],
              percentiles: { p75: 1748 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.se/",
          normalizedUrl: "https://www.yara.se",
        },
      },
      extractedResults: {
        fcp: 1351,
        lcp: 1748,
        cls: "0.00",
        fid: 13,
      },
      timestamp: 1652965192333,
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
                { start: "0.00", end: "0.10", density: 0.9267 },
                { start: "0.10", end: "0.25", density: 0.0482 },
                { start: "0.25", density: 0.025099999999999997 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.526094781043791 },
                { start: 200, end: 500, density: 0.3578284343131373 },
                { start: 500, density: 0.11607678464307143 },
              ],
              percentiles: { p75: 320 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.23233030090972703 },
                { start: 800, end: 1800, density: 0.5197440767769669 },
                { start: 1800, density: 0.2479256223133061 },
              ],
              percentiles: { p75: 1832 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.3740251949610101 },
                { start: 1800, end: 3000, density: 0.32513497300540095 },
                { start: 3000, density: 0.300839832033589 },
              ],
              percentiles: { p75: 3373 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9681 },
                { start: 100, end: 300, density: 0.0232 },
                { start: 300, density: 0.008700000000000003 },
              ],
              percentiles: { p75: 11 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.48384999999999967 },
                { start: 2500, end: 4000, density: 0.30034999999999984 },
                { start: 4000, density: 0.21580000000000044 },
              ],
              percentiles: { p75: 3859 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.bo/",
          normalizedUrl: "https://www.yara.bo",
        },
      },
      extractedResults: {
        fcp: 3373,
        lcp: 3859,
        cls: "0.00",
        fid: 11,
      },
      timestamp: 1652965192861,
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
                { start: 0, end: 200, density: 0.4200000000000004 },
                { start: 200, end: 500, density: 0.44831168831168855 },
                { start: 500, density: 0.13168831168831108 },
              ],
              percentiles: { p75: 359 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.6509861407249469 },
                { start: 800, end: 1800, density: 0.3247601279317698 },
                { start: 1800, density: 0.024253731343283357 },
              ],
              percentiles: { p75: 917 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8853229488384584 },
                { start: 1800, end: 3000, density: 0.09453471196454948 },
                { start: 3000, density: 0.020142339196992022 },
              ],
              percentiles: { p75: 1391 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9568497683653209 },
                { start: 100, end: 300, density: 0.028855062872270014 },
                { start: 300, density: 0.014295168762409043 },
              ],
              percentiles: { p75: 15 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8854666666666666 },
                { start: 2500, end: 4000, density: 0.09359999999999999 },
                { start: 4000, density: 0.02093333333333347 },
              ],
              percentiles: { p75: 1856 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9402037306522028,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.04392115359174494,
                },
                { start: "0.25", density: 0.015875115756052376 },
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
        fcp: 1391,
        lcp: 1856,
        cls: "0.00",
        fid: 15,
      },
      timestamp: 1652965193208,
    },
    {
      url: "https://www.yara.com.gt/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "https://www.yara.com.gt" },
          metrics: {
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9231923192319231,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.0447044704470447,
                },
                { start: "0.25", density: 0.03210321032103211 },
              ],
              percentiles: { p75: "0.01" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6114222844568904 },
                { start: 200, end: 500, density: 0.2607521504300856 },
                { start: 500, density: 0.12782556511302387 },
              ],
              percentiles: { p75: 293 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.5323467653234677 },
                { start: 800, end: 1800, density: 0.3706629337066294 },
                { start: 1800, density: 0.09699030096990303 },
              ],
              percentiles: { p75: 1156 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7136286371362852 },
                { start: 1800, end: 3000, density: 0.18188181181881785 },
                { start: 3000, density: 0.10448955104489693 },
              ],
              percentiles: { p75: 1963 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9651139544182326 },
                { start: 100, end: 300, density: 0.026489404238304676 },
                { start: 300, density: 0.008396641343462635 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7586000000000002 },
                { start: 2500, end: 4000, density: 0.14480000000000004 },
                { start: 4000, density: 0.09659999999999981 },
              ],
              percentiles: { p75: 2471 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.gt/",
          normalizedUrl: "https://www.yara.com.gt",
        },
      },
      extractedResults: {
        fcp: 1963,
        lcp: 2471,
        cls: "0.01",
        fid: 12,
      },
      timestamp: 1652965193753,
    },
    {
      url: "https://www.yara.co.za/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "https://www.yara.co.za" },
          metrics: {
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7258225822582242 },
                { start: 2500, end: 4000, density: 0.14356435643564333 },
                { start: 4000, density: 0.13061306130613246 },
              ],
              percentiles: { p75: 2791 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8163816381638164,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.11931193119311932,
                },
                { start: "0.25", density: 0.06430643064306434 },
              ],
              percentiles: { p75: "0.05" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.7094709470947098 },
                { start: 200, end: 500, density: 0.22882288228822895 },
                { start: 500, density: 0.061706170617061316 },
              ],
              percentiles: { p75: 216 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.49105268419474135 },
                { start: 800, end: 1800, density: 0.3940817754673596 },
                { start: 1800, density: 0.114865540337899 },
              ],
              percentiles: { p75: 1315 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6995699569956993 },
                { start: 1800, end: 3000, density: 0.17571757175717562 },
                { start: 3000, density: 0.12471247124712508 },
              ],
              percentiles: { p75: 2073 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9751950390078016 },
                { start: 100, end: 300, density: 0.018003600720144026 },
                { start: 300, density: 0.006801360272054413 },
              ],
              percentiles: { p75: 11 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.co.za/",
          normalizedUrl: "https://www.yara.co.za",
        },
      },
      extractedResults: {
        fcp: 2073,
        lcp: 2791,
        cls: "0.05",
        fid: 11,
      },
      timestamp: 1652965194111,
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
                  density: 0.9320218579234972,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.04327868852459016,
                },
                { start: "0.25", density: 0.024699453551912567 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.48622704507512465 },
                { start: 200, end: 500, density: 0.34390651085141866 },
                { start: 500, density: 0.16986644407345663 },
              ],
              percentiles: { p75: 375 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.6311804008908686 },
                { start: 800, end: 1800, density: 0.3253897550111359 },
                { start: 1800, density: 0.04342984409799552 },
              ],
              percentiles: { p75: 941 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8544801257579161 },
                { start: 1800, end: 3000, density: 0.09970806198068718 },
                { start: 3000, density: 0.04581181226139676 },
              ],
              percentiles: { p75: 1491 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9429794906468335 },
                { start: 100, end: 300, density: 0.03560964615731351 },
                { start: 300, density: 0.02141086319585294 },
              ],
              percentiles: { p75: 14 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.880080844374579 },
                { start: 2500, end: 4000, density: 0.08847967662250171 },
                { start: 4000, density: 0.03143947900291938 },
              ],
              percentiles: { p75: 1939 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.dk/",
          normalizedUrl: "https://www.yara.dk",
        },
      },
      extractedResults: {
        fcp: 1491,
        lcp: 1939,
        cls: "0.00",
        fid: 14,
      },
      timestamp: 1652965194472,
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
                  density: 0.934322986954566,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.05802968960863698,
                },
                { start: "0.25", density: 0.0076473234367971255 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6106254203093474 },
                { start: 200, end: 500, density: 0.3115893297466935 },
                { start: 500, density: 0.07778524994395905 },
              ],
              percentiles: { p75: 261 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.5643407340280927 },
                { start: 800, end: 1800, density: 0.3878568192115996 },
                { start: 1800, density: 0.047802446760307676 },
              ],
              percentiles: { p75: 1022 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8530538652242501 },
                { start: 1800, end: 3000, density: 0.10705431597926522 },
                { start: 3000, density: 0.03989181879648486 },
              ],
              percentiles: { p75: 1518 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.958025253099761 },
                { start: 100, end: 300, density: 0.022750540325332726 },
                { start: 300, density: 0.019224206574906286 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.862322114298622 },
                { start: 2500, end: 4000, density: 0.10187485882087195 },
                { start: 4000, density: 0.03580302688050605 },
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
      extractedResults: {
        fcp: 1518,
        lcp: 1960,
        cls: "0.00",
        fid: 12,
      },
      timestamp: 1652965194976,
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
                  density: 0.9316068393160684,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.0541945805419458,
                },
                { start: "0.25", density: 0.014198580141985795 },
              ],
              percentiles: { p75: "0.01" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6521347865213478 },
                { start: 200, end: 500, density: 0.30546945305469453 },
                { start: 500, density: 0.04239576042395758 },
              ],
              percentiles: { p75: 246 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.41470000000000007 },
                { start: 800, end: 1800, density: 0.5018000000000001 },
                { start: 1800, density: 0.08349999999999978 },
              ],
              percentiles: { p75: 1176 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6554999999999994 },
                { start: 1800, end: 3000, density: 0.24239999999999978 },
                { start: 3000, density: 0.10210000000000077 },
              ],
              percentiles: { p75: 2120 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9858014198580143 },
                { start: 100, end: 300, density: 0.009799020097990203 },
                { start: 300, density: 0.004399560043995601 },
              ],
              percentiles: { p75: 11 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7383976795359076 },
                { start: 2500, end: 4000, density: 0.1501800360072015 },
                { start: 4000, density: 0.1114222844568909 },
              ],
              percentiles: { p75: 2646 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.pa/",
          normalizedUrl: "https://www.yara.com.pa",
        },
      },
      extractedResults: {
        fcp: 2120,
        lcp: 2646,
        cls: "0.01",
        fid: 11,
      },
      timestamp: 1652965195555,
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
                { start: 0, end: 800, density: 0.4575169932027195 },
                { start: 800, end: 1800, density: 0.3652538984406242 },
                { start: 1800, density: 0.17722910835665642 },
              ],
              percentiles: { p75: 1497 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6332366763323658 },
                { start: 1800, end: 3000, density: 0.2242775722427754 },
                { start: 3000, density: 0.1424857514248588 },
              ],
              percentiles: { p75: 2340 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9461946194619462 },
                { start: 100, end: 300, density: 0.0349034903490349 },
                { start: 300, density: 0.01890189018901901 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.725522552255225 },
                { start: 2500, end: 4000, density: 0.18676867686768664 },
                { start: 4000, density: 0.08770877087708831 },
              ],
              percentiles: { p75: 2655 },
            },
            cumulative_layout_shift: {
              histogram: [
                { start: "0.00", end: "0.10", density: 0.9482 },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.03480000000000001,
                },
                { start: "0.25", density: 0.017000000000000015 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6313894168250473 },
                { start: 200, end: 500, density: 0.26267880364109214 },
                { start: 500, density: 0.10593177953386046 },
              ],
              percentiles: { p75: 266 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.ru/",
          normalizedUrl: "https://www.yara.ru",
        },
      },
      extractedResults: {
        fcp: 2340,
        lcp: 2655,
        cls: "0.00",
        fid: 12,
      },
      timestamp: 1652965195988,
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
                { start: 0, end: 200, density: 0.5521306643743094 },
                { start: 200, end: 500, density: 0.35073068893528186 },
                { start: 500, density: 0.09713864669040867 },
              ],
              percentiles: { p75: 280 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.6993024414549078 },
                { start: 800, end: 1800, density: 0.24900348779272546 },
                { start: 1800, density: 0.051694070752366636 },
              ],
              percentiles: { p75: 886 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8254840724547157 },
                { start: 1800, end: 3000, density: 0.11267957526545905 },
                { start: 3000, density: 0.061836352279825195 },
              ],
              percentiles: { p75: 1518 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9478239056816756 },
                { start: 100, end: 300, density: 0.03574564154019818 },
                { start: 300, density: 0.016430452778126187 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.851381768163061 },
                { start: 2500, end: 4000, density: 0.10260097536576215 },
                { start: 4000, density: 0.04601725647117694 },
              ],
              percentiles: { p75: 1948 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9780151533970934,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.00857036392994659,
                },
                { start: "0.25", density: 0.013414482672959879 },
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
        fcp: 1518,
        lcp: 1948,
        cls: "0.00",
        fid: 13,
      },
      timestamp: 1652965196338,
    },
    {
      url: "https://www.yara.my/",
      deviceTargeted: "PHONE",
      results: {
        record: {
          key: { formFactor: "PHONE", origin: "https://www.yara.my" },
          metrics: {
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.7376315471150355 },
                { start: 200, end: 500, density: 0.21628160154832463 },
                { start: 500, density: 0.04608685133663977 },
              ],
              percentiles: { p75: 205 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.4906462585034012 },
                { start: 800, end: 1800, density: 0.39139941690962093 },
                { start: 1800, density: 0.1179543245869779 },
              ],
              percentiles: { p75: 1256 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7460717284394862 },
                { start: 1800, end: 3000, density: 0.148254767902123 },
                { start: 3000, density: 0.10567350365839069 },
              ],
              percentiles: { p75: 1829 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9737725295214419 },
                { start: 100, end: 300, density: 0.021628340584213795 },
                { start: 300, density: 0.004599129894344316 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8018856593802535 },
                { start: 2500, end: 4000, density: 0.1182440547681959 },
                { start: 4000, density: 0.07987028585155063 },
              ],
              percentiles: { p75: 2197 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8514756840721711,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.104074560879436,
                },
                { start: "0.25", density: 0.04444975504839286 },
              ],
              percentiles: { p75: "0.01" },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.my/",
          normalizedUrl: "https://www.yara.my",
        },
      },
      extractedResults: {
        fcp: 1829,
        lcp: 2197,
        cls: "0.01",
        fid: 13,
      },
      timestamp: 1652965196935,
    },
    {
      url: "https://www.yara.pl/",
      deviceTargeted: "PHONE",
      results: {
        record: {
          key: { formFactor: "PHONE", origin: "https://www.yara.pl" },
          metrics: {
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8079377095274144 },
                { start: 1800, end: 3000, density: 0.13820698604952958 },
                { start: 3000, density: 0.05385530442305611 },
              ],
              percentiles: { p75: 1623 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9400962938080842 },
                { start: 100, end: 300, density: 0.03941327958795207 },
                { start: 300, density: 0.020490426603963604 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8605325316727503 },
                { start: 2500, end: 4000, density: 0.09813184453510837 },
                { start: 4000, density: 0.04133562379214114 },
              ],
              percentiles: { p75: 1986 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9087473002159827,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.0806695464362851,
                },
                { start: "0.25", density: 0.010583153347732173 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5206475057813019 },
                { start: 200, end: 500, density: 0.35932166061006526 },
                { start: 500, density: 0.12003083360863288 },
              ],
              percentiles: { p75: 313 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.6759426447158791 },
                { start: 800, end: 1800, density: 0.2794476898566118 },
                { start: 1800, density: 0.04460966542750906 },
              ],
              percentiles: { p75: 908 },
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
        lcp: 1986,
        cls: "0.00",
        fid: 13,
      },
      timestamp: 1652965197485,
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
                { start: 0, end: 200, density: 0.6044249176212145 },
                { start: 200, end: 500, density: 0.2717715361682096 },
                { start: 500, density: 0.12380354621057585 },
              ],
              percentiles: { p75: 275 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.8405463221984532 },
                { start: 800, end: 1800, density: 0.1464538423564259 },
                { start: 1800, density: 0.012999835445120964 },
              ],
              percentiles: { p75: 706 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.9354624085163007 },
                { start: 1800, end: 3000, density: 0.04707252162341984 },
                { start: 3000, density: 0.017465069860279517 },
              ],
              percentiles: { p75: 1223 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9429714857428715 },
                { start: 100, end: 300, density: 0.02984825746206437 },
                { start: 300, density: 0.027180256795064122 },
              ],
              percentiles: { p75: 14 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.9326812428078252 },
                { start: 2500, end: 4000, density: 0.052359033371691614 },
                { start: 4000, density: 0.014959723820483337 },
              ],
              percentiles: { p75: 1598 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9436871145731904,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.03083414475819539,
                },
                { start: "0.25", density: 0.02547874066861408 },
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
        fcp: 1223,
        lcp: 1598,
        cls: "0.00",
        fid: 14,
      },
      timestamp: 1652965198048,
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
                  density: 0.9622126996493962,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.022399688352162057,
                },
                { start: "0.25", density: 0.01538761199844177 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5141125213108555 },
                { start: 200, end: 500, density: 0.3246827050577768 },
                { start: 500, density: 0.16120477363136781 },
              ],
              percentiles: { p75: 330 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.6824644549763034 },
                { start: 800, end: 1800, density: 0.2817930489731437 },
                { start: 1800, density: 0.035742496050552824 },
              ],
              percentiles: { p75: 918 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8681755012904507 },
                { start: 1800, end: 3000, density: 0.09688306531665675 },
                { start: 3000, density: 0.03494143339289265 },
              ],
              percentiles: { p75: 1440 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9343146274149036 },
                { start: 100, end: 300, density: 0.03091076356945723 },
                { start: 300, density: 0.03477460901563918 },
              ],
              percentiles: { p75: 14 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8707631318136771 },
                { start: 2500, end: 4000, density: 0.09593657086223988 },
                { start: 4000, density: 0.033300297324083 },
              ],
              percentiles: { p75: 1980 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.nl/",
          normalizedUrl: "https://www.yara.nl",
        },
      },
      extractedResults: {
        fcp: 1440,
        lcp: 1980,
        cls: "0.00",
        fid: 14,
      },
      timestamp: 1652965198548,
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
                  density: 0.8894000000000001,
                },
                { start: "0.10", end: "0.25", density: 0.0971 },
                { start: "0.25", density: 0.013500000000000002 },
              ],
              percentiles: { p75: "0.01" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6797000000000002 },
                { start: 200, end: 500, density: 0.26560000000000006 },
                { start: 500, density: 0.05469999999999975 },
              ],
              percentiles: { p75: 234 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.7068706870687068 },
                { start: 800, end: 1800, density: 0.26652665266526654 },
                { start: 1800, density: 0.02660266026602661 },
              ],
              percentiles: { p75: 852 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8970897089708972 },
                { start: 1800, end: 3000, density: 0.08090809080908087 },
                { start: 3000, density: 0.02200220022002192 },
              ],
              percentiles: { p75: 1344 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9818036392721455 },
                { start: 100, end: 300, density: 0.013297340531893622 },
                { start: 300, density: 0.004899020195960818 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.9083908390839085 },
                { start: 2500, end: 4000, density: 0.0726072607260726 },
                { start: 4000, density: 0.019001900190018902 },
              ],
              percentiles: { p75: 1736 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.lt/",
          normalizedUrl: "https://www.yara.lt",
        },
      },
      extractedResults: {
        fcp: 1344,
        lcp: 1736,
        cls: "0.01",
        fid: 12,
      },
      timestamp: 1652965199193,
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
                  density: 0.8162000000000001,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.10250000000000001,
                },
                { start: "0.25", density: 0.08129999999999991 },
              ],
              percentiles: { p75: "0.06" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.63023697630237 },
                { start: 200, end: 500, density: 0.2259774022597741 },
                { start: 500, density: 0.14378562143785587 },
              ],
              percentiles: { p75: 297 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.41958391678335694 },
                { start: 800, end: 1800, density: 0.4210842168433689 },
                { start: 1800, density: 0.15933186637327407 },
              ],
              percentiles: { p75: 1436 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6352364763523645 },
                { start: 1800, end: 3000, density: 0.2166783321667832 },
                { start: 3000, density: 0.14808519148085225 },
              ],
              percentiles: { p75: 2286 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9165833166633327 },
                { start: 100, end: 300, density: 0.03600720144028806 },
                { start: 300, density: 0.04740948189637915 },
              ],
              percentiles: { p75: 14 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6803860772154431 },
                { start: 2500, end: 4000, density: 0.17128425685137022 },
                { start: 4000, density: 0.14832966593318672 },
              ],
              percentiles: { p75: 2943 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.us/",
          normalizedUrl: "https://www.yara.us",
        },
      },
      extractedResults: {
        fcp: 2286,
        lcp: 2943,
        cls: "0.06",
        fid: 14,
      },
      timestamp: 1652965199604,
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
                { start: 0, end: 100, density: 0.9617195242814668 },
                { start: 100, end: 300, density: 0.022918731417244792 },
                { start: 300, density: 0.015361744301288375 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8868394815553338 },
                { start: 2500, end: 4000, density: 0.0843718843469591 },
                { start: 4000, density: 0.028788634097707183 },
              ],
              percentiles: { p75: 1852 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9775851393188854,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.01325077399380805,
                },
                { start: "0.25", density: 0.009164086687306497 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6176937156802931 },
                { start: 200, end: 500, density: 0.30408785845027464 },
                { start: 500, density: 0.0782184258694323 },
              ],
              percentiles: { p75: 255 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.5741609081934848 },
                { start: 800, end: 1800, density: 0.3804294175715696 },
                { start: 1800, density: 0.045409674234945664 },
              ],
              percentiles: { p75: 996 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.856043683296103 },
                { start: 1800, end: 3000, density: 0.10945644080416972 },
                { start: 3000, density: 0.034499875899727216 },
              ],
              percentiles: { p75: 1504 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.hu/",
          normalizedUrl: "https://www.yara.hu",
        },
      },
      extractedResults: {
        fcp: 1504,
        lcp: 1852,
        cls: "0.00",
        fid: 12,
      },
      timestamp: 1652965200003,
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
                { start: 0, end: 2500, density: 0.9130413041304127 },
                { start: 2500, end: 4000, density: 0.06765676567656762 },
                { start: 4000, density: 0.019301930193019533 },
              ],
              percentiles: { p75: 1736 },
            },
            cumulative_layout_shift: {
              histogram: [
                { start: "0.00", end: "0.10", density: 0.8584 },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.11080000000000001,
                },
                { start: "0.25", density: 0.030799999999999987 },
              ],
              percentiles: { p75: "0.05" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.7137000000000006 },
                { start: 200, end: 500, density: 0.20520000000000013 },
                { start: 500, density: 0.08109999999999928 },
              ],
              percentiles: { p75: 218 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.7222166649994999 },
                { start: 800, end: 1800, density: 0.25307592277683305 },
                { start: 1800, density: 0.024707412223667125 },
              ],
              percentiles: { p75: 843 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.9092818563712741 },
                { start: 1800, end: 3000, density: 0.07101420284056809 },
                { start: 3000, density: 0.0197039407881577 },
              ],
              percentiles: { p75: 1265 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9677935587117422 },
                { start: 100, end: 300, density: 0.015503100620124026 },
                { start: 300, density: 0.01670334066813379 },
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
        fcp: 1265,
        lcp: 1736,
        cls: "0.05",
        fid: 11,
      },
      timestamp: 1652965200599,
    },
    {
      url: "https://www.yara.lt/",
      deviceTargeted: "PHONE",
      results: {
        record: {
          key: { formFactor: "PHONE", origin: "https://www.yara.lt" },
          metrics: {
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9798465590289706 },
                { start: 100, end: 300, density: 0.014886064353601283 },
                { start: 300, density: 0.005267376617428153 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.9146841206602162 },
                { start: 2500, end: 4000, density: 0.06960728514513373 },
                { start: 4000, density: 0.015708594194650073 },
              ],
              percentiles: { p75: 1701 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9085026677261892,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.08025882620047678,
                },
                { start: "0.25", density: 0.01123850607333408 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6475160527205139 },
                { start: 200, end: 500, density: 0.2939055987383125 },
                { start: 500, density: 0.05857834854117353 },
              ],
              percentiles: { p75: 243 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.6916695471828552 },
                { start: 800, end: 1800, density: 0.28021661481737525 },
                { start: 1800, density: 0.02811383799976958 },
              ],
              percentiles: { p75: 864 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8949044585987262 },
                { start: 1800, end: 3000, density: 0.08450864422202002 },
                { start: 3000, density: 0.02058689717925381 },
              ],
              percentiles: { p75: 1350 },
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
        lcp: 1701,
        cls: "0.00",
        fid: 13,
      },
      timestamp: 1652965200938,
    },
    {
      url: "https://www.yara.lv/",
      deviceTargeted: "PHONE",
      results: {
        record: {
          key: { formFactor: "PHONE", origin: "https://www.yara.lv" },
          metrics: {
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5367575462512172 },
                { start: 200, end: 500, density: 0.357473222979552 },
                { start: 500, density: 0.10576923076923093 },
              ],
              percentiles: { p75: 290 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.5860737419033384 },
                { start: 800, end: 1800, density: 0.36883408071748874 },
                { start: 1800, density: 0.04509217737917287 },
              ],
              percentiles: { p75: 1045 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8209362970321618 },
                { start: 1800, end: 3000, density: 0.14094126412517072 },
                { start: 3000, density: 0.03812243884266742 },
              ],
              percentiles: { p75: 1590 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9623484365028717 },
                { start: 100, end: 300, density: 0.024760689215060624 },
                { start: 300, density: 0.012890874282067677 },
              ],
              percentiles: { p75: 14 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8590491559086397 },
                { start: 2500, end: 4000, density: 0.11115938430983112 },
                { start: 4000, density: 0.029791459781529174 },
              ],
              percentiles: { p75: 2021 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9443072363546554,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.04470239565324771,
                },
                { start: "0.25", density: 0.010990367992096827 },
              ],
              percentiles: { p75: "0.00" },
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
        lcp: 2021,
        cls: "0.00",
        fid: 14,
      },
      timestamp: 1652965201443,
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
                  density: 0.9352654709585462,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.02304311675971018,
                },
                { start: "0.25", density: 0.04169141228174365 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5741540676745867 },
                { start: 200, end: 500, density: 0.32841372690184806 },
                { start: 500, density: 0.09743220542356534 },
              ],
              percentiles: { p75: 281 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.4363201911589007 },
                { start: 800, end: 1800, density: 0.4221027479091995 },
                { start: 1800, density: 0.1415770609318997 },
              ],
              percentiles: { p75: 1380 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6083991385498909 },
                { start: 1800, end: 3000, density: 0.22218234027279204 },
                { start: 3000, density: 0.16941852117731704 },
              ],
              percentiles: { p75: 2446 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9455030950358058 },
                { start: 100, end: 300, density: 0.032406845490957646 },
                { start: 300, density: 0.022090059473236723 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6979066985645923 },
                { start: 2500, end: 4000, density: 0.16860047846889922 },
                { start: 4000, density: 0.1334928229665085 },
              ],
              percentiles: { p75: 2850 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.co/",
          normalizedUrl: "https://www.yara.com.co",
        },
      },
      extractedResults: {
        fcp: 2446,
        lcp: 2850,
        cls: "0.00",
        fid: 13,
      },
      timestamp: 1652965202008,
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
                  density: 0.934489643124532,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.03681058148240579,
                },
                { start: "0.25", density: 0.02869977539306215 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.4862509206972746 },
                { start: 200, end: 500, density: 0.3831328259268353 },
                { start: 500, density: 0.13061625337589003 },
              ],
              percentiles: { p75: 315 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.783729410285427 },
                { start: 800, end: 1800, density: 0.1755312460706652 },
                { start: 1800, density: 0.040739343643907806 },
              ],
              percentiles: { p75: 753 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8665663406069722 },
                { start: 1800, end: 3000, density: 0.08841234010534234 },
                { start: 3000, density: 0.04502131928768543 },
              ],
              percentiles: { p75: 1387 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9368791650949325 },
                { start: 100, end: 300, density: 0.03558405633094428 },
                { start: 300, density: 0.027536778574123164 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8834482758620688 },
                { start: 2500, end: 4000, density: 0.07893416927899682 },
                { start: 4000, density: 0.03761755485893445 },
              ],
              percentiles: { p75: 1752 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.it/",
          normalizedUrl: "https://www.yara.it",
        },
      },
      extractedResults: {
        fcp: 1387,
        lcp: 1752,
        cls: "0.00",
        fid: 13,
      },
      timestamp: 1652965202655,
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
                  density: 0.9408083441981747,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.029595827900912645,
                },
                { start: "0.25", density: 0.029595827900912672 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.47293666026871406 },
                { start: 200, end: 500, density: 0.3238643634037109 },
                { start: 500, density: 0.20319897632757508 },
              ],
              percentiles: { p75: 375 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.2780066445182726 },
                { start: 800, end: 1800, density: 0.4518272425249173 },
                { start: 1800, density: 0.2701661129568101 },
              ],
              percentiles: { p75: 1894 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.48268052224886765 },
                { start: 1800, end: 3000, density: 0.372501998401279 },
                { start: 3000, density: 0.14481747934985337 },
              ],
              percentiles: { p75: 2635 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9118819776714514 },
                { start: 100, end: 300, density: 0.03282828282828283 },
                { start: 300, density: 0.05528973950026578 },
              ],
              percentiles: { p75: 15 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6073457524111506 },
                { start: 2500, end: 4000, density: 0.29594398203197264 },
                { start: 4000, density: 0.09671026555687671 },
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
        fcp: 2635,
        lcp: 3068,
        cls: "0.00",
        fid: 15,
      },
      timestamp: 1652965203248,
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
                { start: 0, end: 200, density: 0.5544772827525365 },
                { start: 200, end: 500, density: 0.33899426554918394 },
                { start: 500, density: 0.10652845169827943 },
              ],
              percentiles: { p75: 308 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.41208246058868914 },
                { start: 800, end: 1800, density: 0.3868371734097673 },
                { start: 1800, density: 0.20108036600154372 },
              ],
              percentiles: { p75: 1705 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.527805417357656 },
                { start: 1800, end: 3000, density: 0.35511332227750114 },
                { start: 3000, density: 0.11708126036484288 },
              ],
              percentiles: { p75: 2391 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9239081996434936 },
                { start: 100, end: 300, density: 0.054032976827094466 },
                { start: 300, density: 0.0220588235294119 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.604665336879432 },
                { start: 2500, end: 4000, density: 0.2919437056737586 },
                { start: 4000, density: 0.10339095744680947 },
              ],
              percentiles: { p75: 3080 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9763300519853998,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.011724366773586993,
                },
                { start: "0.25", density: 0.011945581241013163 },
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
        fcp: 2391,
        lcp: 3080,
        cls: "0.00",
        fid: 13,
      },
      timestamp: 1652965205124,
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
                { start: 0, end: 100, density: 0.9650598128627265 },
                { start: 100, end: 300, density: 0.02558332346322397 },
                { start: 300, density: 0.009356863674049512 },
              ],
              percentiles: { p75: 11 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.4805779805779807 },
                { start: 2500, end: 4000, density: 0.31408681408681427 },
                { start: 4000, density: 0.20533520533520505 },
              ],
              percentiles: { p75: 3805 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9602503186927802,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.01622435971723259,
                },
                { start: "0.25", density: 0.023525321589987262 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.48068521499195216 },
                { start: 200, end: 500, density: 0.3958381237065991 },
                { start: 500, density: 0.12347666130144865 },
              ],
              percentiles: { p75: 334 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.22637772340673432 },
                { start: 800, end: 1800, density: 0.5135733426540837 },
                { start: 1800, density: 0.26004893393918194 },
              ],
              percentiles: { p75: 1868 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.35749357025952877 },
                { start: 1800, end: 3000, density: 0.3293196165536601 },
                { start: 3000, density: 0.3131868131868111 },
              ],
              percentiles: { p75: 3456 },
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
        lcp: 3805,
        cls: "0.00",
        fid: 11,
      },
      timestamp: 1652965205813,
    },
    {
      url: "https://www.yara.com.pa/",
      deviceTargeted: "PHONE",
      results: {
        record: {
          key: { formFactor: "PHONE", origin: "https://www.yara.com.pa" },
          metrics: {
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7591502431533155 },
                { start: 2500, end: 4000, density: 0.1566419247504481 },
                { start: 4000, density: 0.08420783209623656 },
              ],
              percentiles: { p75: 2497 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9681650324716669,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.01910098051699987,
                },
                { start: "0.25", density: 0.01273398701133324 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5891617063492064 },
                { start: 200, end: 500, density: 0.365203373015873 },
                { start: 500, density: 0.04563492063492069 },
              ],
              percentiles: { p75: 268 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.3860030706243603 },
                { start: 800, end: 1800, density: 0.5240532241555785 },
                { start: 1800, density: 0.08994370522006107 },
              ],
              percentiles: { p75: 1178 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6290508517996667 },
                { start: 1800, end: 3000, density: 0.26335340079415903 },
                { start: 3000, density: 0.10759574740617436 },
              ],
              percentiles: { p75: 2132 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9802035410567406 },
                { start: 100, end: 300, density: 0.013662344904502997 },
                { start: 300, density: 0.006134114038756446 },
              ],
              percentiles: { p75: 13 },
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
      timestamp: 1652965208724,
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
                { start: 0, end: 1800, density: 0.8924569827931171 },
                { start: 1800, end: 3000, density: 0.07683073229291718 },
                { start: 3000, density: 0.030712284913965708 },
              ],
              percentiles: { p75: 1314 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9739999999999999 },
                { start: 100, end: 300, density: 0.016499999999999997 },
                { start: 300, density: 0.009499999999999948 },
              ],
              percentiles: { p75: 9 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8954999999999999 },
                { start: 2500, end: 4000, density: 0.07880000000000001 },
                { start: 4000, density: 0.025700000000000164 },
              ],
              percentiles: { p75: 1794 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8162183781621838,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.15898410158984103,
                },
                { start: "0.25", density: 0.02479752024797521 },
              ],
              percentiles: { p75: "0.08" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.7361055577768892 },
                { start: 200, end: 500, density: 0.1776289484206317 },
                { start: 500, density: 0.08626549380247915 },
              ],
              percentiles: { p75: 209 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.714185744276717 },
                { start: 800, end: 1800, density: 0.24472658202539238 },
                { start: 1800, density: 0.04108767369789054 },
              ],
              percentiles: { p75: 844 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.dk/",
          normalizedUrl: "https://www.yara.dk",
        },
      },
      extractedResults: { fcp: 1314, lcp: 1794, cls: "0.08", fid: 9 },
      timestamp: 1652965209316,
    },
    {
      url: "https://www.yara.no/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "https://www.yara.no" },
          metrics: {
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.8576715343068614 },
                { start: 800, end: 1800, density: 0.12932586517303463 },
                { start: 1800, density: 0.013002600520104043 },
              ],
              percentiles: { p75: 671 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.945389077815563 },
                { start: 1800, end: 3000, density: 0.04100820164032806 },
                { start: 3000, density: 0.01360272054410885 },
              ],
              percentiles: { p75: 1126 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9632816408204102 },
                { start: 100, end: 300, density: 0.01950975487743872 },
                { start: 300, density: 0.01720860430215109 },
              ],
              percentiles: { p75: 11 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.9407381476295259 },
                { start: 2500, end: 4000, density: 0.046759351870374076 },
                { start: 4000, density: 0.012502500500100024 },
              ],
              percentiles: { p75: 1548 },
            },
            cumulative_layout_shift: {
              histogram: [
                { start: "0.00", end: "0.10", density: 0.8346 },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.12040000000000001,
                },
                { start: "0.25", density: 0.045000000000000005 },
              ],
              percentiles: { p75: "0.05" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.7248999999999999 },
                { start: 200, end: 500, density: 0.18909999999999996 },
                { start: 500, density: 0.08600000000000012 },
              ],
              percentiles: { p75: 214 },
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
        lcp: 1548,
        cls: "0.05",
        fid: 11,
      },
      timestamp: 1652965209630,
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
                { start: 0, end: 800, density: 0.7181414417492312 },
                { start: 800, end: 1800, density: 0.2519644687393236 },
                { start: 1800, density: 0.029894089511445163 },
              ],
              percentiles: { p75: 852 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8956402334363199 },
                { start: 1800, end: 3000, density: 0.08650875386199794 },
                { start: 3000, density: 0.017851012701682118 },
              ],
              percentiles: { p75: 1368 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.956993006993007 },
                { start: 100, end: 300, density: 0.02919580419580419 },
                { start: 300, density: 0.013811188811188807 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.9131761912837036 },
                { start: 2500, end: 4000, density: 0.0681702560624046 },
                { start: 4000, density: 0.018653552653891813 },
              ],
              percentiles: { p75: 1813 },
            },
            cumulative_layout_shift: {
              histogram: [
                { start: "0.00", end: "0.10", density: 0.9746772591857 },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.018205892088712344,
                },
                { start: "0.25", density: 0.007116848725587553 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.529818780889621 },
                { start: 200, end: 500, density: 0.3476112026359143 },
                { start: 500, density: 0.12257001647446475 },
              ],
              percentiles: { p75: 310 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.ee/",
          normalizedUrl: "https://www.yara.ee",
        },
      },
      extractedResults: {
        fcp: 1368,
        lcp: 1813,
        cls: "0.00",
        fid: 13,
      },
      timestamp: 1652965209960,
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
                  density: 0.9468995010691376,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.029935851746258024,
                },
                { start: "0.25", density: 0.023164647184604432 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5325264750378221 },
                { start: 200, end: 500, density: 0.3314842830727858 },
                { start: 500, density: 0.1359892418893922 },
              ],
              percentiles: { p75: 306 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.7411464037970061 },
                { start: 800, end: 1800, density: 0.2369477911646587 },
                { start: 1800, density: 0.021905805038335207 },
              ],
              percentiles: { p75: 856 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8961461914239188 },
                { start: 1800, end: 3000, density: 0.08069477112357522 },
                { start: 3000, density: 0.02315903745250585 },
              ],
              percentiles: { p75: 1376 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9097556625646515 },
                { start: 100, end: 300, density: 0.036204744069912614 },
                { start: 300, density: 0.05403959336543594 },
              ],
              percentiles: { p75: 14 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.887307343608341 },
                { start: 2500, end: 4000, density: 0.09093381686310063 },
                { start: 4000, density: 0.02175883952855852 },
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
        fcp: 1376,
        lcp: 1894,
        cls: "0.00",
        fid: 14,
      },
      timestamp: 1652965210569,
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
                  density: 0.9468995010691376,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.029935851746258024,
                },
                { start: "0.25", density: 0.023164647184604432 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5325264750378221 },
                { start: 200, end: 500, density: 0.3314842830727858 },
                { start: 500, density: 0.1359892418893922 },
              ],
              percentiles: { p75: 306 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.7411464037970061 },
                { start: 800, end: 1800, density: 0.2369477911646587 },
                { start: 1800, density: 0.021905805038335207 },
              ],
              percentiles: { p75: 856 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8961461914239188 },
                { start: 1800, end: 3000, density: 0.08069477112357522 },
                { start: 3000, density: 0.02315903745250585 },
              ],
              percentiles: { p75: 1376 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9097556625646515 },
                { start: 100, end: 300, density: 0.036204744069912614 },
                { start: 300, density: 0.05403959336543594 },
              ],
              percentiles: { p75: 14 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.887307343608341 },
                { start: 2500, end: 4000, density: 0.09093381686310063 },
                { start: 4000, density: 0.02175883952855852 },
              ],
              percentiles: { p75: 1894 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.be/",
          normalizedUrl: "https://www.yara.be",
        },
      },
      extractedResults: {
        fcp: 1376,
        lcp: 1894,
        cls: "0.00",
        fid: 14,
      },
      timestamp: 1652965211001,
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
                  density: 0.9611044736492764,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.024027611841231908,
                },
                { start: "0.25", density: 0.01486791450949156 },
              ],
              percentiles: { p75: "0.01" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.4685069984447899 },
                { start: 200, end: 500, density: 0.38867288750648005 },
                { start: 500, density: 0.14282011404873002 },
              ],
              percentiles: { p75: 348 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.704880665057656 },
                { start: 800, end: 1800, density: 0.2370608742290158 },
                { start: 1800, density: 0.058058460713328215 },
              ],
              percentiles: { p75: 884 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8542727029199031 },
                { start: 1800, end: 3000, density: 0.10447361371551027 },
                { start: 3000, density: 0.041253683364586624 },
              ],
              percentiles: { p75: 1417 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9405058314768706 },
                { start: 100, end: 300, density: 0.037085572008911015 },
                { start: 300, density: 0.02240859651421845 },
              ],
              percentiles: { p75: 15 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8719080090921243 },
                { start: 2500, end: 4000, density: 0.09306056959486561 },
                { start: 4000, density: 0.03503142131301007 },
              ],
              percentiles: { p75: 1887 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.de/",
          normalizedUrl: "https://www.yara.de",
        },
      },
      extractedResults: {
        fcp: 1417,
        lcp: 1887,
        cls: "0.01",
        fid: 15,
      },
      timestamp: 1652965211578,
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
                { start: "0.00", end: "0.10", density: 0.7511 },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.11660000000000001,
                },
                { start: "0.25", density: 0.1322999999999999 },
              ],
              percentiles: { p75: "0.12" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5985999999999999 },
                { start: 200, end: 500, density: 0.3308 },
                { start: 500, density: 0.07060000000000018 },
              ],
              percentiles: { p75: 254 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.43983194958487537 },
                { start: 800, end: 1800, density: 0.31019305791737517 },
                { start: 1800, density: 0.24997499249774935 },
              ],
              percentiles: { p75: 1674 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5162967406518685 },
                { start: 1800, end: 3000, density: 0.2016596680663863 },
                { start: 3000, density: 0.2820435912817453 },
              ],
              percentiles: { p75: 3040 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9608960896089609 },
                { start: 100, end: 300, density: 0.035903590359035904 },
                { start: 300, density: 0.0032003200320032004 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.5691500000000003 },
                { start: 2500, end: 4000, density: 0.20655000000000007 },
                { start: 4000, density: 0.22429999999999967 },
              ],
              percentiles: { p75: 3600 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.cm/",
          normalizedUrl: "https://www.yara.cm",
        },
      },
      extractedResults: {
        fcp: 3040,
        lcp: 3600,
        cls: "0.12",
        fid: 12,
      },
      timestamp: 1652965212079,
    },
    {
      url: "https://www.yara.cm/",
      deviceTargeted: "PHONE",
      results: {
        record: {
          key: { formFactor: "PHONE", origin: "https://www.yara.cm" },
          metrics: {
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5985999999999999 },
                { start: 200, end: 500, density: 0.3308 },
                { start: 500, density: 0.07060000000000018 },
              ],
              percentiles: { p75: 254 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.43983194958487537 },
                { start: 800, end: 1800, density: 0.31019305791737517 },
                { start: 1800, density: 0.24997499249774935 },
              ],
              percentiles: { p75: 1767 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5162967406518685 },
                { start: 1800, end: 3000, density: 0.2016596680663863 },
                { start: 3000, density: 0.2820435912817453 },
              ],
              percentiles: { p75: 3314 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9608960896089609 },
                { start: 100, end: 300, density: 0.035903590359035904 },
                { start: 300, density: 0.0032003200320032004 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.5691500000000003 },
                { start: 2500, end: 4000, density: 0.20655000000000007 },
                { start: 4000, density: 0.22429999999999967 },
              ],
              percentiles: { p75: 3739 },
            },
            cumulative_layout_shift: {
              histogram: [
                { start: "0.00", end: "0.10", density: 0.7511 },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.11660000000000001,
                },
                { start: "0.25", density: 0.1322999999999999 },
              ],
              percentiles: { p75: "0.10" },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.cm/",
          normalizedUrl: "https://www.yara.cm",
        },
      },
      extractedResults: {
        fcp: 3314,
        lcp: 3739,
        cls: "0.10",
        fid: 12,
      },
      timestamp: 1652965212502,
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
                { start: 0, end: 100, density: 0.9576873061918575 },
                { start: 100, end: 300, density: 0.02980894268280484 },
                { start: 300, density: 0.012503751125337607 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.5740500000000002 },
                { start: 2500, end: 4000, density: 0.23495000000000013 },
                { start: 4000, density: 0.19099999999999956 },
              ],
              percentiles: { p75: 3530 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8261826182618262,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.11641164116411641,
                },
                { start: "0.25", density: 0.05740574057405741 },
              ],
              percentiles: { p75: "0.03" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6125000000000002 },
                { start: 200, end: 500, density: 0.2825000000000001 },
                { start: 500, density: 0.10499999999999987 },
              ],
              percentiles: { p75: 269 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.2781390695347688 },
                { start: 800, end: 1800, density: 0.4534267133566806 },
                { start: 1800, density: 0.2684342171085507 },
              ],
              percentiles: { p75: 1880 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5195519551955193 },
                { start: 1800, end: 3000, density: 0.2599259925992598 },
                { start: 3000, density: 0.22052205220522098 },
              ],
              percentiles: { p75: 2869 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.co.ke/",
          normalizedUrl: "https://www.yara.co.ke",
        },
      },
      extractedResults: {
        fcp: 2869,
        lcp: 3530,
        cls: "0.03",
        fid: 13,
      },
      timestamp: 1652965213017,
    },
    {
      url: "https://www.yara.be/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "https://www.yara.be" },
          metrics: {
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9483155053483957 },
                { start: 100, end: 300, density: 0.021393581925422376 },
                { start: 300, density: 0.03029091272618208 },
              ],
              percentiles: { p75: 10 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.9064219265779733 },
                { start: 2500, end: 4000, density: 0.07197159147744324 },
                { start: 4000, density: 0.02160648194458342 },
              ],
              percentiles: { p75: 1774 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.7595000000000001,
                },
                { start: "0.10", end: "0.25", density: 0.1643 },
                { start: "0.25", density: 0.07619999999999999 },
              ],
              percentiles: { p75: "0.09" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.7017403480696145 },
                { start: 200, end: 500, density: 0.21284256851370287 },
                { start: 500, density: 0.08541708341668271 },
              ],
              percentiles: { p75: 225 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.7878212178782121 },
                { start: 800, end: 1800, density: 0.1922807719228077 },
                { start: 1800, density: 0.019898010198980118 },
              ],
              percentiles: { p75: 793 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.9195080491950806 },
                { start: 1800, end: 3000, density: 0.0616938306169383 },
                { start: 3000, density: 0.018798120187981184 },
              ],
              percentiles: { p75: 1242 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.be/",
          normalizedUrl: "https://www.yara.be",
        },
      },
      extractedResults: {
        fcp: 1242,
        lcp: 1774,
        cls: "0.09",
        fid: 10,
      },
      timestamp: 1652965213368,
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
                { start: "0.00", end: "0.10", density: 0.7511 },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.11660000000000001,
                },
                { start: "0.25", density: 0.1322999999999999 },
              ],
              percentiles: { p75: "0.10" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5985999999999999 },
                { start: 200, end: 500, density: 0.3308 },
                { start: 500, density: 0.07060000000000018 },
              ],
              percentiles: { p75: 254 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.43983194958487537 },
                { start: 800, end: 1800, density: 0.31019305791737517 },
                { start: 1800, density: 0.24997499249774935 },
              ],
              percentiles: { p75: 1767 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5162967406518685 },
                { start: 1800, end: 3000, density: 0.2016596680663863 },
                { start: 3000, density: 0.2820435912817453 },
              ],
              percentiles: { p75: 3314 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9608960896089609 },
                { start: 100, end: 300, density: 0.035903590359035904 },
                { start: 300, density: 0.0032003200320032004 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.5691500000000003 },
                { start: 2500, end: 4000, density: 0.20655000000000007 },
                { start: 4000, density: 0.22429999999999967 },
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
        fcp: 3314,
        lcp: 3739,
        cls: "0.10",
        fid: 12,
      },
      timestamp: 1652965213777,
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
                  density: 0.8709258148370325,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.08068386322735453,
                },
                { start: "0.25", density: 0.04839032193561286 },
              ],
              percentiles: { p75: "0.02" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.47604760476047503 },
                { start: 200, end: 500, density: 0.37303730373037225 },
                { start: 500, density: 0.1509150915091527 },
              ],
              percentiles: { p75: 362 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.5591118223644723 },
                { start: 800, end: 1800, density: 0.3566713342668531 },
                { start: 1800, density: 0.08421684336867465 },
              ],
              percentiles: { p75: 1107 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.751349730053989 },
                { start: 1800, end: 3000, density: 0.1646670665866826 },
                { start: 3000, density: 0.0839832033593284 },
              ],
              percentiles: { p75: 1811 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9308792637791338 },
                { start: 100, end: 300, density: 0.04071221366409923 },
                { start: 300, density: 0.028408522556767 },
              ],
              percentiles: { p75: 14 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7911417716456713 },
                { start: 2500, end: 4000, density: 0.13917216556688664 },
                { start: 4000, density: 0.06968606278744198 },
              ],
              percentiles: { p75: 2312 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.es/",
          normalizedUrl: "https://www.yara.es",
        },
      },
      extractedResults: {
        fcp: 1811,
        lcp: 2312,
        cls: "0.02",
        fid: 14,
      },
      timestamp: 1652965214222,
    },
    {
      url: "https://www.yara.co.nz/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "https://www.yara.co.nz" },
          metrics: {
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.342131573685263 },
                { start: 800, end: 1800, density: 0.5141971605678864 },
                { start: 1800, density: 0.1436712657468507 },
              ],
              percentiles: { p75: 1548 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6645670865826834 },
                { start: 1800, end: 3000, density: 0.23055388922215558 },
                { start: 3000, density: 0.10487902419516104 },
              ],
              percentiles: { p75: 2213 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.977102289771023 },
                { start: 100, end: 300, density: 0.008399160083991603 },
                { start: 300, density: 0.01449855014498551 },
              ],
              percentiles: { p75: 9 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7333233323332335 },
                { start: 2500, end: 4000, density: 0.1763676367636764 },
                { start: 4000, density: 0.0903090309030902 },
              ],
              percentiles: { p75: 2758 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.7577757775777578,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.1749174917491749,
                },
                { start: "0.25", density: 0.06730673067306725 },
              ],
              percentiles: { p75: "0.09" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.8290512846146157 },
                { start: 200, end: 500, density: 0.135259422173348 },
                { start: 500, density: 0.0356892932120363 },
              ],
              percentiles: { p75: 162 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.co.nz/",
          normalizedUrl: "https://www.yara.co.nz",
        },
      },
      extractedResults: { fcp: 2213, lcp: 2758, cls: "0.09", fid: 9 },
      timestamp: 1652965214561,
    },
    {
      url: "https://www.yara.ee/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "https://www.yara.ee" },
          metrics: {
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.7730226977302269 },
                { start: 800, end: 1800, density: 0.20797920207979206 },
                { start: 1800, density: 0.018998100189981004 },
              ],
              percentiles: { p75: 784 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.9207 },
                { start: 1800, end: 3000, density: 0.0664 },
                { start: 3000, density: 0.012900000000000003 },
              ],
              percentiles: { p75: 1260 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9694030596940306 },
                { start: 100, end: 300, density: 0.0184981501849815 },
                { start: 300, density: 0.0120987901209879 },
              ],
              percentiles: { p75: 10 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.9252999999999999 },
                { start: 2500, end: 4000, density: 0.06089999999999999 },
                { start: 4000, density: 0.013800000000000007 },
              ],
              percentiles: { p75: 1750 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9619038096190381,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.026497350264973504,
                },
                { start: "0.25", density: 0.011598840115988395 },
              ],
              percentiles: { p75: "0.03" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6886688668866885 },
                { start: 200, end: 500, density: 0.2267226722672267 },
                { start: 500, density: 0.08460846084608466 },
              ],
              percentiles: { p75: 242 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.ee/",
          normalizedUrl: "https://www.yara.ee",
        },
      },
      extractedResults: {
        fcp: 1260,
        lcp: 1750,
        cls: "0.03",
        fid: 10,
      },
      timestamp: 1652965214880,
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
                { start: 0, end: 1800, density: 0.7951409718056383 },
                { start: 1800, end: 3000, density: 0.15276944611077772 },
                { start: 3000, density: 0.05208958208358421 },
              ],
              percentiles: { p75: 1685 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9588958895889588 },
                { start: 100, end: 300, density: 0.0243024302430243 },
                { start: 300, density: 0.016801680168016843 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8133686631336866 },
                { start: 2500, end: 4000, density: 0.13403659634036594 },
                { start: 4000, density: 0.05259474052594753 },
              ],
              percentiles: { p75: 2212 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8866999999999999,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.08499999999999998,
                },
                { start: "0.25", density: 0.028300000000000002 },
              ],
              percentiles: { p75: "0.01" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5931000000000002 },
                { start: 200, end: 500, density: 0.3041000000000001 },
                { start: 500, density: 0.10279999999999972 },
              ],
              percentiles: { p75: 280 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.6105778844231154 },
                { start: 800, end: 1800, density: 0.3482303539292141 },
                { start: 1800, density: 0.04119176164767051 },
              ],
              percentiles: { p75: 973 },
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
        lcp: 2212,
        cls: "0.01",
        fid: 12,
      },
      timestamp: 1652965215429,
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
                { start: 0, end: 100, density: 0.9417345984230922 },
                { start: 100, end: 300, density: 0.037819056528130425 },
                { start: 300, density: 0.0204463450487774 },
              ],
              percentiles: { p75: 14 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7775403925757777 },
                { start: 2500, end: 4000, density: 0.13820269728935772 },
                { start: 4000, density: 0.08425691013486458 },
              ],
              percentiles: { p75: 2375 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9276612689142554,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.052827183435094245,
                },
                { start: "0.25", density: 0.019511547650650378 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.433794724471141 },
                { start: 200, end: 500, density: 0.39618699399320934 },
                { start: 500, density: 0.17001828153564963 },
              ],
              percentiles: { p75: 372 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.6002926310188876 },
                { start: 800, end: 1800, density: 0.30180899175312564 },
                { start: 1800, density: 0.09789837722798682 },
              ],
              percentiles: { p75: 1092 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7215612885977797 },
                { start: 1800, end: 3000, density: 0.16989707258387882 },
                { start: 3000, density: 0.10854163881834154 },
              ],
              percentiles: { p75: 1951 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.fr/",
          normalizedUrl: "https://www.yara.fr",
        },
      },
      extractedResults: {
        fcp: 1951,
        lcp: 2375,
        cls: "0.00",
        fid: 14,
      },
      timestamp: 1652965216020,
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
                { start: 0, end: 1800, density: 0.4887684840275415 },
                { start: 1800, end: 3000, density: 0.27373292696692575 },
                { start: 3000, density: 0.23749858900553272 },
              ],
              percentiles: { p75: 2962 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9511660124682522 },
                { start: 100, end: 300, density: 0.034403140152389745 },
                { start: 300, density: 0.014430847379358121 },
              ],
              percentiles: { p75: 14 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.5559121621621615 },
                { start: 2500, end: 4000, density: 0.24532657657657622 },
                { start: 4000, density: 0.19876126126126217 },
              ],
              percentiles: { p75: 3566 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8345098039215686,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.10778711484593836,
                },
                { start: "0.25", density: 0.057703081232492986 },
              ],
              percentiles: { p75: "0.01" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5754642656162072 },
                { start: 200, end: 500, density: 0.3117613956105797 },
                { start: 500, density: 0.11277433877321316 },
              ],
              percentiles: { p75: 280 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.2567278459632937 },
                { start: 800, end: 1800, density: 0.45816912509852714 },
                { start: 1800, density: 0.285103028938179 },
              ],
              percentiles: { p75: 1919 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.co.ke/",
          normalizedUrl: "https://www.yara.co.ke",
        },
      },
      extractedResults: {
        fcp: 2962,
        lcp: 3566,
        cls: "0.01",
        fid: 14,
      },
      timestamp: 1652965216555,
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
                { start: 0, end: 100, density: 0.9382123575284942 },
                { start: 100, end: 300, density: 0.03419316136772645 },
                { start: 300, density: 0.027594481103779416 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.5978206538038581 },
                { start: 2500, end: 4000, density: 0.24992502249325163 },
                { start: 4000, density: 0.1522543237028903 },
              ],
              percentiles: { p75: 3216 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.7913208679132087,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.1281871812818718,
                },
                { start: "0.25", density: 0.08049195080491953 },
              ],
              percentiles: { p75: "0.07" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6221622162216227 },
                { start: 200, end: 500, density: 0.24252425242524278 },
                { start: 500, density: 0.1353135313531345 },
              ],
              percentiles: { p75: 281 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.28587141285871454 },
                { start: 800, end: 1800, density: 0.3967603239676036 },
                { start: 1800, density: 0.31736826317368183 },
              ],
              percentiles: { p75: 2015 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5084508450845078 },
                { start: 1800, end: 3000, density: 0.2875287528752872 },
                { start: 3000, density: 0.2040204020402051 },
              ],
              percentiles: { p75: 2759 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.co.uk/",
          normalizedUrl: "https://www.yara.co.uk",
        },
      },
      extractedResults: {
        fcp: 2759,
        lcp: 3216,
        cls: "0.07",
        fid: 13,
      },
      timestamp: 1652965217001,
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
                  density: 0.7828176277543366,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.180028129395218,
                },
                { start: "0.25", density: 0.037154242850445336 },
              ],
              percentiles: { p75: "0.07" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5965922444183311 },
                { start: 200, end: 500, density: 0.27473560517038764 },
                { start: 500, density: 0.1286721504112812 },
              ],
              percentiles: { p75: 296 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.486716383127476 },
                { start: 800, end: 1800, density: 0.41319039850850603 },
                { start: 1800, density: 0.100093218364018 },
              ],
              percentiles: { p75: 1221 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6860465116279068 },
                { start: 1800, end: 3000, density: 0.21834625322997414 },
                { start: 3000, density: 0.09560723514211927 },
              ],
              percentiles: { p75: 2033 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9354207436399218 },
                { start: 100, end: 300, density: 0.03522504892367906 },
                { start: 300, density: 0.029354207436399195 },
              ],
              percentiles: { p75: 15 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7316713814238558 },
                { start: 2500, end: 4000, density: 0.172265440829797 },
                { start: 4000, density: 0.09606317774634712 },
              ],
              percentiles: { p75: 2586 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.co.th/",
          normalizedUrl: "https://www.yara.co.th",
        },
      },
      extractedResults: {
        fcp: 2033,
        lcp: 2586,
        cls: "0.07",
        fid: 15,
      },
      timestamp: 1652965217530,
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
                { start: 0, end: 100, density: 0.9455054494550547 },
                { start: 100, end: 300, density: 0.03599640035996401 },
                { start: 300, density: 0.018498150184981393 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8622673604162494 },
                { start: 2500, end: 4000, density: 0.0975085051030618 },
                { start: 4000, density: 0.04022413448068876 },
              ],
              percentiles: { p75: 1980 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.882088208820882,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.10051005100510052,
                },
                { start: "0.25", density: 0.01740174017401739 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.556111222244449 },
                { start: 200, end: 500, density: 0.3328665733146629 },
                { start: 500, density: 0.11102220444088821 },
              ],
              percentiles: { p75: 300 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.6835632873425316 },
                { start: 800, end: 1800, density: 0.273145370925815 },
                { start: 1800, density: 0.04329134173165344 },
              ],
              percentiles: { p75: 899 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8141256502601039 },
                { start: 1800, end: 3000, density: 0.13385354141656663 },
                { start: 3000, density: 0.05202080832332944 },
              ],
              percentiles: { p75: 1601 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.pl/",
          normalizedUrl: "https://www.yara.pl",
        },
      },
      extractedResults: {
        fcp: 1601,
        lcp: 1980,
        cls: "0.00",
        fid: 13,
      },
      timestamp: 1652965218216,
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
                { start: 0, end: 2500, density: 0.712126417038818 },
                { start: 2500, end: 4000, density: 0.19603801671819512 },
                { start: 4000, density: 0.09183556624298683 },
              ],
              percentiles: { p75: 2719 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9644525464281646,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.017773726785917744,
                },
                { start: "0.25", density: 0.017773726785917748 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5834860284012825 },
                { start: 200, end: 500, density: 0.2974118185982591 },
                { start: 500, density: 0.11910215300045844 },
              ],
              percentiles: { p75: 287 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.4324602539174203 },
                { start: 800, end: 1800, density: 0.3804186206107749 },
                { start: 1800, density: 0.18712112547180487 },
              ],
              percentiles: { p75: 1555 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6101500744644281 },
                { start: 1800, end: 3000, density: 0.2356512773513573 },
                { start: 3000, density: 0.15419864818421444 },
              ],
              percentiles: { p75: 2432 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.938212146129449 },
                { start: 100, end: 300, density: 0.040291319158933386 },
                { start: 300, density: 0.02149653471161765 },
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
        fcp: 2432,
        lcp: 2719,
        cls: "0.00",
        fid: 13,
      },
      timestamp: 1652965218651,
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
                  density: 0.8512851285128513,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.0845084508450845,
                },
                { start: "0.25", density: 0.06420642064206422 },
              ],
              percentiles: { p75: "0.05" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.820782078207821 },
                { start: 200, end: 500, density: 0.11281128112811284 },
                { start: 500, density: 0.06640664066406628 },
              ],
              percentiles: { p75: 157 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.2987298729872986 },
                { start: 800, end: 1800, density: 0.4725472547254723 },
                { start: 1800, density: 0.22872287228722912 },
              ],
              percentiles: { p75: 1736 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.08850885088508917 },
                { start: 1800, end: 3000, density: 0.3844384438443873 },
                { start: 3000, density: 0.5270527052705236 },
              ],
              percentiles: { p75: 5050 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.23036911073322117 },
                { start: 2500, end: 4000, density: 0.3568070421126356 },
                { start: 4000, density: 0.4128238471541432 },
              ],
              percentiles: { p75: 5667 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "http://www.yara.com.mm/",
          normalizedUrl: "http://www.yara.com.mm",
        },
      },
      extractedResults: { fcp: 5050, lcp: 5667, cls: "0.05" },
      timestamp: 1652965219217,
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
                  density: 0.8655575539568345,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.09296312949640288,
                },
                { start: "0.25", density: 0.04147931654676258 },
              ],
              percentiles: { p75: "0.02" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.4362239045652675 },
                { start: 200, end: 500, density: 0.33115393438862145 },
                { start: 500, density: 0.23262216104611103 },
              ],
              percentiles: { p75: 472 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.384632616487455 },
                { start: 800, end: 1800, density: 0.4026657706093189 },
                { start: 1800, density: 0.21270161290322603 },
              ],
              percentiles: { p75: 1682 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.47068110058637713 },
                { start: 1800, end: 3000, density: 0.2530446549391065 },
                { start: 3000, density: 0.27627424447451626 },
              ],
              percentiles: { p75: 3212 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9011464670098268 },
                { start: 100, end: 300, density: 0.0653954141319607 },
                { start: 300, density: 0.03345811885821259 },
              ],
              percentiles: { p75: 18 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.516479782534828 },
                { start: 2500, end: 4000, density: 0.24691358024691334 },
                { start: 4000, density: 0.2366066372182587 },
              ],
              percentiles: { p75: 3910 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yarabrasil.com.br/",
          normalizedUrl: "https://www.yarabrasil.com.br",
        },
      },
      extractedResults: {
        fcp: 3212,
        lcp: 3910,
        cls: "0.02",
        fid: 18,
      },
      timestamp: 1652965219578,
    },
    {
      url: "https://www.yara.com.au/",
      deviceTargeted: "PHONE",
      results: {
        record: {
          key: { formFactor: "PHONE", origin: "https://www.yara.com.au" },
          metrics: {
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6613050075872526 },
                { start: 2500, end: 4000, density: 0.20895295902883124 },
                { start: 4000, density: 0.12974203338391624 },
              ],
              percentiles: { p75: 2988 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.962576412703146,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.022066497688981664,
                },
                { start: "0.25", density: 0.015357089607872378 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.658926417370326 },
                { start: 200, end: 500, density: 0.26010253317249693 },
                { start: 500, density: 0.08097104945717715 },
              ],
              percentiles: { p75: 242 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.36930091185410285 },
                { start: 800, end: 1800, density: 0.4021276595744675 },
                { start: 1800, density: 0.22857142857142954 },
              ],
              percentiles: { p75: 1720 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6002125721226834 },
                { start: 1800, end: 3000, density: 0.21211661099301524 },
                { start: 3000, density: 0.1876708168843015 },
              ],
              percentiles: { p75: 2628 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9408356206160415 },
                { start: 100, end: 300, density: 0.03400426959438853 },
                { start: 300, density: 0.02516010978956999 },
              ],
              percentiles: { p75: 14 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.au/",
          normalizedUrl: "https://www.yara.com.au",
        },
      },
      extractedResults: {
        fcp: 2628,
        lcp: 2988,
        cls: "0.00",
        fid: 14,
      },
      timestamp: 1652965220082,
    },
    {
      url: "https://www.yara.cl/",
      deviceTargeted: "PHONE",
      results: {
        record: {
          key: { formFactor: "PHONE", origin: "https://www.yara.cl" },
          metrics: {
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6219338277239019 },
                { start: 200, end: 500, density: 0.32843696520251 },
                { start: 500, density: 0.04962920707358803 },
              ],
              percentiles: { p75: 246 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.2638636681100708 },
                { start: 800, end: 1800, density: 0.556921357731526 },
                { start: 1800, density: 0.17921497415840332 },
              ],
              percentiles: { p75: 1621 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.4644163150492258 },
                { start: 1800, end: 3000, density: 0.345710267229254 },
                { start: 3000, density: 0.18987341772152017 },
              ],
              percentiles: { p75: 2721 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9695632995147773 },
                { start: 100, end: 300, density: 0.023378914865460964 },
                { start: 300, density: 0.007057785619761805 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6261381145818736 },
                { start: 2500, end: 4000, density: 0.26068076761451153 },
                { start: 4000, density: 0.1131811178036148 },
              ],
              percentiles: { p75: 3059 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9389736477115118,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.022607489597780854,
                },
                { start: "0.25", density: 0.03841886269070737 },
              ],
              percentiles: { p75: "0.00" },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.cl/",
          normalizedUrl: "https://www.yara.cl",
        },
      },
      extractedResults: {
        fcp: 2721,
        lcp: 3059,
        cls: "0.00",
        fid: 12,
      },
      timestamp: 1652965220658,
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
                { start: 0, end: 200, density: 0.6527928416485901 },
                { start: 200, end: 500, density: 0.29785791757049895 },
                { start: 500, density: 0.049349240780910866 },
              ],
              percentiles: { p75: 237 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.45328577308272766 },
                { start: 800, end: 1800, density: 0.4152833036081769 },
                { start: 1800, density: 0.1314309233090955 },
              ],
              percentiles: { p75: 1372 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6638850889192883 },
                { start: 1800, end: 3000, density: 0.1999999999999999 },
                { start: 3000, density: 0.13611491108071175 },
              ],
              percentiles: { p75: 2172 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9657694962042789 },
                { start: 100, end: 300, density: 0.024844720496894408 },
                { start: 300, density: 0.00938578329882678 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7190697039967255 },
                { start: 2500, end: 4000, density: 0.15325330787068606 },
                { start: 4000, density: 0.12767698813258843 },
              ],
              percentiles: { p75: 2769 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9308899107384366,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.02231539085745199,
                },
                { start: "0.25", density: 0.04679469840411145 },
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
        fcp: 2172,
        lcp: 2769,
        cls: "0.00",
        fid: 12,
      },
      timestamp: 1652965221342,
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
                  density: 0.9707546034420508,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.015645685401372005,
                },
                { start: "0.25", density: 0.013599711156577207 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6891403804478688 },
                { start: 200, end: 500, density: 0.2564411268962196 },
                { start: 500, density: 0.05441849265591167 },
              ],
              percentiles: { p75: 229 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.389455986549777 },
                { start: 800, end: 1800, density: 0.47592170049237315 },
                { start: 1800, density: 0.13462231295784993 },
              ],
              percentiles: { p75: 1369 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5830812053733501 },
                { start: 1800, end: 3000, density: 0.26915163984025114 },
                { start: 3000, density: 0.14776715478639874 },
              ],
              percentiles: { p75: 2354 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.968924798011187 },
                { start: 100, end: 300, density: 0.025233064014916092 },
                { start: 300, density: 0.005842137973896835 },
              ],
              percentiles: { p75: 14 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7193493566399596 },
                { start: 2500, end: 4000, density: 0.16326778344258275 },
                { start: 4000, density: 0.1173828599174577 },
              ],
              percentiles: { p75: 2701 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.cr/",
          normalizedUrl: "https://www.yara.cr",
        },
      },
      extractedResults: {
        fcp: 2354,
        lcp: 2701,
        cls: "0.00",
        fid: 14,
      },
      timestamp: 1652965221936,
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
                { start: 0, end: 800, density: 0.4607460746074611 },
                { start: 800, end: 1800, density: 0.34883488348834907 },
                { start: 1800, density: 0.19041904190418982 },
              ],
              percentiles: { p75: 1579 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5310531053105305 },
                { start: 1800, end: 3000, density: 0.22362236223622334 },
                { start: 3000, density: 0.24532453245324617 },
              ],
              percentiles: { p75: 3074 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9577042295770423 },
                { start: 100, end: 300, density: 0.0320967903209679 },
                { start: 300, density: 0.01019898010198979 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.5996099609960979 },
                { start: 2500, end: 4000, density: 0.19706970697069662 },
                { start: 4000, density: 0.20332033203320551 },
              ],
              percentiles: { p75: 3567 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8996999999999999,
                },
                { start: "0.10", end: "0.25", density: 0.0649 },
                { start: "0.25", density: 0.03539999999999999 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5796579657965802 },
                { start: 200, end: 500, density: 0.29532953295329556 },
                { start: 500, density: 0.1250125012501242 },
              ],
              percentiles: { p75: 314 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.ci/",
          normalizedUrl: "https://www.yara.ci",
        },
      },
      extractedResults: {
        fcp: 3074,
        lcp: 3567,
        cls: "0.00",
        fid: 13,
      },
      timestamp: 1652965222443,
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
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9045095490450956,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.0852914708529147,
                },
                { start: "0.25", density: 0.010198980101989802 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6493896337802679 },
                { start: 200, end: 500, density: 0.279967980788473 },
                { start: 500, density: 0.07064238543125903 },
              ],
              percentiles: { p75: 249 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.5785000000000001 },
                { start: 800, end: 1800, density: 0.37580000000000013 },
                { start: 1800, density: 0.04569999999999965 },
              ],
              percentiles: { p75: 1013 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8590422873138054 },
                { start: 1800, end: 3000, density: 0.10226931920423864 },
                { start: 3000, density: 0.03868839348195609 },
              ],
              percentiles: { p75: 1495 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9630999999999998 },
                { start: 100, end: 300, density: 0.019999999999999997 },
                { start: 300, density: 0.016900000000000116 },
              ],
              percentiles: { p75: 11 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8633909827051884 },
                { start: 2500, end: 4000, density: 0.10061981405578325 },
                { start: 4000, density: 0.03598920323902819 },
              ],
              percentiles: { p75: 1961 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.ro/",
          normalizedUrl: "https://www.yara.ro",
        },
      },
      extractedResults: {
        fcp: 1495,
        lcp: 1961,
        cls: "0.00",
        fid: 11,
      },
      timestamp: 1652965222877,
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
                { start: 0, end: 200, density: 0.5464267083985397 },
                { start: 200, end: 500, density: 0.3594157537819513 },
                { start: 500, density: 0.09415753781950899 },
              ],
              percentiles: { p75: 289 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.2762823768410357 },
                { start: 800, end: 1800, density: 0.5393600812595218 },
                { start: 1800, density: 0.18435754189944248 },
              ],
              percentiles: { p75: 1582 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.47776349614395763 },
                { start: 1800, end: 3000, density: 0.31683804627249273 },
                { start: 3000, density: 0.20539845758354966 },
              ],
              percentiles: { p75: 2762 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9547529538131042 },
                { start: 100, end: 300, density: 0.03249194414607949 },
                { start: 300, density: 0.012755102040816303 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6178397123041347 },
                { start: 2500, end: 4000, density: 0.25359619830464897 },
                { start: 4000, density: 0.12856408939121652 },
              ],
              percentiles: { p75: 3085 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9314061113224293,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.02155445670090022,
                },
                { start: "0.25", density: 0.04703943197667052 },
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
        fcp: 2762,
        lcp: 3085,
        cls: "0.00",
        fid: 13,
      },
      timestamp: 1652965223214,
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
                { start: 0, end: 2500, density: 0.8117688231176876 },
                { start: 2500, end: 4000, density: 0.10933906609339059 },
                { start: 4000, density: 0.0788921107889217 },
              ],
              percentiles: { p75: 2132 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.797979797979798,
                },
                { start: "0.10", end: "0.25", density: 0.14001400140014 },
                { start: "0.25", density: 0.06200620062006203 },
              ],
              percentiles: { p75: "0.06" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.7754550910182036 },
                { start: 200, end: 500, density: 0.1825365073014603 },
                { start: 500, density: 0.04200840168033599 },
              ],
              percentiles: { p75: 186 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.5104020804160828 },
                { start: 800, end: 1800, density: 0.3791758351670332 },
                { start: 1800, density: 0.11042208441688395 },
              ],
              percentiles: { p75: 1216 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7640999999999999 },
                { start: 1800, end: 3000, density: 0.13769999999999993 },
                { start: 3000, density: 0.09820000000000016 },
              ],
              percentiles: { p75: 1753 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9784913965586235 },
                { start: 100, end: 300, density: 0.017807122849139656 },
                { start: 300, density: 0.003701480592236897 },
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
        fcp: 1753,
        lcp: 2132,
        cls: "0.06",
        fid: 12,
      },
      timestamp: 1652965223599,
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
                { start: 0, end: 1800, density: 0.5331665832916445 },
                { start: 1800, end: 3000, density: 0.28814407203601733 },
                { start: 3000, density: 0.17868934467233824 },
              ],
              percentiles: { p75: 2605 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9652034796520348 },
                { start: 100, end: 300, density: 0.0248975102489751 },
                { start: 300, density: 0.009899010098990083 },
              ],
              percentiles: { p75: 11 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6497550734779557 },
                { start: 2500, end: 4000, density: 0.22658202539238195 },
                { start: 4000, density: 0.12366290112966247 },
              ],
              percentiles: { p75: 2994 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9042904290429041,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.0475047504750475,
                },
                { start: "0.25", density: 0.04820482048204823 },
              ],
              percentiles: { p75: "0.02" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6288886665999807 },
                { start: 200, end: 500, density: 0.2893868160448136 },
                { start: 500, density: 0.08172451735520565 },
              ],
              percentiles: { p75: 260 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.3115065480355889 },
                { start: 800, end: 1800, density: 0.5314405678296504 },
                { start: 1800, density: 0.15705288413476048 },
              ],
              percentiles: { p75: 1506 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.ar/",
          normalizedUrl: "https://www.yara.com.ar",
        },
      },
      extractedResults: {
        fcp: 2605,
        lcp: 2994,
        cls: "0.02",
        fid: 11,
      },
      timestamp: 1652965223860,
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
                { start: 0, end: 800, density: 0.5202560768230466 },
                { start: 800, end: 1800, density: 0.390117035110533 },
                { start: 1800, density: 0.08962688806642027 },
              ],
              percentiles: { p75: 1176 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7161432286457289 },
                { start: 1800, end: 3000, density: 0.19883976795359062 },
                { start: 3000, density: 0.08501700340068062 },
              ],
              percentiles: { p75: 1933 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9455217912834866 },
                { start: 100, end: 300, density: 0.029188324670131948 },
                { start: 300, density: 0.025289884046381408 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.750875262578773 },
                { start: 2500, end: 4000, density: 0.15989796939081713 },
                { start: 4000, density: 0.08922676803040991 },
              ],
              percentiles: { p75: 2502 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8066806680668067,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.15731573157315734,
                },
                { start: "0.25", density: 0.036003600360036 },
              ],
              percentiles: { p75: "0.04" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6482407037185124 },
                { start: 200, end: 500, density: 0.2370051979208316 },
                { start: 500, density: 0.11475409836065598 },
              ],
              percentiles: { p75: 266 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.co.th/",
          normalizedUrl: "https://www.yara.co.th",
        },
      },
      extractedResults: {
        fcp: 1933,
        lcp: 2502,
        cls: "0.04",
        fid: 13,
      },
      timestamp: 1652965224197,
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
                  density: 0.846289557834381,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.09979049509317456,
                },
                { start: "0.25", density: 0.053919947072444574 },
              ],
              percentiles: { p75: "0.01" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6466932978251225 },
                { start: 200, end: 500, density: 0.26398135818908147 },
                { start: 500, density: 0.08932534398579593 },
              ],
              percentiles: { p75: 247 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.46412933647692806 },
                { start: 800, end: 1800, density: 0.41686314134950025 },
                { start: 1800, density: 0.11900752217357169 },
              ],
              percentiles: { p75: 1302 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7008499217177359 },
                { start: 1800, end: 3000, density: 0.18877208678148052 },
                { start: 3000, density: 0.11037799150078363 },
              ],
              percentiles: { p75: 2049 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9510758776896941 },
                { start: 100, end: 300, density: 0.036919592298980744 },
                { start: 300, density: 0.012004530011325102 },
              ],
              percentiles: { p75: 14 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7682089882665485 },
                { start: 2500, end: 4000, density: 0.14013725924286033 },
                { start: 4000, density: 0.09165375249059113 },
              ],
              percentiles: { p75: 2422 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.in/",
          normalizedUrl: "https://www.yara.in",
        },
      },
      extractedResults: {
        fcp: 2049,
        lcp: 2422,
        cls: "0.01",
        fid: 14,
      },
      timestamp: 1652965224530,
    },
    {
      url: "https://www.yara.com.gt/",
      deviceTargeted: "PHONE",
      results: {
        record: {
          key: { formFactor: "PHONE", origin: "https://www.yara.com.gt" },
          metrics: {
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7643827160493832 },
                { start: 2500, end: 4000, density: 0.14438271604938274 },
                { start: 4000, density: 0.09123456790123419 },
              ],
              percentiles: { p75: 2442 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9578328021573915,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.015444962000490317,
                },
                { start: "0.25", density: 0.026722235842118153 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5500122279285891 },
                { start: 200, end: 500, density: 0.30606505258009303 },
                { start: 500, density: 0.14392271949131788 },
              ],
              percentiles: { p75: 323 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.5167818361303058 },
                { start: 800, end: 1800, density: 0.37820829220138186 },
                { start: 1800, density: 0.10500987166831238 },
              ],
              percentiles: { p75: 1191 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6929153295482583 },
                { start: 1800, end: 3000, density: 0.196247840039496 },
                { start: 3000, density: 0.11083683041224558 },
              ],
              percentiles: { p75: 2034 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9595895616924246 },
                { start: 100, end: 300, density: 0.03204965796807703 },
                { start: 300, density: 0.00836078033949834 },
              ],
              percentiles: { p75: 13 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.gt/",
          normalizedUrl: "https://www.yara.com.gt",
        },
      },
      extractedResults: {
        fcp: 2034,
        lcp: 2442,
        cls: "0.00",
        fid: 13,
      },
      timestamp: 1652965224916,
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
                  density: 0.9602786604742116,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.018821803959912002,
                },
                { start: "0.25", density: 0.020899535565876322 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5965109034267913 },
                { start: 200, end: 500, density: 0.329221183800623 },
                { start: 500, density: 0.07426791277258578 },
              ],
              percentiles: { p75: 275 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.44307424015944186 },
                { start: 800, end: 1800, density: 0.4337319382162431 },
                { start: 1800, density: 0.12319382162431505 },
              ],
              percentiles: { p75: 1309 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6054320987654309 },
                { start: 1800, end: 3000, density: 0.24827160493827116 },
                { start: 3000, density: 0.14629629629629784 },
              ],
              percentiles: { p75: 2399 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9694818136522173 },
                { start: 100, end: 300, density: 0.022670652715495763 },
                { start: 300, density: 0.007847533632286997 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7046465645081552 },
                { start: 2500, end: 4000, density: 0.18932278793870466 },
                { start: 4000, density: 0.10603064755314022 },
              ],
              percentiles: { p75: 2754 },
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
        lcp: 2754,
        cls: "0.00",
        fid: 12,
      },
      timestamp: 1652965225324,
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
                { start: 0, end: 200, density: 0.6129899216125424 },
                { start: 200, end: 500, density: 0.2891377379619263 },
                { start: 500, density: 0.09787234042553114 },
              ],
              percentiles: { p75: 270 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.3668490652074782 },
                { start: 800, end: 1800, density: 0.5248518011855903 },
                { start: 1800, density: 0.10829913360693155 },
              ],
              percentiles: { p75: 1425 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6116221673771595 },
                { start: 1800, end: 3000, density: 0.26564954004936053 },
                { start: 3000, density: 0.12272829257348009 },
              ],
              percentiles: { p75: 2455 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9487876727849536 },
                { start: 100, end: 300, density: 0.0351234987536823 },
                { start: 300, density: 0.016088828461364127 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7153487338960457 },
                { start: 2500, end: 4000, density: 0.20912927587738775 },
                { start: 4000, density: 0.07552199022656664 },
              ],
              percentiles: { p75: 2767 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9646056368800524,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.01813414900589906,
                },
                { start: "0.25", density: 0.0172602141140485 },
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
        fcp: 2455,
        lcp: 2767,
        cls: "0.00",
        fid: 12,
      },
      timestamp: 1652965225779,
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
                  density: 0.933918009382011,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.04894962267999184,
                },
                { start: "0.25", density: 0.01713236793799714 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.821518456375839 },
                { start: 200, end: 500, density: 0.14492449664429527 },
                { start: 500, density: 0.03355704697986581 },
              ],
              percentiles: { p75: 160 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.5261361211862599 },
                { start: 800, end: 1800, density: 0.3831875400042672 },
                { start: 1800, density: 0.09067633880947298 },
              ],
              percentiles: { p75: 1222 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.699232524372537 },
                { start: 1800, end: 3000, density: 0.2215308027380212 },
                { start: 3000, density: 0.07923667288944178 },
              ],
              percentiles: { p75: 1940 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9713297083539297 },
                { start: 100, end: 300, density: 0.014087988136431043 },
                { start: 300, density: 0.014582303509639145 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7742668318876502 },
                { start: 2500, end: 4000, density: 0.16997108632796368 },
                { start: 4000, density: 0.0557620817843862 },
              ],
              percentiles: { p75: 2365 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.kr/",
          normalizedUrl: "https://www.yara.kr",
        },
      },
      extractedResults: {
        fcp: 1940,
        lcp: 2365,
        cls: "0.00",
        fid: 12,
      },
      timestamp: 1652965226158,
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
                  density: 0.8171817181718171,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.11781178117811779,
                },
                { start: "0.25", density: 0.06500650065006516 },
              ],
              percentiles: { p75: "0.04" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6728345669133827 },
                { start: 200, end: 500, density: 0.2424484896979397 },
                { start: 500, density: 0.08471694338867751 },
              ],
              percentiles: { p75: 237 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.4788084766093559 },
                { start: 800, end: 1800, density: 0.4061375449820067 },
                { start: 1800, density: 0.11505397840863721 },
              ],
              percentiles: { p75: 1282 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7148714871487143 },
                { start: 1800, end: 3000, density: 0.1778177817781777 },
                { start: 3000, density: 0.10731073107310798 },
              ],
              percentiles: { p75: 1983 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.955991198239648 },
                { start: 100, end: 300, density: 0.033106621324264854 },
                { start: 300, density: 0.010902180436087284 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7741951609678062 },
                { start: 2500, end: 4000, density: 0.13532293541291734 },
                { start: 4000, density: 0.09048190361927656 },
              ],
              percentiles: { p75: 2394 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.in/",
          normalizedUrl: "https://www.yara.in",
        },
      },
      extractedResults: {
        fcp: 1983,
        lcp: 2394,
        cls: "0.04",
        fid: 13,
      },
      timestamp: 1652965226560,
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
                { start: 0, end: 200, density: 0.6574657465746578 },
                { start: 200, end: 500, density: 0.2581258125812582 },
                { start: 500, density: 0.084408440844084 },
              ],
              percentiles: { p75: 246 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.5249950009998005 },
                { start: 800, end: 1800, density: 0.28104379124175183 },
                { start: 1800, density: 0.19396120775844788 },
              ],
              percentiles: { p75: 1547 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6592681463707238 },
                { start: 1800, end: 3000, density: 0.13187362527494462 },
                { start: 3000, density: 0.20885822835433152 },
              ],
              percentiles: { p75: 2740 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9495050494950504 },
                { start: 100, end: 300, density: 0.0325967403259674 },
                { start: 300, density: 0.017898210178982132 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6715828417158287 },
                { start: 2500, end: 4000, density: 0.17513248675132498 },
                { start: 4000, density: 0.1532846715328464 },
              ],
              percentiles: { p75: 3083 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9056905690569057,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.0661066106610661,
                },
                { start: "0.25", density: 0.028202820282028196 },
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
        fcp: 2740,
        lcp: 3083,
        cls: "0.00",
        fid: 12,
      },
      timestamp: 1652965226877,
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
                  density: 0.9574373753048104,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.028153402793172248,
                },
                { start: "0.25", density: 0.014409221902017282 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5729490022172945 },
                { start: 200, end: 500, density: 0.32416851441241656 },
                { start: 500, density: 0.10288248337028885 },
              ],
              percentiles: { p75: 286 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.6692299119580964 },
                { start: 800, end: 1800, density: 0.26802630112559905 },
                { start: 1800, density: 0.06274378691630458 },
              ],
              percentiles: { p75: 912 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.815206501168875 },
                { start: 1800, end: 3000, density: 0.12479127240342879 },
                { start: 3000, density: 0.06000222642769619 },
              ],
              percentiles: { p75: 1581 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9386739081240099 },
                { start: 100, end: 300, density: 0.024666214075582713 },
                { start: 300, density: 0.036659877800407366 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8481934408004442 },
                { start: 2500, end: 4000, density: 0.10589216231239569 },
                { start: 4000, density: 0.04591439688716006 },
              ],
              percentiles: { p75: 1994 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.ua/",
          normalizedUrl: "https://www.yara.ua",
        },
      },
      extractedResults: {
        fcp: 1581,
        lcp: 1994,
        cls: "0.00",
        fid: 12,
      },
      timestamp: 1652965227265,
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
                { start: 0, end: 100, density: 0.9750950190038007 },
                { start: 100, end: 300, density: 0.017803560712142428 },
                { start: 300, density: 0.0071014202840568 },
              ],
              percentiles: { p75: 9 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.743651269746052 },
                { start: 2500, end: 4000, density: 0.17106578684263182 },
                { start: 4000, density: 0.08528294341131619 },
              ],
              percentiles: { p75: 2671 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.7563756375637563,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.17931793179317929,
                },
                { start: "0.25", density: 0.06430643064306431 },
              ],
              percentiles: { p75: "0.08" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.7966203379662038 },
                { start: 200, end: 500, density: 0.14388561143885617 },
                { start: 500, density: 0.059494050594940104 },
              ],
              percentiles: { p75: 181 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.5217478252174782 },
                { start: 800, end: 1800, density: 0.39566043395660433 },
                { start: 1800, density: 0.08259174082591755 },
              ],
              percentiles: { p75: 1232 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7273454690938194 },
                { start: 1800, end: 3000, density: 0.180236047209442 },
                { start: 3000, density: 0.09241848369673854 },
              ],
              percentiles: { p75: 2015 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yaracanada.ca/",
          normalizedUrl: "https://www.yaracanada.ca",
        },
      },
      extractedResults: { fcp: 2015, lcp: 2671, cls: "0.08", fid: 9 },
      timestamp: 1652965227844,
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
                { start: 0, end: 100, density: 0.9750950190038007 },
                { start: 100, end: 300, density: 0.017803560712142428 },
                { start: 300, density: 0.0071014202840568 },
              ],
              percentiles: { p75: 9 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.743651269746052 },
                { start: 2500, end: 4000, density: 0.17106578684263182 },
                { start: 4000, density: 0.08528294341131619 },
              ],
              percentiles: { p75: 2671 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.7563756375637563,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.17931793179317929,
                },
                { start: "0.25", density: 0.06430643064306431 },
              ],
              percentiles: { p75: "0.08" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.7966203379662038 },
                { start: 200, end: 500, density: 0.14388561143885617 },
                { start: 500, density: 0.059494050594940104 },
              ],
              percentiles: { p75: 181 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.5217478252174782 },
                { start: 800, end: 1800, density: 0.39566043395660433 },
                { start: 1800, density: 0.08259174082591755 },
              ],
              percentiles: { p75: 1232 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7273454690938194 },
                { start: 1800, end: 3000, density: 0.180236047209442 },
                { start: 3000, density: 0.09241848369673854 },
              ],
              percentiles: { p75: 2015 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yaracanada.ca/fr-ca/",
          normalizedUrl: "https://www.yaracanada.ca",
        },
      },
      extractedResults: { fcp: 2015, lcp: 2671, cls: "0.08", fid: 9 },
      timestamp: 1652965228113,
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
                { start: "0.00", end: "0.10", density: 0.8072 },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.12870000000000004,
                },
                { start: "0.25", density: 0.0641 },
              ],
              percentiles: { p75: "0.06" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.7546999999999999 },
                { start: 200, end: 500, density: 0.1851 },
                { start: 500, density: 0.06020000000000007 },
              ],
              percentiles: { p75: 197 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.37163716371637173 },
                { start: 800, end: 1800, density: 0.423042304230423 },
                { start: 1800, density: 0.2053205320532053 },
              ],
              percentiles: { p75: 1649 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6303739252149556 },
                { start: 1800, end: 3000, density: 0.21175764847030543 },
                { start: 3000, density: 0.15786842631473882 },
              ],
              percentiles: { p75: 2457 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9588041195880412 },
                { start: 100, end: 300, density: 0.023697630236976304 },
                { start: 300, density: 0.017498250174982494 },
              ],
              percentiles: { p75: 11 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6815681568156806 },
                { start: 2500, end: 4000, density: 0.19241924192419213 },
                { start: 4000, density: 0.12601260126012734 },
              ],
              percentiles: { p75: 2922 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.au/",
          normalizedUrl: "https://www.yara.com.au",
        },
      },
      extractedResults: {
        fcp: 2457,
        lcp: 2922,
        cls: "0.06",
        fid: 11,
      },
      timestamp: 1652965228467,
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
                  density: 0.9478052194780522,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.035596440355964404,
                },
                { start: "0.25", density: 0.01659834016598337 },
              ],
              percentiles: { p75: "0.02" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.9062 },
                { start: 200, end: 500, density: 0.07509999999999999 },
                { start: 500, density: 0.018699999999999987 },
              ],
              percentiles: { p75: 111 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.5985795738721617 },
                { start: 800, end: 1800, density: 0.33590077023106935 },
                { start: 1800, density: 0.06551965589676888 },
              ],
              percentiles: { p75: 1065 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7830216978302169 },
                { start: 1800, end: 3000, density: 0.16788321167883216 },
                { start: 3000, density: 0.049095090490950746 },
              ],
              percentiles: { p75: 1715 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9876012398760124 },
                { start: 100, end: 300, density: 0.005699430056994301 },
                { start: 300, density: 0.0066993300669933 },
              ],
              percentiles: { p75: 8 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8142185781421861 },
                { start: 2500, end: 4000, density: 0.12398760123987612 },
                { start: 4000, density: 0.061793820617937895 },
              ],
              percentiles: { p75: 2186 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.kr/",
          normalizedUrl: "https://www.yara.kr",
        },
      },
      extractedResults: { fcp: 1715, lcp: 2186, cls: "0.02", fid: 8 },
      timestamp: 1652965229072,
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
                  density: 0.8512851285128513,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.0845084508450845,
                },
                { start: "0.25", density: 0.06420642064206422 },
              ],
              percentiles: { p75: "0.04" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.820782078207821 },
                { start: 200, end: 500, density: 0.11281128112811284 },
                { start: 500, density: 0.06640664066406628 },
              ],
              percentiles: { p75: 159 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.2987298729872986 },
                { start: 800, end: 1800, density: 0.4725472547254723 },
                { start: 1800, density: 0.22872287228722912 },
              ],
              percentiles: { p75: 1749 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.08850885088508917 },
                { start: 1800, end: 3000, density: 0.3844384438443873 },
                { start: 3000, density: 0.5270527052705236 },
              ],
              percentiles: { p75: 5108 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.23036911073322117 },
                { start: 2500, end: 4000, density: 0.3568070421126356 },
                { start: 4000, density: 0.4128238471541432 },
              ],
              percentiles: { p75: 5667 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "http://www.yara.com.mm/",
          normalizedUrl: "http://www.yara.com.mm",
        },
      },
      extractedResults: { fcp: 5108, lcp: 5667, cls: "0.04" },
      timestamp: 1652965229445,
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
                { start: "0.00", end: "0.10", density: 0.8663 },
                { start: "0.10", end: "0.25", density: 0.1012 },
                { start: "0.25", density: 0.032499999999999994 },
              ],
              percentiles: { p75: "0.02" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5647564756475646 },
                { start: 200, end: 500, density: 0.31123112311231116 },
                { start: 500, density: 0.12401240124012441 },
              ],
              percentiles: { p75: 314 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.8451690338067614 },
                { start: 800, end: 1800, density: 0.1285257051410282 },
                { start: 1800, density: 0.026305261052210416 },
              ],
              percentiles: { p75: 681 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.9202159568086384 },
                { start: 1800, end: 3000, density: 0.0575884823035393 },
                { start: 3000, density: 0.022195560887822346 },
              ],
              percentiles: { p75: 1176 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9609882964889468 },
                { start: 100, end: 300, density: 0.019605881764529366 },
                { start: 300, density: 0.019405821746523808 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.9114588541145887 },
                { start: 2500, end: 4000, density: 0.06974302569743025 },
                { start: 4000, density: 0.0187981201879811 },
              ],
              percentiles: { p75: 1733 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yaraagri.cz/",
          normalizedUrl: "https://www.yaraagri.cz",
        },
      },
      extractedResults: {
        fcp: 1176,
        lcp: 1733,
        cls: "0.02",
        fid: 12,
      },
      timestamp: 1652965229979,
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
                  density: 0.9273072692730727,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.04869513048695131,
                },
                { start: "0.25", density: 0.023997600239975988 },
              ],
              percentiles: { p75: "0.01" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.654769046190762 },
                { start: 200, end: 500, density: 0.27684463107378543 },
                { start: 500, density: 0.06838632273545267 },
              ],
              percentiles: { p75: 251 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.4397680695791259 },
                { start: 800, end: 1800, density: 0.4461661501549531 },
                { start: 1800, density: 0.11406578026592107 },
              ],
              percentiles: { p75: 1302 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6139772045590876 },
                { start: 1800, end: 3000, density: 0.2472505498900218 },
                { start: 3000, density: 0.13877224555089057 },
              ],
              percentiles: { p75: 2343 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9744051189762047 },
                { start: 100, end: 300, density: 0.01889622075584883 },
                { start: 300, density: 0.00669866026794641 },
              ],
              percentiles: { p75: 11 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6979791916766699 },
                { start: 2500, end: 4000, density: 0.1894757903161261 },
                { start: 4000, density: 0.11254501800720401 },
              ],
              percentiles: { p75: 2812 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.ec/",
          normalizedUrl: "https://www.yara.com.ec",
        },
      },
      extractedResults: {
        fcp: 2343,
        lcp: 2812,
        cls: "0.01",
        fid: 11,
      },
      timestamp: 1652965230271,
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
                  density: 0.8371674334866973,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.09281856371274254,
                },
                { start: "0.25", density: 0.07001400280056014 },
              ],
              percentiles: { p75: "0.07" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.7140428085617124 },
                { start: 200, end: 500, density: 0.24154830966193241 },
                { start: 500, density: 0.04440888177635517 },
              ],
              percentiles: { p75: 217 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.29575915183036583 },
                { start: 800, end: 1800, density: 0.5518103620724139 },
                { start: 1800, density: 0.1524304860972203 },
              ],
              percentiles: { p75: 1550 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5239476052394751 },
                { start: 1800, end: 3000, density: 0.3182681731826813 },
                { start: 3000, density: 0.1577842215778436 },
              ],
              percentiles: { p75: 2526 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9793041391721655 },
                { start: 100, end: 300, density: 0.015896820635872826 },
                { start: 300, density: 0.004799040191961611 },
              ],
              percentiles: { p75: 10 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6469793958791746 },
                { start: 2500, end: 4000, density: 0.23229645929185805 },
                { start: 4000, density: 0.12072414482896725 },
              ],
              percentiles: { p75: 3036 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.cl/",
          normalizedUrl: "https://www.yara.cl",
        },
      },
      extractedResults: {
        fcp: 2526,
        lcp: 3036,
        cls: "0.07",
        fid: 10,
      },
      timestamp: 1652965230913,
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
                  density: 0.8363000000000002,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.11880000000000002,
                },
                { start: "0.25", density: 0.04490000000000003 },
              ],
              percentiles: { p75: "0.05" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.520504100820164 },
                { start: 200, end: 500, density: 0.33056611322264456 },
                { start: 500, density: 0.1489297859571915 },
              ],
              percentiles: { p75: 336 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.6313106068179546 },
                { start: 800, end: 1800, density: 0.28521443566929927 },
                { start: 1800, density: 0.08347495751274629 },
              ],
              percentiles: { p75: 1024 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7498999999999991 },
                { start: 1800, end: 3000, density: 0.15529999999999985 },
                { start: 3000, density: 0.09480000000000108 },
              ],
              percentiles: { p75: 1837 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9489846954086226 },
                { start: 100, end: 300, density: 0.03190957287186156 },
                { start: 300, density: 0.019105731719515788 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7853429314137158 },
                { start: 2500, end: 4000, density: 0.13577284543091359 },
                { start: 4000, density: 0.07888422315537057 },
              ],
              percentiles: { p75: 2350 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.fr/",
          normalizedUrl: "https://www.yara.fr",
        },
      },
      extractedResults: {
        fcp: 1837,
        lcp: 2350,
        cls: "0.05",
        fid: 12,
      },
      timestamp: 1652965231294,
    },
    {
      url: "https://www.yara.cm/en-cm/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "https://www.yara.cm" },
          metrics: {
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5985999999999999 },
                { start: 200, end: 500, density: 0.3308 },
                { start: 500, density: 0.07060000000000018 },
              ],
              percentiles: { p75: 254 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.43983194958487537 },
                { start: 800, end: 1800, density: 0.31019305791737517 },
                { start: 1800, density: 0.24997499249774935 },
              ],
              percentiles: { p75: 1674 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5162967406518685 },
                { start: 1800, end: 3000, density: 0.2016596680663863 },
                { start: 3000, density: 0.2820435912817453 },
              ],
              percentiles: { p75: 3040 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9608960896089609 },
                { start: 100, end: 300, density: 0.035903590359035904 },
                { start: 300, density: 0.0032003200320032004 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.5691500000000003 },
                { start: 2500, end: 4000, density: 0.20655000000000007 },
                { start: 4000, density: 0.22429999999999967 },
              ],
              percentiles: { p75: 3600 },
            },
            cumulative_layout_shift: {
              histogram: [
                { start: "0.00", end: "0.10", density: 0.7511 },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.11660000000000001,
                },
                { start: "0.25", density: 0.1322999999999999 },
              ],
              percentiles: { p75: "0.12" },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.cm/en-cm/",
          normalizedUrl: "https://www.yara.cm",
        },
      },
      extractedResults: {
        fcp: 3040,
        lcp: 3600,
        cls: "0.12",
        fid: 12,
      },
      timestamp: 1652965231768,
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
                { start: 0, end: 800, density: 0.422168867547018 },
                { start: 800, end: 1800, density: 0.46138455382152765 },
                { start: 1800, density: 0.11644657863145425 },
              ],
              percentiles: { p75: 1309 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6226245249049818 },
                { start: 1800, end: 3000, density: 0.24774954990998224 },
                { start: 3000, density: 0.12962592518503582 },
              ],
              percentiles: { p75: 2243 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9739000000000001 },
                { start: 100, end: 300, density: 0.021400000000000002 },
                { start: 300, density: 0.004700000000000005 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7276910764305714 },
                { start: 2500, end: 4000, density: 0.15576230492196858 },
                { start: 4000, density: 0.11654661864746009 },
              ],
              percentiles: { p75: 2673 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9445889177835568,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.04150830166033207,
                },
                { start: "0.25", density: 0.013902780556111221 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.7325267473252672 },
                { start: 200, end: 500, density: 0.2194780521947805 },
                { start: 500, density: 0.047995200479952226 },
              ],
              percentiles: { p75: 210 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.cr/",
          normalizedUrl: "https://www.yara.cr",
        },
      },
      extractedResults: {
        fcp: 2243,
        lcp: 2673,
        cls: "0.00",
        fid: 12,
      },
      timestamp: 1652965232074,
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
                { start: 0, end: 800, density: 0.7421742174217422 },
                { start: 800, end: 1800, density: 0.22322232223222324 },
                { start: 1800, density: 0.03460346034603454 },
              ],
              percentiles: { p75: 820 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8953209358128376 },
                { start: 1800, end: 3000, density: 0.06848630273945208 },
                { start: 3000, density: 0.03619276144771029 },
              ],
              percentiles: { p75: 1261 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9634963496349637 },
                { start: 100, end: 300, density: 0.01760176017601761 },
                { start: 300, density: 0.0189018901890188 },
              ],
              percentiles: { p75: 10 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8706629337066293 },
                { start: 2500, end: 4000, density: 0.08984101589841016 },
                { start: 4000, density: 0.039496050394960555 },
              ],
              percentiles: { p75: 1861 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.7837999999999999,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.17260000000000003,
                },
                { start: "0.25", density: 0.043600000000000035 },
              ],
              percentiles: { p75: "0.08" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6981301869813015 },
                { start: 200, end: 500, density: 0.19898010198980098 },
                { start: 500, density: 0.10288971102889756 },
              ],
              percentiles: { p75: 231 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.nl/",
          normalizedUrl: "https://www.yara.nl",
        },
      },
      extractedResults: {
        fcp: 1261,
        lcp: 1861,
        cls: "0.08",
        fid: 10,
      },
      timestamp: 1652965232400,
    },
    {
      url: "https://www.yara.be/fr-be/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "https://www.yara.be" },
          metrics: {
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.9195080491950806 },
                { start: 1800, end: 3000, density: 0.0616938306169383 },
                { start: 3000, density: 0.018798120187981184 },
              ],
              percentiles: { p75: 1242 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9483155053483957 },
                { start: 100, end: 300, density: 0.021393581925422376 },
                { start: 300, density: 0.03029091272618208 },
              ],
              percentiles: { p75: 10 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.9064219265779733 },
                { start: 2500, end: 4000, density: 0.07197159147744324 },
                { start: 4000, density: 0.02160648194458342 },
              ],
              percentiles: { p75: 1774 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.7595000000000001,
                },
                { start: "0.10", end: "0.25", density: 0.1643 },
                { start: "0.25", density: 0.07619999999999999 },
              ],
              percentiles: { p75: "0.09" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.7017403480696145 },
                { start: 200, end: 500, density: 0.21284256851370287 },
                { start: 500, density: 0.08541708341668271 },
              ],
              percentiles: { p75: 225 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.7878212178782121 },
                { start: 800, end: 1800, density: 0.1922807719228077 },
                { start: 1800, density: 0.019898010198980118 },
              ],
              percentiles: { p75: 793 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.be/fr-be/",
          normalizedUrl: "https://www.yara.be",
        },
      },
      extractedResults: {
        fcp: 1242,
        lcp: 1774,
        cls: "0.09",
        fid: 10,
      },
      timestamp: 1652965232709,
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
                  density: 0.942970652313213,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.027553505062155585,
                },
                { start: "0.25", density: 0.029475842624631547 },
              ],
              percentiles: { p75: "0.01" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5421545667447307 },
                { start: 200, end: 500, density: 0.3783502472027062 },
                { start: 500, density: 0.07949518605256319 },
              ],
              percentiles: { p75: 295 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.30214625369489767 },
                { start: 800, end: 1800, density: 0.4757743220665723 },
                { start: 1800, density: 0.22207942423853005 },
              ],
              percentiles: { p75: 1751 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.4911257934965669 },
                { start: 1800, end: 3000, density: 0.3071641404326985 },
                { start: 3000, density: 0.20171006607073458 },
              ],
              percentiles: { p75: 2758 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9634988054154499 },
                { start: 100, end: 300, density: 0.028139102734271303 },
                { start: 300, density: 0.008362091850278742 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6300401918838318 },
                { start: 2500, end: 4000, density: 0.2281213535589262 },
                { start: 4000, density: 0.141838454557242 },
              ],
              percentiles: { p75: 3089 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.pe/",
          normalizedUrl: "https://www.yara.com.pe",
        },
      },
      extractedResults: {
        fcp: 2758,
        lcp: 3089,
        cls: "0.01",
        fid: 12,
      },
      timestamp: 1652965233116,
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
                  density: 0.8556855685568556,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.1025102510251025,
                },
                { start: "0.25", density: 0.04180418041804179 },
              ],
              percentiles: { p75: "0.03" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.48825117488251135 },
                { start: 200, end: 500, density: 0.29917008299170056 },
                { start: 500, density: 0.21257874212578806 },
              ],
              percentiles: { p75: 434 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.407863145258103 },
                { start: 800, end: 1800, density: 0.39565826330532183 },
                { start: 1800, density: 0.19647859143657515 },
              ],
              percentiles: { p75: 1611 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.503052136495551 },
                { start: 1800, end: 3000, density: 0.24176923846692883 },
                { start: 3000, density: 0.25517862503752015 },
              ],
              percentiles: { p75: 3094 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.912256128064032 },
                { start: 100, end: 300, density: 0.058129064532266135 },
                { start: 300, density: 0.029614807403701905 },
              ],
              percentiles: { p75: 16 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.5399999999999996 },
                { start: 2500, end: 4000, density: 0.2364999999999997 },
                { start: 4000, density: 0.22350000000000086 },
              ],
              percentiles: { p75: 3799 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yarabrasil.com.br/",
          normalizedUrl: "https://www.yarabrasil.com.br",
        },
      },
      extractedResults: {
        fcp: 3094,
        lcp: 3799,
        cls: "0.03",
        fid: 16,
      },
      timestamp: 1652965233534,
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
                { start: 0, end: 200, density: 0.6574657465746578 },
                { start: 200, end: 500, density: 0.2581258125812582 },
                { start: 500, density: 0.084408440844084 },
              ],
              percentiles: { p75: 230 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.5249950009998005 },
                { start: 800, end: 1800, density: 0.28104379124175183 },
                { start: 1800, density: 0.19396120775844788 },
              ],
              percentiles: { p75: 1547 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6592681463707238 },
                { start: 1800, end: 3000, density: 0.13187362527494462 },
                { start: 3000, density: 0.20885822835433152 },
              ],
              percentiles: { p75: 2599 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9495050494950504 },
                { start: 100, end: 300, density: 0.0325967403259674 },
                { start: 300, density: 0.017898210178982132 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6715828417158287 },
                { start: 2500, end: 4000, density: 0.17513248675132498 },
                { start: 4000, density: 0.1532846715328464 },
              ],
              percentiles: { p75: 3044 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9056905690569057,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.0661066106610661,
                },
                { start: "0.25", density: 0.028202820282028196 },
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
        fcp: 2599,
        lcp: 3044,
        cls: "0.00",
        fid: 12,
      },
      timestamp: 1652965234046,
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
                { start: 0, end: 800, density: 0.6235117558779386 },
                { start: 800, end: 1800, density: 0.28924462231115555 },
                { start: 1800, density: 0.08724362181090584 },
              ],
              percentiles: { p75: 1088 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.763105242096838 },
                { start: 1800, end: 3000, density: 0.14815926370548205 },
                { start: 3000, density: 0.08873549419767984 },
              ],
              percentiles: { p75: 1757 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9757975797579759 },
                { start: 100, end: 300, density: 0.0179017901790179 },
                { start: 300, density: 0.006300630063006277 },
              ],
              percentiles: { p75: 11 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7832283228322826 },
                { start: 2500, end: 4000, density: 0.1338633863386338 },
                { start: 4000, density: 0.08290829082908346 },
              ],
              percentiles: { p75: 2312 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8284828482848284,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.1426142614261426,
                },
                { start: "0.25", density: 0.028902890289028895 },
              ],
              percentiles: { p75: "0.06" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.8028999999999997 },
                { start: 200, end: 500, density: 0.1384 },
                { start: 500, density: 0.0587000000000002 },
              ],
              percentiles: { p75: 171 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com/",
          normalizedUrl: "https://www.yara.com",
        },
      },
      extractedResults: {
        fcp: 1757,
        lcp: 2312,
        cls: "0.06",
        fid: 11,
      },
      timestamp: 1652965234522,
    },
    {
      url: "https://www.yara.pt/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "https://www.yara.pt" },
          metrics: {
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8434999999999997 },
                { start: 1800, end: 3000, density: 0.10009999999999995 },
                { start: 3000, density: 0.056400000000000346 },
              ],
              percentiles: { p75: 1438 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.957991598319664 },
                { start: 100, end: 300, density: 0.02890578115623124 },
                { start: 300, density: 0.013102620524104828 },
              ],
              percentiles: { p75: 11 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8536707341468293 },
                { start: 2500, end: 4000, density: 0.09871974394878973 },
                { start: 4000, density: 0.04760952190438109 },
              ],
              percentiles: { p75: 1948 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9556044395560443,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.029397060293970604,
                },
                { start: "0.25", density: 0.014998500149985 },
              ],
              percentiles: { p75: "0.01" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6294370562943706 },
                { start: 200, end: 500, density: 0.28757124287571245 },
                { start: 500, density: 0.0829917008299168 },
              ],
              percentiles: { p75: 257 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.7222722272227223 },
                { start: 800, end: 1800, density: 0.23102310231023096 },
                { start: 1800, density: 0.04670467046704662 },
              ],
              percentiles: { p75: 855 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.pt/",
          normalizedUrl: "https://www.yara.pt",
        },
      },
      extractedResults: {
        fcp: 1438,
        lcp: 1948,
        cls: "0.01",
        fid: 11,
      },
      timestamp: 1652965234865,
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
                { start: 0, end: 800, density: 0.4607460746074611 },
                { start: 800, end: 1800, density: 0.34883488348834907 },
                { start: 1800, density: 0.19041904190418982 },
              ],
              percentiles: { p75: 1571 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5310531053105305 },
                { start: 1800, end: 3000, density: 0.22362236223622334 },
                { start: 3000, density: 0.24532453245324617 },
              ],
              percentiles: { p75: 2994 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9577042295770423 },
                { start: 100, end: 300, density: 0.0320967903209679 },
                { start: 300, density: 0.01019898010198979 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.5996099609960979 },
                { start: 2500, end: 4000, density: 0.19706970697069662 },
                { start: 4000, density: 0.20332033203320551 },
              ],
              percentiles: { p75: 3567 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8996999999999999,
                },
                { start: "0.10", end: "0.25", density: 0.0649 },
                { start: "0.25", density: 0.03539999999999999 },
              ],
              percentiles: { p75: "0.01" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5796579657965802 },
                { start: 200, end: 500, density: 0.29532953295329556 },
                { start: 500, density: 0.1250125012501242 },
              ],
              percentiles: { p75: 290 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.ci/",
          normalizedUrl: "https://www.yara.ci",
        },
      },
      extractedResults: {
        fcp: 2994,
        lcp: 3567,
        cls: "0.01",
        fid: 12,
      },
      timestamp: 1652965235221,
    },
    {
      url: "https://www.yara.co.nz/",
      deviceTargeted: "PHONE",
      results: {
        record: {
          key: { formFactor: "PHONE", origin: "https://www.yara.co.nz" },
          metrics: {
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.3194560669456067 },
                { start: 800, end: 1800, density: 0.46338912133891214 },
                { start: 1800, density: 0.21715481171548118 },
              ],
              percentiles: { p75: 1672 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5461933276304534 },
                { start: 1800, end: 3000, density: 0.3085970915312233 },
                { start: 3000, density: 0.14520958083832342 },
              ],
              percentiles: { p75: 2559 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9559144478393714 },
                { start: 100, end: 300, density: 0.01243998254037538 },
                { start: 300, density: 0.031645569620253174 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6859953945991206 },
                { start: 2500, end: 4000, density: 0.22336194264182527 },
                { start: 4000, density: 0.09064266275905418 },
              ],
              percentiles: { p75: 2910 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9764804703905922,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.005039899202015959,
                },
                { start: "0.25", density: 0.018479630407391843 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6672344049393231 },
                { start: 200, end: 500, density: 0.2616563764104748 },
                { start: 500, density: 0.07110921865020216 },
              ],
              percentiles: { p75: 245 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.co.nz/",
          normalizedUrl: "https://www.yara.co.nz",
        },
      },
      extractedResults: {
        fcp: 2559,
        lcp: 2910,
        cls: "0.00",
        fid: 13,
      },
      timestamp: 1652965235608,
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
                { start: 0, end: 200, density: 0.5597 },
                { start: 200, end: 500, density: 0.3224 },
                { start: 500, density: 0.11790000000000009 },
              ],
              percentiles: { p75: 311 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.7250450090018 },
                { start: 800, end: 1800, density: 0.2252450490098019 },
                { start: 1800, density: 0.04970994198839812 },
              ],
              percentiles: { p75: 848 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8710128987101288 },
                { start: 1800, end: 3000, density: 0.09339066093390662 },
                { start: 3000, density: 0.03559644035596464 },
              ],
              percentiles: { p75: 1356 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9519999999999998 },
                { start: 100, end: 300, density: 0.02919999999999999 },
                { start: 300, density: 0.018800000000000063 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8784999999999994 },
                { start: 2500, end: 4000, density: 0.08929999999999993 },
                { start: 4000, density: 0.03220000000000057 },
              ],
              percentiles: { p75: 1851 },
            },
            cumulative_layout_shift: {
              histogram: [
                { start: "0.00", end: "0.10", density: 0.8653 },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.08639999999999999,
                },
                { start: "0.25", density: 0.04830000000000001 },
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
        fcp: 1356,
        lcp: 1851,
        cls: "0.02",
        fid: 13,
      },
      timestamp: 1652965236022,
    },
    {
      url: "https://www.yara.com.co/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "https://www.yara.com.co" },
          metrics: {
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6304630463046308 },
                { start: 200, end: 500, density: 0.2822282228222824 },
                { start: 500, density: 0.0873087308730868 },
              ],
              percentiles: { p75: 260 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.4547364209262781 },
                { start: 800, end: 1800, density: 0.417325197559268 },
                { start: 1800, density: 0.1279383815144539 },
              ],
              percentiles: { p75: 1330 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6344365563443647 },
                { start: 1800, end: 3000, density: 0.2124787521247873 },
                { start: 3000, density: 0.153084691530848 },
              ],
              percentiles: { p75: 2331 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9534186325469814 },
                { start: 100, end: 300, density: 0.027888844462215123 },
                { start: 300, density: 0.018692522990803425 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7068500000000009 },
                { start: 2500, end: 4000, density: 0.16335000000000025 },
                { start: 4000, density: 0.12979999999999903 },
              ],
              percentiles: { p75: 2820 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8814881488148815,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.06680668066806682,
                },
                { start: "0.25", density: 0.05170517051705171 },
              ],
              percentiles: { p75: "0.02" },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.co/",
          normalizedUrl: "https://www.yara.com.co",
        },
      },
      extractedResults: {
        fcp: 2331,
        lcp: 2820,
        cls: "0.02",
        fid: 12,
      },
      timestamp: 1652965236328,
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
                { start: 0, end: 2500, density: 0.8791879187918793 },
                { start: 2500, end: 4000, density: 0.09810981098109811 },
                { start: 4000, density: 0.02270227022702266 },
              ],
              percentiles: { p75: 1873 },
            },
            cumulative_layout_shift: {
              histogram: [
                { start: "0.00", end: "0.10", density: 0.8676 },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.10130000000000002,
                },
                { start: "0.25", density: 0.0311 },
              ],
              percentiles: { p75: "0.03" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.4962503749625039 },
                { start: 200, end: 500, density: 0.3872612738726129 },
                { start: 500, density: 0.11648835116488318 },
              ],
              percentiles: { p75: 332 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.6643664366436645 },
                { start: 800, end: 1800, density: 0.30993099309931 },
                { start: 1800, density: 0.025702570257025513 },
              ],
              percentiles: { p75: 907 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8925570228091234 },
                { start: 1800, end: 3000, density: 0.08733493397358941 },
                { start: 3000, density: 0.020108043217287132 },
              ],
              percentiles: { p75: 1361 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9636927385477095 },
                { start: 100, end: 300, density: 0.024404880976195236 },
                { start: 300, density: 0.011902380476095237 },
              ],
              percentiles: { p75: 13 },
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
        lcp: 1873,
        cls: "0.03",
        fid: 13,
      },
      timestamp: 1652965237078,
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
                  density: 0.8934566145092461,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.02844950213371266,
                },
                { start: "0.25", density: 0.07809388335704119 },
              ],
              percentiles: { p75: "0.01" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.4915552944632097 },
                { start: 200, end: 500, density: 0.30959024820091013 },
                { start: 500, density: 0.1988544573358801 },
              ],
              percentiles: { p75: 399 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.36096104634631787 },
                { start: 800, end: 1800, density: 0.4510946829684388 },
                { start: 1800, density: 0.18794427068524341 },
              ],
              percentiles: { p75: 1545 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5718192285549794 },
                { start: 1800, end: 3000, density: 0.24798503166378782 },
                { start: 3000, density: 0.18019573978123293 },
              ],
              percentiles: { p75: 2516 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.8782648541316636 },
                { start: 100, end: 300, density: 0.05361234153047199 },
                { start: 300, density: 0.06812280433786447 },
              ],
              percentiles: { p75: 20 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6491987873538313 },
                { start: 2500, end: 4000, density: 0.18059766132524868 },
                { start: 4000, density: 0.17020355132092 },
              ],
              percentiles: { p75: 3167 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.us/",
          normalizedUrl: "https://www.yara.us",
        },
      },
      extractedResults: {
        fcp: 2516,
        lcp: 3167,
        cls: "0.01",
        fid: 20,
      },
      timestamp: 1652965238173,
    },
    {
      url: "https://www.yara.vn/",
      deviceTargeted: "PHONE",
      results: {
        record: {
          key: { formFactor: "PHONE", origin: "https://www.yara.vn" },
          metrics: {
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8896755162241887 },
                { start: 2500, end: 4000, density: 0.08294985250737459 },
                { start: 4000, density: 0.027374631268436655 },
              ],
              percentiles: { p75: 1703 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8819656712908535,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.08300023512814483,
                },
                { start: "0.25", density: 0.03503409358100163 },
              ],
              percentiles: { p75: "0.01" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.7900763358778625 },
                { start: 200, end: 500, density: 0.1690955355077492 },
                { start: 500, density: 0.040828128614388254 },
              ],
              percentiles: { p75: 178 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.6456333973128598 },
                { start: 800, end: 1800, density: 0.3174184261036468 },
                { start: 1800, density: 0.03694817658349345 },
              ],
              percentiles: { p75: 974 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8479773558202621 },
                { start: 1800, end: 3000, density: 0.11451822148838313 },
                { start: 3000, density: 0.037504422691354775 },
              ],
              percentiles: { p75: 1381 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.vn/",
          normalizedUrl: "https://www.yara.vn",
        },
      },
      extractedResults: { fcp: 1381, lcp: 1703, cls: "0.01" },
      timestamp: 1652965239354,
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
                  density: 0.9435943594359436,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.04430443044304431,
                },
                { start: "0.25", density: 0.012101210121012106 },
              ],
              percentiles: { p75: "0.01" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6156 },
                { start: 200, end: 500, density: 0.2966999999999999 },
                { start: 500, density: 0.0877000000000001 },
              ],
              percentiles: { p75: 263 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.6119611961196121 },
                { start: 800, end: 1800, density: 0.34733473347334737 },
                { start: 1800, density: 0.040704070407040396 },
              ],
              percentiles: { p75: 1014 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8395679135827163 },
                { start: 1800, end: 3000, density: 0.126625325065013 },
                { start: 3000, density: 0.03380676135227068 },
              ],
              percentiles: { p75: 1538 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.970494098819764 },
                { start: 100, end: 300, density: 0.019403880776155232 },
                { start: 300, density: 0.010102020404080841 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8581141885811419 },
                { start: 2500, end: 4000, density: 0.11048895110488953 },
                { start: 4000, density: 0.03139686031396869 },
              ],
              percentiles: { p75: 2021 },
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
        lcp: 2021,
        cls: "0.01",
        fid: 13,
      },
      timestamp: 1652965239901,
    },
    {
      url: "https://www.yara.vn/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "https://www.yara.vn" },
          metrics: {
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.8099380123975204 },
                { start: 200, end: 500, density: 0.15166966606678658 },
                { start: 500, density: 0.03839232153569298 },
              ],
              percentiles: { p75: 168 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.6646335366463355 },
                { start: 800, end: 1800, density: 0.29817018298170195 },
                { start: 1800, density: 0.03719628037196267 },
              ],
              percentiles: { p75: 944 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8544145585441458 },
                { start: 1800, end: 3000, density: 0.10598940105989405 },
                { start: 3000, density: 0.03959604039596018 },
              ],
              percentiles: { p75: 1350 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8902500000000001 },
                { start: 2500, end: 4000, density: 0.08004999999999997 },
                { start: 4000, density: 0.02970000000000002 },
              ],
              percentiles: { p75: 1665 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8476152384761524,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.11338866113388661,
                },
                { start: "0.25", density: 0.03899610038996102 },
              ],
              percentiles: { p75: "0.05" },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.vn/",
          normalizedUrl: "https://www.yara.vn",
        },
      },
      extractedResults: { fcp: 1350, lcp: 1665, cls: "0.05" },
      timestamp: 1652965240239,
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
                  density: 0.8745749149829966,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.0741148229645929,
                },
                { start: "0.25", density: 0.051310262052410474 },
              ],
              percentiles: { p75: "0.01" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5462638791637497 },
                { start: 200, end: 500, density: 0.3073922176652999 },
                { start: 500, density: 0.14634390317095045 },
              ],
              percentiles: { p75: 338 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.45374537453745356 },
                { start: 800, end: 1800, density: 0.43154315431543133 },
                { start: 1800, density: 0.11471147114711515 },
              ],
              percentiles: { p75: 1261 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6256877063118936 },
                { start: 1800, end: 3000, density: 0.22626788036410928 },
                { start: 3000, density: 0.148044413323997 },
              ],
              percentiles: { p75: 2291 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9582125362391283 },
                { start: 100, end: 300, density: 0.026691992402279315 },
                { start: 300, density: 0.015095471358592436 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7040612183655102 },
                { start: 2500, end: 4000, density: 0.16589976993097943 },
                { start: 4000, density: 0.1300390117035104 },
              ],
              percentiles: { p75: 2789 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.mx/",
          normalizedUrl: "https://www.yara.com.mx",
        },
      },
      extractedResults: {
        fcp: 2291,
        lcp: 2789,
        cls: "0.01",
        fid: 12,
      },
      timestamp: 1652965240575,
    },
    {
      url: "https://www.yara.hr/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "https://www.yara.hr" },
          metrics: {
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.4199519711827094 },
                { start: 800, end: 1800, density: 0.38132879727836694 },
                { start: 1800, density: 0.19871923153892374 },
              ],
              percentiles: { p75: 1702 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5371222733640181 },
                { start: 1800, end: 3000, density: 0.34520712427456446 },
                { start: 3000, density: 0.11767060236141745 },
              ],
              percentiles: { p75: 2383 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9276565939563739 },
                { start: 100, end: 300, density: 0.05133079847908745 },
                { start: 300, density: 0.02101260756453874 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6109943977591036 },
                { start: 2500, end: 4000, density: 0.28296318527410946 },
                { start: 4000, density: 0.10604241696678693 },
              ],
              percentiles: { p75: 3079 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9685968596859686,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.020002000200020003,
                },
                { start: "0.25", density: 0.01140114011401141 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5681999999999998 },
                { start: 200, end: 500, density: 0.32609999999999983 },
                { start: 500, density: 0.10570000000000018 },
              ],
              percentiles: { p75: 304 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.hr/",
          normalizedUrl: "https://www.yara.hr",
        },
      },
      extractedResults: {
        fcp: 2383,
        lcp: 3079,
        cls: "0.00",
        fid: 13,
      },
      timestamp: 1652965241058,
    },
    {
      url: "https://www.yara.com.pe/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "https://www.yara.com.pe" },
          metrics: {
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6404219156168761 },
                { start: 2500, end: 4000, density: 0.21660667866426697 },
                { start: 4000, density: 0.1429714057188569 },
              ],
              percentiles: { p75: 3076 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9116911691169116,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.059905990599059905,
                },
                { start: "0.25", density: 0.028402840284028404 },
              ],
              percentiles: { p75: "0.03" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6293482606957218 },
                { start: 200, end: 500, density: 0.30037984806077567 },
                { start: 500, density: 0.0702718912435025 },
              ],
              percentiles: { p75: 264 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.31686831316868336 },
                { start: 800, end: 1800, density: 0.4775522447755227 },
                { start: 1800, density: 0.20557944205579404 },
              ],
              percentiles: { p75: 1700 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5289999999999995 },
                { start: 1800, end: 3000, density: 0.29239999999999977 },
                { start: 3000, density: 0.17860000000000065 },
              ],
              percentiles: { p75: 2612 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9719 },
                { start: 100, end: 300, density: 0.021800000000000003 },
                { start: 300, density: 0.006300000000000005 },
              ],
              percentiles: { p75: 11 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.pe/",
          normalizedUrl: "https://www.yara.com.pe",
        },
      },
      extractedResults: {
        fcp: 2612,
        lcp: 3076,
        cls: "0.03",
        fid: 11,
      },
      timestamp: 1652965241849,
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
                { start: 0, end: 100, density: 0.9487876727849536 },
                { start: 100, end: 300, density: 0.0351234987536823 },
                { start: 300, density: 0.016088828461364127 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7153487338960457 },
                { start: 2500, end: 4000, density: 0.20912927587738775 },
                { start: 4000, density: 0.07552199022656664 },
              ],
              percentiles: { p75: 2767 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9646056368800524,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.01813414900589906,
                },
                { start: "0.25", density: 0.0172602141140485 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6129899216125424 },
                { start: 200, end: 500, density: 0.2891377379619263 },
                { start: 500, density: 0.09787234042553114 },
              ],
              percentiles: { p75: 270 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.3668490652074782 },
                { start: 800, end: 1800, density: 0.5248518011855903 },
                { start: 1800, density: 0.10829913360693155 },
              ],
              percentiles: { p75: 1425 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6116221673771595 },
                { start: 1800, end: 3000, density: 0.26564954004936053 },
                { start: 3000, density: 0.12272829257348009 },
              ],
              percentiles: { p75: 2455 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yaracanada.ca/",
          normalizedUrl: "https://www.yaracanada.ca",
        },
      },
      extractedResults: {
        fcp: 2455,
        lcp: 2767,
        cls: "0.00",
        fid: 12,
      },
      timestamp: 1652965242472,
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
                { start: "0.00", end: "0.10", density: 0.8293 },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.08370000000000001,
                },
                { start: "0.25", density: 0.08700000000000005 },
              ],
              percentiles: { p75: "0.04" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5719999999999998 },
                { start: 200, end: 500, density: 0.2612999999999999 },
                { start: 500, density: 0.16670000000000032 },
              ],
              percentiles: { p75: 309 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.28457154284571556 },
                { start: 800, end: 1800, density: 0.4640535946405362 },
                { start: 1800, density: 0.2513748625137482 },
              ],
              percentiles: { p75: 1851 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5225000000000003 },
                { start: 1800, end: 3000, density: 0.34200000000000025 },
                { start: 3000, density: 0.13549999999999954 },
              ],
              percentiles: { p75: 2574 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9296929692969297 },
                { start: 100, end: 300, density: 0.02470247024702471 },
                { start: 300, density: 0.04560456045604561 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6287 },
                { start: 2500, end: 4000, density: 0.2754 },
                { start: 4000, density: 0.09589999999999994 },
              ],
              percentiles: { p75: 3060 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.ie/",
          normalizedUrl: "https://www.yara.ie",
        },
      },
      extractedResults: {
        fcp: 2574,
        lcp: 3060,
        cls: "0.04",
        fid: 13,
      },
      timestamp: 1652965242838,
    },
    {
      url: "https://www.yara.com.mx/",
      deviceTargeted: "PHONE",
      results: {
        record: {
          key: { formFactor: "PHONE", origin: "https://www.yara.com.mx" },
          metrics: {
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9542950162784872 },
                { start: 100, end: 300, density: 0.029802153769095913 },
                { start: 300, density: 0.015902829952416805 },
              ],
              percentiles: { p75: 14 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7098712967459929 },
                { start: 2500, end: 4000, density: 0.1678606119475473 },
                { start: 4000, density: 0.12226809130645984 },
              ],
              percentiles: { p75: 2742 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9355928114823302,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.02508744421662043,
                },
                { start: "0.25", density: 0.03931974430104933 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.4788042146532728 },
                { start: 200, end: 500, density: 0.35751041411418877 },
                { start: 500, density: 0.16368537123253848 },
              ],
              percentiles: { p75: 371 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.4423123633713867 },
                { start: 800, end: 1800, density: 0.43927617196988067 },
                { start: 1800, density: 0.11841146465873265 },
              ],
              percentiles: { p75: 1282 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6126872032144159 },
                { start: 1800, end: 3000, density: 0.2353585778643613 },
                { start: 3000, density: 0.15195421892122285 },
              ],
              percentiles: { p75: 2336 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.mx/",
          normalizedUrl: "https://www.yara.com.mx",
        },
      },
      extractedResults: {
        fcp: 2336,
        lcp: 2742,
        cls: "0.00",
        fid: 14,
      },
      timestamp: 1652965243090,
    },
    {
      url: "https://www.yara.ua/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "https://www.yara.ua" },
          metrics: {
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6096609660966098 },
                { start: 200, end: 500, density: 0.29552955295529554 },
                { start: 500, density: 0.09480948094809456 },
              ],
              percentiles: { p75: 273 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.6856628674265146 },
                { start: 800, end: 1800, density: 0.2551489702059587 },
                { start: 1800, density: 0.05918816236752661 },
              ],
              percentiles: { p75: 889 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8232646529305861 },
                { start: 1800, end: 3000, density: 0.11942388477695541 },
                { start: 3000, density: 0.05731146229245838 },
              ],
              percentiles: { p75: 1556 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9453218712514995 },
                { start: 100, end: 300, density: 0.02229108356657337 },
                { start: 300, density: 0.03238704518192726 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8495300939812037 },
                { start: 2500, end: 4000, density: 0.1046790641871626 },
                { start: 4000, density: 0.04579084183163363 },
              ],
              percentiles: { p75: 2000 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9217921792179219,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.06330633063306332,
                },
                { start: "0.25", density: 0.014901490149014896 },
              ],
              percentiles: { p75: "0.01" },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.ua/",
          normalizedUrl: "https://www.yara.ua",
        },
      },
      extractedResults: {
        fcp: 1556,
        lcp: 2000,
        cls: "0.01",
        fid: 12,
      },
      timestamp: 1652965243474,
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
                { start: 0, end: 100, density: 0.9550143953934741 },
                { start: 100, end: 300, density: 0.02615163147792706 },
                { start: 300, density: 0.018833973128598875 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8205537806176783 },
                { start: 2500, end: 4000, density: 0.12939297124600638 },
                { start: 4000, density: 0.05005324813631539 },
              ],
              percentiles: { p75: 2184 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8760486825002954,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.0934656741108354,
                },
                { start: "0.25", density: 0.030485643388869187 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5575552179502161 },
                { start: 200, end: 500, density: 0.33235947177749214 },
                { start: 500, density: 0.11008531027229175 },
              ],
              percentiles: { p75: 293 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.6013171821709986 },
                { start: 800, end: 1800, density: 0.35575679172056923 },
                { start: 1800, density: 0.042926026108432234 },
              ],
              percentiles: { p75: 986 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7868464632126796 },
                { start: 1800, end: 3000, density: 0.1587414241779038 },
                { start: 3000, density: 0.05441211260941658 },
              ],
              percentiles: { p75: 1706 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.gr/",
          normalizedUrl: "https://www.yara.gr",
        },
      },
      extractedResults: {
        fcp: 1706,
        lcp: 2184,
        cls: "0.00",
        fid: 12,
      },
      timestamp: 1652965243722,
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
                { start: 0, end: 200, density: 0.47234416154521486 },
                { start: 200, end: 500, density: 0.3802834566662484 },
                { start: 500, density: 0.14737238178853673 },
              ],
              percentiles: { p75: 354 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.8210874824907679 },
                { start: 800, end: 1800, density: 0.1484782885521457 },
                { start: 1800, density: 0.030434228957086414 },
              ],
              percentiles: { p75: 716 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.9081722874826325 },
                { start: 1800, end: 3000, density: 0.06618668687634205 },
                { start: 3000, density: 0.02564102564102553 },
              ],
              percentiles: { p75: 1231 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9512320990839893 },
                { start: 100, end: 300, density: 0.02373887240356084 },
                { start: 300, density: 0.025029028512449814 },
              ],
              percentiles: { p75: 14 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.902816367769639 },
                { start: 2500, end: 4000, density: 0.07609244758777471 },
                { start: 4000, density: 0.021091184642586355 },
              ],
              percentiles: { p75: 1798 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8963522012578615,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.07157232704402515,
                },
                { start: "0.25", density: 0.0320754716981132 },
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
      extractedResults: {
        fcp: 1231,
        lcp: 1798,
        cls: "0.00",
        fid: 14,
      },
      timestamp: 1652965244135,
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
                  density: 0.9276934201012291,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.04681851048445409,
                },
                { start: "0.25", density: 0.025488069414316698 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6705358870187654 },
                { start: 200, end: 500, density: 0.23447475333720244 },
                { start: 500, density: 0.09498935964403221 },
              ],
              percentiles: { p75: 239 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.5101588474325817 },
                { start: 800, end: 1800, density: 0.3684891023272992 },
                { start: 1800, density: 0.12135205024011923 },
              ],
              percentiles: { p75: 1301 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6715341959334556 },
                { start: 1800, end: 3000, density: 0.20073937153419566 },
                { start: 3000, density: 0.12772643253234872 },
              ],
              percentiles: { p75: 2177 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9611689351481186 },
                { start: 100, end: 300, density: 0.02822257806244996 },
                { start: 300, density: 0.010608486789431501 },
              ],
              percentiles: { p75: 15 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7298142357917973 },
                { start: 2500, end: 4000, density: 0.16829133713444924 },
                { start: 4000, density: 0.10189442707375351 },
              ],
              percentiles: { p75: 2618 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com/",
          normalizedUrl: "https://www.yara.com",
        },
      },
      extractedResults: {
        fcp: 2177,
        lcp: 2618,
        cls: "0.00",
        fid: 15,
      },
      timestamp: 1652965244524,
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
                { start: 0, end: 800, density: 0.5308732188527581 },
                { start: 800, end: 1800, density: 0.37778589696748216 },
                { start: 1800, density: 0.09134088417975995 },
              ],
              percentiles: { p75: 1146 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7313029595972006 },
                { start: 1800, end: 3000, density: 0.17868107577060058 },
                { start: 3000, density: 0.09001596463219884 },
              ],
              percentiles: { p75: 1887 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9191267675514762 },
                { start: 100, end: 300, density: 0.047630860828578536 },
                { start: 300, density: 0.03324237161994527 },
              ],
              percentiles: { p75: 16 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7840657991652342 },
                { start: 2500, end: 4000, density: 0.14657500613798186 },
                { start: 4000, density: 0.06935919469678382 },
              ],
              percentiles: { p75: 2338 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9373855730501649,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.029659465397290367,
                },
                { start: "0.25", density: 0.03295496155254485 },
              ],
              percentiles: { p75: "0.01" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.397225264695144 },
                { start: 200, end: 500, density: 0.42996227333576703 },
                { start: 500, density: 0.17281246196908898 },
              ],
              percentiles: { p75: 396 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.es/",
          normalizedUrl: "https://www.yara.es",
        },
      },
      extractedResults: {
        fcp: 1887,
        lcp: 2338,
        cls: "0.01",
        fid: 16,
      },
      timestamp: 1652965244874,
    },
  ],
};
