import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { AsyncImage } from "./AsyncImage"

export interface Service {
    image: string;
    title: string;
    description: string;
    link: string;
    buttonText: string;
  }

export default function ServiceCard({ service }: { service: Service }) {
  return (
    <Card className="flex h-full flex-col overflow-hidden rounded-2xl border-gray-200 bg-white shadow-lg transition-shadow duration-300 hover:shadow-2xl">
      <div className="relative h-56 w-full px-6">
        <AsyncImage
          src={service.image}
          alt={service.title}
          fill
         className="object-cover transition-transform  rounded-xl"
        />
      </div>
      <CardContent className="flex flex-1 flex-col p-6">
        <h3 className="mb-2 text-2xl font-bold text-gray-900">
          {service.title}
        </h3>
        <p className="mb-6 flex-grow text-gray-600">{service.description}</p>
        <Button
          asChild
          className="group mt-auto w-full bg-yellow-600 text-white hover:bg-yellow-700"
        >
          <Link href={service.link}>
            {service.buttonText}
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </Button>
      </CardContent>
    </Card>
  )
}