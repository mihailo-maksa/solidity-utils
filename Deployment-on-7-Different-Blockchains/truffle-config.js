// [GANACHE CONFIG]

// module.exports = {
//   networks: {
//     //
//   },
//   mocha: {
//     // timeout: 100000
//   },
//   compilers: {
//     solc: {
//       version: '0.8.6',
//     },
//   },

//   db: {
//     enabled: false,
//   },
// }

// -------------------------------------------------------

// // [ETHEREUM CONFIG]

require('dotenv').config()
const HDWalletProvider = require('@truffle/hdwallet-provider')
const privateKeys = ['0x' + process.env.PRIVATE_KEY]

module.exports = {
  networks: {
    eth: {
      provider: () => new HDWalletProvider(privateKeys, 'ETH_NODE_URL'),
      network_id: 1,
      skipDryRun: true,
    },
    ethTestnet: {
      provider: () => new HDWalletProvider(privateKeys, 'ETH_NODE_URL'),
      network_id: 5, // Goerli Testnet
      skipDryRun: true,
    },
  },
  mocha: {
    // timeout: 100000
  },
  compilers: {
    solc: {
      version: '0.8.6',
    },
  },
  db: {
    enabled: false,
  },
}

// // -------------------------------------------------------

// // [POLYGON CONFIG]

// require('dotenv').config()
// const HDWalletProvider = require('@truffle/hdwallet-provider')
// const privateKeys = ['0x' + process.env.PRIVATE_KEY]

// module.exports = {
//   networks: {
//     polygon: {
//       provider: () =>
//         new HDWalletProvider(privateKeys, 'https://rpc-mainnet.matic.network'),
//       network_id: 137,
//       skipDryRun: true,
//     },
//     polygonTestnet: {
//       provider: () =>
//         new HDWalletProvider(privateKeys, 'https://rpc-mumbai.maticvigil.com'),
//       network_id: 80001,
//       skipDryRun: true,
//     },
//   },
//   mocha: {
//     // timeout: 100000
//   },
//   compilers: {
//     solc: {
//       version: '0.8.6',
//     },
//   },
//   db: {
//     enabled: false,
//   },
// }

// // -------------------------------------------------------

// // [OPTIMISM CONFIG]

// require('dotenv').config()
// const HDWalletProvider = require('@truffle/hdwallet-provider')
// const privateKeys = ['0x' + process.env.PRIVATE_KEY]

// module.exports = {
//   networks: {
//     optimistic: {
//       provider: () =>
//         new HDWalletProvider(privateKeys, 'https://mainnet.optimism.io'),
//       network_id: 10,
//       skipDryRun: true,
//     },
//     optimisticTestnet: {
//       provider: () =>
//         new HDWalletProvider(privateKeys, 'https://kovan.optimism.io'),
//       gas: 10000000,
//       gasPrice: 15000000,
//       network_id: 69,
//       skipDryRun: true,
//     },
//   },
//   mocha: {
//     // timeout: 100000
//   },
//   compilers: {
//     solc: {
//       version: '0.8.6',
//     },
//   },
//   db: {
//     enabled: false,
//   },
// }

// // -------------------------------------------------------

// // [BSC CONFIG]

// require('dotenv').config()
// const HDWalletProvider = require('@truffle/hdwallet-provider')
// const privateKeys = ['0x' + process.env.PRIVATE_KEY]

// module.exports = {
//   networks: {
//     bsc: {
//       provider: () =>
//         new HDWalletProvider(privateKeys, 'https://bsc-dataseed.binance.org/'),
//       network_id: 56,
//       skipDryRun: true,
//     },
//     bscTestnet: {
//       provider: () =>
//         new HDWalletProvider(
//           privateKeys,
//           'https://data-seed-prebsc-1-s1.binance.org:8545/',
//         ),
//       network_id: 97,
//       skipDryRun: true,
//     },
//   },
//   mocha: {
//     // timeout: 100000
//   },
//   compilers: {
//     solc: {
//       version: '0.8.6',
//     },
//   },
//   db: {
//     enabled: false,
//   },
// }

// // -------------------------------------------------------

// // [HECO CONFIG]

// require('dotenv').config()
// const HDWalletProvider = require('@truffle/hdwallet-provider')
// const privateKeys = ['0x' + process.env.PRIVATE_KEY]

// module.exports = {
//   networks: {
//     heco: {
//       provider: () =>
//         new HDWalletProvider(privateKeys, 'https://http-mainnet.hecochain.com'),
//       network_id: 128,
//       skipDryRun: true,
//     },
//     hecoTestnet: {
//       provider: () =>
//         new HDWalletProvider(privateKeys, 'https://http-testnet.hecochain.com'),
//       network_id: 256,
//       skipDryRun: true,
//     },
//   },
//   mocha: {
//     // timeout: 100000
//   },
//   compilers: {
//     solc: {
//       version: '0.8.6',
//     },
//   },
//   db: {
//     enabled: false,
//   },
// }

// // -------------------------------------------------------

// // [KCC CONFIG]

// require('dotenv').config()
// const HDWalletProvider = require('@truffle/hdwallet-provider')
// const privateKeys = ['0x' + process.env.PRIVATE_KEY]

// module.exports = {
//   networks: {
//     kcc: {
//       provider: () =>
//         new HDWalletProvider(privateKeys, 'https://rpc-mainnet.kcc.network'),
//       network_id: 321,
//       skipDryRun: true,
//     },
//     kccTestnet: {
//       provider: () =>
//         new HDWalletProvider(privateKeys, 'https://rpc-testnet.kcc.network'),
//       network_id: 322,
//       skipDryRun: true,
//     },
//   },
//   mocha: {
//     // timeout: 100000
//   },
//   compilers: {
//     solc: {
//       version: '0.8.6',
//     },
//   },
//   db: {
//     enabled: false,
//   },
// }

// // -------------------------------------------------------

// // [AVALANCHE C-CHAIN CONFIG]

// require('dotenv').config()
// const HDWalletProvider = require('@truffle/hdwallet-provider')
// const privateKeys = ['0x' + process.env.PRIVATE_KEY]

// module.exports = {
//   networks: {
//     avalanche: {
//       provider: () =>
//         new HDWalletProvider(
//           privateKeys,
//           'https://api.avax.network/ext/bc/C/rpc',
//         ),
//       network_id: 43114,
//       skipDryRun: true,
//     },
//     avalancheTestnet: {
//       provider: () =>
//         new HDWalletProvider(
//           privateKeys,
//           'https://api.avax-test.network/ext/bc/C/rpc',
//         ),
//       network_id: 43113,
//       skipDryRun: true,
//     },
//   },
//   mocha: {
//     // timeout: 100000
//   },
//   compilers: {
//     solc: {
//       version: '0.8.6',
//     },
//   },
//   db: {
//     enabled: false,
//   },
// }

// // -------------------------------------------------------

// // [HARMONY SHARD 0 CONFIG]

// require('dotenv').config()
// const HDWalletProvider = require('@truffle/hdwallet-provider')
// const privateKeys = ['0x' + process.env.PRIVATE_KEY]

// module.exports = {
//   networks: {
//     harmony: {
//       provider: () =>
//         new HDWalletProvider(privateKeys, 'https://api.harmony.one'),
//       network_id: 1666600000,
//       skipDryRun: true,
//     },
//     harmonyTestnet: {
//       provider: () =>
//         new HDWalletProvider(privateKeys, 'https://api.s0.pops.one'),
//       network_id: 1666700000,
//       skipDryRun: true,
//     },
//   },
//   mocha: {
//     // timeout: 100000
//   },
//   compilers: {
//     solc: {
//       version: '0.8.6',
//     },
//   },
//   db: {
//     enabled: false,
//   },
// }

// // -------------------------------------------------------

// // [FANTOM CONFIG]

// require('dotenv').config()
// const HDWalletProvider = require('@truffle/hdwallet-provider')
// const privateKeys = ['0x' + process.env.PRIVATE_KEY]

// module.exports = {
//   networks: {
//     fantom: {
//       provider: () =>
//         new HDWalletProvider(privateKeys, 'https://rpcapi.fantom.network'),
//       network_id: 250,
//       skipDryRun: true,
//     },
//     fantomTestnet: {
//       provider: () =>
//         new HDWalletProvider(privateKeys, 'https://rpc.testnet.fantom.network'),
//       network_id: '0xfa2',
//       skipDryRun: true,
//     },
//   },
//   mocha: {
//     // timeout: 100000
//   },
//   compilers: {
//     solc: {
//       version: '0.8.6',
//     },
//   },
//   db: {
//     enabled: false,
//   },
// }

// // -------------------------------------------------------
