type mdToElementTag = 'i' | 'font' | 'a' | 'p' | 'b' | 'code' | 'strong';
type mdToElementType = 'text' | 'element';

type mdToElementShape = {
    props: {
        href: string;
        color: string;
    },
    tag: mdToElementTag,
    type: mdToElementType,
    value: string;
    children: mdToElementShape[]
}

export type {
    mdToElementShape
}