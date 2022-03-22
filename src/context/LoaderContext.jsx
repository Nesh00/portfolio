import { createContext, useState } from 'react';

export const LoaderContext = createContext({ isLoaded: false });

const LoaderContextProvider = (props) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <LoaderContext.Provider
      value={{
        isLoaded,
        setIsLoaded,
      }}
    >
      {props.children}
    </LoaderContext.Provider>
  );
};

export default LoaderContextProvider;
