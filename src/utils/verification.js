/**
 * 手机号验证
 * @param {*} value 手机号
 */
export function checkPhone(value){
    let regPhone = /^1[3456789]\d{9}$/;
    return !regPhone.test(value);
}

/**
 * 密码验证 6-16位数字+字母
 * @param {*} value 
 */
export function checkPassWord(value){
    let regPassWord = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,16}$/;
    return !regPassWord.test(value);
}

/**
 * 验证码验证 6位数字+字母
 * @param {*} value 
 */
 export function checkCode(value){
    let regCode = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6}$/;
    return !regCode.test(value);
}