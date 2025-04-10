export { generateStaticParams } from "./ClientBlogPostPage"

export default async function Page() {
  const ClientBlogPostPage = (await import("./ClientBlogPostPage")).default
  return <ClientBlogPostPage />
}

export async function generateStaticParams() {
  // Return an array of objects with the id parameter
  return [{ id: "future-of-ai" }, { id: "web3-revolution" }, { id: "cybersecurity-tips" }, { id: "react-performance" }]
}
