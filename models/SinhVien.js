

var SinhVien = function () {

    this.maSinhVien = '';
    this.tenSinhVien = '';
    this.loaiSinhVien = '';
    this.email = '';
    this.soDienThoai = '';
    this.diemToan = '';
    this.diemLy = '';
    this.diemHoa = '';
    this.diemRenLuyen = '';

    this.tinhDiemTrungBinh = function () {
        var dtb;
        dtb = (Number(this.diemToan) + Number(this.diemLy) + Number(this.diemHoa) )/3;

        dtb = dtb.toFixed(2);

        return dtb;
    }

    this.xepLoaiSinhVien = function () {
        var dtb = this.tinhDiemTrungBinh ();

        if(dtb < 5 || this.diemRenLuyen < 5){
            return 'Yếu';
        } else {
            if(dtb >= 5 && dtb < 6.5) {
                return 'Trung bình';
            } else if (dtbn >= 6.5 && dtb < 8) {
                return 'Khá';
            } else if (dtb >= 8 && dtb < 9){
                return 'Giỏi';
            } else if (dtb >= 9 && dtb < 10) {
                return 'Xuất sắc';
            } else {
                return 'Không hợp lý';
            }
        }
    }
}