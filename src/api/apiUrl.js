module.exports = {
  // menu start ---------------------------------------------------
  bladeSystemMenuList: '/api/blade-system/menu/list',
  bladeSystemMenuLazyList: '/api/blade-system/menu/lazy-list',
  bladeSystemMenuLazyMenuList: '/api/blade-system/menu/lazy-menu-list',
  bladeSystemMenuMenuList: '/api/blade-system/menu/menu-list',
  bladeSystemMenuTree: '/api/blade-system/menu/tree',
  bladeSystemMenuRemove: '/api/blade-system/menu/remove',
  bladeSystemMenuSubmit: '/api/blade-system/menu/submit',
  bladeSystemMenuDetail: '/api/blade-system/menu/detail',
  bladeSystemMenuTopMenu: '/api/blade-system/menu/top-menu',
  bladeSystemMenuRoutes: '/api/blade-system/menu/routes',
  // menu end ---------------------------------------------------

  // role start ---------------------------------------------------
  bladeSystemRoleList: '/api/blade-system/role/queryList',
  bladeSystemMenuGrantTree: '/api/blade-system/menu/grant-tree',
  bladeSystemRoleGrant: '/api/blade-system/role/grant',
  bladeSystemRoleRemove: '/api/blade-system/role/remove',
  bladeSystemRoleSubmit: '/api/blade-system/role/submit',
  bladeSystemMenuRoleTreeKeys: '/api/blade-system/menu/role-tree-keys',
  bladeSystemRoleTree: '/api/blade-system/role/queryTree',
  // role end ---------------------------------------------------

  // user start ---------------------------------------------------
  bladeAuthOauthToken: '/api/blade-auth/oauth/token',
  bladeAuthOauthWinxin: '/api/blade-auth/oauth/weixin',
  bladeAuthPhoneToken: '/api/blade-auth/phone/token',
  bindSocial: '/api/blade-auth/oauth/bindPhone',
  bladeAuthSmsToken: '/api/blade-auth/sms/token',
  bladeSystemMenuButtons: '/api/blade-system/menu/buttons',
  bladeAuthOauthCaptcha: '/api/blade-auth/oauth/captcha',
  bladeAuthOauthLogout: '/api/blade-auth/oauth/logout',
  bladeAuthOauthUserInfo: '/api/blade-auth/oauth/user-info',
  bladeAuthOauthClearCache: '/api/blade-auth/oauth/clear-cache',

  bladeUserPage: '/api/blade-user/page',
  bladeUserRemove: '/api/blade-user/remove',
  bladeUserSubmit: '/api/blade-user/submit',
  bladeUserUpdate: '/api/blade-user/update',
  bladeUserDetail: '/api/blade-user/detail',
  bladeUserInfo: '/api/blade-user/info',
  bladeUserResetPassword: '/api/blade-user/reset-password',
  bladeUserUpdatePassword: '/api/blade-user/update-password',
  bladeUserUpdateInfo: '/api/blade-user/update-info',
  bladeUserGrant: '/api/blade-user/grant',
  companydataQueryUserCompanyList: '/api/center-data/companydata/queryUserCompanyList',
  bladeUserQueryUserCompanyConfigPage: '/api/blade-user/queryUserCompanyConfigPage',
  bladeSystemDeptLazyTreeTwo:'/api/blade-system/dept/lazy-tree-two',
  bladeUserSaveUserCompanyConfig:'/api/blade-user/saveUserCompanyConfig',
  // user end ---------------------------------------------------

  // logs start ---------------------------------------------------
  bladeLogUsualList: '/api/blade-log/usual/list',
  bladeLogApiList: '/api/blade-log/api/list',
  bladeLogErrorList: '/api/blade-log/error/list',
  bladeLogUsualDetail: '/api/blade-log/usual/detail',
  bladeLogApiDetail: '/api/blade-log/api/detail',
  bladeLogErrorDetail: '/api/blade-log/error/detail',
  bladeloginlogPage: '/api/blade-system/bladeloginlog/page',
  // logs end ---------------------------------------------------

  // resource start ---------------------------------------------------
  bladeResourceOssList: '/api/blade-resource/oss/list',
  bladeResourceOssDetail: '/api/blade-resource/oss/detail',
  bladeResourceOssRemove: '/api/blade-resource/oss/remove',
  bladeResourceOssSubmit: '/api/blade-resource/oss/submit',
  bladeResourceOssEnable: '/api/blade-resource/oss/enable',
  bladeResourceSmsList: '/api/blade-resource/sms/list',
  bladeResourceSmsDetail: '/api/blade-resource/sms/detail',
  bladeResourceSmsRemove: '/api/blade-resource/sms/remove',
  bladeResourceSmsSubmit: '/api/blade-resource/sms/submit',
  bladeResourceSmsEnable: '/api/blade-resource/sms/enable',
  bladeResourceSmsEndpointSendMessage: '/api/blade-resource/sms/endpoint/send-message',
  // resource end ---------------------------------------------------

  // system start ---------------------------------------------------
  bladeSystemClientList: '/api/blade-system/client/list',
  bladeSystemClientDetail: '/api/blade-system/client/detail',
  bladeSystemClientRemove: '/api/blade-system/client/remove',
  bladeSystemClientSubmit: '/api/blade-system/client/submit',

  bladeSystemDeptList: '/api/blade-system/dept/list',
  bladeSystemDeptLazyList: '/api/blade-system/dept/lazy-list',
  bladeSystemDeptRemove: '/api/blade-system/dept/remove',
  bladeSystemDeptSubmit: '/api/blade-system/dept/submit',
  bladeSystemDeptDetail: '/api/blade-system/dept/detail',
  bladeSystemDeptTree: '/api/blade-system/dept/tree',
  bladeSystemDeptLazyTree: '/api/blade-system/dept/lazy-tree',

  bladeSystemDictList: '/api/blade-system/dict/list',
  bladeSystemDictParentList: '/api/blade-system/dict/parent-list',
  bladeSystemDictChildList: '/api/blade-system/dict/child-list',
  bladeSystemDictRemove: '/api/blade-system/dict/remove',
  bladeSystemDictSubmit: '/api/blade-system/dict/submit',
  bladeSystemDictDetail: '/api/blade-system/dict/detail',
  bladeSystemDictTree: '/api/blade-system/dict/tree?code=DICT',
  bladeSystemDictDictionary: '/api/blade-system/dict/dictionary',

  bladeSystemDictBizList: '/api/blade-system/dict-biz/list',
  bladeSystemDictBizParentList: '/api/blade-system/dict-biz/parent-list',
  bladeSystemDictBizChildList: '/api/blade-system/dict-biz/child-list',
  bladeSystemDictBizRemove: '/api/blade-system/dict-biz/remove',
  bladeSystemDictBizSubmit: '/api/blade-system/dict-biz/submit',
  bladeSystemDictBizDetail: '/api/blade-system/dict-biz/detail',
  bladeSystemDictBizTree: '/api/blade-system/dict-biz/tree?code=DICT',
  bladeSystemDictBizDictionary: '/api/blade-system/dict-biz/dictionary',

  bladeSystemParamList: '/api/blade-system/param/list',
  bladeSystemParamRemove: '/api/blade-system/param/remove',
  bladeSystemParamSubmit: '/api/blade-system/param/submit',

  bladeSystemPostList: '/api/blade-system/post/list',
  bladeSystemPostSelect: '/api/blade-system/post/select',
  bladeSystemPostDetail: '/api/blade-system/post/detail',
  bladeSystemPostRemove: '/api/blade-system/post/remove',
  bladeSystemPostSubmit: '/api/blade-system/post/submit',
  // system end ---------------------------------------------------

  //attribute start -----------------------------------------
  productattrQueryPage: '/api/center-data/productattr/queryPage',
  productattrQueryList: '/api/center-data/productattr/queryList',
  productattrQueryListByClassId: '/api/center-data/productattr/queryListByClassId',
  productattrSave: '/api/center-data/productattr/saveProductAttr',
  productattrUpdateById: '/api/center-data/productattr/updateProductAttrById',
  productattrRemoveById: '/api/center-data/productattr/removeProductAttrById',
  //attribute end -------------------------------------------

  // classification start ---------------------------------------------------
  productclassQueryList: '/api/center-data/productclass/queryList',
  productclassSave: '/api/center-data/productclass/saveProductClass',
  productclassUpdateById: '/api/center-data/productclass/updateProductClassById',
  productclassRemoveById: '/api/center-data/productclass/removeProductClassById',
  productclassDetail: '/api/center-data/productclass/queryDetail',
  // classification end ---------------------------------------------------

  // register start ---------------------------------------------------
  companydataValidateCompany: '/api/center-data/companydata/validateCompany',
  companydataIsPhoneRegister: '/api/center-data/companydata/isPhoneRegister',
  companydataOauthCaptcha: '/api/center-data/companydata/oauth/captcha',
  companydataChekcPic: '/api/center-data/companydata/chekcPic',
  companydataQueryPhoneNote: '/api/center-data/companydata/queryPhoneNote',
  companydataSaveCompanyData: '/api/center-data/companydata/saveCompanyData',
  bladeSystemTenantQueryList: '/api/blade-system/tenant/queryList',
  bladeUserSavePersonal: '/api/blade-user/savePersonal',
  // register end ---------------------------------------------------

  //company start -----------------------------------------------
  companyDataList: '/api/center-data/companydata/queryList',
  companyDataDetail: '/api/center-data/companydata/queryDetail',
  //spplier end ----------------------------------------------------

  // commodity start ---------------------------------------------------
  productmainmergeQueryProductPage: '/api/platform-data/productdata/queryProductPage',
  productmainmergeRemoveProduct: '/api/platform-data/productdata/removeProduct',
  productdatamdmSelectOrderProdDataMdmByCode: '/api/platform-data/mdmproductdata/queryMdmProdDataByCode',
  productmainmergeSaveProduct: '/api/platform-data/productdata/saveProduct',
  productmainmergeUpdateProduct: '/api/platform-data/productdata/updateProduct',
  productmainmergeQueryProductDetail: '/api/platform-data/productdata/queryProductDetail',
  clearingcompanydetailsQuerySettlementCompanyList: '/api/center-data/centerplatformsettlementcompanycontroller/querySettlementCompanyList',
  productmainCreateProductCode: '/api/center-data/productdata/createProductCode',
  productdataExamineProduct: '/api/center-data/productdata/examineProduct',
  productUnitDataQueryProductUnitList: '/api/center-data/productUnitData/queryProductUnitList',
  // commodity end ---------------------------------------------------

  // file start ---------------------------------------------------
  endpointPutFile: '/api/blade-resource/oss/endpoint/put-file',   //文件上传
  endpointFileLink: '/api/blade-resource/oss/endpoint/file-link', //文件下载
  // file end ---------------------------------------------------

  // 采购价录入
  savePricePurchase: '/api/center-price/centerpricepurchase/savePricePurchase', //单条采购价信息录入
  queryPurchasePricePage: '/api/center-price/centerpricepurchase/queryPurchasePricePage', //#采购定价列表展示查询
  queryCompanyList: '/api/center-data/companydata/queryCompanyList',  //根据条件查询公司列表
  queryPricePurchaseDetailsById: '/api/center-price/centerpricepurchase/queryPricePurchaseDetailsById',  //根据采购定价id查询采购定价详情
  extendPricePurchase: '/api/center-price/centerpricepurchase/extendPricePurchase',   //审核单条采购定价价格
  updatePricePurchase: '/api/center-price/centerpricepurchase/updatePricePurchase', // 单条采购价信息修改
  queryProductDataList: '/api/center-data/productdata/queryProductDataList', // 根据条件商品查询主表信息

  //销售价
  querySalesPricePage: '/api/center-price/centerpricesales/querySalesPricePage', //销售定价列表展示查询
  savePriceSales: '/api/center-price/centerpricesales/savePriceSales',  //单条销售价信息录入
  queryPriceSalesDetailsById: '/api/center-price/centerpricesales/queryPriceSalesDetailsById',  //根据销售定价id查询销售定价详情
  updatePriceSales: '/api/center-price/centerpricesales/updatePriceSales',  //单条销售价信息修改
  extendPriceSales: '/api/center-price/centerpricesales/extendPriceSales',  //单审核单条销售定价价格

  //快速录入
  queryPriceApplyMainPage: '/api/platform-price/priceapplymain/queryPriceApplyMainPage',  //列表
  queryPriceApplyMainById: '/api/platform-price/priceapplymain/queryPriceApplyMainById',  //详情
  checkPriceApplyItem: '/api/platform-price/priceapplyitem/checkPriceApplyItem',  //定价明细保存校验
  savePriceApplyMain: '/api/platform-price/priceapplymain/savePriceApplyMain',  //保存
  submitPriceApplyMain: '/api/platform-price/priceapplymain/submitPriceApplyMain',  //提交
  updatePriceApplyMain: '/api/platform-price/priceapplymain/updatePriceApplyMain',  //修改
  removePriceApplyMain: '/api/platform-price/priceapplymain/removePriceApplyMain',  //作废

  //定价信息
  savePricePurchaseSales: '/api/platform-price/pricepurchasesales/savePricePurchaseSales',  //保存
  queryPricePurchaseSalesPage: '/api/platform-price/pricepurchasesales/queryPricePurchaseSalesPage',  //列表
  queryPricePurchaseSalesById: '/api/platform-price/pricepurchasesales/queryPricePurchaseSalesById',  //详情
  adjustPricePurchase: '/api/platform-price/pricepurchasesales/adjustPricePurchase',  // 价格调整
  extendPricePurchaseDateEnd: '/api/platform-price/pricepurchasesales/extendPricePurchaseDateEnd',  //有效期延长
  losePricePurchaseSales: '/api/platform-price/pricepurchasesales/losePricePurchaseSales',  //有效期延长


  // 订单 start ---------------------------------------------------
  queryOrderPagePlatfrom: '/api/platform-order/ordermain/queryOrderPagePlatfrom', //平台方订单列表查询
  queryOrderPagePurchase: '/api/platform-order/ordermain/queryOrderPagePurchase', //采购商订单列表查询
  queryOrderPageSales: '/api/platform-order/ordermain/queryOrderPageSales', //供应商订单列表查询
  queryDetailsPlatform: '/api/platform-order/ordermain/queryDetailsPlatform', //平台方订单详情
  queryDetailsPurchase: '/api/platform-order/ordermain/queryDetailsPurchase', //采购商订单详情
  queryDetailsSales: '/api/platform-order/ordermain/queryDetailsSales', //供应商订单详情
  saveCompanyAddressInfo: '/api/center-data/centercompanyaddressinfo/saveCompanyAddressInfo', //保存收货地址
  updateCompanyAddressInfo: '/api/center-data/centercompanyaddressinfo/updateCompanyAddressInfo', //修改收货地址
  centerbaseareasQueryList: '/api/center-data/centerbaseareas/queryList', //查询省市区
  addressinfoQueryPage: '/api/center-data/centercompanyaddressinfo/queryPage', //查询地址管理列表
  addressinfoQueryList: '/api/center-data/centercompanyaddressinfo/queryList', //下订单查询收货信息
  addressinfoRemove: '/api/center-data/centercompanyaddressinfo/remove', //删除地址
  saveOrder: '/api/platform-order/ordermain/saveOrder', //保存下订单
  updateOrderMain: '/api/platform-order/ordermain/updateOrderMain', //修改订单
  queryPricePurchaseSalesByOrder: '/api/platform-price/pricepurchasesales/queryPricePurchaseSalesByOrder', //用物料号查询定价信息
  orderTaking: '/api/platform-order/ordermain/orderTaking', //正式订单待接单
  refreshOrderPrice: '/api/platform-order/ordermain/refreshOrderPrice', //价格刷新
  updateDesignatedPerson: '/api/platform-order/ordermain/updateDesignatedPerson',  //更改订单承接人
  queryRecipientList: '/api/platform-order/ordergrabdesignated/queryOrderGrabDesignated',  //订单承接人列表
  upgradeOrder: '/api/platform-order/ordermain/upgradeOrder', // 转正式订单
  reviewOrderMain: '/api/platform-order/ordermain/reviewOrderMain', //审核订单 驳回
  importPlatformOrderProductItem: '/api/platform-order/ordermain/import-platformOrderProductItem', //采购商下订单批量导入

  ordergrabmainQueryWaitSalesPageList: '/api/platform-order/ordergrabmain/queryWaitSalesPageList', //待抢单客户-交付 分页列表
  ordergrabmainQueryWaitPurchasePageList: '/api/platform-order/ordergrabmain/queryWaitPurchasePageList', //待抢单客户-采购 分页列表
  ordergrabmainQueryPurchaseOrSalesPageList: '/api/platform-order/ordergrabmain/queryPurchaseOrSalesPageList', //已抢单客户 分页列表
  ordergrabsalesQuerySalesPageList: '/api/platform-order/ordergrabsales/querySalesPageList', //历史记录-交付 分页列表
  ordergrabpurchaseQueryPurchasePageList: '/api/platform-order/ordergrabpurchase/queryPurchasePageList', //历史记录-采购 分页列表
  ordergrabmainQueryCompanyInfoByCompanyId: '/api/platform-order/ordergrabmain/queryCompanyInfoByCompanyId', //根据公司id查询抢单公司信息
  queryPurchaseAndSalesInfoByCompanyId: '/api/platform-order/ordergrabmain/queryPurchaseAndSalesInfoByCompanyId', //抢单详情

  ordergrabmainUpdateOrderGrabFreed: '/api/platform-order/ordergrabmain/updateOrderGrabFreed', //释放抢单
  ordergrabmainSaveOrderGrab: '/api/platform-order/ordergrabmain/saveOrderGrab', //抢单提交
  // 订单 end ---------------------------------------------------

  // 交付中心 start ------------------------------------------------------
  platformdeliverysendplatformmainPlatformDelivery: '/api/platform-delivery/platformdeliverysendplatformmain/queryPlatformDelivery', //平台发货单列表
  centerdeliverysendplatformmainGetById: '/api/center-delivery/centerdeliverysendplatformmain/queryCenterDeliverySendPlatformMainById', //平台发货单查看详情/详情主子
  platformdeliveryreceiptpurchasemainCustomerReceipt: '/api/platform-delivery/platformdeliveryreceiptpurchasemain/customerReceipt', //客户收货单列表
  platformdeliverysendplatformmainPlatformDeliveryConfirmation: '/api/platform-delivery/platformdeliverysendplatformmain/queryPlatformDeliveryConfirmation', //收货确认列表
  centerdeliveryreceiptpurchasemainGetById: '/api/center-delivery/centerdeliveryreceiptpurchasemain/queryCenterDeliveryReceiptPurchaseMainById', //客户收货单详情/详情主子
  centerdeliveryreceiptpurchasemainPlatformConfirmCustomerReceipt: '/api/center-delivery/centerdeliveryreceiptpurchasemain/confirmDeliveryReceipt', //平台审核客户收货确定
  centerdeliveryreceiptpurchasemainPlatformRejected: '/api/center-delivery/centerdeliveryreceiptpurchasemain/rejectedDeliveryReceipt', //平台审核客户收货驳回
  platformdeliveryreceiptpurchasemainCustomerReceiptToBeConfirmed: '/api/platform-delivery/platformdeliverysendplatformmain/queryCustomerReceipt', //客户待确认收货
  centerdeliveryreceiptpurchasemainInsert: '/api/center-delivery/centerdeliveryreceiptpurchasemain/saveDeliveryReceipt', //客户收货
  centerdeliveryreceiptpurchasemainUpdateCenterdeliveryreceiptpurchasemain: '/api/center-delivery/centerdeliveryreceiptpurchasemain/updateCenterDeliveryReceiptPurchaseMain', //客户收货信息修改

  querySupplyWaitSendPage: '/api/platform-order/orderpurchaseexecute/queryOrderPurchaseExecuteWaitSendPage',  //供应商待发货分页查询
  querySendSupplyPage: '/api/platform-delivery/deliverysendsupplymain/querySendSupplyPage',  //供应商发货单分页查询保存
  updateSendSupplyMain: '/api/center-delivery/centerdeliverysendsupplymain/updateSendSupplyMain',  //供应商发货单分页查询修改
  saveSendSupplyMain: '/api/center-delivery/centerdeliverysendsupplymain/saveSendSupplyMain',  //供应商发货单分页查询
  querySendSupplyById: '/api/center-delivery/centerdeliverysendsupplymain/querySendSupplyById',  //供应商发货单详情
  queryReceiptPlatformPage: '/api/center-delivery/centerdeliveryreceiptplatformmain/queryReceiptPlatformPage',  //平台收货单列表
  queryReceiptPlatformById: '/api/center-delivery/centerdeliveryreceiptplatformmain/queryReceiptPlatformById',  //平台收货单详情
  saveReceiptPlatformMain: '/api/center-delivery/centerdeliveryreceiptplatformmain/saveReceiptPlatformMain',  //平台 保存发货单
  sendConfirm: '/api/center-delivery/centerdeliveryreceiptplatformmain/sendConfirm',  //平台 确认发货
  sendReject: '/api/center-delivery/centerdeliverysendsupplymain/sendReject',  //平台驳回
  sendStop: '/api/center-delivery/centerdeliverysendsupplymain/sendStop',  //平台驳回
  queryReceiptPlatformPageApply: '/api/center-delivery/centerdeliveryreceiptplatformmainred/queryReceiptPlatformPageApply',  //平台 红字 申请
  queryReceiptPlatformPageApplyById: '/api/center-delivery/centerdeliveryreceiptplatformmainred/queryReceiptPlatformPageApplyById',  //平台 红字申请详情
  queryReceiptPlatformMainRedPage: '/api/center-delivery/centerdeliveryreceiptplatformmainred/queryReceiptPlatformMainRedPage',  //平台 红字 列表
  queryReceiptPlatformMainRedById: '/api/center-delivery/centerdeliveryreceiptplatformmainred/queryReceiptPlatformMainRedById',  //平台 红字 详情
  querySendSupplyMainRedPage: '/api/center-delivery/centerdeliverysendsupplymainred/querySendSupplyMainRedPage',  //供应商 红字 列表
  querySendSupplyMainRedById: '/api/center-delivery/centerdeliverysendsupplymainred/querySendSupplyMainRedById',  //供应商 红字 详情
  saveReceiptPlatformMainRed: '/api/center-delivery/centerdeliveryreceiptplatformmainred/saveReceiptPlatformMainRed',  //保存

  purchaseDeliveryOver: '/api/platform-delivery/platformdeliveryreceiptpurchasemain/queryPurchaseDeliveryOver',  //红字收货单申请列表 客户
  centerdeliveryreceiptpurchasemaingetById: '/api/center-delivery/centerdeliveryreceiptpurchasemain/queryCenterDeliveryReceiptPurchaseMainById',  ////红字收货单申请详情 客户
  saveSendPlatformMainRed: '/api/center-delivery/centerdeliveryreceiptpurchasemainred/saveReceiptPurchaseMainRed',  //  申请 客户
  queryReceiptPurchaseMainRedVOList: '/api/platform-delivery/platformdeliveryreceiptpurchasemainred/queryReceiptPurchaseMainRedVOList',  // 红字收货单列表 客户
  queryReceiptPurchaseMainRedById: '/api/center-delivery/centerdeliveryreceiptpurchasemainred/queryReceiptPurchaseMainRedById',  //红字收货详情 客户
  querySendPlatformMainRedVOList: '/api/platform-delivery/platformdeliverysendplatformmainred/querySendPlatformMainRedVOList',  //红字发货单 平台
  querySendPlatformMainRedById: '/api/center-delivery/centerdeliverysendplatformmainred/querySendPlatformMainRedById',  //红字发货单详情 平台


  // 交付中心 end ------------------------------------------------------


  //预算  结算  start--------------------------------------------------------------
  centerplatformbudgeconfigpage: '/api/center-data/centerplatformbudgeconfig/page', //分页
  centerplatformbudgeconfigsave: '/api/center-data/centerplatformbudgeconfig/save',// 新增
  centerplatformbudgeconfigupdate: '/api/center-data/centerplatformbudgeconfig/update',// 修改
  centerplatformbudgeconfigremove: '/api/center-data/centerplatformbudgeconfig/remove',//删除
  centerplatformbankconfigpage: '/api/center-data/centerplatformbankconfig/page', //分页
  centerplatformbankconfigsave: '/api/center-data/centerplatformbankconfig/save',// 新增
  centerplatformbankconfigupdate: '/api/center-data/centerplatformbankconfig/update',// 修改
  centerplatformbankconfigremove: '/api/center-data/centerplatformbankconfig/remove',//删除
  queryBudgeConfigList: '/api/center-data/centerplatformbudgeconfig/queryBudgeConfigList',//查询预算配置列表
  centerplatformsettlementcompanycontrollerpage: '/api/center-data/centerplatformsettlementcompanycontroller/page', //分页
  centerplatformsettlementcompanycontrollersave: '/api/center-data/centerplatformsettlementcompanycontroller/save',// 新增
  centerplatformsettlementcompanycontrollerupdate: '/api/center-data/centerplatformsettlementcompanycontroller/update',// 修改
  centerplatformsettlementcompanycontrollerremove: '/api/center-data/centerplatformsettlementcompanycontroller/remove',//删除

  centerplatformsettlementcompanycontrollerqueryList: '/api/center-data/centerplatformsettlementcompanycontroller/queryList', //分页
  centerplatformsettlementcompanyinvoicepage: '/api/center-data/centerplatformsettlementcompanyinvoice/page',// 新增
  centerplatformsettlementcompanyinvoicesave: '/api/center-data/centerplatformsettlementcompanyinvoice/save',// 修改
  centerplatformsettlementcompanyinvoiceupdate: '/api/center-data/centerplatformsettlementcompanyinvoice/update',//删除
  centerplatformsettlementcompanyinvoiceremove: '/api/center-data/centerplatformsettlementcompanyinvoice/remove',//删除
  //预算  结算  end----------------------------------------------------------------

  //首页常用功能  start----------------------------------------------------------------
  saveWorkBenchMenuMain: '/api/center-data/centeruserworkbenchmenumain/saveWorkBenchMenuMain', // 新增
  queryWorkBenchMenuList: '/api/center-data/centeruserworkbenchmenumain/queryWorkBenchMenuList', // 查询工作台菜单
  workBenchLeftTree: '/api/blade-system/menu/workBenchLeftTree', // 左侧菜单
  centeruserworkbenchmenumainRemove: '/api/center-data/centeruserworkbenchmenumain/remove', // 删除
  queryWaitHandleMainList: '/api/blade-system/workbenchwaithandlegroupmain/queryWaitHandleMainList', //工作台待办主树
  saveUserWorkBenchWaitHandle: '/api/blade-system/workbenchwaithandlegroupuser/saveUserWorkBenchWaitHandle', //工作台待办 保存
  removeUserWorkBenchWaitHandle: '/api/blade-system/workbenchwaithandlegroupuser/removeUserWorkBenchWaitHandle', //工作台待办 删除
  //首页常用功能  end----------------------------------------------------------------
  // 待办      start -------------------------------------------------
  queryWorkBenchWaitHandleList: '/api/blade-system/workbenchwaithandlegroupmain/queryWorkBenchWaitHandleList', //工作台待办主树
  queryWorkBenchWaitHandleMainTree: '/api/blade-system/menu/queryWorkBenchWaitHandleMainTree', //工作台待办主树
  queryWorkBenchWaitHandleItemTree: '/api/blade-system/menu/queryWorkBenchWaitHandleItemTree', //工作台待办子树
  removeWorkBenchWaitHandleMain: '/api/blade-system/workbenchwaithandlegroupmain/removeWorkBenchWaitHandleMain', //工作台待办 删除
  updateWorkBenchWaitHandleMain: '/api/blade-system/workbenchwaithandlegroupmain/updateWorkBenchWaitHandleMain', //工作台待 修改
  saveWorkBenchWaitHandleMain: '/api/blade-system/workbenchwaithandlegroupmain/saveWorkBenchWaitHandleMain', //工作台待 保存
  saveWorkBenchWaitHandleItem: '/api/blade-system/workbenchwaithandlegroupitem/saveWorkBenchWaitHandleItem', //子表 保存
  updateWorkBenchWaitHandleItem: '/api/blade-system/workbenchwaithandlegroupitem/updateWorkBenchWaitHandleItem', //子表 修改
  removeWorkBenchWaitHandleItem: '/api/blade-system/workbenchwaithandlegroupitem/remove', //子表 删除
  //待办  end-------------------------------------------------------
  // 登录判断多个公司
  queryCompanyCountByUser: '/api/blade-user/queryCompanyCountByUser',
  queryCompanyListByUser: '/api/center-data/companydata/queryCompanyListByUser',
}
