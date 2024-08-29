const Layout = ({ children }) => {
  return (
    <div className="flex-center min-h-screen w-full bg-primary-50 bg-dotted-pattern bg-cover bg-fixed bg-center">
      {/* add nav */}

      <nav className="flex justify-between items-center p-4 bg-primary-500 text-white bg-blue-400">
        <div className="flex items-center space-x-4">
          <a href="/" className="font-bold">
            Home
          </a>
          <a href="/about" className="font-bold">
            About
          </a>
        </div>
        <div>
          <a href="/login" className="font-bold">
            Login
          </a>
          <a href="/register" className="font-bold">
            Register
          </a>
        </div>
      </nav>
      {children}
    </div>
  );
};

export default Layout;
