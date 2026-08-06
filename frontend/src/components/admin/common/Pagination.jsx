export default function Pagination({

    currentPage = 1,

    totalPages = 1,

    onPageChange,

}) {

    return (

        <div className="flex justify-end gap-2 mt-6">

            <button

                disabled={currentPage === 1}

                onClick={() =>
                    onPageChange(currentPage - 1)
                }

                className="border px-4 py-2 rounded-lg"

            >

                Sebelumnya

            </button>

            <button

                disabled={currentPage === totalPages}

                onClick={() =>
                    onPageChange(currentPage + 1)
                }

                className="border px-4 py-2 rounded-lg"

            >

                Selanjutnya

            </button>

        </div>

    );

}