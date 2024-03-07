import { ThemeType } from '@/@types/styled'

import { DefaultButton } from './styles'

interface ButtonProps {
  title: string
  background?: ThemeType
}

export function Button({ title, background }: ButtonProps) {
  return <DefaultButton background={background}>{title}</DefaultButton>
}
