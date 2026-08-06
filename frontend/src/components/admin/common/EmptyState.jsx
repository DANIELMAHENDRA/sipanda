import { Inbox } from "lucide-react";

export default function EmptyState({

    title = "Belum ada data",

}) {

    return (

        <div className="text-center py-16">

            <Inbox
                size={60}
                className="mx-auto text-gray-300"
            />

            <h3 className="mt-5 text-lg font-semibold">

                {title}

            </h3>

        </div>

    );

}