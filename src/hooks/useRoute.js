import Detail from "../pages/Detail";
import Group from "../pages/Group";
import Write from "../pages/Write";

//route 등록은 이곳에서 해주시면 됩니다.

const pages = [
    {
        path: "/group",
        title: "샘플",
        screen: Group,
        icon: "",
        isMenu: true,
        childe: [
            {
                path: "/detail",
                title: "샘플 자식 리스트",
                screen: Detail,
                isMenu: true,
                childe: [
                    {
                        path: "/write",
                        title: "샘플등록(pathvariable)",
                        screen: Write,
                        isMenu: true,
                    },
                ],
            },
        ],
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
