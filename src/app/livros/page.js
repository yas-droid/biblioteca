import Link from 'next/link';
import { livros } from '@/lib/dados-exemplo';
import FiltroLivros from '@/components/FiltroLivros.js';

export default function ListaLivros(){
    return(
        <div>
            <h1>Livros</h1>      
            <FiltroLivros livros={livros}/>
        </div>
    )
}