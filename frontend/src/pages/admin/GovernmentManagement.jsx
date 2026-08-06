import { useEffect, useState } from "react";
import api from "../../services/api"; // pastikan ini ada
import { toast } from "react-toastify";

export default function GovernmentManagement() {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isEdit, setIsEdit] = useState(false);

    const [form, setForm] = useState({
        id: null,
        name: "",
        position: "",
        photo: null,
    });

    const fetchData = async () => {
        try {
            setLoading(true);
            const res = await api.get("/government");
            setData(res.data.data || res.data);
        } catch (err) {
            toast.error("Gagal mengambil data");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const openCreate = () => {
        setIsEdit(false);
        setForm({
            id: null,
            name: "",
            position: "",
            photo: null,
        });
        setIsModalOpen(true);
    };

    const openEdit = (item) => {
        setIsEdit(true);
        setForm({
            id: item.id,
            name: item.name,
            position: item.position,
            photo: null,
        });
        setIsModalOpen(true);
    };

    const handleDelete = async (id) => {
        if (!confirm("Yakin ingin menghapus?")) return;

        try {
            await api.delete(`/government/${id}`);
            toast.success("Berhasil dihapus");
            fetchData();
        } catch {
            toast.error("Gagal menghapus");
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const formData = new FormData();
            formData.append("name", form.name);
            formData.append("position", form.position);

            if (form.photo) {
                formData.append("photo", form.photo);
            }

            if (isEdit) {
                await api.post(`/government/${form.id}?_method=PUT`, formData);
                toast.success("Berhasil diupdate");
            } else {
                await api.post("/government", formData);
                toast.success("Berhasil ditambahkan");
            }

            setIsModalOpen(false);
            fetchData();

        } catch (err) {
            toast.error("Terjadi kesalahan");
        }
    };

    return (
        <div className="p-6">

            {/* HEADER */}
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-xl font-bold">Government Management</h1>
                <button
                    onClick={openCreate}
                    className="bg-blue-600 text-white px-4 py-2 rounded"
                >
                    + Tambah
                </button>
            </div>

            {/* TABLE */}
            <div className="bg-white shadow rounded overflow-x-auto">
                <table className="w-full text-sm">
                    <thead className="bg-gray-100">
                        <tr>
                            <th className="p-3 text-left">No</th>
                            <th className="p-3 text-left">Foto</th>
                            <th className="p-3 text-left">Nama</th>
                            <th className="p-3 text-left">Jabatan</th>
                            <th className="p-3 text-left">Aksi</th>
                        </tr>
                    </thead>
                    <tbody>
                        {loading ? (
                            <tr>
                                <td colSpan="5" className="p-4 text-center">
                                    Loading...
                                </td>
                            </tr>
                        ) : data.length === 0 ? (
                            <tr>
                                <td colSpan="5" className="p-4 text-center">
                                    Tidak ada data
                                </td>
                            </tr>
                        ) : (
                            data.map((item, index) => (
                                <tr key={item.id} className="border-t">
                                    <td className="p-3">{index + 1}</td>
                                    <td className="p-3">
                                        {item.photo && (
                                            <img
                                                src={item.photo}
                                                alt=""
                                                className="w-12 h-12 object-cover rounded"
                                            />
                                        )}
                                    </td>
                                    <td className="p-3">{item.name}</td>
                                    <td className="p-3">{item.position}</td>
                                    <td className="p-3 space-x-2">
                                        <button
                                            onClick={() => openEdit(item)}
                                            className="bg-yellow-500 text-white px-2 py-1 rounded"
                                        >
                                            Edit
                                        </button>
                                        <button
                                            onClick={() => handleDelete(item.id)}
                                            className="bg-red-600 text-white px-2 py-1 rounded"
                                        >
                                            Hapus
                                        </button>
                                    </td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
            </div>

            {/* MODAL */}
            {isModalOpen && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
                    <div className="bg-white w-full max-w-md p-6 rounded">

                        <h2 className="text-lg font-bold mb-4">
                            {isEdit ? "Edit Data" : "Tambah Data"}
                        </h2>

                        <form onSubmit={handleSubmit} className="space-y-4">

                            <input
                                type="text"
                                placeholder="Nama"
                                value={form.name}
                                onChange={(e) =>
                                    setForm({ ...form, name: e.target.value })
                                }
                                className="w-full border p-2 rounded"
                                required
                            />

                            <input
                                type="text"
                                placeholder="Jabatan"
                                value={form.position}
                                onChange={(e) =>
                                    setForm({ ...form, position: e.target.value })
                                }
                                className="w-full border p-2 rounded"
                                required
                            />

                            <input
                                type="file"
                                onChange={(e) =>
                                    setForm({ ...form, photo: e.target.files[0] })
                                }
                                className="w-full"
                            />

                            <div className="flex justify-end gap-2">
                                <button
                                    type="button"
                                    onClick={() => setIsModalOpen(false)}
                                    className="px-4 py-2 border rounded"
                                >
                                    Batal
                                </button>
                                <button
                                    type="submit"
                                    className="px-4 py-2 bg-blue-600 text-white rounded"
                                >
                                    Simpan
                                </button>
                            </div>

                        </form>

                    </div>
                </div>
            )}

        </div>
    );
}