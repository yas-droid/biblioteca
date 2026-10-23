'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function LinkMenu({href, children}){
    const caminho = usePathname();
    const ativo = href ==='/'? caminho ==='/': caminho.startsWith(href);

    return(
        <Link
        href={href}
        style={{
            color: ativo ? '#fbbf24' : 'white',
            fontWeight: ativo ? 'bold' : 'normal'
        }}>
            {children}
        </Link>
    );

}