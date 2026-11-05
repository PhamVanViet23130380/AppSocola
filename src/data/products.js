// FE-012: Du lieu mau de hien thi frontend; KHONG phai san pham/ton kho that.
// Hinh SVG trong public/images/products/ chi la anh minh hoa, co the thay anh chup sau.
export const productCategories = [
  { id: "all", name: "Tất cả" },
  { id: "dark", name: "Socola đen" },
  { id: "milk", name: "Socola sữa" },
  { id: "nuts", name: "Socola hạt" },
  { id: "gift", name: "Hộp quà socola" },
];

export const products = [
  {"id": 1, "slug": "socola-den-70", "name": "Socola đen 70%", "price": 145000, "category": "dark", "cocoaPercent": 70, "weightGrams": 80, "image": "/images/products/socola-den-70.svg", "description": "Socola đen vị cacao đậm, ít ngọt."},
  {"id": 2, "slug": "socola-den-85", "name": "Socola đen 85%", "price": 165000, "category": "dark", "cocoaPercent": 85, "weightGrams": 80, "image": "/images/products/socola-den-85.svg", "description": "Socola đen hàm lượng cacao cao, vị đắng rõ."},
  {"id": 3, "slug": "socola-den-cam", "name": "Socola đen vị cam", "price": 155000, "category": "dark", "cocoaPercent": 68, "weightGrams": 80, "image": "/images/products/socola-den-cam.svg", "description": "Socola đen kết hợp hương cam nhẹ."},
  {"id": 4, "slug": "socola-sua-truyen-thong", "name": "Socola sữa truyền thống", "price": 125000, "category": "milk", "cocoaPercent": 40, "weightGrams": 80, "image": "/images/products/socola-sua-truyen-thong.svg", "description": "Socola sữa mềm mịn, vị ngọt vừa."},
  {"id": 5, "slug": "socola-sua-vanilla", "name": "Socola sữa vanilla", "price": 135000, "category": "milk", "cocoaPercent": 38, "weightGrams": 80, "image": "/images/products/socola-sua-vanilla.svg", "description": "Socola sữa với hương vanilla dịu nhẹ."},
  {"id": 6, "slug": "socola-trang", "name": "Socola trắng", "price": 130000, "category": "milk", "cocoaPercent": null, "weightGrams": 80, "image": "/images/products/socola-trang.svg", "description": "Socola trắng có hương sữa ngọt dịu."},
  {"id": 7, "slug": "socola-hanh-nhan", "name": "Socola hạnh nhân", "price": 175000, "category": "nuts", "cocoaPercent": 55, "weightGrams": 100, "image": "/images/products/socola-hanh-nhan.svg", "description": "Socola kết hợp hạnh nhân giòn."},
  {"id": 8, "slug": "socola-hat-dieu", "name": "Socola hạt điều", "price": 170000, "category": "nuts", "cocoaPercent": 50, "weightGrams": 100, "image": "/images/products/socola-hat-dieu.svg", "description": "Socola với hạt điều rang thơm."},
  {"id": 9, "slug": "socola-hat-phu-de", "name": "Socola hạt phỉ", "price": 185000, "category": "nuts", "cocoaPercent": 52, "weightGrams": 100, "image": "/images/products/socola-hat-phu-de.svg", "description": "Socola hòa quyện vị hạt phỉ."},
  {"id": 10, "slug": "hop-qua-6-vien", "name": "Hộp socola 6 viên", "price": 220000, "category": "gift", "cocoaPercent": null, "weightGrams": 120, "image": "/images/products/hop-qua-6-vien.svg", "description": "Hộp quà nhỏ với nhiều hương vị socola."},
  {"id": 11, "slug": "hop-qua-12-vien", "name": "Hộp socola 12 viên", "price": 350000, "category": "gift", "cocoaPercent": null, "weightGrams": 240, "image": "/images/products/hop-qua-12-vien.svg", "description": "Hộp quà 12 viên socola phù hợp nhiều dịp."},
  {"id": 12, "slug": "hop-socola-mix", "name": "Hộp socola tổng hợp", "price": 295000, "category": "gift", "cocoaPercent": null, "weightGrams": 180, "image": "/images/products/hop-socola-mix.svg", "description": "Hộp socola kết hợp nhiều vị khác nhau."},
];

export default products;
