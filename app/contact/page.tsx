"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { MapPin, Phone, Mail, Clock, Send, User, AlertTriangle } from "lucide-react"
import { WhatsAppIcon } from "../images/Icons"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    serviceType: "",
    message: "",
    urgency: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
  }

  const contactInfo = [
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Address",
      details: ["P.O. Box 64837", "Sharjah, UAE"],
      action: "Get Directions",
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Phone Numbers",
      details: ["+971 (06) 5311304", "+971 (52) 6798630", "+971 (56) 3595695"],
      action: "Call Now",
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email",
      details: ["eurogulftech@gmail.com"],
      action: "Send Email",
    },
    {
      icon: <WhatsAppIcon className="h-6 w-6" />,
      title: "WhatsApp",
      details: ["+971 52 6798630"],
      action: "Chat Now",
    },
  ]

  const businessHours = [
    { day: "Sunday - Thursday", hours: "8:00 AM - 6:00 PM" },
    { day: "Friday", hours: "8:00 AM - 12:00 PM" },
    { day: "Saturday", hours: "Closed" },
    { day: "Emergency Service", hours: "24/7 Available" },
  ]

  const serviceAreas = ["Dubai", "Sharjah", "Abu Dhabi", "Ajman", "Ras Al Khaimah", "Fujairah", "Umm Al Quwain"]

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-blue-900 text-white">Get In Touch</Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Contact Us</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to discuss your HVAC project? Our expert team is here to help with professional consultation and
            competitive quotes.
          </p>
        </div>

        {/* Emergency Contact Banner */}
        <Card className="mb-16 bg-red-50 border-red-200">
          <CardContent className="p-6">
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div className="flex items-center">
                <AlertTriangle className="h-8 w-8 text-red-600 mr-4" />
                <div>
                  <h3 className="text-xl font-semibold text-red-900">Emergency HVAC Service</h3>
                  <p className="text-red-700">24/7 emergency response for critical system failures</p>
                </div>
              </div>
              <div className="flex gap-2">
                <Button className="bg-red-600 hover:bg-red-700 text-white">
                  <Phone className="mr-2 h-4 w-4" />
                  +971 52 6798630
                </Button>
                <Button variant="outline" className="border-red-600 text-red-600 hover:bg-red-50">
                  <WhatsAppIcon className="mr-2 h-4 w-4" />
                  WhatsApp
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-gray-900">Send Us a Message</CardTitle>
                <p className="text-gray-600">Fill out the form below and we&apos;ll get back to you within 24 hours</p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
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
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
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
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="service">Service Type *</Label>
                      <Select onValueChange={(value) => setFormData({ ...formData, serviceType: value })}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a service" />
                        </SelectTrigger>
                        <SelectContent >
                          <SelectItem value="refrigeration">Refrigeration Systems</SelectItem>
                          <SelectItem value="cold-room">Cold Storage Installation</SelectItem>
                          <SelectItem value="kitchen-hood">Kitchen Hood Systems</SelectItem>
                          <SelectItem value="chiller">Chiller & Freezer Services</SelectItem>
                          <SelectItem value="esp">ESP Installation</SelectItem>
                          <SelectItem value="ozone">Ozone Generator Systems</SelectItem>
                          <SelectItem value="maintenance">Maintenance Services</SelectItem>
                          <SelectItem value="emergency">Emergency Repair</SelectItem>
                          <SelectItem value="consultation">General Consultation</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="urgency">Project Urgency</Label>
                      <Select onValueChange={(value) => setFormData({ ...formData, urgency: value })}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select urgency" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="emergency">Emergency (24 hours)</SelectItem>
                          <SelectItem value="urgent">Urgent (1 week)</SelectItem>
                          <SelectItem value="normal">Normal (2-4 weeks)</SelectItem>
                          <SelectItem value="planning">Planning (1+ months)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="message">Project Details *</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Please describe your project requirements, location, timeline, and any specific needs..."
                      rows={5}
                      required
                    />
                  </div>

                  <Button type="submit" className="w-full bg-yellow-600 hover:bg-yellow-700 text-white">
                    <Send className="mr-2 h-4 w-4" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Details */}
            <div className="grid gap-6">
              {contactInfo.map((info, index) => (
                <Card key={index} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start">
                      <div className="text-blue-900 mr-4 mt-1">{info.icon}</div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">{info.title}</h3>
                        <div className="space-y-1 mb-3">
                          {info.details.map((detail, idx) => (
                            <p key={idx} className="text-gray-600">
                              {detail}
                            </p>
                          ))}
                        </div>
                        <Button variant="outline" size="sm">
                          {info.action}
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Business Hours */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Clock className="h-5 w-5 mr-2 text-blue-900" />
                  Business Hours
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {businessHours.map((schedule, index) => (
                    <div key={index} className="flex justify-between items-center">
                      <span className="text-gray-600">{schedule.day}</span>
                      <span
                        className={`font-medium ${schedule.day === "Emergency Service" ? "text-red-600" : "text-gray-900"}`}
                      >
                        {schedule.hours}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Service Areas */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <MapPin className="h-5 w-5 mr-2 text-blue-900" />
                  Service Areas
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">We provide services across all Emirates in the UAE:</p>
                <div className="flex flex-wrap gap-2">
                  {serviceAreas.map((area, index) => (
                    <Badge key={index} variant="outline" className="text-blue-900 border-blue-200">
                      {area}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Contact Person */}
            <Card className="bg-blue-50 border-blue-200">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <User className="h-6 w-6 text-blue-900 mr-3" />
                  <h3 className="text-lg font-semibold text-gray-900">Direct Contact</h3>
                </div>
                <div className="space-y-2">
                  <p className="font-medium text-gray-900">Muhammad Nadeem ur Rehman</p>
                  <p className="text-gray-600">Project Manager & Client Relations</p>
                  <div className="flex gap-2 mt-4">
                    <Button size="sm" className="bg-blue-900 hover:bg-blue-800 text-white">
                      <Phone className="mr-2 h-4 w-4" />
                      Call Direct
                    </Button>
                    <Button size="sm" variant="outline">
                      <WhatsAppIcon className="mr-2 h-4 w-4" />
                      WhatsApp
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Map Section */}
        <Card className="mt-16">
          <CardHeader>
            <CardTitle className="text-center">Our Location</CardTitle>
            <p className="text-center text-gray-600">
              Visit our office in Sharjah or contact us for on-site consultations
            </p>
          </CardHeader>
          <CardContent>
            <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <MapPin className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-600">Interactive Map</p>
                <p className="text-sm text-gray-500">P.O. Box 64837, Sharjah, UAE</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
