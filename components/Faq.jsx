import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { FAQ } from "@/constants"

const Faq = () => {
  return (
    <div className="container mx-auto my-20">
      <h2 className="text-center text-3xl sm:text-4xl lg:text-5xl mb-8">Frequently Asked Questions</h2>
      <Accordion type="single" collapsible className="max-w-3xl p-6 mx-auto">
       {FAQ.map((faq,index)=>(
         <AccordionItem 
           key={index} 
           value={faq.value} 
           className="transition-all duration-500 ease-in-out border rounded-lg mb-2 hover:shadow-lg hover:scale-[1.01]"
         >
         <AccordionTrigger className="transition-all duration-500 hover:bg-gray-50 rounded-lg px-4 py-3 group">
           <span className="transition-transform duration-500 group-data-[state=open]:rotate-180">
             {faq.question}
           </span>
         </AccordionTrigger>
         <AccordionContent className="transition-all duration-500 ease-in-out data-[state=open]:animate-accordion-down data-[state=closed]:animate-accordion-up overflow-hidden">
           <div className="p-4 bg-gray-50 rounded-b-lg">
           {faq.answer}
           </div>
         </AccordionContent>
       </AccordionItem>
       ))}
      </Accordion>
    </div>
  )
}

export default Faq