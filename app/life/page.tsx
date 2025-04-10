import { LifeCard } from "@/components/blog-card"

export default function BlogPage() {
  // Empty posts array
  const posts: any[] = []

  return (
    <div className="space-y-8">
      <div className="terminal-window">
        <div className="terminal-header">
          <div className="terminal-button terminal-button-red"></div>
          <div className="terminal-button terminal-button-yellow"></div>
          <div className="terminal-button terminal-button-green"></div>
          <div className="terminal-title">life_posts.sh</div>
        </div>
        <div className="terminal-content">
          <p className="mb-4">
            <span className="text-primary">$</span> ls -la /life
          </p>
          {posts.length === 0 && (
            <p className="text-muted-foreground">No entries found. Check back later for updates.</p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {posts.map((post) => (
          <LifeCard key={post.id} {...post} />
        ))}
      </div>
    </div>
  )
}
