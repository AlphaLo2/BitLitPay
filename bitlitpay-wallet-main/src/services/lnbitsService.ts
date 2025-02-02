import axios from 'axios';

const LNbitsAPI = axios.create({
  baseURL: 'https://your-lnbits-instance.com/api', // Replace with your LNbits instance URL
  headers: {
    'Content-Type': 'application/json',
    // Add any required headers here, such as authorization
  },
});

export const createInvoice = async (amount: number, memo: string) => {
  try {
    const response = await LNbitsAPI.post('/v1/payments', {
      amount,
      memo,
    });
    return response.data;
  } catch (error) {
    console.error('Error creating invoice:', error);
    throw error;
  }
};

export const getWalletBalance = async () => {
  try {
    const response = await LNbitsAPI.get('/v1/wallet');
    return response.data.balance;
  } catch (error) {
    console.error('Error fetching wallet balance:', error);
    throw error;
  }
};

export const createLightningWallet = async () => {
  try {
    const response = await LNbitsAPI.post('/v1/wallets', {
      type: 'lightning',
    });
    return response.data;
  } catch (error) {
    console.error('Error creating Lightning wallet:', error);
    throw error;
  }
};

export const createOnChainWallet = async () => {
  try {
    const response = await LNbitsAPI.post('/v1/wallets', {
      type: 'on-chain',
    });
    return response.data;
  } catch (error) {
    console.error('Error creating On-chain wallet:', error);
    throw error;
  }
};

// Add more functions to interact with other LNbits API endpoints as needed 