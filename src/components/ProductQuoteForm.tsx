'use client';

import * as React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { ContactFormInputSchema } from '@/ai/schemas/contact-form';

type ProductQuoteFormProps = {
  productName: string;
};

export function ProductQuoteForm({ productName }: ProductQuoteFormProps) {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const form = useForm<z.infer<typeof ContactFormInputSchema>>({
    resolver: zodResolver(ContactFormInputSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      message: `Hi, I am interested in your ${productName}. Please send me a quote and technical details.`,
    },
  });

  async function onSubmit(values: z.infer<typeof ContactFormInputSchema>) {
    setIsSubmitting(true);
    try {
      const formData = new FormData();
      formData.append('name', values.name);
      formData.append('email', values.email);
      if (values.phone) {
        formData.append('phone', values.phone);
      }
      formData.append('message', `[Product Quote Request: ${productName}]\n\n${values.message}`);
      formData.append('_captcha', 'false');

      const response = await fetch('https://formsubmit.co/ajax/rohitsingh8885882@gmail.com', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        toast({
          title: 'Quote Request Sent!',
          description: 'Thank you. Our technical team will contact you with a customized quote shortly.',
        });
        form.reset({
          name: '',
          email: '',
          phone: '',
          message: `Hi, I am interested in your ${productName}. Please send me a quote and technical details.`,
        });
      } else {
        throw new Error('Failed to submit quote request');
      }
    } catch (error) {
      toast({
        variant: 'destructive',
        title: 'Submission Failed',
        description: 'There was a problem sending your request. Please try again or chat via WhatsApp.',
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="rounded-xl border border-border bg-card p-6 shadow-md">
      <h3 className="font-headline text-xl font-bold text-foreground mb-2">Request Technical Quote</h3>
      <p className="text-sm text-muted-foreground mb-6">
        Submit this form to receive customized drawings, pricing, and execution timelines for your facility.
      </p>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Full Name *</FormLabel>
                <FormControl>
                  <Input placeholder="Enter your name" className="h-10 text-sm" {...field} />
                </FormControl>
                <FormMessage className="text-xs" />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Email Address *</FormLabel>
                <FormControl>
                  <Input placeholder="doctor@hospital.com" className="h-10 text-sm" {...field} />
                </FormControl>
                <FormMessage className="text-xs" />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Phone Number</FormLabel>
                <FormControl>
                  <Input placeholder="+91 99999 99999" className="h-10 text-sm" {...field} />
                </FormControl>
                <FormMessage className="text-xs" />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Project Requirements *</FormLabel>
                <FormControl>
                  <Textarea className="min-h-[100px] text-sm resize-none" {...field} />
                </FormControl>
                <FormMessage className="text-xs" />
              </FormItem>
            )}
          />

          <Button 
            type="submit" 
            disabled={isSubmitting} 
            style={{ backgroundColor: 'hsl(var(--accent))', color: 'hsl(var(--accent-foreground))' }} 
            className="w-full h-11 text-sm font-semibold hover:opacity-90 transition-opacity mt-2"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Sending Request...
              </>
            ) : (
              'Send Quote Request'
            )}
          </Button>
        </form>
      </Form>
    </div>
  );
}
