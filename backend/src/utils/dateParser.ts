import { parse, format, isValid } from 'date-fns';
import { addDays } from 'date-fns';

/**
 * Universal date parser to handle various date formats.
 * Handles:
 * - Excel serial numbers
 * - ISO strings
 * - Flexible custom date formats
 * Returns a consistent "yyyy-MM-dd" format or "Invalid Date" for unparseable values.
 */
export const parseDate = (value: any): string => {
    try {
        // Handle Excel serial numbers (dates > 59 to exclude early invalid serials)
        if (typeof value === 'number' && value > 59) {
            const baseDate = new Date(1899, 11, 30); // Excel base date is 1899-12-30
            return format(addDays(baseDate, value), 'yyyy-MM-dd');
        }

        // Handle ISO or flexible string formats
        if (typeof value === 'string') {
            const parsedDate = parse(value, 'yyyy-MM-dd', new Date());
            if (isValid(parsedDate)) {
                return format(parsedDate, 'yyyy-MM-dd');
            }
        }

        // If value is already a Date object
        if (value instanceof Date && isValid(value)) {
            return format(value, 'yyyy-MM-dd');
        }

        // If parsing fails, return "Invalid Date" (or log an error)
        return 'Invalid Date';
    } catch (error) {
        console.error(`Error parsing date: ${value}`, error);
        return 'Invalid Date';
    }
};
