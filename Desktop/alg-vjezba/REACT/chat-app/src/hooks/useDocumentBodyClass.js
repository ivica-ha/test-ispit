import { useEffect } from 'react'

export default function useDocumentBodyClass(className) {
  useEffect(() => {
    const classList = document.body.classList
    if (!classList.contains(className)) {
      classList.add(className)
      return () => document.body.classList.remove(className)
    }
  }, [className])
}