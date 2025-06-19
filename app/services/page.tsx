import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Snowflake, Wind, Thermometer, Shield, Wrench, Zap, CheckCircle, Phone } from "lucide-react"

export default function ServicesPage() {
  const services = [
    {
      id: "refrigeration",
      icon: <Snowflake className="h-12 w-12" />,
      title: "Refrigeration Systems",
      subtitle: "Civil Defense Approved (CDA)",
      description:
        "Complete refrigeration solutions for commercial and industrial applications with full CDA compliance.",
      features: [
        "Civil Defense Approved systems",
        "Commercial refrigeration units",
        "Industrial cooling systems",
        "Energy-efficient designs",
        "24/7 monitoring capabilities",
        "Preventive maintenance programs",
      ],
      specifications: [
        "Temperature range: -40°C to +15°C",
        "Capacity: 1 TR to 500 TR",
        "Refrigerants: R404A, R134A, R507",
        "Compliance: UAE Civil Defense standards",
      ],
    },
    {
      id: "cold-room",
      icon: <Thermometer className="h-12 w-12" />,
      title: "Cold Room Installation",
      subtitle: "Design • Supply • Installation • Commissioning",
      description: "Turnkey cold storage solutions from concept to completion with comprehensive warranty coverage.",
      features: [
        "Custom design and engineering",
        "Insulation panel supply",
        "Refrigeration equipment installation",
        "Temperature monitoring systems",
        "Door and access solutions",
        "Commissioning and testing",
      ],
      specifications: [
        "Size: 10m² to 1000m² and above",
        "Temperature: -25°C to +15°C",
        "Insulation: PUF panels 75mm-200mm",
        "Flooring: Insulated floor options",
      ],
    },
    {
      id: "kitchen-hood",
      icon: <Wind className="h-12 w-12" />,
      title: "Kitchen Hood Systems",
      subtitle: "Commercial Kitchen Ventilation",
      description: "Professional kitchen exhaust and ventilation systems for restaurants and commercial kitchens.",
      features: [
        "Grease extraction systems",
        "Fire suppression integration",
        "Makeup air systems",
        "Ductwork design and installation",
        "Regular cleaning services",
        "Compliance certification",
      ],
      specifications: [
        "Airflow: 200-2000 CFM per linear foot",
        "Materials: Stainless steel construction",
        "Filters: Baffle or mesh type",
        "Standards: NFPA 96 compliant",
      ],
    },
    {
      id: "chiller",
      icon: <Wrench className="h-12 w-12" />,
      title: "Chiller & Freezer Services",
      subtitle: "Installation • Maintenance • Repair",
      description: "Comprehensive chiller and freezer services for industrial and commercial applications.",
      features: [
        "Air-cooled and water-cooled chillers",
        "Screw and centrifugal compressors",
        "Preventive maintenance contracts",
        "Emergency repair services",
        "Energy efficiency optimization",
        "Spare parts supply",
      ],
      specifications: [
        "Capacity: 10 TR to 1000 TR",
        "Efficiency: High COP ratings",
        "Controls: Digital temperature control",
        "Warranty: Comprehensive coverage",
      ],
    },
    {
      id: "esp",
      icon: <Shield className="h-12 w-12" />,
      title: "ESP Installation",
      subtitle: "Electrostatic Precipitator Systems",
      description: "Advanced air purification systems for industrial pollution control and air quality management.",
      features: [
        "High-efficiency particle removal",
        "Industrial air purification",
        "Emission control systems",
        "Automatic cleaning cycles",
        "Remote monitoring capability",
        "Compliance with environmental standards",
      ],
      specifications: [
        "Efficiency: 99%+ particle removal",
        "Capacity: Custom sizing available",
        "Voltage: High voltage DC systems",
        "Applications: Industrial facilities",
      ],
    },
    {
      id: "ozone",
      icon: <Zap className="h-12 w-12" />,
      title: "Ozone Generator Systems",
      subtitle: "Air & Water Treatment Solutions",
      description: "State-of-the-art ozone generation systems for air purification and water treatment applications.",
      features: [
        "Air sterilization systems",
        "Water treatment solutions",
        "Odor elimination",
        "Bacteria and virus control",
        "Food processing applications",
        "Swimming pool treatment",
      ],
      specifications: [
        "Output: 1g/hr to 1000g/hr",
        "Technology: Corona discharge",
        "Control: Digital monitoring",
        "Safety: Built-in safety features",
      ],
    },
  ]

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-blue-900 text-white">Professional HVAC Services</Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Our Services</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive HVAC and refrigeration solutions with 18+ years of expertise in the UAE market. All systems
            are Civil Defense Approved.
          </p>
        </div>

        {/* Services Grid */}
        <div className="space-y-16">
          {services.map((service, index) => (
            <Card key={service.id} id={service.id} className="overflow-hidden">
              <CardContent className="p-0">
                <div className={`grid lg:grid-cols-2 gap-8 ${index % 2 === 1 ? "lg:grid-flow-col-dense" : ""}`}>
                  {/* Content */}
                  <div className="p-8 lg:p-12">
                    <div className="flex items-center mb-6">
                      <div className="text-blue-900 mr-4">{service.icon}</div>
                      <div>
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900">{service.title}</h2>
                        <p className="text-yellow-600 font-semibold">{service.subtitle}</p>
                      </div>
                    </div>

                    <p className="text-gray-600 mb-6 text-lg">{service.description}</p>

                    <div className="mb-8">
                      <h3 className="text-lg font-semibold text-gray-900 mb-4">Key Features:</h3>
                      <div className="grid sm:grid-cols-2 gap-2">
                        {service.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center">
                            <CheckCircle className="h-4 w-4 text-green-600 mr-2 flex-shrink-0" />
                            <span className="text-gray-600">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <Button className="bg-yellow-600 hover:bg-yellow-700 text-white">
                      <Phone className="mr-2 h-4 w-4" />
                      Request Quote
                    </Button>
                  </div>

                  {/* Specifications */}
                  <div className={`bg-gray-50 p-8 lg:p-12 ${index % 2 === 1 ? "lg:col-start-1" : ""}`}>
                    <h3 className="text-xl font-semibold text-gray-900 mb-6">Technical Specifications</h3>
                    <div className="space-y-4">
                      {service.specifications.map((spec, idx) => (
                        <div key={idx} className="border-l-4 border-blue-900 pl-4">
                          <p className="text-gray-700">{spec}</p>
                        </div>
                      ))}
                    </div>

                    <div className="mt-8 p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                      <div className="flex items-center mb-2">
                        <Shield className="h-5 w-5 text-yellow-600 mr-2" />
                        <span className="font-semibold text-yellow-800">Civil Defense Approved</span>
                      </div>
                      <p className="text-yellow-700 text-sm">
                        All our systems meet UAE safety standards and regulations
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Annual Maintenance Contracts */}
        <Card className="mt-16 bg-blue-900 text-white">
          <CardHeader>
            <CardTitle className="text-2xl md:text-3xl text-center">Annual Maintenance Contracts</CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <p className="text-blue-100 mb-8 text-lg max-w-3xl mx-auto">
              Protect your investment with our comprehensive maintenance programs. Ensure optimal performance, extend
              equipment life, and maintain compliance.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-400 mb-2">24/7</div>
                <div className="text-blue-100">Emergency Support</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-400 mb-2">30%</div>
                <div className="text-blue-100">Energy Savings</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-400 mb-2">50%</div>
                <div className="text-blue-100">Longer Equipment Life</div>
              </div>
            </div>
            <Button size="lg" className="bg-yellow-600 hover:bg-yellow-700 text-white">
              Learn About Maintenance Plans
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
