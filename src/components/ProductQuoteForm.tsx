'use client';

import * as React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Loader2, CheckCircle2, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { ContactFormInputSchema } from '@/ai/schemas/contact-form';
import { trackLeadConversion, trackWhatsAppClick } from '@/lib/analytics';
import { COMPANY_INFO } from '@/lib/site-config';

type ProductQuoteFormProps = {
  productName: string;
};

export function ProductQuoteForm({ productName }: ProductQuoteFormProps) {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [submittedWhatsAppUrl, setSubmittedWhatsAppUrl] = React.useState<string | null>(null);

  const defaultMessage = `Hi, I am interested in ${productName}. Please share technical specifications, layout options, and a quotation.`;

  const form = useForm<z.infer<typeof ContactFormInputSchema>>({
    resolver: zodResolver(ContactFormInputSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      hospitalName: '',
      city: '',
      productName,
      message: defaultMessage,
    },
  });

  function buildWhatsAppUrl(values: z.infer<typeof ContactFormInputSchema>) {
    const lines = [
      `Hi Genuine Hospi Enterprises,`,
      `Product Quote Request: ${productName}`,
      `Name: ${values.name}`,
      values.hospitalName ? `Hospital/Clinic: ${values.hospitalName}` : '',
      values.city ? `City/State: ${values.city}` : '',
      values.phone ? `Phone: ${values.phone}` : '',
      `Email: ${values.email}`,
      `Requirement: ${values.message}`,
    ].filter(Boolean);
    return `https://wa.me/${COMPANY_INFO.phones.primaryRaw}?text=${encodeURIComponent(lines.join('\n'))}`;
  }

  async function onSubmit(values: z.infer<typeof ContactFormInputSchema>) {
    setIsSubmitting(true);
    const waUrl = buildWhatsAppUrl(values);

    try {
      const response = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...values,
          productName,
          sourcePage: typeof window !== 'undefined' ? window.location.pathname : `/products`,
        }),
      });

      const data = await response.json().catch(() => null);

      if (response.ok && data?.success) {
        trackLeadConversion({
          source: 'product_quote_form',
          productName,
          city: values.city || undefined,
        });
        setSubmittedWhatsAppUrl(waUrl);
        toast({
          title: 'Quote Request Sent!',
          description: 'Thank you. Our technical team will contact you with a customized quote shortly.',
        });
        form.reset({
          name: '',
          email: '',
          phone: '',
          hospitalName: '',
          city: '',
          productName,
          message: defaultMessage,
        });
      } else {
        throw new Error(data?.error || 'Failed to submit quote request');
      }
    } catch {
      setSubmittedWhatsAppUrl(waUrl);
      toast({
        variant: 'destructive',
        title: 'Direct Email Delayed — Use Instant WhatsApp',
        description: 'Click "Send Quote on WhatsApp" below for immediate engineering assistance.',
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="rounded-xl border border-border bg-card p-6 shadow-md">
      <h3 className="font-headline text-xl font-bold text-foreground mb-2">
        Request Technical Quote
      </h3>
      <p className="text-sm text-muted-foreground mb-5">
        Get customized CAD drawings, NABH compliance checklist, and pricing for{' '}
        <strong>{productName}</strong>.
      </p>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Full Name *
                </FormLabel>
                <FormControl>
                  <Input placeholder="Enter your name" className="h-10 text-sm" {...field} />
                </FormControl>
                <FormMessage className="text-xs" />
              </FormItem>
            )}
          />

          <div className="grid gap-3 sm:grid-cols-2">
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Phone / WhatsApp
                  </FormLabel>
                  <FormControl>
                    <Input placeholder="+91 98765 43210" className="h-10 text-sm" {...field} />
                  </FormControl>
                  <FormMessage className="text-xs" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="city"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    City / State
                  </FormLabel>
                  <FormControl>
                    <Input placeholder="e.g., Patna, Bihar" className="h-10 text-sm" {...field} />
                  </FormControl>
                  <FormMessage className="text-xs" />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Email Address *
                </FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    placeholder="doctor@hospital.com"
                    className="h-10 text-sm"
                    {...field}
                  />
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
                <FormLabel className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Project Requirements *
                </FormLabel>
                <FormControl>
                  <Textarea className="min-h-[90px] text-sm resize-none" {...field} />
                </FormControl>
                <FormMessage className="text-xs" />
              </FormItem>
            )}
          />

          <Button
            type="submit"
            disabled={isSubmitting}
            style={{
              backgroundColor: 'hsl(var(--accent))',
              color: 'hsl(var(--accent-foreground))',
            }}
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

          {submittedWhatsAppUrl && (
            <div className="rounded-lg border border-emerald-500/30 bg-emerald-500/10 p-3 space-y-2">
              <div className="flex items-center gap-2 text-xs font-semibold text-foreground">
                <CheckCircle2 className="h-4 w-4 text-emerald-600 flex-shrink-0" />
                <span>Need faster pricing? Connect on WhatsApp:</span>
              </div>
              <Button asChild size="sm" className="w-full bg-[#25d366] hover:bg-[#20bd5a] text-white">
                <a
                  href={submittedWhatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackWhatsAppClick(`quote_${productName}`)}
                >
                  <MessageCircle className="mr-2 h-4 w-4" />
                  Send Quote on WhatsApp
                </a>
              </Button>
            </div>
          )}
        </form>
      </Form>
    </div>
  );
}
