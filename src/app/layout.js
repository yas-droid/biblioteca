import './globals.css';
import Cabecalho from '@/components/Cabecalho';

export const metadata = {
  title: 'Biblioteca do Campus',
  description: 'Catálogo de livros da biblioteca',
}

export default function RootLayout({ children }){
  return(
    <html lang="pt-BR">
      <body>
        <Cabecalho/>
      <main>{children}</main>
      </body>
    </html>
  );
}
