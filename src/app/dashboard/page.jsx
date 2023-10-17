import Chart from '../../components/Chart'
import { GetIMCAction } from "@/utils/IMC/GetIMCAction"
import Header from '@/components/Default/Header'
export default async function Dashboard() {

    const IMC = JSON.parse(await GetIMCAction(1))

    console.log(IMC)

    return (
        <section className="min-h-screen bg-[var(--light-grey)]">
            <Header/>
            <Chart IMCData={IMC}/>
        </section>
    )
}