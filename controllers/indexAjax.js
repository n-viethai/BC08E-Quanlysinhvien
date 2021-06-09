// var promise = axios ({
//     url:'../data/text.txt', //đường dẫn đến file hoặc server (API)
//     method: 'GET'
// });

// promise.then(function(result) {
//     console.log('result',result);
//     document.querySelector('body').innerHTML = result.data;
// })

// promise.then(function(error) {
//     console.log('error',error);
// })

function LayDanhSachSinhVienApi() {
  var promise = axios({
    url: "http://svcy.myclass.vn/api/SinhVienApi/LayDanhSachSinhVien",
    method: "GET",
    responseType: "json",
  });

  promise.then(function (result) {
    console.log("result", result.data);
    renderTableSinhVien(result.data);
  });

  promise.catch(function (error) {
    console.log("error", error);
  });
}

LayDanhSachSinhVienApi();

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
                      }')" class = "btn btn-warning text-white ms-3">
                          Chỉnh sửa
                      </button> 
                  </td>
              </tr>
          `;

    content += trSinhVien;
  }

  document.querySelector("#tblSinhVien").innerHTML = content;
}

//   phương thức POST đưa dữ liệU từ người dùng nhập lên server

document.querySelector("#themSinhVien").onclick = function () {
  var sinhVien = new SinhVien();

  sinhVien.maSinhVien = document.querySelector("#maNhanVien").value;
  sinhVien.tenSinhVien = document.querySelector("#tenNhanVien").value;
  sinhVien.email = document.querySelector("#email").value;
  sinhVien.soDienThoai = document.querySelector("#soDienThoai").value;
  sinhVien.diemToan = document.querySelector("#diemToan").value;
  sinhVien.diemLy = document.querySelector("#diemLy").value;
  sinhVien.diemHoa = document.querySelector("#diemHoa").value;
  sinhVien.diemRenLuyen = document.querySelector("#diemRenLuyen").value;

  //   gửi dữ liệu về server

  var promise = axios({
    url: "http://svcy.myclass.vn/api/SinhVienApi/ThemSinhVien",
    method: "post",
    data: sinhVien,
  });

  promise.then(function (result) {
    // gọi hàm khi truyền dữ liệU lên server thành công

    console.log(result.data);
    LayDanhSachSinhVienApi();
  });

  promise.catch(function (error) {
    console.log("error", error);
  });
};

//  phương thức xóa sinh viên ajax

function xoaSinhVien(maSinhVien) {
  var promise = axios({
    url: `http://svcy.myclass.vn/api/SinhVienApi/XoaSinhVien?maSinhVien=${maSinhVien}`,
    method: "DELETE",
  });

  promise.then(function (result) {
    LayDanhSachSinhVienApi();
  });

  promise.catch(function (error) {
    console.log("error", error);
  });
}

// chỉnh sửa danh sách sinh viên

function chinhSua(maSinhVien) {
  var promise = axios({
    url: `http://svcy.myclass.vn/api/SinhVienApi/LayThongTinSinhVien?maSinhVien=${maSinhVien}`,
    method: "GET",
  });

  promise.then(function (result) {
    var sinhVien = result.data;
    console.log(sinhVien.maSinhVien);

    //  đưa các dữ liệu từ server lên các input trên
    document.querySelector("#maNhanVien").value = sinhVien.maSinhVien;
    document.querySelector("#tenNhanVien").value = sinhVien.tenSinhVien;
    document.querySelector("#email").value = sinhVien.email;
    document.querySelector("#soDienThoai").value = sinhVien.soDienThoai;
    document.querySelector("#loaiSinhVien").value = sinhVien.loaiSinhVien;
    document.querySelector("#diemToan").value = sinhVien.diemToan;
    document.querySelector("#diemLy").value = sinhVien.diemLy;
    document.querySelector("#diemHoa").value = sinhVien.diemHoa;
    document.querySelector("#diemRenLuyen").value = sinhVien.diemRenLuyen;
  });

  promise.catch(function (error) {
    console.log("error", error);
  });
}

// cập nhật thông tin sinh viên

document.querySelector("#capNhapThongTin").onclick = function () {
  var sinhVienUpdate = new SinhVien();

  sinhVienUpdate.maSinhVien = document.querySelector("#maNhanVien").value;
  sinhVienUpdate.tenSinhVien = document.querySelector("#tenNhanVien").value;
  sinhVienUpdate.email = document.querySelector("#email").value;
  sinhVienUpdate.soDienThoai = document.querySelector("#soDienThoai").value;
  sinhVienUpdate.loaiSinhVien = document.querySelector("#loaiSinhVien").value;
  sinhVienUpdate.diemToan = document.querySelector("#diemToan").value;
  sinhVienUpdate.diemLy = document.querySelector("#diemLy").value;
  sinhVienUpdate.diemHoa = document.querySelector("#diemHoa").value;
  sinhVienUpdate.diemRenLuyen = document.querySelector("#diemRenLuyen").value;

  var promise = axios({
      url:`http://svcy.myclass.vn/api/SinhVienApi/CapNhatThongTinSinhVien?maSinhVien=${sinhVienUpdate.maSinhVien}`,
      method:'PUT',
      data:sinhVienUpdate
  })

  promise.then(function(result) {
      LayDanhSachSinhVienApi();
  });

  promise.catch(function(error) {
      console.log('error',error);
  });
};
