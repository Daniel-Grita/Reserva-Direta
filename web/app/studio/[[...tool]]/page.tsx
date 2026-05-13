'use client'

import { NextStudio } from 'next-sanity/studio'
import { useEffect, useState } from 'react'
import config from '../../../sanity.config' 

export default function StudioPage() {
  const [mounted, setMounted] = useState(false)

  // This prevents the "window is not defined" error 
  // by waiting for the browser to finish loading.
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return <NextStudio config={config} />
}