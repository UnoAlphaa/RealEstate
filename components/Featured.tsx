import { FEATURED_PROPERTIES } from "@/constants"
import { Star } from "lucide-react"
import Image from "next/image"
import Link from "next/link"


const Featured = () => {
  return (
    <div className="container mx-auto py-10 pb-10 border-b">
        <h2 className="text-center text-3xl tracking-tighter sm:text-4xl lg:text-5xl">Featured Properties</h2>
        <div className="flex flex-wrap">
            {FEATURED_PROPERTIES.map((property, index)=>(
                <div key={index} className="w-full text-center sm:w-1/2 md:w-1/3 lg:w-1/4">
                    <Link href="#" className="m-2 inline-block">
                        <div className="p-8">
                            <Image
                            className="mb-8 rounded-md object-cover"
                            src={property.image} 
                            width={300}
                            height={300}
                            alt={property.name}
                            />
                        </div>
                        <div className="text-center">
                            <h6 className="  font-medium">{property.name}</h6>
                            <span>${property.price}</span>
                            <div className="mt-2 flex items-center justify-center">
                                <Star fill="gold" strokeWidth={0} className="mr-2"/>
                                <span className="text-sm">{property.rating} ({property.reviews} reviews)</span>
                            </div>
                        </div>
                    </Link>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Featured