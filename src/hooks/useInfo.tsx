import { useContext } from 'react'

import { InfoContext } from '@/context/info-context'

export const useInfo = () => useContext(InfoContext)
