import Link from "next/link";

export default function NaoEncontrado(){
    return(
        <div>
            <h1>404 - Página não encontrada</h1>
            <p>O endereço acessado não existe</p>
            <p><Link href="/">Voltar ao início</Link></p>
        </div>
    )
}

