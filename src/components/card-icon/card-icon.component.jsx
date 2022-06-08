import { useContext } from 'react'

import { ReactComponent as ShoppingIcon } from '../../assests/shopping-bag.svg'

import { CartContext } from '../../contexts/cart.context'

import './card-icon.styles.scss'

const CardIcon = () => {
  const { isCartOpen, setIsCartOpen } = useContext(CartContext)

  const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen)

  return (
    <div className='card-icon-container' onClick={toggleIsCartOpen}>
      <ShoppingIcon className='shopping-icon' />
      <span className='item-count'>0</span>
    </div>
  )
}

export default CardIcon
