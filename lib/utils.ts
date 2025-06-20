import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

const encodedMessage = "Hello! I'm interested in Euro Gulf Tech's HVAC services. Please provide more information and a quote."
export const whatsappUrl = `https://wa.me/"971547425544"?text=${encodedMessage}`
