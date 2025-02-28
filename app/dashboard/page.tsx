import { Card } from '@/app/ui/dashboard/cards';
import RevenueChart from "@/app/ui/dashboard/revenue-chart";
import {LatestInvoice} from "@/app/lib/definitions";
import { lusitana } from "@/app/ui/fonts";
import { fetchRevenue } from "@/app/lib/data";

export default async function Page() {
    const revenue = await fetchRevenue();

    return (
        <main>
            <h1 className={lusitana.className}>Dashboard</h1>
            <div className={"grid gap-6 sm:grid-cols-2 lg:grid-cols-4"}>

            </div>
            <div className={"mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-6"}>

            </div>
        </main>
    )
}