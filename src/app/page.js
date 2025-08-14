
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CalendarDays, Clock, ArrowRight, Heart, MessageCircle, Share2, Bookmark } from "lucide-react";

const blogPosts = [
  {
    id: 1,
    category: "Technology",
    title: "The Future of Web Development: AI-Powered Coding",
    description:
      "Exploring how artificial intelligence is revolutionizing the way we build web applications, from automated code generation to intelligent debugging tools.",
    date: "March 15, 2024",
    readTime: "8 min read",
    image: "/modern-web-dev-workspace.png",
    likes: 124,
    comments: 18,
    featured: true,
  },
  {
    id: 2,
    category: "Design",
    title: "Minimalist Design: Less is More in 2024",
    description:
      "How to create stunning user interfaces using minimalist principles that prioritize clarity, functionality, and user experience above all else.",
    date: "March 12, 2024",
    readTime: "6 min read",
    image: "/minimalist-workspace.png",
    likes: 89,
    comments: 12,
  },
  {
    id: 3,
    category: "Programming",
    title: "Clean Code Principles Every Developer Should Know",
    description:
      "Essential practices for writing maintainable, readable code that scales. Learn the fundamental principles that separate good code from great code.",
    date: "March 10, 2024",
    readTime: "10 min read",
    image: "/clean-code-setup.png",
    likes: 156,
    comments: 24,
  },
  {
    id: 4,
    category: "Tutorial",
    title: "Building Responsive Layouts with Modern CSS",
    description:
      "Master the art of responsive design using CSS Grid, Flexbox, and container queries. Create layouts that work beautifully on any device.",
    date: "March 8, 2024",
    readTime: "12 min read",
    image: "/placeholder-ufwic.png",
    likes: 203,
    comments: 31,
  },
  {
    id: 5,
    category: "Technology",
    title: "AI Integration in Modern Web Applications",
    description:
      "Discover practical ways to integrate AI features into your web applications, from chatbots to recommendation systems and beyond.",
    date: "March 5, 2024",
    readTime: "7 min read",
    image: "/ai-technology-interface.png",
    likes: 178,
    comments: 22,
  },
  {
    id: 6,
    category: "Career",
    title: "Developer Growth: From Junior to Senior",
    description:
      "A comprehensive roadmap for advancing your development career, including technical skills, soft skills, and leadership development.",
    date: "March 3, 2024",
    readTime: "9 min read",
    image: "/developer-learning-growth.png",
    likes: 267,
    comments: 45,
  },
];

const categoryColors = {
  Technology:
    "bg-emerald-50 text-emerald-700 border-emerald-200 dark:bg-emerald-950 dark:text-emerald-300 dark:border-emerald-800",
  Design:
    "bg-violet-50 text-violet-700 border-violet-200 dark:bg-violet-950 dark:text-violet-300 dark:border-violet-800",
  Programming:
    "bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-950 dark:text-blue-300 dark:border-blue-800",
  Tutorial:
    "bg-amber-50 text-amber-700 border-amber-200 dark:bg-amber-950 dark:text-amber-300 dark:border-amber-800",
  Career:
    "bg-rose-50 text-rose-700 border-rose-200 dark:bg-rose-950 dark:text-rose-300 dark:border-rose-800",
};

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950">
      {/* Header */}
      <header className="border-b border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-slate-900/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-lg">B</span>
              </div>
              <h1 className="text-3xl font-bold text-slate-900 dark:text-slate-100">BlogCards</h1>
            </div>
            <nav className="hidden md:flex items-center space-x-6">
              <Button variant="ghost" size="sm" className="text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100">All Posts</Button>
              <Button variant="ghost" size="sm" className="text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100">Categories</Button>
              <Button size="sm" className="bg-emerald-600 hover:bg-emerald-700 text-white shadow-lg">Subscribe</Button>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="py-24 px-4 bg-gradient-to-br from-slate-50 via-white to-emerald-50 dark:from-slate-950 dark:via-slate-900 dark:to-emerald-950">
        <div className="container mx-auto text-center">
          <h2 className="text-6xl md:text-7xl font-bold text-slate-900 dark:text-slate-100 mb-8 leading-tight">
            Discover Amazing
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-emerald-500 block">Stories</span>
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Explore insights, tutorials, and stories from industry experts about technology, design, and development
          </p>
        </div>
      </section>

      {/* Blog Cards */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Card
                key={post.id}
                className={`group hover:shadow-2xl hover:shadow-slate-200/50 dark:hover:shadow-slate-800/50 hover:-translate-y-3 transition-all duration-500 border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 overflow-hidden ${post.featured ? "ring-2 ring-emerald-500/20 shadow-lg" : ""}`}
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {post.featured && (
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-emerald-600 text-white font-semibold shadow-lg">Featured</Badge>
                    </div>
                  )}

                  <div className="absolute top-4 right-4">
                    <Badge variant="outline" className={`${categoryColors[post.category]} backdrop-blur-sm font-medium shadow-sm`}>
                      {post.category}
                    </Badge>
                  </div>

                  <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex space-x-2">
                      <Button size="sm" variant="secondary" className="h-9 w-9 p-0 backdrop-blur-sm bg-white/90 hover:bg-white shadow-lg">
                        <Heart className="h-4 w-4 text-slate-700" />
                      </Button>
                      <Button size="sm" variant="secondary" className="h-9 w-9 p-0 backdrop-blur-sm bg-white/90 hover:bg-white shadow-lg">
                        <Bookmark className="h-4 w-4 text-slate-700" />
                      </Button>
                      <Button size="sm" variant="secondary" className="h-9 w-9 p-0 backdrop-blur-sm bg-white/90 hover:bg-white shadow-lg">
                        <Share2 className="h-4 w-4 text-slate-700" />
                      </Button>
                    </div>
                  </div>
                </div>

                <CardHeader className="pb-4 space-y-4">
                  <div className="flex items-center justify-between text-sm text-slate-500 dark:text-slate-400">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-1">
                        <CalendarDays className="h-4 w-4" />
                        <span>{post.date}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="h-4 w-4" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                  </div>

                  <CardTitle className="text-xl font-bold text-slate-900 dark:text-slate-100 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors duration-300 leading-tight line-clamp-2">
                    {post.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="pt-0 space-y-6">
                  <CardDescription className="text-slate-600 dark:text-slate-400 leading-relaxed line-clamp-3 text-base">
                    {post.description}
                  </CardDescription>
                  <div className="flex items-center justify-between pt-4 border-t border-slate-200 dark:border-slate-800">
                    <div className="flex items-center space-x-6 text-sm text-slate-500 dark:text-slate-400">
                      <div className="flex items-center space-x-2">
                        <Heart className="h-4 w-4" />
                        <span className="font-medium">{post.likes}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <MessageCircle className="h-4 w-4" />
                        <span className="font-medium">{post.comments}</span>
                      </div>
                    </div>
                    <Button variant="ghost" size="sm" className="text-emerald-600 hover:text-emerald-700 hover:bg-emerald-50 dark:text-emerald-400 dark:hover:text-emerald-300 dark:hover:bg-emerald-950 group/btn font-medium">
                      Read More
                      <ArrowRight className="h-4 w-4 ml-2 group-hover/btn:translate-x-1 transition-transform duration-200" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 dark:bg-slate-950 text-slate-100 py-20 px-4 mt-24">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-lg">B</span>
                </div>
                <h3 className="text-3xl font-bold">BlogCards</h3>
              </div>
              <p className="text-slate-400 mb-8 leading-relaxed max-w-md text-lg">
                Discover amazing stories, insights, and tutorials from industry experts. Join our community of passionate developers and designers.
              </p>
              <Button className="bg-emerald-600 hover:bg-emerald-700 text-white shadow-lg">Subscribe to Newsletter</Button>
            </div>
            <div>
              <h4 className="font-semibold mb-6 text-xl text-slate-200">Categories</h4>
              <ul className="space-y-4 text-slate-400">
                <li><a href="#" className="hover:text-emerald-400 transition-colors text-lg">Technology</a></li>
                <li><a href="#" className="hover:text-emerald-400 transition-colors text-lg">Design</a></li>
                <li><a href="#" className="hover:text-emerald-400 transition-colors text-lg">Programming</a></li>
                <li><a href="#" className="hover:text-emerald-400 transition-colors text-lg">Tutorials</a></li>
                <li><a href="#" className="hover:text-emerald-400 transition-colors text-lg">Career</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-6 text-xl text-slate-200">Connect</h4>
              <ul className="space-y-4 text-slate-400">
                <li><a href="#" className="hover:text-emerald-400 transition-colors text-lg">Twitter</a></li>
                <li><a href="#" className="hover:text-emerald-400 transition-colors text-lg">LinkedIn</a></li>
                <li><a href="#" className="hover:text-emerald-400 transition-colors text-lg">GitHub</a></li>
                <li><a href="#" className="hover:text-emerald-400 transition-colors text-lg">Upwork</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 mt-16 pt-8 text-center text-slate-500">
            <p className="text-lg">&copy; 2024 BlogCards. Crafted with ❤️ for developers and designers.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
