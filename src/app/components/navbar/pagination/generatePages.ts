export const ELLIPSIS_LEFT = -1;
export const ELLIPSIS_RIGHT = -2;

export const GeneratePages = (currentPages: number, totalPages: number) => {

    if (totalPages <= 7) {
        return Array.from({ length: totalPages }).map((_, i) => i + 1);
    }

    if (currentPages < 3) {
        return [1, 2, 3, ELLIPSIS_LEFT, totalPages - 1, totalPages];
    }

    if (currentPages > totalPages - 2) {
        return [1, 2, 3, ELLIPSIS_LEFT, totalPages - 2, totalPages - 1, totalPages];
    }

    return [1, ELLIPSIS_LEFT, currentPages - 1, currentPages, currentPages + 1, ELLIPSIS_RIGHT, totalPages]
}