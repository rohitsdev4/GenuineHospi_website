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

export function ContactForm() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [submittedWhatsAppUrl, setSubmittedWhatsAppUrl] = React.useState<string | null>(null);

  const form = useForm<z.infer<typeof ContactFormInputSchema>>({
    resolver: zodResolver(ContactFormInputSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      hospitalName: '',
      city: '',
      message: '',
    },
  });

  function buildWhatsAppUrl(values: z.infer<typeof ContactFormInputSchema>) {
    const lines = [
      `Hi Genuine Hospi Enterprises,`,
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
          sourcePage: typeof window !== 'undefined' ? window.location.pathname : '/',
        }),
      });

      const data = await response.json().catch(() => null);

      if (response.ok && data?.success) {
        trackLeadConversion({
          source: 'contact_form',
          city: values.city || undefined,
        });
        setSubmittedWhatsAppUrl(waUrl);
        toast({
          title: 'Enquiry Sent Successfully!',
          description: "Thank you for reaching out. Our engineering team will contact you shortly.",
        });
        form.reset();
      } else {
        throw new Error(data?.error || 'Failed to submit enquiry');
      }
    } catch {
      setSubmittedWhatsAppUrl(waUrl);
      toast({
        variant: 'destructive',
        title: 'Direct Email Delayed — Use Instant WhatsApp',
        description: 'Click "Send via WhatsApp" below to connect with our engineering team immediately.',
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
        <div className="grid gap-4 sm:grid-cols-2">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  Full Name <span className="text-destructive">*</span>
                </FormLabel>
                <FormControl>
                  <Input placeholder="Dr. Rajesh Kumar" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Phone / WhatsApp Number</FormLabel>
                <FormControl>
                  <Input placeholder="+91 98765 43210" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  Email Address <span className="text-destructive">*</span>
                </FormLabel>
                <FormControl>
                  <Input type="email" placeholder="you@hospital.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="city"
            render={({ field }) => (
              <FormItem>
                <FormLabel>City / State</FormLabel>
                <FormControl>
                  <Input placeholder="e.g., Jalandhar, Punjab" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="hospitalName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Hospital / Clinic Name (Optional)</FormLabel>
              <FormControl>
                <Input placeholder="City Multispeciality Hospital" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                Project Requirements <span className="text-destructive">*</span>
              </FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Tell us about your Modular OT, ICU, MGPS, or Hospital Furniture requirements..."
                  className="min-h-[110px]"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button
          type="submit"
          size="lg"
          disabled={isSubmitting}
          style={{
            backgroundColor: 'hsl(var(--accent))',
            color: 'hsl(var(--accent-foreground))',
          }}
          className="w-full hover:bg-accent/90 font-semibold"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Sending Enquiry...
            </>
          ) : (
            'Request Free Consultation & Quote'
          )}
        </Button>

        {submittedWhatsAppUrl && (
          <div className="rounded-lg border border-emerald-500/30 bg-emerald-500/10 p-4 space-y-3">
            <div className="flex items-center gap-2 text-sm font-semibold text-foreground">
              <CheckCircle2 className="h-4 w-4 text-emerald-600 flex-shrink-0" />
              <span>Want an instant response from our engineer?</span>
            </div>
            <Button asChild size="sm" className="w-full bg-[#25d366] hover:bg-[#20bd5a] text-white">
              <a
                href={submittedWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackWhatsAppClick('contact_form_followup')}
              >
                <MessageCircle className="mr-2 h-4 w-4" />
                Send Details on WhatsApp Now
              </a>
            </Button>
          </div>
        )}
      </form>
    </Form>
  );
}
