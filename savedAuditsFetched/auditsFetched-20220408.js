export const audit13 = {
  date: "2022-04-08",
  legacyAudit: true,
  legacyAuditType: 3,
  legacyAuditId: "08/04/2022-legacy-audit",
  devicesIncluded: ["PHONE", "TABLET", "DESKTOP", "ALL"],
  audits: [
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
                  density: 0.9544055625213724,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.01196853983813975,
                },
                { start: "0.25", density: 0.03362589764048785 },
              ],
              percentiles: { p75: "0.00" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.35016641799609965 },
                { start: 1800, end: 3000, density: 0.32617927235166005 },
                { start: 3000, density: 0.3236543096522403 },
              ],
              percentiles: { p75: 3401 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9717069734679503 },
                { start: 100, end: 300, density: 0.026414651326602492 },
                { start: 300, density: 0.0018783752054472884 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.47474167623421387 },
                { start: 2500, end: 4000, density: 0.321354764638347 },
                { start: 4000, density: 0.20390355912743904 },
              ],
              percentiles: { p75: 3757 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.bo/",
          normalizedUrl: "https://www.yara.bo",
        },
      },
      extractedResults: {
        fcp: 3401,
        lcp: 3757,
        cls: "0.00",
        fid: 12,
      },
      timestamp: 1649424791070,
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
                  density: 0.9187081291870812,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.060793920607939214,
                },
                { start: "0.25", density: 0.02049795020497952 },
              ],
              percentiles: { p75: "0.02" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5674999999999993 },
                { start: 1800, end: 3000, density: 0.2609999999999998 },
                { start: 3000, density: 0.1715000000000009 },
              ],
              percentiles: { p75: 2616 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9523904780956193 },
                { start: 100, end: 300, density: 0.027105421084216846 },
                { start: 300, density: 0.020504100820163962 },
              ],
              percentiles: { p75: 11 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6593318663732743 },
                { start: 2500, end: 4000, density: 0.23124624924984993 },
                { start: 4000, density: 0.10942188437687582 },
              ],
              percentiles: { p75: 2967 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.ru/",
          normalizedUrl: "https://www.yara.ru",
        },
      },
      extractedResults: {
        fcp: 2616,
        lcp: 2967,
        cls: "0.02",
        fid: 11,
      },
      timestamp: 1649424791480,
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
                  density: 0.934007919049714,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.05821968030503006,
                },
                { start: "0.25", density: 0.007772400645255904 },
              ],
              percentiles: { p75: "0.00" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8144957671171839 },
                { start: 1800, end: 3000, density: 0.14154166047824152 },
                { start: 3000, density: 0.04396257240457462 },
              ],
              percentiles: { p75: 1609 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9511171090118459 },
                { start: 100, end: 300, density: 0.04213525266156846 },
                { start: 300, density: 0.006747638326585687 },
              ],
              percentiles: { p75: 15 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8526097271648871 },
                { start: 2500, end: 4000, density: 0.12114472123368919 },
                { start: 4000, density: 0.026245551601423642 },
              ],
              percentiles: { p75: 2065 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.lv/",
          normalizedUrl: "https://www.yara.lv",
        },
      },
      extractedResults: {
        fcp: 1609,
        lcp: 2065,
        cls: "0.00",
        fid: 15,
      },
      timestamp: 1649424791574,
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
                  density: 0.9228000000000001,
                },
                { start: "0.10", end: "0.25", density: 0.0564 },
                { start: "0.25", density: 0.020800000000000023 },
              ],
              percentiles: { p75: "0.01" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6527305461092225 },
                { start: 1800, end: 3000, density: 0.24184836967393497 },
                { start: 3000, density: 0.10542108421684254 },
              ],
              percentiles: { p75: 2059 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9765953190638128 },
                { start: 100, end: 300, density: 0.01740348069613923 },
                { start: 300, density: 0.00600120024004801 },
              ],
              percentiles: { p75: 11 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7330999999999996 },
                { start: 2500, end: 4000, density: 0.15859999999999996 },
                { start: 4000, density: 0.10830000000000044 },
              ],
              percentiles: { p75: 2621 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.pa/",
          normalizedUrl: "https://www.yara.com.pa",
        },
      },
      extractedResults: {
        fcp: 2059,
        lcp: 2621,
        cls: "0.01",
        fid: 11,
      },
      timestamp: 1649424791710,
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
                { start: 0, end: 100, density: 0.9438491213030432 },
                { start: 100, end: 300, density: 0.03371910272896127 },
                { start: 300, density: 0.022431775967995338 },
              ],
              percentiles: { p75: 15 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8261894556365197 },
                { start: 2500, end: 4000, density: 0.1219459922846121 },
                { start: 4000, density: 0.05186455207886827 },
              ],
              percentiles: { p75: 2145 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9583097795364611,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.024731486715658557,
                },
                { start: "0.25", density: 0.016958733747880154 },
              ],
              percentiles: { p75: "0.01" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.792582025677603 },
                { start: 1800, end: 3000, density: 0.1436519258202567 },
                { start: 3000, density: 0.06376604850214018 },
              ],
              percentiles: { p75: 1618 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.de/",
          normalizedUrl: "https://www.yara.de",
        },
      },
      extractedResults: {
        fcp: 1618,
        lcp: 2145,
        cls: "0.01",
        fid: 15,
      },
      timestamp: 1649424791799,
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
                  density: 0.9580458698489651,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.030020510908073842,
                },
                { start: "0.25", density: 0.011933619242961031 },
              ],
              percentiles: { p75: "0.00" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8257002271006815 },
                { start: 1800, end: 3000, density: 0.1351249053747161 },
                { start: 3000, density: 0.039174867524602364 },
              ],
              percentiles: { p75: 1581 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9390380313199106 },
                { start: 100, end: 300, density: 0.03467561521252797 },
                { start: 300, density: 0.02628635346756146 },
              ],
              percentiles: { p75: 15 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8282022044849867 },
                { start: 2500, end: 4000, density: 0.13017863930064616 },
                { start: 4000, density: 0.04161915621436714 },
              ],
              percentiles: { p75: 2234 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.nl/",
          normalizedUrl: "https://www.yara.nl",
        },
      },
      extractedResults: {
        fcp: 1581,
        lcp: 2234,
        cls: "0.00",
        fid: 15,
      },
      timestamp: 1649424791940,
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
                  density: 0.8380000000000001,
                },
                { start: "0.10", end: "0.25", density: 0.0978 },
                { start: "0.25", density: 0.0642 },
              ],
              percentiles: { p75: "0.06" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6213999999999993 },
                { start: 1800, end: 3000, density: 0.2226999999999997 },
                { start: 3000, density: 0.15590000000000095 },
              ],
              percentiles: { p75: 2362 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9164916491649167 },
                { start: 100, end: 300, density: 0.03260326032603262 },
                { start: 300, density: 0.05090509050905059 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6646329265853157 },
                { start: 2500, end: 4000, density: 0.19223844768953752 },
                { start: 4000, density: 0.14312862572514676 },
              ],
              percentiles: { p75: 3079 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.us/",
          normalizedUrl: "https://www.yara.us",
        },
      },
      extractedResults: {
        fcp: 2362,
        lcp: 3079,
        cls: "0.06",
        fid: 13,
      },
      timestamp: 1649424792097,
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
                  density: 0.9369020964787298,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.03277020150620802,
                },
                { start: "0.25", density: 0.030327702015062075 },
              ],
              percentiles: { p75: "0.01" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5270946227594832 },
                { start: 1800, end: 3000, density: 0.32305127136306794 },
                { start: 3000, density: 0.14985410587744885 },
              ],
              percentiles: { p75: 2625 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9786284640676374 },
                { start: 100, end: 300, density: 0.021371535932362615 },
                { start: 300 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.680835734870317 },
                { start: 2500, end: 4000, density: 0.22962124331000414 },
                { start: 4000, density: 0.08954302181967888 },
              ],
              percentiles: { p75: 2834 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.co.nz/",
          normalizedUrl: "https://www.yara.co.nz",
        },
      },
      extractedResults: {
        fcp: 2625,
        lcp: 2834,
        cls: "0.01",
        fid: 12,
      },
      timestamp: 1649424792205,
    },
    {
      url: "https://www.yara.in/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "https://www.yara.in" },
          metrics: {
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7382523495300936 },
                { start: 2500, end: 4000, density: 0.1586682663467306 },
                { start: 4000, density: 0.10307938412317584 },
              ],
              percentiles: { p75: 2582 },
            },
            cumulative_layout_shift: {
              histogram: [
                { start: "0.00", end: "0.10", density: 0.8026 },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.13130000000000003,
                },
                { start: "0.25", density: 0.06610000000000006 },
              ],
              percentiles: { p75: "0.06" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6699660067986397 },
                { start: 1800, end: 3000, density: 0.20455908818236335 },
                { start: 3000, density: 0.12547490501899677 },
              ],
              percentiles: { p75: 2163 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9667966796679667 },
                { start: 100, end: 300, density: 0.0218021802180218 },
                { start: 300, density: 0.011401140114011532 },
              ],
              percentiles: { p75: 13 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.in/",
          normalizedUrl: "https://www.yara.in",
        },
      },
      extractedResults: {
        fcp: 2163,
        lcp: 2582,
        cls: "0.06",
        fid: 13,
      },
      timestamp: 1649424792398,
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
                { start: "0.00", end: "0.10", density: 0.7899 },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.14029999999999998,
                },
                { start: "0.25", density: 0.06979999999999993 },
              ],
              percentiles: { p75: "0.07" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7827782778277823 },
                { start: 1800, end: 3000, density: 0.13311331133113302 },
                { start: 3000, density: 0.08410841084108475 },
              ],
              percentiles: { p75: 1691 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9770977097709771 },
                { start: 100, end: 300, density: 0.017801780178017805 },
                { start: 300, density: 0.005100510051005103 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8245000000000002 },
                { start: 2500, end: 4000, density: 0.10320000000000006 },
                { start: 4000, density: 0.07229999999999981 },
              ],
              percentiles: { p75: 2090 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.my/",
          normalizedUrl: "https://www.yara.my",
        },
      },
      extractedResults: {
        fcp: 1691,
        lcp: 2090,
        cls: "0.07",
        fid: 13,
      },
      timestamp: 1649424792492,
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
                  density: 0.798979897989799,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.15441544154415443,
                },
                { start: "0.25", density: 0.04660466046604664 },
              ],
              percentiles: { p75: "0.07" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8701129887011299 },
                { start: 1800, end: 3000, density: 0.0921907809219078 },
                { start: 3000, density: 0.03769623037696235 },
              ],
              percentiles: { p75: 1379 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9638855542216889 },
                { start: 100, end: 300, density: 0.021108443377350947 },
                { start: 300, density: 0.01500600240096035 },
              ],
              percentiles: { p75: 10 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8542999999999998 },
                { start: 2500, end: 4000, density: 0.10050000000000005 },
                { start: 4000, density: 0.0452000000000002 },
              ],
              percentiles: { p75: 2040 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.nl/",
          normalizedUrl: "https://www.yara.nl",
        },
      },
      extractedResults: {
        fcp: 1379,
        lcp: 2040,
        cls: "0.07",
        fid: 10,
      },
      timestamp: 1649424792590,
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
                  density: 0.8240000000000001,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.13190000000000002,
                },
                { start: "0.25", density: 0.044099999999999945 },
              ],
              percentiles: { p75: "0.06" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7102579484103169 },
                { start: 1800, end: 3000, density: 0.17446510697860404 },
                { start: 3000, density: 0.11527694461107901 },
              ],
              percentiles: { p75: 1998 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9347195841247624 },
                { start: 100, end: 300, density: 0.03858842347295811 },
                { start: 300, density: 0.02669199240227946 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7618999999999989 },
                { start: 2500, end: 4000, density: 0.14759999999999973 },
                { start: 4000, density: 0.09050000000000127 },
              ],
              percentiles: { p75: 2480 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.fr/",
          normalizedUrl: "https://www.yara.fr",
        },
      },
      extractedResults: {
        fcp: 1998,
        lcp: 2480,
        cls: "0.06",
        fid: 12,
      },
      timestamp: 1649424792686,
    },
    {
      url: "https://www.yara.fi/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "https://www.yara.fi" },
          metrics: {
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.9002000000000001 },
                { start: 1800, end: 3000, density: 0.07580000000000003 },
                { start: 3000, density: 0.02399999999999987 },
              ],
              percentiles: { p75: 1301 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9370188943317005 },
                { start: 100, end: 300, density: 0.03139058282515247 },
                { start: 300, density: 0.03159052284314703 },
              ],
              percentiles: { p75: 14 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.854185418541854 },
                { start: 2500, end: 4000, density: 0.11741174117411737 },
                { start: 4000, density: 0.028402840284028567 },
              ],
              percentiles: { p75: 2033 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.7924792479247923,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.15861586158615862,
                },
                { start: "0.25", density: 0.04890489048904891 },
              ],
              percentiles: { p75: "0.07" },
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
        lcp: 2033,
        cls: "0.07",
        fid: 14,
      },
      timestamp: 1649424792783,
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
                { start: 0, end: 2500, density: 0.7078999999999989 },
                { start: 2500, end: 4000, density: 0.16169999999999982 },
                { start: 4000, density: 0.13040000000000124 },
              ],
              percentiles: { p75: 2773 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9358064193580642,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.0432956704329567,
                },
                { start: "0.25", density: 0.02089791020897909 },
              ],
              percentiles: { p75: "0.01" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6171 },
                { start: 1800, end: 3000, density: 0.2388 },
                { start: 3000, density: 0.14409999999999995 },
              ],
              percentiles: { p75: 2279 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.953509298140372 },
                { start: 100, end: 300, density: 0.036492701459708066 },
                { start: 300, density: 0.009998000399920017 },
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
        fcp: 2279,
        lcp: 2773,
        cls: "0.01",
        fid: 12,
      },
      timestamp: 1649424792875,
    },
    {
      url: "https://www.yara.fr/",
      deviceTargeted: "PHONE",
      results: {
        record: {
          key: { formFactor: "PHONE", origin: "https://www.yara.fr" },
          metrics: {
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6726254002134463 },
                { start: 1800, end: 3000, density: 0.19143543223052273 },
                { start: 3000, density: 0.13593916755603092 },
              ],
              percentiles: { p75: 2140 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9257432342354351 },
                { start: 100, end: 300, density: 0.045860551926409816 },
                { start: 300, density: 0.028396213838154983 },
              ],
              percentiles: { p75: 14 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7479058635819692 },
                { start: 2500, end: 4000, density: 0.1552984975402204 },
                { start: 4000, density: 0.09679563887781031 },
              ],
              percentiles: { p75: 2539 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9109616145627225,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.06766917293233082,
                },
                { start: "0.25", density: 0.021369212504946597 },
              ],
              percentiles: { p75: "0.00" },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.fr/",
          normalizedUrl: "https://www.yara.fr",
        },
      },
      extractedResults: {
        fcp: 2140,
        lcp: 2539,
        cls: "0.00",
        fid: 14,
      },
      timestamp: 1649424792971,
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
                  density: 0.8859781379570297,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.07651715039577836,
                },
                { start: "0.25", density: 0.037504711647191866 },
              ],
              percentiles: { p75: "0.00" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7236335642802152 },
                { start: 1800, end: 3000, density: 0.20727482678983825 },
                { start: 3000, density: 0.06909160892994651 },
              ],
              percentiles: { p75: 1895 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9891580161476355 },
                { start: 100, end: 300, density: 0.010841983852364477 },
                { start: 300 },
              ],
              percentiles: { p75: 11 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7881668283220173 },
                { start: 2500, end: 4000, density: 0.1503394762366635 },
                { start: 4000, density: 0.06149369544131914 },
              ],
              percentiles: { p75: 2308 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.kr/",
          normalizedUrl: "https://www.yara.kr",
        },
      },
      extractedResults: {
        fcp: 1895,
        lcp: 2308,
        cls: "0.00",
        fid: 11,
      },
      timestamp: 1649424793115,
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
                  density: 0.8080191980801918,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.15218478152184783,
                },
                { start: "0.25", density: 0.03979602039796022 },
              ],
              percentiles: { p75: "0.05" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7468746874687473 },
                { start: 1800, end: 3000, density: 0.18921892189218928 },
                { start: 3000, density: 0.06390639063906346 },
              ],
              percentiles: { p75: 1809 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9724917475242573 },
                { start: 100, end: 300, density: 0.018905671701510453 },
                { start: 300, density: 0.008602580774232234 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7640471905618875 },
                { start: 2500, end: 4000, density: 0.15766846630673867 },
                { start: 4000, density: 0.07828434313137371 },
              ],
              percentiles: { p75: 2428 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.co.th/",
          normalizedUrl: "https://www.yara.co.th",
        },
      },
      extractedResults: {
        fcp: 1809,
        lcp: 2428,
        cls: "0.05",
        fid: 12,
      },
      timestamp: 1649424793261,
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
                { start: 0, end: 1800, density: 0.7851644506648005 },
                { start: 1800, end: 3000, density: 0.16575027491752473 },
                { start: 3000, density: 0.04908527441767493 },
              ],
              percentiles: { p75: 1702 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9939993999399941 },
                { start: 100, end: 300, density: 0.006000600060006002 },
                { start: 300 },
              ],
              percentiles: { p75: 8 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8106310631063102 },
                { start: 2500, end: 4000, density: 0.11936193619361926 },
                { start: 4000, density: 0.0700070007000706 },
              ],
              percentiles: { p75: 2168 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9226077392260774,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.05389461053894611,
                },
                { start: "0.25", density: 0.023497650234976512 },
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
      extractedResults: { fcp: 1702, lcp: 2168, cls: "0.01", fid: 8 },
      timestamp: 1649424793361,
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
                { start: 0, end: 100, density: 0.959988608856614 },
                { start: 100, end: 300, density: 0.03417343015805211 },
                { start: 300, density: 0.005837960985333904 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.572869493618772 },
                { start: 2500, end: 4000, density: 0.28097982708933666 },
                { start: 4000, density: 0.14615067929189135 },
              ],
              percentiles: { p75: 3273 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9271712496596788,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.020691532806969778,
                },
                { start: "0.25", density: 0.052137217533351446 },
              ],
              percentiles: { p75: "0.00" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.3639126830616185 },
                { start: 1800, end: 3000, density: 0.40812379110251384 },
                { start: 3000, density: 0.22796352583586754 },
              ],
              percentiles: { p75: 2948 },
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
        lcp: 3273,
        cls: "0.00",
        fid: 12,
      },
      timestamp: 1649424793461,
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
                { start: 0, end: 100, density: 0.9019182652210168 },
                { start: 100, end: 300, density: 0.04420350291909921 },
                { start: 300, density: 0.053878231859884065 },
              ],
              percentiles: { p75: 16 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.5016017534985668 },
                { start: 2500, end: 4000, density: 0.29978081267914347 },
                { start: 4000, density: 0.1986174338222897 },
              ],
              percentiles: { p75: 3676 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9368924040204316,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.030153237765694514,
                },
                { start: "0.25", density: 0.03295435821387383 },
              ],
              percentiles: { p75: "0.01" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.38693382724364217 },
                { start: 1800, end: 3000, density: 0.3212662064320579 },
                { start: 3000, density: 0.2917999663242998 },
              ],
              percentiles: { p75: 3269 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.co.uk/",
          normalizedUrl: "https://www.yara.co.uk",
        },
      },
      extractedResults: {
        fcp: 3269,
        lcp: 3676,
        cls: "0.01",
        fid: 16,
      },
      timestamp: 1649424793605,
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
                { start: "0.00", end: "0.10", density: 0.6924 },
                { start: "0.10", end: "0.25", density: 0.1394 },
                { start: "0.25", density: 0.16820000000000004 },
              ],
              percentiles: { p75: "0.15" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5702570257025702 },
                { start: 1800, end: 3000, density: 0.18071807180718066 },
                { start: 3000, density: 0.249024902490249 },
              ],
              percentiles: { p75: 2933 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6201500000000008 },
                { start: 2500, end: 4000, density: 0.18395000000000014 },
                { start: 4000, density: 0.19589999999999919 },
              ],
              percentiles: { p75: 3409 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.cm/en-cm/",
          normalizedUrl: "https://www.yara.cm",
        },
      },
      extractedResults: { fcp: 2933, lcp: 3409, cls: "0.15" },
      timestamp: 1649424793765,
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
                  density: 0.949134199134199,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.030303030303030297,
                },
                { start: "0.25", density: 0.02056277056277055 },
              ],
              percentiles: { p75: "0.00" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8256410256410257 },
                { start: 1800, end: 3000, density: 0.123992673992674 },
                { start: 3000, density: 0.050366300366300305 },
              ],
              percentiles: { p75: 1624 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9483751160631381 },
                { start: 100, end: 300, density: 0.018384401114206122 },
                { start: 300, density: 0.03324048282265577 },
              ],
              percentiles: { p75: 16 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8388634280476625 },
                { start: 2500, end: 4000, density: 0.11787351054078826 },
                { start: 4000, density: 0.04326306141154926 },
              ],
              percentiles: { p75: 2206 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.be/",
          normalizedUrl: "https://www.yara.be",
        },
      },
      extractedResults: {
        fcp: 1624,
        lcp: 2206,
        cls: "0.00",
        fid: 16,
      },
      timestamp: 1649424793863,
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
                  density: 0.9414715719063546,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.026369951119115,
                },
                { start: "0.25", density: 0.03215847697453045 },
              ],
              percentiles: { p75: "0.00" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.4821126577338347 },
                { start: 1800, end: 3000, density: 0.34877065174970623 },
                { start: 3000, density: 0.1691166905164589 },
              ],
              percentiles: { p75: 2622 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9089414442898696 },
                { start: 100, end: 300, density: 0.0405969394207664 },
                { start: 300, density: 0.050461616289364006 },
              ],
              percentiles: { p75: 14 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.5832467532467536 },
                { start: 2500, end: 4000, density: 0.2967532467532471 },
                { start: 4000, density: 0.11999999999999929 },
              ],
              percentiles: { p75: 3138 },
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
        lcp: 3138,
        cls: "0.00",
        fid: 14,
      },
      timestamp: 1649424794020,
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
                { start: "0.00", end: "0.10", density: 0.8234 },
                { start: "0.10", end: "0.25", density: 0.1374 },
                { start: "0.25", density: 0.03919999999999997 },
              ],
              percentiles: { p75: "0.06" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.9258074192580743 },
                { start: 1800, end: 3000, density: 0.059394060593940604 },
                { start: 3000, density: 0.014798520147985226 },
              ],
              percentiles: { p75: 1220 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9690154922538732 },
                { start: 100, end: 300, density: 0.013293353323338336 },
                { start: 300, density: 0.017691154422788572 },
              ],
              percentiles: { p75: 11 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.9143000000000002 },
                { start: 2500, end: 4000, density: 0.06960000000000001 },
                { start: 4000, density: 0.016099999999999753 },
              ],
              percentiles: { p75: 1714 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.se/",
          normalizedUrl: "https://www.yara.se",
        },
      },
      extractedResults: {
        fcp: 1220,
        lcp: 1714,
        cls: "0.06",
        fid: 11,
      },
      timestamp: 1649424794191,
    },
    {
      url: "https://www.yara.cm/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "https://www.yara.cm" },
          metrics: {
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5702570257025702 },
                { start: 1800, end: 3000, density: 0.18071807180718066 },
                { start: 3000, density: 0.249024902490249 },
              ],
              percentiles: { p75: 2933 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6201500000000008 },
                { start: 2500, end: 4000, density: 0.18395000000000014 },
                { start: 4000, density: 0.19589999999999919 },
              ],
              percentiles: { p75: 3409 },
            },
            cumulative_layout_shift: {
              histogram: [
                { start: "0.00", end: "0.10", density: 0.6924 },
                { start: "0.10", end: "0.25", density: 0.1394 },
                { start: "0.25", density: 0.16820000000000004 },
              ],
              percentiles: { p75: "0.15" },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.cm/",
          normalizedUrl: "https://www.yara.cm",
        },
      },
      extractedResults: { fcp: 2933, lcp: 3409, cls: "0.15" },
      timestamp: 1649424794305,
    },
    {
      url: "https://www.yara.ci/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "https://www.yara.ci" },
          metrics: {
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.922992299229923,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.046304630463046316,
                },
                { start: "0.25", density: 0.030703070307030705 },
              ],
              percentiles: { p75: "0.01" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5459183673469364 },
                { start: 1800, end: 3000, density: 0.20518207282913078 },
                { start: 3000, density: 0.24889955982393297 },
              ],
              percentiles: { p75: 3142 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9522999999999999 },
                { start: 100, end: 300, density: 0.0344 },
                { start: 300, density: 0.01329999999999998 },
              ],
              percentiles: { p75: 11 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.5961692338467682 },
                { start: 2500, end: 4000, density: 0.1883876775355067 },
                { start: 4000, density: 0.21544308861772507 },
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
        fcp: 3142,
        lcp: 3795,
        cls: "0.01",
        fid: 11,
      },
      timestamp: 1649424794404,
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
                  density: 0.9176917691769176,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.04690469046904691,
                },
                { start: "0.25", density: 0.0354035403540354 },
              ],
              percentiles: { p75: "0.02" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.85048504850485 },
                { start: 1800, end: 3000, density: 0.10011001100110008 },
                { start: 3000, density: 0.04940494049404996 },
              ],
              percentiles: { p75: 1418 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9556088782243553 },
                { start: 100, end: 300, density: 0.022895420915816842 },
                { start: 300, density: 0.021495700859827976 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8643364336433641 },
                { start: 2500, end: 4000, density: 0.09555955595559552 },
                { start: 4000, density: 0.04010401040104044 },
              ],
              percentiles: { p75: 1865 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.it/",
          normalizedUrl: "https://www.yara.it",
        },
      },
      extractedResults: {
        fcp: 1418,
        lcp: 1865,
        cls: "0.02",
        fid: 12,
      },
      timestamp: 1649424794512,
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
                  density: 0.8955000000000001,
                },
                { start: "0.10", end: "0.25", density: 0.0861 },
                { start: "0.25", density: 0.01839999999999998 },
              ],
              percentiles: { p75: "0.01" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7772 },
                { start: 1800, end: 3000, density: 0.16349999999999995 },
                { start: 3000, density: 0.059300000000000075 },
              ],
              percentiles: { p75: 1722 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9632 },
                { start: 100, end: 300, density: 0.023799999999999998 },
                { start: 300, density: 0.013000000000000126 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7927207279272066 },
                { start: 2500, end: 4000, density: 0.14698530146985292 },
                { start: 4000, density: 0.06029397060294052 },
              ],
              percentiles: { p75: 2293 },
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
        lcp: 2293,
        cls: "0.01",
        fid: 12,
      },
      timestamp: 1649424794625,
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
                { start: 0, end: 1800, density: 0.6574342565743425 },
                { start: 1800, end: 3000, density: 0.1983801619838016 },
                { start: 3000, density: 0.14418558144185592 },
              ],
              percentiles: { p75: 2319 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9794 },
                { start: 100, end: 300, density: 0.017300000000000003 },
                { start: 300, density: 0.0033000000000000004 },
              ],
              percentiles: { p75: 9 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6848000000000002 },
                { start: 2500, end: 4000, density: 0.17960000000000015 },
                { start: 4000, density: 0.13559999999999955 },
              ],
              percentiles: { p75: 2961 },
            },
            cumulative_layout_shift: {
              histogram: [
                { start: "0.00", end: "0.10", density: 0.8265 },
                { start: "0.10", end: "0.25", density: 0.1212 },
                { start: "0.25", density: 0.05229999999999998 },
              ],
              percentiles: { p75: "0.06" },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.co.za/",
          normalizedUrl: "https://www.yara.co.za",
        },
      },
      extractedResults: { fcp: 2319, lcp: 2961, cls: "0.06", fid: 9 },
      timestamp: 1649424794777,
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
                  density: 0.9728012201321808,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.014489069649211997,
                },
                { start: "0.25", density: 0.012709710218607005 },
              ],
              percentiles: { p75: "0.00" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8093534372604131 },
                { start: 1800, end: 3000, density: 0.14132379248658306 },
                { start: 3000, density: 0.049322770253003856 },
              ],
              percentiles: { p75: 1639 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9641726800860868 },
                { start: 100, end: 300, density: 0.023294087859222688 },
                { start: 300, density: 0.012533232054690514 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8542763982944573 },
                { start: 2500, end: 4000, density: 0.11010785051417109 },
                { start: 4000, density: 0.0356157511913717 },
              ],
              percentiles: { p75: 2024 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.hu/",
          normalizedUrl: "https://www.yara.hu",
        },
      },
      extractedResults: {
        fcp: 1639,
        lcp: 2024,
        cls: "0.00",
        fid: 12,
      },
      timestamp: 1649424794875,
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
                { start: 0, end: 1800, density: 0.5069506950695064 },
                { start: 1800, end: 3000, density: 0.2741274127412739 },
                { start: 3000, density: 0.21892189218921973 },
              ],
              percentiles: { p75: 2825 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9588000000000001 },
                { start: 100, end: 300, density: 0.030000000000000006 },
                { start: 300, density: 0.011199999999999943 },
              ],
              percentiles: { p75: 11 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.5977402259774015 },
                { start: 2500, end: 4000, density: 0.2383761623837614 },
                { start: 4000, density: 0.16388361163883713 },
              ],
              percentiles: { p75: 3257 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9083908390839084,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.0589058905890589,
                },
                { start: "0.25", density: 0.03270327032703269 },
              ],
              percentiles: { p75: "0.03" },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.ar/",
          normalizedUrl: "https://www.yara.com.ar",
        },
      },
      extractedResults: {
        fcp: 2825,
        lcp: 3257,
        cls: "0.03",
        fid: 11,
      },
      timestamp: 1649424795032,
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
                  density: 0.9516951695169517,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.032003200320032,
                },
                { start: "0.25", density: 0.016301630163016296 },
              ],
              percentiles: { p75: "0.01" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8354329134173161 },
                { start: 1800, end: 3000, density: 0.10897820435912811 },
                { start: 3000, density: 0.0555888822235558 },
              ],
              percentiles: { p75: 1473 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9597161135545781 },
                { start: 100, end: 300, density: 0.02439024390243902 },
                { start: 300, density: 0.015893642542982755 },
              ],
              percentiles: { p75: 11 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8481455563330995 },
                { start: 2500, end: 4000, density: 0.10206937918624406 },
                { start: 4000, density: 0.04978506448065645 },
              ],
              percentiles: { p75: 1959 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.pt/",
          normalizedUrl: "https://www.yara.pt",
        },
      },
      extractedResults: {
        fcp: 1473,
        lcp: 1959,
        cls: "0.01",
        fid: 11,
      },
      timestamp: 1649424795129,
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
                { start: "0.00", end: "0.10", density: 0.6924 },
                { start: "0.10", end: "0.25", density: 0.1394 },
                { start: "0.25", density: 0.16820000000000004 },
              ],
              percentiles: { p75: "0.15" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5702570257025702 },
                { start: 1800, end: 3000, density: 0.18071807180718066 },
                { start: 3000, density: 0.249024902490249 },
              ],
              percentiles: { p75: 3073 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6201500000000008 },
                { start: 2500, end: 4000, density: 0.18395000000000014 },
                { start: 4000, density: 0.19589999999999919 },
              ],
              percentiles: { p75: 3443 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.cm/",
          normalizedUrl: "https://www.yara.cm",
        },
      },
      extractedResults: { fcp: 3073, lcp: 3443, cls: "0.15" },
      timestamp: 1649424795220,
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
                  density: 0.8331389925373134,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.11240671641791043,
                },
                { start: "0.25", density: 0.05445429104477624 },
              ],
              percentiles: { p75: "0.02" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7680272909069517 },
                { start: 1800, end: 3000, density: 0.14304199505940468 },
                { start: 3000, density: 0.08893071403364367 },
              ],
              percentiles: { p75: 1738 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9735507246376812 },
                { start: 100, end: 300, density: 0.02149758454106281 },
                { start: 300, density: 0.004951690821256031 },
              ],
              percentiles: { p75: 15 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8202365616582739 },
                { start: 2500, end: 4000, density: 0.10902916032322287 },
                { start: 4000, density: 0.0707342780185033 },
              ],
              percentiles: { p75: 2113 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.my/",
          normalizedUrl: "https://www.yara.my",
        },
      },
      extractedResults: {
        fcp: 1738,
        lcp: 2113,
        cls: "0.02",
        fid: 15,
      },
      timestamp: 1649424795357,
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
                { start: 0, end: 1800, density: 0.720142602495544 },
                { start: 1800, end: 3000, density: 0.18728461081402267 },
                { start: 3000, density: 0.09257278669043346 },
              ],
              percentiles: { p75: 1943 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9502708025603152 },
                { start: 100, end: 300, density: 0.034711964549483006 },
                { start: 300, density: 0.015017232890201846 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.786433053154966 },
                { start: 2500, end: 4000, density: 0.14300935243281637 },
                { start: 4000, density: 0.07055759441221758 },
              ],
              percentiles: { p75: 2322 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9526731972146819,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.029387466068688774,
                },
                { start: "0.25", density: 0.017939336716629277 },
              ],
              percentiles: { p75: "0.00" },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.ua/",
          normalizedUrl: "https://www.yara.ua",
        },
      },
      extractedResults: {
        fcp: 1943,
        lcp: 2322,
        cls: "0.00",
        fid: 13,
      },
      timestamp: 1649424795516,
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
                  density: 0.7614238576142386,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.16518348165183483,
                },
                { start: "0.25", density: 0.07339266073392656 },
              ],
              percentiles: { p75: "0.09" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7219834049785064 },
                { start: 1800, end: 3000, density: 0.1730480855743277 },
                { start: 3000, density: 0.10496850944716599 },
              ],
              percentiles: { p75: 2022 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9723 },
                { start: 100, end: 300, density: 0.0169 },
                { start: 300, density: 0.010799999999999994 },
              ],
              percentiles: { p75: 10 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7205720572057206 },
                { start: 2500, end: 4000, density: 0.17241724172417247 },
                { start: 4000, density: 0.10701070107010703 },
              ],
              percentiles: { p75: 2790 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yaracanada.ca/",
          normalizedUrl: "https://www.yaracanada.ca",
        },
      },
      extractedResults: {
        fcp: 2022,
        lcp: 2790,
        cls: "0.09",
        fid: 10,
      },
      timestamp: 1649424795668,
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
                { start: "0.00", end: "0.10", density: 0.7675 },
                { start: "0.10", end: "0.25", density: 0.1601 },
                { start: "0.25", density: 0.07240000000000002 },
              ],
              percentiles: { p75: "0.08" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.872974594918984 },
                { start: 1800, end: 3000, density: 0.08881776355271055 },
                { start: 3000, density: 0.038207641528305525 },
              ],
              percentiles: { p75: 1347 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9687812687612566 },
                { start: 100, end: 300, density: 0.011707024214528714 },
                { start: 300, density: 0.019511707024214658 },
              ],
              percentiles: { p75: 10 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8657462985194078 },
                { start: 2500, end: 4000, density: 0.09913965586234494 },
                { start: 4000, density: 0.03511404561824718 },
              ],
              percentiles: { p75: 2017 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.be/fr-be/",
          normalizedUrl: "https://www.yara.be",
        },
      },
      extractedResults: {
        fcp: 1347,
        lcp: 2017,
        cls: "0.08",
        fid: 10,
      },
      timestamp: 1649424795770,
    },
    {
      url: "https://www.yara.lv/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "https://www.yara.lv" },
          metrics: {
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9647000000000001 },
                { start: 100, end: 300, density: 0.029900000000000003 },
                { start: 300, density: 0.005399999999999995 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8497 },
                { start: 2500, end: 4000, density: 0.1212 },
                { start: 4000, density: 0.029099999999999973 },
              ],
              percentiles: { p75: 2087 },
            },
            cumulative_layout_shift: {
              histogram: [
                { start: "0.00", end: "0.10", density: 0.9404 },
                { start: "0.10", end: "0.25", density: 0.0537 },
                { start: "0.25", density: 0.005899999999999998 },
              ],
              percentiles: { p75: "0.03" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8428314337132575 },
                { start: 1800, end: 3000, density: 0.11917616476704662 },
                { start: 3000, density: 0.037992401519695906 },
              ],
              percentiles: { p75: 1516 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.lv/",
          normalizedUrl: "https://www.yara.lv",
        },
      },
      extractedResults: {
        fcp: 1516,
        lcp: 2087,
        cls: "0.03",
        fid: 12,
      },
      timestamp: 1649424795882,
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
                { start: 0, end: 100, density: 0.9321445113478461 },
                { start: 100, end: 300, density: 0.027559055118110232 },
                { start: 300, density: 0.04029643353404352 },
              ],
              percentiles: { p75: 15 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8618642168944658 },
                { start: 2500, end: 4000, density: 0.10676674882366123 },
                { start: 4000, density: 0.03136903428187302 },
              ],
              percentiles: { p75: 2019 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9194010129927328,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.05439330543933053,
                },
                { start: "0.25", density: 0.02620568156793657 },
              ],
              percentiles: { p75: "0.00" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8298063935164338 },
                { start: 1800, end: 3000, density: 0.12629446195407473 },
                { start: 3000, density: 0.04389914452949144 },
              ],
              percentiles: { p75: 1537 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.dk/",
          normalizedUrl: "https://www.yara.dk",
        },
      },
      extractedResults: {
        fcp: 1537,
        lcp: 2019,
        cls: "0.00",
        fid: 15,
      },
      timestamp: 1649424796007,
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
                { start: 0, end: 1800, density: 0.7061173533083649 },
                { start: 1800, end: 3000, density: 0.22022471910112362 },
                { start: 3000, density: 0.0736579275905116 },
              ],
              percentiles: { p75: 1960 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.965096665369145 },
                { start: 100, end: 300, density: 0.024004152069547174 },
                { start: 300, density: 0.010899182561307869 },
              ],
              percentiles: { p75: 14 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7377995232718597 },
                { start: 2500, end: 4000, density: 0.17726759503199074 },
                { start: 4000, density: 0.08493288169614957 },
              ],
              percentiles: { p75: 2556 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.7770026161704248,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.1837548274573315,
                },
                { start: "0.25", density: 0.03924255637224367 },
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
        lcp: 2556,
        cls: "0.07",
        fid: 14,
      },
      timestamp: 1649424796192,
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
                  density: 0.8039608629022751,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.1761169397618767,
                },
                { start: "0.25", density: 0.019922197335848164 },
              ],
              percentiles: { p75: "0.07" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7484031227821147 },
                { start: 1800, end: 3000, density: 0.183818310858765 },
                { start: 3000, density: 0.06777856635912037 },
              ],
              percentiles: { p75: 1809 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9464734762303916 },
                { start: 100, end: 300, density: 0.02730211950664591 },
                { start: 300, density: 0.026224404262962502 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7902881536819633 },
                { start: 2500, end: 4000, density: 0.15291118226016834 },
                { start: 4000, density: 0.05680066405786836 },
              ],
              percentiles: { p75: 2316 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.pl/",
          normalizedUrl: "https://www.yara.pl",
        },
      },
      extractedResults: {
        fcp: 1809,
        lcp: 2316,
        cls: "0.07",
        fid: 13,
      },
      timestamp: 1649424796376,
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
                  density: 0.9809453105666914,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.005073001732244494,
                },
                { start: "0.25", density: 0.013981687701064088 },
              ],
              percentiles: { p75: "0.00" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8140547263681589 },
                { start: 1800, end: 3000, density: 0.12313432835820892 },
                { start: 3000, density: 0.06281094527363225 },
              ],
              percentiles: { p75: 1561 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9508767566223106 },
                { start: 100, end: 300, density: 0.0293495833851511 },
                { start: 300, density: 0.019773659992538183 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8390883120109301 },
                { start: 2500, end: 4000, density: 0.10700534095143456 },
                { start: 4000, density: 0.05390634703763538 },
              ],
              percentiles: { p75: 1981 },
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
        lcp: 1981,
        cls: "0.00",
        fid: 12,
      },
      timestamp: 1649424796564,
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
                  density: 0.9537805698900605,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.03881534664572582,
                },
                { start: "0.25", density: 0.007404083464213598 },
              ],
              percentiles: { p75: "0.00" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.913279132791328 },
                { start: 1800, end: 3000, density: 0.0770099367660343 },
                { start: 3000, density: 0.009710930442637756 },
              ],
              percentiles: { p75: 1376 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9070093457943925 },
                { start: 100, end: 300, density: 0.08271028037383178 },
                { start: 300, density: 0.010280373831775701 },
              ],
              percentiles: { p75: 16 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.9055206463195692 },
                { start: 2500, end: 4000, density: 0.08370736086175949 },
                { start: 4000, density: 0.010771992818671458 },
              ],
              percentiles: { p75: 1936 },
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
        lcp: 1936,
        cls: "0.00",
        fid: 16,
      },
      timestamp: 1649424796767,
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
                  density: 0.9393630284483736,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.05542332539952397,
                },
                { start: "0.25", density: 0.005213646152102456 },
              ],
              percentiles: { p75: "0.00" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8026225769669322 },
                { start: 1800, end: 3000, density: 0.1523375142531356 },
                { start: 3000, density: 0.04503990877993218 },
              ],
              percentiles: { p75: 1669 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9532411112381388 },
                { start: 100, end: 300, density: 0.01966388476048931 },
                { start: 300, density: 0.027095004001371836 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8198525241066364 },
                { start: 2500, end: 4000, density: 0.13726602382302897 },
                { start: 4000, density: 0.04288145207033458 },
              ],
              percentiles: { p75: 2171 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.ro/",
          normalizedUrl: "https://www.yara.ro",
        },
      },
      extractedResults: {
        fcp: 1669,
        lcp: 2171,
        cls: "0.00",
        fid: 12,
      },
      timestamp: 1649424797004,
    },
    {
      url: "https://www.yara.com.ec/",
      deviceTargeted: "PHONE",
      results: {
        record: {
          key: { formFactor: "PHONE", origin: "https://www.yara.com.ec" },
          metrics: {
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5379869344301936 },
                { start: 1800, end: 3000, density: 0.270626663440599 },
                { start: 3000, density: 0.19138640212920735 },
              ],
              percentiles: { p75: 2684 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9553815560526969 },
                { start: 100, end: 300, density: 0.032562764106388274 },
                { start: 300, density: 0.012055679840914725 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.654721753794267 },
                { start: 2500, end: 4000, density: 0.2173572633100459 },
                { start: 4000, density: 0.12792098289568715 },
              ],
              percentiles: { p75: 3016 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9532788854191689,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.017535431179437906,
                },
                { start: "0.25", density: 0.029185683401393245 },
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
      extractedResults: {
        fcp: 2684,
        lcp: 3016,
        cls: "0.00",
        fid: 13,
      },
      timestamp: 1649424797196,
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
                { start: "0.00", end: "0.10", density: 0.8597 },
                { start: "0.10", end: "0.25", density: 0.0803 },
                { start: "0.25", density: 0.059999999999999984 },
              ],
              percentiles: { p75: "0.03" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7467506498700253 },
                { start: 1800, end: 3000, density: 0.16806638672265528 },
                { start: 3000, density: 0.08518296340731943 },
              ],
              percentiles: { p75: 1838 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9504148755373387 },
                { start: 100, end: 300, density: 0.025992202339298213 },
                { start: 300, density: 0.023592922123362968 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7956408718256341 },
                { start: 2500, end: 4000, density: 0.13787242551489692 },
                { start: 4000, density: 0.06648670265946895 },
              ],
              percentiles: { p75: 2299 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.es/",
          normalizedUrl: "https://www.yara.es",
        },
      },
      extractedResults: {
        fcp: 1838,
        lcp: 2299,
        cls: "0.03",
        fid: 13,
      },
      timestamp: 1649424797384,
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
                { start: "0.00", end: "0.10", density: 0.9332 },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.055400000000000005,
                },
                { start: "0.25", density: 0.0114 },
              ],
              percentiles: { p75: "0.04" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.9395999999999999 },
                { start: 1800, end: 3000, density: 0.05319999999999999 },
                { start: 3000, density: 0.007199999999999997 },
              ],
              percentiles: { p75: 1162 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9578 },
                { start: 100, end: 300, density: 0.0378 },
                { start: 300, density: 0.0044 },
              ],
              percentiles: { p75: 10 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.9311431143114312 },
                { start: 2500, end: 4000, density: 0.05335533553355334 },
                { start: 4000, density: 0.015501550155015538 },
              ],
              percentiles: { p75: 1650 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.ee/",
          normalizedUrl: "https://www.yara.ee",
        },
      },
      extractedResults: {
        fcp: 1162,
        lcp: 1650,
        cls: "0.04",
        fid: 10,
      },
      timestamp: 1649424797514,
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
                  density: 0.8961755646817248,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.08983572895277209,
                },
                { start: "0.25", density: 0.013988706365503081 },
              ],
              percentiles: { p75: "0.00" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8742569139312484 },
                { start: 1800, end: 3000, density: 0.10467821142414062 },
                { start: 3000, density: 0.021064874644610956 },
              ],
              percentiles: { p75: 1478 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.973490813648294 },
                { start: 100, end: 300, density: 0.01456692913385827 },
                { start: 300, density: 0.01194225721784773 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.9050502447822725 },
                { start: 2500, end: 4000, density: 0.0734346817830456 },
                { start: 4000, density: 0.0215150734346818 },
              ],
              percentiles: { p75: 1816 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.lt/",
          normalizedUrl: "https://www.yara.lt",
        },
      },
      extractedResults: {
        fcp: 1478,
        lcp: 1816,
        cls: "0.00",
        fid: 13,
      },
      timestamp: 1649424797646,
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
                  density: 0.8398160183981602,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.11548845115488451,
                },
                { start: "0.25", density: 0.044695530446955324 },
              ],
              percentiles: { p75: "0.05" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.4769430829248804 },
                { start: 1800, end: 3000, density: 0.24777433229969137 },
                { start: 3000, density: 0.2752825847754282 },
              ],
              percentiles: { p75: 3251 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9048524262131066 },
                { start: 100, end: 300, density: 0.059129564782391196 },
                { start: 300, density: 0.03601800900450223 },
              ],
              percentiles: { p75: 17 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.49954977488744456 },
                { start: 2500, end: 4000, density: 0.2401200600300155 },
                { start: 4000, density: 0.26033016508253987 },
              ],
              percentiles: { p75: 4185 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yarabrasil.com.br/",
          normalizedUrl: "https://www.yarabrasil.com.br",
        },
      },
      extractedResults: {
        fcp: 3251,
        lcp: 4185,
        cls: "0.05",
        fid: 17,
      },
      timestamp: 1649424797844,
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
                { start: 0, end: 2500, density: 0.7353672908210019 },
                { start: 2500, end: 4000, density: 0.15883200209506318 },
                { start: 4000, density: 0.10580070708393491 },
              ],
              percentiles: { p75: 2611 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9596627756160829,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.009079118028534372,
                },
                { start: "0.25", density: 0.03125810635538262 },
              ],
              percentiles: { p75: "0.00" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6286914293214327 },
                { start: 1800, end: 3000, density: 0.23743273395458694 },
                { start: 3000, density: 0.13387583672398023 },
              ],
              percentiles: { p75: 2218 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.959066778429729 },
                { start: 100, end: 300, density: 0.03045543447890473 },
                { start: 300, density: 0.01047778709136632 },
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
        fcp: 2218,
        lcp: 2611,
        cls: "0.00",
        fid: 13,
      },
      timestamp: 1649424797979,
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
                  density: 0.9345924705285842,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.023957409050576754,
                },
                { start: "0.25", density: 0.04145012042083915 },
              ],
              percentiles: { p75: "0.01" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7110377238663782 },
                { start: 1800, end: 3000, density: 0.19090562682586035 },
                { start: 3000, density: 0.09805664930776145 },
              ],
              percentiles: { p75: 1951 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9390338413846553 },
                { start: 100, end: 300, density: 0.03190390080082666 },
                { start: 300, density: 0.029062257814518218 },
              ],
              percentiles: { p75: 14 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7804428044280439 },
                { start: 2500, end: 4000, density: 0.14779233999236532 },
                { start: 4000, density: 0.07176485557959081 },
              ],
              percentiles: { p75: 2373 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.es/",
          normalizedUrl: "https://www.yara.es",
        },
      },
      extractedResults: {
        fcp: 1951,
        lcp: 2373,
        cls: "0.01",
        fid: 14,
      },
      timestamp: 1649424798179,
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
                  density: 0.7614238576142386,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.16518348165183483,
                },
                { start: "0.25", density: 0.07339266073392656 },
              ],
              percentiles: { p75: "0.09" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7219834049785064 },
                { start: 1800, end: 3000, density: 0.1730480855743277 },
                { start: 3000, density: 0.10496850944716599 },
              ],
              percentiles: { p75: 2022 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9723 },
                { start: 100, end: 300, density: 0.0169 },
                { start: 300, density: 0.010799999999999994 },
              ],
              percentiles: { p75: 10 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7205720572057206 },
                { start: 2500, end: 4000, density: 0.17241724172417247 },
                { start: 4000, density: 0.10701070107010703 },
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
        fcp: 2022,
        lcp: 2790,
        cls: "0.09",
        fid: 10,
      },
      timestamp: 1649424798384,
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
                  density: 0.9259336532443146,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.03359065303567703,
                },
                { start: "0.25", density: 0.04047569372000833 },
              ],
              percentiles: { p75: "0.00" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6061643835616436 },
                { start: 1800, end: 3000, density: 0.224529109589041 },
                { start: 3000, density: 0.16930650684931556 },
              ],
              percentiles: { p75: 2459 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9450415241817294 },
                { start: 100, end: 300, density: 0.032975085490962376 },
                { start: 300, density: 0.02198339032730824 },
              ],
              percentiles: { p75: 16 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6597444089456875 },
                { start: 2500, end: 4000, density: 0.2058572949946754 },
                { start: 4000, density: 0.1343982960596371 },
              ],
              percentiles: { p75: 2974 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yaracanada.ca/fr-ca/",
          normalizedUrl: "https://www.yaracanada.ca",
        },
      },
      extractedResults: {
        fcp: 2459,
        lcp: 2974,
        cls: "0.00",
        fid: 16,
      },
      timestamp: 1649424798518,
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
                { start: 0, end: 100, density: 0.9687812687612566 },
                { start: 100, end: 300, density: 0.011707024214528714 },
                { start: 300, density: 0.019511707024214658 },
              ],
              percentiles: { p75: 10 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8657462985194078 },
                { start: 2500, end: 4000, density: 0.09913965586234494 },
                { start: 4000, density: 0.03511404561824718 },
              ],
              percentiles: { p75: 2017 },
            },
            cumulative_layout_shift: {
              histogram: [
                { start: "0.00", end: "0.10", density: 0.7675 },
                { start: "0.10", end: "0.25", density: 0.1601 },
                { start: "0.25", density: 0.07240000000000002 },
              ],
              percentiles: { p75: "0.08" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.872974594918984 },
                { start: 1800, end: 3000, density: 0.08881776355271055 },
                { start: 3000, density: 0.038207641528305525 },
              ],
              percentiles: { p75: 1347 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.be/",
          normalizedUrl: "https://www.yara.be",
        },
      },
      extractedResults: {
        fcp: 1347,
        lcp: 2017,
        cls: "0.08",
        fid: 10,
      },
      timestamp: 1649424798748,
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
                  density: 0.940624237990734,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.022677395757132405,
                },
                { start: "0.25", density: 0.03669836625213361 },
              ],
              percentiles: { p75: "0.00" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5642032899582622 },
                { start: 1800, end: 3000, density: 0.24195924380063855 },
                { start: 3000, density: 0.19383746624109932 },
              ],
              percentiles: { p75: 2605 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9387525050100199 },
                { start: 100, end: 300, density: 0.037199398797595186 },
                { start: 300, density: 0.024048096192384825 },
              ],
              percentiles: { p75: 15 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6693687054777698 },
                { start: 2500, end: 4000, density: 0.18435273888479503 },
                { start: 4000, density: 0.14627855563743514 },
              ],
              percentiles: { p75: 3028 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.co/",
          normalizedUrl: "https://www.yara.com.co",
        },
      },
      extractedResults: {
        fcp: 2605,
        lcp: 3028,
        cls: "0.00",
        fid: 15,
      },
      timestamp: 1649424798889,
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
                  density: 0.9343451006268558,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.04256021115143516,
                },
                { start: "0.25", density: 0.02309468822170898 },
              ],
              percentiles: { p75: "0.00" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.9103274559193953 },
                { start: 1800, end: 3000, density: 0.07002518891687658 },
                { start: 3000, density: 0.01964735516372796 },
              ],
              percentiles: { p75: 1304 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9574974498469907 },
                { start: 100, end: 300, density: 0.017511050663039783 },
                { start: 300, density: 0.024991499489969506 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.9145707578806168 },
                { start: 2500, end: 4000, density: 0.06899731723675383 },
                { start: 4000, density: 0.016431924882629276 },
              ],
              percentiles: { p75: 1734 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.se/",
          normalizedUrl: "https://www.yara.se",
        },
      },
      extractedResults: {
        fcp: 1304,
        lcp: 1734,
        cls: "0.00",
        fid: 13,
      },
      timestamp: 1649424799105,
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
                  density: 0.7785778577857785,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.17301730173017302,
                },
                { start: "0.25", density: 0.048404840484048424 },
              ],
              percentiles: { p75: "0.08" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.9370937093709372 },
                { start: 1800, end: 3000, density: 0.04970497049704972 },
                { start: 3000, density: 0.013201320132013186 },
              ],
              percentiles: { p75: 1094 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9739078276517045 },
                { start: 100, end: 300, density: 0.014795561331600518 },
                { start: 300, density: 0.011296611016694963 },
              ],
              percentiles: { p75: 10 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.9319204238728381 },
                { start: 2500, end: 4000, density: 0.05418374487653704 },
                { start: 4000, density: 0.01389583125062479 },
              ],
              percentiles: { p75: 1536 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.no/",
          normalizedUrl: "https://www.yara.no",
        },
      },
      extractedResults: {
        fcp: 1094,
        lcp: 1536,
        cls: "0.08",
        fid: 10,
      },
      timestamp: 1649424799324,
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
                  density: 0.8441844184418442,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.11831183118311829,
                },
                { start: "0.25", density: 0.037503750375037566 },
              ],
              percentiles: { p75: "0.06" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.753050610122024 },
                { start: 1800, end: 3000, density: 0.1527305461092217 },
                { start: 3000, density: 0.09421884376875427 },
              ],
              percentiles: { p75: 1809 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.978004399120176 },
                { start: 100, end: 300, density: 0.015396920615876825 },
                { start: 300, density: 0.006598680263947199 },
              ],
              percentiles: { p75: 10 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7708395877113977 },
                { start: 2500, end: 4000, density: 0.14199939957970564 },
                { start: 4000, density: 0.08716101270889665 },
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
        fcp: 1809,
        lcp: 2395,
        cls: "0.06",
        fid: 10,
      },
      timestamp: 1649424799468,
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
                  density: 0.8758999999999999,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.07579999999999999,
                },
                { start: "0.25", density: 0.048299999999999996 },
              ],
              percentiles: { p75: "0.02" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6008004002000996 },
                { start: 1800, end: 3000, density: 0.22471235617808882 },
                { start: 3000, density: 0.17448724362181162 },
              ],
              percentiles: { p75: 2450 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9486948694869486 },
                { start: 100, end: 300, density: 0.031103110311031103 },
                { start: 300, density: 0.020202020202020214 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6844053215964783 },
                { start: 2500, end: 4000, density: 0.17395218565569656 },
                { start: 4000, density: 0.14164249274782528 },
              ],
              percentiles: { p75: 2948 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.co/",
          normalizedUrl: "https://www.yara.com.co",
        },
      },
      extractedResults: {
        fcp: 2450,
        lcp: 2948,
        cls: "0.02",
        fid: 13,
      },
      timestamp: 1649424799613,
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
                { start: "0.00", end: "0.10", density: 0.7497 },
                { start: "0.10", end: "0.25", density: 0.2118 },
                { start: "0.25", density: 0.03850000000000001 },
              ],
              percentiles: { p75: "0.09" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7746225377462251 },
                { start: 1800, end: 3000, density: 0.1653834616538346 },
                { start: 3000, density: 0.059994000599940187 },
              ],
              percentiles: { p75: 1735 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9546954695469547 },
                { start: 100, end: 300, density: 0.023402340234023405 },
                { start: 300, density: 0.02190219021902189 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8034803480348033 },
                { start: 2500, end: 4000, density: 0.14411441144114412 },
                { start: 4000, density: 0.05240524052405277 },
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
        fcp: 1735,
        lcp: 2263,
        cls: "0.09",
        fid: 12,
      },
      timestamp: 1649424799748,
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
                  density: 0.8503749147920927,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.10418086798454895,
                },
                { start: "0.25", density: 0.04544421722335836 },
              ],
              percentiles: { p75: "0.04" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.43852037903870766 },
                { start: 1800, end: 3000, density: 0.2599611827834255 },
                { start: 3000, density: 0.3015184381778667 },
              ],
              percentiles: { p75: 3417 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.8914609661036969 },
                { start: 100, end: 300, density: 0.06779260659029172 },
                { start: 300, density: 0.04074642730601149 },
              ],
              percentiles: { p75: 19 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.46733409610983934 },
                { start: 2500, end: 4000, density: 0.25337528604118964 },
                { start: 4000, density: 0.27929061784897086 },
              ],
              percentiles: { p75: 4352 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yarabrasil.com.br/",
          normalizedUrl: "https://www.yarabrasil.com.br",
        },
      },
      extractedResults: {
        fcp: 3417,
        lcp: 4352,
        cls: "0.04",
        fid: 19,
      },
      timestamp: 1649424799878,
    },
    {
      url: "https://www.yara.ua/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "https://www.yara.ua" },
          metrics: {
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7402480496099217 },
                { start: 1800, end: 3000, density: 0.17183436687337464 },
                { start: 3000, density: 0.08791758351670355 },
              ],
              percentiles: { p75: 1862 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9589794897448726 },
                { start: 100, end: 300, density: 0.028814407203601802 },
                { start: 300, density: 0.012206103051525743 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7901000000000005 },
                { start: 2500, end: 4000, density: 0.14130000000000012 },
                { start: 4000, density: 0.06859999999999943 },
              ],
              percentiles: { p75: 2308 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8966000000000001,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.08090000000000001,
                },
                { start: "0.25", density: 0.022499999999999982 },
              ],
              percentiles: { p75: "0.02" },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.ua/",
          normalizedUrl: "https://www.yara.ua",
        },
      },
      extractedResults: {
        fcp: 1862,
        lcp: 2308,
        cls: "0.02",
        fid: 12,
      },
      timestamp: 1649424800086,
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
                { start: 0, end: 100, density: 0.8802540066525556 },
                { start: 100, end: 300, density: 0.045811914121560354 },
                { start: 300, density: 0.07393407922588398 },
              ],
              percentiles: { p75: 19 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6224697830202414 },
                { start: 2500, end: 4000, density: 0.211810106305519 },
                { start: 4000, density: 0.16572011067423967 },
              ],
              percentiles: { p75: 3259 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9149332950796156,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.02539090517859705,
                },
                { start: "0.25", density: 0.059675799741787376 },
              ],
              percentiles: { p75: "0.00" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5457647233348154 },
                { start: 1800, end: 3000, density: 0.2664293131582845 },
                { start: 3000, density: 0.18780596350690001 },
              ],
              percentiles: { p75: 2635 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.us/",
          normalizedUrl: "https://www.yara.us",
        },
      },
      extractedResults: {
        fcp: 2635,
        lcp: 3259,
        cls: "0.00",
        fid: 19,
      },
      timestamp: 1649424800229,
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
                { start: "0.00", end: "0.10", density: 0.6924 },
                { start: "0.10", end: "0.25", density: 0.1394 },
                { start: "0.25", density: 0.16820000000000004 },
              ],
              percentiles: { p75: "0.15" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5702570257025702 },
                { start: 1800, end: 3000, density: 0.18071807180718066 },
                { start: 3000, density: 0.249024902490249 },
              ],
              percentiles: { p75: 3073 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6201500000000008 },
                { start: 2500, end: 4000, density: 0.18395000000000014 },
                { start: 4000, density: 0.19589999999999919 },
              ],
              percentiles: { p75: 3443 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.cm/en-cm/",
          normalizedUrl: "https://www.yara.cm",
        },
      },
      extractedResults: { fcp: 3073, lcp: 3443, cls: "0.15" },
      timestamp: 1649424800438,
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
                  density: 0.9259336532443146,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.03359065303567703,
                },
                { start: "0.25", density: 0.04047569372000833 },
              ],
              percentiles: { p75: "0.00" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6061643835616436 },
                { start: 1800, end: 3000, density: 0.224529109589041 },
                { start: 3000, density: 0.16930650684931556 },
              ],
              percentiles: { p75: 2459 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9450415241817294 },
                { start: 100, end: 300, density: 0.032975085490962376 },
                { start: 300, density: 0.02198339032730824 },
              ],
              percentiles: { p75: 16 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6597444089456875 },
                { start: 2500, end: 4000, density: 0.2058572949946754 },
                { start: 4000, density: 0.1343982960596371 },
              ],
              percentiles: { p75: 2974 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yaracanada.ca/",
          normalizedUrl: "https://www.yaracanada.ca",
        },
      },
      extractedResults: {
        fcp: 2459,
        lcp: 2974,
        cls: "0.00",
        fid: 16,
      },
      timestamp: 1649424800654,
    },
    {
      url: "https://www.yara.hu/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "https://www.yara.hu" },
          metrics: {
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9714028597140285 },
                { start: 100, end: 300, density: 0.018698130186981295 },
                { start: 300, density: 0.009899010098990137 },
              ],
              percentiles: { p75: 11 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8584641535846415 },
                { start: 2500, end: 4000, density: 0.10903909609039097 },
                { start: 4000, density: 0.03249675032496764 },
              ],
              percentiles: { p75: 2010 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9466053394660534,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.0382961703829617,
                },
                { start: "0.25", density: 0.01509849015098489 },
              ],
              percentiles: { p75: "0.01" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8327668932427024 },
                { start: 1800, end: 3000, density: 0.12405037984806065 },
                { start: 3000, density: 0.04318272690923706 },
              ],
              percentiles: { p75: 1568 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.hu/",
          normalizedUrl: "https://www.yara.hu",
        },
      },
      extractedResults: {
        fcp: 1568,
        lcp: 2010,
        cls: "0.01",
        fid: 11,
      },
      timestamp: 1649424800880,
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
                  density: 0.9407476139978792,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.02730646871686108,
                },
                { start: "0.25", density: 0.0319459172852598 },
              ],
              percentiles: { p75: "0.00" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.42778523489932885 },
                { start: 1800, end: 3000, density: 0.31020134228187923 },
                { start: 3000, density: 0.2620134228187919 },
              ],
              percentiles: { p75: 3082 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9451535979800814 },
                { start: 100, end: 300, density: 0.03969701220367513 },
                { start: 300, density: 0.015149389816243454 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.5422469201928217 },
                { start: 2500, end: 4000, density: 0.2776513122656663 },
                { start: 4000, density: 0.18010176754151197 },
              ],
              percentiles: { p75: 3451 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.ar/",
          normalizedUrl: "https://www.yara.com.ar",
        },
      },
      extractedResults: {
        fcp: 3082,
        lcp: 3451,
        cls: "0.00",
        fid: 13,
      },
      timestamp: 1649424801031,
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
                { start: 0, end: 1800, density: 0.6572701949860725 },
                { start: 1800, end: 3000, density: 0.2141504178272981 },
                { start: 3000, density: 0.1285793871866294 },
              ],
              percentiles: { p75: 2209 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9649836213712863 },
                { start: 100, end: 300, density: 0.022930080198802664 },
                { start: 300, density: 0.012086298429910918 },
              ],
              percentiles: { p75: 14 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.73329615170106 },
                { start: 2500, end: 4000, density: 0.16441717791411048 },
                { start: 4000, density: 0.10228667038482954 },
              ],
              percentiles: { p75: 2611 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.831258337038684,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.10915962650066698,
                },
                { start: "0.25", density: 0.05958203646064908 },
              ],
              percentiles: { p75: "0.02" },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.in/",
          normalizedUrl: "https://www.yara.in",
        },
      },
      extractedResults: {
        fcp: 2209,
        lcp: 2611,
        cls: "0.02",
        fid: 14,
      },
      timestamp: 1649424801255,
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
                  density: 0.9094344540005213,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.05069064373208236,
                },
                { start: "0.25", density: 0.03987490226739643 },
              ],
              percentiles: { p75: "0.01" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8323086984957483 },
                { start: 1800, end: 3000, density: 0.11366906474820135 },
                { start: 3000, density: 0.054022236756050376 },
              ],
              percentiles: { p75: 1496 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9428083092295556 },
                { start: 100, end: 300, density: 0.0291874835656061 },
                { start: 300, density: 0.0280042072048382 },
              ],
              percentiles: { p75: 14 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8570772661681749 },
                { start: 2500, end: 4000, density: 0.10068214613669157 },
                { start: 4000, density: 0.042240587695133495 },
              ],
              percentiles: { p75: 1898 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.it/",
          normalizedUrl: "https://www.yara.it",
        },
      },
      extractedResults: {
        fcp: 1496,
        lcp: 1898,
        cls: "0.01",
        fid: 14,
      },
      timestamp: 1649424801485,
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
                  density: 0.8847663217980735,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.09656320608871446,
                },
                { start: "0.25", density: 0.018670472113212034 },
              ],
              percentiles: { p75: "0.00" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.764551526717557 },
                { start: 1800, end: 3000, density: 0.17330629770992356 },
                { start: 3000, density: 0.06214217557251952 },
              ],
              percentiles: { p75: 1755 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9585648707417249 },
                { start: 100, end: 300, density: 0.02693887412418458 },
                { start: 300, density: 0.014496255134090504 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7979293109603711 },
                { start: 2500, end: 4000, density: 0.1457812685945495 },
                { start: 4000, density: 0.05628942044507946 },
              ],
              percentiles: { p75: 2264 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.gr/",
          normalizedUrl: "https://www.yara.gr",
        },
      },
      extractedResults: {
        fcp: 1755,
        lcp: 2264,
        cls: "0.00",
        fid: 13,
      },
      timestamp: 1649424801718,
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
                { start: 0, end: 100, density: 0.9668867547018808 },
                { start: 100, end: 300, density: 0.015706282513005203 },
                { start: 300, density: 0.017406962785114034 },
              ],
              percentiles: { p75: 9 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8917675302590776 },
                { start: 2500, end: 4000, density: 0.0843252975892768 },
                { start: 4000, density: 0.02390717215164563 },
              ],
              percentiles: { p75: 1822 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8121812181218121,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.1581158115811581,
                },
                { start: "0.25", density: 0.029702970297029715 },
              ],
              percentiles: { p75: "0.08" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8773 },
                { start: 1800, end: 3000, density: 0.093 },
                { start: 3000, density: 0.029700000000000087 },
              ],
              percentiles: { p75: 1326 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.dk/",
          normalizedUrl: "https://www.yara.dk",
        },
      },
      extractedResults: { fcp: 1326, lcp: 1822, cls: "0.08", fid: 9 },
      timestamp: 1649424801961,
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
                  density: 0.8824882488248825,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.07230723072307232,
                },
                { start: "0.25", density: 0.04520452045204518 },
              ],
              percentiles: { p75: "0.02" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6095438175270105 },
                { start: 1800, end: 3000, density: 0.2357943177270907 },
                { start: 3000, density: 0.15466186474589888 },
              ],
              percentiles: { p75: 2368 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9616076784643071 },
                { start: 100, end: 300, density: 0.025394921015796837 },
                { start: 300, density: 0.012997400519896068 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.694327731092436 },
                { start: 2500, end: 4000, density: 0.17101840736294496 },
                { start: 4000, density: 0.13465386154461909 },
              ],
              percentiles: { p75: 2858 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.mx/",
          normalizedUrl: "https://www.yara.com.mx",
        },
      },
      extractedResults: {
        fcp: 2368,
        lcp: 2858,
        cls: "0.02",
        fid: 13,
      },
      timestamp: 1649424802120,
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
                  density: 0.8712475901955384,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.09859542825667862,
                },
                { start: "0.25", density: 0.03015698154778298 },
              ],
              percentiles: { p75: "0.01" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8916146916146916 },
                { start: 1800, end: 3000, density: 0.08218988218988219 },
                { start: 3000, density: 0.02619542619542616 },
              ],
              percentiles: { p75: 1345 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9223884771360646 },
                { start: 100, end: 300, density: 0.0391553628863096 },
                { start: 300, density: 0.03845615997762575 },
              ],
              percentiles: { p75: 17 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8529696801882874 },
                { start: 2500, end: 4000, density: 0.11989478056209332 },
                { start: 4000, density: 0.027135539249619315 },
              ],
              percentiles: { p75: 2050 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.fi/",
          normalizedUrl: "https://www.yara.fi",
        },
      },
      extractedResults: {
        fcp: 1345,
        lcp: 2050,
        cls: "0.01",
        fid: 17,
      },
      timestamp: 1649424802270,
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
                  density: 0.9611997447351628,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.01697511167836631,
                },
                { start: "0.25", density: 0.02182514358647096 },
              ],
              percentiles: { p75: "0.00" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5555842145989153 },
                { start: 1800, end: 3000, density: 0.27237554810420356 },
                { start: 3000, density: 0.17204023729688114 },
              ],
              percentiles: { p75: 2456 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9447506385266838 },
                { start: 100, end: 300, density: 0.047318187928485016 },
                { start: 300, density: 0.007931173544831275 },
              ],
              percentiles: { p75: 14 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6943225806451614 },
                { start: 2500, end: 4000, density: 0.17070967741935486 },
                { start: 4000, density: 0.13496774193548383 },
              ],
              percentiles: { p75: 2848 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.cr/",
          normalizedUrl: "https://www.yara.cr",
        },
      },
      extractedResults: {
        fcp: 2456,
        lcp: 2848,
        cls: "0.00",
        fid: 14,
      },
      timestamp: 1649424802506,
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
                  density: 0.8369000000000001,
                },
                { start: "0.10", end: "0.25", density: 0.0918 },
                { start: "0.25", density: 0.07129999999999999 },
              ],
              percentiles: { p75: "0.07" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.4480551944805511 },
                { start: 1800, end: 3000, density: 0.35906409359064034 },
                { start: 3000, density: 0.19288071192880865 },
              ],
              percentiles: { p75: 2751 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.968187274909964 },
                { start: 100, end: 300, density: 0.02701080432172869 },
                { start: 300, density: 0.0048019207683073295 },
              ],
              percentiles: { p75: 10 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.5982499999999993 },
                { start: 2500, end: 4000, density: 0.24474999999999963 },
                { start: 4000, density: 0.15700000000000122 },
              ],
              percentiles: { p75: 3282 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.cl/",
          normalizedUrl: "https://www.yara.cl",
        },
      },
      extractedResults: {
        fcp: 2751,
        lcp: 3282,
        cls: "0.07",
        fid: 10,
      },
      timestamp: 1649424802756,
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
                  density: 0.9204078929943054,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.02741358760429082,
                },
                { start: "0.25", density: 0.0521785194014038 },
              ],
              percentiles: { p75: "0.01" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.4969753999193439 },
                { start: 1800, end: 3000, density: 0.3136174216964646 },
                { start: 3000, density: 0.1894071783841915 },
              ],
              percentiles: { p75: 2698 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9624965402712428 },
                { start: 100, end: 300, density: 0.03086078051480764 },
                { start: 300, density: 0.006642679213949641 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6433941997851772 },
                { start: 2500, end: 4000, density: 0.22422126745435011 },
                { start: 4000, density: 0.13238453276047266 },
              ],
              percentiles: { p75: 3044 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.pe/",
          normalizedUrl: "https://www.yara.com.pe",
        },
      },
      extractedResults: {
        fcp: 2698,
        lcp: 3044,
        cls: "0.01",
        fid: 13,
      },
      timestamp: 1649424802956,
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
                { start: "0.00", end: "0.10", density: 0.9305 },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.03949999999999999,
                },
                { start: "0.25", density: 0.029999999999999975 },
              ],
              percentiles: { p75: "0.01" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6658334166583334 },
                { start: 1800, end: 3000, density: 0.21507849215078464 },
                { start: 3000, density: 0.11908809119088182 },
              ],
              percentiles: { p75: 2112 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9652965296529654 },
                { start: 100, end: 300, density: 0.022802280228022807 },
                { start: 300, density: 0.011901190119011912 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.733673367336733 },
                { start: 2500, end: 4000, density: 0.15761576157615736 },
                { start: 4000, density: 0.10871087108710971 },
              ],
              percentiles: { p75: 2652 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.gt/",
          normalizedUrl: "https://www.yara.com.gt",
        },
      },
      extractedResults: {
        fcp: 2112,
        lcp: 2652,
        cls: "0.01",
        fid: 12,
      },
      timestamp: 1649424803278,
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
                { start: 0, end: 100, density: 0.9385615711252655 },
                { start: 100, end: 300, density: 0.0456475583864119 },
                { start: 300, density: 0.015790870488322693 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.5860179561658293 },
                { start: 2500, end: 4000, density: 0.19243464483760192 },
                { start: 4000, density: 0.22154739899656883 },
              ],
              percentiles: { p75: 3818 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9266934334930708,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.04274057764538273,
                },
                { start: "0.25", density: 0.03056598886154642 },
              ],
              percentiles: { p75: "0.00" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5059516023544768 },
                { start: 1800, end: 3000, density: 0.21896664486592407 },
                { start: 3000, density: 0.275081752779599 },
              ],
              percentiles: { p75: 3415 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.ci/",
          normalizedUrl: "https://www.yara.ci",
        },
      },
      extractedResults: {
        fcp: 3415,
        lcp: 3818,
        cls: "0.00",
        fid: 13,
      },
      timestamp: 1649424803443,
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
                  density: 0.9045584045584045,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.053418803418803416,
                },
                { start: "0.25", density: 0.04202279202279202 },
              ],
              percentiles: { p75: "0.00" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8955180861795647 },
                { start: 1800, end: 3000, density: 0.07594754287361292 },
                { start: 3000, density: 0.02853437094682237 },
              ],
              percentiles: { p75: 1313 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.952345271991608 },
                { start: 100, end: 300, density: 0.03626554772965682 },
                { start: 300, density: 0.011389180278735202 },
              ],
              percentiles: { p75: 16 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8900504686373469 },
                { start: 2500, end: 4000, density: 0.08053352559480892 },
                { start: 4000, density: 0.02941600576784415 },
              ],
              percentiles: { p75: 1770 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yaraagri.cz/",
          normalizedUrl: "https://www.yaraagri.cz",
        },
      },
      extractedResults: {
        fcp: 1313,
        lcp: 1770,
        cls: "0.00",
        fid: 16,
      },
      timestamp: 1649424803695,
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
                { start: 0, end: 2500, density: 0.5957191438287657 },
                { start: 2500, end: 4000, density: 0.2844568913782758 },
                { start: 4000, density: 0.11982396479295855 },
              ],
              percentiles: { p75: 3098 },
            },
            cumulative_layout_shift: {
              histogram: [
                { start: "0.00", end: "0.10", density: 0.8573 },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.08940000000000001,
                },
                { start: "0.25", density: 0.05330000000000002 },
              ],
              percentiles: { p75: "0.02" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5277055411082204 },
                { start: 1800, end: 3000, density: 0.32196439287857503 },
                { start: 3000, density: 0.15033006601320453 },
              ],
              percentiles: { p75: 2524 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9252850570114021 },
                { start: 100, end: 300, density: 0.03480696139227844 },
                { start: 300, density: 0.03990798159631939 },
              ],
              percentiles: { p75: 12 },
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
        lcp: 3098,
        cls: "0.02",
        fid: 12,
      },
      timestamp: 1649424803958,
    },
    {
      url: "https://www.yara.de/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "https://www.yara.de" },
          metrics: {
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9548864659397818 },
                { start: 100, end: 300, density: 0.027308192457737322 },
                { start: 300, density: 0.017805341602480918 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8415341534153417 },
                { start: 2500, end: 4000, density: 0.11166116611661168 },
                { start: 4000, density: 0.04680468046804662 },
              ],
              percentiles: { p75: 2024 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8213999999999999,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.11059999999999998,
                },
                { start: "0.25", density: 0.06800000000000002 },
              ],
              percentiles: { p75: "0.05" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8253349330133973 },
                { start: 1800, end: 3000, density: 0.1215756848630274 },
                { start: 3000, density: 0.05308938212357509 },
              ],
              percentiles: { p75: 1474 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.de/",
          normalizedUrl: "https://www.yara.de",
        },
      },
      extractedResults: {
        fcp: 1474,
        lcp: 2024,
        cls: "0.05",
        fid: 13,
      },
      timestamp: 1649424804137,
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
                  density: 0.9289898810580508,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.04260607136516953,
                },
                { start: "0.25", density: 0.028404047576779667 },
              ],
              percentiles: { p75: "0.00" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6539999999999996 },
                { start: 1800, end: 3000, density: 0.2072727272727271 },
                { start: 3000, density: 0.1387272727272733 },
              ],
              percentiles: { p75: 2269 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9629629629629629 },
                { start: 100, end: 300, density: 0.026989755713159962 },
                { start: 300, density: 0.010047281323877074 },
              ],
              percentiles: { p75: 14 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.708800144560896 },
                { start: 2500, end: 4000, density: 0.17988796530538478 },
                { start: 4000, density: 0.11131189013371931 },
              ],
              percentiles: { p75: 2747 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com/",
          normalizedUrl: "https://www.yara.com",
        },
      },
      extractedResults: {
        fcp: 2269,
        lcp: 2747,
        cls: "0.00",
        fid: 14,
      },
      timestamp: 1649424804305,
    },
    {
      url: "https://www.yara.com.mx/",
      deviceTargeted: "PHONE",
      results: {
        record: {
          key: { formFactor: "PHONE", origin: "https://www.yara.com.mx" },
          metrics: {
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6885205946868147 },
                { start: 2500, end: 4000, density: 0.17889349256641485 },
                { start: 4000, density: 0.13258591274677048 },
              ],
              percentiles: { p75: 2864 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9423519438052562,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.021073028945137455,
                },
                { start: "0.25", density: 0.03657502724960639 },
              ],
              percentiles: { p75: "0.00" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5835061607905333 },
                { start: 1800, end: 3000, density: 0.2502134927412469 },
                { start: 3000, density: 0.16628034646821974 },
              ],
              percentiles: { p75: 2468 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9565707133917395 },
                { start: 100, end: 300, density: 0.029536921151439292 },
                { start: 300, density: 0.013892365456821137 },
              ],
              percentiles: { p75: 14 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.mx/",
          normalizedUrl: "https://www.yara.com.mx",
        },
      },
      extractedResults: {
        fcp: 2468,
        lcp: 2864,
        cls: "0.00",
        fid: 14,
      },
      timestamp: 1649424804577,
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
                  density: 0.9393939393939394,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.028402840284028404,
                },
                { start: "0.25", density: 0.03220322032203219 },
              ],
              percentiles: { p75: "0.00" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.37325069972011415 },
                { start: 1800, end: 3000, density: 0.31917233106757487 },
                { start: 3000, density: 0.307576969212311 },
              ],
              percentiles: { p75: 3315 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9742948589717945 },
                { start: 100, end: 300, density: 0.023304660932186437 },
                { start: 300, density: 0.0024004800960192043 },
              ],
              percentiles: { p75: 11 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.4847999999999994 },
                { start: 2500, end: 4000, density: 0.3027999999999995 },
                { start: 4000, density: 0.21240000000000117 },
              ],
              percentiles: { p75: 3793 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.bo/",
          normalizedUrl: "https://www.yara.bo",
        },
      },
      extractedResults: {
        fcp: 3315,
        lcp: 3793,
        cls: "0.00",
        fid: 11,
      },
      timestamp: 1649424804845,
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
                  density: 0.8694000000000001,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.11669999999999998,
                },
                { start: "0.25", density: 0.013900000000000006 },
              ],
              percentiles: { p75: "0.04" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8907672301690507 },
                { start: 1800, end: 3000, density: 0.08992697809342806 },
                { start: 3000, density: 0.019305791737521245 },
              ],
              percentiles: { p75: 1409 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9798060581825453 },
                { start: 100, end: 300, density: 0.011096670998700391 },
                { start: 300, density: 0.009097270818754345 },
              ],
              percentiles: { p75: 11 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.9054689062187561 },
                { start: 2500, end: 4000, density: 0.07313537292541489 },
                { start: 4000, density: 0.02139572085582896 },
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
        fcp: 1409,
        lcp: 1817,
        cls: "0.04",
        fid: 11,
      },
      timestamp: 1649424805024,
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
                  density: 0.9580038657529433,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.020207344930592164,
                },
                { start: "0.25", density: 0.02178878931646459 },
              ],
              percentiles: { p75: "0.00" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5251927559619867 },
                { start: 1800, end: 3000, density: 0.2700376546530393 },
                { start: 3000, density: 0.20476958938497403 },
              ],
              percentiles: { p75: 2758 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9538599640933573 },
                { start: 100, end: 300, density: 0.030879712746858176 },
                { start: 300, density: 0.015260323159784596 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6180418829425453 },
                { start: 2500, end: 4000, density: 0.23787363522462857 },
                { start: 4000, density: 0.14408448183282624 },
              ],
              percentiles: { p75: 3133 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.au/",
          normalizedUrl: "https://www.yara.com.au",
        },
      },
      extractedResults: {
        fcp: 2758,
        lcp: 3133,
        cls: "0.00",
        fid: 13,
      },
      timestamp: 1649424805214,
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
                { start: 0, end: 2500, density: 0.6231207469536312 },
                { start: 2500, end: 4000, density: 0.22131666402911823 },
                { start: 4000, density: 0.15556258901725056 },
              ],
              percentiles: { p75: 3194 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.962293549392334,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.022904331567466497,
                },
                { start: "0.25", density: 0.014802119040199449 },
              ],
              percentiles: { p75: "0.00" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5568559228214461 },
                { start: 1800, end: 3000, density: 0.24545310770204037 },
                { start: 3000, density: 0.19769096947651352 },
              ],
              percentiles: { p75: 2746 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9687249398556537 },
                { start: 100, end: 300, density: 0.025982357658380112 },
                { start: 300, density: 0.00529270248596632 },
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
        fcp: 2746,
        lcp: 3194,
        cls: "0.00",
        fid: 12,
      },
      timestamp: 1649424805508,
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
                  density: 0.8675867586758674,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.0897089708970897,
                },
                { start: "0.25", density: 0.04270427042704273 },
              ],
              percentiles: { p75: "0.03" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.9094728418525557 },
                { start: 1800, end: 3000, density: 0.06451935580674206 },
                { start: 3000, density: 0.026007802340702223 },
              ],
              percentiles: { p75: 1220 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9675773041128791 },
                { start: 100, end: 300, density: 0.024216951866306416 },
                { start: 300, density: 0.008205744020814585 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.9011401140114011 },
                { start: 2500, end: 4000, density: 0.07015701570157014 },
                { start: 4000, density: 0.02870287028702864 },
              ],
              percentiles: { p75: 1710 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yaraagri.cz/",
          normalizedUrl: "https://www.yaraagri.cz",
        },
      },
      extractedResults: {
        fcp: 1220,
        lcp: 1710,
        cls: "0.03",
        fid: 12,
      },
      timestamp: 1649424805813,
    },
    {
      url: "https://www.yara.hr/",
      deviceTargeted: "PHONE",
      results: {
        record: {
          key: { formFactor: "PHONE", origin: "https://www.yara.hr" },
          metrics: {
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.5360355295704969 },
                { start: 2500, end: 4000, density: 0.3332021587587136 },
                { start: 4000, density: 0.13076231167078942 },
              ],
              percentiles: { p75: 3306 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9848908785674314,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.009065472859541129,
                },
                { start: "0.25", density: 0.006043648573027424 },
              ],
              percentiles: { p75: "0.00" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.4557259599238775 },
                { start: 1800, end: 3000, density: 0.3990820553005707 },
                { start: 3000, density: 0.1451919847755517 },
              ],
              percentiles: { p75: 2561 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9162522603978299 },
                { start: 100, end: 300, density: 0.05831826401446653 },
                { start: 300, density: 0.025429475587703445 },
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
        fcp: 2561,
        lcp: 3306,
        cls: "0.00",
        fid: 14,
      },
      timestamp: 1649424806004,
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
                  density: 0.9365754812563323,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.042755825734549134,
                },
                { start: "0.25", density: 0.020668693009118538 },
              ],
              percentiles: { p75: "0.00" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.9159751037344399 },
                { start: 1800, end: 3000, density: 0.06846473029045645 },
                { start: 3000, density: 0.015560165975103707 },
              ],
              percentiles: { p75: 1264 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9527226677923175 },
                { start: 100, end: 300, density: 0.025749261291684256 },
                { start: 300, density: 0.021528070915998253 },
              ],
              percentiles: { p75: 14 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.9133760595410377 },
                { start: 2500, end: 4000, density: 0.0721521604300186 },
                { start: 4000, density: 0.01447178002894356 },
              ],
              percentiles: { p75: 1691 },
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
        lcp: 1691,
        cls: "0.00",
        fid: 14,
      },
      timestamp: 1649424806280,
    },
    {
      url: "https://www.yara.co.uk/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "https://www.yara.co.uk" },
          metrics: {
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.4874512548745117 },
                { start: 1800, end: 3000, density: 0.2908709129087086 },
                { start: 3000, density: 0.2216778322167797 },
              ],
              percentiles: { p75: 2861 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9326067393260671 },
                { start: 100, end: 300, density: 0.030196980301969795 },
                { start: 300, density: 0.03719628037196303 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.5648064806480636 },
                { start: 2500, end: 4000, density: 0.26697669766976645 },
                { start: 4000, density: 0.1682168216821699 },
              ],
              percentiles: { p75: 3386 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.7678999999999999,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.14249999999999996,
                },
                { start: "0.25", density: 0.08960000000000004 },
              ],
              percentiles: { p75: "0.09" },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.co.uk/",
          normalizedUrl: "https://www.yara.co.uk",
        },
      },
      extractedResults: {
        fcp: 2861,
        lcp: 3386,
        cls: "0.09",
        fid: 12,
      },
      timestamp: 1649424806572,
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
                  density: 0.9538188277087033,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.021441258563816287,
                },
                { start: "0.25", density: 0.024739913727480356 },
              ],
              percentiles: { p75: "0.00" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6001024065540201 },
                { start: 1800, end: 3000, density: 0.2804659498207889 },
                { start: 3000, density: 0.11943164362519097 },
              ],
              percentiles: { p75: 2190 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9731731172278888 },
                { start: 100, end: 300, density: 0.02095850216571189 },
                { start: 300, density: 0.005868380606399329 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.730996404725218 },
                { start: 2500, end: 4000, density: 0.15986132511556242 },
                { start: 4000, density: 0.10914227015921961 },
              ],
              percentiles: { p75: 2621 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.pa/",
          normalizedUrl: "https://www.yara.com.pa",
        },
      },
      extractedResults: {
        fcp: 2190,
        lcp: 2621,
        cls: "0.00",
        fid: 13,
      },
      timestamp: 1649424806768,
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
                  density: 0.8687868786878689,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.06530653065306531,
                },
                { start: "0.25", density: 0.06590659065906578 },
              ],
              percentiles: { p75: "0.04" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.08849115088491172 },
                { start: 1800, end: 3000, density: 0.4537546245375474 },
                { start: 3000, density: 0.45775422457754084 },
              ],
              percentiles: { p75: 4418 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.21337133713371312 },
                { start: 2500, end: 4000, density: 0.42419241924192347 },
                { start: 4000, density: 0.36243624362436355 },
              ],
              percentiles: { p75: 4897 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "http://www.yara.com.mm/",
          normalizedUrl: "http://www.yara.com.mm",
        },
      },
      extractedResults: { fcp: 4418, lcp: 4897, cls: "0.04" },
      timestamp: 1649424807086,
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
                  density: 0.9582428808581279,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.018771548972034223,
                },
                { start: "0.25", density: 0.022985570169837845 },
              ],
              percentiles: { p75: "0.00" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5063030614870078 },
                { start: 1800, end: 3000, density: 0.290326730126061 },
                { start: 3000, density: 0.20337020838693118 },
              ],
              percentiles: { p75: 2817 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.937265415549598 },
                { start: 100, end: 300, density: 0.035790884718498665 },
                { start: 300, density: 0.026943699731903397 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6143572621035062 },
                { start: 2500, end: 4000, density: 0.2617182483626557 },
                { start: 4000, density: 0.12392448953383814 },
              ],
              percentiles: { p75: 3126 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.ru/",
          normalizedUrl: "https://www.yara.ru",
        },
      },
      extractedResults: {
        fcp: 2817,
        lcp: 3126,
        cls: "0.00",
        fid: 13,
      },
      timestamp: 1649424807391,
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
                  density: 0.9768953790758151,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.016403280656131225,
                },
                { start: "0.25", density: 0.006701340268053613 },
              ],
              percentiles: { p75: "0.00" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.4721944388877771 },
                { start: 1800, end: 3000, density: 0.3850770154030802 },
                { start: 3000, density: 0.14272854570914267 },
              ],
              percentiles: { p75: 2546 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9214157168566289 },
                { start: 100, end: 300, density: 0.0544891021795641 },
                { start: 300, density: 0.024095180963807097 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.5469640892267673 },
                { start: 2500, end: 4000, density: 0.3210963288986691 },
                { start: 4000, density: 0.13193958187456364 },
              ],
              percentiles: { p75: 3301 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.hr/",
          normalizedUrl: "https://www.yara.hr",
        },
      },
      extractedResults: {
        fcp: 2546,
        lcp: 3301,
        cls: "0.00",
        fid: 13,
      },
      timestamp: 1649424807722,
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
                  density: 0.884876975395079,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.0706141228245649,
                },
                { start: "0.25", density: 0.04450890178035608 },
              ],
              percentiles: { p75: "0.03" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5552444755524443 },
                { start: 1800, end: 3000, density: 0.28257174282571706 },
                { start: 3000, density: 0.16218378162183852 },
              ],
              percentiles: { p75: 2524 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9718971897189719 },
                { start: 100, end: 300, density: 0.023002300230023 },
                { start: 300, density: 0.005100510051005116 },
              ],
              percentiles: { p75: 11 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6608839116088387 },
                { start: 2500, end: 4000, density: 0.2073292670732925 },
                { start: 4000, density: 0.13178682131786879 },
              ],
              percentiles: { p75: 2994 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.pe/",
          normalizedUrl: "https://www.yara.com.pe",
        },
      },
      extractedResults: {
        fcp: 2524,
        lcp: 2994,
        cls: "0.03",
        fid: 11,
      },
      timestamp: 1649424808010,
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
                  density: 0.8687868786878689,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.06530653065306531,
                },
                { start: "0.25", density: 0.06590659065906578 },
              ],
              percentiles: { p75: "0.05" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.08849115088491172 },
                { start: 1800, end: 3000, density: 0.4537546245375474 },
                { start: 3000, density: 0.45775422457754084 },
              ],
              percentiles: { p75: 4418 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.21337133713371312 },
                { start: 2500, end: 4000, density: 0.42419241924192347 },
                { start: 4000, density: 0.36243624362436355 },
              ],
              percentiles: { p75: 4934 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "http://www.yara.com.mm/",
          normalizedUrl: "http://www.yara.com.mm",
        },
      },
      extractedResults: { fcp: 4418, lcp: 4934, cls: "0.05" },
      timestamp: 1649424808351,
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
                  density: 0.7706770677067706,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.1586158615861586,
                },
                { start: "0.25", density: 0.07070707070707072 },
              ],
              percentiles: { p75: "0.08" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6174765046990606 },
                { start: 1800, end: 3000, density: 0.2358528294341134 },
                { start: 3000, density: 0.14667066586682606 },
              ],
              percentiles: { p75: 2391 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.973108067579726 },
                { start: 100, end: 300, density: 0.017794661601519546 },
                { start: 300, density: 0.009097270818754385 },
              ],
              percentiles: { p75: 10 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.68395 },
                { start: 2500, end: 4000, density: 0.19984999999999997 },
                { start: 4000, density: 0.11620000000000005 },
              ],
              percentiles: { p75: 2902 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.au/",
          normalizedUrl: "https://www.yara.com.au",
        },
      },
      extractedResults: {
        fcp: 2391,
        lcp: 2902,
        cls: "0.08",
        fid: 10,
      },
      timestamp: 1649424808560,
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
                { start: "0.00", end: "0.10", density: 0.9316 },
                { start: "0.10", end: "0.25", density: 0.0408 },
                { start: "0.25", density: 0.027600000000000013 },
              ],
              percentiles: { p75: "0.01" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.561943805619436 },
                { start: 1800, end: 3000, density: 0.26137386261373763 },
                { start: 3000, density: 0.17668233176682643 },
              ],
              percentiles: { p75: 2582 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9641071785642872 },
                { start: 100, end: 300, density: 0.026194761047790442 },
                { start: 300, density: 0.009698060387922402 },
              ],
              percentiles: { p75: 11 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.659363745498198 },
                { start: 2500, end: 4000, density: 0.20828331332532968 },
                { start: 4000, density: 0.13235294117647245 },
              ],
              percentiles: { p75: 3027 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.ec/",
          normalizedUrl: "https://www.yara.com.ec",
        },
      },
      extractedResults: {
        fcp: 2582,
        lcp: 3027,
        cls: "0.01",
        fid: 11,
      },
      timestamp: 1649424808742,
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
                  density: 0.7218721872187218,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.2053205320532053,
                },
                { start: "0.25", density: 0.07280728072807283 },
              ],
              percentiles: { p75: "0.11" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6277 },
                { start: 1800, end: 3000, density: 0.2683 },
                { start: 3000, density: 0.104 },
              ],
              percentiles: { p75: 2317 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9879024195160967 },
                { start: 100, end: 300, density: 0.012097580483903216 },
                { start: 300 },
              ],
              percentiles: { p75: 10 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7447000000000001 },
                { start: 2500, end: 4000, density: 0.1735 },
                { start: 4000, density: 0.08179999999999985 },
              ],
              percentiles: { p75: 2603 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.co.nz/",
          normalizedUrl: "https://www.yara.co.nz",
        },
      },
      extractedResults: {
        fcp: 2317,
        lcp: 2603,
        cls: "0.11",
        fid: 10,
      },
      timestamp: 1649424808938,
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
                  density: 0.9094909490949096,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.07330733073307331,
                },
                { start: "0.25", density: 0.01720172017201721 },
              ],
              percentiles: { p75: "0.01" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8122187781221871 },
                { start: 1800, end: 3000, density: 0.1452854714528546 },
                { start: 3000, density: 0.04249575042495828 },
              ],
              percentiles: { p75: 1622 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9582958295829583 },
                { start: 100, end: 300, density: 0.018001800180018 },
                { start: 300, density: 0.023702370237023648 },
              ],
              percentiles: { p75: 11 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8190042987103865 },
                { start: 2500, end: 4000, density: 0.13880835749275205 },
                { start: 4000, density: 0.042187343796861364 },
              ],
              percentiles: { p75: 2182 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.ro/",
          normalizedUrl: "https://www.yara.ro",
        },
      },
      extractedResults: {
        fcp: 1622,
        lcp: 2182,
        cls: "0.01",
        fid: 11,
      },
      timestamp: 1649424809113,
    },
    {
      url: "https://www.yara.com.co/",
      deviceTargeted: "DESKTOP",
      results: {
        record: {
          key: {
            formFactor: "DESKTOP",
            origin: "https://www.yara.com.co",
          },
          metrics: {
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.5810584958217271,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.3175487465181059,
                },
                { start: "0.25", density: 0.10139275766016703 },
              ],
              percentiles: { p75: "0.15" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7615965480043161 },
                { start: 1800, end: 3000, density: 0.14778856526429365 },
                { start: 3000, density: 0.09061488673139022 },
              ],
              percentiles: { p75: 1741 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9880893300248139 },
                { start: 100, end: 300, density: 0.0069478908188585625 },
                { start: 300, density: 0.004962779156327545 },
              ],
              percentiles: { p75: 2 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7498652291105117 },
                { start: 2500, end: 4000, density: 0.1283018867924528 },
                { start: 4000, density: 0.12183288409703553 },
              ],
              percentiles: { p75: 2515 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.co/",
          normalizedUrl: "https://www.yara.com.co",
        },
      },
      extractedResults: { fcp: 1741, lcp: 2515, cls: "0.15", fid: 2 },
      timestamp: 1649424852731,
    },
    {
      url: "https://www.yara.ru/",
      deviceTargeted: "DESKTOP",
      results: {
        record: {
          key: { formFactor: "DESKTOP", origin: "https://www.yara.ru" },
          metrics: {
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9968479117415289 },
                { start: 100, end: 300, density: 0.001576044129235619 },
                { start: 300, density: 0.001576044129235619 },
              ],
              percentiles: { p75: 2 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8169905106190691 },
                { start: 2500, end: 4000, density: 0.12336195210122002 },
                { start: 4000, density: 0.05964753727971088 },
              ],
              percentiles: { p75: 2112 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.776036866359447,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.21244239631336406,
                },
                { start: "0.25", density: 0.011520737327188947 },
              ],
              percentiles: { p75: "0.09" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7797218483624943 },
                { start: 1800, end: 3000, density: 0.1579183490354419 },
                { start: 3000, density: 0.06235980260206377 },
              ],
              percentiles: { p75: 1700 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.ru/",
          normalizedUrl: "https://www.yara.ru",
        },
      },
      extractedResults: { fcp: 1700, lcp: 2112, cls: "0.09", fid: 2 },
      timestamp: 1649424853012,
    },
    {
      url: "https://www.yara.com.pa/",
      deviceTargeted: "DESKTOP",
      results: {
        record: {
          key: {
            formFactor: "DESKTOP",
            origin: "https://www.yara.com.pa",
          },
          metrics: {
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8073654390934845,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.18649669499527854,
                },
                { start: "0.25", density: 0.006137865911237016 },
              ],
              percentiles: { p75: "0.06" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.840036563071298 },
                { start: 1800, end: 3000, density: 0.10374771480804387 },
                { start: 3000, density: 0.05621572212065814 },
              ],
              percentiles: { p75: 1489 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9852164730728616 },
                { start: 100, end: 300, density: 0.008447729672650476 },
                { start: 300, density: 0.006335797254487857 },
              ],
              percentiles: { p75: 2 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7391696750902527 },
                { start: 2500, end: 4000, density: 0.15388086642599272 },
                { start: 4000, density: 0.10694945848375462 },
              ],
              percentiles: { p75: 2535 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.pa/",
          normalizedUrl: "https://www.yara.com.pa",
        },
      },
      extractedResults: { fcp: 1489, lcp: 2535, cls: "0.06", fid: 2 },
      timestamp: 1649424853117,
    },
    {
      url: "https://www.yara.nl/",
      deviceTargeted: "TABLET",
      results: {
        record: {
          key: { formFactor: "TABLET", origin: "https://www.yara.nl" },
          metrics: {
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8356164383561645 },
                { start: 1800, end: 3000, density: 0.1232876712328767 },
                { start: 3000, density: 0.041095890410958895 },
              ],
              percentiles: { p75: 1567 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7419871794871796 },
                { start: 2500, end: 4000, density: 0.17467948717948714 },
                { start: 4000, density: 0.08333333333333333 },
              ],
              percentiles: { p75: 2515 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.912751677852349,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.06711409395973154,
                },
                { start: "0.25", density: 0.020134228187919455 },
              ],
              percentiles: { p75: "0.04" },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.nl/",
          normalizedUrl: "https://www.yara.nl",
        },
      },
      extractedResults: { fcp: 1567, lcp: 2515, cls: "0.04" },
      timestamp: 1649424853202,
    },
    {
      url: "https://www.yara.us/",
      deviceTargeted: "DESKTOP",
      results: {
        record: {
          key: { formFactor: "DESKTOP", origin: "https://www.yara.us" },
          metrics: {
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9901179470832006 },
                { start: 100, end: 300, density: 0.004781638508128786 },
                { start: 300, density: 0.005100414408670709 },
              ],
              percentiles: { p75: 3 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.763358778625954 },
                { start: 2500, end: 4000, density: 0.14712005551700202 },
                { start: 4000, density: 0.08952116585704395 },
              ],
              percentiles: { p75: 2542 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.6402173913043478,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.2811594202898551,
                },
                { start: "0.25", density: 0.07862318840579703 },
              ],
              percentiles: { p75: "0.13" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7894736842105261 },
                { start: 1800, end: 3000, density: 0.12336573918873617 },
                { start: 3000, density: 0.08716057660073766 },
              ],
              percentiles: { p75: 1651 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.us/",
          normalizedUrl: "https://www.yara.us",
        },
      },
      extractedResults: { fcp: 1651, lcp: 2542, cls: "0.13", fid: 3 },
      timestamp: 1649424853278,
    },
    {
      url: "https://www.yara.com.au/",
      deviceTargeted: "DESKTOP",
      results: {
        record: {
          key: {
            formFactor: "DESKTOP",
            origin: "https://www.yara.com.au",
          },
          metrics: {
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.5232126276694522,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.34145775301764164,
                },
                { start: "0.25", density: 0.13532961931290624 },
              ],
              percentiles: { p75: "0.19" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7334538061892929 },
                { start: 1800, end: 3000, density: 0.19290716060537602 },
                { start: 3000, density: 0.07363903320533108 },
              ],
              percentiles: { p75: 1918 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9972924187725632 },
                { start: 100, end: 300, density: 0.0013537906137184117 },
                { start: 300, density: 0.0013537906137184108 },
              ],
              percentiles: { p75: 2 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7667044167610418 },
                { start: 2500, end: 4000, density: 0.15220838052095126 },
                { start: 4000, density: 0.08108720271800683 },
              ],
              percentiles: { p75: 2509 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.au/",
          normalizedUrl: "https://www.yara.com.au",
        },
      },
      extractedResults: { fcp: 1918, lcp: 2509, cls: "0.19", fid: 2 },
      timestamp: 1649424853356,
    },
    {
      url: "https://www.yara.no/",
      deviceTargeted: "DESKTOP",
      results: {
        record: {
          key: { formFactor: "DESKTOP", origin: "https://www.yara.no" },
          metrics: {
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.6071578066136458,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.31477605692758476,
                },
                { start: "0.25", density: 0.07806613645876935 },
              ],
              percentiles: { p75: "0.12" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.96289500509684 },
                { start: 1800, end: 3000, density: 0.027930682976554533 },
                { start: 3000, density: 0.009174311926605434 },
              ],
              percentiles: { p75: 854 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9929724596391263 },
                { start: 100, end: 300, density: 0.004748338081671415 },
                { start: 300, density: 0.0022792022792022812 },
              ],
              percentiles: { p75: 2 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.9579065956575173 },
                { start: 2500, end: 4000, density: 0.030622695616550604 },
                { start: 4000, density: 0.01147070872593203 },
              ],
              percentiles: { p75: 1349 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.no/",
          normalizedUrl: "https://www.yara.no",
        },
      },
      extractedResults: { fcp: 854, lcp: 1349, cls: "0.12", fid: 2 },
      timestamp: 1649424853432,
    },
    {
      url: "https://www.yara.dk/",
      deviceTargeted: "DESKTOP",
      results: {
        record: {
          key: { formFactor: "DESKTOP", origin: "https://www.yara.dk" },
          metrics: {
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.915272531030761 },
                { start: 1800, end: 3000, density: 0.06619895664687894 },
                { start: 3000, density: 0.018528512322360084 },
              ],
              percentiles: { p75: 1111 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9934824731372204 },
                { start: 100, end: 300, density: 0.006517526862779636 },
                { start: 300 },
              ],
              percentiles: { p75: 2 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.9163955169920462 },
                { start: 2500, end: 4000, density: 0.06588937093275486 },
                { start: 4000, density: 0.017715112075198904 },
              ],
              percentiles: { p75: 1695 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.7228430115405753,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.24455028393478667,
                },
                { start: "0.25", density: 0.03260670452463817 },
              ],
              percentiles: { p75: "0.10" },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.dk/",
          normalizedUrl: "https://www.yara.dk",
        },
      },
      extractedResults: { fcp: 1111, lcp: 1695, cls: "0.10", fid: 2 },
      timestamp: 1649424853518,
    },
    {
      url: "https://www.yara.co.uk/",
      deviceTargeted: "TABLET",
      results: {
        record: {
          key: { formFactor: "TABLET", origin: "https://www.yara.co.uk" },
          metrics: {
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8894472361809045,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.045226130653266326,
                },
                { start: "0.25", density: 0.06532663316582918 },
              ],
              percentiles: { p75: "0.05" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.31658291457286447 },
                { start: 1800, end: 3000, density: 0.48743718592964824 },
                { start: 3000, density: 0.19597989949748734 },
              ],
              percentiles: { p75: 2782 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.8558558558558562 },
                { start: 100, end: 300, density: 0.04054054054054056 },
                { start: 300, density: 0.10360360360360311 },
              ],
              percentiles: { p75: 19 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.3965517241379309 },
                { start: 2500, end: 4000, density: 0.37192118226600956 },
                { start: 4000, density: 0.23152709359605958 },
              ],
              percentiles: { p75: 3843 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.co.uk/",
          normalizedUrl: "https://www.yara.co.uk",
        },
      },
      extractedResults: {
        fcp: 2782,
        lcp: 3843,
        cls: "0.05",
        fid: 19,
      },
      timestamp: 1649424853601,
    },
    {
      url: "https://www.yara.co.nz/",
      deviceTargeted: "DESKTOP",
      results: {
        record: {
          key: {
            formFactor: "DESKTOP",
            origin: "https://www.yara.co.nz",
          },
          metrics: {
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.5140554354236289,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.3719284450560252,
                },
                { start: "0.25", density: 0.11401611952034599 },
              ],
              percentiles: { p75: "0.14" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7200768491834774 },
                { start: 1800, end: 3000, density: 0.21805955811719502 },
                { start: 3000, density: 0.06186359269932756 },
              ],
              percentiles: { p75: 1937 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9947762493470311 },
                { start: 100, end: 300, density: 0.005223750652968831 },
                { start: 300 },
              ],
              percentiles: { p75: 3 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.804939712174251 },
                { start: 2500, end: 4000, density: 0.12057565149747175 },
                { start: 4000, density: 0.07448463632827718 },
              ],
              percentiles: { p75: 2289 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.co.nz/",
          normalizedUrl: "https://www.yara.co.nz",
        },
      },
      extractedResults: { fcp: 1937, lcp: 2289, cls: "0.14", fid: 3 },
      timestamp: 1649424853691,
    },
    {
      url: "https://www.yara.it/",
      deviceTargeted: "TABLET",
      results: {
        record: {
          key: { formFactor: "TABLET", origin: "https://www.yara.it" },
          metrics: {
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.978494623655914 },
                { start: 100, end: 300, density: 0.01612903225806452 },
                { start: 300, density: 0.005376344086021506 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8136792452830188 },
                { start: 2500, end: 4000, density: 0.14858490566037738 },
                { start: 4000, density: 0.03773584905660391 },
              ],
              percentiles: { p75: 2325 },
            },
            cumulative_layout_shift: {
              histogram: [
                { start: "0.00", end: "0.10", density: 0.925 },
                { start: "0.10", end: "0.25", density: 0.045 },
                { start: "0.25", density: 0.030000000000000013 },
              ],
              percentiles: { p75: "0.02" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8316326530612244 },
                { start: 1800, end: 3000, density: 0.13265306122448975 },
                { start: 3000, density: 0.03571428571428584 },
              ],
              percentiles: { p75: 1524 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.it/",
          normalizedUrl: "https://www.yara.it",
        },
      },
      extractedResults: {
        fcp: 1524,
        lcp: 2325,
        cls: "0.02",
        fid: 13,
      },
      timestamp: 1649424853800,
    },
    {
      url: "https://www.yara.fr/",
      deviceTargeted: "TABLET",
      results: {
        record: {
          key: { formFactor: "TABLET", origin: "https://www.yara.fr" },
          metrics: {
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6620795107033638 },
                { start: 2500, end: 4000, density: 0.2247706422018348 },
                { start: 4000, density: 0.11314984709480139 },
              ],
              percentiles: { p75: 3066 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9027355623100304,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.0486322188449848,
                },
                { start: "0.25", density: 0.048632218844984816 },
              ],
              percentiles: { p75: "0.04" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.683284457478006 },
                { start: 1800, end: 3000, density: 0.21407624633431083 },
                { start: 3000, density: 0.1026392961876831 },
              ],
              percentiles: { p75: 2134 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9071207430340558 },
                { start: 100, end: 300, density: 0.05572755417956657 },
                { start: 300, density: 0.03715170278637775 },
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
        fcp: 2134,
        lcp: 3066,
        cls: "0.04",
        fid: 14,
      },
      timestamp: 1649424853872,
    },
    {
      url: "https://www.yara.hr/",
      deviceTargeted: "TABLET",
      results: {
        record: {
          key: { formFactor: "TABLET", origin: "https://www.yara.hr" },
          metrics: {
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.976905311778291,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.009237875288683604,
                },
                { start: "0.25", density: 0.01385681293302541 },
              ],
              percentiles: { p75: "0.00" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.4046511627906974 },
                { start: 1800, end: 3000, density: 0.38604651162790676 },
                { start: 3000, density: 0.20930232558139578 },
              ],
              percentiles: { p75: 2861 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.8975609756097561 },
                { start: 100, end: 300, density: 0.06097560975609756 },
                { start: 300, density: 0.04146341463414629 },
              ],
              percentiles: { p75: 16 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.45747126436781604 },
                { start: 2500, end: 4000, density: 0.32183908045977 },
                { start: 4000, density: 0.22068965517241407 },
              ],
              percentiles: { p75: 3931 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.hr/",
          normalizedUrl: "https://www.yara.hr",
        },
      },
      extractedResults: {
        fcp: 2861,
        lcp: 3931,
        cls: "0.00",
        fid: 16,
      },
      timestamp: 1649424853947,
    },
    {
      url: "https://www.yara.de/",
      deviceTargeted: "TABLET",
      results: {
        record: {
          key: { formFactor: "TABLET", origin: "https://www.yara.de" },
          metrics: {
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9059829059829061,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.07264957264957267,
                },
                { start: "0.25", density: 0.021367521367521382 },
              ],
              percentiles: { p75: "0.06" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7809110629067245 },
                { start: 1800, end: 3000, density: 0.15835140997830807 },
                { start: 3000, density: 0.06073752711496741 },
              ],
              percentiles: { p75: 1691 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9011235955056179 },
                { start: 100, end: 300, density: 0.06292134831460676 },
                { start: 300, density: 0.03595505617977534 },
              ],
              percentiles: { p75: 14 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7002118644067797 },
                { start: 2500, end: 4000, density: 0.21504237288135603 },
                { start: 4000, density: 0.08474576271186443 },
              ],
              percentiles: { p75: 2687 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.de/",
          normalizedUrl: "https://www.yara.de",
        },
      },
      extractedResults: {
        fcp: 1691,
        lcp: 2687,
        cls: "0.06",
        fid: 14,
      },
      timestamp: 1649424854017,
    },
    {
      url: "https://www.yarabrasil.com.br/",
      deviceTargeted: "DESKTOP",
      results: {
        record: {
          key: {
            formFactor: "DESKTOP",
            origin: "https://www.yarabrasil.com.br",
          },
          metrics: {
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7516181229773468 },
                { start: 1800, end: 3000, density: 0.16019417475728162 },
                { start: 3000, density: 0.08818770226537165 },
              ],
              percentiles: { p75: 1855 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9777777777777779 },
                { start: 100, end: 300, density: 0.01241830065359477 },
                { start: 300, density: 0.009803921568627456 },
              ],
              percentiles: { p75: 3 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7223987291501188 },
                { start: 2500, end: 4000, density: 0.14892772041302613 },
                { start: 4000, density: 0.12867355043685508 },
              ],
              percentiles: { p75: 2770 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.762301918265221,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.19849874895746455,
                },
                { start: "0.25", density: 0.03919933277731445 },
              ],
              percentiles: { p75: "0.09" },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yarabrasil.com.br/",
          normalizedUrl: "https://www.yarabrasil.com.br",
        },
      },
      extractedResults: { fcp: 1855, lcp: 2770, cls: "0.09", fid: 3 },
      timestamp: 1649424854087,
    },
    {
      url: "https://www.yara.de/",
      deviceTargeted: "DESKTOP",
      results: {
        record: {
          key: { formFactor: "DESKTOP", origin: "https://www.yara.de" },
          metrics: {
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.9095031545741324 },
                { start: 2500, end: 4000, density: 0.06368296529968455 },
                { start: 4000, density: 0.026813880126182875 },
              ],
              percentiles: { p75: 1584 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.4104963384865745,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.3653376729048007,
                },
                { start: "0.25", density: 0.22416598860862472 },
              ],
              percentiles: { p75: "0.24" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.9222266087643113 },
                { start: 1800, end: 3000, density: 0.05448085274378209 },
                { start: 3000, density: 0.023292538491906697 },
              ],
              percentiles: { p75: 1024 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9952922714790114 },
                { start: 100, end: 300, density: 0.003138485680659082 },
                { start: 300, density: 0.001569242840329541 },
              ],
              percentiles: { p75: 3 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.de/",
          normalizedUrl: "https://www.yara.de",
        },
      },
      extractedResults: { fcp: 1024, lcp: 1584, cls: "0.24", fid: 3 },
      timestamp: 1649424854153,
    },
    {
      url: "https://www.yara.fr/",
      deviceTargeted: "DESKTOP",
      results: {
        record: {
          key: { formFactor: "DESKTOP", origin: "https://www.yara.fr" },
          metrics: {
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.49593106749640986,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.3781713738630924,
                },
                { start: "0.25", density: 0.12589755864049781 },
              ],
              percentiles: { p75: "0.16" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8438799076212475 },
                { start: 1800, end: 3000, density: 0.10946882217090077 },
                { start: 3000, density: 0.04665127020785167 },
              ],
              percentiles: { p75: 1464 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9679487179487181 },
                { start: 100, end: 300, density: 0.011904761904761904 },
                { start: 300, density: 0.020146520146520026 },
              ],
              percentiles: { p75: 2 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8262790697674425 },
                { start: 2500, end: 4000, density: 0.10860465116279075 },
                { start: 4000, density: 0.06511627906976669 },
              ],
              percentiles: { p75: 2174 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.fr/",
          normalizedUrl: "https://www.yara.fr",
        },
      },
      extractedResults: { fcp: 1464, lcp: 2174, cls: "0.16", fid: 2 },
      timestamp: 1649424854220,
    },
    {
      url: "https://www.yaracanada.ca/",
      deviceTargeted: "DESKTOP",
      results: {
        record: {
          key: {
            formFactor: "DESKTOP",
            origin: "https://www.yaracanada.ca",
          },
          metrics: {
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.6097139566135535,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.2862353618736802,
                },
                { start: "0.25", density: 0.10405068151276635 },
              ],
              percentiles: { p75: "0.14" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8239819853631076 },
                { start: 1800, end: 3000, density: 0.12779133045599553 },
                { start: 3000, density: 0.04822668418089694 },
              ],
              percentiles: { p75: 1574 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9911953945140535 },
                { start: 100, end: 300, density: 0.0057568574331188635 },
                { start: 300, density: 0.0030477480528276306 },
              ],
              percentiles: { p75: 2 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7742695570216777 },
                { start: 2500, end: 4000, density: 0.14297832233741756 },
                { start: 4000, density: 0.08275212064090487 },
              ],
              percentiles: { p75: 2447 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yaracanada.ca/",
          normalizedUrl: "https://www.yaracanada.ca",
        },
      },
      extractedResults: { fcp: 1574, lcp: 2447, cls: "0.14", fid: 2 },
      timestamp: 1649424854293,
    },
    {
      url: "https://www.yara.us/",
      deviceTargeted: "TABLET",
      results: {
        record: {
          key: { formFactor: "TABLET", origin: "https://www.yara.us" },
          metrics: {
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.689243027888446 },
                { start: 2500, end: 4000, density: 0.17928286852589634 },
                { start: 4000, density: 0.13147410358565748 },
              ],
              percentiles: { p75: 3239 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8726591760299625,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.09363295880149812,
                },
                { start: "0.25", density: 0.03370786516853934 },
              ],
              percentiles: { p75: "0.04" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6569343065693433 },
                { start: 1800, end: 3000, density: 0.2262773722627737 },
                { start: 3000, density: 0.1167883211678832 },
              ],
              percentiles: { p75: 2079 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9512195121951218 },
                { start: 100, end: 300, density: 0.03252032520325203 },
                { start: 300, density: 0.016260162601626015 },
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
        fcp: 2079,
        lcp: 3239,
        cls: "0.04",
        fid: 14,
      },
      timestamp: 1649424854364,
    },
    {
      url: "https://www.yara.ee/",
      deviceTargeted: "DESKTOP",
      results: {
        record: {
          key: { formFactor: "DESKTOP", origin: "https://www.yara.ee" },
          metrics: {
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9168320404113295,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.06855493415118166,
                },
                { start: "0.25", density: 0.014613025437488722 },
              ],
              percentiles: { p75: "0.05" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.9603374012921753 },
                { start: 1800, end: 3000, density: 0.034458004307250545 },
                { start: 3000, density: 0.0052045944005742984 },
              ],
              percentiles: { p75: 1010 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9958041958041959 },
                { start: 100, end: 300, density: 0.004195804195804196 },
                { start: 300 },
              ],
              percentiles: { p75: 2 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.9514878268710549 },
                { start: 2500, end: 4000, density: 0.029215509467989176 },
                { start: 4000, density: 0.019296663660955886 },
              ],
              percentiles: { p75: 1381 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.ee/",
          normalizedUrl: "https://www.yara.ee",
        },
      },
      extractedResults: { fcp: 1010, lcp: 1381, cls: "0.05", fid: 2 },
      timestamp: 1649424854433,
    },
    {
      url: "https://www.yara.pt/",
      deviceTargeted: "DESKTOP",
      results: {
        record: {
          key: { formFactor: "DESKTOP", origin: "https://www.yara.pt" },
          metrics: {
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8274244004171012,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.14546402502606884,
                },
                { start: "0.25", density: 0.027111574556830036 },
              ],
              percentiles: { p75: "0.06" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.9211195928753179 },
                { start: 1800, end: 3000, density: 0.05190839694656488 },
                { start: 3000, density: 0.0269720101781172 },
              ],
              percentiles: { p75: 1036 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9959246051961284 },
                { start: 100, end: 300, density: 0.004075394803871626 },
                { start: 300 },
              ],
              percentiles: { p75: 2 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8850486431131591 },
                { start: 2500, end: 4000, density: 0.08115719406041988 },
                { start: 4000, density: 0.03379416282642098 },
              ],
              percentiles: { p75: 1866 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.pt/",
          normalizedUrl: "https://www.yara.pt",
        },
      },
      extractedResults: { fcp: 1036, lcp: 1866, cls: "0.06", fid: 2 },
      timestamp: 1649424854501,
    },
    {
      url: "https://www.yara.com.ar/",
      deviceTargeted: "DESKTOP",
      results: {
        record: {
          key: {
            formFactor: "DESKTOP",
            origin: "https://www.yara.com.ar",
          },
          metrics: {
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8090390879478828,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.1555374592833876,
                },
                { start: "0.25", density: 0.03542345276872964 },
              ],
              percentiles: { p75: "0.08" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7391817466561763 },
                { start: 1800, end: 3000, density: 0.16876475216365064 },
                { start: 3000, density: 0.09205350118017314 },
              ],
              percentiles: { p75: 1860 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9916521739130435 },
                { start: 100, end: 300, density: 0.0069565217391304324 },
                { start: 300, density: 0.001391304347826088 },
              ],
              percentiles: { p75: 3 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7616508688783575 },
                { start: 2500, end: 4000, density: 0.12263033175355452 },
                { start: 4000, density: 0.11571879936808811 },
              ],
              percentiles: { p75: 2460 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.ar/",
          normalizedUrl: "https://www.yara.com.ar",
        },
      },
      extractedResults: { fcp: 1860, lcp: 2460, cls: "0.08", fid: 3 },
      timestamp: 1649424854567,
    },
    {
      url: "https://www.yaraagri.cz/",
      deviceTargeted: "DESKTOP",
      results: {
        record: {
          key: {
            formFactor: "DESKTOP",
            origin: "https://www.yaraagri.cz",
          },
          metrics: {
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9984935221452244 },
                { start: 100, end: 300 },
                { start: 300, density: 0.0015064778547755344 },
              ],
              percentiles: { p75: 2 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.9254729288975864 },
                { start: 2500, end: 4000, density: 0.046477495107632126 },
                { start: 4000, density: 0.028049575994781487 },
              ],
              percentiles: { p75: 1520 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.7794166946027489,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.17566208514917867,
                },
                { start: "0.25", density: 0.04492122024807241 },
              ],
              percentiles: { p75: "0.08" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.9414267015706808 },
                { start: 1800, end: 3000, density: 0.03893979057591623 },
                { start: 3000, density: 0.019633507853403162 },
              ],
              percentiles: { p75: 890 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yaraagri.cz/",
          normalizedUrl: "https://www.yaraagri.cz",
        },
      },
      extractedResults: { fcp: 890, lcp: 1520, cls: "0.08", fid: 2 },
      timestamp: 1649424854633,
    },
    {
      url: "https://www.yara.bo/",
      deviceTargeted: "DESKTOP",
      results: {
        record: {
          key: { formFactor: "DESKTOP", origin: "https://www.yara.bo" },
          metrics: {
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.5540015540015534 },
                { start: 2500, end: 4000, density: 0.17793317793317778 },
                { start: 4000, density: 0.26806526806526876 },
              ],
              percentiles: { p75: 4050 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.831973898858075,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.14600326264274063,
                },
                { start: "0.25", density: 0.022022838499184343 },
              ],
              percentiles: { p75: "0.06" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5283165244375481 },
                { start: 1800, end: 3000, density: 0.2730799069045769 },
                { start: 3000, density: 0.1986035686578751 },
              ],
              percentiles: { p75: 2700 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9891964888588791 },
                { start: 100, end: 300, density: 0.0054017555705604325 },
                { start: 300, density: 0.0054017555705604325 },
              ],
              percentiles: { p75: 2 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.bo/",
          normalizedUrl: "https://www.yara.bo",
        },
      },
      extractedResults: { fcp: 2700, lcp: 4050, cls: "0.06", fid: 2 },
      timestamp: 1649424854702,
    },
    {
      url: "https://www.yara.cr/",
      deviceTargeted: "DESKTOP",
      results: {
        record: {
          key: { formFactor: "DESKTOP", origin: "https://www.yara.cr" },
          metrics: {
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8438799076212472,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.13856812933025406,
                },
                { start: "0.25", density: 0.017551963048498855 },
              ],
              percentiles: { p75: "0.07" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8302895322939867 },
                { start: 1800, end: 3000, density: 0.1229398663697105 },
                { start: 3000, density: 0.04677060133630279 },
              ],
              percentiles: { p75: 1550 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9785491419656788 },
                { start: 100, end: 300, density: 0.00546021840873635 },
                { start: 300, density: 0.015990639625585026 },
              ],
              percentiles: { p75: 3 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.753442914260328 },
                { start: 2500, end: 4000, density: 0.13105286539315847 },
                { start: 4000, density: 0.11550422034651356 },
              ],
              percentiles: { p75: 2441 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.cr/",
          normalizedUrl: "https://www.yara.cr",
        },
      },
      extractedResults: { fcp: 1550, lcp: 2441, cls: "0.07", fid: 3 },
      timestamp: 1649424854772,
    },
    {
      url: "https://www.yara.fi/",
      deviceTargeted: "DESKTOP",
      results: {
        record: {
          key: { formFactor: "DESKTOP", origin: "https://www.yara.fi" },
          metrics: {
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.5108743897026187,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.37283621837549935,
                },
                { start: "0.25", density: 0.11628939192188201 },
              ],
              percentiles: { p75: "0.15" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.9379577768203361 },
                { start: 1800, end: 3000, density: 0.04696251615682895 },
                { start: 3000, density: 0.015079707022834971 },
              ],
              percentiles: { p75: 1052 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9902707275803723 },
                { start: 100, end: 300, density: 0.005076142131979696 },
                { start: 300, density: 0.004653130287648057 },
              ],
              percentiles: { p75: 2 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.887391304347826 },
                { start: 2500, end: 4000, density: 0.08782608695652173 },
                { start: 4000, density: 0.02478260869565223 },
              ],
              percentiles: { p75: 1845 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.fi/",
          normalizedUrl: "https://www.yara.fi",
        },
      },
      extractedResults: { fcp: 1052, lcp: 1845, cls: "0.15", fid: 2 },
      timestamp: 1649424854851,
    },
    {
      url: "https://www.yara.pl/",
      deviceTargeted: "DESKTOP",
      results: {
        record: {
          key: { formFactor: "DESKTOP", origin: "https://www.yara.pl" },
          metrics: {
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.4462755438365195,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.4113381674357285,
                },
                { start: "0.25", density: 0.14238628872775208 },
              ],
              percentiles: { p75: "0.17" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.9172592113768585 },
                { start: 1800, end: 3000, density: 0.0646412411118293 },
                { start: 3000, density: 0.01809954751131219 },
              ],
              percentiles: { p75: 1183 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9969660194174756 },
                { start: 100, end: 300, density: 0.0030339805825242714 },
                { start: 300 },
              ],
              percentiles: { p75: 2 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8730057434588386 },
                { start: 2500, end: 4000, density: 0.0970006381620932 },
                { start: 4000, density: 0.02999361837906808 },
              ],
              percentiles: { p75: 1797 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.pl/",
          normalizedUrl: "https://www.yara.pl",
        },
      },
      extractedResults: { fcp: 1183, lcp: 1797, cls: "0.17", fid: 2 },
      timestamp: 1649424854925,
    },
    {
      url: "https://www.yara.gr/",
      deviceTargeted: "TABLET",
      results: {
        record: {
          key: { formFactor: "TABLET", origin: "https://www.yara.gr" },
          metrics: {
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9357541899441342,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.05307262569832402,
                },
                { start: "0.25", density: 0.011173184357541896 },
              ],
              percentiles: { p75: "0.00" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7349726775956285 },
                { start: 1800, end: 3000, density: 0.18579234972677597 },
                { start: 3000, density: 0.07923497267759565 },
              ],
              percentiles: { p75: 1877 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9248554913294799 },
                { start: 100, end: 300, density: 0.04624277456647399 },
                { start: 300, density: 0.028901734104046246 },
              ],
              percentiles: { p75: 14 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.707977207977208 },
                { start: 2500, end: 4000, density: 0.1780626780626781 },
                { start: 4000, density: 0.1139601139601139 },
              ],
              percentiles: { p75: 2878 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.gr/",
          normalizedUrl: "https://www.yara.gr",
        },
      },
      extractedResults: {
        fcp: 1877,
        lcp: 2878,
        cls: "0.00",
        fid: 14,
      },
      timestamp: 1649424855000,
    },
    {
      url: "https://www.yara.com.gt/",
      deviceTargeted: "DESKTOP",
      results: {
        record: {
          key: {
            formFactor: "DESKTOP",
            origin: "https://www.yara.com.gt",
          },
          metrics: {
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7844863731656181 },
                { start: 1800, end: 3000, density: 0.14339622641509434 },
                { start: 3000, density: 0.07211740041928762 },
              ],
              percentiles: { p75: 1705 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9820359281437125 },
                { start: 100, end: 300, density: 0.003170130327580134 },
                { start: 300, density: 0.014793941528707302 },
              ],
              percentiles: { p75: 3 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.727061310782241 },
                { start: 2500, end: 4000, density: 0.154122621564482 },
                { start: 4000, density: 0.11881606765327697 },
              ],
              percentiles: { p75: 2754 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8323876036665212,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.14142295940637276,
                },
                { start: "0.25", density: 0.026189436927106072 },
              ],
              percentiles: { p75: "0.07" },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.gt/",
          normalizedUrl: "https://www.yara.com.gt",
        },
      },
      extractedResults: { fcp: 1705, lcp: 2754, cls: "0.07", fid: 3 },
      timestamp: 1649424855087,
    },
    {
      url: "https://www.yara.hu/",
      deviceTargeted: "DESKTOP",
      results: {
        record: {
          key: { formFactor: "DESKTOP", origin: "https://www.yara.hu" },
          metrics: {
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.844889573703133,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.1319979455572676,
                },
                { start: "0.25", density: 0.02311248073959939 },
              ],
              percentiles: { p75: "0.08" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.9386009058882737 },
                { start: 1800, end: 3000, density: 0.0498238550578762 },
                { start: 3000, density: 0.011575239053850054 },
              ],
              percentiles: { p75: 1110 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9985734664764622 },
                { start: 100, end: 300, density: 0.001426533523537803 },
                { start: 300 },
              ],
              percentiles: { p75: 2 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8739516526887027 },
                { start: 2500, end: 4000, density: 0.10532807104094723 },
                { start: 4000, density: 0.020720276270350182 },
              ],
              percentiles: { p75: 1831 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.hu/",
          normalizedUrl: "https://www.yara.hu",
        },
      },
      extractedResults: { fcp: 1110, lcp: 1831, cls: "0.08", fid: 2 },
      timestamp: 1649424855159,
    },
    {
      url: "https://www.yara.it/",
      deviceTargeted: "DESKTOP",
      results: {
        record: {
          key: { formFactor: "DESKTOP", origin: "https://www.yara.it" },
          metrics: {
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.9152385363594256 },
                { start: 1800, end: 3000, density: 0.04955998147290413 },
                { start: 3000, density: 0.03520148216767025 },
              ],
              percentiles: { p75: 1087 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.997737556561086 },
                { start: 100, end: 300, density: 0.0018099547511312218 },
                { start: 300, density: 0.00045248868778280545 },
              ],
              percentiles: { p75: 2 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8924458774758177 },
                { start: 2500, end: 4000, density: 0.07300783049286043 },
                { start: 4000, density: 0.03454629203132201 },
              ],
              percentiles: { p75: 1729 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9468235294117647,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.032941176470588245,
                },
                { start: "0.25", density: 0.02023529411764704 },
              ],
              percentiles: { p75: "0.04" },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.it/",
          normalizedUrl: "https://www.yara.it",
        },
      },
      extractedResults: { fcp: 1087, lcp: 1729, cls: "0.04", fid: 2 },
      timestamp: 1649424855239,
    },
    {
      url: "https://www.yara.se/",
      deviceTargeted: "DESKTOP",
      results: {
        record: {
          key: { formFactor: "DESKTOP", origin: "https://www.yara.se" },
          metrics: {
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.6164504716981132,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.3116155660377358,
                },
                { start: "0.25", density: 0.07193396226415097 },
              ],
              percentiles: { p75: "0.12" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.9562126812624395 },
                { start: 1800, end: 3000, density: 0.03810065396644867 },
                { start: 3000, density: 0.00568666477111176 },
              ],
              percentiles: { p75: 1010 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9947104677060133 },
                { start: 100, end: 300, density: 0.005289532293986636 },
                { start: 300 },
              ],
              percentiles: { p75: 2 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.9317142857142856 },
                { start: 2500, end: 4000, density: 0.05457142857142857 },
                { start: 4000, density: 0.013714285714285715 },
              ],
              percentiles: { p75: 1563 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.se/",
          normalizedUrl: "https://www.yara.se",
        },
      },
      extractedResults: { fcp: 1010, lcp: 1563, cls: "0.12", fid: 2 },
      timestamp: 1649424855304,
    },
    {
      url: "https://www.yara.es/",
      deviceTargeted: "DESKTOP",
      results: {
        record: {
          key: { formFactor: "DESKTOP", origin: "https://www.yara.es" },
          metrics: {
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.523539421440726,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.33352240499149177,
                },
                { start: "0.25", density: 0.1429381735677823 },
              ],
              percentiles: { p75: "0.17" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8906163242642977 },
                { start: 1800, end: 3000, density: 0.07773459189339257 },
                { start: 3000, density: 0.031649083842309716 },
              ],
              percentiles: { p75: 1269 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9984251968503937 },
                { start: 100, end: 300, density: 0.0015748031496062992 },
                { start: 300 },
              ],
              percentiles: { p75: 2 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8726519337016576 },
                { start: 2500, end: 4000, density: 0.0864640883977901 },
                { start: 4000, density: 0.04088397790055223 },
              ],
              percentiles: { p75: 1865 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.es/",
          normalizedUrl: "https://www.yara.es",
        },
      },
      extractedResults: { fcp: 1269, lcp: 1865, cls: "0.17", fid: 2 },
      timestamp: 1649424855368,
    },
    {
      url: "https://www.yara.lt/",
      deviceTargeted: "DESKTOP",
      results: {
        record: {
          key: { formFactor: "DESKTOP", origin: "https://www.yara.lt" },
          metrics: {
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.774909420289855,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.21150362318840576,
                },
                { start: "0.25", density: 0.013586956521739137 },
              ],
              percentiles: { p75: "0.09" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.9472984942426926 },
                { start: 1800, end: 3000, density: 0.039415411868910545 },
                { start: 3000, density: 0.013286093888396818 },
              ],
              percentiles: { p75: 1043 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 1 },
                { start: 100, end: 300 },
                { start: 300 },
              ],
              percentiles: { p75: 1 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.9058456046407852 },
                { start: 2500, end: 4000, density: 0.07228915662650603 },
                { start: 4000, density: 0.021865238732708632 },
              ],
              percentiles: { p75: 1701 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.lt/",
          normalizedUrl: "https://www.yara.lt",
        },
      },
      extractedResults: { fcp: 1043, lcp: 1701, cls: "0.09", fid: 1 },
      timestamp: 1649424855431,
    },
    {
      url: "https://www.yara.ua/",
      deviceTargeted: "DESKTOP",
      results: {
        record: {
          key: { formFactor: "DESKTOP", origin: "https://www.yara.ua" },
          metrics: {
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9967948717948718 },
                { start: 100, end: 300, density: 0.003205128205128205 },
                { start: 300 },
              ],
              percentiles: { p75: 2 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8074454428754813 },
                { start: 2500, end: 4000, density: 0.1309370988446726 },
                { start: 4000, density: 0.061617458279846084 },
              ],
              percentiles: { p75: 2198 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.5855737704918033,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.36655737704918023,
                },
                { start: "0.25", density: 0.0478688524590164 },
              ],
              percentiles: { p75: "0.16" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8434946574481453 },
                { start: 1800, end: 3000, density: 0.08988057825267125 },
                { start: 3000, density: 0.06662476429918339 },
              ],
              percentiles: { p75: 1458 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.ua/",
          normalizedUrl: "https://www.yara.ua",
        },
      },
      extractedResults: { fcp: 1458, lcp: 2198, cls: "0.16", fid: 2 },
      timestamp: 1649424855495,
    },
    {
      url: "https://www.yara.lv/",
      deviceTargeted: "DESKTOP",
      results: {
        record: {
          key: { formFactor: "DESKTOP", origin: "https://www.yara.lv" },
          metrics: {
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.954102483495756,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.04401131719585036,
                },
                { start: "0.25", density: 0.0018861993083935864 },
              ],
              percentiles: { p75: "0.05" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.9009174311926607 },
                { start: 1800, end: 3000, density: 0.07339449541284404 },
                { start: 3000, density: 0.0256880733944954 },
              ],
              percentiles: { p75: 1210 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9918943260282198 },
                { start: 100, end: 300, density: 0.0054037826478534985 },
                { start: 300, density: 0.0027018913239267492 },
              ],
              percentiles: { p75: 2 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8444034440344402 },
                { start: 2500, end: 4000, density: 0.12115621156211558 },
                { start: 4000, density: 0.03444034440344416 },
              ],
              percentiles: { p75: 2025 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.lv/",
          normalizedUrl: "https://www.yara.lv",
        },
      },
      extractedResults: { fcp: 1210, lcp: 2025, cls: "0.05", fid: 2 },
      timestamp: 1649424855568,
    },
    {
      url: "https://www.yara.no/",
      deviceTargeted: "TABLET",
      results: {
        record: {
          key: { formFactor: "TABLET", origin: "https://www.yara.no" },
          metrics: {
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9065743944636679,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.05536332179930795,
                },
                { start: "0.25", density: 0.038062283737024236 },
              ],
              percentiles: { p75: "0.03" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8592592592592593 },
                { start: 1800, end: 3000, density: 0.10370370370370371 },
                { start: 3000, density: 0.03703703703703704 },
              ],
              percentiles: { p75: 1499 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7899305555555556 },
                { start: 2500, end: 4000, density: 0.1475694444444445 },
                { start: 4000, density: 0.06249999999999996 },
              ],
              percentiles: { p75: 2310 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.no/",
          normalizedUrl: "https://www.yara.no",
        },
      },
      extractedResults: { fcp: 1499, lcp: 2310, cls: "0.03" },
      timestamp: 1649424855646,
    },
    {
      url: "https://www.yara.co.th/",
      deviceTargeted: "DESKTOP",
      results: {
        record: {
          key: {
            formFactor: "DESKTOP",
            origin: "https://www.yara.co.th",
          },
          metrics: {
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9350912778904664,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.023326572008113586,
                },
                { start: "0.25", density: 0.041582150101419864 },
              ],
              percentiles: { p75: "0.02" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.912518853695324 },
                { start: 1800, end: 3000, density: 0.06435394670688788 },
                { start: 3000, density: 0.02312719959778798 },
              ],
              percentiles: { p75: 1148 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9973787680209698 },
                { start: 100, end: 300, density: 0.001747487986020096 },
                { start: 300, density: 0.000873743993010048 },
              ],
              percentiles: { p75: 2 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8675529295913346 },
                { start: 2500, end: 4000, density: 0.08025603151157067 },
                { start: 4000, density: 0.05219103889709477 },
              ],
              percentiles: { p75: 1710 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.co.th/",
          normalizedUrl: "https://www.yara.co.th",
        },
      },
      extractedResults: { fcp: 1148, lcp: 1710, cls: "0.02", fid: 2 },
      timestamp: 1649424855715,
    },
    {
      url: "https://www.yara.hu/",
      deviceTargeted: "TABLET",
      results: {
        record: {
          key: { formFactor: "TABLET", origin: "https://www.yara.hu" },
          metrics: {
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8978494623655914,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.06989247311827958,
                },
                { start: "0.25", density: 0.032258064516129045 },
              ],
              percentiles: { p75: "0.02" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6858638743455493 },
                { start: 1800, end: 3000, density: 0.1937172774869109 },
                { start: 3000, density: 0.1204188481675397 },
              ],
              percentiles: { p75: 1964 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.hu/",
          normalizedUrl: "https://www.yara.hu",
        },
      },
      extractedResults: { fcp: 1964, cls: "0.02" },
      timestamp: 1649424855783,
    },
    {
      url: "https://www.yara.com/",
      deviceTargeted: "DESKTOP",
      results: {
        record: {
          key: { formFactor: "DESKTOP", origin: "https://www.yara.com" },
          metrics: {
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.7343714220288527,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.21616670483169229,
                },
                { start: "0.25", density: 0.049461873139454965 },
              ],
              percentiles: { p75: "0.10" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8746939683952821 },
                { start: 1800, end: 3000, density: 0.0859114177609615 },
                { start: 3000, density: 0.03939461384375639 },
              ],
              percentiles: { p75: 1189 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9933008526187577 },
                { start: 100, end: 300, density: 0.003654080389768576 },
                { start: 300, density: 0.0030450669914738058 },
              ],
              percentiles: { p75: 2 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8474215246636773 },
                { start: 2500, end: 4000, density: 0.09517937219730946 },
                { start: 4000, density: 0.05739910313901341 },
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
      extractedResults: { fcp: 1189, lcp: 1858, cls: "0.10", fid: 2 },
      timestamp: 1649424855846,
    },
    {
      url: "https://www.yara.be/",
      deviceTargeted: "DESKTOP",
      results: {
        record: {
          key: { formFactor: "DESKTOP", origin: "https://www.yara.be" },
          metrics: {
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.5416386083052751,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.32166105499438835,
                },
                { start: "0.25", density: 0.13670033670033663 },
              ],
              percentiles: { p75: "0.14" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.9299405155320555 },
                { start: 1800, end: 3000, density: 0.04648601013439083 },
                { start: 3000, density: 0.023573474333553623 },
              ],
              percentiles: { p75: 986 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9926231286613149 },
                { start: 100, end: 300, density: 0.003905402473421567 },
                { start: 300, density: 0.0034714688652636157 },
              ],
              percentiles: { p75: 2 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8983480176211454 },
                { start: 2500, end: 4000, density: 0.07654185022026434 },
                { start: 4000, density: 0.025110132158590315 },
              ],
              percentiles: { p75: 1748 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.be/",
          normalizedUrl: "https://www.yara.be",
        },
      },
      extractedResults: { fcp: 986, lcp: 1748, cls: "0.14", fid: 2 },
      timestamp: 1649424855910,
    },
    {
      url: "https://www.yara.be/fr-be/",
      deviceTargeted: "DESKTOP",
      results: {
        record: {
          key: { formFactor: "DESKTOP", origin: "https://www.yara.be" },
          metrics: {
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.5416386083052751,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.32166105499438835,
                },
                { start: "0.25", density: 0.13670033670033663 },
              ],
              percentiles: { p75: "0.14" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.9299405155320555 },
                { start: 1800, end: 3000, density: 0.04648601013439083 },
                { start: 3000, density: 0.023573474333553623 },
              ],
              percentiles: { p75: 986 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9926231286613149 },
                { start: 100, end: 300, density: 0.003905402473421567 },
                { start: 300, density: 0.0034714688652636157 },
              ],
              percentiles: { p75: 2 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8983480176211454 },
                { start: 2500, end: 4000, density: 0.07654185022026434 },
                { start: 4000, density: 0.025110132158590315 },
              ],
              percentiles: { p75: 1748 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.be/fr-be/",
          normalizedUrl: "https://www.yara.be",
        },
      },
      extractedResults: { fcp: 986, lcp: 1748, cls: "0.14", fid: 2 },
      timestamp: 1649424855975,
    },
    {
      url: "https://www.yara.es/",
      deviceTargeted: "TABLET",
      results: {
        record: {
          key: { formFactor: "TABLET", origin: "https://www.yara.es" },
          metrics: {
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8645533141210374,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.07492795389048991,
                },
                { start: "0.25", density: 0.06051873198847262 },
              ],
              percentiles: { p75: "0.04" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8042168674698802 },
                { start: 1800, end: 3000, density: 0.11445783132530127 },
                { start: 3000, density: 0.08132530120481862 },
              ],
              percentiles: { p75: 1701 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9491525423728813 },
                { start: 100, end: 300, density: 0.025423728813559324 },
                { start: 300, density: 0.02542372881355935 },
              ],
              percentiles: { p75: 18 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7327327327327329 },
                { start: 2500, end: 4000, density: 0.18018018018018023 },
                { start: 4000, density: 0.08708708708708691 },
              ],
              percentiles: { p75: 2724 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.es/",
          normalizedUrl: "https://www.yara.es",
        },
      },
      extractedResults: {
        fcp: 1701,
        lcp: 2724,
        cls: "0.04",
        fid: 18,
      },
      timestamp: 1649424856039,
    },
    {
      url: "https://www.yara.my/",
      deviceTargeted: "DESKTOP",
      results: {
        record: {
          key: { formFactor: "DESKTOP", origin: "https://www.yara.my" },
          metrics: {
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8475734791524264 },
                { start: 2500, end: 4000, density: 0.06903622693096378 },
                { start: 4000, density: 0.08339029391660986 },
              ],
              percentiles: { p75: 1813 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.5294530154277701,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.30925666199158486,
                },
                { start: "0.25", density: 0.16129032258064496 },
              ],
              percentiles: { p75: "0.16" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8641810918774964 },
                { start: 1800, end: 3000, density: 0.07656458055925429 },
                { start: 3000, density: 0.05925432756324931 },
              ],
              percentiles: { p75: 1439 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9936046511627907 },
                { start: 100, end: 300 },
                { start: 300, density: 0.006395348837209301 },
              ],
              percentiles: { p75: 2 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.my/",
          normalizedUrl: "https://www.yara.my",
        },
      },
      extractedResults: { fcp: 1439, lcp: 1813, cls: "0.16", fid: 2 },
      timestamp: 1649424856111,
    },
    {
      url: "https://www.yara.in/",
      deviceTargeted: "DESKTOP",
      results: {
        record: {
          key: { formFactor: "DESKTOP", origin: "https://www.yara.in" },
          metrics: {
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.980802792321117 },
                { start: 100, end: 300, density: 0.013089005235602094 },
                { start: 300, density: 0.006108202443280979 },
              ],
              percentiles: { p75: 2 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7783653846153848 },
                { start: 2500, end: 4000, density: 0.10817307692307696 },
                { start: 4000, density: 0.11346153846153828 },
              ],
              percentiles: { p75: 2255 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.545816733067729,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.32868525896414347,
                },
                { start: "0.25", density: 0.12549800796812746 },
              ],
              percentiles: { p75: "0.16" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7814634146341464 },
                { start: 1800, end: 3000, density: 0.12097560975609754 },
                { start: 3000, density: 0.09756097560975603 },
              ],
              percentiles: { p75: 1688 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.in/",
          normalizedUrl: "https://www.yara.in",
        },
      },
      extractedResults: { fcp: 1688, lcp: 2255, cls: "0.16", fid: 2 },
      timestamp: 1649424856175,
    },
    {
      url: "https://www.yara.kr/",
      deviceTargeted: "DESKTOP",
      results: {
        record: {
          key: { formFactor: "DESKTOP", origin: "https://www.yara.kr" },
          metrics: {
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9646130888936262,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.028138989554466004,
                },
                { start: "0.25", density: 0.007247921551907916 },
              ],
              percentiles: { p75: "0.01" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8521141428868986 },
                { start: 1800, end: 3000, density: 0.12059987502603622 },
                { start: 3000, density: 0.027285982087065192 },
              ],
              percentiles: { p75: 1439 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9977043969627406 },
                { start: 100, end: 300, density: 0.0022956030372594033 },
                { start: 300 },
              ],
              percentiles: { p75: 1 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8335739327696433 },
                { start: 2500, end: 4000, density: 0.08640956898329555 },
                { start: 4000, density: 0.08001649824706125 },
              ],
              percentiles: { p75: 2015 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.kr/",
          normalizedUrl: "https://www.yara.kr",
        },
      },
      extractedResults: { fcp: 1439, lcp: 2015, cls: "0.01", fid: 1 },
      timestamp: 1649424856248,
    },
    {
      url: "https://www.yara.com.pe/",
      deviceTargeted: "DESKTOP",
      results: {
        record: {
          key: {
            formFactor: "DESKTOP",
            origin: "https://www.yara.com.pe",
          },
          metrics: {
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9967544175982691 },
                { start: 100, end: 300, density: 0.0021637216011539846 },
                { start: 300, density: 0.0010818608005769919 },
              ],
              percentiles: { p75: 2 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7119607843137254 },
                { start: 2500, end: 4000, density: 0.15784313725490193 },
                { start: 4000, density: 0.13019607843137251 },
              ],
              percentiles: { p75: 2791 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.7750102082482646,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.20416496529195588,
                },
                { start: "0.25", density: 0.020824826459779497 },
              ],
              percentiles: { p75: "0.09" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7257812499999995 },
                { start: 1800, end: 3000, density: 0.19296874999999977 },
                { start: 3000, density: 0.08125000000000059 },
              ],
              percentiles: { p75: 1906 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.pe/",
          normalizedUrl: "https://www.yara.com.pe",
        },
      },
      extractedResults: { fcp: 1906, lcp: 2791, cls: "0.09", fid: 2 },
      timestamp: 1649424856325,
    },
    {
      url: "https://www.yara.com.ec/",
      deviceTargeted: "DESKTOP",
      results: {
        record: {
          key: {
            formFactor: "DESKTOP",
            origin: "https://www.yara.com.ec",
          },
          metrics: {
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8242677824267781,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.15660490137477584,
                },
                { start: "0.25", density: 0.019127316198445918 },
              ],
              percentiles: { p75: "0.07" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6764705882352939 },
                { start: 1800, end: 3000, density: 0.21741637831603225 },
                { start: 3000, density: 0.10611303344867377 },
              ],
              percentiles: { p75: 2122 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 1 },
                { start: 100, end: 300 },
                { start: 300 },
              ],
              percentiles: { p75: 2 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6817109144542773 },
                { start: 2500, end: 4000, density: 0.16430678466076698 },
                { start: 4000, density: 0.15398230088495568 },
              ],
              percentiles: { p75: 3089 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.ec/",
          normalizedUrl: "https://www.yara.com.ec",
        },
      },
      extractedResults: { fcp: 2122, lcp: 3089, cls: "0.07", fid: 2 },
      timestamp: 1649424856385,
    },
    {
      url: "https://www.yara.cl/",
      deviceTargeted: "DESKTOP",
      results: {
        record: {
          key: { formFactor: "DESKTOP", origin: "https://www.yara.cl" },
          metrics: {
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.5870384325546345,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.2886209495101733,
                },
                { start: "0.25", density: 0.12434061793519226 },
              ],
              percentiles: { p75: "0.16" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6675108538350215 },
                { start: 1800, end: 3000, density: 0.23154848046309687 },
                { start: 3000, density: 0.10094066570188168 },
              ],
              percentiles: { p75: 2147 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9875588433086752 },
                { start: 100, end: 300, density: 0.010087424344317418 },
                { start: 300, density: 0.0023537323470073975 },
              ],
              percentiles: { p75: 2 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.666420936232953 },
                { start: 2500, end: 4000, density: 0.14743826022852952 },
                { start: 4000, density: 0.18614080353851742 },
              ],
              percentiles: { p75: 3385 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.cl/",
          normalizedUrl: "https://www.yara.cl",
        },
      },
      extractedResults: { fcp: 2147, lcp: 3385, cls: "0.16", fid: 2 },
      timestamp: 1649424856453,
    },
    {
      url: "https://www.yara.fi/",
      deviceTargeted: "TABLET",
      results: {
        record: {
          key: { formFactor: "TABLET", origin: "https://www.yara.fi" },
          metrics: {
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9194214876033058,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.06404958677685951,
                },
                { start: "0.25", density: 0.016528925619834704 },
              ],
              percentiles: { p75: "0.03" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8322717622080679 },
                { start: 1800, end: 3000, density: 0.12314225053078556 },
                { start: 3000, density: 0.044585987261146466 },
              ],
              percentiles: { p75: 1576 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9062500000000004 },
                { start: 100, end: 300, density: 0.03750000000000002 },
                { start: 300, density: 0.05624999999999954 },
              ],
              percentiles: { p75: 19 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7041237113402062 },
                { start: 2500, end: 4000, density: 0.21752577319587635 },
                { start: 4000, density: 0.07835051546391747 },
              ],
              percentiles: { p75: 2731 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.fi/",
          normalizedUrl: "https://www.yara.fi",
        },
      },
      extractedResults: {
        fcp: 1576,
        lcp: 2731,
        cls: "0.03",
        fid: 19,
      },
      timestamp: 1649424856516,
    },
    {
      url: "https://www.yara.se/",
      deviceTargeted: "TABLET",
      results: {
        record: {
          key: { formFactor: "TABLET", origin: "https://www.yara.se" },
          metrics: {
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.795539033457249 },
                { start: 2500, end: 4000, density: 0.17472118959107802 },
                { start: 4000, density: 0.029739776951672882 },
              ],
              percentiles: { p75: 2285 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.874087591240876,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.10948905109489053,
                },
                { start: "0.25", density: 0.01642335766423358 },
              ],
              percentiles: { p75: "0.04" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8981132075471698 },
                { start: 1800, end: 3000, density: 0.08113207547169816 },
                { start: 3000, density: 0.020754716981132085 },
              ],
              percentiles: { p75: 1430 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9128014842300558 },
                { start: 100, end: 300, density: 0.025974025974025972 },
                { start: 300, density: 0.061224489795918324 },
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
        fcp: 1430,
        lcp: 2285,
        cls: "0.04",
        fid: 13,
      },
      timestamp: 1649424856587,
    },
    {
      url: "https://www.yaracanada.ca/fr-ca/",
      deviceTargeted: "DESKTOP",
      results: {
        record: {
          key: {
            formFactor: "DESKTOP",
            origin: "https://www.yaracanada.ca",
          },
          metrics: {
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.6097139566135535,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.2862353618736802,
                },
                { start: "0.25", density: 0.10405068151276635 },
              ],
              percentiles: { p75: "0.14" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8239819853631076 },
                { start: 1800, end: 3000, density: 0.12779133045599553 },
                { start: 3000, density: 0.04822668418089694 },
              ],
              percentiles: { p75: 1574 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9911953945140535 },
                { start: 100, end: 300, density: 0.0057568574331188635 },
                { start: 300, density: 0.0030477480528276306 },
              ],
              percentiles: { p75: 2 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7742695570216777 },
                { start: 2500, end: 4000, density: 0.14297832233741756 },
                { start: 4000, density: 0.08275212064090487 },
              ],
              percentiles: { p75: 2447 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yaracanada.ca/fr-ca/",
          normalizedUrl: "https://www.yaracanada.ca",
        },
      },
      extractedResults: { fcp: 1574, lcp: 2447, cls: "0.14", fid: 2 },
      timestamp: 1649424856653,
    },
    {
      url: "https://www.yara.gr/",
      deviceTargeted: "DESKTOP",
      results: {
        record: {
          key: { formFactor: "DESKTOP", origin: "https://www.yara.gr" },
          metrics: {
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9570502431118315,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.024311183144246355,
                },
                { start: "0.25", density: 0.01863857374392221 },
              ],
              percentiles: { p75: "0.03" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8707102952913005 },
                { start: 1800, end: 3000, density: 0.09098164405426973 },
                { start: 3000, density: 0.03830806065442981 },
              ],
              percentiles: { p75: 1419 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9963872832369942 },
                { start: 100, end: 300, density: 0.0021676300578034684 },
                { start: 300, density: 0.0014450867052023123 },
              ],
              percentiles: { p75: 2 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7808000000000007 },
                { start: 2500, end: 4000, density: 0.14560000000000017 },
                { start: 4000, density: 0.07359999999999907 },
              ],
              percentiles: { p75: 2356 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.gr/",
          normalizedUrl: "https://www.yara.gr",
        },
      },
      extractedResults: { fcp: 1419, lcp: 2356, cls: "0.03", fid: 2 },
      timestamp: 1649424856713,
    },
    {
      url: "https://www.yara.hr/",
      deviceTargeted: "DESKTOP",
      results: {
        record: {
          key: { formFactor: "DESKTOP", origin: "https://www.yara.hr" },
          metrics: {
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8605388272583201,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.12678288431061807,
                },
                { start: "0.25", density: 0.012678288431061802 },
              ],
              percentiles: { p75: "0.04" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7511811023622045 },
                { start: 1800, end: 3000, density: 0.18582677165354328 },
                { start: 3000, density: 0.06299212598425212 },
              ],
              percentiles: { p75: 1839 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9932975871313673 },
                { start: 100, end: 300, density: 0.005361930294906165 },
                { start: 300, density: 0.0013404825737265414 },
              ],
              percentiles: { p75: 2 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.751891074130106 },
                { start: 2500, end: 4000, density: 0.1573373676248109 },
                { start: 4000, density: 0.09077155824508319 },
              ],
              percentiles: { p75: 2485 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.hr/",
          normalizedUrl: "https://www.yara.hr",
        },
      },
      extractedResults: { fcp: 1839, lcp: 2485, cls: "0.04", fid: 2 },
      timestamp: 1649424856784,
    },
    {
      url: "https://www.yara.nl/",
      deviceTargeted: "DESKTOP",
      results: {
        record: {
          key: { formFactor: "DESKTOP", origin: "https://www.yara.nl" },
          metrics: {
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.5945136007376671,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.31420009220839096,
                },
                { start: "0.25", density: 0.09128630705394196 },
              ],
              percentiles: { p75: "0.14" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.9249547920433996 },
                { start: 1800, end: 3000, density: 0.03910488245931283 },
                { start: 3000, density: 0.035940325497287554 },
              ],
              percentiles: { p75: 1045 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.992874109263658 },
                { start: 100, end: 300, density: 0.005182465990066941 },
                { start: 300, density: 0.0019434247462751025 },
              ],
              percentiles: { p75: 2 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8926636568848759 },
                { start: 2500, end: 4000, density: 0.06038374717832956 },
                { start: 4000, density: 0.046952595936794586 },
              ],
              percentiles: { p75: 1647 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.nl/",
          normalizedUrl: "https://www.yara.nl",
        },
      },
      extractedResults: { fcp: 1045, lcp: 1647, cls: "0.14", fid: 2 },
      timestamp: 1649424856859,
    },
    {
      url: "https://www.yara.ie/",
      deviceTargeted: "DESKTOP",
      results: {
        record: {
          key: { formFactor: "DESKTOP", origin: "https://www.yara.ie" },
          metrics: {
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.678926871484206 },
                { start: 1800, end: 3000, density: 0.2336650800519256 },
                { start: 3000, density: 0.08740804846386835 },
              ],
              percentiles: { p75: 2087 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9870813397129187 },
                { start: 100, end: 300, density: 0.01291866028708134 },
                { start: 300 },
              ],
              percentiles: { p75: 3 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6383442265795207 },
                { start: 2500, end: 4000, density: 0.24357298474945524 },
                { start: 4000, density: 0.11808278867102415 },
              ],
              percentiles: { p75: 2870 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.5633423180592992,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.30952380952380953,
                },
                { start: "0.25", density: 0.12713387241689134 },
              ],
              percentiles: { p75: "0.16" },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.ie/",
          normalizedUrl: "https://www.yara.ie",
        },
      },
      extractedResults: { fcp: 2087, lcp: 2870, cls: "0.16", fid: 3 },
      timestamp: 1649424856919,
    },
    {
      url: "https://www.yara.ro/",
      deviceTargeted: "DESKTOP",
      results: {
        record: {
          key: { formFactor: "DESKTOP", origin: "https://www.yara.ro" },
          metrics: {
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.685374149659864,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.20748299319727886,
                },
                { start: "0.25", density: 0.10714285714285711 },
              ],
              percentiles: { p75: "0.13" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8796747967479674 },
                { start: 1800, end: 3000, density: 0.0934959349593496 },
                { start: 3000, density: 0.02682926829268288 },
              ],
              percentiles: { p75: 1339 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9936102236421726 },
                { start: 100, end: 300, density: 0.006389776357827477 },
                { start: 300 },
              ],
              percentiles: { p75: 2 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8124999999999997 },
                { start: 2500, end: 4000, density: 0.14949324324324323 },
                { start: 4000, density: 0.038006756756757035 },
              ],
              percentiles: { p75: 2256 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.ro/",
          normalizedUrl: "https://www.yara.ro",
        },
      },
      extractedResults: { fcp: 1339, lcp: 2256, cls: "0.13", fid: 2 },
      timestamp: 1649424856983,
    },
    {
      url: "https://www.yara.com.mx/",
      deviceTargeted: "DESKTOP",
      results: {
        record: {
          key: {
            formFactor: "DESKTOP",
            origin: "https://www.yara.com.mx",
          },
          metrics: {
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.5986238532110092,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.3153669724770642,
                },
                { start: "0.25", density: 0.08600917431192659 },
              ],
              percentiles: { p75: "0.14" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7295492487479124 },
                { start: 1800, end: 3000, density: 0.17139677239844164 },
                { start: 3000, density: 0.09905397885364593 },
              ],
              percentiles: { p75: 1868 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9796626984126984 },
                { start: 100, end: 300, density: 0.009424603174603172 },
                { start: 300, density: 0.010912698412698362 },
              ],
              percentiles: { p75: 3 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7205471803461759 },
                { start: 2500, end: 4000, density: 0.13484087102177564 },
                { start: 4000, density: 0.1446119486320485 },
              ],
              percentiles: { p75: 2785 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.mx/",
          normalizedUrl: "https://www.yara.com.mx",
        },
      },
      extractedResults: { fcp: 1868, lcp: 2785, cls: "0.14", fid: 3 },
      timestamp: 1649424857046,
    },
    {
      url: "https://www.yara.ci/",
      deviceTargeted: "DESKTOP",
      results: {
        record: {
          key: { formFactor: "DESKTOP", origin: "https://www.yara.ci" },
          metrics: {
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9096491228070175,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.05921052631578947,
                },
                { start: "0.25", density: 0.031140350877192975 },
              ],
              percentiles: { p75: "0.05" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6758708581138492 },
                { start: 1800, end: 3000, density: 0.16015293118096874 },
                { start: 3000, density: 0.1639762107051821 },
              ],
              percentiles: { p75: 2581 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9943204868154158 },
                { start: 100, end: 300 },
                { start: 300, density: 0.005679513184584179 },
              ],
              percentiles: { p75: 2 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6270069987649248 },
                { start: 2500, end: 4000, density: 0.17538081515026782 },
                { start: 4000, density: 0.19761218608480743 },
              ],
              percentiles: { p75: 3916 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.ci/",
          normalizedUrl: "https://www.yara.ci",
        },
      },
      extractedResults: { fcp: 2581, lcp: 3916, cls: "0.05", fid: 2 },
      timestamp: 1649424857104,
    },
    {
      url: "https://www.yara.co.za/",
      deviceTargeted: "DESKTOP",
      results: {
        record: {
          key: {
            formFactor: "DESKTOP",
            origin: "https://www.yara.co.za",
          },
          metrics: {
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.5830309796260117,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.2972369522746302,
                },
                { start: "0.25", density: 0.11973206809935806 },
              ],
              percentiles: { p75: "0.15" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8301168795868442 },
                { start: 1800, end: 3000, density: 0.1176950258222343 },
                { start: 3000, density: 0.0521880945909215 },
              ],
              percentiles: { p75: 1698 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9970791290493893 },
                { start: 100, end: 300, density: 0.0029208709506107276 },
                { start: 300 },
              ],
              percentiles: { p75: 2 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7904102146155936 },
                { start: 2500, end: 4000, density: 0.10798696006519973 },
                { start: 4000, density: 0.10160282531920688 },
              ],
              percentiles: { p75: 2491 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.co.za/",
          normalizedUrl: "https://www.yara.co.za",
        },
      },
      extractedResults: { fcp: 1698, lcp: 2491, cls: "0.15", fid: 2 },
      timestamp: 1649424857168,
    },
    {
      url: "https://www.yara.co.uk/",
      deviceTargeted: "DESKTOP",
      results: {
        record: {
          key: {
            formFactor: "DESKTOP",
            origin: "https://www.yara.co.uk",
          },
          metrics: {
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.4863417246920192,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.33047670058918044,
                },
                { start: "0.25", density: 0.18318157471880034 },
              ],
              percentiles: { p75: "0.20" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6507895418068846 },
                { start: 1800, end: 3000, density: 0.23349728190525465 },
                { start: 3000, density: 0.1157131762878606 },
              ],
              percentiles: { p75: 2150 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9844327176781003 },
                { start: 100, end: 300, density: 0.007915567282321899 },
                { start: 300, density: 0.007651715039577808 },
              ],
              percentiles: { p75: 3 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6711991711991696 },
                { start: 2500, end: 4000, density: 0.21095571095571047 },
                { start: 4000, density: 0.11784511784511999 },
              ],
              percentiles: { p75: 2875 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.co.uk/",
          normalizedUrl: "https://www.yara.co.uk",
        },
      },
      extractedResults: { fcp: 2150, lcp: 2875, cls: "0.20", fid: 3 },
      timestamp: 1649424857231,
    },
  ],
};
