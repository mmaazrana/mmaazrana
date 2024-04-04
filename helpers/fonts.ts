import { Archivo, Nunito } from "next/font/google";

export const nunito = Nunito({
  weight: ["200", "300", "400", "500"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});
export const archivo = Archivo({
  weight: ["600", "700", "800", "900"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});
