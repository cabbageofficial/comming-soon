"use client"

import Link from "next/link";

const Linkes = () => {
    const onRefresh = () => {
        window.location.reload();
    }
    return (
        <Link href="/" onClick={onRefresh} className="bg-secondary text-white py-1.5 px-4 uppercase text-sm font-semibold rounded">Retry</Link>
    );
};

export default Linkes;