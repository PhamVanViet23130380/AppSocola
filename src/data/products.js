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
  {
    id: 1,
    slug: "socola-den-70",
    name: "Socola đen 70%",
    price: 145000,
    category: "dark",
    cocoaPercent: 70,
    weightGrams: 80,
    image: "/images/products/socola-den-70.svg",
    description: `GIỚI THIỆU
Socola đen 70% mang đến vị cacao đậm cùng độ ngọt nhẹ, phù hợp với người yêu thích socola đen nhưng vẫn muốn sự cân bằng giữa ngọt và đắng. Thanh socola 80g thuận tiện để thưởng thức từng chút hoặc chia sẻ cùng người thân.

HƯƠNG VỊ
Vị đắng đặc trưng của cacao xuất hiện trước, tiếp nối bằng vị ngọt nhẹ. Hương vị tập trung vào cacao, phù hợp với người muốn thưởng thức vị socola đen nguyên bản.

GỢI Ý THƯỞNG THỨC
Bẻ thành từng miếng nhỏ và để socola tan chậm trong miệng. Có thể dùng cùng cà phê hoặc trà tùy sở thích.

BẢO QUẢN
Giữ nơi khô ráo, thoáng mát, tránh ánh nắng trực tiếp và nguồn nhiệt. Sau khi mở, bọc kín phần còn lại và tránh để gần thực phẩm có mùi mạnh. Tham khảo hướng dẫn cụ thể trên bao bì.`
  },
  {
    id: 2,
    slug: "socola-den-85",
    name: "Socola đen 85%",
    price: 165000,
    category: "dark",
    cocoaPercent: 85,
    weightGrams: 80,
    image: "/images/products/socola-den-85.svg",
    description: `GIỚI THIỆU
Socola đen 85% dành cho người yêu thích vị cacao đậm và độ đắng rõ nét. Với tỷ lệ cacao cao, sản phẩm mang đến trải nghiệm mạnh hơn so với dòng socola đen 70%, phù hợp để thưởng thức chậm từng miếng nhỏ.

HƯƠNG VỊ
Vị cacao nổi bật, độ ngọt nhẹ và hậu vị đắng kéo dài. Đây là lựa chọn dành cho người đã quen với socola đen và muốn khám phá hương vị đậm hơn.

GỢI Ý THƯỞNG THỨC
Bắt đầu bằng một miếng nhỏ để cảm nhận hương vị. Có thể dùng cùng trà hoặc cà phê, điều chỉnh cách kết hợp theo khẩu vị cá nhân.

BẢO QUẢN
Để nơi khô ráo, thoáng mát, tránh ánh nắng và nguồn nhiệt. Bọc kín sau khi mở, tránh tiếp xúc với độ ẩm và thực phẩm có mùi mạnh. Tham khảo hướng dẫn cụ thể trên bao bì.`
  },
  {
    id: 3,
    slug: "socola-den-cam",
    name: "Socola đen vị cam",
    price: 155000,
    category: "dark",
    cocoaPercent: 68,
    weightGrams: 80,
    image: "/images/products/socola-den-cam.svg",
    description: `GIỚI THIỆU
Socola đen vị cam kết hợp vị cacao đậm với hương cam nhẹ, tạo nên lựa chọn mới mẻ bên cạnh socola đen truyền thống. Thanh socola 80g phù hợp để thưởng thức cá nhân hoặc làm một món quà nhỏ.

HƯƠNG VỊ
Vị đắng nhẹ của socola đen hòa cùng hương cam thanh, mang đến cảm giác vừa đậm vừa tươi mới. Hương cam góp phần tạo điểm nhấn cho hậu vị cacao.

GỢI Ý THƯỞNG THỨC
Thưởng thức từng miếng nhỏ để cảm nhận sự kết hợp giữa cacao và cam. Có thể dùng cùng trà trong những buổi nghỉ ngơi hoặc trò chuyện.

BẢO QUẢN
Giữ sản phẩm trong bao bì kín ở nơi khô ráo, thoáng mát. Tránh ánh nắng trực tiếp, nguồn nhiệt và thực phẩm có mùi mạnh để giữ hương vị. Tham khảo hướng dẫn cụ thể trên bao bì.`
  },
  {
    id: 4,
    slug: "socola-sua-truyen-thong",
    name: "Socola sữa truyền thống",
    price: 125000,
    category: "milk",
    cocoaPercent: 40,
    weightGrams: 80,
    image: "/images/products/socola-sua-truyen-thong.svg",
    description: `GIỚI THIỆU
Socola sữa truyền thống mang đến sự kết hợp quen thuộc giữa vị cacao và hương sữa. Sản phẩm phù hợp với người thích socola có vị ngọt dễ thưởng thức, nhẹ nhàng hơn so với các dòng socola đen.

HƯƠNG VỊ
Hương sữa nổi bật đi cùng vị cacao nhẹ và độ ngọt vừa. Cảm giác mềm mịn tạo nên trải nghiệm gần gũi, phù hợp cho những lúc muốn thưởng thức một chút ngọt ngào.

GỢI Ý THƯỞNG THỨC
Dùng trực tiếp từng miếng nhỏ hoặc kết hợp cùng bánh quy và đồ uống yêu thích. Thanh 80g cũng thuận tiện để chia sẻ.

BẢO QUẢN
Để nơi khô ráo, thoáng mát, tránh nguồn nhiệt và ánh nắng trực tiếp. Sau khi mở, bọc kín phần chưa dùng và tránh để gần thực phẩm có mùi mạnh. Tham khảo hướng dẫn cụ thể trên bao bì.`
  },
  {
    id: 5,
    slug: "socola-sua-vanilla",
    name: "Socola sữa vanilla",
    price: 135000,
    category: "milk",
    cocoaPercent: 38,
    weightGrams: 80,
    image: "/images/products/socola-sua-vanilla.svg",
    description: `GIỚI THIỆU
Socola sữa vanilla kết hợp vị socola sữa ngọt dịu với hương vanilla nhẹ nhàng. Đây là lựa chọn dành cho người thích hương vị mềm mại và muốn một chút khác biệt so với socola sữa truyền thống.

HƯƠNG VỊ
Vị sữa hòa quyện cùng cacao nhẹ, điểm thêm hương vanilla dịu. Tổng thể thiên về sự ngọt ngào, dễ thưởng thức và không quá đậm vị cacao.

GỢI Ý THƯỞNG THỨC
Thưởng thức trực tiếp hoặc dùng cùng bánh quy, trà và các món tráng miệng tùy sở thích. Bẻ từng miếng nhỏ để cảm nhận rõ hương vanilla.

BẢO QUẢN
Giữ nơi khô ráo, thoáng mát, tránh ánh nắng và nguồn nhiệt. Bọc kín sau khi mở để hạn chế tiếp xúc với độ ẩm và mùi từ thực phẩm khác. Tham khảo hướng dẫn cụ thể trên bao bì.`
  },
  {
    id: 6,
    slug: "socola-trang",
    name: "Socola trắng",
    price: 130000,
    category: "milk",
    cocoaPercent: null,
    weightGrams: 80,
    image: "/images/products/socola-trang.svg",
    description: `GIỚI THIỆU
Socola trắng mang đến hương sữa ngọt dịu và cảm giác mềm mịn khi thưởng thức. Sản phẩm phù hợp với người thích vị ngọt, muốn tìm một lựa chọn khác bên cạnh socola đen và socola sữa.

HƯƠNG VỊ
Hương sữa nổi bật, vị ngọt rõ và không có vị đắng đặc trưng như socola đen. Hương vị nhẹ nhàng phù hợp để kết hợp cùng những món ăn có vị chua hoặc ít ngọt.

GỢI Ý THƯỞNG THỨC
Dùng từng miếng nhỏ hoặc kết hợp với trái cây theo sở thích. Có thể dùng làm điểm nhấn cho các món tráng miệng.

BẢO QUẢN
Để nơi khô ráo, thoáng mát, tránh ánh nắng trực tiếp và nguồn nhiệt. Sau khi mở, bọc kín và tránh để gần thực phẩm có mùi mạnh. Tham khảo hướng dẫn cụ thể trên bao bì.`
  },
  {
    id: 7,
    slug: "socola-hanh-nhan",
    name: "Socola hạnh nhân",
    price: 175000,
    category: "nuts",
    cocoaPercent: 55,
    weightGrams: 100,
    image: "/images/products/socola-hanh-nhan.svg",
    description: `GIỚI THIỆU
Socola hạnh nhân kết hợp vị cacao với hạnh nhân giòn, mang đến trải nghiệm có cả độ mềm của socola và độ giòn của hạt. Sản phẩm phù hợp với người thích socola kết hợp các loại hạt.

HƯƠNG VỊ
Vị cacao đậm vừa, độ ngọt cân bằng và hương hạnh nhân đặc trưng. Những miếng hạt giòn tạo điểm nhấn khi thưởng thức.

GỢI Ý THƯỞNG THỨC
Dùng trực tiếp để cảm nhận kết cấu socola và hạt. Có thể chia thành phần nhỏ để thưởng thức cùng trà hoặc cà phê.

BẢO QUẢN
Giữ nơi khô ráo, thoáng mát, tránh ánh nắng và nguồn nhiệt. Đóng kín sau khi mở để hạn chế tiếp xúc với độ ẩm, giúp giữ chất lượng socola và độ giòn của hạt. Tham khảo hướng dẫn cụ thể trên bao bì.`
  },
  {
    id: 8,
    slug: "socola-hat-dieu",
    name: "Socola hạt điều",
    price: 170000,
    category: "nuts",
    cocoaPercent: 50,
    weightGrams: 100,
    image: "/images/products/socola-hat-dieu.svg",
    description: `GIỚI THIỆU
Socola hạt điều mang đến sự kết hợp giữa vị socola và hạt điều rang thơm. Sản phẩm phù hợp với người yêu thích vị bùi của hạt cùng chút ngọt ngào từ socola.

HƯƠNG VỊ
Vị cacao vừa phải hòa cùng hương hạt điều rang. Độ bùi và giòn của hạt tạo sự khác biệt so với những thanh socola không có hạt.

GỢI Ý THƯỞNG THỨC
Thưởng thức trực tiếp từng miếng nhỏ hoặc dùng trong những buổi trò chuyện cùng bạn bè. Có thể kết hợp với đồ uống ít ngọt tùy khẩu vị.

BẢO QUẢN
Để nơi khô ráo, thoáng mát, tránh ánh nắng trực tiếp và nguồn nhiệt. Bọc kín phần còn lại sau khi mở để hạn chế độ ẩm và mùi từ thực phẩm khác. Tham khảo hướng dẫn cụ thể trên bao bì.`
  },
  {
    id: 9,
    slug: "socola-hat-phu-de",
    name: "Socola hạt phỉ",
    price: 185000,
    category: "nuts",
    cocoaPercent: 52,
    weightGrams: 100,
    image: "/images/products/socola-hat-phu-de.svg",
    description: `GIỚI THIỆU
Socola hạt phỉ kết hợp vị cacao với hương hạt phỉ đặc trưng. Đây là lựa chọn dành cho người yêu thích socola có hương hạt và muốn trải nghiệm khác với hạnh nhân hoặc hạt điều.

HƯƠNG VỊ
Vị cacao đậm vừa hòa cùng vị bùi, béo của hạt phỉ. Hương hạt tạo điểm nhấn cho từng miếng socola và để lại hậu vị thơm nhẹ.

GỢI Ý THƯỞNG THỨC
Thưởng thức chậm từng miếng để cảm nhận hương hạt phỉ. Có thể dùng cùng cà phê hoặc trà theo sở thích.

BẢO QUẢN
Giữ sản phẩm ở nơi khô ráo, thoáng mát, tránh ánh nắng và nguồn nhiệt. Sau khi mở, bọc kín phần chưa dùng và tránh để gần thực phẩm có mùi mạnh. Tham khảo hướng dẫn cụ thể trên bao bì.`
  },
  {
    id: 10,
    slug: "hop-qua-6-vien",
    name: "Hộp socola 6 viên",
    price: 220000,
    category: "gift",
    cocoaPercent: null,
    weightGrams: 120,
    image: "/images/products/hop-qua-6-vien.svg",
    description: `GIỚI THIỆU
Hộp socola 6 viên là lựa chọn quà tặng nhỏ gọn, phù hợp để gửi lời cảm ơn hoặc tạo một bất ngờ ngọt ngào. Với tổng khối lượng 120g, hộp quà cũng thích hợp để thưởng thức và chia sẻ.

HƯƠNG VỊ
Hộp kết hợp nhiều hương vị socola, mang đến sự thay đổi khi thưởng thức từng viên. Thành phần và hương vị cụ thể cần được đối chiếu với thông tin của từng loại trong hộp.

GỢI Ý THƯỞNG THỨC
Thưởng thức từng viên để cảm nhận sự khác nhau giữa các hương vị. Có thể kết hợp với trà trong những buổi gặp gỡ hoặc dùng làm quà tặng.

BẢO QUẢN
Giữ hộp ở nơi khô ráo, thoáng mát, tránh ánh nắng và nguồn nhiệt. Đóng kín sau khi mở, hạn chế tiếp xúc với độ ẩm và mùi từ thực phẩm khác. Tham khảo hướng dẫn cụ thể trên bao bì.`
  },
  {
    id: 11,
    slug: "hop-qua-12-vien",
    name: "Hộp socola 12 viên",
    price: 350000,
    category: "gift",
    cocoaPercent: null,
    weightGrams: 240,
    image: "/images/products/hop-qua-12-vien.svg",
    description: `GIỚI THIỆU
Hộp socola 12 viên mang đến lựa chọn quà tặng để chia sẻ cùng người thân, bạn bè hoặc đồng nghiệp. Tổng khối lượng 240g phù hợp cho những buổi gặp gỡ và các dịp muốn gửi trao một món quà ngọt ngào.

HƯƠNG VỊ
Nhiều hương vị socola được kết hợp trong cùng một hộp, tạo sự đa dạng khi thưởng thức. Thông tin cụ thể về từng viên cần được đối chiếu với danh sách sản phẩm trong hộp.

GỢI Ý THƯỞNG THỨC
Chia sẻ cùng mọi người hoặc thưởng thức lần lượt từng loại theo sở thích. Dùng cùng trà hay cà phê để tạo thêm lựa chọn kết hợp.

BẢO QUẢN
Để hộp ở nơi khô ráo, thoáng mát, tránh ánh nắng trực tiếp và nguồn nhiệt. Đóng kín phần chưa dùng, tránh độ ẩm và thực phẩm có mùi mạnh. Tham khảo hướng dẫn cụ thể trên bao bì.`
  },
  {
    id: 12,
    slug: "hop-socola-mix",
    name: "Hộp socola tổng hợp",
    price: 295000,
    category: "gift",
    cocoaPercent: null,
    weightGrams: 180,
    image: "/images/products/hop-socola-mix.svg",
    description: `GIỚI THIỆU
Hộp socola tổng hợp dành cho người muốn khám phá nhiều hương vị trong cùng một lựa chọn. Hộp 180g phù hợp để thưởng thức chung hoặc làm quà cho người yêu thích sự đa dạng.

HƯƠNG VỊ
Sự kết hợp nhiều loại socola mang đến trải nghiệm thay đổi theo từng phần thưởng thức. Thành phần, tỷ lệ cacao và hương vị cụ thể phụ thuộc vào từng loại được lựa chọn trong hộp.

GỢI Ý THƯỞNG THỨC
Thưởng thức lần lượt từng loại để tìm ra hương vị yêu thích hoặc chia sẻ cùng bạn bè. Có thể dùng kèm trà, cà phê theo khẩu vị cá nhân.

BẢO QUẢN
Giữ nơi khô ráo, thoáng mát, tránh nguồn nhiệt và ánh nắng trực tiếp. Sau khi mở, đóng kín phần còn lại và tránh để gần thực phẩm có mùi mạnh. Tham khảo hướng dẫn cụ thể trên bao bì.`
  }
];

export default products;
