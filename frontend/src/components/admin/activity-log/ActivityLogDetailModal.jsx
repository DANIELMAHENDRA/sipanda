import { X } from "lucide-react";

export default function ActivityLogDetailModal({

    open,

    onClose,

    activity,

}) {

    if (!open || !activity) return null;

    return (

        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">

            <div className="bg-white rounded-xl shadow-xl w-full max-w-2xl">

                {/* ==========================================================
                    Header
                ========================================================== */}

                <div className="flex items-center justify-between border-b px-6 py-4">

                    <h2 className="text-xl font-bold">

                        Detail Activity Log

                    </h2>

                    <button

                        onClick={onClose}

                        className="p-2 rounded-lg hover:bg-gray-100"

                    >

                        <X size={20} />

                    </button>

                </div>

                {/* ==========================================================
                    Body
                ========================================================== */}

                <div className="p-6 space-y-5">

                    <div className="grid grid-cols-2 gap-5">

                        <div>

                            <p className="text-sm text-gray-500">

                                Activity

                            </p>

                            <p className="font-semibold">

                                {activity.activity}

                            </p>

                        </div>

                        <div>

                            <p className="text-sm text-gray-500">

                                Module

                            </p>

                            <p className="font-semibold">

                                {activity.module}

                            </p>

                        </div>

                        <div>

                            <p className="text-sm text-gray-500">

                                User

                            </p>

                            <p>

                                {activity.user?.name ?? "-"}

                            </p>

                        </div>

                        <div>

                            <p className="text-sm text-gray-500">

                                Role

                            </p>

                            <p>

                                {activity.user?.role ?? "-"}

                            </p>

                        </div>

                        <div>

                            <p className="text-sm text-gray-500">

                                Status

                            </p>

                            <span

                                className={`inline-flex px-3 py-1 rounded-full text-xs font-semibold ${
                                    activity.status === "success"
                                        ? "bg-green-100 text-green-700"
                                        : "bg-red-100 text-red-700"
                                }`}

                            >

                                {activity.status}

                            </span>

                        </div>

                        <div>

                            <p className="text-sm text-gray-500">

                                HTTP Method

                            </p>

                            <span

                                className={`inline-flex px-3 py-1 rounded-full text-xs font-semibold ${
                                    activity.method === "GET"
                                        ? "bg-blue-100 text-blue-700"
                                        : activity.method === "POST"
                                        ? "bg-green-100 text-green-700"
                                        : activity.method === "PUT"
                                        ? "bg-yellow-100 text-yellow-700"
                                        : activity.method === "PATCH"
                                        ? "bg-orange-100 text-orange-700"
                                        : "bg-red-100 text-red-700"
                                }`}

                            >

                                {activity.method}

                            </span>

                        </div>

                    </div>

                    <div>

                        <p className="text-sm text-gray-500">

                            Description

                        </p>

                        <div className="mt-1 rounded-lg border bg-gray-50 p-3">

                            {activity.description ?? "-"}

                        </div>

                    </div>

                    <div>

                        <p className="text-sm text-gray-500">

                            URL

                        </p>

                        <div className="mt-1 rounded-lg border bg-gray-50 p-3 break-all">

                            {activity.url}

                        </div>

                    </div>

                    <div className="grid grid-cols-2 gap-5">

                        <div>

                            <p className="text-sm text-gray-500">

                                IP Address

                            </p>

                            <div className="mt-1 rounded-lg border bg-gray-50 p-3">

                                {activity.ip_address}

                            </div>

                        </div>

                        <div>

                            <p className="text-sm text-gray-500">

                                Created At

                            </p>

                            <div className="mt-1 rounded-lg border bg-gray-50 p-3">

                                {activity.created_at}

                            </div>

                        </div>

                    </div>

                    <div>

                        <p className="text-sm text-gray-500">

                            User Agent

                        </p>

                        <div className="mt-1 rounded-lg border bg-gray-50 p-3 break-all">

                            {activity.user_agent}

                        </div>

                    </div>

                </div>

                {/* ==========================================================
                    Footer
                ========================================================== */}

                <div className="border-t px-6 py-4 flex justify-end">

                    <button

                        onClick={onClose}

                        className="px-5 py-2 rounded-lg bg-green-600 text-white hover:bg-green-700"

                    >

                        Tutup

                    </button>

                </div>

            </div>

        </div>

    );

}