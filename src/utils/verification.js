/**
 * 手机号验证
 * @param {*} value 手机号
 */
export function checkPhone(value){
    let regPhone = /^1[3456789]\d{9}$/;
    return !regPhone.test(value);
}

/**
 * 密码验证
 * @param {*} value 
 */