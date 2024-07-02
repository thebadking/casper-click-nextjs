export interface DeployPayload {
  deploy_hash: string;
  block_hash: string;
  caller_public_key: string;
  execution_type_id: number;
  contract_hash: string;
  contract_package_hash: string;
  cost: string;
  payment_amount: string;
  error_message: null;
  timestamp: Date;
  status: string;
  args: Args;
  amount: string;
  entry_point: EntryPoint;
  contract_package: ContractPackage;
  currency_cost: number;
  rate: number;
  current_currency_cost: number;
}

export interface Args {
  amount: Amount;
  delegator: Amount;
  validator: Amount;
}

export interface Amount {
  parsed: string;
  cl_type: string;
}

export interface ContractPackage {
  contract_package_hash: string;
  owner_public_key: null;
  contract_type_id: number;
  contract_name: string;
  contract_description: string;
  metadata: null;
  timestamp: Date;
}

export interface EntryPoint {
  id: string;
  contract_hash: string;
  contract_package_hash: string;
  name: string;
  action_type_id: null;
}
