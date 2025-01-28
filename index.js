```javascript
// pages/about.js
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export default function About() {
  const router = useRouter();
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    // Wait for the router to be ready before accessing its properties
    const handleRouteChange = () => {
        setIsReady(true);
    };
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router]);

  if (!isReady) {
    return <div>Loading...</div>; // Show a loading indicator while the router is not ready
  }

  return (
    <div>
      <h1>About Page</h1>
      <button onClick={() => router.push('/')}>Back to Home</button>
    </div>
  );
}
```