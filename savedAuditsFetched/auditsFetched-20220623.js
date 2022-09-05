export const audit34 = {
  date: "2022-06-23T10:18:04.602Z",
  dateParsedLocale: "23/06/2022",
  legacyAudit: true,
  legacyAuditType: 4,
  legacyAuditId: "23/06/2022-legacy-audit",
  audits: [
    {
      url: "https://www.yara.co.za/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "https://www.yara.co.za" },
          metrics: {
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8914108589141085,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.07429257074292571,
                },
                { start: "0.25", density: 0.03429657034296571 },
              ],
              percentiles: { p75: "0.03" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6775000000000001 },
                { start: 200, end: 500, density: 0.27160000000000006 },
                { start: 500, density: 0.050899999999999876 },
              ],
              percentiles: { p75: 227 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.40110000000000023 },
                { start: 800, end: 1800, density: 0.4564000000000003 },
                { start: 1800, density: 0.14249999999999927 },
              ],
              percentiles: { p75: 1488 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.648199999999999 },
                { start: 1800, end: 3000, density: 0.21119999999999975 },
                { start: 3000, density: 0.1406000000000013 },
              ],
              percentiles: { p75: 2240 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9643964396439645 },
                { start: 100, end: 300, density: 0.02830283028302831 },
                { start: 300, density: 0.007300730073007298 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6976000000000006 },
                { start: 2500, end: 4000, density: 0.1784000000000001 },
                { start: 4000, density: 0.12399999999999928 },
              ],
              percentiles: { p75: 2843 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.co.za/",
          normalizedUrl: "https://www.yara.co.za",
        },
      },
      extractedResults: {
        fcp: 2240,
        lcp: 2843,
        cls: "0.03",
        fid: 12,
      },
      timestamp: 1655979334554,
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
                { start: "0.00", end: "0.10", density: 0.9496 },
                { start: "0.10", end: "0.25", density: 0.0406 },
                { start: "0.25", density: 0.009800000000000003 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6053605360536054 },
                { start: 200, end: 500, density: 0.3484348434843484 },
                { start: 500, density: 0.04620462046204616 },
              ],
              percentiles: { p75: 247 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.6370637063706373 },
                { start: 800, end: 1800, density: 0.29002900290029016 },
                { start: 1800, density: 0.07290729072907248 },
              ],
              percentiles: { p75: 955 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7817781778177816 },
                { start: 1800, end: 3000, density: 0.12181218121812178 },
                { start: 3000, density: 0.09640964096409652 },
              ],
              percentiles: { p75: 1666 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9356935693569357 },
                { start: 100, end: 300, density: 0.0441044104410441 },
                { start: 300, density: 0.020202020202020204 },
              ],
              percentiles: { p75: 11 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8227322732273229 },
                { start: 2500, end: 4000, density: 0.10826082608260829 },
                { start: 4000, density: 0.06900690069006873 },
              ],
              percentiles: { p75: 2179 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.ma/",
          normalizedUrl: "https://www.yara.ma",
        },
      },
      extractedResults: {
        fcp: 1666,
        lcp: 2179,
        cls: "0.00",
        fid: 11,
      },
      timestamp: 1655979337209,
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
                  density: 0.8701000000000001,
                },
                { start: "0.10", end: "0.25", density: 0.0727 },
                { start: "0.25", density: 0.05719999999999994 },
              ],
              percentiles: { p75: "0.04" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.7621048419367747 },
                { start: 200, end: 500, density: 0.14585834333733494 },
                { start: 500, density: 0.09203681472589025 },
              ],
              percentiles: { p75: 183 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.37986201379861995 },
                { start: 800, end: 1800, density: 0.45355464453554617 },
                { start: 1800, density: 0.16658334166583394 },
              ],
              percentiles: { p75: 1365 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.08170817081708155 },
                { start: 1800, end: 3000, density: 0.46644664466446567 },
                { start: 3000, density: 0.4518451845184529 },
              ],
              percentiles: { p75: 4227 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.28864999999999924 },
                { start: 2500, end: 4000, density: 0.3692499999999989 },
                { start: 4000, density: 0.3421000000000018 },
              ],
              percentiles: { p75: 4937 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "http://www.yara.com.mm/",
          normalizedUrl: "http://www.yara.com.mm",
        },
      },
      extractedResults: { fcp: 4227, lcp: 4937, cls: "0.04" },
      timestamp: 1655979340591,
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
                  density: 0.9567000000000001,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.028400000000000005,
                },
                { start: "0.25", density: 0.014899999999999986 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.654134586541346 },
                { start: 200, end: 500, density: 0.2743725627437256 },
                { start: 500, density: 0.07149285071492838 },
              ],
              percentiles: { p75: 248 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.6288999999999998 },
                { start: 800, end: 1800, density: 0.3198999999999999 },
                { start: 1800, density: 0.05120000000000029 },
              ],
              percentiles: { p75: 972 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8590718143628722 },
                { start: 1800, end: 3000, density: 0.10232046409281854 },
                { start: 3000, density: 0.038607721544309255 },
              ],
              percentiles: { p75: 1458 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9621 },
                { start: 100, end: 300, density: 0.021900000000000003 },
                { start: 300, density: 0.01600000000000002 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8865726854629071 },
                { start: 2500, end: 4000, density: 0.08403319336132768 },
                { start: 4000, density: 0.029394121175765175 },
              ],
              percentiles: { p75: 1839 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.hu/",
          normalizedUrl: "https://www.yara.hu",
        },
      },
      extractedResults: {
        fcp: 1458,
        lcp: 1839,
        cls: "0.00",
        fid: 12,
      },
      timestamp: 1655979342432,
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
                { start: 0, end: 100, density: 0.9717915374612384 },
                { start: 100, end: 300, density: 0.024607382214664405 },
                { start: 300, density: 0.003601080324097234 },
              ],
              percentiles: { p75: 11 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6927614477104581 },
                { start: 2500, end: 4000, density: 0.18916216756648668 },
                { start: 4000, density: 0.11807638472305529 },
              ],
              percentiles: { p75: 2830 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9147914791479147,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.048104810481048095,
                },
                { start: "0.25", density: 0.037103710371037116 },
              ],
              percentiles: { p75: "0.01" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6648664866486651 },
                { start: 200, end: 500, density: 0.2745274527452746 },
                { start: 500, density: 0.060606060606060275 },
              ],
              percentiles: { p75: 246 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.42448489697939573 },
                { start: 800, end: 1800, density: 0.4762952590518102 },
                { start: 1800, density: 0.09921984396879421 },
              ],
              percentiles: { p75: 1319 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6047790441911607 },
                { start: 1800, end: 3000, density: 0.2513497300539887 },
                { start: 3000, density: 0.1438712257548507 },
              ],
              percentiles: { p75: 2360 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.ec/",
          normalizedUrl: "https://www.yara.com.ec",
        },
      },
      extractedResults: {
        fcp: 2360,
        lcp: 2830,
        cls: "0.01",
        fid: 11,
      },
      timestamp: 1655979343155,
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
                { start: 0, end: 200, density: 0.6629000000000008 },
                { start: 200, end: 500, density: 0.23860000000000028 },
                { start: 500, density: 0.09849999999999898 },
              ],
              percentiles: { p75: 251 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.7268819354193742 },
                { start: 800, end: 1800, density: 0.24532640207937614 },
                { start: 1800, density: 0.027791662501249627 },
              ],
              percentiles: { p75: 837 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.9030096990300969 },
                { start: 1800, end: 3000, density: 0.07759224077592242 },
                { start: 3000, density: 0.019398060193980646 },
              ],
              percentiles: { p75: 1239 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9473894778955791 },
                { start: 100, end: 300, density: 0.028305661132226448 },
                { start: 300, density: 0.024304860972194482 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.9251649670065987 },
                { start: 2500, end: 4000, density: 0.058438312337532494 },
                { start: 4000, density: 0.016396720655868953 },
              ],
              percentiles: { p75: 1654 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.876987698769877,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.08690869086908692,
                },
                { start: "0.25", density: 0.03610361036103608 },
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
      extractedResults: {
        fcp: 1239,
        lcp: 1654,
        cls: "0.03",
        fid: 12,
      },
      timestamp: 1655979343847,
    },
    {
      url: "https://www.yara.my/",
      deviceTargeted: "PHONE",
      results: {
        record: {
          key: { formFactor: "PHONE", origin: "https://www.yara.my" },
          metrics: {
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7825758456352435 },
                { start: 2500, end: 4000, density: 0.13082645588748112 },
                { start: 4000, density: 0.08659769847727533 },
              ],
              percentiles: { p75: 2335 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8697060865540385,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.09129831057625551,
                },
                { start: "0.25", density: 0.03899560286970607 },
              ],
              percentiles: { p75: "0.01" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.7459924563884959 },
                { start: 200, end: 500, density: 0.19919849127769915 },
                { start: 500, density: 0.054809052333804904 },
              ],
              percentiles: { p75: 202 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.4786074317196104 },
                { start: 800, end: 1800, density: 0.3827218380025786 },
                { start: 1800, density: 0.13867073027781116 },
              ],
              percentiles: { p75: 1344 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.724053581828771 },
                { start: 1800, end: 3000, density: 0.15701805474665112 },
                { start: 3000, density: 0.11892836342457794 },
              ],
              percentiles: { p75: 1941 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9712315739419876 },
                { start: 100, end: 300, density: 0.018901569186875893 },
                { start: 300, density: 0.009866856871136448 },
              ],
              percentiles: { p75: 13 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.my/",
          normalizedUrl: "https://www.yara.my",
        },
      },
      extractedResults: {
        fcp: 1941,
        lcp: 2335,
        cls: "0.01",
        fid: 13,
      },
      timestamp: 1655979344821,
    },
    {
      url: "https://www.yara.vn/",
      deviceTargeted: "PHONE",
      results: {
        record: {
          key: { formFactor: "PHONE", origin: "https://www.yara.vn" },
          metrics: {
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9075907590759077,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.0662066206620662,
                },
                { start: "0.25", density: 0.026202620262026202 },
              ],
              percentiles: { p75: "0.01" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.7838216178382162 },
                { start: 200, end: 500, density: 0.17598240175982396 },
                { start: 500, density: 0.040195980401959826 },
              ],
              percentiles: { p75: 184 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.593940605939406 },
                { start: 800, end: 1800, density: 0.3457654234576542 },
                { start: 1800, density: 0.06029397060293973 },
              ],
              percentiles: { p75: 1096 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.806819318068193 },
                { start: 1800, end: 3000, density: 0.15068493150684928 },
                { start: 3000, density: 0.04249575042495767 },
              ],
              percentiles: { p75: 1580 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9819054283714885 },
                { start: 100, end: 300, density: 0.009697090872738179 },
                { start: 300, density: 0.008397480755773267 },
              ],
              percentiles: { p75: 11 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8491349134913493 },
                { start: 2500, end: 4000, density: 0.12566256625662567 },
                { start: 4000, density: 0.02520252025202512 },
              ],
              percentiles: { p75: 1928 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.vn/",
          normalizedUrl: "https://www.yara.vn",
        },
      },
      extractedResults: {
        fcp: 1580,
        lcp: 1928,
        cls: "0.01",
        fid: 11,
      },
      timestamp: 1655979346092,
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
                { start: 0, end: 100, density: 0.9042858784327243 },
                { start: 100, end: 300, density: 0.04848902677237735 },
                { start: 300, density: 0.04722509479489825 },
              ],
              percentiles: { p75: 19 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7085516780020072 },
                { start: 2500, end: 4000, density: 0.17984167688705557 },
                { start: 4000, density: 0.11160664511093711 },
              ],
              percentiles: { p75: 2699 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.7855242739968966,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.17080469962314343,
                },
                { start: "0.25", density: 0.04367102637996007 },
              ],
              percentiles: { p75: "0.07" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5478065241844772 },
                { start: 200, end: 500, density: 0.2831271091113612 },
                { start: 500, density: 0.16906636670416172 },
              ],
              percentiles: { p75: 343 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.47467229504554515 },
                { start: 800, end: 1800, density: 0.41701844034658936 },
                { start: 1800, density: 0.1083092646078654 },
              ],
              percentiles: { p75: 1256 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6683713173985537 },
                { start: 1800, end: 3000, density: 0.22901612006670327 },
                { start: 3000, density: 0.10261256253474293 },
              ],
              percentiles: { p75: 2073 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.co.th/",
          normalizedUrl: "https://www.yara.co.th",
        },
      },
      extractedResults: {
        fcp: 2073,
        lcp: 2699,
        cls: "0.07",
        fid: 19,
      },
      timestamp: 1655979347126,
    },
    {
      url: "https://www.yara.kr/",
      deviceTargeted: "PHONE",
      results: {
        record: {
          key: { formFactor: "PHONE", origin: "https://www.yara.kr" },
          metrics: {
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9663299663299664 },
                { start: 100, end: 300, density: 0.033670033670033676 },
                { start: 300 },
              ],
              percentiles: { p75: 11 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7353402627966267 },
                { start: 2500, end: 4000, density: 0.1818984114532261 },
                { start: 4000, density: 0.08276132575014722 },
              ],
              percentiles: { p75: 2566 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9401106236887278,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.041388518024032046,
                },
                { start: "0.25", density: 0.018500858287240126 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.8173136807141373 },
                { start: 200, end: 500, density: 0.15009341914054386 },
                { start: 500, density: 0.03259290014531866 },
              ],
              percentiles: { p75: 166 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.4787497617686297 },
                { start: 800, end: 1800, density: 0.3621116828663999 },
                { start: 1800, density: 0.15913855536497046 },
              ],
              percentiles: { p75: 1393 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6242260061919503 },
                { start: 1800, end: 3000, density: 0.2507739938080495 },
                { start: 3000, density: 0.1250000000000001 },
              ],
              percentiles: { p75: 2293 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.kr/",
          normalizedUrl: "https://www.yara.kr",
        },
      },
      extractedResults: {
        fcp: 2293,
        lcp: 2566,
        cls: "0.00",
        fid: 11,
      },
      timestamp: 1655979348036,
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
                { start: 0, end: 1800, density: 0.7914124043048927 },
                { start: 1800, end: 3000, density: 0.14068567624542322 },
                { start: 3000, density: 0.06790191944968418 },
              ],
              percentiles: { p75: 1674 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9415138904510177 },
                { start: 100, end: 300, density: 0.03306714655269374 },
                { start: 300, density: 0.025418962996288486 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.847041847041846 },
                { start: 2500, end: 4000, density: 0.10200910200910193 },
                { start: 4000, density: 0.050949050949051944 },
              ],
              percentiles: { p75: 2045 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8749584671613688,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.10975744822239451,
                },
                { start: "0.25", density: 0.015284084616236567 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5168564411699044 },
                { start: 200, end: 500, density: 0.35967849966510396 },
                { start: 500, density: 0.12346505916499174 },
              ],
              percentiles: { p75: 323 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.6069338633101468 },
                { start: 800, end: 1800, density: 0.33256045048029126 },
                { start: 1800, density: 0.06050568620956199 },
              ],
              percentiles: { p75: 1048 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.pl/",
          normalizedUrl: "https://www.yara.pl",
        },
      },
      extractedResults: {
        fcp: 1674,
        lcp: 2045,
        cls: "0.00",
        fid: 13,
      },
      timestamp: 1655979348957,
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
                  density: 0.9356385663806157,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.034073700151438666,
                },
                { start: "0.25", density: 0.030287733467945444 },
              ],
              percentiles: { p75: "0.01" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.4957084378713853 },
                { start: 200, end: 500, density: 0.4121220124125182 },
                { start: 500, density: 0.09216954971609646 },
              ],
              percentiles: { p75: 324 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.29562689585439794 },
                { start: 800, end: 1800, density: 0.4593023255813946 },
                { start: 1800, density: 0.24507077856420734 },
              ],
              percentiles: { p75: 1801 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.47199183360979846 },
                { start: 1800, end: 3000, density: 0.321551614138062 },
                { start: 3000, density: 0.20645655225213955 },
              ],
              percentiles: { p75: 2786 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9578368469294225 },
                { start: 100, end: 300, density: 0.033521016105800716 },
                { start: 300, density: 0.008642136964776753 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6071974522292981 },
                { start: 2500, end: 4000, density: 0.2465605095541396 },
                { start: 4000, density: 0.1462420382165622 },
              ],
              percentiles: { p75: 3109 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.pe/",
          normalizedUrl: "https://www.yara.com.pe",
        },
      },
      extractedResults: {
        fcp: 2786,
        lcp: 3109,
        cls: "0.01",
        fid: 13,
      },
      timestamp: 1655979350134,
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
                  density: 0.8865999999999999,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.058800000000000005,
                },
                { start: "0.25", density: 0.05460000000000005 },
              ],
              percentiles: { p75: "0.01" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5322596779033713 },
                { start: 200, end: 500, density: 0.32119635890767256 },
                { start: 500, density: 0.1465439631889562 },
              ],
              percentiles: { p75: 341 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.47833916958479256 },
                { start: 800, end: 1800, density: 0.4097048524262132 },
                { start: 1800, density: 0.11195597798899411 },
              ],
              percentiles: { p75: 1241 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6470941282384699 },
                { start: 1800, end: 3000, density: 0.2138641592477738 },
                { start: 3000, density: 0.13904171251375624 },
              ],
              percentiles: { p75: 2229 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9619076184763047 },
                { start: 100, end: 300, density: 0.026494701059788045 },
                { start: 300, density: 0.01159768046390734 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7337733773377337 },
                { start: 2500, end: 4000, density: 0.15711571157115709 },
                { start: 4000, density: 0.10911091109110926 },
              ],
              percentiles: { p75: 2656 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.mx/",
          normalizedUrl: "https://www.yara.com.mx",
        },
      },
      extractedResults: {
        fcp: 2229,
        lcp: 2656,
        cls: "0.01",
        fid: 13,
      },
      timestamp: 1655979351188,
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
                  density: 0.9219450511553052,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.06230601218530866,
                },
                { start: "0.25", density: 0.015748936659386144 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6592108281715989 },
                { start: 200, end: 500, density: 0.2724248680890112 },
                { start: 500, density: 0.06836430373938991 },
              ],
              percentiles: { p75: 248 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.6934298051114484 },
                { start: 800, end: 1800, density: 0.27424436923795087 },
                { start: 1800, density: 0.03232582565060088 },
              ],
              percentiles: { p75: 871 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.88734835355286 },
                { start: 1800, end: 3000, density: 0.08457538994800691 },
                { start: 3000, density: 0.028076256499133225 },
              ],
              percentiles: { p75: 1356 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.970063395163184 },
                { start: 100, end: 300, density: 0.020192533458558353 },
                { start: 300, density: 0.009744071378257772 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.9280766566612791 },
                { start: 2500, end: 4000, density: 0.05160471022858461 },
                { start: 4000, density: 0.02031863311013622 },
              ],
              percentiles: { p75: 1668 },
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
        lcp: 1668,
        cls: "0.00",
        fid: 12,
      },
      timestamp: 1655979351767,
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
                  density: 0.8312168783121687,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.12158784121587841,
                },
                { start: "0.25", density: 0.04719528047195278 },
              ],
              percentiles: { p75: "0.07" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6971302869713026 },
                { start: 200, end: 500, density: 0.20827917208279162 },
                { start: 500, density: 0.09459054094590584 },
              ],
              percentiles: { p75: 238 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.4752049590081986 },
                { start: 800, end: 1800, density: 0.40121975604879034 },
                { start: 1800, density: 0.12357528494301112 },
              ],
              percentiles: { p75: 1344 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6669333866773348 },
                { start: 1800, end: 3000, density: 0.21214242848569695 },
                { start: 3000, density: 0.12092418483696822 },
              ],
              percentiles: { p75: 2247 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9572871861558467 },
                { start: 100, end: 300, density: 0.028608582574772435 },
                { start: 300, density: 0.01410423126938081 },
              ],
              percentiles: { p75: 11 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.704720472047205 },
                { start: 2500, end: 4000, density: 0.1916691669166917 },
                { start: 4000, density: 0.10361036103610324 },
              ],
              percentiles: { p75: 2741 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yaracanada.ca/",
          normalizedUrl: "https://www.yaracanada.ca",
        },
      },
      extractedResults: {
        fcp: 2247,
        lcp: 2741,
        cls: "0.07",
        fid: 11,
      },
      timestamp: 1655979352726,
    },
    {
      url: "https://www.yara.co.uk/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "https://www.yara.co.uk" },
          metrics: {
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.2965703429657051 },
                { start: 800, end: 1800, density: 0.35506449355064684 },
                { start: 1800, density: 0.34836516348364793 },
              ],
              percentiles: { p75: 2144 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.48650539784086255 },
                { start: 1800, end: 3000, density: 0.27738904438224654 },
                { start: 3000, density: 0.23610555777689096 },
              ],
              percentiles: { p75: 2930 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9324932493249325 },
                { start: 100, end: 300, density: 0.0374037403740374 },
                { start: 300, density: 0.030103010301030065 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.5833583358335827 },
                { start: 2500, end: 4000, density: 0.25132513251325095 },
                { start: 4000, density: 0.16531653165316645 },
              ],
              percentiles: { p75: 3316 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8115623124624924,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.11002200440088017,
                },
                { start: "0.25", density: 0.07841568313662738 },
              ],
              percentiles: { p75: "0.06" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5990599059905994 },
                { start: 200, end: 500, density: 0.26512651265126524 },
                { start: 500, density: 0.1358135813581353 },
              ],
              percentiles: { p75: 306 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.co.uk/",
          normalizedUrl: "https://www.yara.co.uk",
        },
      },
      extractedResults: {
        fcp: 2930,
        lcp: 3316,
        cls: "0.06",
        fid: 13,
      },
      timestamp: 1655979353329,
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
                  density: 0.9474330631294523,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.036600343895848694,
                },
                { start: "0.25", density: 0.015966592974699087 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.43842245342366293 },
                { start: 200, end: 500, density: 0.4271715460924265 },
                { start: 500, density: 0.13440600048391052 },
              ],
              percentiles: { p75: 360 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.6523562792992843 },
                { start: 800, end: 1800, density: 0.31149765605724145 },
                { start: 1800, density: 0.03614606464347426 },
              ],
              percentiles: { p75: 917 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8905127569977703 },
                { start: 1800, end: 3000, density: 0.08558335397572449 },
                { start: 3000, density: 0.023903889026505115 },
              ],
              percentiles: { p75: 1349 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9577898104848633 },
                { start: 100, end: 300, density: 0.026335220280580843 },
                { start: 300, density: 0.01587496923455583 },
              ],
              percentiles: { p75: 15 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.9147607862529366 },
                { start: 2500, end: 4000, density: 0.06385214488811967 },
                { start: 4000, density: 0.02138706885894391 },
              ],
              percentiles: { p75: 1718 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.fi/",
          normalizedUrl: "https://www.yara.fi",
        },
      },
      extractedResults: {
        fcp: 1349,
        lcp: 1718,
        cls: "0.00",
        fid: 15,
      },
      timestamp: 1655979353978,
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
                  density: 0.9326067393260673,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.0427957204279572,
                },
                { start: "0.25", density: 0.024597540245975408 },
              ],
              percentiles: { p75: "0.01" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6367999999999998 },
                { start: 200, end: 500, density: 0.3072 },
                { start: 500, density: 0.056000000000000154 },
              ],
              percentiles: { p75: 276 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.4317704688593423 },
                { start: 800, end: 1800, density: 0.48385484354693603 },
                { start: 1800, density: 0.08437468759372171 },
              ],
              percentiles: { p75: 1175 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6705000000000005 },
                { start: 1800, end: 3000, density: 0.23890000000000028 },
                { start: 3000, density: 0.09059999999999918 },
              ],
              percentiles: { p75: 2036 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.979002099790021 },
                { start: 100, end: 300, density: 0.017698230176982306 },
                { start: 300, density: 0.0032996700329967006 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.766546690661867 },
                { start: 2500, end: 4000, density: 0.14747050589882002 },
                { start: 4000, density: 0.08598280343931297 },
              ],
              percentiles: { p75: 2434 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.pa/",
          normalizedUrl: "https://www.yara.com.pa",
        },
      },
      extractedResults: {
        fcp: 2036,
        lcp: 2434,
        cls: "0.01",
        fid: 12,
      },
      timestamp: 1655979355092,
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
                { start: "0.00", end: "0.10", density: 0.6744 },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.13829999999999998,
                },
                { start: "0.25", density: 0.18730000000000008 },
              ],
              percentiles: { p75: "0.17" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6109389061093891 },
                { start: 200, end: 500, density: 0.3233676632336765 },
                { start: 500, density: 0.06569343065693439 },
              ],
              percentiles: { p75: 290 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.42524252425242565 },
                { start: 800, end: 1800, density: 0.30113011301130144 },
                { start: 1800, density: 0.27362736273627297 },
              ],
              percentiles: { p75: 1943 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.4982498249825002 },
                { start: 1800, end: 3000, density: 0.20272027202720355 },
                { start: 3000, density: 0.2990299029902963 },
              ],
              percentiles: { p75: 3388 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.8918324502649204 },
                { start: 100, end: 300, density: 0.09257222833150056 },
                { start: 300, density: 0.015595321403578936 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.5382576515303057 },
                { start: 2500, end: 4000, density: 0.22519503900780138 },
                { start: 4000, density: 0.23654730946189284 },
              ],
              percentiles: { p75: 3910 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.cm/en-cm/",
          normalizedUrl: "https://www.yara.cm",
        },
      },
      extractedResults: {
        fcp: 3388,
        lcp: 3910,
        cls: "0.17",
        fid: 13,
      },
      timestamp: 1655979355875,
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
                { start: 0, end: 800, density: 0.42524252425242565 },
                { start: 800, end: 1800, density: 0.30113011301130144 },
                { start: 1800, density: 0.27362736273627297 },
              ],
              percentiles: { p75: 1943 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.4982498249825002 },
                { start: 1800, end: 3000, density: 0.20272027202720355 },
                { start: 3000, density: 0.2990299029902963 },
              ],
              percentiles: { p75: 3388 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.8918324502649204 },
                { start: 100, end: 300, density: 0.09257222833150056 },
                { start: 300, density: 0.015595321403578936 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.5382576515303057 },
                { start: 2500, end: 4000, density: 0.22519503900780138 },
                { start: 4000, density: 0.23654730946189284 },
              ],
              percentiles: { p75: 3910 },
            },
            cumulative_layout_shift: {
              histogram: [
                { start: "0.00", end: "0.10", density: 0.6744 },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.13829999999999998,
                },
                { start: "0.25", density: 0.18730000000000008 },
              ],
              percentiles: { p75: "0.17" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6109389061093891 },
                { start: 200, end: 500, density: 0.3233676632336765 },
                { start: 500, density: 0.06569343065693439 },
              ],
              percentiles: { p75: 290 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.cm/",
          normalizedUrl: "https://www.yara.cm",
        },
      },
      extractedResults: {
        fcp: 3388,
        lcp: 3910,
        cls: "0.17",
        fid: 13,
      },
      timestamp: 1655979357319,
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
                  density: 0.919768115942029,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.054608695652173904,
                },
                { start: "0.25", density: 0.025623188405797106 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5849100951933247 },
                { start: 200, end: 500, density: 0.3273005053472793 },
                { start: 500, density: 0.08778939945939597 },
              ],
              percentiles: { p75: 296 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.3837385134349198 },
                { start: 800, end: 1800, density: 0.3915319297429344 },
                { start: 1800, density: 0.22472955682214577 },
              ],
              percentiles: { p75: 1719 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.47825064660239974 },
                { start: 1800, end: 3000, density: 0.26510698330590254 },
                { start: 3000, density: 0.2566423700916979 },
              ],
              percentiles: { p75: 3205 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9730513595166164 },
                { start: 100, end: 300, density: 0.023323262839879157 },
                { start: 300, density: 0.0036253776435045317 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.5769953051643172 },
                { start: 2500, end: 4000, density: 0.2120892018779336 },
                { start: 4000, density: 0.2109154929577492 },
              ],
              percentiles: { p75: 3723 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.ci/",
          normalizedUrl: "https://www.yara.ci",
        },
      },
      extractedResults: {
        fcp: 3205,
        lcp: 3723,
        cls: "0.00",
        fid: 12,
      },
      timestamp: 1655979358548,
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
                  density: 0.8454743604451073,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.09865779511299759,
                },
                { start: "0.25", density: 0.05586784444189516 },
              ],
              percentiles: { p75: "0.01" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5657471264367816 },
                { start: 200, end: 500, density: 0.31873563218390805 },
                { start: 500, density: 0.11551724137931035 },
              ],
              percentiles: { p75: 308 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.2800274536719296 },
                { start: 800, end: 1800, density: 0.42473118279570043 },
                { start: 1800, density: 0.2952413635323698 },
              ],
              percentiles: { p75: 1981 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.4889042198459226 },
                { start: 1800, end: 3000, density: 0.2616994365873283 },
                { start: 3000, density: 0.249396343566749 },
              ],
              percentiles: { p75: 3031 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9476606805293005 },
                { start: 100, end: 300, density: 0.03910680529300566 },
                { start: 300, density: 0.013232514177693756 },
              ],
              percentiles: { p75: 14 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.5479041916167683 },
                { start: 2500, end: 4000, density: 0.2617457392906503 },
                { start: 4000, density: 0.19035006909258143 },
              ],
              percentiles: { p75: 3521 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.co.ke/",
          normalizedUrl: "https://www.yara.co.ke",
        },
      },
      extractedResults: {
        fcp: 3031,
        lcp: 3521,
        cls: "0.01",
        fid: 14,
      },
      timestamp: 1655979359873,
    },
    {
      url: "https://www.yara.com.gh/",
      deviceTargeted: "PHONE",
      results: {
        record: {
          key: { formFactor: "PHONE", origin: "https://www.yara.com.gh" },
          metrics: {
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.4796050922317478 },
                { start: 800, end: 1800, density: 0.27968303455442933 },
                { start: 1800, density: 0.2407118732138229 },
              ],
              percentiles: { p75: 1778 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5993824778077952 },
                { start: 1800, end: 3000, density: 0.14884857841245314 },
                { start: 3000, density: 0.2517689437797518 },
              ],
              percentiles: { p75: 3029 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9664650184113625 },
                { start: 100, end: 300, density: 0.021699105733824303 },
                { start: 300, density: 0.011835875854813254 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6217849794238695 },
                { start: 2500, end: 4000, density: 0.1835133744855971 },
                { start: 4000, density: 0.19470164609053336 },
              ],
              percentiles: { p75: 3452 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9198113207547169,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.0550739418663947,
                },
                { start: "0.25", density: 0.02511473737888834 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6231603408210684 },
                { start: 200, end: 500, density: 0.27807900852052647 },
                { start: 500, density: 0.09876065065840518 },
              ],
              percentiles: { p75: 274 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.gh/",
          normalizedUrl: "https://www.yara.com.gh",
        },
      },
      extractedResults: {
        fcp: 3029,
        lcp: 3452,
        cls: "0.00",
        fid: 12,
      },
      timestamp: 1655979361602,
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
                { start: 0, end: 2500, density: 0.6924603174603176 },
                { start: 2500, end: 4000, density: 0.18730158730158736 },
                { start: 4000, density: 0.12023809523809502 },
              ],
              percentiles: { p75: 2826 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9497257769652651,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.02337424915121442,
                },
                { start: "0.25", density: 0.026899973883520494 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5980987589120678 },
                { start: 200, end: 500, density: 0.3401109057301295 },
                { start: 500, density: 0.061790335357802886 },
              ],
              percentiles: { p75: 268 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.37155413503795454 },
                { start: 800, end: 1800, density: 0.46877080836329754 },
                { start: 1800, density: 0.15967505659874795 },
              ],
              percentiles: { p75: 1560 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6168950975224048 },
                { start: 1800, end: 3000, density: 0.22390616763310534 },
                { start: 3000, density: 0.1591987348444899 },
              ],
              percentiles: { p75: 2367 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9539648749334751 },
                { start: 100, end: 300, density: 0.03632251197445449 },
                { start: 300, density: 0.009712613092070244 },
              ],
              percentiles: { p75: 14 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.co.za/",
          normalizedUrl: "https://www.yara.co.za",
        },
      },
      extractedResults: {
        fcp: 2367,
        lcp: 2826,
        cls: "0.00",
        fid: 14,
      },
      timestamp: 1655979363485,
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
                { start: 0, end: 1800, density: 0.7817781778177816 },
                { start: 1800, end: 3000, density: 0.12181218121812178 },
                { start: 3000, density: 0.09640964096409652 },
              ],
              percentiles: { p75: 1690 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9356935693569357 },
                { start: 100, end: 300, density: 0.0441044104410441 },
                { start: 300, density: 0.020202020202020204 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8227322732273229 },
                { start: 2500, end: 4000, density: 0.10826082608260829 },
                { start: 4000, density: 0.06900690069006873 },
              ],
              percentiles: { p75: 2114 },
            },
            cumulative_layout_shift: {
              histogram: [
                { start: "0.00", end: "0.10", density: 0.9496 },
                { start: "0.10", end: "0.25", density: 0.0406 },
                { start: "0.25", density: 0.009800000000000003 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6053605360536054 },
                { start: 200, end: 500, density: 0.3484348434843484 },
                { start: 500, density: 0.04620462046204616 },
              ],
              percentiles: { p75: 279 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.6370637063706373 },
                { start: 800, end: 1800, density: 0.29002900290029016 },
                { start: 1800, density: 0.07290729072907248 },
              ],
              percentiles: { p75: 976 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.ma/",
          normalizedUrl: "https://www.yara.ma",
        },
      },
      extractedResults: {
        fcp: 1690,
        lcp: 2114,
        cls: "0.00",
        fid: 12,
      },
      timestamp: 1655979364988,
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
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6959459459459458 },
                { start: 2500, end: 4000, density: 0.1951693072382727 },
                { start: 4000, density: 0.10888474681578142 },
              ],
              percentiles: { p75: 2754 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9483703929332928,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.02939384709107524,
                },
                { start: "0.25", density: 0.022235759975632038 },
              ],
              percentiles: { p75: "0.05" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5513172781638921 },
                { start: 200, end: 500, density: 0.3117827703248748 },
                { start: 500, density: 0.13689995151123316 },
              ],
              percentiles: { p75: 314 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.4036783042394017 },
                { start: 800, end: 1800, density: 0.4392144638403992 },
                { start: 1800, density: 0.15710723192019915 },
              ],
              percentiles: { p75: 1439 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.609145682063957 },
                { start: 1800, end: 3000, density: 0.2406921056697046 },
                { start: 3000, density: 0.15016221226633836 },
              ],
              percentiles: { p75: 2432 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9359077070982216 },
                { start: 100, end: 300, density: 0.042941836244191636 },
                { start: 300, density: 0.021150456657586924 },
              ],
              percentiles: { p75: 13 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yaracanada.ca/fr-ca/",
          normalizedUrl: "https://www.yaracanada.ca",
        },
      },
      extractedResults: {
        fcp: 2432,
        lcp: 2754,
        cls: "0.05",
        fid: 13,
      },
      timestamp: 1655979366216,
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
                  density: 0.8989101089891011,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.0827917208279172,
                },
                { start: "0.25", density: 0.018298170182981695 },
              ],
              percentiles: { p75: "0.01" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6994699469946994 },
                { start: 200, end: 500, density: 0.24002400240023997 },
                { start: 500, density: 0.06050605060506069 },
              ],
              percentiles: { p75: 234 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.713128687131287 },
                { start: 800, end: 1800, density: 0.256974302569743 },
                { start: 1800, density: 0.029897010298970014 },
              ],
              percentiles: { p75: 853 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8940894089408944 },
                { start: 1800, end: 3000, density: 0.07950795079507955 },
                { start: 3000, density: 0.026402640264026177 },
              ],
              percentiles: { p75: 1333 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9737052589482104 },
                { start: 100, end: 300, density: 0.01759648070385923 },
                { start: 300, density: 0.008698260347930387 },
              ],
              percentiles: { p75: 11 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.9247849569913983 },
                { start: 2500, end: 4000, density: 0.054410882176435284 },
                { start: 4000, density: 0.02080416083216643 },
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
      extractedResults: {
        fcp: 1333,
        lcp: 1682,
        cls: "0.01",
        fid: 11,
      },
      timestamp: 1655979367961,
    },
    {
      url: "https://www.yara.pl/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "https://www.yara.pl" },
          metrics: {
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8026394721055778 },
                { start: 1800, end: 3000, density: 0.13337332533493287 },
                { start: 3000, density: 0.06398720255948924 },
              ],
              percentiles: { p75: 1639 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9471999999999999 },
                { start: 100, end: 300, density: 0.029999999999999995 },
                { start: 300, density: 0.02280000000000009 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8510446865940212 },
                { start: 2500, end: 4000, density: 0.10016994901529527 },
                { start: 4000, density: 0.04878536439068355 },
              ],
              percentiles: { p75: 2023 },
            },
            cumulative_layout_shift: {
              histogram: [
                { start: "0.00", end: "0.10", density: 0.8364 },
                { start: "0.10", end: "0.25", density: 0.1399 },
                { start: "0.25", density: 0.0237 },
              ],
              percentiles: { p75: "0.04" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5626000000000003 },
                { start: 200, end: 500, density: 0.3251000000000002 },
                { start: 500, density: 0.11229999999999958 },
              ],
              percentiles: { p75: 305 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.6239999999999999 },
                { start: 800, end: 1800, density: 0.31899999999999984 },
                { start: 1800, density: 0.05700000000000029 },
              ],
              percentiles: { p75: 1025 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.pl/",
          normalizedUrl: "https://www.yara.pl",
        },
      },
      extractedResults: {
        fcp: 1639,
        lcp: 2023,
        cls: "0.04",
        fid: 12,
      },
      timestamp: 1655979368750,
    },
    {
      url: "https://www.yara.co.zm/",
      deviceTargeted: "PHONE",
      results: {
        record: {
          key: { formFactor: "PHONE", origin: "https://www.yara.co.zm" },
          metrics: {
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9352064793520648 },
                { start: 100, end: 300, density: 0.0216978302169783 },
                { start: 300, density: 0.04309569043095693 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.5367426514697052 },
                { start: 2500, end: 4000, density: 0.2069086182763445 },
                { start: 4000, density: 0.25634873025395044 },
              ],
              percentiles: { p75: 4065 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8795120487951206,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.07379262073792621,
                },
                { start: "0.25", density: 0.046695330466953296 },
              ],
              percentiles: { p75: "0.01" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.46159231846369314 },
                { start: 200, end: 500, density: 0.32826565313062633 },
                { start: 500, density: 0.21014202840568044 },
              ],
              percentiles: { p75: 411 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.3786999999999988 },
                { start: 800, end: 1800, density: 0.3244999999999989 },
                { start: 1800, density: 0.2968000000000023 },
              ],
              percentiles: { p75: 2132 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.475052494750527 },
                { start: 1800, end: 3000, density: 0.18758124187581318 },
                { start: 3000, density: 0.33736626337365977 },
              ],
              percentiles: { p75: 3500 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.co.zm/",
          normalizedUrl: "https://www.yara.co.zm",
        },
      },
      extractedResults: {
        fcp: 3500,
        lcp: 4065,
        cls: "0.01",
        fid: 13,
      },
      timestamp: 1655979369455,
    },
    {
      url: "https://www.yara.com/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "https://www.yara.com" },
          metrics: {
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.7935793579357936 },
                { start: 200, end: 500, density: 0.156015601560156 },
                { start: 500, density: 0.05040504050405051 },
              ],
              percentiles: { p75: 175 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.6064032016008004 },
                { start: 800, end: 1800, density: 0.2977488744372187 },
                { start: 1800, density: 0.09584792396198101 },
              ],
              percentiles: { p75: 1133 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7595278583575064 },
                { start: 1800, end: 3000, density: 0.1516454936480942 },
                { start: 3000, density: 0.08882664799439939 },
              ],
              percentiles: { p75: 1778 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9768092762894841 },
                { start: 100, end: 300, density: 0.017393042782886843 },
                { start: 300, density: 0.005797680927628957 },
              ],
              percentiles: { p75: 11 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7847993595516858 },
                { start: 2500, end: 4000, density: 0.13614530171119785 },
                { start: 4000, density: 0.07905533873711634 },
              ],
              percentiles: { p75: 2321 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8596719343868774,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.1090218043608722,
                },
                { start: "0.25", density: 0.031306261252250445 },
              ],
              percentiles: { p75: "0.07" },
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
        lcp: 2321,
        cls: "0.07",
        fid: 11,
      },
      timestamp: 1655979370488,
    },
    {
      url: "https://www.yara.be/fr-be/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "https://www.yara.be" },
          metrics: {
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6224867460238069 },
                { start: 200, end: 500, density: 0.27338201460438116 },
                { start: 500, density: 0.10413123937181179 },
              ],
              percentiles: { p75: 286 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.7308269173082692 },
                { start: 800, end: 1800, density: 0.241975802419758 },
                { start: 1800, density: 0.027197280271972744 },
              ],
              percentiles: { p75: 853 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8914434226309477 },
                { start: 1800, end: 3000, density: 0.07986805277888848 },
                { start: 3000, density: 0.028688524590163817 },
              ],
              percentiles: { p75: 1372 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9532 },
                { start: 100, end: 300, density: 0.0287 },
                { start: 300, density: 0.018099999999999988 },
              ],
              percentiles: { p75: 11 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.9006 },
                { start: 2500, end: 4000, density: 0.0644 },
                { start: 4000, density: 0.03499999999999999 },
              ],
              percentiles: { p75: 1846 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.7929999999999999,
                },
                { start: "0.10", end: "0.25", density: 0.153 },
                { start: "0.25", density: 0.054000000000000006 },
              ],
              percentiles: { p75: "0.07" },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.be/fr-be/",
          normalizedUrl: "https://www.yara.be",
        },
      },
      extractedResults: {
        fcp: 1372,
        lcp: 1846,
        cls: "0.07",
        fid: 11,
      },
      timestamp: 1655979371265,
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
                { start: "0.00", end: "0.10", density: 0.8579 },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.07930000000000001,
                },
                { start: "0.25", density: 0.0628 },
              ],
              percentiles: { p75: "0.04" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5496351094671591 },
                { start: 200, end: 500, density: 0.2828151554533635 },
                { start: 500, density: 0.16754973507947749 },
              ],
              percentiles: { p75: 358 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.3351659336265497 },
                { start: 800, end: 1800, density: 0.4224310275889648 },
                { start: 1800, density: 0.24240303878448555 },
              ],
              percentiles: { p75: 1850 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5543000000000006 },
                { start: 1800, end: 3000, density: 0.3114000000000003 },
                { start: 3000, density: 0.13429999999999923 },
              ],
              percentiles: { p75: 2485 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9155 },
                { start: 100, end: 300, density: 0.048 },
                { start: 300, density: 0.03650000000000005 },
              ],
              percentiles: { p75: 14 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.687468746874688 },
                { start: 2500, end: 4000, density: 0.2304230423042305 },
                { start: 4000, density: 0.08210821082108141 },
              ],
              percentiles: { p75: 2920 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.ie/",
          normalizedUrl: "https://www.yara.ie",
        },
      },
      extractedResults: {
        fcp: 2485,
        lcp: 2920,
        cls: "0.04",
        fid: 14,
      },
      timestamp: 1655979371895,
    },
    {
      url: "https://www.yara.be/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "https://www.yara.be" },
          metrics: {
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.9006 },
                { start: 2500, end: 4000, density: 0.0644 },
                { start: 4000, density: 0.03499999999999999 },
              ],
              percentiles: { p75: 1846 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.7929999999999999,
                },
                { start: "0.10", end: "0.25", density: 0.153 },
                { start: "0.25", density: 0.054000000000000006 },
              ],
              percentiles: { p75: "0.07" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6224867460238069 },
                { start: 200, end: 500, density: 0.27338201460438116 },
                { start: 500, density: 0.10413123937181179 },
              ],
              percentiles: { p75: 286 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.7308269173082692 },
                { start: 800, end: 1800, density: 0.241975802419758 },
                { start: 1800, density: 0.027197280271972744 },
              ],
              percentiles: { p75: 853 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8914434226309477 },
                { start: 1800, end: 3000, density: 0.07986805277888848 },
                { start: 3000, density: 0.028688524590163817 },
              ],
              percentiles: { p75: 1372 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9532 },
                { start: 100, end: 300, density: 0.0287 },
                { start: 300, density: 0.018099999999999988 },
              ],
              percentiles: { p75: 11 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.be/",
          normalizedUrl: "https://www.yara.be",
        },
      },
      extractedResults: {
        fcp: 1372,
        lcp: 1846,
        cls: "0.07",
        fid: 11,
      },
      timestamp: 1655979372573,
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
                { start: 0, end: 2500, density: 0.8663565357224902 },
                { start: 2500, end: 4000, density: 0.09229267172065245 },
                { start: 4000, density: 0.04135079255685741 },
              ],
              percentiles: { p75: 1911 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9637631458619113,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.0205761316872428,
                },
                { start: "0.25", density: 0.015660722450845915 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5827646038172357 },
                { start: 200, end: 500, density: 0.3214574898785426 },
                { start: 500, density: 0.09577790630422148 },
              ],
              percentiles: { p75: 276 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.6817397307559541 },
                { start: 800, end: 1800, density: 0.24588654930387743 },
                { start: 1800, density: 0.07237371994016854 },
              ],
              percentiles: { p75: 906 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8238532110091736 },
                { start: 1800, end: 3000, density: 0.12029816513761461 },
                { start: 3000, density: 0.055848623853211786 },
              ],
              percentiles: { p75: 1529 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9492753623188407 },
                { start: 100, end: 300, density: 0.024269611226132963 },
                { start: 300, density: 0.026455026455026422 },
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
        fcp: 1529,
        lcp: 1911,
        cls: "0.00",
        fid: 13,
      },
      timestamp: 1655979373438,
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
                  density: 0.9371937193719373,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.042104210421042114,
                },
                { start: "0.25", density: 0.02070207020702071 },
              ],
              percentiles: { p75: "0.01" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6373999999999995 },
                { start: 200, end: 500, density: 0.2778999999999998 },
                { start: 500, density: 0.08470000000000069 },
              ],
              percentiles: { p75: 254 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.46249249849969987 },
                { start: 800, end: 1800, density: 0.3560712142428485 },
                { start: 1800, density: 0.18143628725745164 },
              ],
              percentiles: { p75: 1536 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6282628262826269 },
                { start: 1800, end: 3000, density: 0.20972097209720927 },
                { start: 3000, density: 0.16201620162016386 },
              ],
              percentiles: { p75: 2416 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9464107178564288 },
                { start: 100, end: 300, density: 0.03659268146370725 },
                { start: 300, density: 0.016996600679864055 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7181563687262539 },
                { start: 2500, end: 4000, density: 0.1912617476504697 },
                { start: 4000, density: 0.09058188362327642 },
              ],
              percentiles: { p75: 2699 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.ru/",
          normalizedUrl: "https://www.yara.ru",
        },
      },
      extractedResults: {
        fcp: 2416,
        lcp: 2699,
        cls: "0.01",
        fid: 12,
      },
      timestamp: 1655979375281,
    },
    {
      url: "https://www.yara.ru/",
      deviceTargeted: "PHONE",
      results: {
        record: {
          key: { formFactor: "PHONE", origin: "https://www.yara.ru" },
          metrics: {
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5926594464500591 },
                { start: 1800, end: 3000, density: 0.22924187725631728 },
                { start: 3000, density: 0.1780986762936236 },
              ],
              percentiles: { p75: 2569 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9339413359625339 },
                { start: 100, end: 300, density: 0.045107222085284684 },
                { start: 300, density: 0.02095144195218145 },
              ],
              percentiles: { p75: 14 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6945952467125097 },
                { start: 2500, end: 4000, density: 0.20852937628181897 },
                { start: 4000, density: 0.09687537700567132 },
              ],
              percentiles: { p75: 2804 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9655792756056608,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.0148716718637563,
                },
                { start: "0.25", density: 0.019549052530582884 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5677894482675355 },
                { start: 200, end: 500, density: 0.33260895810696584 },
                { start: 500, density: 0.09960159362549859 },
              ],
              percentiles: { p75: 280 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.4257081132981275 },
                { start: 800, end: 1800, density: 0.3719395103216514 },
                { start: 1800, density: 0.2023523763802211 },
              ],
              percentiles: { p75: 1634 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.ru/",
          normalizedUrl: "https://www.yara.ru",
        },
      },
      extractedResults: {
        fcp: 2569,
        lcp: 2804,
        cls: "0.00",
        fid: 14,
      },
      timestamp: 1655979376382,
    },
    {
      url: "https://www.yaraagri.cz/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "https://www.yaraagri.cz" },
          metrics: {
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.4963496349634964 },
                { start: 200, end: 500, density: 0.3508350835083509 },
                { start: 500, density: 0.15281528152815274 },
              ],
              percentiles: { p75: 347 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.8831649494848455 },
                { start: 800, end: 1800, density: 0.10703210963288987 },
                { start: 1800, density: 0.009802940882264726 },
              ],
              percentiles: { p75: 630 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.9329999999999999 },
                { start: 1800, end: 3000, density: 0.05040000000000001 },
                { start: 3000, density: 0.016600000000000073 },
              ],
              percentiles: { p75: 1105 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9292070792920707 },
                { start: 100, end: 300, density: 0.035596440355964404 },
                { start: 300, density: 0.03519648035196488 },
              ],
              percentiles: { p75: 14 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.9322228891556622 },
                { start: 2500, end: 4000, density: 0.05027010804321726 },
                { start: 4000, density: 0.017507002801120462 },
              ],
              percentiles: { p75: 1604 },
            },
            cumulative_layout_shift: {
              histogram: [
                { start: "0.00", end: "0.10", density: 0.8945 },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.07430000000000002,
                },
                { start: "0.25", density: 0.031200000000000012 },
              ],
              percentiles: { p75: "0.02" },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yaraagri.cz/",
          normalizedUrl: "https://www.yaraagri.cz",
        },
      },
      extractedResults: {
        fcp: 1105,
        lcp: 1604,
        cls: "0.02",
        fid: 14,
      },
      timestamp: 1655979378194,
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
                { start: "0.00", end: "0.10", density: 0.8226 },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.15450000000000003,
                },
                { start: "0.25", density: 0.0229 },
              ],
              percentiles: { p75: "0.08" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.7470505898820236 },
                { start: 200, end: 500, density: 0.1770645870825834 },
                { start: 500, density: 0.07588482303539307 },
              ],
              percentiles: { p75: 207 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.7618 },
                { start: 800, end: 1800, density: 0.2011 },
                { start: 1800, density: 0.03710000000000005 },
              ],
              percentiles: { p75: 792 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.9154999999999999 },
                { start: 1800, end: 3000, density: 0.06050000000000001 },
                { start: 3000, density: 0.024000000000000077 },
              ],
              percentiles: { p75: 1192 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.984901509849015 },
                { start: 100, end: 300, density: 0.0091990800919908 },
                { start: 300, density: 0.005899410058994096 },
              ],
              percentiles: { p75: 9 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.9231076892310769 },
                { start: 2500, end: 4000, density: 0.05919408059194084 },
                { start: 4000, density: 0.017698230176982285 },
              ],
              percentiles: { p75: 1613 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.dk/",
          normalizedUrl: "https://www.yara.dk",
        },
      },
      extractedResults: { fcp: 1192, lcp: 1613, cls: "0.08", fid: 9 },
      timestamp: 1655979379175,
    },
    {
      url: "https://www.yara.de/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "https://www.yara.de" },
          metrics: {
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.7349999999999999 },
                { start: 800, end: 1800, density: 0.1962999999999999 },
                { start: 1800, density: 0.06870000000000012 },
              ],
              percentiles: { p75: 826 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8732380285914222 },
                { start: 1800, end: 3000, density: 0.08937318804358688 },
                { start: 3000, density: 0.03738878336499093 },
              ],
              percentiles: { p75: 1291 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9626850740296119 },
                { start: 100, end: 300, density: 0.020008003201280516 },
                { start: 300, density: 0.017306922769107533 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8845769153830767 },
                { start: 2500, end: 4000, density: 0.08671734346869378 },
                { start: 4000, density: 0.028705741148229453 },
              ],
              percentiles: { p75: 1725 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8467846784678469,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.10101010101010101,
                },
                { start: "0.25", density: 0.05220522052205218 },
              ],
              percentiles: { p75: "0.03" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5476095219043807 },
                { start: 200, end: 500, density: 0.33276655331066207 },
                { start: 500, density: 0.11962392478495712 },
              ],
              percentiles: { p75: 312 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.de/",
          normalizedUrl: "https://www.yara.de",
        },
      },
      extractedResults: {
        fcp: 1291,
        lcp: 1725,
        cls: "0.03",
        fid: 12,
      },
      timestamp: 1655979380117,
    },
    {
      url: "https://www.yara.es/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "https://www.yara.es" },
          metrics: {
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.44671065786842595 },
                { start: 200, end: 500, density: 0.3866226754649067 },
                { start: 500, density: 0.16666666666666732 },
              ],
              percentiles: { p75: 390 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.5643693107932376 },
                { start: 800, end: 1800, density: 0.35180554166249856 },
                { start: 1800, density: 0.08382514754426391 },
              ],
              percentiles: { p75: 1101 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.746925307469253 },
                { start: 1800, end: 3000, density: 0.1673832616738326 },
                { start: 3000, density: 0.08569143085691439 },
              ],
              percentiles: { p75: 1822 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.917383476695339 },
                { start: 100, end: 300, density: 0.05191038207641528 },
                { start: 300, density: 0.030706141228245585 },
              ],
              percentiles: { p75: 16 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8181818181818181 },
                { start: 2500, end: 4000, density: 0.12081208120812084 },
                { start: 4000, density: 0.06100610061006107 },
              ],
              percentiles: { p75: 2187 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8820999999999999,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.07049999999999998,
                },
                { start: "0.25", density: 0.04740000000000004 },
              ],
              percentiles: { p75: "0.02" },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.es/",
          normalizedUrl: "https://www.yara.es",
        },
      },
      extractedResults: {
        fcp: 1822,
        lcp: 2187,
        cls: "0.02",
        fid: 16,
      },
      timestamp: 1655979381028,
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
                { start: 0, end: 800, density: 0.7662766276627664 },
                { start: 800, end: 1800, density: 0.19891989198919893 },
                { start: 1800, density: 0.03480348034803469 },
              ],
              percentiles: { p75: 784 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8621999999999997 },
                { start: 1800, end: 3000, density: 0.09489999999999997 },
                { start: 3000, density: 0.042900000000000243 },
              ],
              percentiles: { p75: 1411 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9711000000000001 },
                { start: 100, end: 300, density: 0.021300000000000003 },
                { start: 300, density: 0.007600000000000006 },
              ],
              percentiles: { p75: 11 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8928285657131425 },
                { start: 2500, end: 4000, density: 0.07576515303060607 },
                { start: 4000, density: 0.031406281256251355 },
              ],
              percentiles: { p75: 1795 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9644035596440356,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.0263973602639736,
                },
                { start: "0.25", density: 0.009199080091990802 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.611416575027492 },
                { start: 200, end: 500, density: 0.33200039988003616 },
                { start: 500, density: 0.05658302509247188 },
              ],
              percentiles: { p75: 264 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.hr/",
          normalizedUrl: "https://www.yara.hr",
        },
      },
      extractedResults: {
        fcp: 1411,
        lcp: 1795,
        cls: "0.00",
        fid: 11,
      },
      timestamp: 1655979382101,
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
                  density: 0.945956928078017,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.028985507246376805,
                },
                { start: "0.25", density: 0.025057564675606183 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5952444563184616 },
                { start: 200, end: 500, density: 0.2735773443761691 },
                { start: 500, density: 0.13117819930536925 },
              ],
              percentiles: { p75: 292 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.8391877058177826 },
                { start: 800, end: 1800, density: 0.14324917672886942 },
                { start: 1800, density: 0.017563117453348067 },
              ],
              percentiles: { p75: 702 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.9428335852686547 },
                { start: 1800, end: 3000, density: 0.04438642297650132 },
                { start: 3000, density: 0.012779991754844084 },
              ],
              percentiles: { p75: 1196 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9420822150021189 },
                { start: 100, end: 300, density: 0.032490464754908875 },
                { start: 300, density: 0.02542732024297215 },
              ],
              percentiles: { p75: 15 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.9489963129864811 },
                { start: 2500, end: 4000, density: 0.040761982793936904 },
                { start: 4000, density: 0.010241704219582063 },
              ],
              percentiles: { p75: 1532 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.no/",
          normalizedUrl: "https://www.yara.no",
        },
      },
      extractedResults: {
        fcp: 1196,
        lcp: 1532,
        cls: "0.00",
        fid: 15,
      },
      timestamp: 1655979383380,
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
                { start: 0, end: 2500, density: 0.954945494549455 },
                { start: 2500, end: 4000, density: 0.03825382538253827 },
                { start: 4000, density: 0.0068006800680068145 },
              ],
              percentiles: { p75: 1522 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9525047495250475,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.0385961403859614,
                },
                { start: "0.25", density: 0.0088991100889911 },
              ],
              percentiles: { p75: "0.02" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.736126387361264 },
                { start: 200, end: 500, density: 0.18848115188481154 },
                { start: 500, density: 0.07539246075392451 },
              ],
              percentiles: { p75: 207 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.7764 },
                { start: 800, end: 1800, density: 0.21749999999999997 },
                { start: 1800, density: 0.006099999999999999 },
              ],
              percentiles: { p75: 771 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.9363 },
                { start: 1800, end: 3000, density: 0.0489 },
                { start: 3000, density: 0.014800000000000023 },
              ],
              percentiles: { p75: 1171 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9761 },
                { start: 100, end: 300, density: 0.0154 },
                { start: 300, density: 0.008500000000000004 },
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
        fcp: 1171,
        lcp: 1522,
        cls: "0.02",
        fid: 12,
      },
      timestamp: 1655979385254,
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
                  density: 0.9542687051819781,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.015424164524421594,
                },
                { start: "0.25", density: 0.030307130293600333 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5631365982977539 },
                { start: 200, end: 500, density: 0.3648667503837032 },
                { start: 500, density: 0.07199665131854288 },
              ],
              percentiles: { p75: 296 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.40557359307359253 },
                { start: 800, end: 1800, density: 0.4816017316017309 },
                { start: 1800, density: 0.11282467532467652 },
              ],
              percentiles: { p75: 1368 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5768495768495765 },
                { start: 1800, end: 3000, density: 0.26494676494676483 },
                { start: 3000, density: 0.15820365820365864 },
              ],
              percentiles: { p75: 2455 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.962920869441682 },
                { start: 100, end: 300, density: 0.0332433584315954 },
                { start: 300, density: 0.003835772126722553 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6957470010905127 },
                { start: 2500, end: 4000, density: 0.2016085059978191 },
                { start: 4000, density: 0.10264449291166826 },
              ],
              percentiles: { p75: 2773 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.ec/",
          normalizedUrl: "https://www.yara.com.ec",
        },
      },
      extractedResults: {
        fcp: 2455,
        lcp: 2773,
        cls: "0.00",
        fid: 13,
      },
      timestamp: 1655979386263,
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
                  density: 0.8347165283471651,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.1176882311768823,
                },
                { start: "0.25", density: 0.04759524047595253 },
              ],
              percentiles: { p75: "0.05" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5068506850685072 },
                { start: 200, end: 500, density: 0.3331333133313333 },
                { start: 500, density: 0.16001600160015958 },
              ],
              percentiles: { p75: 357 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.6245498199279711 },
                { start: 800, end: 1800, density: 0.27761104441776707 },
                { start: 1800, density: 0.09783913565426175 },
              ],
              percentiles: { p75: 1061 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7348530293941198 },
                { start: 1800, end: 3000, density: 0.15676864627074552 },
                { start: 3000, density: 0.10837832433513477 },
              ],
              percentiles: { p75: 1906 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9394878975795157 },
                { start: 100, end: 300, density: 0.04120824164832966 },
                { start: 300, density: 0.019303860772154652 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.792549999999999 },
                { start: 2500, end: 4000, density: 0.1292499999999999 },
                { start: 4000, density: 0.07820000000000105 },
              ],
              percentiles: { p75: 2312 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.fr/",
          normalizedUrl: "https://www.yara.fr",
        },
      },
      extractedResults: {
        fcp: 1906,
        lcp: 2312,
        cls: "0.05",
        fid: 12,
      },
      timestamp: 1655979387455,
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
                  density: 0.9262999999999999,
                },
                { start: "0.10", end: "0.25", density: 0.0359 },
                { start: "0.25", density: 0.03780000000000001 },
              ],
              percentiles: { p75: "0.01" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.7119423884776954 },
                { start: 200, end: 500, density: 0.24084816963392672 },
                { start: 500, density: 0.047209441888377945 },
              ],
              percentiles: { p75: 223 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.4215999999999996 },
                { start: 800, end: 1800, density: 0.4352999999999995 },
                { start: 1800, density: 0.14310000000000087 },
              ],
              percentiles: { p75: 1392 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6096609660966094 },
                { start: 1800, end: 3000, density: 0.23832383238323823 },
                { start: 3000, density: 0.15201520152015255 },
              ],
              percentiles: { p75: 2371 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9539138258522443 },
                { start: 100, end: 300, density: 0.038788363490952715 },
                { start: 300, density: 0.007297810656802952 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7085165933626538 },
                { start: 2500, end: 4000, density: 0.17033186725309843 },
                { start: 4000, density: 0.12115153938424765 },
              ],
              percentiles: { p75: 2740 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.cr/",
          normalizedUrl: "https://www.yara.cr",
        },
      },
      extractedResults: {
        fcp: 2371,
        lcp: 2740,
        cls: "0.01",
        fid: 12,
      },
      timestamp: 1655979388347,
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
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8795120487951206,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.07379262073792621,
                },
                { start: "0.25", density: 0.046695330466953296 },
              ],
              percentiles: { p75: "0.01" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.46159231846369314 },
                { start: 200, end: 500, density: 0.32826565313062633 },
                { start: 500, density: 0.21014202840568044 },
              ],
              percentiles: { p75: 382 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.3786999999999988 },
                { start: 800, end: 1800, density: 0.3244999999999989 },
                { start: 1800, density: 0.2968000000000023 },
              ],
              percentiles: { p75: 2094 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.475052494750527 },
                { start: 1800, end: 3000, density: 0.18758124187581318 },
                { start: 3000, density: 0.33736626337365977 },
              ],
              percentiles: { p75: 3524 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9352064793520648 },
                { start: 100, end: 300, density: 0.0216978302169783 },
                { start: 300, density: 0.04309569043095693 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.5367426514697052 },
                { start: 2500, end: 4000, density: 0.2069086182763445 },
                { start: 4000, density: 0.25634873025395044 },
              ],
              percentiles: { p75: 4181 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.co.zm/",
          normalizedUrl: "https://www.yara.co.zm",
        },
      },
      extractedResults: {
        fcp: 3524,
        lcp: 4181,
        cls: "0.01",
        fid: 12,
      },
      timestamp: 1655979389462,
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
                { start: 0, end: 100, density: 0.9122093023255815 },
                { start: 100, end: 300, density: 0.04752906976744187 },
                { start: 300, density: 0.0402616279069767 },
              ],
              percentiles: { p75: 17 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.5482991244438057 },
                { start: 2500, end: 4000, density: 0.27142241997990485 },
                { start: 4000, density: 0.1802784555762895 },
              ],
              percentiles: { p75: 3456 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9455187014820042,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.032604093154551865,
                },
                { start: "0.25", density: 0.021877205363443897 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.4684645498042626 },
                { start: 200, end: 500, density: 0.35508191967522096 },
                { start: 500, density: 0.17645353052051646 },
              ],
              percentiles: { p75: 379 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.2700228832951962 },
                { start: 800, end: 1800, density: 0.33195080091533397 },
                { start: 1800, density: 0.39802631578946984 },
              ],
              percentiles: { p75: 2291 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.4279569892473111 },
                { start: 1800, end: 3000, density: 0.2931899641577057 },
                { start: 3000, density: 0.2788530465949833 },
              ],
              percentiles: { p75: 3192 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.co.uk/",
          normalizedUrl: "https://www.yara.co.uk",
        },
      },
      extractedResults: {
        fcp: 3192,
        lcp: 3456,
        cls: "0.00",
        fid: 17,
      },
      timestamp: 1655979390349,
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
                  density: 0.9299801610456296,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.022756447660170386,
                },
                { start: "0.25", density: 0.04726339129420005 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.4714540059347193 },
                { start: 200, end: 500, density: 0.3649851632047487 },
                { start: 500, density: 0.16356083086053202 },
              ],
              percentiles: { p75: 373 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.46932299012693934 },
                { start: 800, end: 1800, density: 0.41231781852374244 },
                { start: 1800, density: 0.11835919134931827 },
              ],
              percentiles: { p75: 1259 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6329918756623096 },
                { start: 1800, end: 3000, density: 0.2206523018956786 },
                { start: 3000, density: 0.1463558224420118 },
              ],
              percentiles: { p75: 2264 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9576149425287356 },
                { start: 100, end: 300, density: 0.029813218390804596 },
                { start: 300, density: 0.012571839080459814 },
              ],
              percentiles: { p75: 14 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7386296862145959 },
                { start: 2500, end: 4000, density: 0.15712774709131502 },
                { start: 4000, density: 0.10424256669408914 },
              ],
              percentiles: { p75: 2603 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.mx/",
          normalizedUrl: "https://www.yara.com.mx",
        },
      },
      extractedResults: {
        fcp: 2264,
        lcp: 2603,
        cls: "0.00",
        fid: 14,
      },
      timestamp: 1655979392061,
    },
    {
      url: "https://www.yara.no/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "https://www.yara.no" },
          metrics: {
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.9426885377075415 },
                { start: 1800, end: 3000, density: 0.04170834166833368 },
                { start: 3000, density: 0.015603120624124838 },
              ],
              percentiles: { p75: 1140 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.957812656203139 },
                { start: 100, end: 300, density: 0.023392982105368387 },
                { start: 300, density: 0.01879436169149254 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.9462892578515704 },
                { start: 2500, end: 4000, density: 0.03960792158431688 },
                { start: 4000, density: 0.014102820564112791 },
              ],
              percentiles: { p75: 1527 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.874887488748875,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.08700870087008701,
                },
                { start: "0.25", density: 0.03810381038103809 },
              ],
              percentiles: { p75: "0.03" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6899069720916275 },
                { start: 200, end: 500, density: 0.2093628088426528 },
                { start: 500, density: 0.10073021906571959 },
              ],
              percentiles: { p75: 241 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.8438624550179928 },
                { start: 800, end: 1800, density: 0.13714514194322266 },
                { start: 1800, density: 0.018992403038784418 },
              ],
              percentiles: { p75: 685 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.no/",
          normalizedUrl: "https://www.yara.no",
        },
      },
      extractedResults: {
        fcp: 1140,
        lcp: 1527,
        cls: "0.03",
        fid: 12,
      },
      timestamp: 1655979394302,
    },
    {
      url: "https://www.yara.nl/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "https://www.yara.nl" },
          metrics: {
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.962315073970412 },
                { start: 100, end: 300, density: 0.020991603358656536 },
                { start: 300, density: 0.016693322670931515 },
              ],
              percentiles: { p75: 10 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.9044595540445953 },
                { start: 2500, end: 4000, density: 0.06314368563143682 },
                { start: 4000, density: 0.032396760323967794 },
              ],
              percentiles: { p75: 1771 },
            },
            cumulative_layout_shift: {
              histogram: [
                { start: "0.00", end: "0.10", density: 0.8121 },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.14670000000000002,
                },
                { start: "0.25", density: 0.041199999999999966 },
              ],
              percentiles: { p75: "0.07" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6579315863172636 },
                { start: 200, end: 500, density: 0.25075015003000606 },
                { start: 500, density: 0.09131826365273045 },
              ],
              percentiles: { p75: 260 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.7138427685537109 },
                { start: 800, end: 1800, density: 0.24964992998599725 },
                { start: 1800, density: 0.036507301460291984 },
              ],
              percentiles: { p75: 859 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8916 },
                { start: 1800, end: 3000, density: 0.0762 },
                { start: 3000, density: 0.03220000000000004 },
              ],
              percentiles: { p75: 1328 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.nl/",
          normalizedUrl: "https://www.yara.nl",
        },
      },
      extractedResults: {
        fcp: 1328,
        lcp: 1771,
        cls: "0.07",
        fid: 10,
      },
      timestamp: 1655979395606,
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
                { start: 0, end: 100, density: 0.9618745903430194 },
                { start: 100, end: 300, density: 0.02370548394144636 },
                { start: 300, density: 0.014419925715534328 },
              ],
              percentiles: { p75: 14 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7575529512955594 },
                { start: 2500, end: 4000, density: 0.14579077518546396 },
                { start: 4000, density: 0.09665627351897649 },
              ],
              percentiles: { p75: 2470 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8502141327623126,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.1012847965738758,
                },
                { start: "0.25", density: 0.04850107066381162 },
              ],
              percentiles: { p75: "0.01" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6313394018205464 },
                { start: 200, end: 500, density: 0.2802340702210664 },
                { start: 500, density: 0.08842652795838725 },
              ],
              percentiles: { p75: 252 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.4609829704677727 },
                { start: 800, end: 1800, density: 0.39609829704677685 },
                { start: 1800, density: 0.14291873248545037 },
              ],
              percentiles: { p75: 1375 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.691794816646951 },
                { start: 1800, end: 3000, density: 0.19260135498440684 },
                { start: 3000, density: 0.11560382836864212 },
              ],
              percentiles: { p75: 2071 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.in/",
          normalizedUrl: "https://www.yara.in",
        },
      },
      extractedResults: {
        fcp: 2071,
        lcp: 2470,
        cls: "0.01",
        fid: 14,
      },
      timestamp: 1655979397132,
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
                { start: 0, end: 1800, density: 0.4879287003610104 },
                { start: 1800, end: 3000, density: 0.24199007220216587 },
                { start: 3000, density: 0.2700812274368238 },
              ],
              percentiles: { p75: 3178 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9027323680523119 },
                { start: 100, end: 300, density: 0.06445586174684727 },
                { start: 300, density: 0.03281177020084078 },
              ],
              percentiles: { p75: 19 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.5397669419617601 },
                { start: 2500, end: 4000, density: 0.2555718972734471 },
                { start: 4000, density: 0.2046611607647927 },
              ],
              percentiles: { p75: 3663 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8592767295597483,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.09725965858041329,
                },
                { start: "0.25", density: 0.04346361185983828 },
              ],
              percentiles: { p75: "0.02" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.42570050528249886 },
                { start: 200, end: 500, density: 0.3195911805236564 },
                { start: 500, density: 0.25470831419384465 },
              ],
              percentiles: { p75: 509 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.4032565974171807 },
                { start: 800, end: 1800, density: 0.3877596855699039 },
                { start: 1800, density: 0.20898371701291543 },
              ],
              percentiles: { p75: 1658 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yarabrasil.com.br/",
          normalizedUrl: "https://www.yarabrasil.com.br",
        },
      },
      extractedResults: {
        fcp: 3178,
        lcp: 3663,
        cls: "0.02",
        fid: 19,
      },
      timestamp: 1655979399039,
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
                { start: 0, end: 100, density: 0.9753051774940368 },
                { start: 100, end: 300, density: 0.01880173986249474 },
                { start: 300, density: 0.005893082643468498 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6055151024811222 },
                { start: 2500, end: 4000, density: 0.2617988133764832 },
                { start: 4000, density: 0.1326860841423948 },
              ],
              percentiles: { p75: 3027 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9265529192215409,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.02505998400426553,
                },
                { start: "0.25", density: 0.04838709677419354 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5712710228839263 },
                { start: 200, end: 500, density: 0.3694513371932726 },
                { start: 500, density: 0.0592776399228012 },
              ],
              percentiles: { p75: 280 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.27332439678284165 },
                { start: 800, end: 1800, density: 0.5119302949061659 },
                { start: 1800, density: 0.21474530831099253 },
              ],
              percentiles: { p75: 1726 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.46327607195996234 },
                { start: 1800, end: 3000, density: 0.33626403354524564 },
                { start: 3000, density: 0.20045989449479207 },
              ],
              percentiles: { p75: 2778 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.cl/",
          normalizedUrl: "https://www.yara.cl",
        },
      },
      extractedResults: {
        fcp: 2778,
        lcp: 3027,
        cls: "0.00",
        fid: 12,
      },
      timestamp: 1655979400854,
    },
    {
      url: "https://www.yara.co.nz/",
      deviceTargeted: "PHONE",
      results: {
        record: {
          key: { formFactor: "PHONE", origin: "https://www.yara.co.nz" },
          metrics: {
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6528091580057239 },
                { start: 1800, end: 3000, density: 0.2250338906461816 },
                { start: 3000, density: 0.12215695134809458 },
              ],
              percentiles: { p75: 2308 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9635002339728591 },
                { start: 100, end: 300, density: 0.028076743097800647 },
                { start: 300, density: 0.008423022929340196 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7731054303433672 },
                { start: 2500, end: 4000, density: 0.18726365148994098 },
                { start: 4000, density: 0.03963091816669189 },
              ],
              percentiles: { p75: 2514 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9270234409553295,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.0367094206103494,
                },
                { start: "0.25", density: 0.03626713843432108 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6025202240199129 },
                { start: 200, end: 500, density: 0.33711885500933414 },
                { start: 500, density: 0.060360920970752935 },
              ],
              percentiles: { p75: 255 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.3670847353930864 },
                { start: 800, end: 1800, density: 0.46527990211073705 },
                { start: 1800, density: 0.1676353624961766 },
              ],
              percentiles: { p75: 1615 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.co.nz/",
          normalizedUrl: "https://www.yara.co.nz",
        },
      },
      extractedResults: {
        fcp: 2308,
        lcp: 2514,
        cls: "0.00",
        fid: 13,
      },
      timestamp: 1655979402247,
    },
    {
      url: "https://www.yara.ph/",
      deviceTargeted: "PHONE",
      results: {
        record: {
          key: { formFactor: "PHONE", origin: "https://www.yara.ph" },
          metrics: {
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.603381014304291 },
                { start: 1800, end: 3000, density: 0.22066619985995786 },
                { start: 3000, density: 0.1759527858357511 },
              ],
              percentiles: { p75: 2517 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6858499999999984 },
                { start: 2500, end: 4000, density: 0.18164999999999956 },
                { start: 4000, density: 0.13250000000000195 },
              ],
              percentiles: { p75: 2830 },
            },
            cumulative_layout_shift: {
              histogram: [
                { start: "0.00", end: "0.10", density: 0.8818 },
                { start: "0.10", end: "0.25", density: 0.0748 },
                { start: "0.25", density: 0.04340000000000002 },
              ],
              percentiles: { p75: "0.01" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6518696260747849 },
                { start: 200, end: 500, density: 0.29384123175364923 },
                { start: 500, density: 0.05428914217156589 },
              ],
              percentiles: { p75: 245 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.3528352835283516 },
                { start: 800, end: 1800, density: 0.4217421742174202 },
                { start: 1800, density: 0.2254225422542283 },
              ],
              percentiles: { p75: 1719 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.ph/",
          normalizedUrl: "https://www.yara.ph",
        },
      },
      extractedResults: { fcp: 2517, lcp: 2830, cls: "0.01" },
      timestamp: 1655979403826,
    },
    {
      url: "https://www.yara.vn/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "https://www.yara.vn" },
          metrics: {
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.593940605939406 },
                { start: 800, end: 1800, density: 0.3457654234576542 },
                { start: 1800, density: 0.06029397060293973 },
              ],
              percentiles: { p75: 1070 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.806819318068193 },
                { start: 1800, end: 3000, density: 0.15068493150684928 },
                { start: 3000, density: 0.04249575042495767 },
              ],
              percentiles: { p75: 1533 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9819054283714885 },
                { start: 100, end: 300, density: 0.009697090872738179 },
                { start: 300, density: 0.008397480755773267 },
              ],
              percentiles: { p75: 11 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8491349134913493 },
                { start: 2500, end: 4000, density: 0.12566256625662567 },
                { start: 4000, density: 0.02520252025202512 },
              ],
              percentiles: { p75: 1912 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9075907590759077,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.0662066206620662,
                },
                { start: "0.25", density: 0.026202620262026202 },
              ],
              percentiles: { p75: "0.03" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.7838216178382162 },
                { start: 200, end: 500, density: 0.17598240175982396 },
                { start: 500, density: 0.040195980401959826 },
              ],
              percentiles: { p75: 174 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.vn/",
          normalizedUrl: "https://www.yara.vn",
        },
      },
      extractedResults: {
        fcp: 1533,
        lcp: 1912,
        cls: "0.03",
        fid: 11,
      },
      timestamp: 1655979406208,
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
                { start: 0, end: 1800, density: 0.845633671446893 },
                { start: 1800, end: 3000, density: 0.1063308849247989 },
                { start: 3000, density: 0.048035443628308 },
              ],
              percentiles: { p75: 1495 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9353087002715147 },
                { start: 100, end: 300, density: 0.03576909455790343 },
                { start: 300, density: 0.028922205170581902 },
              ],
              percentiles: { p75: 14 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8842376052385406 },
                { start: 2500, end: 4000, density: 0.08044901777362017 },
                { start: 4000, density: 0.035313376987839276 },
              ],
              percentiles: { p75: 1827 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9481877323420074,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.029855947955390327,
                },
                { start: "0.25", density: 0.021956319702602225 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.462558139534884 },
                { start: 200, end: 500, density: 0.398372093023256 },
                { start: 500, density: 0.13906976744186 },
              ],
              percentiles: { p75: 355 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.7545570649018926 },
                { start: 800, end: 1800, density: 0.20283292697085806 },
                { start: 1800, density: 0.04261000812724953 },
              ],
              percentiles: { p75: 794 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.it/",
          normalizedUrl: "https://www.yara.it",
        },
      },
      extractedResults: {
        fcp: 1495,
        lcp: 1827,
        cls: "0.00",
        fid: 14,
      },
      timestamp: 1655979407422,
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
                { start: 0, end: 200, density: 0.6877312268773118 },
                { start: 200, end: 500, density: 0.2260773922607738 },
                { start: 500, density: 0.08619138086191436 },
              ],
              percentiles: { p75: 240 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.5361536153615357 },
                { start: 800, end: 1800, density: 0.2526252625262525 },
                { start: 1800, density: 0.21122112211221178 },
              ],
              percentiles: { p75: 1647 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6432573029211669 },
                { start: 1800, end: 3000, density: 0.13505402160864308 },
                { start: 3000, density: 0.22168867547018992 },
              ],
              percentiles: { p75: 2786 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9715028497150285 },
                { start: 100, end: 300, density: 0.0184981501849815 },
                { start: 300, density: 0.00999900009999 },
              ],
              percentiles: { p75: 11 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6620675864827038 },
                { start: 2500, end: 4000, density: 0.16126774645070993 },
                { start: 4000, density: 0.17666466706658623 },
              ],
              percentiles: { p75: 3226 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9341934193419341,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.0455045504550455,
                },
                { start: "0.25", density: 0.020302030203020315 },
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
        fcp: 2786,
        lcp: 3226,
        cls: "0.00",
        fid: 11,
      },
      timestamp: 1655979409286,
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
                { start: "0.00", end: "0.10", density: 0.6744 },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.13829999999999998,
                },
                { start: "0.25", density: 0.18730000000000008 },
              ],
              percentiles: { p75: "0.16" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6109389061093891 },
                { start: 200, end: 500, density: 0.3233676632336765 },
                { start: 500, density: 0.06569343065693439 },
              ],
              percentiles: { p75: 272 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.42524252425242565 },
                { start: 800, end: 1800, density: 0.30113011301130144 },
                { start: 1800, density: 0.27362736273627297 },
              ],
              percentiles: { p75: 1820 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.4982498249825002 },
                { start: 1800, end: 3000, density: 0.20272027202720355 },
                { start: 3000, density: 0.2990299029902963 },
              ],
              percentiles: { p75: 3162 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.8918324502649204 },
                { start: 100, end: 300, density: 0.09257222833150056 },
                { start: 300, density: 0.015595321403578936 },
              ],
              percentiles: { p75: 11 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.5382576515303057 },
                { start: 2500, end: 4000, density: 0.22519503900780138 },
                { start: 4000, density: 0.23654730946189284 },
              ],
              percentiles: { p75: 3691 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.cm/",
          normalizedUrl: "https://www.yara.cm",
        },
      },
      extractedResults: {
        fcp: 3162,
        lcp: 3691,
        cls: "0.16",
        fid: 11,
      },
      timestamp: 1655979410558,
    },
    {
      url: "https://www.yara.com.pe/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "https://www.yara.com.pe" },
          metrics: {
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.30566943305669386 },
                { start: 800, end: 1800, density: 0.4670532946705323 },
                { start: 1800, density: 0.2272772722727738 },
              ],
              percentiles: { p75: 1761 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.501999600079985 },
                { start: 1800, end: 3000, density: 0.30833833233353375 },
                { start: 3000, density: 0.18966206758648116 },
              ],
              percentiles: { p75: 2692 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9665033496650335 },
                { start: 100, end: 300, density: 0.0260973902609739 },
                { start: 300, density: 0.007399260073992582 },
              ],
              percentiles: { p75: 11 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6101110111011075 },
                { start: 2500, end: 4000, density: 0.23517351735173425 },
                { start: 4000, density: 0.15471547154715823 },
              ],
              percentiles: { p75: 3198 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9113088691130885,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.0568943105689431,
                },
                { start: "0.25", density: 0.031796820317968266 },
              ],
              percentiles: { p75: "0.02" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5969403059694027 },
                { start: 200, end: 500, density: 0.32366763323667624 },
                { start: 500, density: 0.07939206079392101 },
              ],
              percentiles: { p75: 287 },
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
        lcp: 3198,
        cls: "0.02",
        fid: 11,
      },
      timestamp: 1655979412148,
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
                  density: 0.9382849718492854,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.045907319185794715,
                },
                { start: "0.25", density: 0.01580770896491989 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5100630209392151 },
                { start: 200, end: 500, density: 0.3386867249440943 },
                { start: 500, density: 0.1512502541166906 },
              ],
              percentiles: { p75: 322 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.7222982216142271 },
                { start: 800, end: 1800, density: 0.22868217054263565 },
                { start: 1800, density: 0.049019607843137226 },
              ],
              percentiles: { p75: 844 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8915716521350324 },
                { start: 1800, end: 3000, density: 0.07690587972278114 },
                { start: 3000, density: 0.03152246814218645 },
              ],
              percentiles: { p75: 1309 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9708652792990143 },
                { start: 100, end: 300, density: 0.016210295728368018 },
                { start: 300, density: 0.012924424972617735 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.9121098073942883 },
                { start: 2500, end: 4000, density: 0.0670799203010848 },
                { start: 4000, density: 0.020810272304626978 },
              ],
              percentiles: { p75: 1697 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.dk/",
          normalizedUrl: "https://www.yara.dk",
        },
      },
      extractedResults: {
        fcp: 1309,
        lcp: 1697,
        cls: "0.00",
        fid: 13,
      },
      timestamp: 1655979413349,
    },
    {
      url: "https://www.yara.cl/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "https://www.yara.cl" },
          metrics: {
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.4964000000000007 },
                { start: 1800, end: 3000, density: 0.3259000000000005 },
                { start: 3000, density: 0.17769999999999878 },
              ],
              percentiles: { p75: 2683 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.981003799240152 },
                { start: 100, end: 300, density: 0.014097180563887224 },
                { start: 300, density: 0.004899020195960813 },
              ],
              percentiles: { p75: 11 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6057500000000001 },
                { start: 2500, end: 4000, density: 0.24754999999999996 },
                { start: 4000, density: 0.14669999999999997 },
              ],
              percentiles: { p75: 3082 },
            },
            cumulative_layout_shift: {
              histogram: [
                { start: "0.00", end: "0.10", density: 0.8507 },
                { start: "0.10", end: "0.25", density: 0.0722 },
                { start: "0.25", density: 0.07710000000000004 },
              ],
              percentiles: { p75: "0.07" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6647000000000002 },
                { start: 200, end: 500, density: 0.27780000000000005 },
                { start: 500, density: 0.05749999999999967 },
              ],
              percentiles: { p75: 247 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.28527147285271454 },
                { start: 800, end: 1800, density: 0.5163483651634835 },
                { start: 1800, density: 0.19838016198380196 },
              ],
              percentiles: { p75: 1692 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.cl/",
          normalizedUrl: "https://www.yara.cl",
        },
      },
      extractedResults: {
        fcp: 2683,
        lcp: 3082,
        cls: "0.07",
        fid: 11,
      },
      timestamp: 1655979414789,
    },
    {
      url: "https://www.yaracanada.ca/fr-ca/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "https://www.yaracanada.ca" },
          metrics: {
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6971302869713026 },
                { start: 200, end: 500, density: 0.20827917208279162 },
                { start: 500, density: 0.09459054094590584 },
              ],
              percentiles: { p75: 238 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.4752049590081986 },
                { start: 800, end: 1800, density: 0.40121975604879034 },
                { start: 1800, density: 0.12357528494301112 },
              ],
              percentiles: { p75: 1344 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6669333866773348 },
                { start: 1800, end: 3000, density: 0.21214242848569695 },
                { start: 3000, density: 0.12092418483696822 },
              ],
              percentiles: { p75: 2247 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9572871861558467 },
                { start: 100, end: 300, density: 0.028608582574772435 },
                { start: 300, density: 0.01410423126938081 },
              ],
              percentiles: { p75: 11 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.704720472047205 },
                { start: 2500, end: 4000, density: 0.1916691669166917 },
                { start: 4000, density: 0.10361036103610324 },
              ],
              percentiles: { p75: 2741 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8312168783121687,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.12158784121587841,
                },
                { start: "0.25", density: 0.04719528047195278 },
              ],
              percentiles: { p75: "0.07" },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yaracanada.ca/fr-ca/",
          normalizedUrl: "https://www.yaracanada.ca",
        },
      },
      extractedResults: {
        fcp: 2247,
        lcp: 2741,
        cls: "0.07",
        fid: 11,
      },
      timestamp: 1655979415700,
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
                { start: "0.00", end: "0.10", density: 0.8766 },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.09080000000000002,
                },
                { start: "0.25", density: 0.0326 },
              ],
              percentiles: { p75: "0.01" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5784000000000004 },
                { start: 200, end: 500, density: 0.30040000000000017 },
                { start: 500, density: 0.12119999999999945 },
              ],
              percentiles: { p75: 302 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.6277372262773722 },
                { start: 800, end: 1800, density: 0.33086691330866913 },
                { start: 1800, density: 0.04139586041395863 },
              ],
              percentiles: { p75: 990 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7908045977011492 },
                { start: 1800, end: 3000, density: 0.15732133933033476 },
                { start: 3000, density: 0.051874062968515995 },
              ],
              percentiles: { p75: 1682 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9586917383476695 },
                { start: 100, end: 300, density: 0.025105021004200836 },
                { start: 300, density: 0.016203240648129627 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8378324335132977 },
                { start: 2500, end: 4000, density: 0.11927614477104587 },
                { start: 4000, density: 0.0428914217156564 },
              ],
              percentiles: { p75: 2116 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.gr/",
          normalizedUrl: "https://www.yara.gr",
        },
      },
      extractedResults: {
        fcp: 1682,
        lcp: 2116,
        cls: "0.01",
        fid: 12,
      },
      timestamp: 1655979416425,
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
                { start: 0, end: 800, density: 0.6446644664466447 },
                { start: 800, end: 1800, density: 0.32053205320532047 },
                { start: 1800, density: 0.0348034803480348 },
              ],
              percentiles: { p75: 956 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8656134386561343 },
                { start: 1800, end: 3000, density: 0.10288971102889712 },
                { start: 3000, density: 0.03149685031496865 },
              ],
              percentiles: { p75: 1420 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9644822411205602 },
                { start: 100, end: 300, density: 0.02511255627813907 },
                { start: 300, density: 0.010405202601300626 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8888499999999999 },
                { start: 2500, end: 4000, density: 0.08425000000000005 },
                { start: 4000, density: 0.02690000000000001 },
              ],
              percentiles: { p75: 1907 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9543045695430458,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.033296670332966696,
                },
                { start: "0.25", density: 0.012398760123987607 },
              ],
              percentiles: { p75: "0.01" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5743000000000004 },
                { start: 200, end: 500, density: 0.3188000000000002 },
                { start: 500, density: 0.10689999999999952 },
              ],
              percentiles: { p75: 297 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.lv/",
          normalizedUrl: "https://www.yara.lv",
        },
      },
      extractedResults: {
        fcp: 1420,
        lcp: 1907,
        cls: "0.01",
        fid: 13,
      },
      timestamp: 1655979417033,
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
                { start: 0, end: 200, density: 0.5103861192570872 },
                { start: 200, end: 500, density: 0.3872189638318672 },
                { start: 500, density: 0.10239491691104559 },
              ],
              percentiles: { p75: 304 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.6827184946768999 },
                { start: 800, end: 1800, density: 0.24684327803911857 },
                { start: 1800, density: 0.07043822728398151 },
              ],
              percentiles: { p75: 917 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8176645225136069 },
                { start: 1800, end: 3000, density: 0.10180603661553686 },
                { start: 3000, density: 0.0805294408708562 },
              ],
              percentiles: { p75: 1533 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.95864289252105 },
                { start: 100, end: 300, density: 0.025755324418028726 },
                { start: 300, density: 0.015601783060921208 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.86932310357629 },
                { start: 2500, end: 4000, density: 0.08142556614280412 },
                { start: 4000, density: 0.0492513302809058 },
              ],
              percentiles: { p75: 1858 },
            },
            cumulative_layout_shift: {
              histogram: [
                { start: "0.00", end: "0.10", density: 0.98251016134992 },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.007513240546865378,
                },
                { start: "0.25", density: 0.009976598103214683 },
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
        fcp: 1533,
        lcp: 1858,
        cls: "0.00",
        fid: 12,
      },
      timestamp: 1655979417692,
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
                  density: 0.9250932098068015,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.06372161337701955,
                },
                { start: "0.25", density: 0.011185176816178961 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.583193652922114 },
                { start: 200, end: 500, density: 0.3192535478824448 },
                { start: 500, density: 0.0975527991954412 },
              ],
              percentiles: { p75: 289 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.5863968521641372 },
                { start: 800, end: 1800, density: 0.36728499156829686 },
                { start: 1800, density: 0.046318156267565996 },
              ],
              percentiles: { p75: 989 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8602466900531855 },
                { start: 1800, end: 3000, density: 0.10274980196899407 },
                { start: 3000, density: 0.03700350797782042 },
              ],
              percentiles: { p75: 1486 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9461260447255477 },
                { start: 100, end: 300, density: 0.02552518635644906 },
                { start: 300, density: 0.028348768918003236 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8842802172928927 },
                { start: 2500, end: 4000, density: 0.08471027614305117 },
                { start: 4000, density: 0.031009506564056235 },
              ],
              percentiles: { p75: 1896 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.ro/",
          normalizedUrl: "https://www.yara.ro",
        },
      },
      extractedResults: {
        fcp: 1486,
        lcp: 1896,
        cls: "0.00",
        fid: 12,
      },
      timestamp: 1655979418724,
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
                { start: 0, end: 1800, density: 0.6474472948945906 },
                { start: 1800, end: 3000, density: 0.25146050292100613 },
                { start: 3000, density: 0.1010922021844033 },
              ],
              percentiles: { p75: 2080 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9728682170542635 },
                { start: 100, end: 300, density: 0.02286821705426356 },
                { start: 300, density: 0.004263565891472867 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7795255613345171 },
                { start: 2500, end: 4000, density: 0.15590511226690346 },
                { start: 4000, density: 0.06456932639857933 },
              ],
              percentiles: { p75: 2390 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9541399673325794,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.020731247644176408,
                },
                { start: "0.25", density: 0.025128785023244133 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5675306957708048 },
                { start: 200, end: 500, density: 0.3674810864442514 },
                { start: 500, density: 0.06498821778494365 },
              ],
              percentiles: { p75: 306 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.4075187969924812 },
                { start: 800, end: 1800, density: 0.5028822055137847 },
                { start: 1800, density: 0.08959899749373412 },
              ],
              percentiles: { p75: 1184 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.pa/",
          normalizedUrl: "https://www.yara.com.pa",
        },
      },
      extractedResults: {
        fcp: 2080,
        lcp: 2390,
        cls: "0.00",
        fid: 12,
      },
      timestamp: 1655979419893,
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
                  density: 0.9043762088974856,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.06310444874274662,
                },
                { start: "0.25", density: 0.03251934235976789 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.40828828828828884 },
                { start: 200, end: 500, density: 0.4159759759759766 },
                { start: 500, density: 0.1757357357357345 },
              ],
              percentiles: { p75: 375 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.869069510849577 },
                { start: 800, end: 1800, density: 0.12063258550937839 },
                { start: 1800, density: 0.010297903641044557 },
              ],
              percentiles: { p75: 646 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.9293571253972133 },
                { start: 1800, end: 3000, density: 0.056098753361036396 },
                { start: 3000, density: 0.01454412124175031 },
              ],
              percentiles: { p75: 1145 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9148779590334847 },
                { start: 100, end: 300, density: 0.042438366245553784 },
                { start: 300, density: 0.042683674720961566 },
              ],
              percentiles: { p75: 16 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.9335975609756096 },
                { start: 2500, end: 4000, density: 0.05067073170731708 },
                { start: 4000, density: 0.015731707317073195 },
              ],
              percentiles: { p75: 1629 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yaraagri.cz/",
          normalizedUrl: "https://www.yaraagri.cz",
        },
      },
      extractedResults: {
        fcp: 1145,
        lcp: 1629,
        cls: "0.00",
        fid: 16,
      },
      timestamp: 1655979420859,
    },
    {
      url: "https://www.yara.com.ar/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "https://www.yara.com.ar" },
          metrics: {
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.31466853314668525 },
                { start: 800, end: 1800, density: 0.4911508849115086 },
                { start: 1800, density: 0.1941805819418063 },
              ],
              percentiles: { p75: 1636 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5350999999999987 },
                { start: 1800, end: 3000, density: 0.2877999999999992 },
                { start: 3000, density: 0.17710000000000212 },
              ],
              percentiles: { p75: 2643 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.966903309669033 },
                { start: 100, end: 300, density: 0.027397260273972605 },
                { start: 300, density: 0.005699430056994301 },
              ],
              percentiles: { p75: 11 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6483296659331864 },
                { start: 2500, end: 4000, density: 0.22724544908981797 },
                { start: 4000, density: 0.12442488497699568 },
              ],
              percentiles: { p75: 2978 },
            },
            cumulative_layout_shift: {
              histogram: [
                { start: "0.00", end: "0.10", density: 0.9096 },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.04809999999999998,
                },
                { start: "0.25", density: 0.04229999999999999 },
              ],
              percentiles: { p75: "0.02" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6128000000000002 },
                { start: 200, end: 500, density: 0.30870000000000025 },
                { start: 500, density: 0.0784999999999996 },
              ],
              percentiles: { p75: 275 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.ar/",
          normalizedUrl: "https://www.yara.com.ar",
        },
      },
      extractedResults: {
        fcp: 2643,
        lcp: 2978,
        cls: "0.02",
        fid: 11,
      },
      timestamp: 1655979421861,
    },
    {
      url: "https://www.yara.cm/en-cm/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "https://www.yara.cm" },
          metrics: {
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.5382576515303057 },
                { start: 2500, end: 4000, density: 0.22519503900780138 },
                { start: 4000, density: 0.23654730946189284 },
              ],
              percentiles: { p75: 3691 },
            },
            cumulative_layout_shift: {
              histogram: [
                { start: "0.00", end: "0.10", density: 0.6744 },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.13829999999999998,
                },
                { start: "0.25", density: 0.18730000000000008 },
              ],
              percentiles: { p75: "0.16" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6109389061093891 },
                { start: 200, end: 500, density: 0.3233676632336765 },
                { start: 500, density: 0.06569343065693439 },
              ],
              percentiles: { p75: 272 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.42524252425242565 },
                { start: 800, end: 1800, density: 0.30113011301130144 },
                { start: 1800, density: 0.27362736273627297 },
              ],
              percentiles: { p75: 1820 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.4982498249825002 },
                { start: 1800, end: 3000, density: 0.20272027202720355 },
                { start: 3000, density: 0.2990299029902963 },
              ],
              percentiles: { p75: 3162 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.8918324502649204 },
                { start: 100, end: 300, density: 0.09257222833150056 },
                { start: 300, density: 0.015595321403578936 },
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
        fcp: 3162,
        lcp: 3691,
        cls: "0.16",
        fid: 11,
      },
      timestamp: 1655979422599,
    },
    {
      url: "https://www.yara.co.tz/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "https://www.yara.co.tz" },
          metrics: {
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.39921976592977915 },
                { start: 800, end: 1800, density: 0.34270281084325316 },
                { start: 1800, density: 0.2580774232269676 },
              ],
              percentiles: { p75: 1851 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5422542254225421 },
                { start: 1800, end: 3000, density: 0.19671967196719667 },
                { start: 3000, density: 0.2610261026102611 },
              ],
              percentiles: { p75: 3086 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9274 },
                { start: 100, end: 300, density: 0.0582 },
                { start: 300, density: 0.014399999999999991 },
              ],
              percentiles: { p75: 10 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.574020391843263 },
                { start: 2500, end: 4000, density: 0.21656337465014006 },
                { start: 4000, density: 0.20941623350659683 },
              ],
              percentiles: { p75: 3649 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8284828482848285,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.12901290129012905,
                },
                { start: "0.25", density: 0.04250425042504251 },
              ],
              percentiles: { p75: "0.04" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6604679064187162 },
                { start: 200, end: 500, density: 0.22495500899820026 },
                { start: 500, density: 0.11457708458308345 },
              ],
              percentiles: { p75: 260 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.co.tz/",
          normalizedUrl: "https://www.yara.co.tz",
        },
      },
      extractedResults: {
        fcp: 3086,
        lcp: 3649,
        cls: "0.04",
        fid: 10,
      },
      timestamp: 1655979423468,
    },
    {
      url: "https://www.yara.co.ke/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "https://www.yara.co.ke" },
          metrics: {
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.31016898310169067 },
                { start: 800, end: 1800, density: 0.41905809419058215 },
                { start: 1800, density: 0.2707729227077271 },
              ],
              percentiles: { p75: 1919 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5275055011002201 },
                { start: 1800, end: 3000, density: 0.2421484296859372 },
                { start: 3000, density: 0.2303460692138427 },
              ],
              percentiles: { p75: 2947 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9548090381923616 },
                { start: 100, end: 300, density: 0.033993201359728054 },
                { start: 300, density: 0.011197760447910415 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.579542045795422 },
                { start: 2500, end: 4000, density: 0.23737626237376336 },
                { start: 4000, density: 0.18308169183081466 },
              ],
              percentiles: { p75: 3483 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8393160683931606,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.10898910108989103,
                },
                { start: "0.25", density: 0.05169483051694833 },
              ],
              percentiles: { p75: "0.03" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6157768446310738 },
                { start: 200, end: 500, density: 0.28124375124975015 },
                { start: 500, density: 0.10297940411917603 },
              ],
              percentiles: { p75: 279 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.co.ke/",
          normalizedUrl: "https://www.yara.co.ke",
        },
      },
      extractedResults: {
        fcp: 2947,
        lcp: 3483,
        cls: "0.03",
        fid: 12,
      },
      timestamp: 1655979424144,
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
                  density: 0.9496846723334247,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.029613380860981628,
                },
                { start: "0.25", density: 0.02070194680559364 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5885551175750985 },
                { start: 200, end: 500, density: 0.29849123283947265 },
                { start: 500, density: 0.11295364958542888 },
              ],
              percentiles: { p75: 284 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.6952982456140351 },
                { start: 800, end: 1800, density: 0.2714385964912281 },
                { start: 1800, density: 0.03326315789473691 },
              ],
              percentiles: { p75: 887 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8868212748229412 },
                { start: 1800, end: 3000, density: 0.09109845854742399 },
                { start: 3000, density: 0.02208026662963483 },
              ],
              percentiles: { p75: 1319 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9354201917653695 },
                { start: 100, end: 300, density: 0.03553299492385787 },
                { start: 300, density: 0.029046813310772704 },
              ],
              percentiles: { p75: 14 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.925546637143648 },
                { start: 2500, end: 4000, density: 0.058400221422640466 },
                { start: 4000, density: 0.016053141433711584 },
              ],
              percentiles: { p75: 1680 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.se/",
          normalizedUrl: "https://www.yara.se",
        },
      },
      extractedResults: {
        fcp: 1319,
        lcp: 1680,
        cls: "0.00",
        fid: 14,
      },
      timestamp: 1655979424819,
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
                { start: "0.00", end: "0.10", density: 0.921 },
                { start: "0.10", end: "0.25", density: 0.0548 },
                { start: "0.25", density: 0.024200000000000006 },
              ],
              percentiles: { p75: "0.01" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6302739452109579 },
                { start: 200, end: 500, density: 0.285742851429714 },
                { start: 500, density: 0.08398320335932805 },
              ],
              percentiles: { p75: 277 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.3932000000000004 },
                { start: 800, end: 1800, density: 0.3924000000000004 },
                { start: 1800, density: 0.21439999999999917 },
              ],
              percentiles: { p75: 1679 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.49884988498849947 },
                { start: 1800, end: 3000, density: 0.25442544254425475 },
                { start: 3000, density: 0.2467246724672456 },
              ],
              percentiles: { p75: 3142 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9777044591081784 },
                { start: 100, end: 300, density: 0.019296140771845632 },
                { start: 300, density: 0.002999400119976005 },
              ],
              percentiles: { p75: 11 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.5868586858685857 },
                { start: 2500, end: 4000, density: 0.20482048204820444 },
                { start: 4000, density: 0.20832083208320995 },
              ],
              percentiles: { p75: 3771 },
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
        lcp: 3771,
        cls: "0.01",
        fid: 11,
      },
      timestamp: 1655979426074,
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
                { start: 0, end: 1800, density: 0.8662133786621339 },
                { start: 1800, end: 3000, density: 0.09899010098990098 },
                { start: 3000, density: 0.03479652034796508 },
              ],
              percentiles: { p75: 1468 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9520095980803838 },
                { start: 100, end: 300, density: 0.02259548090381923 },
                { start: 300, density: 0.02539492101579689 },
              ],
              percentiles: { p75: 11 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.882123575284943 },
                { start: 2500, end: 4000, density: 0.0878824235152969 },
                { start: 4000, density: 0.029994001199759982 },
              ],
              percentiles: { p75: 1917 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9076092390760924,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.07579242075792421,
                },
                { start: "0.25", density: 0.016598340165983425 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6237247449489896 },
                { start: 200, end: 500, density: 0.28805761152230425 },
                { start: 500, density: 0.08821764352870622 },
              ],
              percentiles: { p75: 273 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.5963614554178328 },
                { start: 800, end: 1800, density: 0.3587564974010395 },
                { start: 1800, density: 0.0448820471811275 },
              ],
              percentiles: { p75: 985 },
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
        lcp: 1917,
        cls: "0.00",
        fid: 11,
      },
      timestamp: 1655979427183,
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
                { start: 0, end: 200, density: 0.5926978114478116 },
                { start: 200, end: 500, density: 0.3489057239057241 },
                { start: 500, density: 0.058396464646464225 },
              ],
              percentiles: { p75: 270 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.7615677160363407 },
                { start: 800, end: 1800, density: 0.20240862032537507 },
                { start: 1800, density: 0.03602366363828425 },
              ],
              percentiles: { p75: 788 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8590745827170925 },
                { start: 1800, end: 3000, density: 0.09697866046904709 },
                { start: 3000, density: 0.04394675681386042 },
              ],
              percentiles: { p75: 1421 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9696358424461196 },
                { start: 100, end: 300, density: 0.02229536044166047 },
                { start: 300, density: 0.008068797112219986 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8907523013437733 },
                { start: 2500, end: 4000, density: 0.07644693683208129 },
                { start: 4000, density: 0.03280076182414546 },
              ],
              percentiles: { p75: 1808 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9696649402811542,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.02283056759327767,
                },
                { start: "0.25", density: 0.007504492125568123 },
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
        fcp: 1421,
        lcp: 1808,
        cls: "0.00",
        fid: 12,
      },
      timestamp: 1655979428763,
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
                  density: 0.9144914491449145,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.054405440544054405,
                },
                { start: "0.25", density: 0.031103110311031114 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5011995201919235 },
                { start: 200, end: 500, density: 0.36075569772091176 },
                { start: 500, density: 0.13804478208716475 },
              ],
              percentiles: { p75: 349 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.20166049814944467 },
                { start: 800, end: 1800, density: 0.5198559567870357 },
                { start: 1800, density: 0.27848354506351974 },
              ],
              percentiles: { p75: 1914 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.3606081824547386 },
                { start: 1800, end: 3000, density: 0.32019605881764723 },
                { start: 3000, density: 0.3191957587276143 },
              ],
              percentiles: { p75: 3400 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9695 },
                { start: 100, end: 300, density: 0.0247 },
                { start: 300, density: 0.0058 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.45790841831633816 },
                { start: 2500, end: 4000, density: 0.31423715256948714 },
                { start: 4000, density: 0.22785442911417486 },
              ],
              percentiles: { p75: 3909 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.bo/",
          normalizedUrl: "https://www.yara.bo",
        },
      },
      extractedResults: {
        fcp: 3400,
        lcp: 3909,
        cls: "0.00",
        fid: 12,
      },
      timestamp: 1655979429936,
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
                  density: 0.9559101974573978,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.029077630511225312,
                },
                { start: "0.25", density: 0.015012172031376798 },
              ],
              percentiles: { p75: "0.01" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.44704134017833036 },
                { start: 200, end: 500, density: 0.40637665495811953 },
                { start: 500, density: 0.14658200486355003 },
              ],
              percentiles: { p75: 358 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.7147147147147147 },
                { start: 800, end: 1800, density: 0.20420420420420415 },
                { start: 1800, density: 0.08108108108108114 },
              ],
              percentiles: { p75: 855 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8570845242956312 },
                { start: 1800, end: 3000, density: 0.10112971280794883 },
                { start: 3000, density: 0.04178576289642012 },
              ],
              percentiles: { p75: 1359 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.956586220844007 },
                { start: 100, end: 300, density: 0.024673048402319004 },
                { start: 300, density: 0.01874073075367388 },
              ],
              percentiles: { p75: 14 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.875390890550646 },
                { start: 2500, end: 4000, density: 0.09564921821889873 },
                { start: 4000, density: 0.028959891230455143 },
              ],
              percentiles: { p75: 1764 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.de/",
          normalizedUrl: "https://www.yara.de",
        },
      },
      extractedResults: {
        fcp: 1359,
        lcp: 1764,
        cls: "0.01",
        fid: 14,
      },
      timestamp: 1655979430741,
    },
    {
      url: "https://www.yara.fi/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "https://www.yara.fi" },
          metrics: {
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.48989797959591935 },
                { start: 200, end: 500, density: 0.38557711542308487 },
                { start: 500, density: 0.12452490498099585 },
              ],
              percentiles: { p75: 345 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.6685994201739477 },
                { start: 800, end: 1800, density: 0.2970108967309807 },
                { start: 1800, density: 0.03438968309507175 },
              ],
              percentiles: { p75: 900 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8944316704988501 },
                { start: 1800, end: 3000, density: 0.08227531740477854 },
                { start: 3000, density: 0.02329301209637136 },
              ],
              percentiles: { p75: 1327 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.962107578484303 },
                { start: 100, end: 300, density: 0.023795240951809633 },
                { start: 300, density: 0.014097180563887313 },
              ],
              percentiles: { p75: 14 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.9105678864227154 },
                { start: 2500, end: 4000, density: 0.0683363327334533 },
                { start: 4000, density: 0.021095780843831187 },
              ],
              percentiles: { p75: 1719 },
            },
            cumulative_layout_shift: {
              histogram: [
                { start: "0.00", end: "0.10", density: 0.9001 },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.07329999999999999,
                },
                { start: "0.25", density: 0.026600000000000016 },
              ],
              percentiles: { p75: "0.01" },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.fi/",
          normalizedUrl: "https://www.yara.fi",
        },
      },
      extractedResults: {
        fcp: 1327,
        lcp: 1719,
        cls: "0.01",
        fid: 14,
      },
      timestamp: 1655979431871,
    },
    {
      url: "https://www.yara.gr/",
      deviceTargeted: "PHONE",
      results: {
        record: {
          key: { formFactor: "PHONE", origin: "https://www.yara.gr" },
          metrics: {
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.6123462630085147 },
                { start: 800, end: 1800, density: 0.3436613055818354 },
                { start: 1800, density: 0.04399243140964979 },
              ],
              percentiles: { p75: 1009 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7813832306963524 },
                { start: 1800, end: 3000, density: 0.1639033633349123 },
                { start: 3000, density: 0.054713405968735356 },
              ],
              percentiles: { p75: 1712 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9553358742258219 },
                { start: 100, end: 300, density: 0.027751310147689376 },
                { start: 300, density: 0.01691281562648879 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8418803418803413 },
                { start: 2500, end: 4000, density: 0.11704653371320037 },
                { start: 4000, density: 0.04107312440645834 },
              ],
              percentiles: { p75: 2105 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8677323860272351,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.09934872705743045,
                },
                { start: "0.25", density: 0.03291888691533454 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5486632270168855 },
                { start: 200, end: 500, density: 0.3217636022514071 },
                { start: 500, density: 0.12957317073170743 },
              ],
              percentiles: { p75: 316 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.gr/",
          normalizedUrl: "https://www.yara.gr",
        },
      },
      extractedResults: {
        fcp: 1712,
        lcp: 2105,
        cls: "0.00",
        fid: 12,
      },
      timestamp: 1655979432471,
    },
    {
      url: "https://www.yarabrasil.com.br/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "https://www.yarabrasil.com.br" },
          metrics: {
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.5611377724455103 },
                { start: 2500, end: 4000, density: 0.2428014397120574 },
                { start: 4000, density: 0.19606078784243242 },
              ],
              percentiles: { p75: 3590 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8473847384738473,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.1086108610861086,
                },
                { start: "0.25", density: 0.04400440044004404 },
              ],
              percentiles: { p75: "0.05" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.48025197480251997 },
                { start: 200, end: 500, density: 0.2884711528847116 },
                { start: 500, density: 0.23127687231276847 },
              ],
              percentiles: { p75: 464 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.42642792837851345 },
                { start: 800, end: 1800, density: 0.3798139441832548 },
                { start: 1800, density: 0.19375812743823162 },
              ],
              percentiles: { p75: 1590 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5164000000000032 },
                { start: 1800, end: 3000, density: 0.23220000000000146 },
                { start: 3000, density: 0.2513999999999953 },
              ],
              percentiles: { p75: 3049 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9132566283141571 },
                { start: 100, end: 300, density: 0.05742871435717861 },
                { start: 300, density: 0.029314657328664326 },
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
        fcp: 3049,
        lcp: 3590,
        cls: "0.05",
        fid: 16,
      },
      timestamp: 1655979433473,
    },
    {
      url: "https://www.yara.com.gt/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "https://www.yara.com.gt" },
          metrics: {
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9662932586517304 },
                { start: 100, end: 300, density: 0.025505101020204035 },
                { start: 300, density: 0.00820164032806564 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7735679296211139 },
                { start: 2500, end: 4000, density: 0.13935819254223736 },
                { start: 4000, density: 0.08707387783664877 },
              ],
              percentiles: { p75: 2386 },
            },
            cumulative_layout_shift: {
              histogram: [
                { start: "0.00", end: "0.10", density: 0.9272 },
                { start: "0.10", end: "0.25", density: 0.0399 },
                { start: "0.25", density: 0.03290000000000001 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6212378762123786 },
                { start: 200, end: 500, density: 0.26797320267973196 },
                { start: 500, density: 0.11078892110788954 },
              ],
              percentiles: { p75: 292 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.5189481051894808 },
                { start: 800, end: 1800, density: 0.38096190380961875 },
                { start: 1800, density: 0.10008999100090055 },
              ],
              percentiles: { p75: 1165 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.708316673330668 },
                { start: 1800, end: 3000, density: 0.1811275489804079 },
                { start: 3000, density: 0.1105557776889241 },
              ],
              percentiles: { p75: 1972 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.gt/",
          normalizedUrl: "https://www.yara.com.gt",
        },
      },
      extractedResults: {
        fcp: 1972,
        lcp: 2386,
        cls: "0.00",
        fid: 12,
      },
      timestamp: 1655979434187,
    },
    {
      url: "https://www.yara.my/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "https://www.yara.my" },
          metrics: {
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.4871025794841028 },
                { start: 800, end: 1800, density: 0.38412317536492674 },
                { start: 1800, density: 0.12877424515097047 },
              ],
              percentiles: { p75: 1317 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7379737973797378 },
                { start: 1800, end: 3000, density: 0.14941494149414938 },
                { start: 3000, density: 0.11261126112611272 },
              ],
              percentiles: { p75: 1874 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9753975397539754 },
                { start: 100, end: 300, density: 0.0159015901590159 },
                { start: 300, density: 0.008700870087008681 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7874787478747873 },
                { start: 2500, end: 4000, density: 0.12641264126412635 },
                { start: 4000, density: 0.08610861086108616 },
              ],
              percentiles: { p75: 2290 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8234823482348235,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.12451245124512451,
                },
                { start: "0.25", density: 0.052005200520052024 },
              ],
              percentiles: { p75: "0.05" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.7776444711057787 },
                { start: 200, end: 500, density: 0.17256548690261947 },
                { start: 500, density: 0.049790041991601676 },
              ],
              percentiles: { p75: 188 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.my/",
          normalizedUrl: "https://www.yara.my",
        },
      },
      extractedResults: {
        fcp: 1874,
        lcp: 2290,
        cls: "0.05",
        fid: 12,
      },
      timestamp: 1655979434898,
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
                { start: 0, end: 100, density: 0.9359077070982216 },
                { start: 100, end: 300, density: 0.042941836244191636 },
                { start: 300, density: 0.021150456657586924 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6959459459459458 },
                { start: 2500, end: 4000, density: 0.1951693072382727 },
                { start: 4000, density: 0.10888474681578142 },
              ],
              percentiles: { p75: 2754 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9483703929332928,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.02939384709107524,
                },
                { start: "0.25", density: 0.022235759975632038 },
              ],
              percentiles: { p75: "0.05" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5513172781638921 },
                { start: 200, end: 500, density: 0.3117827703248748 },
                { start: 500, density: 0.13689995151123316 },
              ],
              percentiles: { p75: 314 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.4036783042394017 },
                { start: 800, end: 1800, density: 0.4392144638403992 },
                { start: 1800, density: 0.15710723192019915 },
              ],
              percentiles: { p75: 1439 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.609145682063957 },
                { start: 1800, end: 3000, density: 0.2406921056697046 },
                { start: 3000, density: 0.15016221226633836 },
              ],
              percentiles: { p75: 2432 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yaracanada.ca/",
          normalizedUrl: "https://www.yaracanada.ca",
        },
      },
      extractedResults: {
        fcp: 2432,
        lcp: 2754,
        cls: "0.05",
        fid: 13,
      },
      timestamp: 1655979435484,
    },
    {
      url: "https://www.yara.in/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "https://www.yara.in" },
          metrics: {
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6505 },
                { start: 200, end: 500, density: 0.26330000000000003 },
                { start: 500, density: 0.08620000000000001 },
              ],
              percentiles: { p75: 244 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.46760647870425864 },
                { start: 800, end: 1800, density: 0.39432113577284494 },
                { start: 1800, density: 0.13807238552289636 },
              ],
              percentiles: { p75: 1358 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7008999999999999 },
                { start: 1800, end: 3000, density: 0.18709999999999996 },
                { start: 3000, density: 0.11200000000000018 },
              ],
              percentiles: { p75: 2034 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9638999999999998 },
                { start: 100, end: 300, density: 0.022099999999999998 },
                { start: 300, density: 0.014000000000000146 },
              ],
              percentiles: { p75: 14 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7610761076107609 },
                { start: 2500, end: 4000, density: 0.14251425142514246 },
                { start: 4000, density: 0.0964096409640966 },
              ],
              percentiles: { p75: 2458 },
            },
            cumulative_layout_shift: {
              histogram: [
                { start: "0.00", end: "0.10", density: 0.8308 },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.11479999999999999,
                },
                { start: "0.25", density: 0.05440000000000009 },
              ],
              percentiles: { p75: "0.03" },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.in/",
          normalizedUrl: "https://www.yara.in",
        },
      },
      extractedResults: {
        fcp: 2034,
        lcp: 2458,
        cls: "0.03",
        fid: 14,
      },
      timestamp: 1655979436461,
    },
    {
      url: "https://www.yara.com/",
      deviceTargeted: "PHONE",
      results: {
        record: {
          key: { formFactor: "PHONE", origin: "https://www.yara.com" },
          metrics: {
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7423704755145493 },
                { start: 2500, end: 4000, density: 0.16731724627395314 },
                { start: 4000, density: 0.09031227821149768 },
              ],
              percentiles: { p75: 2559 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9240792216817235,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.04951355107713689,
                },
                { start: "0.25", density: 0.026407227241139666 },
              ],
              percentiles: { p75: "0.05" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6610776186887711 },
                { start: 200, end: 500, density: 0.2648831951770909 },
                { start: 500, density: 0.07403918613413793 },
              ],
              percentiles: { p75: 239 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.490286936374977 },
                { start: 800, end: 1800, density: 0.3776510425949023 },
                { start: 1800, density: 0.13206202103012066 },
              ],
              percentiles: { p75: 1342 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6751332149200698 },
                { start: 1800, end: 3000, density: 0.20088809946713998 },
                { start: 3000, density: 0.12397868561279005 },
              ],
              percentiles: { p75: 2175 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9643265929034719 },
                { start: 100, end: 300, density: 0.02956886684471575 },
                { start: 300, density: 0.006104540251812257 },
              ],
              percentiles: { p75: 14 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com/",
          normalizedUrl: "https://www.yara.com",
        },
      },
      extractedResults: {
        fcp: 2175,
        lcp: 2559,
        cls: "0.05",
        fid: 14,
      },
      timestamp: 1655979437281,
    },
    {
      url: "https://www.yara.com.gt/",
      deviceTargeted: "PHONE",
      results: {
        record: {
          key: { formFactor: "PHONE", origin: "https://www.yara.com.gt" },
          metrics: {
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6825219868698134 },
                { start: 1800, end: 3000, density: 0.19843924191750287 },
                { start: 3000, density: 0.11903877121268373 },
              ],
              percentiles: { p75: 2065 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9605047318611987 },
                { start: 100, end: 300, density: 0.03141955835962145 },
                { start: 300, density: 0.008075709779179808 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7754247722235899 },
                { start: 2500, end: 4000, density: 0.1445456784043338 },
                { start: 4000, density: 0.08002954937207642 },
              ],
              percentiles: { p75: 2375 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9531288343558281,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.01754601226993865,
                },
                { start: "0.25", density: 0.02932515337423314 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5510782501540359 },
                { start: 200, end: 500, density: 0.319531731361676 },
                { start: 500, density: 0.12939001848428808 },
              ],
              percentiles: { p75: 327 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.48991141732283466 },
                { start: 800, end: 1800, density: 0.40194389763779526 },
                { start: 1800, density: 0.10814468503937005 },
              ],
              percentiles: { p75: 1202 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.gt/",
          normalizedUrl: "https://www.yara.com.gt",
        },
      },
      extractedResults: {
        fcp: 2065,
        lcp: 2375,
        cls: "0.00",
        fid: 13,
      },
      timestamp: 1655979438441,
    },
    {
      url: "https://www.yara.cr/",
      deviceTargeted: "PHONE",
      results: {
        record: {
          key: { formFactor: "PHONE", origin: "https://www.yara.cr" },
          metrics: {
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9412713344980513 },
                { start: 100, end: 300, density: 0.050530842628678956 },
                { start: 300, density: 0.008197822873269714 },
              ],
              percentiles: { p75: 14 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6889858371269589 },
                { start: 2500, end: 4000, density: 0.18291603439554857 },
                { start: 4000, density: 0.12809812847749258 },
              ],
              percentiles: { p75: 2777 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9650638617580767,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.012021036814425248,
                },
                { start: "0.25", density: 0.022915101427498117 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6419753086419749 },
                { start: 200, end: 500, density: 0.3012345679012343 },
                { start: 500, density: 0.056790123456790804 },
              ],
              percentiles: { p75: 260 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.36889395089850635 },
                { start: 800, end: 1800, density: 0.46076942546190786 },
                { start: 1800, density: 0.17033662363958568 },
              ],
              percentiles: { p75: 1491 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.558163007822356 },
                { start: 1800, end: 3000, density: 0.2658339641685588 },
                { start: 3000, density: 0.1760030280090853 },
              ],
              percentiles: { p75: 2541 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.cr/",
          normalizedUrl: "https://www.yara.cr",
        },
      },
      extractedResults: {
        fcp: 2541,
        lcp: 2777,
        cls: "0.00",
        fid: 14,
      },
      timestamp: 1655979439480,
    },
    {
      url: "https://www.yara.hu/",
      deviceTargeted: "PHONE",
      results: {
        record: {
          key: { formFactor: "PHONE", origin: "https://www.yara.hu" },
          metrics: {
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6126347866854195 },
                { start: 200, end: 500, density: 0.3090717299578058 },
                { start: 500, density: 0.07829348335677468 },
              ],
              percentiles: { p75: 264 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.6127699752153899 },
                { start: 800, end: 1800, density: 0.3304614658326448 },
                { start: 1800, density: 0.056768558951965274 },
              ],
              percentiles: { p75: 987 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8508221933041523 },
                { start: 1800, end: 3000, density: 0.10765408730628177 },
                { start: 3000, density: 0.041523719389566026 },
              ],
              percentiles: { p75: 1484 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9569321533923304 },
                { start: 100, end: 300, density: 0.025132743362831854 },
                { start: 300, density: 0.01793510324483779 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8925498054933394 },
                { start: 2500, end: 4000, density: 0.07904043380879403 },
                { start: 4000, density: 0.028409760697866483 },
              ],
              percentiles: { p75: 1822 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9753770028275213,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.013195098963242228,
                },
                { start: "0.25", density: 0.011427898209236573 },
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
        fcp: 1484,
        lcp: 1822,
        cls: "0.00",
        fid: 13,
      },
      timestamp: 1655979440908,
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
                { start: 0, end: 200, density: 0.49697319112136146 },
                { start: 200, end: 500, density: 0.40343038339579196 },
                { start: 500, density: 0.09959642548284658 },
              ],
              percentiles: { p75: 312 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.2550236008091705 },
                { start: 800, end: 1800, density: 0.5182737693863788 },
                { start: 1800, density: 0.22670262980445074 },
              ],
              percentiles: { p75: 1736 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.45661214305516956 },
                { start: 1800, end: 3000, density: 0.33213196562240016 },
                { start: 3000, density: 0.21125589132243017 },
              ],
              percentiles: { p75: 2829 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9575643075134428 },
                { start: 100, end: 300, density: 0.0353146345007993 },
                { start: 300, density: 0.007121057985757884 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.5960099750623439 },
                { start: 2500, end: 4000, density: 0.2733444167359379 },
                { start: 4000, density: 0.1306456082017183 },
              ],
              percentiles: { p75: 3125 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9436426116838489,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.022817869415807563,
                },
                { start: "0.25", density: 0.03353951890034365 },
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
        fcp: 2829,
        lcp: 3125,
        cls: "0.00",
        fid: 13,
      },
      timestamp: 1655979441970,
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
                { start: 0, end: 100, density: 0.9584869751397646 },
                { start: 100, end: 300, density: 0.029142381348875937 },
                { start: 300, density: 0.01237064351135955 },
              ],
              percentiles: { p75: 14 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8885681293302541 },
                { start: 2500, end: 4000, density: 0.08348729792147803 },
                { start: 4000, density: 0.02794457274826792 },
              ],
              percentiles: { p75: 1904 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9528747551561239,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.03375964972923147,
                },
                { start: "0.25", density: 0.013365595114644545 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5210784873757571 },
                { start: 200, end: 500, density: 0.3602193533645609 },
                { start: 500, density: 0.11870215925968192 },
              ],
              percentiles: { p75: 317 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.6397737765466297 },
                { start: 800, end: 1800, density: 0.32248384118190215 },
                { start: 1800, density: 0.03774238227146815 },
              ],
              percentiles: { p75: 969 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8583805013284046 },
                { start: 1800, end: 3000, density: 0.10719648839089749 },
                { start: 3000, density: 0.03442301028069786 },
              ],
              percentiles: { p75: 1445 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.lv/",
          normalizedUrl: "https://www.yara.lv",
        },
      },
      extractedResults: {
        fcp: 1445,
        lcp: 1904,
        cls: "0.00",
        fid: 14,
      },
      timestamp: 1655979443439,
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
                  density: 0.9335635194666031,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.03226574592213358,
                },
                { start: "0.25", density: 0.034170734611263236 },
              ],
              percentiles: { p75: "0.01" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.36405585913782557 },
                { start: 200, end: 500, density: 0.4474802671523971 },
                { start: 500, density: 0.18846387370977716 },
              ],
              percentiles: { p75: 420 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.5368696479543287 },
                { start: 800, end: 1800, density: 0.37381065651760215 },
                { start: 1800, density: 0.08931969552806916 },
              ],
              percentiles: { p75: 1137 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7290793726804744 },
                { start: 1800, end: 3000, density: 0.1804142224350533 },
                { start: 3000, density: 0.0905064048844724 },
              ],
              percentiles: { p75: 1879 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.905627918407471 },
                { start: 100, end: 300, density: 0.061071516343081826 },
                { start: 300, density: 0.03330056524944721 },
              ],
              percentiles: { p75: 19 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8176977384228786 },
                { start: 2500, end: 4000, density: 0.12163455785568979 },
                { start: 4000, density: 0.060667703721431494 },
              ],
              percentiles: { p75: 2193 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.es/",
          normalizedUrl: "https://www.yara.es",
        },
      },
      extractedResults: {
        fcp: 1879,
        lcp: 2193,
        cls: "0.01",
        fid: 19,
      },
      timestamp: 1655979444555,
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
                  density: 0.9398555630783119,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.02572782667569397,
                },
                { start: "0.25", density: 0.034416610245994135 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.4435530752238113 },
                { start: 200, end: 500, density: 0.4053017091035927 },
                { start: 500, density: 0.15114521567259603 },
              ],
              percentiles: { p75: 371 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.20282267243341684 },
                { start: 800, end: 1800, density: 0.5157068062827226 },
                { start: 1800, density: 0.2814705212838604 },
              ],
              percentiles: { p75: 1929 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.35503363356515943 },
                { start: 1800, end: 3000, density: 0.31854976627522646 },
                { start: 3000, density: 0.326416600159614 },
              ],
              percentiles: { p75: 3460 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9652306251463357 },
                { start: 100, end: 300, density: 0.027979395926012642 },
                { start: 300, density: 0.006789978927651603 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.46431818181818296 },
                { start: 2500, end: 4000, density: 0.3256818181818189 },
                { start: 4000, density: 0.20999999999999802 },
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
        fcp: 3460,
        lcp: 3751,
        cls: "0.00",
        fid: 12,
      },
      timestamp: 1655979445663,
    },
    {
      url: "https://www.yara.com.co/",
      deviceTargeted: "PHONE",
      results: {
        record: {
          key: { formFactor: "PHONE", origin: "https://www.yara.com.co" },
          metrics: {
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.43538388173581233 },
                { start: 800, end: 1800, density: 0.4124940391034805 },
                { start: 1800, density: 0.15212207916070722 },
              ],
              percentiles: { p75: 1391 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6121983431384312 },
                { start: 1800, end: 3000, density: 0.21767319005883032 },
                { start: 3000, density: 0.17012846680273852 },
              ],
              percentiles: { p75: 2411 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9445794846864367 },
                { start: 100, end: 300, density: 0.03488089450656296 },
                { start: 300, density: 0.02053962080700041 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7045099218280219 },
                { start: 2500, end: 4000, density: 0.16981358989777515 },
                { start: 4000, density: 0.12567648827420294 },
              ],
              percentiles: { p75: 2801 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9383406737293178,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.020949886918224022,
                },
                { start: "0.25", density: 0.040709439352458056 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5385077496095156 },
                { start: 200, end: 500, density: 0.3430253514357803 },
                { start: 500, density: 0.11846689895470416 },
              ],
              percentiles: { p75: 309 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.co/",
          normalizedUrl: "https://www.yara.com.co",
        },
      },
      extractedResults: {
        fcp: 2411,
        lcp: 2801,
        cls: "0.00",
        fid: 13,
      },
      timestamp: 1655979446771,
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
                  density: 0.8835767153430685,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.0635127025405081,
                },
                { start: "0.25", density: 0.05291058211642329 },
              ],
              percentiles: { p75: "0.01" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6000399960004001 },
                { start: 200, end: 500, density: 0.2946705329467054 },
                { start: 500, density: 0.10528947105289448 },
              ],
              percentiles: { p75: 281 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.45252626313156497 },
                { start: 800, end: 1800, density: 0.40880440220109976 },
                { start: 1800, density: 0.1386693346673353 },
              ],
              percentiles: { p75: 1338 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6376550620248094 },
                { start: 1800, end: 3000, density: 0.20758303321328517 },
                { start: 3000, density: 0.15476190476190557 },
              ],
              percentiles: { p75: 2292 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9531000000000001 },
                { start: 100, end: 300, density: 0.0297 },
                { start: 300, density: 0.017199999999999924 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7158715871587154 },
                { start: 2500, end: 4000, density: 0.1609160916091608 },
                { start: 4000, density: 0.12321232123212383 },
              ],
              percentiles: { p75: 2755 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.co/",
          normalizedUrl: "https://www.yara.com.co",
        },
      },
      extractedResults: {
        fcp: 2292,
        lcp: 2755,
        cls: "0.01",
        fid: 12,
      },
      timestamp: 1655979447986,
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
                { start: 0, end: 100, density: 0.9406716417910449 },
                { start: 100, end: 300, density: 0.03190298507462686 },
                { start: 300, density: 0.027425373134328183 },
              ],
              percentiles: { p75: 14 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.9171193107323469 },
                { start: 2500, end: 4000, density: 0.05890616220265965 },
                { start: 4000, density: 0.02397452706499348 },
              ],
              percentiles: { p75: 1810 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.946886446886447,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.037179487179487186,
                },
                { start: "0.25", density: 0.015934065934065936 },
              ],
              percentiles: { p75: "0.01" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.44898724681170327 },
                { start: 200, end: 500, density: 0.40060015003750976 },
                { start: 500, density: 0.150412603150787 },
              ],
              percentiles: { p75: 362 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.63340198464707 },
                { start: 800, end: 1800, density: 0.3261561505336079 },
                { start: 1800, density: 0.04044186481932221 },
              ],
              percentiles: { p75: 964 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8618959107806692 },
                { start: 1800, end: 3000, density: 0.1046468401486989 },
                { start: 3000, density: 0.03345724907063197 },
              ],
              percentiles: { p75: 1488 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.nl/",
          normalizedUrl: "https://www.yara.nl",
        },
      },
      extractedResults: {
        fcp: 1488,
        lcp: 1810,
        cls: "0.01",
        fid: 14,
      },
      timestamp: 1655979448777,
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
                  density: 0.9263157894736843,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.0533106960950764,
                },
                { start: "0.25", density: 0.020373514431239394 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.4283142389525372 },
                { start: 200, end: 500, density: 0.42847790507364997 },
                { start: 500, density: 0.1432078559738129 },
              ],
              percentiles: { p75: 345 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.6812339331619538 },
                { start: 800, end: 1800, density: 0.29734361610968285 },
                { start: 1800, density: 0.021422450728363327 },
              ],
              percentiles: { p75: 909 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8706792777300086 },
                { start: 1800, end: 3000, density: 0.10283748925193463 },
                { start: 3000, density: 0.026483233018056777 },
              ],
              percentiles: { p75: 1477 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9269513008672449 },
                { start: 100, end: 300, density: 0.04286190793862576 },
                { start: 300, density: 0.0301867911941294 },
              ],
              percentiles: { p75: 16 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.9018132056106741 },
                { start: 2500, end: 4000, density: 0.06431748203900102 },
                { start: 4000, density: 0.033869312350324775 },
              ],
              percentiles: { p75: 1872 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.be/",
          normalizedUrl: "https://www.yara.be",
        },
      },
      extractedResults: {
        fcp: 1477,
        lcp: 1872,
        cls: "0.00",
        fid: 16,
      },
      timestamp: 1655979449858,
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
                  density: 0.9496949694969496,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.0295029502950295,
                },
                { start: "0.25", density: 0.020802080208020803 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5174034806961395 },
                { start: 200, end: 500, density: 0.357971594318864 },
                { start: 500, density: 0.12462492498499661 },
              ],
              percentiles: { p75: 330 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.76992300769923 },
                { start: 800, end: 1800, density: 0.1904809519048095 },
                { start: 1800, density: 0.039596040395960326 },
              ],
              percentiles: { p75: 776 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8549000000000003 },
                { start: 1800, end: 3000, density: 0.09980000000000003 },
                { start: 3000, density: 0.045299999999999674 },
              ],
              percentiles: { p75: 1452 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9428885777155431 },
                { start: 100, end: 300, density: 0.031706341268253654 },
                { start: 300, density: 0.0254050810162032 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8853385338533855 },
                { start: 2500, end: 4000, density: 0.08005800580058005 },
                { start: 4000, density: 0.034603460346034544 },
              ],
              percentiles: { p75: 1806 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.it/",
          normalizedUrl: "https://www.yara.it",
        },
      },
      extractedResults: {
        fcp: 1452,
        lcp: 1806,
        cls: "0.00",
        fid: 13,
      },
      timestamp: 1655979451080,
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
                  density: 0.9514381770638776,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.020669904121529074,
                },
                { start: "0.25", density: 0.027891918814593467 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.4543500252908437 },
                { start: 200, end: 500, density: 0.33674759736975146 },
                { start: 500, density: 0.20890237733940473 },
              ],
              percentiles: { p75: 425 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.30137158676230047 },
                { start: 800, end: 1800, density: 0.4458286145715369 },
                { start: 1800, density: 0.25279979866616276 },
              ],
              percentiles: { p75: 1884 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5154664996869125 },
                { start: 1800, end: 3000, density: 0.3411396368190354 },
                { start: 3000, density: 0.1433938634940522 },
              ],
              percentiles: { p75: 2622 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.8940996559194595 },
                { start: 100, end: 300, density: 0.05938575251688544 },
                { start: 300, density: 0.04651459156365497 },
              ],
              percentiles: { p75: 16 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6732629727352683 },
                { start: 2500, end: 4000, density: 0.25260711144616166 },
                { start: 4000, density: 0.07412991581857002 },
              ],
              percentiles: { p75: 2944 },
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
        lcp: 2944,
        cls: "0.00",
        fid: 16,
      },
      timestamp: 1655979451860,
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
                { start: 0, end: 2500, density: 0.7874392964956026 },
                { start: 2500, end: 4000, density: 0.13144769654810332 },
                { start: 4000, density: 0.08111300695629409 },
              ],
              percentiles: { p75: 2330 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9289346720563306,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.05189724866345026,
                },
                { start: "0.25", density: 0.01916807928021905 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.4194390084801047 },
                { start: 200, end: 500, density: 0.39556425309849996 },
                { start: 500, density: 0.18499673842139527 },
              ],
              percentiles: { p75: 396 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.591034211561148 },
                { start: 800, end: 1800, density: 0.2963691178398216 },
                { start: 1800, density: 0.11259667059903038 },
              ],
              percentiles: { p75: 1127 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7041474654377871 },
                { start: 1800, end: 3000, density: 0.17142857142857118 },
                { start: 3000, density: 0.12442396313364186 },
              ],
              percentiles: { p75: 2016 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9336593101625478 },
                { start: 100, end: 300, density: 0.04651777454737677 },
                { start: 300, density: 0.01982291529007538 },
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
        fcp: 2016,
        lcp: 2330,
        cls: "0.00",
        fid: 14,
      },
      timestamp: 1655979452916,
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
                  density: 0.9263157894736843,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.0533106960950764,
                },
                { start: "0.25", density: 0.020373514431239394 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.4283142389525372 },
                { start: 200, end: 500, density: 0.42847790507364997 },
                { start: 500, density: 0.1432078559738129 },
              ],
              percentiles: { p75: 345 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.6812339331619538 },
                { start: 800, end: 1800, density: 0.29734361610968285 },
                { start: 1800, density: 0.021422450728363327 },
              ],
              percentiles: { p75: 909 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8706792777300086 },
                { start: 1800, end: 3000, density: 0.10283748925193463 },
                { start: 3000, density: 0.026483233018056777 },
              ],
              percentiles: { p75: 1477 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9269513008672449 },
                { start: 100, end: 300, density: 0.04286190793862576 },
                { start: 300, density: 0.0301867911941294 },
              ],
              percentiles: { p75: 16 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.9018132056106741 },
                { start: 2500, end: 4000, density: 0.06431748203900102 },
                { start: 4000, density: 0.033869312350324775 },
              ],
              percentiles: { p75: 1872 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.be/fr-be/",
          normalizedUrl: "https://www.yara.be",
        },
      },
      extractedResults: {
        fcp: 1477,
        lcp: 1872,
        cls: "0.00",
        fid: 16,
      },
      timestamp: 1655979454025,
    },
    {
      url: "http://www.yara.com.mm/",
      deviceTargeted: "PHONE",
      results: {
        record: {
          key: { formFactor: "PHONE", origin: "http://www.yara.com.mm" },
          metrics: {
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.08170817081708155 },
                { start: 1800, end: 3000, density: 0.46644664466446567 },
                { start: 3000, density: 0.4518451845184529 },
              ],
              percentiles: { p75: 4263 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.28864999999999924 },
                { start: 2500, end: 4000, density: 0.3692499999999989 },
                { start: 4000, density: 0.3421000000000018 },
              ],
              percentiles: { p75: 4937 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8701000000000001,
                },
                { start: "0.10", end: "0.25", density: 0.0727 },
                { start: "0.25", density: 0.05719999999999994 },
              ],
              percentiles: { p75: "0.04" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.7621048419367747 },
                { start: 200, end: 500, density: 0.14585834333733494 },
                { start: 500, density: 0.09203681472589025 },
              ],
              percentiles: { p75: 192 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.37986201379861995 },
                { start: 800, end: 1800, density: 0.45355464453554617 },
                { start: 1800, density: 0.16658334166583394 },
              ],
              percentiles: { p75: 1365 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "http://www.yara.com.mm/",
          normalizedUrl: "http://www.yara.com.mm",
        },
      },
      extractedResults: { fcp: 4263, lcp: 4937, cls: "0.04" },
      timestamp: 1655979455161,
    },
    {
      url: "https://www.yara.ee/",
      deviceTargeted: "PHONE",
      results: {
        record: {
          key: { formFactor: "PHONE", origin: "https://www.yara.ee" },
          metrics: {
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6644197726671952 },
                { start: 200, end: 500, density: 0.240021147237642 },
                { start: 500, density: 0.0955590800951627 },
              ],
              percentiles: { p75: 247 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.7469928922908694 },
                { start: 800, end: 1800, density: 0.24658283214871518 },
                { start: 1800, density: 0.006424275560415527 },
              ],
              percentiles: { p75: 817 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.9260318757662442 },
                { start: 1800, end: 3000, density: 0.055714480316033245 },
                { start: 3000, density: 0.01825364391772242 },
              ],
              percentiles: { p75: 1261 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9698737956303434 },
                { start: 100, end: 300, density: 0.01859139639028362 },
                { start: 300, density: 0.011534807979373056 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.9571740316421169 },
                { start: 2500, end: 4000, density: 0.035188216039279865 },
                { start: 4000, density: 0.007637752318603403 },
              ],
              percentiles: { p75: 1542 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9706159859819383,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.021835826930853213,
                },
                { start: "0.25", density: 0.007548187087208517 },
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
        fcp: 1261,
        lcp: 1542,
        cls: "0.00",
        fid: 13,
      },
      timestamp: 1655979456489,
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
                { start: "0.00", end: "0.10", density: 0.8001 },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.15650000000000006,
                },
                { start: "0.25", density: 0.04339999999999995 },
              ],
              percentiles: { p75: "0.06" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.590059005900591 },
                { start: 200, end: 500, density: 0.25422542254225455 },
                { start: 500, density: 0.15571557155715451 },
              ],
              percentiles: { p75: 317 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.49564869460838223 },
                { start: 800, end: 1800, density: 0.4030209062718813 },
                { start: 1800, density: 0.10133039911973639 },
              ],
              percentiles: { p75: 1218 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6878999999999992 },
                { start: 1800, end: 3000, density: 0.2163999999999997 },
                { start: 3000, density: 0.09570000000000103 },
              ],
              percentiles: { p75: 2010 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9155915591559157 },
                { start: 100, end: 300, density: 0.04220422042204222 },
                { start: 300, density: 0.04220422042204214 },
              ],
              percentiles: { p75: 17 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7213221322132215 },
                { start: 2500, end: 4000, density: 0.17086708670867098 },
                { start: 4000, density: 0.10781078107810751 },
              ],
              percentiles: { p75: 2641 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.co.th/",
          normalizedUrl: "https://www.yara.co.th",
        },
      },
      extractedResults: {
        fcp: 2010,
        lcp: 2641,
        cls: "0.06",
        fid: 17,
      },
      timestamp: 1655979457635,
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
                { start: 0, end: 2500, density: 0.6937729498164003 },
                { start: 2500, end: 4000, density: 0.1822980416156667 },
                { start: 4000, density: 0.12392900856793303 },
              ],
              percentiles: { p75: 2863 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9501736373244752,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.02476219235995772,
                },
                { start: "0.25", density: 0.025064170315566958 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6302115743621656 },
                { start: 200, end: 500, density: 0.28982576228998136 },
                { start: 500, density: 0.07996266334785314 },
              ],
              percentiles: { p75: 255 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.3719784449576597 },
                { start: 800, end: 1800, density: 0.3941493456505003 },
                { start: 1800, density: 0.23387220939184003 },
              ],
              percentiles: { p75: 1733 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6084883899738573 },
                { start: 1800, end: 3000, density: 0.2071351683838225 },
                { start: 3000, density: 0.18437644164232006 },
              ],
              percentiles: { p75: 2521 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9483582549714814 },
                { start: 100, end: 300, density: 0.03638045321412054 },
                { start: 300, density: 0.01526129181439807 },
              ],
              percentiles: { p75: 13 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.au/",
          normalizedUrl: "https://www.yara.com.au",
        },
      },
      extractedResults: {
        fcp: 2521,
        lcp: 2863,
        cls: "0.00",
        fid: 13,
      },
      timestamp: 1655979458388,
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
                  density: 0.7989999999999999,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.14079999999999998,
                },
                { start: "0.25", density: 0.06020000000000001 },
              ],
              percentiles: { p75: "0.06" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.7436743674367435 },
                { start: 200, end: 500, density: 0.1948194819481948 },
                { start: 500, density: 0.061506150615061685 },
              ],
              percentiles: { p75: 202 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.4072185562887418 },
                { start: 800, end: 1800, density: 0.3885222955408914 },
                { start: 1800, density: 0.20425914817036667 },
              ],
              percentiles: { p75: 1641 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6495948784635389 },
                { start: 1800, end: 3000, density: 0.20176052815844742 },
                { start: 3000, density: 0.14864459337801367 },
              ],
              percentiles: { p75: 2325 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9646070785842832 },
                { start: 100, end: 300, density: 0.02399520095980804 },
                { start: 300, density: 0.011397720455908828 },
              ],
              percentiles: { p75: 10 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7172499999999999 },
                { start: 2500, end: 4000, density: 0.15784999999999996 },
                { start: 4000, density: 0.12490000000000008 },
              ],
              percentiles: { p75: 2729 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.au/",
          normalizedUrl: "https://www.yara.com.au",
        },
      },
      extractedResults: {
        fcp: 2325,
        lcp: 2729,
        cls: "0.06",
        fid: 10,
      },
      timestamp: 1655979460023,
    },
    {
      url: "https://www.yara.pt/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "https://www.yara.pt" },
          metrics: {
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8650095028508551 },
                { start: 2500, end: 4000, density: 0.08537561268380514 },
                { start: 4000, density: 0.04961488446533976 },
              ],
              percentiles: { p75: 1871 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9529000000000001,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.03140000000000001,
                },
                { start: "0.25", density: 0.01570000000000001 },
              ],
              percentiles: { p75: "0.01" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5825000000000004 },
                { start: 200, end: 500, density: 0.3258000000000002 },
                { start: 500, density: 0.09169999999999952 },
              ],
              percentiles: { p75: 278 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.707270727072707 },
                { start: 800, end: 1800, density: 0.23042304230423039 },
                { start: 1800, density: 0.06230623062306253 },
              ],
              percentiles: { p75: 872 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8335500650195052 },
                { start: 1800, end: 3000, density: 0.09352805841752519 },
                { start: 3000, density: 0.07292187656296965 },
              ],
              percentiles: { p75: 1459 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.963096309630963 },
                { start: 100, end: 300, density: 0.021702170217021702 },
                { start: 300, density: 0.015201520152015154 },
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
        fcp: 1459,
        lcp: 1871,
        cls: "0.01",
        fid: 11,
      },
      timestamp: 1655979460777,
    },
    {
      url: "https://www.yara.ph/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "https://www.yara.ph" },
          metrics: {
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6518696260747849 },
                { start: 200, end: 500, density: 0.29384123175364923 },
                { start: 500, density: 0.05428914217156589 },
              ],
              percentiles: { p75: 230 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.3528352835283516 },
                { start: 800, end: 1800, density: 0.4217421742174202 },
                { start: 1800, density: 0.2254225422542283 },
              ],
              percentiles: { p75: 1654 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.603381014304291 },
                { start: 1800, end: 3000, density: 0.22066619985995786 },
                { start: 3000, density: 0.1759527858357511 },
              ],
              percentiles: { p75: 2387 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6858499999999984 },
                { start: 2500, end: 4000, density: 0.18164999999999956 },
                { start: 4000, density: 0.13250000000000195 },
              ],
              percentiles: { p75: 2725 },
            },
            cumulative_layout_shift: {
              histogram: [
                { start: "0.00", end: "0.10", density: 0.8818 },
                { start: "0.10", end: "0.25", density: 0.0748 },
                { start: "0.25", density: 0.04340000000000002 },
              ],
              percentiles: { p75: "0.04" },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.ph/",
          normalizedUrl: "https://www.yara.ph",
        },
      },
      extractedResults: { fcp: 2387, lcp: 2725, cls: "0.04" },
      timestamp: 1655979461576,
    },
    {
      url: "https://www.yara.co.nz/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "https://www.yara.co.nz" },
          metrics: {
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9765976597659766 },
                { start: 100, end: 300, density: 0.018001800180018002 },
                { start: 300, density: 0.005400540054005401 },
              ],
              percentiles: { p75: 11 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7202279772022797 },
                { start: 2500, end: 4000, density: 0.20137986201379862 },
                { start: 4000, density: 0.07839216078392162 },
              ],
              percentiles: { p75: 2806 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8177182281771824,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.1184881511848815,
                },
                { start: "0.25", density: 0.06379362063793621 },
              ],
              percentiles: { p75: "0.05" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.7189281071892811 },
                { start: 200, end: 500, density: 0.2303769623037696 },
                { start: 500, density: 0.05069493050694926 },
              ],
              percentiles: { p75: 212 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.32453245324532465 },
                { start: 800, end: 1800, density: 0.4583458345834584 },
                { start: 1800, density: 0.21712171217121687 },
              ],
              percentiles: { p75: 1795 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6285000000000004 },
                { start: 1800, end: 3000, density: 0.2228000000000002 },
                { start: 3000, density: 0.14869999999999944 },
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
        lcp: 2806,
        cls: "0.05",
        fid: 11,
      },
      timestamp: 1655979462853,
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
                { start: 0, end: 1800, density: 0.8320503848845344 },
                { start: 1800, end: 3000, density: 0.11436569029291212 },
                { start: 3000, density: 0.05358392482255349 },
              ],
              percentiles: { p75: 1497 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9546045395460454 },
                { start: 100, end: 300, density: 0.021797820217978204 },
                { start: 300, density: 0.023597640235976408 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8658365836583659 },
                { start: 2500, end: 4000, density: 0.09245924592459245 },
                { start: 4000, density: 0.041704170417041685 },
              ],
              percentiles: { p75: 1905 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9278072192780722,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.05649435056494351,
                },
                { start: "0.25", density: 0.015698430156984303 },
              ],
              percentiles: { p75: "0.01" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6259877963389026 },
                { start: 200, end: 500, density: 0.28758627588276514 },
                { start: 500, density: 0.08642592777833234 },
              ],
              percentiles: { p75: 260 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.6998999999999992 },
                { start: 800, end: 1800, density: 0.23349999999999976 },
                { start: 1800, density: 0.066600000000001 },
              ],
              percentiles: { p75: 883 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.ua/",
          normalizedUrl: "https://www.yara.ua",
        },
      },
      extractedResults: {
        fcp: 1497,
        lcp: 1905,
        cls: "0.01",
        fid: 12,
      },
      timestamp: 1655979463819,
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
                  density: 0.8920361247947454,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.03680897646414887,
                },
                { start: "0.25", density: 0.07115489874110577 },
              ],
              percentiles: { p75: "0.05" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.4670021567217824 },
                { start: 200, end: 500, density: 0.3250898634076201 },
                { start: 500, density: 0.20790797987059748 },
              ],
              percentiles: { p75: 418 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.37006465813729444 },
                { start: 800, end: 1800, density: 0.45549594167010493 },
                { start: 1800, density: 0.17443940019260054 },
              ],
              percentiles: { p75: 1514 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5914496036240079 },
                { start: 1800, end: 3000, density: 0.23131370328425788 },
                { start: 3000, density: 0.17723669309173412 },
              ],
              percentiles: { p75: 2478 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.880068532267276 },
                { start: 100, end: 300, density: 0.04768703597944033 },
                { start: 300, density: 0.07224443175328374 },
              ],
              percentiles: { p75: 22 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6982878619153663 },
                { start: 2500, end: 4000, density: 0.17225779510022238 },
                { start: 4000, density: 0.1294543429844112 },
              ],
              percentiles: { p75: 2829 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.us/",
          normalizedUrl: "https://www.yara.us",
        },
      },
      extractedResults: {
        fcp: 2478,
        lcp: 2829,
        cls: "0.05",
        fid: 22,
      },
      timestamp: 1655979464573,
    },
    {
      url: "https://www.yara.kr/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "https://www.yara.kr" },
          metrics: {
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9853014698530146 },
                { start: 100, end: 300, density: 0.0146985301469853 },
                { start: 300 },
              ],
              percentiles: { p75: 8 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7988500000000001 },
                { start: 2500, end: 4000, density: 0.12585 },
                { start: 4000, density: 0.07529999999999992 },
              ],
              percentiles: { p75: 2240 },
            },
            cumulative_layout_shift: {
              histogram: [
                { start: "0.00", end: "0.10", density: 0.9448 },
                { start: "0.10", end: "0.25", density: 0.0427 },
                { start: "0.25", density: 0.012500000000000006 },
              ],
              percentiles: { p75: "0.02" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.9038096190380962 },
                { start: 200, end: 500, density: 0.07699230076992301 },
                { start: 500, density: 0.01919808019198082 },
              ],
              percentiles: { p75: 104 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.5924407559244076 },
                { start: 800, end: 1800, density: 0.30416958304169583 },
                { start: 1800, density: 0.10338966103389659 },
              ],
              percentiles: { p75: 1152 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7489497899579917 },
                { start: 1800, end: 3000, density: 0.1720344068813762 },
                { start: 3000, density: 0.07901580316063224 },
              ],
              percentiles: { p75: 1804 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.kr/",
          normalizedUrl: "https://www.yara.kr",
        },
      },
      extractedResults: { fcp: 1804, lcp: 2240, cls: "0.02", fid: 8 },
      timestamp: 1655979465736,
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
                  density: 0.8042195780421958,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.11478852114788522,
                },
                { start: "0.25", density: 0.08099190080991892 },
              ],
              percentiles: { p75: "0.07" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6013999999999994 },
                { start: 200, end: 500, density: 0.24229999999999974 },
                { start: 500, density: 0.15630000000000083 },
              ],
              percentiles: { p75: 320 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.4280571942805715 },
                { start: 800, end: 1800, density: 0.4223577642235773 },
                { start: 1800, density: 0.14958504149585114 },
              ],
              percentiles: { p75: 1401 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.64590622813156 },
                { start: 1800, end: 3000, density: 0.2032390282915123 },
                { start: 3000, density: 0.15085474357692774 },
              ],
              percentiles: { p75: 2262 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9109178164367127 },
                { start: 100, end: 300, density: 0.03549290141971605 },
                { start: 300, density: 0.053589282143571317 },
              ],
              percentiles: { p75: 15 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.716514954486346 },
                { start: 2500, end: 4000, density: 0.16514954486345906 },
                { start: 4000, density: 0.11833550065019495 },
              ],
              percentiles: { p75: 2750 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.us/",
          normalizedUrl: "https://www.yara.us",
        },
      },
      extractedResults: {
        fcp: 2262,
        lcp: 2750,
        cls: "0.07",
        fid: 15,
      },
      timestamp: 1655979466732,
    },

    {
      url: "https://www.yara.de/",
      deviceTargeted: "TABLET",
      results: {
        record: {
          key: { formFactor: "TABLET", origin: "https://www.yara.de" },
          metrics: {
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8593466424682399 },
                { start: 2500, end: 4000, density: 0.09709618874773143 },
                { start: 4000, density: 0.04355716878402877 },
              ],
              percentiles: { p75: 1980 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9539823008849557,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.033628318584070796,
                },
                { start: "0.25", density: 0.01238938053097346 },
              ],
              percentiles: { p75: "0.06" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.42198581560283716 },
                { start: 200, end: 500, density: 0.4326241134751776 },
                { start: 500, density: 0.14539007092198522 },
              ],
              percentiles: { p75: 346 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.7290448343079923 },
                { start: 800, end: 1800, density: 0.20467836257309938 },
                { start: 1800, density: 0.0662768031189084 },
              ],
              percentiles: { p75: 848 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8731884057971017 },
                { start: 1800, end: 3000, density: 0.08514492753623192 },
                { start: 3000, density: 0.04166666666666641 },
              ],
              percentiles: { p75: 1269 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9265536723163843 },
                { start: 100, end: 300, density: 0.018832391713747645 },
                { start: 300, density: 0.05461393596986804 },
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
        fcp: 1269,
        lcp: 1980,
        cls: "0.06",
        fid: 15,
      },
      timestamp: 1655979600323,
    },
    {
      url: "https://www.yara.fr/",
      deviceTargeted: "TABLET",
      results: {
        record: {
          key: { formFactor: "TABLET", origin: "https://www.yara.fr" },
          metrics: {
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9197080291970802,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.0681265206812652,
                },
                { start: "0.25", density: 0.0121654501216545 },
              ],
              percentiles: { p75: "0.04" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.36739659367396643 },
                { start: 200, end: 500, density: 0.4355231143552317 },
                { start: 500, density: 0.19708029197080182 },
              ],
              percentiles: { p75: 413 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.6992287917737791 },
                { start: 800, end: 1800, density: 0.23136246786632397 },
                { start: 1800, density: 0.06940874035989698 },
              ],
              percentiles: { p75: 933 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8019093078758951 },
                { start: 1800, end: 3000, density: 0.14797136038186162 },
                { start: 3000, density: 0.0501193317422433 },
              ],
              percentiles: { p75: 1731 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9052369077306736 },
                { start: 100, end: 300, density: 0.0548628428927681 },
                { start: 300, density: 0.039900249376558325 },
              ],
              percentiles: { p75: 18 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7706766917293235 },
                { start: 2500, end: 4000, density: 0.16666666666666666 },
                { start: 4000, density: 0.06265664160400986 },
              ],
              percentiles: { p75: 2524 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.fr/",
          normalizedUrl: "https://www.yara.fr",
        },
      },
      extractedResults: {
        fcp: 1731,
        lcp: 2524,
        cls: "0.04",
        fid: 18,
      },
      timestamp: 1655979601795,
    },
    {
      url: "https://www.yara.com/",
      deviceTargeted: "TABLET",
      results: {
        record: {
          key: { formFactor: "TABLET", origin: "https://www.yara.com" },
          metrics: {
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9326923076923076,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.05769230769230769,
                },
                { start: "0.25", density: 0.009615384615384614 },
              ],
              percentiles: { p75: "0.04" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.680672268907563 },
                { start: 200, end: 500, density: 0.22689075630252098 },
                { start: 500, density: 0.09243697478991605 },
              ],
              percentiles: { p75: 226 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.6822429906542056 },
                { start: 800, end: 1800, density: 0.21495327102803738 },
                { start: 1800, density: 0.10280373831775706 },
              ],
              percentiles: { p75: 1355 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7669902912621358 },
                { start: 1800, end: 3000, density: 0.1359223300970874 },
                { start: 3000, density: 0.09708737864077674 },
              ],
              percentiles: { p75: 2360 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9663865546218487 },
                { start: 100, end: 300, density: 0.016806722689075633 },
                { start: 300, density: 0.01680672268907565 },
              ],
              percentiles: { p75: 15 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7432432432432433 },
                { start: 2500, end: 4000, density: 0.1756756756756756 },
                { start: 4000, density: 0.08108108108108115 },
              ],
              percentiles: { p75: 3073 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com/",
          normalizedUrl: "https://www.yara.com",
        },
      },
      extractedResults: {
        fcp: 2360,
        lcp: 3073,
        cls: "0.04",
        fid: 15,
      },
      timestamp: 1655979602531,
    },
    {
      url: "https://www.yara.co.uk/",
      deviceTargeted: "TABLET",
      results: {
        record: {
          key: { formFactor: "TABLET", origin: "https://www.yara.co.uk" },
          metrics: {
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.8626609442060088 },
                { start: 100, end: 300, density: 0.09012875536480688 },
                { start: 300, density: 0.04721030042918441 },
              ],
              percentiles: { p75: 21 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.5159817351598169 },
                { start: 2500, end: 4000, density: 0.29223744292237436 },
                { start: 4000, density: 0.19178082191780874 },
              ],
              percentiles: { p75: 3614 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.928888888888889,
                },
                { start: "0.10", end: "0.25", density: 0.04 },
                { start: "0.25", density: 0.03111111111111113 },
              ],
              percentiles: { p75: "0.05" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.4181818181818189 },
                { start: 200, end: 500, density: 0.3090909090909096 },
                { start: 500, density: 0.27272727272727143 },
              ],
              percentiles: { p75: 516 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.3571428571428571 },
                { start: 800, end: 1800, density: 0.3839285714285714 },
                { start: 1800, density: 0.25892857142857156 },
              ],
              percentiles: { p75: 1893 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.45662100456620935 },
                { start: 1800, end: 3000, density: 0.35159817351598127 },
                { start: 3000, density: 0.19178082191780937 },
              ],
              percentiles: { p75: 2642 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.co.uk/",
          normalizedUrl: "https://www.yara.co.uk",
        },
      },
      extractedResults: {
        fcp: 2642,
        lcp: 3614,
        cls: "0.05",
        fid: 21,
      },
      timestamp: 1655979603156,
    },
    {
      url: "https://www.yara.fi/",
      deviceTargeted: "TABLET",
      results: {
        record: {
          key: { formFactor: "TABLET", origin: "https://www.yara.fi" },
          metrics: {
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.6845238095238095 },
                { start: 800, end: 1800, density: 0.2817460317460318 },
                { start: 1800, density: 0.03373015873015879 },
              ],
              percentiles: { p75: 906 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8661417322834646 },
                { start: 1800, end: 3000, density: 0.10039370078740155 },
                { start: 3000, density: 0.03346456692913397 },
              ],
              percentiles: { p75: 1439 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9325842696629214 },
                { start: 100, end: 300, density: 0.04119850187265918 },
                { start: 300, density: 0.02621722846441944 },
              ],
              percentiles: { p75: 15 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8284600389863548 },
                { start: 2500, end: 4000, density: 0.13060428849902533 },
                { start: 4000, density: 0.0409356725146199 },
              ],
              percentiles: { p75: 2098 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9278752436647174,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.05263157894736842,
                },
                { start: "0.25", density: 0.01949317738791424 },
              ],
              percentiles: { p75: "0.02" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.2452471482889731 },
                { start: 200, end: 500, density: 0.5209125475285165 },
                { start: 500, density: 0.23384030418251048 },
              ],
              percentiles: { p75: 472 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.fi/",
          normalizedUrl: "https://www.yara.fi",
        },
      },
      extractedResults: {
        fcp: 1439,
        lcp: 2098,
        cls: "0.02",
        fid: 15,
      },
      timestamp: 1655979603796,
    },
    {
      url: "https://www.yara.gr/",
      deviceTargeted: "TABLET",
      results: {
        record: {
          key: { formFactor: "TABLET", origin: "https://www.yara.gr" },
          metrics: {
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9440000000000002 },
                { start: 100, end: 300, density: 0.02800000000000001 },
                { start: 300, density: 0.027999999999999792 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8096539162112929 },
                { start: 2500, end: 4000, density: 0.12112932604735878 },
                { start: 4000, density: 0.06921675774134838 },
              ],
              percentiles: { p75: 2185 },
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
                  density: 0.0707635009310987,
                },
                { start: "0.25", density: 0.022346368715083796 },
              ],
              percentiles: { p75: "0.01" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.4119922630560921 },
                { start: 200, end: 500, density: 0.41779497098645973 },
                { start: 500, density: 0.17021276595744816 },
              ],
              percentiles: { p75: 363 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.716566866267465 },
                { start: 800, end: 1800, density: 0.25748502994011974 },
                { start: 1800, density: 0.02594810379241523 },
              ],
              percentiles: { p75: 881 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8011257035647279 },
                { start: 1800, end: 3000, density: 0.15572232645403372 },
                { start: 3000, density: 0.0431519699812384 },
              ],
              percentiles: { p75: 1582 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.gr/",
          normalizedUrl: "https://www.yara.gr",
        },
      },
      extractedResults: {
        fcp: 1582,
        lcp: 2185,
        cls: "0.01",
        fid: 12,
      },
      timestamp: 1655979604416,
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
                  density: 0.7676889640183531,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.19343153827577883,
                },
                { start: "0.25", density: 0.03887949770586818 },
              ],
              percentiles: { p75: "0.09" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.9495412844036697 },
                { start: 200, end: 500, density: 0.027522935779816522 },
                { start: 500, density: 0.022935779816513752 },
              ],
              percentiles: { p75: 64 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.7575403320084176 },
                { start: 800, end: 1800, density: 0.19429506663549223 },
                { start: 1800, density: 0.048164601356090186 },
              ],
              percentiles: { p75: 783 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8706654170571696 },
                { start: 1800, end: 3000, density: 0.08645735707591376 },
                { start: 3000, density: 0.042877225866916675 },
              ],
              percentiles: { p75: 1213 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9915984489444206 },
                { start: 100, end: 300, density: 0.0032313657906074974 },
                { start: 300, density: 0.005170185264971976 },
              ],
              percentiles: { p75: 3 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8425271098538426 },
                { start: 2500, end: 4000, density: 0.09358793022159358 },
                { start: 4000, density: 0.06388495992456383 },
              ],
              percentiles: { p75: 1893 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com/",
          normalizedUrl: "https://www.yara.com",
        },
      },
      extractedResults: { fcp: 1213, lcp: 1893, cls: "0.09", fid: 3 },
      timestamp: 1655979605096,
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
                  density: 0.6018000486499636,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.2957917781561665,
                },
                { start: "0.25", density: 0.10240817319387005 },
              ],
              percentiles: { p75: "0.13" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.9277077437612552 },
                { start: 200, end: 500, density: 0.02958579881656804 },
                { start: 500, density: 0.042706457422176665 },
              ],
              percentiles: { p75: 81 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.7995684488132343 },
                { start: 800, end: 1800, density: 0.1647087029489331 },
                { start: 1800, density: 0.03572284823783258 },
              ],
              percentiles: { p75: 741 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.9200477326968973 },
                { start: 1800, end: 3000, density: 0.04797136038186158 },
                { start: 3000, density: 0.03198090692124112 },
              ],
              percentiles: { p75: 1078 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9925056207844117 },
                { start: 100, end: 300, density: 0.007494379215588308 },
                { start: 300 },
              ],
              percentiles: { p75: 2 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8991576413959086 },
                { start: 2500, end: 4000, density: 0.06425992779783393 },
                { start: 4000, density: 0.036582430806257595 },
              ],
              percentiles: { p75: 1726 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.be/",
          normalizedUrl: "https://www.yara.be",
        },
      },
      extractedResults: { fcp: 1078, lcp: 1726, cls: "0.13", fid: 2 },
      timestamp: 1655979605697,
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
                  density: 0.6018000486499636,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.2957917781561665,
                },
                { start: "0.25", density: 0.10240817319387005 },
              ],
              percentiles: { p75: "0.13" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.9277077437612552 },
                { start: 200, end: 500, density: 0.02958579881656804 },
                { start: 500, density: 0.042706457422176665 },
              ],
              percentiles: { p75: 81 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.7995684488132343 },
                { start: 800, end: 1800, density: 0.1647087029489331 },
                { start: 1800, density: 0.03572284823783258 },
              ],
              percentiles: { p75: 741 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.9200477326968973 },
                { start: 1800, end: 3000, density: 0.04797136038186158 },
                { start: 3000, density: 0.03198090692124112 },
              ],
              percentiles: { p75: 1078 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9925056207844117 },
                { start: 100, end: 300, density: 0.007494379215588308 },
                { start: 300 },
              ],
              percentiles: { p75: 2 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8991576413959086 },
                { start: 2500, end: 4000, density: 0.06425992779783393 },
                { start: 4000, density: 0.036582430806257595 },
              ],
              percentiles: { p75: 1726 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.be/fr-be/",
          normalizedUrl: "https://www.yara.be",
        },
      },
      extractedResults: { fcp: 1078, lcp: 1726, cls: "0.13", fid: 2 },
      timestamp: 1655979606349,
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
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8466435185185185,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.12789351851851852,
                },
                { start: "0.25", density: 0.02546296296296296 },
              ],
              percentiles: { p75: "0.06" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.9319402985074631 },
                { start: 200, end: 500, density: 0.02746268656716419 },
                { start: 500, density: 0.04059701492537277 },
              ],
              percentiles: { p75: 77 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.9461663947797717 },
                { start: 800, end: 1800, density: 0.04730831973898859 },
                { start: 1800, density: 0.006525285481239803 },
              ],
              percentiles: { p75: 506 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.9504405286343612 },
                { start: 1800, end: 3000, density: 0.023678414096916293 },
                { start: 3000, density: 0.025881057268722432 },
              ],
              percentiles: { p75: 862 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9924242424242424 },
                { start: 100, end: 300, density: 0.00487012987012987 },
                { start: 300, density: 0.002705627705627704 },
              ],
              percentiles: { p75: 2 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.9258639910813824 },
                { start: 2500, end: 4000, density: 0.049052396878483825 },
                { start: 4000, density: 0.025083612040133763 },
              ],
              percentiles: { p75: 1397 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yaraagri.cz/",
          normalizedUrl: "https://www.yaraagri.cz",
        },
      },
      extractedResults: { fcp: 862, lcp: 1397, cls: "0.06", fid: 2 },
      timestamp: 1655979607231,
    },
    {
      url: "https://www.yara.dk/",
      deviceTargeted: "DESKTOP",
      results: {
        record: {
          key: { formFactor: "DESKTOP", origin: "https://www.yara.dk" },
          metrics: {
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9966887417218543 },
                { start: 100, end: 300, density: 0.003311258278145695 },
                { start: 300 },
              ],
              percentiles: { p75: 3 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.9321786690975387 },
                { start: 2500, end: 4000, density: 0.05268915223336372 },
                { start: 4000, density: 0.015132178669097553 },
              ],
              percentiles: { p75: 1534 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.7233370494240059,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.24767744332961725,
                },
                { start: "0.25", density: 0.028985507246376815 },
              ],
              percentiles: { p75: "0.11" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.976007866273353 },
                { start: 200, end: 500, density: 0.020845624385447386 },
                { start: 500, density: 0.00314650934119961 },
              ],
              percentiles: { p75: 78 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.7931218816821098 },
                { start: 800, end: 1800, density: 0.1794369208838204 },
                { start: 1800, density: 0.027441197434069867 },
              ],
              percentiles: { p75: 744 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.9347079037800686 },
                { start: 1800, end: 3000, density: 0.04756737203834328 },
                { start: 3000, density: 0.017724724181588002 },
              ],
              percentiles: { p75: 1066 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.dk/",
          normalizedUrl: "https://www.yara.dk",
        },
      },
      extractedResults: { fcp: 1066, lcp: 1534, cls: "0.11", fid: 3 },
      timestamp: 1655979607778,
    },
    {
      url: "https://www.yara.de/",
      deviceTargeted: "DESKTOP",
      results: {
        record: {
          key: { formFactor: "DESKTOP", origin: "https://www.yara.de" },
          metrics: {
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.42143906020558003,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.3803230543318649,
                },
                { start: "0.25", density: 0.19823788546255505 },
              ],
              percentiles: { p75: "0.23" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.9464899361806579 },
                { start: 200, end: 500, density: 0.03583701521845851 },
                { start: 500, density: 0.01767304860088359 },
              ],
              percentiles: { p75: 75 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.80564553447478 },
                { start: 800, end: 1800, density: 0.16751503933364179 },
                { start: 1800, density: 0.02683942619157799 },
              ],
              percentiles: { p75: 708 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.9287749287749288 },
                { start: 1800, end: 3000, density: 0.047958214624881305 },
                { start: 3000, density: 0.023266856600189897 },
              ],
              percentiles: { p75: 1036 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9951148021494871 },
                { start: 100, end: 300, density: 0.0029311187103077683 },
                { start: 300, density: 0.0019540791402051804 },
              ],
              percentiles: { p75: 2 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.9210651450309084 },
                { start: 2500, end: 4000, density: 0.053257251545411326 },
                { start: 4000, density: 0.025677603423680286 },
              ],
              percentiles: { p75: 1521 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.de/",
          normalizedUrl: "https://www.yara.de",
        },
      },
      extractedResults: { fcp: 1036, lcp: 1521, cls: "0.23", fid: 2 },
      timestamp: 1655979609429,
    },
    {
      url: "https://www.yara.ee/",
      deviceTargeted: "DESKTOP",
      results: {
        record: {
          key: { formFactor: "DESKTOP", origin: "https://www.yara.ee" },
          metrics: {
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9935385784872672 },
                { start: 100, end: 300, density: 0.006461421512732801 },
                { start: 300 },
              ],
              percentiles: { p75: 2 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.9487996999249814 },
                { start: 2500, end: 4000, density: 0.04669917479369841 },
                { start: 4000, density: 0.004501125281320328 },
              ],
              percentiles: { p75: 1454 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9007751937984496,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.08643410852713179,
                },
                { start: "0.25", density: 0.0127906976744186 },
              ],
              percentiles: { p75: "0.07" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.9585045193097781 },
                { start: 200, end: 500, density: 0.028759244042728015 },
                { start: 500, density: 0.012736236647493833 },
              ],
              percentiles: { p75: 61 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.8565573770491803 },
                { start: 800, end: 1800, density: 0.13822652757078982 },
                { start: 1800, density: 0.005216095380029804 },
              ],
              percentiles: { p75: 673 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.96467493423525 },
                { start: 1800, end: 3000, density: 0.030439684329199544 },
                { start: 3000, density: 0.004885381435550544 },
              ],
              percentiles: { p75: 1029 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.ee/",
          normalizedUrl: "https://www.yara.ee",
        },
      },
      extractedResults: { fcp: 1029, lcp: 1454, cls: "0.07", fid: 2 },
      timestamp: 1655979610187,
    },
    {
      url: "https://www.yara.es/",
      deviceTargeted: "DESKTOP",
      results: {
        record: {
          key: { formFactor: "DESKTOP", origin: "https://www.yara.es" },
          metrics: {
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8489620615604868 },
                { start: 1800, end: 3000, density: 0.09448818897637797 },
                { start: 3000, density: 0.05654974946313523 },
              ],
              percentiles: { p75: 1354 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9876466954910439 },
                { start: 100, end: 300, density: 0.005558987029030266 },
                { start: 300, density: 0.006794317479925883 },
              ],
              percentiles: { p75: 2 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8464566929133858 },
                { start: 2500, end: 4000, density: 0.09627773801002153 },
                { start: 4000, density: 0.05726556907659264 },
              ],
              percentiles: { p75: 1996 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.5637435519528372,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.30213706705969046,
                },
                { start: "0.25", density: 0.1341193809874724 },
              ],
              percentiles: { p75: "0.16" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.9059829059829063 },
                { start: 200, end: 500, density: 0.059829059829059866 },
                { start: 500, density: 0.03418803418803396 },
              ],
              percentiles: { p75: 95 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.721976401179941 },
                { start: 800, end: 1800, density: 0.22566371681415925 },
                { start: 1800, density: 0.052359882005899756 },
              ],
              percentiles: { p75: 864 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.es/",
          normalizedUrl: "https://www.yara.es",
        },
      },
      extractedResults: { fcp: 1354, lcp: 1996, cls: "0.16", fid: 2 },
      timestamp: 1655979611056,
    },
    {
      url: "https://www.yara.fr/",
      deviceTargeted: "DESKTOP",
      results: {
        record: {
          key: { formFactor: "DESKTOP", origin: "https://www.yara.fr" },
          metrics: {
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8160543532964267 },
                { start: 2500, end: 4000, density: 0.11298439859084049 },
                { start: 4000, density: 0.07096124811273279 },
              ],
              percentiles: { p75: 2161 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.44085461177696705,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.39082855653986437,
                },
                { start: "0.25", density: 0.16831683168316858 },
              ],
              percentiles: { p75: "0.18" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.8832987551867217 },
                { start: 200, end: 500, density: 0.061721991701244795 },
                { start: 500, density: 0.0549792531120335 },
              ],
              percentiles: { p75: 98 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.7376387487386481 },
                { start: 800, end: 1800, density: 0.21442986881937443 },
                { start: 1800, density: 0.04793138244197748 },
              ],
              percentiles: { p75: 854 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8373493975903618 },
                { start: 1800, end: 3000, density: 0.10291164658634541 },
                { start: 3000, density: 0.05973895582329291 },
              ],
              percentiles: { p75: 1484 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9698914116485687 },
                { start: 100, end: 300, density: 0.018262586377097732 },
                { start: 300, density: 0.011846001974333636 },
              ],
              percentiles: { p75: 2 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.fr/",
          normalizedUrl: "https://www.yara.fr",
        },
      },
      extractedResults: { fcp: 1484, lcp: 2161, cls: "0.18", fid: 2 },
      timestamp: 1655979611949,
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
                  density: 0.8770949720670391,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.08566108007448789,
                },
                { start: "0.25", density: 0.03724394785847301 },
              ],
              percentiles: { p75: "0.06" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.9757085020242915 },
                { start: 200, end: 500, density: 0.008097165991902834 },
                { start: 500, density: 0.01619433198380568 },
              ],
              percentiles: { p75: 91 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.849906191369606 },
                { start: 800, end: 1800, density: 0.13883677298311445 },
                { start: 1800, density: 0.01125703564727955 },
              ],
              percentiles: { p75: 653 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.919172932330827 },
                { start: 1800, end: 3000, density: 0.0582706766917293 },
                { start: 3000, density: 0.022556390977443618 },
              ],
              percentiles: { p75: 1068 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9948275862068966 },
                { start: 100, end: 300, density: 0.005172413793103448 },
                { start: 300 },
              ],
              percentiles: { p75: 2 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.9301470588235294 },
                { start: 2500, end: 4000, density: 0.0625 },
                { start: 4000, density: 0.007352941176470587 },
              ],
              percentiles: { p75: 1467 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.hr/",
          normalizedUrl: "https://www.yara.hr",
        },
      },
      extractedResults: { fcp: 1068, lcp: 1467, cls: "0.06", fid: 2 },
      timestamp: 1655979612787,
    },
    {
      url: "https://www.yara.ie/",
      deviceTargeted: "DESKTOP",
      results: {
        record: {
          key: { formFactor: "DESKTOP", origin: "https://www.yara.ie" },
          metrics: {
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.47635993899339085,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.3182511438739196,
                },
                { start: "0.25", density: 0.20538891713268945 },
              ],
              percentiles: { p75: "0.20" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.9096558317399618 },
                { start: 200, end: 500, density: 0.07887189292543019 },
                { start: 500, density: 0.011472275334608033 },
              ],
              percentiles: { p75: 100 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.4655004859086491 },
                { start: 800, end: 1800, density: 0.3323615160349855 },
                { start: 1800, density: 0.2021379980563655 },
              ],
              percentiles: { p75: 1547 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7076923076923078 },
                { start: 1800, end: 3000, density: 0.19404466501240694 },
                { start: 3000, density: 0.09826302729528509 },
              ],
              percentiles: { p75: 1951 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9934974454249884 },
                { start: 100, end: 300, density: 0.006502554575011612 },
                { start: 300 },
              ],
              percentiles: { p75: 5 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.742053789731051 },
                { start: 2500, end: 4000, density: 0.14400977995110023 },
                { start: 4000, density: 0.11393643031784874 },
              ],
              percentiles: { p75: 2577 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.ie/",
          normalizedUrl: "https://www.yara.ie",
        },
      },
      extractedResults: { fcp: 1951, lcp: 2577, cls: "0.20", fid: 5 },
      timestamp: 1655979613617,
    },
    {
      url: "https://www.yara.it/",
      deviceTargeted: "DESKTOP",
      results: {
        record: {
          key: { formFactor: "DESKTOP", origin: "https://www.yara.it" },
          metrics: {
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9538590604026846,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.031040268456375843,
                },
                { start: "0.25", density: 0.015100671140939598 },
              ],
              percentiles: { p75: "0.03" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.9594594594594595 },
                { start: 200, end: 500, density: 0.02364864864864865 },
                { start: 500, density: 0.016891891891891803 },
              ],
              percentiles: { p75: 70 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.8757346767422334 },
                { start: 800, end: 1800, density: 0.1007556675062972 },
                { start: 1800, density: 0.023509655751469412 },
              ],
              percentiles: { p75: 605 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.9240297274979357 },
                { start: 1800, end: 3000, density: 0.05202312138728323 },
                { start: 3000, density: 0.02394715111478113 },
              ],
              percentiles: { p75: 1037 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9946727549467276 },
                { start: 100, end: 300, density: 0.002283105022831051 },
                { start: 300, density: 0.003044140030441404 },
              ],
              percentiles: { p75: 2 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.9051302931596091 },
                { start: 2500, end: 4000, density: 0.06799674267100976 },
                { start: 4000, density: 0.026872964169381168 },
              ],
              percentiles: { p75: 1571 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.it/",
          normalizedUrl: "https://www.yara.it",
        },
      },
      extractedResults: { fcp: 1037, lcp: 1571, cls: "0.03", fid: 2 },
      timestamp: 1655979614823,
    },
    {
      url: "https://www.yara.lv/",
      deviceTargeted: "DESKTOP",
      results: {
        record: {
          key: { formFactor: "DESKTOP", origin: "https://www.yara.lv" },
          metrics: {
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.9462710505212509 },
                { start: 200, end: 500, density: 0.028869286287089017 },
                { start: 500, density: 0.02485966319165996 },
              ],
              percentiles: { p75: 100 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.6771535580524344 },
                { start: 800, end: 1800, density: 0.30786516853932594 },
                { start: 1800, density: 0.014981273408239704 },
              ],
              percentiles: { p75: 880 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.910846953937593 },
                { start: 1800, end: 3000, density: 0.0765230312035661 },
                { start: 3000, density: 0.012630014858841007 },
              ],
              percentiles: { p75: 1239 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.996221662468514 },
                { start: 100, end: 300, density: 0.0037783375314861464 },
                { start: 300 },
              ],
              percentiles: { p75: 2 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8878990348923533 },
                { start: 2500, end: 4000, density: 0.09057164068299924 },
                { start: 4000, density: 0.021529324424647372 },
              ],
              percentiles: { p75: 1832 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9644208932626799,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.029523088569265707,
                },
                { start: "0.25", density: 0.006056018168054504 },
              ],
              percentiles: { p75: "0.04" },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.lv/",
          normalizedUrl: "https://www.yara.lv",
        },
      },
      extractedResults: { fcp: 1239, lcp: 1832, cls: "0.04", fid: 2 },
      timestamp: 1655979615949,
    },
    {
      url: "https://www.yara.lt/",
      deviceTargeted: "DESKTOP",
      results: {
        record: {
          key: { formFactor: "DESKTOP", origin: "https://www.yara.lt" },
          metrics: {
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.9734996102883866 },
                { start: 200, end: 500, density: 0.019485580670303974 },
                { start: 500, density: 0.007014809041309427 },
              ],
              percentiles: { p75: 67 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.8310055865921787 },
                { start: 800, end: 1800, density: 0.15432960893854744 },
                { start: 1800, density: 0.01466480446927374 },
              ],
              percentiles: { p75: 689 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.9368029739776951 },
                { start: 1800, end: 3000, density: 0.04832713754646839 },
                { start: 3000, density: 0.014869888475836472 },
              ],
              percentiles: { p75: 1045 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9946091644204851 },
                { start: 100, end: 300, density: 0.002695417789757412 },
                { start: 300, density: 0.002695417789757412 },
              ],
              percentiles: { p75: 2 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.9068369646882044 },
                { start: 2500, end: 4000, density: 0.072877535687453 },
                { start: 4000, density: 0.02028549962434265 },
              ],
              percentiles: { p75: 1730 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.7467282525019246,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.21862971516551194,
                },
                { start: "0.25", density: 0.03464203233256351 },
              ],
              percentiles: { p75: "0.10" },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.lt/",
          normalizedUrl: "https://www.yara.lt",
        },
      },
      extractedResults: { fcp: 1045, lcp: 1730, cls: "0.10", fid: 2 },
      timestamp: 1655979617571,
    },
    {
      url: "https://www.yara.hu/",
      deviceTargeted: "DESKTOP",
      results: {
        record: {
          key: { formFactor: "DESKTOP", origin: "https://www.yara.hu" },
          metrics: {
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.9190581309786606 },
                { start: 1800, end: 3000, density: 0.061074319352465024 },
                { start: 3000, density: 0.01986754966887438 },
              ],
              percentiles: { p75: 1170 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9955849889624724 },
                { start: 100, end: 300 },
                { start: 300, density: 0.004415011037527596 },
              ],
              percentiles: { p75: 2 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8663952627683197 },
                { start: 2500, end: 4000, density: 0.09881569207994084 },
                { start: 4000, density: 0.03478904515173955 },
              ],
              percentiles: { p75: 1897 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8391238670694865,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.12235649546827794,
                },
                { start: "0.25", density: 0.038519637462235676 },
              ],
              percentiles: { p75: "0.07" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.9608150470219438 },
                { start: 200, end: 500, density: 0.022727272727272735 },
                { start: 500, density: 0.016457680250783657 },
              ],
              percentiles: { p75: 71 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.7395833333333334 },
                { start: 800, end: 1800, density: 0.24032738095238093 },
                { start: 1800, density: 0.020089285714285667 },
              ],
              percentiles: { p75: 817 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.hu/",
          normalizedUrl: "https://www.yara.hu",
        },
      },
      extractedResults: { fcp: 1170, lcp: 1897, cls: "0.07", fid: 2 },
      timestamp: 1655979619071,
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
                  density: 0.6217380895379461,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.30141249700742156,
                },
                { start: "0.25", density: 0.0768494134546325 },
              ],
              percentiles: { p75: "0.13" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.944119710077157 },
                { start: 200, end: 500, density: 0.03834463408931495 },
                { start: 500, density: 0.017535655833528077 },
              ],
              percentiles: { p75: 84 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.8225581395348838 },
                { start: 800, end: 1800, density: 0.14558139534883724 },
                { start: 1800, density: 0.031860465116279005 },
              ],
              percentiles: { p75: 692 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.9344454887218046 },
                { start: 1800, end: 3000, density: 0.036889097744360895 },
                { start: 3000, density: 0.028665413533834536 },
              ],
              percentiles: { p75: 1054 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9906388953896559 },
                { start: 100, end: 300, density: 0.005616662766206412 },
                { start: 300, density: 0.0037444418441376116 },
              ],
              percentiles: { p75: 3 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8986486486486487 },
                { start: 2500, end: 4000, density: 0.058014911463187324 },
                { start: 4000, density: 0.0433364398881641 },
              ],
              percentiles: { p75: 1683 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.nl/",
          normalizedUrl: "https://www.yara.nl",
        },
      },
      extractedResults: { fcp: 1054, lcp: 1683, cls: "0.13", fid: 3 },
      timestamp: 1655979620381,
    },
    {
      url: "https://www.yara.no/",
      deviceTargeted: "DESKTOP",
      results: {
        record: {
          key: { formFactor: "DESKTOP", origin: "https://www.yara.no" },
          metrics: {
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.8564064801178204 },
                { start: 800, end: 1800, density: 0.12076583210603829 },
                { start: 1800, density: 0.022827687776141393 },
              ],
              percentiles: { p75: 623 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.9433406916850626 },
                { start: 1800, end: 3000, density: 0.034216335540838846 },
                { start: 3000, density: 0.022442972774098537 },
              ],
              percentiles: { p75: 957 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9962380300957592 },
                { start: 100, end: 300, density: 0.0013679890560875513 },
                { start: 300, density: 0.0023939808481532147 },
              ],
              percentiles: { p75: 2 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.939932634730539 },
                { start: 2500, end: 4000, density: 0.036115269461077855 },
                { start: 4000, density: 0.023952095808383173 },
              ],
              percentiles: { p75: 1457 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.6748278500382555,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.25057383320581483,
                },
                { start: "0.25", density: 0.07459831675592962 },
              ],
              percentiles: { p75: "0.11" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.9701907790143085 },
                { start: 200, end: 500, density: 0.019077901430842606 },
                { start: 500, density: 0.010731319554848986 },
              ],
              percentiles: { p75: 67 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.no/",
          normalizedUrl: "https://www.yara.no",
        },
      },
      extractedResults: { fcp: 957, lcp: 1457, cls: "0.11", fid: 2 },
      timestamp: 1655979621902,
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
                  density: 0.4778578784757981,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.42018537590113286,
                },
                { start: "0.25", density: 0.10195674562306903 },
              ],
              percentiles: { p75: "0.17" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.9558541266794627 },
                { start: 200, end: 500, density: 0.02783109404990403 },
                { start: 500, density: 0.016314779270633382 },
              ],
              percentiles: { p75: 76 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.7885228480340063 },
                { start: 800, end: 1800, density: 0.18916046758767271 },
                { start: 1800, density: 0.022316684378320947 },
              ],
              percentiles: { p75: 726 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.9023162134944613 },
                { start: 1800, end: 3000, density: 0.06646525679758307 },
                { start: 3000, density: 0.031218529707955675 },
              ],
              percentiles: { p75: 1196 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9927927927927929 },
                { start: 100, end: 300, density: 0.005405405405405406 },
                { start: 300, density: 0.0018018018018018018 },
              ],
              percentiles: { p75: 2 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8864321608040201 },
                { start: 2500, end: 4000, density: 0.08241206030150754 },
                { start: 4000, density: 0.03115577889447235 },
              ],
              percentiles: { p75: 1680 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.pl/",
          normalizedUrl: "https://www.yara.pl",
        },
      },
      extractedResults: { fcp: 1196, lcp: 1680, cls: "0.17", fid: 2 },
      timestamp: 1655979623235,
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
                  density: 0.8250930356193514,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.1345029239766082,
                },
                { start: "0.25", density: 0.04040404040404036 },
              ],
              percentiles: { p75: "0.07" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.9088901159580345 },
                { start: 200, end: 500, density: 0.04859193815571506 },
                { start: 500, density: 0.0425179458862505 },
              ],
              percentiles: { p75: 81 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.8114583333333333 },
                { start: 800, end: 1800, density: 0.16145833333333331 },
                { start: 1800, density: 0.02708333333333334 },
              ],
              percentiles: { p75: 723 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.9010989010989009 },
                { start: 1800, end: 3000, density: 0.05913134484563055 },
                { start: 3000, density: 0.039769754055468634 },
              ],
              percentiles: { p75: 1110 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9828303850156087 },
                { start: 100, end: 300, density: 0.004162330905306973 },
                { start: 300, density: 0.013007284079084283 },
              ],
              percentiles: { p75: 2 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8478829064296918 },
                { start: 2500, end: 4000, density: 0.10245687401986406 },
                { start: 4000, density: 0.04966021955044423 },
              ],
              percentiles: { p75: 1920 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.pt/",
          normalizedUrl: "https://www.yara.pt",
        },
      },
      extractedResults: { fcp: 1110, lcp: 1920, cls: "0.07", fid: 2 },
      timestamp: 1655979624802,
    },
    {
      url: "https://www.yara.ro/",
      deviceTargeted: "DESKTOP",
      results: {
        record: {
          key: { formFactor: "DESKTOP", origin: "https://www.yara.ro" },
          metrics: {
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.6775067750677506 },
                { start: 800, end: 1800, density: 0.28997289972899737 },
                { start: 1800, density: 0.03252032520325206 },
              ],
              percentiles: { p75: 886 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.9098712446351931 },
                { start: 1800, end: 3000, density: 0.07124463519313302 },
                { start: 3000, density: 0.018884120171673874 },
              ],
              percentiles: { p75: 1200 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9973867595818815 },
                { start: 100, end: 300 },
                { start: 300, density: 0.0026132404181184654 },
              ],
              percentiles: { p75: 2 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8658954584404456 },
                { start: 2500, end: 4000, density: 0.11182519280205654 },
                { start: 4000, density: 0.022279348757497906 },
              ],
              percentiles: { p75: 1971 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.7730434782608695,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.16869565217391308,
                },
                { start: "0.25", density: 0.05826086956521741 },
              ],
              percentiles: { p75: "0.08" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.971401334604385 },
                { start: 200, end: 500, density: 0.020972354623450904 },
                { start: 500, density: 0.007626310772163979 },
              ],
              percentiles: { p75: 64 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.ro/",
          normalizedUrl: "https://www.yara.ro",
        },
      },
      extractedResults: { fcp: 1200, lcp: 1971, cls: "0.08", fid: 2 },
      timestamp: 1655979626068,
    },
    {
      url: "https://www.yara.fi/",
      deviceTargeted: "DESKTOP",
      results: {
        record: {
          key: { formFactor: "DESKTOP", origin: "https://www.yara.fi" },
          metrics: {
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.7555555555555555 },
                { start: 800, end: 1800, density: 0.21792114695340503 },
                { start: 1800, density: 0.026523297491039318 },
              ],
              percentiles: { p75: 794 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.9274647887323945 },
                { start: 1800, end: 3000, density: 0.05633802816901409 },
                { start: 3000, density: 0.01619718309859153 },
              ],
              percentiles: { p75: 1094 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9977678571428572 },
                { start: 100, end: 300, density: 0.0022321428571428575 },
                { start: 300 },
              ],
              percentiles: { p75: 2 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.9129353233830845 },
                { start: 2500, end: 4000, density: 0.07142857142857141 },
                { start: 4000, density: 0.015636105188344077 },
              ],
              percentiles: { p75: 1561 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.6035634743875279,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.30215293244246477,
                },
                { start: "0.25", density: 0.09428359317000738 },
              ],
              percentiles: { p75: "0.13" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.9494614747307375 },
                { start: 200, end: 500, density: 0.03893951946975973 },
                { start: 500, density: 0.011599005799502805 },
              ],
              percentiles: { p75: 82 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.fi/",
          normalizedUrl: "https://www.yara.fi",
        },
      },
      extractedResults: { fcp: 1094, lcp: 1561, cls: "0.13", fid: 2 },
      timestamp: 1655979627276,
    },
    {
      url: "https://www.yara.it/",
      deviceTargeted: "TABLET",
      results: {
        record: {
          key: { formFactor: "TABLET", origin: "https://www.yara.it" },
          metrics: {
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8421052631578946 },
                { start: 1800, end: 3000, density: 0.10047846889952154 },
                { start: 3000, density: 0.05741626794258388 },
              ],
              percentiles: { p75: 1553 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9336492890995262 },
                { start: 100, end: 300, density: 0.042654028436018954 },
                { start: 300, density: 0.023696682464454992 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8179723502304146 },
                { start: 2500, end: 4000, density: 0.12672811059907835 },
                { start: 4000, density: 0.055299539170507096 },
              ],
              percentiles: { p75: 2215 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9801980198019803,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.014851485148514853,
                },
                { start: "0.25", density: 0.0049504950495049506 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.27149321266968346 },
                { start: 200, end: 500, density: 0.5701357466063354 },
                { start: 500, density: 0.15837104072398117 },
              ],
              percentiles: { p75: 414 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.7889447236180904 },
                { start: 800, end: 1800, density: 0.19095477386934678 },
                { start: 1800, density: 0.020100502512562818 },
              ],
              percentiles: { p75: 733 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.it/",
          normalizedUrl: "https://www.yara.it",
        },
      },
      extractedResults: {
        fcp: 1553,
        lcp: 2215,
        cls: "0.00",
        fid: 13,
      },
      timestamp: 1655979628959,
    },
    {
      url: "https://www.yara.se/",
      deviceTargeted: "DESKTOP",
      results: {
        record: {
          key: { formFactor: "DESKTOP", origin: "https://www.yara.se" },
          metrics: {
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.9620198532585239 },
                { start: 1800, end: 3000, density: 0.030643072939145442 },
                { start: 3000, density: 0.007337073802330617 },
              ],
              percentiles: { p75: 981 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9949727691663176 },
                { start: 100, end: 300, density: 0.005027230833682447 },
                { start: 300 },
              ],
              percentiles: { p75: 2 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.9407582938388626 },
                { start: 2500, end: 4000, density: 0.04459284791038343 },
                { start: 4000, density: 0.014648858250753979 },
              ],
              percentiles: { p75: 1447 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.638107987505578,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.2753235162873717,
                },
                { start: "0.25", density: 0.08656849620705044 },
              ],
              percentiles: { p75: "0.12" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.9746001881467545 },
                { start: 200, end: 500, density: 0.016933207902163686 },
                { start: 500, density: 0.008466603951081855 },
              ],
              percentiles: { p75: 66 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.8250313938886563 },
                { start: 800, end: 1800, density: 0.162411050648807 },
                { start: 1800, density: 0.012557555462536627 },
              ],
              percentiles: { p75: 674 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.se/",
          normalizedUrl: "https://www.yara.se",
        },
      },
      extractedResults: { fcp: 981, lcp: 1447, cls: "0.12", fid: 2 },
      timestamp: 1655979630424,
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
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.925642807505212 },
                { start: 200, end: 500, density: 0.04551772063933286 },
                { start: 500, density: 0.028839471855455122 },
              ],
              percentiles: { p75: 93 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.359094176851186 },
                { start: 800, end: 1800, density: 0.4104960460100645 },
                { start: 1800, density: 0.23040977713874947 },
              ],
              percentiles: { p75: 1736 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6339985744832501 },
                { start: 1800, end: 3000, density: 0.23307198859586606 },
                { start: 3000, density: 0.13292943692088385 },
              ],
              percentiles: { p75: 2245 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9864911673016972 },
                { start: 100, end: 300, density: 0.009005888465535157 },
                { start: 300, density: 0.004502944232767583 },
              ],
              percentiles: { p75: 3 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6736357193479791 },
                { start: 2500, end: 4000, density: 0.19808646350106285 },
                { start: 4000, density: 0.1282778171509581 },
              ],
              percentiles: { p75: 2906 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.44869888475836434,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.3200743494423792,
                },
                { start: "0.25", density: 0.2312267657992565 },
              ],
              percentiles: { p75: "0.22" },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.co.uk/",
          normalizedUrl: "https://www.yara.co.uk",
        },
      },
      extractedResults: { fcp: 2245, lcp: 2906, cls: "0.22", fid: 3 },
      timestamp: 1655979631601,
    },
    {
      url: "https://www.yara.gr/",
      deviceTargeted: "DESKTOP",
      results: {
        record: {
          key: { formFactor: "DESKTOP", origin: "https://www.yara.gr" },
          metrics: {
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.9310344827586208 },
                { start: 200, end: 500, density: 0.04493207941483804 },
                { start: 500, density: 0.024033437826541226 },
              ],
              percentiles: { p75: 82 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.7074569789674952 },
                { start: 800, end: 1800, density: 0.2629063097514341 },
                { start: 1800, density: 0.029636711281070777 },
              ],
              percentiles: { p75: 866 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8610301263362489 },
                { start: 1800, end: 3000, density: 0.10495626822157433 },
                { start: 3000, density: 0.03401360544217679 },
              ],
              percentiles: { p75: 1414 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9954379562043795 },
                { start: 100, end: 300, density: 0.002737226277372263 },
                { start: 300, density: 0.0018248175182481751 },
              ],
              percentiles: { p75: 2 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.813829787234043 },
                { start: 2500, end: 4000, density: 0.13588007736943913 },
                { start: 4000, density: 0.05029013539651792 },
              ],
              percentiles: { p75: 2174 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9324191968658179,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.031341821743388835,
                },
                { start: "0.25", density: 0.036238981390793346 },
              ],
              percentiles: { p75: "0.04" },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.gr/",
          normalizedUrl: "https://www.yara.gr",
        },
      },
      extractedResults: { fcp: 1414, lcp: 2174, cls: "0.04", fid: 2 },
      timestamp: 1655979633256,
    },
    {
      url: "https://www.yara.ru/",
      deviceTargeted: "DESKTOP",
      results: {
        record: {
          key: { formFactor: "DESKTOP", origin: "https://www.yara.ru" },
          metrics: {
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.7947019867549668,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.17880794701986755,
                },
                { start: "0.25", density: 0.026490066225165556 },
              ],
              percentiles: { p75: "0.09" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.9709302325581396 },
                { start: 200, end: 500, density: 0.015116279069767436 },
                { start: 500, density: 0.013953488372092994 },
              ],
              percentiles: { p75: 64 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.6468468468468469 },
                { start: 800, end: 1800, density: 0.2768768768768769 },
                { start: 1800, density: 0.07627627627627628 },
              ],
              percentiles: { p75: 1016 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8039099526066347 },
                { start: 1800, end: 3000, density: 0.11196682464454974 },
                { start: 3000, density: 0.08412322274881559 },
              ],
              percentiles: { p75: 1522 },
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
                { start: 0, end: 2500, density: 0.8320677570093455 },
                { start: 2500, end: 4000, density: 0.10776869158878503 },
                { start: 4000, density: 0.06016355140186936 },
              ],
              percentiles: { p75: 1905 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.ru/",
          normalizedUrl: "https://www.yara.ru",
        },
      },
      extractedResults: { fcp: 1522, lcp: 1905, cls: "0.09", fid: 2 },
      timestamp: 1655979634587,
    },
    {
      url: "https://www.yara.ua/",
      deviceTargeted: "DESKTOP",
      results: {
        record: {
          key: { formFactor: "DESKTOP", origin: "https://www.yara.ua" },
          metrics: {
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8633567662565901 },
                { start: 2500, end: 4000, density: 0.0927065026362038 },
                { start: 4000, density: 0.04393673110720596 },
              ],
              percentiles: { p75: 1849 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.6369426751592356,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.34576888080072793,
                },
                { start: "0.25", density: 0.017288444040036408 },
              ],
              percentiles: { p75: "0.12" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.9433032046014791 },
                { start: 200, end: 500, density: 0.035332785538208705 },
                { start: 500, density: 0.02136400986031226 },
              ],
              percentiles: { p75: 75 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.8250218722659667 },
                { start: 800, end: 1800, density: 0.14435695538057747 },
                { start: 1800, density: 0.03062117235345577 },
              ],
              percentiles: { p75: 707 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8888888888888888 },
                { start: 1800, end: 3000, density: 0.0714285714285714 },
                { start: 3000, density: 0.039682539682539784 },
              ],
              percentiles: { p75: 1262 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9915708812260536 },
                { start: 100, end: 300, density: 0.004597701149425288 },
                { start: 300, density: 0.0038314176245210756 },
              ],
              percentiles: { p75: 2 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.ua/",
          normalizedUrl: "https://www.yara.ua",
        },
      },
      extractedResults: { fcp: 1262, lcp: 1849, cls: "0.12", fid: 2 },
      timestamp: 1655979635974,
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
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9875040051265621 },
                { start: 100, end: 300, density: 0.009932713873758414 },
                { start: 300, density: 0.0025632809996795907 },
              ],
              percentiles: { p75: 3 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7825618945102266 },
                { start: 2500, end: 4000, density: 0.10692500897021892 },
                { start: 4000, density: 0.11051309651955457 },
              ],
              percentiles: { p75: 2361 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8186490455212921,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.11563876651982379,
                },
                { start: "0.25", density: 0.06571218795888399 },
              ],
              percentiles: { p75: "0.07" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.8752449379490527 },
                { start: 200, end: 500, density: 0.09405617243631612 },
                { start: 500, density: 0.030698889614631075 },
              ],
              percentiles: { p75: 101 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.48510638297872344 },
                { start: 800, end: 1800, density: 0.4131528046421664 },
                { start: 1800, density: 0.10174081237911016 },
              ],
              percentiles: { p75: 1277 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7378988884904986 },
                { start: 1800, end: 3000, density: 0.17353890283255652 },
                { start: 3000, density: 0.08856220867694493 },
              ],
              percentiles: { p75: 1891 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.ar/",
          normalizedUrl: "https://www.yara.com.ar",
        },
      },
      extractedResults: { fcp: 1891, lcp: 2361, cls: "0.07", fid: 3 },
      timestamp: 1655979637180,
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
                { start: 0, end: 2500, density: 0.41151919866444064 },
                { start: 2500, end: 4000, density: 0.23038397328881463 },
                { start: 4000, density: 0.3580968280467447 },
              ],
              percentiles: { p75: 4900 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.7155399473222125,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.2783143107989465,
                },
                { start: "0.25", density: 0.006145741878841087 },
              ],
              percentiles: { p75: "0.11" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.8521677327647476 },
                { start: 200, end: 500, density: 0.08813077469793884 },
                { start: 500, density: 0.05970149253731351 },
              ],
              percentiles: { p75: 114 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.19291014014839236 },
                { start: 800, end: 1800, density: 0.5482275350370981 },
                { start: 1800, density: 0.25886232481450955 },
              ],
              percentiles: { p75: 1840 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.40032546786004886 },
                { start: 1800, end: 3000, density: 0.3303498779495526 },
                { start: 3000, density: 0.26932465419039847 },
              ],
              percentiles: { p75: 3224 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9938313913639479 },
                { start: 100, end: 300, density: 0.00616860863605209 },
                { start: 300 },
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
      extractedResults: { fcp: 3224, lcp: 4900, cls: "0.11", fid: 2 },
      timestamp: 1655979638531,
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
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.7513711151736746,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.1992687385740402,
                },
                { start: "0.25", density: 0.04936014625228516 },
              ],
              percentiles: { p75: "0.10" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.8488372093023253 },
                { start: 200, end: 500, density: 0.07984496124031003 },
                { start: 500, density: 0.07131782945736473 },
              ],
              percentiles: { p75: 121 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.6144688644688643 },
                { start: 800, end: 1800, density: 0.3150183150183149 },
                { start: 1800, density: 0.07051282051282078 },
              ],
              percentiles: { p75: 1049 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7379067722075635 },
                { start: 1800, end: 3000, density: 0.1565523306948109 },
                { start: 3000, density: 0.10554089709762551 },
              ],
              percentiles: { p75: 1875 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9741800418702024 },
                { start: 100, end: 300, density: 0.016748080949057918 },
                { start: 300, density: 0.009071877180739686 },
              ],
              percentiles: { p75: 3 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7258620689655173 },
                { start: 2500, end: 4000, density: 0.14482758620689665 },
                { start: 4000, density: 0.1293103448275861 },
              ],
              percentiles: { p75: 2680 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yarabrasil.com.br/",
          normalizedUrl: "https://www.yarabrasil.com.br",
        },
      },
      extractedResults: { fcp: 1875, lcp: 2680, cls: "0.10", fid: 3 },
      timestamp: 1655979640055,
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
                  density: 0.6072780203784571,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.29752547307132465,
                },
                { start: "0.25", density: 0.09519650655021838 },
              ],
              percentiles: { p75: "0.12" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.9324076499869008 },
                { start: 200, end: 500, density: 0.04139376473670422 },
                { start: 500, density: 0.026198585276394966 },
              ],
              percentiles: { p75: 94 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.6029534689328503 },
                { start: 800, end: 1800, density: 0.3332404569517972 },
                { start: 1800, density: 0.0638060741153525 },
              ],
              percentiles: { p75: 1108 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7739920499716069 },
                { start: 1800, end: 3000, density: 0.15956842703009652 },
                { start: 3000, density: 0.0664395229982966 },
              ],
              percentiles: { p75: 1866 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9928134149587436 },
                { start: 100, end: 300, density: 0.00479105669417088 },
                { start: 300, density: 0.0023955283470854377 },
              ],
              percentiles: { p75: 3 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.720476858345021 },
                { start: 2500, end: 4000, density: 0.18555399719495094 },
                { start: 4000, density: 0.09396914446002817 },
              ],
              percentiles: { p75: 2774 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yaracanada.ca/",
          normalizedUrl: "https://www.yaracanada.ca",
        },
      },
      extractedResults: { fcp: 1866, lcp: 2774, cls: "0.12", fid: 3 },
      timestamp: 1655979641483,
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
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9928134149587436 },
                { start: 100, end: 300, density: 0.00479105669417088 },
                { start: 300, density: 0.0023955283470854377 },
              ],
              percentiles: { p75: 3 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.720476858345021 },
                { start: 2500, end: 4000, density: 0.18555399719495094 },
                { start: 4000, density: 0.09396914446002817 },
              ],
              percentiles: { p75: 2774 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.6072780203784571,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.29752547307132465,
                },
                { start: "0.25", density: 0.09519650655021838 },
              ],
              percentiles: { p75: "0.12" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.9324076499869008 },
                { start: 200, end: 500, density: 0.04139376473670422 },
                { start: 500, density: 0.026198585276394966 },
              ],
              percentiles: { p75: 94 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.6029534689328503 },
                { start: 800, end: 1800, density: 0.3332404569517972 },
                { start: 1800, density: 0.0638060741153525 },
              ],
              percentiles: { p75: 1108 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7739920499716069 },
                { start: 1800, end: 3000, density: 0.15956842703009652 },
                { start: 3000, density: 0.0664395229982966 },
              ],
              percentiles: { p75: 1866 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yaracanada.ca/fr-ca/",
          normalizedUrl: "https://www.yaracanada.ca",
        },
      },
      extractedResults: { fcp: 1866, lcp: 2774, cls: "0.12", fid: 3 },
      timestamp: 1655979642586,
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
                  density: 0.622898318654924,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.21417133706965572,
                },
                { start: "0.25", density: 0.16293034427542036 },
              ],
              percentiles: { p75: "0.16" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.9128055454213787 },
                { start: 200, end: 500, density: 0.03611820503465889 },
                { start: 500, density: 0.05107624954396238 },
              ],
              percentiles: { p75: 85 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.3211045364891519 },
                { start: 800, end: 1800, density: 0.5297830374753452 },
                { start: 1800, density: 0.14911242603550304 },
              ],
              percentiles: { p75: 1631 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5904907975460121 },
                { start: 1800, end: 3000, density: 0.29677914110429443 },
                { start: 3000, density: 0.11273006134969342 },
              ],
              percentiles: { p75: 2355 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9951304347826087 },
                { start: 100, end: 300, density: 0.0024347826086956524 },
                { start: 300, density: 0.0024347826086956515 },
              ],
              percentiles: { p75: 3 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6060664605873262 },
                { start: 2500, end: 4000, density: 0.20614374034003088 },
                { start: 4000, density: 0.18778979907264298 },
              ],
              percentiles: { p75: 3451 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.cl/",
          normalizedUrl: "https://www.yara.cl",
        },
      },
      extractedResults: { fcp: 2355, lcp: 3451, cls: "0.16", fid: 3 },
      timestamp: 1655979643774,
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
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9915492957746479 },
                { start: 100, end: 300, density: 0.005070422535211268 },
                { start: 300, density: 0.003380281690140848 },
              ],
              percentiles: { p75: 2 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7714285714285708 },
                { start: 2500, end: 4000, density: 0.11726190476190469 },
                { start: 4000, density: 0.11130952380952454 },
              ],
              percentiles: { p75: 2447 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.5951188986232792,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.2878598247809762,
                },
                { start: "0.25", density: 0.11702127659574464 },
              ],
              percentiles: { p75: "0.14" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.9058402860548275 },
                { start: 200, end: 500, density: 0.054231227651966654 },
                { start: 500, density: 0.03992848629320584 },
              ],
              percentiles: { p75: 91 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.5422360248447204 },
                { start: 800, end: 1800, density: 0.38944099378881986 },
                { start: 1800, density: 0.06832298136645977 },
              ],
              percentiles: { p75: 1117 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.764988009592326 },
                { start: 1800, end: 3000, density: 0.15767386091127097 },
                { start: 3000, density: 0.07733812949640298 },
              ],
              percentiles: { p75: 1797 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.co/",
          normalizedUrl: "https://www.yara.com.co",
        },
      },
      extractedResults: { fcp: 1797, lcp: 2447, cls: "0.14", fid: 2 },
      timestamp: 1655979644960,
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
                  density: 0.7720953326713009,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.13108242303872888,
                },
                { start: "0.25", density: 0.09682224428997023 },
              ],
              percentiles: { p75: "0.09" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.9465449804432855 },
                { start: 200, end: 500, density: 0.03911342894393742 },
                { start: 500, density: 0.014341590612777058 },
              ],
              percentiles: { p75: 65 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.6196377502383223 },
                { start: 800, end: 1800, density: 0.33889418493803625 },
                { start: 1800, density: 0.04146806482364144 },
              ],
              percentiles: { p75: 1020 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8053949903660886 },
                { start: 1800, end: 3000, density: 0.13342967244701348 },
                { start: 3000, density: 0.06117533718689794 },
              ],
              percentiles: { p75: 1595 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.990632318501171 },
                { start: 100, end: 300, density: 0.004683840749414519 },
                { start: 300, density: 0.004683840749414519 },
              ],
              percentiles: { p75: 2 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7821002386634847 },
                { start: 2500, end: 4000, density: 0.12291169451073983 },
                { start: 4000, density: 0.0949880668257754 },
              ],
              percentiles: { p75: 2316 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.cr/",
          normalizedUrl: "https://www.yara.cr",
        },
      },
      extractedResults: { fcp: 1595, lcp: 2316, cls: "0.09", fid: 2 },
      timestamp: 1655979646185,
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
                  density: 0.8032220943613348,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.14039125431530497,
                },
                { start: "0.25", density: 0.056386651323360154 },
              ],
              percentiles: { p75: "0.07" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.9246284501061571 },
                { start: 200, end: 500, density: 0.04529370134465676 },
                { start: 500, density: 0.030077848549186024 },
              ],
              percentiles: { p75: 90 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.4783275795934023 },
                { start: 800, end: 1800, density: 0.4614499424626006 },
                { start: 1800, density: 0.060222477943997 },
              ],
              percentiles: { p75: 1227 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6818862275449104 },
                { start: 1800, end: 3000, density: 0.21407185628742526 },
                { start: 3000, density: 0.10404191616766448 },
              ],
              percentiles: { p75: 2079 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9922271037512673 },
                { start: 100, end: 300, density: 0.004731328151402502 },
                { start: 300, density: 0.003041568097330179 },
              ],
              percentiles: { p75: 2 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6848928974069907 },
                { start: 2500, end: 4000, density: 0.15501691093573863 },
                { start: 4000, density: 0.16009019165727068 },
              ],
              percentiles: { p75: 3031 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.ec/",
          normalizedUrl: "https://www.yara.com.ec",
        },
      },
      extractedResults: { fcp: 2079, lcp: 3031, cls: "0.07", fid: 2 },
      timestamp: 1655979647438,
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
                  density: 0.6272727272727272,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.2748251748251748,
                },
                { start: "0.25", density: 0.09790209790209792 },
              ],
              percentiles: { p75: "0.14" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.8578712555768004 },
                { start: 200, end: 500, density: 0.08731676226896112 },
                { start: 500, density: 0.05481198215423842 },
              ],
              percentiles: { p75: 125 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.5295698924731185 },
                { start: 800, end: 1800, density: 0.3938172043010754 },
                { start: 1800, density: 0.07661290322580602 },
              ],
              percentiles: { p75: 1165 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7257636122177956 },
                { start: 1800, end: 3000, density: 0.1759628154050465 },
                { start: 3000, density: 0.09827357237715788 },
              ],
              percentiles: { p75: 2018 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9794685990338166 },
                { start: 100, end: 300, density: 0.01026570048309179 },
                { start: 300, density: 0.010265700483091724 },
              ],
              percentiles: { p75: 3 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7062374245472821 },
                { start: 2500, end: 4000, density: 0.15761234071093191 },
                { start: 4000, density: 0.13615023474178597 },
              ],
              percentiles: { p75: 2988 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.mx/",
          normalizedUrl: "https://www.yara.com.mx",
        },
      },
      extractedResults: { fcp: 2018, lcp: 2988, cls: "0.14", fid: 3 },
      timestamp: 1655979648873,
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
                { start: 0, end: 1800, density: 0.8158303155716496 },
                { start: 1800, end: 3000, density: 0.10812209001551985 },
                { start: 3000, density: 0.07604759441283046 },
              ],
              percentiles: { p75: 1554 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9884337349397591 },
                { start: 100, end: 300, density: 0.002891566265060241 },
                { start: 300, density: 0.008674698795180723 },
              ],
              percentiles: { p75: 2 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7655502392344493 },
                { start: 2500, end: 4000, density: 0.11695906432748535 },
                { start: 4000, density: 0.11749069643806535 },
              ],
              percentiles: { p75: 2398 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.812972972972973,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.13837837837837838,
                },
                { start: "0.25", density: 0.04864864864864862 },
              ],
              percentiles: { p75: "0.07" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.9221810481736369 },
                { start: 200, end: 500, density: 0.046056114346214934 },
                { start: 500, density: 0.03176283748014816 },
              ],
              percentiles: { p75: 70 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.6454545454545451 },
                { start: 800, end: 1800, density: 0.2893048128342245 },
                { start: 1800, density: 0.06524064171123038 },
              ],
              percentiles: { p75: 966 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.gt/",
          normalizedUrl: "https://www.yara.com.gt",
        },
      },
      extractedResults: { fcp: 1554, lcp: 2398, cls: "0.07", fid: 2 },
      timestamp: 1655979650063,
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
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.9256582343830666 },
                { start: 200, end: 500, density: 0.05627258647392875 },
                { start: 500, density: 0.01806917914300463 },
              ],
              percentiles: { p75: 81 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.5277502477700694 },
                { start: 800, end: 1800, density: 0.40882061446977197 },
                { start: 1800, density: 0.0634291377601586 },
              ],
              percentiles: { p75: 1103 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7574187470560528 },
                { start: 1800, end: 3000, density: 0.19170984455958542 },
                { start: 3000, density: 0.05087140838436171 },
              ],
              percentiles: { p75: 1857 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 1 },
                { start: 100, end: 300 },
                { start: 300 },
              ],
              percentiles: { p75: 3 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.716981132075472 },
                { start: 2500, end: 4000, density: 0.1165094339622642 },
                { start: 4000, density: 0.16650943396226378 },
              ],
              percentiles: { p75: 2968 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8490196078431372,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.12892156862745097,
                },
                { start: "0.25", density: 0.02205882352941176 },
              ],
              percentiles: { p75: "0.06" },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.pa/",
          normalizedUrl: "https://www.yara.com.pa",
        },
      },
      extractedResults: { fcp: 1857, lcp: 2968, cls: "0.06", fid: 3 },
      timestamp: 1655979651381,
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
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.9146039603960398 },
                { start: 200, end: 500, density: 0.04744224422442245 },
                { start: 500, density: 0.037953795379537754 },
              ],
              percentiles: { p75: 88 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.3422562141491396 },
                { start: 800, end: 1800, density: 0.49569789674952197 },
                { start: 1800, density: 0.16204588910133844 },
              ],
              percentiles: { p75: 1615 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6110083256244223 },
                { start: 1800, end: 3000, density: 0.26133209990749323 },
                { start: 3000, density: 0.12765957446808437 },
              ],
              percentiles: { p75: 2372 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9936628643852979 },
                { start: 100, end: 300, density: 0.0025348542458808617 },
                { start: 300, density: 0.0038022813688212967 },
              ],
              percentiles: { p75: 2 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6204176334106718 },
                { start: 2500, end: 4000, density: 0.19350348027842207 },
                { start: 4000, density: 0.18607888631090608 },
              ],
              percentiles: { p75: 3563 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8184882041405873,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.14395763119884453,
                },
                { start: "0.25", density: 0.03755416466056813 },
              ],
              percentiles: { p75: "0.07" },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.pe/",
          normalizedUrl: "https://www.yara.com.pe",
        },
      },
      extractedResults: { fcp: 2372, lcp: 3563, cls: "0.07", fid: 2 },
      timestamp: 1655979652719,
    },
    {
      url: "https://www.yara.us/",
      deviceTargeted: "DESKTOP",
      results: {
        record: {
          key: { formFactor: "DESKTOP", origin: "https://www.yara.us" },
          metrics: {
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.9286206896551724 },
                { start: 200, end: 500, density: 0.038620689655172416 },
                { start: 500, density: 0.032758620689655175 },
              ],
              percentiles: { p75: 87 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.6134723336006418 },
                { start: 800, end: 1800, density: 0.3151563753007218 },
                { start: 1800, density: 0.07137129109863641 },
              ],
              percentiles: { p75: 1060 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8030859662013232 },
                { start: 1800, end: 3000, density: 0.1190301249081558 },
                { start: 3000, density: 0.07788390889052106 },
              ],
              percentiles: { p75: 1584 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9820059980006665 },
                { start: 100, end: 300, density: 0.007330889703432191 },
                { start: 300, density: 0.010663112295901323 },
              ],
              percentiles: { p75: 3 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7853583748562675 },
                { start: 2500, end: 4000, density: 0.1337677270985053 },
                { start: 4000, density: 0.08087389804522739 },
              ],
              percentiles: { p75: 2423 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.5435918039373243,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.34351145038167946,
                },
                { start: "0.25", density: 0.11289674568099628 },
              ],
              percentiles: { p75: "0.16" },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.us/",
          normalizedUrl: "https://www.yara.us",
        },
      },
      extractedResults: { fcp: 1584, lcp: 2423, cls: "0.16", fid: 3 },
      timestamp: 1655979653982,
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
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.994311717861206 },
                { start: 100, end: 300, density: 0.001422070534698521 },
                { start: 300, density: 0.004266211604095567 },
              ],
              percentiles: { p75: 2 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7615606936416178 },
                { start: 2500, end: 4000, density: 0.11242774566473977 },
                { start: 4000, density: 0.12601156069364233 },
              ],
              percentiles: { p75: 2483 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.5022209061297009,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.3683742967130589,
                },
                { start: "0.25", density: 0.12940479715724007 },
              ],
              percentiles: { p75: "0.22" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.9484304932735427 },
                { start: 200, end: 500, density: 0.022982062780269062 },
                { start: 500, density: 0.028587443946188253 },
              ],
              percentiles: { p75: 61 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.47234891676168794 },
                { start: 800, end: 1800, density: 0.377423033067275 },
                { start: 1800, density: 0.15022805017103705 },
              ],
              percentiles: { p75: 1443 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7259450171821308 },
                { start: 1800, end: 3000, density: 0.19215349369988546 },
                { start: 3000, density: 0.0819014891179838 },
              ],
              percentiles: { p75: 1988 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.au/",
          normalizedUrl: "https://www.yara.com.au",
        },
      },
      extractedResults: { fcp: 1988, lcp: 2483, cls: "0.22", fid: 2 },
      timestamp: 1655979655343,
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
                { start: 0, end: 100, density: 0.9857988165680474 },
                { start: 100, end: 300, density: 0.004733727810650888 },
                { start: 300, density: 0.009467455621301782 },
              ],
              percentiles: { p75: 3 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8073065902578792 },
                { start: 2500, end: 4000, density: 0.09813753581661884 },
                { start: 4000, density: 0.0945558739255019 },
              ],
              percentiles: { p75: 2197 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.5575757575757576,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.30606060606060614,
                },
                { start: "0.25", density: 0.1363636363636362 },
              ],
              percentiles: { p75: "0.16" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.8828125000000003 },
                { start: 200, end: 500, density: 0.058593750000000014 },
                { start: 500, density: 0.05859374999999974 },
              ],
              percentiles: { p75: 79 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.5517241379310343 },
                { start: 800, end: 1800, density: 0.3724137931034482 },
                { start: 1800, density: 0.07586206896551746 },
              ],
              percentiles: { p75: 1171 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8240343347639484 },
                { start: 1800, end: 3000, density: 0.11587982832618025 },
                { start: 3000, density: 0.06008583690987137 },
              ],
              percentiles: { p75: 1575 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.in/",
          normalizedUrl: "https://www.yara.in",
        },
      },
      extractedResults: { fcp: 1575, lcp: 2197, cls: "0.16", fid: 3 },
      timestamp: 1655979656554,
    },
    {
      url: "https://www.yara.my/",
      deviceTargeted: "DESKTOP",
      results: {
        record: {
          key: { formFactor: "DESKTOP", origin: "https://www.yara.my" },
          metrics: {
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.5287187039764358,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.33652430044182613,
                },
                { start: "0.25", density: 0.13475699558173804 },
              ],
              percentiles: { p75: "0.16" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.9514754098360655 },
                { start: 200, end: 500, density: 0.02491803278688524 },
                { start: 500, density: 0.023606557377049177 },
              ],
              percentiles: { p75: 76 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.5352781546811398 },
                { start: 800, end: 1800, density: 0.3914518317503392 },
                { start: 1800, density: 0.07327001356852096 },
              ],
              percentiles: { p75: 1135 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.823321554770318 },
                { start: 1800, end: 3000, density: 0.103886925795053 },
                { start: 3000, density: 0.07279151943462896 },
              ],
              percentiles: { p75: 1476 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9974811083123426 },
                { start: 100, end: 300 },
                { start: 300, density: 0.0025188916876574307 },
              ],
              percentiles: { p75: 2 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8185397279885467 },
                { start: 2500, end: 4000, density: 0.09914101646385114 },
                { start: 4000, density: 0.08231925554760214 },
              ],
              percentiles: { p75: 1976 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.my/",
          normalizedUrl: "https://www.yara.my",
        },
      },
      extractedResults: { fcp: 1476, lcp: 1976, cls: "0.16", fid: 2 },
      timestamp: 1655979658226,
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
                  density: 0.587138863000932,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.29108418763591176,
                },
                { start: "0.25", density: 0.12177694936315628 },
              ],
              percentiles: { p75: "0.14" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.9283515253288552 },
                { start: 200, end: 500, density: 0.038343129023229776 },
                { start: 500, density: 0.03330534564791491 },
              ],
              percentiles: { p75: 79 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.24393764434180132 },
                { start: 800, end: 1800, density: 0.445150115473441 },
                { start: 1800, density: 0.3109122401847576 },
              ],
              percentiles: { p75: 1984 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5812983918999405 },
                { start: 1800, end: 3000, density: 0.21768910065515182 },
                { start: 3000, density: 0.2010125074449077 },
              ],
              percentiles: { p75: 2762 },
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
                { start: 0, end: 2500, density: 0.6168141592920355 },
                { start: 2500, end: 4000, density: 0.22890855457227136 },
                { start: 4000, density: 0.1542772861356932 },
              ],
              percentiles: { p75: 3278 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.co.nz/",
          normalizedUrl: "https://www.yara.co.nz",
        },
      },
      extractedResults: { fcp: 2762, lcp: 3278, cls: "0.14", fid: 2 },
      timestamp: 1655979659626,
    },
    {
      url: "https://www.yara.es/",
      deviceTargeted: "TABLET",
      results: {
        record: {
          key: { formFactor: "TABLET", origin: "https://www.yara.es" },
          metrics: {
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.3709677419354849 },
                { start: 200, end: 500, density: 0.375000000000001 },
                { start: 500, density: 0.2540322580645142 },
              ],
              percentiles: { p75: 502 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.6244725738396624 },
                { start: 800, end: 1800, density: 0.2869198312236287 },
                { start: 1800, density: 0.08860759493670892 },
              ],
              percentiles: { p75: 1064 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7490196078431373 },
                { start: 1800, end: 3000, density: 0.14509803921568623 },
                { start: 3000, density: 0.10588235294117651 },
              ],
              percentiles: { p75: 1768 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.8553191489361706 },
                { start: 100, end: 300, density: 0.046808510638297905 },
                { start: 300, density: 0.09787234042553158 },
              ],
              percentiles: { p75: 24 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6700404858299596 },
                { start: 2500, end: 4000, density: 0.22469635627530363 },
                { start: 4000, density: 0.10526315789473689 },
              ],
              percentiles: { p75: 2860 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8739837398373983,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.1016260162601626,
                },
                { start: "0.25", density: 0.024390243902439036 },
              ],
              percentiles: { p75: "0.05" },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.es/",
          normalizedUrl: "https://www.yara.es",
        },
      },
      extractedResults: {
        fcp: 1768,
        lcp: 2860,
        cls: "0.05",
        fid: 24,
      },
      timestamp: 1655979660820,
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
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9907407407407407 },
                { start: 100, end: 300 },
                { start: 300, density: 0.009259259259259271 },
              ],
              percentiles: { p75: 2 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8307543520309476 },
                { start: 2500, end: 4000, density: 0.09284332688588005 },
                { start: 4000, density: 0.07640232108317223 },
              ],
              percentiles: { p75: 1969 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.933605720122574,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.024514811031664967,
                },
                { start: "0.25", density: 0.04187946884576099 },
              ],
              percentiles: { p75: "0.02" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.9296663660955816 },
                { start: 200, end: 500, density: 0.023444544634806132 },
                { start: 500, density: 0.04688908926961225 },
              ],
              percentiles: { p75: 68 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.6864321608040201 },
                { start: 800, end: 1800, density: 0.27638190954773867 },
                { start: 1800, density: 0.037185929648241224 },
              ],
              percentiles: { p75: 917 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8609731876861967 },
                { start: 1800, end: 3000, density: 0.10526315789473685 },
                { start: 3000, density: 0.033763654419066425 },
              ],
              percentiles: { p75: 1368 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.co.th/",
          normalizedUrl: "https://www.yara.co.th",
        },
      },
      extractedResults: { fcp: 1368, lcp: 1969, cls: "0.02", fid: 2 },
      timestamp: 1655979662217,
    },
    {
      url: "https://www.yara.kr/",
      deviceTargeted: "DESKTOP",
      results: {
        record: {
          key: { formFactor: "DESKTOP", origin: "https://www.yara.kr" },
          metrics: {
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.984179046884044 },
                { start: 200, end: 500, density: 0.009068107273779668 },
                { start: 500, density: 0.006752845842176343 },
              ],
              percentiles: { p75: 50 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.7180727961287608 },
                { start: 800, end: 1800, density: 0.2398485167262782 },
                { start: 1800, density: 0.04207868714496103 },
              ],
              percentiles: { p75: 857 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8831088082901555 },
                { start: 1800, end: 3000, density: 0.0876683937823834 },
                { start: 3000, density: 0.029222797927461127 },
              ],
              percentiles: { p75: 1309 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9972308193516859 },
                { start: 100, end: 300, density: 0.0027691806483140574 },
                { start: 300 },
              ],
              percentiles: { p75: 1 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8642201834862384 },
                { start: 2500, end: 4000, density: 0.0674821610601427 },
                { start: 4000, density: 0.06829765545361885 },
              ],
              percentiles: { p75: 1805 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9499684675215472,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.044145469833928946,
                },
                { start: "0.25", density: 0.00588606264452386 },
              ],
              percentiles: { p75: "0.03" },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.kr/",
          normalizedUrl: "https://www.yara.kr",
        },
      },
      extractedResults: { fcp: 1309, lcp: 1805, cls: "0.03", fid: 1 },
      timestamp: 1655979663725,
    },
    {
      url: "https://www.yara.se/",
      deviceTargeted: "TABLET",
      results: {
        record: {
          key: { formFactor: "TABLET", origin: "https://www.yara.se" },
          metrics: {
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8843683083511776,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.07922912205567452,
                },
                { start: "0.25", density: 0.03640256959314777 },
              ],
              percentiles: { p75: "0.04" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.4302103250478019 },
                { start: 200, end: 500, density: 0.3001912045889106 },
                { start: 500, density: 0.26959847036328755 },
              ],
              percentiles: { p75: 533 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.7049180327868853 },
                { start: 800, end: 1800, density: 0.26844262295081966 },
                { start: 1800, density: 0.026639344262295105 },
              ],
              percentiles: { p75: 876 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8749999999999999 },
                { start: 1800, end: 3000, density: 0.09957627118644065 },
                { start: 3000, density: 0.02542372881355937 },
              ],
              percentiles: { p75: 1416 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.8968871595330742 },
                { start: 100, end: 300, density: 0.0350194552529183 },
                { start: 300, density: 0.06809338521400757 },
              ],
              percentiles: { p75: 14 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8308026030368764 },
                { start: 2500, end: 4000, density: 0.13232104121475058 },
                { start: 4000, density: 0.036876355748373044 },
              ],
              percentiles: { p75: 2146 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.se/",
          normalizedUrl: "https://www.yara.se",
        },
      },
      extractedResults: {
        fcp: 1416,
        lcp: 2146,
        cls: "0.04",
        fid: 14,
      },
      timestamp: 1655979665116,
    },
    {
      url: "https://www.yara.ci/",
      deviceTargeted: "DESKTOP",
      results: {
        record: {
          key: { formFactor: "DESKTOP", origin: "https://www.yara.ci" },
          metrics: {
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6436781609195401 },
                { start: 2500, end: 4000, density: 0.16294793779580802 },
                { start: 4000, density: 0.19337390128465176 },
              ],
              percentiles: { p75: 3849 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9287272727272727,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.055999999999999994,
                },
                { start: "0.25", density: 0.015272727272727271 },
              ],
              percentiles: { p75: "0.04" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.8876254180602006 },
                { start: 200, end: 500, density: 0.04949832775919733 },
                { start: 500, density: 0.062876254180602 },
              ],
              percentiles: { p75: 136 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.4512455516014237 },
                { start: 800, end: 1800, density: 0.3971530249110323 },
                { start: 1800, density: 0.15160142348754396 },
              ],
              percentiles: { p75: 1444 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6181208053691275 },
                { start: 1800, end: 3000, density: 0.19328859060402687 },
                { start: 3000, density: 0.1885906040268458 },
              ],
              percentiles: { p75: 2804 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 1 },
                { start: 100, end: 300 },
                { start: 300 },
              ],
              percentiles: { p75: 3 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.ci/",
          normalizedUrl: "https://www.yara.ci",
        },
      },
      extractedResults: { fcp: 2804, lcp: 3849, cls: "0.04", fid: 3 },
      timestamp: 1655979666438,
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
                { start: 0, end: 2500, density: 0.4901477832512311 },
                { start: 2500, end: 4000, density: 0.31280788177339874 },
                { start: 4000, density: 0.19704433497537022 },
              ],
              percentiles: { p75: 3769 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8472906403940886,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.11822660098522168,
                },
                { start: "0.25", density: 0.03448275862068967 },
              ],
              percentiles: { p75: "0.08" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.46496815286624255 },
                { start: 200, end: 500, density: 0.3248407643312106 },
                { start: 500, density: 0.21019108280254686 },
              ],
              percentiles: { p75: 440 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.26382978723404255 },
                { start: 800, end: 1800, density: 0.5531914893617021 },
                { start: 1800, density: 0.1829787234042553 },
              ],
              percentiles: { p75: 1613 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.44811320754716977 },
                { start: 1800, end: 3000, density: 0.35849056603773577 },
                { start: 3000, density: 0.19339622641509452 },
              ],
              percentiles: { p75: 2831 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.us/",
          normalizedUrl: "https://www.yara.us",
        },
      },
      extractedResults: { fcp: 2831, lcp: 3769, cls: "0.08" },
      timestamp: 1655979667711,
    },
    {
      url: "https://www.yara.com.gh/",
      deviceTargeted: "DESKTOP",
      results: {
        record: {
          key: {
            formFactor: "DESKTOP",
            origin: "https://www.yara.com.gh",
          },
          metrics: {
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8029147982062781 },
                { start: 2500, end: 4000, density: 0.08363228699551574 },
                { start: 4000, density: 0.11345291479820613 },
              ],
              percentiles: { p75: 1841 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9865366759517178,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.010677808727948003,
                },
                { start: "0.25", density: 0.0027855153203342614 },
              ],
              percentiles: { p75: "0.01" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.9086879432624115 },
                { start: 200, end: 500, density: 0.04787234042553191 },
                { start: 500, density: 0.043439716312056544 },
              ],
              percentiles: { p75: 89 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.7265217391304347 },
                { start: 800, end: 1800, density: 0.1621739130434783 },
                { start: 1800, density: 0.11130434782608706 },
              ],
              percentiles: { p75: 902 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7968539325842701 },
                { start: 1800, end: 3000, density: 0.08719101123595506 },
                { start: 3000, density: 0.11595505617977489 },
              ],
              percentiles: { p75: 1413 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9874843554443055 },
                { start: 100, end: 300, density: 0.008343763037129746 },
                { start: 300, density: 0.004171881518564873 },
              ],
              percentiles: { p75: 3 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.gh/",
          normalizedUrl: "https://www.yara.com.gh",
        },
      },
      extractedResults: { fcp: 1413, lcp: 1841, cls: "0.01", fid: 3 },
      timestamp: 1655979668864,
    },
    {
      url: "https://www.yara.co.ke/",
      deviceTargeted: "DESKTOP",
      results: {
        record: {
          key: {
            formFactor: "DESKTOP",
            origin: "https://www.yara.co.ke",
          },
          metrics: {
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7829754601226994 },
                { start: 1800, end: 3000, density: 0.11196319018404904 },
                { start: 3000, density: 0.10506134969325166 },
              ],
              percentiles: { p75: 2120 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9934980494148244 },
                { start: 100, end: 300, density: 0.006501950585175553 },
                { start: 300 },
              ],
              percentiles: { p75: 3 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.787395596051632 },
                { start: 2500, end: 4000, density: 0.07744874715261957 },
                { start: 4000, density: 0.1351556567957484 },
              ],
              percentiles: { p75: 3079 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.7979719188767551,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.1794071762870515,
                },
                { start: "0.25", density: 0.022620904836193445 },
              ],
              percentiles: { p75: "0.08" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.9486196319018406 },
                { start: 200, end: 500, density: 0.03220858895705521 },
                { start: 500, density: 0.019171779141104302 },
              ],
              percentiles: { p75: 67 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.5194598888006355 },
                { start: 800, end: 1800, density: 0.3796664019062748 },
                { start: 1800, density: 0.10087370929308959 },
              ],
              percentiles: { p75: 1496 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.co.ke/",
          normalizedUrl: "https://www.yara.co.ke",
        },
      },
      extractedResults: { fcp: 2120, lcp: 3079, cls: "0.08", fid: 3 },
      timestamp: 1655979670050,
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
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9959726137736609 },
                { start: 100, end: 300, density: 0.004027386226339106 },
                { start: 300 },
              ],
              percentiles: { p75: 2 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7142857142857143 },
                { start: 2500, end: 4000, density: 0.15065681444991785 },
                { start: 4000, density: 0.13505747126436785 },
              ],
              percentiles: { p75: 2976 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.7011101622544834,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.2408198121263877,
                },
                { start: "0.25", density: 0.05807002561912894 },
              ],
              percentiles: { p75: "0.11" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.9257731958762886 },
                { start: 200, end: 500, density: 0.05731958762886596 },
                { start: 500, density: 0.01690721649484537 },
              ],
              percentiles: { p75: 74 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.491150442477876 },
                { start: 800, end: 1800, density: 0.41954947707160095 },
                { start: 1800, density: 0.089300080450523 },
              ],
              percentiles: { p75: 1314 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7462686567164178 },
                { start: 1800, end: 3000, density: 0.17081260364842452 },
                { start: 3000, density: 0.08291873963515763 },
              ],
              percentiles: { p75: 1921 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.co.za/",
          normalizedUrl: "https://www.yara.co.za",
        },
      },
      extractedResults: { fcp: 1921, lcp: 2976, cls: "0.11", fid: 2 },
      timestamp: 1655979671323,
    },
    {
      url: "https://www.yara.ua/",
      deviceTargeted: "TABLET",
      results: {
        record: {
          key: { formFactor: "TABLET", origin: "https://www.yara.ua" },
          metrics: {
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9610389610389609,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.032467532467532464,
                },
                { start: "0.25", density: 0.006493506493506493 },
              ],
              percentiles: { p75: "0.02" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5319148936170216 },
                { start: 200, end: 500, density: 0.3687943262411349 },
                { start: 500, density: 0.09929078014184352 },
              ],
              percentiles: { p75: 315 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.776470588235294 },
                { start: 800, end: 1800, density: 0.1941176470588236 },
                { start: 1800, density: 0.029411764705882356 },
              ],
              percentiles: { p75: 775 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8581081081081082 },
                { start: 1800, end: 3000, density: 0.10135135135135132 },
                { start: 3000, density: 0.04054054054054056 },
              ],
              percentiles: { p75: 1279 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8474025974025975 },
                { start: 2500, end: 4000, density: 0.10714285714285715 },
                { start: 4000, density: 0.04545454545454548 },
              ],
              percentiles: { p75: 1926 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.ua/",
          normalizedUrl: "https://www.yara.ua",
        },
      },
      extractedResults: { fcp: 1279, lcp: 1926, cls: "0.02" },
      timestamp: 1655979672462,
    },
    {
      url: "https://www.yara.hu/",
      deviceTargeted: "TABLET",
      results: {
        record: {
          key: { formFactor: "TABLET", origin: "https://www.yara.hu" },
          metrics: {
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.4635416666666668 },
                { start: 200, end: 500, density: 0.42187500000000017 },
                { start: 500, density: 0.11458333333333308 },
              ],
              percentiles: { p75: 351 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.5621621621621622 },
                { start: 800, end: 1800, density: 0.4162162162162162 },
                { start: 1800, density: 0.021621621621621623 },
              ],
              percentiles: { p75: 1103 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8010752688172043 },
                { start: 1800, end: 3000, density: 0.16129032258064518 },
                { start: 3000, density: 0.03763440860215057 },
              ],
              percentiles: { p75: 1737 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9461077844311376 },
                { start: 100, end: 300, density: 0.04191616766467065 },
                { start: 300, density: 0.011976047904191614 },
              ],
              percentiles: { p75: 19 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.75 },
                { start: 2500, end: 4000, density: 0.2147058823529411 },
                { start: 4000, density: 0.03529411764705883 },
              ],
              percentiles: { p75: 2708 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9417989417989417,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.058201058201058205,
                },
                { start: "0.25" },
              ],
              percentiles: { p75: "0.01" },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.hu/",
          normalizedUrl: "https://www.yara.hu",
        },
      },
      extractedResults: {
        fcp: 1737,
        lcp: 2708,
        cls: "0.01",
        fid: 19,
      },
      timestamp: 1655979673786,
    },
    {
      url: "https://www.yara.nl/",
      deviceTargeted: "TABLET",
      results: {
        record: {
          key: { formFactor: "TABLET", origin: "https://www.yara.nl" },
          metrics: {
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9699453551912568,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.016393442622950817,
                },
                { start: "0.25", density: 0.013661202185792348 },
              ],
              percentiles: { p75: "0.03" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.3795811518324608 },
                { start: 200, end: 500, density: 0.5392670157068064 },
                { start: 500, density: 0.08115183246073286 },
              ],
              percentiles: { p75: 317 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.6044568245125349 },
                { start: 800, end: 1800, density: 0.3565459610027855 },
                { start: 1800, density: 0.038997214484679674 },
              ],
              percentiles: { p75: 919 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8412256267409471 },
                { start: 1800, end: 3000, density: 0.11142061281337048 },
                { start: 3000, density: 0.04735376044568249 },
              ],
              percentiles: { p75: 1504 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9463806970509383 },
                { start: 100, end: 300, density: 0.04289544235924934 },
                { start: 300, density: 0.010723860589812334 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7745358090185677 },
                { start: 2500, end: 4000, density: 0.18037135278514588 },
                { start: 4000, density: 0.045092838196286456 },
              ],
              percentiles: { p75: 2354 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.nl/",
          normalizedUrl: "https://www.yara.nl",
        },
      },
      extractedResults: {
        fcp: 1504,
        lcp: 2354,
        cls: "0.03",
        fid: 13,
      },
      timestamp: 1655979675160,
    },
  ],
};
