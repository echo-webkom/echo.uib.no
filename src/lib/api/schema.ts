const GET_EVENT_PATHS = `
    query {
        eventCollection(limit: 10) {
            items {
                slug
            }
        }
    }
`;

const GET_N_EVENTS = `
    query ($n: Int!) {
        eventCollection(limit: $n, order: date_ASC) {
            items {
                title
                slug
                date
                spots
                body
                image {
                    url
                }
                location
                sys {
                    firstPublishedAt
                }
                author {
                    authorName
                }
            }
        }
    }
`;

const GET_EVENT_BY_SLUG = `
    query ($slug: String!) {
        eventCollection(where: { slug: $slug }) {
            items {
                title
                slug
                date
                spots
                body
                image {
                    url
                }
                location
                sys {
                    firstPublishedAt
                }
                author {
                    authorName
                }
            }
        }
    }
`;

const GET_POST_PATHS = `
    query {
        postCollection(limit: 10) {
            items {
                slug
            }
        }
    }
`;

const GET_N_POSTS = `
    query ($n: Int!) {
        postCollection(limit: $n) {
            items {
                title
                slug
                body
                author {
                    authorName
                }
                sys {
                    firstPublishedAt
                }
                thumbnail {
                    url
                }
            }
        }
    }
`;

const GET_POST_BY_SLUG = `
    query ($slug: String!) {
        postCollection(where: { slug: $slug }) {
            items {
                title
                slug
                body
                author {
                    authorName
                }
                sys {
                    firstPublishedAt
                }
                thumbnail {
                    url
                }
            }
        }
    }
`;

const GET_N_BEDPRESES = `
    query ($n: Int!) {
        bedpresCollection(limit: $n, order: date_ASC) {
            items {
                title
                slug
                date
                spots
                body
                logo {
                    url
                }
                location
                author {
                    authorName
                }
                companyLink
                additionalQuestionsCollection {
                    items {
                        questionText
                        inputType
                        alternatives
                    }
                }
                sys {
                    firstPublishedAt
                }
                registrationTime
            }
        }
    }
`;

const GET_BEDPRES_BY_SLUG = `
    query ($slug: String!) {
        bedpresCollection(where: { slug: $slug }) {
            items {
                title
                slug
                date
                spots
                body
                logo {
                    url
                }
                location
                author {
                    authorName
                }
                companyLink
                additionalQuestionsCollection {
                    items {
                        questionText
                        inputType
                        alternatives
                    }
                }
                sys {
                    firstPublishedAt
                }
                registrationTime
            }
        }
    }
`;

const GET_N_MINUTES = `
    query ($n: Int!) {
        meetingMinuteCollection(limit: $n, order: date_DESC) {
            items {
                date
                document {
                  url
                }
                allmote
            }
        }
    }
`;

const GET_STUDENTGROUPS_BY_TYPE = `
    query ($type: String!) {
        studentGroupCollection(order: name_ASC, limit: 10, where: { groupType: $type }) {
            items {
                name
                info
                rolesCollection(limit: 20) {
                    items {
                        name
                        membersCollection(limit: 15) {
                            items {
                                name
                                picture {
                                    url
                                }
                            }
                        }
                    }
                }
            }
        }
    }
`;

export {
    GET_EVENT_PATHS,
    GET_N_EVENTS,
    GET_EVENT_BY_SLUG,
    GET_POST_PATHS,
    GET_N_POSTS,
    GET_POST_BY_SLUG,
    GET_N_BEDPRESES,
    GET_BEDPRES_BY_SLUG,
    GET_N_MINUTES,
    GET_STUDENTGROUPS_BY_TYPE,
};
