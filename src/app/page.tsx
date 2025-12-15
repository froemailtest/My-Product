import CardList from "../components/ui/CardList";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-100 p-6 flex flex-col">


      <header className="mb-6 text-center">
        <h1 className="text-2xl font-semibold">
          Responsive Card Layout for Products
        </h1>
      </header>

      <main className="flex-1">
        <CardList />
      </main>

      <footer className="mt-6 text-center text-sm text-gray-600">
        Created By:[Rinkal Donga]      </footer>

    </div>
  );
}
