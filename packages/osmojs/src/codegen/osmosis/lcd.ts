import { LCDClient } from "@osmonauts/lcd";
export const createLCDClient = async ({
  restEndpoint
}: {
  restEndpoint: string;
}) => {
  const requestClient = new LCDClient({
    restEndpoint
  });
  return {
    cosmos: {
      authz: {
        v1beta1: new (await import("../cosmos/authz/v1beta1/query.lcd")).LCDQueryClient({
          requestClient
        })
      },
      bank: {
        v1beta1: new (await import("../cosmos/bank/v1beta1/query.lcd")).LCDQueryClient({
          requestClient
        })
      },
      distribution: {
        v1beta1: new (await import("../cosmos/distribution/v1beta1/query.lcd")).LCDQueryClient({
          requestClient
        })
      },
      gov: {
        v1: new (await import("../cosmos/gov/v1/query.lcd")).LCDQueryClient({
          requestClient
        }),
        v1beta1: new (await import("../cosmos/gov/v1beta1/query.lcd")).LCDQueryClient({
          requestClient
        })
      },
      staking: {
        v1beta1: new (await import("../cosmos/staking/v1beta1/query.lcd")).LCDQueryClient({
          requestClient
        })
      },
      tx: {
        v1beta1: new (await import("../cosmos/tx/v1beta1/service.lcd")).LCDQueryClient({
          requestClient
        })
      },
      upgrade: {
        v1beta1: new (await import("../cosmos/upgrade/v1beta1/query.lcd")).LCDQueryClient({
          requestClient
        })
      }
    },
    osmosis: {
      epochs: {
        v1beta1: new (await import("./epochs/query.lcd")).LCDQueryClient({
          requestClient
        })
      },
      gamm: {
        v1beta1: new (await import("./gamm/v1beta1/query.lcd")).LCDQueryClient({
          requestClient
        }),
        v2: new (await import("./gamm/v2/query.lcd")).LCDQueryClient({
          requestClient
        })
      },
      ibcratelimit: {
        v1beta1: new (await import("./ibc-rate-limit/v1beta1/query.lcd")).LCDQueryClient({
          requestClient
        })
      },
      incentives: new (await import("./incentives/query.lcd")).LCDQueryClient({
        requestClient
      }),
      lockup: new (await import("./lockup/query.lcd")).LCDQueryClient({
        requestClient
      }),
      mint: {
        v1beta1: new (await import("./mint/v1beta1/query.lcd")).LCDQueryClient({
          requestClient
        })
      },
      poolincentives: {
        v1beta1: new (await import("./pool-incentives/v1beta1/query.lcd")).LCDQueryClient({
          requestClient
        })
      },
      superfluid: new (await import("./superfluid/query.lcd")).LCDQueryClient({
        requestClient
      }),
      tokenfactory: {
        v1beta1: new (await import("./tokenfactory/v1beta1/query.lcd")).LCDQueryClient({
          requestClient
        })
      },
      twap: {
        v1beta1: new (await import("./twap/v1beta1/query.lcd")).LCDQueryClient({
          requestClient
        })
      },
      txfees: {
        v1beta1: new (await import("./txfees/v1beta1/query.lcd")).LCDQueryClient({
          requestClient
        })
      }
    }
  };
};