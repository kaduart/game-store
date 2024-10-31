/* "server client" */
"use client"

import { CN } from "@/helpers/Cn";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { ELLIPSIS_LEFT, ELLIPSIS_RIGHT, GeneratePages } from "./generatePages";



export const Pagination = ({ currentPage, totalPages }: { currentPage: number; totalPages: number; }) => {

    const pathname = usePathname();
    const searchParams = useSearchParams();

    const pages = GeneratePages(currentPage, totalPages);
    console.log("🚀 ----aaaaaaaaaaaaaaa> ~ Pagination ~ pages:", currentPage, totalPages);
    return (
        <ul className="inline-flex h-10 hoverflow-hidden rounded-md text-base border border-indigo-400/40">

            {
                pages.map((page) => {

                    const isEllipsis = page === ELLIPSIS_LEFT || page === ELLIPSIS_RIGHT;

                    const params = new URLSearchParams(searchParams);
                    params.set('page', String(page));

                    const url = `${pathname}?$${String(params)}`
                    const isCurrentPage = page === currentPage;

                    if (isEllipsis) {
                        return (
                            <li key={page}
                                className="border-x border-indigo-400/40 first:rounded-l last:rounded-r first:border-0 last:border-0">
                                <span className="flex h-10 justify-center items-center bg-slate-700 hover:bg-indigo-400/40 px-4 hover:text-slate-300">
                                    ...
                                </span>
                            </li>
                        )
                    }

                    return (
                        <li key={page} className="border-x border-indigo-400/40 first:rounded-l last:rounded-r first:border-0 last:border-0">
                            <Link
                                className={
                                    CN('flex h-10 justify-center items-center bg-slate-700 hover:bg-indigo-400/40 px-4 hover:text-slate-300',
                                        isCurrentPage ? 'text-slate-400/50' : 'text-slate-300'
                                    )}
                                href={url}>

                                {page}

                            </Link>
                        </li>
                    )
                })

            }

        </ul>
    )
}