import { styled } from "@/styles"

const Button = styled('button', {
  backgroundColor: '$green500',
  color: '#fff',
})

export default function Home() {
  return (
    <>
      <Button>Enviar</Button>
    </>
  )
}
