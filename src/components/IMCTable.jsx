import { useContext } from "react"
import { Context } from "@/context/IMC"
export default function IMCTable() {

    const { result } = useContext(Context)

    return (
        <table className="border-solid border-[1px] border-zinc-900">
        <thead>
          <tr>
            <th>Homens (IMC)</th>
            <th>Mulheres (IMC)</th>
            <th>Classificação</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Menos de 20</td>
            <td>Menos de 19</td>
            <td>Abaixo do normal</td>
          </tr>
          <tr>
            <td>20 a 25</td>
            <td>19 a 24</td>
            <td>Normal</td>
          </tr>
          <tr>
            <td>25 a 30</td>
            <td>24 a 29</td>
            <td>Levemente obeso</td>
          </tr>
          <tr>
            <td>30 a 35</td>
            <td>29 a 34</td>
            <td>Obeso grau I</td>
          </tr>
          <tr>
            <td>35 a 40</td>
            <td>34 a 39</td>
            <td>Obeso grau II</td>
          </tr>
          <tr>
            <td>Maior que 40</td>
            <td>Maior que 39</td>
            <td>Obeso grau III</td>
          </tr>
        </tbody>
      </table>
    )
}