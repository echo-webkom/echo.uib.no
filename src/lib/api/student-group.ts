import { Pojo, decodeType, record, array, string, union, nil } from 'typescript-json-decoder';
import API from './api';
import handleError from './errors';
import { GET_STUDENTGROUPS_BY_TYPE } from './schema';

export type Profile = decodeType<typeof profileDecoder>;
const profileDecoder = (value: Pojo) => {
    const baseDecoder = record({
        name: string,
    });

    const pictureUrlDecoder = record({
        picture: union(
            record({
                url: string,
            }),
            nil,
        ),
    });

    return {
        ...baseDecoder(value),
        pictureUrl: pictureUrlDecoder(value).picture?.url || null,
    };
};

export type Role = decodeType<typeof roleDecoder>;
const roleDecoder = (value: Pojo) => {
    const baseDecoder = record({
        name: string,
    });

    const profileListDecoder = record({
        membersCollection: record({
            items: array(profileDecoder),
        }),
    });

    return {
        ...baseDecoder(value),
        members: profileListDecoder(value).membersCollection.items || [],
    };
};

export type StudentGroup = decodeType<typeof studentGroupDecoder>;
const studentGroupDecoder = (value: Pojo) => {
    const baseDecoder = record({
        name: string,
        info: string,
    });

    const roleListDecoder = record({
        rolesCollection: record({
            items: array(roleDecoder),
        }),
    });
    return {
        ...baseDecoder(value),
        roles: roleListDecoder(value).rolesCollection.items,
    };
};

const studentGroupListDecoder = array(studentGroupDecoder);

export const StudentGroupAPI = {
    getStudentGroupsByType: async (
        type: string,
    ): Promise<{ studentGroups: Array<StudentGroup> | null; error: string | null }> => {
        try {
            const { data } = await API.post('', {
                query: GET_STUDENTGROUPS_BY_TYPE,
                variables: {
                    type,
                },
            });

            return {
                studentGroups: studentGroupListDecoder(data.data.studentGroupCollection.items),
                error: null,
            };
        } catch (error) {
            return {
                studentGroups: [],
                error: handleError(error.response.status),
            };
        }
    },
};
