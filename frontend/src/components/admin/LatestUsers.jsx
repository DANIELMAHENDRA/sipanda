export default function LatestUsers({ users }) {

    return (

        <div className="bg-white rounded-xl shadow p-6">

            <h2 className="text-xl font-semibold mb-4">

                Pengguna Terbaru

            </h2>

            <div className="space-y-4">

                {

                    users.length === 0

                        ? (

                            <p className="text-gray-500">

                                Belum ada pengguna.

                            </p>

                        )

                        : (

                            users.map((user) => (

                                <div
                                    key={user.id}
                                    className="flex justify-between border-b pb-3"
                                >

                                    <div>

                                        <h4 className="font-semibold">

                                            {user.name}

                                        </h4>

                                        <p className="text-sm text-gray-500">

                                            {user.email}

                                        </p>

                                    </div>

                                    <span
                                        className="
                                            bg-blue-100
                                            text-blue-700
                                            px-3
                                            py-1
                                            rounded-full
                                            text-xs
                                        "
                                    >

                                        {user.role}

                                    </span>

                                </div>

                            ))

                        )

                }

            </div>

        </div>

    );

}