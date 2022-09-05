export const audit4 = {
  date: "2022-03-18",
  legacyAudit: true,
  legacyAuditType: 1,
  legacyAuditId: "2022-03-18-legacy-audit",
  audits: [
    {
      url: "https://www.yara.se/",
      results: {
        record: {
          key: {
            origin: "https://www.yara.se",
          },
          metrics: {
            first_contentful_paint: {
              histogram: [
                {
                  start: 0,
                  end: 1800,
                  density: 0.9188081191880881,
                },
                {
                  start: 1800,
                  end: 3000,
                  density: 0.06589341065893457,
                },
                {
                  start: 3000,
                  density: 0.015298470152984855,
                },
              ],
              percentiles: {
                p75: 1264,
              },
            },
            first_input_delay: {
              histogram: [
                {
                  start: 0,
                  end: 100,
                  density: 0.9766093562574958,
                },
                {
                  start: 100,
                  end: 300,
                  density: 0.01519392243102757,
                },
                {
                  start: 300,
                  density: 0.008196721311475362,
                },
              ],
              percentiles: {
                p75: 10,
              },
            },
            largest_contentful_paint: {
              histogram: [
                {
                  start: 0,
                  end: 2500,
                  density: 0.9199580041995831,
                },
                {
                  start: 2500,
                  end: 4000,
                  density: 0.06364363563643657,
                },
                {
                  start: 4000,
                  density: 0.016398360163983643,
                },
              ],
              percentiles: {
                p75: 1712,
              },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.7764000000000002,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.16830000000000006,
                },
                {
                  start: "0.25",
                  density: 0.055299999999999995,
                },
              ],
              percentiles: {
                p75: "0.07",
              },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.se/",
          normalizedUrl: "https://www.yara.se",
        },
      },
    },
    {
      url: "https://www.yara.nl/",
      results: {
        record: {
          key: {
            origin: "https://www.yara.nl",
          },
          metrics: {
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.7756000000000003,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.1698,
                },
                {
                  start: "0.25",
                  density: 0.05460000000000004,
                },
              ],
              percentiles: {
                p75: "0.08",
              },
            },
            first_contentful_paint: {
              histogram: [
                {
                  start: 0,
                  end: 1800,
                  density: 0.885911408859118,
                },
                {
                  start: 1800,
                  end: 3000,
                  density: 0.08739126087391297,
                },
                {
                  start: 3000,
                  density: 0.02669733026697346,
                },
              ],
              percentiles: {
                p75: 1332,
              },
            },
            first_input_delay: {
              histogram: [
                {
                  start: 0,
                  end: 100,
                  density: 0.9629000000000026,
                },
                {
                  start: 100,
                  end: 300,
                  density: 0.021900000000000062,
                },
                {
                  start: 300,
                  density: 0.015200000000000082,
                },
              ],
              percentiles: {
                p75: 10,
              },
            },
            largest_contentful_paint: {
              histogram: [
                {
                  start: 0,
                  end: 2500,
                  density: 0.8748374837483766,
                },
                {
                  start: 2500,
                  end: 4000,
                  density: 0.09055905590559078,
                },
                {
                  start: 4000,
                  density: 0.03460346034603463,
                },
              ],
              percentiles: {
                p75: 1958,
              },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.nl/",
          normalizedUrl: "https://www.yara.nl",
        },
      },
    },
    {
      url: "https://www.yara.pl/",
      results: {
        record: {
          key: {
            origin: "https://www.yara.pl",
          },
          metrics: {
            first_input_delay: {
              histogram: [
                {
                  start: 0,
                  end: 100,
                  density: 0.9581958195819599,
                },
                {
                  start: 100,
                  end: 300,
                  density: 0.026002600260026047,
                },
                {
                  start: 300,
                  density: 0.01580158015801585,
                },
              ],
              percentiles: {
                p75: 12,
              },
            },
            largest_contentful_paint: {
              histogram: [
                {
                  start: 0,
                  end: 2500,
                  density: 0.8084425327598326,
                },
                {
                  start: 2500,
                  end: 4000,
                  density: 0.1429428828648603,
                },
                {
                  start: 4000,
                  density: 0.048614584375313345,
                },
              ],
              percentiles: {
                p75: 2248,
              },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.7534000000000004,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.2077000000000001,
                },
                {
                  start: "0.25",
                  density: 0.03889999999999998,
                },
              ],
              percentiles: {
                p75: "0.09",
              },
            },
            first_contentful_paint: {
              histogram: [
                {
                  start: 0,
                  end: 1800,
                  density: 0.7652234776522406,
                },
                {
                  start: 1800,
                  end: 3000,
                  density: 0.17738226177382396,
                },
                {
                  start: 3000,
                  density: 0.05739426057394287,
                },
              ],
              percentiles: {
                p75: 1771,
              },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.pl/",
          normalizedUrl: "https://www.yara.pl",
        },
      },
    },
    {
      url: "https://www.yara.ro/",
      results: {
        record: {
          key: {
            origin: "https://www.yara.ro",
          },
          metrics: {
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8985898589858982,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.08650865086508645,
                },
                {
                  start: "0.25",
                  density: 0.014901490149014901,
                },
              ],
              percentiles: {
                p75: "0.02",
              },
            },
            first_contentful_paint: {
              histogram: [
                {
                  start: 0,
                  end: 1800,
                  density: 0.8137254901960886,
                },
                {
                  start: 1800,
                  end: 3000,
                  density: 0.14615846338535599,
                },
                {
                  start: 3000,
                  density: 0.04011604641856837,
                },
              ],
              percentiles: {
                p75: 1639,
              },
            },
            first_input_delay: {
              histogram: [
                {
                  start: 0,
                  end: 100,
                  density: 0.9665866346538613,
                },
                {
                  start: 100,
                  end: 300,
                  density: 0.015506202480992394,
                },
                {
                  start: 300,
                  density: 0.017907162865146032,
                },
              ],
              percentiles: {
                p75: 11,
              },
            },
            largest_contentful_paint: {
              histogram: [
                {
                  start: 0,
                  end: 2500,
                  density: 0.8514945516345155,
                },
                {
                  start: 2500,
                  end: 4000,
                  density: 0.11411576527041965,
                },
                {
                  start: 4000,
                  density: 0.03438968309507189,
                },
              ],
              percentiles: {
                p75: 2050,
              },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.ro/",
          normalizedUrl: "https://www.yara.ro",
        },
      },
    },
    {
      url: "https://www.yara.no/",
      results: {
        record: {
          key: {
            origin: "https://www.yara.no",
          },
          metrics: {
            first_contentful_paint: {
              histogram: [
                {
                  start: 0,
                  end: 1800,
                  density: 0.9428057194280594,
                },
                {
                  start: 1800,
                  end: 3000,
                  density: 0.0399960003999601,
                },
                {
                  start: 3000,
                  density: 0.01719828017198287,
                },
              ],
              percentiles: {
                p75: 1052,
              },
            },
            first_input_delay: {
              histogram: [
                {
                  start: 0,
                  end: 100,
                  density: 0.9811924769907971,
                },
                {
                  start: 100,
                  end: 300,
                  density: 0.012004801920768316,
                },
                {
                  start: 300,
                  density: 0.006802721088435369,
                },
              ],
              percentiles: {
                p75: 10,
              },
            },
            largest_contentful_paint: {
              histogram: [
                {
                  start: 0,
                  end: 2500,
                  density: 0.9379062093790638,
                },
                {
                  start: 2500,
                  end: 4000,
                  density: 0.04699530046995309,
                },
                {
                  start: 4000,
                  density: 0.01509849015098486,
                },
              ],
              percentiles: {
                p75: 1501,
              },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.7703229677032298,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.1847815218478153,
                },
                {
                  start: "0.25",
                  density: 0.044895510448955074,
                },
              ],
              percentiles: {
                p75: "0.08",
              },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.no/",
          normalizedUrl: "https://www.yara.no",
        },
      },
    },
    {
      url: "https://www.yara.co.uk/",
      results: {
        record: {
          key: {
            origin: "https://www.yara.co.uk",
          },
          metrics: {
            largest_contentful_paint: {
              histogram: [
                {
                  start: 0,
                  end: 2500,
                  density: 0.5246573972191667,
                },
                {
                  start: 2500,
                  end: 4000,
                  density: 0.27818345503651143,
                },
                {
                  start: 4000,
                  density: 0.19715914774432478,
                },
              ],
              percentiles: {
                p75: 3622,
              },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.6701999999999999,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.22210000000000002,
                },
                {
                  start: "0.25",
                  density: 0.10770000000000009,
                },
              ],
              percentiles: {
                p75: "0.16",
              },
            },
            first_contentful_paint: {
              histogram: [
                {
                  start: 0,
                  end: 1800,
                  density: 0.4352435243524377,
                },
                {
                  start: 1800,
                  end: 3000,
                  density: 0.29852985298530016,
                },
                {
                  start: 3000,
                  density: 0.2662266226622684,
                },
              ],
              percentiles: {
                p75: 3120,
              },
            },
            first_input_delay: {
              histogram: [
                {
                  start: 0,
                  end: 100,
                  density: 0.9163167366526731,
                },
                {
                  start: 100,
                  end: 300,
                  density: 0.03999200159968023,
                },
                {
                  start: 300,
                  density: 0.04369126174765063,
                },
              ],
              percentiles: {
                p75: 14,
              },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.co.uk/",
          normalizedUrl: "https://www.yara.co.uk",
        },
      },
    },
    {
      url: "https://www.yara.gr/",
      results: {
        record: {
          key: {
            origin: "https://www.yara.gr",
          },
          metrics: {
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8828882888288825,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.10231023102310227,
                },
                {
                  start: "0.25",
                  density: 0.014801480148014787,
                },
              ],
              percentiles: {
                p75: "0.01",
              },
            },
            first_contentful_paint: {
              histogram: [
                {
                  start: 0,
                  end: 1800,
                  density: 0.7654061624649898,
                },
                {
                  start: 1800,
                  end: 3000,
                  density: 0.17266906762705167,
                },
                {
                  start: 3000,
                  density: 0.06192476990796379,
                },
              ],
              percentiles: {
                p75: 1759,
              },
            },
            first_input_delay: {
              histogram: [
                {
                  start: 0,
                  end: 100,
                  density: 0.9654965496549615,
                },
                {
                  start: 100,
                  end: 300,
                  density: 0.022202220222022114,
                },
                {
                  start: 300,
                  density: 0.012301230123012388,
                },
              ],
              percentiles: {
                p75: 12,
              },
            },
            largest_contentful_paint: {
              histogram: [
                {
                  start: 0,
                  end: 2500,
                  density: 0.7925962981490806,
                },
                {
                  start: 2500,
                  end: 4000,
                  density: 0.1492746373186605,
                },
                {
                  start: 4000,
                  density: 0.05812906453226642,
                },
              ],
              percentiles: {
                p75: 2299,
              },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.gr/",
          normalizedUrl: "https://www.yara.gr",
        },
      },
    },
    {
      url: "https://www.yara.cl/",
      results: {
        record: {
          key: {
            origin: "https://www.yara.cl",
          },
          metrics: {
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8242999999999995,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.11569999999999991,
                },
                {
                  start: "0.25",
                  density: 0.05999999999999993,
                },
              ],
              percentiles: {
                p75: "0.08",
              },
            },
            first_contentful_paint: {
              histogram: [
                {
                  start: 0,
                  end: 1800,
                  density: 0.4692592222333341,
                },
                {
                  start: 1800,
                  end: 3000,
                  density: 0.34319704088773667,
                },
                {
                  start: 3000,
                  density: 0.18754373687894155,
                },
              ],
              percentiles: {
                p75: 2723,
              },
            },
            first_input_delay: {
              histogram: [
                {
                  start: 0,
                  end: 100,
                  density: 0.9719056188762247,
                },
                {
                  start: 100,
                  end: 300,
                  density: 0.023295340931813638,
                },
                {
                  start: 300,
                  density: 0.004799040191961611,
                },
              ],
              percentiles: {
                p75: 11,
              },
            },
            largest_contentful_paint: {
              histogram: [
                {
                  start: 0,
                  end: 2500,
                  density: 0.6041104110410981,
                },
                {
                  start: 2500,
                  end: 4000,
                  density: 0.2597759775977571,
                },
                {
                  start: 4000,
                  density: 0.1361136113611375,
                },
              ],
              percentiles: {
                p75: 3161,
              },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.cl/",
          normalizedUrl: "https://www.yara.cl",
        },
      },
    },
    {
      url: "https://www.yara.com.au/",
      results: {
        record: {
          key: {
            origin: "https://www.yara.com.au",
          },
          metrics: {
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.7790999999999998,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.15509999999999996,
                },
                {
                  start: "0.25",
                  density: 0.06579999999999994,
                },
              ],
              percentiles: {
                p75: "0.07",
              },
            },
            first_contentful_paint: {
              histogram: [
                {
                  start: 0,
                  end: 1800,
                  density: 0.6221377862213813,
                },
                {
                  start: 1800,
                  end: 3000,
                  density: 0.22387761223877733,
                },
                {
                  start: 3000,
                  density: 0.15398460153984772,
                },
              ],
              percentiles: {
                p75: 2400,
              },
            },
            first_input_delay: {
              histogram: [
                {
                  start: 0,
                  end: 100,
                  density: 0.9807961592318443,
                },
                {
                  start: 100,
                  end: 300,
                  density: 0.014002800560111993,
                },
                {
                  start: 300,
                  density: 0.005201040208041603,
                },
              ],
              percentiles: {
                p75: 11,
              },
            },
            largest_contentful_paint: {
              histogram: [
                {
                  start: 0,
                  end: 2500,
                  density: 0.6822453264020896,
                },
                {
                  start: 2500,
                  end: 4000,
                  density: 0.19529141257622992,
                },
                {
                  start: 4000,
                  density: 0.12246326102169634,
                },
              ],
              percentiles: {
                p75: 2909,
              },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.au/",
          normalizedUrl: "https://www.yara.com.au",
        },
      },
    },
    {
      url: "https://www.yara.my/",
      results: {
        record: {
          key: {
            origin: "https://www.yara.my",
          },
          metrics: {
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.7999200079991988,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.1280871912808717,
                },
                {
                  start: "0.25",
                  density: 0.07199280071992782,
                },
              ],
              percentiles: {
                p75: "0.06",
              },
            },
            first_contentful_paint: {
              histogram: [
                {
                  start: 0,
                  end: 1800,
                  density: 0.7550000000000012,
                },
                {
                  start: 1800,
                  end: 3000,
                  density: 0.15610000000000032,
                },
                {
                  start: 3000,
                  density: 0.08890000000000058,
                },
              ],
              percentiles: {
                p75: 1805,
              },
            },
            first_input_delay: {
              histogram: [
                {
                  start: 0,
                  end: 100,
                  density: 0.9779022097790222,
                },
                {
                  start: 100,
                  end: 300,
                  density: 0.018198180181981802,
                },
                {
                  start: 300,
                  density: 0.0038996100389960963,
                },
              ],
              percentiles: {
                p75: 13,
              },
            },
            largest_contentful_paint: {
              histogram: [
                {
                  start: 0,
                  end: 2500,
                  density: 0.8176635327065475,
                },
                {
                  start: 2500,
                  end: 4000,
                  density: 0.11172234446889463,
                },
                {
                  start: 4000,
                  density: 0.07061412282456576,
                },
              ],
              percentiles: {
                p75: 2167,
              },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.my/",
          normalizedUrl: "https://www.yara.my",
        },
      },
    },
    {
      url: "https://www.yara.com.co/",
      results: {
        record: {
          key: {
            origin: "https://www.yara.com.co",
          },
          metrics: {
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.7512502500500106,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.16503300660132036,
                },
                {
                  start: "0.25",
                  density: 0.08371674334866985,
                },
              ],
              percentiles: {
                p75: "0.09",
              },
            },
            first_contentful_paint: {
              histogram: [
                {
                  start: 0,
                  end: 1800,
                  density: 0.6058817645293504,
                },
                {
                  start: 1800,
                  end: 3000,
                  density: 0.22656797039111415,
                },
                {
                  start: 3000,
                  density: 0.1675502650795201,
                },
              ],
              percentiles: {
                p75: 2442,
              },
            },
            first_input_delay: {
              histogram: [
                {
                  start: 0,
                  end: 100,
                  density: 0.9594999999999979,
                },
                {
                  start: 100,
                  end: 300,
                  density: 0.02899999999999994,
                },
                {
                  start: 300,
                  density: 0.011500000000000099,
                },
              ],
              percentiles: {
                p75: 13,
              },
            },
            largest_contentful_paint: {
              histogram: [
                {
                  start: 0,
                  end: 2500,
                  density: 0.6859115469281539,
                },
                {
                  start: 2500,
                  end: 4000,
                  density: 0.17700620372223258,
                },
                {
                  start: 4000,
                  density: 0.13708224934960975,
                },
              ],
              percentiles: {
                p75: 2945,
              },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.co/",
          normalizedUrl: "https://www.yara.com.co",
        },
      },
    },
    {
      url: "https://www.yara.it/",
      results: {
        record: {
          key: {
            origin: "https://www.yara.it",
          },
          metrics: {
            first_contentful_paint: {
              histogram: [
                {
                  start: 0,
                  end: 1800,
                  density: 0.8395000000000009,
                },
                {
                  start: 1800,
                  end: 3000,
                  density: 0.10790000000000018,
                },
                {
                  start: 3000,
                  density: 0.05260000000000097,
                },
              ],
              percentiles: {
                p75: 1470,
              },
            },
            first_input_delay: {
              histogram: [
                {
                  start: 0,
                  end: 100,
                  density: 0.9600199900050074,
                },
                {
                  start: 100,
                  end: 300,
                  density: 0.02648675662168943,
                },
                {
                  start: 300,
                  density: 0.013493253373313606,
                },
              ],
              percentiles: {
                p75: 12,
              },
            },
            largest_contentful_paint: {
              histogram: [
                {
                  start: 0,
                  end: 2500,
                  density: 0.868849999999998,
                },
                {
                  start: 2500,
                  end: 4000,
                  density: 0.08924999999999982,
                },
                {
                  start: 4000,
                  density: 0.041900000000000104,
                },
              ],
              percentiles: {
                p75: 1873,
              },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.7991200879912008,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.1290870912908709,
                },
                {
                  start: "0.25",
                  density: 0.07179282071792813,
                },
              ],
              percentiles: {
                p75: "0.05",
              },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.it/",
          normalizedUrl: "https://www.yara.it",
        },
      },
    },
    {
      url: "https://www.yara.com.ar/",
      results: {
        record: {
          key: {
            origin: "https://www.yara.com.ar",
          },
          metrics: {
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.87028702870287,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.10451045104510448,
                },
                {
                  start: "0.25",
                  density: 0.0252025202520252,
                },
              ],
              percentiles: {
                p75: "0.04",
              },
            },
            first_contentful_paint: {
              histogram: [
                {
                  start: 0,
                  end: 1800,
                  density: 0.48019207683073833,
                },
                {
                  start: 1800,
                  end: 3000,
                  density: 0.29881952781112825,
                },
                {
                  start: 3000,
                  density: 0.22098839535814796,
                },
              ],
              percentiles: {
                p75: 2869,
              },
            },
            first_input_delay: {
              histogram: [
                {
                  start: 0,
                  end: 100,
                  density: 0.9665899769930987,
                },
                {
                  start: 100,
                  end: 300,
                  density: 0.026708012403721136,
                },
                {
                  start: 300,
                  density: 0.00670201060318097,
                },
              ],
              percentiles: {
                p75: 11,
              },
            },
            largest_contentful_paint: {
              histogram: [
                {
                  start: 0,
                  end: 2500,
                  density: 0.5919316136772627,
                },
                {
                  start: 2500,
                  end: 4000,
                  density: 0.24520095980803766,
                },
                {
                  start: 4000,
                  density: 0.1628674265146986,
                },
              ],
              percentiles: {
                p75: 3345,
              },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.ar/",
          normalizedUrl: "https://www.yara.com.ar",
        },
      },
    },
    {
      url: "https://www.yara.us/",
      results: {
        record: {
          key: {
            origin: "https://www.yara.us",
          },
          metrics: {
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8046804680468052,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.1493149314931494,
                },
                {
                  start: "0.25",
                  density: 0.04600460046004609,
                },
              ],
              percentiles: {
                p75: "0.06",
              },
            },
            first_contentful_paint: {
              histogram: [
                {
                  start: 0,
                  end: 1800,
                  density: 0.6261504601840738,
                },
                {
                  start: 1800,
                  end: 3000,
                  density: 0.20848339335734298,
                },
                {
                  start: 3000,
                  density: 0.16536614645858452,
                },
              ],
              percentiles: {
                p75: 2400,
              },
            },
            first_input_delay: {
              histogram: [
                {
                  start: 0,
                  end: 100,
                  density: 0.9333666833416686,
                },
                {
                  start: 100,
                  end: 300,
                  density: 0.03581790895447715,
                },
                {
                  start: 300,
                  density: 0.030815407703852028,
                },
              ],
              percentiles: {
                p75: 13,
              },
            },
            largest_contentful_paint: {
              histogram: [
                {
                  start: 0,
                  end: 2500,
                  density: 0.671999999999995,
                },
                {
                  start: 2500,
                  end: 4000,
                  density: 0.1809999999999987,
                },
                {
                  start: 4000,
                  density: 0.1470000000000012,
                },
              ],
              percentiles: {
                p75: 3041,
              },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.us/",
          normalizedUrl: "https://www.yara.us",
        },
      },
    },
    {
      url: "https://www.yara.cm/en-cm/",
      results: {
        record: {
          key: {
            origin: "https://www.yara.cm",
          },
          metrics: {
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.6816000000000005,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.17810000000000012,
                },
                {
                  start: "0.25",
                  density: 0.14030000000000015,
                },
              ],
              percentiles: {
                p75: "0.19",
              },
            },
            first_contentful_paint: {
              histogram: [
                {
                  start: 0,
                  end: 1800,
                  density: 0.5702999999999985,
                },
                {
                  start: 1800,
                  end: 3000,
                  density: 0.16719999999999957,
                },
                {
                  start: 3000,
                  density: 0.2625000000000021,
                },
              ],
              percentiles: {
                p75: 3004,
              },
            },
            first_input_delay: {
              histogram: [
                {
                  start: 0,
                  end: 100,
                  density: 0.9726027397260274,
                },
                {
                  start: 100,
                  end: 300,
                  density: 0.027397260273972605,
                },
                {
                  start: 300,
                },
              ],
              percentiles: {
                p75: 11,
              },
            },
            largest_contentful_paint: {
              histogram: [
                {
                  start: 0,
                  end: 2500,
                  density: 0.6149114911491174,
                },
                {
                  start: 2500,
                  end: 4000,
                  density: 0.17816781678167884,
                },
                {
                  start: 4000,
                  density: 0.20692069206920707,
                },
              ],
              percentiles: {
                p75: 3429,
              },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.cm/en-cm/",
          normalizedUrl: "https://www.yara.cm",
        },
      },
    },
    {
      url: "https://www.yara.cm/",
      results: {
        record: {
          key: {
            origin: "https://www.yara.cm",
          },
          metrics: {
            first_contentful_paint: {
              histogram: [
                {
                  start: 0,
                  end: 1800,
                  density: 0.5702999999999985,
                },
                {
                  start: 1800,
                  end: 3000,
                  density: 0.16719999999999957,
                },
                {
                  start: 3000,
                  density: 0.2625000000000021,
                },
              ],
              percentiles: {
                p75: 3004,
              },
            },
            first_input_delay: {
              histogram: [
                {
                  start: 0,
                  end: 100,
                  density: 0.9726027397260274,
                },
                {
                  start: 100,
                  end: 300,
                  density: 0.027397260273972605,
                },
                {
                  start: 300,
                },
              ],
              percentiles: {
                p75: 11,
              },
            },
            largest_contentful_paint: {
              histogram: [
                {
                  start: 0,
                  end: 2500,
                  density: 0.6149114911491174,
                },
                {
                  start: 2500,
                  end: 4000,
                  density: 0.17816781678167884,
                },
                {
                  start: 4000,
                  density: 0.20692069206920707,
                },
              ],
              percentiles: {
                p75: 3429,
              },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.6816000000000005,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.17810000000000012,
                },
                {
                  start: "0.25",
                  density: 0.14030000000000015,
                },
              ],
              percentiles: {
                p75: "0.19",
              },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.cm/",
          normalizedUrl: "https://www.yara.cm",
        },
      },
    },
    {
      url: "https://www.yara.co.nz/",
      results: {
        record: {
          key: {
            origin: "https://www.yara.co.nz",
          },
          metrics: {
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.7638236176382361,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.1673832616738326,
                },
                {
                  start: "0.25",
                  density: 0.06879312068793121,
                },
              ],
              percentiles: {
                p75: "0.07",
              },
            },
            first_contentful_paint: {
              histogram: [
                {
                  start: 0,
                  end: 1800,
                  density: 0.6678335667133427,
                },
                {
                  start: 1800,
                  end: 3000,
                  density: 0.2225445089017804,
                },
                {
                  start: 3000,
                  density: 0.10962192438487758,
                },
              ],
              percentiles: {
                p75: 2294,
              },
            },
            first_input_delay: {
              histogram: [
                {
                  start: 0,
                  end: 100,
                  density: 0.9828982898289826,
                },
                {
                  start: 100,
                  end: 300,
                  density: 0.014701470147014697,
                },
                {
                  start: 300,
                  density: 0.0024002400240023983,
                },
              ],
              percentiles: {
                p75: 10,
              },
            },
            largest_contentful_paint: {
              histogram: [
                {
                  start: 0,
                  end: 2500,
                  density: 0.742349999999999,
                },
                {
                  start: 2500,
                  end: 4000,
                  density: 0.1702499999999998,
                },
                {
                  start: 4000,
                  density: 0.08739999999999953,
                },
              ],
              percentiles: {
                p75: 2733,
              },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.co.nz/",
          normalizedUrl: "https://www.yara.co.nz",
        },
      },
    },
    {
      url: "https://www.yara.ee/",
      results: {
        record: {
          key: {
            origin: "https://www.yara.ee",
          },
          metrics: {
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.904009599040096,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.0832916708329167,
                },
                {
                  start: "0.25",
                  density: 0.012698730126987301,
                },
              ],
              percentiles: {
                p75: "0.05",
              },
            },
            first_contentful_paint: {
              histogram: [
                {
                  start: 0,
                  end: 1800,
                  density: 0.9541045895410463,
                },
                {
                  start: 1800,
                  end: 3000,
                  density: 0.0415958404159584,
                },
                {
                  start: 3000,
                  density: 0.004299570042995701,
                },
              ],
              percentiles: {
                p75: 1071,
              },
            },
            first_input_delay: {
              histogram: [
                {
                  start: 0,
                  end: 100,
                  density: 0.9789978997899792,
                },
                {
                  start: 100,
                  end: 300,
                  density: 0.01880188018801881,
                },
                {
                  start: 300,
                  density: 0.002200220022002201,
                },
              ],
              percentiles: {
                p75: 9,
              },
            },
            largest_contentful_paint: {
              histogram: [
                {
                  start: 0,
                  end: 2500,
                  density: 0.9504599080183953,
                },
                {
                  start: 2500,
                  end: 4000,
                  density: 0.04104179164167163,
                },
                {
                  start: 4000,
                  density: 0.008498300339932019,
                },
              ],
              percentiles: {
                p75: 1523,
              },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.ee/",
          normalizedUrl: "https://www.yara.ee",
        },
      },
    },
    {
      url: "https://www.yara.co.za/",
      results: {
        record: {
          key: {
            origin: "https://www.yara.co.za",
          },
          metrics: {
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.7901999999999998,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.15619999999999998,
                },
                {
                  start: "0.25",
                  density: 0.053600000000000016,
                },
              ],
              percentiles: {
                p75: "0.07",
              },
            },
            first_contentful_paint: {
              histogram: [
                {
                  start: 0,
                  end: 1800,
                  density: 0.6648670265946836,
                },
                {
                  start: 1800,
                  end: 3000,
                  density: 0.19226154769046264,
                },
                {
                  start: 3000,
                  density: 0.14287142571485598,
                },
              ],
              percentiles: {
                p75: 2236,
              },
            },
            first_input_delay: {
              histogram: [
                {
                  start: 0,
                  end: 100,
                  density: 0.9914991499149916,
                },
                {
                  start: 100,
                  end: 300,
                  density: 0.007500750075007502,
                },
                {
                  start: 300,
                  density: 0.0010001000100010003,
                },
              ],
              percentiles: {
                p75: 10,
              },
            },
            largest_contentful_paint: {
              histogram: [
                {
                  start: 0,
                  end: 2500,
                  density: 0.6910617876424715,
                },
                {
                  start: 2500,
                  end: 4000,
                  density: 0.16476704659068184,
                },
                {
                  start: 4000,
                  density: 0.14417116576684652,
                },
              ],
              percentiles: {
                p75: 2914,
              },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.co.za/",
          normalizedUrl: "https://www.yara.co.za",
        },
      },
    },
    {
      url: "https://www.yara.kr/",
      results: {
        record: {
          key: {
            origin: "https://www.yara.kr",
          },
          metrics: {
            first_contentful_paint: {
              histogram: [
                {
                  start: 0,
                  end: 1800,
                  density: 0.8345999999999989,
                },
                {
                  start: 1800,
                  end: 3000,
                  density: 0.12949999999999978,
                },
                {
                  start: 3000,
                  density: 0.03589999999999977,
                },
              ],
              percentiles: {
                p75: 1511,
              },
            },
            first_input_delay: {
              histogram: [
                {
                  start: 0,
                  end: 100,
                  density: 0.97358943577431,
                },
                {
                  start: 100,
                  end: 300,
                  density: 0.017306922769107645,
                },
                {
                  start: 300,
                  density: 0.009103641456582637,
                },
              ],
              percentiles: {
                p75: 8,
              },
            },
            largest_contentful_paint: {
              histogram: [
                {
                  start: 0,
                  end: 2500,
                  density: 0.8674867486748669,
                },
                {
                  start: 2500,
                  end: 4000,
                  density: 0.10011001100110002,
                },
                {
                  start: 4000,
                  density: 0.03240324032403247,
                },
              ],
              percentiles: {
                p75: 1936,
              },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8743874387438741,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.05480548054805479,
                },
                {
                  start: "0.25",
                  density: 0.07080708070807083,
                },
              ],
              percentiles: {
                p75: "0.03",
              },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.kr/",
          normalizedUrl: "https://www.yara.kr",
        },
      },
    },
    {
      url: "https://www.yara.bo/",
      results: {
        record: {
          key: {
            origin: "https://www.yara.bo",
          },
          metrics: {
            largest_contentful_paint: {
              histogram: [
                {
                  start: 0,
                  end: 2500,
                  density: 0.4614461446144654,
                },
                {
                  start: 2500,
                  end: 4000,
                  density: 0.3336333633363365,
                },
                {
                  start: 4000,
                  density: 0.20492049204920978,
                },
              ],
              percentiles: {
                p75: 3789,
              },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9301999999999998,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.04849999999999999,
                },
                {
                  start: "0.25",
                  density: 0.02129999999999999,
                },
              ],
              percentiles: {
                p75: "0.00",
              },
            },
            first_contentful_paint: {
              histogram: [
                {
                  start: 0,
                  end: 1800,
                  density: 0.3467999999999985,
                },
                {
                  start: 1800,
                  end: 3000,
                  density: 0.34069999999999856,
                },
                {
                  start: 3000,
                  density: 0.31249999999999784,
                },
              ],
              percentiles: {
                p75: 3346,
              },
            },
            first_input_delay: {
              histogram: [
                {
                  start: 0,
                  end: 100,
                  density: 0.9722000000000001,
                },
                {
                  start: 100,
                  end: 300,
                  density: 0.026800000000000004,
                },
                {
                  start: 300,
                  density: 0.001,
                },
              ],
              percentiles: {
                p75: 11,
              },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.bo/",
          normalizedUrl: "https://www.yara.bo",
        },
      },
    },
    {
      url: "https://www.yara.co.th/",
      results: {
        record: {
          key: {
            origin: "https://www.yara.co.th",
          },
          metrics: {
            largest_contentful_paint: {
              histogram: [
                {
                  start: 0,
                  end: 2500,
                  density: 0.7688537707541541,
                },
                {
                  start: 2500,
                  end: 4000,
                  density: 0.15043008601720403,
                },
                {
                  start: 4000,
                  density: 0.08071614322864702,
                },
              ],
              percentiles: {
                p75: 2413,
              },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8143,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.15460000000000002,
                },
                {
                  start: "0.25",
                  density: 0.031099999999999982,
                },
              ],
              percentiles: {
                p75: "0.04",
              },
            },
            first_contentful_paint: {
              histogram: [
                {
                  start: 0,
                  end: 1800,
                  density: 0.7255725572557322,
                },
                {
                  start: 1800,
                  end: 3000,
                  density: 0.20302030203020488,
                },
                {
                  start: 3000,
                  density: 0.07140714071407274,
                },
              ],
              percentiles: {
                p75: 1886,
              },
            },
            first_input_delay: {
              histogram: [
                {
                  start: 0,
                  end: 100,
                  density: 0.9721944388877756,
                },
                {
                  start: 100,
                  end: 300,
                  density: 0.020504100820163993,
                },
                {
                  start: 300,
                  density: 0.007301460292058357,
                },
              ],
              percentiles: {
                p75: 12,
              },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.co.th/",
          normalizedUrl: "https://www.yara.co.th",
        },
      },
    },
    {
      url: "https://www.yara.hr/",
      results: {
        record: {
          key: {
            origin: "https://www.yara.hr",
          },
          metrics: {
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9519903980796165,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.038107621524304885,
                },
                {
                  start: "0.25",
                  density: 0.009901980396079221,
                },
              ],
              percentiles: {
                p75: "0.00",
              },
            },
            first_contentful_paint: {
              histogram: [
                {
                  start: 0,
                  end: 1800,
                  density: 0.4330031021715214,
                },
                {
                  start: 1800,
                  end: 3000,
                  density: 0.41579105373761777,
                },
                {
                  start: 3000,
                  density: 0.15120584409086396,
                },
              ],
              percentiles: {
                p75: 2610,
              },
            },
            first_input_delay: {
              histogram: [
                {
                  start: 0,
                  end: 100,
                  density: 0.9236923692369217,
                },
                {
                  start: 100,
                  end: 300,
                  density: 0.054005400540053886,
                },
                {
                  start: 300,
                  density: 0.022302230223022326,
                },
              ],
              percentiles: {
                p75: 13,
              },
            },
            largest_contentful_paint: {
              histogram: [
                {
                  start: 0,
                  end: 2500,
                  density: 0.5111022204440908,
                },
                {
                  start: 2500,
                  end: 4000,
                  density: 0.34456891378275806,
                },
                {
                  start: 4000,
                  density: 0.14432886577315504,
                },
              ],
              percentiles: {
                p75: 3422,
              },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.hr/",
          normalizedUrl: "https://www.yara.hr",
        },
      },
    },
    {
      url: "https://www.yara.dk/",
      results: {
        record: {
          key: {
            origin: "https://www.yara.dk",
          },
          metrics: {
            first_contentful_paint: {
              histogram: [
                {
                  start: 0,
                  end: 1800,
                  density: 0.8748874887488771,
                },
                {
                  start: 1800,
                  end: 3000,
                  density: 0.09540954095409569,
                },
                {
                  start: 3000,
                  density: 0.02970297029702981,
                },
              ],
              percentiles: {
                p75: 1384,
              },
            },
            first_input_delay: {
              histogram: [
                {
                  start: 0,
                  end: 100,
                  density: 0.9752000000000008,
                },
                {
                  start: 100,
                  end: 300,
                  density: 0.015600000000000013,
                },
                {
                  start: 300,
                  density: 0.009200000000000005,
                },
              ],
              percentiles: {
                p75: 9,
              },
            },
            largest_contentful_paint: {
              histogram: [
                {
                  start: 0,
                  end: 2500,
                  density: 0.8901109889011102,
                },
                {
                  start: 2500,
                  end: 4000,
                  density: 0.08599140085991404,
                },
                {
                  start: 4000,
                  density: 0.02389761023897598,
                },
              ],
              percentiles: {
                p75: 1860,
              },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8013801380138013,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.1668166816681668,
                },
                {
                  start: "0.25",
                  density: 0.03180318031803179,
                },
              ],
              percentiles: {
                p75: "0.09",
              },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.dk/",
          normalizedUrl: "https://www.yara.dk",
        },
      },
    },
    {
      url: "https://www.yara.com.ec/",
      results: {
        record: {
          key: {
            origin: "https://www.yara.com.ec",
          },
          metrics: {
            largest_contentful_paint: {
              histogram: [
                {
                  start: 0,
                  end: 2500,
                  density: 0.6302609217234858,
                },
                {
                  start: 2500,
                  end: 4000,
                  density: 0.23288013595921334,
                },
                {
                  start: 4000,
                  density: 0.13685894231730622,
                },
              ],
              percentiles: {
                p75: 3097,
              },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8330833083308323,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.13591359135913578,
                },
                {
                  start: "0.25",
                  density: 0.031003100310030975,
                },
              ],
              percentiles: {
                p75: "0.04",
              },
            },
            first_contentful_paint: {
              histogram: [
                {
                  start: 0,
                  end: 1800,
                  density: 0.5301530153015385,
                },
                {
                  start: 1800,
                  end: 3000,
                  density: 0.28942894289429394,
                },
                {
                  start: 3000,
                  density: 0.1804180418041846,
                },
              ],
              percentiles: {
                p75: 2622,
              },
            },
            first_input_delay: {
              histogram: [
                {
                  start: 0,
                  end: 100,
                  density: 0.9735079476157136,
                },
                {
                  start: 100,
                  end: 300,
                  density: 0.019794061781465526,
                },
                {
                  start: 300,
                  density: 0.006697990602819139,
                },
              ],
              percentiles: {
                p75: 11,
              },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.ec/",
          normalizedUrl: "https://www.yara.com.ec",
        },
      },
    },
    {
      url: "https://www.yara.hu/",
      results: {
        record: {
          key: {
            origin: "https://www.yara.hu",
          },
          metrics: {
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8707999999999998,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.10559999999999997,
                },
                {
                  start: "0.25",
                  density: 0.023600000000000013,
                },
              ],
              percentiles: {
                p75: "0.04",
              },
            },
            first_contentful_paint: {
              histogram: [
                {
                  start: 0,
                  end: 1800,
                  density: 0.8410682136427315,
                },
                {
                  start: 1800,
                  end: 3000,
                  density: 0.1295259051810366,
                },
                {
                  start: 3000,
                  density: 0.029405881176235216,
                },
              ],
              percentiles: {
                p75: 1572,
              },
            },
            first_input_delay: {
              histogram: [
                {
                  start: 0,
                  end: 100,
                  density: 0.9777999999999987,
                },
                {
                  start: 100,
                  end: 300,
                  density: 0.01459999999999998,
                },
                {
                  start: 300,
                  density: 0.007599999999999994,
                },
              ],
              percentiles: {
                p75: 11,
              },
            },
            largest_contentful_paint: {
              histogram: [
                {
                  start: 0,
                  end: 2500,
                  density: 0.8771245750849884,
                },
                {
                  start: 2500,
                  end: 4000,
                  density: 0.0939812037592487,
                },
                {
                  start: 4000,
                  density: 0.028894221155768927,
                },
              ],
              percentiles: {
                p75: 2002,
              },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.hu/",
          normalizedUrl: "https://www.yara.hu",
        },
      },
    },
    {
      url: "https://www.yara.fi/",
      results: {
        record: {
          key: {
            origin: "https://www.yara.fi",
          },
          metrics: {
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.7527999999999994,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.18379999999999982,
                },
                {
                  start: "0.25",
                  density: 0.06339999999999993,
                },
              ],
              percentiles: {
                p75: "0.09",
              },
            },
            first_contentful_paint: {
              histogram: [
                {
                  start: 0,
                  end: 1800,
                  density: 0.8841768353670759,
                },
                {
                  start: 1800,
                  end: 3000,
                  density: 0.09111822364472921,
                },
                {
                  start: 3000,
                  density: 0.02470494098819758,
                },
              ],
              percentiles: {
                p75: 1338,
              },
            },
            first_input_delay: {
              histogram: [
                {
                  start: 0,
                  end: 100,
                  density: 0.963181590795397,
                },
                {
                  start: 100,
                  end: 300,
                  density: 0.02361180590295146,
                },
                {
                  start: 300,
                  density: 0.013206603301650896,
                },
              ],
              percentiles: {
                p75: 13,
              },
            },
            largest_contentful_paint: {
              histogram: [
                {
                  start: 0,
                  end: 2500,
                  density: 0.8741248249649982,
                },
                {
                  start: 2500,
                  end: 4000,
                  density: 0.10217043408681793,
                },
                {
                  start: 4000,
                  density: 0.023704740948189588,
                },
              ],
              percentiles: {
                p75: 1908,
              },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.fi/",
          normalizedUrl: "https://www.yara.fi",
        },
      },
    },
    {
      url: "https://www.yara.lv/",
      results: {
        record: {
          key: {
            origin: "https://www.yara.lv",
          },
          metrics: {
            first_contentful_paint: {
              histogram: [
                {
                  start: 0,
                  end: 1800,
                  density: 0.8499699939987975,
                },
                {
                  start: 1800,
                  end: 3000,
                  density: 0.11002200440087988,
                },
                {
                  start: 3000,
                  density: 0.04000800160031998,
                },
              ],
              percentiles: {
                p75: 1497,
              },
            },
            first_input_delay: {
              histogram: [
                {
                  start: 0,
                  end: 100,
                  density: 0.9702999999999997,
                },
                {
                  start: 100,
                  end: 300,
                  density: 0.026099999999999988,
                },
                {
                  start: 300,
                  density: 0.003599999999999997,
                },
              ],
              percentiles: {
                p75: 12,
              },
            },
            largest_contentful_paint: {
              histogram: [
                {
                  start: 0,
                  end: 2500,
                  density: 0.8551789642071597,
                },
                {
                  start: 2500,
                  end: 4000,
                  density: 0.1134273145370927,
                },
                {
                  start: 4000,
                  density: 0.03139372125574891,
                },
              ],
              percentiles: {
                p75: 2112,
              },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8946105389461053,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.0858914108589141,
                },
                {
                  start: "0.25",
                  density: 0.01949805019498049,
                },
              ],
              percentiles: {
                p75: "0.04",
              },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.lv/",
          normalizedUrl: "https://www.yara.lv",
        },
      },
    },
    {
      url: "https://www.yara.com.gh/",
      results: {
        record: {
          key: {
            origin: "https://www.yara.com.gh",
          },
          metrics: {
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9193999999999998,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.05159999999999998,
                },
                {
                  start: "0.25",
                  density: 0.02900000000000001,
                },
              ],
              percentiles: {
                p75: "0.00",
              },
            },
            first_contentful_paint: {
              histogram: [
                {
                  start: 0,
                  end: 1800,
                  density: 0.6100000000000017,
                },
                {
                  start: 1800,
                  end: 3000,
                  density: 0.1705000000000004,
                },
                {
                  start: 3000,
                  density: 0.2195000000000005,
                },
              ],
              percentiles: {
                p75: 2707,
              },
            },
            largest_contentful_paint: {
              histogram: [
                {
                  start: 0,
                  end: 2500,
                  density: 0.6295629562956309,
                },
                {
                  start: 2500,
                  end: 4000,
                  density: 0.1969196919691973,
                },
                {
                  start: 4000,
                  density: 0.1735173517351744,
                },
              ],
              percentiles: {
                p75: 3201,
              },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.gh/",
          normalizedUrl: "https://www.yara.com.gh",
        },
      },
    },
    {
      url: "https://www.yara.ua/",
      results: {
        record: {
          key: {
            origin: "https://www.yara.ua",
          },
          metrics: {
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8065000000000003,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.1663000000000001,
                },
                {
                  start: "0.25",
                  density: 0.02720000000000002,
                },
              ],
              percentiles: {
                p75: "0.06",
              },
            },
            first_contentful_paint: {
              histogram: [
                {
                  start: 0,
                  end: 1800,
                  density: 0.7791779177917847,
                },
                {
                  start: 1800,
                  end: 3000,
                  density: 0.15311531153115418,
                },
                {
                  start: 3000,
                  density: 0.0677067706770687,
                },
              ],
              percentiles: {
                p75: 1709,
              },
            },
            first_input_delay: {
              histogram: [
                {
                  start: 0,
                  end: 100,
                  density: 0.9744025597440279,
                },
                {
                  start: 100,
                  end: 300,
                  density: 0.01579842015798424,
                },
                {
                  start: 300,
                  density: 0.009799020097990248,
                },
              ],
              percentiles: {
                p75: 11,
              },
            },
            largest_contentful_paint: {
              histogram: [
                {
                  start: 0,
                  end: 2500,
                  density: 0.8257651530306078,
                },
                {
                  start: 2500,
                  end: 4000,
                  density: 0.1183236647329468,
                },
                {
                  start: 4000,
                  density: 0.055911182236447574,
                },
              ],
              percentiles: {
                p75: 2114,
              },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.ua/",
          normalizedUrl: "https://www.yara.ua",
        },
      },
    },
    {
      url: "https://www.yara.ru/",
      results: {
        record: {
          key: {
            origin: "https://www.yara.ru",
          },
          metrics: {
            first_contentful_paint: {
              histogram: [
                {
                  start: 0,
                  end: 1800,
                  density: 0.6003399660033982,
                },
                {
                  start: 1800,
                  end: 3000,
                  density: 0.24157584241575789,
                },
                {
                  start: 3000,
                  density: 0.1580841915808411,
                },
              ],
              percentiles: {
                p75: 2485,
              },
            },
            first_input_delay: {
              histogram: [
                {
                  start: 0,
                  end: 100,
                  density: 0.9514048595140486,
                },
                {
                  start: 100,
                  end: 300,
                  density: 0.0323967603239676,
                },
                {
                  start: 300,
                  density: 0.0161983801619838,
                },
              ],
              percentiles: {
                p75: 11,
              },
            },
            largest_contentful_paint: {
              histogram: [
                {
                  start: 0,
                  end: 2500,
                  density: 0.679917991799179,
                },
                {
                  start: 2500,
                  end: 4000,
                  density: 0.21837183718371805,
                },
                {
                  start: 4000,
                  density: 0.10171017101710134,
                },
              ],
              percentiles: {
                p75: 2853,
              },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8452999999999999,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.1346,
                },
                {
                  start: "0.25",
                  density: 0.020099999999999982,
                },
              ],
              percentiles: {
                p75: "0.05",
              },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.ru/",
          normalizedUrl: "https://www.yara.ru",
        },
      },
    },
    {
      url: "https://www.yaracanada.ca/fr-ca/",
      results: {
        record: {
          key: {
            origin: "https://www.yaracanada.ca",
          },
          metrics: {
            first_contentful_paint: {
              histogram: [
                {
                  start: 0,
                  end: 1800,
                  density: 0.6419074277716706,
                },
                {
                  start: 1800,
                  end: 3000,
                  density: 0.2272318304508655,
                },
                {
                  start: 3000,
                  density: 0.1308607417774686,
                },
              ],
              percentiles: {
                p75: 2266,
              },
            },
            first_input_delay: {
              histogram: [
                {
                  start: 0,
                  end: 100,
                  density: 0.9606157536985208,
                },
                {
                  start: 100,
                  end: 300,
                  density: 0.026389444222311084,
                },
                {
                  start: 300,
                  density: 0.012994802079168337,
                },
              ],
              percentiles: {
                p75: 10,
              },
            },
            largest_contentful_paint: {
              histogram: [
                {
                  start: 0,
                  end: 2500,
                  density: 0.6510848915108514,
                },
                {
                  start: 2500,
                  end: 4000,
                  density: 0.21162883711628916,
                },
                {
                  start: 4000,
                  density: 0.13728627137286495,
                },
              ],
              percentiles: {
                p75: 3131,
              },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.7767553510702144,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.17043408681736355,
                },
                {
                  start: "0.25",
                  density: 0.05281056211242248,
                },
              ],
              percentiles: {
                p75: "0.07",
              },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yaracanada.ca/fr-ca/",
          normalizedUrl: "https://www.yaracanada.ca",
        },
      },
    },
    {
      url: "https://www.yara.cr/",
      results: {
        record: {
          key: {
            origin: "https://www.yara.cr",
          },
          metrics: {
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8895889588958897,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.07890789078907892,
                },
                {
                  start: "0.25",
                  density: 0.03150315031503151,
                },
              ],
              percentiles: {
                p75: "0.02",
              },
            },
            first_contentful_paint: {
              histogram: [
                {
                  start: 0,
                  end: 1800,
                  density: 0.6263252650530152,
                },
                {
                  start: 1800,
                  end: 3000,
                  density: 0.2344468893778774,
                },
                {
                  start: 3000,
                  density: 0.13922784556911433,
                },
              ],
              percentiles: {
                p75: 2310,
              },
            },
            first_input_delay: {
              histogram: [
                {
                  start: 0,
                  end: 100,
                  density: 0.9502049795020506,
                },
                {
                  start: 100,
                  end: 300,
                  density: 0.038796120387961236,
                },
                {
                  start: 300,
                  density: 0.010998900109989032,
                },
              ],
              percentiles: {
                p75: 13,
              },
            },
            largest_contentful_paint: {
              histogram: [
                {
                  start: 0,
                  end: 2500,
                  density: 0.6844946516045204,
                },
                {
                  start: 2500,
                  end: 4000,
                  density: 0.18084574627611763,
                },
                {
                  start: 4000,
                  density: 0.13465960211936515,
                },
              ],
              percentiles: {
                p75: 2970,
              },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.cr/",
          normalizedUrl: "https://www.yara.cr",
        },
      },
    },
    {
      url: "https://www.yara.lt/",
      results: {
        record: {
          key: {
            origin: "https://www.yara.lt",
          },
          metrics: {
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8249999999999997,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.14389999999999994,
                },
                {
                  start: "0.25",
                  density: 0.031099999999999985,
                },
              ],
              percentiles: {
                p75: "0.06",
              },
            },
            first_contentful_paint: {
              histogram: [
                {
                  start: 0,
                  end: 1800,
                  density: 0.8939999999999966,
                },
                {
                  start: 1800,
                  end: 3000,
                  density: 0.08819999999999967,
                },
                {
                  start: 3000,
                  density: 0.017800000000000028,
                },
              ],
              percentiles: {
                p75: 1396,
              },
            },
            first_input_delay: {
              histogram: [
                {
                  start: 0,
                  end: 100,
                  density: 0.9836016398360162,
                },
                {
                  start: 100,
                  end: 300,
                  density: 0.0147985201479852,
                },
                {
                  start: 300,
                  density: 0.0015998400159984018,
                },
              ],
              percentiles: {
                p75: 12,
              },
            },
            largest_contentful_paint: {
              histogram: [
                {
                  start: 0,
                  end: 2500,
                  density: 0.8994499999999973,
                },
                {
                  start: 2500,
                  end: 4000,
                  density: 0.08304999999999974,
                },
                {
                  start: 4000,
                  density: 0.01750000000000006,
                },
              ],
              percentiles: {
                p75: 1834,
              },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.lt/",
          normalizedUrl: "https://www.yara.lt",
        },
      },
    },
    {
      url: "https://www.yara.pt/",
      results: {
        record: {
          key: {
            origin: "https://www.yara.pt",
          },
          metrics: {
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8929000000000001,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.08440000000000002,
                },
                {
                  start: "0.25",
                  density: 0.022699999999999998,
                },
              ],
              percentiles: {
                p75: "0.02",
              },
            },
            first_contentful_paint: {
              histogram: [
                {
                  start: 0,
                  end: 1800,
                  density: 0.7968000000000063,
                },
                {
                  start: 1800,
                  end: 3000,
                  density: 0.12970000000000104,
                },
                {
                  start: 3000,
                  density: 0.07350000000000154,
                },
              ],
              percentiles: {
                p75: 1612,
              },
            },
            first_input_delay: {
              histogram: [
                {
                  start: 0,
                  end: 100,
                  density: 0.9673065386922621,
                },
                {
                  start: 100,
                  end: 300,
                  density: 0.020495900819836047,
                },
                {
                  start: 300,
                  density: 0.012197560487902381,
                },
              ],
              percentiles: {
                p75: 11,
              },
            },
            largest_contentful_paint: {
              histogram: [
                {
                  start: 0,
                  end: 2500,
                  density: 0.8367836783678456,
                },
                {
                  start: 2500,
                  end: 4000,
                  density: 0.10661066106610777,
                },
                {
                  start: 4000,
                  density: 0.05660566056605734,
                },
              ],
              percentiles: {
                p75: 2061,
              },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.pt/",
          normalizedUrl: "https://www.yara.pt",
        },
      },
    },
    {
      url: "https://www.yaracanada.ca/",
      results: {
        record: {
          key: {
            origin: "https://www.yaracanada.ca",
          },
          metrics: {
            first_input_delay: {
              histogram: [
                {
                  start: 0,
                  end: 100,
                  density: 0.9606157536985208,
                },
                {
                  start: 100,
                  end: 300,
                  density: 0.026389444222311084,
                },
                {
                  start: 300,
                  density: 0.012994802079168337,
                },
              ],
              percentiles: {
                p75: 10,
              },
            },
            largest_contentful_paint: {
              histogram: [
                {
                  start: 0,
                  end: 2500,
                  density: 0.6510848915108514,
                },
                {
                  start: 2500,
                  end: 4000,
                  density: 0.21162883711628916,
                },
                {
                  start: 4000,
                  density: 0.13728627137286495,
                },
              ],
              percentiles: {
                p75: 3131,
              },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.7767553510702144,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.17043408681736355,
                },
                {
                  start: "0.25",
                  density: 0.05281056211242248,
                },
              ],
              percentiles: {
                p75: "0.07",
              },
            },
            first_contentful_paint: {
              histogram: [
                {
                  start: 0,
                  end: 1800,
                  density: 0.6419074277716706,
                },
                {
                  start: 1800,
                  end: 3000,
                  density: 0.2272318304508655,
                },
                {
                  start: 3000,
                  density: 0.1308607417774686,
                },
              ],
              percentiles: {
                p75: 2266,
              },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yaracanada.ca/",
          normalizedUrl: "https://www.yaracanada.ca",
        },
      },
    },
    {
      url: "https://www.yara.com.pa/",
      results: {
        record: {
          key: {
            origin: "https://www.yara.com.pa",
          },
          metrics: {
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9053,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.0837,
                },
                {
                  start: "0.25",
                  density: 0.011,
                },
              ],
              percentiles: {
                p75: "0.01",
              },
            },
            first_contentful_paint: {
              histogram: [
                {
                  start: 0,
                  end: 1800,
                  density: 0.6712671267126704,
                },
                {
                  start: 1800,
                  end: 3000,
                  density: 0.24182418241824152,
                },
                {
                  start: 3000,
                  density: 0.08690869086908673,
                },
              ],
              percentiles: {
                p75: 2156,
              },
            },
            largest_contentful_paint: {
              histogram: [
                {
                  start: 0,
                  end: 2500,
                  density: 0.7664733526647308,
                },
                {
                  start: 2500,
                  end: 4000,
                  density: 0.15113488651134832,
                },
                {
                  start: 4000,
                  density: 0.08239176082391765,
                },
              ],
              percentiles: {
                p75: 2648,
              },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.pa/",
          normalizedUrl: "https://www.yara.com.pa",
        },
      },
    },
    {
      url: "https://www.yara.be/",
      results: {
        record: {
          key: {
            origin: "https://www.yara.be",
          },
          metrics: {
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.7218000000000001,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.1884,
                },
                {
                  start: "0.25",
                  density: 0.08979999999999998,
                },
              ],
              percentiles: {
                p75: "0.10",
              },
            },
            first_contentful_paint: {
              histogram: [
                {
                  start: 0,
                  end: 1800,
                  density: 0.8945316405078454,
                },
                {
                  start: 1800,
                  end: 3000,
                  density: 0.07687693691892414,
                },
                {
                  start: 3000,
                  density: 0.02859142257322784,
                },
              ],
              percentiles: {
                p75: 1307,
              },
            },
            first_input_delay: {
              histogram: [
                {
                  start: 0,
                  end: 100,
                  density: 0.9735000000000006,
                },
                {
                  start: 100,
                  end: 300,
                  density: 0.010100000000000005,
                },
                {
                  start: 300,
                  density: 0.016400000000000005,
                },
              ],
              percentiles: {
                p75: 9,
              },
            },
            largest_contentful_paint: {
              histogram: [
                {
                  start: 0,
                  end: 2500,
                  density: 0.8905218956208758,
                },
                {
                  start: 2500,
                  end: 4000,
                  density: 0.09058188362327531,
                },
                {
                  start: 4000,
                  density: 0.01889622075584883,
                },
              ],
              percentiles: {
                p75: 1879,
              },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.be/",
          normalizedUrl: "https://www.yara.be",
        },
      },
    },
    {
      url: "https://www.yara.com.gt/",
      results: {
        record: {
          key: {
            origin: "https://www.yara.com.gt",
          },
          metrics: {
            first_contentful_paint: {
              histogram: [
                {
                  start: 0,
                  end: 1800,
                  density: 0.6737652469506128,
                },
                {
                  start: 1800,
                  end: 3000,
                  density: 0.21145770845830927,
                },
                {
                  start: 3000,
                  density: 0.1147770445910825,
                },
              ],
              percentiles: {
                p75: 2099,
              },
            },
            first_input_delay: {
              histogram: [
                {
                  start: 0,
                  end: 100,
                  density: 0.9638891667500284,
                },
                {
                  start: 100,
                  end: 300,
                  density: 0.025907772331699604,
                },
                {
                  start: 300,
                  density: 0.010203060918275494,
                },
              ],
              percentiles: {
                p75: 12,
              },
            },
            largest_contentful_paint: {
              histogram: [
                {
                  start: 0,
                  end: 2500,
                  density: 0.7215056988602263,
                },
                {
                  start: 2500,
                  end: 4000,
                  density: 0.16141771645670835,
                },
                {
                  start: 4000,
                  density: 0.11707658468306377,
                },
              ],
              percentiles: {
                p75: 2687,
              },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8551999999999997,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.10999999999999999,
                },
                {
                  start: "0.25",
                  density: 0.034800000000000025,
                },
              ],
              percentiles: {
                p75: "0.03",
              },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.gt/",
          normalizedUrl: "https://www.yara.com.gt",
        },
      },
    },
    {
      url: "http://www.yara.com.mm/",
      results: {
        record: {
          key: {
            origin: "http://www.yara.com.mm",
          },
          metrics: {
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8796120387961204,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.07099290070992902,
                },
                {
                  start: "0.25",
                  density: 0.0493950604939506,
                },
              ],
              percentiles: {
                p75: "0.05",
              },
            },
            first_contentful_paint: {
              histogram: [
                {
                  start: 0,
                  end: 1800,
                  density: 0.0663933606639331,
                },
                {
                  start: 1800,
                  end: 3000,
                  density: 0.4249575042495718,
                },
                {
                  start: 3000,
                  density: 0.5086491350864916,
                },
              ],
              percentiles: {
                p75: 4495,
              },
            },
            largest_contentful_paint: {
              histogram: [
                {
                  start: 0,
                  end: 2500,
                  density: 0.22392239223922308,
                },
                {
                  start: 2500,
                  end: 4000,
                  density: 0.402540254025401,
                },
                {
                  start: 4000,
                  density: 0.3735373537353733,
                },
              ],
              percentiles: {
                p75: 4936,
              },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "http://www.yara.com.mm/",
          normalizedUrl: "http://www.yara.com.mm",
        },
      },
    },
    {
      url: "https://www.yara.be/fr-be/",
      results: {
        record: {
          key: {
            origin: "https://www.yara.be",
          },
          metrics: {
            first_input_delay: {
              histogram: [
                {
                  start: 0,
                  end: 100,
                  density: 0.9735000000000006,
                },
                {
                  start: 100,
                  end: 300,
                  density: 0.010100000000000005,
                },
                {
                  start: 300,
                  density: 0.016400000000000005,
                },
              ],
              percentiles: {
                p75: 9,
              },
            },
            largest_contentful_paint: {
              histogram: [
                {
                  start: 0,
                  end: 2500,
                  density: 0.8905218956208758,
                },
                {
                  start: 2500,
                  end: 4000,
                  density: 0.09058188362327531,
                },
                {
                  start: 4000,
                  density: 0.01889622075584883,
                },
              ],
              percentiles: {
                p75: 1879,
              },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.7218000000000001,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.1884,
                },
                {
                  start: "0.25",
                  density: 0.08979999999999998,
                },
              ],
              percentiles: {
                p75: "0.10",
              },
            },
            first_contentful_paint: {
              histogram: [
                {
                  start: 0,
                  end: 1800,
                  density: 0.8945316405078454,
                },
                {
                  start: 1800,
                  end: 3000,
                  density: 0.07687693691892414,
                },
                {
                  start: 3000,
                  density: 0.02859142257322784,
                },
              ],
              percentiles: {
                p75: 1307,
              },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.be/fr-be/",
          normalizedUrl: "https://www.yara.be",
        },
      },
    },
    {
      url: "https://www.yara.de/",
      results: {
        record: {
          key: {
            origin: "https://www.yara.de",
          },
          metrics: {
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.7409740974097412,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.16831683168316836,
                },
                {
                  start: "0.25",
                  density: 0.09070907090709084,
                },
              ],
              percentiles: {
                p75: "0.10",
              },
            },
            first_contentful_paint: {
              histogram: [
                {
                  start: 0,
                  end: 1800,
                  density: 0.8384323135372905,
                },
                {
                  start: 1800,
                  end: 3000,
                  density: 0.11977604479104152,
                },
                {
                  start: 3000,
                  density: 0.04179164167166539,
                },
              ],
              percentiles: {
                p75: 1478,
              },
            },
            first_input_delay: {
              histogram: [
                {
                  start: 0,
                  end: 100,
                  density: 0.9669033096690333,
                },
                {
                  start: 100,
                  end: 300,
                  density: 0.023197680231976808,
                },
                {
                  start: 300,
                  density: 0.009899010098990099,
                },
              ],
              percentiles: {
                p75: 12,
              },
            },
            largest_contentful_paint: {
              histogram: [
                {
                  start: 0,
                  end: 2500,
                  density: 0.8601639836016465,
                },
                {
                  start: 2500,
                  end: 4000,
                  density: 0.10293970602939789,
                },
                {
                  start: 4000,
                  density: 0.03689631036896344,
                },
              ],
              percentiles: {
                p75: 1947,
              },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.de/",
          normalizedUrl: "https://www.yara.de",
        },
      },
    },
    {
      url: "https://www.yaraagri.cz/",
      results: {
        record: {
          key: {
            origin: "https://www.yaraagri.cz",
          },
          metrics: {
            first_input_delay: {
              histogram: [
                {
                  start: 0,
                  end: 100,
                  density: 0.9046904690469036,
                },
                {
                  start: 100,
                  end: 300,
                  density: 0.039803980398039764,
                },
                {
                  start: 300,
                  density: 0.055505550555055405,
                },
              ],
              percentiles: {
                p75: 16,
              },
            },
            largest_contentful_paint: {
              histogram: [
                {
                  start: 0,
                  end: 2500,
                  density: 0.8997600239976034,
                },
                {
                  start: 2500,
                  end: 4000,
                  density: 0.07754224577542272,
                },
                {
                  start: 4000,
                  density: 0.02269773022697754,
                },
              ],
              percentiles: {
                p75: 1753,
              },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8817881788178814,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.09170917091709167,
                },
                {
                  start: "0.25",
                  density: 0.026502650265026496,
                },
              ],
              percentiles: {
                p75: "0.03",
              },
            },
            first_contentful_paint: {
              histogram: [
                {
                  start: 0,
                  end: 1800,
                  density: 0.9051905190519061,
                },
                {
                  start: 1800,
                  end: 3000,
                  density: 0.07750775077507753,
                },
                {
                  start: 3000,
                  density: 0.01730173017301729,
                },
              ],
              percentiles: {
                p75: 1231,
              },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yaraagri.cz/",
          normalizedUrl: "https://www.yaraagri.cz",
        },
      },
    },
    {
      url: "https://www.yarabrasil.com.br/",
      results: {
        record: {
          key: {
            origin: "https://www.yarabrasil.com.br",
          },
          metrics: {
            first_input_delay: {
              histogram: [
                {
                  start: 0,
                  end: 100,
                  density: 0.9239847969593891,
                },
                {
                  start: 100,
                  end: 300,
                  density: 0.04790958191638313,
                },
                {
                  start: 300,
                  density: 0.02810562112422467,
                },
              ],
              percentiles: {
                p75: 15,
              },
            },
            largest_contentful_paint: {
              histogram: [
                {
                  start: 0,
                  end: 2500,
                  density: 0.5123036911073308,
                },
                {
                  start: 2500,
                  end: 4000,
                  density: 0.24582374712413652,
                },
                {
                  start: 4000,
                  density: 0.24187256176852978,
                },
              ],
              percentiles: {
                p75: 4016,
              },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8304000000000002,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.12940000000000004,
                },
                {
                  start: "0.25",
                  density: 0.04019999999999999,
                },
              ],
              percentiles: {
                p75: "0.04",
              },
            },
            first_contentful_paint: {
              histogram: [
                {
                  start: 0,
                  end: 1800,
                  density: 0.48774387193596436,
                },
                {
                  start: 1800,
                  end: 3000,
                  density: 0.24842421210605117,
                },
                {
                  start: 3000,
                  density: 0.2638319159579645,
                },
              ],
              percentiles: {
                p75: 3180,
              },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yarabrasil.com.br/",
          normalizedUrl: "https://www.yarabrasil.com.br",
        },
      },
    },
    {
      url: "https://www.yara.com/",
      results: {
        record: {
          key: {
            origin: "https://www.yara.com",
          },
          metrics: {
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8693130686931312,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.10008999100089996,
                },
                {
                  start: "0.25",
                  density: 0.03059694030596942,
                },
              ],
              percentiles: {
                p75: "0.05",
              },
            },
            first_contentful_paint: {
              histogram: [
                {
                  start: 0,
                  end: 1800,
                  density: 0.7197159147744288,
                },
                {
                  start: 1800,
                  end: 3000,
                  density: 0.17055116534960407,
                },
                {
                  start: 3000,
                  density: 0.10973291987596301,
                },
              ],
              percentiles: {
                p75: 1966,
              },
            },
            first_input_delay: {
              histogram: [
                {
                  start: 0,
                  end: 100,
                  density: 0.9781694372120967,
                },
                {
                  start: 100,
                  end: 300,
                  density: 0.017424394151812534,
                },
                {
                  start: 300,
                  density: 0.004406168636090524,
                },
              ],
              percentiles: {
                p75: 10,
              },
            },
            largest_contentful_paint: {
              histogram: [
                {
                  start: 0,
                  end: 2500,
                  density: 0.7540024014408597,
                },
                {
                  start: 2500,
                  end: 4000,
                  density: 0.15074044426655894,
                },
                {
                  start: 4000,
                  density: 0.09525715429257577,
                },
              ],
              percentiles: {
                p75: 2509,
              },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com/",
          normalizedUrl: "https://www.yara.com",
        },
      },
    },
    {
      url: "https://www.yara.ie/",
      results: {
        record: {
          key: {
            origin: "https://www.yara.ie",
          },
          metrics: {
            largest_contentful_paint: {
              histogram: [
                {
                  start: 0,
                  end: 2500,
                  density: 0.5886322735452874,
                },
                {
                  start: 2500,
                  end: 4000,
                  density: 0.29449110177964216,
                },
                {
                  start: 4000,
                  density: 0.1168766246750639,
                },
              ],
              percentiles: {
                p75: 3208,
              },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.7700770077007708,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.14921492149214935,
                },
                {
                  start: "0.25",
                  density: 0.08070807080708074,
                },
              ],
              percentiles: {
                p75: "0.08",
              },
            },
            first_contentful_paint: {
              histogram: [
                {
                  start: 0,
                  end: 1800,
                  density: 0.5172448265520337,
                },
                {
                  start: 1800,
                  end: 3000,
                  density: 0.3181045686294108,
                },
                {
                  start: 3000,
                  density: 0.16465060481855534,
                },
              ],
              percentiles: {
                p75: 2591,
              },
            },
            first_input_delay: {
              histogram: [
                {
                  start: 0,
                  end: 100,
                  density: 0.9504950495049495,
                },
                {
                  start: 100,
                  end: 300,
                  density: 0.024002400240023977,
                },
                {
                  start: 300,
                  density: 0.025502550255025496,
                },
              ],
              percentiles: {
                p75: 12,
              },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.ie/",
          normalizedUrl: "https://www.yara.ie",
        },
      },
    },
    {
      url: "https://www.yara.com.pe/",
      results: {
        record: {
          key: {
            origin: "https://www.yara.com.pe",
          },
          metrics: {
            first_input_delay: {
              histogram: [
                {
                  start: 0,
                  end: 100,
                  density: 0.9697999999999989,
                },
                {
                  start: 100,
                  end: 300,
                  density: 0.025199999999999972,
                },
                {
                  start: 300,
                  density: 0.004999999999999992,
                },
              ],
              percentiles: {
                p75: 11,
              },
            },
            largest_contentful_paint: {
              histogram: [
                {
                  start: 0,
                  end: 2500,
                  density: 0.6476295259051927,
                },
                {
                  start: 2500,
                  end: 4000,
                  density: 0.19993998799760318,
                },
                {
                  start: 4000,
                  density: 0.15243048609722218,
                },
              ],
              percentiles: {
                p75: 3073,
              },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.7762776277627761,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.1741174117411741,
                },
                {
                  start: "0.25",
                  density: 0.049604960496049615,
                },
              ],
              percentiles: {
                p75: "0.08",
              },
            },
            first_contentful_paint: {
              histogram: [
                {
                  start: 0,
                  end: 1800,
                  density: 0.5453000000000031,
                },
                {
                  start: 1800,
                  end: 3000,
                  density: 0.2765000000000015,
                },
                {
                  start: 3000,
                  density: 0.1781999999999997,
                },
              ],
              percentiles: {
                p75: 2591,
              },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.pe/",
          normalizedUrl: "https://www.yara.com.pe",
        },
      },
    },
    {
      url: "https://www.yara.fr/",
      results: {
        record: {
          key: {
            origin: "https://www.yara.fr",
          },
          metrics: {
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8100000000000004,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.13720000000000004,
                },
                {
                  start: "0.25",
                  density: 0.052800000000000034,
                },
              ],
              percentiles: {
                p75: "0.07",
              },
            },
            first_contentful_paint: {
              histogram: [
                {
                  start: 0,
                  end: 1800,
                  density: 0.7203720372037281,
                },
                {
                  start: 1800,
                  end: 3000,
                  density: 0.16641664166416822,
                },
                {
                  start: 3000,
                  density: 0.11321132113211503,
                },
              ],
              percentiles: {
                p75: 1969,
              },
            },
            first_input_delay: {
              histogram: [
                {
                  start: 0,
                  end: 100,
                  density: 0.9502099580083953,
                },
                {
                  start: 100,
                  end: 300,
                  density: 0.03349330133973195,
                },
                {
                  start: 300,
                  density: 0.01629674065186967,
                },
              ],
              percentiles: {
                p75: 12,
              },
            },
            largest_contentful_paint: {
              histogram: [
                {
                  start: 0,
                  end: 2500,
                  density: 0.7709999999999962,
                },
                {
                  start: 2500,
                  end: 4000,
                  density: 0.1444999999999993,
                },
                {
                  start: 4000,
                  density: 0.08450000000000123,
                },
              ],
              percentiles: {
                p75: 2420,
              },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.fr/",
          normalizedUrl: "https://www.yara.fr",
        },
      },
    },
    {
      url: "https://www.yara.es/",
      results: {
        record: {
          key: {
            origin: "https://www.yara.es",
          },
          metrics: {
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.7520999999999997,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.16019999999999993,
                },
                {
                  start: "0.25",
                  density: 0.08769999999999989,
                },
              ],
              percentiles: {
                p75: "0.09",
              },
            },
            first_contentful_paint: {
              histogram: [
                {
                  start: 0,
                  end: 1800,
                  density: 0.7469253074692532,
                },
                {
                  start: 1800,
                  end: 3000,
                  density: 0.1675832416758324,
                },
                {
                  start: 3000,
                  density: 0.08549145085491489,
                },
              ],
              percentiles: {
                p75: 1821,
              },
            },
            first_input_delay: {
              histogram: [
                {
                  start: 0,
                  end: 100,
                  density: 0.9556867060118012,
                },
                {
                  start: 100,
                  end: 300,
                  density: 0.028308492547764262,
                },
                {
                  start: 300,
                  density: 0.01600480144043208,
                },
              ],
              percentiles: {
                p75: 13,
              },
            },
            largest_contentful_paint: {
              histogram: [
                {
                  start: 0,
                  end: 2500,
                  density: 0.8033999999999915,
                },
                {
                  start: 2500,
                  end: 4000,
                  density: 0.13209999999999855,
                },
                {
                  start: 4000,
                  density: 0.06449999999999986,
                },
              ],
              percentiles: {
                p75: 2244,
              },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.es/",
          normalizedUrl: "https://www.yara.es",
        },
      },
    },
    {
      url: "https://www.yara.com.mx/",
      results: {
        record: {
          key: {
            origin: "https://www.yara.com.mx",
          },
          metrics: {
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.7963796379637966,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.14891489148914897,
                },
                {
                  start: "0.25",
                  density: 0.05470547054705471,
                },
              ],
              percentiles: {
                p75: "0.06",
              },
            },
            first_contentful_paint: {
              histogram: [
                {
                  start: 0,
                  end: 1800,
                  density: 0.6116388361163889,
                },
                {
                  start: 1800,
                  end: 3000,
                  density: 0.2312768723127689,
                },
                {
                  start: 3000,
                  density: 0.15708429157084408,
                },
              ],
              percentiles: {
                p75: 2384,
              },
            },
            first_input_delay: {
              histogram: [
                {
                  start: 0,
                  end: 100,
                  density: 0.9617694155324238,
                },
                {
                  start: 100,
                  end: 300,
                  density: 0.028022417934347413,
                },
                {
                  start: 300,
                  density: 0.010208166533226596,
                },
              ],
              percentiles: {
                p75: 13,
              },
            },
            largest_contentful_paint: {
              histogram: [
                {
                  start: 0,
                  end: 2500,
                  density: 0.6929192919291924,
                },
                {
                  start: 2500,
                  end: 4000,
                  density: 0.17246724672467229,
                },
                {
                  start: 4000,
                  density: 0.13461346134613675,
                },
              ],
              percentiles: {
                p75: 2867,
              },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.mx/",
          normalizedUrl: "https://www.yara.com.mx",
        },
      },
    },
    {
      url: "https://www.yara.in/",
      results: {
        record: {
          key: {
            origin: "https://www.yara.in",
          },
          metrics: {
            largest_contentful_paint: {
              histogram: [
                {
                  start: 0,
                  end: 2500,
                  density: 0.728204359128187,
                },
                {
                  start: 2500,
                  end: 4000,
                  density: 0.1716156768646301,
                },
                {
                  start: 4000,
                  density: 0.10017996400720193,
                },
              ],
              percentiles: {
                p75: 2630,
              },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8182999999999994,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.11829999999999992,
                },
                {
                  start: "0.25",
                  density: 0.06340000000000001,
                },
              ],
              percentiles: {
                p75: "0.05",
              },
            },
            first_contentful_paint: {
              histogram: [
                {
                  start: 0,
                  end: 1800,
                  density: 0.660533946605345,
                },
                {
                  start: 1800,
                  end: 3000,
                  density: 0.21027897210279153,
                },
                {
                  start: 3000,
                  density: 0.1291870812918736,
                },
              ],
              percentiles: {
                p75: 2209,
              },
            },
            first_input_delay: {
              histogram: [
                {
                  start: 0,
                  end: 100,
                  density: 0.9623037696230329,
                },
                {
                  start: 100,
                  end: 300,
                  density: 0.02819718028197166,
                },
                {
                  start: 300,
                  density: 0.009499050094990564,
                },
              ],
              percentiles: {
                p75: 14,
              },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.in/",
          normalizedUrl: "https://www.yara.in",
        },
      },
    },
  ],
};
