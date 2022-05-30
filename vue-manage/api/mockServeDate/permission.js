import Mock from "mockjs";

export default {
  getMenu: (config) => {
    const { username, password } = JSON.parse(config.body);
    console.log(JSON.parse(config.body));
    // 先判断用户是否存在
    // 判断账号和密码是否对应
    if (username === "admin" && password === "admin") {
      return {
        code: 20000,
        data: {
          menu: [
            // {
            //     path: '/',
            //     name: 'home',
            //     label: '首页',
            //     icon: 's-home',
            //     url: 'home/index'
            // },
            {
              path: "/",
              name: "vueHome",
              label: "首页",
              icon: "s-home",
              url: "Home/index",
            },
            // {
            //     path: '/mall',
            //     name: 'mall',
            //     label: '商品管理',
            //     icon: 'video-play',
            //     url: 'mall/index.vue'
            // },
            {
              path: "/mall",
              name: "vueMall",
              label: "商品管理",
              icon: "video-play",
              //   url: "MallManage/MallManage",
              url: "Mall/index",
            },
            // {
            //     path: '/user',
            //     name: 'user',
            //     label: '用户管理',
            //     icon: 'user',
            //     url: 'user/index'
            // },
            {
              path: "/user",
              name: "vueUser",
              label: "用户管理",
              icon: "user",
              //   url: "UserManage/UserManage",
              url: "User/index",
            },
            // {
            //     label: '其他',
            //     name: 'other',
            //     icon: 'location',
            //     children: [
            //         {
            //             path: '/page1',
            //             name: 'page1',
            //             label: '页面1',
            //             icon: 'setting',
            //             url: 'other/pageOne.vue'
            //         },
            //         {
            //             path: '/page2',
            //             name: 'page2',
            //             label: '页面2',
            //             icon: 'setting',
            //             url: 'other/pageTwo.vue'
            //         }
            //     ]
            // }
            {
              path: "/other",
              label: "其他",
              icon: "location",
              children: [
                {
                  path: "/page1",
                  name: "vuePageOne",
                  label: "页面1",
                  icon: "setting",
                  url: "Other/pageOne.vue",
                },
                {
                  path: "/page2",
                  name: "vuePageTwo",
                  label: "页面2",
                  icon: "setting",
                  url: "Other/pageTwo.vue",
                },
              ],
            },
          ],
          token: Mock.Random.guid(),
          message: "获取成功",
        },
      };
    } else if (username === "1" && password === "1") {
      return {
        code: 20000,
        data: {
          menu: [
            // {
            //   path: "/",
            //   name: "home",
            //   label: "首页",
            //   icon: "s-home",
            //   url: "home/index",
            // },
            // {
            //   path: "/mall",
            //   name: "mall",
            //   label: "商品管理",
            //   icon: "video-play",
            //   url: "mall/index",
            // },
            {
              path: "/",
              name: "vueHome",
              label: "首页",
              icon: "s-home",
              url: "Home/index",
            },
            {
              path: "/mall",
              name: "vueMall",
              label: "商品管理",
              icon: "video-play",
              //   url: "MallManage/MallManage",
              url: "Mall/index",
            },
          ],
          token: Mock.Random.guid(),
          message: "获取成功",
        },
      };
    } else {
      return {
        code: -999,
        data: {
          message: "密码错误",
        },
      };
    }
  },
};
