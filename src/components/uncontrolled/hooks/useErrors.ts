import { RefObject, useEffect, useState } from 'react';

export const useErrors = (
  formRefs: RefObject<
    Record<string, HTMLInputElement | HTMLSelectElement | null>
  >
) => {
  const [localErrors, setLocalErrors] = useState<
    Record<string, { message: string }>
  >({});

  useEffect(() => {
    Object.entries(formRefs.current).forEach(([name, ref]) => {
      if (!ref) return;

      const handleInput = () => {
        setLocalErrors(prev =>
          Object.fromEntries(
            Object.entries(prev).filter(([key]) => key !== name)
          )
        );
      };

      ref.addEventListener('input', handleInput);
      return () => ref.removeEventListener('input', handleInput);
    });
  }, [formRefs]);

  return {
    localErrors,
    setLocalErrors,
  };
};
