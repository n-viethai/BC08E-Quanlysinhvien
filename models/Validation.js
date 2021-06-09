function Validation () {
    this.kiemTraRong = function (value,selectorError,name) {
        if (value.trim() === '') {
            document.querySelector(selectorError).innerHTML = name + ' không được bỏ trống!';
            return false;
        }

        document.querySelector(selectorError).innerHTML = '';
        return true;
    }

    this.kiemTraKytu = function (value,selectorError,name) {
        var regexAllLetter = /^[A-Z a-z]+$/;
        if(regexAllLetter.test(value)) {
            document.querySelector(selectorError).innerHTML = '';
            return true;
        }

        document.querySelector(selectorError).innerHTML = name + ' không hợp lệ!';
        return false;
    }

    this.kiemTraDoDai = function (value,selectorError,minLength,maxLegth,name) {
        if(value.length < minLength || value.length > maxLegth) {
            document.querySelector(selectorError).innerHTML = `${name} phải từ ${minLength} đến ${maxLegth} ký tự!`;
            return false;
        }else {
            document.querySelector(selectorError).innerHTML = '';
            return true;
        }
    }

    this.kiemTraGiaTri = function (value,selectorError,minValue,maxValue,name) {
        if(value <= minValue || value >= maxValue) {
            document.querySelector(selectorError).innerHTML = `${name} phải từ ${minValue} đến ${maxValue}!`;
            return false;
        }else {
            return true;
        }
    }
}
