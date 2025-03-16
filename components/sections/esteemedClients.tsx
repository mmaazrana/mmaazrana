import React, { FC } from "react";
import { clientColorIconComponents } from "@/helpers/constants";
import Typography from "@/components/Typography";
import { TextTypes, WeightTypes } from "@/helpers/enums";

interface EsteemedClientsProps {}

const EsteemedClients: FC<EsteemedClientsProps> = () => {
  return (
    <>
      <div
        className={"flex flex-row gap-3 md:gap-4 w-full justify-between h-32"}
      >
        {clientColorIconComponents.slice(0, 7).map(({ Icon, props }, index) => (
          <div key={index}>
            <Icon
              {...props}
              className={
                "w-full h-full opacity-50 hover:opacity-100 transition-opacity duration-300"
              }
            />{" "}
          </div>
        ))}
      </div>
      <div className={"flex flex-col justify-center items-center w-full gap-2"}>
        <Typography
          type={TextTypes["6xl"]}
          weight={WeightTypes.extraBold}
          className={"text-center"}
        >
          Esteemed Clients
        </Typography>
        <Typography
          type={TextTypes["2xl"]}
          weight={WeightTypes.regular}
          className={"text-center max-w-3xl"}
        >
          Detail obsessed Product Designer, creating timeless and aesthetic
          products, helping you stand out over various platforms
        </Typography>
      </div>
      <div
        className={"flex flex-row gap-3 md:gap-4 w-full justify-between h-24"}
      >
        {clientColorIconComponents.slice(7).map(({ Icon, props }, index) => (
          <div key={index}>
            <Icon
              {...props}
              className={
                "w-full h-full opacity-50 hover:opacity-100 transition-opacity duration-300"
              }
            />{" "}
          </div>
        ))}
      </div>
    </>
  );
};

export default EsteemedClients;
