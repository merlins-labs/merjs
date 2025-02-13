import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgCreateSale, MsgSubscribe, MsgWithdraw, MsgExitSale, MsgFinalizeSale } from "./tx";
export declare const registry: ReadonlyArray<[string, GeneratedType]>;
export declare const load: (protoRegistry: Registry) => void;
export declare const MessageComposer: {
    encoded: {
        createSale(value: MsgCreateSale): {
            typeUrl: string;
            value: Uint8Array;
        };
        subscribe(value: MsgSubscribe): {
            typeUrl: string;
            value: Uint8Array;
        };
        withdraw(value: MsgWithdraw): {
            typeUrl: string;
            value: Uint8Array;
        };
        exitSale(value: MsgExitSale): {
            typeUrl: string;
            value: Uint8Array;
        };
        finalizeSale(value: MsgFinalizeSale): {
            typeUrl: string;
            value: Uint8Array;
        };
    };
    withTypeUrl: {
        createSale(value: MsgCreateSale): {
            typeUrl: string;
            value: MsgCreateSale;
        };
        subscribe(value: MsgSubscribe): {
            typeUrl: string;
            value: MsgSubscribe;
        };
        withdraw(value: MsgWithdraw): {
            typeUrl: string;
            value: MsgWithdraw;
        };
        exitSale(value: MsgExitSale): {
            typeUrl: string;
            value: MsgExitSale;
        };
        finalizeSale(value: MsgFinalizeSale): {
            typeUrl: string;
            value: MsgFinalizeSale;
        };
    };
    fromPartial: {
        createSale(value: MsgCreateSale): {
            typeUrl: string;
            value: MsgCreateSale;
        };
        subscribe(value: MsgSubscribe): {
            typeUrl: string;
            value: MsgSubscribe;
        };
        withdraw(value: MsgWithdraw): {
            typeUrl: string;
            value: MsgWithdraw;
        };
        exitSale(value: MsgExitSale): {
            typeUrl: string;
            value: MsgExitSale;
        };
        finalizeSale(value: MsgFinalizeSale): {
            typeUrl: string;
            value: MsgFinalizeSale;
        };
    };
};
