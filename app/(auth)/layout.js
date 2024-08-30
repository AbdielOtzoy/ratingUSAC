import Link from "next/link";

const Layout = ({ children }) => {
  return (
    <div className="flex-center min-h-screen w-full bg-primary-50 bg-dotted-pattern bg-cover bg-fixed bg-center">
      {/* add nav */}

      <nav className="flex justify-between items-center p-4 bg-primary-500 text-white bg-primary-100">
        <div className="flex items-center space-x-4">
          <Link
            href="/login"
            className="text-white hover:text-primary-500 font-bold text-2xl p-2"
          >
            {" "}
            Login
          </Link>
          <Link
            href="/register"
            className="text-white hover:text-primary-500 font-bold text-2xl p-2"
          >
            Register
          </Link>
        </div>
      </nav>
      {children}
    </div>
  );
};

export default Layout;
