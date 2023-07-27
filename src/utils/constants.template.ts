/* eslint-disable prefer-const */
import { BigInt, BigDecimal, Address } from '@graphprotocol/graph-ts'
import { Factory as FactoryContract } from '../types/templates/Pool/Factory'

export const ADDRESS_ZERO = '0x0000000000000000000000000000000000000000'
export const FACTORY_ADDRESS = '{{factoryv3_address}}'

export const WETH9_ADDRESS = '{{weth9_address}}'
export const DAI_ADDRESS = '{{dai_address}}' // DAI
export const USDC_ADDRESS = '{{usdc_address}}' // USDC
export const USDT_ADDRESS = '{{usdt_address}}' // USDT
export const WBTC_ADDRESS = '{{wbtc_address}}' // WBTC

export const USDT_WETH9_03_POOL = '{{usdt_weth9_03_pool}}'
export const USDC_WETH9_03_POOL = '{{usdc_weth9_03_pool}}'
export const DAI_WETH9_03_POOL = '{{dai_weth9_03_pool}}'

export let ZERO_BI = BigInt.fromI32(0)
export let ONE_BI = BigInt.fromI32(1)
export let ZERO_BD = BigDecimal.fromString('0')
export let ONE_BD = BigDecimal.fromString('1')
export let BI_18 = BigInt.fromI32(18)

export let factoryContract = FactoryContract.bind(Address.fromString(FACTORY_ADDRESS))
