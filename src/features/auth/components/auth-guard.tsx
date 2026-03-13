'use client'

import { usePathname, useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { useAuthStore } from '../auth-store'

export default function AuthGuard({ children }: { children: React.ReactNode }) {
  const { username } = useAuthStore()
  const router = useRouter()
  const pathname = usePathname()

  const [isChecking, setIsChecking] = useState(true)

  useEffect(() => {
    const isAuthenticated = !!username
    const isSignupPage = pathname === '/signup'

    if (!isAuthenticated && !isSignupPage) {
      router.replace('/signup')
    } else if (isAuthenticated && isSignupPage) {
      router.replace('/')
    } else {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setIsChecking(false)
    }

    return () => setIsChecking(true)
  }, [pathname, router, username])

  if (isChecking) return null

  return <>{children}</>
}
