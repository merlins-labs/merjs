import * as _m0 from "protobufjs/minimal";
import { Long } from "../../../helpers";
export interface Sale {
    /** Destination for the earned token_in */
    treasury: string;
    id: Long;
    /**
     * token_out is a token denom to be bootstraped. May be referred as base
     * currency, or a sale token.
     */
    tokenOut: string;
    /**
     * token_in is a token denom used to buy sale tokens (`token_out`). May be
     * referred as quote_currency or payment token.
     */
    tokenIn: string;
    /** total number of `tokens_out` to be sold during the continuous sale. */
    tokenOutSupply: string;
    /** start time when the token emission starts. */
    startTime?: Date;
    /**
     * end time when the token emission ends. Can't be bigger than start +
     * 139years (to avoid round overflow)
     */
    endTime?: Date;
    /** Round number when the sale was last time updated. */
    round: Long;
    /** Last round of the Sale; */
    endRound: Long;
    /** amout of remaining token_out to sell */
    outRemaining: string;
    /** amount of token_out sold */
    outSold: string;
    /** out token per share */
    outPerShare: string;
    /** total amount of currently staked coins (token_in) but not spent coins. */
    staked: string;
    /** total amount of earned coins (token_in) */
    income: string;
    /** total amount of shares */
    shares: string;
    /** Name for the sale. */
    name: string;
    /** URL with sale and project details. */
    url: string;
}
export interface SaleSDKType {
    /** Destination for the earned token_in */
    treasury: string;
    id: Long;
    /**
     * token_out is a token denom to be bootstraped. May be referred as base
     * currency, or a sale token.
     */
    token_out: string;
    /**
     * token_in is a token denom used to buy sale tokens (`token_out`). May be
     * referred as quote_currency or payment token.
     */
    token_in: string;
    /** total number of `tokens_out` to be sold during the continuous sale. */
    token_out_supply: string;
    /** start time when the token emission starts. */
    start_time?: Date;
    /**
     * end time when the token emission ends. Can't be bigger than start +
     * 139years (to avoid round overflow)
     */
    end_time?: Date;
    /** Round number when the sale was last time updated. */
    round: Long;
    /** Last round of the Sale; */
    end_round: Long;
    /** amout of remaining token_out to sell */
    out_remaining: string;
    /** amount of token_out sold */
    out_sold: string;
    /** out token per share */
    out_per_share: string;
    /** total amount of currently staked coins (token_in) but not spent coins. */
    staked: string;
    /** total amount of earned coins (token_in) */
    income: string;
    /** total amount of shares */
    shares: string;
    /** Name for the sale. */
    name: string;
    /** URL with sale and project details. */
    url: string;
}
/** UserPosition represents user account in a sale */
export interface UserPosition {
    shares: string;
    /** total number of currently staked tokens */
    staked: string;
    /** last token/share ratio */
    outPerShare: string;
    /** amount of token_in spent */
    spent: string;
    /** Amount of accumulated, not withdrawn, purchased tokens (token_out) */
    purchased: string;
}
/** UserPosition represents user account in a sale */
export interface UserPositionSDKType {
    shares: string;
    /** total number of currently staked tokens */
    staked: string;
    /** last token/share ratio */
    out_per_share: string;
    /** amount of token_in spent */
    spent: string;
    /** Amount of accumulated, not withdrawn, purchased tokens (token_out) */
    purchased: string;
}
export declare const Sale: {
    encode(message: Sale, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Sale;
    fromPartial(object: Partial<Sale>): Sale;
};
export declare const UserPosition: {
    encode(message: UserPosition, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UserPosition;
    fromPartial(object: Partial<UserPosition>): UserPosition;
};
