import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Duration, DurationSDKType } from "../../../google/protobuf/duration";
import * as _m0 from "protobufjs/minimal";
/** Params holds parameters for the streamswap module */
export interface Params {
    /**
     * fee charged when creating a new sale. The fee will go to the
     * sale_fee_recipient unless it is not defined (empty).
     */
    saleCreationFee: Coin[];
    /** bech32 address of the fee recipient */
    saleCreationFeeRecipient: string;
    /**
     * minimum amount duration of time between the sale creation and the sale
     * start time.
     */
    minDurationUntilStartTime?: Duration;
    /** minimum duration for every new sale. */
    minSaleDuration?: Duration;
}
/** Params holds parameters for the streamswap module */
export interface ParamsSDKType {
    /**
     * fee charged when creating a new sale. The fee will go to the
     * sale_fee_recipient unless it is not defined (empty).
     */
    sale_creation_fee: CoinSDKType[];
    /** bech32 address of the fee recipient */
    sale_creation_fee_recipient: string;
    /**
     * minimum amount duration of time between the sale creation and the sale
     * start time.
     */
    min_duration_until_start_time?: DurationSDKType;
    /** minimum duration for every new sale. */
    min_sale_duration?: DurationSDKType;
}
export declare const Params: {
    encode(message: Params, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Params;
    fromPartial(object: Partial<Params>): Params;
};
