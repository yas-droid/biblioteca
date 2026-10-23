'use client';

import { useState } from "react";
import Link from "next/link";

export default function FiltroLivros({ livros }){
    const [busca, setBusca] = useState('');

    const filtrados = livros.filter((livro) => 
        livro.titulo.toLowerCase().includes(busca.toLowerCase())
);

return(
    <div>
        <input type="search"
        placeholder="Busca por título..."
        value={busca}
        onChange={(e) => setBusca(e.target.value)}
        style={{padding:'0.5rem', width: '100%', marginBottom: '1rem'}}
        ></input>

    {filtrados.length === 0 && <p>Nenhum registro encontrado.</p> }

    <ul>
        {filtrados.map((livro)=>(
            <li key={livro.id}>
                <Link href={`/livros/${livro.id}`}>{livro.titulo}</Link> - {livro.autor}
            </li>
        ))}
    </ul>

    </div>
)

}