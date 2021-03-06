import React from 'react';
import NextLink from 'next/link';
import Image from 'next/image';
import { Flex, SimpleGrid, Text, LinkBox, LinkOverlay, Icon } from '@chakra-ui/react';

import { FiMail } from 'react-icons/fi';
import { FaFacebook, FaInstagram, FaGithub } from 'react-icons/fa';

const echoLogoWhite = '/echo-logo-text-only-white.png';

const Footer = (): JSX.Element => {
    const color = 'teal.400';

    return (
        <SimpleGrid
            columns={[1, 2, 3]}
            bg="bg2Dark"
            justifyItems="center"
            alignItems="center"
            spacingX="3em"
            spacingY="3em"
            w="100%"
            py="2em"
            px="1em"
            mt="5em"
            bottom="0"
            pos="absolute"
            data-testid="footer"
        >
            <SimpleGrid columns={2} spacing="3">
                <LinkBox transition=".1s ease-out" _hover={{ transform: 'scale(1.05)' }} color={color}>
                    <NextLink href="https://facebook.com/groups/informatikk" passHref>
                        <LinkOverlay isExternal>
                            <Icon as={FaFacebook} boxSize={20} />
                        </LinkOverlay>
                    </NextLink>
                </LinkBox>
                <LinkBox transition=".1s ease-out" _hover={{ transform: 'scale(1.05)' }} color={color}>
                    <NextLink href="https://github.com/echo-webkom/echo.uib.no" passHref>
                        <LinkOverlay isExternal>
                            <Icon as={FaGithub} boxSize={20} />
                        </LinkOverlay>
                    </NextLink>
                </LinkBox>
                <LinkBox transition=".1s ease-out" _hover={{ transform: 'scale(1.05)' }} color={color}>
                    <NextLink href="mailto:echo@uib.no" passHref>
                        <LinkOverlay isExternal>
                            <Icon as={FiMail} boxSize={20} />
                        </LinkOverlay>
                    </NextLink>
                </LinkBox>
                <LinkBox transition=".1s ease-out" _hover={{ transform: 'scale(1.05)' }} color={color}>
                    <NextLink href="https://instagram.com/echo_uib" passHref>
                        <LinkOverlay isExternal>
                            <Icon as={FaInstagram} boxSize={20} />
                        </LinkOverlay>
                    </NextLink>
                </LinkBox>
            </SimpleGrid>
            <Flex display={['none', null, 'block']}>
                <Image alt="echo" width={300} height={146} src={echoLogoWhite} />
            </Flex>
            <SimpleGrid columns={1} spacing="1" maxWidth="200px" textAlign="center">
                <LinkBox>
                    <NextLink href="mailto:echo@uib.no" passHref>
                        <LinkOverlay isExternal>
                            <Text color={color}>echo(at)uib.no</Text>
                        </LinkOverlay>
                    </NextLink>
                </LinkBox>
                <Text color={color}>Thormøhlensgate 55</Text>
                <Text color={color}>5006 Bergen</Text>
                <Text color={color}>Org nr: 998 995 035</Text>
            </SimpleGrid>
        </SimpleGrid>
    );
};

export default Footer;
