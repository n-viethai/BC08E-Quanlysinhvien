var arrSinhVien = [];

document.querySelector("#themSinhVien").onclick = function () {
  var sinhVien = new SinhVien();
  var kiemTra = new Validation();

  sinhVien.maSinhVien = document.querySelector("#maNhanVien").value;
  sinhVien.tenSinhVien = document.querySelector("#tenNhanVien").value;
  sinhVien.email = document.querySelector("#email").value;
  sinhVien.soDienThoai = document.querySelector("#soDienThoai").value;
  sinhVien.loaiSinhVien = document.querySelector("#loaiSinhVien").value;
  sinhVien.diemToan = document.querySelector("#diemToan").value;
  sinhVien.diemLy = document.querySelector("#diemLy").value;
  sinhVien.diemHoa = document.querySelector("#diemHoa").value;
  sinhVien.diemRenLuyen = document.querySelector("#diemRenLuyen").value;


  // kiểm tra dữ liệu trước khi đưa vào mảng

  // ---------------------------validation-----------------------------

  var valid = true;

  // if (sinhVien.maSinhVien === '') {
  //   document.querySelector('#error_requied_maSinhVien').innerHTML = 'Mã sinh viên không được bỏ trống';
  //   valid = false;
  // } else {
  //   document.querySelector('#error_requied_maSinhVien').innerHTML = '';
  // }

  // if (sinhVien.tenSinhVien === '') {
  //   document.querySelector('#error_requied_tenSinhVien').innerHTML = 'Tên sinh viên không được bỏ trống';
  //   valid = false;
  // }

  valid &= kiemTra.kiemTraRong(sinhVien.maSinhVien,'#error_requied_maSinhVien','Mã sinh viên')
  &kiemTra.kiemTraRong(sinhVien.tenSinhVien,'#error_requied_tenSinhVien','Tên sinh viên')
  &kiemTra.kiemTraRong(sinhVien.email,'#error_requied_email','email')
  &kiemTra.kiemTraRong(sinhVien.soDienThoai,'#error_requied_soDienThoai', 'Số điện thoại')
  &kiemTra.kiemTraRong(sinhVien.diemToan,'#error_requied_diemToan','Điểm toán')
  &kiemTra.kiemTraRong(sinhVien.diemLy,'#error_requied_diemLy','Điểm lý')
  &kiemTra.kiemTraRong(sinhVien.diemHoa,'#error_requied_diemHoa','Điểm toán')
  &kiemTra.kiemTraRong(sinhVien.diemRenLuyen,'#error_requied_diemRenLuyen','Điểm rèn luyện');

  if(!valid) {
    return;
  }

  /**
     * PHƯƠNG PHÁP LẬP TRÌNH HƯỚNG GIAO DIỆN
 
     // Tạo thẻ html = dom
 
     var trSinhVien = document.createElement('tr');
 
     var tdMaSinhVien = document.createElement('td');
     tdMaSinhVien.innerHTML = sinhVien.maSinhVien;
 
     var tdTenSinhVien = document.createElement('td');
     tdTenSinhVien.innerHTML = sinhVien.tenSinhVien;
 
     var tdEmail = document.createElement('td');
     tdEmail.innerHTML = sinhVien.email;
 
     var tdSoDienThoai = document.createElement('td');
     tdSoDienThoai.innerHTML = sinhVien.soDienThoai;
 
     var tdloaiSinhVien = document.createElement('td');
     tdloaiSinhVien.innerHTML = sinhVien.loaiSinhVien;
 
     var tdDiemTrungBinh = document.createElement('td');
     tdDiemTrungBinh.innerHTML = sinhVien.tinhDiemTrungBinh();
 
     var tdDiemRenLuyen = document.createElement('td');
     tdDiemRenLuyen.innerHTML = sinhVien.diemRenLuyen;
 
 
     // tạo nút xóa
 
     var btnXoaSV = document.createElement('button');
 
     btnXoaSV.innerHTML = 'xóa';
     btnXoaSV.className = 'btn btn-danger';
 
     
     btnXoaSV.onclick = function() {
         // //Từ nút xoá dom ra 1 cấp 
         // var td = buttonXoa.parentElement; //.parentElement => dom ra thẻ cha chứa nó
         // var tr = td.parentElement;
         //.closest: dom đến selector gốc chứa thẻ đó
         var tr = btnXoaSV.closest('tr');
         tr.remove(); //.remove(): phương thức xoá thẻ
     }
 
     var tdXoa = document.createElement('td');
     tdXoa.appendChild(btnXoaSV);
     //  đưa thẻ con gắn vào thẻ cha
 
     trSinhVien.appendChild(tdMaSinhVien);
     trSinhVien.appendChild(tdTenSinhVien);
     trSinhVien.appendChild(tdEmail);
     trSinhVien.appendChild(tdSoDienThoai);
     trSinhVien.appendChild(tdloaiSinhVien);
     trSinhVien.appendChild(tdDiemTrungBinh);
     trSinhVien.appendChild(tdDiemRenLuyen);
 
     trSinhVien.appendChild(tdXoa);
 
     document.querySelector('#tblSinhVien').appendChild(trSinhVien);
     
     */

  //  PHƯƠNG PHÁP LẬP TRÌNH HIỆN ĐẠI : LẬP TRÌNH HƯỚNG ĐỐI TƯỢNG

  /**
     ƯU ĐIỂM : DỄ QUẢN LÝ, BẢO TRÌ, NÂNG CÁP CODE
     NHƯỢC ĐIỂM : HIỆU NĂNG THÌ KÉM HƠN SO VỚI PHƯƠNG PHÁP Ở TRÊN. 
     */

  arrSinhVien.push(sinhVien);
  // arrSinhVien = [{maSinhVien:'1',....},{maSinhVien:'2',....},{maSinhVien:'3',....}]
  renderTableSinhVien(arrSinhVien);

  //  lưu vào storage
  luuStorage();
};

function renderTableSinhVien(arrSinhVien) {
  var content = "";

  for (var index = 0; index < arrSinhVien.length; index++) {
    var sv = arrSinhVien[index];
    
    var sinhVien = new SinhVien();

        sinhVien.maSinhVien = sv.maSinhVien;
        sinhVien.tenSinhVien = sv.tenSinhVien;
        sinhVien.email = sv.email;
        sinhVien.soDienThoai = sv.soDienThoai;
        sinhVien.diemToan = sv.diemToan;
        sinhVien.diemLy = sv.diemLy;
        sinhVien.diemHoa = sv.diemHoa;
        sinhVien.diemRenLuyen = sv.diemRenLuyen;

    var trSinhVien = `
            <tr>
                <td>${sinhVien.maSinhVien}</td>
                <td>${sinhVien.tenSinhVien}</td>
                <td>${sinhVien.email}</td>
                <td>${sinhVien.soDienThoai}</td>
                <td>${sinhVien.loaiSinhVien}</td>
                <td>${sinhVien.tinhDiemTrungBinh()}</td>
                <td>${sinhVien.diemRenLuyen}</td>
                <td> 
                    <button onclick = "xoaSinhVien('${
                      sinhVien.maSinhVien
                    }')" class = "btn btn-danger">
                        Xóa 
                    </button> 
                    <button  onclick = "chinhSua('${
                      sinhVien.maSinhVien
                    }')" class = "btn btn-info">
                        Chỉnh sửa
                    </button> 
                </td>
            </tr>
        `;

    content += trSinhVien;
  }

  document.querySelector("#tblSinhVien").innerHTML = content;
}

function xoaSinhVien(maSVClick) {
  for (var index = arrSinhVien.length - 1; index >= 0; index--) {
    var sinhVien = arrSinhVien[index];

    if (sinhVien.maSinhVien === maSVClick) {
      arrSinhVien.splice(index, 1); //Xóa sinh viên
    }
  }

  // Tạo lại bảng sau khi xóa sinh viên
  renderTableSinhVien(arrSinhVien);
}

function chinhSua(maSVClick) {
  // khóa 1 số trường input

  document.querySelector('#maNhanVien').disabled = true;
  document.querySelector('#themSinhVien').disabled = true;
  document.querySelector('#capNhapThongTin').disabled = false;

  for (var index = 0; index < arrSinhVien.length; index++) {
    var sv = arrSinhVien[index];

    if (maSVClick === sv.maSinhVien) {
      document.querySelector("#maNhanVien").value = sv.maSinhVien;
      document.querySelector("#tenNhanVien").value = sv.tenSinhVien;
      document.querySelector("#email").value = sv.email;
      document.querySelector("#soDienThoai").value = sv.soDienThoai;
      document.querySelector("#loaiSinhVien").value = sv.loaiSinhVien;
      document.querySelector("#diemToan").value = sv.diemToan;
      document.querySelector("#diemLy").value = sv.diemLy;
      document.querySelector("#diemHoa").value = sv.diemHoa;
      document.querySelector("#diemRenLuyen").value = sv.diemRenLuyen;
    }
  }
}


document.querySelector('#capNhapThongTin').onclick = function () {
  var editSV = new SinhVien();

  editSV.maSinhVien = document.querySelector("#maNhanVien").value;
  editSV.tenSinhVien = document.querySelector("#tenNhanVien").value;
  editSV.email = document.querySelector("#email").value;
  editSV.soDienThoai = document.querySelector("#soDienThoai").value;
  editSV.loaiSinhVien = document.querySelector("#loaiSinhVien").value;
  editSV.diemToan = document.querySelector("#diemToan").value;
  editSV.diemLy = document.querySelector("#diemLy").value;
  editSV.diemHoa = document.querySelector("#diemHoa").value;
  editSV.diemRenLuyen = document.querySelector("#diemRenLuyen").value;

  // console.log(editSV);

  // tìm mã sinh viên cùng mã sinh viên với sinh viên được cập nhật thông tin

  for ( var index = 0 ; index < arrSinhVien.length; index ++) {
    var sinhVienTrongMang = arrSinhVien[index];

    if (sinhVienTrongMang.maSinhVien === editSV.maSinhVien) {
      sinhVienTrongMang.tenSinhVien = editSV.tenSinhVien;
      sinhVienTrongMang.email = editSV.email;
      sinhVienTrongMang.soDienThoai = editSV.soDienThoai;
      sinhVienTrongMang.diemToan = editSV.diemToan;
      sinhVienTrongMang.diemLy = editSV.diemLy;
      sinhVienTrongMang.diemHoa = editSV.diemHoa;
      sinhVienTrongMang.diemRenLuyen = editSV.diemRenLuyen;
    }
  }

  // tạo lại bảng

  renderTableSinhVien(arrSinhVien);

  document.querySelector('#maNhanVien').disabled = false;
  document.querySelector('#themSinhVien').disabled = false;
  document.querySelector('#capNhapThongTin').disabled = true;

  luuStorage();
}



// ----------------------local storage--------------------------

function luuStorage () {

  //  chuyển đối tượng(arrSinhVien) thành chuỗi
  var stringArrSinhVien = JSON.stringify(arrSinhVien);

  //  lưu chuỗi vào storage

  localStorage.setItem('arrSinhvien',stringArrSinhVien);
}

function layStorage () {
  // kiểm tra xem có storage đó không

  if (localStorage.getItem('arrSinhvien')) {
    var stringArrSinhVien = localStorage.getItem('arrSinhvien');

    // chuyển chuỗi thành mảng và gán lại vào biến arrSinhVien

    arrSinhVien = JSON.parse(stringArrSinhVien);

    renderTableSinhVien(arrSinhVien);
  }
}

layStorage();
