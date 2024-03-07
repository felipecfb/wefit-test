import { convertToBRL } from '@/utils/convertToBRL'

import {
  CartItemContainer,
  DeleteButton,
  Image,
  InformationsWrapper,
  MinusIcon,
  PlusIcon,
  Price,
  ProductWrapper,
  Quantity,
  QuantityWrapper,
  Subtotal,
  Title,
} from './styles'

interface CartItemProps {
  title: string
  price: number
  image: string
  quantity: number
  deleteProductFromCart: () => void
  incrementProductQuantity: () => void
  decrementProductQuantity: () => void
}

export function CartItem({
  title,
  price,
  image,
  quantity,
  deleteProductFromCart,
  incrementProductQuantity,
  decrementProductQuantity,
}: CartItemProps) {
  return (
    <CartItemContainer>
      <ProductWrapper>
        <Image src={image} alt="Movie" />
        <InformationsWrapper>
          <Title>{title}</Title>
          <Price>{convertToBRL(price)}</Price>
        </InformationsWrapper>
      </ProductWrapper>

      <QuantityWrapper>
        <MinusIcon onClick={decrementProductQuantity} />
        <Quantity type="number" value={quantity} />
        <PlusIcon onClick={incrementProductQuantity} />
      </QuantityWrapper>

      <Subtotal>{convertToBRL(quantity * price)}</Subtotal>

      <DeleteButton onClick={deleteProductFromCart}>
        <img src="trash.svg" alt="" />
      </DeleteButton>
    </CartItemContainer>
  )
}
