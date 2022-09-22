import Splash from "@pages/Splash";
import Start from "@pages/Start";
import Group from "@pages/group/Group";
import Signin from "../pages/Signin";
import Signup from "../pages/Signup";
import PageNotFound from "../pages/PageNotFound";
import Mypage from "../pages/Mypage";
import MypageEdit from "./../pages/MypageEdit";
import GroupDetail from "@pages/group/Detail";
import GroupCreate from "@pages/group/Create";

//route 등록은 이곳에서 해주시면 됩니다.
const pages = [
  {
    path: "/splash",
    title: "스플래쉬",
    icon: "",
    screen: Splash,
    isMenu: true,
  },
  {
    path: "/pagenotfound",
    title: "404",
    icon: "",
    screen: PageNotFound,
  },
  {
    path: "/startpage",
    title: "시작 페이지",
    icon: "",
    screen: Start,
    isMenu: true,
  },
  {
    path: "/signin",
    title: "로그인",
    icon: "",
    screen: Signin,
    isMenu: true,
  },
  {
    path: "/signup",
    title: "회원가입",
    icon: "",
    screen: Signup,
    isMenu: true,
  },
  {
    path: "/group",
    title: "그룹",
    screen: Group,
    child: [
      {
        path: "/detail/:id",
        title: "샘플 자식 리스트",
        screen: GroupDetail,
      },
      {
        path: "/create",
        title: "샘플 자식 리스트",
        screen: GroupCreate,
      },
    ],
  },
  {
    path: "/mypage",
    title: "마이페이지",
    screen: Mypage,
    icon: "",
    isMenu: true,
    child: [
      {
        path: "/edit",
        title: "마이페이지 수정",
        screen: MypageEdit,
        isMenu: true,
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
