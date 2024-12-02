import z from "zod";
import {
  Chain,
  FrameFinish,
  FrameType,
  RimColor,
  Wheels,
} from "../../models/models";

export const ConfigurateBikeFormSchema = z.object({
  frameType: z.nativeEnum(FrameType, {
    errorMap: () => ({ message: "Please select a valid frame type." }),
  }),
  frameFinish: z.nativeEnum(FrameFinish, {
    errorMap: () => ({ message: "Please select a valid frame finish." }),
  }),
  wheels: z.nativeEnum(Wheels, {
    errorMap: () => ({ message: "Please select a valid wheel type." }),
  }),
  rimColor: z.nativeEnum(RimColor, {
    errorMap: () => ({ message: "Please select a valid rim color." }),
  }),
  chain: z.nativeEnum(Chain, {
    errorMap: () => ({ message: "Please select a valid chain." }),
  }),
});

export type ConfigurateBikeFormSchema = z.infer<
  typeof ConfigurateBikeFormSchema
>;
