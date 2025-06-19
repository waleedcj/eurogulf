import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Snowflake,
  Wind,
  Thermometer,
  Shield,
  Phone,
  Star,
  Users,
  Calendar,
  Award,
  CheckCircle,
  Clock,
  TrendingUp,
  Building2,
  Factory,
  Utensils,
  Warehouse,
} from "lucide-react"
import { WhatsAppIcon } from "./images/Icons"
import Image from "next/image"

export default function HomePage() {
  const services = [
    {
      icon: <Snowflake className="h-12 w-12" />,
      title: "Refrigeration Systems",
      description: "Civil Defense Approved (CDA) refrigeration solutions with 99.9% uptime guarantee.",
      features: ["CDA Certified", "Energy Efficient", "24/7 Monitoring"],
      link: "/services#refrigeration",
    },
    {
      icon: <Thermometer className="h-12 w-12" />,
      title: "Cold Storage Installation",
      description: "Complete turnkey cold storage solutions from -40°C to +15°C temperature range.",
      features: ["Custom Design", "Quick Installation", "Full Warranty"],
      link: "/services#cold-room",
    },
    {
      icon: <Wind className="h-12 w-12" />,
      title: "Kitchen Hood Systems",
      description: "Advanced commercial kitchen ventilation meeting international safety standards.",
      features: ["Fire Safety", "Noise Control", "Easy Maintenance"],
      link: "/services#kitchen-hood",
    },
  ]

  const stats = [
    { number: "18+", label: "Years Experience", icon: <Calendar className="h-6 w-6" /> },
    { number: "500+", label: "Projects Completed", icon: <Building2 className="h-6 w-6" /> },
    { number: "24/7", label: "Emergency Support", icon: <Clock className="h-6 w-6" /> },
    { number: "100%", label: "CDA Approved", icon: <Shield className="h-6 w-6" /> },
  ]

  const industries = [
    { icon: <Factory className="h-8 w-8" />, title: "Industrial", desc: "Manufacturing & Processing" },
    { icon: <Utensils className="h-8 w-8" />, title: "Hospitality", desc: "Hotels & Restaurants" },
    { icon: <Warehouse className="h-8 w-8" />, title: "Logistics", desc: "Cold Storage & Distribution" },
    { icon: <Building2 className="h-8 w-8" />, title: "Commercial", desc: "Offices & Retail" },
  ]

  const brands = [

    {
      name: "Bintouq",
      image: "https://cdn.jsdelivr.net/gh/waleedcj/eurogulfassets/bintouq.webp"
    },
    {
      name: "Foodstuff",
      image: "https://cdn.jsdelivr.net/gh/waleedcj/eurogulfassets/foodstuff.webp"
    },
    {
      name: "Glorex",
      image: "https://cdn.jsdelivr.net/gh/waleedcj/eurogulfassets/glorex.webp"
    },
    {
      name: "Master Baker",
      image: "https://cdn.jsdelivr.net/gh/waleedcj/eurogulfassets/masterBakernew.webp"
    },
    {
      name: "NAFFCO",
      image: "https://cdn.jsdelivr.net/gh/waleedcj/eurogulfassets/naffconew.webp"
    },
    {
      name: "TechnoPro Middle East", 
      image: "https://cdn.jsdelivr.net/gh/waleedcj/eurogulfassets/technopro.webp"
    },
    {
      name: "All Fresh Co",
      image: "https://cdn.jsdelivr.net/gh/waleedcj/eurogulfassets/allfreshco.webp"
    },
    {
      name: "Barakat",
      image: "https://cdn.jsdelivr.net/gh/waleedcj/eurogulfassets/barakat.webp"
    },
    {
      name: "OMIS",
      image: "https://cdn.jsdelivr.net/gh/waleedcj/eurogulfassets/omis.webp"
    },
    {
      name: "TSSC",
      image: "https://cdn.jsdelivr.net/gh/waleedcj/eurogulfassets/tssc.webp"
    },
    {
      name: "Vivel",
      image: "https://cdn.jsdelivr.net/gh/waleedcj/eurogulfassets/vivel.webp"
    }
  ];

  const differentiators = [
    {
      icon: <Award className="h-8 w-8" />,
      title: "Civil Defense Approved",
      description: "All systems certified and compliant with UAE safety regulations",
      benefit: "Zero compliance issues",
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Expert Engineering Team",
      description: "Certified engineers with 10+ years specialized HVAC experience",
      benefit: "Superior technical solutions",
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: "24/7 Emergency Response",
      description: "Rapid response team available round-the-clock for critical failures",
      benefit: "Minimize downtime costs",
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: "Energy Efficiency Guarantee",
      description: "Advanced systems designed to reduce energy consumption by up to 30%",
      benefit: "Lower operational costs",
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Enhanced Hero Section with Video Background */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-black/50"></div>
        {/* Video background placeholder - replace with actual video */}
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=1080&width=1920')] bg-cover bg-center opacity-20"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto text-center">
            <Badge className="mb-8 bg-yellow-600/20 border-2 border-yellow-400 rounded-xl text-yellow-300 hover:bg-yellow-600/30 text-md px-6 py-3 font-semibold">
              🏆 UAE&apos;s #1 HVAC Solutions Provider • 18+ Years of Excellence
            </Badge>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
              Developing Safety in the{" "}
              <span className="text-yellow-400 relative inline-block">
                Real World
                <div className="absolute -bottom-3 left-0 w-full h-2 bg-yellow-400 rounded-full"></div>
              </span>
            </h1>

            <p className="text-1xl md:text-2xl mb-12 text-blue-100 leading-relaxed max-w-5xl mx-auto font-light">
              Professional HVAC solutions trusted by <span className="font-bold text-yellow-400">500+ companies</span>{" "}
              across the UAE. From design to maintenance, we deliver excellence that keeps your business running.
            </p>

            {/* Key Value Propositions */}
            <div className="grid md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <div className="text-3xl font-bold text-yellow-400 mb-2">24/7</div>
                <div className="text-lg font-semibold">Emergency Response</div>
                <div className="text-blue-200 text-sm">Rapid support when you need it most</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <div className="text-3xl font-bold text-yellow-400 mb-2">100%</div>
                <div className="text-lg font-semibold">CDA Approved</div>
                <div className="text-blue-200 text-sm">Fully compliant with UAE standards</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <div className="text-3xl font-bold text-yellow-400 mb-2">30%</div>
                <div className="text-lg font-semibold">Energy Savings</div>
                <div className="text-blue-200 text-sm">Guaranteed efficiency improvements</div>
              </div>
            </div>

            {/* Primary CTAs */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
              <Button
                size="lg"
                className="bg-yellow-600 hover:bg-yellow-700 text-white px-12 py-6 text-xl font-bold shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105 hover:cursor-pointer"
              >
                <Phone className="mr-2 h-6 w-6" />
                Get Free Assessment
              </Button>
              <Button
                size="lg"
                variant="outline"
                className=" border-white text-white hover:bg-white hover:text-blue-900 px-12 py-6 text-xl font-bold transition-all duration-300 hover:scale-105 hover:cursor-pointer"
              >
                <WhatsAppIcon className="h-15 w-15 mr-2" />
                WhatsApp Consultation
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center items-center gap-8 text-blue-200">
              <div className="flex items-center gap-3">
                <CheckCircle className="h-6 w-6 text-green-400" />
                <span className="text-lg font-medium">Free Site Assessment</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="h-6 w-6 text-green-400" />
                <span className="text-lg font-medium">24-Hour Quote Delivery</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="h-6 w-6 text-green-400" />
                <span className="text-lg font-medium">No Hidden Costs</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="h-6 w-6 text-green-400" />
                <span className="text-lg font-medium">Lifetime Support</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted Brands Carousel */}
      <section className="py-16 bg-white border-b">
  <div className="container mx-auto px-4">
    <div className="text-center mb-12">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Trusted by Industry Leaders</h2>
      <p className="text-lg text-gray-600 max-w-2xl mx-auto">
        Over 500+ companies across the UAE trust Euro Gulf Tech for their critical HVAC infrastructure
      </p>
    </div>
    <div className="relative overflow-hidden">
      <div className="flex animate-scroll">
        {[...brands, ...brands].map((brand, index) => (
          <div
            key={index}
            className="flex-shrink-0 mx-8 px-8 py-6 bg-white rounded-xl border hover:shadow-md transition-shadow"
          >
            <div className="relative w-32 h-16">
              <Image
                src={brand.image}
                alt={brand.name}
                // width={200}
                // height={200}
                // fill
                fill
                className="object-contain"
                // sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
</section>

      {/* Enhanced Stats Section */}
      <section className="py-20 bg-gradient-to-r from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                  <div className="text-blue-900 mb-3 flex justify-center">{stat.icon}</div>
                  <div className="text-4xl md:text-5xl font-bold text-blue-900 mb-2">{stat.number}</div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Industries We Serve</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Specialized HVAC solutions tailored for diverse industry requirements
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {industries.map((industry, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
                <CardContent className="p-8 text-center">
                  <div className="text-blue-900 mb-4 group-hover:text-yellow-600 transition-colors flex justify-center">
                    {industry.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{industry.title}</h3>
                  <p className="text-gray-600">{industry.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-blue-100 text-blue-800 px-4 py-2">Our Core Services</Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Professional HVAC Solutions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive services designed to meet the highest standards of safety, efficiency, and reliability
            </p>
          </div>
          <div className="grid lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="group hover:shadow-2xl transition-all duration-500 border-0 shadow-lg overflow-hidden"
              >
                <CardContent className="p-0">
                  <div className="bg-gradient-to-br from-blue-900 to-blue-800 p-8 text-white">
                    <div className="text-yellow-400 mb-4 group-hover:scale-110 transition-transform duration-300">
                      {service.icon}
                    </div>
                    <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                  </div>
                  <div className="p-8">
                    <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                    <div className="space-y-3 mb-6">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-3">
                          <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                    <Link href={service.link}>
                      <Button className="w-full bg-blue-900 hover:bg-yellow-600 transition-colors">
                        Learn More & Get Quote
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us - Enhanced */}
      <section className="py-20 bg-blue-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=600&width=1200')] bg-cover bg-center opacity-5"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-yellow-600/20 border border-yellow-400 text-yellow-300 px-4 py-2">
              Why Choose Euro Gulf Tech?
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">The Smart Choice for HVAC Excellence</h2>
            <p className="text-xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
              We don&apos;t just install systems – we deliver comprehensive solutions that drive your business forward
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {differentiators.map((item, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300"
              >
                <div className="flex items-start gap-6">
                  <div className="bg-yellow-600 p-4 rounded-2xl flex-shrink-0">{item.icon}</div>
                  <div>
                    <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                    <p className="text-blue-100 mb-4 leading-relaxed">{item.description}</p>
                    <div className="bg-green-500/20 text-green-300 px-4 py-2 rounded-full text-sm font-semibold inline-block">
                      ✓ {item.benefit}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Testimonials */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-green-100 text-green-800 px-4 py-2">Client Success Stories</Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
            <p className="text-xl text-gray-600">Real results from real businesses across the UAE</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                company: "NAFCO",
                type: "Industrial Manufacturing",
                quote:
                  "Euro Gulf Tech transformed our facility with a state-of-the-art cold storage system. The installation was flawless, and their ongoing maintenance has kept us running at 100% efficiency for over 3 years.",
                result: "Zero downtime in 3 years",
                person: "Ahmed Al-Rashid",
                position: "Operations Manager",
              },
              {
                company: "TechnoPro Middle East",
                type: "Commercial Office Complex",
                quote:
                  "Their HVAC expertise is unmatched. They designed a custom solution that reduced our energy costs by 35% while improving air quality throughout our 50,000 sq ft facility.",
                result: "35% energy cost reduction",
                person: "Sarah Johnson",
                position: "Facilities Director",
              },
              {
                company: "Dubai City Builders",
                type: "Construction & Development",
                quote:
                  "We&apos;ve partnered with Euro Gulf Tech on 15+ projects. Their kitchen hood installations are always on time, on budget, and exceed safety standards. True professionals.",
                result: "15+ successful projects",
                person: "Mohammad Hassan",
                position: "Project Manager",
              },
            ].map((testimonial, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <blockquote className="text-gray-700 mb-6 leading-relaxed italic">&apos;{testimonial.quote}&apos;</blockquote>
                  <div className="bg-green-50 text-green-800 px-4 py-2 rounded-lg text-sm font-semibold mb-4 inline-block">
                    📈 {testimonial.result}
                  </div>
                  <div className="border-t pt-4">
                    <div className="font-bold text-gray-900 text-lg">{testimonial.company}</div>
                    <div className="text-blue-600 font-medium mb-2">{testimonial.type}</div>
                    <div className="text-gray-600 text-sm">
                      {testimonial.person}, {testimonial.position}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="py-20 bg-gradient-to-r from-yellow-600 via-yellow-500 to-yellow-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <Badge className="mb-6 bg-white/20 text-white border-white/30 px-4 py-2 text-lg">
              Ready to Transform Your Business?
            </Badge>
            <h2 className="text-4xl md:text-6xl font-bold mb-6">Get Your Free HVAC Assessment</h2>
            <p className="text-xl md:text-2xl mb-8 leading-relaxed opacity-90">
              Join 500+ satisfied clients who trust Euro Gulf Tech for their HVAC needs. Get a comprehensive assessment
              and custom quote within 24 hours.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-8">
              <Button
                size="lg"
                className="bg-white text-yellow-700 hover:bg-gray-100 px-10 py-4 text-xl font-bold shadow-xl hover:shadow-2xl transition-all"
              >
                <Phone className="mr-3 h-6 w-6" />
                Call +971 (06) 5311304
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-yellow-700 px-10 py-4 text-xl font-bold transition-all"
              >
                <WhatsAppIcon className="mr-3 h-6 w-6" />
                WhatsApp Consultation
              </Button>
            </div>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                <div className="text-2xl font-bold">Free</div>
                <div className="text-sm opacity-90">Site Assessment</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                <div className="text-2xl font-bold">24hrs</div>
                <div className="text-sm opacity-90">Quote Delivery</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                <div className="text-2xl font-bold">24/7</div>
                <div className="text-sm opacity-90">Emergency Support</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
