import { gql } from "@apollo/client";

export const ACTIVE_WALLETS_BY_DAY_QUERY = gql`
  query GetActiveWalletsByDay($date: String!) {
    v_mat_active_addresses_detailed(
      order_by: { number_of_deploy_requested: desc }
      where: { date: { _gte: $date } }
    ) {
      public_key
      number_of_deploy_requested
    }
  }
`;

export const RICH_LIST = gql`
  query SearchRichlist($page: Int, $size: Int) {
    searchRichlist(page: $page, size: $size) {
      pages
      total
      items {
        address {
          publicKey
        }
        balance
        totalStakedAsDelegator
      }
    }
  }
`;
