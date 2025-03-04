import Link from "next/link"
import Image from "next/image"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function AboutPage() {
  const skills = [
    "Commercial Photography",
    "Event Coverage",
    "Brand Campaigns",
    "Portrait Photography",
    "Creative Direction",
    "Video Production",
    "Drone Photography",
    "Post-Production",
  ]

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
          <Link href="/about" className="text-white transition-colors">
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

      <main className="py-12 px-6 md:px-12 lg:px-24">
        <div className="max-w-screen-xl mx-auto">
          <Button asChild variant="link" className="text-gray-400 mb-4 pl-0">
            <Link href="/">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
          </Button>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="grid grid-cols-1 gap-6">
              <div className="relative aspect-[3/4] w-full">
                <Image
                  src="https://images.unsplash.com/photo-1554048612-b6a482bc67e5?q=80&w=2070&auto=format&fit=crop"
                  alt="Samwel Obara"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-[3/4] w-full">
                <Image
                  src="https://images.unsplash.com/photo-1552168324-d612d77725e3?q=80&w=2036&auto=format&fit=crop"
                  alt="Samwel Obara at work"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-[3/4] w-full">
                <Image
                  src="https://images.unsplash.com/photo-1493863641943-9b68992a8d07?q=80&w=2058&auto=format&fit=crop"
                  alt="Samwel Obara shooting"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">About Me</h1>

              <div className="prose prose-lg prose-invert max-w-none">
                <p>
                  I'm Samwel Obara, a professional photographer and videographer based in Nairobi, Kenya. With over a
                  decade of experience, I've had the privilege of working with some of the most innovative brands and
                  companies across Africa and beyond.
                </p>

                <p>
                  My journey in photography began with a passion for capturing moments and telling stories through
                  visual media. Over the years, I've refined my craft and developed a distinctive style that combines
                  technical precision with creative vision.
                </p>

                <p>
                  I specialize in commercial photography, brand campaigns, event coverage, and creative direction. My
                  work has been featured in various publications and has helped brands communicate their message
                  effectively through compelling visual content.
                </p>

                <h2 className="text-2xl font-bold mt-8 mb-4">My Approach</h2>

                <p>
                  I believe that great photography is about more than just technical skill—it's about understanding the
                  client's vision, connecting with the subject, and creating images that resonate with the intended
                  audience.
                </p>

                <p>
                  Whether I'm shooting a corporate event, a brand campaign, or a personal portrait, my goal is always to
                  exceed expectations and deliver images that not only meet the brief but also bring a unique
                  perspective to the project.
                </p>

                <h2 className="text-2xl font-bold mt-8 mb-4">Skills & Expertise</h2>

                <div className="grid grid-cols-2 gap-2 mb-8">
                  {skills.map((skill, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <div className="w-1 h-1 bg-white rounded-full"></div>
                      <span>{skill}</span>
                    </div>
                  ))}
                </div>

                <h2 className="text-2xl font-bold mt-8 mb-4">Let's Work Together</h2>

                <p>
                  I'm always open to new collaborations and exciting projects. Whether you have a specific vision in
                  mind or need guidance on how to bring your ideas to life, I'm here to help.
                </p>

                <div className="mt-8">
                  <Button asChild size="lg" className="rounded-none bg-white text-black hover:bg-gray-200">
                    <Link href="https://calendly.com/mulinyafadhil">Book a Consultation</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="py-12 px-6 md:px-12 lg:px-24 bg-black border-t border-zinc-800/50">
        <div className="max-w-screen-xl mx-auto">
          <div className="mb-12">
            <h3 className="text-xl font-bold mb-2">Samwel Obara</h3>
            <p className="text-gray-400">
              Professional Photographer & Videographer
              <br />
              Nairobi, Kenya
            </p>
          </div>

          <div className="pt-8 border-t border-zinc-800/50 text-center">
            <p className="text-gray-500">© {new Date().getFullYear()} Samwel Obara. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

