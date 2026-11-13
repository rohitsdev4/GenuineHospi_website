/**
 * @fileOverview Schemas for the contact and product quote lead forms.
 */
import { z } from 'zod';

export const ContactFormInputSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email.' }),
  phone: z
    .string()
    .trim()
    .optional()
    .refine((val) => !val || val.replace(/\D/g, '').length >= 10, {
      message: 'Please enter a valid 10-digit phone number.',
    }),
  hospitalName: z.string().trim().optional(),
  city: z.string().trim().optional(),
  productName: z.string().trim().optional(),
  sourcePage: z.string().trim().optional(),
  message: z.string().min(10, { message: 'Message must be at least 10 characters.' }),
});

export type ContactFormInput = z.infer<typeof ContactFormInputSchema>;

export const ContactFormOutputSchema = z.object({
  success: z.boolean().describe('Whether the lead was submitted successfully.'),
  error: z.string().optional().describe('An error message if submission failed.'),
});

export type ContactFormOutput = z.infer<typeof ContactFormOutputSchema>;
