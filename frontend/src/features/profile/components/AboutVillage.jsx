import SectionTitle from "../../../components/common/SectionTitle";
import useProfile from "../../../hooks/useProfile";

export default function AboutVillage() {

    const {
        profile,
        loading,
    } = useProfile();

    if (loading) {

        return (

            <section className="py-24">

                <div className="max-w-7xl mx-auto px-6">

                    <p className="text-center text-gray-500">
                        Memuat profil desa...
                    </p>

                </div>

            </section>

        );

    }

    return (

        <section className="py-24">

            <div className="max-w-7xl mx-auto px-6">

                <SectionTitle
                    subtitle="Tentang Desa"
                    title={profile?.village_name}
                />

                <p className="text-gray-600 leading-9">

                    {profile?.history
                        ? profile.history
                        : `${profile?.village_name} merupakan salah satu desa di Kecamatan ${profile?.district}, Kabupaten ${profile?.regency}, Provinsi ${profile?.province}.`
                    }

                </p>

                <div className="mt-10 grid md:grid-cols-2 gap-6">

                    <div className="bg-green-50 rounded-2xl p-6">

                        <h3 className="text-lg font-semibold text-green-700 mb-2">

                            Kepala Desa

                        </h3>

                        <p className="text-gray-700">

                            {profile?.village_head ?? "-"}

                        </p>

                    </div>

                    <div className="bg-green-50 rounded-2xl p-6">

                        <h3 className="text-lg font-semibold text-green-700 mb-2">

                            Wilayah Administratif

                        </h3>

                        <p className="text-gray-700">

                            Kecamatan {profile?.district}

                            <br />

                            Kabupaten {profile?.regency}

                            <br />

                            Provinsi {profile?.province}

                        </p>

                    </div>

                </div>

            </div>

        </section>

    );

}