import { OceanScene } from "@/components/ocean-scene"
import { ImageGrid } from "@/components/image-grid"

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      {/* Hero Section with Ocean Animation */}
      <section className="relative flex-1 flex items-center justify-center overflow-hidden min-h-[70vh]">
        <OceanScene />

        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-foreground mb-6 text-balance">
            Cloud-Oriented Web App L6
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Seamlessly deploy and scale your containerized applications in the cloud
          </p>
        </div>
      </section>

      {/* Image Grid Section */}
      <section className="py-16 px-4 md:px-8 lg:px-16">
        <ImageGrid />
      </section>

      {/* Footer */}
      <footer className="mt-auto border-t border-border bg-card">
        <div className="container mx-auto px-4 py-8 text-center">
          <p className="text-sm text-muted-foreground">
            © All rights reserved Rahimov Yusif, Kyrylo Stoichev LLC (Limited Liability Company)
          </p>
        </div>
      </footer>
    </main>
  )
}
