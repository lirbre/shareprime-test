import { ListCards } from '@/components/listcards'
import { Meta } from '@/layouts'
import { Main } from '@/templates'

const Index = () => {
  return (
    <Main
      meta={
        <Meta
          title="SharePrime - React Test"
          description="SharePrime React Test by Breno Lira"
        />
      }
    >
      <div className="container pb-8">
        <h6 className="mb-6 font-black text-[#000]">Listando os Items:</h6>
        <ListCards />
      </div>
    </Main>
  )
}

export default Index
