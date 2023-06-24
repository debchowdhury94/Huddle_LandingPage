import { styled } from "styled-components";

export const Flex = styled.div`
    display: flex;
    aligh-items: center;

    & > div,
    & > ul {
        flex: 1;
    }
`