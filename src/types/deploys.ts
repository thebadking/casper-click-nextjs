export interface DeploysPayload {
  data: DatumDeploysPayload[];
  pageCount: number;
  itemCount: number;
  pages: Page[];
}

export interface DatumDeploysPayload {
  deploy_hash: string;
  block_hash: string;
  caller_public_key: string;
  execution_type_id: number;
  contract_hash: null | string;
  contract_package_hash: null | string;
  cost: string;
  payment_amount: string;
  error_message: null | string;
  timestamp: Date;
  status: Status;
  args: Args;
  amount: string;
  entry_point: EntryPoint | null;
  contract_package: ContractPackage | null;
  currency_cost: number;
  rate: number;
  current_currency_cost: number;
}

export interface Args {
  id?: ID;
  amount: Amount;
  target?: Target;
  to_address?: Amount;
  deploy_type?: Amount;
  delegator?: Amount;
  validator?: Amount;
}

export interface Amount {
  parsed: string;
  cl_type: ClTypeEnum;
}

export enum ClTypeEnum {
  PublicKey = "PublicKey",
  String = "String",
  U512 = "U512",
}

export interface ID {
  parsed: number | null;
  cl_type: IDClType;
}

export interface IDClType {
  Option: string;
}

export interface Target {
  parsed: string;
  cl_type: ClTypeClTypeClass | ClTypeEnum;
}

export interface ClTypeClTypeClass {
  ByteArray: number;
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

export enum Status {
  Executed = "executed",
}

export interface Page {
  number: number;
  url: string;
}

export const getExecutionTypeById = (id: number) => {
  switch (id) {
    case 1:
      return "WASM deploy";

    case 2:
      return "Delegate/Undelegate";

    case 3:
      break;
    case 4:
      break;
    case 5:
      break;
    case 6:
      return "Transfer";

    case 1:
      break;
    case 1:
      break;

    default:
      break;
  }
};
