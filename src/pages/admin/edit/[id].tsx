import { DefaultButton, PrimaryButton, TextField } from '@fluentui/react'
import { useRouter } from 'next/router'
import { FormEvent, useEffect, useMemo, useState } from 'react'
import { toast } from 'react-toastify'

import { useInfo } from '@/hooks'
import { Meta } from '@/layouts'
import { Main } from '@/templates'
import { ItemProps } from '@/typings/items'
import { ImageRegex, LinkRegex } from '@/utils'

const Index = () => {
  const router = useRouter()
  const { id } = router.query
  const { editItem, removeItem, itemList } = useInfo()
  const selected = useMemo(
    () => itemList.find((item) => item.id === +id!),
    [id]
  )

  const [formValues, setFormValues] = useState<ItemProps>({
    title: '',
    image: '',
    link: '',
    order: 0,
    id: 10
  })

  const handleChange = (
    key: string,
    e: FormEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { value } = e.target as HTMLTextAreaElement | HTMLTextAreaElement
    setFormValues({ ...formValues, [key]: value })
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const { image, link, id: formId, order, title } = formValues

    const isImageValid = !ImageRegex.test(image)
    const isLinkValid = !LinkRegex.test(link)

    if (
      selected?.image === formValues.image &&
      selected?.link === formValues.link &&
      selected?.order === formValues.order &&
      selected?.title === formValues.title
    ) {
      toast.error('Você precisa editar algo para salvar.')
      return
    }

    if (title.split('').length > 50) {
      toast.warn('O titulo deve ter, no máximo, 50 caracteres.')
      return
    }

    if (isImageValid) {
      toast.warn('A Imagem precisa ser um URL válido.')
      return
    }

    if (isLinkValid) {
      toast.warn('O Link precisa ser um URL válido.')
      return
    }

    editItem({ id: formId, image, link, order, title })

    setFormValues({
      id: 100,
      image: '',
      link: '',
      order: 0,
      title: ''
    })

    router.push('/admin/edit')
  }

  useEffect(() => {
    if (!id) return
    if (!selected) {
      router.push('/admin/edit')
      return
    }
    setFormValues({
      id: selected!.id,
      image: selected!.image,
      link: selected!.link,
      order: selected!.order,
      title: selected!.title
    })
  }, [id, selected])

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
        <div className="flex w-full items-center justify-between">
          <h6 className="mb-6 font-black text-[#000]">Editando - Item {id}</h6>
          <DefaultButton
            onClick={() => {
              removeItem(+id! || 0)
              router.push('/admin/edit')
            }}
            className="w-1/2"
          >
            Delete esse Item
          </DefaultButton>
        </div>
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
