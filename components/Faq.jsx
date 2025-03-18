import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
import { FAQ } from "@/constants"
  

const Faq = () => {
  return (
    <div className='container mx-auto pb-10 my-20'>
        <h2 className='text-center text-3xl md:text-4xl lg:text-5xl'>FAQ</h2>

          <Accordion type="single" collapsible className="w-full mx-auto max-w-3xl p-6">
            {FAQ.map((faq,index)=>(
                <AccordionItem key={index} value={faq.value}>
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent>
                    {faq.answer}
                </AccordionContent>
            </AccordionItem>
            ))}
              
          </Accordion>

    </div>
  )
}

export default Faq