require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'give nation flush special drift release night hospital include praise army gauge'; 
let testAccounts = [
"0x30221f22f67ff80cd56fd698f0e71d42ab0fc40e8093742237b744b9255566c2",
"0x93061dac745837b71d5c66176df1c341cd1dce90c3ac3eb4a3381f1af5dbdd5a",
"0xe457c65b67bfc4a83e8e136df25482433529c4f35ece2a32687334c7981f9c47",
"0x55405f3440ec5d9e772aee6da883fe8d934d83dd042d3b754b6229c89996aa7c",
"0x752343041807e345433047a622a1074ccd6dea2fd51305728dc140f6c9ee5817",
"0xb71b3752764a5b07871940fe21b4fb25f5911eb20bab596a3f1b332932c43841",
"0x5be0dffa376335b957146e127f642572657c89cfd5e385ba0b2a430ceccac47d",
"0x43522ac1063ac96ef2062cbf65c294c2946723f21fb081f4480cf184c516f46f",
"0x1f2e01f8df43e2f26616bcc37ed8a083ed3f193f04e704d2c7c2e2d47cfce8cd",
"0x57901d74c94696983f3cc105e1adcf374f4c1bf30788f963da46b2b94b6a3c37"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

