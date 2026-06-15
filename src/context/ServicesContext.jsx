import { createContext, useContext, useState, useEffect } from 'react'

const defaultSherbimet = [
  {
    id: 1,
    titulli: 'Stomatologji e Përgjithshme',
    pershkrimi:
      'Kontrolle të rregullta, pastrim dentar profesional dhe trajtim të kariesit për të mbajtur gojën tuaj të shëndetshme.',
    foto: 'https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=400&h=250&fit=crop&auto=format',
    cmimi: '2,500 ALL',
  },
  {
    id: 2,
    titulli: 'Estetikë Dentare',
    pershkrimi:
      'Zbardhim dentar, faceta dhe trajtime estetike për një buzëqeshje më të bukur dhe të vetëbesimit më të lartë.',
    foto: 'https://images.unsplash.com/photo-1571942676516-bcab84649e44?w=400&h=250&fit=crop&auto=format',
    cmimi: '15,000 ALL',
  },
  {
    id: 3,
    titulli: 'Ortodonci',
    pershkrimi:
      'Korrigjim i pozicionimit të dhëmbëve me aparate dentare moderne, fikse dhe të lëvizshme, për të rritur dhe të rinj.',
    foto: 'https://images.unsplash.com/photo-1607613009820-a29f7bb81c04?w=400&h=250&fit=crop&auto=format',
    cmimi: '25,000 ALL',
  },
  {
    id: 4,
    titulli: 'Implantologji',
    pershkrimi:
      'Vendosje implantesh dentare me teknologji të avancuar për zëvendësimin e dhëmbëve të humbur në mënyrë të qëndrueshme.',
    foto: 'https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=400&h=250&fit=crop&auto=format',
    cmimi: '80,000 ALL',
  },
  {
    id: 5,
    titulli: 'Endodonci (Trajtim i Nervit)',
    pershkrimi:
      'Trajtim profesional i kanaleve rrënjore për të shpëtuar dhëmbët e dëmtuar dhe për të lehtësuar dhimbjen.',
    foto: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=400&h=250&fit=crop&auto=format',
    cmimi: '8,000 ALL',
  },
  {
    id: 6,
    titulli: 'Kirurgji Orale',
    pershkrimi:
      'Heqje e dhëmbëve të mençurisë dhe ndërhyrje të tjera kirurgjikale me kujdes maksimal dhe minimum shqetësimi.',
    foto: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=400&h=250&fit=crop&auto=format',
    cmimi: '10,000 ALL',
  },
  {
    id: 7,
    titulli: 'Stomatologji Pediatrike',
    pershkrimi:
      'Kujdes dentar i përshtatur për fëmijë, në një ambient të ngrohtë dhe miqësor, për përvoja pa stres.',
    foto: 'https://images.unsplash.com/photo-1581056771107-24ca5f033842?w=400&h=250&fit=crop&auto=format',
    cmimi: '3,000 ALL',
  },
  {
    id: 8,
    titulli: 'Protetikë Dentare',
    pershkrimi:
      'Kurora, ura dhe proteza të personalizuara për të rikthyer funksionin dhe estetikën e dhëmbëve tuaj.',
    foto: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=250&fit=crop&auto=format',
    cmimi: '20,000 ALL',
  },
]

const ServicesContext = createContext(null)

export function ServicesProvider({ children }) {
  const [sherbimet, setSherbimet] = useState(() => {
    try {
      const saved = localStorage.getItem('dr_sherbimet_v2')
      return saved ? JSON.parse(saved) : defaultSherbimet
    } catch {
      return defaultSherbimet
    }
  })

  useEffect(() => {
    localStorage.setItem('dr_sherbimet_v2', JSON.stringify(sherbimet))
  }, [sherbimet])

  function shtoSherbim(sherbimi) {
    setSherbimet((prev) => [...prev, { ...sherbimi, id: Date.now() }])
  }

  function ndryshoSherbim(id, data) {
    setSherbimet((prev) =>
      prev.map((s) => (s.id === id ? { ...s, ...data } : s))
    )
  }

  function fshijSherbim(id) {
    setSherbimet((prev) => prev.filter((s) => s.id !== id))
  }

  return (
    <ServicesContext.Provider
      value={{ sherbimet, shtoSherbim, ndryshoSherbim, fshijSherbim }}
    >
      {children}
    </ServicesContext.Provider>
  )
}

export function useSherbimet() {
  return useContext(ServicesContext)
}
