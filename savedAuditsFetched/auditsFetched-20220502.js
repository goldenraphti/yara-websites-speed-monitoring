export const audit18 = {
  date: "2022-05-02T10:47:08.479Z",
  dateParsedLocale: "02/05/2022",
  legacyAudit: true,
  legacyAuditType: 4,
  legacyAuditId: "02/05/2022-legacy-audit",
  audits: [
    {
      url: "https://www.yara.es/",
      deviceTargeted: "PHONE",
      results: {
        record: {
          key: { formFactor: "PHONE", origin: "https://www.yara.es" },
          metrics: {
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9306271207741612 },
                { start: 100, end: 300, density: 0.04222696996355411 },
                { start: 300, density: 0.027145909262284627 },
              ],
              percentiles: { p75: 15 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7645694949241753 },
                { start: 2500, end: 4000, density: 0.16060909888457184 },
                { start: 4000, density: 0.07482140619125299 },
              ],
              percentiles: { p75: 2438 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9356885184724467,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.028361736534394822,
                },
                { start: "0.25", density: 0.03594974499315836 },
              ],
              percentiles: { p75: "0.01" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7038288288288279 },
                { start: 1800, end: 3000, density: 0.198198198198198 },
                { start: 3000, density: 0.0979729729729741 },
              ],
              percentiles: { p75: 1972 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.es/",
          normalizedUrl: "https://www.yara.es",
        },
      },
      extractedResults: {
        fcp: 1972,
        lcp: 2438,
        cls: "0.01",
        fid: 15,
      },
      timestamp: 1651488388677,
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
                { start: 0, end: 1800, density: 0.7879929370217774 },
                { start: 1800, end: 3000, density: 0.15350206003531486 },
                { start: 3000, density: 0.05850500294290779 },
              ],
              percentiles: { p75: 1683 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9411480362537764 },
                { start: 100, end: 300, density: 0.03468277945619335 },
                { start: 300, density: 0.024169184290030257 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8196624572170422 },
                { start: 2500, end: 4000, density: 0.1278177741059837 },
                { start: 4000, density: 0.052519768676974006 },
              ],
              percentiles: { p75: 2161 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8354668232530827,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.14961832061068703,
                },
                { start: "0.25", density: 0.014914856136230193 },
              ],
              percentiles: { p75: "0.04" },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.pl/",
          normalizedUrl: "https://www.yara.pl",
        },
      },
      extractedResults: {
        fcp: 1683,
        lcp: 2161,
        cls: "0.04",
        fid: 13,
      },
      timestamp: 1651488389169,
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
                  density: 0.7955000000000001,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.13940000000000002,
                },
                { start: "0.25", density: 0.06509999999999994 },
              ],
              percentiles: { p75: "0.07" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7848354506351911 },
                { start: 1800, end: 3000, density: 0.12923877163148953 },
                { start: 3000, density: 0.08592577773331923 },
              ],
              percentiles: { p75: 1647 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9678967896789679 },
                { start: 100, end: 300, density: 0.0256025602560256 },
                { start: 300, density: 0.006500650065006499 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8268826882688266 },
                { start: 2500, end: 4000, density: 0.10111011101110115 },
                { start: 4000, density: 0.0720072007200722 },
              ],
              percentiles: { p75: 2063 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.my/",
          normalizedUrl: "https://www.yara.my",
        },
      },
      extractedResults: {
        fcp: 1647,
        lcp: 2063,
        cls: "0.07",
        fid: 12,
      },
      timestamp: 1651488389475,
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
                  density: 0.9386558412268831,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.02766501278003308,
                },
                { start: "0.25", density: 0.033679145993083755 },
              ],
              percentiles: { p75: "0.00" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.4027246288075927 },
                { start: 1800, end: 3000, density: 0.3842032756773311 },
                { start: 3000, density: 0.2130720955150762 },
              ],
              percentiles: { p75: 2845 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9748727735368956 },
                { start: 100, end: 300, density: 0.022582697201017816 },
                { start: 300, density: 0.0025445292620865146 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.5702277242854955 },
                { start: 2500, end: 4000, density: 0.2880941464160168 },
                { start: 4000, density: 0.14167812929848775 },
              ],
              percentiles: { p75: 3214 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.cl/",
          normalizedUrl: "https://www.yara.cl",
        },
      },
      extractedResults: {
        fcp: 2845,
        lcp: 3214,
        cls: "0.00",
        fid: 12,
      },
      timestamp: 1651488389687,
    },
    {
      url: "http://www.yara.com.mm/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "http://www.yara.com.mm" },
          metrics: {
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.16079999999999978 },
                { start: 1800, end: 3000, density: 0.4172999999999995 },
                { start: 3000, density: 0.4219000000000006 },
              ],
              percentiles: { p75: 4287 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.3254523642907133 },
                { start: 2500, end: 4000, density: 0.3412476257122866 },
                { start: 4000, density: 0.3333000099970001 },
              ],
              percentiles: { p75: 5072 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8588282343531294,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.07538492301539691,
                },
                { start: "0.25", density: 0.06578684263147368 },
              ],
              percentiles: { p75: "0.04" },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "http://www.yara.com.mm/",
          normalizedUrl: "http://www.yara.com.mm",
        },
      },
      extractedResults: { fcp: 4287, lcp: 5072, cls: "0.04" },
      timestamp: 1651488389963,
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
                { start: 0, end: 1800, density: 0.8954999999999999 },
                { start: 1800, end: 3000, density: 0.07810000000000002 },
                { start: 3000, density: 0.02640000000000009 },
              ],
              percentiles: { p75: 1271 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9639036096390361 },
                { start: 100, end: 300, density: 0.011698830116988301 },
                { start: 300, density: 0.02439756024397562 },
              ],
              percentiles: { p75: 9 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8846884688468847 },
                { start: 2500, end: 4000, density: 0.07990799079907991 },
                { start: 4000, density: 0.03540354035403541 },
              ],
              percentiles: { p75: 1816 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.7481251874812519,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.17788221177882213,
                },
                { start: "0.25", density: 0.07399260073992607 },
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
      extractedResults: { fcp: 1271, lcp: 1816, cls: "0.09", fid: 9 },
      timestamp: 1651488390138,
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
                { start: 0, end: 1800, density: 0.6741325867413257 },
                { start: 1800, end: 3000, density: 0.22467753224677528 },
                { start: 3000, density: 0.10118988101189909 },
              ],
              percentiles: { p75: 2271 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9895 },
                { start: 100, end: 300, density: 0.0079 },
                { start: 300, density: 0.0026 },
              ],
              percentiles: { p75: 8 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7397520495900817 },
                { start: 2500, end: 4000, density: 0.18476304739052188 },
                { start: 4000, density: 0.0754849030193964 },
              ],
              percentiles: { p75: 2634 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.768023197680232,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.17298270172982702,
                },
                { start: "0.25", density: 0.05899410058994103 },
              ],
              percentiles: { p75: "0.09" },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.co.nz/",
          normalizedUrl: "https://www.yara.co.nz",
        },
      },
      extractedResults: { fcp: 2271, lcp: 2634, cls: "0.09", fid: 8 },
      timestamp: 1651488390302,
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
                  density: 0.8588282343531294,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.07538492301539691,
                },
                { start: "0.25", density: 0.06578684263147368 },
              ],
              percentiles: { p75: "0.04" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.16079999999999978 },
                { start: 1800, end: 3000, density: 0.4172999999999995 },
                { start: 3000, density: 0.4219000000000006 },
              ],
              percentiles: { p75: 4287 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.3254523642907133 },
                { start: 2500, end: 4000, density: 0.3412476257122866 },
                { start: 4000, density: 0.3333000099970001 },
              ],
              percentiles: { p75: 5021 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "http://www.yara.com.mm/",
          normalizedUrl: "http://www.yara.com.mm",
        },
      },
      extractedResults: { fcp: 4287, lcp: 5021, cls: "0.04" },
      timestamp: 1651488390472,
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
                  density: 0.8014198580141986,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.14598540145985403,
                },
                { start: "0.25", density: 0.0525947405259474 },
              ],
              percentiles: { p75: "0.06" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6961607678464321 },
                { start: 1800, end: 3000, density: 0.21085782843431353 },
                { start: 3000, density: 0.09298140371925427 },
              ],
              percentiles: { p75: 2149 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9695969596959696 },
                { start: 100, end: 300, density: 0.014201420142014202 },
                { start: 300, density: 0.016201620162016216 },
              ],
              percentiles: { p75: 10 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7140500000000013 },
                { start: 2500, end: 4000, density: 0.18805000000000038 },
                { start: 4000, density: 0.09789999999999839 },
              ],
              percentiles: { p75: 2822 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yaracanada.ca/",
          normalizedUrl: "https://www.yaracanada.ca",
        },
      },
      extractedResults: {
        fcp: 2149,
        lcp: 2822,
        cls: "0.06",
        fid: 10,
      },
      timestamp: 1651488390783,
    },
    {
      url: "https://www.yara.us/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "https://www.yara.us" },
          metrics: {
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9069999999999999 },
                { start: 100, end: 300, density: 0.0403 },
                { start: 300, density: 0.0527000000000001 },
              ],
              percentiles: { p75: 14 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6750649870025991 },
                { start: 2500, end: 4000, density: 0.17136572685462892 },
                { start: 4000, density: 0.15356928614277193 },
              ],
              percentiles: { p75: 3017 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8276827682768276,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.1025102510251025,
                },
                { start: "0.25", density: 0.06980698069806995 },
              ],
              percentiles: { p75: "0.06" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6376000000000001 },
                { start: 1800, end: 3000, density: 0.20970000000000008 },
                { start: 3000, density: 0.15269999999999986 },
              ],
              percentiles: { p75: 2299 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.us/",
          normalizedUrl: "https://www.yara.us",
        },
      },
      extractedResults: {
        fcp: 2299,
        lcp: 3017,
        cls: "0.06",
        fid: 14,
      },
      timestamp: 1651488390958,
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
                { start: "0.00", end: "0.10", density: 0.825 },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.11500000000000002,
                },
                { start: "0.25", density: 0.05999999999999998 },
              ],
              percentiles: { p75: "0.05" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6279860069965008 },
                { start: 1800, end: 3000, density: 0.20759620189905018 },
                { start: 3000, density: 0.16441779110444923 },
              ],
              percentiles: { p75: 2446 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9650930186037208 },
                { start: 100, end: 300, density: 0.025205041008201635 },
                { start: 300, density: 0.009701940388077633 },
              ],
              percentiles: { p75: 11 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.691 },
                { start: 2500, end: 4000, density: 0.18720000000000006 },
                { start: 4000, density: 0.12180000000000016 },
              ],
              percentiles: { p75: 2945 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.au/",
          normalizedUrl: "https://www.yara.com.au",
        },
      },
      extractedResults: {
        fcp: 2446,
        lcp: 2945,
        cls: "0.05",
        fid: 11,
      },
      timestamp: 1651488391124,
    },
    {
      url: "https://www.yara.co.th/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "https://www.yara.co.th" },
          metrics: {
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9691876750700281 },
                { start: 100, end: 300, density: 0.017006802721088437 },
                { start: 300, density: 0.013805522208883524 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7480000000000006 },
                { start: 2500, end: 4000, density: 0.16580000000000014 },
                { start: 4000, density: 0.0861999999999993 },
              ],
              percentiles: { p75: 2511 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8059999999999999,
                },
                { start: "0.10", end: "0.25", density: 0.1552 },
                { start: "0.25", density: 0.03880000000000003 },
              ],
              percentiles: { p75: "0.04" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7210557888422322 },
                { start: 1800, end: 3000, density: 0.20815836832633486 },
                { start: 3000, density: 0.070785842831433 },
              ],
              percentiles: { p75: 1892 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.co.th/",
          normalizedUrl: "https://www.yara.co.th",
        },
      },
      extractedResults: {
        fcp: 1892,
        lcp: 2511,
        cls: "0.04",
        fid: 12,
      },
      timestamp: 1651488391324,
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
                { start: 0, end: 2500, density: 0.8806673209028458 },
                { start: 2500, end: 4000, density: 0.08891069676153097 },
                { start: 4000, density: 0.030421982335623113 },
              ],
              percentiles: { p75: 1989 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9356140688064578,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.045358447049778976,
                },
                { start: "0.25", density: 0.019027484143763224 },
              ],
              percentiles: { p75: "0.00" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8428627760252364 },
                { start: 1800, end: 3000, density: 0.11711356466876971 },
                { start: 3000, density: 0.04002365930599379 },
              ],
              percentiles: { p75: 1533 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9364548494983277 },
                { start: 100, end: 300, density: 0.042888058233326774 },
                { start: 300, density: 0.020657092268345452 },
              ],
              percentiles: { p75: 16 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.dk/",
          normalizedUrl: "https://www.yara.dk",
        },
      },
      extractedResults: {
        fcp: 1533,
        lcp: 1989,
        cls: "0.00",
        fid: 16,
      },
      timestamp: 1651488391507,
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
                { start: "0.00", end: "0.10", density: 0.9358 },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.04229999999999999,
                },
                { start: "0.25", density: 0.0219 },
              ],
              percentiles: { p75: "0.01" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7663000000000001 },
                { start: 1800, end: 3000, density: 0.18419999999999997 },
                { start: 3000, density: 0.04950000000000001 },
              ],
              percentiles: { p75: 1772 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9771022897710229 },
                { start: 100, end: 300, density: 0.015898410158984102 },
                { start: 300, density: 0.006999300069992986 },
              ],
              percentiles: { p75: 8 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8134313431343138 },
                { start: 2500, end: 4000, density: 0.12316231623162326 },
                { start: 4000, density: 0.06340634063406296 },
              ],
              percentiles: { p75: 2213 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.kr/",
          normalizedUrl: "https://www.yara.kr",
        },
      },
      extractedResults: { fcp: 1772, lcp: 2213, cls: "0.01", fid: 8 },
      timestamp: 1651488391776,
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
                { start: "0.00", end: "0.10", density: 0.8105 },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.11440000000000002,
                },
                { start: "0.25", density: 0.07510000000000003 },
              ],
              percentiles: { p75: "0.08" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5021502150215023 },
                { start: 1800, end: 3000, density: 0.31843184318431855 },
                { start: 3000, density: 0.17941794179417922 },
              ],
              percentiles: { p75: 2658 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9842000000000001 },
                { start: 100, end: 300, density: 0.0142 },
                { start: 300, density: 0.0016 },
              ],
              percentiles: { p75: 10 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6102720544108833 },
                { start: 2500, end: 4000, density: 0.2371974394878979 },
                { start: 4000, density: 0.1525305061012189 },
              ],
              percentiles: { p75: 3227 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.cl/",
          normalizedUrl: "https://www.yara.cl",
        },
      },
      extractedResults: {
        fcp: 2658,
        lcp: 3227,
        cls: "0.08",
        fid: 10,
      },
      timestamp: 1651488391929,
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
                { start: 0, end: 100, density: 0.9414607206958439 },
                { start: 100, end: 300, density: 0.03299737677757834 },
                { start: 300, density: 0.025541902526577714 },
              ],
              percentiles: { p75: 16 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8345173422482242 },
                { start: 2500, end: 4000, density: 0.10865022983702463 },
                { start: 4000, density: 0.056832427914751286 },
              ],
              percentiles: { p75: 2052 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9510130446849847,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.029975020815986676,
                },
                { start: "0.25", density: 0.019011934499028573 },
              ],
              percentiles: { p75: "0.01" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8113312866313143 },
                { start: 1800, end: 3000, density: 0.12447669550655872 },
                { start: 3000, density: 0.06419201786212694 },
              ],
              percentiles: { p75: 1552 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.de/",
          normalizedUrl: "https://www.yara.de",
        },
      },
      extractedResults: {
        fcp: 1552,
        lcp: 2052,
        cls: "0.01",
        fid: 16,
      },
      timestamp: 1651488392119,
    },
    {
      url: "https://www.yara.cm/en-cm/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "https://www.yara.cm" },
          metrics: {
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.632173565286943 },
                { start: 1800, end: 3000, density: 0.14647070585882835 },
                { start: 3000, density: 0.22135572885422863 },
              ],
              percentiles: { p75: 2592 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6520652065206524 },
                { start: 2500, end: 4000, density: 0.17231723172317243 },
                { start: 4000, density: 0.17561756175617516 },
              ],
              percentiles: { p75: 3148 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.7562999999999999,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.11559999999999998,
                },
                { start: "0.25", density: 0.12810000000000007 },
              ],
              percentiles: { p75: "0.09" },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.cm/en-cm/",
          normalizedUrl: "https://www.yara.cm",
        },
      },
      extractedResults: { fcp: 2592, lcp: 3148, cls: "0.09" },
      timestamp: 1651488392407,
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
                { start: 0, end: 100, density: 0.9107533604251327 },
                { start: 100, end: 300, density: 0.0437636761487965 },
                { start: 300, density: 0.04548296342607074 },
              ],
              percentiles: { p75: 16 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.5168022096056468 },
                { start: 2500, end: 4000, density: 0.29323308270676696 },
                { start: 4000, density: 0.18996470768758617 },
              ],
              percentiles: { p75: 3578 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9366611370833962,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.03513798823706831,
                },
                { start: "0.25", density: 0.028200874679535578 },
              ],
              percentiles: { p75: "0.01" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.4001847006310589 },
                { start: 1800, end: 3000, density: 0.3287671232876698 },
                { start: 3000, density: 0.27104817608127124 },
              ],
              percentiles: { p75: 3148 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.co.uk/",
          normalizedUrl: "https://www.yara.co.uk",
        },
      },
      extractedResults: {
        fcp: 3148,
        lcp: 3578,
        cls: "0.01",
        fid: 16,
      },
      timestamp: 1651488392579,
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
                  density: 0.7562999999999999,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.11559999999999998,
                },
                { start: "0.25", density: 0.12810000000000007 },
              ],
              percentiles: { p75: "0.09" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.632173565286943 },
                { start: 1800, end: 3000, density: 0.14647070585882835 },
                { start: 3000, density: 0.22135572885422863 },
              ],
              percentiles: { p75: 2592 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6520652065206524 },
                { start: 2500, end: 4000, density: 0.17231723172317243 },
                { start: 4000, density: 0.17561756175617516 },
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
      extractedResults: { fcp: 2592, lcp: 3148, cls: "0.09" },
      timestamp: 1651488392835,
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
                { start: 0, end: 100, density: 0.9639036096390361 },
                { start: 100, end: 300, density: 0.011698830116988301 },
                { start: 300, density: 0.02439756024397562 },
              ],
              percentiles: { p75: 9 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8846884688468847 },
                { start: 2500, end: 4000, density: 0.07990799079907991 },
                { start: 4000, density: 0.03540354035403541 },
              ],
              percentiles: { p75: 1816 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.7481251874812519,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.17788221177882213,
                },
                { start: "0.25", density: 0.07399260073992607 },
              ],
              percentiles: { p75: "0.09" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8954999999999999 },
                { start: 1800, end: 3000, density: 0.07810000000000002 },
                { start: 3000, density: 0.02640000000000009 },
              ],
              percentiles: { p75: 1271 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.be/",
          normalizedUrl: "https://www.yara.be",
        },
      },
      extractedResults: { fcp: 1271, lcp: 1816, cls: "0.09", fid: 9 },
      timestamp: 1651488392998,
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
                  density: 0.7742054239784023,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.18591238188734818,
                },
                { start: "0.25", density: 0.0398821941342496 },
              ],
              percentiles: { p75: "0.07" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6792127921279206 },
                { start: 1800, end: 3000, density: 0.2392373923739235 },
                { start: 3000, density: 0.0815498154981558 },
              ],
              percentiles: { p75: 2039 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9627218179497001 },
                { start: 100, end: 300, density: 0.02119239116558152 },
                { start: 300, density: 0.016085790884718454 },
              ],
              percentiles: { p75: 14 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7172362921072043 },
                { start: 2500, end: 4000, density: 0.18822227686255225 },
                { start: 4000, density: 0.09454143103024337 },
              ],
              percentiles: { p75: 2632 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.co.th/",
          normalizedUrl: "https://www.yara.co.th",
        },
      },
      extractedResults: {
        fcp: 2039,
        lcp: 2632,
        cls: "0.07",
        fid: 14,
      },
      timestamp: 1651488393178,
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
                  density: 0.9148999999999999,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.05639999999999999,
                },
                { start: "0.25", density: 0.028699999999999986 },
              ],
              percentiles: { p75: "0.00" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6051210242048398 },
                { start: 1800, end: 3000, density: 0.1504300860172032 },
                { start: 3000, density: 0.2444488897779571 },
              ],
              percentiles: { p75: 2889 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9643 },
                { start: 100, end: 300, density: 0.0204 },
                { start: 300, density: 0.015300000000000012 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6301869813018679 },
                { start: 2500, end: 4000, density: 0.1806319368063188 },
                { start: 4000, density: 0.18918108189181335 },
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
        fcp: 2889,
        lcp: 3309,
        cls: "0.00",
        fid: 12,
      },
      timestamp: 1651488393464,
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
                  density: 0.8925107489251075,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.055894410558944105,
                },
                { start: "0.25", density: 0.05159484051594838 },
              ],
              percentiles: { p75: "0.03" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.4766570028991296 },
                { start: 1800, end: 3000, density: 0.28131560531840405 },
                { start: 3000, density: 0.24202739178246635 },
              ],
              percentiles: { p75: 2962 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.961992398479696 },
                { start: 100, end: 300, density: 0.028705741148229644 },
                { start: 300, density: 0.009301860372074387 },
              ],
              percentiles: { p75: 11 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.5773345330933798 },
                { start: 2500, end: 4000, density: 0.25289942011597616 },
                { start: 4000, density: 0.16976604679064408 },
              ],
              percentiles: { p75: 3405 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.ar/",
          normalizedUrl: "https://www.yara.com.ar",
        },
      },
      extractedResults: {
        fcp: 2962,
        lcp: 3405,
        cls: "0.03",
        fid: 11,
      },
      timestamp: 1651488393674,
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
                  density: 0.9386503067484663,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.035028695824262816,
                },
                { start: "0.25", density: 0.026320997427270922 },
              ],
              percentiles: { p75: "0.00" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8566847063539786 },
                { start: 1800, end: 3000, density: 0.10422930446983363 },
                { start: 3000, density: 0.03908598917618771 },
              ],
              percentiles: { p75: 1506 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9347735770668882 },
                { start: 100, end: 300, density: 0.01890319900290818 },
                { start: 300, density: 0.04632322393020361 },
              ],
              percentiles: { p75: 14 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8570003988831272 },
                { start: 2500, end: 4000, density: 0.09373753490227366 },
                { start: 4000, density: 0.04926206621459908 },
              ],
              percentiles: { p75: 2059 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.be/fr-be/",
          normalizedUrl: "https://www.yara.be",
        },
      },
      extractedResults: {
        fcp: 1506,
        lcp: 2059,
        cls: "0.00",
        fid: 14,
      },
      timestamp: 1651488393833,
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
                  density: 0.9267000000000001,
                },
                { start: "0.10", end: "0.25", density: 0.0568 },
                { start: "0.25", density: 0.01650000000000001 },
              ],
              percentiles: { p75: "0.01" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8079000000000001 },
                { start: 1800, end: 3000, density: 0.14090000000000003 },
                { start: 3000, density: 0.05119999999999999 },
              ],
              percentiles: { p75: 1678 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8423342334233426 },
                { start: 2500, end: 4000, density: 0.10426042604260423 },
                { start: 4000, density: 0.05340534053405332 },
              ],
              percentiles: { p75: 2095 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.ma/",
          normalizedUrl: "https://www.yara.ma",
        },
      },
      extractedResults: { fcp: 1678, lcp: 2095, cls: "0.01" },
      timestamp: 1651488394074,
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
                  density: 0.8014198580141986,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.14598540145985403,
                },
                { start: "0.25", density: 0.0525947405259474 },
              ],
              percentiles: { p75: "0.06" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6961607678464321 },
                { start: 1800, end: 3000, density: 0.21085782843431353 },
                { start: 3000, density: 0.09298140371925427 },
              ],
              percentiles: { p75: 2149 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9695969596959696 },
                { start: 100, end: 300, density: 0.014201420142014202 },
                { start: 300, density: 0.016201620162016216 },
              ],
              percentiles: { p75: 10 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7140500000000013 },
                { start: 2500, end: 4000, density: 0.18805000000000038 },
                { start: 4000, density: 0.09789999999999839 },
              ],
              percentiles: { p75: 2822 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yaracanada.ca/fr-ca/",
          normalizedUrl: "https://www.yaracanada.ca",
        },
      },
      extractedResults: {
        fcp: 2149,
        lcp: 2822,
        cls: "0.06",
        fid: 10,
      },
      timestamp: 1651488394232,
    },
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
                  density: 0.8476847684768478,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.10881088108810882,
                },
                { start: "0.25", density: 0.04350435043504348 },
              ],
              percentiles: { p75: "0.04" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6186381361863813 },
                { start: 1800, end: 3000, density: 0.2097790220977903 },
                { start: 3000, density: 0.1715828417158284 },
              ],
              percentiles: { p75: 2442 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9651965196519653 },
                { start: 100, end: 300, density: 0.0288028802880288 },
                { start: 300, density: 0.006000600060006 },
              ],
              percentiles: { p75: 11 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6699499999999993 },
                { start: 2500, end: 4000, density: 0.16844999999999982 },
                { start: 4000, density: 0.16160000000000097 },
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
        fcp: 2442,
        lcp: 3134,
        cls: "0.04",
        fid: 11,
      },
      timestamp: 1651488394394,
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
                { start: 0, end: 1800, density: 0.5809523809523798 },
                { start: 1800, end: 3000, density: 0.2528028933092218 },
                { start: 3000, density: 0.16624472573839844 },
              ],
              percentiles: { p75: 2464 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9511469311841289 },
                { start: 100, end: 300, density: 0.03372597644141352 },
                { start: 300, density: 0.015127092374457593 },
              ],
              percentiles: { p75: 14 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.685619735258724 },
                { start: 2500, end: 4000, density: 0.18971119133573985 },
                { start: 4000, density: 0.12466907340553608 },
              ],
              percentiles: { p75: 2882 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.940375194168957,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.023897717767953162,
                },
                { start: "0.25", density: 0.03572708806308997 },
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
        fcp: 2464,
        lcp: 2882,
        cls: "0.00",
        fid: 14,
      },
      timestamp: 1651488394617,
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
                  density: 0.8779751927589675,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.08559615599508325,
                },
                { start: "0.25", density: 0.03642865124594931 },
              ],
              percentiles: { p75: "0.01" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.4063202878992394 },
                { start: 1800, end: 3000, density: 0.2565227170490355 },
                { start: 3000, density: 0.3371569950517251 },
              ],
              percentiles: { p75: 3618 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.8890188282072267 },
                { start: 100, end: 300, density: 0.07005028651619691 },
                { start: 300, density: 0.040930885276576345 },
              ],
              percentiles: { p75: 20 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.45680613510770574 },
                { start: 2500, end: 4000, density: 0.25403180331566655 },
                { start: 4000, density: 0.28916206157662766 },
              ],
              percentiles: { p75: 4400 },
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
        lcp: 4400,
        cls: "0.01",
        fid: 20,
      },
      timestamp: 1651488394865,
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
                  density: 0.9239722170076967,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.055565984606720485,
                },
                { start: "0.25", density: 0.020461798385582902 },
              ],
              percentiles: { p75: "0.00" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.701027006466337 },
                { start: 1800, end: 3000, density: 0.23411943704830732 },
                { start: 3000, density: 0.06485355648535565 },
              ],
              percentiles: { p75: 1949 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9549491011479316 },
                { start: 100, end: 300, density: 0.029889538661468488 },
                { start: 300, density: 0.015161360190599927 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7835110434120336 },
                { start: 2500, end: 4000, density: 0.16355674028941358 },
                { start: 4000, density: 0.05293221629855298 },
              ],
              percentiles: { p75: 2352 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.kr/",
          normalizedUrl: "https://www.yara.kr",
        },
      },
      extractedResults: {
        fcp: 1949,
        lcp: 2352,
        cls: "0.00",
        fid: 12,
      },
      timestamp: 1651488395124,
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
                  density: 0.8480327144120247,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.09858532272325375,
                },
                { start: "0.25", density: 0.05338196286472157 },
              ],
              percentiles: { p75: "0.01" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6667405028242326 },
                { start: 1800, end: 3000, density: 0.20711042197364027 },
                { start: 3000, density: 0.12614907520212698 },
              ],
              percentiles: { p75: 2184 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9570927204800179 },
                { start: 100, end: 300, density: 0.028869013925053765 },
                { start: 300, density: 0.014038265594928158 },
              ],
              percentiles: { p75: 14 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7421823020625413 },
                { start: 2500, end: 4000, density: 0.15879352406298514 },
                { start: 4000, density: 0.09902417387447346 },
              ],
              percentiles: { p75: 2558 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.in/",
          normalizedUrl: "https://www.yara.in",
        },
      },
      extractedResults: {
        fcp: 2184,
        lcp: 2558,
        cls: "0.01",
        fid: 14,
      },
      timestamp: 1651488395515,
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
                  density: 0.9266975308641976,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.03986625514403293,
                },
                { start: "0.25", density: 0.03343621399176952 },
              ],
              percentiles: { p75: "0.00" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8469783057851241 },
                { start: 1800, end: 3000, density: 0.10420971074380174 },
                { start: 3000, density: 0.0488119834710741 },
              ],
              percentiles: { p75: 1465 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9404792914821568 },
                { start: 100, end: 300, density: 0.02995571763480073 },
                { start: 300, density: 0.029564990883042458 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8730620155038759 },
                { start: 2500, end: 4000, density: 0.0893410852713178 },
                { start: 4000, density: 0.03759689922480644 },
              ],
              percentiles: { p75: 1848 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.it/",
          normalizedUrl: "https://www.yara.it",
        },
      },
      extractedResults: {
        fcp: 1465,
        lcp: 1848,
        cls: "0.00",
        fid: 13,
      },
      timestamp: 1651488395862,
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
                  density: 0.9529060418102459,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.01447277739490007,
                },
                { start: "0.25", density: 0.03262118079485411 },
              ],
              percentiles: { p75: "0.00" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.31493506493506473 },
                { start: 1800, end: 3000, density: 0.3477504638218921 },
                { start: 3000, density: 0.33731447124304315 },
              ],
              percentiles: { p75: 3525 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9645524599881445 },
                { start: 100, end: 300, density: 0.028452874925903978 },
                { start: 300, density: 0.006994665085951392 },
              ],
              percentiles: { p75: 11 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.4392009264620727 },
                { start: 2500, end: 4000, density: 0.33879559930515335 },
                { start: 4000, density: 0.22200347423277392 },
              ],
              percentiles: { p75: 3884 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.bo/",
          normalizedUrl: "https://www.yara.bo",
        },
      },
      extractedResults: {
        fcp: 3525,
        lcp: 3884,
        cls: "0.00",
        fid: 11,
      },
      timestamp: 1651488396221,
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
                { start: 0, end: 1800, density: 0.9419174247725682 },
                { start: 1800, end: 3000, density: 0.04478656403079077 },
                { start: 3000, density: 0.013296011196640978 },
              ],
              percentiles: { p75: 1159 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9596121163650906 },
                { start: 100, end: 300, density: 0.01979406178146556 },
                { start: 300, density: 0.020593821853443918 },
              ],
              percentiles: { p75: 11 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.9267426742674267 },
                { start: 2500, end: 4000, density: 0.05805580558055804 },
                { start: 4000, density: 0.015201520152015141 },
              ],
              percentiles: { p75: 1626 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8207820782078208,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.13831383138313827,
                },
                { start: "0.25", density: 0.04090409040904096 },
              ],
              percentiles: { p75: "0.06" },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.no/",
          normalizedUrl: "https://www.yara.no",
        },
      },
      extractedResults: {
        fcp: 1159,
        lcp: 1626,
        cls: "0.06",
        fid: 11,
      },
      timestamp: 1651488396493,
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
                  density: 0.8811881188118811,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.06980698069806981,
                },
                { start: "0.25", density: 0.049004900490049026 },
              ],
              percentiles: { p75: "0.01" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6014601460145999 },
                { start: 1800, end: 3000, density: 0.2408240824082402 },
                { start: 3000, density: 0.15771577157715996 },
              ],
              percentiles: { p75: 2400 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9561956195619562 },
                { start: 100, end: 300, density: 0.029502950295029504 },
                { start: 300, density: 0.014301430143014344 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6852111266760045 },
                { start: 2500, end: 4000, density: 0.18411046627976743 },
                { start: 4000, density: 0.13067840704422812 },
              ],
              percentiles: { p75: 2901 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.mx/",
          normalizedUrl: "https://www.yara.com.mx",
        },
      },
      extractedResults: {
        fcp: 2400,
        lcp: 2901,
        cls: "0.01",
        fid: 13,
      },
      timestamp: 1651488396675,
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
                  density: 0.9284928492849285,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.052505250525052505,
                },
                { start: "0.25", density: 0.019001900190018996 },
              ],
              percentiles: { p75: "0.01" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6521695660867827 },
                { start: 1800, end: 3000, density: 0.23525294941011798 },
                { start: 3000, density: 0.1125774845030993 },
              ],
              percentiles: { p75: 2148 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9802 },
                { start: 100, end: 300, density: 0.014100000000000003 },
                { start: 300, density: 0.005700000000000001 },
              ],
              percentiles: { p75: 11 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7260273972602734 },
                { start: 2500, end: 4000, density: 0.15698430156984292 },
                { start: 4000, density: 0.11698830116988372 },
              ],
              percentiles: { p75: 2669 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.pa/",
          normalizedUrl: "https://www.yara.com.pa",
        },
      },
      extractedResults: {
        fcp: 2148,
        lcp: 2669,
        cls: "0.01",
        fid: 11,
      },
      timestamp: 1651488396859,
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
                { start: 0, end: 1800, density: 0.8330999999999996 },
                { start: 1800, end: 3000, density: 0.10779999999999999 },
                { start: 3000, density: 0.05910000000000049 },
              ],
              percentiles: { p75: 1477 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9613038696130388 },
                { start: 100, end: 300, density: 0.0273972602739726 },
                { start: 300, density: 0.01129887011298866 },
              ],
              percentiles: { p75: 11 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8492698539707938 },
                { start: 2500, end: 4000, density: 0.09931986397279456 },
                { start: 4000, density: 0.051410282056411585 },
              ],
              percentiles: { p75: 1990 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9510000000000001,
                },
                { start: "0.10", end: "0.25", density: 0.0321 },
                { start: "0.25", density: 0.016900000000000002 },
              ],
              percentiles: { p75: "0.01" },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.pt/",
          normalizedUrl: "https://www.yara.pt",
        },
      },
      extractedResults: {
        fcp: 1477,
        lcp: 1990,
        cls: "0.01",
        fid: 11,
      },
      timestamp: 1651488397049,
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
                { start: 0, end: 100, density: 0.9423057694230578 },
                { start: 100, end: 300, density: 0.018298170182981705 },
                { start: 300, density: 0.03939606039396055 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6068500000000002 },
                { start: 2500, end: 4000, density: 0.2846500000000002 },
                { start: 4000, density: 0.10849999999999962 },
              ],
              percentiles: { p75: 2984 },
            },
            cumulative_layout_shift: {
              histogram: [
                { start: "0.00", end: "0.10", density: 0.8427 },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.07769999999999999,
                },
                { start: "0.25", density: 0.07959999999999998 },
              ],
              percentiles: { p75: "0.04" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5212521252125208 },
                { start: 1800, end: 3000, density: 0.3467346734673465 },
                { start: 3000, density: 0.13201320132013267 },
              ],
              percentiles: { p75: 2530 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.ie/",
          normalizedUrl: "https://www.yara.ie",
        },
      },
      extractedResults: {
        fcp: 2530,
        lcp: 2984,
        cls: "0.04",
        fid: 12,
      },
      timestamp: 1651488397235,
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
                  density: 0.9359720605355064,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.05380933902470573,
                },
                { start: "0.25", density: 0.010218600439787864 },
              ],
              percentiles: { p75: "0.00" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.828704905268622 },
                { start: 1800, end: 3000, density: 0.14274591227614844 },
                { start: 3000, density: 0.028549182455229687 },
              ],
              percentiles: { p75: 1614 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.964979516320867 },
                { start: 100, end: 300, density: 0.023126734505087874 },
                { start: 300, density: 0.011893749174045195 },
              ],
              percentiles: { p75: 14 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8531782139607434 },
                { start: 2500, end: 4000, density: 0.11913427791498768 },
                { start: 4000, density: 0.027687508124268897 },
              ],
              percentiles: { p75: 2078 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.lv/",
          normalizedUrl: "https://www.yara.lv",
        },
      },
      extractedResults: {
        fcp: 1614,
        lcp: 2078,
        cls: "0.00",
        fid: 14,
      },
      timestamp: 1651488397410,
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
                { start: "0.00", end: "0.10", density: 0.8158 },
                { start: "0.10", end: "0.25", density: 0.1504 },
                { start: "0.25", density: 0.03380000000000001 },
              ],
              percentiles: { p75: "0.06" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7521256376913066 },
                { start: 1800, end: 3000, density: 0.15334600380114022 },
                { start: 3000, density: 0.09452835850755334 },
              ],
              percentiles: { p75: 1817 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9764070778766372 },
                { start: 100, end: 300, density: 0.016495051484554636 },
                { start: 300, density: 0.007097870638808358 },
              ],
              percentiles: { p75: 10 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.771277127712771 },
                { start: 2500, end: 4000, density: 0.14101410141014095 },
                { start: 4000, density: 0.08770877087708803 },
              ],
              percentiles: { p75: 2389 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com/",
          normalizedUrl: "https://www.yara.com",
        },
      },
      extractedResults: {
        fcp: 1817,
        lcp: 2389,
        cls: "0.06",
        fid: 10,
      },
      timestamp: 1651488397686,
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
                { start: 0, end: 1800, density: 0.42316513761467817 },
                { start: 1800, end: 3000, density: 0.30071355759429114 },
                { start: 3000, density: 0.2761213047910307 },
              ],
              percentiles: { p75: 3160 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9517625231910946 },
                { start: 100, end: 300, density: 0.038033395176252316 },
                { start: 300, density: 0.010204081632653066 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.54123252858958 },
                { start: 2500, end: 4000, density: 0.2798602287166452 },
                { start: 4000, density: 0.17890724269377475 },
              ],
              percentiles: { p75: 3523 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9164779874213835,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.02817610062893082,
                },
                { start: "0.25", density: 0.05534591194968554 },
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
        fcp: 3160,
        lcp: 3523,
        cls: "0.00",
        fid: 13,
      },
      timestamp: 1651488397872,
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
                  density: 0.8235352929414118,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.1237752449510098,
                },
                { start: "0.25", density: 0.05268946210757846 },
              ],
              percentiles: { p75: "0.07" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7389261073892607 },
                { start: 1800, end: 3000, density: 0.16328367163283666 },
                { start: 3000, density: 0.09779022097790274 },
              ],
              percentiles: { p75: 1891 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9405881176235248 },
                { start: 100, end: 300, density: 0.03590718143628727 },
                { start: 300, density: 0.023504700940187948 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7775555111022203 },
                { start: 2500, end: 4000, density: 0.14062812562512497 },
                { start: 4000, density: 0.08181636327265464 },
              ],
              percentiles: { p75: 2389 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.fr/",
          normalizedUrl: "https://www.yara.fr",
        },
      },
      extractedResults: {
        fcp: 1891,
        lcp: 2389,
        cls: "0.07",
        fid: 12,
      },
      timestamp: 1651488398164,
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
                { start: 0, end: 100, density: 0.9615384615384616 },
                { start: 100, end: 300, density: 0.030850774667029093 },
                { start: 300, density: 0.007610763794509392 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6332056531501778 },
                { start: 2500, end: 4000, density: 0.24039096552635042 },
                { start: 4000, density: 0.12640338132347187 },
              ],
              percentiles: { p75: 3057 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9448870314744678,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.024422097427190804,
                },
                { start: "0.25", density: 0.03069087109834138 },
              ],
              percentiles: { p75: "0.01" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.4855445544554451 },
                { start: 1800, end: 3000, density: 0.321320132013201 },
                { start: 3000, density: 0.19313531353135388 },
              ],
              percentiles: { p75: 2694 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.pe/",
          normalizedUrl: "https://www.yara.com.pe",
        },
      },
      extractedResults: {
        fcp: 2694,
        lcp: 3057,
        cls: "0.01",
        fid: 12,
      },
      timestamp: 1651488398369,
    },
    {
      url: "https://www.yara.ee/",
      deviceTargeted: "PHONE",
      results: {
        record: {
          key: { formFactor: "PHONE", origin: "https://www.yara.ee" },
          metrics: {
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8940185830429732 },
                { start: 2500, end: 4000, density: 0.06939605110336819 },
                { start: 4000, density: 0.036585365853658576 },
              ],
              percentiles: { p75: 1970 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9562799616490891,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.02972195589645254,
                },
                { start: "0.25", density: 0.013998082454458287 },
              ],
              percentiles: { p75: "0.00" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8754635955494827 },
                { start: 1800, end: 3000, density: 0.08998633613117311 },
                { start: 3000, density: 0.034550068319344165 },
              ],
              percentiles: { p75: 1485 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9578276074881712 },
                { start: 100, end: 300, density: 0.03024069121579922 },
                { start: 300, density: 0.011931701296029626 },
              ],
              percentiles: { p75: 14 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.ee/",
          normalizedUrl: "https://www.yara.ee",
        },
      },
      extractedResults: {
        fcp: 1485,
        lcp: 1970,
        cls: "0.00",
        fid: 14,
      },
      timestamp: 1651488398675,
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
                  density: 0.9034621462433559,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.02901881913518173,
                },
                { start: "0.25", density: 0.06751903462146243 },
              ],
              percentiles: { p75: "0.01" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5681751824817505 },
                { start: 1800, end: 3000, density: 0.2448175182481747 },
                { start: 3000, density: 0.18700729927007476 },
              ],
              percentiles: { p75: 2554 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.8630597585205563 },
                { start: 100, end: 300, density: 0.05792449946507718 },
                { start: 300, density: 0.0790157420143666 },
              ],
              percentiles: { p75: 24 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6352601156069356 },
                { start: 2500, end: 4000, density: 0.18786127167630026 },
                { start: 4000, density: 0.17687861271676406 },
              ],
              percentiles: { p75: 3268 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.us/",
          normalizedUrl: "https://www.yara.us",
        },
      },
      extractedResults: {
        fcp: 2554,
        lcp: 3268,
        cls: "0.01",
        fid: 24,
      },
      timestamp: 1651488398991,
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
                  density: 0.8192819281928192,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.11901190119011901,
                },
                { start: "0.25", density: 0.061706170617061754 },
              ],
              percentiles: { p75: "0.04" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6829 },
                { start: 1800, end: 3000, density: 0.19699999999999998 },
                { start: 3000, density: 0.12010000000000015 },
              ],
              percentiles: { p75: 2130 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9618885665699709 },
                { start: 100, end: 300, density: 0.0255076522956887 },
                { start: 300, density: 0.012603781134340346 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7506500000000003 },
                { start: 2500, end: 4000, density: 0.15275000000000002 },
                { start: 4000, density: 0.09659999999999971 },
              ],
              percentiles: { p75: 2521 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.in/",
          normalizedUrl: "https://www.yara.in",
        },
      },
      extractedResults: {
        fcp: 2130,
        lcp: 2521,
        cls: "0.04",
        fid: 13,
      },
      timestamp: 1651488399290,
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
                { start: 0, end: 2500, density: 0.8052310817673946 },
                { start: 2500, end: 4000, density: 0.11465210766886749 },
                { start: 4000, density: 0.08011681056373796 },
              ],
              percentiles: { p75: 2160 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8572149981062996,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.09821992172705467,
                },
                { start: "0.25", density: 0.04456508016664563 },
              ],
              percentiles: { p75: "0.01" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7560975609756092 },
                { start: 1800, end: 3000, density: 0.14519817073170727 },
                { start: 3000, density: 0.09870426829268357 },
              ],
              percentiles: { p75: 1781 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9575396825396826 },
                { start: 100, end: 300, density: 0.03386243386243386 },
                { start: 300, density: 0.008597883597883596 },
              ],
              percentiles: { p75: 14 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.my/",
          normalizedUrl: "https://www.yara.my",
        },
      },
      extractedResults: {
        fcp: 1781,
        lcp: 2160,
        cls: "0.01",
        fid: 14,
      },
      timestamp: 1651488399485,
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
                  density: 0.9420999999999999,
                },
                { start: "0.10", end: "0.25", density: 0.0424 },
                { start: "0.25", density: 0.015500000000000009 },
              ],
              percentiles: { p75: "0.01" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6101779644071184 },
                { start: 1800, end: 3000, density: 0.23595280943811237 },
                { start: 3000, density: 0.15386922615476925 },
              ],
              percentiles: { p75: 2429 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9596040395960405 },
                { start: 100, end: 300, density: 0.022197780221977808 },
                { start: 300, density: 0.018198180181981754 },
              ],
              percentiles: { p75: 11 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6957804219578039 },
                { start: 2500, end: 4000, density: 0.19983001699830016 },
                { start: 4000, density: 0.10438956104389593 },
              ],
              percentiles: { p75: 2803 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.ru/",
          normalizedUrl: "https://www.yara.ru",
        },
      },
      extractedResults: {
        fcp: 2429,
        lcp: 2803,
        cls: "0.01",
        fid: 11,
      },
      timestamp: 1651488399778,
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
                  density: 0.9252925292529254,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.0403040304030403,
                },
                { start: "0.25", density: 0.034403440344034406 },
              ],
              percentiles: { p75: "0.00" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.33669899030290923 },
                { start: 1800, end: 3000, density: 0.3406977906628012 },
                { start: 3000, density: 0.3226032190342895 },
              ],
              percentiles: { p75: 3442 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9675129948020791 },
                { start: 100, end: 300, density: 0.024790083966413433 },
                { start: 300, density: 0.007696921231507394 },
              ],
              percentiles: { p75: 11 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.45098039215686214 },
                { start: 2500, end: 4000, density: 0.3180272108843533 },
                { start: 4000, density: 0.23099239695878454 },
              ],
              percentiles: { p75: 3950 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.bo/",
          normalizedUrl: "https://www.yara.bo",
        },
      },
      extractedResults: {
        fcp: 3442,
        lcp: 3950,
        cls: "0.00",
        fid: 11,
      },
      timestamp: 1651488399980,
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
                  density: 0.9262926292629263,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.0448044804480448,
                },
                { start: "0.25", density: 0.028902890289028906 },
              ],
              percentiles: { p75: "0.01" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5930593059305923 },
                { start: 1800, end: 3000, density: 0.2492249224922489 },
                { start: 3000, density: 0.15771577157715885 },
              ],
              percentiles: { p75: 2481 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.966493298659732 },
                { start: 100, end: 300, density: 0.024804960992198442 },
                { start: 300, density: 0.008701740348069616 },
              ],
              percentiles: { p75: 11 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6740977706687978 },
                { start: 2500, end: 4000, density: 0.20113965810256879 },
                { start: 4000, density: 0.12476257122863328 },
              ],
              percentiles: { p75: 2923 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.ec/",
          normalizedUrl: "https://www.yara.com.ec",
        },
      },
      extractedResults: {
        fcp: 2481,
        lcp: 2923,
        cls: "0.01",
        fid: 11,
      },
      timestamp: 1651488400181,
    },
    {
      url: "https://www.yara.com.ec/",
      deviceTargeted: "PHONE",
      results: {
        record: {
          key: { formFactor: "PHONE", origin: "https://www.yara.com.ec" },
          metrics: {
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9599330069569698 },
                { start: 100, end: 300, density: 0.02988920381345015 },
                { start: 300, density: 0.01017778922958001 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6674259681093384 },
                { start: 2500, end: 4000, density: 0.2136168058719309 },
                { start: 4000, density: 0.11895722601873077 },
              ],
              percentiles: { p75: 2915 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9636363636363637,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.013166144200626959,
                },
                { start: "0.25", density: 0.02319749216300942 },
              ],
              percentiles: { p75: "0.00" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5679121433981306 },
                { start: 1800, end: 3000, density: 0.2599091138601358 },
                { start: 3000, density: 0.17217874274173361 },
              ],
              percentiles: { p75: 2578 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.ec/",
          normalizedUrl: "https://www.yara.com.ec",
        },
      },
      extractedResults: {
        fcp: 2578,
        lcp: 2915,
        cls: "0.00",
        fid: 13,
      },
      timestamp: 1651488400382,
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
                { start: 0, end: 2500, density: 0.8700651826343622 },
                { start: 2500, end: 4000, density: 0.10054113885130977 },
                { start: 4000, density: 0.029393678514327976 },
              ],
              percentiles: { p75: 1942 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9750367107195301,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.0157856093979442,
                },
                { start: "0.25", density: 0.0091776798825257 },
              ],
              percentiles: { p75: "0.00" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8341943419434195 },
                { start: 1800, end: 3000, density: 0.1284132841328414 },
                { start: 3000, density: 0.03739237392373918 },
              ],
              percentiles: { p75: 1582 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9619697708434911 },
                { start: 100, end: 300, density: 0.02328132618235008 },
                { start: 300, density: 0.014748902974158961 },
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
        fcp: 1582,
        lcp: 1942,
        cls: "0.00",
        fid: 12,
      },
      timestamp: 1651488400690,
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
                { start: 0, end: 2500, density: 0.8418816236752645 },
                { start: 2500, end: 4000, density: 0.10532893421315735 },
                { start: 4000, density: 0.05278944211157815 },
              ],
              percentiles: { p75: 2015 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8253174682531745,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.10828917108289168,
                },
                { start: "0.25", density: 0.06639336066393361 },
              ],
              percentiles: { p75: "0.05" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8354999999999998 },
                { start: 1800, end: 3000, density: 0.10899999999999997 },
                { start: 3000, density: 0.055500000000000334 },
              ],
              percentiles: { p75: 1456 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9520904180836166 },
                { start: 100, end: 300, density: 0.026605321064212838 },
                { start: 300, density: 0.021304260852170534 },
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
        fcp: 1456,
        lcp: 2015,
        cls: "0.05",
        fid: 13,
      },
      timestamp: 1651488400997,
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
                  density: 0.915155910079768,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.0536620739666425,
                },
                { start: "0.25", density: 0.031182015953589565 },
              ],
              percentiles: { p75: "0.00" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5266568843237945 },
                { start: 1800, end: 3000, density: 0.2053069210075809 },
                { start: 3000, density: 0.2680361946686246 },
              ],
              percentiles: { p75: 3235 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.5936851105411015 },
                { start: 2500, end: 4000, density: 0.20355441553682652 },
                { start: 4000, density: 0.20276047392207197 },
              ],
              percentiles: { p75: 3606 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.ci/",
          normalizedUrl: "https://www.yara.ci",
        },
      },
      extractedResults: { fcp: 3235, lcp: 3606, cls: "0.00" },
      timestamp: 1651488401213,
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
                { start: 0, end: 2500, density: 0.8914608539146086 },
                { start: 2500, end: 4000, density: 0.08784121587841218 },
                { start: 4000, density: 0.020697930206979107 },
              ],
              percentiles: { p75: 1854 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8815118488151183,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.10108989101089891,
                },
                { start: "0.25", density: 0.017398260173982615 },
              ],
              percentiles: { p75: "0.02" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8714514194322271 },
                { start: 1800, end: 3000, density: 0.10425829668132752 },
                { start: 3000, density: 0.024290283886445274 },
              ],
              percentiles: { p75: 1429 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9784021597840217 },
                { start: 100, end: 300, density: 0.013898610138986104 },
                { start: 300, density: 0.007699230076992295 },
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
      extractedResults: {
        fcp: 1429,
        lcp: 1854,
        cls: "0.02",
        fid: 12,
      },
      timestamp: 1651488401542,
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
                  density: 0.8808119188081192,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.09249075092490751,
                },
                { start: "0.25", density: 0.0266973302669733 },
              ],
              percentiles: { p75: "0.01" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7934999999999995 },
                { start: 1800, end: 3000, density: 0.15029999999999988 },
                { start: 3000, density: 0.05620000000000054 },
              ],
              percentiles: { p75: 1674 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9622886866059818 },
                { start: 100, end: 300, density: 0.023707112133640094 },
                { start: 300, density: 0.014004201260378097 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8138558432470259 },
                { start: 2500, end: 4000, density: 0.13156053184044783 },
                { start: 4000, density: 0.054583624912526336 },
              ],
              percentiles: { p75: 2196 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.gr/",
          normalizedUrl: "https://www.yara.gr",
        },
      },
      extractedResults: {
        fcp: 1674,
        lcp: 2196,
        cls: "0.01",
        fid: 12,
      },
      timestamp: 1651488401771,
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
                  density: 0.9171965904478421,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.05587877147882561,
                },
                { start: "0.25", density: 0.02692463807333245 },
              ],
              percentiles: { p75: "0.00" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7029648859133762 },
                { start: 1800, end: 3000, density: 0.18322175160541054 },
                { start: 3000, density: 0.11381336248121311 },
              ],
              percentiles: { p75: 2029 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9305003427004797 },
                { start: 100, end: 300, density: 0.04331734064427689 },
                { start: 300, density: 0.026182316655243426 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7660300136425641 },
                { start: 2500, end: 4000, density: 0.14665757162346513 },
                { start: 4000, density: 0.08731241473397083 },
              ],
              percentiles: { p75: 2457 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.fr/",
          normalizedUrl: "https://www.yara.fr",
        },
      },
      extractedResults: {
        fcp: 2029,
        lcp: 2457,
        cls: "0.00",
        fid: 13,
      },
      timestamp: 1651488401988,
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
                { start: 0, end: 2500, density: 0.5663800859742062 },
                { start: 2500, end: 4000, density: 0.26117164850544766 },
                { start: 4000, density: 0.17244826552034626 },
              ],
              percentiles: { p75: 3404 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.7858785878587858,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.1255125512551255,
                },
                { start: "0.25", density: 0.08860886088608859 },
              ],
              percentiles: { p75: "0.08" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.4842999999999986 },
                { start: 1800, end: 3000, density: 0.2947999999999992 },
                { start: 3000, density: 0.22090000000000215 },
              ],
              percentiles: { p75: 2852 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9349869973994799 },
                { start: 100, end: 300, density: 0.031706341268253654 },
                { start: 300, density: 0.0333066613322664 },
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
        fcp: 2852,
        lcp: 3404,
        cls: "0.08",
        fid: 12,
      },
      timestamp: 1651488402298,
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
                  density: 0.9671327835544401,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.015178678140313137,
                },
                { start: "0.25", density: 0.017688538305246807 },
              ],
              percentiles: { p75: "0.00" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5561723180885711 },
                { start: 1800, end: 3000, density: 0.27814649450947204 },
                { start: 3000, density: 0.16568118740195673 },
              ],
              percentiles: { p75: 2487 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9467818682694715 },
                { start: 100, end: 300, density: 0.04244928625093914 },
                { start: 300, density: 0.010768845479589294 },
              ],
              percentiles: { p75: 14 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6949704498854172 },
                { start: 2500, end: 4000, density: 0.176818236642142 },
                { start: 4000, density: 0.12821131347244083 },
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
        fcp: 2487,
        lcp: 2794,
        cls: "0.00",
        fid: 14,
      },
      timestamp: 1651488402520,
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
                  density: 0.9537337662337662,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.03049628942486085,
                },
                { start: "0.25", density: 0.015769944341372903 },
              ],
              percentiles: { p75: "0.00" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7737567125846362 },
                { start: 1800, end: 3000, density: 0.1515293018911976 },
                { start: 3000, density: 0.07471398552416623 },
              ],
              percentiles: { p75: 1740 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9371607767458691 },
                { start: 100, end: 300, density: 0.028343987456277895 },
                { start: 300, density: 0.0344952357978531 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8218491313979246 },
                { start: 2500, end: 4000, density: 0.11915588201002679 },
                { start: 4000, density: 0.05899498659204858 },
              ],
              percentiles: { p75: 2131 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.ua/",
          normalizedUrl: "https://www.yara.ua",
        },
      },
      extractedResults: {
        fcp: 1740,
        lcp: 2131,
        cls: "0.00",
        fid: 13,
      },
      timestamp: 1651488402873,
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
                { start: 0, end: 100, density: 0.9531069827033951 },
                { start: 100, end: 300, density: 0.027162075592568856 },
                { start: 300, density: 0.019730941704035956 },
              ],
              percentiles: { p75: 16 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8925221799746514 },
                { start: 2500, end: 4000, density: 0.08681875792141952 },
                { start: 4000, density: 0.020659062103929038 },
              ],
              percentiles: { p75: 1863 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8944193061840121,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.07264957264957264,
                },
                { start: "0.25", density: 0.03293112116641529 },
              ],
              percentiles: { p75: "0.00" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.896250316696225 },
                { start: 1800, end: 3000, density: 0.08120091208512796 },
                { start: 3000, density: 0.022548771218647002 },
              ],
              percentiles: { p75: 1296 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yaraagri.cz/",
          normalizedUrl: "https://www.yaraagri.cz",
        },
      },
      extractedResults: {
        fcp: 1296,
        lcp: 1863,
        cls: "0.00",
        fid: 16,
      },
      timestamp: 1651488403204,
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
                { start: 0, end: 100, density: 0.9710913273982195 },
                { start: 100, end: 300, density: 0.023306992097629292 },
                { start: 300, density: 0.005601680504151255 },
              ],
              percentiles: { p75: 11 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6501450435130532 },
                { start: 2500, end: 4000, density: 0.22161648494548344 },
                { start: 4000, density: 0.12823847154146334 },
              ],
              percentiles: { p75: 3019 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9046904690469046,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.0653065306530653,
                },
                { start: "0.25", density: 0.030003000300030003 },
              ],
              percentiles: { p75: "0.03" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.539953995399539 },
                { start: 1800, end: 3000, density: 0.2952295229522947 },
                { start: 3000, density: 0.16481648164816626 },
              ],
              percentiles: { p75: 2545 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.pe/",
          normalizedUrl: "https://www.yara.com.pe",
        },
      },
      extractedResults: {
        fcp: 2545,
        lcp: 3019,
        cls: "0.03",
        fid: 11,
      },
      timestamp: 1651488403530,
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
                { start: 0, end: 1800, density: 0.7345 },
                { start: 1800, end: 3000, density: 0.17840000000000003 },
                { start: 3000, density: 0.08709999999999998 },
              ],
              percentiles: { p75: 1869 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9422942294229425 },
                { start: 100, end: 300, density: 0.034803480348034814 },
                { start: 300, density: 0.022902290229022706 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7781221877812214 },
                { start: 2500, end: 4000, density: 0.14928507149285056 },
                { start: 4000, density: 0.072592740725928 },
              ],
              percentiles: { p75: 2377 },
            },
            cumulative_layout_shift: {
              histogram: [
                { start: "0.00", end: "0.10", density: 0.8661 },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.07869999999999999,
                },
                { start: "0.25", density: 0.05520000000000001 },
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
        fcp: 1869,
        lcp: 2377,
        cls: "0.02",
        fid: 13,
      },
      timestamp: 1651488403752,
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
                  density: 0.9626219849014914,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.013073098876818266,
                },
                { start: "0.25", density: 0.024304916221690294 },
              ],
              percentiles: { p75: "0.00" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6285876132930512 },
                { start: 1800, end: 3000, density: 0.25547583081570996 },
                { start: 3000, density: 0.11593655589123879 },
              ],
              percentiles: { p75: 2397 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9451949054419142 },
                { start: 100, end: 300, density: 0.025472790428406028 },
                { start: 300, density: 0.029332304129679656 },
              ],
              percentiles: { p75: 14 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7004871650740117 },
                { start: 2500, end: 4000, density: 0.2011429642121042 },
                { start: 4000, density: 0.09836987071388427 },
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
        fcp: 2397,
        lcp: 2830,
        cls: "0.00",
        fid: 14,
      },
      timestamp: 1651488403969,
    },
    {
      url: "https://www.yara.ro/",
      deviceTargeted: "PHONE",
      results: {
        record: {
          key: { formFactor: "PHONE", origin: "https://www.yara.ro" },
          metrics: {
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9454941860465117 },
                { start: 100, end: 300, density: 0.029190891472868213 },
                { start: 300, density: 0.025314922480620138 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8330757341576502 },
                { start: 2500, end: 4000, density: 0.12317203661871348 },
                { start: 4000, density: 0.04375222922363626 },
              ],
              percentiles: { p75: 2141 },
            },
            cumulative_layout_shift: {
              histogram: [
                { start: "0.00", end: "0.10", density: 0.93391757460919 },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.05945049739459972,
                },
                { start: "0.25", density: 0.006631927996210322 },
              ],
              percentiles: { p75: "0.00" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8071615512729003 },
                { start: 1800, end: 3000, density: 0.1498929336188437 },
                { start: 3000, density: 0.0429455151082559 },
              ],
              percentiles: { p75: 1672 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.ro/",
          normalizedUrl: "https://www.yara.ro",
        },
      },
      extractedResults: {
        fcp: 1672,
        lcp: 2141,
        cls: "0.00",
        fid: 12,
      },
      timestamp: 1651488404299,
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
                  density: 0.9698909672901871,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.02000600180054016,
                },
                { start: "0.25", density: 0.010103030909272772 },
              ],
              percentiles: { p75: "0.00" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5256731057952151 },
                { start: 1800, end: 3000, density: 0.3424081673506153 },
                { start: 3000, density: 0.13191872685416967 },
              ],
              percentiles: { p75: 2450 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.922892289228923 },
                { start: 100, end: 300, density: 0.05050505050505051 },
                { start: 300, density: 0.02660266026602652 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.5995398159263701 },
                { start: 2500, end: 4000, density: 0.2885154061624647 },
                { start: 4000, density: 0.11194477791116524 },
              ],
              percentiles: { p75: 3126 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.hr/",
          normalizedUrl: "https://www.yara.hr",
        },
      },
      extractedResults: {
        fcp: 2450,
        lcp: 3126,
        cls: "0.00",
        fid: 13,
      },
      timestamp: 1651488404631,
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
                  density: 0.8694925373134329,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.10232835820895522,
                },
                { start: "0.25", density: 0.028179104477611933 },
              ],
              percentiles: { p75: "0.00" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.781765972720746 },
                { start: 1800, end: 3000, density: 0.15829145728643207 },
                { start: 3000, density: 0.05994256999282204 },
              ],
              percentiles: { p75: 1708 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9567015324738506 },
                { start: 100, end: 300, density: 0.02700072974945269 },
                { start: 300, density: 0.016297737776696644 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.820397652413463 },
                { start: 2500, end: 4000, density: 0.1286980476703797 },
                { start: 4000, density: 0.0509042999161573 },
              ],
              percentiles: { p75: 2172 },
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
        lcp: 2172,
        cls: "0.00",
        fid: 13,
      },
      timestamp: 1651488404911,
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
                  density: 0.7562999999999999,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.11559999999999998,
                },
                { start: "0.25", density: 0.12810000000000007 },
              ],
              percentiles: { p75: "0.09" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.632173565286943 },
                { start: 1800, end: 3000, density: 0.14647070585882835 },
                { start: 3000, density: 0.22135572885422863 },
              ],
              percentiles: { p75: 2740 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6520652065206524 },
                { start: 2500, end: 4000, density: 0.17231723172317243 },
                { start: 4000, density: 0.17561756175617516 },
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
      extractedResults: { fcp: 2740, lcp: 3170, cls: "0.09" },
      timestamp: 1651488405268,
    },
    {
      url: "https://www.yara.be/",
      deviceTargeted: "PHONE",
      results: {
        record: {
          key: { formFactor: "PHONE", origin: "https://www.yara.be" },
          metrics: {
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8566847063539786 },
                { start: 1800, end: 3000, density: 0.10422930446983363 },
                { start: 3000, density: 0.03908598917618771 },
              ],
              percentiles: { p75: 1506 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9347735770668882 },
                { start: 100, end: 300, density: 0.01890319900290818 },
                { start: 300, density: 0.04632322393020361 },
              ],
              percentiles: { p75: 14 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8570003988831272 },
                { start: 2500, end: 4000, density: 0.09373753490227366 },
                { start: 4000, density: 0.04926206621459908 },
              ],
              percentiles: { p75: 2059 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9386503067484663,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.035028695824262816,
                },
                { start: "0.25", density: 0.026320997427270922 },
              ],
              percentiles: { p75: "0.00" },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.be/",
          normalizedUrl: "https://www.yara.be",
        },
      },
      extractedResults: {
        fcp: 1506,
        lcp: 2059,
        cls: "0.00",
        fid: 14,
      },
      timestamp: 1651488405632,
    },
    {
      url: "https://www.yarabrasil.com.br/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "https://www.yarabrasil.com.br" },
          metrics: {
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.44290000000000246 },
                { start: 1800, end: 3000, density: 0.24590000000000145 },
                { start: 3000, density: 0.3111999999999961 },
              ],
              percentiles: { p75: 3464 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9012802560512098 },
                { start: 100, end: 300, density: 0.062212442488497666 },
                { start: 300, density: 0.0365073014602925 },
              ],
              percentiles: { p75: 17 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.4864432216108093 },
                { start: 2500, end: 4000, density: 0.2420210105052545 },
                { start: 4000, density: 0.2715357678839363 },
              ],
              percentiles: { p75: 4268 },
            },
            cumulative_layout_shift: {
              histogram: [
                { start: "0.00", end: "0.10", density: 0.8677 },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.09539999999999998,
                },
                { start: "0.25", density: 0.03690000000000003 },
              ],
              percentiles: { p75: "0.03" },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yarabrasil.com.br/",
          normalizedUrl: "https://www.yarabrasil.com.br",
        },
      },
      extractedResults: {
        fcp: 3464,
        lcp: 4268,
        cls: "0.03",
        fid: 17,
      },
      timestamp: 1651488406011,
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
                  density: 0.9209443748882131,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.048291897692720444,
                },
                { start: "0.25", density: 0.030763727419066342 },
              ],
              percentiles: { p75: "0.00" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6574514829732695 },
                { start: 1800, end: 3000, density: 0.20688392530208713 },
                { start: 3000, density: 0.13566459172464354 },
              ],
              percentiles: { p75: 2243 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9620302970686603 },
                { start: 100, end: 300, density: 0.02675585284280936 },
                { start: 300, density: 0.011213850088530401 },
              ],
              percentiles: { p75: 14 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7189721159103332 },
                { start: 2500, end: 4000, density: 0.17368325132130483 },
                { start: 4000, density: 0.10734463276836204 },
              ],
              percentiles: { p75: 2692 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com/",
          normalizedUrl: "https://www.yara.com",
        },
      },
      extractedResults: {
        fcp: 2243,
        lcp: 2692,
        cls: "0.00",
        fid: 14,
      },
      timestamp: 1651488406245,
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
                  density: 0.9554114308877178,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.025131738954195376,
                },
                { start: "0.25", density: 0.019456830158086736 },
              ],
              percentiles: { p75: "0.00" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8492951907131012 },
                { start: 1800, end: 3000, density: 0.11712271973466004 },
                { start: 3000, density: 0.03358208955223874 },
              ],
              percentiles: { p75: 1486 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9349545274812178 },
                { start: 100, end: 300, density: 0.03281929616449189 },
                { start: 300, density: 0.0322261763542903 },
              ],
              percentiles: { p75: 15 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8470868753887622 },
                { start: 2500, end: 4000, density: 0.11642131453452212 },
                { start: 4000, density: 0.036491810076715724 },
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
      timestamp: 1651488406624,
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
                { start: 0, end: 100, density: 0.9619855052645973 },
                { start: 100, end: 300, density: 0.02543415834814713 },
                { start: 300, density: 0.01258033638725554 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7413997627520763 },
                { start: 2500, end: 4000, density: 0.1577698695136418 },
                { start: 4000, density: 0.100830367734282 },
              ],
              percentiles: { p75: 2569 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9639228965876531,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.012893982808022923,
                },
                { start: "0.25", density: 0.023183120604324065 },
              ],
              percentiles: { p75: "0.00" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6408163265306107 },
                { start: 1800, end: 3000, density: 0.23186306780776772 },
                { start: 3000, density: 0.12732060566162148 },
              ],
              percentiles: { p75: 2178 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.gt/",
          normalizedUrl: "https://www.yara.com.gt",
        },
      },
      extractedResults: {
        fcp: 2178,
        lcp: 2569,
        cls: "0.00",
        fid: 13,
      },
      timestamp: 1651488406988,
    },
    {
      url: "https://www.yara.com.gh/",
      deviceTargeted: "PHONE",
      results: {
        record: {
          key: { formFactor: "PHONE", origin: "https://www.yara.com.gh" },
          metrics: {
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9643 },
                { start: 100, end: 300, density: 0.0204 },
                { start: 300, density: 0.015300000000000012 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6301869813018679 },
                { start: 2500, end: 4000, density: 0.1806319368063188 },
                { start: 4000, density: 0.18918108189181335 },
              ],
              percentiles: { p75: 3389 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9148999999999999,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.05639999999999999,
                },
                { start: "0.25", density: 0.028699999999999986 },
              ],
              percentiles: { p75: "0.00" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6051210242048398 },
                { start: 1800, end: 3000, density: 0.1504300860172032 },
                { start: 3000, density: 0.2444488897779571 },
              ],
              percentiles: { p75: 2985 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.gh/",
          normalizedUrl: "https://www.yara.com.gh",
        },
      },
      extractedResults: {
        fcp: 2985,
        lcp: 3389,
        cls: "0.00",
        fid: 13,
      },
      timestamp: 1651488407369,
    },
    {
      url: "https://www.yara.com.pa/",
      deviceTargeted: "PHONE",
      results: {
        record: {
          key: { formFactor: "PHONE", origin: "https://www.yara.com.pa" },
          metrics: {
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.974015748031496 },
                { start: 100, end: 300, density: 0.01850393700787402 },
                { start: 300, density: 0.007480314960629921 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.738669769720725 },
                { start: 2500, end: 4000, density: 0.1573370896619304 },
                { start: 4000, density: 0.10399314061734474 },
              ],
              percentiles: { p75: 2573 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9642028100183263,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.017348808796579112,
                },
                { start: "0.25", density: 0.018448381185094686 },
              ],
              percentiles: { p75: "0.00" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6232273838630804 },
                { start: 1800, end: 3000, density: 0.24963325183374072 },
                { start: 3000, density: 0.12713936430317893 },
              ],
              percentiles: { p75: 2185 },
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
        lcp: 2573,
        cls: "0.00",
        fid: 12,
      },
      timestamp: 1651488407733,
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
                { start: 0, end: 100, density: 0.956527314696076 },
                { start: 100, end: 300, density: 0.036932546806873565 },
                { start: 300, density: 0.006540138497050526 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.655451991828397 },
                { start: 2500, end: 4000, density: 0.18660623084780403 },
                { start: 4000, density: 0.15794177732379902 },
              ],
              percentiles: { p75: 3099 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9395125647177675,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.030938249779012505,
                },
                { start: "0.25", density: 0.02954918550322011 },
              ],
              percentiles: { p75: "0.00" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5843674043750806 },
                { start: 1800, end: 3000, density: 0.23180248177050053 },
                { start: 3000, density: 0.1838301138544188 },
              ],
              percentiles: { p75: 2522 },
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
        lcp: 3099,
        cls: "0.00",
        fid: 12,
      },
      timestamp: 1651488408108,
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
                  density: 0.9801557397638784,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.005400653102235619,
                },
                { start: "0.25", density: 0.01444360713388597 },
              ],
              percentiles: { p75: "0.00" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8091988880464994 },
                { start: 1800, end: 3000, density: 0.12345211018448315 },
                { start: 3000, density: 0.0673490017690175 },
              ],
              percentiles: { p75: 1585 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9514329190971342 },
                { start: 100, end: 300, density: 0.034237889931524226 },
                { start: 300, density: 0.014329190971341568 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8387035392617024 },
                { start: 2500, end: 4000, density: 0.1061144234428517 },
                { start: 4000, density: 0.055182037295445865 },
              ],
              percentiles: { p75: 2032 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.pt/",
          normalizedUrl: "https://www.yara.pt",
        },
      },
      extractedResults: {
        fcp: 1585,
        lcp: 2032,
        cls: "0.00",
        fid: 12,
      },
      timestamp: 1651488408485,
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
                { start: 0, end: 100, density: 0.942840023966447 },
                { start: 100, end: 300, density: 0.0353505092869982 },
                { start: 300, density: 0.021809466746554904 },
              ],
              percentiles: { p75: 14 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6848388614443656 },
                { start: 2500, end: 4000, density: 0.17613502705245818 },
                { start: 4000, density: 0.13902611150317615 },
              ],
              percentiles: { p75: 2939 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9375657663977551,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.02057757511984099,
                },
                { start: "0.25", density: 0.041856658482403816 },
              ],
              percentiles: { p75: "0.00" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5956971549494462 },
                { start: 1800, end: 3000, density: 0.22795673642134917 },
                { start: 3000, density: 0.17634610862920458 },
              ],
              percentiles: { p75: 2518 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.co/",
          normalizedUrl: "https://www.yara.com.co",
        },
      },
      extractedResults: {
        fcp: 2518,
        lcp: 2939,
        cls: "0.00",
        fid: 14,
      },
      timestamp: 1651488408871,
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
                  density: 0.9626219849014914,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.013073098876818266,
                },
                { start: "0.25", density: 0.024304916221690294 },
              ],
              percentiles: { p75: "0.00" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6285876132930512 },
                { start: 1800, end: 3000, density: 0.25547583081570996 },
                { start: 3000, density: 0.11593655589123879 },
              ],
              percentiles: { p75: 2397 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9451949054419142 },
                { start: 100, end: 300, density: 0.025472790428406028 },
                { start: 300, density: 0.029332304129679656 },
              ],
              percentiles: { p75: 14 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7004871650740117 },
                { start: 2500, end: 4000, density: 0.2011429642121042 },
                { start: 4000, density: 0.09836987071388427 },
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
        fcp: 2397,
        lcp: 2830,
        cls: "0.00",
        fid: 14,
      },
      timestamp: 1651488409287,
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
                { start: 0, end: 1800, density: 0.5771612288640157 },
                { start: 1800, end: 3000, density: 0.2526792093355563 },
                { start: 3000, density: 0.1701595618004282 },
              ],
              percentiles: { p75: 2567 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9528186274509804 },
                { start: 100, end: 300, density: 0.025367647058823533 },
                { start: 300, density: 0.021813725490196022 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6747167561121049 },
                { start: 2500, end: 4000, density: 0.2168753726893261 },
                { start: 4000, density: 0.10840787119856907 },
              ],
              percentiles: { p75: 2890 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9697613985353176,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.01594613749114103,
                },
                { start: "0.25", density: 0.014292463973541223 },
              ],
              percentiles: { p75: "0.00" },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.ru/",
          normalizedUrl: "https://www.yara.ru",
        },
      },
      extractedResults: {
        fcp: 2567,
        lcp: 2890,
        cls: "0.00",
        fid: 12,
      },
      timestamp: 1651488409703,
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
                { start: 0, end: 1800, density: 0.5534246575342467 },
                { start: 1800, end: 3000, density: 0.31027397260273987 },
                { start: 3000, density: 0.1363013698630135 },
              ],
              percentiles: { p75: 2634 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9740227610094013 },
                { start: 100, end: 300, density: 0.019544779811974274 },
                { start: 300, density: 0.006432459178624443 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6467900388393879 },
                { start: 2500, end: 4000, density: 0.26799177518848516 },
                { start: 4000, density: 0.08521818597212699 },
              ],
              percentiles: { p75: 2924 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9556905083220874,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.024966261808367075,
                },
                { start: "0.25", density: 0.01934322986954566 },
              ],
              percentiles: { p75: "0.00" },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.co.nz/",
          normalizedUrl: "https://www.yara.co.nz",
        },
      },
      extractedResults: {
        fcp: 2634,
        lcp: 2924,
        cls: "0.00",
        fid: 12,
      },
      timestamp: 1651488410152,
    },
    {
      url: "https://www.yara.ma/",
      deviceTargeted: "PHONE",
      results: {
        record: {
          key: { formFactor: "PHONE", origin: "https://www.yara.ma" },
          metrics: {
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9179085627683758,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.0612528416266734,
                },
                { start: "0.25", density: 0.020838595604950754 },
              ],
              percentiles: { p75: "0.00" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7939782190903267 },
                { start: 1800, end: 3000, density: 0.15310698270339523 },
                { start: 3000, density: 0.052914798206277994 },
              ],
              percentiles: { p75: 1762 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8456687898089171 },
                { start: 2500, end: 4000, density: 0.10044585987261143 },
                { start: 4000, density: 0.05388535031847147 },
              ],
              percentiles: { p75: 2098 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.ma/",
          normalizedUrl: "https://www.yara.ma",
        },
      },
      extractedResults: { fcp: 1762, lcp: 2098, cls: "0.00" },
      timestamp: 1651488410568,
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
                  density: 0.7562999999999999,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.11559999999999998,
                },
                { start: "0.25", density: 0.12810000000000007 },
              ],
              percentiles: { p75: "0.09" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.632173565286943 },
                { start: 1800, end: 3000, density: 0.14647070585882835 },
                { start: 3000, density: 0.22135572885422863 },
              ],
              percentiles: { p75: 2740 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6520652065206524 },
                { start: 2500, end: 4000, density: 0.17231723172317243 },
                { start: 4000, density: 0.17561756175617516 },
              ],
              percentiles: { p75: 3170 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.cm/",
          normalizedUrl: "https://www.yara.cm",
        },
      },
      extractedResults: { fcp: 2740, lcp: 3170, cls: "0.09" },
      timestamp: 1651488410986,
    },
    {
      url: "https://www.yara.no/",
      deviceTargeted: "PHONE",
      results: {
        record: {
          key: { formFactor: "PHONE", origin: "https://www.yara.no" },
          metrics: {
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9385085782232038 },
                { start: 100, end: 300, density: 0.029047052828265675 },
                { start: 300, density: 0.032444368948530554 },
              ],
              percentiles: { p75: 14 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.9216948019388268 },
                { start: 2500, end: 4000, density: 0.06393113822497073 },
                { start: 4000, density: 0.014374059836202536 },
              ],
              percentiles: { p75: 1678 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9312047399605003,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.04213298222514813,
                },
                { start: "0.25", density: 0.02666227781435155 },
              ],
              percentiles: { p75: "0.00" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.928715874620829 },
                { start: 1800, end: 3000, density: 0.05392652510953825 },
                { start: 3000, density: 0.01735760026963258 },
              ],
              percentiles: { p75: 1274 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.no/",
          normalizedUrl: "https://www.yara.no",
        },
      },
      extractedResults: {
        fcp: 1274,
        lcp: 1678,
        cls: "0.00",
        fid: 14,
      },
      timestamp: 1651488411455,
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
                  density: 0.9336933693369337,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.036403640364036406,
                },
                { start: "0.25", density: 0.029902990299029895 },
              ],
              percentiles: { p75: "0.01" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8627862786278622 },
                { start: 1800, end: 3000, density: 0.09240924092409236 },
                { start: 3000, density: 0.04480448044804547 },
              ],
              percentiles: { p75: 1406 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9524904980996199 },
                { start: 100, end: 300, density: 0.024004800960192037 },
                { start: 300, density: 0.02350470094018806 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8771499999999997 },
                { start: 2500, end: 4000, density: 0.08554999999999995 },
                { start: 4000, density: 0.03730000000000043 },
              ],
              percentiles: { p75: 1823 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.it/",
          normalizedUrl: "https://www.yara.it",
        },
      },
      extractedResults: {
        fcp: 1406,
        lcp: 1823,
        cls: "0.01",
        fid: 12,
      },
      timestamp: 1651488411886,
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
                { start: "0.00", end: "0.10", density: 0.9445 },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.040499999999999994,
                },
                { start: "0.25", density: 0.015000000000000003 },
              ],
              percentiles: { p75: "0.04" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.913991399139914 },
                { start: 1800, end: 3000, density: 0.06830683068306831 },
                { start: 3000, density: 0.017701770177017722 },
              ],
              percentiles: { p75: 1263 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9795061481555534 },
                { start: 100, end: 300, density: 0.01469559132260322 },
                { start: 300, density: 0.005798260521843448 },
              ],
              percentiles: { p75: 9 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.9185162967406518 },
                { start: 2500, end: 4000, density: 0.058888222355528874 },
                { start: 4000, density: 0.022595480903819257 },
              ],
              percentiles: { p75: 1758 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.ee/",
          normalizedUrl: "https://www.yara.ee",
        },
      },
      extractedResults: { fcp: 1263, lcp: 1758, cls: "0.04", fid: 9 },
      timestamp: 1651488412233,
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
                  density: 0.9391060893910608,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.042195780421957804,
                },
                { start: "0.25", density: 0.018698130186981313 },
              ],
              percentiles: { p75: "0.00" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5875999999999991 },
                { start: 1800, end: 3000, density: 0.2600999999999996 },
                { start: 3000, density: 0.1523000000000012 },
              ],
              percentiles: { p75: 2384 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9539046095390462 },
                { start: 100, end: 300, density: 0.03449655034496551 },
                { start: 300, density: 0.011598840115988407 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6891689168916882 },
                { start: 2500, end: 4000, density: 0.17551755175517533 },
                { start: 4000, density: 0.13531353135313662 },
              ],
              percentiles: { p75: 2834 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.cr/",
          normalizedUrl: "https://www.yara.cr",
        },
      },
      extractedResults: {
        fcp: 2384,
        lcp: 2834,
        cls: "0.00",
        fid: 12,
      },
      timestamp: 1651488412554,
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
                { start: "0.00", end: "0.10", density: 0.8914 },
                { start: "0.10", end: "0.25", density: 0.0914 },
                { start: "0.25", density: 0.01720000000000001 },
              ],
              percentiles: { p75: "0.02" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8238 },
                { start: 1800, end: 3000, density: 0.13529999999999995 },
                { start: 3000, density: 0.04090000000000015 },
              ],
              percentiles: { p75: 1611 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9543182726909237 },
                { start: 100, end: 300, density: 0.02409036385445822 },
                { start: 300, density: 0.021591363454618144 },
              ],
              percentiles: { p75: 11 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8381676335267046 },
                { start: 2500, end: 4000, density: 0.11882376475295049 },
                { start: 4000, density: 0.04300860172034488 },
              ],
              percentiles: { p75: 2119 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.ro/",
          normalizedUrl: "https://www.yara.ro",
        },
      },
      extractedResults: {
        fcp: 1611,
        lcp: 2119,
        cls: "0.02",
        fid: 11,
      },
      timestamp: 1651488412861,
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
                  density: 0.8873999999999999,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.061299999999999986,
                },
                { start: "0.25", density: 0.05130000000000004 },
              ],
              percentiles: { p75: "0.01" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6201480592236887 },
                { start: 1800, end: 3000, density: 0.21798719487795096 },
                { start: 3000, density: 0.16186474589836025 },
              ],
              percentiles: { p75: 2415 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9505950595059505 },
                { start: 100, end: 300, density: 0.030603060306030598 },
                { start: 300, density: 0.018801880188018878 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6948999999999984 },
                { start: 2500, end: 4000, density: 0.16899999999999968 },
                { start: 4000, density: 0.13610000000000186 },
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
        fcp: 2415,
        lcp: 2901,
        cls: "0.01",
        fid: 12,
      },
      timestamp: 1651488413156,
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
                  density: 0.9081908190819082,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.07490749074907489,
                },
                { start: "0.25", density: 0.016901690169016898 },
              ],
              percentiles: { p75: "0.01" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7908999999999994 },
                { start: 1800, end: 3000, density: 0.14009999999999997 },
                { start: 3000, density: 0.06900000000000066 },
              ],
              percentiles: { p75: 1683 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9469212315073969 },
                { start: 100, end: 300, density: 0.024090363854458216 },
                { start: 300, density: 0.02898840463814474 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8253976192857858 },
                { start: 2500, end: 4000, density: 0.11788536560968287 },
                { start: 4000, density: 0.056717015104531365 },
              ],
              percentiles: { p75: 2122 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.ua/",
          normalizedUrl: "https://www.yara.ua",
        },
      },
      extractedResults: {
        fcp: 1683,
        lcp: 2122,
        cls: "0.01",
        fid: 12,
      },
      timestamp: 1651488413439,
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
                  density: 0.7859999999999999,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.18250000000000002,
                },
                { start: "0.25", density: 0.03150000000000001 },
              ],
              percentiles: { p75: "0.08" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8089808980898091 },
                { start: 1800, end: 3000, density: 0.13851385138513855 },
                { start: 3000, density: 0.05250525052505245 },
              ],
              percentiles: { p75: 1621 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9504999999999999 },
                { start: 100, end: 300, density: 0.028899999999999995 },
                { start: 300, density: 0.020600000000000052 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8317499999999999 },
                { start: 2500, end: 4000, density: 0.11935000000000001 },
                { start: 4000, density: 0.04890000000000016 },
              ],
              percentiles: { p75: 2095 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.pl/",
          normalizedUrl: "https://www.yara.pl",
        },
      },
      extractedResults: {
        fcp: 1621,
        lcp: 2095,
        cls: "0.08",
        fid: 12,
      },
      timestamp: 1651488413716,
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
                { start: 0, end: 100, density: 0.969003099690031 },
                { start: 100, end: 300, density: 0.014798520147985201 },
                { start: 300, density: 0.016198380161983883 },
              ],
              percentiles: { p75: 11 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.9067500000000001 },
                { start: 2500, end: 4000, density: 0.07445000000000003 },
                { start: 4000, density: 0.018799999999999976 },
              ],
              percentiles: { p75: 1758 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8465153484651535,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.11998800119988001,
                },
                { start: "0.25", density: 0.033496650334966425 },
              ],
              percentiles: { p75: "0.05" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.9213 },
                { start: 1800, end: 3000, density: 0.0642 },
                { start: 3000, density: 0.014500000000000044 },
              ],
              percentiles: { p75: 1268 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.se/",
          normalizedUrl: "https://www.yara.se",
        },
      },
      extractedResults: {
        fcp: 1268,
        lcp: 1758,
        cls: "0.05",
        fid: 11,
      },
      timestamp: 1651488413992,
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
                  density: 0.9416806979947957,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.040410225011480186,
                },
                { start: "0.25", density: 0.01790907699372418 },
              ],
              percentiles: { p75: "0.00" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.9107476635514019 },
                { start: 1800, end: 3000, density: 0.07492211838006231 },
                { start: 3000, density: 0.0143302180685358 },
              ],
              percentiles: { p75: 1352 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9565983344010248 },
                { start: 100, end: 300, density: 0.02130044843049327 },
                { start: 300, density: 0.022101217168481808 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.9156458365638083 },
                { start: 2500, end: 4000, density: 0.06915800899364243 },
                { start: 4000, density: 0.015196154442549308 },
              ],
              percentiles: { p75: 1756 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.se/",
          normalizedUrl: "https://www.yara.se",
        },
      },
      extractedResults: {
        fcp: 1352,
        lcp: 1756,
        cls: "0.00",
        fid: 13,
      },
      timestamp: 1651488414298,
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
                  density: 0.7719771977197719,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.1771177117711771,
                },
                { start: "0.25", density: 0.05090509050905088 },
              ],
              percentiles: { p75: "0.08" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8938999999999999 },
                { start: 1800, end: 3000, density: 0.07460000000000001 },
                { start: 3000, density: 0.03150000000000007 },
              ],
              percentiles: { p75: 1273 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9653930786157232 },
                { start: 100, end: 300, density: 0.017903580716143237 },
                { start: 300, density: 0.016703340668133684 },
              ],
              percentiles: { p75: 10 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.871624324864973 },
                { start: 2500, end: 4000, density: 0.08936787357471494 },
                { start: 4000, density: 0.03900780156031211 },
              ],
              percentiles: { p75: 1893 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.nl/",
          normalizedUrl: "https://www.yara.nl",
        },
      },
      extractedResults: {
        fcp: 1273,
        lcp: 1893,
        cls: "0.08",
        fid: 10,
      },
      timestamp: 1651488414782,
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
                  density: 0.8101810181018103,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.1389138913891389,
                },
                { start: "0.25", density: 0.050905090509050926 },
              ],
              percentiles: { p75: "0.06" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8845 },
                { start: 1800, end: 3000, density: 0.09040000000000001 },
                { start: 3000, density: 0.025099999999999904 },
              ],
              percentiles: { p75: 1384 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9667933586717342 },
                { start: 100, end: 300, density: 0.016703340668133625 },
                { start: 300, density: 0.016503300660131993 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8473652634736527 },
                { start: 2500, end: 4000, density: 0.121037896210379 },
                { start: 4000, density: 0.03159684031596839 },
              ],
              percentiles: { p75: 2034 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.fi/",
          normalizedUrl: "https://www.yara.fi",
        },
      },
      extractedResults: {
        fcp: 1384,
        lcp: 2034,
        cls: "0.06",
        fid: 13,
      },
      timestamp: 1651488415102,
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
                  density: 0.8760123987601239,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.0888911108889111,
                },
                { start: "0.25", density: 0.035096490350964904 },
              ],
              percentiles: { p75: "0.03" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.9076723016905073 },
                { start: 1800, end: 3000, density: 0.07142142642792838 },
                { start: 3000, density: 0.02090627188156441 },
              ],
              percentiles: { p75: 1239 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9621037896210378 },
                { start: 100, end: 300, density: 0.021697830216978294 },
                { start: 300, density: 0.016198380161983803 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.9018098190180982 },
                { start: 2500, end: 4000, density: 0.0793920607939206 },
                { start: 4000, density: 0.018798120187981295 },
              ],
              percentiles: { p75: 1798 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yaraagri.cz/",
          normalizedUrl: "https://www.yaraagri.cz",
        },
      },
      extractedResults: {
        fcp: 1239,
        lcp: 1798,
        cls: "0.03",
        fid: 13,
      },
      timestamp: 1651488415493,
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
                  density: 0.9042689310224497,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.08026055600790974,
                },
                { start: "0.25", density: 0.015470512969640563 },
              ],
              percentiles: { p75: "0.00" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8638064063595979 },
                { start: 1800, end: 3000, density: 0.11094224924012165 },
                { start: 3000, density: 0.02525134440028038 },
              ],
              percentiles: { p75: 1467 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9749053030303031 },
                { start: 100, end: 300, density: 0.015980113636363636 },
                { start: 300, density: 0.009114583333333327 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8918619563950101 },
                { start: 2500, end: 4000, density: 0.0873848665034394 },
                { start: 4000, density: 0.020753177101550408 },
              ],
              percentiles: { p75: 1830 },
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
        lcp: 1830,
        cls: "0.00",
        fid: 13,
      },
      timestamp: 1651488415902,
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
                  density: 0.9532546963739624,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.023445463812436288,
                },
                { start: "0.25", density: 0.023299839813601293 },
              ],
              percentiles: { p75: "0.00" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5961794757885374 },
                { start: 1800, end: 3000, density: 0.20924033762772057 },
                { start: 3000, density: 0.1945801865837421 },
              ],
              percentiles: { p75: 2670 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9484644194756554 },
                { start: 100, end: 300, density: 0.03775280898876404 },
                { start: 300, density: 0.013782771535580532 },
              ],
              percentiles: { p75: 14 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6671340023612754 },
                { start: 2500, end: 4000, density: 0.20461924439197177 },
                { start: 4000, density: 0.1282467532467529 },
              ],
              percentiles: { p75: 2994 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.au/",
          normalizedUrl: "https://www.yara.com.au",
        },
      },
      extractedResults: {
        fcp: 2670,
        lcp: 2994,
        cls: "0.00",
        fid: 14,
      },
      timestamp: 1651488416496,
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
                { start: 0, end: 2500, density: 0.5822333685322074 },
                { start: 2500, end: 4000, density: 0.2988384371700108 },
                { start: 4000, density: 0.11892819429778173 },
              ],
              percentiles: { p75: 3014 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9480094290204295,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.024620220010476687,
                },
                { start: "0.25", density: 0.027370350969093758 },
              ],
              percentiles: { p75: "0.00" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.48540097767208434 },
                { start: 1800, end: 3000, density: 0.3630598493856526 },
                { start: 3000, density: 0.15153917294226305 },
              ],
              percentiles: { p75: 2622 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9277640639210082 },
                { start: 100, end: 300, density: 0.02377549694686241 },
                { start: 300, density: 0.04846043913212934 },
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
        fcp: 2622,
        lcp: 3014,
        cls: "0.00",
        fid: 14,
      },
      timestamp: 1651488417231,
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
                  density: 0.9316931693169317,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.05750575057505751,
                },
                { start: "0.25", density: 0.010801080108010798 },
              ],
              percentiles: { p75: "0.02" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.846815318468153 },
                { start: 1800, end: 3000, density: 0.12618738126187382 },
                { start: 3000, density: 0.02699730026997303 },
              ],
              percentiles: { p75: 1552 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.972097209720972 },
                { start: 100, end: 300, density: 0.017501750175017497 },
                { start: 300, density: 0.0104010401040104 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8473152684731524 },
                { start: 2500, end: 4000, density: 0.12328767123287669 },
                { start: 4000, density: 0.02939706029397088 },
              ],
              percentiles: { p75: 2095 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.lv/",
          normalizedUrl: "https://www.yara.lv",
        },
      },
      extractedResults: {
        fcp: 1552,
        lcp: 2095,
        cls: "0.02",
        fid: 12,
      },
      timestamp: 1651488417738,
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
                  density: 0.9784333445077663,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.011397921555481062,
                },
                { start: "0.25", density: 0.010168733936752713 },
              ],
              percentiles: { p75: "0.00" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5122250753600529 },
                { start: 1800, end: 3000, density: 0.35424807413196335 },
                { start: 3000, density: 0.13352685050798374 },
              ],
              percentiles: { p75: 2464 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9200586311872816 },
                { start: 100, end: 300, density: 0.05220430713721951 },
                { start: 300, density: 0.027737061675498942 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.5927672955974839 },
                { start: 2500, end: 4000, density: 0.29728212039532764 },
                { start: 4000, density: 0.10995058400718846 },
              ],
              percentiles: { p75: 3133 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.hr/",
          normalizedUrl: "https://www.yara.hr",
        },
      },
      extractedResults: {
        fcp: 2464,
        lcp: 3133,
        cls: "0.00",
        fid: 13,
      },
      timestamp: 1651488418053,
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
                  density: 0.9266073392660734,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.0435956404359564,
                },
                { start: "0.25", density: 0.029797020297970194 },
              ],
              percentiles: { p75: "0.01" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6872687268726869 },
                { start: 1800, end: 3000, density: 0.20272027202720264 },
                { start: 3000, density: 0.1100110011001103 },
              ],
              percentiles: { p75: 2040 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9663 },
                { start: 100, end: 300, density: 0.0212 },
                { start: 300, density: 0.012500000000000004 },
              ],
              percentiles: { p75: 11 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7509749025097487 },
                { start: 2500, end: 4000, density: 0.1471352864713528 },
                { start: 4000, density: 0.10188981101889834 },
              ],
              percentiles: { p75: 2546 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.gt/",
          normalizedUrl: "https://www.yara.com.gt",
        },
      },
      extractedResults: {
        fcp: 2040,
        lcp: 2546,
        cls: "0.01",
        fid: 11,
      },
      timestamp: 1651488418517,
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
                { start: 0, end: 1800, density: 0.8800999999999999 },
                { start: 1800, end: 3000, density: 0.0894 },
                { start: 3000, density: 0.030499999999999937 },
              ],
              percentiles: { p75: 1360 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9650174912543729 },
                { start: 100, end: 300, density: 0.024487756121939038 },
                { start: 300, density: 0.010494752623688154 },
              ],
              percentiles: { p75: 10 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8872725454909018 },
                { start: 2500, end: 4000, density: 0.08793241351729657 },
                { start: 4000, density: 0.024795040991801562 },
              ],
              percentiles: { p75: 1889 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8546999999999999,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.12029999999999998,
                },
                { start: "0.25", density: 0.02500000000000001 },
              ],
              percentiles: { p75: "0.05" },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.dk/",
          normalizedUrl: "https://www.yara.dk",
        },
      },
      extractedResults: {
        fcp: 1360,
        lcp: 1889,
        cls: "0.05",
        fid: 10,
      },
      timestamp: 1651488418858,
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
                  density: 0.8943018703784253,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.07119037262577932,
                },
                { start: "0.25", density: 0.03450775699579526 },
              ],
              percentiles: { p75: "0.01" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8670895412302703 },
                { start: 1800, end: 3000, density: 0.10414515415252991 },
                { start: 3000, density: 0.028765304617199866 },
              ],
              percentiles: { p75: 1438 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.956750438340152 },
                { start: 100, end: 300, density: 0.021186440677966104 },
                { start: 300, density: 0.022063120981881894 },
              ],
              percentiles: { p75: 15 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8420704845814978 },
                { start: 2500, end: 4000, density: 0.12635829662261377 },
                { start: 4000, density: 0.0315712187958883 },
              ],
              percentiles: { p75: 2067 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.fi/",
          normalizedUrl: "https://www.yara.fi",
        },
      },
      extractedResults: {
        fcp: 1438,
        lcp: 2067,
        cls: "0.01",
        fid: 15,
      },
      timestamp: 1651488419168,
    },
    {
      url: "https://www.yara.hu/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "https://www.yara.hu" },
          metrics: {
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8460461861441568 },
                { start: 1800, end: 3000, density: 0.11886434069779069 },
                { start: 3000, density: 0.03508947315805247 },
              ],
              percentiles: { p75: 1532 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9683968396839684 },
                { start: 100, end: 300, density: 0.0195019501950195 },
                { start: 300, density: 0.012101210121012111 },
              ],
              percentiles: { p75: 11 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8635636436356365 },
                { start: 2500, end: 4000, density: 0.1047395260473953 },
                { start: 4000, density: 0.0316968303169682 },
              ],
              percentiles: { p75: 1976 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9501049895010499,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.0377962203779622,
                },
                { start: "0.25", density: 0.012098790120987886 },
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
        fcp: 1532,
        lcp: 1976,
        cls: "0.01",
        fid: 11,
      },
      timestamp: 1651488419639,
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
                  density: 0.9166916691669168,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.04880488048804882,
                },
                { start: "0.25", density: 0.0345034503450345 },
              ],
              percentiles: { p75: "0.01" },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5699720111955215 },
                { start: 1800, end: 3000, density: 0.19252299080367843 },
                { start: 3000, density: 0.23750499800079997 },
              ],
              percentiles: { p75: 3037 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6198880111988807 },
                { start: 2500, end: 4000, density: 0.1868313168683134 },
                { start: 4000, density: 0.193280671932806 },
              ],
              percentiles: { p75: 3583 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.ci/",
          normalizedUrl: "https://www.yara.ci",
        },
      },
      extractedResults: { fcp: 3037, lcp: 3583, cls: "0.01" },
      timestamp: 1651488419949,
    },
  ],
};
