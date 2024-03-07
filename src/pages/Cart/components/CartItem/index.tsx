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
}

export function CartItem({
  title,
  price,
  image,
  quantity,
  deleteProductFromCart,
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
        <MinusIcon />
        <Quantity type="number" value={quantity} />
        <PlusIcon />
      </QuantityWrapper>

      <Subtotal>{convertToBRL(quantity * price)}</Subtotal>

      <DeleteButton onClick={deleteProductFromCart}>
        <img src="trash.svg" alt="" />
      </DeleteButton>
    </CartItemContainer>
  )
}
