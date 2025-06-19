"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Badge } from "@/components/ui/badge"
import { Calculator, Upload, CheckCircle, Clock, Phone, FileText, AlertCircle } from "lucide-react"

export default function QuotePage() {
  const [formData, setFormData] = useState({
    // Personal Information
    name: "",
    email: "",
    phone: "",
    company: "",
    position: "",

    // Project Details
    serviceType: "",
    projectLocation: "",
    buildingType: "",
    projectSize: "",
    timeline: "",
    budget: "",

    // Technical Requirements
    temperatureRange: "",
    capacity: "",
    specialRequirements: "",
    existingSystem: "",

    // Additional Services
    maintenance: false,
    emergency: false,
    installation: false,
    design: false,

    // Project Description
    description: "",
    additionalNotes: "",
  })

  const [currentStep, setCurrentStep] = useState(1)
  const totalSteps = 4

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1)
    }
  }

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Quote request submitted:", formData)
  }

  const serviceTypes = [
    { value: "refrigeration", label: "Refrigeration Systems", description: "Commercial & industrial refrigeration" },
    { value: "cold-room", label: "Cold Room Installation", description: "Complete cold storage solutions" },
    { value: "kitchen-hood", label: "Kitchen Hood Systems", description: "Commercial kitchen ventilation" },
    { value: "chiller", label: "Chiller & Freezer Services", description: "Industrial cooling systems" },
    { value: "esp", label: "ESP Installation", description: "Electrostatic precipitator systems" },
    { value: "ozone", label: "Ozone Generator Systems", description: "Air & water treatment solutions" },
    { value: "maintenance", label: "Maintenance Contract", description: "Annual maintenance programs" },
    { value: "multiple", label: "Multiple Services", description: "Combination of services" },
  ]

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Personal Information</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="name">Full Name *</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Your full name"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="your.email@example.com"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="phone">Phone Number *</Label>
                  <Input
                    id="phone"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+971 XX XXXXXXX"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="company">Company Name</Label>
                  <Input
                    id="company"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    placeholder="Your company name"
                  />
                </div>
                <div className="md:col-span-2">
                  <Label htmlFor="position">Position/Title</Label>
                  <Input
                    id="position"
                    value={formData.position}
                    onChange={(e) => setFormData({ ...formData, position: e.target.value })}
                    placeholder="Your job title"
                  />
                </div>
              </div>
            </div>
          </div>
        )

      case 2:
        return (
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Project Details</h3>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="serviceType">Service Type *</Label>
                  <Select onValueChange={(value) => setFormData({ ...formData, serviceType: value })}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select the service you need" />
                    </SelectTrigger>
                    <SelectContent>
                      {serviceTypes.map((service) => (
                        <SelectItem key={service.value} value={service.value}>
                          <div>
                            <div className="font-medium">{service.label}</div>
                            <div className="text-sm text-gray-500">{service.description}</div>
                          </div>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="projectLocation">Project Location *</Label>
                    <Input
                      id="projectLocation"
                      value={formData.projectLocation}
                      onChange={(e) => setFormData({ ...formData, projectLocation: e.target.value })}
                      placeholder="City, Emirate"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="buildingType">Building Type</Label>
                    <Select onValueChange={(value) => setFormData({ ...formData, buildingType: value })}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select building type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="commercial">Commercial Building</SelectItem>
                        <SelectItem value="industrial">Industrial Facility</SelectItem>
                        <SelectItem value="restaurant">Restaurant/Kitchen</SelectItem>
                        <SelectItem value="warehouse">Warehouse</SelectItem>
                        <SelectItem value="retail">Retail Store</SelectItem>
                        <SelectItem value="hospital">Hospital/Medical</SelectItem>
                        <SelectItem value="hotel">Hotel</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="projectSize">Project Size</Label>
                    <Select onValueChange={(value) => setFormData({ ...formData, projectSize: value })}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select project size" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="small">Small (Under 100 sqm)</SelectItem>
                        <SelectItem value="medium">Medium (100-500 sqm)</SelectItem>
                        <SelectItem value="large">Large (500-1000 sqm)</SelectItem>
                        <SelectItem value="xlarge">Extra Large (1000+ sqm)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="timeline">Project Timeline</Label>
                    <Select onValueChange={(value) => setFormData({ ...formData, timeline: value })}>
                      <SelectTrigger>
                        <SelectValue placeholder="When do you need this completed?" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="emergency">Emergency (ASAP)</SelectItem>
                        <SelectItem value="1week">Within 1 week</SelectItem>
                        <SelectItem value="1month">Within 1 month</SelectItem>
                        <SelectItem value="3months">Within 3 months</SelectItem>
                        <SelectItem value="6months">Within 6 months</SelectItem>
                        <SelectItem value="planning">Still planning</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <Label htmlFor="budget">Estimated Budget Range (Optional)</Label>
                  <Select onValueChange={(value) => setFormData({ ...formData, budget: value })}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select your budget range" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="under-25k">Under AED 25,000</SelectItem>
                      <SelectItem value="25k-50k">AED 25,000 - 50,000</SelectItem>
                      <SelectItem value="50k-100k">AED 50,000 - 100,000</SelectItem>
                      <SelectItem value="100k-250k">AED 100,000 - 250,000</SelectItem>
                      <SelectItem value="250k-500k">AED 250,000 - 500,000</SelectItem>
                      <SelectItem value="over-500k">Over AED 500,000</SelectItem>
                      <SelectItem value="discuss">Prefer to discuss</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
          </div>
        )

      case 3:
        return (
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Technical Requirements</h3>
              <div className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="temperatureRange">Temperature Range</Label>
                    <Select onValueChange={(value) => setFormData({ ...formData, temperatureRange: value })}>
                      <SelectTrigger>
                        <SelectValue placeholder="Required temperature range" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="freezer">Freezer (-25°C to -18°C)</SelectItem>
                        <SelectItem value="cold">Cold Room (0°C to 5°C)</SelectItem>
                        <SelectItem value="cool">Cool Room (5°C to 15°C)</SelectItem>
                        <SelectItem value="ac">Air Conditioning (18°C to 24°C)</SelectItem>
                        <SelectItem value="custom">Custom Range</SelectItem>
                        <SelectItem value="na">Not Applicable</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="capacity">System Capacity</Label>
                    <Select onValueChange={(value) => setFormData({ ...formData, capacity: value })}>
                      <SelectTrigger>
                        <SelectValue placeholder="Required capacity" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="small">Small (1-10 TR)</SelectItem>
                        <SelectItem value="medium">Medium (10-50 TR)</SelectItem>
                        <SelectItem value="large">Large (50-100 TR)</SelectItem>
                        <SelectItem value="industrial">Industrial (100+ TR)</SelectItem>
                        <SelectItem value="unknown">Need Assessment</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <Label htmlFor="existingSystem">Existing System</Label>
                  <Select onValueChange={(value) => setFormData({ ...formData, existingSystem: value })}>
                    <SelectTrigger>
                      <SelectValue placeholder="Do you have an existing system?" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="none">No existing system</SelectItem>
                      <SelectItem value="replace">Replace existing system</SelectItem>
                      <SelectItem value="upgrade">Upgrade existing system</SelectItem>
                      <SelectItem value="expand">Expand existing system</SelectItem>
                      <SelectItem value="maintain">Maintain existing system</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="specialRequirements">Special Requirements</Label>
                  <Textarea
                    id="specialRequirements"
                    value={formData.specialRequirements}
                    onChange={(e) => setFormData({ ...formData, specialRequirements: e.target.value })}
                    placeholder="Any special requirements, certifications needed, or specific equipment preferences..."
                    rows={4}
                  />
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Additional Services</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="maintenance"
                    checked={formData.maintenance}
                    onCheckedChange={(checked) => setFormData({ ...formData, maintenance: checked as boolean })}
                  />
                  <Label htmlFor="maintenance">Annual Maintenance Contract</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="emergency"
                    checked={formData.emergency}
                    onCheckedChange={(checked) => setFormData({ ...formData, emergency: checked as boolean })}
                  />
                  <Label htmlFor="emergency">24/7 Emergency Support</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="installation"
                    checked={formData.installation}
                    onCheckedChange={(checked) => setFormData({ ...formData, installation: checked as boolean })}
                  />
                  <Label htmlFor="installation">Complete Installation Service</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="design"
                    checked={formData.design}
                    onCheckedChange={(checked) => setFormData({ ...formData, design: checked as boolean })}
                  />
                  <Label htmlFor="design">Custom Design & Engineering</Label>
                </div>
              </div>
            </div>
          </div>
        )

      case 4:
        return (
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Project Description & Files</h3>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="description">Detailed Project Description *</Label>
                  <Textarea
                    id="description"
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    placeholder="Please provide a detailed description of your project, including specific requirements, challenges, and expectations..."
                    rows={6}
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="additionalNotes">Additional Notes</Label>
                  <Textarea
                    id="additionalNotes"
                    value={formData.additionalNotes}
                    onChange={(e) => setFormData({ ...formData, additionalNotes: e.target.value })}
                    placeholder="Any additional information, special considerations, or questions..."
                    rows={3}
                  />
                </div>

                <div>
                  <Label>Project Files (Optional)</Label>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                    <Upload className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                    <p className="text-gray-600 mb-2">Upload project drawings, specifications, or photos</p>
                    <p className="text-sm text-gray-500 mb-4">Supported formats: PDF, JPG, PNG, DWG (Max 10MB each)</p>
                    <Button variant="outline">
                      <Upload className="mr-2 h-4 w-4" />
                      Choose Files
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <div className="flex items-start">
                <AlertCircle className="h-5 w-5 text-blue-600 mr-3 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-blue-900 mb-2">What happens next?</h4>
                  <ul className="text-blue-800 text-sm space-y-1">
                    <li>• We&apos;ll review your requirements within 24 hours</li>
                    <li>• Our technical team will contact you for any clarifications</li>
                    <li>• You&apos;ll receive a detailed quote within 2-3 business days</li>
                    <li>• We can schedule a site visit if needed</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )

      default:
        return null
    }
  }

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-blue-900 text-white">Free Quote Request</Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Get Your Custom Quote</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Tell us about your HVAC project and receive a detailed, competitive quote from our expert team within 2-3
            business days.
          </p>
        </div>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-gray-700">
              Step {currentStep} of {totalSteps}
            </span>
            <span className="text-sm text-gray-500">{Math.round((currentStep / totalSteps) * 100)}% Complete</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-blue-900 h-2 rounded-full transition-all duration-300"
              style={{ width: `${(currentStep / totalSteps) * 100}%` }}
            ></div>
          </div>
        </div>

        {/* Form */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Calculator className="h-6 w-6 mr-2 text-blue-900" />
              Quote Request Form
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit}>
              {renderStep()}

              {/* Navigation Buttons */}
              <div className="flex justify-between mt-8 pt-6 border-t">
                <Button type="button" variant="outline" onClick={handlePrevious} disabled={currentStep === 1}>
                  Previous
                </Button>

                {currentStep < totalSteps ? (
                  <Button type="button" onClick={handleNext} className="bg-blue-900 hover:bg-blue-800 text-white">
                    Next Step
                  </Button>
                ) : (
                  <Button type="submit" className="bg-yellow-600 hover:bg-yellow-700 text-white">
                    <FileText className="mr-2 h-4 w-4" />
                    Submit Quote Request
                  </Button>
                )}
              </div>
            </form>
          </CardContent>
        </Card>

        {/* Benefits */}
        <div className="grid md:grid-cols-3 gap-6 mt-12">
          <Card className="text-center">
            <CardContent className="p-6">
              <CheckCircle className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">Free Consultation</h3>
              <p className="text-gray-600 text-sm">No obligation quote with expert technical consultation</p>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="p-6">
              <Clock className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">Quick Response</h3>
              <p className="text-gray-600 text-sm">Detailed quote delivered within 2-3 business days</p>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="p-6">
              <Phone className="h-12 w-12 text-yellow-600 mx-auto mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">Expert Support</h3>
              <p className="text-gray-600 text-sm">Direct access to our technical team for questions</p>
            </CardContent>
          </Card>
        </div>

        {/* Emergency Contact */}
        <Card className="mt-12 bg-red-50 border-red-200">
          <CardContent className="p-6 text-center">
            <h3 className="text-xl font-semibold text-red-900 mb-2">Need Emergency Service?</h3>
            <p className="text-red-700 mb-4">For urgent HVAC emergencies, call us directly for immediate assistance</p>
            <Button className="bg-red-600 hover:bg-red-700 text-white">
              <Phone className="mr-2 h-4 w-4" />
              Emergency: +971 52 6798630
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
