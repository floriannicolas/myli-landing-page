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
import { useState, useTransition } from 'react';
import { sendPlanDemoEmail } from '@/lib/actions';
import PlanDemoSubmitSuccess from './plan-demo-submit-success';
import Loader from '@/components/ui/loader';
import { cn } from '@/lib/utils';

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
  company: z
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
  const [isPending, startTransition] = useTransition();
  const [errorMessage, setErrorMessage] = useState<string>();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    disabled: isPending
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    startTransition(async () => {
      try {
        const actionState = await sendPlanDemoEmail(values);
        if (actionState.status === 'success') {
          setIsSubmitted(true);
        } else {
          setErrorMessage(actionState.message);
        }
      } catch (e) {
        const error = e as Error;
        setErrorMessage(error.message as string);
      }
    });
  };

  if (isSubmitted) {
    return <PlanDemoSubmitSuccess />;
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
            name="company"
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
          <Button
            type="submit"
            size="lg"
            className="relative w-full lg:w-auto"
            aria-disabled={isPending}
            disabled={isPending}
          >
            {isPending && (
              <Loader size="lg" className="absolute inset-0 m-auto text-12" />
            )}
            <span className={cn(isPending && 'invisible')}>Contactez-moi</span>
          </Button>
        </div>
        {errorMessage && (
          <div className="pt-6 text-destructive">{errorMessage}</div>
        )}
      </form>
    </Form>
  );
}
