/* eslint-disable react/jsx-props-no-spreading */
import type { AppProps } from 'next/app';
import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import NextNProgress from 'nextjs-progressbar';
import { useRouter } from 'next/router';
import Fonts from '../styles/fonts';
import theme from '../styles/theme';

const App = ({ Component, pageProps }: AppProps): JSX.Element => {
    const router = useRouter();

    return (
        <ChakraProvider theme={theme}>
            <NextNProgress
                color="#29D"
                startPosition={0.15}
                stopDelayMs={200}
                height={4}
                options={{ showSpinner: false }}
            />
            <Fonts />
            <Component {...pageProps} key={router} />
        </ChakraProvider>
    );
};

export default App;
