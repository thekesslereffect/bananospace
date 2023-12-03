// pages/api/claim.js

import bananojs from '@bananocoin/bananojs';

// In-memory storage for demo purposes
const claimRecords = {};

bananojs.setBananodeApiUrl('https://kaliumapi.appditto.com/api');

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { address } = req.body;

        // Check if address is valid
        if (!bananojs.getAccountPublicKey(address)) {
            return res.status(400).json({ error: 'Invalid Banano address' });
        }

        // Check claim history
        const lastClaimTime = claimRecords[address];
        const currentTime = Date.now();
        if (lastClaimTime && currentTime - lastClaimTime < 24 * 60 * 60 * 1000) { // 24 hours
            return res.status(429).json({ error: 'Claim limit reached. Please wait 24 hours.' });
        }

        // Send Banano (replace with actual sending logic)
        const amount = "10000"; // Amount to send, adjust accordingly
        // const seed = "YOUR_SERVER_WALLET_SEED";
        // const privateKey = bananojs.getPrivateKey(seed, 0);
        // await bananojs.sendBananoWithdrawalFromSeed(seed, 0, address, amount);

        // Record the claim
        claimRecords[address] = currentTime;

        res.status(200).json({ success: true, message: `Sent ${amount} Banano to ${address}` });
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
