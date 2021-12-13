// when adding projects add to one of the underlying categories (dApps, infra, misc, mobile, nfts, rollups, wallets)
// use #30DE88 for LIVE, #F4E532 for SOON, #F4B832 for TESTNET
// when adding projects take care with networks formatting, supported network values for now: zksync, starknet, starkware, polygon, loopring
export const projects = {
  rollups: [
    {
      name: "zkSync",
      category: "zkRollup",
      description:
        "zkSync is a user-centric zkRollup platform from Matter Labs. It is a scaling solution for Ethereum, already live on Ethereum mainnet.",
      imageLink: "url('project-logos/zksync.jpg')",
      tooltip: "zkSync",
      networks: ["zksync"],
      twitterLink: "https://twitter.com/zksync",
      websiteLink: "https://zksync.io/",
      status: "LIVE",
      statusColor: "#30DE88",
    },
    {
      name: "StarkWare",
      category: "zkRollup",
      description:
        "The StarkWare StarkNet network is a permissionless decentralized ZK-Rollup.",
      imageLink: "url('project-logos/starkware.jpg')",
      tooltip: "StarkNet",
      networks: ["starknet"],
      twitterLink: "https://twitter.com/StarkWareLtd",
      websiteLink: "https://starkware.co/",
      status: "LIVE",
      statusColor: "#30DE88",
    },
    {
      name: "Loopring",
      category: "zkRollup",
      description:
        "Loopring is a zkRollup layer2. It allows for high-throughput, low-cost trading and payment on Ethereum.",
      imageLink: "url('project-logos/loopring.jpg')",
      tooltip: "Loopring",
      networks: ["loopring"],
      twitterLink: "https://twitter.com/loopringorg",
      websiteLink: "http://loopring.io/",
      status: "LIVE",
      statusColor: "#30DE88",
    },
    {
      name: "ZKSwap",
      category: "zkRollup",
      description: "ZK-Rollups based Layer-2 DEX with the AMM model.",
      imageLink: "url('project-logos/zkswap.jpg')",
      tooltip: "ZKSwap",
      networks: ["zksync"],
      twitterLink: "https://twitter.com/ZKSwapOfficial",
      websiteLink: "https://zks.org",
      status: "LIVE",
      statusColor: "#30DE88",
    },
    {
      name: "Polygon Hermez",
      category: "zkRollup",
      description:
        "Polygon Hermez is an open-source ZK-Rollup optimised for secure, low-cost and usable token transfers on the wings of Ethereum.",
      imageLink: "url('project-logos/hermez.jpg')",
      tooltip: "Polygon Hermez",
      networks: ["polygon"],
      twitterLink: "https://twitter.com/0xPolygonHermez",
      websiteLink: "https://hermez.io/",
      status: "LIVE",
      statusColor: "#30DE88",
    },
    {
      name: "Aztec",
      category: "zkRollup",
      description:
        "Aztec is an open source Layer 2 network bringing scalability and privacy too Ethereum. Aztec uses zkSNARK proofs to provide privacy and scaling.",
      imageLink: "url('project-logos/aztec.jpg')",
      tooltip: "Aztec",
      networks: ["aztec"],
      twitterLink: "https://twitter.com/aztecnetwork",
      websiteLink: "https://aztec.network/",
      status: "LIVE",
      statusColor: "#30DE88",
    },
    {
      name: "Polygon Miden",
      category: "zkRollup",
      description:
        "Polygon Miden, is an upcoming STARK-based, EVM-compatible rollup.",
      imageLink: "url('project-logos/miden.jpg')",
      tooltip: "Polygon Miden",
      networks: ["polygon"],
      twitterLink: "https://twitter.com/0xPolygon",
      websiteLink: "https://github.com/maticnetwork/miden",
      status: "DEVELOPMENT",
      statusColor: "##",
    },
    {
      name: "zkTube",
      category: "zkRollup",
      description:
        "zktube is a protocol with ZK Rollup solutions of zero knowledge proof building for users and developers.",
      imageLink: "url('project-logos/zktube.jpg')",
      tooltip: "zkTube",
      networks: ["zksync"],
      twitterLink: "https://twitter.com/zktubeofficial/",
      websiteLink: "https://zktube.io/",
      status: "LIVE",
      statusColor: "#30DE88",
    },
    {
      name: "Scroll",
      category: "zkRollup",
      description:
        "Scroll Tech aims to build an EVM-compatible zk-Rollup with a strong proving network.",
      imageLink: "url('project-logos/scroll.png')",
      tooltip: "Scroll",
      networks: ["zksync"],
      twitterLink: "https://twitter.com/Scroll_ZKP",
      websiteLink: "https://scroll.tech/",
      status: "DEVELOPMENT",
      statusColor: "##",
    },
    {
      name: "Polygon Zero",
      category: "zkRollup",
      description: "Polygon Zero is a highly-scalable, Ethereum-compatible ZK Rollup,",
      imageLink: "url('project-logos/polygonzero.jpg')",
      tooltip: "Polygon Zero",
      networks: ["polygon"],
      twitterLink: "https://twitter.com/mirprotocol",
      websiteLink: "https://mirprotocol.org/",
      status: "DEVELOPMENT",
      statusColor: "##",
    },
    {
      name: "Edgeswap",
      category: "zkRollup",
      description: "Edgeswap is an Ethereum-based (Layer 2) zkRollup Protocol.",
      imageLink: "url('project-logos/edgeswap.jpg')",
      tooltip: "Edgeswap",
      networks: ["Edgeswap"],
      twitterLink: "https://twitter.com/EdgeSwap",
      websiteLink: "https://edgeswap.io/",
      status: "TESTNET",
      statusColor: "#F4B832",
    },
  ],
wallets: [
    {
      name: "Numio",
      category: "Mobile Wallet",
      description:
        "Numio is a non-custodial Ethereum L2 (zkSync) wallet that lets you send, store, buy & swap tokens, interact with dApps and more. Available on Android & iOS.",
      imageLink: "url('project-logos/numio.jpg')",
      tooltip: "zkSync",
      networks: ["zksync"],
      twitterLink: "https://twitter.com/getnumio",
      websiteLink: "https://numio.one",
      googlePlay: "https://play.google.com/store/apps/details?id=com.numio.pay",
      appleStore: "https://apps.apple.com/us/app/numio/id1538072952",
      status: "LIVE",
      statusColor: "#30DE88",
    },
    {
      name: "zkSync",
      category: "Web Wallet",
      description:
        "The native web wallet for the zkRollup network from zkSync.",
      imageLink: "url('project-logos/zksync.jpg')",
      tooltip: "zkSync",
      networks: ["zksync"],
      twitterLink: "https://twitter.com/zksync",
      websiteLink: "https://wallet.zksync.io/",
      status: "LIVE",
      statusColor: "#30DE88",
    },
    {
      name: "Loopring",
      category: "Mobile & Web Wallet",
      description:
        "Loopring Wallet integrates Loopring's zkRollup, a layer-2 scaling protocol to increase speeds and lower fees.",
      imageLink: "url('project-logos/loopring.jpg')",
      tooltip: "Loopring",
      networks: ["loppring"],
      twitterLink: "https://twitter.com/loopringorg",
      websiteLink: "http://loopring.io/",
      status: "LIVE",
      statusColor: "#30DE88",
    },
    {
      name: "imToken",
      category: "Mobile Wallet",
      description:
        "imToken is an easy and secure digital wallet trusted by millions.",
      imageLink: "url('project-logos/imtoken.jpg')",
      tooltip: "zkSync",
      networks: ["zksync"],
      twitterLink: "https://twitter.com/imTokenOfficial",
      websiteLink: "https://token.im/",
      status: "LIVE",
      statusColor: "#30DE88",
    },
    {
      name: "ZKSwap",
      category: "Mobile & Web Wallet",
      description: "ZK-Rollups based Layer-2 DEX with the AMM model.",
      imageLink: "url('project-logos/zkswap.jpg')",
      tooltip: "ZKSwap",
      networks: ["zksync"],
      twitterLink: "https://twitter.com/ZKSwapOfficial",
      websiteLink: "https://zks.org",
      status: "LIVE",
      statusColor: "#30DE88",
    },
    {
      name: "Argent",
      category: "Mobile Wallet",
      description:
        "Argent is the most simple and secure smart wallet for crypto. Store and send; earn interest and invest.",
      imageLink: "url('project-logos/argent.jpg')",
      tooltip: "zkSync, StarkNet",
      networks: ["zksync", "starknet"],
      twitterLink: "https://twitter.com/argentHQ",
      websiteLink: "https://www.argent.xyz/",
      status: "BETA",
      statusColor: "#F4E532",
    },
  ],
dApps: [
    {
      name: "DeversiFi",
      category: "Dapp",
      description:
        "A decentralised exchange for accessing DeFi opportunities on Ethereum: invest, trade, and send tokens without paying gas fees.",
      imageLink: "url('project-logos/diversifi.jpg')",
      tooltip: "StarkNet",
      networks: ["starknet"],
      twitterLink: "https://twitter.com/deversifi",
      websiteLink: "https://deversifi.com/",
      status: "LIVE",
      statusColor: "#30DE88",
    },
    {
      name: "dydx",
      category: "Dapp & Rollup",
      description:
        "Trade Perpetual Contracts with low fees, deep liquidity, and up to 25× leverage.",
      imageLink: "url('project-logos/dydx.png')",
      tooltip: "Starkware (Custom)",
      networks: ["starkware"],
      twitterLink: "https://twitter.com/dydxprotocol",
      websiteLink: "https://dydx.exchange/",
      status: "LIVE",
      statusColor: "#30DE88",
    },
    {
      name: "Sorare",
      category: "Dapp & Rollup",
      description:
        "Experience true football connection in The Global Fantasy Football Game! Trade & collect digital cards.",
      imageLink: "url('project-logos/sorare.png')",
      tooltip: "Starkware (Custom)",
      networks: ["starkware"],
      twitterLink: "https://twitter.com/Sorare",
      websiteLink: "https://sorare.com/",
      status: "LIVE",
      statusColor: "#30DE88",
    },
    {
      name: "Immutable",
      category: "Dapp & Rollup",
      description:
        "Ethereum NFT scaling platform. Zero gas fees, 9K TPS & 100% carbon neutral.",
      imageLink: "url('project-logos/immutable.png')",
      tooltip: "Starkware (Custom)",
      networks: ["starkware"],
      twitterLink: "https://twitter.com/Immutable",
      websiteLink: "https://www.immutable.com/",
      status: "LIVE",
      statusColor: "#30DE88",
    },
    {
      name: "Curve",
      category: "Dapp",
      description:
        "Creating deep on-chain liquidity using advanced bonding curves.",
      imageLink: "url('project-logos/curvefi.jpg')",
      tooltip: "zkSync",
      networks: ["zksync"],
      twitterLink: "https://twitter.com/CurveFinance",
      websiteLink: "https://zksync.curve.fi/",
      status: "TESTNET",
      statusColor: "#F4B832",
    },
    {
      name: "ZigZag",
      category: "Dapp",
      description:
        "ZigZag is a native, easy-to-use, reliable, fully secure and low fee Decentralized Exchange built on ZK Rollups.",
      imageLink: "url('project-logos/zigzag.jpg')",
      tooltip: "zkSync, StarkWare",
      networks: ["zksync", "starkware"],
      twitterLink: "https://mobile.twitter.com/zigzagexchange",
      websiteLink: "https://info.zigzag.exchange/",
      status: "LIVE",
      statusColor: "#30DE88",
    },
    {
      name: "Paraswap",
      category: "Dapp",
      description:
        "ParaSwap aggregates decentralized exchanges and other DeFi services in one comprehensive interface to streamline and facilitate users' interactions with Ethereum's decentralized finance.",
      imageLink: "url('project-logos/paraswap.jpg')",
      tooltip: "zkSync",
      networks: ["zksync"],
      twitterLink: "https://twitter.com/paraswap",
      websiteLink: "https://paraswap.io",
      status: "BETA",
      statusColor: "#F4E532",
    },
    {
      name: "Gitcoin",
      category: "Dapp",
      description:
        "Gitcoin grant contibutors can save on gas fees by paying using the zkSync or Loopring networks.",
      imageLink: "url('project-logos/gitcoin.jpg')",
      tooltip: "zkSync, Loopring",
      networks: ["zksync", "loopring"],
      twitterLink: "https://twitter.com/gitcoin",
      websiteLink: "https://gitcoin.co/",
      status: "LIVE",
      statusColor: "#30DE88",
    },
    {
      name: "Mute",
      category: "Dapp",
      description:
        "Mute is an easy-to-use L2 swap platform that runs on Ethereum.",
      imageLink: "url('project-logos/mute.jpg')",
      tooltip: "zkSync",
      networks: ["zksync"],
      twitterLink: "https://twitter.com/mute_io",
      websiteLink: "https://mute.io/",
      status: "LIVE",
      statusColor: "#30DE88",
    },
    {
      name: "Storj",
      category: "Dapp",
      description:
        "Storj Hosts (Storage Node Operators) can elect to receive their payments via zkSync.",
      imageLink: "url('project-logos/storj.jpg')",
      tooltip: "zkSync",
      networks: ["zksync"],
      twitterLink: "https://twitter.com/storj",
      websiteLink: "https://www.storj.io/",
      status: "LIVE",
      statusColor: "#30DE88",
    },
    {
      name: "Golem",
      category: "Dapp",
      description:
        "Golem Node Operators can choose to receive their payments via zkSync.",
      imageLink: "url('project-logos/golem.jpg')",
      tooltip: "zkSync",
      networks: ["zksync"],
      twitterLink: "https://twitter.com/golemproject",
      websiteLink: "https://www.golem.network/",
      status: "LIVE",
      statusColor: "#30DE88",
    },
    {
      name: "Rails",
      category: "Dapp",
      description: "Rails is a Layer 2 payment dApp powered by Loopring.",
      imageLink: "url('project-logos/rails.jpg')",
      tooltip: "Loopring",
      networks: ["loopring"],
      twitterLink: "https://twitter.com/Rails_eth",
      websiteLink: "https://rails.eth.link/",
      status: "LIVE",
      statusColor: "#30DE88",
    },
    {
      name: "pNetwork",
      category: "Dapp",
      description:
        "pTokens aims to be a decentralized open-source system facilitating cross-chain movement of assets.",
      imageLink: "url('project-logos/pnetwork.jpg')",
      tooltip: "Loopring",
      networks: ["loopring"],
      twitterLink: "https://twitter.com/pNetworkDeFi",
      websiteLink: "https://p.network/",
      status: "LIVE",
      statusColor: "#30DE88",
    },
    {
      name: "IBetYou",
      category: "Dapp",
      description:
        "A smarter way to place and track your bets. Keep ‘em all in one place, make sure no one bails out, and win money in your favorite cryptocurrency.",
      imageLink: "url('project-logos/ibetyou.jpg')",
      tooltip: "StarkNet",
      networks: ["starknet"],
      twitterLink: "https://twitter.com/ibetyouxyz",
      websiteLink: "https://ibetyou.xyz/",
      status: "LIVE",
      statusColor: "#30DE88",
    },
    {
      name: "Maker Wormhole",
      category: "Dapp",
      description:
        "DAI Wormholing - the ability for almost instant teleportation of DAI between supported Layer 2s + Ethereum.",
      imageLink: "url('project-logos/wormhole.jpg')",
      tooltip: "StarkNet",
      networks: ["starknet"],
      twitterLink: "https://twitter.com/makerdao",
      websiteLink:
        "https://forum.makerdao.com/t/introducing-maker-wormhole/11550",
      status: "DEVELOPMENT",
      statusColor: "##",
    },
    {
      name: "Akropolis",
      category: "Dapp",
      description:
        "DeFi yield on autopilot. An easy to use interface for financial operations and decision-making.",
      imageLink: "url('project-logos/akropolis.jpg')",
      tooltip: "StarkNet",
      networks: ["starknet"],
      twitterLink: "https://twitter.com/akropolisio",
      websiteLink: "https://www.akropolis.io/",
      status: "DEVELOPMENT",
      statusColor: "##",
    },
    {
      name: "StarkVote",
      category: "Dapp",
      description: "Decentralized Trusted voting on Starknet by Snapshot Labs.",
      imageLink: "url('project-logos/snapshot.jpg')",
      tooltip: "StarkNet",
      networks: ["starknet"],
      twitterLink: "https://twitter.com/SnapshotLabs",
      websiteLink: "https://snapshot.org/#/",
      status: "DEVELOPMENT",
      statusColor: "##",
    },
  ],
  infra: [
    {
      name: "The Graph",
      category: "Infra",
      description:
        "The Graph is an indexing protocol for querying networks like Ethereum and IPFS. Anyone can build and publish open APIs, called subgraphs, making data easily accessible.",
      imageLink: "url('project-logos/thegraph.jpg')",
      tooltip: "zkSync",
      networks: ["zksync"],
      twitterLink: "https://twitter.com/graphprotocol",
      websiteLink: "https://thegraph.com/",
      status: "SOON",
      statusColor: "#F4E532",
    },
  ],
  nfts: [
    {
      name: "zkNFT",
      category: "NFT",
      description:
        "Mint, explore, and swap NFTs for a fraction of Ethereum mainnet costs. zkSync makes transactions fast, cheap, and secure.",
      imageLink: "url('project-logos/zkNFT.jpg')",
      tooltip: "zkSync",
      networks: ["zksync"],
      twitterLink: "https://twitter.com/0xmons",
      websiteLink: "https://zknft.xyz/",
      status: "LIVE",
      statusColor: "#30DE88",
    },
    {
      name: "zkPunks",
      category: "NFT",
      description:
        "zkPunks are 10,000 OG punk NFTs on zkSync. 10% donated to Ethereum scaling solutions through Gitcoin. Not affiliated with Larva Labs.",
      imageLink: "url('project-logos/zkpunks.jpg')",
      tooltip: "zkSync",
      networks: ["zksync"],
      twitterLink: "https://twitter.com/PunksZk",
      websiteLink: "#",
      status: "DEVELOPMENT",
      statusColor: "##",
    },
    {
      name: "Dope Wars",
      category: "NFT",
      description:
        "The pursuit of money, power & respect in these NFT streets. Join the community, we're producing a game on Ethereum+StarkNet, inspired by the TI-83 classic",
      imageLink: "url('project-logos/dopewars.jpg')",
      tooltip: "StarkNet",
      networks: ["starkware"],
      twitterLink: "https://twitter.com/TheDopeWars",
      websiteLink: "https://dopewars.gg/",
      status: "LIVE",
      statusColor: "#30DE88",
    },
    {
      name: "Briq",
      category: "NFT",
      description:
        "A system where NFTs made out of building blocks, Briqs, that combine to create other NFTs.",
      imageLink: "url('project-logos/briq.jpg')",
      tooltip: "StarkNet",
      networks: ["starknet"],
      twitterLink: "https://twitter.com/briqs_",
      websiteLink: "https://briq.construction/",
      status: "DEVELOPMENT",
      statusColor: "##",
    },
    {
      name: "Influence",
      category: "NFT",
      description:
        "A grand strategy space MMO, backed by NFTs, set in a distant asteroid belt, and built on Ethereum.",
      imageLink: "url('project-logos/influence.jpg')",
      tooltip: "StarkNet",
      networks: ["starknet"],
      twitterLink: "https://twitter.com/influenceth",
      websiteLink: "https://www.influenceth.io/",
      status: "DEVELOPMENT",
      statusColor: "##",
    },
    {
      name: "Loot",
      category: "NFT",
      description:
        "A MMOCCG (Massively Multiplayer on-chain composable game) of economics and Chivalry built on-top of ZK-STARKS. Earn resources, trade and conquer your enemies all on-chain.",
      imageLink: "url('project-logos/loot.jpg')",
      tooltip: "StarkNet",
      networks: ["starknet"],
      twitterLink: "https://twitter.com/LootRealms",
      websiteLink: "https://bibliothecaforloot.com/",
      status: "DEVELOPMENT",
      statusColor: "##",
    },
  ],
    misc: [
    {
      name: "Physics puzzle on StarkNet",
      category: "Misc",
      description: "A physics puzzle on StarkNet by guiltygyoza.",
      imageLink: "url('project-logos/github.jpg')",
      tooltip: "StarkNet",
      networks: ["starknet"],
      GithubLink: "https://github.com/guiltygyoza/physics-puzzle-starknet",
      status: "Development",
      statusColor: "##",
    },
    {
      name: "Qasr",
      category: "Misc",
      description: "Qasr is a simple NFT bridge for Starknet by mortimr.",
      imageLink: "url('project-logos/github.jpg')",
      tooltip: "StarkNet",
      networks: ["starknet"],
      GithubLink: "https://github.com/mortimr/qasr",
      status: "Development",
      statusColor: "##",
    },
    {
      name: "Starknet DAI Bridge",
      category: "Misc",
      description: "StarkNet interpretation of DAI token and basic DAI bridge.",
      imageLink: "url('project-logos/github.jpg')",
      tooltip: "StarkNet",
      networks: ["starknet"],
      GithubLink: "https://github.com/makerdao/starknet-dai-bridge",
      status: "Development",
      statusColor: "##",
    },
    {
      name: "rk4-starknet",
      category: "Misc",
      description:
        "Running Runge-Kutta 4th Order Method on StarkNet - a precurosr to on-chain physics engine.",
      imageLink: "url('project-logos/github.jpg')",
      tooltip: "StarkNet",
      networks: ["starknet"],
      GithubLink: "https://github.com/guiltygyoza/rk4-starknet",
      status: "Development",
      statusColor: "##",
    },
    {
      name: "StarDrop - anonymous rewards on StarkNet",
      category: "Misc",
      description:
        "An experimental project to distribute rewards in a privacy-preserving manner running on StarkNet.",
      imageLink: "url('project-logos/github.jpg')",
      tooltip: "StarkNet",
      networks: ["starknet"],
      GithubLink: "https://github.com/kobigurk/stardrop",
      status: "Development",
      statusColor: "##",
    },
    {
      name: "tictactoe-on-starknet",
      category: "Misc",
      description:
        "RL-driven agent playing tic-tac-toe on starknet against challengers.",
      imageLink: "url('project-logos/github.jpg')",
      tooltip: "StarkNet",
      networks: ["starknet"],
      GithubLink: "https://github.com/guiltygyoza/tictactoe-on-starknet",
      status: "Development",
      statusColor: "##",
    },
    {
      name: "Basic Sample Hardhat Project",
      category: "Misc",
      description:
        "This project demonstrates a basic Hardhat project, but with Starknet plugin.",
      imageLink: "url('project-logos/github.jpg')",
      tooltip: "StarkNet",
      networks: ["starknet"],
      GithubLink: "https://github.com/Shard-Labs/starknet-hardhat-example",
      status: "Development",
      statusColor: "##",
    },
    {
      name: "Starkops",
      category: "Misc",
      description:
        " StarkNet Toolchain CLI written in TypeScript by seanjameshan.",
      imageLink: "url('project-logos/github.jpg')",
      tooltip: "StarkNet",
      networks: ["starknet"],
      GithubLink: "https://github.com/seanjameshan/starkops",
      status: "Development",
      statusColor: "##",
    },
  ],

};
