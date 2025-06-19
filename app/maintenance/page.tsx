import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Shield,
  Clock,
  Wrench,
  TrendingUp,
  CheckCircle,
  Phone,
  AlertTriangle,
  Calendar,
  Zap,
  Star,
  Award,
  ArrowRight,
} from "lucide-react"

export default function MaintenancePage() {
  const maintenanceServices = [
    {
      icon: <Calendar className="h-12 w-12" />,
      title: "Annual Contracts",
      description: "Comprehensive yearly programs with guaranteed response times",
      price: "From AED 2,500/year",
      features: ["24/7 Priority Support", "Preventive Maintenance", "Parts Included"],
      color: "bg-blue-50 border-blue-200",
      iconColor: "text-blue-600",
    },
    {
      icon: <AlertTriangle className="h-12 w-12" />,
      title: "Emergency Service",
      description: "Critical system failures resolved within 2 hours",
      price: "24/7 Available",
      features: ["2-Hour Response", "Mobile Units", "Emergency Stock"],
      color: "bg-red-50 border-red-200",
      iconColor: "text-red-600",
    },
    {
      icon: <Shield className="h-12 w-12" />,
      title: "Preventive Care",
      description: "Proactive maintenance to prevent costly breakdowns",
      price: "Custom Plans",
      features: ["Regular Inspections", "Performance Reports", "Compliance Checks"],
      color: "bg-green-50 border-green-200",
      iconColor: "text-green-600",
    },
  ]

  const stats = [
    { number: "500+", label: "Systems Maintained", icon: <Wrench className="h-6 w-6" /> },
    { number: "99.8%", label: "Uptime Achieved", icon: <TrendingUp className="h-6 w-6" /> },
    { number: "2hrs", label: "Average Response", icon: <Clock className="h-6 w-6" /> },
    { number: "18+", label: "Years Experience", icon: <Award className="h-6 w-6" /> },
  ]

  const benefits = [
    {
      title: "50% Longer Equipment Life",
      description: "Regular maintenance extends your system's lifespan significantly",
      icon: <TrendingUp className="h-8 w-8 text-green-600" />,
    },
    {
      title: "30% Energy Savings",
      description: "Optimized systems consume less power and reduce utility costs",
      icon: <Zap className="h-8 w-8 text-yellow-600" />,
    },
    {
      title: "Zero Unexpected Downtime",
      description: "Preventive care eliminates surprise system failures",
      icon: <Shield className="h-8 w-8 text-blue-600" />,
    },
  ]

  const testimonials = [
    {
      quote: "Euro Gulf Tech's maintenance program saved us AED 50,000 in potential repairs last year.",
      author: "Ahmed Al-Rashid",
      company: "Dubai Cold Storage",
      rating: 5,
    },
    {
      quote: "Their 2-hour emergency response saved our entire cold chain during a critical breakdown.",
      author: "Sarah Johnson",
      company: "Fresh Foods LLC",
      rating: 5,
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-yellow-600 text-white px-4 py-2 text-lg">
              <AlertTriangle className="mr-2 h-5 w-5" />
              24/7 Emergency Support Available
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Keep Your Systems
              <span className="text-yellow-400 block">Running Perfectly</span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Professional maintenance programs that prevent breakdowns, save money, and extend equipment life
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-yellow-600 hover:bg-yellow-700 text-white px-8 py-4 text-lg">
                <Phone className="mr-2 h-5 w-5" />
                Get Emergency Service
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 text-lg"
              >
                Schedule Maintenance
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="text-blue-600">{stat.icon}</div>
                </div>
                <div className="text-4xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Maintenance Solutions</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Choose the perfect maintenance plan for your business needs
            </p>
          </div>
          <div className="grid lg:grid-cols-3 gap-8">
            {maintenanceServices.map((service, index) => (
              <Card
                key={index}
                className={`${service.color} hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2`}
              >
                <CardContent className="p-8">
                  <div className={`${service.iconColor} mb-6`}>{service.icon}</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <div className="text-2xl font-bold text-blue-900 mb-6">{service.price}</div>
                  <div className="space-y-3 mb-8">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Button className="w-full bg-blue-900 hover:bg-blue-800 text-white">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Maintenance Matters</h2>
            <p className="text-xl text-gray-600">Real benefits that impact your bottom line</p>
          </div>
          <div className="grid lg:grid-cols-3 gap-12">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="mb-6">{benefit.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{benefit.title}</h3>
                <p className="text-gray-600 text-lg">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Client Success Stories</h2>
          </div>
          <div className="grid lg:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-white hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <blockquote className="text-lg text-gray-700 mb-6 italic">"{testimonial.quote}"</blockquote>
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.author}</div>
                    <div className="text-gray-600">{testimonial.company}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Protect Your Investment?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Don't wait for a breakdown. Start your maintenance program today and save thousands in repair costs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-yellow-600 hover:bg-yellow-700 text-white px-8 py-4">
              <Phone className="mr-2 h-5 w-5" />
              Call +971 52 6798630
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4"
            >
              Schedule Free Assessment
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
