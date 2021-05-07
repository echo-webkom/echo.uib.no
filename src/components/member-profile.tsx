import { chakra, Flex, FlexProps, Text, useBreakpointValue, VStack } from '@chakra-ui/react';
import { randomColor, isDark } from '@chakra-ui/theme-tools';
import Image from 'next/image';
import React from 'react';
import { Profile } from '../lib/api/student-group';
import theme from '../styles/theme';

const MemberImage = chakra(Image, {
    baseStyle: { borderRadius: '1em', maxH: 128, maxW: 128 },
    shouldForwardProp: (prop) => ['width', 'height', 'src', 'alt', 'quality'].includes(prop),
});

interface InitialProps extends FlexProps {
    name: string;
}

const ImageFallback = ({ name, ...rest }: InitialProps) => {
    const words = name.trim().split(' ');
    const initials =
        words.length >= 2 ? `${words[0].charAt(0)}${words[words.length - 1].charAt(0)}` : words[0].charAt(0);

    const bg = randomColor({ string: name });
    const color = isDark(bg)(theme) ? 'white' : 'gray.800';

    return (
        <Flex bg={bg} borderRadius="1em" justifyContent="center" alignItems="center" {...rest}>
            <Text color={color} fontSize="6em">
                {initials}
            </Text>
        </Flex>
    );
};

const MemberProfile = ({ profile, role }: { profile: Profile; role: string }): JSX.Element => {
    const size = useBreakpointValue([220, 256]);

    return (
        <VStack w={size} textAlign="center">
            {profile.pictureUrl && (
                <MemberImage
                    src={profile.pictureUrl}
                    alt={profile.name}
                    quality={100}
                    width={256}
                    height={256}
                    w={size}
                    h={size}
                />
            )}
            {!profile.pictureUrl && <ImageFallback name={profile.name} w={size} h={size} />}
            <Text fontWeight="bold" fontSize="2xl">
                {profile.name}
            </Text>
            <Text fontStyle="italic">{role}</Text>
        </VStack>
    );
};

export default MemberProfile;
