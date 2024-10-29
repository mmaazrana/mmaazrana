"use client";
import React from "react";
import Typography from "@/components/Typography";
import { TextTypes, WeightTypes } from "@/helpers/enums";

function About() {
  return (
    <div
      className={"flex w-full h-[100dvh] justify-center items-center m-auto"}
    >
      <Typography weight={WeightTypes.black} type={TextTypes["9xl"]}>
        Under Construction
      </Typography>
    </div>
  );
}

export default About;