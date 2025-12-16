import CardList from "../components/ui/CardList";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">

      <nav className="mb-6 bg-blue-200 p-4">
        <header className="text-center">
          <h1 className="text-2xl font-semibold text-black">
            Product Card          </h1>
        </header>
      </nav>

      {/* Helping text */}
      <p className="mb-4 text-center text-black">
        Responsive Product card and changes layout      </p>

      <main className="flex-1">
        <CardList />
      </main>

      <footer className="mt-auto text-center text-sm text-gray-600 mb-2">
        Created By:[Rinkal Donga]
      </footer>

    </div>
  );
}
