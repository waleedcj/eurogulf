import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Target, Eye, Shield, Award, Users, CheckCircle, Star } from "lucide-react"

export default function AboutPage() {
  const values = [
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Safety First",
      description:
        "Every project prioritizes safety with Civil Defense approved systems and compliance with UAE standards.",
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: "Quality Focus",
      description: "Premium materials, expert workmanship, and rigorous quality control ensure lasting performance.",
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Professional Service",
      description: "Dedicated team of certified technicians providing exceptional customer service and support.",
    },
    {
      icon: <Star className="h-8 w-8" />,
      title: "Customer Satisfaction",
      description: "Building long-term relationships through reliable service and exceeding client expectations.",
    },
  ]

  const certifications = [
    "Civil Defense Approved Systems",
    "UAE Trade License Certified",
    "ISO Quality Management",
    "HVAC Professional Certification",
    "Refrigeration Specialist License",
    "Safety Compliance Certified",
  ]

  const timeline = [
    {
      year: "2006",
      title: "Company Founded",
      description: "Euro Gulf Tech Contracting LLC established in Sharjah, UAE",
    },
    {
      year: "2010",
      title: "Civil Defense Approval",
      description: "Achieved Civil Defense approval for refrigeration systems",
    },
    {
      year: "2015",
      title: "Major Expansion",
      description: "Expanded services to include industrial HVAC solutions",
    },
    {
      year: "2020",
      title: "500+ Projects",
      description: "Completed over 500 successful installations across UAE",
    },
    {
      year: "2024",
      title: "Industry Leader",
      description: "Recognized as premier HVAC service provider in UAE",
    },
  ]

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-blue-900 text-white">Established 2006</Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">About Euro Gulf Tech</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Your trusted partner for professional HVAC and refrigeration solutions in the UAE for over 18 years.
          </p>
        </div>

        {/* Company Overview */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
            <div className="space-y-4 text-gray-600">
              <p>
                Founded in 2006, Euro Gulf Tech Contracting LLC has been at the forefront of HVAC and refrigeration
                services in the UAE. Based in Sharjah, we have built a reputation for excellence, reliability, and
                innovation in the industry.
              </p>
              <p>
                Our journey began with a simple mission: to provide safe, efficient, and compliant HVAC solutions that
                meet the unique challenges of the UAE&apos;s climate and regulatory environment. Today, we are proud to be a
                Civil Defense approved contractor with over 500 successful projects across the region.
              </p>
              <p>
                With over 18 years of experience, our team of certified professionals specializes in commercial and
                industrial refrigeration systems, cold rooms, kitchen hoods, and comprehensive ventilation solutions. We
                serve a diverse clientele including industrial facilities, commercial buildings, restaurants, and
                warehouses.
              </p>
            </div>
          </div>
          <div className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Target className="h-6 w-6 text-blue-900 mr-3" />
                  <h3 className="text-xl font-semibold text-gray-900">Our Mission</h3>
                </div>
                <p className="text-gray-600">
                &apos;Increase revenue by 25% while being the leading service provider in ventilation and refrigeration
                  through innovative solutions and exceptional customer service.&apos;
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Eye className="h-6 w-6 text-blue-900 mr-3" />
                  <h3 className="text-xl font-semibold text-gray-900">Our Vision</h3>
                </div>
                <p className="text-gray-600">
                &apos;Reputable and satisfactory service provider through quality assurance, cooperation, and material
                  durability, setting the standard for HVAC excellence in the UAE.&apos;
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Company Values */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600">The principles that guide everything we do</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="text-blue-900 mb-4 flex justify-center">{value.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Timeline */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Journey</h2>
            <p className="text-xl text-gray-600">18+ years of growth and excellence</p>
          </div>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-200"></div>
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? "pr-8 text-right" : "pl-8 text-left"}`}>
                    <Card>
                      <CardContent className="p-6">
                        <div className="text-2xl font-bold text-blue-900 mb-2">{item.year}</div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                        <p className="text-gray-600">{item.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                  <div className="relative z-10">
                    <div className="w-4 h-4 bg-blue-900 rounded-full border-4 border-white shadow-lg"></div>
                  </div>
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Expertise */}
        <section className="mb-20">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Expert Team</h2>
              <p className="text-gray-600 mb-6">
                Our team consists of highly skilled professionals with over 10 years of specialized experience in HVAC
                and refrigeration systems. Each team member is certified and continuously trained on the latest
                technologies and safety standards.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <div className="text-2xl font-bold text-blue-900 mb-1">10+</div>
                  <div className="text-gray-600">Years Experience</div>
                </div>
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <div className="text-2xl font-bold text-blue-900 mb-1">15+</div>
                  <div className="text-gray-600">Certified Technicians</div>
                </div>
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <div className="text-2xl font-bold text-blue-900 mb-1">24/7</div>
                  <div className="text-gray-600">Support Team</div>
                </div>
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <div className="text-2xl font-bold text-blue-900 mb-1">100%</div>
                  <div className="text-gray-600">Customer Satisfaction</div>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Certifications & Approvals</h3>
              <div className="space-y-3">
                {certifications.map((cert, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{cert}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Contact Person */}
        <Card className="bg-gradient-to-r from-blue-900 to-blue-800 text-white">
          <CardContent className="p-8 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Work With Us?</h2>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Contact our team today to discuss your HVAC and refrigeration needs. We&apos;re here to provide expert
              solutions tailored to your requirements.
            </p>
            <div className="text-lg">
              <div className="font-semibold mb-2">Muhammad Nadeem ur Rehman</div>
              <div className="text-blue-200">Project Manager & Client Relations</div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
