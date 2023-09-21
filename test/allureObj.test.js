
const allure = require('allure-mocha/runtime');

console.log('KEYS: '+ typeof allure.allure.attachment);

getMethods = (obj) => {
    const props = Object.getOwnPropertyNames(obj).filter(item => typeof obj[item] === 'function');
    console.log('PROPS: '+props);
} 
getMethods(allure.allure.testAttachment);
//console.log(allure);

//console.log('KEYS: '+ allure);