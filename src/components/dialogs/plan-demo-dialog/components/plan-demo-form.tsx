'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form';
import { useState } from 'react';
import { PlanDemoSubmittedState } from './plan-demo-submitted-state';

const requiredFieldMessage = 'Champs requis';
const formSchema = z.object({
  lastname: z
    .string({
      required_error: requiredFieldMessage
    })
    .trim()
    .min(1, { message: requiredFieldMessage }),
  firstname: z
    .string({
      required_error: requiredFieldMessage
    })
    .trim()
    .min(1, { message: requiredFieldMessage }),
  businessName: z
    .string({
      required_error: requiredFieldMessage
    })
    .trim()
    .min(1, { message: requiredFieldMessage }),
  email: z
    .string({
      required_error: requiredFieldMessage
    })
    .email({
      message: 'Adresse Email invalide'
    })
    .trim()
    .min(1, { message: requiredFieldMessage }),
  phone: z
    .string({
      required_error: requiredFieldMessage
    })
    .trim()
    .min(1, { message: requiredFieldMessage })
});

export function PlanDemoForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema)
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log('form.onSubmit', values);
    setIsSubmitted(true);
  }

  if (isSubmitted) {
    return <PlanDemoSubmittedState />;
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-2"
      >
        <div className="flex items-start flex-col lg:flex-row gap-2">
          <div className="grid w-full">
            <FormField
              control={form.control}
              name="lastname"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    Nom<span className="text-[#DA2828]">*</span>
                  </FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="grid w-full">
            <FormField
              control={form.control}
              name="firstname"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    Prénom<span className="text-[#DA2828]">*</span>
                  </FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>
        <div className="grid w-full items-center gap-1">
          <FormField
            control={form.control}
            name="businessName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  Nom de l&apos;entreprise
                  <span className="text-[#DA2828]">*</span>
                </FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="grid w-full items-center gap-1">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  Email<span className="text-[#DA2828]">*</span>
                </FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="grid w-full items-center gap-1">
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  Téléphone<span className="text-[#DA2828]">*</span>
                </FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="pt-6">
          <Button type="submit" size="lg" className="w-full lg:w-auto">
            Contactez-moi
          </Button>
        </div>
      </form>
    </Form>
  );
}
