import Splash from '@pages/start/Splash';
import Start from '@pages/start/Start';
import Group from '@pages/group/Group';
import GroupDetail from '@pages/group/Detail';
import GroupCreate from '@pages/group/Create';
import GroupEdit from '@pages/group/Edit';
import Signin from '@pages/auth/Signin';
import Signup from '@pages/auth/Signup';
import PageNotFound from '@pages/PageNotFound';
import Mypage from '@pages/Mypage';
import Myprofile from '@pages/Myprofile';
import MyPwEdit from '@pages/MyPwEdit';
import Detail from '@pages/group/Detail';
import Write from '@pages/Write';
import Board from '@pages/Board';
import Main from '@pages/Main';
import Setting from '@pages/Setting'

//route 등록은 이곳에서 해주시면 됩니다.
const pages = [
  {
    path: '/main',
    title: '메인페이지',
    screen: Main,
    icon: '',
    isMenu: true,
    child: [],
  },

  {
    path: '/group',
    title: '그룹',
    screen: Group,
    icon: '',
    isMenu: true,
    child: [
      {
        path: '/:groupId',
        title: '샘플 자식 리스트',
        screen: Detail,
        isMenu: true,
        child: [
          {
            path: '/write',
            title: '샘플등록(pathvariable)',
            screen: Write,
            isMenu: true,
          },
          {
            path: '/:boardId',
            title: '샘플등록(pathvariable)',
            screen: Board,
            isMenu: true,
          },
        ],
      },
    ],
  },

  {
    path: '/',
    title: '스플래쉬',
    icon: '',
    screen: Splash,
    isMenu: true,
  },
  {
    path: '/pagenotfound',
    title: '404',
    icon: '',
    screen: PageNotFound,
  },
  {
    path: '/startpage',
    title: '시작 페이지',
    icon: '',
    screen: Start,
    isMenu: true,
  },
  {
    path: '/signin',
    title: '로그인',
    icon: '',
    screen: Signin,
    isMenu: true,
  },
  {
    path: '/signup',
    title: '회원가입',
    icon: '',
    screen: Signup,
    isMenu: true,
  },

  {
    path: '/group',
    title: '그룹',
    screen: Group,
    child: [
      {
        path: '/:groupId',
        title: '그룹 상세',
        screen: GroupDetail,
      },
      {
        path: '/create',
        title: '그룹 생성',
        screen: GroupCreate,
      },
      {
        path: '/edit',
        title: '그룹 수정',
        screen: GroupEdit,
      },
    ],
  },
  {
    path: '/setting',
    title: '환경설정',
    icon: '',
    screen: Setting,
    isMenu: true,
  },
  {
    path: '/mypage', // mypage
    title: '마이페이지',
    screen: Mypage,
    icon: '',
    isMenu: true,
    child: [
      {
        // 닉네임 / 한줄소개
        path: '/edit', // mypage/edit 
        title: '프로필 수정',
        screen: Myprofile,
        isMenu: true,
        child: [
          {
            path: '/private', // mypage/edit/private
            title: '개인정보 수정',
            screen: MyPwEdit,
            isMenu: true,
          },
        ],
      },
    ],
  },
];
export const useCustomRoute = () => {
  const menus = pages?.filter(v => !!v.isMenu);
  const routes = getAllPath(pages);
  return { routes, menus };
};
const getAllPath = (child = []) => {
  const result = [];

  child?.forEach(item => {
    result.push(item);
    if (item?.child) {
      const childrens = getAllPath(item?.child).map(el => ({
        ...el,
        path: `${item.path}${el.path}`,
      }));
      result.push(...childrens);
    }
  });
  return result;
};
