//route 등록은 이곳에서 해주시면 됩니다.
import Group from "@pages/group/Group";
const pages = [
    {
        path: "/group",
        title: "샘플",
        screen: Group,
        icon: "",
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
