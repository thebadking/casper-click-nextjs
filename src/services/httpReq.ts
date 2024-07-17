import qs from 'query-string';
import {
  AuctionMetricsPayload,
  PriceHistoryPayload,
  QueryConfig,
  StatusInfoPayload,
  SupplyInformationsPayload,
  TrendingNFTCollectionPayload
} from '../types';
import { CoinCommunityPayload } from '../types/coinGeckoTypes';
import { DelegationsPayload, ValidatorsPayload } from '../types/validators';
import { ContractPackage, DeploysPayload } from '../types/deploys';
import fetch, { fetchResponseHeaders } from './request';
import {
  BlocksValidatorPayload,
  DelegatorsPayload,
  RewardsDelegatorPayload,
  RewardsValidatorsPayload,
  ValidatorPayload
} from '../types/validator';
import { TransfersPayload } from '../types/transfers';
import {
  BalancePayload,
  DelegationsDetailsPayload,
  ItemFromHashAccountPayload,
  NFTByAccountPayload,
  RewardsPayload,
  TotalRewardAccountPayload,
  UndelegateTokensPayload
} from '../types/account';
import { BlocksPayload } from '../types/blocks';
import { FriendlyNFTByAccount } from '../types/nft';
import { DeployPayload } from '../types/deploy';
import { BlockPayload } from '../types/block';
import { ContractsPayload } from '../types/contracts';
import { RichList } from '../types/richlist';
import { Projects } from '../types/projects';

export const v1Prefix = '/v1';
export const statPrefix = '/stat';

export const pageSize = 12;
const coingecko_url = 'https://api.coingecko.com/api/v3/';
const casper_token_id = 'casper-network';
const make_api_url = 'https://event-store-api-clarity-mainnet.make.services/';
const friendly_market_url = 'https://nft-api.friendly.market/api/v1/';
const casper_holders_url = 'https://data.casperholders.com/';
const casper_ecosystem = 'https://casperecosystem.io/';

export const sendRequest = (config: QueryConfig) => {
  return fetch(qs.stringifyUrl({ url: config.url, query: config.query }), {
    method: config.method || 'GET',
    body: config.body,
    headers: config.headers
  });
};

export const getHistoryCasperPrice = (
  days: number,
  query?: { interval: string }
): Promise<PriceHistoryPayload> => {
  return sendRequest({
    url: `${coingecko_url}coins/${casper_token_id}/market_chart?vs_currency=usd&days=${days}`,
    query
  });
};

export const getCasperSupplyInfo = (): Promise<SupplyInformationsPayload> => {
  return sendRequest({
    url: `${make_api_url}supply/?is_cached=1`
  });
};

export const getAuctionMetrics = (): Promise<AuctionMetricsPayload> => {
  return sendRequest({
    url: `${make_api_url}auction-metrics`
  });
};

export const getTrandingNFTCollections = (): Promise<TrendingNFTCollectionPayload> => {
  return sendRequest({
    url: `${friendly_market_url}nft/collections/rankings?days=0&limit=100`
  });
};

export const getStatusInfos = (): Promise<StatusInfoPayload> => {
  return sendRequest({
    url: `${make_api_url}rpc/info_get_status`
  });
};

export const getDeploys = (
  page: number,
  limit: number = pageSize,
  contractPackage?: string
): Promise<DeploysPayload> => {
  return sendRequest({
    url: `${make_api_url}extended-deploys?page=${page}&limit=${limit}&fields=entry_point,contract_package&with_amounts_in_currency_id=1${
      contractPackage ? `&contract_package_hash=${contractPackage}` : ''
    }`
  });
};

export const getCoinCommunityData = (): Promise<CoinCommunityPayload> => {
  return sendRequest({
    url: `${coingecko_url}coins/${casper_token_id}?tickers=false&market_data=false&developer_data=true&sparkline=false`
  });
};

export const getCountLast14daysDeploys = () => {
  return sendRequest({
    url: `${casper_holders_url}full_stats`
  });
};

export const getAllValidators = (eraId: any): Promise<ValidatorsPayload> => {
  return sendRequest({
    url: `${make_api_url}validators?page=1&limit=100&era_id=${eraId}&fields=account_info,average_performance`
  });
};

export const getValidator = (publicKey: string): Promise<ValidatorPayload> => {
  return sendRequest({
    url: `${make_api_url}auction-validators/${publicKey}?fields=account_info,average_performance`
  });
};

export const getValidatorTotalRewards = (publicKey: string): Promise<RewardsValidatorsPayload> => {
  return sendRequest({
    url: `${make_api_url}validators/${publicKey}/total-rewards`
  });
};
export const getDelegatorsTotalRewards = (publicKey: string): Promise<RewardsValidatorsPayload> => {
  return sendRequest({
    url: `${make_api_url}delegators/${publicKey}/total-rewards`
  });
};
export const getValidatorTotalDelegatorsRewards = (
  publicKey: string
): Promise<RewardsValidatorsPayload> => {
  return sendRequest({
    url: `${make_api_url}validators/${publicKey}/total-delegator-rewards`
  });
};

export const getValidatorsListByDelegator = (
  publicKey: string,
  page?: number
): Promise<DelegatorsPayload> => {
  return sendRequest({
    url: `${make_api_url}auction-validators/${publicKey}/delegations?page=${
      page || 1
    }&limit=${pageSize}&fields=account_info`
  });
};

export const getDelegationsListByAccount = (
  publicKey: string,
  page?: number
): Promise<DelegationsPayload> => {
  return sendRequest({
    url: `${make_api_url}accounts/${publicKey}/delegations?page=${
      page || 1
    }&limit=${pageSize}&fields=account_info,validator`
  });
};

export const getRewardsByDelegator = (
  publicKey: string,
  page?: number
): Promise<RewardsDelegatorPayload> => {
  return sendRequest({
    url: `${make_api_url}validators/${publicKey}/rewards?page=${
      page || 1
    }&limit=${pageSize}&with_amounts_in_currency_id=1`
  });
};

export const getBlocksByValidator = (
  publicKey: string,
  page?: number
): Promise<BlocksValidatorPayload> => {
  return sendRequest({
    url: `${make_api_url}validators/${publicKey}/blocks?page=${page || 1}&limit=${pageSize}`
  });
};

export const getTotalRewardsByAccount = (publicKey: string): Promise<TotalRewardAccountPayload> => {
  return sendRequest({
    url: `${make_api_url}delegators/${publicKey}/total-rewards`
  });
};

export const getDelegationDetailsByAccount = (
  publicKey: string
): Promise<DelegationsDetailsPayload> => {
  return sendRequest({
    url: `${make_api_url}accounts/${publicKey}/delegations?page=1&limit=-1&fields=account_info`
  });
};

export const getTokenUndelegateByAccount = (
  publicKey: string,
  eraId: number
): Promise<UndelegateTokensPayload> => {
  return sendRequest({
    url: `${make_api_url}accounts/${publicKey}/tokens-in-undelegation/${eraId}`
  });
};

export const getItemFromHashAccount = (
  state_root_hash: string,
  accountHash: string
): Promise<ItemFromHashAccountPayload> => {
  return sendRequest({
    url: `${make_api_url}rpc/state_get_item?state_root_hash=${state_root_hash}&key=${accountHash}`
  });
};

export const getBalanceFromUref = (
  state_root_hash: string,
  purse_uref: string
): Promise<BalancePayload> => {
  return sendRequest({
    url: `${make_api_url}rpc/state_get_balance?state_root_hash=${state_root_hash}&purse_uref=${purse_uref}`
  });
};

export const getDeploysByAccount = (publicKey: string, page?: number): Promise<DeploysPayload> => {
  return sendRequest({
    url: `${make_api_url}accounts/${publicKey}/extended-deploys?page=${
      page || 1
    }&limit=${pageSize}&fields=entry_point,contract_package&with_amounts_in_currency_id=1`
  });
};

export const getTransfersByAccount = (
  publicKey: string,
  page?: number
): Promise<TransfersPayload> => {
  return sendRequest({
    url: `${make_api_url}accounts/${publicKey}/transfers?page=${
      page || 1
    }&limit=${pageSize}&with_extended_info=1&with_amounts_in_currency_id=1`
  });
};

export const getRewardsByAccount = (publicKey: string, page?: number): Promise<RewardsPayload> => {
  return sendRequest({
    url: `${make_api_url}delegators/${publicKey}/rewards?page=${
      page || 1
    }&limit=${pageSize}&with_amounts_in_currency_id=1`
  });
};

export const getCasperLiveNFTByAccount = (
  accountHash: string,
  page?: number
): Promise<NFTByAccountPayload> => {
  return sendRequest({
    url: `${make_api_url}accounts/${accountHash}/nft-tokens?page=${
      page || 1
    }&limit=${pageSize}&fields=contract_package`
  });
};

export const getFriendlyMarketNFTByAccount = (
  accountHash: any,
  page: number
): Promise<FriendlyNFTByAccount> => {
  return sendRequest({
    url: `${friendly_market_url}nft/owner/owned/null/${accountHash}?limit=${pageSize * page}&skip=${
      (page - 1) * pageSize
    }&filter=[]&sortBy=undefined&price=[null,null]&collections=[]&search=undefined&paymentToken=undefined&attributes=undefined`
  });
};

export const getDeployDetails = (id: string): Promise<DeployPayload> => {
  return sendRequest({
    url: `${make_api_url}extended-deploys/${id}?fields=entry_point,contract_package&with_amounts_in_currency_id=1`
  });
};

export const getDeployRaw = (id: string): Promise<any> => {
  return sendRequest({
    url: `${make_api_url}raw-processed-deploys/${id}`
  });
};

export const getBlocks = (page?: number): Promise<BlocksPayload> => {
  return sendRequest({
    url: `${make_api_url}blocks?page=${page}&limit=${pageSize}`
  });
};

export const getBlockDetails = (id: string): Promise<BlockPayload> => {
  return sendRequest({
    url: `${make_api_url}blocks/${id}`
  });
};

export const getDeploysFromBlock = (id: string, page?: number): Promise<DeploysPayload> => {
  return sendRequest({
    url: `${make_api_url}blocks/${id}/extended-deploys?page=${
      page || 1
    }&limit=${pageSize}&fields=entry_point,contract_package&with_amounts_in_currency_id=1`
  });
};

export const getContracts = (page: number): Promise<ContractsPayload> => {
  return sendRequest({
    url: `${make_api_url}contract-packages?with_deploys_num=30&page=${
      page || 1
    }&limit=${pageSize}&order_by=timestamp&order_direction=DESC`
  });
};

export const getContract = (id: string): Promise<ContractPackage> => {
  return sendRequest({
    url: `${make_api_url}contracts/${id}?fields=contract_package`
  });
};

export const getContractPackage = (id: string): Promise<ContractPackage> => {
  return sendRequest({
    url: `${make_api_url}contract-packages/${id}`
  });
};

export const getRichList = (page: number): Promise<RichList[]> => {
  return sendRequest({
    url: `${casper_holders_url}rich_list?limit=${25}&offset=${(page - 1) * 25}`
  });
};

export const getCasperProjects = (): Promise<Projects> => {
  return sendRequest({
    url: `/api/projects`
  });
};

export const getAccountNumber = () => {
  return fetchResponseHeaders(qs.stringifyUrl({ url: `${casper_holders_url}accounts` }), {
    method: 'HEAD',
    headers: { prefer: 'count=exact' }
  });
};

export const getHolderstNumber = () => {
  return fetchResponseHeaders(
    qs.stringifyUrl({
      url: `${casper_holders_url}rich_list?total=gt.10000000000`
    }),
    {
      method: 'HEAD',
      headers: { prefer: 'count=exact' }
    }
  );
};
