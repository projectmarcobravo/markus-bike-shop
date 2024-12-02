import { Controller, useForm, SubmitHandler } from "react-hook-form";
import { Select, Option, Button, Typography } from "@mui/joy";
import FormLabel from "@mui/joy/FormLabel";
import { useConfigBike } from "../../hooks/bikeConfigurator";
import { ConfigurateBikeFormSchema } from "./schema";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Chain,
  FrameFinish,
  FrameType,
  RimColor,
  Wheels,
} from "../../models/models";
import { useState } from "react";

export default function BikeConfigurator() {
  const [price, setPrice] = useState<number>(0);
  const configBike = useConfigBike();

  const {
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<ConfigurateBikeFormSchema>({
    resolver: zodResolver(ConfigurateBikeFormSchema),
  });

  const mapEnumToOptions = (enumObj: Record<string, string>) => {
    return Object.entries(enumObj).map(([key, value]) => (
      <Option key={key} value={value}>
        {value.replace("_", " ")}
      </Option>
    ));
  };

  const onSubmit: SubmitHandler<ConfigurateBikeFormSchema> = async (data) => {
    const response = await configBike.mutateAsync({
      frameType: data.frameType,
      frameFinish: data.frameFinish,
      wheels: data.wheels,
      rimColor: data.rimColor,
      chain: data.chain,
    });

    setPrice(response.data.price);
    return response;
  };

  return (
    <div className="flex flex-col mt-6">
      <h2 className="font-semibold text-center text-xl">Bike Configurator</h2>
      <form id="configBike" onSubmit={handleSubmit(onSubmit)} className="mb-6">
        <FormLabel>Frame type</FormLabel>
        <Controller
          name="frameType"
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <Select
              {...field}
              value={field.value || ""}
              onChange={(_event, value) => field.onChange(value)}
              placeholder="Select frame type"
            >
              {mapEnumToOptions(FrameType)}
            </Select>
          )}
        />
        {errors.frameType && (
          <Typography color="danger">{errors.frameType.message}</Typography>
        )}

        <FormLabel>Frame finish</FormLabel>
        <Controller
          name="frameFinish"
          control={control}
          render={({ field }) => (
            <Select
              {...field}
              value={field.value || ""}
              onChange={(_event, value) => field.onChange(value)}
              placeholder="Select frame finish"
            >
              {mapEnumToOptions(FrameFinish)}
            </Select>
          )}
        />
        {errors.frameFinish && (
          <Typography color="danger">{errors.frameFinish.message}</Typography>
        )}
        <FormLabel>Wheels</FormLabel>
        <Controller
          name="wheels"
          control={control}
          render={({ field }) => (
            <Select
              {...field}
              value={field.value || ""}
              onChange={(_event, value) => field.onChange(value)}
              placeholder="Select wheels"
            >
              {mapEnumToOptions(Wheels)}
            </Select>
          )}
        />
        {errors.wheels && (
          <Typography color="danger">{errors.wheels.message}</Typography>
        )}
        <FormLabel>Rim color</FormLabel>
        <Controller
          name="rimColor"
          control={control}
          render={({ field }) => (
            <Select
              {...field}
              value={field.value || ""}
              onChange={(_event, value) => field.onChange(value)}
              placeholder="Select color"
            >
              {mapEnumToOptions(RimColor)}
            </Select>
          )}
        />
        {errors.rimColor && (
          <Typography color="danger">{errors.rimColor.message}</Typography>
        )}
        <FormLabel>Chain</FormLabel>
        <Controller
          name="chain"
          control={control}
          render={({ field }) => (
            <Select
              {...field}
              value={field.value || ""}
              onChange={(_event, value) => field.onChange(value)}
              placeholder="Select chain"
            >
              {mapEnumToOptions(Chain)}
            </Select>
          )}
        />
        {errors.chain && (
          <Typography color="danger">{errors.chain.message}</Typography>
        )}
      </form>
      <Button form="configBike" type="submit">
        Submit
      </Button>
      <Typography level="h3" sx={{ marginTop: 4 }}>
        Total Price: ${price}
      </Typography>
    </div>
  );
}
