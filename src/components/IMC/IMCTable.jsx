import { useContext } from "react"
import { Context } from "@/context/IMC"
export default function IMCTable() {

    const { IMC } = useContext(Context)

    const getClassification = (min, max) => {

        if (IMC >= min && IMC <= max) return 'text-emerald-600 font-semibold'

        else {
          if (IMC >= min && IMC <= max) return 'text-emerald-600 font-semibold'
        }
        return ''
    }

    return (
        <table className="border-solid border-[1px] border-zinc-900">
        <thead>
          <tr>
            <th>IMC</th>
            <th>Classificação</th>
          </tr>
        </thead>
        <tbody>
          <tr className={getClassification(0, 20)}>
            <td>Menos de 20</td>
            <td>Abaixo do normal</td>
          </tr>
          <tr className={getClassification(20, 25)}>
            <td>20 a 25</td>
            <td>Normal</td>
          </tr>
          <tr className={getClassification(25, 30)}>
            <td>25 a 30</td>
            <td>Levemente obeso</td>
          </tr>
          <tr className={getClassification(30, 35)}>
            <td>30 a 35</td>
            <td>Obeso grau I</td>
          </tr>
          <tr className={getClassification(35, 40)}>
            <td>35 a 40</td>
            <td>Obeso grau II</td>
          </tr>
          <tr className={getClassification(40, 100)}>
            <td>Maior que 40</td>
            <td>Obeso grau III</td>
          </tr>
        </tbody>
      </table>
    )
}