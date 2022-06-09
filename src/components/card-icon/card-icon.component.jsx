import { useContext } from 'react'

import { ReactComponent as ShoppingIcon } from '../../assests/shopping-bag.svg'

import { CartContext } from '../../contexts/cart.context'

import './card-icon.styles.scss'

const CardIcon = () => {
  const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext)

  const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen)

  return (
    <div className='card-icon-container' onClick={toggleIsCartOpen}>
      <ShoppingIcon className='shopping-icon' />
      <span className='item-count'>{cartCount}</span>
    </div>
  )
}

export default CardIcon
