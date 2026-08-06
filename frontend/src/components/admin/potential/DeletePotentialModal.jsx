import { useState } from "react";
import potentialService from "../../../services/potentialService";

export default function DeletePotentialModal({
open,
onClose,
potential,
reload,
}) {

```
const [loading, setLoading] = useState(false);

/*
|--------------------------------------------------------------------------
| Close
|--------------------------------------------------------------------------
*/

if (!open || !potential) return null;

/*
|--------------------------------------------------------------------------
| Delete
|--------------------------------------------------------------------------
*/

const handleDelete = async () => {

    setLoading(true);

    try {

        await potentialService.delete(
            potential.id
        );

        reload();

        onClose();

    } catch (error) {

        console.error(
            "Gagal menghapus potential:",
            error
        );

    } finally {

        setLoading(false);

    }

};

return (

    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">

        <div className="bg-white rounded-xl shadow-xl w-full max-w-md p-6">

            {/* Header */}

            <h2 className="text-xl font-bold">

                Hapus Potensi

            </h2>

            {/* Content */}

            <p className="mt-3 text-gray-600">

                Apakah Anda yakin ingin menghapus potensi

                <span className="font-semibold">

                    {" "}

                    {potential.title}

                </span>

                ?

            </p>

            <p className="mt-2 text-sm text-red-500">

                Data yang sudah dihapus tidak dapat dikembalikan.

            </p>

            {/* Footer */}

            <div className="mt-6 flex justify-end gap-3">

                <button

                    type="button"

                    onClick={onClose}

                    disabled={loading}

                    className="px-4 py-2 rounded-lg border hover:bg-gray-50"

                >

                    Batal

                </button>

                <button

                    type="button"

                    onClick={handleDelete}

                    disabled={loading}

                    className="px-4 py-2 rounded-lg bg-red-600 text-white hover:bg-red-700 disabled:opacity-50"

                >

                    {

                        loading

                            ? "Menghapus..."

                            : "Hapus"

                    }

                </button>

            </div>

        </div>

    </div>

);
```

}
