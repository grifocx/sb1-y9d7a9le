import { useCallback } from 'react';

export function useNavigate() {
  return useCallback((path: string) => {
    // Add a small delay to allow state updates and toasts to complete
    setTimeout(() => {
      window.location.href = path;
    }, 100);
  }, []);
}