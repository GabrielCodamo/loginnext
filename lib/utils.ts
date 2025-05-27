import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
// TailwindMerge Serve para mesclar classes do tailwind
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
