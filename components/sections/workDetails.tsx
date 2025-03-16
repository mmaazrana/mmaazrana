import React from "react";
import { clientData } from "@/helpers/constants";
import Accordion from "@/components/accordion";
import Typography from "@/components/Typography";
import { TextTypes, WeightTypes } from "@/helpers/enums";

const WorkDetails = () => {
  return (
    <>
      {clientData.map((data, index) => {
        return (
          <Accordion
            key={index}
            heading={data.heading}
            isExpanded
            content={
              <div className={"flex flex-col gap-6"}>
                <div className={"flex flex-col gap-8"}>
                  <Typography type={TextTypes["2xl"]}>
                    {data.testimonial}
                  </Typography>
                  <div className={"flex justify-end items-center gap-2"}>
                    <Typography type={TextTypes.xl} weight={WeightTypes.bold}>
                      {data.clientName}
                    </Typography>
                    <Typography type={TextTypes.xl}>-</Typography>
                    <Typography type={TextTypes.xl}>
                      {data.companyName}
                    </Typography>
                  </div>
                </div>
                <div className={`flex flex-col gap-12`}>
                  <div className={"flex flex-col gap-10"}>
                    <div className={"flex flex-row gap-6 items-center"}>
                      <div className={`h-0.5 w-6 bg-secondary opacity-75`} />
                      <Typography
                        type={TextTypes["3xl"]}
                        weight={WeightTypes.bold}
                      >
                        Products Involved
                      </Typography>
                    </div>
                    {data.productsInvolved.map((product, index) => (
                      <div
                        key={index}
                        className={"flex justify-between items-center ml-12"}
                      >
                        <div className={"flex items-center gap-3"}>
                          <product.logo className="h-8 fill-primary-hover" />
                          <Typography
                            type={TextTypes["2xl"]}
                            weight={WeightTypes.semiBold}
                          >
                            {product.name}
                          </Typography>
                        </div>
                        <div
                          className={
                            "flex flex-row justify-end items-center gap-2 "
                          }
                        >
                          {product.services.map((service, index) => (
                            <div
                              key={index}
                              className={
                                "flex px-5 py-2 rounded-full bg-secondary-hover"
                              }
                            >
                              <Typography type={TextTypes.lg}>
                                {service}
                              </Typography>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className={"flex flex-col gap-10"}>
                    <div className={"flex flex-row gap-6 items-center"}>
                      <div className={`h-0.5 w-6 bg-secondary opacity-75`} />
                      <Typography
                        type={TextTypes["3xl"]}
                        weight={WeightTypes.bold}
                      >
                        Technologies
                      </Typography>
                    </div>
                    <div
                      className={
                        "flex flex-row justify-start items-center gap-8 ml-12"
                      }
                    >
                      {data.technologiesInvolved.map((Technology, index) => (
                        <Technology.Icon
                          key={index}
                          className={"flex h-10 w-10"}
                          {...Technology.props}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            }
          />
        );
      })}
    </>
  );
};

export default WorkDetails;
