import CardList from "../components/ui/CardList";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="mb-6 text-center text-2xl font-semibold">
        Responsive Card Layout for Products
      </h1>

      <CardList />
    </div>
  );
}
