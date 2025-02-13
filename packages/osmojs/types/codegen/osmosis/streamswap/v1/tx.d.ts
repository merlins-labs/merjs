import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Duration, DurationSDKType } from "../../../google/protobuf/duration";
import * as _m0 from "protobufjs/minimal";
import { Long } from "../../../helpers";
export interface MsgCreateSale {
    /**
     * Sale creator and the account which provides token (token_out) to the sale.
     * When processing this message, token_out
     */
    creator: string;
    /**
     * token_in is a denom used to buy `token_out`. May be referred as a
     * "quote currency".
     */
    tokenIn: string;
    /**
     * token_out is a coin supply (denom + amount) to sell. May be referred as
     * "base currency". The whole supply will be transferred from the creator
     * to the module and will be sold during the sale.
     */
    tokenOut?: Coin;
    /**
     * Maximum fee the creator is going to pay for creating a sale. The creator
     * will be charged params.SaleCreationFee. Transaction will fail if
     * max_fee is smaller than params.SaleCreationFee. If empty, the creator
     * doesn't accept any fee.
     */
    maxFee: Coin[];
    /** start time when the token sale starts. */
    startTime?: Date;
    /** duration time that the sale takes place over */
    duration?: Duration;
    /**
     * Recipient is the account which receives earned `token_in` from when the
     * sale is finalized. If not defined (empty) the creator
     * account will be used.
     */
    recipient: string;
    /** Name for the sale, max 40 characters, min 4. Required. */
    name: string;
    /**
     * URL with sale and project details. Can be a link a link to IPFS,
     * hackmd, project page, blog post... Max 120 characters. Must be
     * valid agains Go url.ParseRequestURI. Required.
     */
    url: string;
}
export interface MsgCreateSaleSDKType {
    /**
     * Sale creator and the account which provides token (token_out) to the sale.
     * When processing this message, token_out
     */
    creator: string;
    /**
     * token_in is a denom used to buy `token_out`. May be referred as a
     * "quote currency".
     */
    token_in: string;
    /**
     * token_out is a coin supply (denom + amount) to sell. May be referred as
     * "base currency". The whole supply will be transferred from the creator
     * to the module and will be sold during the sale.
     */
    token_out?: CoinSDKType;
    /**
     * Maximum fee the creator is going to pay for creating a sale. The creator
     * will be charged params.SaleCreationFee. Transaction will fail if
     * max_fee is smaller than params.SaleCreationFee. If empty, the creator
     * doesn't accept any fee.
     */
    max_fee: CoinSDKType[];
    /** start time when the token sale starts. */
    start_time?: Date;
    /** duration time that the sale takes place over */
    duration?: DurationSDKType;
    /**
     * Recipient is the account which receives earned `token_in` from when the
     * sale is finalized. If not defined (empty) the creator
     * account will be used.
     */
    recipient: string;
    /** Name for the sale, max 40 characters, min 4. Required. */
    name: string;
    /**
     * URL with sale and project details. Can be a link a link to IPFS,
     * hackmd, project page, blog post... Max 120 characters. Must be
     * valid agains Go url.ParseRequestURI. Required.
     */
    url: string;
}
export interface MsgCreateSaleResponse {
    saleId: Long;
}
export interface MsgCreateSaleResponseSDKType {
    sale_id: Long;
}
export interface MsgSubscribe {
    /** sender is an account address adding a deposit */
    sender: string;
    /** ID of an existing sale. */
    saleId: Long;
    /** number of sale.token_in staked by a user. */
    amount: string;
}
export interface MsgSubscribeSDKType {
    /** sender is an account address adding a deposit */
    sender: string;
    /** ID of an existing sale. */
    sale_id: Long;
    /** number of sale.token_in staked by a user. */
    amount: string;
}
export interface MsgWithdraw {
    /** sender is an account address subscribed to the sale_id */
    sender: string;
    /** ID of a sale. */
    saleId: Long;
    /**
     * amount of tokens_in to withdraw. Must be at most the amount of not spent
     * tokens, unless set to null - then all remaining balance will be withdrawn.
     */
    amount: string;
}
export interface MsgWithdrawSDKType {
    /** sender is an account address subscribed to the sale_id */
    sender: string;
    /** ID of a sale. */
    sale_id: Long;
    /**
     * amount of tokens_in to withdraw. Must be at most the amount of not spent
     * tokens, unless set to null - then all remaining balance will be withdrawn.
     */
    amount: string;
}
export interface MsgExitSale {
    /** sender is an account address exiting a sale */
    sender: string;
    /** ID of an existing sale. */
    saleId: Long;
}
export interface MsgExitSaleSDKType {
    /** sender is an account address exiting a sale */
    sender: string;
    /** ID of an existing sale. */
    sale_id: Long;
}
export interface MsgExitSaleResponse {
    /** Purchased amount of "out" tokens withdrawn to the user. */
    purchased: string;
}
export interface MsgExitSaleResponseSDKType {
    /** Purchased amount of "out" tokens withdrawn to the user. */
    purchased: string;
}
export interface MsgFinalizeSale {
    /** sender is an account signing the message and triggering the finalization. */
    sender: string;
    /** ID of an existing sale. */
    saleId: Long;
}
export interface MsgFinalizeSaleSDKType {
    /** sender is an account signing the message and triggering the finalization. */
    sender: string;
    /** ID of an existing sale. */
    sale_id: Long;
}
export interface MsgFinalizeSaleResponse {
    /** Income amount of token_in sent to the sale recipient. */
    income: string;
}
export interface MsgFinalizeSaleResponseSDKType {
    /** Income amount of token_in sent to the sale recipient. */
    income: string;
}
export declare const MsgCreateSale: {
    encode(message: MsgCreateSale, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateSale;
    fromPartial(object: Partial<MsgCreateSale>): MsgCreateSale;
};
export declare const MsgCreateSaleResponse: {
    encode(message: MsgCreateSaleResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateSaleResponse;
    fromPartial(object: Partial<MsgCreateSaleResponse>): MsgCreateSaleResponse;
};
export declare const MsgSubscribe: {
    encode(message: MsgSubscribe, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgSubscribe;
    fromPartial(object: Partial<MsgSubscribe>): MsgSubscribe;
};
export declare const MsgWithdraw: {
    encode(message: MsgWithdraw, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgWithdraw;
    fromPartial(object: Partial<MsgWithdraw>): MsgWithdraw;
};
export declare const MsgExitSale: {
    encode(message: MsgExitSale, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgExitSale;
    fromPartial(object: Partial<MsgExitSale>): MsgExitSale;
};
export declare const MsgExitSaleResponse: {
    encode(message: MsgExitSaleResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgExitSaleResponse;
    fromPartial(object: Partial<MsgExitSaleResponse>): MsgExitSaleResponse;
};
export declare const MsgFinalizeSale: {
    encode(message: MsgFinalizeSale, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgFinalizeSale;
    fromPartial(object: Partial<MsgFinalizeSale>): MsgFinalizeSale;
};
export declare const MsgFinalizeSaleResponse: {
    encode(message: MsgFinalizeSaleResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgFinalizeSaleResponse;
    fromPartial(object: Partial<MsgFinalizeSaleResponse>): MsgFinalizeSaleResponse;
};
