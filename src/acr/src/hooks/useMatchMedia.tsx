import { useState, useEffect } from 'react';

/**
 * useMatchMedia
 *
 * usage:
 *   const matches = useMatchMedia("(min-width: 900px)")
 *   matches will be true or false
 *
 * the format of the string is important, eg, needs ()'s
 * see https://developer.mozilla.org/en-US/docs/Web/API/Window/matchMedia
 * @param  {String} media : media query to match
 * @return {Boolean} true if it matches, false if it doesn't
 */

const getMatches = (query: string): boolean => {
  // Prevents SSR issues
  if (typeof window !== 'undefined') {
    return window.matchMedia(query).matches;
  }
  return false;
};

export default function useMatchMedia(media: string, isEditing?: boolean): boolean | null {
  const [matches, setMatches] = useState<boolean>(getMatches(media));

  const [clientReady, setClientReady] = useState<boolean>(false);

  // define mediaQueryList inside effect because of server rendering/hydration
  // https://github.com/gatsbyjs/gatsby/issues/14601
  // we need to render again when the client loads
  useEffect(() => {
    if (isEditing) {
      return;
    }

    const mediaQueryList = window.matchMedia(media);
    setMatches(mediaQueryList.matches);

    const handleMatchChange = (event: MediaQueryListEvent) => setMatches(event.matches);
    mediaQueryList.addEventListener('change', handleMatchChange);
    return () => mediaQueryList.removeEventListener('change', handleMatchChange);
  }, [media, isEditing]);

  useEffect(() => {
    setClientReady(true);
  }, []);

  return clientReady ? matches : null;
}
