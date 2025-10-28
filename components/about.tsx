export default function About() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-8 text-center">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">About Me</span>
          </h2>
          <div className="prose prose-invert prose-lg max-w-none">
            <p className="text-foreground/80 leading-relaxed text-lg">
              I'm a passionate full-stack developer specializing in{" "}
              <span className="px-2 py-1 bg-primary/20 text-primary rounded">.NET technologies</span>,{" "}
              <span className="px-2 py-1 bg-accent/20 text-accent rounded">cloud solutions</span>, and{" "}
              <span className="px-2 py-1 bg-chart-3/20 text-chart-3 rounded">modern web development</span>. With
              expertise in both backend and frontend technologies, I create scalable, efficient solutions that drive
              business success.
            </p>
            <p className="text-foreground/80 leading-relaxed text-lg mt-6">
              Currently pursuing a{" "}
              <span className="px-2 py-1 bg-chart-4/20 text-chart-4 rounded font-semibold">
                Master's in Data Analytics and AI
              </span>{" "}
              at the University of Tasmania, I'm expanding my expertise to include cutting-edge technologies in
              artificial intelligence and data science.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
