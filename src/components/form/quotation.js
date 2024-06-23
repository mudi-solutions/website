"use client";
import React from "react";
import { Input } from "@/components/ui/input/text";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { Select } from "../ui/input/select";

const truckloadOptions = [
  {
    value: "Excavator",
    label: "Excavator",
  },
  {
    value: "Dump Trucks - Tippers",
    label: "Dump Trucks - Tippers",
  },
  {
    value: "Low-bed trailer",
    label: "Low-bed trailer",
  },
];

const commodityOptions = [
  {
    value: "Gravel",
    label: "Gravel",
  },
  {
    value: "Sand",
    label: "Sand",
  },
  {
    value: "Heavy equipment",
    label: "Heavy equipment",
  },
  {
    value: "Other",
    label: "Other",
  },
];

const sendRequest = async (data) => {
  const res = await fetch("/api/email/send", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      subject: `Cost estimate for ${data.truckload} on ${data.date}`,
      body: `
          SERVICE PURCHASE REQUISTION

          Hello Mudi Team,

          I would like to inquire about delivery of ${data.commodity} using ${data.truckload} for a period of ${data.duration} days starting on ${data.date}.

          Please feel free to reach me at ${data.email}.

          --------------------------------------------------------------------------

          This invitation was intended for Mudi Solutions. If you were not expecting this invitation, you can ignore this email. 
      `
    }),
  });
  const result = await res.json();

  return result;
};

export default function QuotationForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid, isSubmitting },
  } = useForm();
  const onSubmit = async (data) => {
    try {
      await sendRequest(data);
      toast.success('Your message has been sent')
      reset()
    } catch (error) {
      toast.error('Error occured. Try again after some time.')
      console.error(error);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>
          <span className="flex gap-2 items-center">
            Truckload
            {errors.truckload?.message && (
              <div className="text-red-600 text-sm">
                {errors.truckload.message}
              </div>
            )}
          </span>
          <Select
            placeholder="---Choose Truckload---"
            options={truckloadOptions}
            error={errors.truckload?.message && true}
            {...register("truckload", { required: "Field is required" })}
          />
  
        </label>

        <label>
          <span className="flex gap-2 items-center">
            Commodity
            {errors.commodity?.message && (
              <div className="text-red-600 text-sm">
                {errors.commodity.message}
              </div>
            )}
          </span>
          <Select
            placeholder="---Choose Commodity---"
            options={commodityOptions}
            error={errors.commodity?.message && true}
            {...register("commodity", { required: "Field is required" })}
          />
        </label>

        <div className="flex gap-3">
          <label className="w-full">
            <span className="flex gap-2 items-center">
              Date
              {errors.date?.message && (
                <div className="text-red-600 text-sm">
                  {errors.date.message}
                </div>
              )}
            </span>
            <Input
              type="date"
              placeholder="Delivery point"
              {...register("date", { required: "Field is required" })}
              error={errors.date?.message && true}
            />
          </label>
          <label className="w-full">
            <span className="flex gap-2 items-center">
              Duration
              {errors.duration?.message && (
                <div className="text-red-600 text-sm">
                  {errors.duration.message}
                </div>
              )}
            </span>
            <Input
              type="number"
              placeholder="Number of days"
              {...register("duration", { required: "Field is required" })}
              error={errors.duration?.message && true}
            />
          </label>
        </div>

        <label>
          <span className="flex gap-2 items-center">
            Destination
            {errors.destination?.message && (
              <div className="text-red-600 text-sm">
                {errors.destination.message}
              </div>
            )}
          </span>
          <Input
            type="text"
            placeholder="Delivery point"
            {...register("destination", { required: "Field is required" })}
            error={errors.destination?.message && true}
          />
        </label>

        <label>
          <span className="flex gap-2 items-center">
            Email
            {errors.email?.message && (
              <div className="text-red-600 text-sm">{errors.email.message}</div>
            )}
          </span>

          <Input
            type="text"
            placeholder="Email address"
            {...register("email", {
              required: "Field is required",
              pattern: {
                value:
                  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                message: "Invalid email",
              },
            })}
            error={errors.email?.message && true}
          />
        </label>

        <button
          disabled={!isValid || isSubmitting}
          type="submit"
          className=" h-12 bg-[#FF6B19] w-full font-medium rounded-md disabled:opacity-70 disabled:cursor-none"
        >
          Request estimate
        </button>
      </form>
    </>
  );
}
