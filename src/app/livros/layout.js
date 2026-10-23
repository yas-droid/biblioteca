export default function LayoutLivros({children}){
return (
        <section>
            <p style={{ fontSize: '0.9rem', color: '#64748b', marginBottom: '1rem' }}>
                Acervo - Livros
            </p>
            {children}
        </section>
    )
}
