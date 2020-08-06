import React from "react"
import { ReactComponent as ShoppingBagIcon } from "../../svgs/shopping-bag2.svg"
import "./shoppingBag.scss"

type Props = {
  itemCount: number
  onClick?: () => void;
}

export default function ShoppingBag({ itemCount, onClick }: Props) {
  return(
    <div className="shopping-bag-wrapper" onClick={onClick}>
      <div className="item-count">{itemCount}</div>
      <ShoppingBagIcon />
    </div>
  )
}