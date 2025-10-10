import { Card } from "@/components/ui/card"

const dockerImages = [
  {
    url: "https://www.docker.com/wp-content/uploads/2022/03/Moby-logo.png",
    title: "Docker Engine",
    description: "Container runtime platform",
  },
  {
    url: "https://www.docker.com/wp-content/uploads/2022/03/vertical-logo-monochromatic.png",
    title: "Docker Desktop",
    description: "Development environment",
  },
  {
    url: "https://docs.docker.com/assets/images/engine.png",
    title: "Docker Compose",
    description: "Multi-container orchestration",
  },
  {
    url: "https://kubernetes.io/images/kubernetes-horizontal-color.png",
    title: "Kubernetes",
    description: "Container orchestration",
  },
  {
    url: "https://www.docker.com/wp-content/uploads/2023/08/logo-guide-logos-1.svg",
    title: "Docker Hub",
    description: "Container registry",
  },
  {
    url: "https://docs.docker.com/assets/images/docker-build-cloud.png",
    title: "Docker Build",
    description: "Build automation",
  },
]

export function ImageGrid() {
  return (
    <div className="max-w-7xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-foreground">Container Technologies</h2>
      <p className="text-center text-muted-foreground mb-12 text-lg">
        Powered by industry-leading containerization platforms
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {dockerImages.map((image, index) => (
          <Card
            key={index}
            className="group overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105 bg-card border-border"
          >
            <div className="aspect-video bg-secondary/50 flex items-center justify-center p-6 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <img
                src={image.url || "/placeholder.svg"}
                alt={image.title}
                className="max-w-full max-h-full object-contain relative z-10 transition-transform duration-300 group-hover:scale-110"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-foreground">{image.title}</h3>
              <p className="text-muted-foreground text-sm">{image.description}</p>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}
