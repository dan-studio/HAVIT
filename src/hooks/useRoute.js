import Group from "@pages/group/Group";
import GroupDetail from "@pages/group/Detail";
import GroupCreate from "@pages/group/Create";
import GroupEdit from "@pages/group/Edit";
import Signin from "@pages/auth/Signin";
import Signup from "@pages/auth/Signup";
import Mypage from "@pages/main/Mypage";
import Myprofile from "@pages/main/Myprofile";
import Main from "@pages/main/Main";
import Setting from "@pages/Setting";
import Guide from "@pages/start/Guide";
import Write from "@pages/group/Write";
import MyPwEditor from "@pages/main/MyPwEditor";
import CertifyDetail from "@pages/group/certify/CertifyDetail";
import CoordinateConvert from "../components/kakao/CoordinateConvert";
import CertifyEdit from "../pages/group/certify/CertifyEdit";
import Notice from "../pages/notice/Notice";
import NoticeDetail from "../pages/notice/NoticeDetail";
import Inquiry from "../pages/inquiry/Inquiry";

//route 등록은 이곳에서 해주시면 됩니다.
const pages = [
  {
    path: "/",
    title: "메인",
    screen: Main,
  },
  {
    path: "/auth",
    title: "가이드",
    screen: Guide,
    child: [
      {
        path: "/signin",
        title: "로그인",
        screen: Signin,
      },
      {
        path: "/signup",
        title: "회원가입",
        screen: Signup,
      },
    ],
  },
  {
    path: "/group",
    title: "그룹",
    screen: Group,
    child: [
      {
        path: "/:groupId",
        title: "그룹 상세",
        screen: GroupDetail,
        child: [
          {
            path: "/write",
            title: "게시물 제작",
            screen: Write,
          },
          {
            path: "/:certifyId",
            title: "게시물 보기",
            screen: CertifyDetail,
            child: [
              {
                path: "/edit",
                title: "게시물 수정",
                screen: CertifyEdit,
              },
            ],
          },
        ],
      },
      {
        path: "/create",
        title: "그룹 생성",
        screen: GroupCreate,
      },
      {
        path: "/edit",
        title: "그룹 수정",
        child: [
          {
            path: "/:id",
            title: "그룹 수정",
            screen: GroupEdit,
          },
        ],
      },
    ],
  },
  {
    path: "/setting",
    title: "환경설정",
    icon: "",
    screen: Setting,
    child: [
      {
        path:"/notice",
        title: "공지사항",
        screen: Notice,
        child: [
          {
            path:'/:noticeId',
            title:'공지 상세',
            screen: NoticeDetail
          }
        ]
      },
      {
        path:"/inquiry",
        title: "문의하기",
        screen: Inquiry,
      }
    ]
  },
  {
    path: "/mypage", // mypage
    title: "마이페이지",
    screen: Mypage,
    child: [
      {
        // 닉네임 / 한줄소개
        path: "/edit", // mypage/edit
        title: "프로필 수정",
        screen: Myprofile,
        child: [
          {
            path: "/private", // mypage/edit/private
            title: "개인정보 수정",
            screen: MyPwEditor,
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
