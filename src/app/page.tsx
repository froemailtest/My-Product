import CardList from "../components/ui/CardList";

export default function HomePage() {
  return (
    <div className="min-h-screen">

      <nav className="mb-6 bg-blue-200 p-4 ">
        <header className="text-center">
          <h1 className="text-2xl font-semibold text-black">
            Responsive Card Layout for Products
          </h1>
        </header>
      </nav>

      <main className="flex-1">
        <CardList />
      </main>

      <footer className="mt-6 text-center text-sm text-gray-600 mb-2">
        Created By:[Rinkal Donga]
      </footer>

    </div>
  );
}
