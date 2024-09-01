import Link from "next/link";

const Layout = ({ children }) => {
  return (
    <div className="flex-center min-h-screen w-full bg-primary-50 bg-dotted-pattern bg-cover bg-fixed bg-center">
      <nav className="flex justify-between items-center p-4 bg-primary-500 text-white bg-primary-100">
        <div className="flex items-center space-x-4">
          <Link href="/login" className="text-white font-bold text-2xl p-2">
            {" "}
            <img src="/app/src/img/logo.png" alt="logo" className="h-15 w-15" />
          </Link>
          <Link href="/login" className="text-3xl font-bold hover:text-primary-200 transition-all ease-out duration-200">
            RatingUsac
          </Link>
        </div>
      </nav>
      {children}
    </div>
  );
};

export default Layout;
