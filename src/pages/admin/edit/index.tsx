import { ListEdit } from '@/components'
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
      <div className="container px-4 pb-8">
        <h6 className="mb-6 font-black text-[#000]">
          Listando os Items editáveis:
        </h6>
        <p className="mb-6 italic opacity-80">
          Clique em um item para editá-lo:
        </p>
        <ListEdit />
      </div>
    </Main>
  )
}

export default Index
