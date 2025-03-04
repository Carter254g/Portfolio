import Link from "next/link"
import { ArrowRight, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import ClientLogos from "@/components/client-logos"
import FeaturedProjects from "@/components/featured-projects"
import { ScrollButton } from "@/components/scroll-button"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative h-screen w-full overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1542038784456-1ea8e935640e?q=80&w=2070&auto=format&fit=crop')",
              filter: "brightness(0.6)",
            }}
          />
        </div>
        <div className="relative z-10 flex flex-col justify-between h-full px-6 md:px-12 lg:px-24 py-12">
          <header className="flex justify-between items-center w-full">
            <div className="text-2xl font-bold tracking-tighter">SAMWEL OBARA</div>
            <nav className="hidden md:flex space-x-8 text-sm">
              <Link href="/work" className="hover:text-gray-300 transition-colors">
                WORK
              </Link>
              <Link href="/about" className="hover:text-gray-300 transition-colors">
                ABOUT
              </Link>
              <Link
                href="https://calendly.com/mulinyafadhil"
                className="text-black bg-white px-4 py-2 hover:bg-gray-200 transition-colors group relative overflow-hidden"
              >
                <span className="relative z-10 group-hover:-translate-y-[120%] transition-transform duration-500 block">
                  BOOK
                </span>
                <span className="absolute inset-0 z-0 translate-y-[120%] group-hover:translate-y-0 transition-transform duration-500 flex items-center justify-center bg-white">
                  BOOK
                </span>
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

          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
              Professional Photography & Videography
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              Based in Nairobi, Kenya. With over 100+ successful projects, I've been capturing moments for global brands
              and creating visual stories that leave lasting impressions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="rounded-none text-black bg-white hover:bg-gray-200">
                <Link href="/work">
                  View Portfolio
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="rounded-none border-white text-white hover:bg-white/10"
              >
                <Link href="https://calendly.com/mulinyafadhil">Book a Session</Link>
              </Button>
            </div>
          </div>

          <div className="flex justify-center w-full">
            <ScrollButton />
          </div>
        </div>
      </section>

      {/* Featured Work Section */}
      <section className="py-24 px-6 md:px-12 lg:px-24">
        <div className="max-w-screen-xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Work</h2>
              <p className="text-gray-400 max-w-2xl">
                A selection of my best photography and videography projects for global and local brands.
              </p>
            </div>
            <Button asChild variant="link" className="text-white mt-4 md:mt-0">
              <Link href="/work">
                View All Projects <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

          <FeaturedProjects />
        </div>
      </section>

      {/* Clients Section */}
      <section className="py-24 px-6 md:px-12 lg:px-24 bg-zinc-900">
        <div className="max-w-screen-xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Trusted By</h2>
          <p className="text-gray-400 max-w-2xl mb-16">
            I've had the privilege of working with some of the most innovative brands and companies around the world,
            including Yellowcard, Binance, Showmax, Africa Tech Summit, and many more.
          </p>

          <ClientLogos />
        </div>
      </section>

      {/* Booking CTA */}
      <section className="py-24 px-6 md:px-12 lg:px-24 bg-white text-black">
        <div className="max-w-screen-xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to Create Something Amazing?</h2>
          <p className="text-gray-700 max-w-2xl mx-auto mb-8 text-lg">
            Let's collaborate on your next project. Book a consultation to discuss your vision and how we can bring it
            to life.
          </p>
          <Link
            href="https://calendly.com/mulinyafadhil"
            className="inline-flex items-center px-8 py-3 bg-black text-white hover:bg-gray-900 transition-colors group"
          >
            Book a Consultation
            <ArrowRight className="ml-2 h-4 w-4 transform transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 md:px-12 lg:px-24 bg-black border-t border-zinc-800/50">
        <div className="max-w-screen-xl mx-auto">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-xl font-bold mb-2">Samwel Obara</h3>
              <p className="text-gray-400">
                Professional Photographer & Videographer
                <br />
                Nairobi, Kenya
              </p>
            </div>
            <nav>
              <ul className="flex flex-col gap-2">
                <li>
                  <Link href="/" className="text-gray-400 hover:text-white transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/work" className="text-gray-400 hover:text-white transition-colors">
                    Work
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="text-gray-400 hover:text-white transition-colors">
                    About
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
          <div className="mt-12 pt-8 border-t border-zinc-800/50 text-center">
            <p className="text-gray-500">© {new Date().getFullYear()} Samwel Obara. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

