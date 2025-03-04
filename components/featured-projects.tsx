import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"

export default function FeaturedProjects() {
  const projects = [
    {
      id: 1,
      title: "Yellowcard Campaign",
      category: "Commercial",
      image: "https://images.unsplash.com/photo-1551818255-e6e10975bc17?q=80&w=2073&auto=format&fit=crop",
      link: "/work/yellowcard-campaign",
    },
    {
      id: 2,
      title: "Binance Africa",
      category: "Event Photography",
      image: "https://images.unsplash.com/photo-1540317580384-e5d43867caa6?q=80&w=2070&auto=format&fit=crop",
      link: "/work/binance-africa",
    },
    {
      id: 3,
      title: "Africa Tech Summit",
      category: "Event Coverage",
      image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=2012&auto=format&fit=crop",
      link: "/work/africa-tech-summit",
    },
    {
      id: 4,
      title: "Standard Chartered",
      category: "Brand Campaign",
      image: "https://images.unsplash.com/photo-1560439514-4e9645039924?q=80&w=2070&auto=format&fit=crop",
      link: "/work/standard-chartered",
    },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {projects.map((project) => (
        <Link href={project.link} key={project.id} className="group block relative overflow-hidden">
          <div className="relative aspect-[4/3] overflow-hidden">
            <Image
              src={project.image || "/placeholder.svg"}
              alt={project.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-80" />
          </div>
          <div className="absolute bottom-0 left-0 p-6 w-full">
            <div className="flex justify-between items-end w-full">
              <div>
                <p className="text-sm text-gray-300 mb-2">{project.category}</p>
                <h3 className="text-xl md:text-2xl font-bold">{project.title}</h3>
              </div>
              <ArrowRight className="h-6 w-6 opacity-0 transform translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
}

