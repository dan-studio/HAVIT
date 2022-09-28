import styled from "styled-components";
import MemberInfo from "../cards/MemberInfo";

const List = ({ data, type, memberList}) => {
    console.log(memberList)
    return (
        <Container>
            <div className="title">
                {data?.title ? (
                    <>
                        {data.title}
                        <icon>▼</icon>
                    </>
                ) : (
                    <></>
                )}
            </div>
            <aside>
                {memberList?.map((item, idx)=>
                <MemberInfo {...item} width={79} height={30} key={idx}/>
                )}
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
        font-size: 14px;
        line-height: 22px;

        color: ${({ theme }) => theme.color.black};
    }
    & > aside {
        margin-top: 1rem;
        display: flex;
        flex-wrap: wrap;
        gap: 1rem 0.5rem;
    }
    icon {
        font-size: 8px;
        margin-left: 0.25rem;
    }
`;
