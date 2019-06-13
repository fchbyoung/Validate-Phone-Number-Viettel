function checkPhoneNumberViettel() {
    let arr = ["0964030197","0166301555","0363015364","012345645","0333015364",];
    let viettel_regex = /((096|097|098|086|032|033|034|035|036|037|038|039|)+([0-9]{7})$)/g;
    for(var i = 0; i < arr.length; i++){
        let result = viettel_regex.test(arr[i]);
        if(result === true){
            document.write(`số điện thoại thuộc nhà mạng viettel là : ${arr[i]} <br/>`);
        }
    }
}
checkPhoneNumberViettel();