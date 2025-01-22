// src\app\checkout\page.tsx
'use client'

import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Card, CardContent } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import Image from "next/image"
import Shopbottombar from "@/components/shopBottomBar/Shopbottombar"
import { useEffect, useState } from "react"
import { post_req } from "@/services/shipEnigine_Api"
import { toast } from "sonner"


interface Iproduct {
  id: number;
  name: string;
  image: string;
  price: string;
  quantity: string;
}

export default function CheckoutForm() {
  
  const [cartItem, setCartItem] = useState([])

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [address, setAddress] = useState("")
  const [city, setCity] = useState("")

  const [isShipDetail, setIsShipDetail] = useState(false)

  function placeOrder(){
    if(!isShipDetail){
      toast.warning("Please fill Shipment Details", {
      className: 'text-lg',
      style: { fontSize: '18px' },
      })
    }else {
      if(cartItem.length > 0){
        toast.success("Payment successful ✅", {
          className: 'text-lg',
          style: { fontSize: '18px' },
          })

        localStorage.setItem('cart', JSON.stringify([]))
        setCartItem([])
      }else{
        toast.error("Add some Items to cart 🛒", {
          className: 'text-lg',
          style: { fontSize: '18px' },
          })
      }         
    }
  }


  const formSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    
    const submit_data = {
      name,
      email,
      phone,
      address,
      city
    }

    async function getDtata(){
      const res = await post_req(submit_data)
      if(res){
        setIsShipDetail(true)

        setName("")
        setEmail("")
        setPhone("")
        setAddress("")
        setCity("")

        toast.success("successful, Details submitted", {
          className: 'text-lg',
          style: { fontSize: '18px' },
        })
      }
    }

    if(name && email && phone && address && city){
      getDtata()
    }
  }

  useEffect(()=>{
    const data = JSON.parse(localStorage.getItem('cart') || '[]');    
    if(data){
      setCartItem(data)
    }    
  },[])
  
  return (
    <div className="min-h-screen bg-white px-4 md:px-8 lg:px-12">

      {/* Hero Section */}
      <div className="bg-[url('/blogMainImage.png')] bg-cover bg-center py-16 mb-12">
        <div className="container text-center">
          <div className="inline-block w-16 h-16 bg-[url('/logo1.png')] mb-4" />
          <h1 className="text-3xl md:text-4xl font-medium mb-4 font-poppins">CheckOut</h1>
          <div className="flex items-center justify-center gap-2 text-sm">
            <a href="#" className="hover:underline">Home</a>
            <span>
              <Image src="/rightA.png" width={20} height={20} alt="arrow" />
            </span>
            <span>Checkout</span>
          </div>
        </div>
      </div>








      {/* Main Content */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        {/* Billing Details Form */}
        <div>
          <h2 className="text-2xl md:text-3xl font-semibold mb-6 md:mb-8">Billing details</h2>
          <form className="space-y-6" onSubmit={formSubmit}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="firstName">Full Name</Label>
                <Input id="firstName" required value={name}  onChange={(e) => setName(e.target.value)}/>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="company">Company Name (Optional)</Label>
              <Input id="company" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="country">Country / Region</Label>
              <Select defaultValue="select country">
                <SelectTrigger>
                  <SelectValue placeholder="Select country" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="sri-lanka">Sri Lanka</SelectItem>
                  <SelectItem value="India">India</SelectItem>
                  <SelectItem value="Pakistan">Pakistan</SelectItem>
                  <SelectItem value="United States">United States</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="street">Complete address</Label>
              <Input id="street" required value={address} onChange={(e) => setAddress((e.target as HTMLInputElement).value)}/>
            </div>

            <div className="space-y-2">
              <Label htmlFor="city">Town / City</Label>
              <Input id="city" required value={city} onChange={(e) => setCity((e.target as HTMLInputElement).value)}/>
            </div>

            <div className="space-y-2">
              <Label htmlFor="province">Province</Label>
              <Select defaultValue="western">
                <SelectTrigger>
                  <SelectValue placeholder="Select province" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Sindh">Sindh</SelectItem>
                  <SelectItem value="Punjab">Punjab</SelectItem>
                  <SelectItem value="KPK">KPK</SelectItem>
                  <SelectItem value="western">baluchistan</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="zip">ZIP code</Label>
              <Input id="zip" required />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone">Phone</Label>
              <Input id="phone" type="tel" required value={phone} onChange={(e)=>setPhone((e.target as HTMLInputElement).value)}/>
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email address</Label>
              <Input id="email" type="email" required value={email} onChange={(e)=>setEmail((e.target as HTMLInputElement).value)}/>
            </div>

            <div className="space-y-2">
              <Label htmlFor="additional">Additional information</Label>
              <Textarea id="additional" placeholder="Notes about your order" />
            </div>

            <Button className="w-full mt-4" size="lg" type="submit"> 
              OK
            </Button>
          </form>
        </div>









        {/* Order Summary */}
        <div>
          <Card>
            <CardContent className="p-6">
              <div className="space-y-4">
                <div className="flex justify-between text-lg md:text-xl font-medium">
                  <span>Product</span>
                  <span>Subtotal</span>
                </div>
                
                {cartItem.map((item: Iproduct, index:number)=>{return (
                  <div className="flex justify-between text-gray-600" key={index}>
                    <span>{item.name} × {item.quantity}</span>
                    <span>Rs. {(+item.price * +item.quantity)}.00</span>
                </div>
                )})}

                <div className="flex justify-between border-t pt-4">
                  <span>Subtotal</span>
                  <span>Rs. {cartItem.reduce((total: number, item: Iproduct)=>{return total + (+item.price * +item.quantity)},0)}.00</span>
                </div>

                <div className="flex justify-between border-t pt-4">
                  <span>Total</span>
                  <span className="text-[#B88E2F] font-bold">Rs. {cartItem.reduce((total: number, item: Iproduct)=>{return total + (+item.price * +item.quantity)},0)}.00</span>
                </div>

                <RadioGroup defaultValue="bank-transfer" className="mt-8">
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <RadioGroupItem value="bank-transfer" id="bank-transfer" className="mt-1" />
                      <div className="space-y-2">
                        <Label htmlFor="bank-transfer">Direct Bank Transfer</Label>
                        <p className="text-sm text-gray-600">
                          Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-4">
                      <RadioGroupItem value="cash" id="cash" />
                      <Label htmlFor="cash">Cash On Delivery</Label>
                    </div>
                  </div>
                </RadioGroup>

                <div className="text-sm text-gray-600 mt-4">
                  Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our privacy policy.
                </div>

                <Button className="w-full mt-4" size="lg" onClick={placeOrder}> 
                  Place order
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <Shopbottombar />
    </div>
  )
}