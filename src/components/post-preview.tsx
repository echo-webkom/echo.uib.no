import React from 'react';
import NextLink from 'next/link';
import { Text, Box, Heading, useColorModeValue, LinkBox, LinkOverlay } from '@chakra-ui/react';
import removeMD from 'remove-markdown';
import { Post } from '../lib/api/post';

const PostPreview = ({ post }: { post: Post }): JSX.Element => {
    const authorBg = useColorModeValue('yellow.400', 'yellow.200');
    const hoverColor = useColorModeValue('gray.200', 'gray.700');
    const bgColor = useColorModeValue('gray.50', 'gray.800');
    return (
        <LinkBox w={['100%', null, null, null, '24em']} data-testid={post.slug}>
            <NextLink href={`/posts/${post.slug}`} passHref>
                <LinkOverlay>
                    <Box
                        h="15em"
                        textAlign="left"
                        px="2em"
                        pb="10em"
                        bg={bgColor}
                        position="relative"
                        overflow="hidden"
                        _hover={{ backgroundColor: hoverColor }}
                    >
                        <Heading pt="1rem" size="lg" mb="1em" noOfLines={[2, null, null, 3]}>
                            {post.title}
                        </Heading>
                        <Text fontStyle="italic">{`«${removeMD(post.body.slice(0, 100))} ...»`}</Text>
                        <Text
                            fontSize="md"
                            fontWeight="bold"
                            pos="absolute"
                            bottom="0"
                            right="8"
                            color="black"
                            bg={authorBg}
                            py="0.5rem"
                            px="1rem"
                        >
                            {post.author}
                        </Text>
                    </Box>
                </LinkOverlay>
            </NextLink>
        </LinkBox>
    );
};

export default PostPreview;
