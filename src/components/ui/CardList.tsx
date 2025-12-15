import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "../ui/card"

export default function CardList() {
  const cards = [
    { title: "User Dashboard", desc: "Overview of user activity" },
    { title: "Analytics", desc: "Track performance metrics" },
    { title: "Orders", desc: "Manage customer orders" },
    { title: "Payments", desc: "Transaction history details" },
    { title: "Products", desc: "Product inventory management" },
    { title: "Categories", desc: "Organize product categories" },
    { title: "Customers", desc: "Customer profile records" },
    { title: "Reports", desc: "Monthly and yearly reports" },
    { title: "Settings", desc: "Application configuration" },
    { title: "Notifications", desc: "System alerts and updates" },
    { title: "Support", desc: "Customer support tickets" },
    { title: "Profile", desc: "User account information" },
  ]

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {cards.map((card, index) => (
        <Card
          key={index}
          className="
            bg-white 
            sm:bg-red-300 
            md:bg-green-300 
            lg:bg-yellow-300 
            xl:bg-pink-300 
            2xl:bg-purple-300
          "
        >
          <CardHeader>
            <CardTitle>{card.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>{card.desc}</CardDescription>
          </CardContent>
        </Card>
        
      ))}
    </div>
  )
}
