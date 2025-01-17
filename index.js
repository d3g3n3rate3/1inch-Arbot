
const axios = require('axios'); 
const Web3 = require('web3'); 
const Common = require('ethereumjs-common').default; 
var Tx = require('ethereumjs-tx').Transaction; 
const web32 = new Web3("https://bsc-dataseed.binance.org/");
const color = require('chalk');
const UNISWAP = require('@uniswap/sdk')
console.log(`The chainId of mainnet is ${UNISWAP.ChainId.MAINNET}.`)

let BSCprovider = new Web3.providers.WebsocketProvider('wss://apis.ankr.com/wss/5e641e36678f450293097eb3a3542409/f95d9511a0c04e1812edfce68615b149/binance/full/main');


let web3 = new Web3(BSCprovider);
var privateKey = Buffer.from('369c628593b61a165f06e5949681e77e97a1f8695b53bd78dedc475a510651d6', 'hex');

const ADDRESS = '0xf12aC456dA1BcD35561E2ba265cD8061dA393f8D';
let presetsURL = 'https://api.1inch.exchange/v3.0/56/presets';

let globalData = {}; 
let transaction; /
const binanceSmartChain = Common.forCustomChain(
    'mainnet', { 
        name: 'Binance',
        networkId: 56,
        chainId: 56,
    },
    'petersburg' 
)




// All tokens in 1Inch
let tokens = {
    "0x0000000000004946c0e9f43f4dee607b0ef1fa1c": {
        "symbol": "CHI",
        "name": "Chi Gastoken by 1inch",
        "decimals": 0,
        "address": "0x0000000000004946c0e9f43f4dee607b0ef1fa1c",
        "logoURI": "https://tokens.1inch.exchange/0x0000000000004946c0e9f43f4dee607b0ef1fa1c.png"
    },
    "0x55d398326f99059ff775485246999027b3197955": {
        "symbol": "USDT",
        "name": "Tether USD",
        "decimals": 18,
        "address": "0x55d398326f99059ff775485246999027b3197955",
        "logoURI": "https://tokens.1inch.exchange/0xdac17f958d2ee523a2206206994597c13d831ec7.png"
    },
    "0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82": {
        "symbol": "CAKE",
        "name": "PancakeSwap Token",
        "decimals": 18,
        "address": "0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82",
        "logoURI": "https://tokens.1inch.exchange/0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82.png"
    },
    "0xe9e7cea3dedca5984780bafc599bd69add087d56": {
        "symbol": "BUSD",
        "name": "BUSD Token",
        "decimals": 18,
        "address": "0xe9e7cea3dedca5984780bafc599bd69add087d56",
        "logoURI": "https://tokens.1inch.exchange/0x4fabb145d64652a948d72533023f6e7a623c7c53.png"
    },
    "0x2170ed0880ac9a755fd29b2688956bd959f933f8": {
        "symbol": "ETH",
        "name": "Ethereum Token",
        "decimals": 18,
        "address": "0x2170ed0880ac9a755fd29b2688956bd959f933f8",
        "logoURI": "https://tokens.1inch.exchange/0x2170ed0880ac9a755fd29b2688956bd959f933f8.png"
    },
    "0x7130d2a12b9bcbfae4f2634d864a1ee1ce3ead9c": {
        "symbol": "BTCB",
        "name": "BTCB Token",
        "decimals": 18,
        "address": "0x7130d2a12b9bcbfae4f2634d864a1ee1ce3ead9c",
        "logoURI": "https://tokens.1inch.exchange/0x7130d2a12b9bcbfae4f2634d864a1ee1ce3ead9c.png"
    },
    "0xa184088a740c695e156f91f5cc086a06bb78b827": {
        "symbol": "AUTO",
        "name": "AUTOv2",
        "decimals": 18,
        "address": "0xa184088a740c695e156f91f5cc086a06bb78b827",
        "logoURI": "https://tokens.1inch.exchange/0xa184088a740c695e156f91f5cc086a06bb78b827.png"
    },
    "0x5ac52ee5b2a633895292ff6d8a89bb9190451587": {
        "symbol": "BSCX",
        "name": "BSCX",
        "decimals": 18,
        "address": "0x5ac52ee5b2a633895292ff6d8a89bb9190451587",
        "logoURI": "https://tokens.1inch.exchange/0x5ac52ee5b2a633895292ff6d8a89bb9190451587.png"
    },
    "0x190b589cf9fb8ddeabbfeae36a813ffb2a702454": {
        "symbol": "BDO",
        "name": "bDollar",
        "decimals": 18,
        "address": "0x190b589cf9fb8ddeabbfeae36a813ffb2a702454",
        "logoURI": "https://tokens.1inch.exchange/0x190b589cf9fb8ddeabbfeae36a813ffb2a702454.png"
    },
    "0x7083609fce4d1d8dc0c979aab8c869ea2c873402": {
        "symbol": "DOT",
        "name": "DOT",
        "decimals": 18,
        "address": "0x7083609fce4d1d8dc0c979aab8c869ea2c873402",
        "logoURI": "https://tokens.1inch.exchange/0x7083609fce4d1d8dc0c979aab8c869ea2c873402.png"
    },
    "0x23396cf899ca06c4472205fc903bdb4de249d6fc": {
        "symbol": "UST",
        "name": "Wrapped UST Token",
        "decimals": 18,
        "address": "0x23396cf899ca06c4472205fc903bdb4de249d6fc",
        "logoURI": "https://tokens.1inch.exchange/0xa47c8bf37f92abed4a126bda807a7b7498661acd.png"
    },
    "0x4bd17003473389a42daf6a0a729f6fdb328bbbd7": {
        "symbol": "VAI",
        "name": "VAI Stablecoin",
        "decimals": 18,
        "address": "0x4bd17003473389a42daf6a0a729f6fdb328bbbd7",
        "logoURI": "https://tokens.1inch.exchange/0x4bd17003473389a42daf6a0a729f6fdb328bbbd7.png"
    },
    "0xbf5140a22578168fd562dccf235e5d43a02ce9b1": {
        "symbol": "UNI",
        "name": "Uniswap",
        "decimals": 18,
        "address": "0xbf5140a22578168fd562dccf235e5d43a02ce9b1",
        "logoURI": "https://tokens.1inch.exchange/0x1f9840a85d5af5bf1d1762f925bdaddc4201f984.png"
    },
    "0xf8a0bf9cf54bb92f17374d9e9a321e6a111a51bd": {
        "symbol": "LINK",
        "name": "ChainLink Token",
        "decimals": 18,
        "address": "0xf8a0bf9cf54bb92f17374d9e9a321e6a111a51bd",
        "logoURI": "https://tokens.1inch.exchange/0x514910771af9ca656af840dff83e8264ecf986ca.png"
    },
    "0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d": {
        "symbol": "USDC",
        "name": "USD Coin",
        "decimals": 18,
        "address": "0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d",
        "logoURI": "https://tokens.1inch.exchange/0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48.png"
    },
    "0x5cd50aae14e14b3fdf3ff13c7a40e8cf5ae8b0a5": {
        "symbol": "zSEED",
        "name": "zSeedToken",
        "decimals": 18,
        "address": "0x5cd50aae14e14b3fdf3ff13c7a40e8cf5ae8b0a5",
        "logoURI": "https://tokens.1inch.exchange/0x5cd50aae14e14b3fdf3ff13c7a40e8cf5ae8b0a5.png"
    },
    "0x1af3f329e8be154074d8769d1ffa4ee058b1dbc3": {
        "symbol": "DAI",
        "name": "Dai Token",
        "decimals": 18,
        "address": "0x1af3f329e8be154074d8769d1ffa4ee058b1dbc3",
        "logoURI": "https://tokens.1inch.exchange/0x6b175474e89094c44da98b954eedeac495271d0f.png"
    },
    "0xad6caeb32cd2c308980a548bd0bc5aa4306c6c18": {
        "symbol": "BAND",
        "name": "Band Protocol Token",
        "decimals": 18,
        "address": "0xad6caeb32cd2c308980a548bd0bc5aa4306c6c18",
        "logoURI": "https://tokens.1inch.exchange/0xba11d00c5f74255f56a5e366f4f77f5a186d7f55.png"
    },
    "0x8b303d5bbfbbf46f1a4d9741e491e06986894e18": {
        "symbol": "WOOP",
        "name": "Woonkly Power",
        "decimals": 18,
        "address": "0x8b303d5bbfbbf46f1a4d9741e491e06986894e18",
        "logoURI": "https://tokens.1inch.exchange/0x8b303d5bbfbbf46f1a4d9741e491e06986894e18.png"
    },
    "0x0d9319565be7f53cefe84ad201be3f40feae2740": {
        "symbol": "sBDO",
        "name": "bDollar Share",
        "decimals": 18,
        "address": "0x0d9319565be7f53cefe84ad201be3f40feae2740",
        "logoURI": "https://tokens.1inch.exchange/0x0d9319565be7f53cefe84ad201be3f40feae2740.png"
    },
    "0x3ee2200efb3400fabb9aacf31297cbdd1d435d47": {
        "symbol": "ADA",
        "name": "Cardano Token",
        "decimals": 18,
        "address": "0x3ee2200efb3400fabb9aacf31297cbdd1d435d47",
        "logoURI": "https://tokens.1inch.exchange/0x3ee2200efb3400fabb9aacf31297cbdd1d435d47.png"
    },
    "0xd41fdb03ba84762dd66a0af1a6c8540ff1ba5dfb": {
        "symbol": "SFP",
        "name": "SafePal Token",
        "decimals": 18,
        "address": "0xd41fdb03ba84762dd66a0af1a6c8540ff1ba5dfb",
        "logoURI": "https://tokens.1inch.exchange/0xd41fdb03ba84762dd66a0af1a6c8540ff1ba5dfb.png"
    },
    "0xcf6bb5389c92bdda8a3747ddb454cb7a64626c63": {
        "symbol": "XVS",
        "name": "Venus",
        "decimals": 18,
        "address": "0xcf6bb5389c92bdda8a3747ddb454cb7a64626c63",
        "logoURI": "https://tokens.1inch.exchange/0xcf6bb5389c92bdda8a3747ddb454cb7a64626c63.png"
    },
    "0x4b0f1812e5df2a09796481ff14017e6005508003": {
        "symbol": "TWT",
        "name": "Trust Wallet",
        "decimals": 18,
        "address": "0x4b0f1812e5df2a09796481ff14017e6005508003",
        "logoURI": "https://tokens.1inch.exchange/0x4b0f1812e5df2a09796481ff14017e6005508003.png"
    },
    "0xf952fc3ca7325cc27d15885d37117676d25bfda6": {
        "symbol": "EGG",
        "name": "Goose Golden Egg",
        "decimals": 18,
        "address": "0xf952fc3ca7325cc27d15885d37117676d25bfda6",
        "logoURI": "https://tokens.1inch.exchange/0xf952fc3ca7325cc27d15885d37117676d25bfda6.png"
    },
    "0x88f1a5ae2a3bf98aeaf342d26b30a79438c9142e": {
        "symbol": "YFI",
        "name": "yearn.finance",
        "decimals": 18,
        "address": "0x88f1a5ae2a3bf98aeaf342d26b30a79438c9142e",
        "logoURI": "https://tokens.1inch.exchange/0x0bc529c00c6401aef6d220be8c6ea1667f6ad93e.png"
    },
    "0xf859bf77cbe8699013d6dbc7c2b926aaf307f830": {
        "symbol": "BRY",
        "name": "Berry Tributes",
        "decimals": 18,
        "address": "0xf859bf77cbe8699013d6dbc7c2b926aaf307f830",
        "logoURI": "https://tokens.1inch.exchange/0xf859bf77cbe8699013d6dbc7c2b926aaf307f830.png"
    },
    "0x47bead2563dcbf3bf2c9407fea4dc236faba485a": {
        "symbol": "SXP",
        "name": "Swipe",
        "decimals": 18,
        "address": "0x47bead2563dcbf3bf2c9407fea4dc236faba485a",
        "logoURI": "https://tokens.1inch.exchange/0x8ce9137d39326ad0cd6491fb5cc0cba0e089b6a9.png"
    },
    "0x1d2f0da169ceb9fc7b3144628db156f3f6c60dbe": {
        "symbol": "XRP",
        "name": "XRP Token",
        "decimals": 18,
        "address": "0x1d2f0da169ceb9fc7b3144628db156f3f6c60dbe",
        "logoURI": "https://tokens.1inch.exchange/0x1d2f0da169ceb9fc7b3144628db156f3f6c60dbe.png"
    },
    "0x52ce071bd9b1c4b00a0b92d298c512478cad67e8": {
        "symbol": "COMP",
        "name": "Compound Coin",
        "decimals": 18,
        "address": "0x52ce071bd9b1c4b00a0b92d298c512478cad67e8",
        "logoURI": "https://tokens.1inch.exchange/0xc00e94cb662c3520282e6f5717214004a7f26888.png"
    },
    "0x4197c6ef3879a08cd51e5560da5064b773aa1d29": {
        "symbol": "ACS",
        "name": "ACryptoS",
        "decimals": 18,
        "address": "0x4197c6ef3879a08cd51e5560da5064b773aa1d29",
        "logoURI": "https://tokens.1inch.exchange/0x4197c6ef3879a08cd51e5560da5064b773aa1d29.png"
    },
    "0x0ec4b89462557150302ac6e81270a081f2e3bd20": {
        "symbol": "EARS",
        "name": "Ferengi Vaults",
        "decimals": 18,
        "address": "0x0ec4b89462557150302ac6e81270a081f2e3bd20",
        "logoURI": "https://tokens.1inch.exchange/0x0ec4b89462557150302ac6e81270a081f2e3bd20.png"
    },
    "0xf21768ccbc73ea5b6fd3c687208a7c2def2d966e": {
        "symbol": "REEF",
        "name": "Reef.finance",
        "decimals": 18,
        "address": "0xf21768ccbc73ea5b6fd3c687208a7c2def2d966e",
        "logoURI": "https://tokens.1inch.exchange/0xfe3e6a25e6b192a42a44ecddcd13796471735acf.png"
    },
    "0xa1faa113cbe53436df28ff0aee54275c13b40975": {
        "symbol": "ALPHA",
        "name": "AlphaToken",
        "decimals": 18,
        "address": "0xa1faa113cbe53436df28ff0aee54275c13b40975",
        "logoURI": "https://tokens.1inch.exchange/0xa1faa113cbe53436df28ff0aee54275c13b40975.png"
    },
    "0xa2b726b1145a4773f68593cf171187d8ebe4d495": {
        "symbol": "INJ",
        "name": "Injective Protocol",
        "decimals": 18,
        "address": "0xa2b726b1145a4773f68593cf171187d8ebe4d495",
        "logoURI": "https://tokens.1inch.exchange/0xe28b3b32b6c345a34ff64674606124dd5aceca30.png"
    },
    "0x7979f6c54eba05e18ded44c4f986f49a5de551c2": {
        "symbol": "KEBAB",
        "name": "Kebab Token",
        "decimals": 18,
        "address": "0x7979f6c54eba05e18ded44c4f986f49a5de551c2",
        "logoURI": "https://tokens.1inch.exchange/0x7979f6c54eba05e18ded44c4f986f49a5de551c2.png"
    },
    "0x541e619858737031a1244a5d0cd47e5ef480342c": {
        "symbol": "wSOTE",
        "name": "Wrapped SOTE",
        "decimals": 18,
        "address": "0x541e619858737031a1244a5d0cd47e5ef480342c",
        "logoURI": "https://tokens.1inch.exchange/0x541e619858737031a1244a5d0cd47e5ef480342c.png"
    },
    "0x56b6fb708fc5732dec1afc8d8556423a2edccbd6": {
        "symbol": "EOS",
        "name": "EOS Token",
        "decimals": 18,
        "address": "0x56b6fb708fc5732dec1afc8d8556423a2edccbd6",
        "logoURI": "https://tokens.1inch.exchange/0x56b6fb708fc5732dec1afc8d8556423a2edccbd6.png"
    },
    "0xc9849e6fdb743d08faee3e34dd2d1bc69ea11a51": {
        "symbol": "BUNNY",
        "name": "Bunny Token",
        "decimals": 18,
        "address": "0xc9849e6fdb743d08faee3e34dd2d1bc69ea11a51",
        "logoURI": "https://tokens.1inch.exchange/0xc9849e6fdb743d08faee3e34dd2d1bc69ea11a51.png"
    },
    "0x4338665cbb7b2485a8855a139b75d5e34ab0db94": {
        "symbol": "LTC",
        "name": "Litecoin Token",
        "decimals": 18,
        "address": "0x4338665cbb7b2485a8855a139b75d5e34ab0db94",
        "logoURI": "https://tokens.1inch.exchange/0x4338665cbb7b2485a8855a139b75d5e34ab0db94.png"
    },
    "0xb59490ab09a0f526cc7305822ac65f2ab12f9723": {
        "symbol": "LIT",
        "name": "Litentry",
        "decimals": 18,
        "address": "0xb59490ab09a0f526cc7305822ac65f2ab12f9723",
        "logoURI": "https://tokens.1inch.exchange/0xb59490ab09a0f526cc7305822ac65f2ab12f9723.png"
    },
    "0x8ff795a6f4d97e7887c79bea79aba5cc76444adf": {
        "symbol": "BCH",
        "name": "Bitcoin Cash Token",
        "decimals": 18,
        "address": "0x8ff795a6f4d97e7887c79bea79aba5cc76444adf",
        "logoURI": "https://tokens.1inch.exchange/0x8ff795a6f4d97e7887c79bea79aba5cc76444adf.png"
    },
    "0x948d2a81086a075b3130bac19e4c6dee1d2e3fe8": {
        "symbol": "Helmet",
        "name": "Helmet.insure Governance Token",
        "decimals": 18,
        "address": "0x948d2a81086a075b3130bac19e4c6dee1d2e3fe8",
        "logoURI": "https://tokens.1inch.exchange/0x948d2a81086a075b3130bac19e4c6dee1d2e3fe8.png"
    },
    "0x790be81c3ca0e53974be2688cdb954732c9862e1": {
        "symbol": "BREW",
        "name": "CafeSwap Token",
        "decimals": 18,
        "address": "0x790be81c3ca0e53974be2688cdb954732c9862e1",
        "logoURI": "https://tokens.1inch.exchange/0x790be81c3ca0e53974be2688cdb954732c9862e1.png"
    },
    "0x928e55dab735aa8260af3cedada18b5f70c72f1b": {
        "symbol": "FRONT",
        "name": "Frontier Token",
        "decimals": 18,
        "address": "0x928e55dab735aa8260af3cedada18b5f70c72f1b",
        "logoURI": "https://tokens.1inch.exchange/0xf8c3527cc04340b208c854e985240c02f7b7793f.png"
    },
    "0x78650b139471520656b9e7aa7a5e9276814a38e9": {
        "symbol": "BTCST",
        "name": "StandardBTCHashrateToken",
        "decimals": 17,
        "address": "0x78650b139471520656b9e7aa7a5e9276814a38e9",
        "logoURI": "https://tokens.1inch.exchange/0x78650b139471520656b9e7aa7a5e9276814a38e9.png"
    },
    "0x0d8ce2a99bb6e3b7db580ed848240e4a0f9ae153": {
        "symbol": "FIL",
        "name": "Filecoin",
        "decimals": 18,
        "address": "0x0d8ce2a99bb6e3b7db580ed848240e4a0f9ae153",
        "logoURI": "https://tokens.1inch.exchange/0x0d8ce2a99bb6e3b7db580ed848240e4a0f9ae153.png"
    },
    "0x233d91a0713155003fc4dce0afa871b508b3b715": {
        "symbol": "DITTO",
        "name": "Ditto",
        "decimals": 9,
        "address": "0x233d91a0713155003fc4dce0afa871b508b3b715",
        "logoURI": "https://tokens.1inch.exchange/0x233d91a0713155003fc4dce0afa871b508b3b715.png"
    },
    "0x0eb3a705fc54725037cc9e008bdede697f62f335": {
        "symbol": "ATOM",
        "name": "Cosmos Token",
        "decimals": 18,
        "address": "0x0eb3a705fc54725037cc9e008bdede697f62f335",
        "logoURI": "https://tokens.1inch.exchange/0x0eb3a705fc54725037cc9e008bdede697f62f335.png"
    },
    "0x111111111117dc0aa78b770fa6a738034120c302": {
        "symbol": "1INCH",
        "name": "1INCH Token",
        "decimals": 18,
        "address": "0x111111111117dc0aa78b770fa6a738034120c302",
        "logoURI": "https://tokens.1inch.exchange/0x111111111117dc0aa78b770fa6a738034120c302.png"
    },
    "0x2ff3d0f6990a40261c66e1ff2017acbc282eb6d0": {
        "symbol": "vSXP",
        "name": "Venus SXP",
        "decimals": 8,
        "address": "0x2ff3d0f6990a40261c66e1ff2017acbc282eb6d0",
        "logoURI": "https://tokens.1inch.exchange/0x2ff3d0f6990a40261c66e1ff2017acbc282eb6d0.png"
    },
    "0xeca88125a5adbe82614ffc12d0db554e2e2867c8": {
        "symbol": "vUSDC",
        "name": "Venus USDC",
        "decimals": 8,
        "address": "0xeca88125a5adbe82614ffc12d0db554e2e2867c8",
        "logoURI": "https://tokens.1inch.exchange/0xeca88125a5adbe82614ffc12d0db554e2e2867c8.png"
    },
    "0xfd5840cd36d94d7229439859c0112a4185bc0255": {
        "symbol": "vUSDT",
        "name": "Venus USDT",
        "decimals": 8,
        "address": "0xfd5840cd36d94d7229439859c0112a4185bc0255",
        "logoURI": "https://tokens.1inch.exchange/0xfd5840cd36d94d7229439859c0112a4185bc0255.png"
    },
    "0x95c78222b3d6e262426483d42cfa53685a67ab9d": {
        "symbol": "vBUSD",
        "name": "Venus BUSD",
        "decimals": 8,
        "address": "0x95c78222b3d6e262426483d42cfa53685a67ab9d",
        "logoURI": "https://tokens.1inch.exchange/0x95c78222b3d6e262426483d42cfa53685a67ab9d.png"
    },
    "0xa07c5b74c9b40447a954e1466938b865b6bbea36": {
        "symbol": "vBNB",
        "name": "Venus BNB",
        "decimals": 8,
        "address": "0xa07c5b74c9b40447a954e1466938b865b6bbea36",
        "logoURI": "https://tokens.1inch.exchange/0xa07c5b74c9b40447a954e1466938b865b6bbea36.png"
    },
    "0x151b1e2635a717bcdc836ecd6fbb62b674fe3e1d": {
        "symbol": "vXVS",
        "name": "Venus XVS",
        "decimals": 8,
        "address": "0x151b1e2635a717bcdc836ecd6fbb62b674fe3e1d",
        "logoURI": "https://tokens.1inch.exchange/0x151b1e2635a717bcdc836ecd6fbb62b674fe3e1d.png"
    },
    "0x882c173bc7ff3b7786ca16dfed3dfffb9ee7847b": {
        "symbol": "vBTC",
        "name": "Venus BTC",
        "decimals": 8,
        "address": "0x882c173bc7ff3b7786ca16dfed3dfffb9ee7847b",
        "logoURI": "https://tokens.1inch.exchange/0x882c173bc7ff3b7786ca16dfed3dfffb9ee7847b.png"
    },
    "0xf508fcd89b8bd15579dc79a6827cb4686a3592c8": {
        "symbol": "vETH",
        "name": "Venus ETH",
        "decimals": 8,
        "address": "0xf508fcd89b8bd15579dc79a6827cb4686a3592c8",
        "logoURI": "https://tokens.1inch.exchange/0xf508fcd89b8bd15579dc79a6827cb4686a3592c8.png"
    },
    "0x57a5297f2cb2c0aac9d554660acd6d385ab50c6b": {
        "symbol": "vLTC",
        "name": "Venus LTC",
        "decimals": 8,
        "address": "0x57a5297f2cb2c0aac9d554660acd6d385ab50c6b",
        "logoURI": "https://tokens.1inch.exchange/0x57a5297f2cb2c0aac9d554660acd6d385ab50c6b.png"
    },
    "0xb248a295732e0225acd3337607cc01068e3b9c10": {
        "symbol": "vXRP",
        "name": "Venus XRP",
        "decimals": 8,
        "address": "0xb248a295732e0225acd3337607cc01068e3b9c10",
        "logoURI": "https://tokens.1inch.exchange/0xb248a295732e0225acd3337607cc01068e3b9c10.png"
    },
    "0x5f0388ebc2b94fa8e123f404b79ccf5f40b29176": {
        "symbol": "vBCH",
        "name": "Venus BCH",
        "decimals": 8,
        "address": "0x5f0388ebc2b94fa8e123f404b79ccf5f40b29176",
        "logoURI": "https://tokens.1inch.exchange/0x5f0388ebc2b94fa8e123f404b79ccf5f40b29176.png"
    },
    "0x1610bc33319e9398de5f57b33a5b184c806ad217": {
        "symbol": "vDOT",
        "name": "Venus DOT",
        "decimals": 8,
        "address": "0x1610bc33319e9398de5f57b33a5b184c806ad217",
        "logoURI": "https://tokens.1inch.exchange/0x1610bc33319e9398de5f57b33a5b184c806ad217.png"
    },
    "0x650b940a1033b8a1b1873f78730fcfc73ec11f1f": {
        "symbol": "vLINK",
        "name": "Venus LINK",
        "decimals": 8,
        "address": "0x650b940a1033b8a1b1873f78730fcfc73ec11f1f",
        "logoURI": "https://tokens.1inch.exchange/0x650b940a1033b8a1b1873f78730fcfc73ec11f1f.png"
    },
    "0x972207a639cc1b374b893cc33fa251b55ceb7c07": {
        "symbol": "vBETH",
        "name": "Venus BETH",
        "decimals": 8,
        "address": "0x972207a639cc1b374b893cc33fa251b55ceb7c07",
        "logoURI": "https://tokens.1inch.exchange/0x972207a639cc1b374b893cc33fa251b55ceb7c07.png"
    },
    "0x334b3ecb4dca3593bccc3c7ebd1a1c1d1780fbf1": {
        "symbol": "vDAI",
        "name": "Venus DAI",
        "decimals": 8,
        "address": "0x334b3ecb4dca3593bccc3c7ebd1a1c1d1780fbf1",
        "logoURI": "https://tokens.1inch.exchange/0x334b3ecb4dca3593bccc3c7ebd1a1c1d1780fbf1.png"
    },
    "0xf91d58b5ae142dacc749f58a49fcbac340cb0343": {
        "symbol": "vFIL",
        "name": "Venus FIL",
        "decimals": 8,
        "address": "0xf91d58b5ae142dacc749f58a49fcbac340cb0343",
        "logoURI": "https://tokens.1inch.exchange/0xf91d58b5ae142dacc749f58a49fcbac340cb0343.png"
    },
    "0x250632378e573c6be1ac2f97fcdf00515d0aa91b": {
        "symbol": "BETH",
        "name": "Binance Beacon ETH",
        "decimals": 18,
        "address": "0x250632378e573c6be1ac2f97fcdf00515d0aa91b",
        "logoURI": "https://tokens.1inch.exchange/0x250632378e573c6be1ac2f97fcdf00515d0aa91b.png"
    },
    "0xe02df9e3e622debdd69fb838bb799e3f168902c5": {
        "symbol": "BAKE",
        "name": "BakeryToken",
        "decimals": 18,
        "address": "0xe02df9e3e622debdd69fb838bb799e3f168902c5",
        "logoURI": "https://tokens.1inch.exchange/0xe02df9e3e622debdd69fb838bb799e3f168902c5.png"
    },
    "0xfce146bf3146100cfe5db4129cf6c82b0ef4ad8c": {
        "symbol": "renBTC",
        "name": "renBTC",
        "decimals": 8,
        "address": "0xfce146bf3146100cfe5db4129cf6c82b0ef4ad8c",
        "logoURI": "https://tokens.1inch.exchange/0xfce146bf3146100cfe5db4129cf6c82b0ef4ad8c.png"
    },
    "0xa164b067193bd119933e5c1e7877421fce53d3e5": {
        "symbol": "renBCH",
        "name": "renBCH",
        "decimals": 8,
        "address": "0xa164b067193bd119933e5c1e7877421fce53d3e5",
        "logoURI": "https://tokens.1inch.exchange/0xa164b067193bd119933e5c1e7877421fce53d3e5.png"
    },
    "0x695fd30af473f2960e81dc9ba7cb67679d35edb7": {
        "symbol": "renZEC",
        "name": "renZEC",
        "decimals": 8,
        "address": "0x695fd30af473f2960e81dc9ba7cb67679d35edb7",
        "logoURI": "https://tokens.1inch.exchange/0x695fd30af473f2960e81dc9ba7cb67679d35edb7.png"
    },
    "0xdbf31df14b66535af65aac99c32e9ea844e14501": {
        "symbol": "renFIL",
        "name": "renFIL",
        "decimals": 18,
        "address": "0xdbf31df14b66535af65aac99c32e9ea844e14501",
        "logoURI": "https://tokens.1inch.exchange/0xdbf31df14b66535af65aac99c32e9ea844e14501.png"
    },
    "0xc4ace9278e7e01755b670c0838c3106367639962": {
        "symbol": "renLUNA",
        "name": "renLUNA",
        "decimals": 6,
        "address": "0xc4ace9278e7e01755b670c0838c3106367639962",
        "logoURI": "https://tokens.1inch.exchange/0xc4ace9278e7e01755b670c0838c3106367639962.png"
    },
    "0xc3fed6eb39178a541d274e6fc748d48f0ca01cc3": {
        "symbol": "renDOGE",
        "name": "renDOGE",
        "decimals": 8,
        "address": "0xc3fed6eb39178a541d274e6fc748d48f0ca01cc3",
        "logoURI": "https://tokens.1inch.exchange/0xc3fed6eb39178a541d274e6fc748d48f0ca01cc3.png"
    },
    "0x31a0d1a199631d244761eeba67e8501296d2e383": {
        "symbol": "renDGB",
        "name": "renDGB",
        "decimals": 8,
        "address": "0x31a0d1a199631d244761eeba67e8501296d2e383",
        "logoURI": "https://tokens.1inch.exchange/0x31a0d1a199631d244761eeba67e8501296d2e383.png"
    },
    "0x603c7f932ed1fc6575303d8fb018fdcbb0f39a95": {
        "symbol": "BANANA",
        "name": "ApeSwapFinance Banana",
        "decimals": 18,
        "address": "0x603c7f932ed1fc6575303d8fb018fdcbb0f39a95",
        "logoURI": "https://tokens.1inch.exchange/0x603c7f932ed1fc6575303d8fb018fdcbb0f39a95.png"
    },
    "0x5f0da599bb2cccfcf6fdfd7d81743b6020864350": {
        "symbol": "MKR",
        "name": "Maker",
        "decimals": 18,
        "address": "0x5f0da599bb2cccfcf6fdfd7d81743b6020864350",
        "logoURI": "https://tokens.1inch.exchange/0x9f8f72aa9304c8b593d555f12ef6589cc3a579a2.png"
    },
    "0x1ba42e5193dfa8b03d15dd1b86a3113bbbef8eeb": {
        "symbol": "ZEC",
        "name": "Zcash Token",
        "decimals": 18,
        "address": "0x1ba42e5193dfa8b03d15dd1b86a3113bbbef8eeb",
        "logoURI": "https://tokens.1inch.exchange/0x1ba42e5193dfa8b03d15dd1b86a3113bbbef8eeb.png"
    },
    "0x1fa4a73a3f0133f0025378af00236f3abdee5d63": {
        "symbol": "NEAR",
        "name": "NEAR Protocol",
        "decimals": 18,
        "address": "0x1fa4a73a3f0133f0025378af00236f3abdee5d63",
        "logoURI": "https://tokens.1inch.exchange/0x1fa4a73a3f0133f0025378af00236f3abdee5d63.png"
    },
    "0x3d6545b08693dae087e957cb1180ee38b9e3c25e": {
        "symbol": "ETC",
        "name": "Ethereum Classic",
        "decimals": 18,
        "address": "0x3d6545b08693dae087e957cb1180ee38b9e3c25e",
        "logoURI": "https://tokens.1inch.exchange/0x3d6545b08693dae087e957cb1180ee38b9e3c25e.png"
    },
    "0xfd7b3a77848f1c2d67e05e54d78d174a0c850335": {
        "symbol": "ONT",
        "name": "Ontology Token",
        "decimals": 18,
        "address": "0xfd7b3a77848f1c2d67e05e54d78d174a0c850335",
        "logoURI": "https://tokens.1inch.exchange/0xfd7b3a77848f1c2d67e05e54d78d174a0c850335.png"
    },
    "0x101d82428437127bf1608f699cd651e6abf9766e": {
        "symbol": "BAT",
        "name": "Basic Attention Token",
        "decimals": 18,
        "address": "0x101d82428437127bf1608f699cd651e6abf9766e",
        "logoURI": "https://tokens.1inch.exchange/0x0d8775f648430679a709e98d2b0cb6250d2887ef.png"
    },
    "0xb7f8cd00c5a06c0537e2abff0b58033d02e5e094": {
        "symbol": "PAX",
        "name": "Paxos Standard",
        "decimals": 18,
        "address": "0xb7f8cd00c5a06c0537e2abff0b58033d02e5e094",
        "logoURI": "https://tokens.1inch.exchange/0x8e870d67f660d95d5be530380d0ec0bd388289e1.png"
    },
    "0x67ee3cb086f8a16f34bee3ca72fad36f7db929e2": {
        "symbol": "DODO",
        "name": "DODO bird",
        "decimals": 18,
        "address": "0x67ee3cb086f8a16f34bee3ca72fad36f7db929e2",
        "logoURI": "https://tokens.1inch.exchange/0x43dfc4159d86f3a37a5a4b3d4580b888ad7d4ddd.png"
    },
    "0xd475c9c934dcd6d5f1cac530585aa5ba14185b92": {
        "symbol": "BCHA",
        "name": "Bitcoin Cash ABC",
        "decimals": 18,
        "address": "0xd475c9c934dcd6d5f1cac530585aa5ba14185b92",
        "logoURI": "https://tokens.1inch.exchange/0xd475c9c934dcd6d5f1cac530585aa5ba14185b92.png"
    },
    "0x9678e42cebeb63f23197d726b29b1cb20d0064e5": {
        "symbol": "IOTX",
        "name": "IoTeX Network",
        "decimals": 18,
        "address": "0x9678e42cebeb63f23197d726b29b1cb20d0064e5",
        "logoURI": "https://tokens.1inch.exchange/0x9678e42cebeb63f23197d726b29b1cb20d0064e5.png"
    },
    "0x5b6dcf557e2abe2323c48445e8cc948910d8c2c9": {
        "symbol": "MIR",
        "name": "Wrapped MIR Token",
        "decimals": 18,
        "address": "0x5b6dcf557e2abe2323c48445e8cc948910d8c2c9",
        "logoURI": "https://tokens.1inch.exchange/0x09a3ecafa817268f77be1283176b946c4ff2e608.png"
    },
    "0xf307910a4c7bbc79691fd374889b36d8531b08e3": {
        "symbol": "ANKR",
        "name": "Ankr",
        "decimals": 18,
        "address": "0xf307910a4c7bbc79691fd374889b36d8531b08e3",
        "logoURI": "https://tokens.1inch.exchange/0x8290333cef9e6d528dd5618fb97a76f268f3edd4.png"
    },
    "0x762539b45a1dcce3d36d080f74d1aed37844b878": {
        "symbol": "LINA",
        "name": "Linear Token",
        "decimals": 18,
        "address": "0x762539b45a1dcce3d36d080f74d1aed37844b878",
        "logoURI": "https://tokens.1inch.exchange/0x3e9bc21c9b189c09df3ef1b824798658d5011937.png"
    },
    "0xf218184af829cf2b0019f8e6f0b2423498a36983": {
        "symbol": "MATH",
        "name": "MATH Token",
        "decimals": 18,
        "address": "0xf218184af829cf2b0019f8e6f0b2423498a36983",
        "logoURI": "https://tokens.1inch.exchange/0x08d967bb0134f2d07f7cfb6e246680c53927dd30.png"
    },
    "0xa3f020a5c92e15be13caf0ee5c95cf79585eecc9": {
        "symbol": "ELF",
        "name": "ELF Token",
        "decimals": 18,
        "address": "0xa3f020a5c92e15be13caf0ee5c95cf79585eecc9",
        "logoURI": "https://tokens.1inch.exchange/0xbf2179859fc6d5bee9bf9158632dc51678a4100e.png"
    },
    "0x7950865a9140cb519342433146ed5b40c6f210f7": {
        "symbol": "PAXG",
        "name": "PAX Gold",
        "decimals": 18,
        "address": "0x7950865a9140cb519342433146ed5b40c6f210f7",
        "logoURI": "https://tokens.1inch.exchange/0x45804880de22913dafe09f4980848ece6ecbaf78.png"
    },
    "0xaf53d56ff99f1322515e54fdde93ff8b3b7dafd5": {
        "symbol": "PROM",
        "name": "Prometeus",
        "decimals": 18,
        "address": "0xaf53d56ff99f1322515e54fdde93ff8b3b7dafd5",
        "logoURI": "https://tokens.1inch.exchange/0xaf53d56ff99f1322515e54fdde93ff8b3b7dafd5.png"
    },
    "0x7f70642d88cf1c4a3a7abb072b53b929b653eda5": {
        "symbol": "YFII",
        "name": "YFII.finance Token",
        "decimals": 18,
        "address": "0x7f70642d88cf1c4a3a7abb072b53b929b653eda5",
        "logoURI": "https://tokens.1inch.exchange/0xa1d0e215a23d7030842fc67ce582a6afa3ccab83.png"
    },
    "0x857b222fc79e1cbbf8ca5f78cb133d1b7cf34bbd": {
        "symbol": "LTO",
        "name": "LTO Network",
        "decimals": 18,
        "address": "0x857b222fc79e1cbbf8ca5f78cb133d1b7cf34bbd",
        "logoURI": "https://tokens.1inch.exchange/0x3db6ba6ab6f95efed1a6e794cad492faaabf294d.png"
    },
    "0xd4cb328a82bdf5f03eb737f37fa6b370aef3e888": {
        "symbol": "CREAM",
        "name": "Cream",
        "decimals": 18,
        "address": "0xd4cb328a82bdf5f03eb737f37fa6b370aef3e888",
        "logoURI": "https://tokens.1inch.exchange/0x2ba592f78db6436527729929aaf6c908497cb200.png"
    },
    "0xe4ae305ebe1abe663f261bc00534067c80ad677c": {
        "symbol": "SPARTA",
        "name": "SPARTAN PROTOCOL TOKEN",
        "decimals": 18,
        "address": "0xe4ae305ebe1abe663f261bc00534067c80ad677c",
        "logoURI": "https://tokens.1inch.exchange/0xe4ae305ebe1abe663f261bc00534067c80ad677c.png"
    },
    "0xf68c9df95a18b2a5a5fa1124d79eeeffbad0b6fa": {
        "symbol": "ANY",
        "name": "Anyswap-BEP20",
        "decimals": 18,
        "address": "0xf68c9df95a18b2a5a5fa1124d79eeeffbad0b6fa",
        "logoURI": "https://tokens.1inch.exchange/0xf99d58e463a2e07e5692127302c20a191861b4d6.png"
    },
    "0x5a41f637c3f7553dba6ddc2d3ca92641096577ea": {
        "symbol": "JulD",
        "name": "JulSwap",
        "decimals": 18,
        "address": "0x5a41f637c3f7553dba6ddc2d3ca92641096577ea",
        "logoURI": "https://tokens.1inch.exchange/0x5a41f637c3f7553dba6ddc2d3ca92641096577ea.png"
    },
    "0xae9269f27437f0fcbc232d39ec814844a51d6b8f": {
        "symbol": "BURGER",
        "name": "Burger Swap",
        "decimals": 18,
        "address": "0xae9269f27437f0fcbc232d39ec814844a51d6b8f",
        "logoURI": "https://tokens.1inch.exchange/0xae9269f27437f0fcbc232d39ec814844a51d6b8f.png"
    },
    "0xa8c2b8eec3d368c0253ad3dae65a5f2bbb89c929": {
        "symbol": "CTK",
        "name": "CertiK Token",
        "decimals": 6,
        "address": "0xa8c2b8eec3d368c0253ad3dae65a5f2bbb89c929",
        "logoURI": "https://tokens.1inch.exchange/0xa8c2b8eec3d368c0253ad3dae65a5f2bbb89c929.png"
    },
    "0x0da6ed8b13214ff28e9ca979dd37439e8a88f6c4": {
        "symbol": "STAX",
        "name": "StableX Token",
        "decimals": 18,
        "address": "0x0da6ed8b13214ff28e9ca979dd37439e8a88f6c4",
        "logoURI": "https://tokens.1inch.exchange/0x0da6ed8b13214ff28e9ca979dd37439e8a88f6c4.png"
    },
    "0xca0a9df6a8cad800046c1ddc5755810718b65c44": {
        "symbol": "TCT",
        "name": "Token Club",
        "decimals": 18,
        "address": "0xca0a9df6a8cad800046c1ddc5755810718b65c44",
        "logoURI": "https://tokens.1inch.exchange/0xca0a9df6a8cad800046c1ddc5755810718b65c44.png"
    },
    "0x12e34cdf6a031a10fe241864c32fb03a4fdad739": {
        "symbol": "FREE",
        "name": "FREE coin BSC",
        "decimals": 18,
        "address": "0x12e34cdf6a031a10fe241864c32fb03a4fdad739",
        "logoURI": "https://tokens.1inch.exchange/0x12e34cdf6a031a10fe241864c32fb03a4fdad739.png"
    },
    "0x007ea5c0ea75a8df45d288a4debdd5bb633f9e56": {
        "symbol": "CAN",
        "name": "CanYaCoin",
        "decimals": 18,
        "address": "0x007ea5c0ea75a8df45d288a4debdd5bb633f9e56",
        "logoURI": "https://tokens.1inch.exchange/0x007ea5c0ea75a8df45d288a4debdd5bb633f9e56.png"
    },
    "0x393b312c01048b3ed2720bf1b090084c09e408a1": {
        "symbol": "FRIES",
        "name": "fry.world",
        "decimals": 18,
        "address": "0x393b312c01048b3ed2720bf1b090084c09e408a1",
        "logoURI": "https://tokens.1inch.exchange/0x393b312c01048b3ed2720bf1b090084c09e408a1.png"
    },
    "0x34681c1035f97e1edcccec5f142e02ff81a3a230": {
        "symbol": "CBIX",
        "name": "Cubiex",
        "decimals": 18,
        "address": "0x34681c1035f97e1edcccec5f142e02ff81a3a230",
        "logoURI": "https://tokens.1inch.exchange/0x34681c1035f97e1edcccec5f142e02ff81a3a230.png"
    },
    "0x6fd7c98458a943f469e1cf4ea85b173f5cd342f4": {
        "symbol": "BHC",
        "name": "Billion Happiness",
        "decimals": 18,
        "address": "0x6fd7c98458a943f469e1cf4ea85b173f5cd342f4",
        "logoURI": "https://tokens.1inch.exchange/0x6fd7c98458a943f469e1cf4ea85b173f5cd342f4.png"
    },
    "0x90df11a8cce420675e73922419e3f4f3fe13cccb": {
        "symbol": "STM",
        "name": "Streamity",
        "decimals": 18,
        "address": "0x90df11a8cce420675e73922419e3f4f3fe13cccb",
        "logoURI": "https://tokens.1inch.exchange/0x0e22734e078d6e399bcee40a549db591c4ea46cb.png"
    },
    "0x77f6a5f1b7a2b6d6c322af8581317d6bb0a52689": {
        "symbol": "SPORE",
        "name": "Spore Token",
        "decimals": 18,
        "address": "0x77f6a5f1b7a2b6d6c322af8581317d6bb0a52689",
        "logoURI": "https://tokens.1inch.exchange/0x77f6a5f1b7a2b6d6c322af8581317d6bb0a52689.png"
    },
    "0x5ea29eee799aa7cc379fde5cf370bc24f2ea7c81": {
        "symbol": "KP3RB",
        "name": "Keep3r BSC Network",
        "decimals": 18,
        "address": "0x5ea29eee799aa7cc379fde5cf370bc24f2ea7c81",
        "logoURI": "https://tokens.1inch.exchange/0x5ea29eee799aa7cc379fde5cf370bc24f2ea7c81.png"
    },
    "0x29f350b3822f51dc29619c583adbc9628646e315": {
        "symbol": "7UP",
        "name": "Seven Up Token",
        "decimals": 18,
        "address": "0x29f350b3822f51dc29619c583adbc9628646e315",
        "logoURI": "https://tokens.1inch.exchange/0x29f350b3822f51dc29619c583adbc9628646e315.png"
    },
    "0xb9784c1633ef3b839563b988c323798634714368": {
        "symbol": "PHO",
        "name": "Phoswap",
        "decimals": 8,
        "address": "0xb9784c1633ef3b839563b988c323798634714368",
        "logoURI": "https://tokens.1inch.exchange/0xb9784c1633ef3b839563b988c323798634714368.png"
    },
    "0xd1102332a213e21faf78b69c03572031f3552c33": {
        "symbol": "BTD",
        "name": "Bolt Dollar",
        "decimals": 18,
        "address": "0xd1102332a213e21faf78b69c03572031f3552c33",
        "logoURI": "https://tokens.1inch.exchange/0xd1102332a213e21faf78b69c03572031f3552c33.png"
    },
    "0xadd8a06fd58761a5047426e160b2b88ad3b9d464": {
        "symbol": "CHS",
        "name": "cheesemaker.farm",
        "decimals": 18,
        "address": "0xadd8a06fd58761a5047426e160b2b88ad3b9d464",
        "logoURI": "https://tokens.1inch.exchange/0xadd8a06fd58761a5047426e160b2b88ad3b9d464.png"
    },
    "0x1ad8d89074afa789a027b9a31d0bd14e254711d0": {
        "symbol": "CRP",
        "name": "Cross Finance",
        "decimals": 18,
        "address": "0x1ad8d89074afa789a027b9a31d0bd14e254711d0",
        "logoURI": "https://tokens.1inch.exchange/0x1ad8d89074afa789a027b9a31d0bd14e254711d0.png"
    },
    "0x9b44df3318972be845d83f961735609137c4c23c": {
        "symbol": "PROPEL",
        "name": "Propel",
        "decimals": 18,
        "address": "0x9b44df3318972be845d83f961735609137c4c23c",
        "logoURI": "https://tokens.1inch.exchange/0x9b44df3318972be845d83f961735609137c4c23c.png"
    },
    "0x9a2f5556e9a637e8fbce886d8e3cf8b316a1d8a2": {
        "symbol": "BIDR",
        "name": "BIDR BEP20",
        "decimals": 18,
        "address": "0x9a2f5556e9a637e8fbce886d8e3cf8b316a1d8a2",
        "logoURI": "https://tokens.1inch.exchange/0x9a2f5556e9a637e8fbce886d8e3cf8b316a1d8a2.png"
    },
    "0x81c15d3e956e55e77e1f3f257f0a65bd2725fc55": {
        "symbol": "crADA",
        "name": "Cream Cardano Token",
        "decimals": 8,
        "address": "0x81c15d3e956e55e77e1f3f257f0a65bd2725fc55",
        "logoURI": "https://tokens.1inch.exchange/0x81c15d3e956e55e77e1f3f257f0a65bd2725fc55.png"
    },
    "0x4a9a2b2b04549c3927dd2c9668a5ef3fca473623": {
        "symbol": "DF",
        "name": "dForce",
        "decimals": 18,
        "address": "0x4a9a2b2b04549c3927dd2c9668a5ef3fca473623",
        "logoURI": "https://tokens.1inch.exchange/0x431ad2ff6a9c365805ebad47ee021148d6f7dbe0.png"
    },
    "0xdc0f0a5719c39764b011edd02811bd228296887c": {
        "symbol": "DOS",
        "name": "DOS Network Token BEP20",
        "decimals": 18,
        "address": "0xdc0f0a5719c39764b011edd02811bd228296887c",
        "logoURI": "https://tokens.1inch.exchange/0x0a913bead80f321e7ac35285ee10d9d922659cb7.png"
    },
    "0xdf1f0026374d4bcc490be5e316963cf6df2fff19": {
        "symbol": "INNBC",
        "name": "InnovativeBioresearchCoin",
        "decimals": 6,
        "address": "0xdf1f0026374d4bcc490be5e316963cf6df2fff19",
        "logoURI": "https://tokens.1inch.exchange/0xdf1f0026374d4bcc490be5e316963cf6df2fff19.png"
    },
    "0x5f2caa99fc378248ac02cbbaac27e3fa155ed2c4": {
        "symbol": "JNTR",
        "name": "Jointer",
        "decimals": 18,
        "address": "0x5f2caa99fc378248ac02cbbaac27e3fa155ed2c4",
        "logoURI": "https://tokens.1inch.exchange/0x5f2caa99fc378248ac02cbbaac27e3fa155ed2c4.png"
    },
    "0x8e9f5173e16ff93f81579d73a7f9723324d6b6af": {
        "symbol": "MILK",
        "name": "Milk Protocol",
        "decimals": 18,
        "address": "0x8e9f5173e16ff93f81579d73a7f9723324d6b6af",
        "logoURI": "https://tokens.1inch.exchange/0x8e9f5173e16ff93f81579d73a7f9723324d6b6af.png"
    },
    "0x8893d5fa71389673c5c4b9b3cb4ee1ba71207556": {
        "symbol": "NUTS",
        "name": "Squirrel Finance",
        "decimals": 18,
        "address": "0x8893d5fa71389673c5c4b9b3cb4ee1ba71207556",
        "logoURI": "https://tokens.1inch.exchange/0x8893d5fa71389673c5c4b9b3cb4ee1ba71207556.png"
    },
    "0x32dffc3fe8e3ef3571bf8a72c0d0015c5373f41d": {
        "symbol": "JULb",
        "name": "JULb",
        "decimals": 18,
        "address": "0x32dffc3fe8e3ef3571bf8a72c0d0015c5373f41d",
        "logoURI": "https://tokens.1inch.exchange/0x32dffc3fe8e3ef3571bf8a72c0d0015c5373f41d.png"
    },
    "0xca3f508b8e4dd382ee878a314789373d80a5190a": {
        "symbol": "BIFI",
        "name": "beefy.finance",
        "decimals": 18,
        "address": "0xca3f508b8e4dd382ee878a314789373d80a5190a",
        "logoURI": "https://tokens.1inch.exchange/0xca3f508b8e4dd382ee878a314789373d80a5190a.png"
    },
    "0xba2ae424d960c26247dd6c32edc70b295c744c43": {
        "symbol": "DOGE",
        "name": "Dogecoin",
        "decimals": 8,
        "address": "0xba2ae424d960c26247dd6c32edc70b295c744c43",
        "logoURI": "https://tokens.1inch.exchange/0xba2ae424d960c26247dd6c32edc70b295c744c43.png"
    },
    "0x4131b87f74415190425ccd873048c708f8005823": {
        "symbol": "bMXX",
        "name": "Multiplier",
        "decimals": 18,
        "address": "0x4131b87f74415190425ccd873048c708f8005823",
        "logoURI": "https://tokens.1inch.exchange/0x4131b87f74415190425ccd873048c708f8005823.png"
    },
    "0xc5137e8e017799e71a65e0cfe3f340d719af17d3": {
        "symbol": "ETHb",
        "name": "ETHb",
        "decimals": 18,
        "address": "0xc5137e8e017799e71a65e0cfe3f340d719af17d3",
        "logoURI": "https://tokens.1inch.exchange/0xc5137e8e017799e71a65e0cfe3f340d719af17d3.png"
    },
    "0x8f0528ce5ef7b51152a59745befdd91d97091d2f": {
        "symbol": "ALPACA",
        "name": "AlpacaToken",
        "decimals": 18,
        "address": "0x8f0528ce5ef7b51152a59745befdd91d97091d2f",
        "logoURI": "https://tokens.1inch.exchange/0x8f0528ce5ef7b51152a59745befdd91d97091d2f.png"
    },
    "0xd632bd021a07af70592ce1e18717ab9aa126decb": {
        "symbol": "bKANGAL",
        "name": "Kangal",
        "decimals": 18,
        "address": "0xd632bd021a07af70592ce1e18717ab9aa126decb",
        "logoURI": "https://tokens.1inch.exchange/0xd632bd021a07af70592ce1e18717ab9aa126decb.png"
    },
    "0xd2ddfba7bb12f6e70c2aab6b6bf9edaef42ed22f": {
        "symbol": "UBU",
        "name": "UBUToken",
        "decimals": 18,
        "address": "0xd2ddfba7bb12f6e70c2aab6b6bf9edaef42ed22f",
        "logoURI": "https://tokens.1inch.exchange/0xd2ddfba7bb12f6e70c2aab6b6bf9edaef42ed22f.png"
    },
    "0xe0e514c71282b6f4e823703a39374cf58dc3ea4f": {
        "symbol": "BELT",
        "name": "BELT Token",
        "decimals": 18,
        "address": "0xe0e514c71282b6f4e823703a39374cf58dc3ea4f",
        "logoURI": "https://tokens.1inch.exchange/0xe0e514c71282b6f4e823703a39374cf58dc3ea4f.png"
    },
    "0xfa90d5d5ff08d9a06c9fdf89b4b22217b9dbc418": {
        "symbol": "NIU",
        "name": "Niubi Token",
        "decimals": 18,
        "address": "0xfa90d5d5ff08d9a06c9fdf89b4b22217b9dbc418",
        "logoURI": "https://tokens.1inch.exchange/0xfa90d5d5ff08d9a06c9fdf89b4b22217b9dbc418.png"
    },
    "0x3fda9383a84c05ec8f7630fe10adf1fac13241cc": {
        "symbol": "DEGO",
        "name": "dego.finance",
        "decimals": 18,
        "address": "0x3fda9383a84c05ec8f7630fe10adf1fac13241cc",
        "logoURI": "https://tokens.1inch.exchange/0x88ef27e69108b2633f8e1c184cc37940a075cc02.png"
    },
    "0x69f27e70e820197a6e495219d9ac34c8c6da7eee": {
        "symbol": "SOUPS",
        "name": "Soup Share",
        "decimals": 18,
        "address": "0x69f27e70e820197a6e495219d9ac34c8c6da7eee",
        "logoURI": "https://tokens.1inch.exchange/0x69f27e70e820197a6e495219d9ac34c8c6da7eee.png"
    },
    "0x94f559ae621f1c810f31a6a620ad7376776fe09e": {
        "symbol": "SOUP",
        "name": "Soup",
        "decimals": 18,
        "address": "0x94f559ae621f1c810f31a6a620ad7376776fe09e",
        "logoURI": "https://tokens.1inch.exchange/0x94f559ae621f1c810f31a6a620ad7376776fe09e.png"
    },
    "0x580f500cc7da45b7b058de7df325f6d8f83065e1": {
        "symbol": "BEAR",
        "name": "bears.finance deflationary token",
        "decimals": 18,
        "address": "0x580f500cc7da45b7b058de7df325f6d8f83065e1",
        "logoURI": "https://tokens.1inch.exchange/0x580f500cc7da45b7b058de7df325f6d8f83065e1.png"
    },
    "0x2263bf3c00787a7cfa17aef830261d1fe342fd5b": {
        "symbol": "FLO",
        "name": "FlourMix",
        "decimals": 18,
        "address": "0x2263bf3c00787a7cfa17aef830261d1fe342fd5b",
        "logoURI": "https://tokens.1inch.exchange/0x2263bf3c00787a7cfa17aef830261d1fe342fd5b.png"
    },
    "0x35e869b7456462b81cdb5e6e42434bd27f3f788c": {
        "symbol": "MDO",
        "name": "Midas Dollar",
        "decimals": 18,
        "address": "0x35e869b7456462b81cdb5e6e42434bd27f3f788c",
        "logoURI": "https://tokens.1inch.exchange/0x35e869b7456462b81cdb5e6e42434bd27f3f788c.png"
    },
    "0x242e46490397acca94ed930f2c4edf16250237fa": {
        "symbol": "MDS",
        "name": "Midas Dollar Share",
        "decimals": 18,
        "address": "0x242e46490397acca94ed930f2c4edf16250237fa",
        "logoURI": "https://tokens.1inch.exchange/0x242e46490397acca94ed930f2c4edf16250237fa.png"
    },
    "0x4da996c5fe84755c80e108cf96fe705174c5e36a": {
        "symbol": "WOW",
        "name": "WOWswap",
        "decimals": 18,
        "address": "0x4da996c5fe84755c80e108cf96fe705174c5e36a",
        "logoURI": "https://tokens.1inch.exchange/0x4da996c5fe84755c80e108cf96fe705174c5e36a.png"
    },
    "0x2849b1ae7e04a3d9bc288673a92477cf63f28af4": {
        "symbol": "SALT",
        "name": "Salt Token",
        "decimals": 18,
        "address": "0x2849b1ae7e04a3d9bc288673a92477cf63f28af4",
        "logoURI": "https://tokens.1inch.exchange/0x2849b1ae7e04a3d9bc288673a92477cf63f28af4.png"
    },
    "0x5a3010d4d8d3b5fb49f8b6e57fb9e48063f16700": {
        "symbol": "BSCPAD",
        "name": "BSCPAD.com",
        "decimals": 18,
        "address": "0x5a3010d4d8d3b5fb49f8b6e57fb9e48063f16700",
        "logoURI": "https://tokens.1inch.exchange/0x5a3010d4d8d3b5fb49f8b6e57fb9e48063f16700.png"
    },
    "0x81859801b01764d4f0fa5e64729f5a6c3b91435b": {
        "symbol": "BFI",
        "name": "bearn.fi",
        "decimals": 18,
        "address": "0x81859801b01764d4f0fa5e64729f5a6c3b91435b",
        "logoURI": "https://tokens.1inch.exchange/0x81859801b01764d4f0fa5e64729f5a6c3b91435b.png"
    },
    "0x3fc20a9672b321e66083896b40a567d5cc65cfaf": {
        "symbol": "UTL",
        "name": "Utile",
        "decimals": 18,
        "address": "0x3fc20a9672b321e66083896b40a567d5cc65cfaf",
        "logoURI": "https://tokens.1inch.exchange/0x3fc20a9672b321e66083896b40a567d5cc65cfaf.png"
    },
    "0x4c924a1fe185c6c6f870bc6bf1762b832208d748": {
        "symbol": "FUSI",
        "name": "Fusible | Fusible.io",
        "decimals": 18,
        "address": "0x4c924a1fe185c6c6f870bc6bf1762b832208d748",
        "logoURI": "https://tokens.1inch.exchange/0x4c924a1fe185c6c6f870bc6bf1762b832208d748.png"
    },
    "0xb7b1bd104645d5a06120d369c63822b2aead1598": {
        "symbol": "CPX",
        "name": "CenterPrime",
        "decimals": 18,
        "address": "0xb7b1bd104645d5a06120d369c63822b2aead1598",
        "logoURI": "https://tokens.1inch.exchange/0xb7b1bd104645d5a06120d369c63822b2aead1598.png"
    },
    "0xe561479bebee0e606c19bb1973fc4761613e3c42": {
        "symbol": "MEOWTH",
        "name": "Meowth Token",
        "decimals": 18,
        "address": "0xe561479bebee0e606c19bb1973fc4761613e3c42",
        "logoURI": "https://tokens.1inch.exchange/0xe561479bebee0e606c19bb1973fc4761613e3c42.png"
    },
    "0xab9d0fae6eb062f2698c2d429a1be9185a5d4f6e": {
        "symbol": "PASTA",
        "name": "Pasta Token",
        "decimals": 18,
        "address": "0xab9d0fae6eb062f2698c2d429a1be9185a5d4f6e",
        "logoURI": "https://tokens.1inch.exchange/0xab9d0fae6eb062f2698c2d429a1be9185a5d4f6e.png"
    },
    "0x14b1166ab53a237c8ceaee2bbc4bbca200cb7da8": {
        "symbol": "bSRK",
        "name": "SparkPoint",
        "decimals": 18,
        "address": "0x14b1166ab53a237c8ceaee2bbc4bbca200cb7da8",
        "logoURI": "https://tokens.1inch.exchange/0x14b1166ab53a237c8ceaee2bbc4bbca200cb7da8.png"
    },
    "0x96dd399f9c3afda1f194182f71600f1b65946501": {
        "symbol": "COS",
        "name": "Contentos",
        "decimals": 18,
        "address": "0x96dd399f9c3afda1f194182f71600f1b65946501",
        "logoURI": "https://tokens.1inch.exchange/0x96dd399f9c3afda1f194182f71600f1b65946501.png"
    },
    "0x708c671aa997da536869b50b6c67fa0c32ce80b2": {
        "symbol": "XCUR",
        "name": "Curate on BSC",
        "decimals": 8,
        "address": "0x708c671aa997da536869b50b6c67fa0c32ce80b2",
        "logoURI": "https://tokens.1inch.exchange/0x708c671aa997da536869b50b6c67fa0c32ce80b2.png"
    },
    "0xc5e6689c9c8b02be7c49912ef19e79cf24977f03": {
        "symbol": "ALPA",
        "name": "AlpaToken",
        "decimals": 18,
        "address": "0xc5e6689c9c8b02be7c49912ef19e79cf24977f03",
        "logoURI": "https://tokens.1inch.exchange/0xc5e6689c9c8b02be7c49912ef19e79cf24977f03.png"
    },
    "0xc13b7a43223bb9bf4b69bd68ab20ca1b79d81c75": {
        "symbol": "JGN",
        "name": "Juggernaut DeFi",
        "decimals": 18,
        "address": "0xc13b7a43223bb9bf4b69bd68ab20ca1b79d81c75",
        "logoURI": "https://tokens.1inch.exchange/0xc13b7a43223bb9bf4b69bd68ab20ca1b79d81c75.png"
    },
    "0xd32d01a43c869edcd1117c640fbdcfcfd97d9d65": {
        "symbol": "NMX",
        "name": "Nominex",
        "decimals": 18,
        "address": "0xd32d01a43c869edcd1117c640fbdcfcfd97d9d65",
        "logoURI": "https://tokens.1inch.exchange/0xd32d01a43c869edcd1117c640fbdcfcfd97d9d65.png"
    },
    "0x0957c57c9eb7744850dcc95db5a06ed4a246236e": {
        "symbol": "DANGO",
        "name": "DANGO",
        "decimals": 6,
        "address": "0x0957c57c9eb7744850dcc95db5a06ed4a246236e",
        "logoURI": "https://tokens.1inch.exchange/0x0957c57c9eb7744850dcc95db5a06ed4a246236e.png"
    },
    "0x7b41e1860c91be188c18341ae53a18b49c4b8d15": {
        "symbol": "BORSHCH",
        "name": "Borshchik",
        "decimals": 18,
        "address": "0x7b41e1860c91be188c18341ae53a18b49c4b8d15",
        "logoURI": "https://tokens.1inch.exchange/0x7b41e1860c91be188c18341ae53a18b49c4b8d15.png"
    },
    "0xc2e1acef50ae55661855e8dcb72adb182a3cc259": {
        "symbol": "BTS",
        "name": "Bolt Share",
        "decimals": 18,
        "address": "0xc2e1acef50ae55661855e8dcb72adb182a3cc259",
        "logoURI": "https://tokens.1inch.exchange/0xc2e1acef50ae55661855e8dcb72adb182a3cc259.png"
    },
    "0x355ad7abb7bdd53bec94c068f3abbcb2e2571d0d": {
        "symbol": "NANA",
        "name": "APETools.gg",
        "decimals": 9,
        "address": "0x355ad7abb7bdd53bec94c068f3abbcb2e2571d0d",
        "logoURI": "https://tokens.1inch.exchange/0x355ad7abb7bdd53bec94c068f3abbcb2e2571d0d.png"
    },
    "0xbddd7d426274fc5f370817c80c06b86d651963e4": {
        "symbol": "MLA",
        "name": "Moola",
        "decimals": 18,
        "address": "0xbddd7d426274fc5f370817c80c06b86d651963e4",
        "logoURI": "https://tokens.1inch.exchange/0xbddd7d426274fc5f370817c80c06b86d651963e4.png"
    },
    "0xf79037f6f6be66832de4e7516be52826bc3cbcc4": {
        "symbol": "HARD",
        "name": "HARD",
        "decimals": 6,
        "address": "0xf79037f6f6be66832de4e7516be52826bc3cbcc4",
        "logoURI": "https://tokens.1inch.exchange/0xf79037f6f6be66832de4e7516be52826bc3cbcc4.png"
    },
    "0x9d8aac497a4b8fe697dd63101d793f0c6a6eebb6": {
        "symbol": "D100",
        "name": "DEFI 100",
        "decimals": 9,
        "address": "0x9d8aac497a4b8fe697dd63101d793f0c6a6eebb6",
        "logoURI": "https://tokens.1inch.exchange/0x9d8aac497a4b8fe697dd63101d793f0c6a6eebb6.png"
    },
    "0x8c784c49097dcc637b93232e15810d53871992bf": {
        "symbol": "MSC",
        "name": "Monster Slayer Cash",
        "decimals": 18,
        "address": "0x8c784c49097dcc637b93232e15810d53871992bf",
        "logoURI": "https://tokens.1inch.exchange/0x8c784c49097dcc637b93232e15810d53871992bf.png"
    },
    "0x5ef5994fa33ff4eb6c82d51ee1dc145c546065bd": {
        "symbol": "ALLOY",
        "name": "HyperAlloy",
        "decimals": 18,
        "address": "0x5ef5994fa33ff4eb6c82d51ee1dc145c546065bd",
        "logoURI": "https://tokens.1inch.exchange/0x5ef5994fa33ff4eb6c82d51ee1dc145c546065bd.png"
    },
    "0x60b3bc37593853c04410c4f07fe4d6748245bf77": {
        "symbol": "SHIELD",
        "name": "Shield Protocol",
        "decimals": 18,
        "address": "0x60b3bc37593853c04410c4f07fe4d6748245bf77",
        "logoURI": "https://tokens.1inch.exchange/0x60b3bc37593853c04410c4f07fe4d6748245bf77.png"
    },
    "0x72faa679e1008ad8382959ff48e392042a8b06f7": {
        "symbol": "bALBT",
        "name": "AllianceBlock Token",
        "decimals": 18,
        "address": "0x72faa679e1008ad8382959ff48e392042a8b06f7",
        "logoURI": "https://tokens.1inch.exchange/0x72faa679e1008ad8382959ff48e392042a8b06f7.png"
    },
    "0xa86d305a36cdb815af991834b46ad3d7fbb38523": {
        "symbol": "BR34P",
        "name": "BR34P",
        "decimals": 8,
        "address": "0xa86d305a36cdb815af991834b46ad3d7fbb38523",
        "logoURI": "https://tokens.1inch.exchange/0xa86d305a36cdb815af991834b46ad3d7fbb38523.png"
    },
    "0x92a42db88ed0f02c71d439e55962ca7cab0168b5": {
        "symbol": "TRDG",
        "name": "Tardigrades.Finance",
        "decimals": 9,
        "address": "0x92a42db88ed0f02c71d439e55962ca7cab0168b5",
        "logoURI": "https://tokens.1inch.exchange/0x92a42db88ed0f02c71d439e55962ca7cab0168b5.png"
    },
    "0x9066e87bac891409d690cfefa41379b34af06391": {
        "symbol": "TACO",
        "name": "Taco",
        "decimals": 18,
        "address": "0x9066e87bac891409d690cfefa41379b34af06391",
        "logoURI": "https://tokens.1inch.exchange/0x9066e87bac891409d690cfefa41379b34af06391.png"
    },
    "0x4f47a0d15c1e53f3d94c069c7d16977c29f9cb6b": {
        "symbol": "Ramen",
        "name": "Ramen Token",
        "decimals": 18,
        "address": "0x4f47a0d15c1e53f3d94c069c7d16977c29f9cb6b",
        "logoURI": "https://tokens.1inch.exchange/0x4f47a0d15c1e53f3d94c069c7d16977c29f9cb6b.png"
    },
    "0x7a9f28eb62c791422aa23ceae1da9c847cbec9b0": {
        "symbol": "WATCH",
        "name": "yieldwatch",
        "decimals": 18,
        "address": "0x7a9f28eb62c791422aa23ceae1da9c847cbec9b0",
        "logoURI": "https://tokens.1inch.exchange/0x7a9f28eb62c791422aa23ceae1da9c847cbec9b0.png"
    },
    "0xe40255c5d7fa7ceec5120408c78c787cecb4cfdb": {
        "symbol": "SWGb",
        "name": "SWGb",
        "decimals": 18,
        "address": "0xe40255c5d7fa7ceec5120408c78c787cecb4cfdb",
        "logoURI": "https://tokens.1inch.exchange/0xe40255c5d7fa7ceec5120408c78c787cecb4cfdb.png"
    },
    "0x47c1c7b9d7941a7265d123dcfb100d8fb5348213": {
        "symbol": "YVS",
        "name": "YVS.Finance on BSC",
        "decimals": 18,
        "address": "0x47c1c7b9d7941a7265d123dcfb100d8fb5348213",
        "logoURI": "https://tokens.1inch.exchange/0xec681f28f4561c2a9534799aa38e0d36a83cf478.png"
    },
    "0x31d0a7ada4d4c131eb612db48861211f63e57610": {
        "symbol": "START",
        "name": "BSCstarter",
        "decimals": 18,
        "address": "0x31d0a7ada4d4c131eb612db48861211f63e57610",
        "logoURI": "https://tokens.1inch.exchange/0x31d0a7ada4d4c131eb612db48861211f63e57610.png"
    },
    "0x92d7756c60dcfd4c689290e8a9f4d263b3b32241": {
        "symbol": "BOR",
        "name": "BoringDAO Token",
        "decimals": 18,
        "address": "0x92d7756c60dcfd4c689290e8a9f4d263b3b32241",
        "logoURI": "https://tokens.1inch.exchange/0x92d7756c60dcfd4c689290e8a9f4d263b3b32241.png"
    },
    "0x645748fa7e54a818310afdad898410bcb54fc4e0": {
        "symbol": "BDAY",
        "name": "Birthday Cake",
        "decimals": 18,
        "address": "0x645748fa7e54a818310afdad898410bcb54fc4e0",
        "logoURI": "https://tokens.1inch.exchange/0x645748fa7e54a818310afdad898410bcb54fc4e0.png"
    },
    "0x99e92123eb77bc8f999316f622e5222498438784": {
        "symbol": "GMT",
        "name": "Gambit",
        "decimals": 18,
        "address": "0x99e92123eb77bc8f999316f622e5222498438784",
        "logoURI": "https://tokens.1inch.exchange/0x99e92123eb77bc8f999316f622e5222498438784.png"
    },
    "0x444a0e0c139cac67e8f9be945c6dfe01a2766ed1": {
        "symbol": "GST",
        "name": "Gemstone Token",
        "decimals": 18,
        "address": "0x444a0e0c139cac67e8f9be945c6dfe01a2766ed1",
        "logoURI": "https://tokens.1inch.exchange/0x444a0e0c139cac67e8f9be945c6dfe01a2766ed1.png"
    },
    "0x7cb2f28505e733f60c0db208afaa321c792f6cf4": {
        "symbol": "OPERAND",
        "name": "Operand",
        "decimals": 8,
        "address": "0x7cb2f28505e733f60c0db208afaa321c792f6cf4",
        "logoURI": "https://tokens.1inch.exchange/0x7cb2f28505e733f60c0db208afaa321c792f6cf4.png"
    },
    "0x3f515f0a8e93f2e2f891ceeb3db4e62e202d7110": {
        "symbol": "VIDT",
        "name": "VIDT Datalink",
        "decimals": 18,
        "address": "0x3f515f0a8e93f2e2f891ceeb3db4e62e202d7110",
        "logoURI": "https://tokens.1inch.exchange/0xfef4185594457050cc9c23980d301908fe057bb1.png"
    },
    "0x5239fe1a8c0b6ece6ad6009d15315e02b1e7c4ea": {
        "symbol": "SMOKE",
        "name": "thesmokehouse.finance",
        "decimals": 18,
        "address": "0x5239fe1a8c0b6ece6ad6009d15315e02b1e7c4ea",
        "logoURI": "https://tokens.1inch.exchange/0x5239fe1a8c0b6ece6ad6009d15315e02b1e7c4ea.png"
    },
    "0x0288d3e353fe2299f11ea2c2e1696b4a648ecc07": {
        "symbol": "ZEFI",
        "name": "ZCore Finance",
        "decimals": 18,
        "address": "0x0288d3e353fe2299f11ea2c2e1696b4a648ecc07",
        "logoURI": "https://tokens.1inch.exchange/0x0288d3e353fe2299f11ea2c2e1696b4a648ecc07.png"
    },
    "0x896ede222d3f7f3414e136a2791bdb08aaa25ce0": {
        "symbol": "VIKING",
        "name": "VikingSwap Token",
        "decimals": 18,
        "address": "0x896ede222d3f7f3414e136a2791bdb08aaa25ce0",
        "logoURI": "https://tokens.1inch.exchange/0x896ede222d3f7f3414e136a2791bdb08aaa25ce0.png"
    },
    "0x1c9491865a1de77c5b6e19d2e6a5f1d7a6f2b25f": {
        "symbol": "MATTER",
        "name": "Antimatter.Finance Mapping Token",
        "decimals": 18,
        "address": "0x1c9491865a1de77c5b6e19d2e6a5f1d7a6f2b25f",
        "logoURI": "https://tokens.1inch.exchange/0x1c9491865a1de77c5b6e19d2e6a5f1d7a6f2b25f.png"
    },
    "0xba8a6ef5f15ed18e7184f44a775060a6bf91d8d0": {
        "symbol": "SHAKE",
        "name": "SHAKE token by SpaceSwap v2",
        "decimals": 18,
        "address": "0xba8a6ef5f15ed18e7184f44a775060a6bf91d8d0",
        "logoURI": "https://tokens.1inch.exchange/0x6006fc2a849fedaba8330ce36f5133de01f96189.png"
    },
    "0x4a5a34212404f30c5ab7eb61b078fa4a55adc5a5": {
        "symbol": "MILK2",
        "name": "MilkyWay Token by SpaceSwap v2",
        "decimals": 18,
        "address": "0x4a5a34212404f30c5ab7eb61b078fa4a55adc5a5",
        "logoURI": "https://tokens.1inch.exchange/0x80c8c3dcfb854f9542567c8dac3f44d709ebc1de.png"
    },
    "0xb2bd0749dbe21f623d9baba856d3b0f0e1bfec9c": {
        "symbol": "DUSK",
        "name": "Dusk Network",
        "decimals": 18,
        "address": "0xb2bd0749dbe21f623d9baba856d3b0f0e1bfec9c",
        "logoURI": "https://tokens.1inch.exchange/0x940a2db1b7008b6c776d4faaca729d6d4a4aa551.png"
    },
    "0x630d98424efe0ea27fb1b3ab7741907dffeaad78": {
        "symbol": "PEAK",
        "name": "PEAKDEFI",
        "decimals": 8,
        "address": "0x630d98424efe0ea27fb1b3ab7741907dffeaad78",
        "logoURI": "https://tokens.1inch.exchange/0x630d98424efe0ea27fb1b3ab7741907dffeaad78.png"
    },
    "0x17bc015607fdf93e7c949e9ca22f96907cfbef88": {
        "symbol": "BSC",
        "name": "BSC FARM",
        "decimals": 18,
        "address": "0x17bc015607fdf93e7c949e9ca22f96907cfbef88",
        "logoURI": "https://tokens.1inch.exchange/0x17bc015607fdf93e7c949e9ca22f96907cfbef88.png"
    },
    "0x566cedd201f67e542a6851a2959c1a449a041945": {
        "symbol": "pOPIUM",
        "name": "pTokens OPIUM",
        "decimals": 18,
        "address": "0x566cedd201f67e542a6851a2959c1a449a041945",
        "logoURI": "https://tokens.1inch.exchange/0x566cedd201f67e542a6851a2959c1a449a041945.png"
    },
    "0x16a62c9955ca1ba52e0eca9ee4c3992204eb0915": {
        "symbol": "PNL",
        "name": "Pinelix",
        "decimals": 18,
        "address": "0x16a62c9955ca1ba52e0eca9ee4c3992204eb0915",
        "logoURI": "https://tokens.1inch.exchange/0x16a62c9955ca1ba52e0eca9ee4c3992204eb0915.png"
    },
    "0xc7091aa18598b87588e37501b6ce865263cd67ce": {
        "symbol": "CCAKE",
        "name": "CheesecakeSwap Token",
        "decimals": 18,
        "address": "0xc7091aa18598b87588e37501b6ce865263cd67ce",
        "logoURI": "https://tokens.1inch.exchange/0xc7091aa18598b87588e37501b6ce865263cd67ce.png"
    },
    "0xacb2d47827c9813ae26de80965845d80935afd0b": {
        "symbol": "MCRN",
        "name": "MacaronSwap Token",
        "decimals": 18,
        "address": "0xacb2d47827c9813ae26de80965845d80935afd0b",
        "logoURI": "https://tokens.1inch.exchange/0xacb2d47827c9813ae26de80965845d80935afd0b.png"
    },
    "0xe3ba88c38d2789fe58465020cc0fb60b70c10d32": {
        "symbol": "KIND",
        "name": "Kindcow Finance",
        "decimals": 8,
        "address": "0xe3ba88c38d2789fe58465020cc0fb60b70c10d32",
        "logoURI": "https://tokens.1inch.exchange/0xe3ba88c38d2789fe58465020cc0fb60b70c10d32.png"
    },
    "0xaadeb3d2170d391abb1a12e3da69cc93d880a31b": {
        "symbol": "TINFOIL",
        "name": "TIN",
        "decimals": 18,
        "address": "0xaadeb3d2170d391abb1a12e3da69cc93d880a31b",
        "logoURI": "https://tokens.1inch.exchange/0xaadeb3d2170d391abb1a12e3da69cc93d880a31b.png"
    },
    "0x58730ae0faa10d73b0cddb5e7b87c3594f7a20cb": {
        "symbol": "ERC20",
        "name": "ERC20",
        "decimals": 18,
        "address": "0x58730ae0faa10d73b0cddb5e7b87c3594f7a20cb",
        "logoURI": "https://tokens.1inch.exchange/0x58730ae0faa10d73b0cddb5e7b87c3594f7a20cb.png"
    },
    "0x1c213179c2c08906fb759878860652a61727ed14": {
        "symbol": "ZD",
        "name": "ZD",
        "decimals": 18,
        "address": "0x1c213179c2c08906fb759878860652a61727ed14",
        "logoURI": "https://tokens.1inch.exchange/0x1c213179c2c08906fb759878860652a61727ed14.png"
    },
    "0x1311b352467d2b5c296881badea82850bcd8f886": {
        "symbol": "TOOLS",
        "name": "TOOLS",
        "decimals": 18,
        "address": "0x1311b352467d2b5c296881badea82850bcd8f886",
        "logoURI": "https://tokens.1inch.exchange/0x1311b352467d2b5c296881badea82850bcd8f886.png"
    },
    "0x63870a18b6e42b01ef1ad8a2302ef50b7132054f": {
        "symbol": "blink",
        "name": "BLinkToken",
        "decimals": 6,
        "address": "0x63870a18b6e42b01ef1ad8a2302ef50b7132054f",
        "logoURI": "https://tokens.1inch.exchange/0x63870a18b6e42b01ef1ad8a2302ef50b7132054f.png"
    },
    "0x90e767a68a7d707b74d569c8e79f9bbb79b98a8b": {
        "symbol": "FAT",
        "name": "Fatfi Protocol",
        "decimals": 18,
        "address": "0x90e767a68a7d707b74d569c8e79f9bbb79b98a8b",
        "logoURI": "https://tokens.1inch.exchange/0x90e767a68a7d707b74d569c8e79f9bbb79b98a8b.png"
    },
    "0x82d49d4c442219fdda7857fc1102e7ce6e6e5612": {
        "symbol": "JIGG",
        "name": "Jiggly",
        "decimals": 18,
        "address": "0x82d49d4c442219fdda7857fc1102e7ce6e6e5612",
        "logoURI": "https://tokens.1inch.exchange/0x82d49d4c442219fdda7857fc1102e7ce6e6e5612.png"
    },
    "0x039cb485212f996a9dbb85a9a75d898f94d38da6": {
        "symbol": "DEXE",
        "name": "DeXe",
        "decimals": 18,
        "address": "0x039cb485212f996a9dbb85a9a75d898f94d38da6",
        "logoURI": "https://tokens.1inch.exchange/0x039cb485212f996a9dbb85a9a75d898f94d38da6.png"
    },
    "0xac0c7d9b063ed2c0946982ddb378e03886c064e6": {
        "symbol": "TREAT",
        "name": "TREAT",
        "decimals": 18,
        "address": "0xac0c7d9b063ed2c0946982ddb378e03886c064e6",
        "logoURI": "https://tokens.1inch.exchange/0xac0c7d9b063ed2c0946982ddb378e03886c064e6.png"
    },
    "0x211ffbe424b90e25a15531ca322adf1559779e45": {
        "symbol": "BUX",
        "name": "BUX Token",
        "decimals": 18,
        "address": "0x211ffbe424b90e25a15531ca322adf1559779e45",
        "logoURI": "https://tokens.1inch.exchange/0x211ffbe424b90e25a15531ca322adf1559779e45.png"
    },
    "0xd88ca08d8eec1e9e09562213ae83a7853ebb5d28": {
        "symbol": "XWIN",
        "name": "xWIN Token",
        "decimals": 18,
        "address": "0xd88ca08d8eec1e9e09562213ae83a7853ebb5d28",
        "logoURI": "https://tokens.1inch.exchange/0xd88ca08d8eec1e9e09562213ae83a7853ebb5d28.png"
    },
    "0xe1ea2e1907d93f154234ce3b5a7418faf175fe11": {
        "symbol": "DIESEL",
        "name": "DIESEL TOKEN",
        "decimals": 18,
        "address": "0xe1ea2e1907d93f154234ce3b5a7418faf175fe11",
        "logoURI": "https://tokens.1inch.exchange/0xe1ea2e1907d93f154234ce3b5a7418faf175fe11.png"
    },
    "0x95ea82a63ee70f3cb141ec55ea4a37339746eb32": {
        "symbol": "MTF",
        "name": "Milktea Finance",
        "decimals": 8,
        "address": "0x95ea82a63ee70f3cb141ec55ea4a37339746eb32",
        "logoURI": "https://tokens.1inch.exchange/0x95ea82a63ee70f3cb141ec55ea4a37339746eb32.png"
    },
    "0x2d69c55baecefc6ec815239da0a985747b50db6e": {
        "symbol": "TFF",
        "name": "Tutti Frutti",
        "decimals": 18,
        "address": "0x2d69c55baecefc6ec815239da0a985747b50db6e",
        "logoURI": "https://tokens.1inch.exchange/0x2d69c55baecefc6ec815239da0a985747b50db6e.png"
    },
    "0x74b3abb94e9e1ecc25bd77d6872949b4a9b2aacf": {
        "symbol": "DFX",
        "name": "DeFireX on BSC",
        "decimals": 18,
        "address": "0x74b3abb94e9e1ecc25bd77d6872949b4a9b2aacf",
        "logoURI": "https://tokens.1inch.exchange/0x74b3abb94e9e1ecc25bd77d6872949b4a9b2aacf.png"
    },
    "0xd909840613fcb0fadc6ee7e5ecf30cdef4281a68": {
        "symbol": "BBOO",
        "name": "Bamboo Token",
        "decimals": 18,
        "address": "0xd909840613fcb0fadc6ee7e5ecf30cdef4281a68",
        "logoURI": "https://tokens.1inch.exchange/0xd909840613fcb0fadc6ee7e5ecf30cdef4281a68.png"
    },
    "0xb21f4e20bf387bd207adc0ba4e5169aca3b253bf": {
        "symbol": "PIN",
        "name": "Pineapple",
        "decimals": 18,
        "address": "0xb21f4e20bf387bd207adc0ba4e5169aca3b253bf",
        "logoURI": "https://tokens.1inch.exchange/0xb21f4e20bf387bd207adc0ba4e5169aca3b253bf.png"
    },
    "0xc5a49b4cbe004b6fd55b30ba1de6ac360ff9765d": {
        "symbol": "SWAMP",
        "name": "Swampy",
        "decimals": 18,
        "address": "0xc5a49b4cbe004b6fd55b30ba1de6ac360ff9765d",
        "logoURI": "https://tokens.1inch.exchange/0xc5a49b4cbe004b6fd55b30ba1de6ac360ff9765d.png"
    },
    "0xa72a0564d0e887123112e6a4dc1aba7611ad861d": {
        "symbol": "FEB",
        "name": "FEB Token",
        "decimals": 0,
        "address": "0xa72a0564d0e887123112e6a4dc1aba7611ad861d",
        "logoURI": "https://tokens.1inch.exchange/0xa72a0564d0e887123112e6a4dc1aba7611ad861d.png"
    },
    "0xf0e406c49c63abf358030a299c0e00118c4c6ba5": {
        "symbol": "NVT",
        "name": "NerveNetwork",
        "decimals": 8,
        "address": "0xf0e406c49c63abf358030a299c0e00118c4c6ba5",
        "logoURI": "https://tokens.1inch.exchange/0xf0e406c49c63abf358030a299c0e00118c4c6ba5.png"
    },
    "0x6652048fa5e66ed63a0225ffd7c82e106b0aa18b": {
        "symbol": "YETU",
        "name": "Yetucoin",
        "decimals": 18,
        "address": "0x6652048fa5e66ed63a0225ffd7c82e106b0aa18b",
        "logoURI": "https://tokens.1inch.exchange/0x6652048fa5e66ed63a0225ffd7c82e106b0aa18b.png"
    },
    "0x8626f099434d9a7e603b8f0273880209eabfc1c5": {
        "symbol": "Berry",
        "name": "BerrySwap Token",
        "decimals": 18,
        "address": "0x8626f099434d9a7e603b8f0273880209eabfc1c5",
        "logoURI": "https://tokens.1inch.exchange/0x8626f099434d9a7e603b8f0273880209eabfc1c5.png"
    },
    "0xf0443834b7b21104b7102edbe8f9ec06204cd395": {
        "symbol": "TAO",
        "name": "Friction Finance",
        "decimals": 9,
        "address": "0xf0443834b7b21104b7102edbe8f9ec06204cd395",
        "logoURI": "https://tokens.1inch.exchange/0xf0443834b7b21104b7102edbe8f9ec06204cd395.png"
    },
    "0x49277cc5be56b519901e561096bfd416277b4f6d": {
        "symbol": "OCT",
        "name": "Octree Finance",
        "decimals": 8,
        "address": "0x49277cc5be56b519901e561096bfd416277b4f6d",
        "logoURI": "https://tokens.1inch.exchange/0x49277cc5be56b519901e561096bfd416277b4f6d.png"
    },
    "0x94babbe728d9411612ee41b20241a6fa251b26ce": {
        "symbol": "GFCE",
        "name": "GFORCE",
        "decimals": 9,
        "address": "0x94babbe728d9411612ee41b20241a6fa251b26ce",
        "logoURI": "https://tokens.1inch.exchange/0x94babbe728d9411612ee41b20241a6fa251b26ce.png"
    },
    "0xacabd3f9b8f76ffd2724604185fa5afa5df25ac6": {
        "symbol": "MSS",
        "name": "Monster Slayer Share",
        "decimals": 18,
        "address": "0xacabd3f9b8f76ffd2724604185fa5afa5df25ac6",
        "logoURI": "https://tokens.1inch.exchange/0xacabd3f9b8f76ffd2724604185fa5afa5df25ac6.png"
    },
    "0x851f7a700c5d67db59612b871338a85526752c25": {
        "symbol": "ARGON",
        "name": "ArgonToken",
        "decimals": 18,
        "address": "0x851f7a700c5d67db59612b871338a85526752c25",
        "logoURI": "https://tokens.1inch.exchange/0x851f7a700c5d67db59612b871338a85526752c25.png"
    },
    "0x579a6277a6c2c63a5b25006f63bce5dc8d9c25e7": {
        "symbol": "BGO",
        "name": "Bingo Cash",
        "decimals": 18,
        "address": "0x579a6277a6c2c63a5b25006f63bce5dc8d9c25e7",
        "logoURI": "https://tokens.1inch.exchange/0x579a6277a6c2c63a5b25006f63bce5dc8d9c25e7.png"
    },
    "0xeca41281c24451168a37211f0bc2b8645af45092": {
        "symbol": "TPT",
        "name": "TokenPocket Token",
        "decimals": 4,
        "address": "0xeca41281c24451168a37211f0bc2b8645af45092",
        "logoURI": "https://tokens.1inch.exchange/0xeca41281c24451168a37211f0bc2b8645af45092.png"
    },
    "0xbcf39f0edda668c58371e519af37ca705f2bfcbd": {
        "symbol": "pCWS",
        "name": "PolyCrowns",
        "decimals": 18,
        "address": "0xbcf39f0edda668c58371e519af37ca705f2bfcbd",
        "logoURI": "https://tokens.1inch.exchange/0xbcf39f0edda668c58371e519af37ca705f2bfcbd.png"
    },
    "0x4fcfa6cc8914ab455b5b33df916d90bfe70b6ab1": {
        "symbol": "SLME",
        "name": "Slime",
        "decimals": 18,
        "address": "0x4fcfa6cc8914ab455b5b33df916d90bfe70b6ab1",
        "logoURI": "https://tokens.1inch.exchange/0x4fcfa6cc8914ab455b5b33df916d90bfe70b6ab1.png"
    },
    "0x7af173f350d916358af3e218bdf2178494beb748": {
        "symbol": "TRADE",
        "name": "UniTrade",
        "decimals": 18,
        "address": "0x7af173f350d916358af3e218bdf2178494beb748",
        "logoURI": "https://tokens.1inch.exchange/0x7af173f350d916358af3e218bdf2178494beb748.png"
    },
    "0x8148b58393f00b4b379cbeb8018d3445e0b636a0": {
        "symbol": "SAIL",
        "name": "FullSail Finance Token",
        "decimals": 18,
        "address": "0x8148b58393f00b4b379cbeb8018d3445e0b636a0",
        "logoURI": "https://tokens.1inch.exchange/0x8148b58393f00b4b379cbeb8018d3445e0b636a0.png"
    },
    "0x3a5325f0e5ee4da06a285e988f052d4e45aa64b4": {
        "symbol": "POLAR",
        "name": "Polaris",
        "decimals": 18,
        "address": "0x3a5325f0e5ee4da06a285e988f052d4e45aa64b4",
        "logoURI": "https://tokens.1inch.exchange/0x1c545e9943cfd1b41e60a7917465911fa00fc28c.png"
    },
    "0x57067a6bd75c0e95a6a5f158455926e43e79beb0": {
        "symbol": "BLZD",
        "name": "blizzard.money",
        "decimals": 18,
        "address": "0x57067a6bd75c0e95a6a5f158455926e43e79beb0",
        "logoURI": "https://tokens.1inch.exchange/0x57067a6bd75c0e95a6a5f158455926e43e79beb0.png"
    },
    "0x6f695bd5ffd25149176629f8491a5099426ce7a7": {
        "symbol": "sALPACA",
        "name": "Stronk Alpaca",
        "decimals": 18,
        "address": "0x6f695bd5ffd25149176629f8491a5099426ce7a7",
        "logoURI": "https://tokens.1inch.exchange/0x6f695bd5ffd25149176629f8491a5099426ce7a7.png"
    },
    "0xc4daa5a9f2b832ed0f9bc579662883cd53ea9d61": {
        "symbol": "BRICK",
        "name": "BrickChain",
        "decimals": 18,
        "address": "0xc4daa5a9f2b832ed0f9bc579662883cd53ea9d61",
        "logoURI": "https://tokens.1inch.exchange/0xc4daa5a9f2b832ed0f9bc579662883cd53ea9d61.png"
    },
    "0xc1165227519ffd22fdc77ceb1037b9b284eef068": {
        "symbol": "BNSD",
        "name": "bns.finance",
        "decimals": 18,
        "address": "0xc1165227519ffd22fdc77ceb1037b9b284eef068",
        "logoURI": "https://tokens.1inch.exchange/0xc1165227519ffd22fdc77ceb1037b9b284eef068.png"
    },
    "0x4f0ed527e8a95ecaa132af214dfd41f30b361600": {
        "symbol": "vBSWAP",
        "name": "vSWAP.fi",
        "decimals": 18,
        "address": "0x4f0ed527e8a95ecaa132af214dfd41f30b361600",
        "logoURI": "https://tokens.1inch.exchange/0x4f0ed527e8a95ecaa132af214dfd41f30b361600.png"
    },
    "0xbbeb90cfb6fafa1f69aa130b7341089abeef5811": {
        "symbol": "UBXT",
        "name": "UpBots",
        "decimals": 18,
        "address": "0xbbeb90cfb6fafa1f69aa130b7341089abeef5811",
        "logoURI": "https://tokens.1inch.exchange/0xbbeb90cfb6fafa1f69aa130b7341089abeef5811.png"
    },
    "0xa7f552078dcc247c2684336020c03648500c6d9f": {
        "symbol": "EPS",
        "name": "Ellipsis",
        "decimals": 18,
        "address": "0xa7f552078dcc247c2684336020c03648500c6d9f",
        "logoURI": "https://tokens.1inch.exchange/0xa7f552078dcc247c2684336020c03648500c6d9f.png"
    },
    "0x461f6c9ae13a7dac7055c73fbf8dab529d667041": {
        "symbol": "PoFi",
        "name": "PoFi",
        "decimals": 18,
        "address": "0x461f6c9ae13a7dac7055c73fbf8dab529d667041",
        "logoURI": "https://tokens.1inch.exchange/0x461f6c9ae13a7dac7055c73fbf8dab529d667041.png"
    },
    "0x5986d5c77c65e5801a5caa4fae80089f870a71da": {
        "symbol": "bDIGG",
        "name": "Badger Sett Digg",
        "decimals": 18,
        "address": "0x5986d5c77c65e5801a5caa4fae80089f870a71da",
        "logoURI": "https://tokens.1inch.exchange/0x5986d5c77c65e5801a5caa4fae80089f870a71da.png"
    },
    "0x7b65b489fe53fce1f6548db886c08ad73111ddd8": {
        "symbol": "IRON",
        "name": "IRON Stablecoin",
        "decimals": 18,
        "address": "0x7b65b489fe53fce1f6548db886c08ad73111ddd8",
        "logoURI": "https://tokens.1inch.exchange/0x7b65b489fe53fce1f6548db886c08ad73111ddd8.png"
    },
    "0x51ba0b044d96c3abfca52b64d733603ccc4f0d4d": {
        "symbol": "SUPER",
        "name": "SUPER-ERC20",
        "decimals": 18,
        "address": "0x51ba0b044d96c3abfca52b64d733603ccc4f0d4d",
        "logoURI": "https://tokens.1inch.exchange/0x51ba0b044d96c3abfca52b64d733603ccc4f0d4d.png"
    },
    "0x810ee35443639348adbbc467b33310d2ab43c168": {
        "symbol": "CYC",
        "name": "Cyclone Protocol",
        "decimals": 18,
        "address": "0x810ee35443639348adbbc467b33310d2ab43c168",
        "logoURI": "https://tokens.1inch.exchange/0x810ee35443639348adbbc467b33310d2ab43c168.png"
    },
    "0xa25fc408ef05321103243557c851101f9acee608": {
        "symbol": "CHIP",
        "name": "Chip",
        "decimals": 18,
        "address": "0xa25fc408ef05321103243557c851101f9acee608",
        "logoURI": "https://tokens.1inch.exchange/0xa25fc408ef05321103243557c851101f9acee608.png"
    },
    "0x8597ba143ac509189e89aab3ba28d661a5dd9830": {
        "symbol": "VANCAT",
        "name": "VANCAT Token",
        "decimals": 0,
        "address": "0x8597ba143ac509189e89aab3ba28d661a5dd9830",
        "logoURI": "https://tokens.1inch.exchange/0x8597ba143ac509189e89aab3ba28d661a5dd9830.png"
    },
    "0x1ba8c21c623c843cd4c60438d70e7ad50f363fbb": {
        "symbol": "SACT",
        "name": "srnArtGallery",
        "decimals": 18,
        "address": "0x1ba8c21c623c843cd4c60438d70e7ad50f363fbb",
        "logoURI": "https://tokens.1inch.exchange/0x1ba8c21c623c843cd4c60438d70e7ad50f363fbb.png"
    },
    "0x05b339b0a346bf01f851dde47a5d485c34fe220c": {
        "symbol": "NAUT",
        "name": "Astronaut",
        "decimals": 8,
        "address": "0x05b339b0a346bf01f851dde47a5d485c34fe220c",
        "logoURI": "https://tokens.1inch.exchange/0x05b339b0a346bf01f851dde47a5d485c34fe220c.png"
    },
    "0x4090e535f2e251f5f88518998b18b54d26b3b07c": {
        "symbol": "TYPH",
        "name": "Typhoon",
        "decimals": 18,
        "address": "0x4090e535f2e251f5f88518998b18b54d26b3b07c",
        "logoURI": "https://tokens.1inch.exchange/0x4090e535f2e251f5f88518998b18b54d26b3b07c.png"
    },
    "0x182c763a4b2fbd18c9b5f2d18102a0ddd9d5df26": {
        "symbol": "HOGL",
        "name": "HOGL Finance",
        "decimals": 18,
        "address": "0x182c763a4b2fbd18c9b5f2d18102a0ddd9d5df26",
        "logoURI": "https://tokens.1inch.exchange/0x182c763a4b2fbd18c9b5f2d18102a0ddd9d5df26.png"
    },
    "0xe9c97e26de6f4109e041736867789e789dc904d3": {
        "symbol": "TIT",
        "name": "Titanic Token",
        "decimals": 18,
        "address": "0xe9c97e26de6f4109e041736867789e789dc904d3",
        "logoURI": "https://tokens.1inch.exchange/0xe9c97e26de6f4109e041736867789e789dc904d3.png"
    },
    "0x250b211ee44459dad5cd3bca803dd6a7ecb5d46c": {
        "symbol": "SWTH",
        "name": "Switcheo Token",
        "decimals": 8,
        "address": "0x250b211ee44459dad5cd3bca803dd6a7ecb5d46c",
        "logoURI": "https://tokens.1inch.exchange/0x250b211ee44459dad5cd3bca803dd6a7ecb5d46c.png"
    },
    "0x1f7216fdb338247512ec99715587bb97bbf96eae": {
        "symbol": "bBADGER",
        "name": "Badger Sett Badger",
        "decimals": 18,
        "address": "0x1f7216fdb338247512ec99715587bb97bbf96eae",
        "logoURI": "https://tokens.1inch.exchange/0x1f7216fdb338247512ec99715587bb97bbf96eae.png"
    },
    "0x0231f91e02debd20345ae8ab7d71a41f8e140ce7": {
        "symbol": "bwJUP",
        "name": "BSC Wrapped Jupiter",
        "decimals": 18,
        "address": "0x0231f91e02debd20345ae8ab7d71a41f8e140ce7",
        "logoURI": "https://tokens.1inch.exchange/0x0231f91e02debd20345ae8ab7d71a41f8e140ce7.png"
    },
    "0x0abd3e3502c15ec252f90f64341cba74a24fba06": {
        "symbol": "SPACE",
        "name": "farm.space",
        "decimals": 18,
        "address": "0x0abd3e3502c15ec252f90f64341cba74a24fba06",
        "logoURI": "https://tokens.1inch.exchange/0x0abd3e3502c15ec252f90f64341cba74a24fba06.png"
    },
    "0x9768e5b2d8e761905bc81dfc554f9437a46cdcc6": {
        "symbol": "PALM",
        "name": "Palm Token",
        "decimals": 18,
        "address": "0x9768e5b2d8e761905bc81dfc554f9437a46cdcc6",
        "logoURI": "https://tokens.1inch.exchange/0x9768e5b2d8e761905bc81dfc554f9437a46cdcc6.png"
    },
    "0xbf7c81fff98bbe61b40ed186e4afd6ddd01337fe": {
        "symbol": "EGLD",
        "name": "Elrond",
        "decimals": 18,
        "address": "0xbf7c81fff98bbe61b40ed186e4afd6ddd01337fe",
        "logoURI": "https://tokens.1inch.exchange/0xbf7c81fff98bbe61b40ed186e4afd6ddd01337fe.png"
    },
    "0x7cc46141ab1057b1928de5ad5ee78bb37efc4868": {
        "symbol": "TNDR",
        "name": "Thunder Token",
        "decimals": 18,
        "address": "0x7cc46141ab1057b1928de5ad5ee78bb37efc4868",
        "logoURI": "https://tokens.1inch.exchange/0x7cc46141ab1057b1928de5ad5ee78bb37efc4868.png"
    },
    "0x9001ee054f1692fef3a48330cb543b6fec6287eb": {
        "symbol": "STEEL",
        "name": "IRON Share V2",
        "decimals": 18,
        "address": "0x9001ee054f1692fef3a48330cb543b6fec6287eb",
        "logoURI": "https://tokens.1inch.exchange/0x9001ee054f1692fef3a48330cb543b6fec6287eb.png"
    },
    "0x1ffd0b47127fdd4097e54521c9e2c7f0d66aafc5": {
        "symbol": "TXL",
        "name": "Tixl Token",
        "decimals": 18,
        "address": "0x1ffd0b47127fdd4097e54521c9e2c7f0d66aafc5",
        "logoURI": "https://tokens.1inch.exchange/0x1ffd0b47127fdd4097e54521c9e2c7f0d66aafc5.png"
    },
    "0x1ade17b4b38b472b5259bbc938618226df7b5ca8": {
        "symbol": "QUAM",
        "name": "QUAMNETWORK.COM",
        "decimals": 18,
        "address": "0x1ade17b4b38b472b5259bbc938618226df7b5ca8",
        "logoURI": "https://tokens.1inch.exchange/0x1ade17b4b38b472b5259bbc938618226df7b5ca8.png"
    },
    "0x547cbe0f0c25085e7015aa6939b28402eb0ccdac": {
        "symbol": "XBN",
        "name": "Elastic BNB",
        "decimals": 18,
        "address": "0x547cbe0f0c25085e7015aa6939b28402eb0ccdac",
        "logoURI": "https://tokens.1inch.exchange/0x547cbe0f0c25085e7015aa6939b28402eb0ccdac.png"
    },
    "0xf94ca0b303e52d68b63626bed7f680fa4dc3f779": {
        "symbol": "DOG",
        "name": "Underdog.Finance",
        "decimals": 9,
        "address": "0xf94ca0b303e52d68b63626bed7f680fa4dc3f779",
        "logoURI": "https://tokens.1inch.exchange/0xf94ca0b303e52d68b63626bed7f680fa4dc3f779.png"
    },
    "0xe3e1fabeabd48491bd6902b0c32fdeee8d2ff12b": {
        "symbol": "UNICORN",
        "name": "UNICORN Token",
        "decimals": 18,
        "address": "0xe3e1fabeabd48491bd6902b0c32fdeee8d2ff12b",
        "logoURI": "https://tokens.1inch.exchange/0xe3e1fabeabd48491bd6902b0c32fdeee8d2ff12b.png"
    },
    "0x36c0556c2b15aed79f842675ff030782738ef9e8": {
        "symbol": "BLUE",
        "name": "BlueToken",
        "decimals": 18,
        "address": "0x36c0556c2b15aed79f842675ff030782738ef9e8",
        "logoURI": "https://tokens.1inch.exchange/0x36c0556c2b15aed79f842675ff030782738ef9e8.png"
    },
    "0xecd2376a8c5ece76323282441a1b935bbcb45ec2": {
        "symbol": "TORJ",
        "name": "TORJ.world",
        "decimals": 3,
        "address": "0xecd2376a8c5ece76323282441a1b935bbcb45ec2",
        "logoURI": "https://tokens.1inch.exchange/0xecd2376a8c5ece76323282441a1b935bbcb45ec2.png"
    },
    "0xeda21b525ac789eab1a08ef2404dd8505ffb973d": {
        "symbol": "HPS",
        "name": "HappinessToken",
        "decimals": 18,
        "address": "0xeda21b525ac789eab1a08ef2404dd8505ffb973d",
        "logoURI": "https://tokens.1inch.exchange/0xeda21b525ac789eab1a08ef2404dd8505ffb973d.png"
    },
    "0xf3dbb49999b25c9d6641a9423c7ad84168d00071": {
        "symbol": "HYDRO",
        "name": "HYDRO TOKEN",
        "decimals": 18,
        "address": "0xf3dbb49999b25c9d6641a9423c7ad84168d00071",
        "logoURI": "https://tokens.1inch.exchange/0xebbdf302c940c6bfd49c6b165f457fdb324649bc.png"
    },
    "0x3b98bbefe14b98000f10124ca95ed298ac9db3ff": {
        "symbol": "AceD",
        "name": "AceD Entertainment",
        "decimals": 18,
        "address": "0x3b98bbefe14b98000f10124ca95ed298ac9db3ff",
        "logoURI": "https://tokens.1inch.exchange/0x4b3a0c6d668b43f3f07904e124328659b90bb4ca.png"
    },
    "0x9a0af7fdb2065ce470d72664de73cae409da28ec": {
        "symbol": "vADA",
        "name": "Venus ADA",
        "decimals": 8,
        "address": "0x9a0af7fdb2065ce470d72664de73cae409da28ec",
        "logoURI": "https://tokens.1inch.exchange/0x9a0af7fdb2065ce470d72664de73cae409da28ec.png"
    },
    "0xd0e931a596c8a0f6e2ebaae507a55f687bef829c": {
        "symbol": "CRPTP",
        "name": "Cryptium Temporary Token Public",
        "decimals": 18,
        "address": "0xd0e931a596c8a0f6e2ebaae507a55f687bef829c",
        "logoURI": "https://tokens.1inch.exchange/0xd0e931a596c8a0f6e2ebaae507a55f687bef829c.png"
    },
    "0x5b17b4d5e4009b5c43e3e3d63a5229f794cba389": {
        "symbol": "ACSI",
        "name": "ACryptoS(I)",
        "decimals": 18,
        "address": "0x5b17b4d5e4009b5c43e3e3d63a5229f794cba389",
        "logoURI": "https://tokens.1inch.exchange/0x5b17b4d5e4009b5c43e3e3d63a5229f794cba389.png"
    },
    "0x2222227e22102fe3322098e4cbfe18cfebd57c95": {
        "symbol": "TLM",
        "name": "Alien Worlds Trilium",
        "decimals": 4,
        "address": "0x2222227e22102fe3322098e4cbfe18cfebd57c95",
        "logoURI": "https://tokens.1inch.exchange/0x2222227e22102fe3322098e4cbfe18cfebd57c95.png"
    },
    "0xa7ca04f7602cd7a939d3e4827f442f48cf8e9dad": {
        "symbol": "UNFI",
        "name": "Uniswap Finance",
        "decimals": 18,
        "address": "0xa7ca04f7602cd7a939d3e4827f442f48cf8e9dad",
        "logoURI": "https://tokens.1inch.exchange/0xa7ca04f7602cd7a939d3e4827f442f48cf8e9dad.png"
    },
    "0x96058f8c3e16576d9bd68766f3836d9a33158f89": {
        "symbol": "BONDLY",
        "name": "Bondly Token",
        "decimals": 18,
        "address": "0x96058f8c3e16576d9bd68766f3836d9a33158f89",
        "logoURI": "https://tokens.1inch.exchange/0xd2dda223b2617cb616c1580db421e4cfae6a8a85.png"
    },
    "0xacd7b3d9c10e97d0efa418903c0c7669e702e4c0": {
        "symbol": "ELE",
        "name": "Eleven.finance",
        "decimals": 18,
        "address": "0xacd7b3d9c10e97d0efa418903c0c7669e702e4c0",
        "logoURI": "https://tokens.1inch.exchange/0xacd7b3d9c10e97d0efa418903c0c7669e702e4c0.png"
    },
    "0xa7fcb2baabda9db593e24b25a1a32bfb5168018b": {
        "symbol": "MNTN",
        "name": "Mountain - Climb Token Finance",
        "decimals": 18,
        "address": "0xa7fcb2baabda9db593e24b25a1a32bfb5168018b",
        "logoURI": "https://tokens.1inch.exchange/0xa7fcb2baabda9db593e24b25a1a32bfb5168018b.png"
    },
    "0x2a1d286ed5edad78befd6e0d8beb38791e8cd69d": {
        "symbol": "CLIMB",
        "name": "Climb Token Finance",
        "decimals": 8,
        "address": "0x2a1d286ed5edad78befd6e0d8beb38791e8cd69d",
        "logoURI": "https://tokens.1inch.exchange/0x2a1d286ed5edad78befd6e0d8beb38791e8cd69d.png"
    },
    "0x3203c9e46ca618c8c1ce5dc67e7e9d75f5da2377": {
        "symbol": "MBOX",
        "name": "Mobox",
        "decimals": 18,
        "address": "0x3203c9e46ca618c8c1ce5dc67e7e9d75f5da2377",
        "logoURI": "https://tokens.1inch.exchange/0x3203c9e46ca618c8c1ce5dc67e7e9d75f5da2377.png"
    },
    "0x52d86850bc8207b520340b7e39cdaf22561b9e56": {
        "symbol": "SWIRL",
        "name": "Swirl.Cash",
        "decimals": 18,
        "address": "0x52d86850bc8207b520340b7e39cdaf22561b9e56",
        "logoURI": "https://tokens.1inch.exchange/0x52d86850bc8207b520340b7e39cdaf22561b9e56.png"
    },
    "0xf78839b9e972cf15014843a7ca5ebf1e321a284c": {
        "symbol": "MGB",
        "name": "Magic Balancer",
        "decimals": 18,
        "address": "0xf78839b9e972cf15014843a7ca5ebf1e321a284c",
        "logoURI": "https://tokens.1inch.exchange/0xf78839b9e972cf15014843a7ca5ebf1e321a284c.png"
    },
    "0xad90c05bc51672eedfee36e58b3ff1a78bbc146d": {
        "symbol": "XSPACE",
        "name": "XSPACE",
        "decimals": 9,
        "address": "0xad90c05bc51672eedfee36e58b3ff1a78bbc146d",
        "logoURI": "https://tokens.1inch.exchange/0xad90c05bc51672eedfee36e58b3ff1a78bbc146d.png"
    },
    "0x965b0df5bda0e7a0649324d78f03d5f7f2de086a": {
        "symbol": "COOK",
        "name": "Poly-Peg COOK",
        "decimals": 18,
        "address": "0x965b0df5bda0e7a0649324d78f03d5f7f2de086a",
        "logoURI": "https://tokens.1inch.exchange/0x965b0df5bda0e7a0649324d78f03d5f7f2de086a.png"
    },
    "0xc1edcc306e6faab9da629efca48670be4678779d": {
        "symbol": "MDG",
        "name": "Midas Gold",
        "decimals": 18,
        "address": "0xc1edcc306e6faab9da629efca48670be4678779d",
        "logoURI": "https://tokens.1inch.exchange/0xc1edcc306e6faab9da629efca48670be4678779d.png"
    },
    "0x04c747b40be4d535fc83d09939fb0f626f32800b": {
        "symbol": "ITAM",
        "name": "ITAM",
        "decimals": 18,
        "address": "0x04c747b40be4d535fc83d09939fb0f626f32800b",
        "logoURI": "https://tokens.1inch.exchange/0x04c747b40be4d535fc83d09939fb0f626f32800b.png"
    },
    "0x0feadcc3824e7f3c12f40e324a60c23ca51627fc": {
        "symbol": "Warden",
        "name": "WardenSwap Token",
        "decimals": 18,
        "address": "0x0feadcc3824e7f3c12f40e324a60c23ca51627fc",
        "logoURI": "https://tokens.1inch.exchange/0x0feadcc3824e7f3c12f40e324a60c23ca51627fc.png"
    },
    "0xc4b6f32b84657e9f6a73fe119f0967be5ba8cf05": {
        "symbol": "gwUSDN",
        "name": "Wrapped Neutrino USD",
        "decimals": 18,
        "address": "0xc4b6f32b84657e9f6a73fe119f0967be5ba8cf05",
        "logoURI": "https://tokens.1inch.exchange/0xc4b6f32b84657e9f6a73fe119f0967be5ba8cf05.png"
    },
    "0x299bac24c8ad5635586fde6619eff7891a6c8969": {
        "symbol": "CTF",
        "name": "CyberTime Finance Token",
        "decimals": 18,
        "address": "0x299bac24c8ad5635586fde6619eff7891a6c8969",
        "logoURI": "https://tokens.1inch.exchange/0x299bac24c8ad5635586fde6619eff7891a6c8969.png"
    },
    "0x9f589e3eabe42ebc94a44727b3f3531c0c877809": {
        "symbol": "TKO",
        "name": "Tokocrypto Token",
        "decimals": 18,
        "address": "0x9f589e3eabe42ebc94a44727b3f3531c0c877809",
        "logoURI": "https://tokens.1inch.exchange/0x9f589e3eabe42ebc94a44727b3f3531c0c877809.png"
    },
    "0x477bc8d23c634c154061869478bce96be6045d12": {
        "symbol": "SFUND",
        "name": "SeedifyFund",
        "decimals": 18,
        "address": "0x477bc8d23c634c154061869478bce96be6045d12",
        "logoURI": "https://tokens.1inch.exchange/0x477bc8d23c634c154061869478bce96be6045d12.png"
    },
    "0x2f7b4c618dc8e0bba648e54cdadce3d8361f9816": {
        "symbol": "NFTL",
        "name": "NFTL Token",
        "decimals": 18,
        "address": "0x2f7b4c618dc8e0bba648e54cdadce3d8361f9816",
        "logoURI": "https://tokens.1inch.exchange/0x2f7b4c618dc8e0bba648e54cdadce3d8361f9816.png"
    },
    "0x5857c96dae9cf8511b08cb07f85753c472d36ea3": {
        "symbol": "FUSE",
        "name": "Fuse Token on BSC",
        "decimals": 18,
        "address": "0x5857c96dae9cf8511b08cb07f85753c472d36ea3",
        "logoURI": "https://tokens.1inch.exchange/0x970b9bb2c0444f5e81e9d0efb84c8ccdcdcaf84d.png"
    },
    "0x1f534d2b1ee2933f1fdf8e4b63a44b2249d77eaf": {
        "symbol": "ZERO",
        "name": "Zero.Exchange Token",
        "decimals": 18,
        "address": "0x1f534d2b1ee2933f1fdf8e4b63a44b2249d77eaf",
        "logoURI": "https://tokens.1inch.exchange/0xf0939011a9bb95c3b791f0cb546377ed2693a574.png"
    },
    "0x6f817a0ce8f7640add3bc0c1c2298635043c2423": {
        "symbol": "anyETH",
        "name": "ANY Ethereum",
        "decimals": 18,
        "address": "0x6f817a0ce8f7640add3bc0c1c2298635043c2423",
        "logoURI": "https://tokens.1inch.exchange/0x6f817a0ce8f7640add3bc0c1c2298635043c2423.png"
    },
    "0x54261774905f3e6e9718f2abb10ed6555cae308a": {
        "symbol": "anyBTC",
        "name": "ANY Bitcoin",
        "decimals": 8,
        "address": "0x54261774905f3e6e9718f2abb10ed6555cae308a",
        "logoURI": "https://tokens.1inch.exchange/0x54261774905f3e6e9718f2abb10ed6555cae308a.png"
    },
    "0x049d68029688eabf473097a2fc38ef61633a3c7a": {
        "symbol": "fUSDT",
        "name": "Frapped USDT",
        "decimals": 6,
        "address": "0x049d68029688eabf473097a2fc38ef61633a3c7a",
        "logoURI": "https://tokens.1inch.exchange/0xdac17f958d2ee523a2206206994597c13d831ec7.png"
    }
}

// Selected tokens
let tokens2 = {
    "0xe9e7cea3dedca5984780bafc599bd69add087d56": {
        "symbol": "BUSD",
        "name": "BUSD Token",
        "decimals": 18,
        "address": "0xe9e7cea3dedca5984780bafc599bd69add087d56",
        "logoURI": "https://tokens.1inch.exchange/0x4fabb145d64652a948d72533023f6e7a623c7c53.png"
    },
    "0x3ee2200efb3400fabb9aacf31297cbdd1d435d47": {
        "symbol": "ADA",
        "name": "Cardano Token",
        "decimals": 18,
        "address": "0x3ee2200efb3400fabb9aacf31297cbdd1d435d47",
        "logoURI": "https://tokens.1inch.exchange/0x3ee2200efb3400fabb9aacf31297cbdd1d435d47.png"
    },
    "0xf8a0bf9cf54bb92f17374d9e9a321e6a111a51bd": {
        "symbol": "LINK",
        "name": "ChainLink Token",
        "decimals": 18,
        "address": "0xf8a0bf9cf54bb92f17374d9e9a321e6a111a51bd",
        "logoURI": "https://tokens.1inch.exchange/0x514910771af9ca656af840dff83e8264ecf986ca.png"
    },
    "0x23396cf899ca06c4472205fc903bdb4de249d6fc": {
        "symbol": "UST",
        "name": "Wrapped UST Token",
        "decimals": 18,
        "address": "0x23396cf899ca06c4472205fc903bdb4de249d6fc",
        "logoURI": "https://tokens.1inch.exchange/0xa47c8bf37f92abed4a126bda807a7b7498661acd.png"
    },
    "0xc4daa5a9f2b832ed0f9bc579662883cd53ea9d61": {
        "symbol": "BRICK",
        "name": "BrickChain",
        "decimals": 18,
        "address": "0xc4daa5a9f2b832ed0f9bc579662883cd53ea9d61",
        "logoURI": "https://tokens.1inch.exchange/0xc4daa5a9f2b832ed0f9bc579662883cd53ea9d61.png"
    },
    "0x63870a18b6e42b01ef1ad8a2302ef50b7132054f": {
        "symbol": "blink",
        "name": "BLinkToken",
        "decimals": 6,
        "address": "0x63870a18b6e42b01ef1ad8a2302ef50b7132054f",
        "logoURI": "https://tokens.1inch.exchange/0x63870a18b6e42b01ef1ad8a2302ef50b7132054f.png"
    },
    "0x1d2f0da169ceb9fc7b3144628db156f3f6c60dbe": {
        "symbol": "XRP",
        "name": "XRP Token",
        "decimals": 18,
        "address": "0x1d2f0da169ceb9fc7b3144628db156f3f6c60dbe",
        "logoURI": "https://tokens.1inch.exchange/0x1d2f0da169ceb9fc7b3144628db156f3f6c60dbe.png"
    },
    "0x190b589cf9fb8ddeabbfeae36a813ffb2a702454": {
        "symbol": "BDO",
        "name": "bDollar",
        "decimals": 18,
        "address": "0x190b589cf9fb8ddeabbfeae36a813ffb2a702454",
        "logoURI": "https://tokens.1inch.exchange/0x190b589cf9fb8ddeabbfeae36a813ffb2a702454.png"
    },
    "0x78650b139471520656b9e7aa7a5e9276814a38e9": {
        "symbol": "BTCST",
        "name": "StandardBTCHashrateToken",
        "decimals": 17,
        "address": "0x78650b139471520656b9e7aa7a5e9276814a38e9",
        "logoURI": "https://tokens.1inch.exchange/0x78650b139471520656b9e7aa7a5e9276814a38e9.png"
    },
    "0x47bead2563dcbf3bf2c9407fea4dc236faba485a": {
        "symbol": "SXP",
        "name": "Swipe",
        "decimals": 18,
        "address": "0x47bead2563dcbf3bf2c9407fea4dc236faba485a",
        "logoURI": "https://tokens.1inch.exchange/0x8ce9137d39326ad0cd6491fb5cc0cba0e089b6a9.png"
    },
    "0x4bd17003473389a42daf6a0a729f6fdb328bbbd7": {
        "symbol": "VAI",
        "name": "VAI Stablecoin",
        "decimals": 18,
        "address": "0x4bd17003473389a42daf6a0a729f6fdb328bbbd7",
        "logoURI": "https://tokens.1inch.exchange/0x4bd17003473389a42daf6a0a729f6fdb328bbbd7.png"
    },
    "0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d": {
        "symbol": "USDC",
        "name": "USD Coin",
        "decimals": 18,
        "address": "0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d",
        "logoURI": "https://tokens.1inch.exchange/0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48.png"
    },
    "0x603c7f932ed1fc6575303d8fb018fdcbb0f39a95": {
        "symbol": "BANANA",
        "name": "ApeSwapFinance Banana",
        "decimals": 18,
        "address": "0x603c7f932ed1fc6575303d8fb018fdcbb0f39a95",
        "logoURI": "https://tokens.1inch.exchange/0x603c7f932ed1fc6575303d8fb018fdcbb0f39a95.png"
    },
    "0xe02df9e3e622debdd69fb838bb799e3f168902c5": {
        "symbol": "BAKE",
        "name": "BakeryToken",
        "decimals": 18,
        "address": "0xe02df9e3e622debdd69fb838bb799e3f168902c5",
        "logoURI": "https://tokens.1inch.exchange/0xe02df9e3e622debdd69fb838bb799e3f168902c5.png"
    },
    "0x334b3ecb4dca3593bccc3c7ebd1a1c1d1780fbf1": {
        "symbol": "vDAI",
        "name": "Venus DAI",
        "decimals": 8,
        "address": "0x334b3ecb4dca3593bccc3c7ebd1a1c1d1780fbf1",
        "logoURI": "https://tokens.1inch.exchange/0x334b3ecb4dca3593bccc3c7ebd1a1c1d1780fbf1.png"
    },
    "0x9768e5b2d8e761905bc81dfc554f9437a46cdcc6": {
        "symbol": "PALM",
        "name": "Palm Token",
        "decimals": 18,
        "address": "0x9768e5b2d8e761905bc81dfc554f9437a46cdcc6",
        "logoURI": "https://tokens.1inch.exchange/0x9768e5b2d8e761905bc81dfc554f9437a46cdcc6.png"
    },
    "0xd632bd021a07af70592ce1e18717ab9aa126decb": {
        "symbol": "bKANGAL",
        "name": "Kangal",
        "decimals": 18,
        "address": "0xd632bd021a07af70592ce1e18717ab9aa126decb",
        "logoURI": "https://tokens.1inch.exchange/0xd632bd021a07af70592ce1e18717ab9aa126decb.png"
    },
    "0xf859bf77cbe8699013d6dbc7c2b926aaf307f830": {
        "symbol": "BRY",
        "name": "Berry Tributes",
        "decimals": 18,
        "address": "0xf859bf77cbe8699013d6dbc7c2b926aaf307f830",
        "logoURI": "https://tokens.1inch.exchange/0xf859bf77cbe8699013d6dbc7c2b926aaf307f830.png"
    },
    "0xacabd3f9b8f76ffd2724604185fa5afa5df25ac6": {
        "symbol": "MSS",
        "name": "Monster Slayer Share",
        "decimals": 18,
        "address": "0xacabd3f9b8f76ffd2724604185fa5afa5df25ac6",
        "logoURI": "https://tokens.1inch.exchange/0xacabd3f9b8f76ffd2724604185fa5afa5df25ac6.png"
    },
    "0x95ea82a63ee70f3cb141ec55ea4a37339746eb32": {
        "symbol": "MTF",
        "name": "Milktea Finance",
        "decimals": 8,
        "address": "0x95ea82a63ee70f3cb141ec55ea4a37339746eb32",
        "logoURI": "https://tokens.1inch.exchange/0x95ea82a63ee70f3cb141ec55ea4a37339746eb32.png"
    },
}

let tokensPrueba = {
    "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c": {
        "symbol": "BNB",
        "name": "BNB Token",
        "decimals": 18,
        "address": "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c",
        "logoURI": "https://tokens.1inch.exchange/0x4fabb145d64652a948d72533023f6e7a623c7c53.png"
    },
}



async function driver() {
    quote();
    //let globalData = await approve('0x3aabcf53a1930a42e18d938c019e83ebee50a849');
    //transaction = signTx(globalData); //sign the transaction
    // console.log(transaction);                       //print the bytes
    //sendTransaction(transaction); //send the transaction
}

const bestTokens = [];
async function quote() {
    for (let i=0; i< Object.keys(tokensPrueba).length; i++) {
        let tokAd = Object.keys(tokensPrueba)[i];
        try {
            let quoteURL = {
                hostname: 'https://api.1inch.exchange/v3.0/56/quote?',
                options: {
                    params: {
                        fromTokenAddress: '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c',
                        toTokenAddress: tokAd,
                        amount: 200000000000000000,
                    }
                }
            }
            globalData = await apiCaller(quoteURL, '0xff'); //call the api to get the data, and wait until it returns
            //console.log(globalData);
            let fromTokenDecimals = globalData.fromToken.decimals;
            let fromTokenAmount = globalData.fromTokenAmount * (10 ** -(fromTokenDecimals));
            let fromTokenSymbol = globalData.fromToken.symbol;
            let toTokenDecimals = globalData.toToken.decimals;
            let toTokenAmount = globalData.toTokenAmount * (10 ** -(toTokenDecimals));
            let toTokenSymbol = globalData.toToken.symbol;
            console.log('Swap ' + fromTokenAmount + " " + fromTokenSymbol + " for " + toTokenAmount + " " + toTokenSymbol);

            let protocols = '';
            let estimatedGas = globalData.estimatedGas;
            for (let i of globalData.protocols[0]) {
                protocols += (i[0].name + ' -> ');
            }
            console.log(protocols);
            console.log('Estimated gas: ' + estimatedGas);

            console.log('');

            let _fromTokenAddress = globalData.toToken.address;
            let _toTokenAddress = globalData.fromToken.address;
            let _amount = globalData.toTokenAmount;
            let quote2URL = {
                hostname: 'https://api.1inch.exchange/v3.0/56/quote?',
                options: {
                    params: {
                        fromTokenAddress: _fromTokenAddress,
                        toTokenAddress: _toTokenAddress,
                        amount: _amount,
                    }
                }
            }

            globalData2 = await apiCaller(quote2URL, '0xff'); //call the api to get the data, and wait until it returns
            // console.log(globalData);
            let fromTokenDecimals2 = globalData2.fromToken.decimals;
            let fromTokenAmount2 = globalData2.fromTokenAmount * (10 ** -(fromTokenDecimals2));
            let fromTokenSymbol2 = globalData2.fromToken.symbol;
            let toTokenDecimals2 = globalData2.toToken.decimals;
            let toTokenAmount2 = globalData2.toTokenAmount * (10 ** -(toTokenDecimals2));
            let toTokenSymbol2 = globalData2.toToken.symbol;
            console.log('Swap ' + fromTokenAmount2 + " " + fromTokenSymbol2 + " for " + toTokenAmount2 + " " + toTokenSymbol2);

            let protocols2 = '';
            let estimatedGas2 = globalData2.estimatedGas;
            for (let i of globalData2.protocols[0]) {
                protocols2 += (i[0].name + ' -> ');
            }
            console.log(protocols2);
            console.log('Estimated gas: ' + estimatedGas2);

            console.log('');

            //let gasPrice = await _getGasPrice();    //ejecutarla 1 vez por dia nada mas, el gas en BSC es muy estable
            let txPrice = (6 * (estimatedGas + estimatedGas2) * (10 ** -(9))).toFixed(5);
            console.log('Total estimated fee in BNB: ' + txPrice);

            let profit = calculateProfit(txPrice,fromTokenAmount,toTokenAmount,fromTokenAmount2,toTokenAmount2);
            if (profit > 0.001) {
                console.log(color.green('OPPORTUNITY OF: ' + profit));
                bestTokens.push(toTokenSymbol + ':' + profit);
                i--;
                for (let j of bestTokens) {
                    console.log(color.yellow([j]));
                }
            }

            console.log('-------------------------------------');

        } catch (error) {
            console.log(error);
        }
    }
}


function calculateProfit(_txPrice,_fromTokenAmount,_toTokenAmount,_fromTokenAmount2,_toTokenAmount2){
    let slippage = 1;
    let approvalfee = 0.000222; // aproximately
    let profit = ((slippage**2)*_toTokenAmount)/(_fromTokenAmount2/_toTokenAmount2)-(_fromTokenAmount)-(_txPrice)-(approvalfee);
    console.log("PROFIT: "+profit);

}


async function approve(_tokenAddress) {
    try {
        let approveURL = {
            hostname: 'https://api.1inch.exchange/v3.0/56/approve/calldata?',
            options: {
                params: {
                    tokenAddress: _tokenAddress,
                }
            }
        }
        var globalData = await apiCaller(approveURL, '0xff'); //call the api to get the data, and wait until it returns
        //console.log(globalData);
    } catch (error) {
        console.log(error);
    }

    //we need to convert the gasPrice to hex
    let temp = globalData;
    let gasPrice = parseInt(temp.gasPrice); //get the gasPrice from the tx
    gasPrice = '0x' + gasPrice.toString(16); //add a leading 0x after converting from decimal to hexadecimal
    temp.gasPrice = gasPrice;
    let value = parseInt(temp.value); //get the value from the transaction
    value = '0x' + value.toString(16); //add a leading 0x after converting from decimal to hexadecimal
    temp.value = value; //set the value of value in the transaction object
    return temp;
}


async function _getGasPrice() {
    var gasPrice = await web32.eth.getGasPrice();
    // console.log(gasPrice);
}

/**
 * Sends a transaction based on serialized data
 * @param {the serialized transaction you want to send} tx 
 */
function sendTransaction(tx) {
    try {
        let temp = '0x' + tx.toString('hex'); //make the transaction into a hexadecimal string
        web3.eth.sendSignedTransaction(temp).on('receipt', console.log);
        console.log('Transaction Succes')
    } catch (error) {
        console.log(error);
    }
}


function signTx(tx) {
    let temp = new Tx(tx, {
        common: binanceSmartChain
    });
    temp.sign(privateKey);
    //console.log(temp);
    return temp.serialize();
}

async function apiCaller(url, nonce) {
    let temp = await axios.get(url.hostname, url.options); //get the api call
    //console.log(temp)
    temp = temp.data; 
    return temp;
}



driver(); 



/*
OPTIMIZACIONES
-Buscar los mejores tokens para hacer el arbitraje
-De alguna forma correr una parte del array de tokens en un script y otra parte en otro asi puedo buscar x2 mas rapido
-Optimizar otros aspectos de las llamadas GET y parametros en la API de 1inch
-Empezar con BUSD ademas de BNB 
-Ignorar los token que requieren un slippage alto como las shitcoin Safemoon o yPanda
-Calcular el slippage que estoy dispuesto a tolerar si hay un cambio de precio
-Poner un precio de gas mas alto 6 
-Disminuir la complejidad del ruteo aumenta las posibilidades de un swap exitoso debido al cambio de precio
-Es mejor Maximum return o Lowest gas cost? como se implementaria mediante la API?
-Aprobar los tokens a UNLIMITED

*/
