import React, { createContext, useState } from 'react'

export const DataContext = createContext({})

export const DataProvider = ({ children }: any) => {
  const [rods, setRods] = useState<any>([
    { _id: '1', keywords: ['nike', 'sb', 'dunk', 'acg', 'terra'], price: 200 },
    { _id: '2', keywords: ['stussy', 'cap'], price: 40 },
  ])

  const [domains, setDomains] = useState([
    'https://www.flatspot.com/',
    'https://www.urbanindustry.co.uk/',
    'https://www.karmaloop.com/',
  ])

  return (
    <DataContext.Provider
      value={{
        rods,
        setRods,
        domains,
        setDomains,
      }}
    >
      {children}
    </DataContext.Provider>
  )
}
