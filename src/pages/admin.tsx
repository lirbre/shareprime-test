import { PrimaryButton, TextField } from '@fluentui/react'

import { Meta } from '@/layouts'
import { Main } from '@/templates'

const Admin = () => {
  return (
    <Main
      meta={
        <Meta
          title="SharePrime - Admin"
          description="Admin page using Fluid UI"
        />
      }
    >
      <div className="container">
        <h6 className="mb-6 font-black text-[#000]">Adicione novos Items:</h6>
        <form className="flex flex-col gap-4 px-2">
          <TextField label="Adicione um Titulo" type="text" required />
          <TextField label="Adicione uma Imagem" type="link" required />
          <TextField label="Adicone um Link" type="link" required />
          <TextField label="Adicone uma Ordem" type="number" required />
          <PrimaryButton className="border text-[#000] duration-500">
            Adicionar!
          </PrimaryButton>
        </form>
      </div>
    </Main>
  )
}

export default Admin
