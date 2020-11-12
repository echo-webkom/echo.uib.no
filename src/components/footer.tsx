import React from 'react';
import { Image, Box, SimpleGrid, Text, useColorModeValue } from '@chakra-ui/core';

import { FiMail } from 'react-icons/fi';
import { FaFacebook, FaTwitter, FaInstagram, FaGithub } from 'react-icons/fa';
import echoLogoBlack from '../assets/echo-logo-very-wide-text-only.png';
import echoLogoWhite from '../assets/echo-logo-very-wide-text-only-white.png';

const Footer = (): JSX.Element => {
    const logo = useColorModeValue(echoLogoBlack, echoLogoWhite);
    const bg = useColorModeValue('gray.100', 'gray.900');
    const borderBg = useColorModeValue('mardiGras.400', 'naplesYellow.400');

    return (
        <SimpleGrid
            columns={[1, 2, 3]}
            justifyItems="center"
            alignItems="center"
            spacingX="3em"
            spacingY="3em"
            borderTopWidth="0.1em"
            borderTopColor={borderBg}
            bgColor={bg}
            w="100%"
            pt="4em"
            pb="2em"
            pl="1em"
            pr="1em"
            mt="5em"
            bottom="0"
            pos="absolute"
        >
            <SimpleGrid columns={2} spacing="3">
                <Box transition=".1s ease-out" _hover={{ transform: 'scale(1.05)' }} color={borderBg}>
                    <FaFacebook size="4em" color={borderBg} />
                </Box>
                <Box transition=".1s ease-out" _hover={{ transform: 'scale(1.05)' }} color={borderBg}>
                    <FaInstagram size="4em" />
                </Box>
                <Box transition=".1s ease-out" _hover={{ transform: 'scale(1.05)' }} color={borderBg}>
                    <FaTwitter size="4em" color={borderBg} />
                </Box>
                <Box transition=".1s ease-out" _hover={{ transform: 'scale(1.05)' }} color={borderBg}>
                    <FaGithub size="4em" color={borderBg} />
                </Box>
            </SimpleGrid>
            <Image display={['none', null, 'block']} htmlWidth="300px" fit="contain" src={logo} />
            <SimpleGrid columns={1} spacing="3" fontSize="lg" maxWidth="170px" textAlign="center">
                <SimpleGrid columns={2} spacing="2" alignItems="center" color={borderBg}>
                    <FiMail size="2em" />
                    <Text color={borderBg}>echo@uib.no</Text>
                </SimpleGrid>
                <Text color={borderBg}>Thormøhlensgate 55</Text>
                <Text color={borderBg}>5069 Bergen</Text>
                <Text color={borderBg}>Org nr: 000 000 000</Text>
            </SimpleGrid>
        </SimpleGrid>
    );
};

export default Footer;
