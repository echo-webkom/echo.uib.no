import React from 'react';
import {
    LinkBox,
    LinkOverlay,
    Box,
    Center,
    Text,
    Flex,
    Heading,
    Spacer,
    useColorModeValue,
    Avatar,
} from '@chakra-ui/react';
import NextLink from 'next/link';
import { format } from 'date-fns';

import { Bedpres } from '../lib/types';

const BedpresPreview = ({ bedpres, testid }: { bedpres: Bedpres; testid?: string }): JSX.Element => {
    const hoverColor = useColorModeValue('gray.100', 'gray.800');

    return (
        <LinkBox data-testid={testid}>
            <Box display="block" p={[0, null, null, null, 5]} _hover={{ backgroundColor: hoverColor }}>
                <Flex verticalAlign="middle">
                    <Avatar size="xl" src={bedpres.logoUrl} alt="firmalogo" />
                    <Center ml="2em">
                        <NextLink href={`/bedpres/${bedpres.slug}`} passHref>
                            <LinkOverlay>
                                <Heading display={['none', 'block']} fontWeight="regular" size="lg">
                                    {bedpres.title}
                                </Heading>
                            </LinkOverlay>
                        </NextLink>
                    </Center>
                    <Spacer />
                    <Center>
                        <Text>{format(new Date(bedpres.date), 'dd. MMM yyyy')}</Text>
                    </Center>
                </Flex>
            </Box>
        </LinkBox>
    );
};

BedpresPreview.defaultProps = {
    testid: null,
};

export default BedpresPreview;