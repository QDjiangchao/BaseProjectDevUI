/* 合法手机号 */
export function validatePhone(phone) {
  const phoneregex = /^[1][2,3,4,5,7,8,9,6][0-9]{9}$/
  return phoneregex.test(phone)
}

/* 合法邮箱 */
export function validataMail(mail) {
  let mailReg = /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/
  return mailReg.test(mail)
}

/* 是否含有小写字母、大写字母、数字、特殊符号的两种及以上*/
export function checkPasswordBase(password) {
  const reg = /^(?![A-Z]+$)(?![a-z]+$)(?!\d+$)(?![\W_]+$)\S{8,16}$/
  return reg.test(password)
}

/*不能超过6个重复的字节*/
export function checkRepeat(psd) {
  // 不能超过6个重复的字节
  let count = 0
  for (let i = 1; i < psd.length; i++) {
    if (psd.charCodeAt(i - 1) == psd.charCodeAt(i)) {
      count++
    } else {
      count = 0
    }

    if (count >= 5) {
      return false
    }
  }
  return true
}

/*密码不能超过6个升序和降序*/
export function checkSerial(psd) {
  // 密码不能超过6个升序和降序
  let count_dec = 0
  let count_add = 0
  for (let i = 1; i < psd.length; i++) {
    if (psd.charCodeAt(i - 1) == psd.charCodeAt(i) + 1) {
      count_add++
    } else {
      count_add = 0
    }
    if (count_add >= 5) {
      return false
    }
  }
  for (let i = 1; i < psd.length; i++) {
    if (psd.charCodeAt(i - 1) == psd.charCodeAt(i) - 1) {
      count_dec++
    } else {
      count_dec = 0
    }
    if (count_dec >= 5) {
      return false
    }
  }
  return true
}


/**
 * 基础工具（加密解密）
 */
let CryptoJS = require("crypto-js");

export const encrypt = (message) => {
  let keyHex = CryptoJS.enc.Utf8.parse("0123456789abcd0123456789");
  let encrypted = CryptoJS.TripleDES.encrypt(message, keyHex, {
    vi: null,
    mode: CryptoJS.mode.ECB,
    padding: CryptoJS.pad.Pkcs7
  });
  return encrypted.toString();
}

export const decrypt = (ciphertext) => {
  let keyHex = CryptoJS.enc.Utf8.parse("0123456789abcd0123456789");
  // direct decrypt ciphertext
  let decrypted = CryptoJS.TripleDES.decrypt({
    ciphertext: CryptoJS.enc.Base64.parse(ciphertext)
  }, keyHex, {
    vi: null,
    mode: CryptoJS.mode.ECB,
    padding: CryptoJS.pad.Pkcs7
  });
  return decrypted.toString(CryptoJS.enc.Utf8)
}

//日期格式化
export const formatDate = (date, fmt) => {
  let getDate = new Date(date);
  let o = {
    'M+': getDate.getMonth() + 1,
    'd+': getDate.getDate(),
    'h+': getDate.getHours(),
    'm+': getDate.getMinutes(),
    's+': getDate.getSeconds(),
    'q+': Math.floor((getDate.getMonth() + 3) / 3),
    'S': getDate.getMilliseconds()
  };
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (getDate.getFullYear() + '').substr(4 - RegExp.$1.length))
  }
  for (let k in o) {
    if (new RegExp('(' + k + ')').test(fmt)) {
      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : (('00' + o[k]).substr(('' + o[k]).length)))
    }
  }
  return fmt
}

/*export const dateFilter = (time) => {
  if (!time) { // 当时间是null或者无效格式时我们返回空
    return ' '
  } else {
    const date = new Date(time); // 时间戳为10位需*1000，时间戳为13位的话不需乘1000
    const dateNumFun = (num) => num < 10 ? `0${num}` : num; // 使用箭头函数和三目运算以及es6字符串的简单操作。因为只有一个操作不需要{} ，目的就是数字小于10，例如9那么就加上一个0，变成09，否则就返回本身。
    // 这是es6的解构赋值。
    const [Y, M, D, h, m, s] = [
      date.getFullYear(),
      dateNumFun(date.getMonth() + 1),
      dateNumFun(date.getDate()),
      dateNumFun(date.getHours()),
      dateNumFun(date.getMinutes()),
      dateNumFun(date.getSeconds())
    ]
    return `${Y}-${M}-${D} ${h}:${m}:${s}` // 一定要注意是反引号，否则无效。
  }
}*/
