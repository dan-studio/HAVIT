import Detail from "../pages/Detail";
import Group from "../pages/Group";
import Write from "../pages/Write";

//route 등록은 이곳에서 해주시면 됩니다.
<<<<<<< HEAD
const pages = [{}];

=======
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
                ]

            }

        ],
    },
];
>>>>>>> dabd92731f5135577828d6ea75c77ba00f7afd26
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
