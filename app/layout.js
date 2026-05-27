import './globals.css'

export const metadata = {
  title: 'Wara Inti Pardo | Desenvolvedor Full Stack',
  description: 'Desenvolvedor Full Stack em formação pela UNICAMP',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>
        {children}
      </body>
    </html>
  )
}
