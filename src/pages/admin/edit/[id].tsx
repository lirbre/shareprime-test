import { DefaultButton, PrimaryButton, TextField } from '@fluentui/react'
import { useRouter } from 'next/router'
import { FormEvent, useMemo, useState } from 'react'

import { Meta } from '@/layouts'
import { Main } from '@/templates'
import { ItemProps } from '@/typings/items'

const Index = () => {
  const router = useRouter()
  const { id } = router.query

  const [formValues, setFormValues] = useState<ItemProps>({
    title: 'as',
    image: '',
    link: '',
    order: '1',
    id: 10
  })

  const handleChange = (
    key: string,
    e: FormEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { value } = e.target as HTMLTextAreaElement | HTMLTextAreaElement
    setFormValues({ ...formValues, [key]: value })
  }

  return (
    <Main
      meta={
        <Meta
          title={`SharePrime - Edit`}
          description={`Painel de Admin para editar items.`}
        />
      }
    >
      <div className="container pb-8">
        <h6 className="mb-6 font-black text-[#000]">Editando - Item {id}</h6>
        <form className="flex flex-col gap-4 px-2">
          {useMemo(
            () => (
              <TextField
                onChange={(e) => handleChange('title', e)}
                value={formValues.title}
                label="Adicione um Titulo"
                required
              />
            ),
            [formValues.title]
          )}
          {useMemo(
            () => (
              <TextField
                onChange={(e) => handleChange('image', e)}
                value={formValues.image}
                label="Adicione uma Imagem"
                required
              />
            ),
            [formValues.image]
          )}
          {useMemo(
            () => (
              <TextField
                onChange={(e) => handleChange('link', e)}
                value={formValues.link}
                label="Adicone um Link"
                required
              />
            ),
            [formValues.link]
          )}
          {useMemo(
            () => (
              <TextField
                onChange={(e) => handleChange('order', e)}
                value={formValues.order}
                label="Adicone uma Ordem"
                type="number"
                required
              />
            ),
            [formValues.order]
          )}
          <PrimaryButton className="border text-[#000] duration-500">
            Salve!
          </PrimaryButton>
          <DefaultButton
            onClick={() => router.push('/admin/edit')}
            className="border text-[#000] duration-500"
          >
            Cancele!
          </DefaultButton>
        </form>
      </div>
    </Main>
  )
}

export default Index
