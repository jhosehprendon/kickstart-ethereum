import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
    JSON.parse(CampaignFactory.interface),
    '0x4FA9b0c0CbE7aca744C14D9dF7FC962BDF39684c'
);

export default instance;