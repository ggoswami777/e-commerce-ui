"use client"

import useCartStore from "@/stores/cartStore"
import { ShoppingCart } from "lucide-react"
import Link from "next/link"

const ShoppingCartIcon = () => {
  const {cart}=useCartStore();
  return (
    <Link href="/cart" className="relative">
        <ShoppingCart className='w-4 h-4 text-gray-500 ' />
        <span className="absolute -top-2 -right-2 bg-amber-400 text-gray-600 rounded-full w-4 h-4 flex items-center justify-center text-[10px] font-medium leading-none">
          {cart.length}
        </span>
    </Link>

  )
}

export default ShoppingCartIcon