<script setup lang="ts">

const withoutLiaas = `/*
  npm install web3
*/

const Web3 = require('web3');

const web3 = new Web3(
  new Web3.providers.HttpProvider('https://Your_RPC.provider/v3/YOUR_API_KEY')
);

const usdtContractAddress = 'Contract_Address';
const usdtABI = [
  // Include the ABI of the USDT contract here
];
const usdtContract = new web3.eth.Contract(usdtABI, usdtContractAddress);

async function getUSDTBalance(address) {
  try {
    const balance = await usdtContract.methods.balanceOf(address).call();
  } catch (error) {
    console.error('Error fetching USDT balance:', error);
  }
}

async function transferUSDT(senderPrivateKey, toAddress, amount) {
  try {
    const senderAccount = web3.eth.accounts.privateKeyToAccount(senderPrivateKey);
    const senderAddress = senderAccount.address;

    const gasPrice = await web3.eth.getGasPrice();
    const gasLimit = 21000;
    const nonce = await web3.eth.getTransactionCount(senderAddress);

    const txObject = {
      from: senderAddress,
      to: usdtContractAddress,
      gasPrice,
      gas: gasLimit,
      nonce,
      data: usdtContract.methods.transfer(toAddress, amount).encodeABI(),
    };

    const signedTx = await web3.eth.accounts.signTransaction(
      txObject,
      senderPrivateKey
    );
    const txHash = await web3.eth.sendSignedTransaction(
      signedTx.rawTransaction
    );

    console.log('USDT transfer successful. Transaction Hash:', txHash);
  } catch (error) {
    console.error('Error transferring USDT:', error);
  }
}

const addressToCheck = '0xYourAddress';
getUSDTBalance(addressToCheck);`

const withLiaas = `/**
 * npm install @Liaas-js
**/

const Liaas = require("Liaas-js");
const LiaasSdk = new Liaas();

const response = await LiaasSdk.createFungibleTokens(wallet, ...);
console.log("Created Token", response);`
</script>

<template>
  <main class="bg-white dark:bg-neutral-950">
    <CodeCompare
      :left="{
        title: 'Without Liaas™',
        lang: 'JavaScript',
        code: withoutLiaas
      }"
      :right="{
        title: 'With Liaas™',
        lang: 'JavaScript',
        code: withLiaas
      }"
    />
  </main>
</template>
