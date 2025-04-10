import { Github, Twitter, Linkedin, Mail } from "lucide-react"
import Link from "next/link"

export default function ContactPage() {
  return (
    <div className="space-y-8">
      <section>
        <h2 className="text-2xl font-bold mb-6">Contact</h2>
        <div className="terminal-window">
          <div className="terminal-header">
            <div className="terminal-button terminal-button-red"></div>
            <div className="terminal-button terminal-button-yellow"></div>
            <div className="terminal-button terminal-button-green"></div>
            <div className="terminal-title">network_connections.sh</div>
          </div>
          <div className="terminal-content">
            <p className="mb-4">
              <span className="text-primary">$</span> ifconfig
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div>
                  <p className="mb-1 text-primary">github0:</p>
                  <Link
                    href="https://github.com"
                    className="flex items-center gap-2 hover:text-primary transition-colors"
                    target="_blank"
                  >
                    <Github size={16} />
                    github.com/cyberdev
                  </Link>
                </div>
                <div>
                  <p className="mb-1 text-primary">twitter0:</p>
                  <Link
                    href="https://twitter.com"
                    className="flex items-center gap-2 hover:text-primary transition-colors"
                    target="_blank"
                  >
                    <Twitter size={16} />
                    twitter.com/cyberdev
                  </Link>
                </div>
              </div>
              <div className="space-y-4">
                <div>
                  <p className="mb-1 text-primary">linkedin0:</p>
                  <Link
                    href="https://linkedin.com"
                    className="flex items-center gap-2 hover:text-primary transition-colors"
                    target="_blank"
                  >
                    <Linkedin size={16} />
                    linkedin.com/in/cyberdev
                  </Link>
                </div>
                <div>
                  <p className="mb-1 text-primary">mail0:</p>
                  <Link
                    href="mailto:hello@example.com"
                    className="flex items-center gap-2 hover:text-primary transition-colors"
                  >
                    <Mail size={16} />
                    hello@example.com
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
