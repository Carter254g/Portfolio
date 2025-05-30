import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <header className="sticky top-0 z-50 flex justify-between items-center w-full px-6 md:px-12 lg:px-24 py-6 bg-black/90 backdrop-blur-sm">
        <Link href="/" className="text-2xl font-bold tracking-tighter">
          SAMWEL OBARA
        </Link>
        <nav className="hidden md:flex space-x-8 text-sm">
          <Link href="/work" className="hover:text-gray-300 transition-colors">
            WORK
          </Link>
          <Link href="/about" className="hover:text-gray-300 transition-colors">
            ABOUT
          </Link>
          <Link href="/contact" className="text-white transition-colors">
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
            <Link href="/">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
          </Button>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Get in Touch</h1>

              <div className="prose prose-lg prose-invert max-w-none mb-8">
                <p>
                  I'm always interested in new projects and collaborations. Whether you have a specific project in mind
                  or just want to discuss possibilities, feel free to reach out.
                </p>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-2">Email</h3>
                  <a href="mailto:info@samwelobara.com" className="text-gray-400 hover:text-white">
                    info@samwelobara.com
                  </a>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-2">Phone</h3>
                  <a href="tel:+254700000000" className="text-gray-400 hover:text-white">
                    +254 700 000 000
                  </a>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-2">Location</h3>
                  <p className="text-gray-400">Nairobi, Kenya</p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-2">Social Media</h3>
                  <div className="flex space-x-4">
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
                  </div>
                </div>
              </div>

              <div className="mt-12">
                <h3 className="text-xl font-semibold mb-6">Book a Session</h3>
                <Button asChild size="lg" className="rounded-none bg-white text-black hover:bg-gray-200">
                  <Link href="https://calendly.com/mulinyafadhil">Schedule via Calendly</Link>
                </Button>
              </div>
            </div>

            <div className="bg-zinc-900 p-8">
              <h2 className="text-2xl font-bold mb-6">Send a Message</h2>

              <form className="space-y-6">
                <div className="grid gap-2">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" className="bg-zinc-800 border-zinc-700" />
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" className="bg-zinc-800 border-zinc-700" />
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input id="subject" className="bg-zinc-800 border-zinc-700" />
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea id="message" className="bg-zinc-800 border-zinc-700" rows={6} />
                </div>

                <Button type="submit" className="w-full rounded-none bg-white text-black hover:bg-gray-200">
                  Send Message
                </Button>
              </form>
            </div>
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

