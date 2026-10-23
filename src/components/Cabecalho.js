import LinkMenu from './LinkMenu.js';

export default function Cabecalho(){
    return(
        <header style={{ background: '#1a3a5c', padding: '1rem'}}>
            <nav style={{ display: 'flex', gap: '1.5rem', maxWidth: 900, margin: '0 auto' }}>
                <LinkMenu href= '/'>Início</LinkMenu>
                <LinkMenu href ='/livros'>Livros</LinkMenu>
                <LinkMenu href = '/sobre'>Sobre</LinkMenu>
            </nav>
        </header>
    )
}