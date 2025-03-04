import Image from "next/image"

export default function ClientLogos() {
  const clients = [
    { name: "Yellowcard", logo: "https://placehold.co/180x60/222/fff?text=Yellowcard" },
    { name: "Xpose", logo: "https://placehold.co/180x60/222/fff?text=Xpose" },
    { name: "Binance", logo: "https://placehold.co/180x60/222/fff?text=Binance" },
    { name: "Africa Tech Summit", logo: "https://placehold.co/180x60/222/fff?text=Africa+Tech" },
    { name: "Waza", logo: "https://placehold.co/180x60/222/fff?text=Waza" },
    { name: "Standard Chartered", logo: "https://placehold.co/180x60/222/fff?text=Standard+Chartered" },
    { name: "Showmax", logo: "https://placehold.co/180x60/222/ff0033?text=Showmax" },
    { name: "Smachs Foundation", logo: "https://placehold.co/180x60/222/fff?text=Smachs+Foundation" },
  ]

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
      {clients.map((client, index) => (
        <div
          key={index}
          className="flex justify-center items-center p-6 bg-zinc-800/50 backdrop-blur-sm hover:bg-zinc-800 transition-colors"
        >
          <div className="relative h-12 w-full">
            <Image src={client.logo || "/placeholder.svg"} alt={client.name} fill className="object-contain" />
          </div>
        </div>
      ))}
    </div>
  )
}

