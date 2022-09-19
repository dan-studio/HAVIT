import Start from "../pages/Start";
import Login from "../pages/Login";

//route 등록은 이곳에서 해주시면 됩니다.
const pages = [
    // {
    //     path: "/sample",
    //     title: "샘플",
    //     icon: PicCenterOutlined,
    //     isMenu: true,
    //     childe: [
    //         {
    //             path: "/list",
    //             title: "샘플 자식 리스트",
    //             screen: SampleListIndex,
    //             isMenu: true,
    //         },
    //         {
    //             path: "/post/:id",
    //             title: "샘플등록(pathvariable)",
    //             screen: SampleDetail,
    //             isMenu: true,
    //         },
    //     ],
    // },
    {
        path: "/splash",
        title: "스플래쉬",
        icon: '',
        screen: Start,
        isMenu: true,
    },
    {
        path: "/login",
        title: "로그인",
        icon: '',
        screen: Login,
        isMenu: true,
    },
];
export const useCustomRoute = () => {
    const menus = pages?.filter((v) => !!v.isMenu);
    const routes = getAllPath(pages);
    return { routes, menus };
};

const getAllPath = (child = []) => {
    const result = [];

    child?.forEach((item) => {
        result.push(item);
        if (item?.child) {
            const childrens = getAllPath(item?.child).map((el) => ({
                ...el,
                path: `${item.path}${el.path}`,
            }));
            result.push(...childrens);
        }
    });
    return result;
};
