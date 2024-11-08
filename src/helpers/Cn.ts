import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export const CN = (...inputs: ClassValue[]) => {
    return twMerge(clsx(inputs));
}