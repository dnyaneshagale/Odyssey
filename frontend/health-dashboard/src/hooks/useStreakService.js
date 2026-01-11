import { useEffect } from 'react';
import { useAuth, useUser } from '@clerk/clerk-react';
import streakService from '../services/streakService';

/**
 * Custom hook to initialize the streak service with Clerk authentication
 * Use this hook in components that need to interact with the streak service
 */
export const useStreakService = () => {
  const { getToken, isLoaded, isSignedIn } = useAuth();
  const { user } = useUser();

  useEffect(() => {
    if (isLoaded && isSignedIn) {
      // Set the authentication token getter for the streak service
      streakService.setAuthTokenGetter(async () => {
        return await getToken();
      });

      // Initialize user in backend - this will save user to MongoDB
      streakService.initializeUser().then((result) => {
        if (result?.success) {
          console.log('✅ User data saved to MongoDB:', result.user);
        }
      }).catch((error) => {
        console.error('❌ Failed to save user to MongoDB:', error);
      });
    }
  }, [isLoaded, isSignedIn, getToken]);

  return {
    streakService,
    user,
    isLoaded,
    isSignedIn
  };
};

export default useStreakService;
