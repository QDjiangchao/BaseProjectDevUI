const getters = {
  userInfo: state => state.user.userInfo,
  token: state => state.user.token,
  roles: state => state.user.roles,
  permission: state => state.user.permission,
  menu: state => state.user.menu,
  menuId: state => state.user.menuId,
  menuAll: state => state.user.menuAll,
}
export default getters
