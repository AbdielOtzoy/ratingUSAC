import Link from "next/link";
{/*}
export default function RootLayout({ children }) {
  return (
    <div className="flex h-screen flex-col">
      <main className="flex-1">{children}</main>
    </div>
  );
}
*/}

const Layout = ({ children }) => {
  return (
    <div className="flex-center min-h-screen w-full bg-primary-50 bg-dotted-pattern bg-cover bg-fixed bg-center">
      <nav className="flex justify-between items-center p-4 bg-primary-500 text-white bg-primary-100">
        <div className="flex items-center space-x-4">
          <Link href="/" className="text-white font-bold text-2xl p-2">
            <img src="/app/src/img/logo.png" alt="logo" className="h-15 w-15" />
          </Link>
          <Link href="/" className="text-3xl font-bold hover:text-primary-200 transition-all ease-out duration-200">
            RatingUsac
          </Link>
        </div>
        <div className="flex items-center space-x-4 px-3">
          <Link href="/course" className="text-white font-bold hover:text-primary-200 transition-all ease-out duration-200">
            Cursos Aprobados
          </Link>
          <Link href="/posts/1234" className="text-white font-bold hover:text-primary-200 transition-all ease-out duration-200">
            Posts
          </Link>
          <Link href="/posts/create" className="text-white font-bold hover:text-primary-200 transition-all ease-out duration-200">
            Crear Post
          </Link>
          <Link href="/profile" className="text-white font-bold hover:text-primary-200 transition-all ease-out duration-200">
            Perfil
          </Link>
        </div>
      </nav>
      <div className="flex-1 w-3/4">
        {children}
      </div>
    </div>
  );
};

export default Layout;