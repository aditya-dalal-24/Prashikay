import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Users, Building2, Brain, Target, BookOpen, Briefcase } from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center animate-pulse">
                <Brain className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold text-foreground">PRASHIKAY</span>
            </div>
            <div className="flex items-center space-x-4">
              <Link href="/login">
                <Button variant="ghost" className="hover:scale-105 transition-transform">
                  Login
                </Button>
              </Link>
              <Link href="/signup">
                <Button className="hover:scale-105 transition-transform">Get Started</Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 polygonal-bg geometric-pattern">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto polygonal-accent">
            <Badge className="mb-6 bg-secondary text-secondary-foreground">Government of India Initiative</Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance animate-fade-in">
              AI-Powered Smart Allocation for <span className="text-primary animate-pulse">PM Internship Scheme</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 text-pretty max-w-3xl mx-auto animate-fade-in-up">
              Revolutionizing internship matching through advanced AI algorithms. Connecting talented students with the
              right opportunities while ensuring equitable access across all regions and communities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up">
              <Link href="/signup">
                <Button
                  size="lg"
                  className="text-lg px-8 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Apply for Internship
                  <ArrowRight className="ml-2 w-5 h-5 animate-pulse" />
                </Button>
              </Link>
              <Link href="/ai-matching">
                <Button
                  size="lg"
                  variant="outline"
                  className="text-lg px-8 bg-transparent hover:scale-105 transition-all duration-300"
                >
                  See AI Demo
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/50 polygonal-bg">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4 animate-fade-in">Smart Matching Technology</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-in-up">
              Our AI engine considers skills, preferences, location, and affirmative action policies to ensure optimal
              student-industry matches.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center hover:scale-105 transition-all duration-300 hover:shadow-lg">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4 hover:bg-primary/20 transition-colors">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>Student Matching</CardTitle>
                <CardDescription>
                  Advanced algorithms match students based on skills, interests, and career goals
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center hover:scale-105 transition-all duration-300 hover:shadow-lg">
              <CardHeader>
                <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mx-auto mb-4 hover:bg-secondary/20 transition-colors">
                  <Building2 className="w-6 h-6 text-secondary" />
                </div>
                <CardTitle>Industry Partners</CardTitle>
                <CardDescription>
                  Connect with leading companies and organizations across various sectors
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center hover:scale-105 transition-all duration-300 hover:shadow-lg">
              <CardHeader>
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4 hover:bg-accent/20 transition-colors">
                  <Target className="w-6 h-6 text-accent" />
                </div>
                <CardTitle>Equitable Access</CardTitle>
                <CardDescription>
                  Ensuring fair opportunities for students from rural and aspirational districts
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 geometric-pattern">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="hover:scale-110 transition-transform duration-300">
              <div className="text-3xl font-bold text-primary mb-2 animate-pulse">10,000+</div>
              <div className="text-muted-foreground">Students Registered</div>
            </div>
            <div className="hover:scale-110 transition-transform duration-300">
              <div className="text-3xl font-bold text-secondary mb-2 animate-pulse">500+</div>
              <div className="text-muted-foreground">Industry Partners</div>
            </div>
            <div className="hover:scale-110 transition-transform duration-300">
              <div className="text-3xl font-bold text-accent mb-2 animate-pulse">95%</div>
              <div className="text-muted-foreground">Match Success Rate</div>
            </div>
            <div className="hover:scale-110 transition-transform duration-300">
              <div className="text-3xl font-bold text-primary mb-2 animate-pulse">28</div>
              <div className="text-muted-foreground">States Covered</div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/50 polygonal-bg">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4 animate-fade-in">How It Works</h2>
            <p className="text-lg text-muted-foreground animate-fade-in-up">
              Simple steps to get matched with your ideal internship
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center hover:scale-105 transition-all duration-300">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 hover:bg-primary/90 transition-colors animate-bounce">
                <BookOpen className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-2">1. Create Profile</h3>
              <p className="text-muted-foreground">
                Complete your profile with skills, qualifications, and preferences
              </p>
            </div>

            <div className="text-center hover:scale-105 transition-all duration-300">
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4 hover:bg-secondary/90 transition-colors animate-bounce">
                <Brain className="w-8 h-8 text-secondary-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-2">2. AI Matching</h3>
              <p className="text-muted-foreground">
                Our AI analyzes your profile and finds the best internship matches
              </p>
            </div>

            <div className="text-center hover:scale-105 transition-all duration-300">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4 hover:bg-accent/90 transition-colors animate-bounce">
                <Briefcase className="w-8 h-8 text-accent-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-2">3. Start Internship</h3>
              <p className="text-muted-foreground">Get connected with your matched company and begin your journey</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 polygonal-accent">
        <div className="container mx-auto text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-4 animate-fade-in">
              Ready to Find Your Perfect Internship?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 animate-fade-in-up">
              Join thousands of students who have already found their ideal internship opportunities through our
              AI-powered platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up">
              <Link href="/signup">
                <Button
                  size="lg"
                  className="text-lg px-8 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Get Started Today
                  <ArrowRight className="ml-2 w-5 h-5 animate-pulse" />
                </Button>
              </Link>
              <Link href="/login">
                <Button
                  size="lg"
                  variant="outline"
                  className="text-lg px-8 bg-transparent hover:scale-105 transition-all duration-300"
                >
                  Already have an account?
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-muted/30 py-12 px-4 sm:px-6 lg:px-8 geometric-pattern">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center animate-pulse">
                  <Brain className="w-5 h-5 text-primary-foreground" />
                </div>
                <span className="text-lg font-bold">PRASHIKAY</span>
              </div>
              <p className="text-muted-foreground">Empowering India's youth through AI-driven internship matching.</p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">For Students</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <Link href="/signup" className="hover:text-foreground transition-colors">
                    Apply Now
                  </Link>
                </li>
                <li>
                  <Link href="/how-it-works" className="hover:text-foreground transition-colors">
                    How It Works
                  </Link>
                </li>
                <li>
                  <Link href="/success-stories" className="hover:text-foreground transition-colors">
                    Success Stories
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">For Industries</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <Link href="/industry-signup" className="hover:text-foreground transition-colors">
                    Partner With Us
                  </Link>
                </li>
                <li>
                  <Link href="/post-internship" className="hover:text-foreground transition-colors">
                    Post Internships
                  </Link>
                </li>
                <li>
                  <Link href="/industry-benefits" className="hover:text-foreground transition-colors">
                    Benefits
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <Link href="/help" className="hover:text-foreground transition-colors">
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-foreground transition-colors">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link href="/privacy" className="hover:text-foreground transition-colors">
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
            <p>&copy; 2025 PRASHIKAY. A Government of India Initiative. All rights reserved.</p>
            <p className="text-sm mt-1">Prototype made for Smart India Hackathon</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
