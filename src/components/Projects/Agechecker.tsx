"use client";

import calculateAge from "@/hook/calculateAge";
import fakeTime from "@/hook/fakeTime";
import monthYear from "@/lib/monthYear";
import { DateInputSchemaType } from "@/lib/types";
import { dateInputSchema } from "@/lib/zodSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { Button } from "../ui/button";
import { Card, CardContent, CardHeader } from "../ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Separator } from "../ui/separator";

const Agechecker = () => {
  const months = monthYear;

  const form = useForm<DateInputSchemaType>({
    resolver: zodResolver(dateInputSchema),
    defaultValues: {
      mm: 0,
      yy: 2000,
    },
  });

  const submitFunction = async (info: DateInputSchemaType) => {
    const checkHook = await calculateAge(info);

    if (checkHook === undefined) {
      return;
    }

    if (checkHook?.year >= 18) {
      toast.info(`${checkHook?.message}`);

      await fakeTime(1000);

      toast.success("You are an Adult");
    }
    if (checkHook?.year < 18) {
      toast.info(`${checkHook?.message}`);

      await fakeTime(1000);

      toast.warning("You are a minor");
    }
  };
  return (
    <>
      <Card className="w-[350px]">
        <CardHeader className="text-center text-2xl">
          Simple Age Checker
        </CardHeader>
        <Separator />
        <CardContent>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(submitFunction)}
              className="space-y-8"
            >
              <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
                <FormField
                  control={form.control}
                  name="mm"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Months</FormLabel>
                      <Select onValueChange={field.onChange}>
                        <FormControl>
                          <SelectTrigger className="w-full">
                            <SelectValue placeholder="Select a month" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {months.map((i) => (
                            <SelectItem
                              value={i.order.toString()}
                              key={i.order}
                              className="capitalize"
                            >
                              {i.value}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>

                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="yy"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Years</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="birth year"
                          {...field}
                        />
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <Button
                type="submit"
                className="w-full cursor-pointer"
                disabled={form.formState.isSubmitting}
              >
                Submit
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </>
  );
};

export default Agechecker;
