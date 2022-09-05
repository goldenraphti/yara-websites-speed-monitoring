export const audit11 = {
  date: "2022-04-05",
  legacyAudit: true,
  legacyAuditType: 3,
  legacyAuditId: "05/04/2022-legacy-audit",
  audits: [
    {
      url: "https://www.yara.kr/",
      deviceTargeted: "PHONE",
      results: {
        record: {
          key: { formFactor: "PHONE", origin: "https://www.yara.kr" },
          metrics: {
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7834730072110772 },
                { start: 2500, end: 4000, density: 0.15338140713311385 },
                { start: 4000, density: 0.06314558565581792 },
              ],
              percentiles: { p75: 2310 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8886578449905481,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.07126654064272211,
                },
                { start: "0.25", density: 0.04007561436672968 },
              ],
              percentiles: { p75: "0.00" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7251405311106752 },
                { start: 1800, end: 3000, density: 0.2013956193060657 },
                { start: 3000, density: 0.07346384958325258 },
              ],
              percentiles: { p75: 1891 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9776153494746459 },
                { start: 100, end: 300, density: 0.022384650525354037 },
                { start: 300 },
              ],
              percentiles: { p75: 11 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.kr/",
          normalizedUrl: "https://www.yara.kr",
        },
      },
      extractedResults: {
        fcp: 1891,
        lcp: 2310,
        cls: "0.00",
        fid: 11,
      },
      timestamp: 1649184504862,
    },
    {
      url: "https://www.yara.se/",
      deviceTargeted: "PHONE",
      results: {
        record: {
          key: { formFactor: "PHONE", origin: "https://www.yara.se" },
          metrics: {
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.9202023498694635 },
                { start: 2500, end: 4000, density: 0.06462140992167185 },
                { start: 4000, density: 0.015176240208877596 },
              ],
              percentiles: { p75: 1716 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9204052098408091,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.05499276410998545,
                },
                { start: "0.25", density: 0.024602026049203998 },
              ],
              percentiles: { p75: "0.00" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.9129438717067607 },
                { start: 1800, end: 3000, density: 0.06889216167566699 },
                { start: 3000, density: 0.018163966617574977 },
              ],
              percentiles: { p75: 1294 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9580431177445999 },
                { start: 100, end: 300, density: 0.019237147595356344 },
                { start: 300, density: 0.022719734660033013 },
              ],
              percentiles: { p75: 13 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.se/",
          normalizedUrl: "https://www.yara.se",
        },
      },
      extractedResults: {
        fcp: 1294,
        lcp: 1716,
        cls: "0.00",
        fid: 13,
      },
      timestamp: 1649184504988,
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
                  density: 0.7621999999999998,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.15819999999999998,
                },
                { start: "0.25", density: 0.0795999999999999 },
              ],
              percentiles: { p75: "0.09" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8804760952190431 },
                { start: 1800, end: 3000, density: 0.08311662332466484 },
                { start: 3000, density: 0.036407281456291 },
              ],
              percentiles: { p75: 1335 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9681936387277462 },
                { start: 100, end: 300, density: 0.013802760552110433 },
                { start: 300, density: 0.018003600720144113 },
              ],
              percentiles: { p75: 10 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.872388283514947 },
                { start: 2500, end: 4000, density: 0.095821253623913 },
                { start: 4000, density: 0.03179046286114164 },
              ],
              percentiles: { p75: 1958 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.be/",
          normalizedUrl: "https://www.yara.be",
        },
      },
      extractedResults: {
        fcp: 1335,
        lcp: 1958,
        cls: "0.09",
        fid: 10,
      },
      timestamp: 1649184505050,
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
                  density: 0.6665333466653333,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.16168383161683825,
                },
                { start: "0.25", density: 0.1717828217178282 },
              ],
              percentiles: { p75: "0.17" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5633999999999975 },
                { start: 1800, end: 3000, density: 0.17259999999999917 },
                { start: 3000, density: 0.26399999999999874 },
              ],
              percentiles: { p75: 3236 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9656000000000001 },
                { start: 100, end: 300, density: 0.03440000000000001 },
                { start: 300 },
              ],
              percentiles: { p75: 11 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6122387761223894 },
                { start: 2500, end: 4000, density: 0.1866813318668138 },
                { start: 4000, density: 0.20107989201079982 },
              ],
              percentiles: { p75: 3487 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.cm/en-cm/",
          normalizedUrl: "https://www.yara.cm",
        },
      },
      extractedResults: {
        fcp: 3236,
        lcp: 3487,
        cls: "0.17",
        fid: 11,
      },
      timestamp: 1649184505081,
    },
    {
      url: "https://www.yaraagri.cz/",
      deviceTargeted: null,
      results: {
        record: {
          key: { origin: "https://www.yaraagri.cz" },
          metrics: {
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8632000000000002,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.09430000000000004,
                },
                { start: "0.25", density: 0.04250000000000004 },
              ],
              percentiles: { p75: "0.03" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.9092272318304487 },
                { start: 1800, end: 3000, density: 0.06478056583025078 },
                { start: 3000, density: 0.025992202339298262 },
              ],
              percentiles: { p75: 1215 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9672163918040994 },
                { start: 100, end: 300, density: 0.02408795602198904 },
                { start: 300, density: 0.008695652173913068 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.9001900190019003 },
                { start: 2500, end: 4000, density: 0.07100710071007102 },
                { start: 4000, density: 0.02880288028802892 },
              ],
              percentiles: { p75: 1690 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yaraagri.cz/",
          normalizedUrl: "https://www.yaraagri.cz",
        },
      },
      extractedResults: {
        fcp: 1215,
        lcp: 1690,
        cls: "0.03",
        fid: 12,
      },
      timestamp: 1649184505143,
    },
    {
      url: "https://www.yara.no/",
      deviceTargeted: null,
      results: {
        record: {
          key: { origin: "https://www.yara.no" },
          metrics: {
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.9338198540437876 },
                { start: 1800, end: 3000, density: 0.049285214435669356 },
                { start: 3000, density: 0.016894931520543804 },
              ],
              percentiles: { p75: 1092 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9786042791441698 },
                { start: 100, end: 300, density: 0.012697460507898405 },
                { start: 300, density: 0.008698260347930368 },
              ],
              percentiles: { p75: 10 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.9302069793020695 },
                { start: 2500, end: 4000, density: 0.054194580541945786 },
                { start: 4000, density: 0.015598440155984342 },
              ],
              percentiles: { p75: 1528 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.7748225177482255,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.1738826117388262,
                },
                { start: "0.25", density: 0.05129487051294872 },
              ],
              percentiles: { p75: "0.08" },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.no/",
          normalizedUrl: "https://www.yara.no",
        },
      },
      extractedResults: {
        fcp: 1092,
        lcp: 1528,
        cls: "0.08",
        fid: 10,
      },
      timestamp: 1649184505178,
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
                  density: 0.8756875687568746,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.06300630063006292,
                },
                { start: "0.25", density: 0.061306130613061297 },
              ],
              percentiles: { p75: "0.04" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.07812343703110883 },
                { start: 1800, end: 3000, density: 0.464039211763526 },
                { start: 3000, density: 0.4578373512053564 },
              ],
              percentiles: { p75: 4469 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.21462146214621605 },
                { start: 2500, end: 4000, density: 0.4209420942094237 },
                { start: 4000, density: 0.3644364436443692 },
              ],
              percentiles: { p75: 4935 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "http://www.yara.com.mm/",
          normalizedUrl: "http://www.yara.com.mm",
        },
      },
      extractedResults: { fcp: 4469, lcp: 4935, cls: "0.04" },
      timestamp: 1649184505213,
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
                  density: 0.8654801324503318,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.10168322295805748,
                },
                { start: "0.25", density: 0.0328366445916115 },
              ],
              percentiles: { p75: "0.02" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8862783261504315 },
                { start: 1800, end: 3000, density: 0.08661198387321076 },
                { start: 3000, density: 0.027109689976365967 },
              ],
              percentiles: { p75: 1360 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9257703081232469 },
                { start: 100, end: 300, density: 0.0392156862745097 },
                { start: 300, density: 0.03501400560224104 },
              ],
              percentiles: { p75: 18 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8544154401555102 },
                { start: 2500, end: 4000, density: 0.1185087475701191 },
                { start: 4000, density: 0.02707581227436843 },
              ],
              percentiles: { p75: 2046 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.fi/",
          normalizedUrl: "https://www.yara.fi",
        },
      },
      extractedResults: {
        fcp: 1360,
        lcp: 2046,
        cls: "0.02",
        fid: 18,
      },
      timestamp: 1649184505270,
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
                { start: "0.00", end: "0.10", density: 0.8629 },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.11919999999999999,
                },
                { start: "0.25", density: 0.017899999999999992 },
              ],
              percentiles: { p75: "0.04" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8906672001600462 },
                { start: 1800, end: 3000, density: 0.09032709812943863 },
                { start: 3000, density: 0.019005701710513037 },
              ],
              percentiles: { p75: 1400 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9810037992401509 },
                { start: 100, end: 300, density: 0.011897620475904806 },
                { start: 300, density: 0.00709858028394322 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.9059905990599071 },
                { start: 2500, end: 4000, density: 0.07400740074007409 },
                { start: 4000, density: 0.020002000200020176 },
              ],
              percentiles: { p75: 1801 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.lt/",
          normalizedUrl: "https://www.yara.lt",
        },
      },
      extractedResults: {
        fcp: 1400,
        lcp: 1801,
        cls: "0.04",
        fid: 12,
      },
      timestamp: 1649184505319,
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
                  density: 0.9385374607447288,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.056639748766262904,
                },
                { start: "0.25", density: 0.004822790489008524 },
              ],
              percentiles: { p75: "0.00" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8073932153724805 },
                { start: 1800, end: 3000, density: 0.1502310379803904 },
                { start: 3000, density: 0.042375746647131875 },
              ],
              percentiles: { p75: 1656 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9568955764226753 },
                { start: 100, end: 300, density: 0.01685711053286576 },
                { start: 300, density: 0.026247313044462067 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.826130878886518 },
                { start: 2500, end: 4000, density: 0.13334829947244342 },
                { start: 4000, density: 0.04052082164103686 },
              ],
              percentiles: { p75: 2141 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.ro/",
          normalizedUrl: "https://www.yara.ro",
        },
      },
      extractedResults: {
        fcp: 1656,
        lcp: 2141,
        cls: "0.00",
        fid: 12,
      },
      timestamp: 1649184505341,
    },
    {
      url: "https://www.yara.ie/",
      deviceTargeted: "PHONE",
      results: {
        record: {
          key: { formFactor: "PHONE", origin: "https://www.yara.ie" },
          metrics: {
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.4809881013967929 },
                { start: 1800, end: 3000, density: 0.3560527677185725 },
                { start: 3000, density: 0.16295913088463626 },
              ],
              percentiles: { p75: 2599 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9115784139853034 },
                { start: 100, end: 300, density: 0.04345072206739286 },
                { start: 300, density: 0.04497086394730202 },
              ],
              percentiles: { p75: 14 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.5891682785299784 },
                { start: 2500, end: 4000, density: 0.29580915538362246 },
                { start: 4000, density: 0.11502256608639616 },
              ],
              percentiles: { p75: 3132 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9335463258785962,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.032332268370607105,
                },
                { start: "0.25", density: 0.034121405750798764 },
              ],
              percentiles: { p75: "0.00" },
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
        lcp: 3132,
        cls: "0.00",
        fid: 14,
      },
      timestamp: 1649184505387,
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
                { start: 0, end: 2500, density: 0.8498441963126508 },
                { start: 2500, end: 4000, density: 0.11250324591015377 },
                { start: 4000, density: 0.037652557777200835 },
              ],
              percentiles: { p75: 2047 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9663312693498443,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.020510835913312674,
                },
                { start: "0.25", density: 0.013157894736842092 },
              ],
              percentiles: { p75: "0.00" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8022291342664765 },
                { start: 1800, end: 3000, density: 0.1458009331259751 },
                { start: 3000, density: 0.05196993260757003 },
              ],
              percentiles: { p75: 1658 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9629248197734274 },
                { start: 100, end: 300, density: 0.023686920700308912 },
                { start: 300, density: 0.013388259526261609 },
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
        fcp: 1658,
        lcp: 2047,
        cls: "0.00",
        fid: 12,
      },
      timestamp: 1649184505433,
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
                { start: 0, end: 100, density: 0.9381429873681459 },
                { start: 100, end: 300, density: 0.046750879020705766 },
                { start: 300, density: 0.01510613361114725 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.5843139790508344 },
                { start: 2500, end: 4000, density: 0.19196948144316997 },
                { start: 4000, density: 0.22371653950602408 },
              ],
              percentiles: { p75: 3824 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9290142983677098,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.03935214475515632,
                },
                { start: "0.25", density: 0.03163355687713529 },
              ],
              percentiles: { p75: "0.00" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.4976291170062857 },
                { start: 1800, end: 3000, density: 0.22081250800974256 },
                { start: 3000, density: 0.28155837498398656 },
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
        lcp: 3824,
        cls: "0.00",
        fid: 13,
      },
      timestamp: 1649184505475,
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
                  density: 0.8850935425467715,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.09788774894387449,
                },
                { start: "0.25", density: 0.01701870850935427 },
              ],
              percentiles: { p75: "0.00" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7606196296744522 },
                { start: 1800, end: 3000, density: 0.17475493162289718 },
                { start: 3000, density: 0.06462543870265088 },
              ],
              percentiles: { p75: 1765 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9595552297165109 },
                { start: 100, end: 300, density: 0.026637341153469937 },
                { start: 300, density: 0.013807429130009805 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7954242827744886 },
                { start: 2500, end: 4000, density: 0.147318726546424 },
                { start: 4000, density: 0.05725699067909529 },
              ],
              percentiles: { p75: 2279 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.gr/",
          normalizedUrl: "https://www.yara.gr",
        },
      },
      extractedResults: {
        fcp: 1765,
        lcp: 2279,
        cls: "0.00",
        fid: 13,
      },
      timestamp: 1649184505517,
    },
    {
      url: "https://www.yara.cl/",
      deviceTargeted: null,
      results: {
        record: {
          key: { origin: "https://www.yara.cl" },
          metrics: {
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.837667533506701,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.09521904380876171,
                },
                { start: "0.25", density: 0.06711342268453689 },
              ],
              percentiles: { p75: "0.07" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.4423557644235563 },
                { start: 1800, end: 3000, density: 0.3614638536146374 },
                { start: 3000, density: 0.19618038196180546 },
              ],
              percentiles: { p75: 2779 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9670967096709673 },
                { start: 100, end: 300, density: 0.026302630263026303 },
                { start: 300, density: 0.006600660066006605 },
              ],
              percentiles: { p75: 11 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.5934499999999912 },
                { start: 2500, end: 4000, density: 0.2514499999999962 },
                { start: 4000, density: 0.1550999999999967 },
              ],
              percentiles: { p75: 3273 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.cl/",
          normalizedUrl: "https://www.yara.cl",
        },
      },
      extractedResults: {
        fcp: 2779,
        lcp: 3273,
        cls: "0.07",
        fid: 11,
      },
      timestamp: 1649184505559,
    },
    {
      url: "https://www.yara.pt/",
      deviceTargeted: null,
      results: {
        record: {
          key: { origin: "https://www.yara.pt" },
          metrics: {
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9446999999999998,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.040299999999999996,
                },
                { start: "0.25", density: 0.015 },
              ],
              percentiles: { p75: "0.01" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8291000000000082 },
                { start: 1800, end: 3000, density: 0.11310000000000112 },
                { start: 3000, density: 0.057800000000001316 },
              ],
              percentiles: { p75: 1500 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9597040295970437 },
                { start: 100, end: 300, density: 0.024797520247975286 },
                { start: 300, density: 0.015498450154984526 },
              ],
              percentiles: { p75: 11 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.849904971491451 },
                { start: 2500, end: 4000, density: 0.10258077423227009 },
                { start: 4000, density: 0.04751425427628376 },
              ],
              percentiles: { p75: 1979 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.pt/",
          normalizedUrl: "https://www.yara.pt",
        },
      },
      extractedResults: {
        fcp: 1500,
        lcp: 1979,
        cls: "0.01",
        fid: 11,
      },
      timestamp: 1649184505581,
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
                  density: 0.9233600346395324,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.04178393591686513,
                },
                { start: "0.25", density: 0.034856029443602526 },
              ],
              percentiles: { p75: "0.00" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5907787337304232 },
                { start: 1800, end: 3000, density: 0.22656077652768644 },
                { start: 3000, density: 0.18266048974189306 },
              ],
              percentiles: { p75: 2514 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9410249806850355 },
                { start: 100, end: 300, density: 0.029358743239763015 },
                { start: 300, density: 0.02961627607519953 },
              ],
              percentiles: { p75: 17 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6464333185644651 },
                { start: 2500, end: 4000, density: 0.19649977846699115 },
                { start: 4000, density: 0.15706690296854223 },
              ],
              percentiles: { p75: 3131 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yaracanada.ca/",
          normalizedUrl: "https://www.yaracanada.ca",
        },
      },
      extractedResults: {
        fcp: 2514,
        lcp: 3131,
        cls: "0.00",
        fid: 17,
      },
      timestamp: 1649184505602,
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
                  density: 0.9580171977744049,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.020232675771370747,
                },
                { start: "0.25", density: 0.021750126454223546 },
              ],
              percentiles: { p75: "0.00" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5481528662420405 },
                { start: 1800, end: 3000, density: 0.2794904458598737 },
                { start: 3000, density: 0.17235668789809336 },
              ],
              percentiles: { p75: 2472 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9438591812241645 },
                { start: 100, end: 300, density: 0.04827310308041078 },
                { start: 300, density: 0.007867715695426047 },
              ],
              percentiles: { p75: 14 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6839139344262322 },
                { start: 2500, end: 4000, density: 0.1810963114754105 },
                { start: 4000, density: 0.1349897540983599 },
              ],
              percentiles: { p75: 2948 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.cr/",
          normalizedUrl: "https://www.yara.cr",
        },
      },
      extractedResults: {
        fcp: 2472,
        lcp: 2948,
        cls: "0.00",
        fid: 14,
      },
      timestamp: 1649184505645,
    },
    {
      url: "https://www.yara.in/",
      deviceTargeted: "PHONE",
      results: {
        record: {
          key: { formFactor: "PHONE", origin: "https://www.yara.in" },
          metrics: {
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9611861689947319 },
                { start: 100, end: 300, density: 0.02633386764369128 },
                { start: 300, density: 0.01247996336157551 },
              ],
              percentiles: { p75: 14 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7318267839251826 },
                { start: 2500, end: 4000, density: 0.16731604141155296 },
                { start: 4000, density: 0.10085717466325059 },
              ],
              percentiles: { p75: 2614 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8352745424292828,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.10793122573488607,
                },
                { start: "0.25", density: 0.05679423183582902 },
              ],
              percentiles: { p75: "0.02" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6523193577163182 },
                { start: 1800, end: 3000, density: 0.21822033898304857 },
                { start: 3000, density: 0.12946030330062372 },
              ],
              percentiles: { p75: 2224 },
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
        lcp: 2614,
        cls: "0.02",
        fid: 14,
      },
      timestamp: 1649184505693,
    },
    {
      url: "https://www.yara.com.ar/",
      deviceTargeted: null,
      results: {
        record: {
          key: { origin: "https://www.yara.com.ar" },
          metrics: {
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6021295740851882 },
                { start: 2500, end: 4000, density: 0.24000199960008212 },
                { start: 4000, density: 0.1578684263147408 },
              ],
              percentiles: { p75: 3224 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9009000000000001,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.06940000000000002,
                },
                { start: "0.25", density: 0.029700000000000025 },
              ],
              percentiles: { p75: "0.03" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5066493350664902 },
                { start: 1800, end: 3000, density: 0.2803719628037179 },
                { start: 3000, density: 0.21297870212978612 },
              ],
              percentiles: { p75: 2797 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9594081183763246 },
                { start: 100, end: 300, density: 0.028294341131773638 },
                { start: 300, density: 0.012297540491901572 },
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
        fcp: 2797,
        lcp: 3224,
        cls: "0.03",
        fid: 11,
      },
      timestamp: 1649184505737,
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
                  density: 0.9293534932221069,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.040928050052137656,
                },
                { start: "0.25", density: 0.02971845672575602 },
              ],
              percentiles: { p75: "0.00" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.4334430546412118 },
                { start: 1800, end: 3000, density: 0.31283739302172514 },
                { start: 3000, density: 0.25371955233706495 },
              ],
              percentiles: { p75: 3041 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9476648351648356 },
                { start: 100, end: 300, density: 0.036401098901098924 },
                { start: 300, density: 0.015934065934065902 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.5495264404104222 },
                { start: 2500, end: 4000, density: 0.27644041041831285 },
                { start: 4000, density: 0.174033149171274 },
              ],
              percentiles: { p75: 3402 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.ar/",
          normalizedUrl: "https://www.yara.com.ar",
        },
      },
      extractedResults: {
        fcp: 3041,
        lcp: 3402,
        cls: "0.00",
        fid: 13,
      },
      timestamp: 1649184505759,
    },
    {
      url: "https://www.yaracanada.ca/fr-ca/",
      deviceTargeted: null,
      results: {
        record: {
          key: { origin: "https://www.yaracanada.ca" },
          metrics: {
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7249275072492757 },
                { start: 1800, end: 3000, density: 0.1663833616638338 },
                { start: 3000, density: 0.10868913108689131 },
              ],
              percentiles: { p75: 2009 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9709116353458636 },
                { start: 100, end: 300, density: 0.014994002399040415 },
                { start: 300, density: 0.014094362255097989 },
              ],
              percentiles: { p75: 9 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7251999999999951 },
                { start: 2500, end: 4000, density: 0.16159999999999883 },
                { start: 4000, density: 0.11319999999999912 },
              ],
              percentiles: { p75: 2730 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.7516999999999999,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.17930000000000001,
                },
                { start: "0.25", density: 0.06900000000000002 },
              ],
              percentiles: { p75: "0.10" },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yaracanada.ca/fr-ca/",
          normalizedUrl: "https://www.yaracanada.ca",
        },
      },
      extractedResults: { fcp: 2009, lcp: 2730, cls: "0.10", fid: 9 },
      timestamp: 1649184505802,
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
                { start: "0.00", end: "0.10", density: 0.92 },
                { start: "0.10", end: "0.25", density: 0.0483 },
                { start: "0.25", density: 0.0317 },
              ],
              percentiles: { p75: "0.02" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6641335866413351 },
                { start: 1800, end: 3000, density: 0.2203779622037793 },
                { start: 3000, density: 0.11548845115488458 },
              ],
              percentiles: { p75: 2124 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9661966196619673 },
                { start: 100, end: 300, density: 0.02330233023302333 },
                { start: 300, density: 0.010501050105010476 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7290458091618327 },
                { start: 2500, end: 4000, density: 0.16023204640928196 },
                { start: 4000, density: 0.11072214442888503 },
              ],
              percentiles: { p75: 2666 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.gt/",
          normalizedUrl: "https://www.yara.com.gt",
        },
      },
      extractedResults: {
        fcp: 2124,
        lcp: 2666,
        cls: "0.02",
        fid: 12,
      },
      timestamp: 1649184505842,
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
                  density: 0.9367999999999995,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.03369999999999999,
                },
                { start: "0.25", density: 0.029499999999999995 },
              ],
              percentiles: { p75: "0.00" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.36859999999999754 },
                { start: 1800, end: 3000, density: 0.32399999999999785 },
                { start: 3000, density: 0.30739999999998885 },
              ],
              percentiles: { p75: 3310 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9743 },
                { start: 100, end: 300, density: 0.023200000000000002 },
                { start: 300, density: 0.0025000000000000005 },
              ],
              percentiles: { p75: 11 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.47709770977097277 },
                { start: 2500, end: 4000, density: 0.31148114811480865 },
                { start: 4000, density: 0.21142114211421145 },
              ],
              percentiles: { p75: 3796 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.bo/",
          normalizedUrl: "https://www.yara.bo",
        },
      },
      extractedResults: {
        fcp: 3310,
        lcp: 3796,
        cls: "0.00",
        fid: 11,
      },
      timestamp: 1649184505878,
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
                  density: 0.9466351829988198,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.03270365997638726,
                },
                { start: "0.25", density: 0.0206611570247934 },
              ],
              percentiles: { p75: "0.00" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7145070926212906 },
                { start: 1800, end: 3000, density: 0.19156037668375275 },
                { start: 3000, density: 0.09393253069495687 },
              ],
              percentiles: { p75: 1969 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9508560167508311 },
                { start: 100, end: 300, density: 0.03214681611035841 },
                { start: 300, density: 0.016997167138810207 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7828595218270588 },
                { start: 2500, end: 4000, density: 0.14541453550612768 },
                { start: 4000, density: 0.07172594266682618 },
              ],
              percentiles: { p75: 2353 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.ua/",
          normalizedUrl: "https://www.yara.ua",
        },
      },
      extractedResults: {
        fcp: 1969,
        lcp: 2353,
        cls: "0.00",
        fid: 13,
      },
      timestamp: 1649184505902,
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
                  density: 0.852270454090819,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.1115223044608923,
                },
                { start: "0.25", density: 0.03620724144828977 },
              ],
              percentiles: { p75: "0.06" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.752975297529749 },
                { start: 1800, end: 3000, density: 0.15391539153915312 },
                { start: 3000, density: 0.09310931093109305 },
              ],
              percentiles: { p75: 1806 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9782021797820231 },
                { start: 100, end: 300, density: 0.01579842015798422 },
                { start: 300, density: 0.005999400059994013 },
              ],
              percentiles: { p75: 10 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.772336168084033 },
                { start: 2500, end: 4000, density: 0.1419209604802385 },
                { start: 4000, density: 0.08574287143571714 },
              ],
              percentiles: { p75: 2395 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com/",
          normalizedUrl: "https://www.yara.com",
        },
      },
      extractedResults: {
        fcp: 1806,
        lcp: 2395,
        cls: "0.06",
        fid: 10,
      },
      timestamp: 1649184505946,
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
                  density: 0.8697130286971295,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.08549145085491444,
                },
                { start: "0.25", density: 0.04479552044795518 },
              ],
              percentiles: { p75: "0.03" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.55485548554856 },
                { start: 1800, end: 3000, density: 0.2792279227922819 },
                { start: 3000, density: 0.16591659165916708 },
              ],
              percentiles: { p75: 2547 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.973792137641291 },
                { start: 100, end: 300, density: 0.02110633189956984 },
                { start: 300, density: 0.005101530459137731 },
              ],
              percentiles: { p75: 11 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6592159215921666 },
                { start: 2500, end: 4000, density: 0.20687068706870917 },
                { start: 4000, density: 0.13391339133913538 },
              ],
              percentiles: { p75: 3010 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.pe/",
          normalizedUrl: "https://www.yara.com.pe",
        },
      },
      extractedResults: {
        fcp: 2547,
        lcp: 3010,
        cls: "0.03",
        fid: 11,
      },
      timestamp: 1649184505979,
    },
    {
      url: "https://www.yara.it/",
      deviceTargeted: null,
      results: {
        record: {
          key: { origin: "https://www.yara.it" },
          metrics: {
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9015803160632128,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.0575115023004601,
                },
                { start: "0.25", density: 0.04090818163632725 },
              ],
              percentiles: { p75: "0.02" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8469153084691627 },
                { start: 1800, end: 3000, density: 0.1029897010298982 },
                { start: 3000, density: 0.05009499050095071 },
              ],
              percentiles: { p75: 1430 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9554178328668551 },
                { start: 100, end: 300, density: 0.023190723710515834 },
                { start: 300, density: 0.02139144342263089 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8607500000000009 },
                { start: 2500, end: 4000, density: 0.0968500000000001 },
                { start: 4000, density: 0.04240000000000028 },
              ],
              percentiles: { p75: 1877 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.it/",
          normalizedUrl: "https://www.yara.it",
        },
      },
      extractedResults: {
        fcp: 1430,
        lcp: 1877,
        cls: "0.02",
        fid: 12,
      },
      timestamp: 1649184506000,
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
                  density: 0.934999999999999,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.042899999999999945,
                },
                { start: "0.25", density: 0.022099999999999953 },
              ],
              percentiles: { p75: "0.01" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6084000000000014 },
                { start: 1800, end: 3000, density: 0.24780000000000052 },
                { start: 3000, density: 0.14380000000000126 },
              ],
              percentiles: { p75: 2296 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9538907781556336 },
                { start: 100, end: 300, density: 0.03720744148829776 },
                { start: 300, density: 0.008901780356071221 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7031296870313029 },
                { start: 2500, end: 4000, density: 0.16838316168383308 },
                { start: 4000, density: 0.12848715128487387 },
              ],
              percentiles: { p75: 2802 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.cr/",
          normalizedUrl: "https://www.yara.cr",
        },
      },
      extractedResults: {
        fcp: 2296,
        lcp: 2802,
        cls: "0.01",
        fid: 12,
      },
      timestamp: 1649184506030,
    },
    {
      url: "https://www.yara.com.pa/",
      deviceTargeted: null,
      results: {
        record: {
          key: { origin: "https://www.yara.com.pa" },
          metrics: {
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9244999999999995,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.05459999999999998,
                },
                { start: "0.25", density: 0.02090000000000001 },
              ],
              percentiles: { p75: "0.01" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6433643364336461 },
                { start: 1800, end: 3000, density: 0.24692469246924797 },
                { start: 3000, density: 0.10971097109711037 },
              ],
              percentiles: { p75: 2109 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9762023797620237 },
                { start: 100, end: 300, density: 0.0173982601739826 },
                { start: 300, density: 0.006399360063993601 },
              ],
              percentiles: { p75: 11 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7467006598680281 },
                { start: 2500, end: 4000, density: 0.14562087582483535 },
                { start: 4000, density: 0.10767846430713916 },
              ],
              percentiles: { p75: 2657 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.pa/",
          normalizedUrl: "https://www.yara.com.pa",
        },
      },
      extractedResults: {
        fcp: 2109,
        lcp: 2657,
        cls: "0.01",
        fid: 11,
      },
      timestamp: 1649184506048,
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
                { start: 0, end: 100, density: 0.9378062193780572 },
                { start: 100, end: 300, density: 0.036696330366963105 },
                { start: 300, density: 0.025497450254974546 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7558255825582642 },
                { start: 2500, end: 4000, density: 0.15036503650365207 },
                { start: 4000, density: 0.09380938093809449 },
              ],
              percentiles: { p75: 2493 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8238999999999995,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.1310999999999999,
                },
                { start: "0.25", density: 0.044999999999999915 },
              ],
              percentiles: { p75: "0.06" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7066293370662952 },
                { start: 1800, end: 3000, density: 0.17398260173982644 },
                { start: 3000, density: 0.11938806119388093 },
              ],
              percentiles: { p75: 2011 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.fr/",
          normalizedUrl: "https://www.yara.fr",
        },
      },
      extractedResults: {
        fcp: 2011,
        lcp: 2493,
        cls: "0.06",
        fid: 12,
      },
      timestamp: 1649184506086,
    },
    {
      url: "https://www.yara.gr/",
      deviceTargeted: null,
      results: {
        record: {
          key: { origin: "https://www.yara.gr" },
          metrics: {
            cumulative_layout_shift: {
              histogram: [
                { start: "0.00", end: "0.10", density: 0.8939 },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.08940000000000002,
                },
                { start: "0.25", density: 0.01670000000000001 },
              ],
              percentiles: { p75: "0.01" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7751775177517716 },
                { start: 1800, end: 3000, density: 0.16311631163116244 },
                { start: 3000, density: 0.06170617061706198 },
              ],
              percentiles: { p75: 1722 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9643107067879606 },
                { start: 100, end: 300, density: 0.02359292212336292 },
                { start: 300, density: 0.012096371088673489 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7932413517296738 },
                { start: 2500, end: 4000, density: 0.14597080583883587 },
                { start: 4000, density: 0.06078784243151558 },
              ],
              percentiles: { p75: 2285 },
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
        lcp: 2285,
        cls: "0.01",
        fid: 12,
      },
      timestamp: 1649184506106,
    },
    {
      url: "https://www.yara.co.nz/",
      deviceTargeted: null,
      results: {
        record: {
          key: { origin: "https://www.yara.co.nz" },
          metrics: {
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.7233723372337241,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.20482048204820502,
                },
                { start: "0.25", density: 0.07180718071807193 },
              ],
              percentiles: { p75: "0.10" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6329000000000005 },
                { start: 1800, end: 3000, density: 0.2726000000000002 },
                { start: 3000, density: 0.09450000000000007 },
              ],
              percentiles: { p75: 2278 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9884999999999999 },
                { start: 100, end: 300, density: 0.0115 },
                { start: 300 },
              ],
              percentiles: { p75: 11 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7412500000000007 },
                { start: 2500, end: 4000, density: 0.1744500000000001 },
                { start: 4000, density: 0.08429999999999985 },
              ],
              percentiles: { p75: 2596 },
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
        lcp: 2596,
        cls: "0.10",
        fid: 11,
      },
      timestamp: 1649184506130,
    },
    {
      url: "https://www.yara.co.uk/",
      deviceTargeted: null,
      results: {
        record: {
          key: { origin: "https://www.yara.co.uk" },
          metrics: {
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.7566243375662438,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.15338466153384667,
                },
                { start: "0.25", density: 0.08999100089991002 },
              ],
              percentiles: { p75: "0.09" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.47500499900019677 },
                { start: 1800, end: 3000, density: 0.2969406118776226 },
                { start: 3000, density: 0.22805438912217707 },
              ],
              percentiles: { p75: 2885 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9313931393139284 },
                { start: 100, end: 300, density: 0.0325032503250324 },
                { start: 300, density: 0.036103610361036056 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.5586941305869383 },
                { start: 2500, end: 4000, density: 0.2681231876812305 },
                { start: 4000, density: 0.17318268173182813 },
              ],
              percentiles: { p75: 3414 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.co.uk/",
          normalizedUrl: "https://www.yara.co.uk",
        },
      },
      extractedResults: {
        fcp: 2885,
        lcp: 3414,
        cls: "0.09",
        fid: 12,
      },
      timestamp: 1649184506150,
    },
    {
      url: "https://www.yara.cm/",
      deviceTargeted: null,
      results: {
        record: {
          key: { origin: "https://www.yara.cm" },
          metrics: {
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9656000000000001 },
                { start: 100, end: 300, density: 0.03440000000000001 },
                { start: 300 },
              ],
              percentiles: { p75: 11 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6122387761223894 },
                { start: 2500, end: 4000, density: 0.1866813318668138 },
                { start: 4000, density: 0.20107989201079982 },
              ],
              percentiles: { p75: 3475 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.6665333466653333,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.16168383161683825,
                },
                { start: "0.25", density: 0.1717828217178282 },
              ],
              percentiles: { p75: "0.17" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5633999999999975 },
                { start: 1800, end: 3000, density: 0.17259999999999917 },
                { start: 3000, density: 0.26399999999999874 },
              ],
              percentiles: { p75: 3138 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.cm/",
          normalizedUrl: "https://www.yara.cm",
        },
      },
      extractedResults: {
        fcp: 3138,
        lcp: 3475,
        cls: "0.17",
        fid: 11,
      },
      timestamp: 1649184506176,
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
                  density: 0.6665333466653333,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.16168383161683825,
                },
                { start: "0.25", density: 0.1717828217178282 },
              ],
              percentiles: { p75: "0.17" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5633999999999975 },
                { start: 1800, end: 3000, density: 0.17259999999999917 },
                { start: 3000, density: 0.26399999999999874 },
              ],
              percentiles: { p75: 3138 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9656000000000001 },
                { start: 100, end: 300, density: 0.03440000000000001 },
                { start: 300 },
              ],
              percentiles: { p75: 11 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6122387761223894 },
                { start: 2500, end: 4000, density: 0.1866813318668138 },
                { start: 4000, density: 0.20107989201079982 },
              ],
              percentiles: { p75: 3475 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.cm/en-cm/",
          normalizedUrl: "https://www.yara.cm",
        },
      },
      extractedResults: {
        fcp: 3138,
        lcp: 3475,
        cls: "0.17",
        fid: 11,
      },
      timestamp: 1649184506194,
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
                  density: 0.8128812881288126,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.15051505150515043,
                },
                { start: "0.25", density: 0.036603660366036565 },
              ],
              percentiles: { p75: "0.04" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.747125287471258 },
                { start: 1800, end: 3000, density: 0.18598140185981527 },
                { start: 3000, density: 0.06689331066893425 },
              ],
              percentiles: { p75: 1804 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9712942588517721 },
                { start: 100, end: 300, density: 0.019403880776155267 },
                { start: 300, density: 0.0093018603720744 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.768023197680236 },
                { start: 2500, end: 4000, density: 0.15458454154584614 },
                { start: 4000, density: 0.0773922607739237 },
              ],
              percentiles: { p75: 2410 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.co.th/",
          normalizedUrl: "https://www.yara.co.th",
        },
      },
      extractedResults: {
        fcp: 1804,
        lcp: 2410,
        cls: "0.04",
        fid: 12,
      },
      timestamp: 1649184506216,
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
                  density: 0.9107611548556435,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.06439195100612426,
                },
                { start: "0.25", density: 0.024846894138232718 },
              ],
              percentiles: { p75: "0.01" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5678769450903244 },
                { start: 1800, end: 3000, density: 0.3040600965837957 },
                { start: 3000, density: 0.12806295832588097 },
              ],
              percentiles: { p75: 2498 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9825511432009627 },
                { start: 100, end: 300, density: 0.017448856799037307 },
                { start: 300 },
              ],
              percentiles: { p75: 14 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6926280347332984 },
                { start: 2500, end: 4000, density: 0.22301967038809153 },
                { start: 4000, density: 0.0843522948786107 },
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
        fcp: 2498,
        lcp: 2755,
        cls: "0.01",
        fid: 14,
      },
      timestamp: 1649184506235,
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
                { start: 0, end: 2500, density: 0.8862790031509605 },
                { start: 2500, end: 4000, density: 0.08321397880263547 },
                { start: 4000, density: 0.030507018046405196 },
              ],
              percentiles: { p75: 1753 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8976935050233478,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.06127069477854816,
                },
                { start: "0.25", density: 0.041035800198103864 },
              ],
              percentiles: { p75: "0.00" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.895708154506435 },
                { start: 1800, end: 3000, density: 0.07539341917024298 },
                { start: 3000, density: 0.028898426323319085 },
              ],
              percentiles: { p75: 1305 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.951030158256198 },
                { start: 100, end: 300, density: 0.03598088981785616 },
                { start: 300, density: 0.012988951925948091 },
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
        fcp: 1305,
        lcp: 1753,
        cls: "0.00",
        fid: 16,
      },
      timestamp: 1649184506274,
    },
    {
      url: "https://www.yara.cm/",
      deviceTargeted: "PHONE",
      results: {
        record: {
          key: { formFactor: "PHONE", origin: "https://www.yara.cm" },
          metrics: {
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6122387761223894 },
                { start: 2500, end: 4000, density: 0.1866813318668138 },
                { start: 4000, density: 0.20107989201079982 },
              ],
              percentiles: { p75: 3487 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.6665333466653333,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.16168383161683825,
                },
                { start: "0.25", density: 0.1717828217178282 },
              ],
              percentiles: { p75: "0.17" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5633999999999975 },
                { start: 1800, end: 3000, density: 0.17259999999999917 },
                { start: 3000, density: 0.26399999999999874 },
              ],
              percentiles: { p75: 3236 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9656000000000001 },
                { start: 100, end: 300, density: 0.03440000000000001 },
                { start: 300 },
              ],
              percentiles: { p75: 11 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.cm/",
          normalizedUrl: "https://www.yara.cm",
        },
      },
      extractedResults: {
        fcp: 3236,
        lcp: 3487,
        cls: "0.17",
        fid: 11,
      },
      timestamp: 1649184506315,
    },
    {
      url: "https://www.yaracanada.ca/",
      deviceTargeted: null,
      results: {
        record: {
          key: { origin: "https://www.yaracanada.ca" },
          metrics: {
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7249275072492757 },
                { start: 1800, end: 3000, density: 0.1663833616638338 },
                { start: 3000, density: 0.10868913108689131 },
              ],
              percentiles: { p75: 2009 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9709116353458636 },
                { start: 100, end: 300, density: 0.014994002399040415 },
                { start: 300, density: 0.014094362255097989 },
              ],
              percentiles: { p75: 9 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7251999999999951 },
                { start: 2500, end: 4000, density: 0.16159999999999883 },
                { start: 4000, density: 0.11319999999999912 },
              ],
              percentiles: { p75: 2730 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.7516999999999999,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.17930000000000001,
                },
                { start: "0.25", density: 0.06900000000000002 },
              ],
              percentiles: { p75: "0.10" },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yaracanada.ca/",
          normalizedUrl: "https://www.yaracanada.ca",
        },
      },
      extractedResults: { fcp: 2009, lcp: 2730, cls: "0.10", fid: 9 },
      timestamp: 1649184506361,
    },
    {
      url: "https://www.yara.kr/",
      deviceTargeted: null,
      results: {
        record: {
          key: { origin: "https://www.yara.kr" },
          metrics: {
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8165683431656869 },
                { start: 2500, end: 4000, density: 0.11863813618638192 },
                { start: 4000, density: 0.0647935206479358 },
              ],
              percentiles: { p75: 2136 },
            },
            cumulative_layout_shift: {
              histogram: [
                { start: "0.00", end: "0.10", density: 0.9172 },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.05499999999999999,
                },
                { start: "0.25", density: 0.027799999999999984 },
              ],
              percentiles: { p75: "0.01" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7877999999999973 },
                { start: 1800, end: 3000, density: 0.16229999999999944 },
                { start: 3000, density: 0.049900000000000125 },
              ],
              percentiles: { p75: 1676 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9901999999999999 },
                { start: 100, end: 300, density: 0.009799999999999998 },
                { start: 300 },
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
      extractedResults: { fcp: 1676, lcp: 2136, cls: "0.01", fid: 8 },
      timestamp: 1649184506383,
    },
    {
      url: "https://www.yara.ci/",
      deviceTargeted: null,
      results: {
        record: {
          key: { origin: "https://www.yara.ci" },
          metrics: {
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9524999999999993 },
                { start: 100, end: 300, density: 0.035899999999999974 },
                { start: 300, density: 0.011599999999999978 },
              ],
              percentiles: { p75: 11 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.592455473283984 },
                { start: 2500, end: 4000, density: 0.19101460876526355 },
                { start: 4000, density: 0.2165299179507802 },
              ],
              percentiles: { p75: 3786 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9218078192180783,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.0461953804619538,
                },
                { start: "0.25", density: 0.031996800319968016 },
              ],
              percentiles: { p75: "0.01" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5364536453645435 },
                { start: 1800, end: 3000, density: 0.20842084208421116 },
                { start: 3000, density: 0.25512551255126137 },
              ],
              percentiles: { p75: 3181 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.ci/",
          normalizedUrl: "https://www.yara.ci",
        },
      },
      extractedResults: {
        fcp: 3181,
        lcp: 3786,
        cls: "0.01",
        fid: 11,
      },
      timestamp: 1649184506407,
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
                  density: 0.9233600346395324,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.04178393591686513,
                },
                { start: "0.25", density: 0.034856029443602526 },
              ],
              percentiles: { p75: "0.00" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5907787337304232 },
                { start: 1800, end: 3000, density: 0.22656077652768644 },
                { start: 3000, density: 0.18266048974189306 },
              ],
              percentiles: { p75: 2514 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9410249806850355 },
                { start: 100, end: 300, density: 0.029358743239763015 },
                { start: 300, density: 0.02961627607519953 },
              ],
              percentiles: { p75: 17 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6464333185644651 },
                { start: 2500, end: 4000, density: 0.19649977846699115 },
                { start: 4000, density: 0.15706690296854223 },
              ],
              percentiles: { p75: 3131 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yaracanada.ca/fr-ca/",
          normalizedUrl: "https://www.yaracanada.ca",
        },
      },
      extractedResults: {
        fcp: 2514,
        lcp: 3131,
        cls: "0.00",
        fid: 17,
      },
      timestamp: 1649184506427,
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
                { start: 0, end: 2500, density: 0.9364372874574887 },
                { start: 2500, end: 4000, density: 0.050160032006401144 },
                { start: 4000, density: 0.013402680536107216 },
              ],
              percentiles: { p75: 1654 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9226077392260777,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.06669333066693335,
                },
                { start: "0.25", density: 0.010698930106989307 },
              ],
              percentiles: { p75: "0.04" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.9455000000000005 },
                { start: 1800, end: 3000, density: 0.0459 },
                { start: 3000, density: 0.0086 },
              ],
              percentiles: { p75: 1138 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9611000000000001 },
                { start: 100, end: 300, density: 0.03490000000000001 },
                { start: 300, density: 0.004000000000000001 },
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
        fcp: 1138,
        lcp: 1654,
        cls: "0.04",
        fid: 11,
      },
      timestamp: 1649184506473,
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
                  density: 0.9480242079031693,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.027233891064435765,
                },
                { start: "0.25", density: 0.024741901032395874 },
              ],
              percentiles: { p75: "0.00" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.833603749774653 },
                { start: 1800, end: 3000, density: 0.119343789435731 },
                { start: 3000, density: 0.04705246078961597 },
              ],
              percentiles: { p75: 1592 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9464859079557627 },
                { start: 100, end: 300, density: 0.023011059579022504 },
                { start: 300, density: 0.030503032465216 },
              ],
              percentiles: { p75: 15 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8469055374592821 },
                { start: 2500, end: 4000, density: 0.11744480636988765 },
                { start: 4000, density: 0.035649656170828846 },
              ],
              percentiles: { p75: 2153 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.be/fr-be/",
          normalizedUrl: "https://www.yara.be",
        },
      },
      extractedResults: {
        fcp: 1592,
        lcp: 2153,
        cls: "0.00",
        fid: 15,
      },
      timestamp: 1649184506491,
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
                  density: 0.9822087948976171,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.011413225914736494,
                },
                { start: "0.25", density: 0.0063779791876468666 },
              ],
              percentiles: { p75: "0.00" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.43874580067189617 },
                { start: 1800, end: 3000, density: 0.41410974244121296 },
                { start: 3000, density: 0.1471444568868999 },
              ],
              percentiles: { p75: 2586 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9153654673002949 },
                { start: 100, end: 300, density: 0.060534057479067704 },
                { start: 300, density: 0.024100475220638205 },
              ],
              percentiles: { p75: 14 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.5216000897666062 },
                { start: 2500, end: 4000, density: 0.34431104129263873 },
                { start: 4000, density: 0.13408886894075386 },
              ],
              percentiles: { p75: 3339 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.hr/",
          normalizedUrl: "https://www.yara.hr",
        },
      },
      extractedResults: {
        fcp: 2586,
        lcp: 3339,
        cls: "0.00",
        fid: 14,
      },
      timestamp: 1649184506535,
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
                  density: 0.9586316626889421,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.027525855210819412,
                },
                { start: "0.25", density: 0.01384248210023867 },
              ],
              percentiles: { p75: "0.00" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5484493009802353 },
                { start: 1800, end: 3000, density: 0.24827253736140156 },
                { start: 3000, density: 0.20327816165836557 },
              ],
              percentiles: { p75: 2773 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9686209744013216 },
                { start: 100, end: 300, density: 0.026259289843104886 },
                { start: 300, density: 0.0051197357555739075 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.619935431799838 },
                { start: 2500, end: 4000, density: 0.21783696529459223 },
                { start: 4000, density: 0.16222760290556704 },
              ],
              percentiles: { p75: 3220 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.co.za/",
          normalizedUrl: "https://www.yara.co.za",
        },
      },
      extractedResults: {
        fcp: 2773,
        lcp: 3220,
        cls: "0.00",
        fid: 12,
      },
      timestamp: 1649184506589,
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
                  density: 0.8026315789473688,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.1776315789473685,
                },
                { start: "0.25", density: 0.01973684210526317 },
              ],
              percentiles: { p75: "0.07" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7437286538688123 },
                { start: 1800, end: 3000, density: 0.18855258509009792 },
                { start: 3000, density: 0.0677187610411041 },
              ],
              percentiles: { p75: 1824 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9485557412270168 },
                { start: 100, end: 300, density: 0.02697541179279046 },
                { start: 300, density: 0.024468846980186046 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7900826446281014 },
                { start: 2500, end: 4000, density: 0.15395513577331799 },
                { start: 4000, density: 0.05596221959858369 },
              ],
              percentiles: { p75: 2321 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.pl/",
          normalizedUrl: "https://www.yara.pl",
        },
      },
      extractedResults: {
        fcp: 1824,
        lcp: 2321,
        cls: "0.07",
        fid: 13,
      },
      timestamp: 1649184506640,
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
                  density: 0.9492207792207787,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.017922077922077912,
                },
                { start: "0.25", density: 0.03285714285714284 },
              ],
              percentiles: { p75: "0.00" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6290301355441584 },
                { start: 1800, end: 3000, density: 0.2430582971443642 },
                { start: 3000, density: 0.12791156731149084 },
              ],
              percentiles: { p75: 2211 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9583857003211852 },
                { start: 100, end: 300, density: 0.032118419215193435 },
                { start: 300, density: 0.00949588046362242 },
              ],
              percentiles: { p75: 14 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7337212343096287 },
                { start: 2500, end: 4000, density: 0.16049947698744893 },
                { start: 4000, density: 0.10577928870293213 },
              ],
              percentiles: { p75: 2613 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.gt/",
          normalizedUrl: "https://www.yara.com.gt",
        },
      },
      extractedResults: {
        fcp: 2211,
        lcp: 2613,
        cls: "0.00",
        fid: 14,
      },
      timestamp: 1649184506700,
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
                  density: 0.9480242079031693,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.027233891064435765,
                },
                { start: "0.25", density: 0.024741901032395874 },
              ],
              percentiles: { p75: "0.00" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.833603749774653 },
                { start: 1800, end: 3000, density: 0.119343789435731 },
                { start: 3000, density: 0.04705246078961597 },
              ],
              percentiles: { p75: 1592 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9464859079557627 },
                { start: 100, end: 300, density: 0.023011059579022504 },
                { start: 300, density: 0.030503032465216 },
              ],
              percentiles: { p75: 15 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8469055374592821 },
                { start: 2500, end: 4000, density: 0.11744480636988765 },
                { start: 4000, density: 0.035649656170828846 },
              ],
              percentiles: { p75: 2153 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.be/",
          normalizedUrl: "https://www.yara.be",
        },
      },
      extractedResults: {
        fcp: 1592,
        lcp: 2153,
        cls: "0.00",
        fid: 15,
      },
      timestamp: 1649184506748,
    },
    {
      url: "https://www.yara.hr/",
      deviceTargeted: null,
      results: {
        record: {
          key: { origin: "https://www.yara.hr" },
          metrics: {
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9206317473010828 },
                { start: 100, end: 300, density: 0.05627748900439843 },
                { start: 300, density: 0.023090763694522266 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.5343240268187742 },
                { start: 2500, end: 4000, density: 0.33048133693585596 },
                { start: 4000, density: 0.1351946362453735 },
              ],
              percentiles: { p75: 3329 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9747949589917992,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.018303660732146447,
                },
                { start: "0.25", density: 0.006901380276055221 },
              ],
              percentiles: { p75: "0.00" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.456782713085239 },
                { start: 1800, end: 3000, density: 0.39855942376951214 },
                { start: 3000, density: 0.14465786314526086 },
              ],
              percentiles: { p75: 2569 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.hr/",
          normalizedUrl: "https://www.yara.hr",
        },
      },
      extractedResults: {
        fcp: 2569,
        lcp: 3329,
        cls: "0.00",
        fid: 13,
      },
      timestamp: 1649184506795,
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
                  density: 0.9259111994698477,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.027700463883366472,
                },
                { start: "0.25", density: 0.04638833664678593 },
              ],
              percentiles: { p75: "0.00" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.37279935492541455 },
                { start: 1800, end: 3000, density: 0.402365273484748 },
                { start: 3000, density: 0.22483537158984426 },
              ],
              percentiles: { p75: 2930 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9593159564198042 },
                { start: 100, end: 300, density: 0.032547234864156664 },
                { start: 300, density: 0.008136808716039175 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.5697115384615281 },
                { start: 2500, end: 4000, density: 0.28271901709401187 },
                { start: 4000, density: 0.1475694444444439 },
              ],
              percentiles: { p75: 3272 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.cl/",
          normalizedUrl: "https://www.yara.cl",
        },
      },
      extractedResults: {
        fcp: 2930,
        lcp: 3272,
        cls: "0.00",
        fid: 12,
      },
      timestamp: 1649184506818,
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
                { start: 0, end: 100, density: 0.9705672917161168 },
                { start: 100, end: 300, density: 0.026465701400427245 },
                { start: 300, density: 0.0029670068834559697 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.45987475356603846 },
                { start: 2500, end: 4000, density: 0.33613591557462175 },
                { start: 4000, density: 0.20398933085932813 },
              ],
              percentiles: { p75: 3757 },
            },
            cumulative_layout_shift: {
              histogram: [
                { start: "0.00", end: "0.10", density: 0.95227640397504 },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.015830829674139117,
                },
                { start: "0.25", density: 0.03189276635082042 },
              ],
              percentiles: { p75: "0.00" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.3409778812572743 },
                { start: 1800, end: 3000, density: 0.3334109429569251 },
                { start: 3000, density: 0.32561117578578813 },
              ],
              percentiles: { p75: 3415 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.bo/",
          normalizedUrl: "https://www.yara.bo",
        },
      },
      extractedResults: {
        fcp: 3415,
        lcp: 3757,
        cls: "0.00",
        fid: 12,
      },
      timestamp: 1649184506876,
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
                  density: 0.9275753486279794,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.06087869245763978,
                },
                { start: "0.25", density: 0.011545958914379957 },
              ],
              percentiles: { p75: "0.00" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8030647853133083 },
                { start: 1800, end: 3000, density: 0.15157032316795674 },
                { start: 3000, density: 0.04536489151873802 },
              ],
              percentiles: { p75: 1652 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9485924112607135 },
                { start: 100, end: 300, density: 0.044522643818849635 },
                { start: 300, density: 0.006884944920440656 },
              ],
              percentiles: { p75: 16 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8484389208851146 },
                { start: 2500, end: 4000, density: 0.12291603516217002 },
                { start: 4000, density: 0.02864504395271295 },
              ],
              percentiles: { p75: 2114 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.lv/",
          normalizedUrl: "https://www.yara.lv",
        },
      },
      extractedResults: {
        fcp: 1652,
        lcp: 2114,
        cls: "0.00",
        fid: 16,
      },
      timestamp: 1649184506924,
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
                  density: 0.9481532859372291,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.030691867522108555,
                },
                { start: "0.25", density: 0.021154846540662398 },
              ],
              percentiles: { p75: "0.00" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5286398297570508 },
                { start: 1800, end: 3000, density: 0.2780634864337657 },
                { start: 3000, density: 0.1932966838091861 },
              ],
              percentiles: { p75: 2721 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9572135785007094 },
                { start: 100, end: 300, density: 0.025459688826025513 },
                { start: 300, density: 0.01732673267326737 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.627184466019417 },
                { start: 2500, end: 4000, density: 0.23601059135039706 },
                { start: 4000, density: 0.13680494263018575 },
              ],
              percentiles: { p75: 3084 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.au/",
          normalizedUrl: "https://www.yara.com.au",
        },
      },
      extractedResults: {
        fcp: 2721,
        lcp: 3084,
        cls: "0.00",
        fid: 13,
      },
      timestamp: 1649184506971,
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
                { start: 0, end: 1800, density: 0.6548287733284924 },
                { start: 1800, end: 3000, density: 0.20945823518753112 },
                { start: 3000, density: 0.13571299148396357 },
              ],
              percentiles: { p75: 2253 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9627012171181779 },
                { start: 100, end: 300, density: 0.027483313702394964 },
                { start: 300, density: 0.009815469179426784 },
              ],
              percentiles: { p75: 14 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7108966263756051 },
                { start: 2500, end: 4000, density: 0.17923507126104907 },
                { start: 4000, density: 0.10986830236334051 },
              ],
              percentiles: { p75: 2735 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9340561677923926,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.040526128688233215,
                },
                { start: "0.25", density: 0.02541770351937433 },
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
        fcp: 2253,
        lcp: 2735,
        cls: "0.00",
        fid: 14,
      },
      timestamp: 1649184507021,
    },
    {
      url: "https://www.yarabrasil.com.br/",
      deviceTargeted: null,
      results: {
        record: {
          key: { origin: "https://www.yarabrasil.com.br" },
          metrics: {
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.4997999399819942 },
                { start: 2500, end: 4000, density: 0.2412223667100128 },
                { start: 4000, density: 0.25897769330798937 },
              ],
              percentiles: { p75: 4177 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8356000000000003,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.11920000000000004,
                },
                { start: "0.25", density: 0.04520000000000002 },
              ],
              percentiles: { p75: "0.05" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.48014404321296017 },
                { start: 1800, end: 3000, density: 0.24657397219165555 },
                { start: 3000, density: 0.27328198459536707 },
              ],
              percentiles: { p75: 3245 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9092455473283956 },
                { start: 100, end: 300, density: 0.056533920352211234 },
                { start: 300, density: 0.03422053231939181 },
              ],
              percentiles: { p75: 16 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yarabrasil.com.br/",
          normalizedUrl: "https://www.yarabrasil.com.br",
        },
      },
      extractedResults: {
        fcp: 3245,
        lcp: 4177,
        cls: "0.05",
        fid: 16,
      },
      timestamp: 1649184507072,
    },
    {
      url: "https://www.yara.pl/",
      deviceTargeted: null,
      results: {
        record: {
          key: { origin: "https://www.yara.pl" },
          metrics: {
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9561131660501839 },
                { start: 100, end: 300, density: 0.02319304208737376 },
                { start: 300, density: 0.020693791862441253 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8042804280428054 },
                { start: 2500, end: 4000, density: 0.1445144514451447 },
                { start: 4000, density: 0.051205120512051935 },
              ],
              percentiles: { p75: 2266 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.7482000000000003,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.21280000000000007,
                },
                { start: "0.25", density: 0.03900000000000001 },
              ],
              percentiles: { p75: "0.10" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7693691892432257 },
                { start: 1800, end: 3000, density: 0.1705488353493949 },
                { start: 3000, density: 0.06008197540737834 },
              ],
              percentiles: { p75: 1749 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.pl/",
          normalizedUrl: "https://www.yara.pl",
        },
      },
      extractedResults: {
        fcp: 1749,
        lcp: 2266,
        cls: "0.10",
        fid: 12,
      },
      timestamp: 1649184507099,
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
                  density: 0.938506149385061,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.04549545045495449,
                },
                { start: "0.25", density: 0.015998400159983998 },
              ],
              percentiles: { p75: "0.01" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8299340131973637 },
                { start: 1800, end: 3000, density: 0.12607478504299188 },
                { start: 3000, density: 0.043991201759648366 },
              ],
              percentiles: { p75: 1577 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9709029097090288 },
                { start: 100, end: 300, density: 0.018698130186981295 },
                { start: 300, density: 0.010398960103989635 },
              ],
              percentiles: { p75: 11 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8498150184981548 },
                { start: 2500, end: 4000, density: 0.1149885011498856 },
                { start: 4000, density: 0.03519648035196448 },
              ],
              percentiles: { p75: 2031 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.hu/",
          normalizedUrl: "https://www.yara.hu",
        },
      },
      extractedResults: {
        fcp: 1577,
        lcp: 2031,
        cls: "0.01",
        fid: 11,
      },
      timestamp: 1649184507124,
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
                { start: 0, end: 100, density: 0.9752925877763334 },
                { start: 100, end: 300, density: 0.015474642392717822 },
                { start: 300, density: 0.00923276983094931 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.9075421133231257 },
                { start: 2500, end: 4000, density: 0.07280500255232274 },
                { start: 4000, density: 0.019652884124553332 },
              ],
              percentiles: { p75: 1794 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8876175947114174,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.09318586320874664,
                },
                { start: "0.25", density: 0.019196542079837287 },
              ],
              percentiles: { p75: "0.00" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8749840377984908 },
                { start: 1800, end: 3000, density: 0.10458434427276177 },
                { start: 3000, density: 0.020431617928744664 },
              ],
              percentiles: { p75: 1459 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.lt/",
          normalizedUrl: "https://www.yara.lt",
        },
      },
      extractedResults: {
        fcp: 1459,
        lcp: 1794,
        cls: "0.00",
        fid: 13,
      },
      timestamp: 1649184507152,
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
                  density: 0.8339930151338765,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.10838183934807914,
                },
                { start: "0.25", density: 0.05762514551804428 },
              ],
              percentiles: { p75: "0.02" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7596401028277645 },
                { start: 1800, end: 3000, density: 0.14945080626314586 },
                { start: 3000, density: 0.09090909090909075 },
              ],
              percentiles: { p75: 1770 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9738900252677171 },
                { start: 100, end: 300, density: 0.021176753699915764 },
                { start: 300, density: 0.004933221032366733 },
              ],
              percentiles: { p75: 15 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8202240634846529 },
                { start: 2500, end: 4000, density: 0.11010619675574737 },
                { start: 4000, density: 0.06966973975959845 },
              ],
              percentiles: { p75: 2144 },
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
        lcp: 2144,
        cls: "0.02",
        fid: 15,
      },
      timestamp: 1649184507206,
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
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.467914131557801 },
                { start: 2500, end: 4000, density: 0.2546205946504423 },
                { start: 4000, density: 0.2774652737917596 },
              ],
              percentiles: { p75: 4346 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8450591985428062,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.10940346083788721,
                },
                { start: "0.25", density: 0.045537340619307885 },
              ],
              percentiles: { p75: "0.04" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.44157033306627 },
                { start: 1800, end: 3000, density: 0.2592423028499486 },
                { start: 3000, density: 0.29918736408376717 },
              ],
              percentiles: { p75: 3418 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.8956779159265847 },
                { start: 100, end: 300, density: 0.06500888099467148 },
                { start: 300, density: 0.0393132030787452 },
              ],
              percentiles: { p75: 19 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yarabrasil.com.br/",
          normalizedUrl: "https://www.yarabrasil.com.br",
        },
      },
      extractedResults: {
        fcp: 3418,
        lcp: 4346,
        cls: "0.04",
        fid: 19,
      },
      timestamp: 1649184507258,
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
                { start: 0, end: 1800, density: 0.7070127277264839 },
                { start: 1800, end: 3000, density: 0.21537309708011146 },
                { start: 3000, density: 0.07761417519341193 },
              ],
              percentiles: { p75: 1960 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9633324695516986 },
                { start: 100, end: 300, density: 0.024876911116869693 },
                { start: 300, density: 0.011790619331433 },
              ],
              percentiles: { p75: 14 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7430946131733569 },
                { start: 2500, end: 4000, density: 0.1727909011373587 },
                { start: 4000, density: 0.0841144856892904 },
              ],
              percentiles: { p75: 2521 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.7823222277473887,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.1816260566882147,
                },
                { start: "0.25", density: 0.036051715564395806 },
              ],
              percentiles: { p75: "0.07" },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.co.th/",
          normalizedUrl: "https://www.yara.co.th",
        },
      },
      extractedResults: {
        fcp: 1960,
        lcp: 2521,
        cls: "0.07",
        fid: 14,
      },
      timestamp: 1649184507311,
    },
    {
      url: "https://www.yara.co.za/",
      deviceTargeted: null,
      results: {
        record: {
          key: { origin: "https://www.yara.co.za" },
          metrics: {
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8195000000000002,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.12520000000000003,
                },
                { start: "0.25", density: 0.05530000000000003 },
              ],
              percentiles: { p75: "0.06" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6551000000000047 },
                { start: 1800, end: 3000, density: 0.1986000000000014 },
                { start: 3000, density: 0.1463000000000025 },
              ],
              percentiles: { p75: 2319 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9800000000000002 },
                { start: 100, end: 300, density: 0.016900000000000002 },
                { start: 300, density: 0.0031000000000000003 },
              ],
              percentiles: { p75: 9 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6813955813256022 },
                { start: 2500, end: 4000, density: 0.18034589623113073 },
                { start: 4000, density: 0.13825852244326856 },
              ],
              percentiles: { p75: 2988 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.co.za/",
          normalizedUrl: "https://www.yara.co.za",
        },
      },
      extractedResults: { fcp: 2319, lcp: 2988, cls: "0.06", fid: 9 },
      timestamp: 1649184507364,
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
                  density: 0.968928660203829,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.016654238130748213,
                },
                { start: "0.25", density: 0.014417101665423829 },
              ],
              percentiles: { p75: "0.00" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8061569265423676 },
                { start: 1800, end: 3000, density: 0.12814416218245647 },
                { start: 3000, density: 0.06569891127518587 },
              ],
              percentiles: { p75: 1574 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9505446350319324 },
                { start: 100, end: 300, density: 0.03004882934769017 },
                { start: 300, density: 0.019406535620383195 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8400926273626298 },
                { start: 2500, end: 4000, density: 0.10771060207785788 },
                { start: 4000, density: 0.052196770559520024 },
              ],
              percentiles: { p75: 1998 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.pt/",
          normalizedUrl: "https://www.yara.pt",
        },
      },
      extractedResults: {
        fcp: 1574,
        lcp: 1998,
        cls: "0.00",
        fid: 12,
      },
      timestamp: 1649184507390,
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
                  density: 0.9523321373654537,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.025627883136852898,
                },
                { start: "0.25", density: 0.022039979497693495 },
              ],
              percentiles: { p75: "0.00" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.49922580645161263 },
                { start: 1800, end: 3000, density: 0.29380645161290314 },
                { start: 3000, density: 0.20696774193548467 },
              ],
              percentiles: { p75: 2831 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9369527145359001 },
                { start: 100, end: 300, density: 0.04149265795500463 },
                { start: 300, density: 0.021554627509093295 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6100852272727308 },
                { start: 2500, end: 4000, density: 0.26762654958677845 },
                { start: 4000, density: 0.1222882231404974 },
              ],
              percentiles: { p75: 3118 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.ru/",
          normalizedUrl: "https://www.yara.ru",
        },
      },
      extractedResults: {
        fcp: 2831,
        lcp: 3118,
        cls: "0.00",
        fid: 13,
      },
      timestamp: 1649184507439,
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
                { start: 0, end: 100, density: 0.879031037093104 },
                { start: 100, end: 300, density: 0.054201362604087366 },
                { start: 300, density: 0.06676760030279992 },
              ],
              percentiles: { p75: 19 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6219967169079212 },
                { start: 2500, end: 4000, density: 0.2134009849276218 },
                { start: 4000, density: 0.16460229816445104 },
              ],
              percentiles: { p75: 3253 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9120830895260382,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.03320655354008191,
                },
                { start: "0.25", density: 0.05471035693387948 },
              ],
              percentiles: { p75: "0.00" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5315235128319195 },
                { start: 1800, end: 3000, density: 0.27399495623794456 },
                { start: 3000, density: 0.19448153093012704 },
              ],
              percentiles: { p75: 2681 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.us/",
          normalizedUrl: "https://www.yara.us",
        },
      },
      extractedResults: {
        fcp: 2681,
        lcp: 3253,
        cls: "0.00",
        fid: 19,
      },
      timestamp: 1649184507490,
    },
    {
      url: "https://www.yara.de/",
      deviceTargeted: null,
      results: {
        record: {
          key: { origin: "https://www.yara.de" },
          metrics: {
            cumulative_layout_shift: {
              histogram: [
                { start: "0.00", end: "0.10", density: 0.8085 },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.11989999999999999,
                },
                { start: "0.25", density: 0.07160000000000011 },
              ],
              percentiles: { p75: "0.06" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8411364545818303 },
                { start: 1800, end: 3000, density: 0.11644657863145225 },
                { start: 3000, density: 0.042416966786714555 },
              ],
              percentiles: { p75: 1447 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9533906781356226 },
                { start: 100, end: 300, density: 0.02960592118423671 },
                { start: 300, density: 0.01700340068013619 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8550355035503615 },
                { start: 2500, end: 4000, density: 0.10526052605260604 },
                { start: 4000, density: 0.039703970397040315 },
              ],
              percentiles: { p75: 1962 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.de/",
          normalizedUrl: "https://www.yara.de",
        },
      },
      extractedResults: {
        fcp: 1447,
        lcp: 1962,
        cls: "0.06",
        fid: 13,
      },
      timestamp: 1649184507542,
    },
    {
      url: "https://www.yara.com.ec/",
      deviceTargeted: null,
      results: {
        record: {
          key: { origin: "https://www.yara.com.ec" },
          metrics: {
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9245075492450759,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.04979502049795023,
                },
                { start: "0.25", density: 0.025697430256974307 },
              ],
              percentiles: { p75: "0.01" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5497549754975473 },
                { start: 1800, end: 3000, density: 0.27022702270226895 },
                { start: 3000, density: 0.18001800180018032 },
              ],
              percentiles: { p75: 2605 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9634999999999994 },
                { start: 100, end: 300, density: 0.02759999999999998 },
                { start: 300, density: 0.008899999999999972 },
              ],
              percentiles: { p75: 11 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6466940082024689 },
                { start: 2500, end: 4000, density: 0.2167650295088553 },
                { start: 4000, density: 0.13654096228868912 },
              ],
              percentiles: { p75: 3061 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.ec/",
          normalizedUrl: "https://www.yara.com.ec",
        },
      },
      extractedResults: {
        fcp: 2605,
        lcp: 3061,
        cls: "0.01",
        fid: 11,
      },
      timestamp: 1649184507569,
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
                  density: 0.912087912087912,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.06792003177545344,
                },
                { start: "0.25", density: 0.01999205613663443 },
              ],
              percentiles: { p75: "0.00" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6694114470842276 },
                { start: 1800, end: 3000, density: 0.1927645788336917 },
                { start: 3000, density: 0.13782397408207298 },
              ],
              percentiles: { p75: 2160 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.929763186221738 },
                { start: 100, end: 300, density: 0.043595263724434605 },
                { start: 300, density: 0.02664155005382128 },
              ],
              percentiles: { p75: 14 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7428321442993657 },
                { start: 2500, end: 4000, density: 0.15809664827029177 },
                { start: 4000, density: 0.0990712074303415 },
              ],
              percentiles: { p75: 2557 },
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
        lcp: 2557,
        cls: "0.00",
        fid: 14,
      },
      timestamp: 1649184507593,
    },
    {
      url: "https://www.yara.ro/",
      deviceTargeted: null,
      results: {
        record: {
          key: { origin: "https://www.yara.ro" },
          metrics: {
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8136000000000002 },
                { start: 1800, end: 3000, density: 0.14560000000000003 },
                { start: 3000, density: 0.040800000000000294 },
              ],
              percentiles: { p75: 1624 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9610961096109638 },
                { start: 100, end: 300, density: 0.015701570157015742 },
                { start: 300, density: 0.023202320232023215 },
              ],
              percentiles: { p75: 11 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8217821782178217 },
                { start: 2500, end: 4000, density: 0.13681368136813685 },
                { start: 4000, density: 0.04140414041404171 },
              ],
              percentiles: { p75: 2166 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9127087291270864,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.07609239076092385,
                },
                { start: "0.25", density: 0.011198880111988795 },
              ],
              percentiles: { p75: "0.01" },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.ro/",
          normalizedUrl: "https://www.yara.ro",
        },
      },
      extractedResults: {
        fcp: 1624,
        lcp: 2166,
        cls: "0.01",
        fid: 11,
      },
      timestamp: 1649184507645,
    },
    {
      url: "https://www.yara.be/fr-be/",
      deviceTargeted: null,
      results: {
        record: {
          key: { origin: "https://www.yara.be" },
          metrics: {
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9681936387277462 },
                { start: 100, end: 300, density: 0.013802760552110433 },
                { start: 300, density: 0.018003600720144113 },
              ],
              percentiles: { p75: 10 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.872388283514947 },
                { start: 2500, end: 4000, density: 0.095821253623913 },
                { start: 4000, density: 0.03179046286114164 },
              ],
              percentiles: { p75: 1958 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.7621999999999998,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.15819999999999998,
                },
                { start: "0.25", density: 0.0795999999999999 },
              ],
              percentiles: { p75: "0.09" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8804760952190431 },
                { start: 1800, end: 3000, density: 0.08311662332466484 },
                { start: 3000, density: 0.036407281456291 },
              ],
              percentiles: { p75: 1335 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.be/fr-be/",
          normalizedUrl: "https://www.yara.be",
        },
      },
      extractedResults: {
        fcp: 1335,
        lcp: 1958,
        cls: "0.09",
        fid: 10,
      },
      timestamp: 1649184507675,
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
                { start: 0, end: 1800, density: 0.6090218043608656 },
                { start: 1800, end: 3000, density: 0.235947189437885 },
                { start: 3000, density: 0.1550310062012385 },
              ],
              percentiles: { p75: 2367 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9615076984603169 },
                { start: 100, end: 300, density: 0.02559488102379548 },
                { start: 300, density: 0.012897420515896953 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6934273709483761 },
                { start: 2500, end: 4000, density: 0.17001800720288043 },
                { start: 4000, density: 0.13655462184874162 },
              ],
              percentiles: { p75: 2859 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8728872887288731,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.08230823082308232,
                },
                { start: "0.25", density: 0.04480448044804483 },
              ],
              percentiles: { p75: "0.02" },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.mx/",
          normalizedUrl: "https://www.yara.com.mx",
        },
      },
      extractedResults: {
        fcp: 2367,
        lcp: 2859,
        cls: "0.02",
        fid: 13,
      },
      timestamp: 1649184507701,
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
                  density: 0.922465451877216,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.03607680078268311,
                },
                { start: "0.25", density: 0.04145774734010023 },
              ],
              percentiles: { p75: "0.01" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.560093780848967 },
                { start: 1800, end: 3000, density: 0.24136229022704983 },
                { start: 3000, density: 0.1985439289239888 },
              ],
              percentiles: { p75: 2630 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9400201612903176 },
                { start: 100, end: 300, density: 0.03830645161290303 },
                { start: 300, density: 0.02167338709677407 },
              ],
              percentiles: { p75: 15 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.66520123839009 },
                { start: 2500, end: 4000, density: 0.18619195046439552 },
                { start: 4000, density: 0.14860681114550953 },
              ],
              percentiles: { p75: 3050 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.co/",
          normalizedUrl: "https://www.yara.com.co",
        },
      },
      extractedResults: {
        fcp: 2630,
        lcp: 3050,
        cls: "0.01",
        fid: 15,
      },
      timestamp: 1649184507725,
    },
    {
      url: "https://www.yara.ru/",
      deviceTargeted: null,
      results: {
        record: {
          key: { origin: "https://www.yara.ru" },
          metrics: {
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.917308269173083,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.06349365063493652,
                },
                { start: "0.25", density: 0.0191980801919808 },
              ],
              percentiles: { p75: "0.02" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5627000000000021 },
                { start: 1800, end: 3000, density: 0.26480000000000103 },
                { start: 3000, density: 0.1725000000000008 },
              ],
              percentiles: { p75: 2637 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9527952795279515 },
                { start: 100, end: 300, density: 0.03080308030803076 },
                { start: 300, density: 0.01640164016401638 },
              ],
              percentiles: { p75: 11 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6560968290487181 },
                { start: 2500, end: 4000, density: 0.23617085125537784 },
                { start: 4000, density: 0.10773231969590905 },
              ],
              percentiles: { p75: 2960 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.ru/",
          normalizedUrl: "https://www.yara.ru",
        },
      },
      extractedResults: {
        fcp: 2637,
        lcp: 2960,
        cls: "0.02",
        fid: 11,
      },
      timestamp: 1649184507779,
    },
    {
      url: "https://www.yara.dk/",
      deviceTargeted: null,
      results: {
        record: {
          key: { origin: "https://www.yara.dk" },
          metrics: {
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.892139213921391 },
                { start: 2500, end: 4000, density: 0.08345834583458339 },
                { start: 4000, density: 0.024402440244024506 },
              ],
              percentiles: { p75: 1838 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8107999999999997,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.16279999999999992,
                },
                { start: "0.25", density: 0.026399999999999996 },
              ],
              percentiles: { p75: "0.08" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8791758351670323 },
                { start: 1800, end: 3000, density: 0.09231846369273844 },
                { start: 3000, density: 0.028505701140228 },
              ],
              percentiles: { p75: 1334 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9664966496649641 },
                { start: 100, end: 300, density: 0.01660166016601656 },
                { start: 300, density: 0.01690169016901688 },
              ],
              percentiles: { p75: 9 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.dk/",
          normalizedUrl: "https://www.yara.dk",
        },
      },
      extractedResults: { fcp: 1334, lcp: 1838, cls: "0.08", fid: 9 },
      timestamp: 1649184507817,
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
                  density: 0.8885999999999995,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.08689999999999996,
                },
                { start: "0.25", density: 0.024499999999999987 },
              ],
              percentiles: { p75: "0.02" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7344203260978259 },
                { start: 1800, end: 3000, density: 0.17675302590777145 },
                { start: 3000, density: 0.08882664799439777 },
              ],
              percentiles: { p75: 1890 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9593081383723261 },
                { start: 100, end: 300, density: 0.026894621075784865 },
                { start: 300, density: 0.013797240551889642 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.785521447855219 },
                { start: 2500, end: 4000, density: 0.1434856514348573 },
                { start: 4000, density: 0.07099290070992918 },
              ],
              percentiles: { p75: 2327 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.ua/",
          normalizedUrl: "https://www.yara.ua",
        },
      },
      extractedResults: {
        fcp: 1890,
        lcp: 2327,
        cls: "0.02",
        fid: 12,
      },
      timestamp: 1649184507842,
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
                  density: 0.8756875687568746,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.06300630063006292,
                },
                { start: "0.25", density: 0.061306130613061297 },
              ],
              percentiles: { p75: "0.04" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.07812343703110883 },
                { start: 1800, end: 3000, density: 0.464039211763526 },
                { start: 3000, density: 0.4578373512053564 },
              ],
              percentiles: { p75: 4489 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.21462146214621605 },
                { start: 2500, end: 4000, density: 0.4209420942094237 },
                { start: 4000, density: 0.3644364436443692 },
              ],
              percentiles: { p75: 5079 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "http://www.yara.com.mm/",
          normalizedUrl: "http://www.yara.com.mm",
        },
      },
      extractedResults: { fcp: 4489, lcp: 5079, cls: "0.04" },
      timestamp: 1649184507881,
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
                { start: 0, end: 1800, density: 0.5259474052594743 },
                { start: 1800, end: 3000, density: 0.32826717328267185 },
                { start: 3000, density: 0.1457854214578566 },
              ],
              percentiles: { p75: 2510 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9276289484206303 },
                { start: 100, end: 300, density: 0.03688524590163929 },
                { start: 300, density: 0.035485805677729146 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.5991297389216755 },
                { start: 2500, end: 4000, density: 0.2841352405721712 },
                { start: 4000, density: 0.1167350205061515 },
              ],
              percentiles: { p75: 3107 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8471694338867781,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.09651930386077225,
                },
                { start: "0.25", density: 0.05631126225245062 },
              ],
              percentiles: { p75: "0.03" },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.ie/",
          normalizedUrl: "https://www.yara.ie",
        },
      },
      extractedResults: {
        fcp: 2510,
        lcp: 3107,
        cls: "0.03",
        fid: 12,
      },
      timestamp: 1649184507906,
    },
    {
      url: "https://www.yara.com.au/",
      deviceTargeted: null,
      results: {
        record: {
          key: { origin: "https://www.yara.com.au" },
          metrics: {
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6189381061893826 },
                { start: 1800, end: 3000, density: 0.24317568243175747 },
                { start: 3000, density: 0.1378862113788626 },
              ],
              percentiles: { p75: 2372 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9752049590081996 },
                { start: 100, end: 300, density: 0.014997000599880043 },
                { start: 300, density: 0.009798040391921631 },
              ],
              percentiles: { p75: 10 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6862500000000006 },
                { start: 2500, end: 4000, density: 0.19995000000000018 },
                { start: 4000, density: 0.11379999999999992 },
              ],
              percentiles: { p75: 2863 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.7687000000000006,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.16220000000000012,
                },
                { start: "0.25", density: 0.06910000000000012 },
              ],
              percentiles: { p75: "0.08" },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.au/",
          normalizedUrl: "https://www.yara.com.au",
        },
      },
      extractedResults: {
        fcp: 2372,
        lcp: 2863,
        cls: "0.08",
        fid: 10,
      },
      timestamp: 1649184507939,
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
                  density: 0.9179867986798688,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.04702970297029707,
                },
                { start: "0.25", density: 0.03498349834983501 },
              ],
              percentiles: { p75: "0.01" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.3786603837091903 },
                { start: 1800, end: 3000, density: 0.3221137664086178 },
                { start: 3000, density: 0.29922584988219864 },
              ],
              percentiles: { p75: 3279 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9014737539327631 },
                { start: 100, end: 300, density: 0.04702765358503026 },
                { start: 300, density: 0.051498592482198555 },
              ],
              percentiles: { p75: 17 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.4965615565246519 },
                { start: 2500, end: 4000, density: 0.2981382086548112 },
                { start: 4000, density: 0.20530023482052684 },
              ],
              percentiles: { p75: 3689 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.co.uk/",
          normalizedUrl: "https://www.yara.co.uk",
        },
      },
      extractedResults: {
        fcp: 3279,
        lcp: 3689,
        cls: "0.01",
        fid: 17,
      },
      timestamp: 1649184507963,
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
                  density: 0.8983685477400367,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.047338860657929895,
                },
                { start: "0.25", density: 0.054292591602032605 },
              ],
              percentiles: { p75: "0.02" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.49064026044493525 },
                { start: 1800, end: 3000, density: 0.311991318502447 },
                { start: 3000, density: 0.19736842105263677 },
              ],
              percentiles: { p75: 2742 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9647975511339896 },
                { start: 100, end: 300, density: 0.028523723389453113 },
                { start: 300, density: 0.006678725476554865 },
              ],
              percentiles: { p75: 14 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6349142007836853 },
                { start: 2500, end: 4000, density: 0.22564518308336978 },
                { start: 4000, density: 0.13944061613295716 },
              ],
              percentiles: { p75: 3078 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.pe/",
          normalizedUrl: "https://www.yara.com.pe",
        },
      },
      extractedResults: {
        fcp: 2742,
        lcp: 3078,
        cls: "0.02",
        fid: 14,
      },
      timestamp: 1649184508014,
    },
    {
      url: "https://www.yara.nl/",
      deviceTargeted: null,
      results: {
        record: {
          key: { origin: "https://www.yara.nl" },
          metrics: {
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8645406378086608 },
                { start: 1800, end: 3000, density: 0.09687093871838487 },
                { start: 3000, density: 0.03858842347295833 },
              ],
              percentiles: { p75: 1402 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9636891067320229 },
                { start: 100, end: 300, density: 0.021906571971591546 },
                { start: 300, density: 0.014404321296388937 },
              ],
              percentiles: { p75: 10 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8509350935093561 },
                { start: 2500, end: 4000, density: 0.10276027602760343 },
                { start: 4000, density: 0.046304630463046746 },
              ],
              percentiles: { p75: 2063 },
            },
            cumulative_layout_shift: {
              histogram: [
                { start: "0.00", end: "0.10", density: 0.7981 },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.15480000000000005,
                },
                { start: "0.25", density: 0.04709999999999998 },
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
        fcp: 1402,
        lcp: 2063,
        cls: "0.07",
        fid: 10,
      },
      timestamp: 1649184508069,
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
                  density: 0.9447156455943372,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.028069319013912613,
                },
                { start: "0.25", density: 0.02721503539175006 },
              ],
              percentiles: { p75: "0.00" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5204031465093371 },
                { start: 1800, end: 3000, density: 0.2804818092428689 },
                { start: 3000, density: 0.1991150442477895 },
              ],
              percentiles: { p75: 2730 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9537857685489989 },
                { start: 100, end: 300, density: 0.0349455558369207 },
                { start: 300, density: 0.011268675614079475 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6381401617250771 },
                { start: 2500, end: 4000, density: 0.22757902474883954 },
                { start: 4000, density: 0.1342808135260982 },
              ],
              percentiles: { p75: 3060 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.ec/",
          normalizedUrl: "https://www.yara.com.ec",
        },
      },
      extractedResults: {
        fcp: 2730,
        lcp: 3060,
        cls: "0.00",
        fid: 13,
      },
      timestamp: 1649184508096,
    },
    {
      url: "https://www.yara.com.co/",
      deviceTargeted: null,
      results: {
        record: {
          key: { origin: "https://www.yara.com.co" },
          metrics: {
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8600720144028798,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.08751750350070006,
                },
                { start: "0.25", density: 0.05241048209641926 },
              ],
              percentiles: { p75: "0.03" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5992396958783565 },
                { start: 1800, end: 3000, density: 0.22338935574229885 },
                { start: 3000, density: 0.17737094837935413 },
              ],
              percentiles: { p75: 2458 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.95018007202881 },
                { start: 100, end: 300, density: 0.03181272509003596 },
                { start: 300, density: 0.01800720288115247 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6819091454872983 },
                { start: 2500, end: 4000, density: 0.17470482289373782 },
                { start: 4000, density: 0.1433860316189735 },
              ],
              percentiles: { p75: 2960 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.co/",
          normalizedUrl: "https://www.yara.com.co",
        },
      },
      extractedResults: {
        fcp: 2458,
        lcp: 2960,
        cls: "0.03",
        fid: 13,
      },
      timestamp: 1649184508157,
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
                  density: 0.9134018004310908,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.040573094966400484,
                },
                { start: "0.25", density: 0.04602510460251055 },
              ],
              percentiles: { p75: "0.01" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7132474818309402 },
                { start: 1800, end: 3000, density: 0.1890858090016597 },
                { start: 3000, density: 0.0976667091674123 },
              ],
              percentiles: { p75: 1946 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.944057746841967 },
                { start: 100, end: 300, density: 0.03132250580046395 },
                { start: 300, density: 0.02461974735756649 },
              ],
              percentiles: { p75: 14 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7779760387458713 },
                { start: 2500, end: 4000, density: 0.1491205709915907 },
                { start: 4000, density: 0.07290339026255611 },
              ],
              percentiles: { p75: 2372 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.es/",
          normalizedUrl: "https://www.yara.es",
        },
      },
      extractedResults: {
        fcp: 1946,
        lcp: 2372,
        cls: "0.01",
        fid: 14,
      },
      timestamp: 1649184508191,
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
                  density: 0.7882000000000005,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.1363000000000001,
                },
                { start: "0.25", density: 0.07550000000000004 },
              ],
              percentiles: { p75: "0.07" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7764000000000105 },
                { start: 1800, end: 3000, density: 0.13900000000000193 },
                { start: 3000, density: 0.08460000000000174 },
              ],
              percentiles: { p75: 1717 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9773022697730226 },
                { start: 100, end: 300, density: 0.0175982401759824 },
                { start: 300, density: 0.005099490050994903 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8269326932693359 },
                { start: 2500, end: 4000, density: 0.10396039603960514 },
                { start: 4000, density: 0.06910691069107124 },
              ],
              percentiles: { p75: 2102 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.my/",
          normalizedUrl: "https://www.yara.my",
        },
      },
      extractedResults: {
        fcp: 1717,
        lcp: 2102,
        cls: "0.07",
        fid: 13,
      },
      timestamp: 1649184508245,
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
                { start: 0, end: 2500, density: 0.824972537532048 },
                { start: 2500, end: 4000, density: 0.12980593189308084 },
                { start: 4000, density: 0.045221530574881465 },
              ],
              percentiles: { p75: 2238 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9488564739780301,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.0352962362686836,
                },
                { start: "0.25", density: 0.01584728975328652 },
              ],
              percentiles: { p75: "0.00" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8220555961960571 },
                { start: 1800, end: 3000, density: 0.13606437454279566 },
                { start: 3000, density: 0.041880029261156 },
              ],
              percentiles: { p75: 1592 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9397853374568008 },
                { start: 100, end: 300, density: 0.035655812261233634 },
                { start: 300, density: 0.0245588502819721 },
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
        fcp: 1592,
        lcp: 2238,
        cls: "0.00",
        fid: 14,
      },
      timestamp: 1649184508273,
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
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.943120841382271,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.04979609358231381,
                },
                { start: "0.25", density: 0.007083065035415326 },
              ],
              percentiles: { p75: "0.00" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.9214409722222222 },
                { start: 1800, end: 3000, density: 0.06640625 },
                { start: 3000, density: 0.012152777777777775 },
              ],
              percentiles: { p75: 1376 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9174107142857141 },
                { start: 100, end: 300, density: 0.07366071428571427 },
                { start: 300, density: 0.008928571428571428 },
              ],
              percentiles: { p75: 16 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.9145446698316795 },
                { start: 2500, end: 4000, density: 0.07337073802330603 },
                { start: 4000, density: 0.012084592145015114 },
              ],
              percentiles: { p75: 1880 },
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
        lcp: 1880,
        cls: "0.00",
        fid: 16,
      },
      timestamp: 1649184508330,
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
                { start: "0.00", end: "0.10", density: 0.789 },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.15990000000000001,
                },
                { start: "0.25", density: 0.051100000000000055 },
              ],
              percentiles: { p75: "0.07" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8963103689631192 },
                { start: 1800, end: 3000, density: 0.0792920707929221 },
                { start: 3000, density: 0.024397560243976005 },
              ],
              percentiles: { p75: 1311 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9399819945983743 },
                { start: 100, end: 300, density: 0.030709212763828975 },
                { start: 300, density: 0.029308792637791355 },
              ],
              percentiles: { p75: 14 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8574785042991453 },
                { start: 2500, end: 4000, density: 0.11472705458908289 },
                { start: 4000, density: 0.027794441111778003 },
              ],
              percentiles: { p75: 2015 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.fi/",
          normalizedUrl: "https://www.yara.fi",
        },
      },
      extractedResults: {
        fcp: 1311,
        lcp: 2015,
        cls: "0.07",
        fid: 14,
      },
      timestamp: 1649184508387,
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
                  density: 0.9175956284153011,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.05923497267759566,
                },
                { start: "0.25", density: 0.023169398907103865 },
              ],
              percentiles: { p75: "0.00" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8379950771984763 },
                { start: 1800, end: 3000, density: 0.12172745580666791 },
                { start: 3000, density: 0.04027746699485357 },
              ],
              percentiles: { p75: 1553 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9281729428172948 },
                { start: 100, end: 300, density: 0.03254300325430034 },
                { start: 300, density: 0.03928405392840546 },
              ],
              percentiles: { p75: 15 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.86971517578994 },
                { start: 2500, end: 4000, density: 0.10180240320427214 },
                { start: 4000, density: 0.028482421005785265 },
              ],
              percentiles: { p75: 2011 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.dk/",
          normalizedUrl: "https://www.yara.dk",
        },
      },
      extractedResults: {
        fcp: 1553,
        lcp: 2011,
        cls: "0.00",
        fid: 15,
      },
      timestamp: 1649184508413,
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
                  density: 0.9272727272727271,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.047648902821316605,
                },
                { start: "0.25", density: 0.02507836990595612 },
              ],
              percentiles: { p75: "0.00" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.910218041898246 },
                { start: 1800, end: 3000, density: 0.06819153484395032 },
                { start: 3000, density: 0.02159042325780239 },
              ],
              percentiles: { p75: 1256 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9606093579978214 },
                { start: 100, end: 300, density: 0.022850924918389498 },
                { start: 300, density: 0.016539717083786654 },
              ],
              percentiles: { p75: 14 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.9122732123799356 },
                { start: 2500, end: 4000, density: 0.07107790821771609 },
                { start: 4000, density: 0.01664887940234792 },
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
        fcp: 1256,
        lcp: 1689,
        cls: "0.00",
        fid: 14,
      },
      timestamp: 1649184508469,
    },
    {
      url: "https://www.yara.us/",
      deviceTargeted: null,
      results: {
        record: {
          key: { origin: "https://www.yara.us" },
          metrics: {
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9152915291529102 },
                { start: 100, end: 300, density: 0.0381038103810379 },
                { start: 300, density: 0.04660466046604592 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6699509852955883 },
                { start: 2500, end: 4000, density: 0.1914074222266679 },
                { start: 4000, density: 0.13864159247774405 },
              ],
              percentiles: { p75: 3048 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8358835883588358,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.10231023102310229,
                },
                { start: "0.25", density: 0.061806180618061785 },
              ],
              percentiles: { p75: "0.06" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6222866860057916 },
                { start: 1800, end: 3000, density: 0.22386716014804067 },
                { start: 3000, density: 0.15384615384615188 },
              ],
              percentiles: { p75: 2370 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.us/",
          normalizedUrl: "https://www.yara.us",
        },
      },
      extractedResults: {
        fcp: 2370,
        lcp: 3048,
        cls: "0.06",
        fid: 13,
      },
      timestamp: 1649184508528,
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
                { start: 0, end: 2500, density: 0.7531321568099169 },
                { start: 2500, end: 4000, density: 0.14704297453859658 },
                { start: 4000, density: 0.0998248686514888 },
              ],
              percentiles: { p75: 2648 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9593817856686678,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.01724358155575425,
                },
                { start: "0.25", density: 0.023374632775578 },
              ],
              percentiles: { p75: "0.00" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5909735654416519 },
                { start: 1800, end: 3000, density: 0.28923275306254104 },
                { start: 3000, density: 0.11979368149580981 },
              ],
              percentiles: { p75: 2207 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9722222222222223 },
                { start: 100, end: 300, density: 0.021541950113378686 },
                { start: 300, density: 0.006235827664399094 },
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
        fcp: 2207,
        lcp: 2648,
        cls: "0.00",
        fid: 13,
      },
      timestamp: 1649184508560,
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
                  density: 0.9427187232829866,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.03833000854944428,
                },
                { start: "0.25", density: 0.018951268167569115 },
              ],
              percentiles: { p75: "0.01" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8087494603540095 },
                { start: 1800, end: 3000, density: 0.14059576917542116 },
                { start: 3000, density: 0.05065477047057141 },
              ],
              percentiles: { p75: 1584 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9425419114486326 },
                { start: 100, end: 300, density: 0.036394898982662315 },
                { start: 300, density: 0.02106318956870604 },
              ],
              percentiles: { p75: 14 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8379038047379808 },
                { start: 2500, end: 4000, density: 0.11988513998564326 },
                { start: 4000, density: 0.04221105527638218 },
              ],
              percentiles: { p75: 2088 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.de/",
          normalizedUrl: "https://www.yara.de",
        },
      },
      extractedResults: {
        fcp: 1584,
        lcp: 2088,
        cls: "0.01",
        fid: 14,
      },
      timestamp: 1649184508622,
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
                { start: 0, end: 1800, density: 0.9269146170765917 },
                { start: 1800, end: 3000, density: 0.059488102379524566 },
                { start: 3000, density: 0.013597280543891381 },
              ],
              percentiles: { p75: 1213 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9688124750099979 },
                { start: 100, end: 300, density: 0.014594162335066002 },
                { start: 300, density: 0.016593362654938076 },
              ],
              percentiles: { p75: 10 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.9186418641864259 },
                { start: 2500, end: 4000, density: 0.06665666566656722 },
                { start: 4000, density: 0.014701470147014877 },
              ],
              percentiles: { p75: 1696 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8166816681668163,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.14181418141814175,
                },
                { start: "0.25", density: 0.04150415041504144 },
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
        fcp: 1213,
        lcp: 1696,
        cls: "0.06",
        fid: 10,
      },
      timestamp: 1649184508683,
    },
    {
      url: "https://www.yara.es/",
      deviceTargeted: null,
      results: {
        record: {
          key: { origin: "https://www.yara.es" },
          metrics: {
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7916875062518912 },
                { start: 2500, end: 4000, density: 0.14049214764429607 },
                { start: 4000, density: 0.0678203461038339 },
              ],
              percentiles: { p75: 2304 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8432156784321568,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.09199080091990801,
                },
                { start: "0.25", density: 0.06479352064793512 },
              ],
              percentiles: { p75: "0.04" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7462507498500455 },
                { start: 1800, end: 3000, density: 0.16836632673465654 },
                { start: 3000, density: 0.0853829234153196 },
              ],
              percentiles: { p75: 1840 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.954499999999996 },
                { start: 100, end: 300, density: 0.02559999999999989 },
                { start: 300, density: 0.019900000000000088 },
              ],
              percentiles: { p75: 12 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.es/",
          normalizedUrl: "https://www.yara.es",
        },
      },
      extractedResults: {
        fcp: 1840,
        lcp: 2304,
        cls: "0.04",
        fid: 12,
      },
      timestamp: 1649184508712,
    },
    {
      url: "https://www.yara.lv/",
      deviceTargeted: null,
      results: {
        record: {
          key: { origin: "https://www.yara.lv" },
          metrics: {
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9646000000000023 },
                { start: 100, end: 300, density: 0.030900000000000084 },
                { start: 300, density: 0.004500000000000006 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8538500000000016 },
                { start: 2500, end: 4000, density: 0.11405000000000015 },
                { start: 4000, density: 0.03209999999999997 },
              ],
              percentiles: { p75: 2070 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9400000000000002,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.05080000000000001,
                },
                { start: "0.25", density: 0.009199999999999996 },
              ],
              percentiles: { p75: "0.03" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8400840084008405 },
                { start: 1800, end: 3000, density: 0.12181218121812191 },
                { start: 3000, density: 0.038103810381038015 },
              ],
              percentiles: { p75: 1506 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.lv/",
          normalizedUrl: "https://www.yara.lv",
        },
      },
      extractedResults: {
        fcp: 1506,
        lcp: 2070,
        cls: "0.03",
        fid: 12,
      },
      timestamp: 1649184508743,
    },
    {
      url: "https://www.yara.it/",
      deviceTargeted: "PHONE",
      results: {
        record: {
          key: { formFactor: "PHONE", origin: "https://www.yara.it" },
          metrics: {
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8289023427217768 },
                { start: 1800, end: 3000, density: 0.11608317978415492 },
                { start: 3000, density: 0.055014477494078055 },
              ],
              percentiles: { p75: 1510 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.94221635883905 },
                { start: 100, end: 300, density: 0.029683377308707112 },
                { start: 300, density: 0.02810026385224261 },
              ],
              percentiles: { p75: 14 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8552995391705178 },
                { start: 2500, end: 4000, density: 0.10019749835418162 },
                { start: 4000, density: 0.04450296247531359 },
              ],
              percentiles: { p75: 1908 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8877831609270649,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.06468508576666224,
                },
                { start: "0.25", density: 0.04753175330627203 },
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
        fcp: 1510,
        lcp: 1908,
        cls: "0.01",
        fid: 14,
      },
      timestamp: 1649184508769,
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
                  density: 0.9298563322467701,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.03356271882168295,
                },
                { start: "0.25", density: 0.03658094893154655 },
              ],
              percentiles: { p75: "0.00" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5834551656920001 },
                { start: 1800, end: 3000, density: 0.2493908382066244 },
                { start: 3000, density: 0.16715399610136172 },
              ],
              percentiles: { p75: 2470 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9559537140724128 },
                { start: 100, end: 300, density: 0.02986188876446428 },
                { start: 300, density: 0.014184397163120586 },
              ],
              percentiles: { p75: 14 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6884391662627146 },
                { start: 2500, end: 4000, density: 0.17825981580222733 },
                { start: 4000, density: 0.13330101793504595 },
              ],
              percentiles: { p75: 2871 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.mx/",
          normalizedUrl: "https://www.yara.com.mx",
        },
      },
      extractedResults: {
        fcp: 2470,
        lcp: 2871,
        cls: "0.00",
        fid: 14,
      },
      timestamp: 1649184508828,
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
                  density: 0.8070999999999989,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.12769999999999984,
                },
                { start: "0.25", density: 0.06519999999999995 },
              ],
              percentiles: { p75: "0.06" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6646664666466564 },
                { start: 1800, end: 3000, density: 0.20922092209220666 },
                { start: 3000, density: 0.126112611261126 },
              ],
              percentiles: { p75: 2179 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.963907218556287 },
                { start: 100, end: 300, density: 0.024395120975804797 },
                { start: 300, density: 0.011697660467906452 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7365526894621178 },
                { start: 2500, end: 4000, density: 0.16106778644271377 },
                { start: 4000, density: 0.10237952409518272 },
              ],
              percentiles: { p75: 2590 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.in/",
          normalizedUrl: "https://www.yara.in",
        },
      },
      extractedResults: {
        fcp: 2179,
        lcp: 2590,
        cls: "0.06",
        fid: 13,
      },
      timestamp: 1649184508890,
    },
  ],
};
