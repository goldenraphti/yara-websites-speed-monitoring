export const audit30 = {
  date: "2022-06-06T20:32:57.590Z",
  dateParsedLocale: "06/06/2022",
  legacyAudit: true,
  legacyAuditType: 4,
  legacyAuditId: "06/06/2022-legacy-audit",
  audits: [
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
                  density: 0.9412943871706758,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.036655211912943866,
                },
                { start: "0.25", density: 0.02205040091638031 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.46115218301018274 },
                { start: 200, end: 500, density: 0.40563537452922305 },
                { start: 500, density: 0.13321244246059416 },
              ],
              percentiles: { p75: 329 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.7347592026771425 },
                { start: 800, end: 1800, density: 0.23861486978029972 },
                { start: 1800, density: 0.026625927542557833 },
              ],
              percentiles: { p75: 839 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8799019607843136 },
                { start: 1800, end: 3000, density: 0.09270472895040369 },
                { start: 3000, density: 0.027393310265282647 },
              ],
              percentiles: { p75: 1415 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9296467863346843 },
                { start: 100, end: 300, density: 0.03387376954255935 },
                { start: 300, density: 0.03647944412275629 },
              ],
              percentiles: { p75: 16 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.9097945601851852 },
                { start: 2500, end: 4000, density: 0.07038483796296298 },
                { start: 4000, density: 0.019820601851851794 },
              ],
              percentiles: { p75: 1819 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.be/fr-be/",
          normalizedUrl: "https://www.yara.be",
        },
      },
      extractedResults: {
        fcp: 1415,
        lcp: 1819,
        cls: "0.00",
        fid: 16,
      },
      timestamp: 1654547412430,
    },
    {
      url: "https://www.yara.fr/",
      deviceTargeted: "PHONE",
      results: {
        record: {
          key: { formFactor: "PHONE", origin: "https://www.yara.fr" },
          metrics: {
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.6106344253770144 },
                { start: 800, end: 1800, density: 0.2899115964638582 },
                { start: 1800, density: 0.09945397815912731 },
              ],
              percentiles: { p75: 1060 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7234125947217126 },
                { start: 1800, end: 3000, density: 0.1674941207211912 },
                { start: 3000, density: 0.10909328455709628 },
              ],
              percentiles: { p75: 1947 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9424488725747246 },
                { start: 100, end: 300, density: 0.038280020975353955 },
                { start: 300, density: 0.019271106449921437 },
              ],
              percentiles: { p75: 14 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7960260586319218 },
                { start: 2500, end: 4000, density: 0.1263192182410423 },
                { start: 4000, density: 0.07765472312703595 },
              ],
              percentiles: { p75: 2271 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9246406836721482,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.05632526220380681,
                },
                { start: "0.25", density: 0.019034054124045036 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.4200801137097813 },
                { start: 200, end: 500, density: 0.40483266571908494 },
                { start: 500, density: 0.1750872205711337 },
              ],
              percentiles: { p75: 386 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.fr/",
          normalizedUrl: "https://www.yara.fr",
        },
      },
      extractedResults: {
        fcp: 1947,
        lcp: 2271,
        cls: "0.00",
        fid: 14,
      },
      timestamp: 1654547414167,
    },
    {
      url: "https://www.yaraagri.cz/",
      deviceTargeted: "PHONE",
      results: {
        record: {
          key: { formFactor: "PHONE", origin: "https://www.yaraagri.cz" },
          metrics: {
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.8430344121785851 },
                { start: 800, end: 1800, density: 0.1354739669950109 },
                { start: 1800, density: 0.02149162082640399 },
              ],
              percentiles: { p75: 679 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.9172138534826833 },
                { start: 1800, end: 3000, density: 0.05999742500321874 },
                { start: 3000, density: 0.022788721514098095 },
              ],
              percentiles: { p75: 1206 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9184149184149183 },
                { start: 100, end: 300, density: 0.04014504014504014 },
                { start: 300, density: 0.041440041440041625 },
              ],
              percentiles: { p75: 15 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.916988914668729 },
                { start: 2500, end: 4000, density: 0.06560969321990201 },
                { start: 4000, density: 0.017401392111368923 },
              ],
              percentiles: { p75: 1708 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9022364217252397,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.059169329073482435,
                },
                { start: "0.25", density: 0.03859424920127799 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.4010614101592113 },
                { start: 200, end: 500, density: 0.3985342431134696 },
                { start: 500, density: 0.2004043467273191 },
              ],
              percentiles: { p75: 414 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yaraagri.cz/",
          normalizedUrl: "https://www.yaraagri.cz",
        },
      },
      extractedResults: {
        fcp: 1206,
        lcp: 1708,
        cls: "0.00",
        fid: 15,
      },
      timestamp: 1654547414949,
    },
    {
      url: "https://www.yara.dk/",
      deviceTargeted: "PHONE",
      results: {
        record: {
          key: { formFactor: "PHONE", origin: "https://www.yara.dk" },
          metrics: {
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.6904928754963794 },
                { start: 800, end: 1800, density: 0.2667601027797244 },
                { start: 1800, density: 0.04274702172389625 },
              ],
              percentiles: { p75: 890 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8792201616737993 },
                { start: 1800, end: 3000, density: 0.07893485496909179 },
                { start: 3000, density: 0.04184498335710886 },
              ],
              percentiles: { p75: 1419 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9536632702571566 },
                { start: 100, end: 300, density: 0.02935468219311014 },
                { start: 300, density: 0.016982047549733186 },
              ],
              percentiles: { p75: 15 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.9075710532600909 },
                { start: 2500, end: 4000, density: 0.07188918079770715 },
                { start: 4000, density: 0.02053976594220204 },
              ],
              percentiles: { p75: 1767 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9395553496989347,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.04099119962945808,
                },
                { start: "0.25", density: 0.019453450671607243 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.4909810822701277 },
                { start: 200, end: 500, density: 0.3592168939727233 },
                { start: 500, density: 0.14980202375714896 },
              ],
              percentiles: { p75: 341 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.dk/",
          normalizedUrl: "https://www.yara.dk",
        },
      },
      extractedResults: {
        fcp: 1419,
        lcp: 1767,
        cls: "0.00",
        fid: 15,
      },
      timestamp: 1654547415665,
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
                  density: 0.9717033732924449,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.017842207973236685,
                },
                { start: "0.25", density: 0.010454418734318374 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5921379310344825 },
                { start: 200, end: 500, density: 0.29020689655172405 },
                { start: 500, density: 0.11765517241379349 },
              ],
              percentiles: { p75: 305 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.7476945244956773 },
                { start: 800, end: 1800, density: 0.23775216138328528 },
                { start: 1800, density: 0.014553314121037459 },
              ],
              percentiles: { p75: 806 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.9219847985085329 },
                { start: 1800, end: 3000, density: 0.06252688943066115 },
                { start: 3000, density: 0.015488312060805948 },
              ],
              percentiles: { p75: 1301 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9585345072422606 },
                { start: 100, end: 300, density: 0.029253053109911956 },
                { start: 300, density: 0.012212439647827334 },
              ],
              percentiles: { p75: 14 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.9421434671221178 },
                { start: 2500, end: 4000, density: 0.04832052376885853 },
                { start: 4000, density: 0.009536009109023625 },
              ],
              percentiles: { p75: 1629 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.ee/",
          normalizedUrl: "https://www.yara.ee",
        },
      },
      extractedResults: {
        fcp: 1301,
        lcp: 1629,
        cls: "0.00",
        fid: 14,
      },
      timestamp: 1654547416473,
    },
    {
      url: "https://www.yara.co.th/",
      deviceTargeted: "PHONE",
      results: {
        record: {
          key: { formFactor: "PHONE", origin: "https://www.yara.co.th" },
          metrics: {
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5656634746922024 },
                { start: 200, end: 500, density: 0.2819197446420428 },
                { start: 500, density: 0.15241678066575484 },
              ],
              percentiles: { p75: 328 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.429287305122494 },
                { start: 800, end: 1800, density: 0.42071269487750507 },
                { start: 1800, density: 0.15000000000000085 },
              ],
              percentiles: { p75: 1426 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6294051627384957 },
                { start: 1800, end: 3000, density: 0.23187429854096506 },
                { start: 3000, density: 0.1387205387205391 },
              ],
              percentiles: { p75: 2265 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9048623315758639 },
                { start: 100, end: 300, density: 0.04838898652606912 },
                { start: 300, density: 0.0467486818980671 },
              ],
              percentiles: { p75: 17 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6803990081154205 },
                { start: 2500, end: 4000, density: 0.18208972046889121 },
                { start: 4000, density: 0.13751127141568825 },
              ],
              percentiles: { p75: 2877 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.807003803982994,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.1592078764824345,
                },
                { start: "0.25", density: 0.03378831953457151 },
              ],
              percentiles: { p75: "0.04" },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.co.th/",
          normalizedUrl: "https://www.yara.co.th",
        },
      },
      extractedResults: {
        fcp: 2265,
        lcp: 2877,
        cls: "0.04",
        fid: 17,
      },
      timestamp: 1654547417223,
    },
    {
      url: "https://www.yara.vn/",
      deviceTargeted: "PHONE",
      results: {
        record: {
          key: { formFactor: "PHONE", origin: "https://www.yara.vn" },
          metrics: {
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.6192644882158715 },
                { start: 800, end: 1800, density: 0.33769782534441534 },
                { start: 1800, density: 0.04303768643971313 },
              ],
              percentiles: { p75: 1020 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8316831683168314 },
                { start: 1800, end: 3000, density: 0.1320882088208821 },
                { start: 3000, density: 0.036228622862286404 },
              ],
              percentiles: { p75: 1460 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9803232607167955 },
                { start: 100, end: 300, density: 0.014991801358632002 },
                { start: 300, density: 0.004684937924572501 },
              ],
              percentiles: { p75: 11 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8863021420518603 },
                { start: 2500, end: 4000, density: 0.09024802705749717 },
                { start: 4000, density: 0.023449830890642637 },
              ],
              percentiles: { p75: 1847 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8931940700808626,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.07154088050314467,
                },
                { start: "0.25", density: 0.03526504941599282 },
              ],
              percentiles: { p75: "0.01" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.7757967461555605 },
                { start: 200, end: 500, density: 0.19768219300200582 },
                { start: 500, density: 0.02652106084243366 },
              ],
              percentiles: { p75: 190 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.vn/",
          normalizedUrl: "https://www.yara.vn",
        },
      },
      extractedResults: {
        fcp: 1460,
        lcp: 1847,
        cls: "0.01",
        fid: 11,
      },
      timestamp: 1654547418065,
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
                  density: 0.9595128894512099,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.01945279139648901,
                },
                { start: "0.25", density: 0.02103431915230112 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6305476469603083 },
                { start: 200, end: 500, density: 0.31318037179701896 },
                { start: 500, density: 0.05627198124267283 },
              ],
              percentiles: { p75: 257 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.37295081967213095 },
                { start: 800, end: 1800, density: 0.4484552332912986 },
                { start: 1800, density: 0.17859394703657042 },
              ],
              percentiles: { p75: 1568 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6128825508732569 },
                { start: 1800, end: 3000, density: 0.2594135555199484 },
                { start: 3000, density: 0.12770389360679466 },
              ],
              percentiles: { p75: 2292 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.964528426984916 },
                { start: 100, end: 300, density: 0.0044753853804077575 },
                { start: 300, density: 0.030996187634676015 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.722114764667956 },
                { start: 2500, end: 4000, density: 0.2000322372662797 },
                { start: 4000, density: 0.07785299806576425 },
              ],
              percentiles: { p75: 2651 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.co.nz/",
          normalizedUrl: "https://www.yara.co.nz",
        },
      },
      extractedResults: {
        fcp: 2292,
        lcp: 2651,
        cls: "0.00",
        fid: 12,
      },
      timestamp: 1654547418932,
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
                { start: "0.00", end: "0.10", density: 0.8614 },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.08530000000000001,
                },
                { start: "0.25", density: 0.0533 },
              ],
              percentiles: { p75: "0.04" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.7916583316663335 },
                { start: 200, end: 500, density: 0.11812362472494504 },
                { start: 500, density: 0.09021804360872149 },
              ],
              percentiles: { p75: 176 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.28109999999999996 },
                { start: 800, end: 1800, density: 0.48959999999999987 },
                { start: 1800, density: 0.22930000000000014 },
              ],
              percentiles: { p75: 1770 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.04441332399719961 },
                { start: 1800, end: 3000, density: 0.40292087626288303 },
                { start: 3000, density: 0.5526657997399175 },
              ],
              percentiles: { p75: 4953 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.21172882711728847 },
                { start: 2500, end: 4000, density: 0.3853114688531151 },
                { start: 4000, density: 0.4029597040295963 },
              ],
              percentiles: { p75: 5474 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "http://www.yara.com.mm/",
          normalizedUrl: "http://www.yara.com.mm",
        },
      },
      extractedResults: { fcp: 4953, lcp: 5474, cls: "0.04" },
      timestamp: 1654547420121,
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
                { start: 0, end: 2500, density: 0.7941527446300711 },
                { start: 2500, end: 4000, density: 0.12673031026252976 },
                { start: 4000, density: 0.07911694510739907 },
              ],
              percentiles: { p75: 2240 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8510511937284713,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.10072455160945479,
                },
                { start: "0.25", density: 0.048224254662073945 },
              ],
              percentiles: { p75: "0.01" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.7539932236205228 },
                { start: 200, end: 500, density: 0.19712003872216846 },
                { start: 500, density: 0.04888673765730886 },
              ],
              percentiles: { p75: 196 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.4990391544559215 },
                { start: 800, end: 1800, density: 0.3764112418928658 },
                { start: 1800, density: 0.12454960365121268 },
              ],
              percentiles: { p75: 1278 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7369114651970765 },
                { start: 1800, end: 3000, density: 0.14963459925721817 },
                { start: 3000, density: 0.11345393554570529 },
              ],
              percentiles: { p75: 1876 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9613728625907245 },
                { start: 100, end: 300, density: 0.02817074670931234 },
                { start: 300, density: 0.010456390699963063 },
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
        fcp: 1876,
        lcp: 2240,
        cls: "0.01",
        fid: 13,
      },
      timestamp: 1654547420977,
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
                  density: 0.8489634748272457,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.10091038718876821,
                },
                { start: "0.25", density: 0.050126137983986026 },
              ],
              percentiles: { p75: "0.01" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6510289887143184 },
                { start: 200, end: 500, density: 0.268754149148042 },
                { start: 500, density: 0.08021686213763962 },
              ],
              percentiles: { p75: 245 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.4567667075755885 },
                { start: 800, end: 1800, density: 0.4112462345196921 },
                { start: 1800, density: 0.1319870579047194 },
              ],
              percentiles: { p75: 1337 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6940364931019135 },
                { start: 1800, end: 3000, density: 0.1910324877614597 },
                { start: 3000, density: 0.11493101913662683 },
              ],
              percentiles: { p75: 2056 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9594170403587444 },
                { start: 100, end: 300, density: 0.032062780269058296 },
                { start: 300, density: 0.008520179372197293 },
              ],
              percentiles: { p75: 14 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7654239524909264 },
                { start: 2500, end: 4000, density: 0.14285714285714268 },
                { start: 4000, density: 0.09171890465193085 },
              ],
              percentiles: { p75: 2437 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.in/",
          normalizedUrl: "https://www.yara.in",
        },
      },
      extractedResults: {
        fcp: 2056,
        lcp: 2437,
        cls: "0.01",
        fid: 14,
      },
      timestamp: 1654547421818,
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
                  density: 0.9559905799234618,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.025169267000294378,
                },
                { start: "0.25", density: 0.01884015307624376 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6133414745840325 },
                { start: 200, end: 500, density: 0.2952221034956493 },
                { start: 500, density: 0.09143642192031817 },
              ],
              percentiles: { p75: 258 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.37449362340585113 },
                { start: 800, end: 1800, density: 0.39684921230307535 },
                { start: 1800, density: 0.2286571642910737 },
              ],
              percentiles: { p75: 1653 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6064564564564565 },
                { start: 1800, end: 3000, density: 0.19894894894894893 },
                { start: 3000, density: 0.1945945945945947 },
              ],
              percentiles: { p75: 2595 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.933243526418201 },
                { start: 100, end: 300, density: 0.04011375542583446 },
                { start: 300, density: 0.026642718155964668 },
              ],
              percentiles: { p75: 14 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6804954484405318 },
                { start: 2500, end: 4000, density: 0.19638859871660963 },
                { start: 4000, density: 0.12311595284285855 },
              ],
              percentiles: { p75: 2955 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.au/",
          normalizedUrl: "https://www.yara.com.au",
        },
      },
      extractedResults: {
        fcp: 2595,
        lcp: 2955,
        cls: "0.00",
        fid: 14,
      },
      timestamp: 1654547422746,
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
                { start: 0, end: 1800, density: 0.5849189570119792 },
                { start: 1800, end: 3000, density: 0.24326990838618698 },
                { start: 3000, density: 0.17181113460183392 },
              ],
              percentiles: { p75: 2469 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.8832335329341321 },
                { start: 100, end: 300, density: 0.05194610778443116 },
                { start: 300, density: 0.06482035928143673 },
              ],
              percentiles: { p75: 21 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6829130863501895 },
                { start: 2500, end: 4000, density: 0.17903930131004353 },
                { start: 4000, density: 0.13804761233976695 },
              ],
              percentiles: { p75: 2915 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8890744606819764,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.029366736256089074,
                },
                { start: "0.25", density: 0.08155880306193468 },
              ],
              percentiles: { p75: "0.01" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.4900264007040192 },
                { start: 200, end: 500, density: 0.3169551188031684 },
                { start: 500, density: 0.19301848049281248 },
              ],
              percentiles: { p75: 394 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.35687316459236423 },
                { start: 800, end: 1800, density: 0.46552929660187325 },
                { start: 1800, density: 0.1775975388057625 },
              ],
              percentiles: { p75: 1534 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.us/",
          normalizedUrl: "https://www.yara.us",
        },
      },
      extractedResults: {
        fcp: 2469,
        lcp: 2915,
        cls: "0.01",
        fid: 21,
      },
      timestamp: 1654547423713,
    },
    {
      url: "https://www.yara.com.pe/",
      deviceTargeted: "PHONE",
      results: {
        record: {
          key: { formFactor: "PHONE", origin: "https://www.yara.com.pe" },
          metrics: {
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.303673573153679 },
                { start: 800, end: 1800, density: 0.4661243167662372 },
                { start: 1800, density: 0.2302021100800837 },
              ],
              percentiles: { p75: 1771 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.4909183934510098 },
                { start: 1800, end: 3000, density: 0.3081350729086718 },
                { start: 3000, density: 0.20094653364031828 },
              ],
              percentiles: { p75: 2736 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9622492080253432 },
                { start: 100, end: 300, density: 0.030623020063357976 },
                { start: 300, density: 0.007127771911298835 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.623461538461538 },
                { start: 2500, end: 4000, density: 0.23230769230769213 },
                { start: 4000, density: 0.1442307692307699 },
              ],
              percentiles: { p75: 3113 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9322850621354299,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.03170174993659651,
                },
                { start: "0.25", density: 0.03601318792797361 },
              ],
              percentiles: { p75: "0.01" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5159244086163602 },
                { start: 200, end: 500, density: 0.39896920840491595 },
                { start: 500, density: 0.08510638297872372 },
              ],
              percentiles: { p75: 310 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.pe/",
          normalizedUrl: "https://www.yara.com.pe",
        },
      },
      extractedResults: {
        fcp: 2736,
        lcp: 3113,
        cls: "0.01",
        fid: 13,
      },
      timestamp: 1654547424584,
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
                  density: 0.9553308588250352,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.020222705746832204,
                },
                { start: "0.25", density: 0.0244464354281326 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5743770450541152 },
                { start: 200, end: 500, density: 0.3608104706770701 },
                { start: 500, density: 0.06481248426881464 },
              ],
              percentiles: { p75: 303 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.4002312732879354 },
                { start: 800, end: 1800, density: 0.5168957985352693 },
                { start: 1800, density: 0.08287292817679515 },
              ],
              percentiles: { p75: 1135 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6467925504397316 },
                { start: 1800, end: 3000, density: 0.2575012933264358 },
                { start: 3000, density: 0.09570615623383251 },
              ],
              percentiles: { p75: 2019 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.977744195631268 },
                { start: 100, end: 300, density: 0.013600769336447315 },
                { start: 300, density: 0.008655035032284656 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8024993558361245 },
                { start: 2500, end: 4000, density: 0.13785106931203298 },
                { start: 4000, density: 0.05964957485184247 },
              ],
              percentiles: { p75: 2291 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.pa/",
          normalizedUrl: "https://www.yara.com.pa",
        },
      },
      extractedResults: {
        fcp: 2019,
        lcp: 2291,
        cls: "0.00",
        fid: 13,
      },
      timestamp: 1654547425449,
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
                { start: 0, end: 2500, density: 0.7333898099963688 },
                { start: 2500, end: 4000, density: 0.15769091129129845 },
                { start: 4000, density: 0.10891927871233269 },
              ],
              percentiles: { p75: 2622 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9323543572460279,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.024434280211844,
                },
                { start: "0.25", density: 0.04321136254212805 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.48366013071895425 },
                { start: 200, end: 500, density: 0.3572573683561475 },
                { start: 500, density: 0.15908250092489812 },
              ],
              percentiles: { p75: 371 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.47243047158403845 },
                { start: 800, end: 1800, density: 0.41233373639661414 },
                { start: 1800, density: 0.11523579201934739 },
              ],
              percentiles: { p75: 1231 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.631131617289946 },
                { start: 1800, end: 3000, density: 0.22170956775133546 },
                { start: 3000, density: 0.1471588149587186 },
              ],
              percentiles: { p75: 2269 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9587436121151689 },
                { start: 100, end: 300, density: 0.028293655739748225 },
                { start: 300, density: 0.01296273214508299 },
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
        fcp: 2269,
        lcp: 2622,
        cls: "0.00",
        fid: 13,
      },
      timestamp: 1654547426457,
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
                { start: 0, end: 1800, density: 0.688299038110313 },
                { start: 1800, end: 3000, density: 0.19237793741629128 },
                { start: 3000, density: 0.11932302447339578 },
              ],
              percentiles: { p75: 2036 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9569158182269679 },
                { start: 100, end: 300, density: 0.03389620064564192 },
                { start: 300, density: 0.00918798112739012 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.775176786149718 },
                { start: 2500, end: 4000, density: 0.14045354791514245 },
                { start: 4000, density: 0.08436966593513966 },
              ],
              percentiles: { p75: 2390 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9600532623169108,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.01343662994794819,
                },
                { start: "0.25", density: 0.026510107735141026 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5341088089179693 },
                { start: 200, end: 500, density: 0.3269114261480674 },
                { start: 500, density: 0.13897976493396316 },
              ],
              percentiles: { p75: 327 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.4939423309910347 },
                { start: 800, end: 1800, density: 0.39326387206203045 },
                { start: 1800, density: 0.11279379694693477 },
              ],
              percentiles: { p75: 1199 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.gt/",
          normalizedUrl: "https://www.yara.com.gt",
        },
      },
      extractedResults: {
        fcp: 2036,
        lcp: 2390,
        cls: "0.00",
        fid: 13,
      },
      timestamp: 1654547427428,
    },
    {
      url: "https://www.yara.com.ec/",
      deviceTargeted: "PHONE",
      results: {
        record: {
          key: { formFactor: "PHONE", origin: "https://www.yara.com.ec" },
          metrics: {
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5487030174695607 },
                { start: 200, end: 500, density: 0.37533086289041834 },
                { start: 500, density: 0.0759661196400209 },
              ],
              percentiles: { p75: 294 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.4257311441765009 },
                { start: 800, end: 1800, density: 0.46100564391995896 },
                { start: 1800, density: 0.11326321190354016 },
              ],
              percentiles: { p75: 1314 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.577473874338796 },
                { start: 1800, end: 3000, density: 0.26912656431428256 },
                { start: 3000, density: 0.15339956134692131 },
              ],
              percentiles: { p75: 2446 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9635670130211759 },
                { start: 100, end: 300, density: 0.027620676048928056 },
                { start: 300, density: 0.008812310929896077 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6952387113468761 },
                { start: 2500, end: 4000, density: 0.20565403027558563 },
                { start: 4000, density: 0.09910725837753831 },
              ],
              percentiles: { p75: 2744 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9547435897435896,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.017307692307692305,
                },
                { start: "0.25", density: 0.027948717948717967 },
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
        fcp: 2446,
        lcp: 2744,
        cls: "0.00",
        fid: 12,
      },
      timestamp: 1654547428246,
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
                  density: 0.9733364794714489,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.009556394525719679,
                },
                { start: "0.25", density: 0.017107126002831527 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6478582696274722 },
                { start: 200, end: 500, density: 0.29256158233224105 },
                { start: 500, density: 0.05958014804028662 },
              ],
              percentiles: { p75: 244 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.37798078063827234 },
                { start: 800, end: 1800, density: 0.47573852177007914 },
                { start: 1800, density: 0.14628069759164844 },
              ],
              percentiles: { p75: 1408 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5737471863523276 },
                { start: 1800, end: 3000, density: 0.276625992181021 },
                { start: 3000, density: 0.1496268214666513 },
              ],
              percentiles: { p75: 2390 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9639728562615669 },
                { start: 100, end: 300, density: 0.03133867982726711 },
                { start: 300, density: 0.004688463911165944 },
              ],
              percentiles: { p75: 14 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7225395692014754 },
                { start: 2500, end: 4000, density: 0.16583363084612643 },
                { start: 4000, density: 0.11162679995239819 },
              ],
              percentiles: { p75: 2668 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.cr/",
          normalizedUrl: "https://www.yara.cr",
        },
      },
      extractedResults: {
        fcp: 2390,
        lcp: 2668,
        cls: "0.00",
        fid: 14,
      },
      timestamp: 1654547429176,
    },
    {
      url: "https://www.yara.com.co/",
      deviceTargeted: "PHONE",
      results: {
        record: {
          key: { formFactor: "PHONE", origin: "https://www.yara.com.co" },
          metrics: {
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7047990401919613 },
                { start: 2500, end: 4000, density: 0.16658668266346724 },
                { start: 4000, density: 0.1286142771445715 },
              ],
              percentiles: { p75: 2816 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9411274976213131,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.021289248334919124,
                },
                { start: "0.25", density: 0.037583254043767854 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5582447133602247 },
                { start: 200, end: 500, density: 0.3327221611049993 },
                { start: 500, density: 0.10903312553477584 },
              ],
              percentiles: { p75: 295 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.4389312977099235 },
                { start: 800, end: 1800, density: 0.417223282442748 },
                { start: 1800, density: 0.14384541984732857 },
              ],
              percentiles: { p75: 1386 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.607030303030301 },
                { start: 1800, end: 3000, density: 0.22290909090909025 },
                { start: 3000, density: 0.17006060606060874 },
              ],
              percentiles: { p75: 2449 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9450576404218788 },
                { start: 100, end: 300, density: 0.03433897473632573 },
                { start: 300, density: 0.020603384841795497 },
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
        fcp: 2449,
        lcp: 2816,
        cls: "0.00",
        fid: 13,
      },
      timestamp: 1654547430427,
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
                  density: 0.9339816463498151,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.02876318312559923,
                },
                { start: "0.25", density: 0.03725517052458566 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5991525423728816 },
                { start: 200, end: 500, density: 0.34971751412429397 },
                { start: 500, density: 0.051129943502824446 },
              ],
              percentiles: { p75: 259 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.28476454293628856 },
                { start: 800, end: 1800, density: 0.5357340720221614 },
                { start: 1800, density: 0.17950138504155008 },
              ],
              percentiles: { p75: 1587 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.499723068402104 },
                { start: 1800, end: 3000, density: 0.3155635558017166 },
                { start: 3000, density: 0.1847133757961794 },
              ],
              percentiles: { p75: 2646 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9748518572047984 },
                { start: 100, end: 300, density: 0.018933371874548348 },
                { start: 300, density: 0.006214770920653274 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6493944398568668 },
                { start: 2500, end: 4000, density: 0.2347233691164325 },
                { start: 4000, density: 0.11588219102670066 },
              ],
              percentiles: { p75: 2921 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.cl/",
          normalizedUrl: "https://www.yara.cl",
        },
      },
      extractedResults: {
        fcp: 2646,
        lcp: 2921,
        cls: "0.00",
        fid: 12,
      },
      timestamp: 1654547431355,
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
                  density: 0.9532680263369198,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.021840372571061507,
                },
                { start: "0.25", density: 0.02489160109201864 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5997966790918343 },
                { start: 200, end: 500, density: 0.26651982378854666 },
                { start: 500, density: 0.13368349711961916 },
              ],
              percentiles: { p75: 300 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.3943454812877919 },
                { start: 800, end: 1800, density: 0.4644549763033174 },
                { start: 1800, density: 0.14119954240889063 },
              ],
              percentiles: { p75: 1405 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5945371279031727 },
                { start: 1800, end: 3000, density: 0.24893686620870123 },
                { start: 3000, density: 0.15652600588812615 },
              ],
              percentiles: { p75: 2441 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9297974596635772 },
                { start: 100, end: 300, density: 0.03518709234466186 },
                { start: 300, density: 0.03501544799176097 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6997403861755641 },
                { start: 2500, end: 4000, density: 0.19819892909297426 },
                { start: 4000, density: 0.10206068473146156 },
              ],
              percentiles: { p75: 2757 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yaracanada.ca/fr-ca/",
          normalizedUrl: "https://www.yaracanada.ca",
        },
      },
      extractedResults: {
        fcp: 2441,
        lcp: 2757,
        cls: "0.00",
        fid: 13,
      },
      timestamp: 1654547432240,
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
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.3943454812877919 },
                { start: 800, end: 1800, density: 0.4644549763033174 },
                { start: 1800, density: 0.14119954240889063 },
              ],
              percentiles: { p75: 1405 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5945371279031727 },
                { start: 1800, end: 3000, density: 0.24893686620870123 },
                { start: 3000, density: 0.15652600588812615 },
              ],
              percentiles: { p75: 2441 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9297974596635772 },
                { start: 100, end: 300, density: 0.03518709234466186 },
                { start: 300, density: 0.03501544799176097 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6997403861755641 },
                { start: 2500, end: 4000, density: 0.19819892909297426 },
                { start: 4000, density: 0.10206068473146156 },
              ],
              percentiles: { p75: 2757 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9532680263369198,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.021840372571061507,
                },
                { start: "0.25", density: 0.02489160109201864 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5997966790918343 },
                { start: 200, end: 500, density: 0.26651982378854666 },
                { start: 500, density: 0.13368349711961916 },
              ],
              percentiles: { p75: 300 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yaracanada.ca/",
          normalizedUrl: "https://www.yaracanada.ca",
        },
      },
      extractedResults: {
        fcp: 2441,
        lcp: 2757,
        cls: "0.00",
        fid: 13,
      },
      timestamp: 1654547433260,
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
                  density: 0.8606177169363051,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.09627785948636725,
                },
                { start: "0.25", density: 0.043104423577327716 },
              ],
              percentiles: { p75: "0.02" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.43165718267332503 },
                { start: 200, end: 500, density: 0.3288816629892001 },
                { start: 500, density: 0.2394611543374749 },
              ],
              percentiles: { p75: 481 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.38839336118324447 },
                { start: 800, end: 1800, density: 0.4043129727898833 },
                { start: 1800, density: 0.2072936660268722 },
              ],
              percentiles: { p75: 1653 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.48189066059225455 },
                { start: 1800, end: 3000, density: 0.24988610478359874 },
                { start: 3000, density: 0.2682232346241467 },
              ],
              percentiles: { p75: 3142 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.900378161191208 },
                { start: 100, end: 300, density: 0.06464192862207518 },
                { start: 300, density: 0.0349799101867169 },
              ],
              percentiles: { p75: 19 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.5375939849624058 },
                { start: 2500, end: 4000, density: 0.2615629984051036 },
                { start: 4000, density: 0.20084301663249055 },
              ],
              percentiles: { p75: 3639 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yarabrasil.com.br/",
          normalizedUrl: "https://www.yarabrasil.com.br",
        },
      },
      extractedResults: {
        fcp: 3142,
        lcp: 3639,
        cls: "0.02",
        fid: 19,
      },
      timestamp: 1654547434285,
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
                  density: 0.9546408582089553,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.022971082089552237,
                },
                { start: "0.25", density: 0.022388059701492546 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.4715976331360945 },
                { start: 200, end: 500, density: 0.40047337278106504 },
                { start: 500, density: 0.12792899408284045 },
              ],
              percentiles: { p75: 347 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.21267179128814384 },
                { start: 800, end: 1800, density: 0.5306312601910095 },
                { start: 1800, density: 0.25669694852084657 },
              ],
              percentiles: { p75: 1865 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.3632092094443795 },
                { start: 1800, end: 3000, density: 0.32620697756372635 },
                { start: 3000, density: 0.3105838129918943 },
              ],
              percentiles: { p75: 3415 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.965675057208238 },
                { start: 100, end: 300, density: 0.02468987113091653 },
                { start: 300, density: 0.009635071660845476 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.49402810304449635 },
                { start: 2500, end: 4000, density: 0.30995316159250585 },
                { start: 4000, density: 0.19601873536299774 },
              ],
              percentiles: { p75: 3695 },
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
        lcp: 3695,
        cls: "0.00",
        fid: 12,
      },
      timestamp: 1654547435219,
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
                { start: 0, end: 200, density: 0.5199568500539381 },
                { start: 200, end: 500, density: 0.3882146709816617 },
                { start: 500, density: 0.0918284789644002 },
              ],
              percentiles: { p75: 302 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.28014866077149814 },
                { start: 800, end: 1800, density: 0.5432525951557093 },
                { start: 1800, density: 0.1765987440727926 },
              ],
              percentiles: { p75: 1561 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.49083344168508575 },
                { start: 1800, end: 3000, density: 0.32596541412040003 },
                { start: 3000, density: 0.18320114419451433 },
              ],
              percentiles: { p75: 2682 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9589339135164537 },
                { start: 100, end: 300, density: 0.030187652977971168 },
                { start: 300, density: 0.010878433505575198 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6383529716431436 },
                { start: 2500, end: 4000, density: 0.24562993655315285 },
                { start: 4000, density: 0.11601709180370343 },
              ],
              percentiles: { p75: 2965 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9324964775201743,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.019597796848981688,
                },
                { start: "0.25", density: 0.047905725630844095 },
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
        fcp: 2682,
        lcp: 2965,
        cls: "0.00",
        fid: 13,
      },
      timestamp: 1654547436197,
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
                  density: 0.9589025237323455,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.018291271127575826,
                },
                { start: "0.25", density: 0.0228062051400787 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5861212909327341 },
                { start: 200, end: 500, density: 0.29908972691807534 },
                { start: 500, density: 0.11478898214919057 },
              ],
              percentiles: { p75: 286 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.42463514302393424 },
                { start: 800, end: 1800, density: 0.37232924693520103 },
                { start: 1800, density: 0.20303561004086476 },
              ],
              percentiles: { p75: 1627 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5940663176265268 },
                { start: 1800, end: 3000, density: 0.24770215241419424 },
                { start: 3000, density: 0.158231529959279 },
              ],
              percentiles: { p75: 2492 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9453695938660593 },
                { start: 100, end: 300, density: 0.03210734395591229 },
                { start: 300, density: 0.022523062178028363 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.709138533178114 },
                { start: 2500, end: 4000, density: 0.2064610011641442 },
                { start: 4000, density: 0.08440046565774184 },
              ],
              percentiles: { p75: 2709 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.ru/",
          normalizedUrl: "https://www.yara.ru",
        },
      },
      extractedResults: {
        fcp: 2492,
        lcp: 2709,
        cls: "0.00",
        fid: 13,
      },
      timestamp: 1654547437199,
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
                { start: 0, end: 1800, density: 0.8218884120171673 },
                { start: 1800, end: 3000, density: 0.11881635419019652 },
                { start: 3000, density: 0.05929523379263626 },
              ],
              percentiles: { p75: 1544 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9564530685920576 },
                { start: 100, end: 300, density: 0.018727436823104692 },
                { start: 300, density: 0.02481949458483768 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8630932251155449 },
                { start: 2500, end: 4000, density: 0.09204148348551457 },
                { start: 4000, density: 0.04486529139894063 },
              ],
              percentiles: { p75: 1921 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.960143707196587,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.02514875940271696,
                },
                { start: "0.25", density: 0.01470753340069607 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5921889191643956 },
                { start: 200, end: 500, density: 0.31391916439600337 },
                { start: 500, density: 0.09389191643960094 },
              ],
              percentiles: { p75: 274 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.6906108597285063 },
                { start: 800, end: 1800, density: 0.23800904977375545 },
                { start: 1800, density: 0.07138009049773816 },
              ],
              percentiles: { p75: 890 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.ua/",
          normalizedUrl: "https://www.yara.ua",
        },
      },
      extractedResults: {
        fcp: 1544,
        lcp: 1921,
        cls: "0.00",
        fid: 12,
      },
      timestamp: 1654547438347,
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
                  density: 0.8802998360271727,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.09135628952916376,
                },
                { start: "0.25", density: 0.028343874443663607 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5446645811609315 },
                { start: 200, end: 500, density: 0.3258023404008806 },
                { start: 500, density: 0.12953307843818787 },
              ],
              percentiles: { p75: 312 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.605010536174198 },
                { start: 800, end: 1800, density: 0.3528447670334817 },
                { start: 1800, density: 0.042144696792320274 },
              ],
              percentiles: { p75: 990 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7844149747682198 },
                { start: 1800, end: 3000, density: 0.16383053632202793 },
                { start: 3000, density: 0.051754488909752414 },
              ],
              percentiles: { p75: 1710 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9488448844884488 },
                { start: 100, end: 300, density: 0.030763790664780764 },
                { start: 300, density: 0.020391324846770333 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8368940016433853 },
                { start: 2500, end: 4000, density: 0.12225613334898455 },
                { start: 4000, density: 0.04084986500763014 },
              ],
              percentiles: { p75: 2129 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.gr/",
          normalizedUrl: "https://www.yara.gr",
        },
      },
      extractedResults: {
        fcp: 1710,
        lcp: 2129,
        cls: "0.00",
        fid: 12,
      },
      timestamp: 1654547439291,
    },
    {
      url: "https://www.yara.co.uk/",
      deviceTargeted: "PHONE",
      results: {
        record: {
          key: { formFactor: "PHONE", origin: "https://www.yara.co.uk" },
          metrics: {
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.5615486921826502 },
                { start: 2500, end: 4000, density: 0.27087335599231527 },
                { start: 4000, density: 0.16757795182503438 },
              ],
              percentiles: { p75: 3357 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.943445475638051,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.03349767981438515,
                },
                { start: "0.25", density: 0.023056844547563828 },
              ],
              percentiles: { p75: "0.01" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.46959915928539303 },
                { start: 200, end: 500, density: 0.3532502627233151 },
                { start: 500, density: 0.17715057799129183 },
              ],
              percentiles: { p75: 373 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.26113240931878495 },
                { start: 800, end: 1800, density: 0.37171925685638463 },
                { start: 1800, density: 0.36714833382483036 },
              ],
              percentiles: { p75: 2175 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.4369061757719708 },
                { start: 1800, end: 3000, density: 0.309530878859857 },
                { start: 3000, density: 0.25356294536817225 },
              ],
              percentiles: { p75: 3043 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.91500904159132 },
                { start: 100, end: 300, density: 0.0465641952983725 },
                { start: 300, density: 0.03842676311030746 },
              ],
              percentiles: { p75: 19 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.co.uk/",
          normalizedUrl: "https://www.yara.co.uk",
        },
      },
      extractedResults: {
        fcp: 3043,
        lcp: 3357,
        cls: "0.01",
        fid: 19,
      },
      timestamp: 1654547440999,
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
                  density: 0.9525438857482892,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.033620946146980066,
                },
                { start: "0.25", density: 0.013835168104730735 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6177032789295686 },
                { start: 200, end: 500, density: 0.286134392001176 },
                { start: 500, density: 0.09616232906925531 },
              ],
              percentiles: { p75: 263 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.6933005531653351 },
                { start: 800, end: 1800, density: 0.27673632452366326 },
                { start: 1800, density: 0.029963122311001646 },
              ],
              percentiles: { p75: 895 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.895239539114615 },
                { start: 1800, end: 3000, density: 0.08110976349302605 },
                { start: 3000, density: 0.023650697392359005 },
              ],
              percentiles: { p75: 1328 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9543638598647818 },
                { start: 100, end: 300, density: 0.025968039336201596 },
                { start: 300, density: 0.01966810079901658 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.9253359504756152 },
                { start: 2500, end: 4000, density: 0.05745130605465803 },
                { start: 4000, density: 0.01721274346972678 },
              ],
              percentiles: { p75: 1684 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.se/",
          normalizedUrl: "https://www.yara.se",
        },
      },
      extractedResults: {
        fcp: 1328,
        lcp: 1684,
        cls: "0.00",
        fid: 13,
      },
      timestamp: 1654547442238,
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
                  density: 0.9427762736893921,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.03925670686684715,
                },
                { start: "0.25", density: 0.01796701944376076 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.4263822483756282 },
                { start: 200, end: 500, density: 0.4361897756528134 },
                { start: 500, density: 0.13742797597155837 },
              ],
              percentiles: { p75: 362 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.6316049993812648 },
                { start: 800, end: 1800, density: 0.3378294765499319 },
                { start: 1800, density: 0.030565524068803335 },
              ],
              percentiles: { p75: 943 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8864427860696515 },
                { start: 1800, end: 3000, density: 0.09079601990049746 },
                { start: 3000, density: 0.022761194029850943 },
              ],
              percentiles: { p75: 1400 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9552608749535257 },
                { start: 100, end: 300, density: 0.030487049200644444 },
                { start: 300, density: 0.014252075845829765 },
              ],
              percentiles: { p75: 15 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.9093097913322635 },
                { start: 2500, end: 4000, density: 0.07093468329423383 },
                { start: 4000, density: 0.019755525373502697 },
              ],
              percentiles: { p75: 1784 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.fi/",
          normalizedUrl: "https://www.yara.fi",
        },
      },
      extractedResults: {
        fcp: 1400,
        lcp: 1784,
        cls: "0.00",
        fid: 15,
      },
      timestamp: 1654547443254,
    },
    {
      url: "https://www.yara.ro/",
      deviceTargeted: "PHONE",
      results: {
        record: {
          key: { formFactor: "PHONE", origin: "https://www.yara.ro" },
          metrics: {
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.596027959613891 },
                { start: 800, end: 1800, density: 0.35459891268168203 },
                { start: 1800, density: 0.04937312770442703 },
              ],
              percentiles: { p75: 976 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.869675849098351 },
                { start: 1800, end: 3000, density: 0.09270937050558688 },
                { start: 3000, density: 0.037614780396061996 },
              ],
              percentiles: { p75: 1466 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9565848214285716 },
                { start: 100, end: 300, density: 0.02287946428571429 },
                { start: 300, density: 0.02053571428571424 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8869791090969384 },
                { start: 2500, end: 4000, density: 0.08107659997789325 },
                { start: 4000, density: 0.031944290925168206 },
              ],
              percentiles: { p75: 1875 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9270443024024686,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.06292704430240248,
                },
                { start: "0.25", density: 0.010028653295128944 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6053533901117136 },
                { start: 200, end: 500, density: 0.30870478929322 },
                { start: 500, density: 0.08594182059506655 },
              ],
              percentiles: { p75: 273 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.ro/",
          normalizedUrl: "https://www.yara.ro",
        },
      },
      extractedResults: {
        fcp: 1466,
        lcp: 1875,
        cls: "0.00",
        fid: 12,
      },
      timestamp: 1654547444263,
    },
    {
      url: "https://www.yara.pt/",
      deviceTargeted: "PHONE",
      results: {
        record: {
          key: { formFactor: "PHONE", origin: "https://www.yara.pt" },
          metrics: {
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.7007407407407406 },
                { start: 800, end: 1800, density: 0.23641975308641966 },
                { start: 1800, density: 0.06283950617283979 },
              ],
              percentiles: { p75: 884 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8217760807981281 },
                { start: 1800, end: 3000, density: 0.10678655006774235 },
                { start: 3000, density: 0.07143736913412946 },
              ],
              percentiles: { p75: 1504 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.96279871889628 },
                { start: 100, end: 300, density: 0.023035230352303527 },
                { start: 300, density: 0.01416605075141658 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8630490956072354 },
                { start: 2500, end: 4000, density: 0.09142364956318444 },
                { start: 4000, density: 0.04552725482958023 },
              ],
              percentiles: { p75: 1841 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9782023022287535,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.010041636051922606,
                },
                { start: "0.25", density: 0.011756061719324038 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5240174672489084 },
                { start: 200, end: 500, density: 0.3953178068898594 },
                { start: 500, density: 0.0806647258612321 },
              ],
              percentiles: { p75: 294 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.pt/",
          normalizedUrl: "https://www.yara.pt",
        },
      },
      extractedResults: {
        fcp: 1504,
        lcp: 1841,
        cls: "0.00",
        fid: 12,
      },
      timestamp: 1654547445175,
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
                { start: 0, end: 1800, density: 0.8027409086004095 },
                { start: 1800, end: 3000, density: 0.138879896406604 },
                { start: 3000, density: 0.0583791949929865 },
              ],
              percentiles: { p75: 1652 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9463333333333332 },
                { start: 100, end: 300, density: 0.03344444444444445 },
                { start: 300, density: 0.020222222222222294 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8613213667820062 },
                { start: 2500, end: 4000, density: 0.09510164359861582 },
                { start: 4000, density: 0.04357698961937803 },
              ],
              percentiles: { p75: 1993 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8916298610363029,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.09404287407088226,
                },
                { start: "0.25", density: 0.014327264892814821 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.529856469814835 },
                { start: 200, end: 500, density: 0.3541141667579708 },
                { start: 500, density: 0.11602936342719418 },
              ],
              percentiles: { p75: 313 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.6330009649404954 },
                { start: 800, end: 1800, density: 0.31832314785032706 },
                { start: 1800, density: 0.04867588720917745 },
              ],
              percentiles: { p75: 974 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.pl/",
          normalizedUrl: "https://www.yara.pl",
        },
      },
      extractedResults: {
        fcp: 1652,
        lcp: 1993,
        cls: "0.00",
        fid: 13,
      },
      timestamp: 1654547446118,
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
                { start: 0, end: 200, density: 0.5943248253243975 },
                { start: 200, end: 500, density: 0.2784828176244118 },
                { start: 500, density: 0.12719235705119072 },
              ],
              percentiles: { p75: 290 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.8483419531487679 },
                { start: 800, end: 1800, density: 0.13872832369942192 },
                { start: 1800, density: 0.012929723151810115 },
              ],
              percentiles: { p75: 702 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.9396723319552902 },
                { start: 1800, end: 3000, density: 0.04639412034910427 },
                { start: 3000, density: 0.013933547695605605 },
              ],
              percentiles: { p75: 1194 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9447348767737115 },
                { start: 100, end: 300, density: 0.030619865571321875 },
                { start: 300, density: 0.02464525765496654 },
              ],
              percentiles: { p75: 15 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.9437091130381864 },
                { start: 2500, end: 4000, density: 0.04396774684314622 },
                { start: 4000, density: 0.012323140118667312 },
              ],
              percentiles: { p75: 1532 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9406537129085706,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.03163126976954361,
                },
                { start: "0.25", density: 0.02771501732188589 },
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
        fcp: 1194,
        lcp: 1532,
        cls: "0.00",
        fid: 15,
      },
      timestamp: 1654547447163,
    },
    {
      url: "https://www.yara.nl/",
      deviceTargeted: "PHONE",
      results: {
        record: {
          key: { formFactor: "PHONE", origin: "https://www.yara.nl" },
          metrics: {
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.7095848479051081 },
                { start: 800, end: 1800, density: 0.25349148651233977 },
                { start: 1800, density: 0.03692366558255205 },
              ],
              percentiles: { p75: 880 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8748809750523708 },
                { start: 1800, end: 3000, density: 0.09407731860597981 },
                { start: 3000, density: 0.031041706341649336 },
              ],
              percentiles: { p75: 1398 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9411871813546977 },
                { start: 100, end: 300, density: 0.027494537509104154 },
                { start: 300, density: 0.03131828113619811 },
              ],
              percentiles: { p75: 15 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.9175729822552948 },
                { start: 2500, end: 4000, density: 0.06372829612669337 },
                { start: 4000, density: 0.018698721618011817 },
              ],
              percentiles: { p75: 1798 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9517780673989945,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.030348166077080616,
                },
                { start: "0.25", density: 0.0178737665239248 },
              ],
              percentiles: { p75: "0.01" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.47975708502024317 },
                { start: 200, end: 500, density: 0.36602870813397154 },
                { start: 500, density: 0.1542142068457853 },
              ],
              percentiles: { p75: 345 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.nl/",
          normalizedUrl: "https://www.yara.nl",
        },
      },
      extractedResults: {
        fcp: 1398,
        lcp: 1798,
        cls: "0.01",
        fid: 15,
      },
      timestamp: 1654547448141,
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
                  density: 0.9764890282131662,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.011695201350373765,
                },
                { start: "0.25", density: 0.01181577043646009 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6267115061253902 },
                { start: 200, end: 500, density: 0.2991832812875329 },
                { start: 500, density: 0.07410521258707684 },
              ],
              percentiles: { p75: 258 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.6130823075066378 },
                { start: 800, end: 1800, density: 0.3368332126478397 },
                { start: 1800, density: 0.05008447984552237 },
              ],
              percentiles: { p75: 966 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.868020304568528 },
                { start: 1800, end: 3000, density: 0.09402948996857625 },
                { start: 3000, density: 0.0379502054628958 },
              ],
              percentiles: { p75: 1436 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9636033857315599 },
                { start: 100, end: 300, density: 0.019347037484885126 },
                { start: 300, density: 0.017049576783555058 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.9026099565007253 },
                { start: 2500, end: 4000, density: 0.06984050265828903 },
                { start: 4000, density: 0.027549540840985744 },
              ],
              percentiles: { p75: 1758 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.hu/",
          normalizedUrl: "https://www.yara.hu",
        },
      },
      extractedResults: {
        fcp: 1436,
        lcp: 1758,
        cls: "0.00",
        fid: 12,
      },
      timestamp: 1654547449184,
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
                  density: 0.9089273667641107,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.07859230942208231,
                },
                { start: "0.25", density: 0.012480323813807053 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6426729453974661 },
                { start: 200, end: 500, density: 0.2921852225585828 },
                { start: 500, density: 0.06514183204395116 },
              ],
              percentiles: { p75: 251 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.6889421978524104 },
                { start: 800, end: 1800, density: 0.28010052547406905 },
                { start: 1800, density: 0.030957276673520624 },
              ],
              percentiles: { p75: 869 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8991871754346356 },
                { start: 1800, end: 3000, density: 0.08071799503273876 },
                { start: 3000, density: 0.020094829532625747 },
              ],
              percentiles: { p75: 1328 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9746648488979778 },
                { start: 100, end: 300, density: 0.01772324471710975 },
                { start: 300, density: 0.007611906384912542 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.9272419627749575 },
                { start: 2500, end: 4000, density: 0.05820642978003385 },
                { start: 4000, density: 0.014551607445008545 },
              ],
              percentiles: { p75: 1655 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.lt/",
          normalizedUrl: "https://www.yara.lt",
        },
      },
      extractedResults: {
        fcp: 1328,
        lcp: 1655,
        cls: "0.00",
        fid: 13,
      },
      timestamp: 1654547450110,
    },
    {
      url: "https://www.yara.lv/",
      deviceTargeted: "PHONE",
      results: {
        record: {
          key: { formFactor: "PHONE", origin: "https://www.yara.lv" },
          metrics: {
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8948508180943215 },
                { start: 2500, end: 4000, density: 0.08445620789220402 },
                { start: 4000, density: 0.020692974013474492 },
              ],
              percentiles: { p75: 1861 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9375747428844774,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.04759626883520689,
                },
                { start: "0.25", density: 0.01482898828031572 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5522066738428415 },
                { start: 200, end: 500, density: 0.35414424111948317 },
                { start: 500, density: 0.09364908503767527 },
              ],
              percentiles: { p75: 285 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.6329083473658889 },
                { start: 800, end: 1800, density: 0.32800096223237907 },
                { start: 1800, density: 0.039090690401732096 },
              ],
              percentiles: { p75: 955 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8559740103477318 },
                { start: 1800, end: 3000, density: 0.111418601852966 },
                { start: 3000, density: 0.032607387799302195 },
              ],
              percentiles: { p75: 1436 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9593304401735896 },
                { start: 100, end: 300, density: 0.030378177309361435 },
                { start: 300, density: 0.010291382517048975 },
              ],
              percentiles: { p75: 14 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.lv/",
          normalizedUrl: "https://www.yara.lv",
        },
      },
      extractedResults: {
        fcp: 1436,
        lcp: 1861,
        cls: "0.00",
        fid: 14,
      },
      timestamp: 1654547451383,
    },
    {
      url: "https://www.yara.it/",
      deviceTargeted: "PHONE",
      results: {
        record: {
          key: { formFactor: "PHONE", origin: "https://www.yara.it" },
          metrics: {
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.47203966332295616 },
                { start: 200, end: 500, density: 0.397209731350167 },
                { start: 500, density: 0.1307506053268767 },
              ],
              percentiles: { p75: 341 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.7838120711710662 },
                { start: 800, end: 1800, density: 0.17816025119199905 },
                { start: 1800, density: 0.03802767763693486 },
              ],
              percentiles: { p75: 756 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8567105109998837 },
                { start: 1800, end: 3000, density: 0.1003375625654755 },
                { start: 3000, density: 0.04295192643464068 },
              ],
              percentiles: { p75: 1439 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9342894087222289 },
                { start: 100, end: 300, density: 0.03632302809451041 },
                { start: 300, density: 0.029387563183260704 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8906998481130973 },
                { start: 2500, end: 4000, density: 0.07693655800911324 },
                { start: 4000, density: 0.03236359387778944 },
              ],
              percentiles: { p75: 1783 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9464513880822395,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.0298524799628296,
                },
                { start: "0.25", density: 0.023696131954930876 },
              ],
              percentiles: { p75: "0.00" },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.it/",
          normalizedUrl: "https://www.yara.it",
        },
      },
      extractedResults: {
        fcp: 1439,
        lcp: 1783,
        cls: "0.00",
        fid: 13,
      },
      timestamp: 1654547452807,
    },
    {
      url: "https://www.yara.ie/",
      deviceTargeted: "PHONE",
      results: {
        record: {
          key: { formFactor: "PHONE", origin: "https://www.yara.ie" },
          metrics: {
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.4782722856767755 },
                { start: 200, end: 500, density: 0.33924117106472357 },
                { start: 500, density: 0.18248654325850078 },
              ],
              percentiles: { p75: 364 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.2987670343932513 },
                { start: 800, end: 1800, density: 0.4349123945489944 },
                { start: 1800, density: 0.2663205710577543 },
              ],
              percentiles: { p75: 1968 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5014197212183786 },
                { start: 1800, end: 3000, density: 0.35170366546205445 },
                { start: 3000, density: 0.14687661331956692 },
              ],
              percentiles: { p75: 2665 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9182481751824817 },
                { start: 100, end: 300, density: 0.03968148639681486 },
                { start: 300, density: 0.042070338420703395 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6545865633074933 },
                { start: 2500, end: 4000, density: 0.26233850129198955 },
                { start: 4000, density: 0.08307493540051725 },
              ],
              percentiles: { p75: 3012 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9329401205282728,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.03205539171688678,
                },
                { start: "0.25", density: 0.0350044877548404 },
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
        fcp: 2665,
        lcp: 3012,
        cls: "0.00",
        fid: 13,
      },
      timestamp: 1654547453843,
    },
    {
      url: "https://www.yara.hr/",
      deviceTargeted: "PHONE",
      results: {
        record: {
          key: { formFactor: "PHONE", origin: "https://www.yara.hr" },
          metrics: {
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6250812920008669 },
                { start: 1800, end: 3000, density: 0.28506394970734866 },
                { start: 3000, density: 0.08985475829178452 },
              ],
              percentiles: { p75: 2182 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9395257776810962 },
                { start: 100, end: 300, density: 0.0450293669784642 },
                { start: 300, density: 0.015444855340439479 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6840936179434389 },
                { start: 2500, end: 4000, density: 0.22813956008234906 },
                { start: 4000, density: 0.08776682197421189 },
              ],
              percentiles: { p75: 2831 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9761646803900326,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.014301191765980499,
                },
                { start: "0.25", density: 0.009534127843986991 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5543772319013092 },
                { start: 200, end: 500, density: 0.35093604588248006 },
                { start: 500, density: 0.09468672221621081 },
              ],
              percentiles: { p75: 306 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.5063291139240511 },
                { start: 800, end: 1800, density: 0.3399329222114035 },
                { start: 1800, density: 0.15373796386454547 },
              ],
              percentiles: { p75: 1585 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.hr/",
          normalizedUrl: "https://www.yara.hr",
        },
      },
      extractedResults: {
        fcp: 2182,
        lcp: 2831,
        cls: "0.00",
        fid: 13,
      },
      timestamp: 1654547455036,
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
                  density: 0.9412943871706758,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.036655211912943866,
                },
                { start: "0.25", density: 0.02205040091638031 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.46115218301018274 },
                { start: 200, end: 500, density: 0.40563537452922305 },
                { start: 500, density: 0.13321244246059416 },
              ],
              percentiles: { p75: 329 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.7347592026771425 },
                { start: 800, end: 1800, density: 0.23861486978029972 },
                { start: 1800, density: 0.026625927542557833 },
              ],
              percentiles: { p75: 839 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8799019607843136 },
                { start: 1800, end: 3000, density: 0.09270472895040369 },
                { start: 3000, density: 0.027393310265282647 },
              ],
              percentiles: { p75: 1415 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9296467863346843 },
                { start: 100, end: 300, density: 0.03387376954255935 },
                { start: 300, density: 0.03647944412275629 },
              ],
              percentiles: { p75: 16 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.9097945601851852 },
                { start: 2500, end: 4000, density: 0.07038483796296298 },
                { start: 4000, density: 0.019820601851851794 },
              ],
              percentiles: { p75: 1819 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.be/",
          normalizedUrl: "https://www.yara.be",
        },
      },
      extractedResults: {
        fcp: 1415,
        lcp: 1819,
        cls: "0.00",
        fid: 16,
      },
      timestamp: 1654547456081,
    },
    {
      url: "https://www.yara.com/",
      deviceTargeted: "PHONE",
      results: {
        record: {
          key: { formFactor: "PHONE", origin: "https://www.yara.com" },
          metrics: {
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.5039912917271407 },
                { start: 800, end: 1800, density: 0.3655660377358489 },
                { start: 1800, density: 0.13044267053701028 },
              ],
              percentiles: { p75: 1322 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6736098532874484 },
                { start: 1800, end: 3000, density: 0.19815250860351405 },
                { start: 3000, density: 0.12823763810903757 },
              ],
              percentiles: { p75: 2158 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9643277146217171 },
                { start: 100, end: 300, density: 0.029596236769894157 },
                { start: 300, density: 0.006076048608388847 },
              ],
              percentiles: { p75: 14 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7369133574007218 },
                { start: 2500, end: 4000, density: 0.16435018050541522 },
                { start: 4000, density: 0.09873646209386301 },
              ],
              percentiles: { p75: 2573 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9277236492471214,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.04729849424269266,
                },
                { start: "0.25", density: 0.024977856510186008 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6685404148090713 },
                { start: 200, end: 500, density: 0.25411901531304504 },
                { start: 500, density: 0.07734056987788364 },
              ],
              percentiles: { p75: 239 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com/",
          normalizedUrl: "https://www.yara.com",
        },
      },
      extractedResults: {
        fcp: 2158,
        lcp: 2573,
        cls: "0.00",
        fid: 14,
      },
      timestamp: 1654547457467,
    },
    {
      url: "https://www.yara.kr/",
      deviceTargeted: "PHONE",
      results: {
        record: {
          key: { formFactor: "PHONE", origin: "https://www.yara.kr" },
          metrics: {
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.8481566340345761 },
                { start: 200, end: 500, density: 0.12726515309310557 },
                { start: 500, density: 0.02457821287231829 },
              ],
              percentiles: { p75: 144 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.4646425826287473 },
                { start: 800, end: 1800, density: 0.3889315910837819 },
                { start: 1800, density: 0.14642582628747083 },
              ],
              percentiles: { p75: 1383 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6444019138755981 },
                { start: 1800, end: 3000, density: 0.24976076555023924 },
                { start: 3000, density: 0.10583732057416279 },
              ],
              percentiles: { p75: 2142 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9613490891186608 },
                { start: 100, end: 300, density: 0.027080256031511568 },
                { start: 300, density: 0.011570654849827666 },
              ],
              percentiles: { p75: 11 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7473160257661525 },
                { start: 2500, end: 4000, density: 0.19178215889127462 },
                { start: 4000, density: 0.06090181534257281 },
              ],
              percentiles: { p75: 2494 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9482823707059268,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.04058135145337863,
                },
                { start: "0.25", density: 0.011136277840694608 },
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
        fcp: 2142,
        lcp: 2494,
        cls: "0.00",
        fid: 11,
      },
      timestamp: 1654547459228,
    },
    {
      url: "https://www.yara.cm/en-cm/",
      deviceTargeted: "PHONE",
      results: {
        record: {
          key: { formFactor: "PHONE", origin: "https://www.yara.cm" },
          metrics: {
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.5887911208879115 },
                { start: 2500, end: 4000, density: 0.1984301569843017 },
                { start: 4000, density: 0.21277872212778678 },
              ],
              percentiles: { p75: 3565 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.7416741674167419,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.13011301130113012,
                },
                { start: "0.25", density: 0.12821282128212813 },
              ],
              percentiles: { p75: "0.11" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5845 },
                { start: 200, end: 500, density: 0.34850000000000003 },
                { start: 500, density: 0.06699999999999993 },
              ],
              percentiles: { p75: 293 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.43988797759551923 },
                { start: 800, end: 1800, density: 0.3311662332466494 },
                { start: 1800, density: 0.2289457891578314 },
              ],
              percentiles: { p75: 1749 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5295999999999996 },
                { start: 1800, end: 3000, density: 0.20689999999999986 },
                { start: 3000, density: 0.26350000000000057 },
              ],
              percentiles: { p75: 3195 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9219078092190781 },
                { start: 100, end: 300, density: 0.06769323067693232 },
                { start: 300, density: 0.010398960103989604 },
              ],
              percentiles: { p75: 15 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.cm/en-cm/",
          normalizedUrl: "https://www.yara.cm",
        },
      },
      extractedResults: {
        fcp: 3195,
        lcp: 3565,
        cls: "0.11",
        fid: 15,
      },
      timestamp: 1654547460868,
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
                  density: 0.8906574394463668,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.07993079584775087,
                },
                { start: "0.25", density: 0.029411764705882356 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5833040215734554 },
                { start: 200, end: 500, density: 0.3137530777347872 },
                { start: 500, density: 0.1029429006917574 },
              ],
              percentiles: { p75: 300 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.42450969014738205 },
                { start: 800, end: 1800, density: 0.34420331902053997 },
                { start: 1800, density: 0.23128699083207788 },
              ],
              percentiles: { p75: 1867 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.4771697455559429 },
                { start: 1800, end: 3000, density: 0.2510747066341351 },
                { start: 3000, density: 0.271755547809922 },
              ],
              percentiles: { p75: 3344 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9441407178512004 },
                { start: 100, end: 300, density: 0.04147848823389589 },
                { start: 300, density: 0.014380793914903751 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.5392316647264264 },
                { start: 2500, end: 4000, density: 0.22956926658905707 },
                { start: 4000, density: 0.2311990686845165 },
              ],
              percentiles: { p75: 4006 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.ci/",
          normalizedUrl: "https://www.yara.ci",
        },
      },
      extractedResults: {
        fcp: 3344,
        lcp: 4006,
        cls: "0.00",
        fid: 12,
      },
      timestamp: 1654547462999,
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
                { start: 0, end: 2500, density: 0.5887911208879115 },
                { start: 2500, end: 4000, density: 0.1984301569843017 },
                { start: 4000, density: 0.21277872212778678 },
              ],
              percentiles: { p75: 3565 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.7416741674167419,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.13011301130113012,
                },
                { start: "0.25", density: 0.12821282128212813 },
              ],
              percentiles: { p75: "0.11" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5845 },
                { start: 200, end: 500, density: 0.34850000000000003 },
                { start: 500, density: 0.06699999999999993 },
              ],
              percentiles: { p75: 293 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.43988797759551923 },
                { start: 800, end: 1800, density: 0.3311662332466494 },
                { start: 1800, density: 0.2289457891578314 },
              ],
              percentiles: { p75: 1749 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5295999999999996 },
                { start: 1800, end: 3000, density: 0.20689999999999986 },
                { start: 3000, density: 0.26350000000000057 },
              ],
              percentiles: { p75: 3195 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9219078092190781 },
                { start: 100, end: 300, density: 0.06769323067693232 },
                { start: 300, density: 0.010398960103989604 },
              ],
              percentiles: { p75: 15 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.cm/",
          normalizedUrl: "https://www.yara.cm",
        },
      },
      extractedResults: {
        fcp: 3195,
        lcp: 3565,
        cls: "0.11",
        fid: 15,
      },
      timestamp: 1654547464673,
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
                { start: 0, end: 200, density: 0.6295999999999998 },
                { start: 200, end: 500, density: 0.2568999999999999 },
                { start: 500, density: 0.11350000000000034 },
              ],
              percentiles: { p75: 268 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.48290000000000044 },
                { start: 800, end: 1800, density: 0.28840000000000027 },
                { start: 1800, density: 0.2286999999999994 },
              ],
              percentiles: { p75: 1743 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6057000000000009 },
                { start: 1800, end: 3000, density: 0.1411000000000002 },
                { start: 3000, density: 0.25319999999999887 },
              ],
              percentiles: { p75: 3090 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9461107778444312 },
                { start: 100, end: 300, density: 0.035492901419716054 },
                { start: 300, density: 0.018396320735852782 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6296870312968694 },
                { start: 2500, end: 4000, density: 0.1896310368963101 },
                { start: 4000, density: 0.1806819318068204 },
              ],
              percentiles: { p75: 3422 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9143085691430857,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.0562943705629437,
                },
                { start: "0.25", density: 0.029397060293970618 },
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
        fcp: 3090,
        lcp: 3422,
        cls: "0.00",
        fid: 13,
      },
      timestamp: 1654547466365,
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
                  density: 0.8293646439152857,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.10940414792055306,
                },
                { start: "0.25", density: 0.06123120816416105 },
              ],
              percentiles: { p75: "0.02" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.592105263157895 },
                { start: 200, end: 500, density: 0.3024122807017546 },
                { start: 500, density: 0.10548245614035043 },
              ],
              percentiles: { p75: 287 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.27634891102112263 },
                { start: 800, end: 1800, density: 0.4546350005472252 },
                { start: 1800, density: 0.26901608843165226 },
              ],
              percentiles: { p75: 1893 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5135818761684817 },
                { start: 1800, end: 3000, density: 0.25756076102496434 },
                { start: 3000, density: 0.22885736280655378 },
              ],
              percentiles: { p75: 2906 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9446420631391729 },
                { start: 100, end: 300, density: 0.039461983103601606 },
                { start: 300, density: 0.01589595375722545 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.5696473689992314 },
                { start: 2500, end: 4000, density: 0.2531582994617161 },
                { start: 4000, density: 0.17719433153905256 },
              ],
              percentiles: { p75: 3439 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.co.ke/",
          normalizedUrl: "https://www.yara.co.ke",
        },
      },
      extractedResults: {
        fcp: 2906,
        lcp: 3439,
        cls: "0.02",
        fid: 13,
      },
      timestamp: 1654547467625,
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
                { start: 0, end: 100, density: 0.975759226474193 },
                { start: 100, end: 300, density: 0.018793408688546915 },
                { start: 300, density: 0.005447364837259977 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7265084745762714 },
                { start: 2500, end: 4000, density: 0.1647457627118644 },
                { start: 4000, density: 0.10874576271186415 },
              ],
              percentiles: { p75: 2625 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.939817302525524,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.018538420204191296,
                },
                { start: "0.25", density: 0.04164427727028479 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6210182412197113 },
                { start: 200, end: 500, density: 0.325210999183229 },
                { start: 500, density: 0.05377075959705972 },
              ],
              percentiles: { p75: 250 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.4461852861035422 },
                { start: 800, end: 1800, density: 0.4201634877384196 },
                { start: 1800, density: 0.13365122615803823 },
              ],
              percentiles: { p75: 1379 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6820345437236492 },
                { start: 1800, end: 3000, density: 0.18835849313205463 },
                { start: 3000, density: 0.12960696314429618 },
              ],
              percentiles: { p75: 2157 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.co.za/",
          normalizedUrl: "https://www.yara.co.za",
        },
      },
      extractedResults: {
        fcp: 2157,
        lcp: 2625,
        cls: "0.00",
        fid: 13,
      },
      timestamp: 1654547468694,
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
                  density: 0.8446844684468447,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.1266126612661266,
                },
                { start: "0.25", density: 0.028702870287028684 },
              ],
              percentiles: { p75: "0.06" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.801980198019802 },
                { start: 200, end: 500, density: 0.14711471147114716 },
                { start: 500, density: 0.050905090509050704 },
              ],
              percentiles: { p75: 172 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.6110277194035824 },
                { start: 800, end: 1800, density: 0.2946062243570499 },
                { start: 1800, density: 0.09436605623936788 },
              ],
              percentiles: { p75: 1114 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7584309016311415 },
                { start: 1800, end: 3000, density: 0.1494045832082457 },
                { start: 3000, density: 0.09216451516061276 },
              ],
              percentiles: { p75: 1776 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.977995599119824 },
                { start: 100, end: 300, density: 0.017703540708141632 },
                { start: 300, density: 0.004300860172034389 },
              ],
              percentiles: { p75: 10 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7814814814814819 },
                { start: 2500, end: 4000, density: 0.13353353353353353 },
                { start: 4000, density: 0.08498498498498477 },
              ],
              percentiles: { p75: 2328 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com/",
          normalizedUrl: "https://www.yara.com",
        },
      },
      extractedResults: {
        fcp: 1776,
        lcp: 2328,
        cls: "0.06",
        fid: 10,
      },
      timestamp: 1654547469860,
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
                  density: 0.8225822582258226,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.12421242124212423,
                },
                { start: "0.25", density: 0.05320532053205318 },
              ],
              percentiles: { p75: "0.06" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5985598559855986 },
                { start: 200, end: 500, density: 0.29592959295929594 },
                { start: 500, density: 0.1055105510551054 },
              ],
              percentiles: { p75: 287 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.754924507549245 },
                { start: 800, end: 1800, density: 0.216978302169783 },
                { start: 1800, density: 0.028097190280971948 },
              ],
              percentiles: { p75: 824 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8914999999999998 },
                { start: 1800, end: 3000, density: 0.08109999999999999 },
                { start: 3000, density: 0.027400000000000153 },
              ],
              percentiles: { p75: 1330 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9514 },
                { start: 100, end: 300, density: 0.0234 },
                { start: 300, density: 0.02520000000000005 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.9096590340965903 },
                { start: 2500, end: 4000, density: 0.06634336566343364 },
                { start: 4000, density: 0.023997600239976078 },
              ],
              percentiles: { p75: 1791 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.be/",
          normalizedUrl: "https://www.yara.be",
        },
      },
      extractedResults: {
        fcp: 1330,
        lcp: 1791,
        cls: "0.06",
        fid: 12,
      },
      timestamp: 1654547470769,
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
                { start: 0, end: 200, density: 0.5985598559855986 },
                { start: 200, end: 500, density: 0.29592959295929594 },
                { start: 500, density: 0.1055105510551054 },
              ],
              percentiles: { p75: 287 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.754924507549245 },
                { start: 800, end: 1800, density: 0.216978302169783 },
                { start: 1800, density: 0.028097190280971948 },
              ],
              percentiles: { p75: 824 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8914999999999998 },
                { start: 1800, end: 3000, density: 0.08109999999999999 },
                { start: 3000, density: 0.027400000000000153 },
              ],
              percentiles: { p75: 1330 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9514 },
                { start: 100, end: 300, density: 0.0234 },
                { start: 300, density: 0.02520000000000005 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.9096590340965903 },
                { start: 2500, end: 4000, density: 0.06634336566343364 },
                { start: 4000, density: 0.023997600239976078 },
              ],
              percentiles: { p75: 1791 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8225822582258226,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.12421242124212423,
                },
                { start: "0.25", density: 0.05320532053205318 },
              ],
              percentiles: { p75: "0.06" },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.be/fr-be/",
          normalizedUrl: "https://www.yara.be",
        },
      },
      extractedResults: {
        fcp: 1330,
        lcp: 1791,
        cls: "0.06",
        fid: 12,
      },
      timestamp: 1654547471542,
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
                  density: 0.8832116788321168,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.0805919408059194,
                },
                { start: "0.25", density: 0.03619638036196379 },
              ],
              percentiles: { p75: "0.02" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5125512551255118 },
                { start: 200, end: 500, density: 0.3230323032303226 },
                { start: 500, density: 0.16441644164416558 },
              ],
              percentiles: { p75: 360 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.8628862886288629 },
                { start: 800, end: 1800, density: 0.1178117811781178 },
                { start: 1800, density: 0.019301930193019314 },
              ],
              percentiles: { p75: 653 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.9275072492750726 },
                { start: 1800, end: 3000, density: 0.0507949205079492 },
                { start: 3000, density: 0.021697830216978253 },
              ],
              percentiles: { p75: 1147 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9356935693569355 },
                { start: 100, end: 300, density: 0.031803180318031796 },
                { start: 300, density: 0.0325032503250326 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.9222577742225778 },
                { start: 2500, end: 4000, density: 0.05994400559944005 },
                { start: 4000, density: 0.01779822017798205 },
              ],
              percentiles: { p75: 1675 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yaraagri.cz/",
          normalizedUrl: "https://www.yaraagri.cz",
        },
      },
      extractedResults: {
        fcp: 1147,
        lcp: 1675,
        cls: "0.02",
        fid: 13,
      },
      timestamp: 1654547472184,
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
                  density: 0.8002800280028003,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.17561756175617563,
                },
                { start: "0.25", density: 0.02410241024102411 },
              ],
              percentiles: { p75: "0.08" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.7506501300260056 },
                { start: 200, end: 500, density: 0.17733546709341874 },
                { start: 500, density: 0.07201440288057578 },
              ],
              percentiles: { p75: 206 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.7561243875612438 },
                { start: 800, end: 1800, density: 0.20847915208479156 },
                { start: 1800, density: 0.035396460353964605 },
              ],
              percentiles: { p75: 802 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.9121648659463787 },
                { start: 1800, end: 3000, density: 0.06292517006802723 },
                { start: 3000, density: 0.024909963985594228 },
              ],
              percentiles: { p75: 1225 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9801039792041591 },
                { start: 100, end: 300, density: 0.01289742051589682 },
                { start: 300, density: 0.006998600279944031 },
              ],
              percentiles: { p75: 9 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.922234446889378 },
                { start: 2500, end: 4000, density: 0.058861772354470855 },
                { start: 4000, density: 0.01890378075615121 },
              ],
              percentiles: { p75: 1659 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.dk/",
          normalizedUrl: "https://www.yara.dk",
        },
      },
      extractedResults: { fcp: 1225, lcp: 1659, cls: "0.08", fid: 9 },
      timestamp: 1654547473041,
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
                  density: 0.8658865886588659,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.0869086908690869,
                },
                { start: "0.25", density: 0.047204720472047164 },
              ],
              percentiles: { p75: "0.02" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.556711342268454 },
                { start: 200, end: 500, density: 0.3363672734546912 },
                { start: 500, density: 0.1069213842768548 },
              ],
              percentiles: { p75: 304 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.7162851144656606 },
                { start: 800, end: 1800, density: 0.2221333599920025 },
                { start: 1800, density: 0.0615815255423369 },
              ],
              percentiles: { p75: 864 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8672601780534157 },
                { start: 1800, end: 3000, density: 0.09512853856156844 },
                { start: 3000, density: 0.037611283385015855 },
              ],
              percentiles: { p75: 1347 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9597080583883223 },
                { start: 100, end: 300, density: 0.025794841031793643 },
                { start: 300, density: 0.01449710057988396 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8852655796739021 },
                { start: 2500, end: 4000, density: 0.08662598779633886 },
                { start: 4000, density: 0.0281084325297591 },
              ],
              percentiles: { p75: 1772 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.de/",
          normalizedUrl: "https://www.yara.de",
        },
      },
      extractedResults: {
        fcp: 1347,
        lcp: 1772,
        cls: "0.02",
        fid: 13,
      },
      timestamp: 1654547473791,
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
                  density: 0.9608039196080391,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.026897310268973098,
                },
                { start: "0.25", density: 0.012298770122987702 },
              ],
              percentiles: { p75: "0.02" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.681995401379586 },
                { start: 200, end: 500, density: 0.2258322503249025 },
                { start: 500, density: 0.09217234829551146 },
              ],
              percentiles: { p75: 251 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.7737226277372263 },
                { start: 800, end: 1800, density: 0.21457854214578542 },
                { start: 1800, density: 0.011698830116988298 },
              ],
              percentiles: { p75: 782 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.9298789636891067 },
                { start: 1800, end: 3000, density: 0.05591677503250976 },
                { start: 3000, density: 0.0142042612783835 },
              ],
              percentiles: { p75: 1225 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9642035796420358 },
                { start: 100, end: 300, density: 0.023997600239976005 },
                { start: 300, density: 0.011798820117988211 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.9385938593859386 },
                { start: 2500, end: 4000, density: 0.052405240524052404 },
                { start: 4000, density: 0.009000900090009 },
              ],
              percentiles: { p75: 1622 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.ee/",
          normalizedUrl: "https://www.yara.ee",
        },
      },
      extractedResults: {
        fcp: 1225,
        lcp: 1622,
        cls: "0.02",
        fid: 12,
      },
      timestamp: 1654547474551,
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
                  density: 0.887911208879112,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.06679332066793321,
                },
                { start: "0.25", density: 0.04529547045295469 },
              ],
              percentiles: { p75: "0.02" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.45535446455354456 },
                { start: 200, end: 500, density: 0.38886111388861117 },
                { start: 500, density: 0.15578442155784433 },
              ],
              percentiles: { p75: 377 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.5615315405378386 },
                { start: 800, end: 1800, density: 0.3586923922823152 },
                { start: 1800, density: 0.07977606717984619 },
              ],
              percentiles: { p75: 1114 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7461746174617461 },
                { start: 1800, end: 3000, density: 0.17141714171417136 },
                { start: 3000, density: 0.0824082408240826 },
              ],
              percentiles: { p75: 1828 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9214000000000001 },
                { start: 100, end: 300, density: 0.0528 },
                { start: 300, density: 0.025799999999999892 },
              ],
              percentiles: { p75: 15 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8069193080691933 },
                { start: 2500, end: 4000, density: 0.12628737126287373 },
                { start: 4000, density: 0.06679332066793307 },
              ],
              percentiles: { p75: 2244 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.es/",
          normalizedUrl: "https://www.yara.es",
        },
      },
      extractedResults: {
        fcp: 1828,
        lcp: 2244,
        cls: "0.02",
        fid: 15,
      },
      timestamp: 1654547475402,
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
                { start: "0.00", end: "0.10", density: 0.8401 },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.11620000000000001,
                },
                { start: "0.25", density: 0.04369999999999998 },
              ],
              percentiles: { p75: "0.05" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5084016803360669 },
                { start: 200, end: 500, density: 0.34016803360672115 },
                { start: 500, density: 0.15143028605721193 },
              ],
              percentiles: { p75: 348 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.6380276055211044 },
                { start: 800, end: 1800, density: 0.27515503100620126 },
                { start: 1800, density: 0.08681736347269438 },
              ],
              percentiles: { p75: 1008 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7516248375162489 },
                { start: 1800, end: 3000, density: 0.1526847315268474 },
                { start: 3000, density: 0.09569043095690385 },
              ],
              percentiles: { p75: 1834 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9478104379124176 },
                { start: 100, end: 300, density: 0.03309338132373525 },
                { start: 300, density: 0.01909618076384725 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8016293482606957 },
                { start: 2500, end: 4000, density: 0.12300079968012793 },
                { start: 4000, density: 0.07536985205917641 },
              ],
              percentiles: { p75: 2246 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.fr/",
          normalizedUrl: "https://www.yara.fr",
        },
      },
      extractedResults: {
        fcp: 1834,
        lcp: 2246,
        cls: "0.05",
        fid: 12,
      },
      timestamp: 1654547476316,
    },
    {
      url: "https://www.yara.hr/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "https://www.yara.hr" },
          metrics: {
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6274627462746274 },
                { start: 1800, end: 3000, density: 0.28122812281228127 },
                { start: 3000, density: 0.09130913091309133 },
              ],
              percentiles: { p75: 2181 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9410058994100591 },
                { start: 100, end: 300, density: 0.0435956404359564 },
                { start: 300, density: 0.015398460153984649 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6862313768623137 },
                { start: 2500, end: 4000, density: 0.2246775322467754 },
                { start: 4000, density: 0.08909109089091087 },
              ],
              percentiles: { p75: 2825 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.968903109689031,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.021397860213978603,
                },
                { start: "0.25", density: 0.009699030096990295 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5687137427485495 },
                { start: 200, end: 500, density: 0.33726745349069803 },
                { start: 500, density: 0.09401880376075265 },
              ],
              percentiles: { p75: 302 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.5087017403480699 },
                { start: 800, end: 1800, density: 0.33756751350270076 },
                { start: 1800, density: 0.15373074614922927 },
              ],
              percentiles: { p75: 1585 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.hr/",
          normalizedUrl: "https://www.yara.hr",
        },
      },
      extractedResults: {
        fcp: 2181,
        lcp: 2825,
        cls: "0.00",
        fid: 13,
      },
      timestamp: 1654547477272,
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
                { start: 0, end: 2500, density: 0.6727672767276727 },
                { start: 2500, end: 4000, density: 0.23872387238723872 },
                { start: 4000, density: 0.08850885088508866 },
              ],
              percentiles: { p75: 2989 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8498150184981502,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.09419058094190581,
                },
                { start: "0.25", density: 0.05599440055994403 },
              ],
              percentiles: { p75: "0.05" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5793158631726344 },
                { start: 200, end: 500, density: 0.27925585117023405 },
                { start: 500, density: 0.1414282856571315 },
              ],
              percentiles: { p75: 305 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.3207320732073208 },
                { start: 800, end: 1800, density: 0.42824282428242816 },
                { start: 1800, density: 0.25102510251025106 },
              ],
              percentiles: { p75: 1910 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5420457954204583 },
                { start: 1800, end: 3000, density: 0.3213678632136788 },
                { start: 3000, density: 0.1365863413658629 },
              ],
              percentiles: { p75: 2567 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9339 },
                { start: 100, end: 300, density: 0.0344 },
                { start: 300, density: 0.031700000000000006 },
              ],
              percentiles: { p75: 13 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.ie/",
          normalizedUrl: "https://www.yara.ie",
        },
      },
      extractedResults: {
        fcp: 2567,
        lcp: 2989,
        cls: "0.05",
        fid: 13,
      },
      timestamp: 1654547478071,
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
                  density: 0.9458999999999999,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.029799999999999997,
                },
                { start: "0.25", density: 0.024299999999999995 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.528352835283528 },
                { start: 200, end: 500, density: 0.35543554355435536 },
                { start: 500, density: 0.11621162116211672 },
              ],
              percentiles: { p75: 320 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.7972999999999996 },
                { start: 800, end: 1800, density: 0.1670999999999999 },
                { start: 1800, density: 0.0356000000000004 },
              ],
              percentiles: { p75: 738 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8657134286571345 },
                { start: 1800, end: 3000, density: 0.09339066093390663 },
                { start: 3000, density: 0.0408959104089588 },
              ],
              percentiles: { p75: 1402 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9427114577084582 },
                { start: 100, end: 300, density: 0.031493701259748055 },
                { start: 300, density: 0.025794841031793737 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.892671465706858 },
                { start: 2500, end: 4000, density: 0.07473505298940201 },
                { start: 4000, density: 0.03259348130373994 },
              ],
              percentiles: { p75: 1763 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.it/",
          normalizedUrl: "https://www.yara.it",
        },
      },
      extractedResults: {
        fcp: 1402,
        lcp: 1763,
        cls: "0.00",
        fid: 12,
      },
      timestamp: 1654547478750,
    },
    {
      url: "https://www.yara.lv/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "https://www.yara.lv" },
          metrics: {
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.891771645670866 },
                { start: 2500, end: 4000, density: 0.08603279344131172 },
                { start: 4000, density: 0.02219556088782241 },
              ],
              percentiles: { p75: 1883 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9430999999999999,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.04319999999999999,
                },
                { start: "0.25", density: 0.013699999999999999 },
              ],
              percentiles: { p75: "0.01" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6188143556932919 },
                { start: 200, end: 500, density: 0.299810056982905 },
                { start: 500, density: 0.08137558732380316 },
              ],
              percentiles: { p75: 264 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.6461646164616462 },
                { start: 800, end: 1800, density: 0.3183318331833185 },
                { start: 1800, density: 0.035503550355035246 },
              ],
              percentiles: { p75: 945 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8649729945989199 },
                { start: 1800, end: 3000, density: 0.1049209841968394 },
                { start: 3000, density: 0.03010602120424086 },
              ],
              percentiles: { p75: 1417 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9665866346538616 },
                { start: 100, end: 300, density: 0.025110044017607042 },
                { start: 300, density: 0.008303321328531408 },
              ],
              percentiles: { p75: 13 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.lv/",
          normalizedUrl: "https://www.yara.lv",
        },
      },
      extractedResults: {
        fcp: 1417,
        lcp: 1883,
        cls: "0.01",
        fid: 13,
      },
      timestamp: 1654547479366,
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
                { start: 0, end: 100, density: 0.9766930079023707 },
                { start: 100, end: 300, density: 0.01590477143142943 },
                { start: 300, density: 0.007402220666199871 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.9201340268053614 },
                { start: 2500, end: 4000, density: 0.062062412482496505 },
                { start: 4000, density: 0.017803560712142244 },
              ],
              percentiles: { p75: 1691 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8941894189418942,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.08990899089908991,
                },
                { start: "0.25", density: 0.015901590159015894 },
              ],
              percentiles: { p75: "0.01" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.674932506749325 },
                { start: 200, end: 500, density: 0.2650734926507348 },
                { start: 500, density: 0.05999400059994009 },
              ],
              percentiles: { p75: 239 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.7046704670467047 },
                { start: 800, end: 1800, density: 0.2663266326632664 },
                { start: 1800, density: 0.02900290029002896 },
              ],
              percentiles: { p75: 858 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.9017901790179018 },
                { start: 1800, end: 3000, density: 0.0768076807680768 },
                { start: 3000, density: 0.021402140214021287 },
              ],
              percentiles: { p75: 1324 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.lt/",
          normalizedUrl: "https://www.yara.lt",
        },
      },
      extractedResults: {
        fcp: 1324,
        lcp: 1691,
        cls: "0.01",
        fid: 12,
      },
      timestamp: 1654547480259,
    },
    {
      url: "https://www.yara.hu/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "https://www.yara.hu" },
          metrics: {
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6712000000000005 },
                { start: 200, end: 500, density: 0.2620000000000002 },
                { start: 500, density: 0.06679999999999946 },
              ],
              percentiles: { p75: 240 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.6339901970591177 },
                { start: 800, end: 1800, density: 0.3204961488446535 },
                { start: 1800, density: 0.045513654096228706 },
              ],
              percentiles: { p75: 946 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.875824835032993 },
                { start: 1800, end: 3000, density: 0.08918216356728653 },
                { start: 3000, density: 0.034993001399720544 },
              ],
              percentiles: { p75: 1397 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9686062787442512 },
                { start: 100, end: 300, density: 0.016996600679864027 },
                { start: 300, density: 0.014397120575884853 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8950895089508951 },
                { start: 2500, end: 4000, density: 0.07590759075907588 },
                { start: 4000, density: 0.029002900290028923 },
              ],
              percentiles: { p75: 1785 },
            },
            cumulative_layout_shift: {
              histogram: [
                { start: "0.00", end: "0.10", density: 0.9582 },
                { start: "0.10", end: "0.25", density: 0.028 },
                { start: "0.25", density: 0.01379999999999998 },
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
        fcp: 1397,
        lcp: 1785,
        cls: "0.00",
        fid: 12,
      },
      timestamp: 1654547481259,
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
                { start: 0, end: 100, density: 0.9654138344662135 },
                { start: 100, end: 300, density: 0.01639344262295082 },
                { start: 300, density: 0.01819272291083571 },
              ],
              percentiles: { p75: 11 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.9132413241324131 },
                { start: 2500, end: 4000, density: 0.06445644564456444 },
                { start: 4000, density: 0.022302230223022353 },
              ],
              percentiles: { p75: 1719 },
            },
            cumulative_layout_shift: {
              histogram: [
                { start: "0.00", end: "0.10", density: 0.8037 },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.15000000000000002,
                },
                { start: "0.25", density: 0.04630000000000001 },
              ],
              percentiles: { p75: "0.07" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6826634673065386 },
                { start: 200, end: 500, density: 0.22625474905019002 },
                { start: 500, density: 0.09108178364327132 },
              ],
              percentiles: { p75: 240 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.7504500900180037 },
                { start: 800, end: 1800, density: 0.215243048609722 },
                { start: 1800, density: 0.0343068613722744 },
              ],
              percentiles: { p75: 813 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.901009899010099 },
                { start: 1800, end: 3000, density: 0.07109289071092893 },
                { start: 3000, density: 0.027897210278972125 },
              ],
              percentiles: { p75: 1264 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.nl/",
          normalizedUrl: "https://www.yara.nl",
        },
      },
      extractedResults: {
        fcp: 1264,
        lcp: 1719,
        cls: "0.07",
        fid: 11,
      },
      timestamp: 1654547482054,
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
                  density: 0.8468153184681532,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.1077892210778922,
                },
                { start: "0.25", density: 0.04539546045395462 },
              ],
              percentiles: { p75: "0.05" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.7083999999999999 },
                { start: 200, end: 500, density: 0.20009999999999994 },
                { start: 500, density: 0.09149999999999998 },
              ],
              percentiles: { p75: 229 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.8576715343068614 },
                { start: 800, end: 1800, density: 0.12662532506501298 },
                { start: 1800, density: 0.015703140628125615 },
              ],
              percentiles: { p75: 674 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.9431056894310568 },
                { start: 1800, end: 3000, density: 0.0427957204279572 },
                { start: 3000, density: 0.014098590140986 },
              ],
              percentiles: { p75: 1118 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9623887166149844 },
                { start: 100, end: 300, density: 0.021106331899569862 },
                { start: 300, density: 0.016504951485445733 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.9431886377275456 },
                { start: 2500, end: 4000, density: 0.0439087817563513 },
                { start: 4000, density: 0.012902580516103226 },
              ],
              percentiles: { p75: 1496 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.no/",
          normalizedUrl: "https://www.yara.no",
        },
      },
      extractedResults: {
        fcp: 1118,
        lcp: 1496,
        cls: "0.05",
        fid: 12,
      },
      timestamp: 1654547482801,
    },
    {
      url: "https://www.yara.pl/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "https://www.yara.pl" },
          metrics: {
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.6439507655358752 },
                { start: 800, end: 1800, density: 0.30941659161412993 },
                { start: 1800, density: 0.04663264284999479 },
              ],
              percentiles: { p75: 962 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8107242897158856 },
                { start: 1800, end: 3000, density: 0.1333533413365345 },
                { start: 3000, density: 0.05592236894757977 },
              ],
              percentiles: { p75: 1621 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9516951695169517 },
                { start: 100, end: 300, density: 0.030103010301030103 },
                { start: 300, density: 0.018201820182018266 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8631452581032406 },
                { start: 2500, end: 4000, density: 0.09413765506202476 },
                { start: 4000, density: 0.04271708683473455 },
              ],
              percentiles: { p75: 1980 },
            },
            cumulative_layout_shift: {
              histogram: [
                { start: "0.00", end: "0.10", density: 0.8632 },
                { start: "0.10", end: "0.25", density: 0.1165 },
                { start: "0.25", density: 0.02029999999999999 },
              ],
              percentiles: { p75: "0.01" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5676703010903268 },
                { start: 200, end: 500, density: 0.3250975292587774 },
                { start: 500, density: 0.10723216965089571 },
              ],
              percentiles: { p75: 298 },
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
        lcp: 1980,
        cls: "0.01",
        fid: 12,
      },
      timestamp: 1654547483543,
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
                { start: 0, end: 800, density: 0.7186999999999998 },
                { start: 800, end: 1800, density: 0.2230999999999999 },
                { start: 1800, density: 0.05820000000000027 },
              ],
              percentiles: { p75: 856 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8384161583841607 },
                { start: 1800, end: 3000, density: 0.09519048095190472 },
                { start: 3000, density: 0.06639336066393448 },
              ],
              percentiles: { p75: 1437 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9692877150860345 },
                { start: 100, end: 300, density: 0.018707482993197282 },
                { start: 300, density: 0.012004801920768299 },
              ],
              percentiles: { p75: 11 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.86000800240072 },
                { start: 2500, end: 4000, density: 0.0942782834850455 },
                { start: 4000, density: 0.0457137141142346 },
              ],
              percentiles: { p75: 1860 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9553999999999999,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.029899999999999996,
                },
                { start: "0.25", density: 0.014700000000000001 },
              ],
              percentiles: { p75: "0.01" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5999000000000001 },
                { start: 200, end: 500, density: 0.329 },
                { start: 500, density: 0.07109999999999997 },
              ],
              percentiles: { p75: 267 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.pt/",
          normalizedUrl: "https://www.yara.pt",
        },
      },
      extractedResults: {
        fcp: 1437,
        lcp: 1860,
        cls: "0.01",
        fid: 11,
      },
      timestamp: 1654547484352,
    },
    {
      url: "https://www.yara.ro/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "https://www.yara.ro" },
          metrics: {
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.6027397260273972 },
                { start: 800, end: 1800, density: 0.34996500349964993 },
                { start: 1800, density: 0.047295270472952754 },
              ],
              percentiles: { p75: 971 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8740251949610073 },
                { start: 1800, end: 3000, density: 0.08968206358728248 },
                { start: 3000, density: 0.036292741451710235 },
              ],
              percentiles: { p75: 1454 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9608078384323137 },
                { start: 100, end: 300, density: 0.020495900819836037 },
                { start: 300, density: 0.0186962607478504 },
              ],
              percentiles: { p75: 11 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8842999999999998 },
                { start: 2500, end: 4000, density: 0.08359999999999998 },
                { start: 4000, density: 0.03210000000000021 },
              ],
              percentiles: { p75: 1890 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9099999999999999,
                },
                { start: "0.10", end: "0.25", density: 0.0753 },
                { start: "0.25", density: 0.014700000000000012 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6403640364036405 },
                { start: 200, end: 500, density: 0.2803280328032804 },
                { start: 500, density: 0.07930793079307916 },
              ],
              percentiles: { p75: 260 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.ro/",
          normalizedUrl: "https://www.yara.ro",
        },
      },
      extractedResults: {
        fcp: 1454,
        lcp: 1890,
        cls: "0.00",
        fid: 11,
      },
      timestamp: 1654547485166,
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
                  density: 0.8895110488951105,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.08039196080391961,
                },
                { start: "0.25", density: 0.030096990300969947 },
              ],
              percentiles: { p75: "0.01" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.4803039392121577 },
                { start: 200, end: 500, density: 0.39502099580083994 },
                { start: 500, density: 0.12467506498700243 },
              ],
              percentiles: { p75: 345 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.6404999999999998 },
                { start: 800, end: 1800, density: 0.32789999999999986 },
                { start: 1800, density: 0.03160000000000024 },
              ],
              percentiles: { p75: 935 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8883776755351068 },
                { start: 1800, end: 3000, density: 0.08891778355671134 },
                { start: 3000, density: 0.022704540908181726 },
              ],
              percentiles: { p75: 1388 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9604802401200601 },
                { start: 100, end: 300, density: 0.027113556778389197 },
                { start: 300, density: 0.012406203101550889 },
              ],
              percentiles: { p75: 14 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8997001499250376 },
                { start: 2500, end: 4000, density: 0.07811094452773616 },
                { start: 4000, density: 0.02218890554722624 },
              ],
              percentiles: { p75: 1811 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.fi/",
          normalizedUrl: "https://www.yara.fi",
        },
      },
      extractedResults: {
        fcp: 1388,
        lcp: 1811,
        cls: "0.01",
        fid: 14,
      },
      timestamp: 1654547485879,
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
                { start: 0, end: 100, density: 0.9656965696569657 },
                { start: 100, end: 300, density: 0.019301930193019304 },
                { start: 300, density: 0.015001500150015014 },
              ],
              percentiles: { p75: 11 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.927264547090582 },
                { start: 2500, end: 4000, density: 0.05603879224155171 },
                { start: 4000, density: 0.01669666066786625 },
              ],
              percentiles: { p75: 1650 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8560143985601439,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.10858914108589139,
                },
                { start: "0.25", density: 0.035396460353964605 },
              ],
              percentiles: { p75: "0.05" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.7128 },
                { start: 200, end: 500, density: 0.21250000000000002 },
                { start: 500, density: 0.07470000000000009 },
              ],
              percentiles: { p75: 221 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.7308461692338469 },
                { start: 800, end: 1800, density: 0.24424884976995395 },
                { start: 1800, density: 0.024904980996199137 },
              ],
              percentiles: { p75: 831 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.9094818963792758 },
                { start: 1800, end: 3000, density: 0.0715143028605721 },
                { start: 3000, density: 0.01900380076015211 },
              ],
              percentiles: { p75: 1227 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.se/",
          normalizedUrl: "https://www.yara.se",
        },
      },
      extractedResults: {
        fcp: 1227,
        lcp: 1650,
        cls: "0.05",
        fid: 11,
      },
      timestamp: 1654547486740,
    },
    {
      url: "https://www.yara.co.uk/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "https://www.yara.co.uk" },
          metrics: {
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.7981201879812019,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.1227877212278772,
                },
                { start: "0.25", density: 0.07909209079092099 },
              ],
              percentiles: { p75: "0.07" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6131773645270951 },
                { start: 200, end: 500, density: 0.255148970205959 },
                { start: 500, density: 0.13167366526694585 },
              ],
              percentiles: { p75: 291 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.2918708129187105 },
                { start: 800, end: 1800, density: 0.38396160383961914 },
                { start: 1800, density: 0.32416758324167033 },
              ],
              percentiles: { p75: 2043 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5015003000600116 },
                { start: 1800, end: 3000, density: 0.2834566913382674 },
                { start: 3000, density: 0.21504300860172115 },
              ],
              percentiles: { p75: 2811 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9352870574114821 },
                { start: 100, end: 300, density: 0.03580716143228645 },
                { start: 300, density: 0.02890578115623144 },
              ],
              percentiles: { p75: 14 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.5973902609739022 },
                { start: 2500, end: 4000, density: 0.24862513748625115 },
                { start: 4000, density: 0.1539846015398467 },
              ],
              percentiles: { p75: 3235 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.co.uk/",
          normalizedUrl: "https://www.yara.co.uk",
        },
      },
      extractedResults: {
        fcp: 2811,
        lcp: 3235,
        cls: "0.07",
        fid: 14,
      },
      timestamp: 1654547487555,
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
                { start: "0.00", end: "0.10", density: 0.889 },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.08350000000000002,
                },
                { start: "0.25", density: 0.027500000000000017 },
              ],
              percentiles: { p75: "0.01" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5719571957195715 },
                { start: 200, end: 500, density: 0.3046304630463044 },
                { start: 500, density: 0.12341234123412416 },
              ],
              percentiles: { p75: 301 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.6151384861513848 },
                { start: 800, end: 1800, density: 0.34466553344665524 },
                { start: 1800, density: 0.04019598040195998 },
              ],
              percentiles: { p75: 977 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7929999999999999 },
                { start: 1800, end: 3000, density: 0.15700000000000003 },
                { start: 3000, density: 0.04999999999999993 },
              ],
              percentiles: { p75: 1688 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9519807923169267 },
                { start: 100, end: 300, density: 0.028211284513805515 },
                { start: 300, density: 0.019807923169267872 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8301999999999999 },
                { start: 2500, end: 4000, density: 0.1257 },
                { start: 4000, density: 0.04410000000000003 },
              ],
              percentiles: { p75: 2145 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.gr/",
          normalizedUrl: "https://www.yara.gr",
        },
      },
      extractedResults: {
        fcp: 1688,
        lcp: 2145,
        cls: "0.01",
        fid: 12,
      },
      timestamp: 1654547488819,
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
                  density: 0.9399060093990601,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.038296170382961695,
                },
                { start: "0.25", density: 0.021797820217978194 },
              ],
              percentiles: { p75: "0.01" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6447934380314092 },
                { start: 200, end: 500, density: 0.2565769730919275 },
                { start: 500, density: 0.09862958887666337 },
              ],
              percentiles: { p75: 261 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.45129999999999953 },
                { start: 800, end: 1800, density: 0.3597999999999997 },
                { start: 1800, density: 0.1889000000000008 },
              ],
              percentiles: { p75: 1575 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.620051979208317 },
                { start: 1800, end: 3000, density: 0.2327069172331069 },
                { start: 3000, density: 0.14724110355857614 },
              ],
              percentiles: { p75: 2380 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9539769884942468 },
                { start: 100, end: 300, density: 0.02701350675337668 },
                { start: 300, density: 0.019009504752376456 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7236276372362757 },
                { start: 2500, end: 4000, density: 0.19548045195480424 },
                { start: 4000, density: 0.08089191080892015 },
              ],
              percentiles: { p75: 2651 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.ru/",
          normalizedUrl: "https://www.yara.ru",
        },
      },
      extractedResults: {
        fcp: 2380,
        lcp: 2651,
        cls: "0.01",
        fid: 12,
      },
      timestamp: 1654547490029,
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
                  density: 0.9245924592459246,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.060106010601060106,
                },
                { start: "0.25", density: 0.015301530153015287 },
              ],
              percentiles: { p75: "0.01" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6273745250949813 },
                { start: 200, end: 500, density: 0.28554289142171585 },
                { start: 500, density: 0.08708258348330297 },
              ],
              percentiles: { p75: 260 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.7047295270472945 },
                { start: 800, end: 1800, density: 0.22857714228577114 },
                { start: 1800, density: 0.06669333066693424 },
              ],
              percentiles: { p75: 873 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8285657131426283 },
                { start: 1800, end: 3000, density: 0.11412282456491296 },
                { start: 3000, density: 0.05731146229245868 },
              ],
              percentiles: { p75: 1522 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9603960396039602 },
                { start: 100, end: 300, density: 0.0172017201720172 },
                { start: 300, density: 0.022402240224022534 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8633773245350927 },
                { start: 2500, end: 4000, density: 0.09163167366526692 },
                { start: 4000, density: 0.0449910017996402 },
              ],
              percentiles: { p75: 1927 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.ua/",
          normalizedUrl: "https://www.yara.ua",
        },
      },
      extractedResults: {
        fcp: 1522,
        lcp: 1927,
        cls: "0.01",
        fid: 12,
      },
      timestamp: 1654547491212,
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
                { start: "0.00", end: "0.10", density: 0.9102 },
                { start: "0.10", end: "0.25", density: 0.0406 },
                { start: "0.25", density: 0.0492 },
              ],
              percentiles: { p75: "0.02" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6112000000000004 },
                { start: 200, end: 500, density: 0.3125000000000002 },
                { start: 500, density: 0.07629999999999931 },
              ],
              percentiles: { p75: 270 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.31193119311931194 },
                { start: 800, end: 1800, density: 0.5314531453145315 },
                { start: 1800, density: 0.15661566156615656 },
              ],
              percentiles: { p75: 1496 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5350859656137533 },
                { start: 1800, end: 3000, density: 0.2976809276289477 },
                { start: 3000, density: 0.16723310675729916 },
              ],
              percentiles: { p75: 2545 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9681968196819681 },
                { start: 100, end: 300, density: 0.0234023402340234 },
                { start: 300, density: 0.008400840084008402 },
              ],
              percentiles: { p75: 11 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.659065906590659 },
                { start: 2500, end: 4000, density: 0.21942194219421943 },
                { start: 4000, density: 0.12151215121512161 },
              ],
              percentiles: { p75: 2945 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.ar/",
          normalizedUrl: "https://www.yara.com.ar",
        },
      },
      extractedResults: {
        fcp: 2545,
        lcp: 2945,
        cls: "0.02",
        fid: 11,
      },
      timestamp: 1654547491957,
    },
    {
      url: "https://www.yara.bo/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "https://www.yara.bo" },
          metrics: {
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.2196000000000003 },
                { start: 800, end: 1800, density: 0.5323000000000008 },
                { start: 1800, density: 0.248099999999999 },
              ],
              percentiles: { p75: 1828 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.37385045981607523 },
                { start: 1800, end: 3000, density: 0.32347061175529934 },
                { start: 3000, density: 0.30267892842862537 },
              ],
              percentiles: { p75: 3352 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9697060587882423 },
                { start: 100, end: 300, density: 0.022295540891821633 },
                { start: 300, density: 0.007998400319936011 },
              ],
              percentiles: { p75: 11 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.4922484496899379 },
                { start: 2500, end: 4000, density: 0.2987097419483897 },
                { start: 4000, density: 0.20904180836167238 },
              ],
              percentiles: { p75: 3741 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9287071292870712,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.04889511048895109,
                },
                { start: "0.25", density: 0.02239776022397762 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5288471152884711 },
                { start: 200, end: 500, density: 0.3541645835416457 },
                { start: 500, density: 0.11698830116988325 },
              ],
              percentiles: { p75: 329 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.bo/",
          normalizedUrl: "https://www.yara.bo",
        },
      },
      extractedResults: {
        fcp: 3352,
        lcp: 3741,
        cls: "0.00",
        fid: 11,
      },
      timestamp: 1654547493045,
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
                { start: 0, end: 1800, density: 0.5131565782891442 },
                { start: 1800, end: 3000, density: 0.23921960980490226 },
                { start: 3000, density: 0.24762381190595353 },
              ],
              percentiles: { p75: 3020 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9122824564912982 },
                { start: 100, end: 300, density: 0.05701140228045609 },
                { start: 300, density: 0.030706141228245675 },
              ],
              percentiles: { p75: 16 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.5608621724344867 },
                { start: 2500, end: 4000, density: 0.2476995399079815 },
                { start: 4000, density: 0.19143828765753193 },
              ],
              percentiles: { p75: 3553 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8491849184918492,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.10771077107710772,
                },
                { start: "0.25", density: 0.043104310431043076 },
              ],
              percentiles: { p75: "0.04" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.4890489048904893 },
                { start: 200, end: 500, density: 0.29412941294129424 },
                { start: 500, density: 0.21682168216821632 },
              ],
              percentiles: { p75: 438 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.412641264126412 },
                { start: 800, end: 1800, density: 0.396639663966396 },
                { start: 1800, density: 0.19071907190719198 },
              ],
              percentiles: { p75: 1589 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yarabrasil.com.br/",
          normalizedUrl: "https://www.yarabrasil.com.br",
        },
      },
      extractedResults: {
        fcp: 3020,
        lcp: 3553,
        cls: "0.04",
        fid: 16,
      },
      timestamp: 1654547493919,
    },
    {
      url: "https://www.yaracanada.ca/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "https://www.yaracanada.ca" },
          metrics: {
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.47095290470952883 },
                { start: 800, end: 1800, density: 0.4169583041695829 },
                { start: 1800, density: 0.11208879112088818 },
              ],
              percentiles: { p75: 1307 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6666999900029988 },
                { start: 1800, end: 3000, density: 0.2102369289213235 },
                { start: 3000, density: 0.12306308107567769 },
              ],
              percentiles: { p75: 2149 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9556000000000001 },
                { start: 100, end: 300, density: 0.024000000000000004 },
                { start: 300, density: 0.020399999999999946 },
              ],
              percentiles: { p75: 10 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7177129148340665 },
                { start: 2500, end: 4000, density: 0.1775289884046383 },
                { start: 4000, density: 0.10475809676129515 },
              ],
              percentiles: { p75: 2741 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8228354329134174,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.1279744051189762,
                },
                { start: "0.25", density: 0.049190161967606456 },
              ],
              percentiles: { p75: "0.06" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.7275000000000004 },
                { start: 200, end: 500, density: 0.18250000000000008 },
                { start: 500, density: 0.0899999999999995 },
              ],
              percentiles: { p75: 217 },
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
        lcp: 2741,
        cls: "0.06",
        fid: 10,
      },
      timestamp: 1654547494643,
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
                  density: 0.8228354329134174,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.1279744051189762,
                },
                { start: "0.25", density: 0.049190161967606456 },
              ],
              percentiles: { p75: "0.06" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.7275000000000004 },
                { start: 200, end: 500, density: 0.18250000000000008 },
                { start: 500, density: 0.0899999999999995 },
              ],
              percentiles: { p75: 217 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.47095290470952883 },
                { start: 800, end: 1800, density: 0.4169583041695829 },
                { start: 1800, density: 0.11208879112088818 },
              ],
              percentiles: { p75: 1307 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6666999900029988 },
                { start: 1800, end: 3000, density: 0.2102369289213235 },
                { start: 3000, density: 0.12306308107567769 },
              ],
              percentiles: { p75: 2149 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9556000000000001 },
                { start: 100, end: 300, density: 0.024000000000000004 },
                { start: 300, density: 0.020399999999999946 },
              ],
              percentiles: { p75: 10 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7177129148340665 },
                { start: 2500, end: 4000, density: 0.1775289884046383 },
                { start: 4000, density: 0.10475809676129515 },
              ],
              percentiles: { p75: 2741 },
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
        lcp: 2741,
        cls: "0.06",
        fid: 10,
      },
      timestamp: 1654547495310,
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
                { start: 0, end: 1800, density: 0.5460184073629444 },
                { start: 1800, end: 3000, density: 0.2954181672669064 },
                { start: 3000, density: 0.1585634253701492 },
              ],
              percentiles: { p75: 2486 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9812037592481504 },
                { start: 100, end: 300, density: 0.013097380523895223 },
                { start: 300, density: 0.005698860227954424 },
              ],
              percentiles: { p75: 10 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.65973402659734 },
                { start: 2500, end: 4000, density: 0.21367863213678626 },
                { start: 4000, density: 0.12658734126587384 },
              ],
              percentiles: { p75: 2936 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8412841284128413,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.0884088408840884,
                },
                { start: "0.25", density: 0.07030703070307033 },
              ],
              percentiles: { p75: "0.07" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6897689768976899 },
                { start: 200, end: 500, density: 0.2585258525852585 },
                { start: 500, density: 0.05170517051705167 },
              ],
              percentiles: { p75: 229 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.30753849230154 },
                { start: 800, end: 1800, density: 0.5312937412517502 },
                { start: 1800, density: 0.16116776644670983 },
              ],
              percentiles: { p75: 1552 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.cl/",
          normalizedUrl: "https://www.yara.cl",
        },
      },
      extractedResults: {
        fcp: 2486,
        lcp: 2936,
        cls: "0.07",
        fid: 10,
      },
      timestamp: 1654547495937,
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
                  density: 0.887988798879888,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.0631063106310631,
                },
                { start: "0.25", density: 0.04890489048904887 },
              ],
              percentiles: { p75: "0.01" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6230000000000003 },
                { start: 200, end: 500, density: 0.2814000000000001 },
                { start: 500, density: 0.09559999999999964 },
              ],
              percentiles: { p75: 266 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.4548909781956397 },
                { start: 800, end: 1800, density: 0.41368273654730997 },
                { start: 1800, density: 0.13142628525705036 },
              ],
              percentiles: { p75: 1339 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6296407485239668 },
                { start: 1800, end: 3000, density: 0.21334934454117885 },
                { start: 3000, density: 0.15700990693485437 },
              ],
              percentiles: { p75: 2337 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.953023488255872 },
                { start: 100, end: 300, density: 0.029185407296351825 },
                { start: 300, density: 0.01779110444777622 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7129425885177028 },
                { start: 2500, end: 4000, density: 0.1611322264452889 },
                { start: 4000, density: 0.12592518503700834 },
              ],
              percentiles: { p75: 2788 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.co/",
          normalizedUrl: "https://www.yara.com.co",
        },
      },
      extractedResults: {
        fcp: 2337,
        lcp: 2788,
        cls: "0.01",
        fid: 12,
      },
      timestamp: 1654547496482,
    },
    {
      url: "https://www.yara.com.ec/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "https://www.yara.com.ec" },
          metrics: {
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6399639963996402 },
                { start: 200, end: 500, density: 0.295829582958296 },
                { start: 500, density: 0.06420642064206378 },
              ],
              percentiles: { p75: 259 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.4416883376675336 },
                { start: 800, end: 1800, density: 0.45789157831566324 },
                { start: 1800, density: 0.10042008401680314 },
              ],
              percentiles: { p75: 1293 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6090781843631269 },
                { start: 1800, end: 3000, density: 0.253849230153969 },
                { start: 3000, density: 0.13707258548290407 },
              ],
              percentiles: { p75: 2356 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9708087573727883 },
                { start: 100, end: 300, density: 0.022093371988403485 },
                { start: 300, density: 0.007097870638808346 },
              ],
              percentiles: { p75: 11 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7002500000000003 },
                { start: 2500, end: 4000, density: 0.19225 },
                { start: 4000, density: 0.10749999999999973 },
              ],
              percentiles: { p75: 2773 },
            },
            cumulative_layout_shift: {
              histogram: [
                { start: "0.00", end: "0.10", density: 0.9154 },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.05210000000000001,
                },
                { start: "0.25", density: 0.032500000000000015 },
              ],
              percentiles: { p75: "0.01" },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.ec/",
          normalizedUrl: "https://www.yara.com.ec",
        },
      },
      extractedResults: {
        fcp: 2356,
        lcp: 2773,
        cls: "0.01",
        fid: 11,
      },
      timestamp: 1654547497224,
    },
    {
      url: "https://www.yara.cr/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "https://www.yara.cr" },
          metrics: {
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9708 },
                { start: 100, end: 300, density: 0.025399999999999995 },
                { start: 300, density: 0.0037999999999999983 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.724855028994201 },
                { start: 2500, end: 4000, density: 0.16356728654269154 },
                { start: 4000, density: 0.1115776844631075 },
              ],
              percentiles: { p75: 2679 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9494050594940506,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.0325967403259674,
                },
                { start: "0.25", density: 0.017998200179981994 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.7018807523009204 },
                { start: 200, end: 500, density: 0.24699879951980785 },
                { start: 500, density: 0.051120448179271735 },
              ],
              percentiles: { p75: 223 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.3972794558911785 },
                { start: 800, end: 1800, density: 0.4741948389677938 },
                { start: 1800, density: 0.12852570514102768 },
              ],
              percentiles: { p75: 1357 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6033396660333961 },
                { start: 1800, end: 3000, density: 0.2610738926107386 },
                { start: 3000, density: 0.13558644135586545 },
              ],
              percentiles: { p75: 2312 },
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
        lcp: 2679,
        cls: "0.00",
        fid: 12,
      },
      timestamp: 1654547497986,
    },
    {
      url: "https://www.yara.com.gt/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "https://www.yara.com.gt" },
          metrics: {
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.5108 },
                { start: 800, end: 1800, density: 0.3854 },
                { start: 1800, density: 0.10379999999999992 },
              ],
              percentiles: { p75: 1170 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7099419883976797 },
                { start: 1800, end: 3000, density: 0.18113622724544912 },
                { start: 3000, density: 0.10892178435687103 },
              ],
              percentiles: { p75: 1965 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9632110366889932 },
                { start: 100, end: 300, density: 0.027891632510246924 },
                { start: 300, density: 0.008897330800759764 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7719499999999987 },
                { start: 2500, end: 4000, density: 0.14284999999999973 },
                { start: 4000, density: 0.08520000000000152 },
              ],
              percentiles: { p75: 2416 },
            },
            cumulative_layout_shift: {
              histogram: [
                { start: "0.00", end: "0.10", density: 0.9313 },
                { start: "0.10", end: "0.25", density: 0.0377 },
                { start: "0.25", density: 0.031000000000000007 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5972791837551267 },
                { start: 200, end: 500, density: 0.2801840552165651 },
                { start: 500, density: 0.12253676102830818 },
              ],
              percentiles: { p75: 299 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.gt/",
          normalizedUrl: "https://www.yara.com.gt",
        },
      },
      extractedResults: {
        fcp: 1965,
        lcp: 2416,
        cls: "0.00",
        fid: 12,
      },
      timestamp: 1654547498703,
    },
    {
      url: "https://www.yara.com.mx/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "https://www.yara.com.mx" },
          metrics: {
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6385554221688684 },
                { start: 1800, end: 3000, density: 0.2160864345738298 },
                { start: 3000, density: 0.14535814325730181 },
              ],
              percentiles: { p75: 2244 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9629962996299629 },
                { start: 100, end: 300, density: 0.0246024602460246 },
                { start: 300, density: 0.01240124012401251 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7218052636845792 },
                { start: 2500, end: 4000, density: 0.1571099769838887 },
                { start: 4000, density: 0.12108475933153197 },
              ],
              percentiles: { p75: 2694 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8750875087508752,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.07230723072307232,
                },
                { start: "0.25", density: 0.05260526052605263 },
              ],
              percentiles: { p75: "0.01" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5542988689820846 },
                { start: 200, end: 500, density: 0.30537483735361876 },
                { start: 500, density: 0.14032629366429664 },
              ],
              percentiles: { p75: 334 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.47494248274482304 },
                { start: 800, end: 1800, density: 0.41092327698309455 },
                { start: 1800, density: 0.11413424027208223 },
              ],
              percentiles: { p75: 1226 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.mx/",
          normalizedUrl: "https://www.yara.com.mx",
        },
      },
      extractedResults: {
        fcp: 2244,
        lcp: 2694,
        cls: "0.01",
        fid: 12,
      },
      timestamp: 1654547499391,
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
                { start: 0, end: 1800, density: 0.6772354470894182 },
                { start: 1800, end: 3000, density: 0.23404680936187253 },
                { start: 3000, density: 0.0887177435487092 },
              ],
              percentiles: { p75: 1978 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9820982098209822 },
                { start: 100, end: 300, density: 0.009900990099009903 },
                { start: 300, density: 0.008000800080008003 },
              ],
              percentiles: { p75: 11 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7793220677932209 },
                { start: 2500, end: 4000, density: 0.13998600139986006 },
                { start: 4000, density: 0.08069193080691915 },
              ],
              percentiles: { p75: 2361 },
            },
            cumulative_layout_shift: {
              histogram: [
                { start: "0.00", end: "0.10", density: 0.9334 },
                { start: "0.10", end: "0.25", density: 0.0415 },
                { start: "0.25", density: 0.0251 },
              ],
              percentiles: { p75: "0.01" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6430286057211442 },
                { start: 200, end: 500, density: 0.30156031206241246 },
                { start: 500, density: 0.0554110822164434 },
              ],
              percentiles: { p75: 271 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.42902870861258385 },
                { start: 800, end: 1800, density: 0.4926477943383015 },
                { start: 1800, density: 0.0783234970491146 },
              ],
              percentiles: { p75: 1126 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.pa/",
          normalizedUrl: "https://www.yara.com.pa",
        },
      },
      extractedResults: {
        fcp: 1978,
        lcp: 2361,
        cls: "0.01",
        fid: 11,
      },
      timestamp: 1654547500418,
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
                { start: 0, end: 800, density: 0.31346269253850767 },
                { start: 800, end: 1800, density: 0.47519503900780147 },
                { start: 1800, density: 0.211342268453691 },
              ],
              percentiles: { p75: 1723 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5255897640943614 },
                { start: 1800, end: 3000, density: 0.2940823670531782 },
                { start: 3000, density: 0.1803278688524604 },
              ],
              percentiles: { p75: 2624 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9702999999999999 },
                { start: 100, end: 300, density: 0.023999999999999997 },
                { start: 300, density: 0.005699999999999997 },
              ],
              percentiles: { p75: 11 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6263005202080824 },
                { start: 2500, end: 4000, density: 0.21923769507803098 },
                { start: 4000, density: 0.15446178471388664 },
              ],
              percentiles: { p75: 3170 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9072907290729073,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.05830583058305831,
                },
                { start: "0.25", density: 0.03440344034403438 },
              ],
              percentiles: { p75: "0.02" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6107610761076109 },
                { start: 200, end: 500, density: 0.31593159315931596 },
                { start: 500, density: 0.07330733073307322 },
              ],
              percentiles: { p75: 279 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.pe/",
          normalizedUrl: "https://www.yara.com.pe",
        },
      },
      extractedResults: {
        fcp: 2624,
        lcp: 3170,
        cls: "0.02",
        fid: 11,
      },
      timestamp: 1654547501316,
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
                { start: 0, end: 100, density: 0.916 },
                { start: 100, end: 300, density: 0.037100000000000015 },
                { start: 300, density: 0.04690000000000002 },
              ],
              percentiles: { p75: 14 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.701250625312656 },
                { start: 2500, end: 4000, density: 0.16978489244622308 },
                { start: 4000, density: 0.12896448224112095 },
              ],
              percentiles: { p75: 2812 },
            },
            cumulative_layout_shift: {
              histogram: [
                { start: "0.00", end: "0.10", density: 0.8145 },
                { start: "0.10", end: "0.25", density: 0.0999 },
                { start: "0.25", density: 0.08560000000000006 },
              ],
              percentiles: { p75: "0.06" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6153999999999997 },
                { start: 200, end: 500, density: 0.23919999999999994 },
                { start: 500, density: 0.1454000000000003 },
              ],
              percentiles: { p75: 305 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.4119588041195878 },
                { start: 800, end: 1800, density: 0.4340565943405656 },
                { start: 1800, density: 0.15398460153984653 },
              ],
              percentiles: { p75: 1436 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.638363836383638 },
                { start: 1800, end: 3000, density: 0.21452145214521431 },
                { start: 3000, density: 0.14711471147114769 },
              ],
              percentiles: { p75: 2294 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.us/",
          normalizedUrl: "https://www.yara.us",
        },
      },
      extractedResults: {
        fcp: 2294,
        lcp: 2812,
        cls: "0.06",
        fid: 14,
      },
      timestamp: 1654547502143,
    },
    {
      url: "https://www.yara.com.au/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "https://www.yara.com.au" },
          metrics: {
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.7305000000000005 },
                { start: 200, end: 500, density: 0.20340000000000008 },
                { start: 500, density: 0.06609999999999946 },
              ],
              percentiles: { p75: 211 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.3721255748850226 },
                { start: 800, end: 1800, density: 0.4196160767846426 },
                { start: 1800, density: 0.2082583483303349 },
              ],
              percentiles: { p75: 1613 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6345999999999998 },
                { start: 1800, end: 3000, density: 0.20229999999999987 },
                { start: 3000, density: 0.16310000000000033 },
              ],
              percentiles: { p75: 2394 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.951890378075615 },
                { start: 100, end: 300, density: 0.028805761152230446 },
                { start: 300, density: 0.01930386077215445 },
              ],
              percentiles: { p75: 11 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6982905128461458 },
                { start: 2500, end: 4000, density: 0.17604718584424667 },
                { start: 4000, density: 0.12566230130960745 },
              ],
              percentiles: { p75: 2873 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8216999999999999,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.12329999999999998,
                },
                { start: "0.25", density: 0.055000000000000035 },
              ],
              percentiles: { p75: "0.05" },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.au/",
          normalizedUrl: "https://www.yara.com.au",
        },
      },
      extractedResults: {
        fcp: 2394,
        lcp: 2873,
        cls: "0.05",
        fid: 11,
      },
      timestamp: 1654547502900,
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
                { start: 0, end: 200, density: 0.6760647870425919 },
                { start: 200, end: 500, density: 0.2475504899020197 },
                { start: 500, density: 0.07638472305538842 },
              ],
              percentiles: { p75: 234 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.46865313468653086 },
                { start: 800, end: 1800, density: 0.40425957404259527 },
                { start: 1800, density: 0.12708729127087381 },
              ],
              percentiles: { p75: 1315 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7068000000000003 },
                { start: 1800, end: 3000, density: 0.18090000000000006 },
                { start: 3000, density: 0.11229999999999969 },
              ],
              percentiles: { p75: 2004 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9625887766329898 },
                { start: 100, end: 300, density: 0.029208762628788635 },
                { start: 300, density: 0.008202460738221498 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.77012298770123 },
                { start: 2500, end: 4000, density: 0.13828617138286167 },
                { start: 4000, density: 0.09159084091590831 },
              ],
              percentiles: { p75: 2421 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.822182218221822,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.11741174117411741,
                },
                { start: "0.25", density: 0.060406040604060414 },
              ],
              percentiles: { p75: "0.04" },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.in/",
          normalizedUrl: "https://www.yara.in",
        },
      },
      extractedResults: {
        fcp: 2004,
        lcp: 2421,
        cls: "0.04",
        fid: 13,
      },
      timestamp: 1654547503556,
    },
    {
      url: "https://www.yara.de/",
      deviceTargeted: "PHONE",
      results: {
        record: {
          key: { formFactor: "PHONE", origin: "https://www.yara.de" },
          metrics: {
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.463486757521214 },
                { start: 200, end: 500, density: 0.4070455129853435 },
                { start: 500, density: 0.12946772949344254 },
              ],
              percentiles: { p75: 342 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.7034355666710549 },
                { start: 800, end: 1800, density: 0.2282479926286694 },
                { start: 1800, density: 0.06831644070027582 },
              ],
              percentiles: { p75: 881 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8564656307611271 },
                { start: 1800, end: 3000, density: 0.10244930208058993 },
                { start: 3000, density: 0.04108506715828288 },
              ],
              percentiles: { p75: 1382 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9499870767640219 },
                { start: 100, end: 300, density: 0.03230808994572241 },
                { start: 300, density: 0.01770483329025581 },
              ],
              percentiles: { p75: 14 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8826269518435899 },
                { start: 2500, end: 4000, density: 0.08903031098281063 },
                { start: 4000, density: 0.028342737173599544 },
              ],
              percentiles: { p75: 1783 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9595035924232528,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.0248203788373612,
                },
                { start: "0.25", density: 0.015676028739386023 },
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
        fcp: 1382,
        lcp: 1783,
        cls: "0.01",
        fid: 14,
      },
      timestamp: 1654547504347,
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
                { start: 0, end: 1800, density: 0.7324228028503557 },
                { start: 1800, end: 3000, density: 0.18182897862232755 },
                { start: 3000, density: 0.08574821852731675 },
              ],
              percentiles: { p75: 1877 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9102532878714078 },
                { start: 100, end: 300, density: 0.06015586945932781 },
                { start: 300, density: 0.029590842669264417 },
              ],
              percentiles: { p75: 18 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8108476585655006 },
                { start: 2500, end: 4000, density: 0.12560758743331354 },
                { start: 4000, density: 0.06354475400118599 },
              ],
              percentiles: { p75: 2228 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9431335535630014,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.025129778197262857,
                },
                { start: "0.25", density: 0.031736668239735734 },
              ],
              percentiles: { p75: "0.01" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.3782776040413763 },
                { start: 200, end: 500, density: 0.4465961029588649 },
                { start: 500, density: 0.17512629299975885 },
              ],
              percentiles: { p75: 405 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.5397647058823525 },
                { start: 800, end: 1800, density: 0.37670588235294084 },
                { start: 1800, density: 0.08352941176470664 },
              ],
              percentiles: { p75: 1143 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.es/",
          normalizedUrl: "https://www.yara.es",
        },
      },
      extractedResults: {
        fcp: 1877,
        lcp: 2228,
        cls: "0.01",
        fid: 18,
      },
      timestamp: 1654547505717,
    },
    {
      url: "https://www.yara.my/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "https://www.yara.my" },
          metrics: {
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.7900370111033309 },
                { start: 200, end: 500, density: 0.1662498749624887 },
                { start: 500, density: 0.04371311393418039 },
              ],
              percentiles: { p75: 181 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.5093037214885958 },
                { start: 800, end: 1800, density: 0.37314925970388174 },
                { start: 1800, density: 0.11754701880752229 },
              ],
              percentiles: { p75: 1248 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7521495700859828 },
                { start: 1800, end: 3000, density: 0.14097180563887224 },
                { start: 3000, density: 0.1068786242751449 },
              ],
              percentiles: { p75: 1788 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9686000000000001 },
                { start: 100, end: 300, density: 0.022900000000000007 },
                { start: 300, density: 0.008499999999999976 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8006601320264053 },
                { start: 2500, end: 4000, density: 0.1197239447889578 },
                { start: 4000, density: 0.07961592318463682 },
              ],
              percentiles: { p75: 2168 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8089999999999999,
                },
                { start: "0.10", end: "0.25", density: 0.1305 },
                { start: "0.25", density: 0.06050000000000005 },
              ],
              percentiles: { p75: "0.06" },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.my/",
          normalizedUrl: "https://www.yara.my",
        },
      },
      extractedResults: {
        fcp: 1788,
        lcp: 2168,
        cls: "0.06",
        fid: 12,
      },
      timestamp: 1654547506886,
    },
    {
      url: "http://www.yara.com.mm/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "http://www.yara.com.mm" },
          metrics: {
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.28109999999999996 },
                { start: 800, end: 1800, density: 0.48959999999999987 },
                { start: 1800, density: 0.22930000000000014 },
              ],
              percentiles: { p75: 1770 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.04441332399719961 },
                { start: 1800, end: 3000, density: 0.40292087626288303 },
                { start: 3000, density: 0.5526657997399175 },
              ],
              percentiles: { p75: 4883 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.21172882711728847 },
                { start: 2500, end: 4000, density: 0.3853114688531151 },
                { start: 4000, density: 0.4029597040295963 },
              ],
              percentiles: { p75: 5383 },
            },
            cumulative_layout_shift: {
              histogram: [
                { start: "0.00", end: "0.10", density: 0.8614 },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.08530000000000001,
                },
                { start: "0.25", density: 0.0533 },
              ],
              percentiles: { p75: "0.05" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.7916583316663335 },
                { start: 200, end: 500, density: 0.11812362472494504 },
                { start: 500, density: 0.09021804360872149 },
              ],
              percentiles: { p75: 172 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "http://www.yara.com.mm/",
          normalizedUrl: "http://www.yara.com.mm",
        },
      },
      extractedResults: { fcp: 4883, lcp: 5383, cls: "0.05" },
      timestamp: 1654547507734,
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
                  density: 0.8425000000000001,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.10760000000000002,
                },
                { start: "0.25", density: 0.049900000000000014 },
              ],
              percentiles: { p75: "0.04" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.7547754775477548 },
                { start: 200, end: 500, density: 0.20522052205220523 },
                { start: 500, density: 0.04000400040003996 },
              ],
              percentiles: { p75: 202 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.3285985795738722 },
                { start: 800, end: 1800, density: 0.4753426027808344 },
                { start: 1800, density: 0.19605881764529337 },
              ],
              percentiles: { p75: 1637 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6263879163749121 },
                { start: 1800, end: 3000, density: 0.23917175152545747 },
                { start: 3000, density: 0.1344403320996304 },
              ],
              percentiles: { p75: 2329 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9758975897589759 },
                { start: 100, end: 300, density: 0.005400540054005401 },
                { start: 300, density: 0.018701870187018743 },
              ],
              percentiles: { p75: 10 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7101289871012901 },
                { start: 2500, end: 4000, density: 0.18798120187981204 },
                { start: 4000, density: 0.10188981101889791 },
              ],
              percentiles: { p75: 2753 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.co.nz/",
          normalizedUrl: "https://www.yara.co.nz",
        },
      },
      extractedResults: {
        fcp: 2329,
        lcp: 2753,
        cls: "0.04",
        fid: 10,
      },
      timestamp: 1654547508610,
    },
    {
      url: "https://www.yara.vn/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "https://www.yara.vn" },
          metrics: {
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8377162283771625 },
                { start: 1800, end: 3000, density: 0.12528747125287473 },
                { start: 3000, density: 0.03699630036996273 },
              ],
              percentiles: { p75: 1440 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9831983198319831 },
                { start: 100, end: 300, density: 0.012801280128012803 },
                { start: 300, density: 0.004000400040004001 },
              ],
              percentiles: { p75: 10 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8867726454709057 },
                { start: 2500, end: 4000, density: 0.08613277344531095 },
                { start: 4000, density: 0.027094581083783396 },
              ],
              percentiles: { p75: 1834 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8658134186581342,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.09509049095090491,
                },
                { start: "0.25", density: 0.03909609039096088 },
              ],
              percentiles: { p75: "0.04" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.794261721483555 },
                { start: 200, end: 500, density: 0.1786464060781766 },
                { start: 500, density: 0.027091872438268497 },
              ],
              percentiles: { p75: 180 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.6329999999999999 },
                { start: 800, end: 1800, density: 0.32510000000000006 },
                { start: 1800, density: 0.04190000000000003 },
              ],
              percentiles: { p75: 1002 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.vn/",
          normalizedUrl: "https://www.yara.vn",
        },
      },
      extractedResults: {
        fcp: 1440,
        lcp: 1834,
        cls: "0.04",
        fid: 10,
      },
      timestamp: 1654547509506,
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
                  density: 0.8197819781978197,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.14541454145414542,
                },
                { start: "0.25", density: 0.034803480348034835 },
              ],
              percentiles: { p75: "0.04" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6121224244848965 },
                { start: 200, end: 500, density: 0.24974994998999778 },
                { start: 500, density: 0.13812762552510569 },
              ],
              percentiles: { p75: 303 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.45524552455245465 },
                { start: 800, end: 1800, density: 0.40684068406840634 },
                { start: 1800, density: 0.1379137913791388 },
              ],
              percentiles: { p75: 1368 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6565343465653433 },
                { start: 1800, end: 3000, density: 0.21647835216478342 },
                { start: 3000, density: 0.12698730126987337 },
              ],
              percentiles: { p75: 2173 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9173165366926612 },
                { start: 100, end: 300, density: 0.04189162167566486 },
                { start: 300, density: 0.04079184163167386 },
              ],
              percentiles: { p75: 15 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6999600079983994 },
                { start: 2500, end: 4000, density: 0.17066586682663445 },
                { start: 4000, density: 0.1293741251749662 },
              ],
              percentiles: { p75: 2781 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.co.th/",
          normalizedUrl: "https://www.yara.co.th",
        },
      },
      extractedResults: {
        fcp: 2173,
        lcp: 2781,
        cls: "0.04",
        fid: 15,
      },
      timestamp: 1654547510207,
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
                { start: "0.00", end: "0.10", density: 0.9457 },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.040299999999999996,
                },
                { start: "0.25", density: 0.013999999999999997 },
              ],
              percentiles: { p75: "0.02" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.9152169566086783 },
                { start: 200, end: 500, density: 0.07008598280343929 },
                { start: 500, density: 0.014697060587882442 },
              ],
              percentiles: { p75: 98 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.5538000000000002 },
                { start: 800, end: 1800, density: 0.3497 },
                { start: 1800, density: 0.09649999999999989 },
              ],
              percentiles: { p75: 1202 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7542000000000001 },
                { start: 1800, end: 3000, density: 0.17939999999999998 },
                { start: 3000, density: 0.06640000000000003 },
              ],
              percentiles: { p75: 1794 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9834 },
                { start: 100, end: 300, density: 0.011899999999999999 },
                { start: 300, density: 0.0046999999999999984 },
              ],
              percentiles: { p75: 8 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7969093818763751 },
                { start: 2500, end: 4000, density: 0.13637727545509098 },
                { start: 4000, density: 0.06671334266853395 },
              ],
              percentiles: { p75: 2271 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.kr/",
          normalizedUrl: "https://www.yara.kr",
        },
      },
      extractedResults: { fcp: 1794, lcp: 2271, cls: "0.02", fid: 8 },
      timestamp: 1654547510953,
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
                  density: 0.7416741674167419,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.13011301130113012,
                },
                { start: "0.25", density: 0.12821282128212813 },
              ],
              percentiles: { p75: "0.12" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5845 },
                { start: 200, end: 500, density: 0.34850000000000003 },
                { start: 500, density: 0.06699999999999993 },
              ],
              percentiles: { p75: 274 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.43988797759551923 },
                { start: 800, end: 1800, density: 0.3311662332466494 },
                { start: 1800, density: 0.2289457891578314 },
              ],
              percentiles: { p75: 1746 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5295999999999996 },
                { start: 1800, end: 3000, density: 0.20689999999999986 },
                { start: 3000, density: 0.26350000000000057 },
              ],
              percentiles: { p75: 3138 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9219078092190781 },
                { start: 100, end: 300, density: 0.06769323067693232 },
                { start: 300, density: 0.010398960103989604 },
              ],
              percentiles: { p75: 14 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.5887911208879115 },
                { start: 2500, end: 4000, density: 0.1984301569843017 },
                { start: 4000, density: 0.21277872212778678 },
              ],
              percentiles: { p75: 3481 },
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
        lcp: 3481,
        cls: "0.12",
        fid: 14,
      },
      timestamp: 1654547511762,
    },
    {
      url: "https://www.yara.cm/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "https://www.yara.cm" },
          metrics: {
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9219078092190781 },
                { start: 100, end: 300, density: 0.06769323067693232 },
                { start: 300, density: 0.010398960103989604 },
              ],
              percentiles: { p75: 14 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.5887911208879115 },
                { start: 2500, end: 4000, density: 0.1984301569843017 },
                { start: 4000, density: 0.21277872212778678 },
              ],
              percentiles: { p75: 3481 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.7416741674167419,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.13011301130113012,
                },
                { start: "0.25", density: 0.12821282128212813 },
              ],
              percentiles: { p75: "0.12" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5845 },
                { start: 200, end: 500, density: 0.34850000000000003 },
                { start: 500, density: 0.06699999999999993 },
              ],
              percentiles: { p75: 274 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.43988797759551923 },
                { start: 800, end: 1800, density: 0.3311662332466494 },
                { start: 1800, density: 0.2289457891578314 },
              ],
              percentiles: { p75: 1746 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5295999999999996 },
                { start: 1800, end: 3000, density: 0.20689999999999986 },
                { start: 3000, density: 0.26350000000000057 },
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
        lcp: 3481,
        cls: "0.12",
        fid: 14,
      },
      timestamp: 1654547512572,
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
                { start: 0, end: 100, density: 0.9530093981203759 },
                { start: 100, end: 300, density: 0.034893021395720855 },
                { start: 300, density: 0.012097580483903235 },
              ],
              percentiles: { p75: 11 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.5619 },
                { start: 2500, end: 4000, density: 0.21169999999999997 },
                { start: 4000, density: 0.22640000000000002 },
              ],
              percentiles: { p75: 3960 },
            },
            cumulative_layout_shift: {
              histogram: [
                { start: "0.00", end: "0.10", density: 0.8914 },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.07919999999999999,
                },
                { start: "0.25", density: 0.029400000000000003 },
              ],
              percentiles: { p75: "0.01" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6250374962503749 },
                { start: 200, end: 500, density: 0.2801719828017198 },
                { start: 500, density: 0.09479052094790529 },
              ],
              percentiles: { p75: 282 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.4327134573085385 },
                { start: 800, end: 1800, density: 0.3481303739252152 },
                { start: 1800, density: 0.21915616876624633 },
              ],
              percentiles: { p75: 1784 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5041999999999978 },
                { start: 1800, end: 3000, density: 0.23609999999999892 },
                { start: 3000, density: 0.2597000000000034 },
              ],
              percentiles: { p75: 3316 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.ci/",
          normalizedUrl: "https://www.yara.ci",
        },
      },
      extractedResults: {
        fcp: 3316,
        lcp: 3960,
        cls: "0.01",
        fid: 11,
      },
      timestamp: 1654547513590,
    },
    {
      url: "https://www.yara.com.gh/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "https://www.yara.com.gh" },
          metrics: {
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6296870312968694 },
                { start: 2500, end: 4000, density: 0.1896310368963101 },
                { start: 4000, density: 0.1806819318068204 },
              ],
              percentiles: { p75: 3333 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9143085691430857,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.0562943705629437,
                },
                { start: "0.25", density: 0.029397060293970618 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6295999999999998 },
                { start: 200, end: 500, density: 0.2568999999999999 },
                { start: 500, density: 0.11350000000000034 },
              ],
              percentiles: { p75: 246 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.48290000000000044 },
                { start: 800, end: 1800, density: 0.28840000000000027 },
                { start: 1800, density: 0.2286999999999994 },
              ],
              percentiles: { p75: 1723 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6057000000000009 },
                { start: 1800, end: 3000, density: 0.1411000000000002 },
                { start: 3000, density: 0.25319999999999887 },
              ],
              percentiles: { p75: 2892 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9461107778444312 },
                { start: 100, end: 300, density: 0.035492901419716054 },
                { start: 300, density: 0.018396320735852782 },
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
        fcp: 2892,
        lcp: 3333,
        cls: "0.00",
        fid: 12,
      },
      timestamp: 1654547514298,
    },
    {
      url: "https://www.yara.co.ke/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "https://www.yara.co.ke" },
          metrics: {
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6193619361936198 },
                { start: 200, end: 500, density: 0.27902790279027934 },
                { start: 500, density: 0.10161016101610083 },
              ],
              percentiles: { p75: 272 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.28357164283571795 },
                { start: 800, end: 1800, density: 0.4565543445655459 },
                { start: 1800, density: 0.259874012598736 },
              ],
              percentiles: { p75: 1876 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.5258 },
                { start: 1800, end: 3000, density: 0.2528000000000001 },
                { start: 3000, density: 0.22140000000000007 },
              ],
              percentiles: { p75: 2872 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9482 },
                { start: 100, end: 300, density: 0.037 },
                { start: 300, density: 0.014800000000000028 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.5800839832033609 },
                { start: 2500, end: 4000, density: 0.24045190961807686 },
                { start: 4000, density: 0.17946410717856234 },
              ],
              percentiles: { p75: 3473 },
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
                  density: 0.12099999999999997,
                },
                { start: "0.25", density: 0.059200000000000044 },
              ],
              percentiles: { p75: "0.04" },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.co.ke/",
          normalizedUrl: "https://www.yara.co.ke",
        },
      },
      extractedResults: {
        fcp: 2872,
        lcp: 3473,
        cls: "0.04",
        fid: 12,
      },
      timestamp: 1654547515101,
    },
    {
      url: "https://www.yara.co.za/",
      deviceTargeted: "ALL",
      results: {
        record: {
          key: { origin: "https://www.yara.co.za" },
          metrics: {
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.7005401080216044 },
                { start: 200, end: 500, density: 0.25025005001000195 },
                { start: 500, density: 0.04920984196839369 },
              ],
              percentiles: { p75: 221 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.4777477747774778 },
                { start: 800, end: 1800, density: 0.4084408440844084 },
                { start: 1800, density: 0.11381138113811379 },
              ],
              percentiles: { p75: 1330 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7087708770877079 },
                { start: 1800, end: 3000, density: 0.17751775177517728 },
                { start: 3000, density: 0.11371137113711477 },
              ],
              percentiles: { p75: 2021 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9814037192561489 },
                { start: 100, end: 300, density: 0.014597080583883227 },
                { start: 300, density: 0.003999200159968008 },
              ],
              percentiles: { p75: 11 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7311806458062575 },
                { start: 2500, end: 4000, density: 0.1568529441167648 },
                { start: 4000, density: 0.11196641007697754 },
              ],
              percentiles: { p75: 2648 },
            },
            cumulative_layout_shift: {
              histogram: [
                { start: "0.00", end: "0.10", density: 0.8553 },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.09379999999999998,
                },
                { start: "0.25", density: 0.05090000000000001 },
              ],
              percentiles: { p75: "0.04" },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.co.za/",
          normalizedUrl: "https://www.yara.co.za",
        },
      },
      extractedResults: {
        fcp: 2021,
        lcp: 2648,
        cls: "0.04",
        fid: 11,
      },
      timestamp: 1654547515910,
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
                  density: 0.9141104294478527,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.07361963190184048,
                },
                { start: "0.25", density: 0.012269938650306756 },
              ],
              percentiles: { p75: "0.04" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.34876543209876587 },
                { start: 200, end: 500, density: 0.459876543209877 },
                { start: 500, density: 0.19135802469135713 },
              ],
              percentiles: { p75: 413 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.6521739130434783 },
                { start: 800, end: 1800, density: 0.2919254658385093 },
                { start: 1800, density: 0.05590062111801249 },
              ],
              percentiles: { p75: 977 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.766666666666667 },
                { start: 1800, end: 3000, density: 0.16666666666666677 },
                { start: 3000, density: 0.06666666666666621 },
              ],
              percentiles: { p75: 1813 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.8926380368098162 },
                { start: 100, end: 300, density: 0.06134969325153376 },
                { start: 300, density: 0.04601226993864998 },
              ],
              percentiles: { p75: 18 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.73968253968254 },
                { start: 2500, end: 4000, density: 0.18730158730158736 },
                { start: 4000, density: 0.07301587301587255 },
              ],
              percentiles: { p75: 2592 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.fr/",
          normalizedUrl: "https://www.yara.fr",
        },
      },
      extractedResults: {
        fcp: 1813,
        lcp: 2592,
        cls: "0.04",
        fid: 18,
      },
      timestamp: 1654547679872,
    },
    {
      url: "https://www.yara.gr/",
      deviceTargeted: "TABLET",
      results: {
        record: {
          key: { formFactor: "TABLET", origin: "https://www.yara.gr" },
          metrics: {
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8154158215010143 },
                { start: 1800, end: 3000, density: 0.13184584178498984 },
                { start: 3000, density: 0.05273833671399583 },
              ],
              percentiles: { p75: 1647 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9214437367303611 },
                { start: 100, end: 300, density: 0.03184713375796179 },
                { start: 300, density: 0.046709129511677085 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7979591836734697 },
                { start: 2500, end: 4000, density: 0.13673469387755108 },
                { start: 4000, density: 0.06530612244897928 },
              ],
              percentiles: { p75: 2241 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8949494949494948,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.07878787878787877,
                },
                { start: "0.25", density: 0.02626262626262627 },
              ],
              percentiles: { p75: "0.01" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.3807439824945293 },
                { start: 200, end: 500, density: 0.4091903719912471 },
                { start: 500, density: 0.21006564551422371 },
              ],
              percentiles: { p75: 389 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.6538461538461539 },
                { start: 800, end: 1800, density: 0.31837606837606836 },
                { start: 1800, density: 0.027777777777777842 },
              ],
              percentiles: { p75: 928 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.gr/",
          normalizedUrl: "https://www.yara.gr",
        },
      },
      extractedResults: {
        fcp: 1647,
        lcp: 2241,
        cls: "0.01",
        fid: 13,
      },
      timestamp: 1654547681212,
    },
    {
      url: "https://www.yara.hr/",
      deviceTargeted: "TABLET",
      results: {
        record: {
          key: { formFactor: "TABLET", origin: "https://www.yara.hr" },
          metrics: {
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.4970059880239518 },
                { start: 1800, end: 3000, density: 0.3443113772455089 },
                { start: 3000, density: 0.15868263473053934 },
              ],
              percentiles: { p75: 2557 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.8976109215017064 },
                { start: 100, end: 300, density: 0.07167235494880546 },
                { start: 300, density: 0.03071672354948808 },
              ],
              percentiles: { p75: 16 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.5743034055727556 },
                { start: 2500, end: 4000, density: 0.2647058823529413 },
                { start: 4000, density: 0.16099071207430304 },
              ],
              percentiles: { p75: 3419 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9878787878787879,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.009090909090909094,
                },
                { start: "0.25", density: 0.0030303030303030307 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.4785478547854789 },
                { start: 200, end: 500, density: 0.3795379537953798 },
                { start: 500, density: 0.1419141914191413 },
              ],
              percentiles: { p75: 365 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.4191616766467066 },
                { start: 800, end: 1800, density: 0.3233532934131737 },
                { start: 1800, density: 0.2574850299401197 },
              ],
              percentiles: { p75: 1795 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.hr/",
          normalizedUrl: "https://www.yara.hr",
        },
      },
      extractedResults: {
        fcp: 2557,
        lcp: 3419,
        cls: "0.00",
        fid: 16,
      },
      timestamp: 1654547682168,
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
                  density: 0.9261862917398945,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.05975395430579965,
                },
                { start: "0.25", density: 0.014059753954305813 },
              ],
              percentiles: { p75: "0.03" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.2758620689655168 },
                { start: 200, end: 500, density: 0.5344827586206888 },
                { start: 500, density: 0.1896551724137944 },
              ],
              percentiles: { p75: 431 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.6073394495412845 },
                { start: 800, end: 1800, density: 0.35412844036697255 },
                { start: 1800, density: 0.03853211009174313 },
              ],
              percentiles: { p75: 1000 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8505338078291815 },
                { start: 1800, end: 3000, density: 0.11209964412811387 },
                { start: 3000, density: 0.03736654804270449 },
              ],
              percentiles: { p75: 1545 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9507042253521126 },
                { start: 100, end: 300, density: 0.0352112676056338 },
                { start: 300, density: 0.014084507042253547 },
              ],
              percentiles: { p75: 15 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7998236331569666 },
                { start: 2500, end: 4000, density: 0.13844797178130516 },
                { start: 4000, density: 0.06172839506172829 },
              ],
              percentiles: { p75: 2268 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.fi/",
          normalizedUrl: "https://www.yara.fi",
        },
      },
      extractedResults: {
        fcp: 1545,
        lcp: 2268,
        cls: "0.03",
        fid: 15,
      },
      timestamp: 1654547682956,
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
                  density: 0.9381107491856676,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.05537459283387622,
                },
                { start: "0.25", density: 0.006514657980456026 },
              ],
              percentiles: { p75: "0.03" },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.8466666666666667 },
                { start: 800, end: 1800, density: 0.11333333333333331 },
                { start: 1800, density: 0.04000000000000003 },
              ],
              percentiles: { p75: 702 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8729641693811074 },
                { start: 1800, end: 3000, density: 0.10749185667752445 },
                { start: 3000, density: 0.019543973941368083 },
              ],
              percentiles: { p75: 1252 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8333333333333333 },
                { start: 2500, end: 4000, density: 0.12820512820512817 },
                { start: 4000, density: 0.03846153846153861 },
              ],
              percentiles: { p75: 2197 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.no/",
          normalizedUrl: "https://www.yara.no",
        },
      },
      extractedResults: { fcp: 1252, lcp: 2197, cls: "0.03" },
      timestamp: 1654547684011,
    },
    {
      url: "https://www.yara.hu/",
      deviceTargeted: "TABLET",
      results: {
        record: {
          key: { formFactor: "TABLET", origin: "https://www.yara.hu" },
          metrics: {
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.5751072961373389 },
                { start: 800, end: 1800, density: 0.39055793991416315 },
                { start: 1800, density: 0.034334763948497875 },
              ],
              percentiles: { p75: 1002 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8197424892703862 },
                { start: 1800, end: 3000, density: 0.1459227467811159 },
                { start: 3000, density: 0.034334763948497875 },
              ],
              percentiles: { p75: 1544 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9592760180995475 },
                { start: 100, end: 300, density: 0.03167420814479637 },
                { start: 300, density: 0.009049773755656108 },
              ],
              percentiles: { p75: 15 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7552742616033755 },
                { start: 2500, end: 4000, density: 0.19831223628691974 },
                { start: 4000, density: 0.04641350210970467 },
              ],
              percentiles: { p75: 2541 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9411764705882352,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.054621848739495785,
                },
                { start: "0.25", density: 0.004201680672268907 },
              ],
              percentiles: { p75: "0.01" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.4936708860759494 },
                { start: 200, end: 500, density: 0.42616033755274274 },
                { start: 500, density: 0.08016877637130787 },
              ],
              percentiles: { p75: 302 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.hu/",
          normalizedUrl: "https://www.yara.hu",
        },
      },
      extractedResults: {
        fcp: 1544,
        lcp: 2541,
        cls: "0.01",
        fid: 15,
      },
      timestamp: 1654547685316,
    },
    {
      url: "https://www.yara.nl/",
      deviceTargeted: "TABLET",
      results: {
        record: {
          key: { formFactor: "TABLET", origin: "https://www.yara.nl" },
          metrics: {
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.5840978593272171 },
                { start: 800, end: 1800, density: 0.3608562691131499 },
                { start: 1800, density: 0.05504587155963301 },
              ],
              percentiles: { p75: 952 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7964601769911503 },
                { start: 1800, end: 3000, density: 0.16814159292035397 },
                { start: 3000, density: 0.03539823008849557 },
              ],
              percentiles: { p75: 1485 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8210059171597632 },
                { start: 2500, end: 4000, density: 0.15236686390532542 },
                { start: 4000, density: 0.02662721893491124 },
              ],
              percentiles: { p75: 2300 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9650145772594753,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.03498542274052478,
                },
                { start: "0.25" },
              ],
              percentiles: { p75: "0.03" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.4119318181818181 },
                { start: 200, end: 500, density: 0.497159090909091 },
                { start: 500, density: 0.09090909090909094 },
              ],
              percentiles: { p75: 323 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.nl/",
          normalizedUrl: "https://www.yara.nl",
        },
      },
      extractedResults: { fcp: 1485, lcp: 2300, cls: "0.03" },
      timestamp: 1654547686442,
    },
    {
      url: "https://www.yara.de/",
      deviceTargeted: "TABLET",
      results: {
        record: {
          key: { formFactor: "TABLET", origin: "https://www.yara.de" },
          metrics: {
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8082901554404146 },
                { start: 1800, end: 3000, density: 0.150259067357513 },
                { start: 3000, density: 0.041450777202072374 },
              ],
              percentiles: { p75: 1670 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9637462235649548 },
                { start: 100, end: 300, density: 0.01208459214501511 },
                { start: 300, density: 0.024169184290030236 },
              ],
              percentiles: { p75: 12 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7667525773195878 },
                { start: 2500, end: 4000, density: 0.19201030927835055 },
                { start: 4000, density: 0.04123711340206168 },
              ],
              percentiles: { p75: 2450 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9282178217821783,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.06930693069306931,
                },
                { start: "0.25", density: 0.0024752475247524753 },
              ],
              percentiles: { p75: "0.06" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.4285714285714292 },
                { start: 200, end: 500, density: 0.4201680672268913 },
                { start: 500, density: 0.15126050420167955 },
              ],
              percentiles: { p75: 335 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.5600961538461539 },
                { start: 800, end: 1800, density: 0.37740384615384615 },
                { start: 1800, density: 0.06250000000000003 },
              ],
              percentiles: { p75: 1098 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.de/",
          normalizedUrl: "https://www.yara.de",
        },
      },
      extractedResults: {
        fcp: 1670,
        lcp: 2450,
        cls: "0.06",
        fid: 12,
      },
      timestamp: 1654547687450,
    },
    {
      url: "https://www.yara.co.uk/",
      deviceTargeted: "TABLET",
      results: {
        record: {
          key: { formFactor: "TABLET", origin: "https://www.yara.co.uk" },
          metrics: {
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.36410256410256475 },
                { start: 200, end: 500, density: 0.3179487179487184 },
                { start: 500, density: 0.31794871794871693 },
              ],
              percentiles: { p75: 685 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.32673267326732675 },
                { start: 800, end: 1800, density: 0.38613861386138615 },
                { start: 1800, density: 0.2871287128712872 },
              ],
              percentiles: { p75: 1924 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.4670050761421321 },
                { start: 1800, end: 3000, density: 0.4060913705583757 },
                { start: 3000, density: 0.12690355329949204 },
              ],
              percentiles: { p75: 2702 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.7941176470588236 },
                { start: 100, end: 300, density: 0.1127450980392157 },
                { start: 300, density: 0.09313725490196076 },
              ],
              percentiles: { p75: 51 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.5241935483870969 },
                { start: 2500, end: 4000, density: 0.31451612903225806 },
                { start: 4000, density: 0.16129032258064507 },
              ],
              percentiles: { p75: 3528 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8969072164948453,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.06701030927835051,
                },
                { start: "0.25", density: 0.03608247422680414 },
              ],
              percentiles: { p75: "0.05" },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.co.uk/",
          normalizedUrl: "https://www.yara.co.uk",
        },
      },
      extractedResults: {
        fcp: 2702,
        lcp: 3528,
        cls: "0.05",
        fid: 51,
      },
      timestamp: 1654547688158,
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
                  density: 0.9030303030303032,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.07272727272727274,
                },
                { start: "0.25", density: 0.024242424242424246 },
              ],
              percentiles: { p75: "0.03" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.3893557422969188 },
                { start: 200, end: 500, density: 0.3781512605042018 },
                { start: 500, density: 0.23249299719887945 },
              ],
              percentiles: { p75: 459 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.6775147928994082 },
                { start: 800, end: 1800, density: 0.29881656804733736 },
                { start: 1800, density: 0.023668639053254524 },
              ],
              percentiles: { p75: 982 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8343750000000001 },
                { start: 1800, end: 3000, density: 0.14687499999999998 },
                { start: 3000, density: 0.01874999999999999 },
              ],
              percentiles: { p75: 1524 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.892655367231639 },
                { start: 100, end: 300, density: 0.036723163841807946 },
                { start: 300, density: 0.07062146892655322 },
              ],
              percentiles: { p75: 15 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8053097345132741 },
                { start: 2500, end: 4000, density: 0.15634218289085552 },
                { start: 4000, density: 0.03834808259587028 },
              ],
              percentiles: { p75: 2323 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.se/",
          normalizedUrl: "https://www.yara.se",
        },
      },
      extractedResults: {
        fcp: 1524,
        lcp: 2323,
        cls: "0.03",
        fid: 15,
      },
      timestamp: 1654547688831,
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
                  density: 0.9763779527559056,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.02362204724409449,
                },
                { start: "0.25" },
              ],
              percentiles: { p75: "0.03" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.5873015873015877 },
                { start: 200, end: 500, density: 0.30952380952380976 },
                { start: 500, density: 0.10317460317460266 },
              ],
              percentiles: { p75: 309 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.7622377622377622 },
                { start: 800, end: 1800, density: 0.1958041958041958 },
                { start: 1800, density: 0.04195804195804196 },
              ],
              percentiles: { p75: 823 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8110236220472442 },
                { start: 1800, end: 3000, density: 0.14960629921259838 },
                { start: 3000, density: 0.03937007874015747 },
              ],
              percentiles: { p75: 1562 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8201438848920862 },
                { start: 2500, end: 4000, density: 0.10791366906474816 },
                { start: 4000, density: 0.07194244604316566 },
              ],
              percentiles: { p75: 2153 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.ua/",
          normalizedUrl: "https://www.yara.ua",
        },
      },
      extractedResults: { fcp: 1562, lcp: 2153, cls: "0.03" },
      timestamp: 1654547689458,
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
                  density: 0.9051724137931034,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.08620689655172414,
                },
                { start: "0.25", density: 0.008620689655172414 },
              ],
              percentiles: { p75: "0.04" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.6910569105691057 },
                { start: 200, end: 500, density: 0.22764227642276422 },
                { start: 500, density: 0.08130081300813016 },
              ],
              percentiles: { p75: 225 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.7522935779816512 },
                { start: 800, end: 1800, density: 0.1834862385321101 },
                { start: 1800, density: 0.06422018348623858 },
              ],
              percentiles: { p75: 1194 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7981651376146789 },
                { start: 1800, end: 3000, density: 0.12844036697247707 },
                { start: 3000, density: 0.07339449541284405 },
              ],
              percentiles: { p75: 2217 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9747899159663865 },
                { start: 100, end: 300, density: 0.025210084033613443 },
                { start: 300 },
              ],
              percentiles: { p75: 15 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7478260869565219 },
                { start: 2500, end: 4000, density: 0.16521739130434773 },
                { start: 4000, density: 0.08695652173913045 },
              ],
              percentiles: { p75: 3021 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com/",
          normalizedUrl: "https://www.yara.com",
        },
      },
      extractedResults: {
        fcp: 2217,
        lcp: 3021,
        cls: "0.04",
        fid: 15,
      },
      timestamp: 1654547690314,
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
                  density: 0.8147977941176471,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.15762867647058823,
                },
                { start: "0.25", density: 0.02757352941176472 },
              ],
              percentiles: { p75: "0.07" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.9334609861177596 },
                { start: 200, end: 500, density: 0.037338439444710374 },
                { start: 500, density: 0.029200574437529898 },
              ],
              percentiles: { p75: 87 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.9340659340659342 },
                { start: 800, end: 1800, density: 0.054945054945054944 },
                { start: 1800, density: 0.010989010989010992 },
              ],
              percentiles: { p75: 519 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.9637907912382655 },
                { start: 1800, end: 3000, density: 0.018775145283862312 },
                { start: 3000, density: 0.017434063477872134 },
              ],
              percentiles: { p75: 863 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9947299077733861 },
                { start: 100, end: 300, density: 0.003513394817742644 },
                { start: 300, density: 0.0017566974088713235 },
              ],
              percentiles: { p75: 2 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.9398395721925135 },
                { start: 2500, end: 4000, density: 0.040552584670231706 },
                { start: 4000, density: 0.01960784313725488 },
              ],
              percentiles: { p75: 1418 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yaraagri.cz/",
          normalizedUrl: "https://www.yaraagri.cz",
        },
      },
      extractedResults: { fcp: 863, lcp: 1418, cls: "0.07", fid: 2 },
      timestamp: 1654547691044,
    },
    {
      url: "https://www.yara.es/",
      deviceTargeted: "TABLET",
      results: {
        record: {
          key: { formFactor: "TABLET", origin: "https://www.yara.es" },
          metrics: {
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.5152838427947599 },
                { start: 800, end: 1800, density: 0.37117903930131024 },
                { start: 1800, density: 0.11353711790392985 },
              ],
              percentiles: { p75: 1112 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7361702127659573 },
                { start: 1800, end: 3000, density: 0.14893617021276592 },
                { start: 3000, density: 0.11489361702127684 },
              ],
              percentiles: { p75: 1831 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.8803418803418803 },
                { start: 100, end: 300, density: 0.0811965811965812 },
                { start: 300, density: 0.03846153846153847 },
              ],
              percentiles: { p75: 21 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6079295154185017 },
                { start: 2500, end: 4000, density: 0.23348017621145345 },
                { start: 4000, density: 0.15859030837004479 },
              ],
              percentiles: { p75: 3052 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.891304347826087,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.09130434782608697,
                },
                { start: "0.25", density: 0.01739130434782608 },
              ],
              percentiles: { p75: "0.04" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.3577235772357731 },
                { start: 200, end: 500, density: 0.38617886178861865 },
                { start: 500, density: 0.25609756097560826 },
              ],
              percentiles: { p75: 491 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.es/",
          normalizedUrl: "https://www.yara.es",
        },
      },
      extractedResults: {
        fcp: 1831,
        lcp: 3052,
        cls: "0.04",
        fid: 21,
      },
      timestamp: 1654547693109,
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
                  density: 0.608004240657302,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.3029419560031806,
                },
                { start: "0.25", density: 0.08905380333951754 },
              ],
              percentiles: { p75: "0.13" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.9114202049780382 },
                { start: 200, end: 500, density: 0.061493411420204966 },
                { start: 500, density: 0.02708638360175692 },
              ],
              percentiles: { p75: 101 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.5914477073673365 },
                { start: 800, end: 1800, density: 0.3420917053065431 },
                { start: 1800, density: 0.06646058732612038 },
              ],
              percentiles: { p75: 1089 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7798047276464545 },
                { start: 1800, end: 3000, density: 0.1490236382322714 },
                { start: 3000, density: 0.07117163412127411 },
              ],
              percentiles: { p75: 1784 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9916147580258745 },
                { start: 100, end: 300, density: 0.00838524197412554 },
                { start: 300 },
              ],
              percentiles: { p75: 3 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7473286421683606 },
                { start: 2500, end: 4000, density: 0.14425332290852222 },
                { start: 4000, density: 0.10841803492311727 },
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
      extractedResults: { fcp: 1784, lcp: 2741, cls: "0.13", fid: 3 },
      timestamp: 1654547695785,
    },
    {
      url: "https://www.yara.dk/",
      deviceTargeted: "DESKTOP",
      results: {
        record: {
          key: { formFactor: "DESKTOP", origin: "https://www.yara.dk" },
          metrics: {
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.6944199964794929,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.2779440239394473,
                },
                { start: "0.25", density: 0.027635979581059678 },
              ],
              percentiles: { p75: "0.10" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.9671800513384673 },
                { start: 200, end: 500, density: 0.025669233590025663 },
                { start: 500, density: 0.0071507150715071546 },
              ],
              percentiles: { p75: 74 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.8053515215110179 },
                { start: 800, end: 1800, density: 0.16439314445610356 },
                { start: 1800, density: 0.03025533403287864 },
              ],
              percentiles: { p75: 730 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.9360967184801382 },
                { start: 1800, end: 3000, density: 0.051295336787564774 },
                { start: 3000, density: 0.012607944732297077 },
              ],
              percentiles: { p75: 1026 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9986396871280394 },
                { start: 100, end: 300, density: 0.0013603128719605509 },
                { start: 300 },
              ],
              percentiles: { p75: 2 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.9329488724393183 },
                { start: 2500, end: 4000, density: 0.049492167326562204 },
                { start: 4000, density: 0.017558960234119462 },
              ],
              percentiles: { p75: 1530 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.dk/",
          normalizedUrl: "https://www.yara.dk",
        },
      },
      extractedResults: { fcp: 1026, lcp: 1530, cls: "0.10", fid: 2 },
      timestamp: 1654547699543,
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
                  density: 0.48325605358062845,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.33590932509015975,
                },
                { start: "0.25", density: 0.18083462132921194 },
              ],
              percentiles: { p75: "0.20" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.9678800856531049 },
                { start: 200, end: 500, density: 0.025695931477516074 },
                { start: 500, density: 0.006423982869379024 },
              ],
              percentiles: { p75: 78 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.7957957957957958 },
                { start: 800, end: 1800, density: 0.16666666666666666 },
                { start: 1800, density: 0.03753753753753749 },
              ],
              percentiles: { p75: 723 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.9218905472636814 },
                { start: 1800, end: 3000, density: 0.05771144278606966 },
                { start: 3000, density: 0.020398009950248874 },
              ],
              percentiles: { p75: 1049 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9979296066252588 },
                { start: 100, end: 300, density: 0.002070393374741201 },
                { start: 300 },
              ],
              percentiles: { p75: 2 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.9194765978862606 },
                { start: 2500, end: 4000, density: 0.055863110216406636 },
                { start: 4000, density: 0.024660291897332796 },
              ],
              percentiles: { p75: 1615 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.de/",
          normalizedUrl: "https://www.yara.de",
        },
      },
      extractedResults: { fcp: 1049, lcp: 1615, cls: "0.20", fid: 2 },
      timestamp: 1654547700627,
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
                { start: 0, end: 100, density: 0.9545454545454546 },
                { start: 100, end: 300, density: 0.030303030303030307 },
                { start: 300, density: 0.015151515151515154 },
              ],
              percentiles: { p75: 13 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8167938931297709 },
                { start: 2500, end: 4000, density: 0.1526717557251908 },
                { start: 4000, density: 0.030534351145038167 },
              ],
              percentiles: { p75: 2252 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9747899159663864,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.01680672268907563,
                },
                { start: "0.25", density: 0.008403361344537815 },
              ],
              percentiles: { p75: "0.00" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.3941605839416061 },
                { start: 200, end: 500, density: 0.518248175182482 },
                { start: 500, density: 0.0875912408759119 },
              ],
              percentiles: { p75: 319 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.8400000000000001 },
                { start: 800, end: 1800, density: 0.14400000000000002 },
                { start: 1800, density: 0.016000000000000004 },
              ],
              percentiles: { p75: 710 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.88 },
                { start: 1800, end: 3000, density: 0.08800000000000001 },
                { start: 3000, density: 0.032 },
              ],
              percentiles: { p75: 1458 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.it/",
          normalizedUrl: "https://www.yara.it",
        },
      },
      extractedResults: {
        fcp: 1458,
        lcp: 2252,
        cls: "0.00",
        fid: 13,
      },
      timestamp: 1654547701391,
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
                { start: 0, end: 100, density: 0.9916147580258745 },
                { start: 100, end: 300, density: 0.00838524197412554 },
                { start: 300 },
              ],
              percentiles: { p75: 3 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7473286421683606 },
                { start: 2500, end: 4000, density: 0.14425332290852222 },
                { start: 4000, density: 0.10841803492311727 },
              ],
              percentiles: { p75: 2741 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.608004240657302,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.3029419560031806,
                },
                { start: "0.25", density: 0.08905380333951754 },
              ],
              percentiles: { p75: "0.13" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.9114202049780382 },
                { start: 200, end: 500, density: 0.061493411420204966 },
                { start: 500, density: 0.02708638360175692 },
              ],
              percentiles: { p75: 101 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.5914477073673365 },
                { start: 800, end: 1800, density: 0.3420917053065431 },
                { start: 1800, density: 0.06646058732612038 },
              ],
              percentiles: { p75: 1089 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7798047276464545 },
                { start: 1800, end: 3000, density: 0.1490236382322714 },
                { start: 3000, density: 0.07117163412127411 },
              ],
              percentiles: { p75: 1784 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yaracanada.ca/fr-ca/",
          normalizedUrl: "https://www.yaracanada.ca",
        },
      },
      extractedResults: { fcp: 1784, lcp: 2741, cls: "0.13", fid: 3 },
      timestamp: 1654547701945,
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
                  density: 0.9338053097345134,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.04920353982300885,
                },
                { start: "0.25", density: 0.016991150442477884 },
              ],
              percentiles: { p75: "0.07" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.9182412790697673 },
                { start: 200, end: 500, density: 0.05668604651162792 },
                { start: 500, density: 0.02507267441860469 },
              ],
              percentiles: { p75: 74 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.8333877817706631 },
                { start: 800, end: 1800, density: 0.16171185886965048 },
                { start: 1800, density: 0.004900359359686377 },
              ],
              percentiles: { p75: 706 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.9481334654773702 },
                { start: 1800, end: 3000, density: 0.04063429137760159 },
                { start: 3000, density: 0.011232243145028074 },
              ],
              percentiles: { p75: 1082 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9776951672862454 },
                { start: 100, end: 300, density: 0.011490368367691788 },
                { start: 300, density: 0.010814464346062858 },
              ],
              percentiles: { p75: 4 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.9300840336134455 },
                { start: 2500, end: 4000, density: 0.06252100840336135 },
                { start: 4000, density: 0.007394957983193272 },
              ],
              percentiles: { p75: 1543 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.ee/",
          normalizedUrl: "https://www.yara.ee",
        },
      },
      extractedResults: { fcp: 1082, lcp: 1543, cls: "0.07", fid: 4 },
      timestamp: 1654547702556,
    },
    {
      url: "https://www.yara.es/",
      deviceTargeted: "DESKTOP",
      results: {
        record: {
          key: { formFactor: "DESKTOP", origin: "https://www.yara.es" },
          metrics: {
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9896707553260168 },
                { start: 100, end: 300, density: 0.007101355713363458 },
                { start: 300, density: 0.003227888960619755 },
              ],
              percentiles: { p75: 2 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8121279761904764 },
                { start: 2500, end: 4000, density: 0.11421130952380956 },
                { start: 4000, density: 0.07366071428571394 },
              ],
              percentiles: { p75: 2200 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.5266409266409265,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.33436293436293435,
                },
                { start: "0.25", density: 0.13899613899613908 },
              ],
              percentiles: { p75: "0.17" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.9153952843273233 },
                { start: 200, end: 500, density: 0.056171983356449406 },
                { start: 500, density: 0.028432732316227283 },
              ],
              percentiles: { p75: 96 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.7149569303054033 },
                { start: 800, end: 1800, density: 0.23492560689115105 },
                { start: 1800, density: 0.05011746280344573 },
              ],
              percentiles: { p75: 877 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8339538346984362 },
                { start: 1800, end: 3000, density: 0.11020104244229333 },
                { start: 3000, density: 0.05584512285927053 },
              ],
              percentiles: { p75: 1445 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.es/",
          normalizedUrl: "https://www.yara.es",
        },
      },
      extractedResults: { fcp: 1445, lcp: 2200, cls: "0.17", fid: 2 },
      timestamp: 1654547703330,
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
                  density: 0.5904373610081541,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.24944403261675313,
                },
                { start: "0.25", density: 0.16011860637509273 },
              ],
              percentiles: { p75: "0.16" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.9108367626886144 },
                { start: 200, end: 500, density: 0.03635116598079561 },
                { start: 500, density: 0.052812071330590016 },
              ],
              percentiles: { p75: 82 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.36677454153182315 },
                { start: 800, end: 1800, density: 0.5199568500539373 },
                { start: 1800, density: 0.11326860841423947 },
              ],
              percentiles: { p75: 1396 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.666186532229024 },
                { start: 1800, end: 3000, density: 0.2430680590565358 },
                { start: 3000, density: 0.09074540871444019 },
              ],
              percentiles: { p75: 2156 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9954574951330305 },
                { start: 100, end: 300 },
                { start: 300, density: 0.004542504866969502 },
              ],
              percentiles: { p75: 2 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6872254758418745 },
                { start: 2500, end: 4000, density: 0.15794289897510994 },
                { start: 4000, density: 0.1548316251830157 },
              ],
              percentiles: { p75: 2987 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.cl/",
          normalizedUrl: "https://www.yara.cl",
        },
      },
      extractedResults: { fcp: 2156, lcp: 2987, cls: "0.16", fid: 2 },
      timestamp: 1654547703993,
    },
    {
      url: "https://www.yara.fr/",
      deviceTargeted: "DESKTOP",
      results: {
        record: {
          key: { formFactor: "DESKTOP", origin: "https://www.yara.fr" },
          metrics: {
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.7405731523378585 },
                { start: 800, end: 1800, density: 0.2141779788838613 },
                { start: 1800, density: 0.04524886877828024 },
              ],
              percentiles: { p75: 832 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8558692421991089 },
                { start: 1800, end: 3000, density: 0.09361069836552749 },
                { start: 3000, density: 0.050520059435363605 },
              ],
              percentiles: { p75: 1416 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9760742187500001 },
                { start: 100, end: 300, density: 0.009765625000000002 },
                { start: 300, density: 0.014160156249999905 },
              ],
              percentiles: { p75: 2 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.833747514910537 },
                { start: 2500, end: 4000, density: 0.10064612326043738 },
                { start: 4000, density: 0.06560636182902556 },
              ],
              percentiles: { p75: 2060 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.49257552483358946,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.3614951356886841,
                },
                { start: "0.25", density: 0.1459293394777265 },
              ],
              percentiles: { p75: "0.17" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.8874548270521421 },
                { start: 200, end: 500, density: 0.06143520908621575 },
                { start: 500, density: 0.051109963861642106 },
              ],
              percentiles: { p75: 94 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.fr/",
          normalizedUrl: "https://www.yara.fr",
        },
      },
      extractedResults: { fcp: 1416, lcp: 2060, cls: "0.17", fid: 2 },
      timestamp: 1654547704502,
    },
    {
      url: "https://www.yara.us/",
      deviceTargeted: "TABLET",
      results: {
        record: {
          key: { formFactor: "TABLET", origin: "https://www.yara.us" },
          metrics: {
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.8980392156862744 },
                { start: 100, end: 300, density: 0.03137254901960784 },
                { start: 300, density: 0.0705882352941177 },
              ],
              percentiles: { p75: 23 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.5287162162162166 },
                { start: 2500, end: 4000, density: 0.2584459459459461 },
                { start: 4000, density: 0.21283783783783738 },
              ],
              percentiles: { p75: 3862 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8205128205128205,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.14743589743589744,
                },
                { start: "0.25", density: 0.032051282051282055 },
              ],
              percentiles: { p75: "0.09" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.4208333333333338 },
                { start: 200, end: 500, density: 0.3458333333333336 },
                { start: 500, density: 0.23333333333333264 },
              ],
              percentiles: { p75: 442 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.33043478260869563 },
                { start: 800, end: 1800, density: 0.46086956521739125 },
                { start: 1800, density: 0.20869565217391314 },
              ],
              percentiles: { p75: 1773 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.49999999999999967 },
                { start: 1800, end: 3000, density: 0.27333333333333315 },
                { start: 3000, density: 0.22666666666666718 },
              ],
              percentiles: { p75: 2894 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.us/",
          normalizedUrl: "https://www.yara.us",
        },
      },
      extractedResults: {
        fcp: 2894,
        lcp: 3862,
        cls: "0.09",
        fid: 23,
      },
      timestamp: 1654547705051,
    },
    {
      url: "https://www.yara.hr/",
      deviceTargeted: "DESKTOP",
      results: {
        record: {
          key: { formFactor: "DESKTOP", origin: "https://www.yara.hr" },
          metrics: {
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.6291079812206571 },
                { start: 800, end: 1800, density: 0.2981220657276995 },
                { start: 1800, density: 0.07276995305164323 },
              ],
              percentiles: { p75: 1342 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7714932126696833 },
                { start: 1800, end: 3000, density: 0.15384615384615385 },
                { start: 3000, density: 0.07466063348416277 },
              ],
              percentiles: { p75: 1783 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.992248062015504 },
                { start: 100, end: 300, density: 0.0038759689922480624 },
                { start: 300, density: 0.0038759689922480663 },
              ],
              percentiles: { p75: 2 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8051224944320713 },
                { start: 2500, end: 4000, density: 0.12138084632516702 },
                { start: 4000, density: 0.07349665924276162 },
              ],
              percentiles: { p75: 2112 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8045454545454546,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.17727272727272728,
                },
                { start: "0.25", density: 0.018181818181818184 },
              ],
              percentiles: { p75: "0.06" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.9284116331096198 },
                { start: 200, end: 500, density: 0.029082774049217 },
                { start: 500, density: 0.04250559284116318 },
              ],
              percentiles: { p75: 97 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.hr/",
          normalizedUrl: "https://www.yara.hr",
        },
      },
      extractedResults: { fcp: 1783, lcp: 2112, cls: "0.06", fid: 2 },
      timestamp: 1654547705692,
    },
    {
      url: "https://www.yara.ie/",
      deviceTargeted: "DESKTOP",
      results: {
        record: {
          key: { formFactor: "DESKTOP", origin: "https://www.yara.ie" },
          metrics: {
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.9017632241813602 },
                { start: 200, end: 500, density: 0.08816120906801006 },
                { start: 500, density: 0.010075566750629723 },
              ],
              percentiles: { p75: 99 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.3945875163683981 },
                { start: 800, end: 1800, density: 0.4054997817546923 },
                { start: 1800, density: 0.19991270187690946 },
              ],
              percentiles: { p75: 1644 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6816163410301955 },
                { start: 1800, end: 3000, density: 0.21669626998223804 },
                { start: 3000, density: 0.10168738898756638 },
              ],
              percentiles: { p75: 2125 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9817444219066938 },
                { start: 100, end: 300, density: 0.018255578093306288 },
                { start: 300 },
              ],
              percentiles: { p75: 4 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.735294117647059 },
                { start: 2500, end: 4000, density: 0.15811587793011952 },
                { start: 4000, density: 0.10659000442282134 },
              ],
              percentiles: { p75: 2707 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.5556565197637439,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.3139482053611995,
                },
                { start: "0.25", density: 0.13039527487505678 },
              ],
              percentiles: { p75: "0.15" },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.ie/",
          normalizedUrl: "https://www.yara.ie",
        },
      },
      extractedResults: { fcp: 2125, lcp: 2707, cls: "0.15", fid: 4 },
      timestamp: 1654547706263,
    },
    {
      url: "https://www.yara.be/",
      deviceTargeted: "DESKTOP",
      results: {
        record: {
          key: { formFactor: "DESKTOP", origin: "https://www.yara.be" },
          metrics: {
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.9476291578202406 },
                { start: 200, end: 500, density: 0.017338995046001417 },
                { start: 500, density: 0.03503184713375804 },
              ],
              percentiles: { p75: 72 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.79923273657289 },
                { start: 800, end: 1800, density: 0.1694373401534527 },
                { start: 1800, density: 0.03132992327365739 },
              ],
              percentiles: { p75: 745 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.9186274509803921 },
                { start: 1800, end: 3000, density: 0.05424836601307187 },
                { start: 3000, density: 0.02712418300653601 },
              ],
              percentiles: { p75: 1093 },
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
                { start: 0, end: 2500, density: 0.9106506960181286 },
                { start: 2500, end: 4000, density: 0.05730009711880869 },
                { start: 4000, density: 0.03204920686306257 },
              ],
              percentiles: { p75: 1712 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.5477453580901859,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.326923076923077,
                },
                { start: "0.25", density: 0.12533156498673723 },
              ],
              percentiles: { p75: "0.16" },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.be/",
          normalizedUrl: "https://www.yara.be",
        },
      },
      extractedResults: { fcp: 1093, lcp: 1712, cls: "0.16", fid: 2 },
      timestamp: 1654547706869,
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
                  density: 0.6067839195979899,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.2839195979899498,
                },
                { start: "0.25", density: 0.10929648241206026 },
              ],
              percentiles: { p75: "0.14" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.9152449091909743 },
                { start: 200, end: 500, density: 0.050632911392405056 },
                { start: 500, density: 0.03412217941662058 },
              ],
              percentiles: { p75: 90 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.5358467243510506 },
                { start: 800, end: 1800, density: 0.39493201483312723 },
                { start: 1800, density: 0.06922126081582224 },
              ],
              percentiles: { p75: 1129 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.735967926689576 },
                { start: 1800, end: 3000, density: 0.16895761741122559 },
                { start: 3000, density: 0.09507445589919838 },
              ],
              percentiles: { p75: 1848 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9875876956287102 },
                { start: 100, end: 300, density: 0.007015650296815975 },
                { start: 300, density: 0.00539665407447383 },
              ],
              percentiles: { p75: 2 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7545072115384609 },
                { start: 2500, end: 4000, density: 0.13311298076923067 },
                { start: 4000, density: 0.11237980769230851 },
              ],
              percentiles: { p75: 2614 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.co/",
          normalizedUrl: "https://www.yara.com.co",
        },
      },
      extractedResults: { fcp: 1848, lcp: 2614, cls: "0.14", fid: 2 },
      timestamp: 1654547707444,
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
                  density: 0.9379418695993716,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.031421838177533384,
                },
                { start: "0.25", density: 0.030636292223095045 },
              ],
              percentiles: { p75: "0.05" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.9472803347280336 },
                { start: 200, end: 500, density: 0.030125523012552315 },
                { start: 500, density: 0.022594142259414064 },
              ],
              percentiles: { p75: 68 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.8845247446975647 },
                { start: 800, end: 1800, density: 0.0934799685781618 },
                { start: 1800, density: 0.02199528672427342 },
              ],
              percentiles: { p75: 600 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.921705426356589 },
                { start: 1800, end: 3000, density: 0.04806201550387596 },
                { start: 3000, density: 0.030232558139534918 },
              ],
              percentiles: { p75: 1042 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9941262848751836 },
                { start: 100, end: 300, density: 0.001468428781204112 },
                { start: 300, density: 0.004405286343612341 },
              ],
              percentiles: { p75: 2 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.9124143183549122 },
                { start: 2500, end: 4000, density: 0.0533130236100533 },
                { start: 4000, density: 0.03427265803503463 },
              ],
              percentiles: { p75: 1541 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.it/",
          normalizedUrl: "https://www.yara.it",
        },
      },
      extractedResults: { fcp: 1042, lcp: 1541, cls: "0.05", fid: 2 },
      timestamp: 1654547707993,
    },
    {
      url: "https://www.yara.cr/",
      deviceTargeted: "DESKTOP",
      results: {
        record: {
          key: { formFactor: "DESKTOP", origin: "https://www.yara.cr" },
          metrics: {
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.737023139462164 },
                { start: 2500, end: 4000, density: 0.15290806754221398 },
                { start: 4000, density: 0.1100687929956219 },
              ],
              percentiles: { p75: 2672 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8168089297439264,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.15955351280367697,
                },
                { start: "0.25", density: 0.023637557452396596 },
              ],
              percentiles: { p75: "0.07" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.9555048488305762 },
                { start: 200, end: 500, density: 0.03308613804905876 },
                { start: 500, density: 0.011409013120365102 },
              ],
              percentiles: { p75: 74 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.5015933715742511 },
                { start: 800, end: 1800, density: 0.4665391969407266 },
                { start: 1800, density: 0.031867431485022295 },
              ],
              percentiles: { p75: 1084 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7642536835361944 },
                { start: 1800, end: 3000, density: 0.1774503523382447 },
                { start: 3000, density: 0.058295964125560956 },
              ],
              percentiles: { p75: 1768 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 1 },
                { start: 100, end: 300 },
                { start: 300 },
              ],
              percentiles: { p75: 2 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.cr/",
          normalizedUrl: "https://www.yara.cr",
        },
      },
      extractedResults: { fcp: 1768, lcp: 2672, cls: "0.07", fid: 2 },
      timestamp: 1654547708564,
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
                  density: 0.9718998167379351,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.02015882712278558,
                },
                { start: "0.25", density: 0.007941356139279172 },
              ],
              percentiles: { p75: "0.04" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.9591214154972545 },
                { start: 200, end: 500, density: 0.021964612568639418 },
                { start: 500, density: 0.018913971934106173 },
              ],
              percentiles: { p75: 66 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.7111506524317912 },
                { start: 800, end: 1800, density: 0.2704626334519573 },
                { start: 1800, density: 0.01838671411625154 },
              ],
              percentiles: { p75: 869 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.9088217880402605 },
                { start: 1800, end: 3000, density: 0.07341622261693312 },
                { start: 3000, density: 0.017761989342806383 },
              ],
              percentiles: { p75: 1231 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9974066390041494 },
                { start: 100, end: 300, density: 0.0025933609958506223 },
                { start: 300 },
              ],
              percentiles: { p75: 2 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8779691211401423 },
                { start: 2500, end: 4000, density: 0.09352731591448929 },
                { start: 4000, density: 0.028503562945368422 },
              ],
              percentiles: { p75: 1911 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.lv/",
          normalizedUrl: "https://www.yara.lv",
        },
      },
      extractedResults: { fcp: 1231, lcp: 1911, cls: "0.04", fid: 2 },
      timestamp: 1654547709107,
    },
    {
      url: "https://www.yara.com/",
      deviceTargeted: "DESKTOP",
      results: {
        record: {
          key: { formFactor: "DESKTOP", origin: "https://www.yara.com" },
          metrics: {
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.9498094027954257 },
                { start: 200, end: 500, density: 0.028166031342651412 },
                { start: 500, density: 0.02202456586192299 },
              ],
              percentiles: { p75: 64 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.7420607722184143 },
                { start: 800, end: 1800, density: 0.207676490747087 },
                { start: 1800, density: 0.050262737034498746 },
              ],
              percentiles: { p75: 817 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8641777370590932 },
                { start: 1800, end: 3000, density: 0.08841044434264775 },
                { start: 3000, density: 0.04741181859825911 },
              ],
              percentiles: { p75: 1262 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9910135841170326 },
                { start: 100, end: 300, density: 0.005433646812957158 },
                { start: 300, density: 0.0035527690700104344 },
              ],
              percentiles: { p75: 3 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8393680811808115 },
                { start: 2500, end: 4000, density: 0.0935193726937269 },
                { start: 4000, density: 0.06711254612546151 },
              ],
              percentiles: { p75: 1907 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.732420953279849,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.23336479471448796,
                },
                { start: "0.25", density: 0.034214252005663054 },
              ],
              percentiles: { p75: "0.10" },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com/",
          normalizedUrl: "https://www.yara.com",
        },
      },
      extractedResults: { fcp: 1262, lcp: 1907, cls: "0.10", fid: 3 },
      timestamp: 1654547709740,
    },
    {
      url: "https://www.yara.be/fr-be/",
      deviceTargeted: "DESKTOP",
      results: {
        record: {
          key: { formFactor: "DESKTOP", origin: "https://www.yara.be" },
          metrics: {
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.79923273657289 },
                { start: 800, end: 1800, density: 0.1694373401534527 },
                { start: 1800, density: 0.03132992327365739 },
              ],
              percentiles: { p75: 745 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.9186274509803921 },
                { start: 1800, end: 3000, density: 0.05424836601307187 },
                { start: 3000, density: 0.02712418300653601 },
              ],
              percentiles: { p75: 1093 },
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
                { start: 0, end: 2500, density: 0.9106506960181286 },
                { start: 2500, end: 4000, density: 0.05730009711880869 },
                { start: 4000, density: 0.03204920686306257 },
              ],
              percentiles: { p75: 1712 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.5477453580901859,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.326923076923077,
                },
                { start: "0.25", density: 0.12533156498673723 },
              ],
              percentiles: { p75: "0.16" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.9476291578202406 },
                { start: 200, end: 500, density: 0.017338995046001417 },
                { start: 500, density: 0.03503184713375804 },
              ],
              percentiles: { p75: 72 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.be/fr-be/",
          normalizedUrl: "https://www.yara.be",
        },
      },
      extractedResults: { fcp: 1093, lcp: 1712, cls: "0.16", fid: 2 },
      timestamp: 1654547710270,
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
                  density: 0.7748643761301988,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.1817359855334539,
                },
                { start: "0.25", density: 0.0433996383363472 },
              ],
              percentiles: { p75: "0.09" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.9391705069124424 },
                { start: 200, end: 500, density: 0.04331797235023042 },
                { start: 500, density: 0.01751152073732715 },
              ],
              percentiles: { p75: 75 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.8154093097913323 },
                { start: 800, end: 1800, density: 0.16934189406099517 },
                { start: 1800, density: 0.015248796147672562 },
              ],
              percentiles: { p75: 740 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.9244288224956063 },
                { start: 1800, end: 3000, density: 0.044815465729349725 },
                { start: 3000, density: 0.03075571177504396 },
              ],
              percentiles: { p75: 1217 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9916247906197655 },
                { start: 100, end: 300, density: 0.0025125628140703522 },
                { start: 300, density: 0.005862646566164153 },
              ],
              percentiles: { p75: 2 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8649247121346324 },
                { start: 2500, end: 4000, density: 0.09078830823737821 },
                { start: 4000, density: 0.044286979627989415 },
              ],
              percentiles: { p75: 1957 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.lt/",
          normalizedUrl: "https://www.yara.lt",
        },
      },
      extractedResults: { fcp: 1217, lcp: 1957, cls: "0.09", fid: 2 },
      timestamp: 1654547710819,
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
                  density: 0.7755565651976375,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.1758291685597456,
                },
                { start: "0.25", density: 0.04861426624261698 },
              ],
              percentiles: { p75: "0.08" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.9215044971381848 },
                { start: 200, end: 500, density: 0.04946852003270646 },
                { start: 500, density: 0.029026982829108715 },
              ],
              percentiles: { p75: 78 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.4977313974591652 },
                { start: 800, end: 1800, density: 0.4464609800362977 },
                { start: 1800, density: 0.05580762250453711 },
              ],
              percentiles: { p75: 1195 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7182222222222227 },
                { start: 1800, end: 3000, density: 0.20177777777777794 },
                { start: 3000, density: 0.07999999999999935 },
              ],
              percentiles: { p75: 2001 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9933333333333333 },
                { start: 100, end: 300, density: 0.005 },
                { start: 300, density: 0.0016666666666666663 },
              ],
              percentiles: { p75: 2 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7164244826067815 },
                { start: 2500, end: 4000, density: 0.1470717745486571 },
                { start: 4000, density: 0.13650374284456152 },
              ],
              percentiles: { p75: 2882 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.ec/",
          normalizedUrl: "https://www.yara.com.ec",
        },
      },
      extractedResults: { fcp: 2001, lcp: 2882, cls: "0.08", fid: 2 },
      timestamp: 1654547711497,
    },
    {
      url: "https://www.yara.hu/",
      deviceTargeted: "DESKTOP",
      results: {
        record: {
          key: { formFactor: "DESKTOP", origin: "https://www.yara.hu" },
          metrics: {
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9986754966887417 },
                { start: 100, end: 300, density: 0.000662251655629139 },
                { start: 300, density: 0.000662251655629139 },
              ],
              percentiles: { p75: 2 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8724045545880776 },
                { start: 2500, end: 4000, density: 0.09209645010046884 },
                { start: 4000, density: 0.03549899531145344 },
              ],
              percentiles: { p75: 1854 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.858214042263122,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.11588275391956374,
                },
                { start: "0.25", density: 0.025903203817314254 },
              ],
              percentiles: { p75: "0.07" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.9623430962343097 },
                { start: 200, end: 500, density: 0.017433751743375178 },
                { start: 500, density: 0.020223152022315095 },
              ],
              percentiles: { p75: 68 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.7611637347767253 },
                { start: 800, end: 1800, density: 0.21853856562922863 },
                { start: 1800, density: 0.02029769959404602 },
              ],
              percentiles: { p75: 791 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.9271877087508349 },
                { start: 1800, end: 3000, density: 0.0541082164328657 },
                { start: 3000, density: 0.018704074816299363 },
              ],
              percentiles: { p75: 1095 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.hu/",
          normalizedUrl: "https://www.yara.hu",
        },
      },
      extractedResults: { fcp: 1095, lcp: 1854, cls: "0.07", fid: 2 },
      timestamp: 1654547712112,
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
                  density: 0.6052754435107377,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.30905695611577977,
                },
                { start: "0.25", density: 0.08566760037348271 },
              ],
              percentiles: { p75: "0.13" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.9649621212121213 },
                { start: 200, end: 500, density: 0.02462121212121212 },
                { start: 500, density: 0.01041666666666668 },
              ],
              percentiles: { p75: 72 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.8116268589454708 },
                { start: 800, end: 1800, density: 0.15975664713835064 },
                { start: 1800, density: 0.028616493916178463 },
              ],
              percentiles: { p75: 706 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.940149625935162 },
                { start: 1800, end: 3000, density: 0.03649965994105645 },
                { start: 3000, density: 0.023350714123781414 },
              ],
              percentiles: { p75: 1030 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9944629014396457 },
                { start: 100, end: 300, density: 0.0033222591362126247 },
                { start: 300, density: 0.0022148394241417483 },
              ],
              percentiles: { p75: 2 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.9155344202898552 },
                { start: 2500, end: 4000, density: 0.05887681159420291 },
                { start: 4000, density: 0.025588768115941924 },
              ],
              percentiles: { p75: 1563 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.nl/",
          normalizedUrl: "https://www.yara.nl",
        },
      },
      extractedResults: { fcp: 1030, lcp: 1563, cls: "0.13", fid: 2 },
      timestamp: 1654547712772,
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
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.7945914844649021,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.1530494821634062,
                },
                { start: "0.25", density: 0.05235903337169159 },
              ],
              percentiles: { p75: "0.08" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.8969072164948457 },
                { start: 200, end: 500, density: 0.05899198167239405 },
                { start: 500, density: 0.04410080183276026 },
              ],
              percentiles: { p75: 76 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.5899198167239404 },
                { start: 800, end: 1800, density: 0.3482245131729668 },
                { start: 1800, density: 0.06185567010309277 },
              ],
              percentiles: { p75: 1025 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8095238095238093 },
                { start: 1800, end: 3000, density: 0.12997198879551822 },
                { start: 3000, density: 0.06050420168067245 },
              ],
              percentiles: { p75: 1653 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9892252437147255 },
                { start: 100, end: 300, density: 0.0030785017957927143 },
                { start: 300, density: 0.0076962544894817846 },
              ],
              percentiles: { p75: 2 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.758073496659243 },
                { start: 2500, end: 4000, density: 0.1539532293986638 },
                { start: 4000, density: 0.08797327394209324 },
              ],
              percentiles: { p75: 2516 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.gt/",
          normalizedUrl: "https://www.yara.com.gt",
        },
      },
      extractedResults: { fcp: 1653, lcp: 2516, cls: "0.08", fid: 2 },
      timestamp: 1654547713292,
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
                  density: 0.6340104849279161,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.27850589777195284,
                },
                { start: "0.25", density: 0.08748361730013099 },
              ],
              percentiles: { p75: "0.12" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.975242556038809 },
                { start: 200, end: 500, density: 0.016728002676480433 },
                { start: 500, density: 0.008029441284710602 },
              ],
              percentiles: { p75: 65 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.8794485411991023 },
                { start: 800, end: 1800, density: 0.10259698621352997 },
                { start: 1800, density: 0.017954472587367754 },
              ],
              percentiles: { p75: 609 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.9578580481622307 },
                { start: 1800, end: 3000, density: 0.028517110266159683 },
                { start: 3000, density: 0.013624841571609616 },
              ],
              percentiles: { p75: 907 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9981818181818182 },
                { start: 100, end: 300, density: 0.0018181818181818177 },
                { start: 300 },
              ],
              percentiles: { p75: 2 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.9538733526197364 },
                { start: 2500, end: 4000, density: 0.0348762455801993 },
                { start: 4000, density: 0.011250401800064272 },
              ],
              percentiles: { p75: 1362 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.no/",
          normalizedUrl: "https://www.yara.no",
        },
      },
      extractedResults: { fcp: 907, lcp: 1362, cls: "0.12", fid: 2 },
      timestamp: 1654547713815,
    },
    {
      url: "https://www.yara.pl/",
      deviceTargeted: "DESKTOP",
      results: {
        record: {
          key: { formFactor: "DESKTOP", origin: "https://www.yara.pl" },
          metrics: {
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8903095558546436 },
                { start: 2500, end: 4000, density: 0.08142664872139967 },
                { start: 4000, density: 0.02826379542395683 },
              ],
              percentiles: { p75: 1690 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.49581005586592186,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.40782122905027934,
                },
                { start: "0.25", density: 0.09636871508379884 },
              ],
              percentiles: { p75: "0.16" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.9587628865979382 },
                { start: 200, end: 500, density: 0.02176403207331042 },
                { start: 500, density: 0.019473081328751304 },
              ],
              percentiles: { p75: 73 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.7984962406015038 },
                { start: 800, end: 1800, density: 0.18345864661654135 },
                { start: 1800, density: 0.018045112781954892 },
              ],
              percentiles: { p75: 751 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.9163237311385459 },
                { start: 1800, end: 3000, density: 0.06035665294924555 },
                { start: 3000, density: 0.023319615912208578 },
              ],
              percentiles: { p75: 1187 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.998003992015968 },
                { start: 100, end: 300, density: 0.001996007984031936 },
                { start: 300 },
              ],
              percentiles: { p75: 2 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.pl/",
          normalizedUrl: "https://www.yara.pl",
        },
      },
      extractedResults: { fcp: 1187, lcp: 1690, cls: "0.16", fid: 2 },
      timestamp: 1654547715223,
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
                  density: 0.5936207914943886,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.3077377436503248,
                },
                { start: "0.25", density: 0.09864146485528655 },
              ],
              percentiles: { p75: "0.16" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.8572186836518042 },
                { start: 200, end: 500, density: 0.08333333333333326 },
                { start: 500, density: 0.059447983014862676 },
              ],
              percentiles: { p75: 124 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.4881021474172954 },
                { start: 800, end: 1800, density: 0.40452698781195584 },
                { start: 1800, density: 0.10737086477074873 },
              ],
              percentiles: { p75: 1207 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6734809767177746 },
                { start: 1800, end: 3000, density: 0.19023282226007968 },
                { start: 3000, density: 0.13628620102214564 },
              ],
              percentiles: { p75: 2119 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9763462506290893 },
                { start: 100, end: 300, density: 0.010065425264217416 },
                { start: 300, density: 0.013588324106693354 },
              ],
              percentiles: { p75: 3 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6659930715935334 },
                { start: 2500, end: 4000, density: 0.1550230946882217 },
                { start: 4000, density: 0.17898383371824503 },
              ],
              percentiles: { p75: 3268 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.mx/",
          normalizedUrl: "https://www.yara.com.mx",
        },
      },
      extractedResults: { fcp: 2119, lcp: 3268, cls: "0.16", fid: 3 },
      timestamp: 1654547715905,
    },
    {
      url: "https://www.yara.pt/",
      deviceTargeted: "DESKTOP",
      results: {
        record: {
          key: { formFactor: "DESKTOP", origin: "https://www.yara.pt" },
          metrics: {
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9978689397975492 },
                { start: 100, end: 300 },
                { start: 300, density: 0.0021310602024507195 },
              ],
              percentiles: { p75: 2 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8471184631803629 },
                { start: 2500, end: 4000, density: 0.1069903948772679 },
                { start: 4000, density: 0.045891141942369186 },
              ],
              percentiles: { p75: 1910 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8530212302667393,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.11921611322808927,
                },
                { start: "0.25", density: 0.027762656505171478 },
              ],
              percentiles: { p75: "0.05" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.9561503416856493 },
                { start: 200, end: 500, density: 0.017653758542141237 },
                { start: 500, density: 0.026195899772209565 },
              ],
              percentiles: { p75: 68 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.7946287519747235 },
                { start: 800, end: 1800, density: 0.16745655608214852 },
                { start: 1800, density: 0.03791469194312797 },
              ],
              percentiles: { p75: 747 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.9107332624867164 },
                { start: 1800, end: 3000, density: 0.045696068012752375 },
                { start: 3000, density: 0.043570669500531164 },
              ],
              percentiles: { p75: 1120 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.pt/",
          normalizedUrl: "https://www.yara.pt",
        },
      },
      extractedResults: { fcp: 1120, lcp: 1910, cls: "0.05", fid: 2 },
      timestamp: 1654547716660,
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
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6990616621983923 },
                { start: 2500, end: 4000, density: 0.14722966934763193 },
                { start: 4000, density: 0.15370866845397577 },
              ],
              percentiles: { p75: 2896 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8554437328453798,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.1171088746569076,
                },
                { start: "0.25", density: 0.027447392497712712 },
              ],
              percentiles: { p75: "0.06" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.908382066276803 },
                { start: 200, end: 500, density: 0.07261208576998052 },
                { start: 500, density: 0.019005847953216384 },
              ],
              percentiles: { p75: 92 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.5298102981029811 },
                { start: 800, end: 1800, density: 0.40785907859078596 },
                { start: 1800, density: 0.062330623306233054 },
              ],
              percentiles: { p75: 1072 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7796386073159982 },
                { start: 1800, end: 3000, density: 0.15425297487880127 },
                { start: 3000, density: 0.06610841780520062 },
              ],
              percentiles: { p75: 1710 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.99375 },
                { start: 100, end: 300 },
                { start: 300, density: 0.006250000000000001 },
              ],
              percentiles: { p75: 3 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.pa/",
          normalizedUrl: "https://www.yara.com.pa",
        },
      },
      extractedResults: { fcp: 1710, lcp: 2896, cls: "0.06", fid: 3 },
      timestamp: 1654547717282,
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
            cumulative_layout_shift: {
              histogram: [
                { start: "0.00", end: "0.10", density: 0.81371158392435 },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.157919621749409,
                },
                { start: "0.25", density: 0.02836879432624112 },
              ],
              percentiles: { p75: "0.07" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.9068809229501443 },
                { start: 200, end: 500, density: 0.056860321384425226 },
                { start: 500, density: 0.03625875566543047 },
              ],
              percentiles: { p75: 90 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.3500468603561389 },
                { start: 800, end: 1800, density: 0.5084348641049675 },
                { start: 1800, density: 0.14151827553889354 },
              ],
              percentiles: { p75: 1517 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6488340192043903 },
                { start: 1800, end: 3000, density: 0.2437128486511206 },
                { start: 3000, density: 0.10745313214448901 },
              ],
              percentiles: { p75: 2198 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9954639175257731 },
                { start: 100, end: 300, density: 0.0032989690721649477 },
                { start: 300, density: 0.0012371134020618554 },
              ],
              percentiles: { p75: 2 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.636094674556213 },
                { start: 2500, end: 4000, density: 0.17319071461083307 },
                { start: 4000, density: 0.1907146108329539 },
              ],
              percentiles: { p75: 3391 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.pe/",
          normalizedUrl: "https://www.yara.com.pe",
        },
      },
      extractedResults: { fcp: 2198, lcp: 3391, cls: "0.07", fid: 2 },
      timestamp: 1654547717966,
    },
    {
      url: "https://www.yara.us/",
      deviceTargeted: "DESKTOP",
      results: {
        record: {
          key: { formFactor: "DESKTOP", origin: "https://www.yara.us" },
          metrics: {
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8000767459708362 },
                { start: 1800, end: 3000, density: 0.12970069071373752 },
                { start: 3000, density: 0.07022256331542612 },
              ],
              percentiles: { p75: 1635 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9889033942558747 },
                { start: 100, end: 300, density: 0.0052219321148825075 },
                { start: 300, density: 0.0058746736292428275 },
              ],
              percentiles: { p75: 3 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7707692307692308 },
                { start: 2500, end: 4000, density: 0.13461538461538458 },
                { start: 4000, density: 0.09461538461538471 },
              ],
              percentiles: { p75: 2471 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.5999200639488409,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.2965627498001598,
                },
                { start: "0.25", density: 0.10351718625099922 },
              ],
              percentiles: { p75: "0.15" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.9208828522920205 },
                { start: 200, end: 500, density: 0.0505942275042445 },
                { start: 500, density: 0.028522920203735112 },
              ],
              percentiles: { p75: 94 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.581497797356828 },
                { start: 800, end: 1800, density: 0.3416099319183019 },
                { start: 1800, density: 0.07689227072487015 },
              ],
              percentiles: { p75: 1082 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.us/",
          normalizedUrl: "https://www.yara.us",
        },
      },
      extractedResults: { fcp: 1635, lcp: 2471, cls: "0.15", fid: 3 },
      timestamp: 1654547718456,
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
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7347681115489547 },
                { start: 2500, end: 4000, density: 0.13428311609578664 },
                { start: 4000, density: 0.13094877235525856 },
              ],
              percentiles: { p75: 2621 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.5367830423940149,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.3313591022443889,
                },
                { start: "0.25", density: 0.1318578553615961 },
              ],
              percentiles: { p75: "0.18" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.954954954954955 },
                { start: 200, end: 500, density: 0.02818947980238303 },
                { start: 500, density: 0.016855565242662036 },
              ],
              percentiles: { p75: 66 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.36750599520383737 },
                { start: 800, end: 1800, density: 0.4649280575539574 },
                { start: 1800, density: 0.16756594724220533 },
              ],
              percentiles: { p75: 1538 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6910179640718557 },
                { start: 1800, end: 3000, density: 0.20898203592814354 },
                { start: 3000, density: 0.10000000000000082 },
              ],
              percentiles: { p75: 2070 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9894451145958987 },
                { start: 100, end: 300, density: 0.006031363088057903 },
                { start: 300, density: 0.004523522316043429 },
              ],
              percentiles: { p75: 2 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.au/",
          normalizedUrl: "https://www.yara.com.au",
        },
      },
      extractedResults: { fcp: 2070, lcp: 2621, cls: "0.18", fid: 2 },
      timestamp: 1654547718999,
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
                { start: 0, end: 100, density: 0.9897674418604652 },
                { start: 100, end: 300, density: 0.005581395348837209 },
                { start: 300, density: 0.004651162790697677 },
              ],
              percentiles: { p75: 2 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8166299559471369 },
                { start: 2500, end: 4000, density: 0.0930616740088106 },
                { start: 4000, density: 0.09030837004405236 },
              ],
              percentiles: { p75: 2139 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.5441176470588235,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.28846153846153844,
                },
                { start: "0.25", density: 0.16742081447963802 },
              ],
              percentiles: { p75: "0.18" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.9136316337148807 },
                { start: 200, end: 500, density: 0.04890738813735695 },
                { start: 500, density: 0.037460978147762426 },
              ],
              percentiles: { p75: 76 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.5739130434782616 },
                { start: 800, end: 1800, density: 0.342995169082126 },
                { start: 1800, density: 0.08309178743961235 },
              ],
              percentiles: { p75: 1090 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8201581027667997 },
                { start: 1800, end: 3000, density: 0.0899209486166009 },
                { start: 3000, density: 0.08992094861659941 },
              ],
              percentiles: { p75: 1475 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.in/",
          normalizedUrl: "https://www.yara.in",
        },
      },
      extractedResults: { fcp: 1475, lcp: 2139, cls: "0.18", fid: 2 },
      timestamp: 1654547720301,
    },
    {
      url: "https://www.yara.my/",
      deviceTargeted: "DESKTOP",
      results: {
        record: {
          key: { formFactor: "DESKTOP", origin: "https://www.yara.my" },
          metrics: {
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.5598086124401913 },
                { start: 800, end: 1800, density: 0.3570574162679426 },
                { start: 1800, density: 0.08313397129186614 },
              ],
              percentiles: { p75: 1090 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8310115081768622 },
                { start: 1800, end: 3000, density: 0.09691096305269532 },
                { start: 3000, density: 0.07207752877044231 },
              ],
              percentiles: { p75: 1474 },
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
                { start: 0, end: 2500, density: 0.8347745521927119 },
                { start: 2500, end: 4000, density: 0.0824583075972823 },
                { start: 4000, density: 0.08276714021000585 },
              ],
              percentiles: { p75: 1844 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.5850727387729284,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.2896900695762175,
                },
                { start: "0.25", density: 0.125237191650854 },
              ],
              percentiles: { p75: "0.15" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.9613832853025935 },
                { start: 200, end: 500, density: 0.019596541786743513 },
                { start: 500, density: 0.01902017291066283 },
              ],
              percentiles: { p75: 66 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.my/",
          normalizedUrl: "https://www.yara.my",
        },
      },
      extractedResults: { fcp: 1474, lcp: 1844, cls: "0.15", fid: 2 },
      timestamp: 1654547721143,
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
                  density: 0.6411860718171926,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.2592491838955386,
                },
                { start: "0.25", density: 0.09956474428726883 },
              ],
              percentiles: { p75: "0.15" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.938927507447865 },
                { start: 200, end: 500, density: 0.044935451837140025 },
                { start: 500, density: 0.016137040714995037 },
              ],
              percentiles: { p75: 70 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.2514348182563542 },
                { start: 800, end: 1800, density: 0.521453949166439 },
                { start: 1800, density: 0.22711123257720692 },
              ],
              percentiles: { p75: 1778 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.648907831646244 },
                { start: 1800, end: 3000, density: 0.2053809270111881 },
                { start: 3000, density: 0.14571124134256788 },
              ],
              percentiles: { p75: 2442 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9931904161412358 },
                { start: 100, end: 300, density: 0.0068095838587641875 },
                { start: 300 },
              ],
              percentiles: { p75: 2 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6904636459430982 },
                { start: 2500, end: 4000, density: 0.16833508956796622 },
                { start: 4000, density: 0.14120126448893566 },
              ],
              percentiles: { p75: 2804 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.co.nz/",
          normalizedUrl: "https://www.yara.co.nz",
        },
      },
      extractedResults: { fcp: 2442, lcp: 2804, cls: "0.15", fid: 2 },
      timestamp: 1654547721805,
    },
    {
      url: "https://www.yara.vn/",
      deviceTargeted: "DESKTOP",
      results: {
        record: {
          key: { formFactor: "DESKTOP", origin: "https://www.yara.vn" },
          metrics: {
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8885941644562337 },
                { start: 2500, end: 4000, density: 0.053934571175950484 },
                { start: 4000, density: 0.057471264367815744 },
              ],
              percentiles: { p75: 1590 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.6441605839416059,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.28558394160583944,
                },
                { start: "0.25", density: 0.07025547445255473 },
              ],
              percentiles: { p75: "0.13" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.9581304771178188 },
                { start: 200, end: 500, density: 0.012658227848101266 },
                { start: 500, density: 0.029211295034079786 },
              ],
              percentiles: { p75: 49 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.7327302631578947 },
                { start: 800, end: 1800, density: 0.23519736842105268 },
                { start: 1800, density: 0.03207236842105262 },
              ],
              percentiles: { p75: 893 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8827215756490603 },
                { start: 1800, end: 3000, density: 0.07072515666965092 },
                { start: 3000, density: 0.04655326768128882 },
              ],
              percentiles: { p75: 1286 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 1 },
                { start: 100, end: 300 },
                { start: 300 },
              ],
              percentiles: { p75: 2 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.vn/",
          normalizedUrl: "https://www.yara.vn",
        },
      },
      extractedResults: { fcp: 1286, lcp: 1590, cls: "0.13", fid: 2 },
      timestamp: 1654547722432,
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
                { start: 0, end: 200, density: 0.9774913428241632 },
                { start: 200, end: 500, density: 0.017121969988457098 },
                { start: 500, density: 0.005386687187379756 },
              ],
              percentiles: { p75: 57 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.6506149676881385 },
                { start: 800, end: 1800, density: 0.30706691682301435 },
                { start: 1800, density: 0.04231811548884716 },
              ],
              percentiles: { p75: 955 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8748690002095996 },
                { start: 1800, end: 3000, density: 0.10228463634458189 },
                { start: 3000, density: 0.022846363445818477 },
              ],
              percentiles: { p75: 1450 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.998484338160997 },
                { start: 100, end: 300, density: 0.0015156618390030313 },
                { start: 300 },
              ],
              percentiles: { p75: 1 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8483606557377049 },
                { start: 2500, end: 4000, density: 0.07807377049180332 },
                { start: 4000, density: 0.07356557377049168 },
              ],
              percentiles: { p75: 1961 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9423894557823129,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.03996598639455782,
                },
                { start: "0.25", density: 0.01764455782312926 },
              ],
              percentiles: { p75: "0.04" },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.kr/",
          normalizedUrl: "https://www.yara.kr",
        },
      },
      extractedResults: { fcp: 1450, lcp: 1961, cls: "0.04", fid: 1 },
      timestamp: 1654547723251,
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
                  density: 0.9282341831916903,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.029272898961284228,
                },
                { start: "0.25", density: 0.042492917847025496 },
              ],
              percentiles: { p75: "0.02" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.9414157851912125 },
                { start: 200, end: 500, density: 0.02034174125305127 },
                { start: 500, density: 0.03824247355573622 },
              ],
              percentiles: { p75: 58 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.6830225711481847 },
                { start: 800, end: 1800, density: 0.2845927379784103 },
                { start: 1800, density: 0.03238469087340517 },
              ],
              percentiles: { p75: 897 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8779816513761467 },
                { start: 1800, end: 3000, density: 0.08990825688073394 },
                { start: 3000, density: 0.0321100917431193 },
              ],
              percentiles: { p75: 1304 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9891156462585033 },
                { start: 100, end: 300, density: 0.004081632653061224 },
                { start: 300, density: 0.0068027210884353765 },
              ],
              percentiles: { p75: 1 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8537234042553188 },
                { start: 2500, end: 4000, density: 0.08067375886524818 },
                { start: 4000, density: 0.06560283687943304 },
              ],
              percentiles: { p75: 1829 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.co.th/",
          normalizedUrl: "https://www.yara.co.th",
        },
      },
      extractedResults: { fcp: 1304, lcp: 1829, cls: "0.02", fid: 1 },
      timestamp: 1654547724115,
    },
    {
      url: "https://www.yara.ci/",
      deviceTargeted: "DESKTOP",
      results: {
        record: {
          key: { formFactor: "DESKTOP", origin: "https://www.yara.ci" },
          metrics: {
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.86693822131704 },
                { start: 200, end: 500, density: 0.08553971486761708 },
                { start: 500, density: 0.04752206381534288 },
              ],
              percentiles: { p75: 120 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.4862318840579713 },
                { start: 800, end: 1800, density: 0.37318840579710166 },
                { start: 1800, density: 0.14057971014492707 },
              ],
              percentiles: { p75: 1485 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6731461483081357 },
                { start: 1800, end: 3000, density: 0.1418286537077035 },
                { start: 3000, density: 0.18502519798416073 },
              ],
              percentiles: { p75: 2721 },
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
                { start: 0, end: 2500, density: 0.69950389794472 },
                { start: 2500, end: 4000, density: 0.10347271438695964 },
                { start: 4000, density: 0.19702338766832042 },
              ],
              percentiles: { p75: 3382 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8962406015037595,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.07443609022556393,
                },
                { start: "0.25", density: 0.02932330827067668 },
              ],
              percentiles: { p75: "0.05" },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.ci/",
          normalizedUrl: "https://www.yara.ci",
        },
      },
      extractedResults: { fcp: 2721, lcp: 3382, cls: "0.05", fid: 3 },
      timestamp: 1654547725166,
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
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.9053591790193845 },
                { start: 200, end: 500, density: 0.03420752565564425 },
                { start: 500, density: 0.06043329532497141 },
              ],
              percentiles: { p75: 94 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.358708189158016 },
                { start: 800, end: 1800, density: 0.47635524798154544 },
                { start: 1800, density: 0.16493656286043865 },
              ],
              percentiles: { p75: 1714 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6451259583789699 },
                { start: 1800, end: 3000, density: 0.2059145673603503 },
                { start: 3000, density: 0.1489594742606798 },
              ],
              percentiles: { p75: 2445 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9800796812749003 },
                { start: 100, end: 300, density: 0.014940239043824702 },
                { start: 300, density: 0.004980079681274901 },
              ],
              percentiles: { p75: 3 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6827242524916943 },
                { start: 2500, end: 4000, density: 0.11351052048726469 },
                { start: 4000, density: 0.20376522702104094 },
              ],
              percentiles: { p75: 3642 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.7207207207207207,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.23986486486486486,
                },
                { start: "0.25", density: 0.03941441441441443 },
              ],
              percentiles: { p75: "0.11" },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.co.ke/",
          normalizedUrl: "https://www.yara.co.ke",
        },
      },
      extractedResults: { fcp: 2445, lcp: 3642, cls: "0.11", fid: 3 },
      timestamp: 1654547726146,
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
                { start: 0, end: 100, density: 0.9969913501316284 },
                { start: 100, end: 300, density: 0.0030086498683715686 },
                { start: 300 },
              ],
              percentiles: { p75: 2 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7443895017116776 },
                { start: 2500, end: 4000, density: 0.13427158615443135 },
                { start: 4000, density: 0.12133891213389104 },
              ],
              percentiles: { p75: 2687 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.6089166992569417,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.31325772389518963,
                },
                { start: "0.25", density: 0.07782557684786862 },
              ],
              percentiles: { p75: "0.13" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.922234805587014 },
                { start: 200, end: 500, density: 0.04228010570026425 },
                { start: 500, density: 0.03548508871272182 },
              ],
              percentiles: { p75: 78 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.5650375939849623 },
                { start: 800, end: 1800, density: 0.3759398496240602 },
                { start: 1800, density: 0.05902255639097747 },
              ],
              percentiles: { p75: 1196 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7834973504920509 },
                { start: 1800, end: 3000, density: 0.14799394398183183 },
                { start: 3000, density: 0.06850870552611726 },
              ],
              percentiles: { p75: 1746 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.co.za/",
          normalizedUrl: "https://www.yara.co.za",
        },
      },
      extractedResults: { fcp: 1746, lcp: 2687, cls: "0.13", fid: 2 },
      timestamp: 1654547728404,
    },
    {
      url: "https://www.yara.ro/",
      deviceTargeted: "DESKTOP",
      results: {
        record: {
          key: { formFactor: "DESKTOP", origin: "https://www.yara.ro" },
          metrics: {
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9971209213051824 },
                { start: 100, end: 300 },
                { start: 300, density: 0.0028790786948176563 },
              ],
              percentiles: { p75: 2 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8554279749478079 },
                { start: 2500, end: 4000, density: 0.10803757828810019 },
                { start: 4000, density: 0.03653444676409187 },
              ],
              percentiles: { p75: 1985 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.7429805615550757,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.1965442764578834,
                },
                { start: "0.25", density: 0.06047516198704103 },
              ],
              percentiles: { p75: "0.10" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.9707724425887265 },
                { start: 200, end: 500, density: 0.012526096033402927 },
                { start: 500, density: 0.016701461377870583 },
              ],
              percentiles: { p75: 69 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.6632962588473205 },
                { start: 800, end: 1800, density: 0.3063700707785642 },
                { start: 1800, density: 0.030333670374115294 },
              ],
              percentiles: { p75: 909 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.9149377593360994 },
                { start: 1800, end: 3000, density: 0.061203319502074714 },
                { start: 3000, density: 0.023858921161825745 },
              ],
              percentiles: { p75: 1267 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.ro/",
          normalizedUrl: "https://www.yara.ro",
        },
      },
      extractedResults: { fcp: 1267, lcp: 1985, cls: "0.10", fid: 2 },
      timestamp: 1654547730834,
    },
    {
      url: "https://www.yara.fi/",
      deviceTargeted: "DESKTOP",
      results: {
        record: {
          key: { formFactor: "DESKTOP", origin: "https://www.yara.fi" },
          metrics: {
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8854790419161674 },
                { start: 2500, end: 4000, density: 0.09431137724550896 },
                { start: 4000, density: 0.02020958083832349 },
              ],
              percentiles: { p75: 1809 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.5425287356321838,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.3448275862068965,
                },
                { start: "0.25", density: 0.11264367816091958 },
              ],
              percentiles: { p75: "0.16" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.920221169036335 },
                { start: 200, end: 500, density: 0.0655608214849921 },
                { start: 500, density: 0.014218009478672928 },
              ],
              percentiles: { p75: 94 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.7054545454545453 },
                { start: 800, end: 1800, density: 0.2581818181818181 },
                { start: 1800, density: 0.036363636363636466 },
              ],
              percentiles: { p75: 863 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.9140401146131806 },
                { start: 1800, end: 3000, density: 0.0680515759312321 },
                { start: 3000, density: 0.01790830945558735 },
              ],
              percentiles: { p75: 1217 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9970479704797047 },
                { start: 100, end: 300, density: 0.002214022140221402 },
                { start: 300, density: 0.0007380073800738007 },
              ],
              percentiles: { p75: 2 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.fi/",
          normalizedUrl: "https://www.yara.fi",
        },
      },
      extractedResults: { fcp: 1217, lcp: 1809, cls: "0.16", fid: 2 },
      timestamp: 1654547731920,
    },
    {
      url: "https://www.yara.se/",
      deviceTargeted: "DESKTOP",
      results: {
        record: {
          key: { formFactor: "DESKTOP", origin: "https://www.yara.se" },
          metrics: {
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9961807765754297 },
                { start: 100, end: 300, density: 0.003819223424570338 },
                { start: 300 },
              ],
              percentiles: { p75: 2 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.9450657894736842 },
                { start: 2500, end: 4000, density: 0.04210526315789475 },
                { start: 4000, density: 0.012828947368421011 },
              ],
              percentiles: { p75: 1482 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.6312754409769336,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.28324287652645863,
                },
                { start: "0.25", density: 0.08548168249660794 },
              ],
              percentiles: { p75: "0.12" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.9782379782379782 },
                { start: 200, end: 500, density: 0.015093015093015095 },
                { start: 500, density: 0.006669006669006678 },
              ],
              percentiles: { p75: 65 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.815438373570521 },
                { start: 800, end: 1800, density: 0.17090216010165185 },
                { start: 1800, density: 0.013659466327827234 },
              ],
              percentiles: { p75: 697 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.9490094186424163 },
                { start: 1800, end: 3000, density: 0.042546281260149414 },
                { start: 3000, density: 0.00844430009743423 },
              ],
              percentiles: { p75: 981 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.se/",
          normalizedUrl: "https://www.yara.se",
        },
      },
      extractedResults: { fcp: 981, lcp: 1482, cls: "0.12", fid: 2 },
      timestamp: 1654547732563,
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
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9873297434273044 },
                { start: 100, end: 300, density: 0.007918910357934747 },
                { start: 300, density: 0.0047513462147608515 },
              ],
              percentiles: { p75: 3 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.6816540859862148 },
                { start: 2500, end: 4000, density: 0.19560223170331448 },
                { start: 4000, density: 0.12274368231047084 },
              ],
              percentiles: { p75: 2878 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.446961894953656,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.33779608650875387,
                },
                { start: "0.25", density: 0.21524201853758998 },
              ],
              percentiles: { p75: "0.22" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.9311984781230184 },
                { start: 200, end: 500, density: 0.04343690551680407 },
                { start: 500, density: 0.02536461636017746 },
              ],
              percentiles: { p75: 86 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.3585406301824209 },
                { start: 800, end: 1800, density: 0.4119402985074622 },
                { start: 1800, density: 0.22951907131011687 },
              ],
              percentiles: { p75: 1727 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.645812968393613 },
                { start: 1800, end: 3000, density: 0.21831215379602456 },
                { start: 3000, density: 0.13587487781036234 },
              ],
              percentiles: { p75: 2201 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.co.uk/",
          normalizedUrl: "https://www.yara.co.uk",
        },
      },
      extractedResults: { fcp: 2201, lcp: 2878, cls: "0.22", fid: 3 },
      timestamp: 1654547733159,
    },
    {
      url: "https://www.yara.gr/",
      deviceTargeted: "DESKTOP",
      results: {
        record: {
          key: { formFactor: "DESKTOP", origin: "https://www.yara.gr" },
          metrics: {
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7868686868686867 },
                { start: 2500, end: 4000, density: 0.15151515151515155 },
                { start: 4000, density: 0.06161616161616186 },
              ],
              percentiles: { p75: 2319 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.9617768595041323,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.017561983471074388,
                },
                { start: "0.25", density: 0.020661157024793392 },
              ],
              percentiles: { p75: "0.04" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.9203056768558953 },
                { start: 200, end: 500, density: 0.051310043668122286 },
                { start: 500, density: 0.02838427947598239 },
              ],
              percentiles: { p75: 87 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.6824596774193548 },
                { start: 800, end: 1800, density: 0.2883064516129032 },
                { start: 1800, density: 0.029233870967742083 },
              ],
              percentiles: { p75: 898 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8535353535353535 },
                { start: 1800, end: 3000, density: 0.1090909090909091 },
                { start: 3000, density: 0.0373737373737374 },
              ],
              percentiles: { p75: 1452 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9932562620423891 },
                { start: 100, end: 300, density: 0.004816955684007708 },
                { start: 300, density: 0.001926782273603083 },
              ],
              percentiles: { p75: 2 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.gr/",
          normalizedUrl: "https://www.yara.gr",
        },
      },
      extractedResults: { fcp: 1452, lcp: 2319, cls: "0.04", fid: 2 },
      timestamp: 1654547733709,
    },
    {
      url: "https://www.yara.ru/",
      deviceTargeted: "DESKTOP",
      results: {
        record: {
          key: { formFactor: "DESKTOP", origin: "https://www.yara.ru" },
          metrics: {
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8087508821453773 },
                { start: 2500, end: 4000, density: 0.12914608327452357 },
                { start: 4000, density: 0.06210303458009915 },
              ],
              percentiles: { p75: 2161 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.8201174743024963,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.16446402349486047,
                },
                { start: "0.25", density: 0.01541850220264317 },
              ],
              percentiles: { p75: "0.08" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.9675324675324676 },
                { start: 200, end: 500, density: 0.02207792207792208 },
                { start: 500, density: 0.010389610389610402 },
              ],
              percentiles: { p75: 63 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.6104529616724738 },
                { start: 800, end: 1800, density: 0.2850174216027874 },
                { start: 1800, density: 0.10452961672473879 },
              ],
              percentiles: { p75: 1164 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7774627923458536 },
                { start: 1800, end: 3000, density: 0.14174344436569802 },
                { start: 3000, density: 0.0807937632884484 },
              ],
              percentiles: { p75: 1732 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9975728155339807 },
                { start: 100, end: 300, density: 0.0012135922330097086 },
                { start: 300, density: 0.0012135922330097086 },
              ],
              percentiles: { p75: 1 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.ru/",
          normalizedUrl: "https://www.yara.ru",
        },
      },
      extractedResults: { fcp: 1732, lcp: 2161, cls: "0.08", fid: 1 },
      timestamp: 1654547734250,
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
                { start: 0, end: 100, density: 0.9911816578483246 },
                { start: 100, end: 300, density: 0.005291005291005291 },
                { start: 300, density: 0.003527336860670196 },
              ],
              percentiles: { p75: 2 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.8676028084252754 },
                { start: 2500, end: 4000, density: 0.08625877632898693 },
                { start: 4000, density: 0.04613841524573768 },
              ],
              percentiles: { p75: 1919 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.5894519131334023,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.3867631851085833,
                },
                { start: "0.25", density: 0.02378490175801449 },
              ],
              percentiles: { p75: "0.13" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.9195509822263799 },
                { start: 200, end: 500, density: 0.04957904583723108 },
                { start: 500, density: 0.030869971936388987 },
              ],
              percentiles: { p75: 79 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.8184494602551521 },
                { start: 800, end: 1800, density: 0.15112855740922473 },
                { start: 1800, density: 0.03042198233562319 },
              ],
              percentiles: { p75: 710 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.8899803536345774 },
                { start: 1800, end: 3000, density: 0.06876227897838898 },
                { start: 3000, density: 0.041257367387033686 },
              ],
              percentiles: { p75: 1283 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.ua/",
          normalizedUrl: "https://www.yara.ua",
        },
      },
      extractedResults: { fcp: 1283, lcp: 1919, cls: "0.13", fid: 2 },
      timestamp: 1654547734869,
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
                  density: 0.8300683371298405,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.1152619589977221,
                },
                { start: "0.25", density: 0.05466970387243736 },
              ],
              percentiles: { p75: "0.07" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.8726287262872628 },
                { start: 200, end: 500, density: 0.09485094850948508 },
                { start: 500, density: 0.03252032520325207 },
              ],
              percentiles: { p75: 108 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.42473851750795827 },
                { start: 800, end: 1800, density: 0.48885857207821737 },
                { start: 1800, density: 0.0864029104138245 },
              ],
              percentiles: { p75: 1272 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.6815424610051997 },
                { start: 1800, end: 3000, density: 0.20363951473136926 },
                { start: 3000, density: 0.1148180242634311 },
              ],
              percentiles: { p75: 2044 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9939508506616258 },
                { start: 100, end: 300, density: 0.00453686200378072 },
                { start: 300, density: 0.001512287334593573 },
              ],
              percentiles: { p75: 3 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7290294246815987 },
                { start: 2500, end: 4000, density: 0.12999560825647785 },
                { start: 4000, density: 0.14097496706192333 },
              ],
              percentiles: { p75: 2750 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.com.ar/",
          normalizedUrl: "https://www.yara.com.ar",
        },
      },
      extractedResults: { fcp: 2044, lcp: 2750, cls: "0.07", fid: 3 },
      timestamp: 1654547735456,
    },
    {
      url: "https://www.yara.bo/",
      deviceTargeted: "DESKTOP",
      results: {
        record: {
          key: { formFactor: "DESKTOP", origin: "https://www.yara.bo" },
          metrics: {
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.2622253720765414 },
                { start: 800, end: 1800, density: 0.5435861091424519 },
                { start: 1800, density: 0.19418851878100674 },
              ],
              percentiles: { p75: 1708 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.43375924680564937 },
                { start: 1800, end: 3000, density: 0.30867518493611323 },
                { start: 3000, density: 0.2575655682582374 },
              ],
              percentiles: { p75: 3131 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9894055326662743 },
                { start: 100, end: 300, density: 0.01059446733372572 },
                { start: 300 },
              ],
              percentiles: { p75: 3 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.482155113246397 },
                { start: 2500, end: 4000, density: 0.2323266986959507 },
                { start: 4000, density: 0.28551818805765233 },
              ],
              percentiles: { p75: 4742 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.7730147575544624,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.20520028109627547,
                },
                { start: "0.25", density: 0.02178496134926213 },
              ],
              percentiles: { p75: "0.08" },
            },
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.8395618556701032 },
                { start: 200, end: 500, density: 0.10309278350515466 },
                { start: 500, density: 0.057345360824742155 },
              ],
              percentiles: { p75: 132 },
            },
          },
        },
        urlNormalizationDetails: {
          originalUrl: "https://www.yara.bo/",
          normalizedUrl: "https://www.yara.bo",
        },
      },
      extractedResults: { fcp: 3131, lcp: 4742, cls: "0.08", fid: 3 },
      timestamp: 1654547736141,
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
            experimental_interaction_to_next_paint: {
              histogram: [
                { start: 0, end: 200, density: 0.8447160316319192 },
                { start: 200, end: 500, density: 0.07979870596693026 },
                { start: 500, density: 0.07548526240115058 },
              ],
              percentiles: { p75: 127 },
            },
            experimental_time_to_first_byte: {
              histogram: [
                { start: 0, end: 800, density: 0.5998248686514885 },
                { start: 800, end: 1800, density: 0.3380035026269702 },
                { start: 1800, density: 0.0621716287215413 },
              ],
              percentiles: { p75: 1075 },
            },
            first_contentful_paint: {
              histogram: [
                { start: 0, end: 1800, density: 0.7378800328677074 },
                { start: 1800, end: 3000, density: 0.1610517666392769 },
                { start: 3000, density: 0.10106820049301568 },
              ],
              percentiles: { p75: 1886 },
            },
            first_input_delay: {
              histogram: [
                { start: 0, end: 100, density: 0.9772283669486013 },
                { start: 100, end: 300, density: 0.01431359791802212 },
                { start: 300, density: 0.008458035133376687 },
              ],
              percentiles: { p75: 3 },
            },
            largest_contentful_paint: {
              histogram: [
                { start: 0, end: 2500, density: 0.7274590163934425 },
                { start: 2500, end: 4000, density: 0.14877049180327867 },
                { start: 4000, density: 0.12377049180327881 },
              ],
              percentiles: { p75: 2670 },
            },
            cumulative_layout_shift: {
              histogram: [
                {
                  start: "0.00",
                  end: "0.10",
                  density: 0.761206896551724,
                },
                {
                  start: "0.10",
                  end: "0.25",
                  density: 0.1956896551724138,
                },
                { start: "0.25", density: 0.04310344827586207 },
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
      extractedResults: { fcp: 1886, lcp: 2670, cls: "0.09", fid: 3 },
      timestamp: 1654547736824,
    },
  ],
};
