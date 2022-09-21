import styled from "styled-components";
import MemberInfo from "../cards/MemberInfo";

const List = ({ data, type }) => {
    return (
        <Container>
            <div className="title">
                {data?.title ? <>{data.title}</> : <></>}
            </div>
            <aside>
                <MemberInfo width={79} height={30} />
                <MemberInfo width={79} height={30} />
                <MemberInfo width={79} height={30} />
                <MemberInfo width={79} height={30} />
                <MemberInfo width={79} height={30} />
                <MemberInfo width={79} height={30} />
                <MemberInfo width={79} height={30} />
                <MemberInfo width={79} height={30} />
            </aside>
        </Container>
    );
};

export default List;

const Container = styled.div`
    width: 100%;
    & > .title {
        font-family: "Inter";
        font-style: normal;
        font-weight: 700;
        font-size: 18px;
        line-height: 22px;

        color: ${({ theme }) => theme.color.black};
    }
    & > aside {
        margin-top: 1rem;
        display: flex;
        flex-wrap: wrap;
        gap: 1rem 0.5rem;
    }
`;
