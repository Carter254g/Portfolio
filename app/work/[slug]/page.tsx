import Link from "next/link"
import Image from "next/image"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

// Update the project images with realistic photography examples
function getProjectData(slug: string) {
  // In a real application, this would fetch data from an API or database
  const projects = {
    "yellowcard-campaign": {
      title: "Yellowcard Campaign",
      category: "Commercial Photography",
      client: "Yellowcard",
      date: "2023",
      description:
        "A commercial photography campaign for Yellowcard, showcasing their digital financial services across Africa.",
      images: [
        "https://images.unsplash.com/photo-1551818255-e6e10975bc17?q=80&w=2073&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1551135049-8a33b5883817?q=80&w=2070&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1551818255-e6e10975bc17?q=80&w=2073&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?q=80&w=2070&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?q=80&w=2070&auto=format&fit=crop",
      ],
    },
    "binance-africa": {
      title: "Binance Africa",
      category: "Event Photography",
      client: "Binance",
      date: "2023",
      description: "Comprehensive event coverage for Binance's Africa expansion launch event in Nairobi, Kenya.",
      images: [
        "https://images.unsplash.com/photo-1540317580384-e5d43867caa6?q=80&w=2070&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?q=80&w=2070&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1515187029135-18ee286d815b?q=80&w=2070&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?q=80&w=2070&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1540317580384-e5d43867caa6?q=80&w=2070&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1528605248644-14dd04022da1?q=80&w=2070&auto=format&fit=crop",
      ],
    },
    "africa-tech-summit": {
      title: "Africa Tech Summit",
      category: "Event Coverage",
      client: "Africa Tech Summit",
      date: "2022",
      description: "Full event photography and videography coverage for the annual Africa Tech Summit in Nairobi.",
      images: [
        "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=2012&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2070&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?q=80&w=2070&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=2012&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1515187029135-18ee286d815b?q=80&w=2070&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1591115765373-5207764f72e4?q=80&w=2070&auto=format&fit=crop",
      ],
    },
    "standard-chartered": {
      title: "Standard Chartered",
      category: "Brand Campaign",
      client: "Standard Chartered Bank",
      date: "2023",
      description:
        "A brand campaign for Standard Chartered Bank Kenya, highlighting their digital banking services and community initiatives.",
      images: [
        "https://images.unsplash.com/photo-1560439514-4e9645039924?q=80&w=2070&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1560439513-74b037a25d84?q=80&w=2070&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1560439514-e082c89860ad?q=80&w=2070&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1560439514-4e9645039924?q=80&w=2070&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1560439513-74b037a25d84?q=80&w=2070&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1560439514-e082c89860ad?q=80&w=2070&auto=format&fit=crop",
      ],
    },
  }

  return (
    projects[slug as keyof typeof projects] || {
      title: "Project Not Found",
      category: "",
      client: "",
      date: "",
      description: "This project could not be found.",
      images: [],
    }
  )
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = getProjectData(params.slug)

  return (
    <div className="min-h-screen bg-black text-white">
      <header className="sticky top-0 z-50 flex justify-between items-center w-full px-6 md:px-12 lg:px-24 py-6 bg-black/90 backdrop-blur-sm">
        <Link href="/" className="text-2xl font-bold tracking-tighter">
          SAMWEL OBARA
        </Link>
        <nav className="hidden md:flex space-x-8 text-sm">
          <Link href="/work" className="text-white transition-colors">
            WORK
          </Link>
          <Link href="/about" className="hover:text-gray-300 transition-colors">
            ABOUT
          </Link>
          <Link href="/contact" className="hover:text-gray-300 transition-colors">
            CONTACT
          </Link>
          <Link
            href="https://calendly.com/mulinyafadhil"
            className="text-black bg-white px-4 py-2 hover:bg-gray-200 transition-colors"
          >
            BOOK
          </Link>
        </nav>
        <button className="md:hidden">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 12H21" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M3 6H21" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M3 18H21" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </header>

      <main className="py-12 px-6 md:px-12 lg:px-24">
        <div className="max-w-screen-xl mx-auto">
          <Button asChild variant="link" className="text-gray-400 mb-4 pl-0">
            <Link href="/work">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Work
            </Link>
          </Button>

          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{project.title}</h1>
            <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8 text-gray-400">
              <div className="flex items-center gap-2">
                <span className="font-semibold text-white">Category:</span>
                <span>{project.category}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-semibold text-white">Client:</span>
                <span>{project.client}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-semibold text-white">Date:</span>
                <span>{project.date}</span>
              </div>
            </div>
          </div>

          <div className="mb-12">
            <p className="text-lg text-gray-300 max-w-3xl">{project.description}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {project.images.map((image, index) => (
              <div key={index} className="relative aspect-[4/3] w-full">
                <Image
                  src={image || "/placeholder.svg"}
                  alt={`${project.title} - Image ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <h2 className="text-2xl font-bold mb-6">Interested in working together?</h2>
            <Button asChild size="lg" className="rounded-none bg-white text-black hover:bg-gray-200">
              <Link href="https://calendly.com/mulinyafadhil">Book a Consultation</Link>
            </Button>
          </div>
        </div>
      </main>

      <footer className="py-12 px-6 md:px-12 lg:px-24 bg-black border-t border-zinc-800 mt-24">
        <div className="max-w-screen-xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Samwel Obara</h3>
              <p className="text-gray-400">
                Professional Photographer & Videographer
                <br />
                Nairobi, Kenya
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Navigation</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/" className="text-gray-400 hover:text-white">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/work" className="text-gray-400 hover:text-white">
                    Work
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="text-gray-400 hover:text-white">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-gray-400 hover:text-white">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Services</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/services" className="text-gray-400 hover:text-white">
                    Commercial Photography
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="text-gray-400 hover:text-white">
                    Event Coverage
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="text-gray-400 hover:text-white">
                    Brand Campaigns
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="text-gray-400 hover:text-white">
                    Creative Direction
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Connect</h3>
              <ul className="space-y-2">
                <li>
                  <a href="mailto:info@samwelobara.com" className="text-gray-400 hover:text-white">
                    info@samwelobara.com
                  </a>
                </li>
                <li>
                  <a href="tel:+254700000000" className="text-gray-400 hover:text-white">
                    +254 700 000 000
                  </a>
                </li>
                <li className="flex space-x-4 mt-4">
                  <a href="#" className="text-gray-400 hover:text-white">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M18 2H15C13.6739 2 12.4021 2.52678 11.4645 3.46447C10.5268 4.40215 10 5.67392 10 7V10H7V14H10V22H14V14H17L18 10H14V7C14 6.73478 14.1054 6.48043 14.2929 6.29289C14.4804 6.10536 14.7348 6 15 6H18V2Z"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </a>
                  <a href="#" className="text-gray-400 hover:text-white">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M16 8C17.5913 8 19.1174 8.63214 20.2426 9.75736C21.3679 10.8826 22 12.4087 22 14V21H18V14C18 13.4696 17.7893 12.9609 17.4142 12.5858C17.0391 12.2107 16.5304 12 16 12C15.4696 12 14.9609 12.2107 14.5858 12.5858C14.2107 12.9609 14 13.4696 14 14V21H10V14C10 12.4087 10.6321 10.8826 11.7574 9.75736C12.8826 8.63214 14.4087 8 16 8Z"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M6 9H2V21H6V9Z"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M4 6C5.10457 6 6 5.10457 6 4C6 2.89543 5.10457 2 4 2C2.89543 2 2 2.89543 2 4C2 5.10457 2.89543 6 4 6Z"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </a>
                  <a href="#" className="text-gray-400 hover:text-white">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M17.5 6.5H17.51M7 2H17C19.7614 2 22 4.23858 22 7V17C22 19.7614 19.7614 22 17 22H7C4.23858 22 2 19.7614 2 17V7C2 4.23858 4.23858 2 7 2ZM16 11.37C16.1234 12.2022 15.9813 13.0522 15.5938 13.799C15.2063 14.5458 14.5931 15.1514 13.8416 15.5297C13.0901 15.9079 12.2384 16.0396 11.4078 15.9059C10.5771 15.7723 9.80976 15.3801 9.21484 14.7852C8.61992 14.1902 8.22773 13.4229 8.09407 12.5922C7.9604 11.7616 8.09207 10.9099 8.47033 10.1584C8.84859 9.40685 9.45419 8.79374 10.201 8.40624C10.9478 8.01874 11.7978 7.87659 12.63 8C13.4789 8.12588 14.2649 8.52146 14.8717 9.12831C15.4785 9.73515 15.8741 10.5211 16 11.37Z"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-zinc-800 text-center text-gray-500">
            <p>© {new Date().getFullYear()} Samwel Obara. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

