export interface IPool {
  annualPercentageRate?: string,
  asset?: string,
  assetDepth?: string,
  assetPrice?: string,
  assetPriceUSD?: string,
  liquidityUnits?: string,
  nativeDecimal?: string,
  poolAPY?: string,
  runeDepth?: string,
  saversAPR?: string,
  saversDepth?: string,
  saversUnits?: string,
  status?: string,
  synthSupply?: string,
  synthUnits?: string,
  totalCollateral?: string,
  totalDebtTor?: string,
  units?: string,
  volume24h?: string,
  chain?: string,
  token?: string,
  ticker?: string,
  image?: string,
  name?: string
}

export interface IQuoteSwapResponse {
  inbound_address: string,
  memo:  string,
  expected_amount_out: string,
  inbound_confirmation_blocks: number,
  inbound_confirmation_seconds: number,
  outbound_delay_blocks: number,
  outbound_delay_seconds: number,
  fees: {
    asset: string,
    affiliate: string,
    outbound: string
  },
  slippage_bps: number
}