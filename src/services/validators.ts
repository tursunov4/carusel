// frontend/services/validators.ts
import { z } from "zod";

export const registerSchema = z.object({
  full_name: z.string().min(2),
  email: z.string().email(),
  password1: z.string().min(8),
  password2: z.string().min(8),
});

export const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(1),
});

export const resetRequestSchema = z.object({
  email: z.string().email(),
});

export const resetConfirmSchema = z.object({
  new_password1: z.string().min(8),
  new_password2: z.string().min(8),
});
