export default function About() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-blue-400">
            About Me
          </h2>
          <div className="space-y-6">
            <p className="text-foreground/90 leading-relaxed text-base md:text-lg">
              I'm a passionate full-stack developer specializing in{" "}
              <span className="text-white font-semibold">.NET technologies</span>,{" "}
              <span className="text-white font-semibold">cloud solutions</span>, and{" "}
              <span className="text-white font-semibold">modern web development</span>. With
              expertise in both backend and frontend technologies, I create scalable, efficient solutions that drive
              business success.
            </p>
            <p className="text-foreground/90 leading-relaxed text-base md:text-lg">
              Currently pursuing a{" "}
              <span className="text-white font-semibold">
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
