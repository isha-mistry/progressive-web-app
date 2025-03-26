'use client';

import { useEffect, useState } from 'react';

export default function StaticNotification() {
  const [permission, setPermission] = useState(Notification?.permission);

  async function requestPermission() {
    if (!('Notification' in window)) {
      console.log('Notifications not supported in this browser');
      return;
    }

    const result = await Notification.requestPermission();
    setPermission(result);
  }

  function showNotification() {
    if (permission !== 'granted') {
      requestPermission();
      return;
    }

    new Notification('Hello World!', {
      body: 'This is a static notification',
      icon: '/icon.png',
    });
  }

  useEffect(() => {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/sw.js')
        .then(registration => {
          console.log('Service Worker registered');
        })
        .catch(error => {
          console.error('Service Worker registration failed:', error);
        });
    }
  }, []);

  return (
    <button 
      onClick={showNotification}
      className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
    >
      Show Notification
    </button>
  );
}