import { NetworkGraphNode } from "../../Types/NetworkTypes";

const nodes: NetworkGraphNode[] = [
  {
    distance: 0,
    heard: 23862017,
    node: "GAYTO",
    qset: {
      t: 2,
      v: ["SDF_validator_1", "SDF_validator_2", "SDF_validator_3"]
    },
    status: "tracking",
    value: "[ txH: 7697aa, ct: 1557898494, upgrades: [ ] ]",
    value_id: 1
  },
  {
    distance: 1,
    heard: 23862017,
    node: "SDF_validator_3",
    qset: {
      t: 5,
      v: [
        "SDF_validator_3",
        "SDF_validator_1",
        "SDF_validator_2",
        "LOBSTR_2__Europe_",
        "Eno",
        "umbrel",
        "keybase_io",
        "COINQVEST__Germany_",
        {
          t: 2,
          v: [
            "SatoshiPay__DE__Frankfurt_",
            "SatoshiPay__SG__Singapore_",
            "SatoshiPay__US__Iowa_"
          ]
        }
      ]
    },
    status: "tracking",
    value: "[ txH: 7697aa, ct: 1557898494, upgrades: [ ] ]",
    value_id: 1
  },
  {
    distance: 1,
    heard: 23862017,
    node: "SDF_validator_1",
    qset: {
      t: 5,
      v: [
        "SDF_validator_2",
        "SDF_validator_3",
        "Eno",
        "LOBSTR_1__Europe_",
        "keybase_io",
        "umbrel",
        "COINQVEST__Germany_",
        {
          t: 2,
          v: ["Wirex_United_States", "Wirex_Singapore", "Wirex_United_Kingdom"]
        },
        {
          t: 2,
          v: [
            "SatoshiPay__DE__Frankfurt_",
            "SatoshiPay__SG__Singapore_",
            "SatoshiPay__US__Iowa_"
          ]
        }
      ]
    },
    status: "tracking",
    value: "[ txH: 7697aa, ct: 1557898494, upgrades: [ ] ]",
    value_id: 1
  },
  {
    distance: 1,
    heard: 23862017,
    node: "SDF_validator_2",
    qset: {
      t: 5,
      v: [
        "SDF_validator_3",
        "SDF_validator_1",
        "SDF_validator_2",
        "LOBSTR_2__Europe_",
        "Eno",
        "umbrel",
        "keybase_io",
        "COINQVEST__Finland_",
        {
          t: 2,
          v: [
            "SatoshiPay__DE__Frankfurt_",
            "SatoshiPay__SG__Singapore_",
            "SatoshiPay__US__Iowa_"
          ]
        }
      ]
    },
    status: "tracking",
    value: "[ txH: 7697aa, ct: 1557898494, upgrades: [ ] ]",
    value_id: 1
  },
  {
    distance: 2,
    node: "Wirex_Singapore",
    status: "missing"
  },
  {
    distance: 2,
    heard: 23862017,
    node: "COINQVEST__Finland_",
    qset: {
      t: 6,
      v: [
        "COINQVEST__Germany_",
        "COINQVEST__Finland_",
        "keybase_io",
        "LOBSTR_2__Europe_",
        "Eno",
        "umbrel",
        {
          t: 2,
          v: [
            "SatoshiPay__DE__Frankfurt_",
            "SatoshiPay__SG__Singapore_",
            "SatoshiPay__US__Iowa_"
          ]
        },
        {
          t: 2,
          v: ["SDF_validator_1", "SDF_validator_2", "SDF_validator_3"]
        }
      ]
    },
    status: "tracking",
    value: "[ txH: 7697aa, ct: 1557898494, upgrades: [ ] ]",
    value_id: 1
  },
  {
    distance: 2,
    heard: 23862017,
    node: "SatoshiPay__US__Iowa_",
    qset: {
      t: 5,
      v: [
        "COINQVEST__Germany_",
        "LOBSTR_1__Europe_",
        "SatoshiPay__DE__Frankfurt_",
        "SatoshiPay__SG__Singapore_",
        "SatoshiPay__US__Iowa_",
        "umbrel",
        {
          t: 2,
          v: ["SDF_validator_1", "SDF_validator_2", "SDF_validator_3"]
        }
      ]
    },
    status: "tracking",
    value: "[ txH: 7697aa, ct: 1557898494, upgrades: [ ] ]",
    value_id: 1
  },
  {
    distance: 2,
    heard: 23862017,
    node: "Eno",
    qset: {
      t: 6,
      v: [
        "keybase_io",
        "LOBSTR_2__Europe_",
        "COINQVEST__Germany_",
        "Eno",
        "umbrel",
        "IBM_Australia",
        {
          t: 2,
          v: ["Wirex_United_States", "Wirex_Singapore", "Wirex_United_Kingdom"]
        },
        {
          t: 2,
          v: ["SDF_validator_1", "SDF_validator_2", "SDF_validator_3"]
        },
        {
          t: 2,
          v: [
            "SatoshiPay__DE__Frankfurt_",
            "SatoshiPay__SG__Singapore_",
            "SatoshiPay__US__Iowa_"
          ]
        }
      ]
    },
    status: "tracking",
    value: "[ txH: 7697aa, ct: 1557898494, upgrades: [ ] ]",
    value_id: 1
  },
  {
    distance: 2,
    heard: 23862017,
    node: "Wirex_United_Kingdom",
    qset: {
      t: 7,
      v: [
        "keybase_io",
        "LOBSTR_2__Europe_",
        "Eno",
        "umbrel",
        "Wirex_United_States",
        "Wirex_Singapore",
        "Wirex_United_Kingdom",
        {
          t: 2,
          v: ["SDF_validator_1", "SDF_validator_2", "SDF_validator_3"]
        },
        {
          t: 2,
          v: [
            "SatoshiPay__DE__Frankfurt_",
            "SatoshiPay__SG__Singapore_",
            "SatoshiPay__US__Iowa_"
          ]
        }
      ]
    },
    status: "tracking",
    value: "[ txH: 7697aa, ct: 1557898494, upgrades: [ ] ]",
    value_id: 1
  },
  {
    distance: 2,
    heard: 23862017,
    node: "SatoshiPay__SG__Singapore_",
    qset: {
      t: 5,
      v: [
        "COINQVEST__Germany_",
        "LOBSTR_1__Europe_",
        "SatoshiPay__DE__Frankfurt_",
        "SatoshiPay__SG__Singapore_",
        "SatoshiPay__US__Iowa_",
        "umbrel",
        {
          t: 2,
          v: ["SDF_validator_1", "SDF_validator_2", "SDF_validator_3"]
        }
      ]
    },
    status: "tracking",
    value: "[ txH: 7697aa, ct: 1557898494, upgrades: [ ] ]",
    value_id: 1
  },
  {
    distance: 2,
    heard: 23862017,
    node: "LOBSTR_1__Europe_",
    qset: {
      t: 7,
      v: [
        "LOBSTR_1__Europe_",
        "LOBSTR_2__Europe_",
        "keybase_io",
        "COINQVEST__Germany_",
        "Eno",
        "umbrel",
        {
          t: 2,
          v: ["Sakkex_Germany", "Sakkex_Singapore", "Sakkex_United_Kingdom"]
        },
        {
          t: 2,
          v: ["SDF_validator_1", "SDF_validator_2", "SDF_validator_3"]
        },
        {
          t: 2,
          v: ["Wirex_United_States", "Wirex_Singapore", "Wirex_United_Kingdom"]
        },
        {
          t: 2,
          v: [
            "SatoshiPay__DE__Frankfurt_",
            "SatoshiPay__SG__Singapore_",
            "SatoshiPay__US__Iowa_"
          ]
        }
      ]
    },
    status: "tracking",
    value: "[ txH: 7697aa, ct: 1557898494, upgrades: [ ] ]",
    value_id: 1
  },
  {
    distance: 2,
    heard: 23862017,
    node: "keybase_io",
    qset: {
      t: 5,
      v: [
        "LOBSTR_2__Europe_",
        "COINQVEST__Germany_",
        "Eno",
        "umbrel",
        "IBM_Australia",
        {
          t: 2,
          v: ["Sakkex_Germany", "Sakkex_Singapore", "Sakkex_United_Kingdom"]
        },
        {
          t: 2,
          v: ["Wirex_United_States", "Wirex_Singapore", "Wirex_United_Kingdom"]
        },
        {
          t: 2,
          v: [
            "SatoshiPay__DE__Frankfurt_",
            "SatoshiPay__SG__Singapore_",
            "SatoshiPay__US__Iowa_"
          ]
        }
      ]
    },
    status: "tracking",
    value: "[ txH: 7697aa, ct: 1557898494, upgrades: [ ] ]",
    value_id: 1
  },
  {
    distance: 2,
    heard: 23862017,
    node: "SatoshiPay__DE__Frankfurt_",
    qset: {
      t: 5,
      v: [
        "COINQVEST__Germany_",
        "LOBSTR_1__Europe_",
        "SatoshiPay__DE__Frankfurt_",
        "SatoshiPay__SG__Singapore_",
        "SatoshiPay__US__Iowa_",
        "umbrel",
        {
          t: 2,
          v: ["SDF_validator_1", "SDF_validator_2", "SDF_validator_3"]
        }
      ]
    },
    status: "tracking",
    value: "[ txH: 7697aa, ct: 1557898494, upgrades: [ ] ]",
    value_id: 1
  },
  {
    distance: 2,
    heard: 23862017,
    node: "LOBSTR_2__Europe_",
    qset: {
      t: 7,
      v: [
        "LOBSTR_1__Europe_",
        "LOBSTR_2__Europe_",
        "keybase_io",
        "COINQVEST__Germany_",
        "Eno",
        "umbrel",
        {
          t: 2,
          v: ["Sakkex_Germany", "Sakkex_Singapore", "Sakkex_United_Kingdom"]
        },
        {
          t: 2,
          v: ["SDF_validator_1", "SDF_validator_2", "SDF_validator_3"]
        },
        {
          t: 2,
          v: ["Wirex_United_States", "Wirex_Singapore", "Wirex_United_Kingdom"]
        },
        {
          t: 2,
          v: [
            "SatoshiPay__DE__Frankfurt_",
            "SatoshiPay__SG__Singapore_",
            "SatoshiPay__US__Iowa_"
          ]
        }
      ]
    },
    status: "tracking",
    value: "[ txH: 7697aa, ct: 1557898494, upgrades: [ ] ]",
    value_id: 1
  },
  {
    distance: 2,
    node: "Wirex_United_States",
    qset: {
      t: 7,
      v: [
        "keybase_io",
        "LOBSTR_2__Europe_",
        "Eno",
        "umbrel",
        "Wirex_United_States",
        "Wirex_Singapore",
        "Wirex_United_Kingdom",
        {
          t: 2,
          v: ["SDF_validator_1", "SDF_validator_2", "SDF_validator_3"]
        },
        {
          t: 2,
          v: [
            "SatoshiPay__DE__Frankfurt_",
            "SatoshiPay__SG__Singapore_",
            "SatoshiPay__US__Iowa_"
          ]
        }
      ]
    },
    status: "missing"
  },
  {
    distance: 2,
    heard: 23862017,
    node: "COINQVEST__Germany_",
    qset: {
      t: 6,
      v: [
        "COINQVEST__Germany_",
        "COINQVEST__Finland_",
        "keybase_io",
        "LOBSTR_2__Europe_",
        "Eno",
        "umbrel",
        {
          t: 2,
          v: [
            "SatoshiPay__DE__Frankfurt_",
            "SatoshiPay__SG__Singapore_",
            "SatoshiPay__US__Iowa_"
          ]
        },
        {
          t: 2,
          v: ["SDF_validator_1", "SDF_validator_2", "SDF_validator_3"]
        }
      ]
    },
    status: "tracking",
    value: "[ txH: 7697aa, ct: 1557898494, upgrades: [ ] ]",
    value_id: 1
  },
  {
    distance: 2,
    heard: 23862017,
    node: "umbrel",
    qset: {
      t: 7,
      v: [
        "Eno",
        "LOBSTR_2__Europe_",
        "IBM_Australia",
        "keybase_io",
        "COINQVEST__Germany_",
        "stellar_sui_li",
        {
          t: 2,
          v: ["Sakkex_Germany", "Sakkex_Singapore", "Sakkex_United_Kingdom"]
        },
        {
          t: 2,
          v: ["Wirex_United_States", "Wirex_United_Kingdom", "Wirex_Singapore"]
        },
        {
          t: 2,
          v: [
            "SatoshiPay__DE__Frankfurt_",
            "SatoshiPay__SG__Singapore_",
            "SatoshiPay__US__Iowa_"
          ]
        },
        {
          t: 2,
          v: ["SDF_validator_1", "SDF_validator_2", "SDF_validator_3"]
        }
      ]
    },
    status: "tracking",
    value: "[ txH: 7697aa, ct: 1557898494, upgrades: [ ] ]",
    value_id: 1
  },
  {
    distance: 3,
    heard: 23862017,
    node: "stellar_sui_li",
    qset: {
      t: 7,
      v: [
        "sui_li_testnode",
        "keybase_io",
        "Eno",
        "umbrel",
        "COINQVEST__Germany_",
        "smoove_net_1",
        "numerotron",
        {
          t: 2,
          v: ["IBM_United_Kingdom", "IBM_Italy", "IBM_Hong_Kong"]
        },
        {
          t: 2,
          v: ["Wirex_United_States", "Wirex_Singapore", "Wirex_United_Kingdom"]
        },
        {
          t: 2,
          v: [
            "SatoshiPay__DE__Frankfurt_",
            "SatoshiPay__SG__Singapore_",
            "SatoshiPay__US__Iowa_"
          ]
        }
      ]
    },
    status: "tracking",
    value: "[ txH: 7697aa, ct: 1557898494, upgrades: [ ] ]",
    value_id: 1
  },
  {
    distance: 3,
    node: "Sakkex_Germany",
    status: "missing"
  },
  {
    distance: 3,
    heard: 23862017,
    node: "IBM_Australia",
    qset: {
      t: 3,
      v: [
        "keybase_io",
        "LOBSTR_2__Europe_",
        "Eno",
        {
          t: 2,
          v: ["SDF_validator_1", "SDF_validator_2", "SDF_validator_3"]
        },
        {
          t: 2,
          v: [
            "SatoshiPay__DE__Frankfurt_",
            "SatoshiPay__SG__Singapore_",
            "SatoshiPay__US__Iowa_"
          ]
        }
      ]
    },
    status: "tracking",
    value: "[ txH: 7697aa, ct: 1557898494, upgrades: [ ] ]",
    value_id: 1
  },
  {
    distance: 3,
    node: "Sakkex_United_Kingdom",
    status: "missing"
  },
  {
    distance: 3,
    node: "Sakkex_Singapore",
    status: "missing"
  },
  {
    distance: 4,
    heard: 23862017,
    node: "IBM_Italy",
    qset: {
      t: 5,
      v: [
        "keybase_io",
        "LOBSTR_2__Europe_",
        "Eno",
        "umbrel",
        {
          t: 2,
          v: [
            "SatoshiPay__DE__Frankfurt_",
            "SatoshiPay__SG__Singapore_",
            "SatoshiPay__US__Iowa_"
          ]
        },
        {
          t: 2,
          v: ["SDF_validator_1", "SDF_validator_2", "SDF_validator_3"]
        },
        {
          t: 5,
          v: [
            "IBM_Australia",
            "IBM_Brazil",
            "IBM_Canada",
            "IBM_Norway",
            "IBM_India",
            "IBM_Hong_Kong",
            "IBM_United_Kingdom",
            "IBM_United_States"
          ]
        }
      ]
    },
    status: "tracking",
    value: "[ txH: 7697aa, ct: 1557898494, upgrades: [ ] ]",
    value_id: 1
  },
  {
    distance: 4,
    node: "IBM_United_Kingdom",
    qset: {
      t: 5,
      v: [
        "keybase_io",
        "LOBSTR_2__Europe_",
        "Eno",
        "umbrel",
        {
          t: 2,
          v: [
            "SatoshiPay__DE__Frankfurt_",
            "SatoshiPay__SG__Singapore_",
            "SatoshiPay__US__Iowa_"
          ]
        },
        {
          t: 2,
          v: ["SDF_validator_1", "SDF_validator_2", "SDF_validator_3"]
        },
        {
          t: 5,
          v: [
            "IBM_Australia",
            "IBM_Brazil",
            "IBM_Canada",
            "IBM_Italy",
            "IBM_India",
            "IBM_Hong_Kong",
            "IBM_Norway",
            "IBM_United_States"
          ]
        }
      ]
    },
    status: "missing"
  },
  {
    distance: 4,
    heard: 23862017,
    node: "IBM_Hong_Kong",
    qset: {
      t: 5,
      v: [
        "keybase_io",
        "LOBSTR_2__Europe_",
        "Eno",
        "umbrel",
        {
          t: 2,
          v: [
            "SatoshiPay__DE__Frankfurt_",
            "SatoshiPay__SG__Singapore_",
            "SatoshiPay__US__Iowa_"
          ]
        },
        {
          t: 2,
          v: ["SDF_validator_1", "SDF_validator_2", "SDF_validator_3"]
        },
        {
          t: 5,
          v: [
            "IBM_Australia",
            "IBM_Brazil",
            "IBM_Norway",
            "IBM_Italy",
            "IBM_Canada",
            "IBM_India",
            "IBM_United_Kingdom",
            "IBM_United_States"
          ]
        }
      ]
    },
    status: "tracking",
    value: "[ txH: 7697aa, ct: 1557898494, upgrades: [ ] ]",
    value_id: 1
  },
  {
    distance: 4,
    node: "sui_li_testnode",
    qset: {
      t: 46,
      v: [
        "auskunft_de",
        "Clic_World_3__Southern_Africa_",
        "Stellarport_Ohio_1",
        "Stellarport_Ohio_2",
        "numerotron",
        "SDF_validator_3",
        "GCQKI",
        "Sakkex_Germany",
        "IBM_Australia",
        "SDF_validator_2",
        "Eno",
        "COINQVEST__Germany_",
        "Cryptomover_host_2",
        "smoove_net_1",
        "umbrel",
        "SatoshiPay__US__Iowa_",
        "GA76U",
        "paywith_glass__Ireland_",
        "IBM_Canada",
        "Cryptomover_host_1",
        "IBM_United_States",
        "IBM_Italy",
        "keybase_io",
        "GBEPF",
        "SDF_validator_1",
        "Sakkex_United_Kingdom",
        "COINQVEST__Finland_",
        "GCUJF",
        "Wirex_United_States",
        "GBEJE",
        "IBM_India",
        "Smartlands_Platform",
        "stellar_sui_li",
        "SatoshiPay__DE__Frankfurt_",
        "GCXLL",
        "GANYY",
        "IBM_Hong_Kong",
        "Local_Stellar_Assets",
        "Wirex_United_Kingdom",
        "IBM_Brazil",
        "Sakkex_Singapore",
        "GBFSB",
        "SatoshiPay__SG__Singapore_",
        "Wirex_Singapore",
        "WHITE_WALLET_1__USA_",
        "GB4EK",
        "LOBSTR_2__Europe_",
        "Tempo",
        "Mobius__United_States_",
        "LOBSTR_1__Europe_",
        "GDMAU",
        "Tyler_Vault__Texas",
        "IBM_United_Kingdom",
        "GBIQ5",
        "GCI5F",
        "IBM_Norway",
        "GAMX3",
        "Cryptomover_host_3",
        "Future",
        "GAEJS",
        "Clic_World_2__East_Africa_",
        "GDRM4",
        "GAJBH",
        "GBCJ2",
        "GBG67",
        "KnackForge_LLC_US_1",
        "GAUNZ",
        "GAAZI"
      ]
    },
    status: "missing"
  },
  {
    distance: 4,
    heard: 23862017,
    node: "numerotron",
    qset: {
      t: 6,
      v: [
        "keybase_io",
        "LOBSTR_2__Europe_",
        "COINQVEST__Germany_",
        "Eno",
        "umbrel",
        "IBM_Australia",
        {
          t: 2,
          v: ["Sakkex_Germany", "Sakkex_Singapore", "Sakkex_United_Kingdom"]
        },
        {
          t: 2,
          v: ["Wirex_United_States", "Wirex_Singapore", "Wirex_United_Kingdom"]
        },
        {
          t: 2,
          v: [
            "SatoshiPay__DE__Frankfurt_",
            "SatoshiPay__SG__Singapore_",
            "SatoshiPay__US__Iowa_"
          ]
        }
      ]
    },
    status: "tracking",
    value: "[ txH: 7697aa, ct: 1557898494, upgrades: [ ] ]",
    value_id: 1
  },
  {
    distance: 4,
    heard: 23862017,
    node: "smoove_net_1",
    qset: {
      t: 5,
      v: [
        "keybase_io",
        "Smartlands_Platform",
        "smoove_net_1",
        "stellar_sui_li",
        "umbrel",
        {
          t: 4,
          v: [
            "IBM_United_States",
            "LOBSTR_1__Europe_",
            "numerotron",
            "Stellarport_Ohio_1",
            "sui_li_testnode",
            "Tyler_Vault__Texas",
            "Wirex_United_States"
          ]
        },
        {
          t: 3,
          v: [
            "COINQVEST__Finland_",
            "COINQVEST__Germany_",
            "SatoshiPay__DE__Frankfurt_",
            "SatoshiPay__SG__Singapore_",
            "SatoshiPay__US__Iowa_"
          ]
        }
      ]
    },
    status: "tracking",
    value: "[ txH: 7697aa, ct: 1557898494, upgrades: [ ] ]",
    value_id: 1
  },
  {
    distance: 5,
    heard: 23862017,
    node: "GAAZI",
    qset: {
      t: 3,
      v: [
        "SDF_validator_1",
        "SDF_validator_2",
        "SDF_validator_3",
        {
          t: 3,
          v: ["GDIQK", "Eno", "Tempo", "SatoshiPay__DE__Frankfurt_"]
        }
      ]
    },
    status: "tracking",
    value: "[ txH: 7697aa, ct: 1557898494, upgrades: [ ] ]",
    value_id: 1
  },
  {
    distance: 5,
    node: "GAEJS",
    qset: {
      t: 6,
      v: [
        "SDF_validator_1",
        "SDF_validator_2",
        "SDF_validator_3",
        "SatoshiPay__DE__Frankfurt_",
        "SatoshiPay__SG__Singapore_",
        "SatoshiPay__US__Iowa_",
        "IBM_Norway",
        "IBM_Italy",
        "IBM_United_Kingdom"
      ]
    },
    status: "missing"
  },
  {
    distance: 5,
    node: "GAJBH",
    qset: {
      t: 3,
      v: [
        "SDF_validator_1",
        "SDF_validator_2",
        "SDF_validator_3",
        {
          t: 3,
          v: ["GDIQK", "Eno", "Tempo", "SatoshiPay__DE__Frankfurt_"]
        }
      ]
    },
    status: "missing"
  },
  {
    distance: 5,
    node: "KnackForge_LLC_US_1",
    qset: {
      t: 4,
      v: [
        "SDF_validator_1",
        "Eno",
        "Tempo",
        "SDF_validator_2",
        "SDF_validator_3"
      ]
    },
    status: "missing"
  },
  {
    distance: 5,
    heard: 23862017,
    node: "GAMX3",
    qset: {
      t: 4,
      v: [
        "GAMX3",
        "SatoshiPay__SG__Singapore_",
        "Eno",
        {
          t: 2,
          v: ["IBM_Australia", "IBM_India", "IBM_Hong_Kong"]
        },
        {
          t: 2,
          v: ["SDF_validator_1", "SDF_validator_2", "SDF_validator_3"]
        }
      ]
    },
    status: "tracking",
    value: "[ txH: 7697aa, ct: 1557898494, upgrades: [ ] ]",
    value_id: 1
  },
  {
    distance: 5,
    heard: 23862017,
    node: "GANYY",
    qset: {
      t: 3,
      v: [
        "SDF_validator_1",
        "SDF_validator_2",
        "SDF_validator_3",
        {
          t: 3,
          v: ["GDIQK", "Eno", "Tempo", "SatoshiPay__DE__Frankfurt_"]
        }
      ]
    },
    status: "tracking",
    value: "[ txH: 7697aa, ct: 1557898494, upgrades: [ ] ]",
    value_id: 1
  },
  {
    distance: 5,
    node: "IBM_United_States",
    qset: {
      t: 5,
      v: [
        "keybase_io",
        "LOBSTR_2__Europe_",
        "Eno",
        "umbrel",
        {
          t: 2,
          v: [
            "SatoshiPay__DE__Frankfurt_",
            "SatoshiPay__SG__Singapore_",
            "SatoshiPay__US__Iowa_"
          ]
        },
        {
          t: 2,
          v: ["SDF_validator_1", "SDF_validator_2", "SDF_validator_3"]
        },
        {
          t: 5,
          v: [
            "IBM_Australia",
            "IBM_Brazil",
            "IBM_Canada",
            "IBM_Italy",
            "IBM_India",
            "IBM_Hong_Kong",
            "IBM_Norway",
            "IBM_United_Kingdom"
          ]
        }
      ]
    },
    status: "missing"
  },
  {
    distance: 5,
    node: "GAUNZ",
    status: "missing"
  },
  {
    distance: 5,
    node: "Local_Stellar_Assets",
    status: "missing"
  },
  {
    distance: 5,
    heard: 23862017,
    node: "Tyler_Vault__Texas",
    qset: {
      t: 4,
      v: [
        "SDF_validator_1",
        "Eno",
        "Tempo",
        "SDF_validator_2",
        "SDF_validator_3"
      ]
    },
    status: "tracking",
    value: "[ txH: 7697aa, ct: 1557898494, upgrades: [ ] ]",
    value_id: 1
  },
  {
    distance: 5,
    heard: 23862017,
    node: "GA76U",
    qset: {
      t: 5,
      v: [
        "GBEPF",
        "GA76U",
        "IBM_Canada",
        "IBM_United_Kingdom",
        "IBM_Norway",
        "SatoshiPay__DE__Frankfurt_",
        "SatoshiPay__SG__Singapore_",
        "SatoshiPay__US__Iowa_",
        "SDF_validator_1",
        "SDF_validator_2",
        "SDF_validator_3"
      ]
    },
    status: "tracking",
    value: "[ txH: 7697aa, ct: 1557898494, upgrades: [ ] ]",
    value_id: 1
  },
  {
    distance: 5,
    heard: 23862017,
    node: "Stellarport_Ohio_1",
    qset: {
      t: 4,
      v: [
        "SDF_validator_1",
        "SDF_validator_2",
        "SDF_validator_3",
        "SatoshiPay__US__Iowa_",
        "Eno",
        "Tempo"
      ]
    },
    status: "tracking",
    value: "[ txH: 7697aa, ct: 1557898494, upgrades: [ ] ]",
    value_id: 1
  },
  {
    distance: 5,
    node: "Clic_World_3__Southern_Africa_",
    status: "missing"
  },
  {
    distance: 5,
    heard: 23862017,
    node: "GBCJ2",
    qset: {
      t: 3,
      v: [
        "SDF_validator_1",
        "SDF_validator_2",
        "SDF_validator_3",
        {
          t: 3,
          v: ["GDIQK", "Eno", "Tempo", "SatoshiPay__DE__Frankfurt_"]
        }
      ]
    },
    status: "tracking",
    value: "[ txH: 7697aa, ct: 1557898494, upgrades: [ ] ]",
    value_id: 1
  },
  {
    distance: 5,
    heard: 23862017,
    node: "GBEJE",
    qset: {
      t: 3,
      v: [
        "SDF_validator_1",
        "SDF_validator_2",
        "SDF_validator_3",
        {
          t: 3,
          v: ["GDIQK", "Eno", "Tempo", "SatoshiPay__DE__Frankfurt_"]
        }
      ]
    },
    status: "tracking",
    value: "[ txH: 7697aa, ct: 1557898494, upgrades: [ ] ]",
    value_id: 1
  },
  {
    distance: 5,
    heard: 23862017,
    node: "GBEPF",
    qset: {
      t: 5,
      v: [
        "GBEPF",
        "GA76U",
        "IBM_Canada",
        "IBM_United_Kingdom",
        "IBM_Norway",
        "SatoshiPay__DE__Frankfurt_",
        "SatoshiPay__SG__Singapore_",
        "SatoshiPay__US__Iowa_",
        "SDF_validator_1",
        "SDF_validator_2",
        "SDF_validator_3"
      ]
    },
    status: "tracking",
    value: "[ txH: 7697aa, ct: 1557898494, upgrades: [ ] ]",
    value_id: 1
  },
  {
    distance: 5,
    heard: 23862017,
    node: "GBFSB",
    qset: {
      t: 3,
      v: [
        "SDF_validator_1",
        "SDF_validator_2",
        "SDF_validator_3",
        {
          t: 3,
          v: ["GDIQK", "Eno", "Tempo", "SatoshiPay__DE__Frankfurt_"]
        }
      ]
    },
    status: "tracking",
    value: "[ txH: 7697aa, ct: 1557898494, upgrades: [ ] ]",
    value_id: 1
  },
  {
    distance: 5,
    node: "Future",
    qset: {
      t: 3,
      v: [
        "Eno",
        "SatoshiPay__DE__Frankfurt_",
        "SatoshiPay__SG__Singapore_",
        "SatoshiPay__US__Iowa_"
      ]
    },
    status: "missing"
  },
  {
    distance: 5,
    node: "GBG67",
    status: "missing"
  },
  {
    distance: 5,
    heard: 23862017,
    node: "WHITE_WALLET_1__USA_",
    qset: {
      t: 4,
      v: [
        "SatoshiPay__DE__Frankfurt_",
        "SatoshiPay__SG__Singapore_",
        "SatoshiPay__US__Iowa_",
        {
          t: 5,
          v: [
            "IBM_Australia",
            "IBM_Brazil",
            "IBM_Canada",
            "IBM_Norway",
            "IBM_Italy",
            "IBM_Hong_Kong",
            "IBM_India",
            "IBM_United_Kingdom",
            "IBM_United_States"
          ]
        },
        {
          t: 2,
          v: ["SDF_validator_1", "SDF_validator_2", "SDF_validator_3"]
        }
      ]
    },
    status: "tracking",
    value: "[ txH: 7697aa, ct: 1557898494, upgrades: [ ] ]",
    value_id: 1
  },
  {
    distance: 5,
    node: "GBIQ5",
    status: "missing"
  },
  {
    distance: 5,
    heard: 23862017,
    node: "auskunft_de",
    qset: {
      t: 3,
      v: [
        "SDF_validator_1",
        "SDF_validator_2",
        "SDF_validator_3",
        {
          t: 3,
          v: ["auskunft_de", "LOBSTR_1__Europe_", "Eno", "Tempo"]
        }
      ]
    },
    status: "tracking",
    value: "[ txH: 7697aa, ct: 1557898494, upgrades: [ ] ]",
    value_id: 1
  },
  {
    distance: 5,
    node: "IBM_Brazil",
    qset: {
      t: 5,
      v: [
        "keybase_io",
        "LOBSTR_2__Europe_",
        "Eno",
        "umbrel",
        {
          t: 2,
          v: [
            "SatoshiPay__DE__Frankfurt_",
            "SatoshiPay__SG__Singapore_",
            "SatoshiPay__US__Iowa_"
          ]
        },
        {
          t: 2,
          v: ["SDF_validator_1", "SDF_validator_2", "SDF_validator_3"]
        },
        {
          t: 5,
          v: [
            "IBM_Australia",
            "IBM_Canada",
            "IBM_Norway",
            "IBM_Italy",
            "IBM_Hong_Kong",
            "IBM_India",
            "IBM_United_Kingdom",
            "IBM_United_States"
          ]
        }
      ]
    },
    status: "missing"
  },
  {
    distance: 5,
    heard: 23862017,
    node: "Cryptomover_host_1",
    qset: {
      t: 1,
      v: ["SDF_validator_1", "SDF_validator_2", "SDF_validator_3"]
    },
    status: "tracking",
    value: "[ txH: 7697aa, ct: 1557898494, upgrades: [ ] ]",
    value_id: 1
  },
  {
    distance: 5,
    heard: 23862017,
    node: "IBM_Canada",
    qset: {
      t: 5,
      v: [
        "keybase_io",
        "LOBSTR_2__Europe_",
        "Eno",
        "umbrel",
        {
          t: 2,
          v: [
            "SatoshiPay__DE__Frankfurt_",
            "SatoshiPay__SG__Singapore_",
            "SatoshiPay__US__Iowa_"
          ]
        },
        {
          t: 2,
          v: ["SDF_validator_1", "SDF_validator_2", "SDF_validator_3"]
        },
        {
          t: 5,
          v: [
            "IBM_Australia",
            "IBM_Brazil",
            "IBM_Norway",
            "IBM_Italy",
            "IBM_Hong_Kong",
            "IBM_India",
            "IBM_United_Kingdom",
            "IBM_United_States"
          ]
        }
      ]
    },
    status: "tracking",
    value: "[ txH: 7697aa, ct: 1557898494, upgrades: [ ] ]",
    value_id: 1
  },
  {
    distance: 5,
    heard: 23862017,
    node: "GB4EK",
    qset: {
      t: 4,
      v: [
        "SDF_validator_1",
        "Eno",
        "Tempo",
        "SDF_validator_2",
        "SDF_validator_3"
      ]
    },
    status: "tracking",
    value: "[ txH: 7697aa, ct: 1557898494, upgrades: [ ] ]",
    value_id: 1
  },
  {
    distance: 5,
    heard: 23862012,
    node: "Mobius__United_States_",
    qset: {
      t: 7,
      v: [
        "Eno",
        "keybase_io",
        "LOBSTR_1__Europe_",
        "umbrel",
        "Tempo",
        {
          t: 2,
          v: ["SDF_validator_1", "SDF_validator_2", "SDF_validator_3"]
        },
        {
          t: 2,
          v: ["Wirex_United_States", "Wirex_Singapore", "Wirex_United_Kingdom"]
        },
        {
          t: 2,
          v: [
            "SatoshiPay__DE__Frankfurt_",
            "SatoshiPay__SG__Singapore_",
            "SatoshiPay__US__Iowa_"
          ]
        },
        {
          t: 2,
          v: ["Sakkex_Germany", "Sakkex_United_Kingdom", "Sakkex_Singapore"]
        }
      ]
    },
    status: "behind",
    value: "[ txH: ba53d2, ct: 1557898452, upgrades: [ ] ]",
    value_id: 55
  },
  {
    distance: 5,
    heard: 23862017,
    node: "Smartlands_Platform",
    qset: {
      t: 6,
      v: [
        "GDIQK",
        "Eno",
        "Tempo",
        "SatoshiPay__DE__Frankfurt_",
        "umbrel",
        "SDF_validator_1",
        "SDF_validator_2",
        "SDF_validator_3"
      ]
    },
    status: "tracking",
    value: "[ txH: 7697aa, ct: 1557898494, upgrades: [ ] ]",
    value_id: 1
  },
  {
    distance: 5,
    heard: 23862006,
    node: "IBM_India",
    qset: {
      t: 5,
      v: [
        "keybase_io",
        "LOBSTR_2__Europe_",
        "Eno",
        "umbrel",
        {
          t: 2,
          v: [
            "SatoshiPay__DE__Frankfurt_",
            "SatoshiPay__SG__Singapore_",
            "SatoshiPay__US__Iowa_"
          ]
        },
        {
          t: 2,
          v: ["SDF_validator_1", "SDF_validator_2", "SDF_validator_3"]
        },
        {
          t: 5,
          v: [
            "IBM_Australia",
            "IBM_Brazil",
            "IBM_Canada",
            "IBM_Norway",
            "IBM_Italy",
            "IBM_Hong_Kong",
            "IBM_United_Kingdom",
            "IBM_United_States"
          ]
        }
      ]
    },
    status: "behind",
    value: "[ txH: 75e05f, ct: 1557898455, upgrades: [ ] ]",
    value_id: 57
  },
  {
    distance: 5,
    heard: 23862016,
    node: "GCI5F",
    qset: {
      t: 6,
      v: [
        "GDIQK",
        "Eno",
        "Tempo",
        "SatoshiPay__DE__Frankfurt_",
        "umbrel",
        "SDF_validator_1",
        "SDF_validator_2",
        "SDF_validator_3"
      ]
    },
    status: "behind",
    value: "[ txH: 5f8cd1, ct: 1557898485, upgrades: [ ] ]",
    value_id: 58
  },
  {
    distance: 5,
    heard: 23862017,
    node: "Tempo",
    qset: {
      t: 4,
      v: [
        "SDF_validator_2",
        "SDF_validator_1",
        "Tempo",
        "Eno",
        "SDF_validator_3"
      ]
    },
    status: "tracking",
    value: "[ txH: 7697aa, ct: 1557898494, upgrades: [ ] ]",
    value_id: 1
  },
  {
    distance: 5,
    node: "GCQKI",
    qset: {
      t: 4,
      v: [
        "SDF_validator_1",
        "IBM_United_States",
        "keybase_io",
        {
          t: 3,
          v: [
            "GoodX_Network__DE_",
            "Tempo",
            {
              t: 3,
              v: [
                "Mobius__United_States_",
                "republic_co",
                "SatoshiPay__DE__Frankfurt_",
                "IBM_United_Kingdom"
              ]
            }
          ]
        },
        {
          t: 3,
          v: ["GCQKI", "LOBSTR_1__Europe_", "SatoshiPay__US__Iowa_"]
        }
      ]
    },
    status: "missing"
  },
  {
    distance: 5,
    heard: 23862017,
    node: "GCUJF",
    qset: {
      t: 4,
      v: [
        "GCUJF",
        "SatoshiPay__DE__Frankfurt_",
        "SatoshiPay__SG__Singapore_",
        "SatoshiPay__US__Iowa_",
        {
          t: 5,
          v: [
            "IBM_Australia",
            "IBM_Brazil",
            "IBM_Canada",
            "IBM_Norway",
            "IBM_Italy",
            "IBM_Hong_Kong",
            "IBM_India",
            "IBM_United_Kingdom",
            "IBM_United_States"
          ]
        },
        {
          t: 2,
          v: ["SDF_validator_1", "SDF_validator_2", "SDF_validator_3"]
        }
      ]
    },
    status: "tracking",
    value: "[ txH: 7697aa, ct: 1557898494, upgrades: [ ] ]",
    value_id: 1
  },
  {
    distance: 5,
    heard: 23862017,
    node: "GCXLL",
    qset: {
      t: 7,
      v: [
        "GCXLL",
        "Eno",
        "SDF_validator_1",
        "SDF_validator_2",
        "SDF_validator_3",
        "Mobius__United_States_",
        "Smartlands_Platform",
        "Stellarport_Ohio_1",
        "Stronghold_3__Europe_"
      ]
    },
    status: "tracking",
    value: "[ txH: 7697aa, ct: 1557898494, upgrades: [ ] ]",
    value_id: 1
  },
  {
    distance: 5,
    heard: 23862017,
    node: "Cryptomover_host_3",
    qset: {
      t: 4,
      v: [
        "SDF_validator_1",
        "Eno",
        "Tempo",
        "SDF_validator_2",
        "SDF_validator_3"
      ]
    },
    status: "tracking",
    value: "[ txH: 7697aa, ct: 1557898494, upgrades: [ ] ]",
    value_id: 1
  },
  {
    distance: 5,
    heard: 23862017,
    node: "Stellarport_Ohio_2",
    qset: {
      t: 6,
      v: [
        "Tempo",
        "SDF_validator_2",
        "SDF_validator_3",
        "LOBSTR_1__Europe_",
        "Eno",
        "SatoshiPay__US__Iowa_",
        "COINQVEST__Germany_",
        "LOBSTR_2__Europe_",
        "SatoshiPay__DE__Frankfurt_"
      ]
    },
    status: "tracking",
    value: "[ txH: 7697aa, ct: 1557898494, upgrades: [ ] ]",
    value_id: 1
  },
  {
    distance: 5,
    heard: 23862017,
    node: "Cryptomover_host_2",
    qset: {
      t: 2,
      v: [
        "SDF_validator_1",
        "SDF_validator_2",
        "SDF_validator_3",
        "Eno",
        "Tempo",
        "Mobius__United_States_",
        "Cryptomover_host_1",
        "Cryptomover_host_3"
      ]
    },
    status: "tracking",
    value: "[ txH: 7697aa, ct: 1557898494, upgrades: [ ] ]",
    value_id: 1
  },
  {
    distance: 5,
    node: "Clic_World_2__East_Africa_",
    status: "missing"
  },
  {
    distance: 5,
    heard: 23862017,
    node: "GDMAU",
    qset: {
      t: 4,
      v: [
        "Eno",
        "Mobius__United_States_",
        {
          t: 3,
          v: [
            "SatoshiPay__DE__Frankfurt_",
            "SatoshiPay__SG__Singapore_",
            "SatoshiPay__US__Iowa_"
          ]
        },
        {
          t: 4,
          v: [
            "IBM_Australia",
            "IBM_Brazil",
            "IBM_Canada",
            "IBM_Norway",
            "IBM_India",
            "IBM_United_Kingdom",
            "IBM_United_States"
          ]
        },
        {
          t: 3,
          v: [
            "keybase_io",
            "Stellarport_Ohio_1",
            "Stellarport_Ohio_2",
            "Tempo",
            "umbrel"
          ]
        },
        {
          t: 3,
          v: ["SDF_validator_1", "SDF_validator_2", "SDF_validator_3"]
        }
      ]
    },
    status: "tracking",
    value: "[ txH: 7697aa, ct: 1557898494, upgrades: [ ] ]",
    value_id: 1
  },
  {
    distance: 5,
    heard: 23862016,
    node: "paywith_glass__Ireland_",
    qset: {
      t: 12,
      v: [
        "Local_Stellar_Assets",
        "SDF_validator_1",
        "SDF_validator_2",
        "SDF_validator_3",
        "Eno",
        "Tempo",
        "keybase_io",
        "umbrel",
        "SatoshiPay__DE__Frankfurt_",
        "SatoshiPay__SG__Singapore_",
        "SatoshiPay__US__Iowa_",
        "Cryptomover_host_1",
        "Cryptomover_host_2",
        "Cryptomover_host_3",
        "IBM_United_Kingdom",
        "IBM_Norway",
        "IBM_Canada"
      ]
    },
    status: "behind",
    value: "[ txH: 4084d8, ct: 1557898486, upgrades: [ ] ]",
    value_id: 68
  },
  {
    distance: 5,
    heard: 23862017,
    node: "IBM_Norway",
    qset: {
      t: 5,
      v: [
        "keybase_io",
        "LOBSTR_2__Europe_",
        "Eno",
        "umbrel",
        {
          t: 2,
          v: [
            "SatoshiPay__DE__Frankfurt_",
            "SatoshiPay__SG__Singapore_",
            "SatoshiPay__US__Iowa_"
          ]
        },
        {
          t: 2,
          v: ["SDF_validator_1", "SDF_validator_2", "SDF_validator_3"]
        },
        {
          t: 5,
          v: [
            "IBM_Australia",
            "IBM_Brazil",
            "IBM_Canada",
            "IBM_Italy",
            "IBM_India",
            "IBM_Hong_Kong",
            "IBM_United_Kingdom",
            "IBM_United_States"
          ]
        }
      ]
    },
    status: "tracking",
    value: "[ txH: 7697aa, ct: 1557898494, upgrades: [ ] ]",
    value_id: 1
  },
  {
    distance: 5,
    node: "GDRM4",
    qset: {
      t: 3,
      v: [
        "SDF_validator_1",
        "SDF_validator_2",
        "SDF_validator_3",
        {
          t: 3,
          v: ["GDIQK", "Eno", "Tempo", "SatoshiPay__DE__Frankfurt_"]
        }
      ]
    },
    status: "missing"
  },
  {
    distance: 6,
    node: "GoodX_Network__DE_",
    status: "missing"
  },
  {
    distance: 6,
    node: "republic_co",
    status: "missing"
  },
  {
    distance: 6,
    node: "Stronghold_3__Europe_",
    status: "missing"
  },
  {
    distance: 6,
    node: "GDIQK",
    status: "missing"
  }
];

export default nodes;
