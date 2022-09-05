export const audit16 = {
  date: "2022-04-25T10:03:23.611Z",
  dateParsedLocale: "25/04/2022",
  legacyAudit: true,
  legacyAuditType: 4,
  legacyAuditId: "25/04/2022-legacy-audit",
  audits: [
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
                  density: 0.9810148039326477,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.0102836478698158,
                },
                { start: "0.25", density: 0.008701548197536444 },
              ],
              percentiles: { p75: "0.00" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5047004190735072 },
                { start: 1800, end: 3000, density: 0.3615358477743795 },
                { start: 3000, density: 0.13376373315211337 },
              ],
              percentiles: { p75: 2478 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9213983776990745 },
                { start: 100, end: 300, density: 0.05186793099508739 },
                { start: 300, density: 0.026733691305838043 },
              ],
              percentiles: { p75: 14 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.5831161473087813 },
                { start: 2500, end: 4000, density: 0.3036827195467419 },
                { start: 4000, density: 0.11320113314447683 },
              ],
              percentiles: { p75: 3173 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.hr/",
          normalizedUrl: "https://www.yara.hr",
        },
      },
      extractedResults: {
        fcp: 2478,
        lcp: 3173,
        cls: "0.00",
        fid: 14,
      },
      timestamp: 1650880973529,
    },
    {
      url: "https://www.yara.ie/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "https://www.yara.ie" },
          metrics: {
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9320999999999999 },
                { start: 100, end: 300, density: 0.027099999999999996 },
                { start: 300, density: 0.040799999999999996 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6143228645729152 },
                { start: 2500, end: 4000, density: 0.2787557511502303 },
                { start: 4000, density: 0.10692138427685442 },
              ],
              percentiles: { p75: 2943 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8635000000000002,
                },
                { start: "0.10", end: "0.25", density: 0.0699 },
                { start: "0.25", density: 0.0665999999999999 },
              ],
              percentiles: { p75: "0.02" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5231430570828752 },
                { start: 1800, end: 3000, density: 0.3453963810856743 },
                { start: 3000, density: 0.13146056183145052 },
              ],
              percentiles: { p75: 2504 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.ie/",
          normalizedUrl: "https://www.yara.ie",
        },
      },
      extractedResults: {
        fcp: 2504,
        lcp: 2943,
        cls: "0.02",
        fid: 12,
      },
      timestamp: 1650880974054,
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
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.7906790679067907,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.15411541154115416,
                },
                { start: "0.25", density: 0.055205520552055264 },
              ],
              percentiles: { p75: "0.07" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8852000000000001 },
                { start: 1800, end: 3000, density: 0.08929999999999998 },
                { start: 3000, density: 0.02549999999999994 },
              ],
              percentiles: { p75: 1385 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9545863759127738 },
                { start: 100, end: 300, density: 0.025707712313694106 },
                { start: 300, density: 0.019705911773532137 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8411341134113411 },
                { start: 2500, end: 4000, density: 0.12626262626262633 },
                { start: 4000, density: 0.03260326032603259 },
              ],
              percentiles: { p75: 2069 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.fi/",
          normalizedUrl: "https://www.yara.fi",
        },
      },
      extractedResults: {
        fcp: 1385,
        lcp: 2069,
        cls: "0.07",
        fid: 13,
      },
      timestamp: 1650880974209,
    },
    {
      url: "https://www.yara.se/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "https://www.yara.se" },
          metrics: {
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8258174182581743,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.13258674132586742,
                },
                { start: "0.25", density: 0.041595840415958346 },
              ],
              percentiles: { p75: "0.06" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.9240227931620514 },
                { start: 1800, end: 3000, density: 0.062481255623313005 },
                { start: 3000, density: 0.013495951214635612 },
              ],
              percentiles: { p75: 1240 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9647894368310492 },
                { start: 100, end: 300, density: 0.016504951485445632 },
                { start: 300, density: 0.01870561168350524 },
              ],
              percentiles: { p75: 11 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.9124412441244125 },
                { start: 2500, end: 4000, density: 0.06895689568956898 },
                { start: 4000, density: 0.018601860186018494 },
              ],
              percentiles: { p75: 1724 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.se/",
          normalizedUrl: "https://www.yara.se",
        },
      },
      extractedResults: {
        fcp: 1240,
        lcp: 1724,
        cls: "0.06",
        fid: 11,
      },
      timestamp: 1650880974376,
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
                { start: 0, end: 2500, density: 0.5698930106989291 },
                { start: 2500, end: 4000, density: 0.2587241275872408 },
                { start: 4000, density: 0.17138286171383016 },
              ],
              percentiles: { p75: 3385 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.7841999999999999,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.13040000000000002,
                },
                { start: "0.25", density: 0.08540000000000007 },
              ],
              percentiles: { p75: "0.08" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.4926985397079425 },
                { start: 1800, end: 3000, density: 0.2904580916183241 },
                { start: 3000, density: 0.21684336867373355 },
              ],
              percentiles: { p75: 2824 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9338066193380661 },
                { start: 100, end: 300, density: 0.030496950304969506 },
                { start: 300, density: 0.03569643035696436 },
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
        fcp: 2824,
        lcp: 3385,
        cls: "0.08",
        fid: 12,
      },
      timestamp: 1650880974569,
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
                { start: "0.00", end: "0.10", density: 0.9324 },
                { start: "0.10", end: "0.25", density: 0.0387 },
                { start: "0.25", density: 0.02889999999999999 },
              ],
              percentiles: { p75: "0.01" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8592577773331995 },
                { start: 1800, end: 3000, density: 0.09752925877763326 },
                { start: 3000, density: 0.043212963889167164 },
              ],
              percentiles: { p75: 1421 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9545909181836366 },
                { start: 100, end: 300, density: 0.021104220844168832 },
                { start: 300, density: 0.024304860972194555 },
              ],
              percentiles: { p75: 11 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8725627437256275 },
                { start: 2500, end: 4000, density: 0.0901409859014098 },
                { start: 4000, density: 0.03729627037296284 },
              ],
              percentiles: { p75: 1854 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.it/",
          normalizedUrl: "https://www.yara.it",
        },
      },
      extractedResults: {
        fcp: 1421,
        lcp: 1854,
        cls: "0.01",
        fid: 11,
      },
      timestamp: 1650880974710,
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
                { start: 0, end: 1800, density: 0.791941611677664 },
                { start: 1800, end: 3000, density: 0.15196960607878418 },
                { start: 3000, density: 0.05608878224355196 },
              ],
              percentiles: { p75: 1673 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9621 },
                { start: 100, end: 300, density: 0.0254 },
                { start: 300, density: 0.012500000000000117 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8092381523695257 },
                { start: 2500, end: 4000, density: 0.13567286542691454 },
                { start: 4000, density: 0.05508898220355989 },
              ],
              percentiles: { p75: 2201 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8814118588141185,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.0918908109189081,
                },
                { start: "0.25", density: 0.026697330266973317 },
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
        fcp: 1673,
        lcp: 2201,
        cls: "0.01",
        fid: 12,
      },
      timestamp: 1650880974840,
    },
    {
      url: "https://www.yara.ru/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "https://www.yara.ru" },
          metrics: {
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6110999999999994 },
                { start: 1800, end: 3000, density: 0.23379999999999976 },
                { start: 3000, density: 0.15510000000000082 },
              ],
              percentiles: { p75: 2437 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9554089182163568 },
                { start: 100, end: 300, density: 0.020595880823835233 },
                { start: 300, density: 0.023995200959808036 },
              ],
              percentiles: { p75: 11 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.69395 },
                { start: 2500, end: 4000, density: 0.20295 },
                { start: 4000, density: 0.10310000000000018 },
              ],
              percentiles: { p75: 2788 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9424057594240577,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.041195880411958805,
                },
                { start: "0.25", density: 0.016398360163983595 },
              ],
              percentiles: { p75: "0.01" },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.ru/",
          normalizedUrl: "https://www.yara.ru",
        },
      },
      extractedResults: {
        fcp: 2437,
        lcp: 2788,
        cls: "0.01",
        fid: 11,
      },
      timestamp: 1650880974967,
    },
    {
      url: "https://www.yaraagri.cz/",
      deviceTargeted: "PHONE",
      results: {
        record: {
          key: { formFactor: "PHONE", origin: "https://www.yaraagri.cz" },
          metrics: {
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9009291977489856,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.06242638398115429,
                },
                { start: "0.25", density: 0.03664441826985997 },
              ],
              percentiles: { p75: "0.00" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.9024390243902439 },
                { start: 1800, end: 3000, density: 0.0710613052076467 },
                { start: 3000, density: 0.02649967040210936 },
              ],
              percentiles: { p75: 1283 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9561415310103593 },
                { start: 100, end: 300, density: 0.02731064173281313 },
                { start: 300, density: 0.01654782725682768 },
              ],
              percentiles: { p75: 16 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8920417051603537 },
                { start: 2500, end: 4000, density: 0.08459812590735118 },
                { start: 4000, density: 0.023360168932295037 },
              ],
              percentiles: { p75: 1818 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yaraagri.cz/",
          normalizedUrl: "https://www.yaraagri.cz",
        },
      },
      extractedResults: {
        fcp: 1283,
        lcp: 1818,
        cls: "0.00",
        fid: 16,
      },
      timestamp: 1650880975098,
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
                  density: 0.9347065293470653,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.057994200579942014,
                },
                { start: "0.25", density: 0.007299270072992699 },
              ],
              percentiles: { p75: "0.02" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8466693338667735 },
                { start: 1800, end: 3000, density: 0.12362472494498905 },
                { start: 3000, density: 0.029705941188237665 },
              ],
              percentiles: { p75: 1523 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9654965496549656 },
                { start: 100, end: 300, density: 0.023102310231023104 },
                { start: 300, density: 0.011401140114011409 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8497899159663864 },
                { start: 2500, end: 4000, density: 0.12169867947178863 },
                { start: 4000, density: 0.028511404561824924 },
              ],
              percentiles: { p75: 2059 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.lv/",
          normalizedUrl: "https://www.yara.lv",
        },
      },
      extractedResults: {
        fcp: 1523,
        lcp: 2059,
        cls: "0.02",
        fid: 12,
      },
      timestamp: 1650880975287,
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
                  density: 0.9099999999999999,
                },
                { start: "0.10", end: "0.25", density: 0.0705 },
                { start: "0.25", density: 0.0195 },
              ],
              percentiles: { p75: "0.01" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7701000000000001 },
                { start: 1800, end: 3000, density: 0.15230000000000007 },
                { start: 3000, density: 0.07759999999999974 },
              ],
              percentiles: { p75: 1757 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9552089582083584 },
                { start: 100, end: 300, density: 0.029694061187762452 },
                { start: 300, density: 0.015096980603879186 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8091809180918087 },
                { start: 2500, end: 4000, density: 0.12781278127812773 },
                { start: 4000, density: 0.0630063006300636 },
              ],
              percentiles: { p75: 2214 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.ua/",
          normalizedUrl: "https://www.yara.ua",
        },
      },
      extractedResults: {
        fcp: 1757,
        lcp: 2214,
        cls: "0.01",
        fid: 12,
      },
      timestamp: 1650880975415,
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
                  density: 0.9423700324168567,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.022211550006003118,
                },
                { start: "0.25", density: 0.03541841757714011 },
              ],
              percentiles: { p75: "0.00" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5809893307468468 },
                { start: 1800, end: 3000, density: 0.2555771096023274 },
                { start: 3000, density: 0.1634335596508258 },
              ],
              percentiles: { p75: 2462 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9521316379955124 },
                { start: 100, end: 300, density: 0.034530042383445536 },
                { start: 300, density: 0.013338319621042101 },
              ],
              percentiles: { p75: 14 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6899637243047153 },
                { start: 2500, end: 4000, density: 0.18645707376058016 },
                { start: 4000, density: 0.1235792019347046 },
              ],
              percentiles: { p75: 2859 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.mx/",
          normalizedUrl: "https://www.yara.com.mx",
        },
      },
      extractedResults: {
        fcp: 2462,
        lcp: 2859,
        cls: "0.00",
        fid: 14,
      },
      timestamp: 1650880975538,
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
                  density: 0.9367338869118229,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.05522604454988796,
                },
                { start: "0.25", density: 0.008040068538289185 },
              ],
              percentiles: { p75: "0.00" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8313413014608233 },
                { start: 1800, end: 3000, density: 0.1418326693227092 },
                { start: 3000, density: 0.026826029216467515 },
              ],
              percentiles: { p75: 1596 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9565158493633161 },
                { start: 100, end: 300, density: 0.0302086155513411 },
                { start: 300, density: 0.013275535085342733 },
              ],
              percentiles: { p75: 14 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8600530856005307 },
                { start: 2500, end: 4000, density: 0.11672196416721968 },
                { start: 4000, density: 0.02322495023224961 },
              ],
              percentiles: { p75: 2038 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.lv/",
          normalizedUrl: "https://www.yara.lv",
        },
      },
      extractedResults: {
        fcp: 1596,
        lcp: 2038,
        cls: "0.00",
        fid: 14,
      },
      timestamp: 1650880975738,
    },
    {
      url: "https://www.yara.lt/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "https://www.yara.lt" },
          metrics: {
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8772368289513144 },
                { start: 1800, end: 3000, density: 0.10096970908727382 },
                { start: 3000, density: 0.021793461961411773 },
              ],
              percentiles: { p75: 1410 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9797979797979799 },
                { start: 100, end: 300, density: 0.0126012601260126 },
                { start: 300, density: 0.007600760076007576 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8992802159352195 },
                { start: 2500, end: 4000, density: 0.08212536239128262 },
                { start: 4000, density: 0.018594421673497917 },
              ],
              percentiles: { p75: 1829 },
            },
            cumulative_layout_shift: {
              histogram: [
                { start: "0.00", end: "0.10", density: 0.8757 },
                { start: "0.10", end: "0.25", density: 0.1095 },
                { start: "0.25", density: 0.014799999999999992 },
              ],
              percentiles: { p75: "0.03" },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.lt/",
          normalizedUrl: "https://www.yara.lt",
        },
      },
      extractedResults: {
        fcp: 1410,
        lcp: 1829,
        cls: "0.03",
        fid: 12,
      },
      timestamp: 1650880975955,
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
                { start: "0.00", end: "0.10", density: 0.8976 },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.06029999999999999,
                },
                { start: "0.25", density: 0.04210000000000001 },
              ],
              percentiles: { p75: "0.03" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.48309999999999964 },
                { start: 1800, end: 3000, density: 0.28089999999999976 },
                { start: 3000, density: 0.23600000000000057 },
              ],
              percentiles: { p75: 2953 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9571957195719573 },
                { start: 100, end: 300, density: 0.03240324032403241 },
                { start: 300, density: 0.010401040104010379 },
              ],
              percentiles: { p75: 11 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.5759924007599243 },
                { start: 2500, end: 4000, density: 0.2505249475052495 },
                { start: 4000, density: 0.17348265173482633 },
              ],
              percentiles: { p75: 3415 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.ar/",
          normalizedUrl: "https://www.yara.com.ar",
        },
      },
      extractedResults: {
        fcp: 2953,
        lcp: 3415,
        cls: "0.03",
        fid: 11,
      },
      timestamp: 1650880976099,
    },
    {
      url: "https://www.yara.hu/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "https://www.yara.hu" },
          metrics: {
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8528999999999998 },
                { start: 2500, end: 4000, density: 0.1144999999999999 },
                { start: 4000, density: 0.032600000000000295 },
              ],
              percentiles: { p75: 2001 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9512951295129513,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.0375037503750375,
                },
                { start: "0.25", density: 0.011201120112011203 },
              ],
              percentiles: { p75: "0.01" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8390839083908395 },
                { start: 1800, end: 3000, density: 0.12101210121012104 },
                { start: 3000, density: 0.03990399039903963 },
              ],
              percentiles: { p75: 1562 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9729891956782714 },
                { start: 100, end: 300, density: 0.017406962785114048 },
                { start: 300, density: 0.009603841536614654 },
              ],
              percentiles: { p75: 11 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.hu/",
          normalizedUrl: "https://www.yara.hu",
        },
      },
      extractedResults: {
        fcp: 1562,
        lcp: 2001,
        cls: "0.01",
        fid: 11,
      },
      timestamp: 1650880976242,
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
                  density: 0.8624999999999999,
                },
                { start: "0.10", end: "0.25", density: 0.0994 },
                { start: "0.25", density: 0.03810000000000006 },
              ],
              percentiles: { p75: "0.03" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.4421326397919418 },
                { start: 1800, end: 3000, density: 0.24577373211963827 },
                { start: 3000, density: 0.31209362808841984 },
              ],
              percentiles: { p75: 3488 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9033516758379186 },
                { start: 100, end: 300, density: 0.06203101550775386 },
                { start: 300, density: 0.03461730865432743 },
              ],
              percentiles: { p75: 17 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.4838467693538764 },
                { start: 2500, end: 4000, density: 0.24269853970794453 },
                { start: 4000, density: 0.27345469093817903 },
              ],
              percentiles: { p75: 4305 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yarabrasil.com.br/",
          normalizedUrl: "https://www.yarabrasil.com.br",
        },
      },
      extractedResults: {
        fcp: 3488,
        lcp: 4305,
        cls: "0.03",
        fid: 17,
      },
      timestamp: 1650880976418,
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
                  density: 0.9282999999999999,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.03669999999999999,
                },
                { start: "0.25", density: 0.03499999999999999 },
              ],
              percentiles: { p75: "0.00" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.345700000000001 },
                { start: 1800, end: 3000, density: 0.336700000000001 },
                { start: 3000, density: 0.3175999999999979 },
              ],
              percentiles: { p75: 3389 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9661033896610338 },
                { start: 100, end: 300, density: 0.028497150284971504 },
                { start: 300, density: 0.0053994600539946 },
              ],
              percentiles: { p75: 11 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.4609499999999995 },
                { start: 2500, end: 4000, density: 0.3123499999999996 },
                { start: 4000, density: 0.22670000000000087 },
              ],
              percentiles: { p75: 3873 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.bo/",
          normalizedUrl: "https://www.yara.bo",
        },
      },
      extractedResults: {
        fcp: 3389,
        lcp: 3873,
        cls: "0.00",
        fid: 11,
      },
      timestamp: 1650880976546,
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
                  density: 0.7934206579342066,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.15898410158984103,
                },
                { start: "0.25", density: 0.04759524047595239 },
              ],
              percentiles: { p75: "0.07" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8948315505348396 },
                { start: 1800, end: 3000, density: 0.07877636708987305 },
                { start: 3000, density: 0.026392082375287198 },
              ],
              percentiles: { p75: 1306 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9665100469859043 },
                { start: 100, end: 300, density: 0.018094571628511448 },
                { start: 300, density: 0.01539538138558436 },
              ],
              percentiles: { p75: 10 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8761623837616233 },
                { start: 2500, end: 4000, density: 0.09184081591840805 },
                { start: 4000, density: 0.03199680031996859 },
              ],
              percentiles: { p75: 1902 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.nl/",
          normalizedUrl: "https://www.yara.nl",
        },
      },
      extractedResults: {
        fcp: 1306,
        lcp: 1902,
        cls: "0.07",
        fid: 10,
      },
      timestamp: 1650880976659,
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
                  density: 0.7990200979902009,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.1460853914608539,
                },
                { start: "0.25", density: 0.0548945105489451 },
              ],
              percentiles: { p75: "0.06" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.716456708658269 },
                { start: 1800, end: 3000, density: 0.19766046790641897 },
                { start: 3000, density: 0.0858828234353119 },
              ],
              percentiles: { p75: 2108 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9692061587682461 },
                { start: 100, end: 300, density: 0.013297340531893619 },
                { start: 300, density: 0.01749650069986008 },
              ],
              percentiles: { p75: 10 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7294582167133157 },
                { start: 2500, end: 4000, density: 0.1784786085565776 },
                { start: 4000, density: 0.0920631747301068 },
              ],
              percentiles: { p75: 2766 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yaracanada.ca/",
          normalizedUrl: "https://www.yaracanada.ca",
        },
      },
      extractedResults: {
        fcp: 2108,
        lcp: 2766,
        cls: "0.06",
        fid: 10,
      },
      timestamp: 1650880976772,
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
                { start: 0, end: 2500, density: 0.9306638672265546 },
                { start: 2500, end: 4000, density: 0.055838832233553286 },
                { start: 4000, density: 0.01349730053989201 },
              ],
              percentiles: { p75: 1578 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8011801180118011,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.1542154215421542,
                },
                { start: "0.25", density: 0.04460446044604466 },
              ],
              percentiles: { p75: "0.06" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.9426286856571714 },
                { start: 1800, end: 3000, density: 0.04597701149425287 },
                { start: 3000, density: 0.011394302848575661 },
              ],
              percentiles: { p75: 1127 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9610038996100392 },
                { start: 100, end: 300, density: 0.019798020197980205 },
                { start: 300, density: 0.01919808019198076 },
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
      extractedResults: {
        fcp: 1127,
        lcp: 1578,
        cls: "0.06",
        fid: 11,
      },
      timestamp: 1650880976892,
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
                { start: "0.00", end: "0.10", density: 0.7509 },
                { start: "0.10", end: "0.25", density: 0.2133 },
                { start: "0.25", density: 0.03580000000000002 },
              ],
              percentiles: { p75: "0.09" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8028394321135777 },
                { start: 1800, end: 3000, density: 0.14307138572285558 },
                { start: 3000, density: 0.05408918216356682 },
              ],
              percentiles: { p75: 1636 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9555911182236448 },
                { start: 100, end: 300, density: 0.02330466093218644 },
                { start: 300, density: 0.021104220844168745 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8188999999999995 },
                { start: 2500, end: 4000, density: 0.1287999999999999 },
                { start: 4000, density: 0.05230000000000054 },
              ],
              percentiles: { p75: 2158 },
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
        lcp: 2158,
        cls: "0.09",
        fid: 12,
      },
      timestamp: 1650880977009,
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
                  density: 0.7990200979902009,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.1460853914608539,
                },
                { start: "0.25", density: 0.0548945105489451 },
              ],
              percentiles: { p75: "0.06" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.716456708658269 },
                { start: 1800, end: 3000, density: 0.19766046790641897 },
                { start: 3000, density: 0.0858828234353119 },
              ],
              percentiles: { p75: 2108 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9692061587682461 },
                { start: 100, end: 300, density: 0.013297340531893619 },
                { start: 300, density: 0.01749650069986008 },
              ],
              percentiles: { p75: 10 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7294582167133157 },
                { start: 2500, end: 4000, density: 0.1784786085565776 },
                { start: 4000, density: 0.0920631747301068 },
              ],
              percentiles: { p75: 2766 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yaracanada.ca/fr-ca/",
          normalizedUrl: "https://www.yaracanada.ca",
        },
      },
      extractedResults: {
        fcp: 2108,
        lcp: 2766,
        cls: "0.06",
        fid: 10,
      },
      timestamp: 1650880977122,
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
                { start: 0, end: 100, density: 0.9559720027094151 },
                { start: 100, end: 300, density: 0.02980356739670354 },
                { start: 300, density: 0.014224429893881388 },
              ],
              percentiles: { p75: 14 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7274963658727494 },
                { start: 2500, end: 4000, density: 0.16761713071676163 },
                { start: 4000, density: 0.10488650341048901 },
              ],
              percentiles: { p75: 2623 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8421991747518679,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.10382513661202186,
                },
                { start: "0.25", density: 0.053975688636110276 },
              ],
              percentiles: { p75: "0.01" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6542505592841162 },
                { start: 1800, end: 3000, density: 0.2147651006711409 },
                { start: 3000, density: 0.13098434004474288 },
              ],
              percentiles: { p75: 2244 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.in/",
          normalizedUrl: "https://www.yara.in",
        },
      },
      extractedResults: {
        fcp: 2244,
        lcp: 2623,
        cls: "0.01",
        fid: 14,
      },
      timestamp: 1650880977230,
    },
    {
      url: "https://www.yara.pt/",
      deviceTargeted: "PHONE",
      results: {
        record: {
          key: { formFactor: "PHONE", origin: "https://www.yara.pt" },
          metrics: {
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8278698741119287 },
                { start: 2500, end: 4000, density: 0.11417175620092239 },
                { start: 4000, density: 0.05795836968714905 },
              ],
              percentiles: { p75: 2074 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9803071587812733,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.006068863017091901,
                },
                { start: "0.25", density: 0.013623978201634879 },
              ],
              percentiles: { p75: "0.00" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7982784431137727 },
                { start: 1800, end: 3000, density: 0.1277445109780439 },
                { start: 3000, density: 0.07397704590818344 },
              ],
              percentiles: { p75: 1633 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9619985048592077 },
                { start: 100, end: 300, density: 0.024296037876900073 },
                { start: 300, density: 0.013705457263892298 },
              ],
              percentiles: { p75: 12 },
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
      timestamp: 1650880977421,
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
                { start: 0, end: 2500, density: 0.6279372062793719 },
                { start: 2500, end: 4000, density: 0.22507749225077472 },
                { start: 4000, density: 0.1469853014698533 },
              ],
              percentiles: { p75: 3148 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.819081908190819,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.1102110211021102,
                },
                { start: "0.25", density: 0.07070707070707072 },
              ],
              percentiles: { p75: "0.08" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5109510951095111 },
                { start: 1800, end: 3000, density: 0.3138313831383138 },
                { start: 3000, density: 0.17521752175217517 },
              ],
              percentiles: { p75: 2620 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9815981598159816 },
                { start: 100, end: 300, density: 0.015201520152015202 },
                { start: 300, density: 0.0032003200320032026 },
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
        fcp: 2620,
        lcp: 3148,
        cls: "0.08",
        fid: 10,
      },
      timestamp: 1650880977767,
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
                  density: 0.9491050894910509,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.0352964703529647,
                },
                { start: "0.25", density: 0.015598440155984397 },
              ],
              percentiles: { p75: "0.00" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8189724110355858 },
                { start: 1800, end: 3000, density: 0.11465413834466215 },
                { start: 3000, density: 0.06637345061975188 },
              ],
              percentiles: { p75: 1550 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9694877951180473 },
                { start: 100, end: 300, density: 0.0195078031212485 },
                { start: 300, density: 0.011004401760704243 },
              ],
              percentiles: { p75: 11 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8376500000000003 },
                { start: 2500, end: 4000, density: 0.10795000000000003 },
                { start: 4000, density: 0.05439999999999984 },
              ],
              percentiles: { p75: 2036 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.pt/",
          normalizedUrl: "https://www.yara.pt",
        },
      },
      extractedResults: {
        fcp: 1550,
        lcp: 2036,
        cls: "0.00",
        fid: 11,
      },
      timestamp: 1650880977916,
    },
    {
      url: "https://www.yara.ro/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "https://www.yara.ro" },
          metrics: {
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8071421426427928 },
                { start: 1800, end: 3000, density: 0.1492447734320296 },
                { start: 3000, density: 0.043613083925177654 },
              ],
              percentiles: { p75: 1657 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9529047095290473 },
                { start: 100, end: 300, density: 0.021397860213978607 },
                { start: 300, density: 0.02569743025697419 },
              ],
              percentiles: { p75: 11 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8149999999999996 },
                { start: 2500, end: 4000, density: 0.13709999999999983 },
                { start: 4000, density: 0.047900000000000595 },
              ],
              percentiles: { p75: 2198 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9025097490250975,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.08129187081291869,
                },
                { start: "0.25", density: 0.016198380161983814 },
              ],
              percentiles: { p75: "0.02" },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.ro/",
          normalizedUrl: "https://www.yara.ro",
        },
      },
      extractedResults: {
        fcp: 1657,
        lcp: 2198,
        cls: "0.02",
        fid: 11,
      },
      timestamp: 1650880978064,
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
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9473052694730525,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.0344965503449655,
                },
                { start: "0.25", density: 0.018198180181981816 },
              ],
              percentiles: { p75: "0.00" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.585307346326838 },
                { start: 1800, end: 3000, density: 0.2571714142928542 },
                { start: 3000, density: 0.15752123938030793 },
              ],
              percentiles: { p75: 2387 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9516 },
                { start: 100, end: 300, density: 0.035199999999999995 },
                { start: 300, density: 0.013200000000000036 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6893999999999989 },
                { start: 2500, end: 4000, density: 0.17169999999999966 },
                { start: 4000, density: 0.13890000000000152 },
              ],
              percentiles: { p75: 2851 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.cr/",
          normalizedUrl: "https://www.yara.cr",
        },
      },
      extractedResults: {
        fcp: 2387,
        lcp: 2851,
        cls: "0.00",
        fid: 12,
      },
      timestamp: 1650880978187,
    },
    {
      url: "https://www.yara.com.co/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "https://www.yara.com.co" },
          metrics: {
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6161616161616151 },
                { start: 1800, end: 3000, density: 0.2192219221922188 },
                { start: 3000, density: 0.16461646164616614 },
              ],
              percentiles: { p75: 2430 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9502049795020499 },
                { start: 100, end: 300, density: 0.030696930306969305 },
                { start: 300, density: 0.019098090190980892 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6907927621713472 },
                { start: 2500, end: 4000, density: 0.1723482955113463 },
                { start: 4000, density: 0.13685894231730644 },
              ],
              percentiles: { p75: 2909 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8886999999999999,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.062299999999999994,
                },
                { start: "0.25", density: 0.049000000000000044 },
              ],
              percentiles: { p75: "0.01" },
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
        lcp: 2909,
        cls: "0.01",
        fid: 13,
      },
      timestamp: 1650880978299,
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
                  density: 0.9310999999999999,
                },
                { start: "0.10", end: "0.25", density: 0.0433 },
                { start: "0.25", density: 0.025599999999999977 },
              ],
              percentiles: { p75: "0.01" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5751124437781101 },
                { start: 1800, end: 3000, density: 0.25267366316841533 },
                { start: 3000, density: 0.17221389305347456 },
              ],
              percentiles: { p75: 2533 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9566826730692277 },
                { start: 100, end: 300, density: 0.029411764705882353 },
                { start: 300, density: 0.013905562224889947 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6676499999999989 },
                { start: 2500, end: 4000, density: 0.1987499999999995 },
                { start: 4000, density: 0.1336000000000017 },
              ],
              percentiles: { p75: 2987 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.ec/",
          normalizedUrl: "https://www.yara.com.ec",
        },
      },
      extractedResults: {
        fcp: 2533,
        lcp: 2987,
        cls: "0.01",
        fid: 12,
      },
      timestamp: 1650880978464,
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
                  density: 0.9223833097595474,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.04632248939179633,
                },
                { start: "0.25", density: 0.031294200848656306 },
              ],
              percentiles: { p75: "0.00" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6498826926547545 },
                { start: 1800, end: 3000, density: 0.20862660169644434 },
                { start: 3000, density: 0.14149070564880128 },
              ],
              percentiles: { p75: 2287 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9602494154325799 },
                { start: 100, end: 300, density: 0.028643803585346843 },
                { start: 300, density: 0.011106780982073258 },
              ],
              percentiles: { p75: 14 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7068222621184915 },
                { start: 2500, end: 4000, density: 0.17989228007181318 },
                { start: 4000, density: 0.11328545780969528 },
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
        fcp: 2287,
        lcp: 2788,
        cls: "0.00",
        fid: 14,
      },
      timestamp: 1650880978619,
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
                  density: 0.9552210365853658,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.018292682926829267,
                },
                { start: "0.25", density: 0.02648628048780487 },
              ],
              percentiles: { p75: "0.00" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.646563540238888 },
                { start: 1800, end: 3000, density: 0.24241237517133346 },
                { start: 3000, density: 0.11102408458977867 },
              ],
              percentiles: { p75: 2367 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9408381265406737 },
                { start: 100, end: 300, density: 0.025267050123253903 },
                { start: 300, density: 0.03389482333607236 },
              ],
              percentiles: { p75: 14 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.709521039363971 },
                { start: 2500, end: 4000, density: 0.19429901105293776 },
                { start: 4000, density: 0.09617994958309105 },
              ],
              percentiles: { p75: 2830 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yaracanada.ca/fr-ca/",
          normalizedUrl: "https://www.yaracanada.ca",
        },
      },
      extractedResults: {
        fcp: 2367,
        lcp: 2830,
        cls: "0.00",
        fid: 14,
      },
      timestamp: 1650880978823,
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
                { start: "0.00", end: "0.10", density: 0.9313 },
                { start: "0.10", end: "0.25", density: 0.0399 },
                { start: "0.25", density: 0.0288 },
              ],
              percentiles: { p75: "0.01" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6867999999999995 },
                { start: 1800, end: 3000, density: 0.19869999999999993 },
                { start: 3000, density: 0.11450000000000071 },
              ],
              percentiles: { p75: 2033 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9630147940823671 },
                { start: 100, end: 300, density: 0.022690923630547782 },
                { start: 300, density: 0.014294282287085154 },
              ],
              percentiles: { p75: 11 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7522000000000002 },
                { start: 2500, end: 4000, density: 0.14210000000000012 },
                { start: 4000, density: 0.10569999999999978 },
              ],
              percentiles: { p75: 2539 },
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
        lcp: 2539,
        cls: "0.01",
        fid: 11,
      },
      timestamp: 1650880979019,
    },
    {
      url: "https://www.yara.de/",
      deviceTargeted: "PHONE",
      results: {
        record: {
          key: { formFactor: "PHONE", origin: "https://www.yara.de" },
          metrics: {
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8015531826376363 },
                { start: 1800, end: 3000, density: 0.12799889058383018 },
                { start: 3000, density: 0.07044792677853333 },
              ],
              percentiles: { p75: 1588 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9375518098922353 },
                { start: 100, end: 300, density: 0.03509256700746062 },
                { start: 300, density: 0.027355623100304177 },
              ],
              percentiles: { p75: 16 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.826243591520022 },
                { start: 2500, end: 4000, density: 0.11639185257032007 },
                { start: 4000, density: 0.05736455590965802 },
              ],
              percentiles: { p75: 2090 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9528665931642779,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.02701212789415656,
                },
                { start: "0.25", density: 0.020121278941565617 },
              ],
              percentiles: { p75: "0.01" },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.de/",
          normalizedUrl: "https://www.yara.de",
        },
      },
      extractedResults: {
        fcp: 1588,
        lcp: 2090,
        cls: "0.01",
        fid: 16,
      },
      timestamp: 1650880979157,
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
                { start: 0, end: 2500, density: 0.6895568670601168 },
                { start: 2500, end: 4000, density: 0.17980394118235435 },
                { start: 4000, density: 0.13063919175752892 },
              ],
              percentiles: { p75: 2880 },
            },
            cumulative_layout_shift: {
              histogram: [
                { start: "0.00", end: "0.10", density: 0.8811 },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.06950000000000002,
                },
                { start: "0.25", density: 0.04940000000000002 },
              ],
              percentiles: { p75: "0.01" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6028808642592766 },
                { start: 1800, end: 3000, density: 0.24177253175952737 },
                { start: 3000, density: 0.15534660398119607 },
              ],
              percentiles: { p75: 2388 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9576957695769577 },
                { start: 100, end: 300, density: 0.02980298029802981 },
                { start: 300, density: 0.01250125012501255 },
              ],
              percentiles: { p75: 13 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.mx/",
          normalizedUrl: "https://www.yara.com.mx",
        },
      },
      extractedResults: {
        fcp: 2388,
        lcp: 2880,
        cls: "0.01",
        fid: 13,
      },
      timestamp: 1650880979389,
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
                { start: 0, end: 100, density: 0.9792979297929792 },
                { start: 100, end: 300, density: 0.0132013201320132 },
                { start: 300, density: 0.0075007500750075 },
              ],
              percentiles: { p75: 10 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7372448979591841 },
                { start: 2500, end: 4000, density: 0.15001000400160078 },
                { start: 4000, density: 0.11274509803921515 },
              ],
              percentiles: { p75: 2576 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9212921292129213,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.06410641064106412,
                },
                { start: "0.25", density: 0.014601460146014603 },
              ],
              percentiles: { p75: "0.00" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6587682463507296 },
                { start: 1800, end: 3000, density: 0.22825434913017387 },
                { start: 3000, density: 0.11297740451909649 },
              ],
              percentiles: { p75: 2099 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.pa/",
          normalizedUrl: "https://www.yara.com.pa",
        },
      },
      extractedResults: {
        fcp: 2099,
        lcp: 2576,
        cls: "0.00",
        fid: 10,
      },
      timestamp: 1650880979531,
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
                  density: 0.9019098090190981,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.0647935206479352,
                },
                { start: "0.25", density: 0.03329667033296673 },
              ],
              percentiles: { p75: "0.03" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5411082216443283 },
                { start: 1800, end: 3000, density: 0.29845969193838745 },
                { start: 3000, density: 0.16043208641728438 },
              ],
              percentiles: { p75: 2512 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9720944188837768 },
                { start: 100, end: 300, density: 0.02200440088017604 },
                { start: 300, density: 0.005901180236047225 },
              ],
              percentiles: { p75: 11 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6591840815918408 },
                { start: 2500, end: 4000, density: 0.21572842715728427 },
                { start: 4000, density: 0.12508749125087493 },
              ],
              percentiles: { p75: 3001 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.pe/",
          normalizedUrl: "https://www.yara.com.pe",
        },
      },
      extractedResults: {
        fcp: 2512,
        lcp: 3001,
        cls: "0.03",
        fid: 11,
      },
      timestamp: 1650880979700,
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
                  density: 0.9708598153255786,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.012951193188631731,
                },
                { start: "0.25", density: 0.016188991485789665 },
              ],
              percentiles: { p75: "0.00" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.57213629772837 },
                { start: 1800, end: 3000, density: 0.2542290961817298 },
                { start: 3000, density: 0.17363460608990006 },
              ],
              percentiles: { p75: 2590 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9460735586481113 },
                { start: 100, end: 300, density: 0.024105367793240556 },
                { start: 300, density: 0.02982107355864811 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6670100593867411 },
                { start: 2500, end: 4000, density: 0.22366985819900614 },
                { start: 4000, density: 0.10932008241425283 },
              ],
              percentiles: { p75: 2913 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.ru/",
          normalizedUrl: "https://www.yara.ru",
        },
      },
      extractedResults: {
        fcp: 2590,
        lcp: 2913,
        cls: "0.00",
        fid: 12,
      },
      timestamp: 1650880979833,
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
                { start: 0, end: 2500, density: 0.6581499999999993 },
                { start: 2500, end: 4000, density: 0.1818499999999998 },
                { start: 4000, density: 0.16000000000000072 },
              ],
              percentiles: { p75: 3115 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8293829382938293,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.1006100610061006,
                },
                { start: "0.25", density: 0.0700070007000701 },
              ],
              percentiles: { p75: "0.06" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6252625262526251 },
                { start: 1800, end: 3000, density: 0.215021502150215 },
                { start: 3000, density: 0.15971597159715994 },
              ],
              percentiles: { p75: 2348 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9036903690369038 },
                { start: 100, end: 300, density: 0.04150415041504152 },
                { start: 300, density: 0.054805480548054765 },
              ],
              percentiles: { p75: 14 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.us/",
          normalizedUrl: "https://www.yara.us",
        },
      },
      extractedResults: {
        fcp: 2348,
        lcp: 3115,
        cls: "0.06",
        fid: 14,
      },
      timestamp: 1650880980033,
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
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8217821782178218,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.12081208120812081,
                },
                { start: "0.25", density: 0.05740574057405742 },
              ],
              percentiles: { p75: "0.05" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6161151654503646 },
                { start: 1800, end: 3000, density: 0.2236329101269618 },
                { start: 3000, density: 0.1602519244226737 },
              ],
              percentiles: { p75: 2402 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9627037296270373 },
                { start: 100, end: 300, density: 0.025997400259974 },
                { start: 300, density: 0.011298870112988718 },
              ],
              percentiles: { p75: 11 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6905071521456436 },
                { start: 2500, end: 4000, density: 0.1888566569970991 },
                { start: 4000, density: 0.12063619085725731 },
              ],
              percentiles: { p75: 2933 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.au/",
          normalizedUrl: "https://www.yara.com.au",
        },
      },
      extractedResults: {
        fcp: 2402,
        lcp: 2933,
        cls: "0.05",
        fid: 11,
      },
      timestamp: 1650880980154,
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
                  density: 0.8114811481148114,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.12701270127012704,
                },
                { start: "0.25", density: 0.061506150615061574 },
              ],
              percentiles: { p75: "0.05" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.666933306669332 },
                { start: 1800, end: 3000, density: 0.2052794720527944 },
                { start: 3000, density: 0.12778722127787354 },
              ],
              percentiles: { p75: 2187 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9603801900950474 },
                { start: 100, end: 300, density: 0.026813406703351667 },
                { start: 300, density: 0.012806403201600931 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7334266573342665 },
                { start: 2500, end: 4000, density: 0.16128387161283866 },
                { start: 4000, density: 0.10528947105289493 },
              ],
              percentiles: { p75: 2598 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.in/",
          normalizedUrl: "https://www.yara.in",
        },
      },
      extractedResults: {
        fcp: 2187,
        lcp: 2598,
        cls: "0.05",
        fid: 13,
      },
      timestamp: 1650880980272,
    },
    {
      url: "https://www.yara.dk/",
      deviceTargeted: "PHONE",
      results: {
        record: {
          key: { formFactor: "PHONE", origin: "https://www.yara.dk" },
          metrics: {
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8733403582718653 },
                { start: 2500, end: 4000, density: 0.09757639620653323 },
                { start: 4000, density: 0.029083245521601533 },
              ],
              percentiles: { p75: 2022 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9352965574450436,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.047075902115304845,
                },
                { start: "0.25", density: 0.0176275404396516 },
              ],
              percentiles: { p75: "0.00" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8351322751322753 },
                { start: 1800, end: 3000, density: 0.1250793650793651 },
                { start: 3000, density: 0.03978835978835959 },
              ],
              percentiles: { p75: 1558 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9330615747693628 },
                { start: 100, end: 300, density: 0.032611027676464274 },
                { start: 300, density: 0.034327397554172856 },
              ],
              percentiles: { p75: 17 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.dk/",
          normalizedUrl: "https://www.yara.dk",
        },
      },
      extractedResults: {
        fcp: 1558,
        lcp: 2022,
        cls: "0.00",
        fid: 17,
      },
      timestamp: 1650880980405,
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
                  density: 0.8816999999999999,
                },
                { start: "0.10", end: "0.25", density: 0.066 },
                { start: "0.25", density: 0.052300000000000055 },
              ],
              percentiles: { p75: "0.03" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.16504951485445613 },
                { start: 1800, end: 3000, density: 0.44623387016104765 },
                { start: 3000, density: 0.3887166149844963 },
              ],
              percentiles: { p75: 3894 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.3389177835567111 },
                { start: 2500, end: 4000, density: 0.35622124424884954 },
                { start: 4000, density: 0.30486097219443936 },
              ],
              percentiles: { p75: 4548 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "http://www.yara.com.mm/",
          normalizedUrl: "http://www.yara.com.mm",
        },
      },
      extractedResults: { fcp: 3894, lcp: 4548, cls: "0.03" },
      timestamp: 1650880980599,
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
                  density: 0.7473494698939789,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.11952390478095619,
                },
                { start: "0.25", density: 0.13312662532506486 },
              ],
              percentiles: { p75: "0.10" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6247750449910022 },
                { start: 1800, end: 3000, density: 0.14967006598680274 },
                { start: 3000, density: 0.22555488902219512 },
              ],
              percentiles: { p75: 2791 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6655665566556654 },
                { start: 2500, end: 4000, density: 0.15151515151515144 },
                { start: 4000, density: 0.18291829182918304 },
              ],
              percentiles: { p75: 3183 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.cm/",
          normalizedUrl: "https://www.yara.cm",
        },
      },
      extractedResults: { fcp: 2791, lcp: 3183, cls: "0.10" },
      timestamp: 1650880980746,
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
                { start: "0.00", end: "0.10", density: 0.7921 },
                { start: "0.10", end: "0.25", density: 0.1436 },
                { start: "0.25", density: 0.0643 },
              ],
              percentiles: { p75: "0.08" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6441711657668465 },
                { start: 1800, end: 3000, density: 0.25584883023395316 },
                { start: 3000, density: 0.09998000399920032 },
              ],
              percentiles: { p75: 2330 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9872000000000001 },
                { start: 100, end: 300, density: 0.0102 },
                { start: 300, density: 0.0026 },
              ],
              percentiles: { p75: 9 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7359764023597642 },
                { start: 2500, end: 4000, density: 0.18923107689231075 },
                { start: 4000, density: 0.07479252074792495 },
              ],
              percentiles: { p75: 2604 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.co.nz/",
          normalizedUrl: "https://www.yara.co.nz",
        },
      },
      extractedResults: { fcp: 2330, lcp: 2604, cls: "0.08", fid: 9 },
      timestamp: 1650880980997,
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
                  density: 0.8022395520895821,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.15606878624275147,
                },
                { start: "0.25", density: 0.04169166166766648 },
              ],
              percentiles: { p75: "0.05" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7343062774890043 },
                { start: 1800, end: 3000, density: 0.19652139144342262 },
                { start: 3000, density: 0.06917233106757299 },
              ],
              percentiles: { p75: 1851 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9705941188237648 },
                { start: 100, end: 300, density: 0.01750350070014003 },
                { start: 300, density: 0.011902380476095193 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7581516303260647 },
                { start: 2500, end: 4000, density: 0.16063212642528496 },
                { start: 4000, density: 0.08121624324865041 },
              ],
              percentiles: { p75: 2449 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.co.th/",
          normalizedUrl: "https://www.yara.co.th",
        },
      },
      extractedResults: {
        fcp: 1851,
        lcp: 2449,
        cls: "0.05",
        fid: 12,
      },
      timestamp: 1650880981171,
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
                { start: "0.00", end: "0.10", density: 0.9348 },
                { start: "0.10", end: "0.25", density: 0.0372 },
                { start: "0.25", density: 0.027999999999999976 },
              ],
              percentiles: { p75: "0.01" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.777922207779222 },
                { start: 1800, end: 3000, density: 0.1763823617638236 },
                { start: 3000, density: 0.04569543045695435 },
              ],
              percentiles: { p75: 1724 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.979495899179836 },
                { start: 100, end: 300, density: 0.014502900580116024 },
                { start: 300, density: 0.006001200240047995 },
              ],
              percentiles: { p75: 9 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8221322132213221 },
                { start: 2500, end: 4000, density: 0.11236123612361239 },
                { start: 4000, density: 0.06550655065506554 },
              ],
              percentiles: { p75: 2151 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.kr/",
          normalizedUrl: "https://www.yara.kr",
        },
      },
      extractedResults: { fcp: 1724, lcp: 2151, cls: "0.01", fid: 9 },
      timestamp: 1650880981368,
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
                { start: 0, end: 100, density: 0.9418857005063902 },
                { start: 100, end: 300, density: 0.03580901856763926 },
                { start: 300, density: 0.022305280925970533 },
              ],
              percentiles: { p75: 14 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6771536911956394 },
                { start: 2500, end: 4000, density: 0.18064936603863024 },
                { start: 4000, density: 0.14219694276573044 },
              ],
              percentiles: { p75: 2972 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9408103347034645,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.020551967116852612,
                },
                { start: "0.25", density: 0.038637698179682954 },
              ],
              percentiles: { p75: "0.00" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5864759427828341 },
                { start: 1800, end: 3000, density: 0.23312448279938497 },
                { start: 3000, density: 0.18039957441778093 },
              ],
              percentiles: { p75: 2557 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.co/",
          normalizedUrl: "https://www.yara.com.co",
        },
      },
      extractedResults: {
        fcp: 2557,
        lcp: 2972,
        cls: "0.00",
        fid: 14,
      },
      timestamp: 1650880981565,
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
                  density: 0.8205641128225646,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.14342868573714745,
                },
                { start: "0.25", density: 0.036007201440288066 },
              ],
              percentiles: { p75: "0.06" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.743625637436256 },
                { start: 1800, end: 3000, density: 0.15818418158184172 },
                { start: 3000, density: 0.09819018098190234 },
              ],
              percentiles: { p75: 1861 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9753950790158032 },
                { start: 100, end: 300, density: 0.017203440688137624 },
                { start: 300, density: 0.007401480296059197 },
              ],
              percentiles: { p75: 10 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7614330031021709 },
                { start: 2500, end: 4000, density: 0.14640248173721596 },
                { start: 4000, density: 0.09216451516061315 },
              ],
              percentiles: { p75: 2456 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com/",
          normalizedUrl: "https://www.yara.com",
        },
      },
      extractedResults: {
        fcp: 1861,
        lcp: 2456,
        cls: "0.06",
        fid: 10,
      },
      timestamp: 1650880981813,
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
                  density: 0.7473494698939789,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.11952390478095619,
                },
                { start: "0.25", density: 0.13312662532506486 },
              ],
              percentiles: { p75: "0.10" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6247750449910022 },
                { start: 1800, end: 3000, density: 0.14967006598680274 },
                { start: 3000, density: 0.22555488902219512 },
              ],
              percentiles: { p75: 2791 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6655665566556654 },
                { start: 2500, end: 4000, density: 0.15151515151515144 },
                { start: 4000, density: 0.18291829182918304 },
              ],
              percentiles: { p75: 3183 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.cm/en-cm/",
          normalizedUrl: "https://www.yara.cm",
        },
      },
      extractedResults: { fcp: 2791, lcp: 3183, cls: "0.10" },
      timestamp: 1650880981994,
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
                  density: 0.7473494698939789,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.11952390478095619,
                },
                { start: "0.25", density: 0.13312662532506486 },
              ],
              percentiles: { p75: "0.10" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6247750449910022 },
                { start: 1800, end: 3000, density: 0.14967006598680274 },
                { start: 3000, density: 0.22555488902219512 },
              ],
              percentiles: { p75: 2651 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6655665566556654 },
                { start: 2500, end: 4000, density: 0.15151515151515144 },
                { start: 4000, density: 0.18291829182918304 },
              ],
              percentiles: { p75: 3148 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.cm/",
          normalizedUrl: "https://www.yara.cm",
        },
      },
      extractedResults: { fcp: 2651, lcp: 3148, cls: "0.10" },
      timestamp: 1650880982210,
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
                  density: 0.9192134268537074,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.047094188376753505,
                },
                { start: "0.25", density: 0.03369238476953909 },
              ],
              percentiles: { p75: "0.00" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5283234064123676 },
                { start: 1800, end: 3000, density: 0.20643771385122262 },
                { start: 3000, density: 0.2652388797364097 },
              ],
              percentiles: { p75: 3241 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.963214915595868 },
                { start: 100, end: 300, density: 0.031997984378936764 },
                { start: 300, density: 0.004787100025195264 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.5891634980988589 },
                { start: 2500, end: 4000, density: 0.2140050697084916 },
                { start: 4000, density: 0.19683143219264945 },
              ],
              percentiles: { p75: 3594 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.ci/",
          normalizedUrl: "https://www.yara.ci",
        },
      },
      extractedResults: {
        fcp: 3241,
        lcp: 3594,
        cls: "0.00",
        fid: 13,
      },
      timestamp: 1650880982344,
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
                { start: 0, end: 100, density: 0.969003099690031 },
                { start: 100, end: 300, density: 0.025397460253974602 },
                { start: 300, density: 0.005599440055994401 },
              ],
              percentiles: { p75: 11 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6238747749549914 },
                { start: 2500, end: 4000, density: 0.1916883376675336 },
                { start: 4000, density: 0.184436887377475 },
              ],
              percentiles: { p75: 3564 },
            },
            cumulative_layout_shift: {
              histogram: [
                { start: "0.00", end: "0.10", density: 0.9221 },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.042499999999999996,
                },
                { start: "0.25", density: 0.0354 },
              ],
              percentiles: { p75: "0.01" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5845830833833218 },
                { start: 1800, end: 3000, density: 0.186062787442511 },
                { start: 3000, density: 0.22935412917416723 },
              ],
              percentiles: { p75: 2962 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.ci/",
          normalizedUrl: "https://www.yara.ci",
        },
      },
      extractedResults: {
        fcp: 2962,
        lcp: 3564,
        cls: "0.01",
        fid: 11,
      },
      timestamp: 1650880982565,
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
                  density: 0.9138983050847458,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.06061016949152542,
                },
                { start: "0.25", density: 0.025491525423728817 },
              ],
              percentiles: { p75: "0.00" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6917324470294974 },
                { start: 1800, end: 3000, density: 0.1884780501315608 },
                { start: 3000, density: 0.11978950283894173 },
              ],
              percentiles: { p75: 2065 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9273032294142318 },
                { start: 100, end: 300, density: 0.042919054941982386 },
                { start: 300, density: 0.029777715643785726 },
              ],
              percentiles: { p75: 14 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.758382373066921 },
                { start: 2500, end: 4000, density: 0.15074586013411775 },
                { start: 4000, density: 0.09087176679896132 },
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
        fcp: 2065,
        lcp: 2494,
        cls: "0.00",
        fid: 14,
      },
      timestamp: 1650880982702,
    },
    {
      url: "https://www.yara.com.gh/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "https://www.yara.com.gh" },
          metrics: {
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9218000000000001,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.05050000000000001,
                },
                { start: "0.25", density: 0.027700000000000006 },
              ],
              percentiles: { p75: "0.00" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5849000000000023 },
                { start: 1800, end: 3000, density: 0.16040000000000063 },
                { start: 3000, density: 0.254699999999997 },
              ],
              percentiles: { p75: 2915 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9608960896089609 },
                { start: 100, end: 300, density: 0.0277027702770277 },
                { start: 300, density: 0.011401140114011377 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6280999999999987 },
                { start: 2500, end: 4000, density: 0.17549999999999968 },
                { start: 4000, density: 0.19640000000000155 },
              ],
              percentiles: { p75: 3309 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.gh/",
          normalizedUrl: "https://www.yara.com.gh",
        },
      },
      extractedResults: {
        fcp: 2915,
        lcp: 3309,
        cls: "0.00",
        fid: 12,
      },
      timestamp: 1650880982902,
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
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9438056194380562,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.0382961703829617,
                },
                { start: "0.25", density: 0.01789821017898209 },
              ],
              percentiles: { p75: "0.01" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7802 },
                { start: 1800, end: 3000, density: 0.14800000000000005 },
                { start: 3000, density: 0.07179999999999988 },
              ],
              percentiles: { p75: 1781 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.ma/",
          normalizedUrl: "https://www.yara.ma",
        },
      },
      extractedResults: { fcp: 1781, cls: "0.01" },
      timestamp: 1650880983037,
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
                { start: 0, end: 1800, density: 0.6308738252349517 },
                { start: 1800, end: 3000, density: 0.21635672865426875 },
                { start: 3000, density: 0.1527694461107795 },
              ],
              percentiles: { p75: 2388 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.968590577173152 },
                { start: 100, end: 300, density: 0.02800840252075623 },
                { start: 300, density: 0.0034010203060918275 },
              ],
              percentiles: { p75: 10 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6653330666133223 },
                { start: 2500, end: 4000, density: 0.17683536707341446 },
                { start: 4000, density: 0.15783156631326328 },
              ],
              percentiles: { p75: 3135 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8338833883388339,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.1255125512551255,
                },
                { start: "0.25", density: 0.04060406040604057 },
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
        fcp: 2388,
        lcp: 3135,
        cls: "0.05",
        fid: 10,
      },
      timestamp: 1650880983201,
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
                  density: 0.9061778290993072,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.027424942263279448,
                },
                { start: "0.25", density: 0.0663972286374134 },
              ],
              percentiles: { p75: "0.00" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5471035693387938 },
                { start: 1800, end: 3000, density: 0.252194265652428 },
                { start: 3000, density: 0.20070216500877835 },
              ],
              percentiles: { p75: 2650 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.8590860461561975 },
                { start: 100, end: 300, density: 0.060217025829130376 },
                { start: 300, density: 0.08069692801467215 },
              ],
              percentiles: { p75: 24 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6172150411280828 },
                { start: 2500, end: 4000, density: 0.1963866039952992 },
                { start: 4000, density: 0.18639835487661802 },
              ],
              percentiles: { p75: 3362 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.us/",
          normalizedUrl: "https://www.yara.us",
        },
      },
      extractedResults: {
        fcp: 2650,
        lcp: 3362,
        cls: "0.00",
        fid: 24,
      },
      timestamp: 1650880983341,
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
                  density: 0.9641183723797782,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.014303329223181257,
                },
                { start: "0.25", density: 0.021578298397040674 },
              ],
              percentiles: { p75: "0.00" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5422675285927393 },
                { start: 1800, end: 3000, density: 0.26889607160616585 },
                { start: 3000, density: 0.18883639980109485 },
              ],
              percentiles: { p75: 2653 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9474955504703788 },
                { start: 100, end: 300, density: 0.03534197813374014 },
                { start: 300, density: 0.017162471395880993 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6560406846936233 },
                { start: 2500, end: 4000, density: 0.2147109898288263 },
                { start: 4000, density: 0.12924832547755047 },
              ],
              percentiles: { p75: 3001 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.ec/",
          normalizedUrl: "https://www.yara.com.ec",
        },
      },
      extractedResults: {
        fcp: 2653,
        lcp: 3001,
        cls: "0.00",
        fid: 13,
      },
      timestamp: 1650880983561,
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
                  density: 0.9307384087006297,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.036061820263308536,
                },
                { start: "0.25", density: 0.0331997710360618 },
              ],
              percentiles: { p75: "0.00" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8502508683905828 },
                { start: 1800, end: 3000, density: 0.10883828637591662 },
                { start: 3000, density: 0.040910845233500456 },
              ],
              percentiles: { p75: 1522 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9597795018374847 },
                { start: 100, end: 300, density: 0.018374846876276028 },
                { start: 300, density: 0.021845651286239262 },
              ],
              percentiles: { p75: 15 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8551843985325353 },
                { start: 2500, end: 4000, density: 0.09828152152925276 },
                { start: 4000, density: 0.04653407993821205 },
              ],
              percentiles: { p75: 2099 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.be/",
          normalizedUrl: "https://www.yara.be",
        },
      },
      extractedResults: {
        fcp: 1522,
        lcp: 2099,
        cls: "0.00",
        fid: 15,
      },
      timestamp: 1650880983802,
    },
    {
      url: "https://www.yara.be/fr-be/",
      deviceTargeted: "PHONE",
      results: {
        record: {
          key: { formFactor: "PHONE", origin: "https://www.yara.be" },
          metrics: {
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8551843985325353 },
                { start: 2500, end: 4000, density: 0.09828152152925276 },
                { start: 4000, density: 0.04653407993821205 },
              ],
              percentiles: { p75: 2099 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9307384087006297,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.036061820263308536,
                },
                { start: "0.25", density: 0.0331997710360618 },
              ],
              percentiles: { p75: "0.00" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8502508683905828 },
                { start: 1800, end: 3000, density: 0.10883828637591662 },
                { start: 3000, density: 0.040910845233500456 },
              ],
              percentiles: { p75: 1522 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9597795018374847 },
                { start: 100, end: 300, density: 0.018374846876276028 },
                { start: 300, density: 0.021845651286239262 },
              ],
              percentiles: { p75: 15 },
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
        lcp: 2099,
        cls: "0.00",
        fid: 15,
      },
      timestamp: 1650880984041,
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
                  density: 0.9218000000000001,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.05050000000000001,
                },
                { start: "0.25", density: 0.027700000000000006 },
              ],
              percentiles: { p75: "0.00" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5849000000000023 },
                { start: 1800, end: 3000, density: 0.16040000000000063 },
                { start: 3000, density: 0.254699999999997 },
              ],
              percentiles: { p75: 3125 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9608960896089609 },
                { start: 100, end: 300, density: 0.0277027702770277 },
                { start: 300, density: 0.011401140114011377 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6280999999999987 },
                { start: 2500, end: 4000, density: 0.17549999999999968 },
                { start: 4000, density: 0.19640000000000155 },
              ],
              percentiles: { p75: 3476 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.gh/",
          normalizedUrl: "https://www.yara.com.gh",
        },
      },
      extractedResults: {
        fcp: 3125,
        lcp: 3476,
        cls: "0.00",
        fid: 13,
      },
      timestamp: 1650880984274,
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
                  density: 0.9295070492950704,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.05549445055494451,
                },
                { start: "0.25", density: 0.014998500149984996 },
              ],
              percentiles: { p75: "0.04" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.9189837967593518 },
                { start: 1800, end: 3000, density: 0.07021404280856168 },
                { start: 3000, density: 0.010802160432086448 },
              ],
              percentiles: { p75: 1264 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9864013598640136 },
                { start: 100, end: 300, density: 0.013598640135986403 },
                { start: 300 },
              ],
              percentiles: { p75: 10 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.9244500000000001 },
                { start: 2500, end: 4000, density: 0.059950000000000024 },
                { start: 4000, density: 0.015599999999999987 },
              ],
              percentiles: { p75: 1753 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.ee/",
          normalizedUrl: "https://www.yara.ee",
        },
      },
      extractedResults: {
        fcp: 1264,
        lcp: 1753,
        cls: "0.04",
        fid: 10,
      },
      timestamp: 1650880984563,
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
                  density: 0.8431781898563183,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.10585779196856196,
                },
                { start: "0.25", density: 0.05096401817511976 },
              ],
              percentiles: { p75: "0.02" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.770877149573178 },
                { start: 1800, end: 3000, density: 0.13559322033898297 },
                { start: 3000, density: 0.093529630087839 },
              ],
              percentiles: { p75: 1713 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9617353468134119 },
                { start: 100, end: 300, density: 0.029818274891220888 },
                { start: 300, density: 0.008446378295367287 },
              ],
              percentiles: { p75: 15 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8131569185111907 },
                { start: 2500, end: 4000, density: 0.10832199826882645 },
                { start: 4000, density: 0.07852108321998301 },
              ],
              percentiles: { p75: 2116 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.my/",
          normalizedUrl: "https://www.yara.my",
        },
      },
      extractedResults: {
        fcp: 1713,
        lcp: 2116,
        cls: "0.02",
        fid: 15,
      },
      timestamp: 1650880984723,
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
                  density: 0.9003350083752094,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.08590571907154822,
                },
                { start: "0.25", density: 0.013759272553242413 },
              ],
              percentiles: { p75: "0.00" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8665943600867677 },
                { start: 1800, end: 3000, density: 0.10930344661364183 },
                { start: 3000, density: 0.024102193299590475 },
              ],
              percentiles: { p75: 1467 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9757233938205002 },
                { start: 100, end: 300, density: 0.014958312898479646 },
                { start: 300, density: 0.009318293281020075 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.9006522526875228 },
                { start: 2500, end: 4000, density: 0.08014252929097719 },
                { start: 4000, density: 0.019205218021500155 },
              ],
              percentiles: { p75: 1824 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.lt/",
          normalizedUrl: "https://www.yara.lt",
        },
      },
      extractedResults: {
        fcp: 1467,
        lcp: 1824,
        cls: "0.00",
        fid: 13,
      },
      timestamp: 1650880984987,
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
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8284999999999999,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.10609999999999999,
                },
                { start: "0.25", density: 0.06540000000000003 },
              ],
              percentiles: { p75: "0.05" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8252999999999998 },
                { start: 1800, end: 3000, density: 0.11259999999999999 },
                { start: 3000, density: 0.06210000000000019 },
              ],
              percentiles: { p75: 1475 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9494848454536358 },
                { start: 100, end: 300, density: 0.02850855256576972 },
                { start: 300, density: 0.022006601980594415 },
              ],
              percentiles: { p75: 14 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.83453381352541 },
                { start: 2500, end: 4000, density: 0.11094437775110039 },
                { start: 4000, density: 0.054521808723489586 },
              ],
              percentiles: { p75: 2044 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.de/",
          normalizedUrl: "https://www.yara.de",
        },
      },
      extractedResults: {
        fcp: 1475,
        lcp: 2044,
        cls: "0.05",
        fid: 14,
      },
      timestamp: 1650880985242,
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
                { start: "0.00", end: "0.10", density: 0.8648 },
                { start: "0.10", end: "0.25", density: 0.0791 },
                { start: "0.25", density: 0.05610000000000001 },
              ],
              percentiles: { p75: "0.03" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7355471094218842 },
                { start: 1800, end: 3000, density: 0.18113622724544906 },
                { start: 3000, density: 0.08331666333266684 },
              ],
              percentiles: { p75: 1869 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9470894178835768 },
                { start: 100, end: 300, density: 0.03040608121624325 },
                { start: 300, density: 0.022504500900179955 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7809719028097187 },
                { start: 2500, end: 4000, density: 0.14903509649035082 },
                { start: 4000, density: 0.06999300069993028 },
              ],
              percentiles: { p75: 2377 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.es/",
          normalizedUrl: "https://www.yara.es",
        },
      },
      extractedResults: {
        fcp: 1869,
        lcp: 2377,
        cls: "0.03",
        fid: 13,
      },
      timestamp: 1650880985415,
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
                  density: 0.9708941788357672,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.019903980796159234,
                },
                { start: "0.25", density: 0.009201840368073609 },
              ],
              percentiles: { p75: "0.00" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5210084033613444 },
                { start: 1800, end: 3000, density: 0.3485394157663062 },
                { start: 3000, density: 0.13045218087234953 },
              ],
              percentiles: { p75: 2455 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9247075292470753 },
                { start: 100, end: 300, density: 0.05009499050094991 },
                { start: 300, density: 0.025197480251974783 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.5942688537707534 },
                { start: 2500, end: 4000, density: 0.2922084416883373 },
                { start: 4000, density: 0.11352270454090908 },
              ],
              percentiles: { p75: 3152 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.hr/",
          normalizedUrl: "https://www.yara.hr",
        },
      },
      extractedResults: {
        fcp: 2455,
        lcp: 3152,
        cls: "0.00",
        fid: 13,
      },
      timestamp: 1650880985567,
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
                  density: 0.8816999999999999,
                },
                { start: "0.10", end: "0.25", density: 0.066 },
                { start: "0.25", density: 0.052300000000000055 },
              ],
              percentiles: { p75: "0.03" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.16504951485445613 },
                { start: 1800, end: 3000, density: 0.44623387016104765 },
                { start: 3000, density: 0.3887166149844963 },
              ],
              percentiles: { p75: 3983 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.3389177835567111 },
                { start: 2500, end: 4000, density: 0.35622124424884954 },
                { start: 4000, density: 0.30486097219443936 },
              ],
              percentiles: { p75: 4572 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "http://www.yara.com.mm/",
          normalizedUrl: "http://www.yara.com.mm",
        },
      },
      extractedResults: { fcp: 3983, lcp: 4572, cls: "0.03" },
      timestamp: 1650880985725,
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
                  density: 0.8164183581641834,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.1296870312968703,
                },
                { start: "0.25", density: 0.05389461053894623 },
              ],
              percentiles: { p75: "0.07" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7293000000000004 },
                { start: 1800, end: 3000, density: 0.16680000000000003 },
                { start: 3000, density: 0.10389999999999955 },
              ],
              percentiles: { p75: 1909 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9382814844453334 },
                { start: 100, end: 300, density: 0.03491047314194258 },
                { start: 300, density: 0.026808042412724088 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7746274627462737 },
                { start: 2500, end: 4000, density: 0.1419641964196418 },
                { start: 4000, density: 0.0834083408340844 },
              ],
              percentiles: { p75: 2414 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.fr/",
          normalizedUrl: "https://www.yara.fr",
        },
      },
      extractedResults: {
        fcp: 1909,
        lcp: 2414,
        cls: "0.07",
        fid: 12,
      },
      timestamp: 1650880985980,
    },
    {
      url: "https://www.yara.es/",
      deviceTargeted: "PHONE",
      results: {
        record: {
          key: { formFactor: "PHONE", origin: "https://www.yara.es" },
          metrics: {
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9350865939704941 },
                { start: 100, end: 300, density: 0.03797305965362413 },
                { start: 300, density: 0.026940346375881833 },
              ],
              percentiles: { p75: 15 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.764345830145371 },
                { start: 2500, end: 4000, density: 0.1632236674317775 },
                { start: 4000, density: 0.07243050242285143 },
              ],
              percentiles: { p75: 2450 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9370558375634518,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.026903553299492382,
                },
                { start: "0.25", density: 0.03604060913705582 },
              ],
              percentiles: { p75: "0.01" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7 },
                { start: 1800, end: 3000, density: 0.20547770700636941 },
                { start: 3000, density: 0.09452229299363062 },
              ],
              percentiles: { p75: 1980 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.es/",
          normalizedUrl: "https://www.yara.es",
        },
      },
      extractedResults: {
        fcp: 1980,
        lcp: 2450,
        cls: "0.01",
        fid: 15,
      },
      timestamp: 1650880986162,
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
                  density: 0.9393105256259011,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.025036046664045086,
                },
                { start: "0.25", density: 0.03565342771005373 },
              ],
              percentiles: { p75: "0.01" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.4794629801940702 },
                { start: 1800, end: 3000, density: 0.3319154592582738 },
                { start: 3000, density: 0.18862156054765594 },
              ],
              percentiles: { p75: 2681 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9632111597374179 },
                { start: 100, end: 300, density: 0.029130196936542667 },
                { start: 300, density: 0.007658643326039401 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6377963183684282 },
                { start: 2500, end: 4000, density: 0.23599523241954706 },
                { start: 4000, density: 0.12620844921202484 },
              ],
              percentiles: { p75: 3047 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.pe/",
          normalizedUrl: "https://www.yara.com.pe",
        },
      },
      extractedResults: {
        fcp: 2681,
        lcp: 3047,
        cls: "0.01",
        fid: 13,
      },
      timestamp: 1650880986433,
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
                  density: 0.9477953104261908,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.026692228284913726,
                },
                { start: "0.25", density: 0.02551246128889545 },
              ],
              percentiles: { p75: "0.00" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5773952095808373 },
                { start: 1800, end: 3000, density: 0.2276946107784428 },
                { start: 3000, density: 0.19491017964071986 },
              ],
              percentiles: { p75: 2656 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9450746268656717 },
                { start: 100, end: 300, density: 0.03880597014925373 },
                { start: 300, density: 0.01611940298507463 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6605806644717149 },
                { start: 2500, end: 4000, density: 0.20802155043400178 },
                { start: 4000, density: 0.1313977850942832 },
              ],
              percentiles: { p75: 3001 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.au/",
          normalizedUrl: "https://www.yara.com.au",
        },
      },
      extractedResults: {
        fcp: 2656,
        lcp: 3001,
        cls: "0.00",
        fid: 13,
      },
      timestamp: 1650880986720,
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
                { start: 0, end: 100, density: 0.9752123938030984 },
                { start: 100, end: 300, density: 0.011094452773613192 },
                { start: 300, density: 0.013693153423288317 },
              ],
              percentiles: { p75: 9 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8775377537753775 },
                { start: 2500, end: 4000, density: 0.08565856585658566 },
                { start: 4000, density: 0.03680368036803688 },
              ],
              percentiles: { p75: 1881 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.7391260873912608,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.17788221177882213,
                },
                { start: "0.25", density: 0.0829917008299169 },
              ],
              percentiles: { p75: "0.10" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8884999999999998 },
                { start: 1800, end: 3000, density: 0.08250000000000002 },
                { start: 3000, density: 0.028999999999999967 },
              ],
              percentiles: { p75: 1288 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.be/fr-be/",
          normalizedUrl: "https://www.yara.be",
        },
      },
      extractedResults: { fcp: 1288, lcp: 1881, cls: "0.10", fid: 9 },
      timestamp: 1650880987003,
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
                  density: 0.7714460784313725,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.18627450980392157,
                },
                { start: "0.25", density: 0.042279411764705885 },
              ],
              percentiles: { p75: "0.07" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6928755998523431 },
                { start: 1800, end: 3000, density: 0.22751322751322722 },
                { start: 3000, density: 0.07961117263442961 },
              ],
              percentiles: { p75: 1997 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9652988855116513 },
                { start: 100, end: 300, density: 0.021656534954407298 },
                { start: 300, density: 0.013044579533941211 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.727691740412979 },
                { start: 2500, end: 4000, density: 0.18209193706981303 },
                { start: 4000, density: 0.09021632251720801 },
              ],
              percentiles: { p75: 2599 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.co.th/",
          normalizedUrl: "https://www.yara.co.th",
        },
      },
      extractedResults: {
        fcp: 1997,
        lcp: 2599,
        cls: "0.07",
        fid: 13,
      },
      timestamp: 1650880987218,
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
                  density: 0.8778326554328879,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.08701336432306798,
                },
                { start: "0.25", density: 0.03515398024404415 },
              ],
              percentiles: { p75: "0.01" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8677186255714497 },
                { start: 1800, end: 3000, density: 0.10204984515558174 },
                { start: 3000, density: 0.03023152927296841 },
              ],
              percentiles: { p75: 1436 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.939166298423921 },
                { start: 100, end: 300, density: 0.03387833259684784 },
                { start: 300, density: 0.026955368979231283 },
              ],
              percentiles: { p75: 17 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8341190335886859 },
                { start: 2500, end: 4000, density: 0.1321449616971126 },
                { start: 4000, density: 0.03373600471420158 },
              ],
              percentiles: { p75: 2110 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.fi/",
          normalizedUrl: "https://www.yara.fi",
        },
      },
      extractedResults: {
        fcp: 1436,
        lcp: 2110,
        cls: "0.01",
        fid: 17,
      },
      timestamp: 1650880987549,
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
                  density: 0.9448470920982853,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.039596959519179784,
                },
                { start: "0.25", density: 0.015555948382534913 },
              ],
              percentiles: { p75: "0.00" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.9056535830032408 },
                { start: 1800, end: 3000, density: 0.07490097227223622 },
                { start: 3000, density: 0.019445444724522924 },
              ],
              percentiles: { p75: 1420 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9746976744186046 },
                { start: 100, end: 300, density: 0.02530232558139535 },
                { start: 300 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.9117436448263515 },
                { start: 2500, end: 4000, density: 0.06766917293233082 },
                { start: 4000, density: 0.020587182241317545 },
              ],
              percentiles: { p75: 1961 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.ee/",
          normalizedUrl: "https://www.yara.ee",
        },
      },
      extractedResults: {
        fcp: 1420,
        lcp: 1961,
        cls: "0.00",
        fid: 13,
      },
      timestamp: 1650880987834,
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
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.4044134204008141 },
                { start: 1800, end: 3000, density: 0.25681152893492676 },
                { start: 3000, density: 0.338775050664259 },
              ],
              percentiles: { p75: 3636 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.8906286515541012 },
                { start: 100, end: 300, density: 0.0704603879411077 },
                { start: 300, density: 0.038910960504791064 },
              ],
              percentiles: { p75: 20 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.4531691334312565 },
                { start: 2500, end: 4000, density: 0.25511241667608514 },
                { start: 4000, density: 0.29171844989265827 },
              ],
              percentiles: { p75: 4456 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8726621122186135,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.0897076940306865,
                },
                { start: "0.25", density: 0.03763019375070002 },
              ],
              percentiles: { p75: "0.02" },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yarabrasil.com.br/",
          normalizedUrl: "https://www.yarabrasil.com.br",
        },
      },
      extractedResults: {
        fcp: 3636,
        lcp: 4456,
        cls: "0.02",
        fid: 20,
      },
      timestamp: 1650880988095,
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
                  density: 0.9552210365853658,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.018292682926829267,
                },
                { start: "0.25", density: 0.02648628048780487 },
              ],
              percentiles: { p75: "0.00" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.646563540238888 },
                { start: 1800, end: 3000, density: 0.24241237517133346 },
                { start: 3000, density: 0.11102408458977867 },
              ],
              percentiles: { p75: 2367 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9408381265406737 },
                { start: 100, end: 300, density: 0.025267050123253903 },
                { start: 300, density: 0.03389482333607236 },
              ],
              percentiles: { p75: 14 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.709521039363971 },
                { start: 2500, end: 4000, density: 0.19429901105293776 },
                { start: 4000, density: 0.09617994958309105 },
              ],
              percentiles: { p75: 2830 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yaracanada.ca/",
          normalizedUrl: "https://www.yaracanada.ca",
        },
      },
      extractedResults: {
        fcp: 2367,
        lcp: 2830,
        cls: "0.00",
        fid: 14,
      },
      timestamp: 1650880988386,
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
                  density: 0.9395629939562994,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.033627770029443664,
                },
                { start: "0.25", density: 0.026809236014256974 },
              ],
              percentiles: { p75: "0.01" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.39835728952771865 },
                { start: 1800, end: 3000, density: 0.32791028273574296 },
                { start: 3000, density: 0.2737324277365383 },
              ],
              percentiles: { p75: 3194 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9081842646826026 },
                { start: 100, end: 300, density: 0.04321671679594745 },
                { start: 300, density: 0.04859901852144988 },
              ],
              percentiles: { p75: 16 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.5125984251968506 },
                { start: 2500, end: 4000, density: 0.2908661417322835 },
                { start: 4000, density: 0.19653543307086588 },
              ],
              percentiles: { p75: 3624 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.co.uk/",
          normalizedUrl: "https://www.yara.co.uk",
        },
      },
      extractedResults: {
        fcp: 3194,
        lcp: 3624,
        cls: "0.01",
        fid: 16,
      },
      timestamp: 1650880988687,
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
                  density: 0.9759767046833293,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.014802232467847608,
                },
                { start: "0.25", density: 0.009221062848823104 },
              ],
              percentiles: { p75: "0.00" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8287070854638423 },
                { start: 1800, end: 3000, density: 0.12916971025079133 },
                { start: 3000, density: 0.042123204285366346 },
              ],
              percentiles: { p75: 1600 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9675897932035313 },
                { start: 100, end: 300, density: 0.02080058048131576 },
                { start: 300, density: 0.01160962631515299 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8609283625730995 },
                { start: 2500, end: 4000, density: 0.1082480506822612 },
                { start: 4000, density: 0.030823586744639364 },
              ],
              percentiles: { p75: 1980 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.hu/",
          normalizedUrl: "https://www.yara.hu",
        },
      },
      extractedResults: {
        fcp: 1600,
        lcp: 1980,
        cls: "0.00",
        fid: 12,
      },
      timestamp: 1650880988969,
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
                { start: 0, end: 1800, density: 0.477656534164719 },
                { start: 1800, end: 3000, density: 0.3707456482203176 },
                { start: 3000, density: 0.15159781761496346 },
              ],
              percentiles: { p75: 2603 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9146770545363156 },
                { start: 100, end: 300, density: 0.034053782357376224 },
                { start: 300, density: 0.051269163106308115 },
              ],
              percentiles: { p75: 14 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.5903973081402883 },
                { start: 2500, end: 4000, density: 0.29597515206419095 },
                { start: 4000, density: 0.11362753979552079 },
              ],
              percentiles: { p75: 3010 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9447442816756617,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.021202775636083266,
                },
                { start: "0.25", density: 0.03405294268825497 },
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
        fcp: 2603,
        lcp: 3010,
        cls: "0.00",
        fid: 14,
      },
      timestamp: 1650880989266,
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
                  density: 0.9673776662484316,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.01769134253450439,
                },
                { start: "0.25", density: 0.014930991217063986 },
              ],
              percentiles: { p75: "0.00" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6178810455865636 },
                { start: 1800, end: 3000, density: 0.25331481247632265 },
                { start: 3000, density: 0.12880414193711368 },
              ],
              percentiles: { p75: 2187 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9720647773279352 },
                { start: 100, end: 300, density: 0.017813765182186237 },
                { start: 300, density: 0.010121457489878543 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7405143073238376 },
                { start: 2500, end: 4000, density: 0.15448128072608103 },
                { start: 4000, density: 0.1050044119500814 },
              ],
              percentiles: { p75: 2548 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.pa/",
          normalizedUrl: "https://www.yara.com.pa",
        },
      },
      extractedResults: {
        fcp: 2187,
        lcp: 2548,
        cls: "0.00",
        fid: 12,
      },
      timestamp: 1650880989610,
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
                  density: 0.9434246163105627,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.022720433343364432,
                },
                { start: "0.25", density: 0.03385495034607285 },
              ],
              percentiles: { p75: "0.00" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.3995700245700254 },
                { start: 1800, end: 3000, density: 0.3888206388206396 },
                { start: 3000, density: 0.21160933660933506 },
              ],
              percentiles: { p75: 2814 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9723226922472087 },
                { start: 100, end: 300, density: 0.022645069979556537 },
                { start: 300, density: 0.00503223777323479 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.5838314176245205 },
                { start: 2500, end: 4000, density: 0.2808429118773944 },
                { start: 4000, density: 0.13532567049808522 },
              ],
              percentiles: { p75: 3149 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.cl/",
          normalizedUrl: "https://www.yara.cl",
        },
      },
      extractedResults: {
        fcp: 2814,
        lcp: 3149,
        cls: "0.00",
        fid: 12,
      },
      timestamp: 1650880989935,
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
                { start: 0, end: 100, density: 0.9464329795112318 },
                { start: 100, end: 300, density: 0.028141199703776845 },
                { start: 300, density: 0.02542582078499126 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8018649439297901 },
                { start: 2500, end: 4000, density: 0.14084592881521207 },
                { start: 4000, density: 0.05728912725499775 },
              ],
              percentiles: { p75: 2240 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8085984940490648,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.17537041535098372,
                },
                { start: "0.25", density: 0.016031090599951427 },
              ],
              percentiles: { p75: "0.07" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7758809901231556 },
                { start: 1800, end: 3000, density: 0.16290696256554074 },
                { start: 3000, density: 0.06121204731130358 },
              ],
              percentiles: { p75: 1725 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.pl/",
          normalizedUrl: "https://www.yara.pl",
        },
      },
      extractedResults: {
        fcp: 1725,
        lcp: 2240,
        cls: "0.07",
        fid: 13,
      },
      timestamp: 1650880990260,
    },
    {
      url: "https://www.yara.ma/",
      deviceTargeted: "PHONE",
      results: {
        record: {
          key: { formFactor: "PHONE", origin: "https://www.yara.ma" },
          metrics: {
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7713257348530294 },
                { start: 1800, end: 3000, density: 0.15884823035392923 },
                { start: 3000, density: 0.06982603479304142 },
              ],
              percentiles: { p75: 1821 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9353151010701546,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.043400713436385255,
                },
                { start: "0.25", density: 0.021284185493460155 },
              ],
              percentiles: { p75: "0.00" },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.ma/",
          normalizedUrl: "https://www.yara.ma",
        },
      },
      extractedResults: { fcp: 1821, cls: "0.00" },
      timestamp: 1650880990612,
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
                { start: 0, end: 2500, density: 0.8058932499710545 },
                { start: 2500, end: 4000, density: 0.12903786036818335 },
                { start: 4000, density: 0.06506888966076198 },
              ],
              percentiles: { p75: 2222 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.952935748067828,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.02929980389895028,
                },
                { start: "0.25", density: 0.01776444803322183 },
              ],
              percentiles: { p75: "0.00" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7532512772875051 },
                { start: 1800, end: 3000, density: 0.16430562006502536 },
                { start: 3000, density: 0.08244310264746949 },
              ],
              percentiles: { p75: 1812 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9477906837504491 },
                { start: 100, end: 300, density: 0.034606633936055564 },
                { start: 300, density: 0.017602682313495342 },
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
      extractedResults: {
        fcp: 1812,
        lcp: 2222,
        cls: "0.00",
        fid: 13,
      },
      timestamp: 1650880990951,
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
                  density: 0.9463934886331744,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.0277855739545327,
                },
                { start: "0.25", density: 0.02582093741229302 },
              ],
              percentiles: { p75: "0.00" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5589911655742368 },
                { start: 1800, end: 3000, density: 0.25363351382160104 },
                { start: 3000, density: 0.1873753206041623 },
              ],
              percentiles: { p75: 2570 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9566333808844508 },
                { start: 100, end: 300, density: 0.03994293865905849 },
                { start: 300, density: 0.0034236804564907273 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.631399317406144 },
                { start: 2500, end: 4000, density: 0.20435153583617757 },
                { start: 4000, density: 0.16424914675767846 },
              ],
              percentiles: { p75: 3134 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.co.za/",
          normalizedUrl: "https://www.yara.co.za",
        },
      },
      extractedResults: {
        fcp: 2570,
        lcp: 3134,
        cls: "0.00",
        fid: 13,
      },
      timestamp: 1650880991329,
    },
    {
      url: "https://www.yara.ro/",
      deviceTargeted: "PHONE",
      results: {
        record: {
          key: { formFactor: "PHONE", origin: "https://www.yara.ro" },
          metrics: {
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7943171188026191 },
                { start: 1800, end: 3000, density: 0.16230121608980355 },
                { start: 3000, density: 0.04338166510757733 },
              ],
              percentiles: { p75: 1694 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9451356795828891 },
                { start: 100, end: 300, density: 0.02535845479322195 },
                { start: 300, density: 0.029505865623888943 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8145227246173613 },
                { start: 2500, end: 4000, density: 0.13885967986914347 },
                { start: 4000, density: 0.04661759551349519 },
              ],
              percentiles: { p75: 2201 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.934451042030504,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.05984398649435324,
                },
                { start: "0.25", density: 0.005704971475142621 },
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
        fcp: 1694,
        lcp: 2201,
        cls: "0.00",
        fid: 12,
      },
      timestamp: 1650880991770,
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
                  density: 0.930330015715034,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.04068447703858914,
                },
                { start: "0.25", density: 0.028985507246376822 },
              ],
              percentiles: { p75: "0.00" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.9264154313270226 },
                { start: 1800, end: 3000, density: 0.057688873013038044 },
                { start: 3000, density: 0.015895695659939233 },
              ],
              percentiles: { p75: 1259 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9388340807174889 },
                { start: 100, end: 300, density: 0.029596412556053817 },
                { start: 300, density: 0.03156950672645735 },
              ],
              percentiles: { p75: 14 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.9212815051473199 },
                { start: 2500, end: 4000, density: 0.06505147319843804 },
                { start: 4000, density: 0.013667021654242172 },
              ],
              percentiles: { p75: 1627 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.no/",
          normalizedUrl: "https://www.yara.no",
        },
      },
      extractedResults: {
        fcp: 1259,
        lcp: 1627,
        cls: "0.00",
        fid: 14,
      },
      timestamp: 1650880992118,
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
                  density: 0.9189326988443236,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.04945615227736234,
                },
                { start: "0.25", density: 0.03161114887831404 },
              ],
              percentiles: { p75: "0.00" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7338723550662308 },
                { start: 1800, end: 3000, density: 0.21159470153105106 },
                { start: 3000, density: 0.05453294340271808 },
              ],
              percentiles: { p75: 1828 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9646034816247584 },
                { start: 100, end: 300, density: 0.023791102514506775 },
                { start: 300, density: 0.011605415860734982 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8202111091884409 },
                { start: 2500, end: 4000, density: 0.13029935975082188 },
                { start: 4000, density: 0.04948953106073723 },
              ],
              percentiles: { p75: 2201 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.kr/",
          normalizedUrl: "https://www.yara.kr",
        },
      },
      extractedResults: {
        fcp: 1828,
        lcp: 2201,
        cls: "0.00",
        fid: 12,
      },
      timestamp: 1650880992453,
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
                  density: 0.9237685691946832,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.04248110502997133,
                },
                { start: "0.25", density: 0.03375032577534532 },
              ],
              percentiles: { p75: "0.01" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8411557066283163 },
                { start: 1800, end: 3000, density: 0.11125637338214131 },
                { start: 3000, density: 0.0475879199895424 },
              ],
              percentiles: { p75: 1486 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.942013705851344 },
                { start: 100, end: 300, density: 0.02662098049551923 },
                { start: 300, density: 0.03136531365313674 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8674123495552066 },
                { start: 2500, end: 4000, density: 0.09543432757718467 },
                { start: 4000, density: 0.037153322867608654 },
              ],
              percentiles: { p75: 1873 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.it/",
          normalizedUrl: "https://www.yara.it",
        },
      },
      extractedResults: {
        fcp: 1486,
        lcp: 1873,
        cls: "0.01",
        fid: 13,
      },
      timestamp: 1650880992777,
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
                  density: 0.9372878616453855,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.04040730564085988,
                },
                { start: "0.25", density: 0.022304832713754635 },
              ],
              percentiles: { p75: "0.00" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.911070780399274 },
                { start: 1800, end: 3000, density: 0.07457515261508002 },
                { start: 3000, density: 0.014354066985645952 },
              ],
              percentiles: { p75: 1331 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9481021162243868 },
                { start: 100, end: 300, density: 0.02384951293248236 },
                { start: 300, density: 0.028048370843130818 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.9155149720302732 },
                { start: 2500, end: 4000, density: 0.06720960842382362 },
                { start: 4000, density: 0.017275419545903274 },
              ],
              percentiles: { p75: 1746 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.se/",
          normalizedUrl: "https://www.yara.se",
        },
      },
      extractedResults: {
        fcp: 1331,
        lcp: 1746,
        cls: "0.00",
        fid: 13,
      },
      timestamp: 1650880993110,
    },
    {
      url: "https://www.yara.dk/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "https://www.yara.dk" },
          metrics: {
            cumulative_layout_shift: {
              histogram: [
                { start: "0.00", end: "0.10", density: 0.838 },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.13640000000000002,
                },
                { start: "0.25", density: 0.025599999999999973 },
              ],
              percentiles: { p75: "0.06" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8788636590977295 },
                { start: 1800, end: 3000, density: 0.09342802840852255 },
                { start: 3000, density: 0.027708312493748017 },
              ],
              percentiles: { p75: 1366 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9647 },
                { start: 100, end: 300, density: 0.0193 },
                { start: 300, density: 0.01599999999999997 },
              ],
              percentiles: { p75: 10 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8935 },
                { start: 2500, end: 4000, density: 0.0841 },
                { start: 4000, density: 0.022400000000000014 },
              ],
              percentiles: { p75: 1852 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.dk/",
          normalizedUrl: "https://www.yara.dk",
        },
      },
      extractedResults: {
        fcp: 1366,
        lcp: 1852,
        cls: "0.06",
        fid: 10,
      },
      timestamp: 1650880993439,
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
                  density: 0.9503602882305845,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.017614091273018415,
                },
                { start: "0.25", density: 0.03202562049639712 },
              ],
              percentiles: { p75: "0.00" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.3187016287397483 },
                { start: 1800, end: 3000, density: 0.3441145893496592 },
                { start: 3000, density: 0.33718378191059245 },
              ],
              percentiles: { p75: 3493 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9619533009363517 },
                { start: 100, end: 300, density: 0.03377977954249141 },
                { start: 300, density: 0.004266919521156809 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.44579633260292933 },
                { start: 2500, end: 4000, density: 0.3321992849728983 },
                { start: 4000, density: 0.22200438242417242 },
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
        fcp: 3493,
        lcp: 3855,
        cls: "0.00",
        fid: 12,
      },
      timestamp: 1650880993676,
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
                  density: 0.9256782334384858,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.02965299684542587,
                },
                { start: "0.25", density: 0.04466876971608839 },
              ],
              percentiles: { p75: "0.00" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.42493280430052477 },
                { start: 1800, end: 3000, density: 0.30526046333034695 },
                { start: 3000, density: 0.2698067323691284 },
              ],
              percentiles: { p75: 3128 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9463642428285524 },
                { start: 100, end: 300, density: 0.04216144096064043 },
                { start: 300, density: 0.011474316210807188 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.5371293456032706 },
                { start: 2500, end: 4000, density: 0.2797162576687109 },
                { start: 4000, density: 0.1831543967280185 },
              ],
              percentiles: { p75: 3542 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.ar/",
          normalizedUrl: "https://www.yara.com.ar",
        },
      },
      extractedResults: {
        fcp: 3128,
        lcp: 3542,
        cls: "0.00",
        fid: 13,
      },
      timestamp: 1650880994023,
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
                  density: 0.9726288230393907,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.010472450315363561,
                },
                { start: "0.25", density: 0.016898726645245738 },
              ],
              percentiles: { p75: "0.00" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5534515819750712 },
                { start: 1800, end: 3000, density: 0.27660594439117886 },
                { start: 3000, density: 0.16994247363374992 },
              ],
              percentiles: { p75: 2474 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9464600655076846 },
                { start: 100, end: 300, density: 0.04257999496094734 },
                { start: 300, density: 0.010959939531368115 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6964886964886964 },
                { start: 2500, end: 4000, density: 0.17328042328042326 },
                { start: 4000, density: 0.13023088023088036 },
              ],
              percentiles: { p75: 2794 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.cr/",
          normalizedUrl: "https://www.yara.cr",
        },
      },
      extractedResults: {
        fcp: 2474,
        lcp: 2794,
        cls: "0.00",
        fid: 13,
      },
      timestamp: 1650880994361,
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
                  density: 0.8710665880966411,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.10170889805539185,
                },
                { start: "0.25", density: 0.027224513847966984 },
              ],
              percentiles: { p75: "0.00" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7821255467549347 },
                { start: 1800, end: 3000, density: 0.15888402884501696 },
                { start: 3000, density: 0.05899042440004828 },
              ],
              percentiles: { p75: 1708 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9575053866411298 },
                { start: 100, end: 300, density: 0.02848934642087622 },
                { start: 300, density: 0.014005266937993914 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8139891483840519 },
                { start: 2500, end: 4000, density: 0.1342297711724462 },
                { start: 4000, density: 0.05178108044350191 },
              ],
              percentiles: { p75: 2171 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.gr/",
          normalizedUrl: "https://www.yara.gr",
        },
      },
      extractedResults: {
        fcp: 1708,
        lcp: 2171,
        cls: "0.00",
        fid: 13,
      },
      timestamp: 1650880994747,
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
                  density: 0.7391260873912608,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.17788221177882213,
                },
                { start: "0.25", density: 0.0829917008299169 },
              ],
              percentiles: { p75: "0.10" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8884999999999998 },
                { start: 1800, end: 3000, density: 0.08250000000000002 },
                { start: 3000, density: 0.028999999999999967 },
              ],
              percentiles: { p75: 1288 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9752123938030984 },
                { start: 100, end: 300, density: 0.011094452773613192 },
                { start: 300, density: 0.013693153423288317 },
              ],
              percentiles: { p75: 9 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8775377537753775 },
                { start: 2500, end: 4000, density: 0.08565856585658566 },
                { start: 4000, density: 0.03680368036803688 },
              ],
              percentiles: { p75: 1881 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.be/",
          normalizedUrl: "https://www.yara.be",
        },
      },
      extractedResults: { fcp: 1288, lcp: 1881, cls: "0.10", fid: 9 },
      timestamp: 1650880995136,
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
                  density: 0.9649264261237654,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.02076194315662165,
                },
                { start: "0.25", density: 0.014311630719612974 },
              ],
              percentiles: { p75: "0.00" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5543859649122808 },
                { start: 1800, end: 3000, density: 0.3281733746130031 },
                { start: 3000, density: 0.11744066047471616 },
              ],
              percentiles: { p75: 2564 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.977212389380531 },
                { start: 100, end: 300, density: 0.0170353982300885 },
                { start: 300, density: 0.005752212389380532 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6667691676916769 },
                { start: 2500, end: 4000, density: 0.253280032800328 },
                { start: 4000, density: 0.07995079950799512 },
              ],
              percentiles: { p75: 2805 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.co.nz/",
          normalizedUrl: "https://www.yara.co.nz",
        },
      },
      extractedResults: {
        fcp: 2564,
        lcp: 2805,
        cls: "0.00",
        fid: 12,
      },
      timestamp: 1650880995403,
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
                { start: 0, end: 100, density: 0.9586822237474261 },
                { start: 100, end: 300, density: 0.02814001372683596 },
                { start: 300, density: 0.013177762525737761 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7468893254747874 },
                { start: 2500, end: 4000, density: 0.15134250163719717 },
                { start: 4000, density: 0.10176817288801553 },
              ],
              percentiles: { p75: 2545 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9659651857625358,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.009612886464016628,
                },
                { start: "0.25", density: 0.02442192777344763 },
              ],
              percentiles: { p75: "0.00" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6413955928646373 },
                { start: 1800, end: 3000, density: 0.22875131164742887 },
                { start: 3000, density: 0.12985309548793372 },
              ],
              percentiles: { p75: 2166 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.gt/",
          normalizedUrl: "https://www.yara.com.gt",
        },
      },
      extractedResults: {
        fcp: 2166,
        lcp: 2545,
        cls: "0.00",
        fid: 13,
      },
      timestamp: 1650880995794,
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
                  density: 0.8772754550910182,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.08081616323264652,
                },
                { start: "0.25", density: 0.04190838167633527 },
              ],
              percentiles: { p75: "0.03" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.9110822164432887 },
                { start: 1800, end: 3000, density: 0.0627125425085017 },
                { start: 3000, density: 0.026205241048209576 },
              ],
              percentiles: { p75: 1233 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9658897669300791 },
                { start: 100, end: 300, density: 0.02080624187256177 },
                { start: 300, density: 0.013303991197359241 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.9021293611916427 },
                { start: 2500, end: 4000, density: 0.07467759672098372 },
                { start: 4000, density: 0.023193042087373748 },
              ],
              percentiles: { p75: 1755 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yaraagri.cz/",
          normalizedUrl: "https://www.yaraagri.cz",
        },
      },
      extractedResults: {
        fcp: 1233,
        lcp: 1755,
        cls: "0.03",
        fid: 13,
      },
      timestamp: 1650880996238,
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
                  density: 0.786021397860214,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.14718528147185284,
                },
                { start: "0.25", density: 0.06679332066793311 },
              ],
              percentiles: { p75: "0.07" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7946000000000003 },
                { start: 1800, end: 3000, density: 0.12250000000000008 },
                { start: 3000, density: 0.08289999999999968 },
              ],
              percentiles: { p75: 1598 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9700940188037608 },
                { start: 100, end: 300, density: 0.023304660932186444 },
                { start: 300, density: 0.006601320264052809 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8298170182981698 },
                { start: 2500, end: 4000, density: 0.09719028097190271 },
                { start: 4000, density: 0.07299270072992751 },
              ],
              percentiles: { p75: 2028 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.my/",
          normalizedUrl: "https://www.yara.my",
        },
      },
      extractedResults: {
        fcp: 1598,
        lcp: 2028,
        cls: "0.07",
        fid: 13,
      },
      timestamp: 1650880996518,
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
                  density: 0.9627035213934116,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.02101476713366149,
                },
                { start: "0.25", density: 0.016281711472926928 },
              ],
              percentiles: { p75: "0.00" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8533798179353091 },
                { start: 1800, end: 3000, density: 0.11679256246368391 },
                { start: 3000, density: 0.029827619601007046 },
              ],
              percentiles: { p75: 1486 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9410430839002266 },
                { start: 100, end: 300, density: 0.030612244897959176 },
                { start: 300, density: 0.02834467120181412 },
              ],
              percentiles: { p75: 15 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8476245654692932 },
                { start: 2500, end: 4000, density: 0.12012359984550013 },
                { start: 4000, density: 0.03225183468520659 },
              ],
              percentiles: { p75: 2082 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.nl/",
          normalizedUrl: "https://www.yara.nl",
        },
      },
      extractedResults: {
        fcp: 1486,
        lcp: 2082,
        cls: "0.00",
        fid: 15,
      },
      timestamp: 1650880996754,
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
                  density: 0.7473494698939789,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.11952390478095619,
                },
                { start: "0.25", density: 0.13312662532506486 },
              ],
              percentiles: { p75: "0.10" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6247750449910022 },
                { start: 1800, end: 3000, density: 0.14967006598680274 },
                { start: 3000, density: 0.22555488902219512 },
              ],
              percentiles: { p75: 2651 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6655665566556654 },
                { start: 2500, end: 4000, density: 0.15151515151515144 },
                { start: 4000, density: 0.18291829182918304 },
              ],
              percentiles: { p75: 3148 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.cm/en-cm/",
          normalizedUrl: "https://www.yara.cm",
        },
      },
      extractedResults: { fcp: 2651, lcp: 3148, cls: "0.10" },
      timestamp: 1650880997169,
    },
  ],
};
