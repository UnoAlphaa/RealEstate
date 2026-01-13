"use client"

import { useForm } from "react-hook-form"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage} from "./ui/form"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover"
import { cn } from "@/lib/utils"
import { format } from "date-fns"
import { Calendar } from "./ui/calendar"
import { CalendarIcon } from "lucide-react"

const SearchForm = () => {
    const form = useForm();
  return (
    <div className='grid gap-2 p-2 rounded-xl w-full items-end bg-black sm:grid-cols-2 lg:grid-cols-4'>
        <Form {...form}>
                <FormField control={form.control} name="Address" render={({field})=>{
                    return(
                        <FormItem>
                            <FormLabel className="text-white">property</FormLabel>
                            <Select>
                                <SelectTrigger className="w-full bg-white">
                                    <SelectValue placeholder="Type" />
                                </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="buy">Buy</SelectItem>
                                        <SelectItem value="sell">Sell</SelectItem>
                                        <SelectItem value="rent">Rent</SelectItem>
                                    </SelectContent>
                            </Select>
                        </FormItem>
                    )
                }}>

                </FormField>
                 
                 <FormField control={form.control} name="Address" render={({field})=>{
                    return(
                       <FormItem>
                        <FormLabel className="text-white">Address</FormLabel>
                        <FormControl>
                            <Input placeholder="search by address"
                            className="bg-white text-slate-800"
                            />
                        </FormControl>
                       </FormItem>
                    )
                 }}>

                 </FormField>

                 <FormField
          control={form.control}
          name="add"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel className="text-white">Buy/Sell</FormLabel>
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant={"outline"}
                      className={cn(
                        "w-full pl-3 text-left font-normal",
                        !field.value && "text-muted-foreground"
                      )}
                    >
                      {field.value ? (
                        format(field.value, "PPP")
                      ) : (
                        <span>Pick a date</span>
                      )}
                      <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent  className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={field.value}
                    onSelect={field.onChange}
                    disabled={(date) =>
                      date > new Date() || date < new Date("1900-01-01")
                    }
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
            </FormItem>
          )}
        />
        <Button type="submit" className="bg-slate-800 cursor-pointer">Search</Button>
        </Form>
    </div>
  )
}

export default SearchForm