'use client'

export default function SelectCategory({ filterByCategory }) {
    return (
        <div className="ml-6 md:ml-14 lg:ml-12 sm:ml-6 ">
            <select onChange={e => filterByCategory(e)}
            className="rounded-2xl px-4 py-1.5 outline-none cursor-pointer border-solid border-r-[10px]
             border-zinc-100 bg-zinc-100 dark:border-zinc-700 dark:bg-zinc-900">
                <option value="todas"
                className="">
                    Todas
                </option>
                <option value="Prato Principal">
                    Prato Principal
                </option>
                <option value="Sobremesa">
                    Sobremesas
                </option>
            </select>
        </div>
    )
}