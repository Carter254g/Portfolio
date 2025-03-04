import Link from "next/link"
import Image from "next/image"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import ClientLogos from "@/components/client-logos"

export default function WorkPage() {
  const categories = [
    { id: "all", label: "All Projects" },
    { id: "commercial", label: "Commercial" },
    { id: "events", label: "Events" },
    { id: "brand", label: "Brand Campaigns" },
    { id: "portrait", label: "Portraits" },
  ]

  const projects = [
    {
      id: 1,
      title: "Yellowcard Campaign",
      category: "commercial",
      image: "https://images.unsplash.com/photo-1551818255-e6e10975bc17?q=80&w=2073&auto=format&fit=crop",
      link: "/work/yellowcard-campaign",
    },
    {
      id: 2,
      title: "Binance Africa",
      category: "events",
      image: "https://images.unsplash.com/photo-1540317580384-e5d43867caa6?q=80&w=2070&auto=format&fit=crop",
      link: "/work/binance-africa",
    },
    {
      id: 3,
      title: "Africa Tech Summit",
      category: "events",
      image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=2012&auto=format&fit=crop",
      link: "/work/africa-tech-summit",
    },
    {
      id: 4,
      title: "Standard Chartered",
      category: "brand",
      image: "https://images.unsplash.com/photo-1560439514-4e9645039924?q=80&w=2070&auto=format&fit=crop",
      link: "/work/standard-chartered",
    },
    {
      id: 5,
      title: "Waza Launch",
      category: "events",
      image: "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=2069&auto=format&fit=crop",
      link: "/work/waza-launch",
    },
    {
      id: 6,
      title: "Xpose Fashion",
      category: "commercial",
      image: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=2070&auto=format&fit=crop",
      link: "/work/xpose-fashion",
    },
    {
      id: 7,
      title: "CEO Portraits",
      category: "portrait",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop",
      link: "/work/ceo-portraits",
    },
    {
      id: 8,
      title: "Tech Conference",
      category: "events",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2070&auto=format&fit=crop",
      link: "/work/tech-conference",
    },
    {
      id: 9,
      title: "Product Launch",
      category: "commercial",
      image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=2020&auto=format&fit=crop",
      link: "/work/product-launch",
    },
    {
      id: 10,
      title: "Corporate Headshots",
      category: "portrait",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop",
      link: "/work/corporate-headshots",
    },
    {
      id: 11,
      title: "Annual Report",
      category: "brand",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=2011&auto=format&fit=crop",
      link: "/work/annual-report",
    },
    {
      id: 12,
      title: "Lifestyle Campaign",
      category: "commercial",
      image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=2032&auto=format&fit=crop",
      link: "/work/lifestyle-campaign",
    },
    {
      id: 13,
      title: "Showmax Production",
      category: "commercial",
      image: "https://images.unsplash.com/photo-1578022761797-b8636ac1773c?q=80&w=2071&auto=format&fit=crop",
      link: "/work/showmax-production",
    },
    {
      id: 14,
      title: "Smachs Foundation",
      category: "events",
      image: "https://images.unsplash.com/photo-1593113630400-ea4288922497?q=80&w=2070&auto=format&fit=crop",
      link: "/work/smachs-foundation",
    },
  ]

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
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
            <div>
              <Button asChild variant="link" className="text-gray-400 mb-4 pl-0">
                <Link href="/">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Home
                </Link>
              </Button>
              <h1 className="text-4xl md:text-5xl font-bold">Portfolio</h1>
            </div>
            <Button asChild className="mt-4 md:mt-0 rounded-none bg-white text-black hover:bg-gray-200">
              <Link href="https://calendly.com/mulinyafadhil">Book a Session</Link>
            </Button>
          </div>

          <Tabs defaultValue="all" className="w-full">
            <TabsList className="w-full justify-start overflow-x-auto mb-12 bg-transparent">
              {categories.map((category) => (
                <TabsTrigger
                  key={category.id}
                  value={category.id}
                  className="data-[state=active]:bg-white data-[state=active]:text-black rounded-none px-6 py-2 text-sm"
                >
                  {category.label}
                </TabsTrigger>
              ))}
            </TabsList>

            <TabsContent value="all" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project) => (
                  <Link href={project.link} key={project.id} className="group block relative overflow-hidden">
                    <div className="relative aspect-square overflow-hidden">
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-80 transition-opacity duration-300" />
                    </div>
                    <div className="absolute bottom-0 left-0 p-6 w-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <h3 className="text-xl font-bold">{project.title}</h3>
                    </div>
                  </Link>
                ))}
              </div>
            </TabsContent>

            {categories.slice(1).map((category) => (
              <TabsContent key={category.id} value={category.id} className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {projects
                    .filter((project) => project.category === category.id)
                    .map((project) => (
                      <Link href={project.link} key={project.id} className="group block relative overflow-hidden">
                        <div className="relative aspect-square overflow-hidden">
                          <Image
                            src={project.image || "/placeholder.svg"}
                            alt={project.title}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-80 transition-opacity duration-300" />
                        </div>
                        <div className="absolute bottom-0 left-0 p-6 w-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <h3 className="text-xl font-bold">{project.title}</h3>
                        </div>
                      </Link>
                    ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>

          {/* Trusted By Section */}
          <section className="mt-24 py-16 px-6 bg-zinc-900 -mx-6 md:-mx-12 lg:-mx-24">
            <div className="max-w-screen-xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">Trusted By</h2>
              <ClientLogos />
            </div>
          </section>
        </div>
      </main>

      <footer className="py-12 px-6 md:px-12 lg:px-24 bg-black border-t border-zinc-800">
        <div className="max-w-screen-xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:grid-cols-4">
            <div>
              <h3 className="text-xl font-bold mb-4">Samwel Obara</h3>
              <p className="text-gray-400">
                Professional Photographer & Videographer
                <br />
                Nairobi, Kenya
              </p>
              <div className="mt-6">
                <form className="flex flex-col sm:flex-row gap-2">
                  <input
                    type="email"
                    placeholder="Your email"
                    className="bg-zinc-800 border border-zinc-700 px-4 py-2 rounded-none focus:outline-none focus:ring-2 focus:ring-white"
                  />
                  <button type="submit" className="bg-white text-black px-4 py-2 hover:bg-gray-200 transition-colors">
                    Subscribe
                  </button>
                </form>
                <p className="text-xs text-gray-500 mt-2">Subscribe to get updates on new projects and offers</p>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Navigation</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/"
                    className="text-gray-400 hover:text-white transition-colors inline-block relative after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 after:bg-white after:transition-all hover:after:w-full"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/work"
                    className="text-gray-400 hover:text-white transition-colors inline-block relative after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 after:bg-white after:transition-all hover:after:w-full"
                  >
                    Work
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    className="text-gray-400 hover:text-white transition-colors inline-block relative after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 after:bg-white after:transition-all hover:after:w-full"
                  >
                    About
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Services</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/services"
                    className="text-gray-400 hover:text-white transition-colors inline-block relative after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 after:bg-white after:transition-all hover:after:w-full"
                  >
                    Commercial Photography
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services"
                    className="text-gray-400 hover:text-white transition-colors inline-block relative after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 after:bg-white after:transition-all hover:after:w-full"
                  >
                    Event Coverage
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services"
                    className="text-gray-400 hover:text-white transition-colors inline-block relative after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 after:bg-white after:transition-all hover:after:w-full"
                  >
                    Brand Campaigns
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services"
                    className="text-gray-400 hover:text-white transition-colors inline-block relative after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 after:bg-white after:transition-all hover:after:w-full"
                  >
                    Creative Direction
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Connect</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <div className="w-8 h-8 flex items-center justify-center bg-zinc-800 rounded-full">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M22 12H16L14 15H10L8 12H2"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M5.45 5.11L2 12V18C2 18.5304 2.21071 19.0391 2.58579 19.4142C2.96086 19.7893 3.46957 20 4 20H20C20.5304 20 21.0391 19.7893 21.4142 19.4142C21.7893 19.0391 22 18.5304 22 18V12L18.55 5.11C18.3844 4.77679 18.1292 4.49637 17.813 4.30028C17.4967 4.10419 17.1321 4.0002 16.76 4H7.24C6.86792 4.0002 6.50326 4.10419 6.18704 4.30028C5.87083 4.49637 5.61558 4.77679 5.45 5.11Z"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <a href="mailto:info@samwelobara.com" className="text-gray-400 hover:text-white transition-colors">
                    info@samwelobara.com
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-8 h-8 flex items-center justify-center bg-zinc-800 rounded-full">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M22 16.92V19.92C22.0011 20.1985 21.9441 20.4742 21.8325 20.7294C21.7209 20.9845 21.5573 21.2136 21.3521 21.4019C21.1468 21.5901 20.9046 21.7335 20.6407 21.8227C20.3769 21.9119 20.0974 21.9451 19.82 21.92C16.7428 21.5856 13.787 20.5341 11.19 18.85C8.77383 17.3147 6.72534 15.2662 5.19 12.85C3.49998 10.2412 2.44824 7.27097 2.12 4.18C2.09501 3.90347 2.12788 3.62476 2.2165 3.36162C2.30513 3.09849 2.44757 2.85669 2.63477 2.65162C2.82196 2.44655 3.04981 2.28271 3.30379 2.17052C3.55778 2.05833 3.83234 2.00026 4.11 2H7.11C7.59531 1.99522 8.06579 2.16708 8.43376 2.48353C8.80173 2.79999 9.04208 3.23945 9.11 3.72C9.23662 4.68007 9.47145 5.62273 9.81 6.53C9.94455 6.88792 9.97366 7.27691 9.89391 7.65088C9.81415 8.02485 9.62886 8.36811 9.36 8.64L8.09 9.91C9.51356 12.4135 11.5865 14.4864 14.09 15.91L15.36 14.64C15.6319 14.3711 15.9752 14.1858 16.3491 14.1061C16.7231 14.0263 17.1121 14.0554 17.47 14.19C18.3773 14.5286 19.3199 14.7634 20.28 14.89C20.7658 14.9585 21.2094 15.2032 21.5265 15.5775C21.8437 15.9518 22.0122 16.4296 22 16.92Z"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <a href="tel:+254700000000" className="text-gray-400 hover:text-white transition-colors">
                    +254 700 000 000
                  </a>
                </li>
                <li className="flex space-x-4 mt-4">
                  <a
                    href="#"
                    className="w-10 h-10 flex items-center justify-center bg-zinc-800 rounded-full text-gray-400 hover:text-white hover:bg-zinc-700 transition-all transform hover:-translate-y-1"
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M18 2H15C13.6739 2 12.4021 2.52678 11.4645 3.46447C10.5268 4.40215 10 5.67392 10 7V10H7V14H10V22H14V14H17L18 10H14V7C14 6.73478 14.1054 6.48043 14.2929 6.29289C14.4804 6.10536 14.7348 6 15 6H18V2Z"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 flex items-center justify-center bg-zinc-800 rounded-full text-gray-400 hover:text-white hover:bg-zinc-700 transition-all transform hover:-translate-y-1"
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
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
                  <a
                    href="#"
                    className="w-10 h-10 flex items-center justify-center bg-zinc-800 rounded-full text-gray-400 hover:text-white hover:bg-zinc-700 transition-all transform hover:-translate-y-1"
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M17.5 6.5H17.51M7 2H17C19.7614 2 22 4.23858 22 7V17C22 19.7614 19.7614 22 17 22H7C4.23858 22 2 19.7614 2 17V7C2 4.23858 4.23858 2 7 2ZM16 11.37C16.1234 12.2022 15.9813 13.0522 15.5938 13.799C15.2063 14.5458 14.5931 15.1514 13.8416 15.5297C13.0901 15.9079 12.2384 16.0396 11.4078 15.9059C10.5771 15.7723 9.80976 15.3801 9.21484 14.7852C8.61992 14.1902 8.22773 13.4229 8.09407 12.5922C7.9604 11.7616 8.09207 10.9099 8.47033 10.1584C8.84859 9.40685 9.45419 8.79374 10.201 8.40624C10.9478 8.01874 11.7978 7.87659 12.63 8C13.4789 8.12588 14.2649 8.52146 14.8717 9.12831C15.4785 9.73515 15.8741 10.5211 16 11.37Z"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 flex items-center justify-center bg-zinc-800 rounded-full text-gray-400 hover:text-white hover:bg-zinc-700 transition-all transform hover:-translate-y-1"
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M23 3.00005C22.0424 3.67552 20.9821 4.19216 19.86 4.53005C19.2577 3.83756 18.4573 3.34674 17.567 3.12397C16.6767 2.90121 15.7395 2.95724 14.8821 3.2845C14.0247 3.61176 13.2884 4.19445 12.773 4.95376C12.2575 5.71308 11.9877 6.61238 12 7.53005V8.53005C10.2426 8.57561 8.50127 8.18586 6.93101 7.39549C5.36074 6.60513 4.01032 5.43868 3 4.00005C3 4.00005 -1 13 8 17C5.94053 18.398 3.48716 19.099 1 19C10 24 21 19 21 7.50005C20.9991 7.2215 20.9723 6.94364 20.92 6.67005C21.9406 5.66354 22.6608 4.39276 23 3.00005Z"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </a>
                </li>
                <li className="mt-6">
                  <Button asChild className="rounded-none bg-white text-black hover:bg-gray-200 w-full">
                    <Link href="https://calendly.com/mulinyafadhil">Book a Session</Link>
                  </Button>
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

