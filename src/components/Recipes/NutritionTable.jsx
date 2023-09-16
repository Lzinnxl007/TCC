export default function NutritionTable({ nutrition }) {

    return (
        <div className="w-full max-w-lg rounded-xl bg-[var(--green)] p-6 flex flex-col items-center mx-auto">
            <h1 className="text-3xl text-center font-bold mt-4 mb-8">Informações nutricionais</h1>

            <span className="text-left mb-2">Porção de {nutrition?.gramsPerPortion}</span>
            <table className="border-solid border-[1px] border-zinc-50">
                <tr className="bg-[var(--light-green)]">
                    <th>Nutriente</th>
                    <th>Quantidade por Porção</th>
                </tr>
                <tr>
                    <td>Calorias</td>
                    <td>{nutrition?.calories}</td>
                </tr>
                <tr className="bg-[var(--light-green)]">
                    <td>Carboidratos</td>
                    <td>{nutrition?.carbohydrates}</td>
                </tr>
                <tr>
                    <td>Proteína</td>
                    <td>{nutrition?.protein}</td>
                </tr>
                <tr className="bg-[var(--light-green)]">
                    <td>Gordura Total</td>
                    <td>{nutrition?.totalFat}</td>
                </tr>
                <tr>
                    <td>Gordura Saturada</td>
                    <td>{nutrition?.saturatedFat}</td>
                </tr>
                <tr className="bg-[var(--light-green)]">
                    <td>Gordura Trans</td>
                    <td>{nutrition?.transFat}</td>
                </tr>
                <tr>
                    <td>Fibra</td>
                    <td>{nutrition?.fiber}</td>
                </tr>
                <tr className="bg-[var(--light-green)]">
                    <td>Sódio</td>
                    <td>{nutrition?.sodium}</td>
                </tr>
            </table>
        </div>
    )
}