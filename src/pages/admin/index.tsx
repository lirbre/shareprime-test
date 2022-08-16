import { DefaultButton, PrimaryButton, TextField } from '@fluentui/react'
import { useRouter } from 'next/router'
import { FormEvent, SyntheticEvent, useMemo, useState } from 'react'
import { toast } from 'react-toastify'

import { useInfo } from '@/hooks'
import { Meta } from '@/layouts'
import { Main } from '@/templates'
import { ItemProps } from '@/typings/items'
import { ImageRegex, LinkRegex } from '@/utils'

const Admin = () => {
  const router = useRouter()
  const [formValues, setFormValues] = useState<ItemProps>({
    title: '',
    image: '',
    link: '',
    order: 0,
    id: 100
  })
  const { addItem } = useInfo()

  const handleChange = (
    key: string,
    e:
      | FormEvent<HTMLInputElement | HTMLTextAreaElement>
      | SyntheticEvent<HTMLElement, Event>
  ) => {
    const { value } = e.target as HTMLTextAreaElement | HTMLTextAreaElement
    if (key === 'order') {
      setFormValues({ ...formValues, [key]: +value })
      return
    }
    setFormValues({ ...formValues, [key]: value })
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const { image, link, id, order, title } = formValues

    const isImageValid = !ImageRegex.test(image)
    const isLinKValid = !LinkRegex.test(link)

    if (isImageValid) {
      toast.warn('A Imagem precisa ser um URL válido.')
      return
    }

    if (isLinKValid) {
      toast.warn('O Link precisa ser um URL válido.')
      return
    }

    addItem({ id, image, link, order, title })

    toast.success('Adicionado um Novo Item!')
    setFormValues({
      id: 100,
      image: '',
      link: '',
      order: 0,
      title: ''
    })
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
        <h6 className="mb-3 font-black text-[#000]">Adicione novos Items:</h6>
        <p
          onClick={() => router.push('/admin/edit')}
          className="mb-6 cursor-pointer italic underline opacity-80 hover:opacity-70"
        >
          Clique aqui para editar os Items:
        </p>
        <form
          onSubmit={(e) => handleSubmit(e)}
          className="flex flex-col gap-4 px-2"
        >
          {useMemo(
            () => (
              <>
                <TextField
                  onChange={(e) => handleChange('title', e)}
                  value={formValues.title}
                  label="Adicione um Titulo"
                  required
                />
                <TextField
                  onChange={(e) => handleChange('image', e)}
                  value={formValues.image}
                  label="Adicione uma Imagem"
                  required
                />

                <TextField
                  onChange={(e) => handleChange('link', e)}
                  value={formValues.link}
                  label="Adicone um Link"
                  required
                />
                <TextField
                  onChange={(e) => handleChange('order', e)}
                  value={formValues.order.toString()}
                  label="Adicone uma Ordem"
                  type="number"
                  required
                />
              </>
            ),
            [formValues]
          )}
          <PrimaryButton
            type="submit"
            className="border text-[#000] duration-500"
          >
            Adicionar!
          </PrimaryButton>
          <DefaultButton
            onClick={() => router.push('/')}
            className="border text-[#000] duration-500"
          >
            Voltar
          </DefaultButton>
        </form>
      </div>
    </Main>
  )
}

export default Admin
