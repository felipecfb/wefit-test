import { convertToBRL } from '@/utils/convertToBRL'

import {
  BottomWrapper,
  CartItemContainer,
  DeleteButton,
  Image,
  InformationsWrapper,
  InformationsWrapperMobile,
  MinusIcon,
  MobileContainer,
  PlusIcon,
  Price,
  ProductWrapper,
  Quantity,
  QuantityWrapper,
  Subtotal,
  Title,
  TopWrapper,
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
    <>
      <CartItemContainer>
        <ProductWrapper>
          <Image src={image} alt="Imagem da capa do filme" />
          <InformationsWrapper>
            <Title>{title}</Title>
            <Price>{convertToBRL(price)}</Price>
          </InformationsWrapper>
        </ProductWrapper>

        <QuantityWrapper>
          <MinusIcon
            src="minus.svg"
            alt="Diminuir a quantidade de itens no carrinho"
            onClick={decrementProductQuantity}
          />
          <Quantity type="number" value={quantity} />
          <PlusIcon
            src="plus.svg"
            alt="Aumentar a quantidade de itens no carrinho"
            onClick={incrementProductQuantity}
          />
        </QuantityWrapper>

        <Subtotal>{convertToBRL(quantity * price)}</Subtotal>

        <DeleteButton onClick={deleteProductFromCart}>
          <img src="trash.svg" alt="Remover um item do carrinho" />
        </DeleteButton>
      </CartItemContainer>

      <MobileContainer>
        <Image src={image} alt="Imagem da capa do filme" />

        <InformationsWrapperMobile>
          <TopWrapper>
            <InformationsWrapper>
              <Title>{title}</Title>
              <Price>{convertToBRL(price)}</Price>
            </InformationsWrapper>
            <DeleteButton onClick={deleteProductFromCart}>
              <img src="trash.svg" alt="Remover um item do carrinho" />
            </DeleteButton>
          </TopWrapper>

          <BottomWrapper>
            <QuantityWrapper>
              <MinusIcon
                src="minus.svg"
                alt="Diminuir a quantidade de itens no carrinho"
                onClick={decrementProductQuantity}
              />
              <Quantity type="number" value={quantity} />
              <PlusIcon
                src="plus.svg"
                alt="Aumentar a quantidade de itens no carrinho"
                onClick={incrementProductQuantity}
              />
            </QuantityWrapper>

            <Subtotal>
              <span>Subtotal</span>
              {convertToBRL(quantity * price)}
            </Subtotal>
          </BottomWrapper>
        </InformationsWrapperMobile>
      </MobileContainer>
    </>
  )
}
