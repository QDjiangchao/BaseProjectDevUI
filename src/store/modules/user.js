import {setToken, removeToken} from '@/utils/auth'
import {setStore, getStore} from '@/utils/store'
import {isURL, validatenull} from '@/utils/validate'
import {
  loginByUsername,
  getUserInfo,
  logout,
  getButtons,
} from '@/api/user'


function addPath(ele, first) {
  const menu = {
    iconDefault: 'iconfont icon-caidan',
    props: {
      label: 'name',
      path: 'path',
      icon: 'source',
      children: 'children'
    }
  };
  const propsConfig = menu.props;
  const propsDefault = {
    label: propsConfig.label || 'name',
    path: propsConfig.path || 'path',
    icon: propsConfig.icon || 'icon',
    children: propsConfig.children || 'children'
  }
  const icon = ele[propsDefault.icon];
  ele[propsDefault.icon] = validatenull(icon) ? menu.iconDefault : icon;
  const isChild = ele[propsDefault.children] && ele[propsDefault.children].length !== 0;
  if (!isChild) ele[propsDefault.children] = [];
  if (!isChild && first && !isURL(ele[propsDefault.path])) {
    ele[propsDefault.path] = ele[propsDefault.path] + '/index'
  } else {
    ele[propsDefault.children].forEach(child => {
      addPath(child);
    })
  }
}

const user = {
  state: {
    userInfo: getStore({name: 'userInfo'}) || [{a: 1}],
    permission: getStore({name: 'permission'}) || {},
    roles: [],
    menu: getStore({name: 'menu'}) || [],
    menuId: getStore({name: 'menuId'}) || [],
    menuAll: getStore({name: 'menuAll'}) || [],
    token: getStore({name: 'token'}) || '',
  },
  actions: {
    testSet({commit}, userInfo) {
      return new Promise((resolve, reject) => {
        commit('SET_collapsed', '');
      })
    },
    //根据用户名登录
    LoginByUsername({commit}, userInfo) {
      return new Promise((resolve, reject) => {
        let data = {
          a: 1
        }
        commit('SET_USER_INFO', data);
        resolve();
        /*loginByUsername(userInfo.tenantId, userInfo.username, userInfo.password, userInfo.type, userInfo.key, userInfo.code, userInfo.companyId).then(res => {
          const data = res.data;
          if (data.error_description) {
          } else {
            commit('SET_TOKEN', data.access_token);
            commit('SET_TENANT_ID', data.tenant_id);
            commit('SET_USER_INFO', data);
          }
          resolve();
        }).catch(error => {
          reject(error);
        })*/
      })
    },
    GetButtons({commit}) {
      return new Promise((resolve) => {
        getButtons().then(res => {
          const data = res.data.data;
          commit('SET_PERMISSION', data);
          resolve();
        })
      })
    },
    GetUserInfo({commit}) {
      return new Promise((resolve, reject) => {
        getUserInfo().then((res) => {
          const data = res.data.data;
          commit('SET_ROLES', data.roles);
          resolve(data);
        }).catch(err => {
          reject(err);
        })
      })
    },
    // 登出
    LogOut({commit}) {
      return new Promise((resolve, reject) => {
        commit('SET_collapsed', '');
        commit('SET_MENUKEY', '');
        commit('SET_USER_INFO', {});
        resolve();
        /*logout().then(() => {
          commit('SET_TOKEN', '');
          commit('SET_MENU', []);
          commit('SET_MENU_ID', {});
          commit('SET_MENU_ALL', []);
          commit('SET_ROLES', []);
          commit('SET_USER_INFO', {});
          removeToken();
          resolve();
        }).catch(error => {
          reject(error)
        })*/
      })
    },
    //多账号判断
    FedLogOutFun({commit}) {
      return new Promise(resolve => {
        commit('SET_TOKEN_FUN', '');
        commit('SET_MENU_ID', {});
        commit('SET_MENU_ALL', []);
        commit('SET_MENU', []);
        commit('SET_ROLES', []);
        commit('SET_USER_INFO', {});
        resolve();
      })
    },
  },
  mutations: {
    SET_collapsed: (state, val) => {
      setStore({name: 'collapsed', content: val, type: 'session'})
    },
    SET_MENUKEY: (state, val) => {
      setStore({name: 'menuKey', content: val, type: 'session'})
    },
    SET_TOKEN_FUN: (state, token) => {
      state.token = token;
      setStore({name: 'token', content: state.token, type: 'session'})
    },
    SET_TOKEN: (state, token) => {
      setToken(token);
      state.token = token;
      setStore({name: 'token', content: state.token, type: 'session'})
    },
    SET_MENU_ID(state, menuId) {
      state.menuId = menuId;
      setStore({name: 'menuId', content: state.menuId, type: 'session'})
    },
    SET_MENU_ALL: (state, menuAll) => {
      state.menuAll = menuAll
      setStore({name: 'menuAll', content: state.menuAll, type: 'session'})
    },
    SET_TENANT_ID: (state, tenantId) => {
      state.tenantId = tenantId;
      setStore({name: 'tenantId', content: state.tenantId, type: 'session'})
    },
    SET_USER_INFO: (state, userInfo) => {
      state.userInfo = userInfo;
      setStore({name: 'userInfo', content: state.userInfo, type: 'session'})
    },
    SET_MENU: (state, menu) => {
      state.menu = menu;
      let menuAll = state.menuAll;
      if (!validatenull(menu)) {
        const obj = menuAll.filter(ele => ele.path === menu[0].path)[0];
        if (!obj) {
          menuAll = menuAll.concat(menu);
          state.menuAll = menuAll
        }
        setStore({name: 'menuAll', content: menuAll, type: 'session'})
      }
      setStore({name: 'menu', content: state.menu, type: 'session'})
    },
    SET_ROLES: (state, roles) => {
      state.roles = roles;
    },
    SET_PERMISSION: (state, permission) => {
      let result = [];

      function getCode(list) {
        list.forEach(ele => {
          if (typeof (ele) === 'object') {
            const chiildren = ele.children;
            const code = ele.code;
            if (chiildren) {
              getCode(chiildren)
            } else {
              result.push(code);
            }
          }
        })
      }

      getCode(permission);
      state.permission = {};
      result.forEach(ele => {
        state.permission[ele] = true;
      });
      setStore({name: 'permission', content: state.permission, type: 'session'})
    }
  }
}
export default user
