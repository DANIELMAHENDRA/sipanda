export default function DataTable({

    columns = [],

    data = [],

    renderRow,

}) {

    return (

        <div className="bg-white rounded-xl shadow overflow-hidden">

            <table className="w-full">

                <thead className="bg-gray-100">

                    <tr>

                        {

                            columns.map((column) => (

                                <th
                                    key={column}
                                    className="px-6 py-4 text-left text-sm font-semibold"
                                >

                                    {column}

                                </th>

                            ))

                        }

                    </tr>

                </thead>

                <tbody>

                    {

                        data.length > 0

                            ? data.map(renderRow)

                            : (

                                <tr>

                                    <td
                                        colSpan={columns.length}
                                        className="text-center py-10 text-gray-500"
                                    >

                                        Tidak ada data.

                                    </td>

                                </tr>

                            )

                    }

                </tbody>

            </table>

        </div>

    );

}