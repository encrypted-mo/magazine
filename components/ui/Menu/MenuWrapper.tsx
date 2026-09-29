import { useCallback, useEffect, useMemo, useRef, useState } from 'react'

import { MenuContext } from './use-menu-context'

const MenuWrapper = ({ children }: { children: React.ReactNode }) => {
  const [isVisible, setIsVisible] = useState(false)
  const menuWrapperRef = useRef<HTMLDivElement>(null)

  const toggle = useCallback(() => {
    setIsVisible((oldVisible) => !oldVisible)
  }, [])

  useEffect(() => {
    if (!isVisible) return

    const onOutsideClick = (e: MouseEvent) => {
      const target = e.target as Element | null

      if (target?.closest?.('[data-menu-content]')) {
        return
      }

      if (
        menuWrapperRef.current &&
        !menuWrapperRef.current.contains(e.target as Node)
      ) {
        setIsVisible(false)
      }
    }

    document.addEventListener('click', onOutsideClick)

    return () => {
      document.removeEventListener('click', onOutsideClick)
    }
  }, [isVisible])

  const value = useMemo(
    () => ({
      isVisible,
      toggle,
      menuWrapperRef,
    }),
    [isVisible, toggle]
  )

  return (
    <MenuContext.Provider value={value}>
      <div className="relative" ref={menuWrapperRef}>
        {children}
      </div>
    </MenuContext.Provider>
  )
}

export default MenuWrapper
