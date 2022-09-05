export const audit21 = {
  date: "2022-05-09T17:32:41.713Z",
  dateParsedLocale: "09/05/2022",
  legacyAudit: true,
  legacyAuditType: 4,
  legacyAuditId: "09/05/2022-legacy-audit",
  audits: [
    {
      url: "https://www.yara.com/",
      deviceTargeted: "PHONE",
      results: {
        record: {
          key: { formFactor: "PHONE", origin: "https://www.yara.com" },
          metrics: {
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6763312488156147 },
                { start: 200, end: 500, density: 0.2207693765397005 },
                { start: 500, density: 0.10289937464468488 },
              ],
              percentiles: { p75: 238 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.5085462231207498 },
                { start: 800, end: 1800, density: 0.36610917110825203 },
                { start: 1800, density: 0.12534460577099815 },
              ],
              percentiles: { p75: 1317 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6604224058769516 },
                { start: 1800, end: 3000, density: 0.2049586776859505 },
                { start: 3000, density: 0.13461891643709795 },
              ],
              percentiles: { p75: 2223 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9616525004941688 },
                { start: 100, end: 300, density: 0.026092113065823284 },
                { start: 300, density: 0.0122553864400079 },
              ],
              percentiles: { p75: 14 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7265811182401462 },
                { start: 2500, end: 4000, density: 0.1722273143904673 },
                { start: 4000, density: 0.10119156736938653 },
              ],
              percentiles: { p75: 2662 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9232985235866042,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.048613611811307154,
                },
                { start: "0.25", density: 0.028087864602088595 },
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
        fcp: 2223,
        lcp: 2662,
        cls: "0.00",
        fid: 14,
      },
      timestamp: 1652117524718,
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
                { start: 0, end: 2500, density: 0.6051388732711113 },
                { start: 2500, end: 4000, density: 0.2934330372202852 },
                { start: 4000, density: 0.10142808950860345 },
              ],
              percentiles: { p75: 3066 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9769006503700381,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.011773940345368916,
                },
                { start: "0.25", density: 0.011325409284592967 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5722265668640376 },
                { start: 200, end: 500, density: 0.3297955535694337 },
                { start: 500, density: 0.09797787956652873 },
              ],
              percentiles: { p75: 292 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.40515695067264573 },
                { start: 800, end: 1800, density: 0.384304932735426 },
                { start: 1800, density: 0.21053811659192823 },
              ],
              percentiles: { p75: 1722 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5218707940780616 },
                { start: 1800, end: 3000, density: 0.35329744279946124 },
                { start: 3000, density: 0.12483176312247714 },
              ],
              percentiles: { p75: 2431 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9243554952510173 },
                { start: 100, end: 300, density: 0.05257801899592943 },
                { start: 300, density: 0.0230664857530532 },
              ],
              percentiles: { p75: 13 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.hr/",
          normalizedUrl: "https://www.yara.hr",
        },
      },
      extractedResults: {
        fcp: 2431,
        lcp: 3066,
        cls: "0.00",
        fid: 13,
      },
      timestamp: 1652117525742,
    },
    {
      url: "https://www.yara.se/",
      deviceTargeted: "PHONE",
      results: {
        record: {
          key: { formFactor: "PHONE", origin: "https://www.yara.se" },
          metrics: {
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9548300536672629 },
                { start: 100, end: 300, density: 0.02072152653548002 },
                { start: 300, density: 0.02444841979725707 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.9074956672443675 },
                { start: 2500, end: 4000, density: 0.07156268053148471 },
                { start: 4000, density: 0.020941652224147952 },
              ],
              percentiles: { p75: 1767 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9437670348587003,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.04102711232247883,
                },
                { start: "0.25", density: 0.015205852818820828 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6511133172599627 },
                { start: 200, end: 500, density: 0.24180967238689527 },
                { start: 500, density: 0.10707701035314202 },
              ],
              percentiles: { p75: 246 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.687773562882988 },
                { start: 800, end: 1800, density: 0.2858185001459002 },
                { start: 1800, density: 0.026407936971111733 },
              ],
              percentiles: { p75: 890 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8969521044992743 },
                { start: 1800, end: 3000, density: 0.08272859216255443 },
                { start: 3000, density: 0.020319303338171245 },
              ],
              percentiles: { p75: 1364 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.se/",
          normalizedUrl: "https://www.yara.se",
        },
      },
      extractedResults: {
        fcp: 1364,
        lcp: 1767,
        cls: "0.00",
        fid: 13,
      },
      timestamp: 1652117526521,
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
                  density: 0.9277877009441184,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.03840265373819852,
                },
                { start: "0.25", density: 0.03380964531768309 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5058912008022063 },
                { start: 200, end: 500, density: 0.3579844572574581 },
                { start: 500, density: 0.13612434194033568 },
              ],
              percentiles: { p75: 308 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.7758043758043759 },
                { start: 800, end: 1800, density: 0.18378378378378374 },
                { start: 1800, density: 0.040411840411840344 },
              ],
              percentiles: { p75: 765 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.855404713114754 },
                { start: 1800, end: 3000, density: 0.09631147540983603 },
                { start: 3000, density: 0.04828381147541001 },
              ],
              percentiles: { p75: 1436 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9358675976208947 },
                { start: 100, end: 300, density: 0.03594517713990173 },
                { start: 300, density: 0.028187225239203653 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8780331236358968 },
                { start: 2500, end: 4000, density: 0.0824239311850045 },
                { start: 4000, density: 0.03954294517909872 },
              ],
              percentiles: { p75: 1813 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.it/",
          normalizedUrl: "https://www.yara.it",
        },
      },
      extractedResults: {
        fcp: 1436,
        lcp: 1813,
        cls: "0.00",
        fid: 13,
      },
      timestamp: 1652117527080,
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
                  density: 0.9064180299736871,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.08065438736986613,
                },
                { start: "0.25", density: 0.012927582656446637 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6712607320379573 },
                { start: 200, end: 500, density: 0.2699954812471758 },
                { start: 500, density: 0.058743786714866866 },
              ],
              percentiles: { p75: 230 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.6754782608695653 },
                { start: 800, end: 1800, density: 0.2951884057971015 },
                { start: 1800, density: 0.029333333333333347 },
              ],
              percentiles: { p75: 891 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8792231670880257 },
                { start: 1800, end: 3000, density: 0.09963226844403586 },
                { start: 3000, density: 0.021144564467938422 },
              ],
              percentiles: { p75: 1423 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9777829475398394 },
                { start: 100, end: 300, density: 0.014190996859369547 },
                { start: 300, density: 0.008026055600790958 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.9028512301678546 },
                { start: 2500, end: 4000, density: 0.08082317774200969 },
                { start: 4000, density: 0.01632559209013573 },
              ],
              percentiles: { p75: 1766 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.lt/",
          normalizedUrl: "https://www.yara.lt",
        },
      },
      extractedResults: {
        fcp: 1423,
        lcp: 1766,
        cls: "0.00",
        fid: 12,
      },
      timestamp: 1652117527782,
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
                { start: 0, end: 2500, density: 0.6896592522479887 },
                { start: 2500, end: 4000, density: 0.21000946521533365 },
                { start: 4000, density: 0.10033128253667759 },
              ],
              percentiles: { p75: 2813 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9700598802395209,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.015615827169191032,
                },
                { start: "0.25", density: 0.014324292591288016 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6070798541691171 },
                { start: 200, end: 500, density: 0.2836645889685994 },
                { start: 500, density: 0.10925555686228344 },
              ],
              percentiles: { p75: 271 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.41344676828547766 },
                { start: 800, end: 1800, density: 0.39075977785655175 },
                { start: 1800, density: 0.19579345385797056 },
              ],
              percentiles: { p75: 1597 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5898770104068121 },
                { start: 1800, end: 3000, density: 0.2455061494796596 },
                { start: 3000, density: 0.16461684011352834 },
              ],
              percentiles: { p75: 2514 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.935985312117503 },
                { start: 100, end: 300, density: 0.04418604651162791 },
                { start: 300, density: 0.019828641370869083 },
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
        fcp: 2514,
        lcp: 2813,
        cls: "0.00",
        fid: 13,
      },
      timestamp: 1652117528640,
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
                { start: 0, end: 200, density: 0.7317941790494901 },
                { start: 200, end: 500, density: 0.2181014368168979 },
                { start: 500, density: 0.050104384133611964 },
              ],
              percentiles: { p75: 207 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.5045358518702622 },
                { start: 800, end: 1800, density: 0.38237852615881684 },
                { start: 1800, density: 0.11308562197092105 },
              ],
              percentiles: { p75: 1254 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7538158542589849 },
                { start: 1800, end: 3000, density: 0.1482028557360905 },
                { start: 3000, density: 0.09798129000492461 },
              ],
              percentiles: { p75: 1804 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9609874648247634 },
                { start: 100, end: 300, density: 0.03133793809158352 },
                { start: 300, density: 0.007674597083653107 },
              ],
              percentiles: { p75: 14 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8029408145687209 },
                { start: 2500, end: 4000, density: 0.11683277962347725 },
                { start: 4000, density: 0.0802264058078019 },
              ],
              percentiles: { p75: 2185 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8563380281690142,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.10042865890998164,
                },
                { start: "0.25", density: 0.04323331292100426 },
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
        fcp: 1804,
        lcp: 2185,
        cls: "0.01",
        fid: 14,
      },
      timestamp: 1652117529385,
    },
    {
      url: "https://www.yara.be/",
      deviceTargeted: "PHONE",
      results: {
        record: {
          key: { formFactor: "PHONE", origin: "https://www.yara.be" },
          metrics: {
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9308106102763867 },
                { start: 100, end: 300, density: 0.029864589130031535 },
                { start: 300, density: 0.039324800593581885 },
              ],
              percentiles: { p75: 14 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8691648431801604 },
                { start: 2500, end: 4000, density: 0.08980671043034279 },
                { start: 4000, density: 0.041028446389496785 },
              ],
              percentiles: { p75: 1980 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9380291839308232,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.03494865789947758,
                },
                { start: "0.25", density: 0.02702215816969916 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5739910313901346 },
                { start: 200, end: 500, density: 0.2952742324939635 },
                { start: 500, density: 0.13073473611590175 },
              ],
              percentiles: { p75: 308 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.7068804773447699 },
                { start: 800, end: 1800, density: 0.2666418049599105 },
                { start: 1800, density: 0.026477717695319758 },
              ],
              percentiles: { p75: 884 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8781957633308984 },
                { start: 1800, end: 3000, density: 0.08893352812271735 },
                { start: 3000, density: 0.03287070854638423 },
              ],
              percentiles: { p75: 1428 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.be/",
          normalizedUrl: "https://www.yara.be",
        },
      },
      extractedResults: {
        fcp: 1428,
        lcp: 1980,
        cls: "0.00",
        fid: 14,
      },
      timestamp: 1652117529792,
    },
    {
      url: "https://www.yara.ua/",
      deviceTargeted: "PHONE",
      results: {
        record: {
          key: { formFactor: "PHONE", origin: "https://www.yara.ua" },
          metrics: {
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9446668236402166 },
                { start: 100, end: 300, density: 0.026371556392747818 },
                { start: 300, density: 0.028961619967035595 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8322462524316278 },
                { start: 2500, end: 4000, density: 0.11511614601212942 },
                { start: 4000, density: 0.05263760155624288 },
              ],
              percentiles: { p75: 2060 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9576918690842742,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.029421826890181323,
                },
                { start: "0.25", density: 0.012886304025544528 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5893324235187084 },
                { start: 200, end: 500, density: 0.3192312066416469 },
                { start: 500, density: 0.09143636983964482 },
              ],
              percentiles: { p75: 273 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.6405587999541965 },
                { start: 800, end: 1800, density: 0.2909653040192373 },
                { start: 1800, density: 0.06847589602656626 },
              ],
              percentiles: { p75: 959 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7955794777828671 },
                { start: 1800, end: 3000, density: 0.13879981676591832 },
                { start: 3000, density: 0.06562070545121462 },
              ],
              percentiles: { p75: 1661 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.ua/",
          normalizedUrl: "https://www.yara.ua",
        },
      },
      extractedResults: {
        fcp: 1661,
        lcp: 2060,
        cls: "0.00",
        fid: 13,
      },
      timestamp: 1652117530160,
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
                  density: 0.8684460260972716,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.10189798339264532,
                },
                { start: "0.25", density: 0.02965599051008302 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5910893398647075 },
                { start: 200, end: 500, density: 0.30615815255423384 },
                { start: 500, density: 0.10275250758105878 },
              ],
              percentiles: { p75: 273 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.6042926597889241 },
                { start: 800, end: 1800, density: 0.34839321712320626 },
                { start: 1800, density: 0.04731412308786964 },
              ],
              percentiles: { p75: 999 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7812313921638673 },
                { start: 1800, end: 3000, density: 0.1596998928188637 },
                { start: 3000, density: 0.059068715017269145 },
              ],
              percentiles: { p75: 1715 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9597923206954841 },
                { start: 100, end: 300, density: 0.022699830958705626 },
                { start: 300, density: 0.017507848345810227 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8145419983366986 },
                { start: 2500, end: 4000, density: 0.13282642271593195 },
                { start: 4000, density: 0.05263157894736943 },
              ],
              percentiles: { p75: 2201 },
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
        lcp: 2201,
        cls: "0.00",
        fid: 12,
      },
      timestamp: 1652117530528,
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
                { start: 0, end: 100, density: 0.9620538361200046 },
                { start: 100, end: 300, density: 0.03094983991462113 },
                { start: 300, density: 0.006996323965374124 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.4473837209302329 },
                { start: 2500, end: 4000, density: 0.3363372093023257 },
                { start: 4000, density: 0.2162790697674414 },
              ],
              percentiles: { p75: 3837 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9569929666781968,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.016949152542372885,
                },
                { start: "0.25", density: 0.02605788077943042 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.476315489099418 },
                { start: 200, end: 500, density: 0.3924209565118138 },
                { start: 500, density: 0.1312635543887683 },
              ],
              percentiles: { p75: 343 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.20602898550724633 },
                { start: 800, end: 1800, density: 0.5253333333333332 },
                { start: 1800, density: 0.2686376811594206 },
              ],
              percentiles: { p75: 1876 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.32812864134234365 },
                { start: 1800, end: 3000, density: 0.3466557911908638 },
                { start: 3000, density: 0.32521556746679253 },
              ],
              percentiles: { p75: 3480 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.bo/",
          normalizedUrl: "https://www.yara.bo",
        },
      },
      extractedResults: {
        fcp: 3480,
        lcp: 3837,
        cls: "0.00",
        fid: 12,
      },
      timestamp: 1652117530882,
    },
    {
      url: "https://www.yara.be/fr-be/",
      deviceTargeted: "PHONE",
      results: {
        record: {
          key: { formFactor: "PHONE", origin: "https://www.yara.be" },
          metrics: {
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.7068804773447699 },
                { start: 800, end: 1800, density: 0.2666418049599105 },
                { start: 1800, density: 0.026477717695319758 },
              ],
              percentiles: { p75: 884 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8781957633308984 },
                { start: 1800, end: 3000, density: 0.08893352812271735 },
                { start: 3000, density: 0.03287070854638423 },
              ],
              percentiles: { p75: 1428 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9308106102763867 },
                { start: 100, end: 300, density: 0.029864589130031535 },
                { start: 300, density: 0.039324800593581885 },
              ],
              percentiles: { p75: 14 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8691648431801604 },
                { start: 2500, end: 4000, density: 0.08980671043034279 },
                { start: 4000, density: 0.041028446389496785 },
              ],
              percentiles: { p75: 1980 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9380291839308232,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.03494865789947758,
                },
                { start: "0.25", density: 0.02702215816969916 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5739910313901346 },
                { start: 200, end: 500, density: 0.2952742324939635 },
                { start: 500, density: 0.13073473611590175 },
              ],
              percentiles: { p75: 308 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.be/fr-be/",
          normalizedUrl: "https://www.yara.be",
        },
      },
      extractedResults: {
        fcp: 1428,
        lcp: 1980,
        cls: "0.00",
        fid: 14,
      },
      timestamp: 1652117531181,
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
                  density: 0.7647235276472352,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.1625837416258374,
                },
                { start: "0.25", density: 0.07269273072692736 },
              ],
              percentiles: { p75: "0.08" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.7316000000000001 },
                { start: 200, end: 500, density: 0.18520000000000003 },
                { start: 500, density: 0.08319999999999986 },
              ],
              percentiles: { p75: 217 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.7601959216313474 },
                { start: 800, end: 1800, density: 0.21601359456217512 },
                { start: 1800, density: 0.023790483806477393 },
              ],
              percentiles: { p75: 813 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.9066 },
                { start: 1800, end: 3000, density: 0.0679 },
                { start: 3000, density: 0.025499999999999984 },
              ],
              percentiles: { p75: 1266 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9606118164550633 },
                { start: 100, end: 300, density: 0.01709487153853844 },
                { start: 300, density: 0.022293312006398072 },
              ],
              percentiles: { p75: 10 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8895389538953895 },
                { start: 2500, end: 4000, density: 0.07675767576757675 },
                { start: 4000, density: 0.03370337033703377 },
              ],
              percentiles: { p75: 1799 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.be/",
          normalizedUrl: "https://www.yara.be",
        },
      },
      extractedResults: {
        fcp: 1266,
        lcp: 1799,
        cls: "0.08",
        fid: 10,
      },
      timestamp: 1652117531497,
    },
    {
      url: "https://www.yara.fr/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "https://www.yara.fr" },
          metrics: {
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7400740074007401 },
                { start: 1800, end: 3000, density: 0.15991599159915995 },
                { start: 3000, density: 0.10001000100009982 },
              ],
              percentiles: { p75: 1873 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9469106178764247 },
                { start: 100, end: 300, density: 0.032293541291741654 },
                { start: 300, density: 0.0207958408318336 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7802719728027186 },
                { start: 2500, end: 4000, density: 0.13883611638836102 },
                { start: 4000, density: 0.08089191080892026 },
              ],
              percentiles: { p75: 2375 },
            },
            cumulative_layout_shift: {
              histogram: [
                { start: "0.00", end: "0.10", density: 0.8279 },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.12229999999999998,
                },
                { start: "0.25", density: 0.04979999999999998 },
              ],
              percentiles: { p75: "0.06" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5475452454754515 },
                { start: 200, end: 500, density: 0.3033696630336961 },
                { start: 500, density: 0.14908509149085236 },
              ],
              percentiles: { p75: 330 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.6175999999999997 },
                { start: 800, end: 1800, density: 0.29489999999999994 },
                { start: 1800, density: 0.08750000000000031 },
              ],
              percentiles: { p75: 1051 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.fr/",
          normalizedUrl: "https://www.yara.fr",
        },
      },
      extractedResults: {
        fcp: 1873,
        lcp: 2375,
        cls: "0.06",
        fid: 12,
      },
      timestamp: 1652117531744,
    },
    {
      url: "https://www.yara.com.co/",
      deviceTargeted: "PHONE",
      results: {
        record: {
          key: { formFactor: "PHONE", origin: "https://www.yara.com.co" },
          metrics: {
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5826035502958585 },
                { start: 200, end: 500, density: 0.32142011834319556 },
                { start: 500, density: 0.09597633136094597 },
              ],
              percentiles: { p75: 277 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.4321643641516115 },
                { start: 800, end: 1800, density: 0.4191758176880386 },
                { start: 1800, density: 0.14865981816035 },
              ],
              percentiles: { p75: 1397 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6071428571428563 },
                { start: 1800, end: 3000, density: 0.22126300851466385 },
                { start: 3000, density: 0.17159413434247978 },
              ],
              percentiles: { p75: 2458 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9410632667789273 },
                { start: 100, end: 300, density: 0.03560259802742363 },
                { start: 300, density: 0.023334135193648995 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6912616767175114 },
                { start: 2500, end: 4000, density: 0.1694454298214495 },
                { start: 4000, density: 0.13929289346103915 },
              ],
              percentiles: { p75: 2891 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9357755078079136,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.02125161441822238,
                },
                { start: "0.25", density: 0.042972877773864035 },
              ],
              percentiles: { p75: "0.00" },
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
        lcp: 2891,
        cls: "0.00",
        fid: 13,
      },
      timestamp: 1652117531960,
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
                { start: 0, end: 100, density: 0.9554054054054054 },
                { start: 100, end: 300, density: 0.027518427518427518 },
                { start: 300, density: 0.01707616707616705 },
              ],
              percentiles: { p75: 14 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7361441484300658 },
                { start: 2500, end: 4000, density: 0.17941246431969526 },
                { start: 4000, density: 0.08444338725023881 },
              ],
              percentiles: { p75: 2561 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.767097309470191,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.1902334953182411,
                },
                { start: "0.25", density: 0.042669195211568055 },
              ],
              percentiles: { p75: "0.08" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6243511090136861 },
                { start: 200, end: 500, density: 0.2592024539877302 },
                { start: 500, density: 0.11644643699858376 },
              ],
              percentiles: { p75: 277 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.5101147521589968 },
                { start: 800, end: 1800, density: 0.41606530225955285 },
                { start: 1800, density: 0.07381994558145036 },
              ],
              percentiles: { p75: 1168 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7014730339748153 },
                { start: 1800, end: 3000, density: 0.22238061297220216 },
                { start: 3000, density: 0.07614635305298252 },
              ],
              percentiles: { p75: 1964 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.co.th/",
          normalizedUrl: "https://www.yara.co.th",
        },
      },
      extractedResults: {
        fcp: 1964,
        lcp: 2561,
        cls: "0.08",
        fid: 14,
      },
      timestamp: 1652117532320,
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
                  density: 0.9504886831275721,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.023919753086419752,
                },
                { start: "0.25", density: 0.025591563786008215 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.49738870927629886 },
                { start: 200, end: 500, density: 0.30278537677194695 },
                { start: 500, density: 0.19982591395175422 },
              ],
              percentiles: { p75: 364 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.28762846363991146 },
                { start: 800, end: 1800, density: 0.4296864836737347 },
                { start: 1800, density: 0.2826850526863539 },
              ],
              percentiles: { p75: 1921 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.48610747051114017 },
                { start: 1800, end: 3000, density: 0.38099606815203135 },
                { start: 3000, density: 0.13289646133682853 },
              ],
              percentiles: { p75: 2621 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9299591002044986 },
                { start: 100, end: 300, density: 0.01904396728016359 },
                { start: 300, density: 0.050996932515337774 },
              ],
              percentiles: { p75: 14 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.5973629514159525 },
                { start: 2500, end: 4000, density: 0.2962457781241883 },
                { start: 4000, density: 0.10639127045985923 },
              ],
              percentiles: { p75: 3063 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.ie/",
          normalizedUrl: "https://www.yara.ie",
        },
      },
      extractedResults: {
        fcp: 2621,
        lcp: 3063,
        cls: "0.00",
        fid: 14,
      },
      timestamp: 1652117532714,
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
                { start: 0, end: 100, density: 0.9526643224235868 },
                { start: 100, end: 300, density: 0.035028401406545846 },
                { start: 300, density: 0.01230727616986741 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.5544432963058634 },
                { start: 2500, end: 4000, density: 0.2829372255231203 },
                { start: 4000, density: 0.16261947817101632 },
              ],
              percentiles: { p75: 3400 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9245090538128029,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.02665136444784494,
                },
                { start: "0.25", density: 0.048839581739352204 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5451235370611186 },
                { start: 200, end: 500, density: 0.3526657997399222 },
                { start: 500, density: 0.10221066319895913 },
              ],
              percentiles: { p75: 291 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.254213483146067 },
                { start: 800, end: 1800, density: 0.5254085801838603 },
                { start: 1800, density: 0.22037793667007274 },
              ],
              percentiles: { p75: 1691 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.43139790508211445 },
                { start: 1800, end: 3000, density: 0.3147549463338929 },
                { start: 3000, density: 0.2538471485839926 },
              ],
              percentiles: { p75: 3038 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.ar/",
          normalizedUrl: "https://www.yara.com.ar",
        },
      },
      extractedResults: {
        fcp: 3038,
        lcp: 3400,
        cls: "0.00",
        fid: 13,
      },
      timestamp: 1652117533023,
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
                  density: 0.9629035492279928,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.02005213555243633,
                },
                { start: "0.25", density: 0.01704431521957089 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5272938443670151 },
                { start: 200, end: 500, density: 0.31746031746031744 },
                { start: 500, density: 0.15524583817266735 },
              ],
              percentiles: { p75: 319 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.6691161461522761 },
                { start: 800, end: 1800, density: 0.2931210451112472 },
                { start: 1800, density: 0.037762808736476715 },
              ],
              percentiles: { p75: 928 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8632548618219038 },
                { start: 1800, end: 3000, density: 0.10501535312180142 },
                { start: 3000, density: 0.03172978505629475 },
              ],
              percentiles: { p75: 1469 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9337213668794593 },
                { start: 100, end: 300, density: 0.031543372136687946 },
                { start: 300, density: 0.0347352609838528 },
              ],
              percentiles: { p75: 14 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8528267103646048 },
                { start: 2500, end: 4000, density: 0.11071282261368301 },
                { start: 4000, density: 0.036460467021712205 },
              ],
              percentiles: { p75: 2049 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.nl/",
          normalizedUrl: "https://www.yara.nl",
        },
      },
      extractedResults: {
        fcp: 1469,
        lcp: 2049,
        cls: "0.00",
        fid: 14,
      },
      timestamp: 1652117533334,
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
                { start: "0.00", end: "0.10", density: 0.93452615021628 },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.049744396382225727,
                },
                { start: "0.25", density: 0.015729453401494297 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5166666666666665 },
                { start: 200, end: 500, density: 0.3168518518518518 },
                { start: 500, density: 0.1664814814814817 },
              ],
              percentiles: { p75: 355 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.5942175495349779 },
                { start: 800, end: 1800, density: 0.3710068742418115 },
                { start: 1800, density: 0.034775576223210654 },
              ],
              percentiles: { p75: 965 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8613462313583231 },
                { start: 1800, end: 3000, density: 0.09834744054816606 },
                { start: 3000, density: 0.04030632809351077 },
              ],
              percentiles: { p75: 1486 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9420700830463844 },
                { start: 100, end: 300, density: 0.04030787927891432 },
                { start: 300, density: 0.01762203767470124 },
              ],
              percentiles: { p75: 14 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8884422110552763 },
                { start: 2500, end: 4000, density: 0.08241206030150755 },
                { start: 4000, density: 0.029145728643216136 },
              ],
              percentiles: { p75: 1962 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.dk/",
          normalizedUrl: "https://www.yara.dk",
        },
      },
      extractedResults: {
        fcp: 1486,
        lcp: 1962,
        cls: "0.00",
        fid: 14,
      },
      timestamp: 1652117533644,
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
                { start: "0.00", end: "0.10", density: 0.8552 },
                { start: "0.10", end: "0.25", density: 0.0816 },
                { start: "0.25", density: 0.06319999999999996 },
              ],
              percentiles: { p75: "0.04" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.8146814681468147 },
                { start: 200, end: 500, density: 0.12801280128012799 },
                { start: 500, density: 0.05730573057305727 },
              ],
              percentiles: { p75: 157 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.35756424357564226 },
                { start: 800, end: 1800, density: 0.4428557144285569 },
                { start: 1800, density: 0.1995800419958009 },
              ],
              percentiles: { p75: 1542 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.11148885111488867 },
                { start: 1800, end: 3000, density: 0.3998600139986007 },
                { start: 3000, density: 0.48865113488651063 },
              ],
              percentiles: { p75: 4990 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.2600020004000804 },
                { start: 2500, end: 4000, density: 0.3527205441088222 },
                { start: 4000, density: 0.38727745549109743 },
              ],
              percentiles: { p75: 5468 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "http://www.yara.com.mm/",
          normalizedUrl: "http://www.yara.com.mm",
        },
      },
      extractedResults: { fcp: 4990, lcp: 5468, cls: "0.04" },
      timestamp: 1652117533956,
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
                  density: 0.9680968096809681,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.020802080208020806,
                },
                { start: "0.25", density: 0.011101110111011116 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5847000000000002 },
                { start: 200, end: 500, density: 0.31680000000000014 },
                { start: 500, density: 0.09849999999999963 },
              ],
              percentiles: { p75: 290 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.41681681681681676 },
                { start: 800, end: 1800, density: 0.3764764764764765 },
                { start: 1800, density: 0.2067067067067067 },
              ],
              percentiles: { p75: 1714 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5358751125788047 },
                { start: 1800, end: 3000, density: 0.34103872710897604 },
                { start: 3000, density: 0.12308616031221929 },
              ],
              percentiles: { p75: 2417 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9265999999999999 },
                { start: 100, end: 300, density: 0.0509 },
                { start: 300, density: 0.022500000000000183 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6118447378951577 },
                { start: 2500, end: 4000, density: 0.28431372549019596 },
                { start: 4000, density: 0.1038415366146464 },
              ],
              percentiles: { p75: 3063 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.hr/",
          normalizedUrl: "https://www.yara.hr",
        },
      },
      extractedResults: {
        fcp: 2417,
        lcp: 3063,
        cls: "0.00",
        fid: 13,
      },
      timestamp: 1652117534274,
    },
    {
      url: "https://www.yara.ma/",
      deviceTargeted: "PHONE",
      results: {
        record: {
          key: { formFactor: "PHONE", origin: "https://www.yara.ma" },
          metrics: {
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.677228992944195 },
                { start: 800, end: 1800, density: 0.28184733803720324 },
                { start: 1800, density: 0.04092366901860166 },
              ],
              percentiles: { p75: 983 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7921842650103519 },
                { start: 1800, end: 3000, density: 0.1533385093167702 },
                { start: 3000, density: 0.05447722567287784 },
              ],
              percentiles: { p75: 1773 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.836560805577072 },
                { start: 2500, end: 4000, density: 0.10805577072037183 },
                { start: 4000, density: 0.05538342370255618 },
              ],
              percentiles: { p75: 2126 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.ma/",
          normalizedUrl: "https://www.yara.ma",
        },
      },
      extractedResults: { fcp: 1773, lcp: 2126 },
      timestamp: 1652117534519,
    },
    {
      url: "https://www.yara.lv/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "https://www.yara.lv" },
          metrics: {
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8337833783378336 },
                { start: 1800, end: 3000, density: 0.13341334133413335 },
                { start: 3000, density: 0.03280328032803302 },
              ],
              percentiles: { p75: 1546 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9724055188962207 },
                { start: 100, end: 300, density: 0.01669666066786642 },
                { start: 300, density: 0.01089782043591283 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8461730865432717 },
                { start: 2500, end: 4000, density: 0.11940970485242625 },
                { start: 4000, density: 0.03441720860430201 },
              ],
              percentiles: { p75: 2085 },
            },
            cumulative_layout_shift: {
              histogram: [
                { start: "0.00", end: "0.10", density: 0.9397 },
                { start: "0.10", end: "0.25", density: 0.0482 },
                { start: "0.25", density: 0.0121 },
              ],
              percentiles: { p75: "0.01" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6135613561356136 },
                { start: 200, end: 500, density: 0.2944294429442943 },
                { start: 500, density: 0.09200920092009204 },
              ],
              percentiles: { p75: 266 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.6059817945383615 },
                { start: 800, end: 1800, density: 0.35530659197759334 },
                { start: 1800, density: 0.03871161348404515 },
              ],
              percentiles: { p75: 1011 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.lv/",
          normalizedUrl: "https://www.yara.lv",
        },
      },
      extractedResults: {
        fcp: 1546,
        lcp: 2085,
        cls: "0.01",
        fid: 12,
      },
      timestamp: 1652117534860,
    },
    {
      url: "https://www.yara.com.ec/",
      deviceTargeted: "PHONE",
      results: {
        record: {
          key: { formFactor: "PHONE", origin: "https://www.yara.com.ec" },
          metrics: {
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.42704626334519574 },
                { start: 800, end: 1800, density: 0.4428063040162683 },
                { start: 1800, density: 0.13014743263853598 },
              ],
              percentiles: { p75: 1355 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5861149892118276 },
                { start: 1800, end: 3000, density: 0.2540931590303332 },
                { start: 3000, density: 0.15979185175783925 },
              ],
              percentiles: { p75: 2467 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9633521271143004 },
                { start: 100, end: 300, density: 0.026012301383905683 },
                { start: 300, density: 0.010635571501793928 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6867706747843726 },
                { start: 2500, end: 4000, density: 0.2004693049213595 },
                { start: 4000, density: 0.11276002029426804 },
              ],
              percentiles: { p75: 2816 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.963330403114404,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.015572020595253044,
                },
                { start: "0.25", density: 0.021097576290342833 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6117840020186724 },
                { start: 200, end: 500, density: 0.311758768609639 },
                { start: 500, density: 0.07645722937168847 },
              ],
              percentiles: { p75: 266 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.ec/",
          normalizedUrl: "https://www.yara.com.ec",
        },
      },
      extractedResults: {
        fcp: 2467,
        lcp: 2816,
        cls: "0.00",
        fid: 12,
      },
      timestamp: 1652117535068,
    },
    {
      url: "https://www.yara.com.pe/",
      deviceTargeted: "PHONE",
      results: {
        record: {
          key: { formFactor: "PHONE", origin: "https://www.yara.com.pe" },
          metrics: {
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5387760485360064 },
                { start: 200, end: 500, density: 0.38208915853336867 },
                { start: 500, density: 0.07913479293062496 },
              ],
              percentiles: { p75: 292 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.29031833727966316 },
                { start: 800, end: 1800, density: 0.5026308866087871 },
                { start: 1800, density: 0.20705077611154987 },
              ],
              percentiles: { p75: 1700 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.4769924413207792 },
                { start: 1800, end: 3000, density: 0.32303408036069464 },
                { start: 3000, density: 0.19997347831852613 },
              ],
              percentiles: { p75: 2755 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9662768561327169 },
                { start: 100, end: 300, density: 0.02583627957574109 },
                { start: 300, density: 0.007886864291542022 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.621198095741867 },
                { start: 2500, end: 4000, density: 0.23889182755884672 },
                { start: 4000, density: 0.13991007669928615 },
              ],
              percentiles: { p75: 3120 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9500000000000001,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.02493438320209974,
                },
                { start: "0.25", density: 0.025065616797900227 },
              ],
              percentiles: { p75: "0.01" },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.pe/",
          normalizedUrl: "https://www.yara.com.pe",
        },
      },
      extractedResults: {
        fcp: 2755,
        lcp: 3120,
        cls: "0.01",
        fid: 12,
      },
      timestamp: 1652117535387,
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
                  density: 0.9600355239786857,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.016366404465871606,
                },
                { start: "0.25", density: 0.023598071555442753 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5763397371081911 },
                { start: 200, end: 500, density: 0.281723963599596 },
                { start: 500, density: 0.14193629929221288 },
              ],
              percentiles: { p75: 304 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.5060302145486855 },
                { start: 800, end: 1800, density: 0.39989843849181106 },
                { start: 1800, density: 0.09407134695950345 },
              ],
              percentiles: { p75: 1190 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6786998972250768 },
                { start: 1800, end: 3000, density: 0.21351490236382317 },
                { start: 3000, density: 0.10778520041110001 },
              ],
              percentiles: { p75: 2066 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9632138114209827 },
                { start: 100, end: 300, density: 0.026294820717131472 },
                { start: 300, density: 0.010491367861885821 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7561866906013597 },
                { start: 2500, end: 4000, density: 0.15290421848955 },
                { start: 4000, density: 0.0909090909090903 },
              ],
              percentiles: { p75: 2475 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.gt/",
          normalizedUrl: "https://www.yara.com.gt",
        },
      },
      extractedResults: {
        fcp: 2066,
        lcp: 2475,
        cls: "0.00",
        fid: 13,
      },
      timestamp: 1652117535715,
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
                { start: "0.00", end: "0.10", density: 0.822 },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.14550000000000002,
                },
                { start: "0.25", density: 0.03249999999999999 },
              ],
              percentiles: { p75: "0.06" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.8018594421673494 },
                { start: 200, end: 500, density: 0.13316005198440456 },
                { start: 500, density: 0.06498050584824604 },
              ],
              percentiles: { p75: 171 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.6170702421452869 },
                { start: 800, end: 1800, density: 0.29117470482289376 },
                { start: 1800, density: 0.09175505303181926 },
              ],
              percentiles: { p75: 1112 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7545772886443219 },
                { start: 1800, end: 3000, density: 0.152976488244122 },
                { start: 3000, density: 0.09244622311155615 },
              ],
              percentiles: { p75: 1800 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9764976497649765 },
                { start: 100, end: 300, density: 0.016201620162016202 },
                { start: 300, density: 0.007300730073007291 },
              ],
              percentiles: { p75: 10 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7788673203922358 },
                { start: 2500, end: 4000, density: 0.13798278967380437 },
                { start: 4000, density: 0.08314988993395991 },
              ],
              percentiles: { p75: 2358 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com/",
          normalizedUrl: "https://www.yara.com",
        },
      },
      extractedResults: {
        fcp: 1800,
        lcp: 2358,
        cls: "0.06",
        fid: 10,
      },
      timestamp: 1652117536054,
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
                { start: 0, end: 1800, density: 0.5707203266258383 },
                { start: 1800, end: 3000, density: 0.23957421988918046 },
                { start: 3000, density: 0.18970545348498144 },
              ],
              percentiles: { p75: 2553 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.8674067221708289 },
                { start: 100, end: 300, density: 0.055504162812210864 },
                { start: 300, density: 0.07708911501696013 },
              ],
              percentiles: { p75: 23 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6378015311281231 },
                { start: 2500, end: 4000, density: 0.18380759786219836 },
                { start: 4000, density: 0.1783908710096786 },
              ],
              percentiles: { p75: 3275 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.899151201266005,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.026183282980866068,
                },
                { start: "0.25", density: 0.07466551575312905 },
              ],
              percentiles: { p75: "0.01" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.4853093164033661 },
                { start: 200, end: 500, density: 0.30163886018012687 },
                { start: 500, density: 0.2130518234165071 },
              ],
              percentiles: { p75: 413 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.3735043967132764 },
                { start: 800, end: 1800, density: 0.44313103647109675 },
                { start: 1800, density: 0.1833645668156269 },
              ],
              percentiles: { p75: 1529 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.us/",
          normalizedUrl: "https://www.yara.us",
        },
      },
      extractedResults: {
        fcp: 2553,
        lcp: 3275,
        cls: "0.01",
        fid: 23,
      },
      timestamp: 1652117536283,
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
                  density: 0.9611378205128205,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.019431089743589744,
                },
                { start: "0.25", density: 0.019431089743589744 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5936367297623842 },
                { start: 200, end: 500, density: 0.29842931937172773 },
                { start: 500, density: 0.10793395086588808 },
              ],
              percentiles: { p75: 275 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.3978049285566367 },
                { start: 800, end: 1800, density: 0.49099192379374573 },
                { start: 1800, density: 0.11120314764961753 },
              ],
              percentiles: { p75: 1432 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6313943894389443 },
                { start: 1800, end: 3000, density: 0.2596947194719474 },
                { start: 3000, density: 0.10891089108910817 },
              ],
              percentiles: { p75: 2372 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9381765195670275 },
                { start: 100, end: 300, density: 0.03309741881765196 },
                { start: 300, density: 0.02872606161532056 },
              ],
              percentiles: { p75: 14 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7170352170352173 },
                { start: 2500, end: 4000, density: 0.192874692874693 },
                { start: 4000, density: 0.0900900900900897 },
              ],
              percentiles: { p75: 2769 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yaracanada.ca/fr-ca/",
          normalizedUrl: "https://www.yaracanada.ca",
        },
      },
      extractedResults: {
        fcp: 2372,
        lcp: 2769,
        cls: "0.00",
        fid: 14,
      },
      timestamp: 1652117536653,
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
                  density: 0.9690305206463196,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.01750448833034111,
                },
                { start: "0.25", density: 0.013464991023339316 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6306226456902282 },
                { start: 200, end: 500, density: 0.31841347219144694 },
                { start: 500, density: 0.05096388211832477 },
              ],
              percentiles: { p75: 247 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.31965890758239224 },
                { start: 800, end: 1800, density: 0.4514865176307905 },
                { start: 1800, density: 0.22885457478681734 },
              ],
              percentiles: { p75: 1844 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.508977900552486 },
                { start: 1800, end: 3000, density: 0.348526703499079 },
                { start: 3000, density: 0.14249539594843483 },
              ],
              percentiles: { p75: 2730 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.957070094591317 },
                { start: 100, end: 300, density: 0.03516856657773466 },
                { start: 300, density: 0.007761338830948339 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6502707581227437 },
                { start: 2500, end: 4000, density: 0.276173285198556 },
                { start: 4000, density: 0.07355595667870032 },
              ],
              percentiles: { p75: 2932 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.co.nz/",
          normalizedUrl: "https://www.yara.co.nz",
        },
      },
      extractedResults: {
        fcp: 2730,
        lcp: 2932,
        cls: "0.00",
        fid: 13,
      },
      timestamp: 1652117537030,
    },
    {
      url: "https://www.yara.kr/",
      deviceTargeted: "PHONE",
      results: {
        record: {
          key: { formFactor: "PHONE", origin: "https://www.yara.kr" },
          metrics: {
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7770541082164327 },
                { start: 2500, end: 4000, density: 0.1656312625250501 },
                { start: 4000, density: 0.05731462925851718 },
              ],
              percentiles: { p75: 2333 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.930522565320665,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.04651623119556612,
                },
                { start: "0.25", density: 0.02296120348376882 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.7917407626951195 },
                { start: 200, end: 500, density: 0.17229796482908513 },
                { start: 500, density: 0.03596127247579529 },
              ],
              percentiles: { p75: 178 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.5405128205128205 },
                { start: 800, end: 1800, density: 0.39015384615384613 },
                { start: 1800, density: 0.0693333333333334 },
              ],
              percentiles: { p75: 1178 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7011240465676435 },
                { start: 1800, end: 3000, density: 0.22721798474508212 },
                { start: 3000, density: 0.0716579686872745 },
              ],
              percentiles: { p75: 1965 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.966932725199544 },
                { start: 100, end: 300, density: 0.026225769669327256 },
                { start: 300, density: 0.006841505131128849 },
              ],
              percentiles: { p75: 12 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.kr/",
          normalizedUrl: "https://www.yara.kr",
        },
      },
      extractedResults: {
        fcp: 1965,
        lcp: 2333,
        cls: "0.00",
        fid: 12,
      },
      timestamp: 1652117537402,
    },
    {
      url: "https://www.yara.cm/en-cm/",
      deviceTargeted: "PHONE",
      results: {
        record: {
          key: { formFactor: "PHONE", origin: "https://www.yara.cm" },
          metrics: {
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6873 },
                { start: 200, end: 500, density: 0.24830000000000002 },
                { start: 500, density: 0.06439999999999992 },
              ],
              percentiles: { p75: 219 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.5413082616523306 },
                { start: 800, end: 1800, density: 0.25075015003000617 },
                { start: 1800, density: 0.20794158831766327 },
              ],
              percentiles: { p75: 1508 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6170851255376615 },
                { start: 1800, end: 3000, density: 0.1498449534860458 },
                { start: 3000, density: 0.2330699209762926 },
              ],
              percentiles: { p75: 2860 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9604039596040396 },
                { start: 100, end: 300, density: 0.026297370262973702 },
                { start: 300, density: 0.0132986701329867 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6445355464453557 },
                { start: 2500, end: 4000, density: 0.17028297170282977 },
                { start: 4000, density: 0.1851814818518146 },
              ],
              percentiles: { p75: 3228 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.7485999999999998,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.11999999999999998,
                },
                { start: "0.25", density: 0.1314000000000001 },
              ],
              percentiles: { p75: "0.10" },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.cm/en-cm/",
          normalizedUrl: "https://www.yara.cm",
        },
      },
      extractedResults: {
        fcp: 2860,
        lcp: 3228,
        cls: "0.10",
        fid: 12,
      },
      timestamp: 1652117537759,
    },
    {
      url: "https://www.yara.cm/",
      deviceTargeted: "PHONE",
      results: {
        record: {
          key: { formFactor: "PHONE", origin: "https://www.yara.cm" },
          metrics: {
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9604039596040396 },
                { start: 100, end: 300, density: 0.026297370262973702 },
                { start: 300, density: 0.0132986701329867 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6445355464453557 },
                { start: 2500, end: 4000, density: 0.17028297170282977 },
                { start: 4000, density: 0.1851814818518146 },
              ],
              percentiles: { p75: 3228 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.7485999999999998,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.11999999999999998,
                },
                { start: "0.25", density: 0.1314000000000001 },
              ],
              percentiles: { p75: "0.10" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6873 },
                { start: 200, end: 500, density: 0.24830000000000002 },
                { start: 500, density: 0.06439999999999992 },
              ],
              percentiles: { p75: 219 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.5413082616523306 },
                { start: 800, end: 1800, density: 0.25075015003000617 },
                { start: 1800, density: 0.20794158831766327 },
              ],
              percentiles: { p75: 1508 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6170851255376615 },
                { start: 1800, end: 3000, density: 0.1498449534860458 },
                { start: 3000, density: 0.2330699209762926 },
              ],
              percentiles: { p75: 2860 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.cm/",
          normalizedUrl: "https://www.yara.cm",
        },
      },
      extractedResults: {
        fcp: 2860,
        lcp: 3228,
        cls: "0.10",
        fid: 12,
      },
      timestamp: 1652117538116,
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
                  density: 0.8870999999999999,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.09769999999999998,
                },
                { start: "0.25", density: 0.015199999999999991 },
              ],
              percentiles: { p75: "0.01" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.7035703570357035 },
                { start: 200, end: 500, density: 0.24292429242924285 },
                { start: 500, density: 0.053505350535053675 },
              ],
              percentiles: { p75: 223 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.6934 },
                { start: 800, end: 1800, density: 0.2793999999999999 },
                { start: 1800, density: 0.027200000000000016 },
              ],
              percentiles: { p75: 872 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8837883788378836 },
                { start: 1800, end: 3000, density: 0.09550955095509552 },
                { start: 3000, density: 0.020702070207020702 },
              ],
              percentiles: { p75: 1398 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9806058182545238 },
                { start: 100, end: 300, density: 0.012496251124662603 },
                { start: 300, density: 0.006897930620813741 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8979989994997499 },
                { start: 2500, end: 4000, density: 0.08449224612306155 },
                { start: 4000, density: 0.017508754377188483 },
              ],
              percentiles: { p75: 1799 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.lt/",
          normalizedUrl: "https://www.yara.lt",
        },
      },
      extractedResults: {
        fcp: 1398,
        lcp: 1799,
        cls: "0.01",
        fid: 12,
      },
      timestamp: 1652117538478,
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
                { start: 0, end: 1800, density: 0.8825136612021858 },
                { start: 1800, end: 3000, density: 0.0905054644808743 },
                { start: 3000, density: 0.02698087431693995 },
              ],
              percentiles: { p75: 1430 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9616939026533123 },
                { start: 100, end: 300, density: 0.023721665788086453 },
                { start: 300, density: 0.014584431558601299 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8936907983761841 },
                { start: 2500, end: 4000, density: 0.07586265223274696 },
                { start: 4000, density: 0.030446549391068955 },
              ],
              percentiles: { p75: 1950 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9641240569991618,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.026487845766974015,
                },
                { start: "0.25", density: 0.009388097233864206 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5722329472329474 },
                { start: 200, end: 500, density: 0.3051801801801802 },
                { start: 500, density: 0.12258687258687238 },
              ],
              percentiles: { p75: 320 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.7024472573839663 },
                { start: 800, end: 1800, density: 0.25687763713080164 },
                { start: 1800, density: 0.040675105485232066 },
              ],
              percentiles: { p75: 883 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.ee/",
          normalizedUrl: "https://www.yara.ee",
        },
      },
      extractedResults: {
        fcp: 1430,
        lcp: 1950,
        cls: "0.00",
        fid: 13,
      },
      timestamp: 1652117538736,
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
                { start: 0, end: 2500, density: 0.6172500000000001 },
                { start: 2500, end: 4000, density: 0.28365000000000007 },
                { start: 4000, density: 0.09909999999999994 },
              ],
              percentiles: { p75: 3029 },
            },
            cumulative_layout_shift: {
              histogram: [
                { start: "0.00", end: "0.10", density: 0.844 },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.06749999999999999,
                },
                { start: "0.25", density: 0.0885 },
              ],
              percentiles: { p75: "0.03" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5752575257525748 },
                { start: 200, end: 500, density: 0.25552555255525544 },
                { start: 500, density: 0.16921692169216976 },
              ],
              percentiles: { p75: 309 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.2977404519096177 },
                { start: 800, end: 1800, density: 0.44721055788842184 },
                { start: 1800, density: 0.25504899020196037 },
              ],
              percentiles: { p75: 1871 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5265473452654733 },
                { start: 1800, end: 3000, density: 0.3537646235376461 },
                { start: 3000, density: 0.11968803119688064 },
              ],
              percentiles: { p75: 2562 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9416058394160581 },
                { start: 100, end: 300, density: 0.014898510148985097 },
                { start: 300, density: 0.04349565043495678 },
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
        fcp: 2562,
        lcp: 3029,
        cls: "0.03",
        fid: 12,
      },
      timestamp: 1652117539167,
    },
    {
      url: "https://www.yara.com.gh/",
      deviceTargeted: "PHONE",
      results: {
        record: {
          key: { formFactor: "PHONE", origin: "https://www.yara.com.gh" },
          metrics: {
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6655668866226736 },
                { start: 2500, end: 4000, density: 0.16756648670265903 },
                { start: 4000, density: 0.16686662667466728 },
              ],
              percentiles: { p75: 3097 },
            },
            cumulative_layout_shift: {
              histogram: [
                { start: "0.00", end: "0.10", density: 0.9087 },
                { start: "0.10", end: "0.25", density: 0.0635 },
                { start: "0.25", density: 0.027800000000000005 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6751324867513249 },
                { start: 200, end: 500, density: 0.25637436256374363 },
                { start: 500, density: 0.06849315068493153 },
              ],
              percentiles: { p75: 242 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.5071492850714936 },
                { start: 800, end: 1800, density: 0.28137186281371906 },
                { start: 1800, density: 0.21147885211478734 },
              ],
              percentiles: { p75: 1596 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6472352764723509 },
                { start: 1800, end: 3000, density: 0.1399860013998596 },
                { start: 3000, density: 0.21277872212778964 },
              ],
              percentiles: { p75: 2709 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.965410376886934 },
                { start: 100, end: 300, density: 0.020793761871438568 },
                { start: 300, density: 0.013795861241627502 },
              ],
              percentiles: { p75: 12 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.gh/",
          normalizedUrl: "https://www.yara.com.gh",
        },
      },
      extractedResults: {
        fcp: 2709,
        lcp: 3097,
        cls: "0.00",
        fid: 12,
      },
      timestamp: 1652117539416,
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
                  density: 0.9241388553813161,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.05481838895590403,
                },
                { start: "0.25", density: 0.021042755662779838 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.46318978006058265 },
                { start: 200, end: 500, density: 0.3654681943895698 },
                { start: 500, density: 0.17134202554984765 },
              ],
              percentiles: { p75: 376 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.5848623853211004 },
                { start: 800, end: 1800, density: 0.31489476524554744 },
                { start: 1800, density: 0.1002428494333523 },
              ],
              percentiles: { p75: 1120 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7109850020267537 },
                { start: 1800, end: 3000, density: 0.17794892582083513 },
                { start: 3000, density: 0.11106607215241102 },
              ],
              percentiles: { p75: 1981 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9374405004759963 },
                { start: 100, end: 300, density: 0.03916768665850673 },
                { start: 300, density: 0.02339181286549707 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7695646367521356 },
                { start: 2500, end: 4000, density: 0.14309561965811937 },
                { start: 4000, density: 0.08733974358974499 },
              ],
              percentiles: { p75: 2423 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.fr/",
          normalizedUrl: "https://www.yara.fr",
        },
      },
      extractedResults: {
        fcp: 1981,
        lcp: 2423,
        cls: "0.00",
        fid: 13,
      },
      timestamp: 1652117539801,
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
                { start: 0, end: 100, density: 0.9099533437013998 },
                { start: 100, end: 300, density: 0.047122861586314166 },
                { start: 300, density: 0.042923794712286065 },
              ],
              percentiles: { p75: 17 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.5344302254722723 },
                { start: 2500, end: 4000, density: 0.289914686166971 },
                { start: 4000, density: 0.17565508836075688 },
              ],
              percentiles: { p75: 3455 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9403635271143156,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.03259726603575184,
                },
                { start: "0.25", density: 0.02703920684993246 },
              ],
              percentiles: { p75: "0.01" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.4822609741431145 },
                { start: 200, end: 500, density: 0.3286229705351772 },
                { start: 500, density: 0.18911605532170828 },
              ],
              percentiles: { p75: 373 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.24783072004871343 },
                { start: 800, end: 1800, density: 0.3767696757497333 },
                { start: 1800, density: 0.37539960420155316 },
              ],
              percentiles: { p75: 2147 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.4177273424321416 },
                { start: 1800, end: 3000, density: 0.32725042171446045 },
                { start: 3000, density: 0.255022235853398 },
              ],
              percentiles: { p75: 3050 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.co.uk/",
          normalizedUrl: "https://www.yara.co.uk",
        },
      },
      extractedResults: {
        fcp: 3050,
        lcp: 3455,
        cls: "0.01",
        fid: 17,
      },
      timestamp: 1652117540217,
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
                { start: 0, end: 800, density: 0.3744650499286729 },
                { start: 800, end: 1800, density: 0.47574893009985686 },
                { start: 1800, density: 0.14978601997147029 },
              ],
              percentiles: { p75: 1396 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.564988009592325 },
                { start: 1800, end: 3000, density: 0.2756594724220617 },
                { start: 3000, density: 0.1593525179856134 },
              ],
              percentiles: { p75: 2462 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9595146712888447 },
                { start: 100, end: 300, density: 0.032190169617432214 },
                { start: 300, density: 0.008295159093722915 },
              ],
              percentiles: { p75: 14 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7013980956972399 },
                { start: 2500, end: 4000, density: 0.17337591900686997 },
                { start: 4000, density: 0.12522598529589016 },
              ],
              percentiles: { p75: 2792 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9671311182565202,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.01774443253542932,
                },
                { start: "0.25", density: 0.015124449208050499 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.691202659385017 },
                { start: 200, end: 500, density: 0.254541137361985 },
                { start: 500, density: 0.05425620325299796 },
              ],
              percentiles: { p75: 229 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.cr/",
          normalizedUrl: "https://www.yara.cr",
        },
      },
      extractedResults: {
        fcp: 2462,
        lcp: 2792,
        cls: "0.00",
        fid: 14,
      },
      timestamp: 1652117540645,
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
                  density: 0.9427857037799676,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.024121194293278424,
                },
                { start: "0.25", density: 0.03309310192675395 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6086050320083373 },
                { start: 200, end: 500, density: 0.32856930177162447 },
                { start: 500, density: 0.06282566622003825 },
              ],
              percentiles: { p75: 243 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.22410462178629773 },
                { start: 800, end: 1800, density: 0.5871600534997763 },
                { start: 1800, density: 0.18873532471392598 },
              ],
              percentiles: { p75: 1634 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.41858380639378634 },
                { start: 1800, end: 3000, density: 0.373170002987751 },
                { start: 3000, density: 0.20824619061846272 },
              ],
              percentiles: { p75: 2824 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9657214085384856 },
                { start: 100, end: 300, density: 0.027267061389841068 },
                { start: 300, density: 0.007011530071673416 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.5838951310861424 },
                { start: 2500, end: 4000, density: 0.28292134831460675 },
                { start: 4000, density: 0.13318352059925095 },
              ],
              percentiles: { p75: 3160 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.cl/",
          normalizedUrl: "https://www.yara.cl",
        },
      },
      extractedResults: {
        fcp: 2824,
        lcp: 3160,
        cls: "0.00",
        fid: 12,
      },
      timestamp: 1652117541022,
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
                  density: 0.9470912431108389,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.04335578689528475,
                },
                { start: "0.25", density: 0.009552969993876304 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5424077434966728 },
                { start: 200, end: 500, density: 0.3505142165759226 },
                { start: 500, density: 0.10707803992740476 },
              ],
              percentiles: { p75: 288 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.5886146595559966 },
                { start: 800, end: 1800, density: 0.36934143619000376 },
                { start: 1800, density: 0.04204390425399967 },
              ],
              percentiles: { p75: 1032 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8187314906219151 },
                { start: 1800, end: 3000, density: 0.14523692003948666 },
                { start: 3000, density: 0.03603158933859822 },
              ],
              percentiles: { p75: 1601 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9660096032347739 },
                { start: 100, end: 300, density: 0.021101844831943384 },
                { start: 300, density: 0.012888551933282803 },
              ],
              percentiles: { p75: 14 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8488443570199163 },
                { start: 2500, end: 4000, density: 0.11648635357757565 },
                { start: 4000, density: 0.03466928940250795 },
              ],
              percentiles: { p75: 2060 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.lv/",
          normalizedUrl: "https://www.yara.lv",
        },
      },
      extractedResults: {
        fcp: 1601,
        lcp: 2060,
        cls: "0.00",
        fid: 14,
      },
      timestamp: 1652117541533,
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
                { start: "0.00", end: "0.10", density: 0.85087816193527 },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.09720534629404616,
                },
                { start: "0.25", density: 0.051916491770683804 },
              ],
              percentiles: { p75: "0.01" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6540079716563327 },
                { start: 200, end: 500, density: 0.253764393268379 },
                { start: 500, density: 0.09222763507528836 },
              ],
              percentiles: { p75: 244 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.4444321083601642 },
                { start: 800, end: 1800, density: 0.42988786499389353 },
                { start: 1800, density: 0.12568002664594227 },
              ],
              percentiles: { p75: 1368 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6859421734795603 },
                { start: 1800, end: 3000, density: 0.1967431040212693 },
                { start: 3000, density: 0.11731472249917031 },
              ],
              percentiles: { p75: 2122 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9523269012485811 },
                { start: 100, end: 300, density: 0.03371169125993189 },
                { start: 300, density: 0.01396140749148704 },
              ],
              percentiles: { p75: 14 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.75160789532047 },
                { start: 2500, end: 4000, density: 0.15557773342204484 },
                { start: 4000, density: 0.09281437125748528 },
              ],
              percentiles: { p75: 2502 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.in/",
          normalizedUrl: "https://www.yara.in",
        },
      },
      extractedResults: {
        fcp: 2122,
        lcp: 2502,
        cls: "0.01",
        fid: 14,
      },
      timestamp: 1652117541921,
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
                  density: 0.9215302987992181,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.05738620497067859,
                },
                { start: "0.25", density: 0.02108349623010333 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.4324691190443872 },
                { start: 200, end: 500, density: 0.4205239581919369 },
                { start: 500, density: 0.14700692276367594 },
              ],
              percentiles: { p75: 363 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.6389358108108109 },
                { start: 800, end: 1800, density: 0.3307995495495495 },
                { start: 1800, density: 0.03026463963963963 },
              ],
              percentiles: { p75: 920 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8761565836298933 },
                { start: 1800, end: 3000, density: 0.10049822064056942 },
                { start: 3000, density: 0.02334519572953712 },
              ],
              percentiles: { p75: 1410 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9531315385688383 },
                { start: 100, end: 300, density: 0.02496861486957735 },
                { start: 300, density: 0.02189984656158453 },
              ],
              percentiles: { p75: 15 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8558494836610555 },
                { start: 2500, end: 4000, density: 0.11486773235252515 },
                { start: 4000, density: 0.029282783986419255 },
              ],
              percentiles: { p75: 1983 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.fi/",
          normalizedUrl: "https://www.yara.fi",
        },
      },
      extractedResults: {
        fcp: 1410,
        lcp: 1983,
        cls: "0.00",
        fid: 15,
      },
      timestamp: 1652117542303,
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
                { start: 0, end: 1800, density: 0.8397312859884832 },
                { start: 1800, end: 3000, density: 0.1140663559089662 },
                { start: 3000, density: 0.046202358102550606 },
              ],
              percentiles: { p75: 1468 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9378865286367303 },
                { start: 100, end: 300, density: 0.0338800752890562 },
                { start: 300, density: 0.02823339607421364 },
              ],
              percentiles: { p75: 15 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8593792726278368 },
                { start: 2500, end: 4000, density: 0.10069729286300244 },
                { start: 4000, density: 0.03992343450916077 },
              ],
              percentiles: { p75: 1976 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9614965986394558,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.026938775510204082,
                },
                { start: "0.25", density: 0.011564625850340137 },
              ],
              percentiles: { p75: "0.01" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.4637834969487932 },
                { start: 200, end: 500, density: 0.38670734942955715 },
                { start: 500, density: 0.14950915362164977 },
              ],
              percentiles: { p75: 348 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.6841888553390063 },
                { start: 800, end: 1800, density: 0.25144111995608015 },
                { start: 1800, density: 0.0643700247049137 },
              ],
              percentiles: { p75: 919 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.de/",
          normalizedUrl: "https://www.yara.de",
        },
      },
      extractedResults: {
        fcp: 1468,
        lcp: 1976,
        cls: "0.01",
        fid: 15,
      },
      timestamp: 1652117542702,
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
                { start: 0, end: 100, density: 0.9631308182263596 },
                { start: 100, end: 300, density: 0.02266046055854973 },
                { start: 300, density: 0.01420872121509058 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8687843616371413 },
                { start: 2500, end: 4000, density: 0.1010384850335981 },
                { start: 4000, density: 0.030177153329260624 },
              ],
              percentiles: { p75: 1939 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9766281192939744,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.015094339622641508,
                },
                { start: "0.25", density: 0.00827754108338405 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6174778230640136 },
                { start: 200, end: 500, density: 0.3007672021098059 },
                { start: 500, density: 0.08175497482618056 },
              ],
              percentiles: { p75: 248 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.5503790657862557 },
                { start: 800, end: 1800, density: 0.4037662020053802 },
                { start: 1800, density: 0.04585473220836406 },
              ],
              percentiles: { p75: 1020 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8394472976277816 },
                { start: 1800, end: 3000, density: 0.1246025923208608 },
                { start: 3000, density: 0.035950110051357606 },
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
        lcp: 1939,
        cls: "0.00",
        fid: 12,
      },
      timestamp: 1652117543113,
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
                  density: 0.9419337535201824,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.029770685262169787,
                },
                { start: "0.25", density: 0.028295561217647834 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6709532016439079 },
                { start: 200, end: 500, density: 0.27959697732997474 },
                { start: 500, density: 0.04944982102611727 },
              ],
              percentiles: { p75: 237 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.37474569374745703 },
                { start: 800, end: 1800, density: 0.4677878746778789 },
                { start: 1800, density: 0.15746643157466397 },
              ],
              percentiles: { p75: 1499 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5881233863296632 },
                { start: 1800, end: 3000, density: 0.23467862481315346 },
                { start: 3000, density: 0.17719798885718327 },
              ],
              percentiles: { p75: 2500 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9584533113944878 },
                { start: 100, end: 300, density: 0.033868092691622095 },
                { start: 300, density: 0.007678595913890035 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6599538920531607 },
                { start: 2500, end: 4000, density: 0.18165174938974804 },
                { start: 4000, density: 0.15839435855709125 },
              ],
              percentiles: { p75: 3141 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.co.za/",
          normalizedUrl: "https://www.yara.co.za",
        },
      },
      extractedResults: {
        fcp: 2500,
        lcp: 3141,
        cls: "0.00",
        fid: 12,
      },
      timestamp: 1652117543542,
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
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8487848784878488,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.12971297129712972,
                },
                { start: "0.25", density: 0.02150215021502151 },
              ],
              percentiles: { p75: "0.06" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.7257177153145943 },
                { start: 200, end: 500, density: 0.18365509652895862 },
                { start: 500, density: 0.09062718815644707 },
              ],
              percentiles: { p75: 218 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.6809 },
                { start: 800, end: 1800, density: 0.28240000000000004 },
                { start: 1800, density: 0.03669999999999991 },
              ],
              percentiles: { p75: 886 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8900549725137431 },
                { start: 1800, end: 3000, density: 0.08025987006496753 },
                { start: 3000, density: 0.029685157421289368 },
              ],
              percentiles: { p75: 1345 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9698060387922416 },
                { start: 100, end: 300, density: 0.021495700859828038 },
                { start: 300, density: 0.008698260347930418 },
              ],
              percentiles: { p75: 10 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8916783356671335 },
                { start: 2500, end: 4000, density: 0.08251650330066011 },
                { start: 4000, density: 0.025805161032206432 },
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
        fcp: 1345,
        lcp: 1852,
        cls: "0.06",
        fid: 10,
      },
      timestamp: 1652117543995,
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
                { start: 0, end: 800, density: 0.847084708470847 },
                { start: 800, end: 1800, density: 0.13031303130313035 },
                { start: 1800, density: 0.022602260226022637 },
              ],
              percentiles: { p75: 682 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.9182918291829184 },
                { start: 1800, end: 3000, density: 0.06250625062506251 },
                { start: 3000, density: 0.019201920192019124 },
              ],
              percentiles: { p75: 1197 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9641892567770332 },
                { start: 100, end: 300, density: 0.017705311593478042 },
                { start: 300, density: 0.018105431629488866 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.9122000000000001 },
                { start: 2500, end: 4000, density: 0.0695 },
                { start: 4000, density: 0.0182999999999999 },
              ],
              percentiles: { p75: 1736 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8644000000000001,
                },
                { start: "0.10", end: "0.25", density: 0.102 },
                { start: "0.25", density: 0.03360000000000001 },
              ],
              percentiles: { p75: "0.03" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5682999999999995 },
                { start: 200, end: 500, density: 0.29819999999999963 },
                { start: 500, density: 0.13350000000000098 },
              ],
              percentiles: { p75: 323 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yaraagri.cz/",
          normalizedUrl: "https://www.yaraagri.cz",
        },
      },
      extractedResults: {
        fcp: 1197,
        lcp: 1736,
        cls: "0.03",
        fid: 13,
      },
      timestamp: 1652117544347,
    },
    {
      url: "https://www.yara.no/",
      deviceTargeted: "PHONE",
      results: {
        record: {
          key: { formFactor: "PHONE", origin: "https://www.yara.no" },
          metrics: {
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.8266998341625207 },
                { start: 800, end: 1800, density: 0.15804311774461027 },
                { start: 1800, density: 0.015257048092869036 },
              ],
              percentiles: { p75: 713 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.9343713376862548 },
                { start: 1800, end: 3000, density: 0.04553825548300687 },
                { start: 3000, density: 0.02009040683073833 },
              ],
              percentiles: { p75: 1258 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9430165708488332 },
                { start: 100, end: 300, density: 0.028407169428474804 },
                { start: 300, density: 0.028576259722691826 },
              ],
              percentiles: { p75: 14 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.9305256176421821 },
                { start: 2500, end: 4000, density: 0.05455148399933677 },
                { start: 4000, density: 0.014922898358481231 },
              ],
              percentiles: { p75: 1640 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.939141784956763,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.0394844183390439,
                },
                { start: "0.25", density: 0.021373796704193197 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.605250746737934 },
                { start: 200, end: 500, density: 0.269926112246502 },
                { start: 500, density: 0.124823141015564 },
              ],
              percentiles: { p75: 278 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.no/",
          normalizedUrl: "https://www.yara.no",
        },
      },
      extractedResults: {
        fcp: 1258,
        lcp: 1640,
        cls: "0.00",
        fid: 14,
      },
      timestamp: 1652117544682,
    },
    {
      url: "https://www.yara.com.mx/",
      deviceTargeted: "PHONE",
      results: {
        record: {
          key: { formFactor: "PHONE", origin: "https://www.yara.com.mx" },
          metrics: {
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.4214209465069387 },
                { start: 800, end: 1800, density: 0.4545131063930731 },
                { start: 1800, density: 0.12406594709998833 },
              ],
              percentiles: { p75: 1321 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5960304254813403 },
                { start: 1800, end: 3000, density: 0.24661278821012583 },
                { start: 3000, density: 0.15735678630853392 },
              ],
              percentiles: { p75: 2387 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9527933642351794 },
                { start: 100, end: 300, density: 0.03305684313247134 },
                { start: 300, density: 0.014149792632349402 },
              ],
              percentiles: { p75: 14 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6980739507787423 },
                { start: 2500, end: 4000, density: 0.18006182380216385 },
                { start: 4000, density: 0.12186422541909388 },
              ],
              percentiles: { p75: 2816 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9374635398436588,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.02450122506125306,
                },
                { start: "0.25", density: 0.03803523509508807 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.4788029925187034 },
                { start: 200, end: 500, density: 0.35589597434983977 },
                { start: 500, density: 0.16530103313145675 },
              ],
              percentiles: { p75: 366 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.mx/",
          normalizedUrl: "https://www.yara.com.mx",
        },
      },
      extractedResults: {
        fcp: 2387,
        lcp: 2816,
        cls: "0.00",
        fid: 14,
      },
      timestamp: 1652117545142,
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
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5936367297623842 },
                { start: 200, end: 500, density: 0.29842931937172773 },
                { start: 500, density: 0.10793395086588808 },
              ],
              percentiles: { p75: 275 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.3978049285566367 },
                { start: 800, end: 1800, density: 0.49099192379374573 },
                { start: 1800, density: 0.11120314764961753 },
              ],
              percentiles: { p75: 1432 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6313943894389443 },
                { start: 1800, end: 3000, density: 0.2596947194719474 },
                { start: 3000, density: 0.10891089108910817 },
              ],
              percentiles: { p75: 2372 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9381765195670275 },
                { start: 100, end: 300, density: 0.03309741881765196 },
                { start: 300, density: 0.02872606161532056 },
              ],
              percentiles: { p75: 14 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7170352170352173 },
                { start: 2500, end: 4000, density: 0.192874692874693 },
                { start: 4000, density: 0.0900900900900897 },
              ],
              percentiles: { p75: 2769 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9611378205128205,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.019431089743589744,
                },
                { start: "0.25", density: 0.019431089743589744 },
              ],
              percentiles: { p75: "0.00" },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yaracanada.ca/",
          normalizedUrl: "https://www.yaracanada.ca",
        },
      },
      extractedResults: {
        fcp: 2372,
        lcp: 2769,
        cls: "0.00",
        fid: 14,
      },
      timestamp: 1652117545617,
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
                { start: 0, end: 200, density: 0.5701323251417769 },
                { start: 200, end: 500, density: 0.3334593572778828 },
                { start: 500, density: 0.09640831758034023 },
              ],
              percentiles: { p75: 266 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.6782985226693836 },
                { start: 800, end: 1800, density: 0.2640091696383087 },
                { start: 1800, density: 0.0576923076923076 },
              ],
              percentiles: { p75: 920 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8063439065108512 },
                { start: 1800, end: 3000, density: 0.1263644535764736 },
                { start: 3000, density: 0.06729163991267521 },
              ],
              percentiles: { p75: 1588 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9497539497539498 },
                { start: 100, end: 300, density: 0.032763532763532756 },
                { start: 300, density: 0.01748251748251744 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8341702072872408 },
                { start: 2500, end: 4000, density: 0.11098236127204839 },
                { start: 4000, density: 0.05484743144071076 },
              ],
              percentiles: { p75: 2077 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9798134662067204,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.0065159064775776165,
                },
                { start: "0.25", density: 0.013670627315702056 },
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
        fcp: 1588,
        lcp: 2077,
        cls: "0.00",
        fid: 13,
      },
      timestamp: 1652117546070,
    },
    {
      url: "https://www.yara.es/",
      deviceTargeted: "PHONE",
      results: {
        record: {
          key: { formFactor: "PHONE", origin: "https://www.yara.es" },
          metrics: {
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.4058923788653519 },
                { start: 200, end: 500, density: 0.417336255174093 },
                { start: 500, density: 0.17677136596055515 },
              ],
              percentiles: { p75: 395 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.518495760108148 },
                { start: 800, end: 1800, density: 0.38687476957109496 },
                { start: 1800, density: 0.0946294703207571 },
              ],
              percentiles: { p75: 1168 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7107776261937248 },
                { start: 1800, end: 3000, density: 0.19149200049609336 },
                { start: 3000, density: 0.09773037331018182 },
              ],
              percentiles: { p75: 1951 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9226361031518626 },
                { start: 100, end: 300, density: 0.04360284041360409 },
                { start: 300, density: 0.03376105643453339 },
              ],
              percentiles: { p75: 16 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7613650439737395 },
                { start: 2500, end: 4000, density: 0.16270283661588006 },
                { start: 4000, density: 0.07593211941038053 },
              ],
              percentiles: { p75: 2455 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9322807450351549,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.030097446651042307,
                },
                { start: "0.25", density: 0.03762180831380287 },
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
        fcp: 1951,
        lcp: 2455,
        cls: "0.01",
        fid: 16,
      },
      timestamp: 1652117546539,
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
                { start: 0, end: 800, density: 0.409555888223553 },
                { start: 800, end: 1800, density: 0.49064371257485034 },
                { start: 1800, density: 0.09980039920159677 },
              ],
              percentiles: { p75: 1200 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6443079237713136 },
                { start: 1800, end: 3000, density: 0.2443580742226679 },
                { start: 3000, density: 0.11133400200601842 },
              ],
              percentiles: { p75: 2144 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9610778443113771 },
                { start: 100, end: 300, density: 0.028170930865541646 },
                { start: 300, density: 0.010751224823081112 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7494373593398344 },
                { start: 2500, end: 4000, density: 0.14991247811952976 },
                { start: 4000, density: 0.10065016254063579 },
              ],
              percentiles: { p75: 2536 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9712751342575248,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.013363307106282007,
                },
                { start: "0.25", density: 0.015361558636193316 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.63720703125 },
                { start: 200, end: 500, density: 0.31958007812500006 },
                { start: 500, density: 0.04321289062499991 },
              ],
              percentiles: { p75: 245 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.pa/",
          normalizedUrl: "https://www.yara.com.pa",
        },
      },
      extractedResults: {
        fcp: 2144,
        lcp: 2536,
        cls: "0.00",
        fid: 12,
      },
      timestamp: 1652117547034,
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
                  density: 0.8794019933554817,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.108859357696567,
                },
                { start: "0.25", density: 0.01173864894795127 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5508961785593506 },
                { start: 200, end: 500, density: 0.3326569721564648 },
                { start: 500, density: 0.11644684928418465 },
              ],
              percentiles: { p75: 294 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.6719384953322348 },
                { start: 800, end: 1800, density: 0.2806150466776495 },
                { start: 1800, density: 0.04744645799011562 },
              ],
              percentiles: { p75: 927 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8118130343066498 },
                { start: 1800, end: 3000, density: 0.13556123015432434 },
                { start: 3000, density: 0.05262573553902584 },
              ],
              percentiles: { p75: 1618 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.939761822175974 },
                { start: 100, end: 300, density: 0.03757659845068794 },
                { start: 300, density: 0.02266157937333799 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8458751393534001 },
                { start: 2500, end: 4000, density: 0.11053511705685617 },
                { start: 4000, density: 0.043589743589743726 },
              ],
              percentiles: { p75: 2033 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.pl/",
          normalizedUrl: "https://www.yara.pl",
        },
      },
      extractedResults: {
        fcp: 1618,
        lcp: 2033,
        cls: "0.00",
        fid: 13,
      },
      timestamp: 1652117547506,
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
                { start: 0, end: 200, density: 0.4796979450358998 },
                { start: 200, end: 500, density: 0.3604852686308491 },
                { start: 500, density: 0.15981678633325108 },
              ],
              percentiles: { p75: 366 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.823544400560581 },
                { start: 800, end: 1800, density: 0.1516116702764684 },
                { start: 1800, density: 0.024843929162950758 },
              ],
              percentiles: { p75: 718 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.9069855254877283 },
                { start: 1800, end: 3000, density: 0.07212083071113908 },
                { start: 3000, density: 0.02089364380113274 },
              ],
              percentiles: { p75: 1247 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9556694426649583 },
                { start: 100, end: 300, density: 0.021652786675208195 },
                { start: 300, density: 0.022677770659833493 },
              ],
              percentiles: { p75: 15 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.901708328099485 },
                { start: 2500, end: 4000, density: 0.07794246953900266 },
                { start: 4000, density: 0.02034920236151231 },
              ],
              percentiles: { p75: 1806 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8890140140140141,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.08045545545545546,
                },
                { start: "0.25", density: 0.03053053053053055 },
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
        fcp: 1247,
        lcp: 1806,
        cls: "0.00",
        fid: 15,
      },
      timestamp: 1652117547923,
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
                  density: 0.952238380382093,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.025662959794696315,
                },
                { start: "0.25", density: 0.022098659823210732 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.669220945083014 },
                { start: 200, end: 500, density: 0.24535263232581242 },
                { start: 500, density: 0.08542642259117363 },
              ],
              percentiles: { p75: 238 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.3869609409031504 },
                { start: 800, end: 1800, density: 0.3756352548279363 },
                { start: 1800, density: 0.23740380426891325 },
              ],
              percentiles: { p75: 1773 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5901878002620451 },
                { start: 1800, end: 3000, density: 0.21473285776677764 },
                { start: 3000, density: 0.1950793419711771 },
              ],
              percentiles: { p75: 2679 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9504576492808369 },
                { start: 100, end: 300, density: 0.0355949440650879 },
                { start: 300, density: 0.013947406654075262 },
              ],
              percentiles: { p75: 14 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6567110211165759 },
                { start: 2500, end: 4000, density: 0.20545270465721752 },
                { start: 4000, density: 0.1378362742262066 },
              ],
              percentiles: { p75: 3006 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.au/",
          normalizedUrl: "https://www.yara.com.au",
        },
      },
      extractedResults: {
        fcp: 2679,
        lcp: 3006,
        cls: "0.00",
        fid: 14,
      },
      timestamp: 1652117548360,
    },
    {
      url: "https://www.yara.vn/",
      deviceTargeted: "PHONE",
      results: {
        record: {
          key: { formFactor: "PHONE", origin: "https://www.yara.vn" },
          metrics: {
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.7750775077507752 },
                { start: 200, end: 500, density: 0.16641664166416648 },
                { start: 500, density: 0.0585058505850584 },
              ],
              percentiles: { p75: 189 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8331951190617228 },
                { start: 1800, end: 3000, density: 0.12060182442838531 },
                { start: 3000, density: 0.04620305650989189 },
              ],
              percentiles: { p75: 1451 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8705258948210357 },
                { start: 2500, end: 4000, density: 0.09548090381923612 },
                { start: 4000, density: 0.03399320135972824 },
              ],
              percentiles: { p75: 1780 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8944000000000001,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.07480000000000002,
                },
                { start: "0.25", density: 0.03079999999999999 },
              ],
              percentiles: { p75: "0.01" },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.vn/",
          normalizedUrl: "https://www.yara.vn",
        },
      },
      extractedResults: { fcp: 1451, lcp: 1780, cls: "0.01" },
      timestamp: 1652117548809,
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
                  density: 0.9548045195480452,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.03369663033696631,
                },
                { start: "0.25", density: 0.011498850114988496 },
              ],
              percentiles: { p75: "0.01" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6606642657062823 },
                { start: 200, end: 500, density: 0.26430572228891547 },
                { start: 500, density: 0.07503001200480224 },
              ],
              percentiles: { p75: 234 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.5725709716113554 },
                { start: 800, end: 1800, density: 0.3843462614954018 },
                { start: 1800, density: 0.043082766893242856 },
              ],
              percentiles: { p75: 993 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8493698739747948 },
                { start: 1800, end: 3000, density: 0.11672334466893373 },
                { start: 3000, density: 0.03390678135627157 },
              ],
              percentiles: { p75: 1521 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.967290187056117 },
                { start: 100, end: 300, density: 0.01970591177353206 },
                { start: 300, density: 0.013003901170351068 },
              ],
              percentiles: { p75: 11 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8623275344931012 },
                { start: 2500, end: 4000, density: 0.10557888422315533 },
                { start: 4000, density: 0.03209358128374361 },
              ],
              percentiles: { p75: 1976 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.hu/",
          normalizedUrl: "https://www.yara.hu",
        },
      },
      extractedResults: {
        fcp: 1521,
        lcp: 1976,
        cls: "0.01",
        fid: 11,
      },
      timestamp: 1652117549315,
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
                { start: "0.00", end: "0.10", density: 0.954 },
                { start: "0.10", end: "0.25", density: 0.0333 },
                { start: "0.25", density: 0.012700000000000001 },
              ],
              percentiles: { p75: "0.03" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.7182281771822818 },
                { start: 200, end: 500, density: 0.2012798720127987 },
                { start: 500, density: 0.08049195080491942 },
              ],
              percentiles: { p75: 226 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.7633 },
                { start: 800, end: 1800, density: 0.21049999999999996 },
                { start: 1800, density: 0.026199999999999998 },
              ],
              percentiles: { p75: 793 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.9119352259096362 },
                { start: 1800, end: 3000, density: 0.07227109156337466 },
                { start: 3000, density: 0.015793682526989244 },
              ],
              percentiles: { p75: 1296 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9782 },
                { start: 100, end: 300, density: 0.013499999999999998 },
                { start: 300, density: 0.008299999999999998 },
              ],
              percentiles: { p75: 10 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.9165083491650835 },
                { start: 2500, end: 4000, density: 0.06379362063793619 },
                { start: 4000, density: 0.019698030196980264 },
              ],
              percentiles: { p75: 1813 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.ee/",
          normalizedUrl: "https://www.yara.ee",
        },
      },
      extractedResults: {
        fcp: 1296,
        lcp: 1813,
        cls: "0.03",
        fid: 10,
      },
      timestamp: 1652117549694,
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
                  density: 0.7732773277327732,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.16621662166216622,
                },
                { start: "0.25", density: 0.060506050605060493 },
              ],
              percentiles: { p75: "0.07" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.7748774877487749 },
                { start: 200, end: 500, density: 0.15991599159915992 },
                { start: 500, density: 0.06520652065206518 },
              ],
              percentiles: { p75: 193 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.5094981003799242 },
                { start: 800, end: 1800, density: 0.40741851629674075 },
                { start: 1800, density: 0.08308338332333509 },
              ],
              percentiles: { p75: 1265 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7220888355342125 },
                { start: 1800, end: 3000, density: 0.19237695078031186 },
                { start: 3000, density: 0.08553421368547551 },
              ],
              percentiles: { p75: 2054 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9684063187362527 },
                { start: 100, end: 300, density: 0.016796640671865627 },
                { start: 300, density: 0.014797040591881616 },
              ],
              percentiles: { p75: 9 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7393500000000015 },
                { start: 2500, end: 4000, density: 0.1713500000000004 },
                { start: 4000, density: 0.08929999999999798 },
              ],
              percentiles: { p75: 2692 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yaracanada.ca/",
          normalizedUrl: "https://www.yaracanada.ca",
        },
      },
      extractedResults: { fcp: 2054, lcp: 2692, cls: "0.07", fid: 9 },
      timestamp: 1652117550074,
    },
    {
      url: "https://www.yara.nl/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "https://www.yara.nl" },
          metrics: {
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.7097290270972905 },
                { start: 200, end: 500, density: 0.1917808219178083 },
                { start: 500, density: 0.09849015098490135 },
              ],
              percentiles: { p75: 225 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.7334733473347332 },
                { start: 800, end: 1800, density: 0.22752275227522747 },
                { start: 1800, density: 0.0390039003900393 },
              ],
              percentiles: { p75: 835 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8917216556688656 },
                { start: 1800, end: 3000, density: 0.07258548290341925 },
                { start: 3000, density: 0.03569286142771515 },
              ],
              percentiles: { p75: 1291 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9630889266780035 },
                { start: 100, end: 300, density: 0.018005401620486146 },
                { start: 300, density: 0.01890567170151046 },
              ],
              percentiles: { p75: 10 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8598499999999992 },
                { start: 2500, end: 4000, density: 0.09754999999999989 },
                { start: 4000, density: 0.042600000000000714 },
              ],
              percentiles: { p75: 1936 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.7813781378137814,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.17631763176317633,
                },
                { start: "0.25", density: 0.04230423042304231 },
              ],
              percentiles: { p75: "0.08" },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.nl/",
          normalizedUrl: "https://www.yara.nl",
        },
      },
      extractedResults: {
        fcp: 1291,
        lcp: 1936,
        cls: "0.08",
        fid: 10,
      },
      timestamp: 1652117550406,
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
                { start: 0, end: 1800, density: 0.7220888355342125 },
                { start: 1800, end: 3000, density: 0.19237695078031186 },
                { start: 3000, density: 0.08553421368547551 },
              ],
              percentiles: { p75: 2054 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9684063187362527 },
                { start: 100, end: 300, density: 0.016796640671865627 },
                { start: 300, density: 0.014797040591881616 },
              ],
              percentiles: { p75: 9 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7393500000000015 },
                { start: 2500, end: 4000, density: 0.1713500000000004 },
                { start: 4000, density: 0.08929999999999798 },
              ],
              percentiles: { p75: 2692 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.7732773277327732,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.16621662166216622,
                },
                { start: "0.25", density: 0.060506050605060493 },
              ],
              percentiles: { p75: "0.07" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.7748774877487749 },
                { start: 200, end: 500, density: 0.15991599159915992 },
                { start: 500, density: 0.06520652065206518 },
              ],
              percentiles: { p75: 193 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.5094981003799242 },
                { start: 800, end: 1800, density: 0.40741851629674075 },
                { start: 1800, density: 0.08308338332333509 },
              ],
              percentiles: { p75: 1265 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yaracanada.ca/fr-ca/",
          normalizedUrl: "https://www.yaracanada.ca",
        },
      },
      extractedResults: { fcp: 2054, lcp: 2692, cls: "0.07", fid: 9 },
      timestamp: 1652117550766,
    },
    {
      url: "https://www.yara.no/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "https://www.yara.no" },
          metrics: {
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.7389522095580882 },
                { start: 200, end: 500, density: 0.17786442711457698 },
                { start: 500, density: 0.08318336332733478 },
              ],
              percentiles: { p75: 210 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.8481 },
                { start: 800, end: 1800, density: 0.13830000000000003 },
                { start: 1800, density: 0.013600000000000024 },
              ],
              percentiles: { p75: 675 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.945510897820436 },
                { start: 1800, end: 3000, density: 0.04029194161167767 },
                { start: 3000, density: 0.014197160567886426 },
              ],
              percentiles: { p75: 1132 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9649 },
                { start: 100, end: 300, density: 0.017900000000000003 },
                { start: 300, density: 0.017199999999999948 },
              ],
              percentiles: { p75: 11 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.9395439543954396 },
                { start: 2500, end: 4000, density: 0.04695469546954698 },
                { start: 4000, density: 0.013501350135013492 },
              ],
              percentiles: { p75: 1583 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8193999999999999,
                },
                { start: "0.10", end: "0.25", density: 0.1364 },
                { start: "0.25", density: 0.04420000000000001 },
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
        fcp: 1132,
        lcp: 1583,
        cls: "0.06",
        fid: 11,
      },
      timestamp: 1652117551109,
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
                { start: 0, end: 1800, density: 0.5019498050194979 },
                { start: 1800, end: 3000, density: 0.32156784321567844 },
                { start: 3000, density: 0.17648235176482355 },
              ],
              percentiles: { p75: 2650 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.978004399120176 },
                { start: 100, end: 300, density: 0.01749650069986003 },
                { start: 300, density: 0.004499100179964005 },
              ],
              percentiles: { p75: 10 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6183618361836185 },
                { start: 2500, end: 4000, density: 0.24152415241524158 },
                { start: 4000, density: 0.14011401140114008 },
              ],
              percentiles: { p75: 3136 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8226822682268227,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.1031103110311031,
                },
                { start: "0.25", density: 0.0742074207420742 },
              ],
              percentiles: { p75: "0.08" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.7166849945016496 },
                { start: 200, end: 500, density: 0.23303009097270827 },
                { start: 500, density: 0.0502849145256421 },
              ],
              percentiles: { p75: 214 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.2707541508301659 },
                { start: 800, end: 1800, density: 0.572814562912582 },
                { start: 1800, density: 0.15643128625725194 },
              ],
              percentiles: { p75: 1557 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.cl/",
          normalizedUrl: "https://www.yara.cl",
        },
      },
      extractedResults: {
        fcp: 2650,
        lcp: 3136,
        cls: "0.08",
        fid: 10,
      },
      timestamp: 1652117551422,
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
                { start: "0.00", end: "0.10", density: 0.8428 },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.13520000000000001,
                },
                { start: "0.25", density: 0.021999999999999992 },
              ],
              percentiles: { p75: "0.03" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5968209537138855 },
                { start: 200, end: 500, density: 0.29871038688393464 },
                { start: 500, density: 0.10446865940217984 },
              ],
              percentiles: { p75: 277 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.6843999999999999 },
                { start: 800, end: 1800, density: 0.27089999999999986 },
                { start: 1800, density: 0.04470000000000027 },
              ],
              percentiles: { p75: 908 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8230823082308224 },
                { start: 1800, end: 3000, density: 0.1277127712771276 },
                { start: 3000, density: 0.049204920492049886 },
              ],
              percentiles: { p75: 1584 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.947 },
                { start: 100, end: 300, density: 0.033 },
                { start: 300, density: 0.020000000000000035 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.851285128512851 },
                { start: 2500, end: 4000, density: 0.10691069106910689 },
                { start: 4000, density: 0.04180418041804213 },
              ],
              percentiles: { p75: 2012 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.pl/",
          normalizedUrl: "https://www.yara.pl",
        },
      },
      extractedResults: {
        fcp: 1584,
        lcp: 2012,
        cls: "0.03",
        fid: 12,
      },
      timestamp: 1652117551742,
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
                { start: 0, end: 800, density: 0.453135940782234 },
                { start: 800, end: 1800, density: 0.4112233670101025 },
                { start: 1800, density: 0.1356406922076634 },
              ],
              percentiles: { p75: 1345 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6327632763276322 },
                { start: 1800, end: 3000, density: 0.2110211021102108 },
                { start: 3000, density: 0.1562156215621569 },
              ],
              percentiles: { p75: 2344 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9496151154653607 },
                { start: 100, end: 300, density: 0.03049085274417675 },
                { start: 300, density: 0.019894031790462632 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.70264052810562 },
                { start: 2500, end: 4000, density: 0.16253250650129988 },
                { start: 4000, density: 0.13482696539307998 },
              ],
              percentiles: { p75: 2851 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8876999999999999,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.06079999999999999,
                },
                { start: "0.25", density: 0.051500000000000004 },
              ],
              percentiles: { p75: "0.01" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6322000000000005 },
                { start: 200, end: 500, density: 0.2800000000000003 },
                { start: 500, density: 0.08779999999999916 },
              ],
              percentiles: { p75: 259 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.co/",
          normalizedUrl: "https://www.yara.com.co",
        },
      },
      extractedResults: {
        fcp: 2344,
        lcp: 2851,
        cls: "0.01",
        fid: 12,
      },
      timestamp: 1652117552055,
    },
    {
      url: "https://www.yara.cr/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "https://www.yara.cr" },
          metrics: {
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5996400359964007 },
                { start: 1800, end: 3000, density: 0.2557744225577444 },
                { start: 3000, density: 0.14458554144585498 },
              ],
              percentiles: { p75: 2349 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9652034796520349 },
                { start: 100, end: 300, density: 0.027097290270972903 },
                { start: 300, density: 0.007699230076992299 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7023202320232005 },
                { start: 2500, end: 4000, density: 0.16936693669366898 },
                { start: 4000, density: 0.12831283128313056 },
              ],
              percentiles: { p75: 2794 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9386000000000001,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.04530000000000001,
                },
                { start: "0.25", density: 0.016099999999999996 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.7230723072307229 },
                { start: 200, end: 500, density: 0.224022402240224 },
                { start: 500, density: 0.052905290529052976 },
              ],
              percentiles: { p75: 214 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.40831833633273246 },
                { start: 800, end: 1800, density: 0.45700859828034285 },
                { start: 1800, density: 0.1346730653869245 },
              ],
              percentiles: { p75: 1343 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.cr/",
          normalizedUrl: "https://www.yara.cr",
        },
      },
      extractedResults: {
        fcp: 2349,
        lcp: 2794,
        cls: "0.00",
        fid: 12,
      },
      timestamp: 1652117552382,
    },
    {
      url: "https://www.yara.com.ec/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "https://www.yara.com.ec" },
          metrics: {
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.4351694491652501 },
                { start: 800, end: 1800, density: 0.44496651004698556 },
                { start: 1800, density: 0.11986404078776436 },
              ],
              percentiles: { p75: 1319 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6081999999999993 },
                { start: 1800, end: 3000, density: 0.24359999999999973 },
                { start: 3000, density: 0.14820000000000105 },
              ],
              percentiles: { p75: 2394 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9689031096890312 },
                { start: 100, end: 300, density: 0.021997800219978002 },
                { start: 300, density: 0.009099090090990886 },
              ],
              percentiles: { p75: 11 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.689425770308122 },
                { start: 2500, end: 4000, density: 0.19272709083633424 },
                { start: 4000, density: 0.11784713885554382 },
              ],
              percentiles: { p75: 2820 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9280928092809282,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.04480448044804482,
                },
                { start: "0.25", density: 0.02710271027102711 },
              ],
              percentiles: { p75: "0.01" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6701329867013304 },
                { start: 200, end: 500, density: 0.26027397260273993 },
                { start: 500, density: 0.0695930406959297 },
              ],
              percentiles: { p75: 243 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.ec/",
          normalizedUrl: "https://www.yara.com.ec",
        },
      },
      extractedResults: {
        fcp: 2394,
        lcp: 2820,
        cls: "0.01",
        fid: 11,
      },
      timestamp: 1652117552794,
    },
    {
      url: "https://www.yara.com.gt/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "https://www.yara.com.gt" },
          metrics: {
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7124862541237621 },
                { start: 1800, end: 3000, density: 0.1887433769869037 },
                { start: 3000, density: 0.09877036888933428 },
              ],
              percentiles: { p75: 1958 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9690969096909692 },
                { start: 100, end: 300, density: 0.021402140214021405 },
                { start: 300, density: 0.00950095009500953 },
              ],
              percentiles: { p75: 11 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7604739526047396 },
                { start: 2500, end: 4000, density: 0.14353564643535646 },
                { start: 4000, density: 0.09599040095990395 },
              ],
              percentiles: { p75: 2461 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9237999999999998,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.044899999999999995,
                },
                { start: "0.25", density: 0.031299999999999994 },
              ],
              percentiles: { p75: "0.01" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6425714857028597 },
                { start: 200, end: 500, density: 0.23425314937012606 },
                { start: 500, density: 0.12317536492701424 },
              ],
              percentiles: { p75: 269 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.5372148859543813 },
                { start: 800, end: 1800, density: 0.3783513405362141 },
                { start: 1800, density: 0.08443377350940444 },
              ],
              percentiles: { p75: 1135 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.gt/",
          normalizedUrl: "https://www.yara.com.gt",
        },
      },
      extractedResults: {
        fcp: 1958,
        lcp: 2461,
        cls: "0.01",
        fid: 11,
      },
      timestamp: 1652117553155,
    },
    {
      url: "https://www.yara.pt/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "https://www.yara.pt" },
          metrics: {
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.7041000000000001 },
                { start: 800, end: 1800, density: 0.24440000000000003 },
                { start: 1800, density: 0.05149999999999993 },
              ],
              percentiles: { p75: 884 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8307507747675693 },
                { start: 1800, end: 3000, density: 0.11036688993302003 },
                { start: 3000, density: 0.05888233529941062 },
              ],
              percentiles: { p75: 1475 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9607921584316864 },
                { start: 100, end: 300, density: 0.025705141028205647 },
                { start: 300, density: 0.013502700540107992 },
              ],
              percentiles: { p75: 11 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8454345434543457 },
                { start: 2500, end: 4000, density: 0.10256025602560262 },
                { start: 4000, density: 0.05200520052005164 },
              ],
              percentiles: { p75: 2016 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9528905781156232,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.03150630126025205,
                },
                { start: "0.25", density: 0.015603120624124832 },
              ],
              percentiles: { p75: "0.01" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6517348265173484 },
                { start: 200, end: 500, density: 0.26957304269573046 },
                { start: 500, density: 0.0786921307869212 },
              ],
              percentiles: { p75: 245 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.pt/",
          normalizedUrl: "https://www.yara.pt",
        },
      },
      extractedResults: {
        fcp: 1475,
        lcp: 2016,
        cls: "0.01",
        fid: 11,
      },
      timestamp: 1652117553481,
    },
    {
      url: "https://www.yara.com.mx/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "https://www.yara.com.mx" },
          metrics: {
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5357464253574646 },
                { start: 200, end: 500, density: 0.3124687531246877 },
                { start: 500, density: 0.15178482151784775 },
              ],
              percentiles: { p75: 341 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.43353005901770514 },
                { start: 800, end: 1800, density: 0.44693408022406694 },
                { start: 1800, density: 0.11953586075822797 },
              ],
              percentiles: { p75: 1297 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6090609060906081 },
                { start: 1800, end: 3000, density: 0.23832383238323784 },
                { start: 3000, density: 0.1526152615261541 },
              ],
              percentiles: { p75: 2344 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9566 },
                { start: 100, end: 300, density: 0.029600000000000005 },
                { start: 300, density: 0.013799999999999982 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6927692769276917 },
                { start: 2500, end: 4000, density: 0.1775177517751773 },
                { start: 4000, density: 0.12971297129713086 },
              ],
              percentiles: { p75: 2856 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.885011498850115,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.06599340065993402,
                },
                { start: "0.25", density: 0.048995100489951045 },
              ],
              percentiles: { p75: "0.01" },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.mx/",
          normalizedUrl: "https://www.yara.com.mx",
        },
      },
      extractedResults: {
        fcp: 2344,
        lcp: 2856,
        cls: "0.01",
        fid: 13,
      },
      timestamp: 1652117553805,
    },
    {
      url: "https://www.yara.ro/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "https://www.yara.ro" },
          metrics: {
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8447810437912417 },
                { start: 2500, end: 4000, density: 0.11492701459708062 },
                { start: 4000, density: 0.04029194161167762 },
              ],
              percentiles: { p75: 2065 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8956104389561045,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.09229077092290772,
                },
                { start: "0.25", density: 0.012098790120987886 },
              ],
              percentiles: { p75: "0.01" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.664267146570686 },
                { start: 200, end: 500, density: 0.26274745050989806 },
                { start: 500, density: 0.07298540291941591 },
              ],
              percentiles: { p75: 241 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.5596000000000002 },
                { start: 800, end: 1800, density: 0.39650000000000013 },
                { start: 1800, density: 0.04389999999999957 },
              ],
              percentiles: { p75: 1046 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8402840284028403 },
                { start: 1800, end: 3000, density: 0.11941194119411945 },
                { start: 3000, density: 0.040304030403040265 },
              ],
              percentiles: { p75: 1551 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9578957895789578 },
                { start: 100, end: 300, density: 0.022802280228022796 },
                { start: 300, density: 0.01930193019301938 },
              ],
              percentiles: { p75: 11 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.ro/",
          normalizedUrl: "https://www.yara.ro",
        },
      },
      extractedResults: {
        fcp: 1551,
        lcp: 2065,
        cls: "0.01",
        fid: 11,
      },
      timestamp: 1652117554139,
    },
    {
      url: "https://www.yara.com.pa/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "https://www.yara.com.pa" },
          metrics: {
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.43170000000000003 },
                { start: 800, end: 1800, density: 0.47789999999999994 },
                { start: 1800, density: 0.09039999999999997 },
              ],
              percentiles: { p75: 1192 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6713671367136711 },
                { start: 1800, end: 3000, density: 0.22742274227422737 },
                { start: 3000, density: 0.10121012101210146 },
              ],
              percentiles: { p75: 2111 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9713971397139715 },
                { start: 100, end: 300, density: 0.020702070207020706 },
                { start: 300, density: 0.007900790079007902 },
              ],
              percentiles: { p75: 11 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.73165 },
                { start: 2500, end: 4000, density: 0.14555000000000004 },
                { start: 4000, density: 0.12280000000000005 },
              ],
              percentiles: { p75: 2652 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9357000000000001,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.04650000000000001,
                },
                { start: "0.25", density: 0.01779999999999999 },
              ],
              percentiles: { p75: "0.01" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6914691469146915 },
                { start: 200, end: 500, density: 0.26752675267526754 },
                { start: 500, density: 0.041004100410040885 },
              ],
              percentiles: { p75: 228 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.pa/",
          normalizedUrl: "https://www.yara.com.pa",
        },
      },
      extractedResults: {
        fcp: 2111,
        lcp: 2652,
        cls: "0.01",
        fid: 11,
      },
      timestamp: 1652117554478,
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
                { start: 0, end: 100, density: 0.9743 },
                { start: 100, end: 300, density: 0.0199 },
                { start: 300, density: 0.005800000000000005 },
              ],
              percentiles: { p75: 11 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6422857714228578 },
                { start: 2500, end: 4000, density: 0.22012798720127996 },
                { start: 4000, density: 0.13758624137586212 },
              ],
              percentiles: { p75: 3068 },
            },
            cumulative_layout_shift: {
              histogram: [
                { start: "0.00", end: "0.10", density: 0.9124 },
                { start: "0.10", end: "0.25", density: 0.0626 },
                { start: "0.25", density: 0.024999999999999977 },
              ],
              percentiles: { p75: "0.03" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6295629562956296 },
                { start: 200, end: 500, density: 0.30093009300930096 },
                { start: 500, density: 0.06950695069506943 },
              ],
              percentiles: { p75: 258 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.3158999999999998 },
                { start: 800, end: 1800, density: 0.4964999999999996 },
                { start: 1800, density: 0.1876000000000004 },
              ],
              percentiles: { p75: 1621 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5319595878763621 },
                { start: 1800, end: 3000, density: 0.2977893368010399 },
                { start: 3000, density: 0.1702510753225979 },
              ],
              percentiles: { p75: 2595 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.pe/",
          normalizedUrl: "https://www.yara.com.pe",
        },
      },
      extractedResults: {
        fcp: 2595,
        lcp: 3068,
        cls: "0.03",
        fid: 11,
      },
      timestamp: 1652117554791,
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
                  density: 0.7647235276472352,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.1625837416258374,
                },
                { start: "0.25", density: 0.07269273072692736 },
              ],
              percentiles: { p75: "0.08" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.7316000000000001 },
                { start: 200, end: 500, density: 0.18520000000000003 },
                { start: 500, density: 0.08319999999999986 },
              ],
              percentiles: { p75: 217 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.7601959216313474 },
                { start: 800, end: 1800, density: 0.21601359456217512 },
                { start: 1800, density: 0.023790483806477393 },
              ],
              percentiles: { p75: 813 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.9066 },
                { start: 1800, end: 3000, density: 0.0679 },
                { start: 3000, density: 0.025499999999999984 },
              ],
              percentiles: { p75: 1266 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9606118164550633 },
                { start: 100, end: 300, density: 0.01709487153853844 },
                { start: 300, density: 0.022293312006398072 },
              ],
              percentiles: { p75: 10 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8895389538953895 },
                { start: 2500, end: 4000, density: 0.07675767576757675 },
                { start: 4000, density: 0.03370337033703377 },
              ],
              percentiles: { p75: 1799 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.be/fr-be/",
          normalizedUrl: "https://www.yara.be",
        },
      },
      extractedResults: {
        fcp: 1266,
        lcp: 1799,
        cls: "0.08",
        fid: 10,
      },
      timestamp: 1652117555105,
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
                { start: 0, end: 2500, density: 0.47951834346162475 },
                { start: 2500, end: 4000, density: 0.2484807562457797 },
                { start: 4000, density: 0.27200090029259566 },
              ],
              percentiles: { p75: 4244 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8744414655942807,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.08746648793565684,
                },
                { start: "0.25", density: 0.03809204647006257 },
              ],
              percentiles: { p75: "0.01" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.43415077202543123 },
                { start: 200, end: 500, density: 0.3209582198001816 },
                { start: 500, density: 0.2448910081743872 },
              ],
              percentiles: { p75: 489 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.35859766277128535 },
                { start: 800, end: 1800, density: 0.39554813578185843 },
                { start: 1800, density: 0.2458542014468561 },
              ],
              percentiles: { p75: 1820 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.4312977099236693 },
                { start: 1800, end: 3000, density: 0.2531432420296394 },
                { start: 3000, density: 0.3155590480466913 },
              ],
              percentiles: { p75: 3480 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.8931608994524057 },
                { start: 100, end: 300, density: 0.06710940230688568 },
                { start: 300, density: 0.03972969824070858 },
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
        fcp: 3480,
        lcp: 4244,
        cls: "0.01",
        fid: 19,
      },
      timestamp: 1652117555425,
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
                  density: 0.8463846384638465,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.0979097909790979,
                },
                { start: "0.25", density: 0.055705570557055675 },
              ],
              percentiles: { p75: "0.03" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5610316904928521 },
                { start: 200, end: 500, density: 0.31730480855743287 },
                { start: 500, density: 0.12166350094971506 },
              ],
              percentiles: { p75: 309 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.7153853843846845 },
                { start: 800, end: 1800, density: 0.2291312606218134 },
                { start: 1800, density: 0.055483354993502196 },
              ],
              percentiles: { p75: 861 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8614861486148611 },
                { start: 1800, end: 3000, density: 0.09890989098909884 },
                { start: 3000, density: 0.03960396039604012 },
              ],
              percentiles: { p75: 1379 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.949720111955218 },
                { start: 100, end: 300, density: 0.0272890843662535 },
                { start: 300, density: 0.02299080367852854 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8687868786878685 },
                { start: 2500, end: 4000, density: 0.09370937093709363 },
                { start: 4000, density: 0.0375037503750378 },
              ],
              percentiles: { p75: 1920 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.de/",
          normalizedUrl: "https://www.yara.de",
        },
      },
      extractedResults: {
        fcp: 1379,
        lcp: 1920,
        cls: "0.03",
        fid: 13,
      },
      timestamp: 1652117556014,
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
                  density: 0.8516237402015676,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.09260918253079506,
                },
                { start: "0.25", density: 0.05576707726763717 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5687380173677684 },
                { start: 200, end: 500, density: 0.31464982519454177 },
                { start: 500, density: 0.11661215743768988 },
              ],
              percentiles: { p75: 291 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.2586381541924585 },
                { start: 800, end: 1800, density: 0.4391671356218333 },
                { start: 1800, density: 0.3021947101857081 },
              ],
              percentiles: { p75: 1972 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.4813853790613714 },
                { start: 1800, end: 3000, density: 0.2583483754512632 },
                { start: 3000, density: 0.26026624548736543 },
              ],
              percentiles: { p75: 3116 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9467998606109884 },
                { start: 100, end: 300, density: 0.04007434080613312 },
                { start: 300, density: 0.013125798582878403 },
              ],
              percentiles: { p75: 15 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.5355009579623575 },
                { start: 2500, end: 4000, density: 0.2494646680942183 },
                { start: 4000, density: 0.21503437394342417 },
              ],
              percentiles: { p75: 3724 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.co.ke/",
          normalizedUrl: "https://www.yara.co.ke",
        },
      },
      extractedResults: {
        fcp: 3116,
        lcp: 3724,
        cls: "0.00",
        fid: 15,
      },
      timestamp: 1652117556361,
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
                  density: 0.933194396202385,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.05893249971054764,
                },
                { start: "0.25", density: 0.007873104087067274 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6235724074920057 },
                { start: 200, end: 500, density: 0.29613978985838296 },
                { start: 500, density: 0.08028780264961136 },
              ],
              percentiles: { p75: 257 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.541216137658412 },
                { start: 800, end: 1800, density: 0.41285896988722254 },
                { start: 1800, density: 0.045924892454365276 },
              ],
              percentiles: { p75: 1062 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8315716111046577 },
                { start: 1800, end: 3000, density: 0.12754094552212794 },
                { start: 3000, density: 0.04088744337321429 },
              ],
              percentiles: { p75: 1580 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9512624779800352 },
                { start: 100, end: 300, density: 0.02677627715795654 },
                { start: 300, density: 0.021961244862008303 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8467000349202656 },
                { start: 2500, end: 4000, density: 0.11546967756954954 },
                { start: 4000, density: 0.03783028751018481 },
              ],
              percentiles: { p75: 2060 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.ro/",
          normalizedUrl: "https://www.yara.ro",
        },
      },
      extractedResults: {
        fcp: 1580,
        lcp: 2060,
        cls: "0.00",
        fid: 12,
      },
      timestamp: 1652117556851,
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
                { start: "0.00", end: "0.10", density: 0.9338 },
                { start: "0.10", end: "0.25", density: 0.0359 },
                { start: "0.25", density: 0.030299999999999983 },
              ],
              percentiles: { p75: "0.01" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5838832233553292 },
                { start: 200, end: 500, density: 0.30183963207358533 },
                { start: 500, density: 0.11427714457108565 },
              ],
              percentiles: { p75: 276 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.7934000000000001 },
                { start: 800, end: 1800, density: 0.17080000000000004 },
                { start: 1800, density: 0.035799999999999894 },
              ],
              percentiles: { p75: 742 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8667133286671326 },
                { start: 1800, end: 3000, density: 0.08819118088191173 },
                { start: 3000, density: 0.045095490450955775 },
              ],
              percentiles: { p75: 1381 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9481999999999999 },
                { start: 100, end: 300, density: 0.029099999999999997 },
                { start: 300, density: 0.02270000000000009 },
              ],
              percentiles: { p75: 11 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8786742651469701 },
                { start: 2500, end: 4000, density: 0.08133373325334933 },
                { start: 4000, density: 0.03999200159968052 },
              ],
              percentiles: { p75: 1809 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.it/",
          normalizedUrl: "https://www.yara.it",
        },
      },
      extractedResults: {
        fcp: 1381,
        lcp: 1809,
        cls: "0.01",
        fid: 11,
      },
      timestamp: 1652117557379,
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
                { start: 0, end: 1800, density: 0.7367736773677364 },
                { start: 1800, end: 3000, density: 0.17411741174117404 },
                { start: 3000, density: 0.08910891089108966 },
              ],
              percentiles: { p75: 1865 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9351740696278513 },
                { start: 100, end: 300, density: 0.03631452581032413 },
                { start: 300, density: 0.028511404561824643 },
              ],
              percentiles: { p75: 14 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7725682295311407 },
                { start: 2500, end: 4000, density: 0.15185444366689999 },
                { start: 4000, density: 0.0755773268019593 },
              ],
              percentiles: { p75: 2398 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.868113188681132,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.0784921507849215,
                },
                { start: "0.25", density: 0.053394660533946606 },
              ],
              percentiles: { p75: "0.02" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.48735379386184075 },
                { start: 200, end: 500, density: 0.35899230230930684 },
                { start: 500, density: 0.15365390382885236 },
              ],
              percentiles: { p75: 357 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.5505999999999999 },
                { start: 800, end: 1800, density: 0.3627999999999999 },
                { start: 1800, density: 0.08660000000000019 },
              ],
              percentiles: { p75: 1126 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.es/",
          normalizedUrl: "https://www.yara.es",
        },
      },
      extractedResults: {
        fcp: 1865,
        lcp: 2398,
        cls: "0.02",
        fid: 14,
      },
      timestamp: 1652117557725,
    },
    {
      url: "https://www.yara.us/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "https://www.yara.us" },
          metrics: {
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6274372562743727 },
                { start: 200, end: 500, density: 0.21747825217478262 },
                { start: 500, density: 0.1550844915508445 },
              ],
              percentiles: { p75: 301 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.4329134173165363 },
                { start: 800, end: 1800, density: 0.4151169766046787 },
                { start: 1800, density: 0.15196960607878485 },
              ],
              percentiles: { p75: 1410 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6395999999999997 },
                { start: 1800, end: 3000, density: 0.20609999999999987 },
                { start: 3000, density: 0.1543000000000004 },
              ],
              percentiles: { p75: 2295 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9097819563912779 },
                { start: 100, end: 300, density: 0.03810762152430485 },
                { start: 300, density: 0.05211042208441719 },
              ],
              percentiles: { p75: 14 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6756026808042411 },
                { start: 2500, end: 4000, density: 0.17065119535860765 },
                { start: 4000, density: 0.15374612383715117 },
              ],
              percentiles: { p75: 3014 },
            },
            cumulative_layout_shift: {
              histogram: [
                { start: "0.00", end: "0.10", density: 0.8218 },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.10010000000000001,
                },
                { start: "0.25", density: 0.07810000000000007 },
              ],
              percentiles: { p75: "0.06" },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.us/",
          normalizedUrl: "https://www.yara.us",
        },
      },
      extractedResults: {
        fcp: 2295,
        lcp: 3014,
        cls: "0.06",
        fid: 14,
      },
      timestamp: 1652117558092,
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
                  density: 0.8241175882411759,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.11678832116788321,
                },
                { start: "0.25", density: 0.059094090590940854 },
              ],
              percentiles: { p75: "0.05" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.7516000000000003 },
                { start: 200, end: 500, density: 0.1832000000000001 },
                { start: 500, density: 0.06519999999999951 },
              ],
              percentiles: { p75: 197 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.40431913617276477 },
                { start: 800, end: 1800, density: 0.38562287542491447 },
                { start: 1800, density: 0.21005798840232073 },
              ],
              percentiles: { p75: 1688 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6271254250850151 },
                { start: 1800, end: 3000, density: 0.20844168833766705 },
                { start: 3000, density: 0.16443288657731794 },
              ],
              percentiles: { p75: 2467 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9654103768869339 },
                { start: 100, end: 300, density: 0.0244926522043387 },
                { start: 300, density: 0.010096970908727384 },
              ],
              percentiles: { p75: 11 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6797140571885607 },
                { start: 2500, end: 4000, density: 0.19031193761247706 },
                { start: 4000, density: 0.1299740051989623 },
              ],
              percentiles: { p75: 2957 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.au/",
          normalizedUrl: "https://www.yara.com.au",
        },
      },
      extractedResults: {
        fcp: 2467,
        lcp: 2957,
        cls: "0.05",
        fid: 11,
      },
      timestamp: 1652117558455,
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
                { start: 0, end: 200, density: 0.5244426671998401 },
                { start: 200, end: 500, density: 0.3501949415175447 },
                { start: 500, density: 0.12536239128261525 },
              ],
              percentiles: { p75: 329 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.6624324864972995 },
                { start: 800, end: 1800, density: 0.3106621324264853 },
                { start: 1800, density: 0.02690538107621523 },
              ],
              percentiles: { p75: 904 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8923677103130939 },
                { start: 1800, end: 3000, density: 0.08642592777833355 },
                { start: 3000, density: 0.021206361908572464 },
              ],
              percentiles: { p75: 1369 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9629111266620013 },
                { start: 100, end: 300, density: 0.020193941817454764 },
                { start: 300, density: 0.016894931520543905 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.859042287313806 },
                { start: 2500, end: 4000, density: 0.1122663201039688 },
                { start: 4000, density: 0.028691392582225222 },
              ],
              percentiles: { p75: 1964 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8377162283771623,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.12438756124387562,
                },
                { start: "0.25", density: 0.037896210378962125 },
              ],
              percentiles: { p75: "0.04" },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.fi/",
          normalizedUrl: "https://www.yara.fi",
        },
      },
      extractedResults: {
        fcp: 1369,
        lcp: 1964,
        cls: "0.04",
        fid: 13,
      },
      timestamp: 1652117558811,
    },
    {
      url: "https://www.yara.in/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "https://www.yara.in" },
          metrics: {
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.4574457445744572 },
                { start: 800, end: 1800, density: 0.419241924192419 },
                { start: 1800, density: 0.12331233123312375 },
              ],
              percentiles: { p75: 1347 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6983698369836977 },
                { start: 1800, end: 3000, density: 0.18711871187118698 },
                { start: 3000, density: 0.11451145114511538 },
              ],
              percentiles: { p75: 2073 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9574872461738521 },
                { start: 100, end: 300, density: 0.030109032709812942 },
                { start: 300, density: 0.012403721116334988 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7573742625737422 },
                { start: 2500, end: 4000, density: 0.1501349865013498 },
                { start: 4000, density: 0.09249075092490801 },
              ],
              percentiles: { p75: 2474 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8197999999999999,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.11669999999999998,
                },
                { start: "0.25", density: 0.06350000000000017 },
              ],
              percentiles: { p75: "0.04" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6792396198099049 },
                { start: 200, end: 500, density: 0.23311655827913952 },
                { start: 500, density: 0.08764382191095561 },
              ],
              percentiles: { p75: 234 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.in/",
          normalizedUrl: "https://www.yara.in",
        },
      },
      extractedResults: {
        fcp: 2073,
        lcp: 2474,
        cls: "0.04",
        fid: 13,
      },
      timestamp: 1652117559238,
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
                { start: 0, end: 100, density: 0.9661966196619662 },
                { start: 100, end: 300, density: 0.0152015201520152 },
                { start: 300, density: 0.01860186018601859 },
              ],
              percentiles: { p75: 11 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.9020500000000001 },
                { start: 2500, end: 4000, density: 0.07545000000000002 },
                { start: 4000, density: 0.02249999999999984 },
              ],
              percentiles: { p75: 1773 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8598999999999999,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.11049999999999999,
                },
                { start: "0.25", density: 0.029600000000000067 },
              ],
              percentiles: { p75: "0.05" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.7154715471547153 },
                { start: 200, end: 500, density: 0.1957195719571957 },
                { start: 500, density: 0.08880888088808912 },
              ],
              percentiles: { p75: 217 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.7180563887222556 },
                { start: 800, end: 1800, density: 0.2584483103379324 },
                { start: 1800, density: 0.023495300939812006 },
              ],
              percentiles: { p75: 847 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.9109178164367128 },
                { start: 1800, end: 3000, density: 0.06948610277944411 },
                { start: 3000, density: 0.019596080783843103 },
              ],
              percentiles: { p75: 1288 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.se/",
          normalizedUrl: "https://www.yara.se",
        },
      },
      extractedResults: {
        fcp: 1288,
        lcp: 1773,
        cls: "0.05",
        fid: 11,
      },
      timestamp: 1652117559617,
    },
    {
      url: "https://www.yara.my/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "https://www.yara.my" },
          metrics: {
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9690907272181655 },
                { start: 100, end: 300, density: 0.0249074722416725 },
                { start: 300, density: 0.006001800540162049 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8170365926814634 },
                { start: 2500, end: 4000, density: 0.10837832433513292 },
                { start: 4000, density: 0.07458508298340369 },
              ],
              percentiles: { p75: 2105 },
            },
            cumulative_layout_shift: {
              histogram: [
                { start: "0.00", end: "0.10", density: 0.7923 },
                { start: "0.10", end: "0.25", density: 0.1399 },
                { start: "0.25", density: 0.06779999999999999 },
              ],
              percentiles: { p75: "0.08" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.7738095238095237 },
                { start: 200, end: 500, density: 0.18137254901960778 },
                { start: 500, density: 0.04481792717086848 },
              ],
              percentiles: { p75: 188 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.5237999999999994 },
                { start: 800, end: 1800, density: 0.37419999999999964 },
                { start: 1800, density: 0.10200000000000103 },
              ],
              percentiles: { p75: 1191 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7737547509501902 },
                { start: 1800, end: 3000, density: 0.13772754550910188 },
                { start: 3000, density: 0.08851770354070783 },
              ],
              percentiles: { p75: 1727 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.my/",
          normalizedUrl: "https://www.yara.my",
        },
      },
      extractedResults: {
        fcp: 1727,
        lcp: 2105,
        cls: "0.08",
        fid: 12,
      },
      timestamp: 1652117559972,
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
                { start: "0.00", end: "0.10", density: 0.8552 },
                { start: "0.10", end: "0.25", density: 0.0816 },
                { start: "0.25", density: 0.06319999999999996 },
              ],
              percentiles: { p75: "0.04" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.8146814681468147 },
                { start: 200, end: 500, density: 0.12801280128012799 },
                { start: 500, density: 0.05730573057305727 },
              ],
              percentiles: { p75: 153 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.35756424357564226 },
                { start: 800, end: 1800, density: 0.4428557144285569 },
                { start: 1800, density: 0.1995800419958009 },
              ],
              percentiles: { p75: 1553 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.11148885111488867 },
                { start: 1800, end: 3000, density: 0.3998600139986007 },
                { start: 3000, density: 0.48865113488651063 },
              ],
              percentiles: { p75: 4956 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.2600020004000804 },
                { start: 2500, end: 4000, density: 0.3527205441088222 },
                { start: 4000, density: 0.38727745549109743 },
              ],
              percentiles: { p75: 5468 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "http://www.yara.com.mm/",
          normalizedUrl: "http://www.yara.com.mm",
        },
      },
      extractedResults: { fcp: 4956, lcp: 5468, cls: "0.04" },
      timestamp: 1652117560328,
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
                { start: 0, end: 1800, density: 0.4930493049304912 },
                { start: 1800, end: 3000, density: 0.2937293729372927 },
                { start: 3000, density: 0.2132213221322161 },
              ],
              percentiles: { p75: 2794 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9340802240672199 },
                { start: 100, end: 300, density: 0.03391017305191557 },
                { start: 300, density: 0.03200960288086456 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.5795079507950784 },
                { start: 2500, end: 4000, density: 0.2583758375837579 },
                { start: 4000, density: 0.1621162116211637 },
              ],
              percentiles: { p75: 3311 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.7919416116776643,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.12307538492301537,
                },
                { start: "0.25", density: 0.0849830033993203 },
              ],
              percentiles: { p75: "0.07" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6168766246750652 },
                { start: 200, end: 500, density: 0.2414517096580684 },
                { start: 500, density: 0.14167166566686648 },
              ],
              percentiles: { p75: 289 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.27730000000000055 },
                { start: 800, end: 1800, density: 0.39330000000000076 },
                { start: 1800, density: 0.32939999999999864 },
              ],
              percentiles: { p75: 2031 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.co.uk/",
          normalizedUrl: "https://www.yara.co.uk",
        },
      },
      extractedResults: {
        fcp: 2794,
        lcp: 3311,
        cls: "0.07",
        fid: 13,
      },
      timestamp: 1652117560673,
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
                  density: 0.7424742474247423,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.18341834183418337,
                },
                { start: "0.25", density: 0.07410741074107416 },
              ],
              percentiles: { p75: "0.11" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.8186181381861812 },
                { start: 200, end: 500, density: 0.14868513148685128 },
                { start: 500, density: 0.032696730326967294 },
              ],
              percentiles: { p75: 157 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.37447489497899583 },
                { start: 800, end: 1800, density: 0.46979395879175834 },
                { start: 1800, density: 0.15573114622924572 },
              ],
              percentiles: { p75: 1540 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6588317663532706 },
                { start: 1800, end: 3000, density: 0.24274854970994195 },
                { start: 3000, density: 0.09841968393678752 },
              ],
              percentiles: { p75: 2327 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9822982298229823 },
                { start: 100, end: 300, density: 0.014501450145014503 },
                { start: 300, density: 0.003200320032003201 },
              ],
              percentiles: { p75: 8 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7310962192438487 },
                { start: 2500, end: 4000, density: 0.19308861772354463 },
                { start: 4000, density: 0.07581516303260671 },
              ],
              percentiles: { p75: 2733 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.co.nz/",
          normalizedUrl: "https://www.yara.co.nz",
        },
      },
      extractedResults: { fcp: 2327, lcp: 2733, cls: "0.11", fid: 8 },
      timestamp: 1652117561015,
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
                { start: 0, end: 200, density: 0.7750775077507752 },
                { start: 200, end: 500, density: 0.16641664166416648 },
                { start: 500, density: 0.0585058505850584 },
              ],
              percentiles: { p75: 174 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8418316336732655 },
                { start: 1800, end: 3000, density: 0.11117776444711057 },
                { start: 3000, density: 0.04699060187962386 },
              ],
              percentiles: { p75: 1401 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8705258948210357 },
                { start: 2500, end: 4000, density: 0.09548090381923612 },
                { start: 4000, density: 0.03399320135972824 },
              ],
              percentiles: { p75: 1757 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8944000000000001,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.07480000000000002,
                },
                { start: "0.25", density: 0.03079999999999999 },
              ],
              percentiles: { p75: "0.04" },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.vn/",
          normalizedUrl: "https://www.yara.vn",
        },
      },
      extractedResults: { fcp: 1401, lcp: 1757, cls: "0.04" },
      timestamp: 1652117561347,
    },
  ],
};
