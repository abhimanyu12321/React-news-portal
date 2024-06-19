// src/components/Layout.jsx
// eslint-disable-next-line react/prop-types
export default function Layout({ children }) {
  return (
    <div className="min-h-screen  bg-gray-100 text-gray-800">
      <header className="bg-blue-600 text-white p-4">
        <h1 className="text-2xl font-bold">React News Portal</h1>
      </header>
      <main className="p-4 min-h-[85vh]">{children}</main>
      <footer className="bg-gray-800 text-white text-center p-4">
        <p>&copy; 2024 React News Portal. All rights reserved.</p>
      </footer>
    </div>
  );
}
