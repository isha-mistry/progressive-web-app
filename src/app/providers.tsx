'use client'

import { useEffect } from 'react'
import { registerPushNotifications } from '@/utils/push-notifications'

export function Providers({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Initialize push notifications
    if ('serviceWorker' in navigator) {
      registerPushNotifications()
        .then((subscription) => {
          console.log('Push notification registered:', subscription)
        })
        .catch((error) => {
          console.error('Push notification initialization error:', error)
        })
    }
  }, [])

  return <>{children}</>
}