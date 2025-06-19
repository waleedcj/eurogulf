import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Building, Factory, ChefHat, Warehouse, Star, Calendar, MapPin, Phone } from "lucide-react"
import Image from "next/image"

export default function ProjectsPage() {
  const featuredProjects = [
    {
      client: "NAFCO",
      project: "Industrial Soaker Panels & Exhaust Fans",
      category: "Industrial",
      location: "Sharjah, UAE",
      year: "2023",
      description:
        "Complete installation of industrial-grade soaker panels and high-capacity exhaust fan systems for manufacturing facility.",
      services: ["Exhaust Fan Installation", "Soaker Panel Systems", "Ventilation Design"],
      image: "/placeholder.svg?height=300&width=400",
      icon: <Factory className="h-6 w-6" />,
    },
    {
      client: "TechnoPro Middle East FZCO",
      project: "Commercial HVAC System",
      category: "Commercial",
      location: "Dubai, UAE",
      year: "2023",
      description:
        "Comprehensive HVAC solution for commercial facility including chiller installation and ductwork systems.",
      services: ["Chiller Installation", "Ductwork Systems", "Temperature Control"],
      image: "/placeholder.svg?height=300&width=400",
      icon: <Building className="h-6 w-6" />,
    },
    {
      client: "Alpha Impex Electromechanical",
      project: "Cold Room & Refrigeration",
      category: "Industrial",
      location: "Abu Dhabi, UAE",
      year: "2022",
      description: "Design and installation of large-scale cold room facility with advanced refrigeration systems.",
      services: ["Cold Room Design", "Refrigeration Systems", "Temperature Monitoring"],
      image: "/placeholder.svg?height=300&width=400",
      icon: <Warehouse className="h-6 w-6" />,
    },
    {
      client: "Dubai City Builders",
      project: "Kitchen Hood Systems",
      category: "Commercial",
      location: "Dubai, UAE",
      year: "2022",
      description: "Professional kitchen ventilation and hood systems for multiple restaurant locations.",
      services: ["Kitchen Hood Installation", "Grease Extraction", "Fire Safety Systems"],
      image: "/placeholder.svg?height=300&width=400",
      icon: <ChefHat className="h-6 w-6" />,
    },
    {
      client: "RAK Precast",
      project: "Industrial Ventilation",
      category: "Industrial",
      location: "Ras Al Khaimah, UAE",
      year: "2021",
      description: "Large-scale industrial ventilation system for precast concrete manufacturing facility.",
      services: ["Industrial Ventilation", "Air Quality Control", "Dust Extraction"],
      image: "/placeholder.svg?height=300&width=400",
      icon: <Factory className="h-6 w-6" />,
    },
    {
      client: "DGR Warehouse, JAFZA South",
      project: "Warehouse Climate Control",
      category: "Warehouse",
      location: "Dubai, UAE",
      year: "2021",
      description: "Complete climate control solution for large warehouse facility in JAFZA South.",
      services: ["Climate Control", "Humidity Management", "Energy Optimization"],
      image: "/placeholder.svg?height=300&width=400",
      icon: <Warehouse className="h-6 w-6" />,
    },
  ]

  const categories = [
    {
      name: "Industrial Installations",
      count: 150,
      description: "Large-scale industrial HVAC and refrigeration systems",
      icon: <Factory className="h-8 w-8" />,
    },
    {
      name: "Commercial Refrigeration",
      count: 200,
      description: "Commercial cold rooms and refrigeration solutions",
      icon: <Building className="h-8 w-8" />,
    },
    {
      name: "Restaurant & Kitchen Systems",
      count: 100,
      description: "Kitchen hoods and commercial ventilation",
      icon: <ChefHat className="h-8 w-8" />,
    },
    {
      name: "Warehouse Solutions",
      count: 50,
      description: "Climate control for storage and logistics facilities",
      icon: <Warehouse className="h-8 w-8" />,
    },
  ]

  const testimonials = [
    {
      client: "NAFCO",
      text: "Euro Gulf Tech delivered exceptional service with their soaker panel installation. Professional team and excellent ongoing support.",
      rating: 5,
      project: "Industrial Ventilation",
    },
    {
      client: "TechnoPro Middle East",
      text: "Reliable HVAC solutions with excellent technical expertise. Their team understands commercial requirements perfectly.",
      rating: 5,
      project: "Commercial HVAC",
    },
    {
      client: "Dubai City Builders",
      text: "Outstanding kitchen hood installation and maintenance services. Always responsive and professional in their approach.",
      rating: 5,
      project: "Kitchen Systems",
    },
  ]

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-blue-900 text-white">500+ Completed Projects</Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Our Projects</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Showcasing our expertise through successful HVAC and refrigeration installations across the UAE
          </p>
        </div>

        {/* Project Categories */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Project Categories</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="text-blue-900 mb-4 flex justify-center">{category.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{category.name}</h3>
                  <div className="text-2xl font-bold text-yellow-600 mb-2">{category.count}+</div>
                  <p className="text-gray-600 text-sm">{category.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Featured Projects */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Featured Projects</h2>
          <div className="grid lg:grid-cols-2 gap-8">
            {featuredProjects.map((project, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-video bg-gray-200 relative">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.project}
                    width={400}
                    height={400}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-blue-900 text-white">{project.category}</Badge>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center mb-3">
                    <div className="text-blue-900 mr-3">{project.icon}</div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">{project.client}</h3>
                      <p className="text-gray-600">{project.project}</p>
                    </div>
                  </div>

                  <p className="text-gray-600 mb-4">{project.description}</p>

                  <div className="flex items-center text-sm text-gray-500 mb-4">
                    <MapPin className="h-4 w-4 mr-1" />
                    <span className="mr-4">{project.location}</span>
                    <Calendar className="h-4 w-4 mr-1" />
                    <span>{project.year}</span>
                  </div>

                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                      {project.services.map((service, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">
                          {service}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <Button variant="outline" className="w-full">
                    View Project Details
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Client Testimonials */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">What Our Clients Say</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4">&apos;{testimonial.text}&apos;</p>
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.client}</div>
                    <div className="text-sm text-gray-500">{testimonial.project}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <Card className="bg-gradient-to-r from-blue-900 to-blue-800 text-white">
          <CardContent className="p-8 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Start Your Project?</h2>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Join our satisfied clients and experience the Euro Gulf Tech difference. Contact us today for a free
              consultation and project quote.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-yellow-600 hover:bg-yellow-700 text-white">
                <Phone className="mr-2 h-5 w-5" />
                Get Project Quote
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-900"
              >
                View All Projects
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
