import { Search } from "lucide-react";

export default function SearchInput({

    value,

    onChange,

    placeholder = "Cari data...",

}) {

    return (

        <div className="relative">

            <Search
                size={18}
                className="absolute left-3 top-3 text-gray-400"
            />

            <input

                type="text"

                value={value}

                onChange={onChange}

                placeholder={placeholder}

                className="
                    w-full
                    border
                    rounded-lg
                    py-2.5
                    pl-10
                    pr-4
                    outline-none
                    focus:ring-2
                    focus:ring-green-500
                "

            />

        </div>

    );

}