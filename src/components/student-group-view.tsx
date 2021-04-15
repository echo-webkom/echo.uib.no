import { Heading, Wrap, WrapItem } from '@chakra-ui/react';
import Markdown from 'markdown-to-jsx';
import React from 'react';
import { Profile, Role, StudentGroup } from '../lib/types';
import MapMarkdownChakra from '../markdown';
import MemberProfile from './member-profile';

const StudentGroupView = ({ group }: { group: StudentGroup }): JSX.Element => {
    return (
        <>
            <Markdown options={MapMarkdownChakra}>{group.info}</Markdown>
            <Heading size="lg" mb="5">
                Medlemmer
            </Heading>
            <Wrap spacing={['1em', null, '2.5em']} justify="center">
                {group.roles.map((role: Role) =>
                    role.members.map((profile: Profile) => (
                        <WrapItem>
                            <MemberProfile profile={profile} role={role.name} />
                        </WrapItem>
                    )),
                )}
            </Wrap>
        </>
    );
};

export default StudentGroupView;
