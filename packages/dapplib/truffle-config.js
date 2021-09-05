require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hover enrich sun food struggle return noble honey coral light army genius'; 
let testAccounts = [
"0x033e974447a921d04901ffd84eeea8738c3dab54cb89f9082fab987d60153ed1",
"0x0622c3c84f06648b5e2e52f211e45e18f036a9faf73d343002c8371a5ba32fb3",
"0x227a1669b3b92384a4a74bcb04c966ba427f3e3b63b9effdf90b5e46de88350e",
"0x494af3ec23180f8707c666265ebaa724d6f1d291cd3e88e43e461d63a1d7789e",
"0x1f3857d3588fd9de7127c91e2987a237824764eb52c34717f59aa569c37efd72",
"0xb07096ab92e9fa3979af8e3188b43ba978b5ae417a98f34f32253f7062cfd21f",
"0xb28021f9800cd684961eeae246051befe517019f4477bdb59bd4194c5729b9ea",
"0x6bf017303707ae868aa6f44884f937ec03ac528e7e79447d7772db533531d935",
"0xd132c51223eed6358f6dc89d7f49025998c3f30385992a1528fff9badd26a45a",
"0x99fd55006eea1d2c1f8f0d18e81f6581c8ac7e719149663adf3748ba92fd52f3"
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

