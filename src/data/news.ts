export type NewsArticle = {
    id: number;
    slug: string;
    title: string;
    category: string;
    date: string;
    summary: string;
    image: string;
    content: string[];
};

export const newsCategories = [
    { id: "all", name: "Tất cả" },
    { id: "kien-thuc", name: "Kiến thức socola" },
    { id: "meo-hay", name: "Mẹo hay" },
    { id: "qua-tang", name: "Gợi ý quà tặng" }
];

export const news: NewsArticle[] = [
    {
        id: 1,
        slug: "socola-den-va-socola-sua",
        title: "Socola đen và socola sữa khác nhau ở đâu?",
        category: "kien-thuc",
        date: "28/11/2026",
        summary: "Tìm hiểu hai loại socola quen thuộc để chọn đúng vị mình thích.",
        image: "/images/products/socola-den-70.svg",
        content: [
            "Socola đen thường có vị cacao rõ và hơi đắng, trong khi socola sữa mềm vị hơn nhờ có thêm thành phần sữa. Mỗi loại đều có nét riêng nên không có lựa chọn nào phù hợp với tất cả mọi người.",
            "Nếu thích vị đậm, bạn có thể thử socola đen với tỷ lệ cacao từ 70%. Nếu mới bắt đầu ăn socola hoặc thích vị ngọt dịu, socola sữa sẽ dễ thưởng thức hơn.",
            "Khi chọn mua, hãy xem tỷ lệ cacao và bảng thành phần trên bao bì. Bạn cũng có thể mua một thanh nhỏ của mỗi loại để thử trước khi chọn hộp quà lớn."
        ]
    },
    {
        id: 2,
        slug: "cach-bao-quan-socola",
        title: "Bảo quản socola thế nào để không bị chảy?",
        category: "meo-hay",
        date: "26/11/2026",
        summary: "Một vài cách đơn giản giúp socola giữ được mùi vị và hình dáng.",
        image: "/images/products/socola-sua-vanilla.svg",
        content: [
            "Socola dễ mềm khi để gần cửa sổ, bếp nấu hoặc nơi có nắng trực tiếp. Tốt nhất bạn nên đặt socola ở nơi khô ráo, thoáng mát và tránh thay đổi nhiệt độ liên tục.",
            "Nếu thời tiết quá nóng, hãy cho socola vào hộp kín trước khi đặt trong ngăn mát tủ lạnh. Cách này giúp hạn chế hơi ẩm và mùi từ thực phẩm khác bám vào socola.",
            "Khi lấy socola ra khỏi tủ lạnh, bạn nên để hộp trở về gần nhiệt độ phòng rồi mới mở. Nhớ kiểm tra hướng dẫn bảo quản của từng sản phẩm để có cách sử dụng phù hợp."
        ]
    },
    {
        id: 3,
        slug: "chon-socola-lam-qua-sinh-nhat",
        title: "Chọn hộp socola làm quà sinh nhật",
        category: "qua-tang",
        date: "23/11/2026",
        summary: "Chọn socola theo khẩu vị người nhận để món quà gần gũi hơn.",
        image: "/images/products/hop-qua-12-vien.svg",
        content: [
            "Một hộp socola nhỏ là lựa chọn dễ chuẩn bị cho sinh nhật bạn bè và người thân. Thay vì chỉ nhìn mẫu hộp, bạn nên nghĩ xem người nhận thích socola đắng, ngọt hay có hạt.",
            "Nếu chưa biết rõ khẩu vị, hộp socola nhiều vị sẽ là lựa chọn an toàn. Người nhận có thể thử từng viên và tìm được hương vị mình yêu thích.",
            "Bạn có thể thêm một tấm thiệp viết tay và chọn cách gói đơn giản. Sự quan tâm đến sở thích của người nhận thường quan trọng hơn việc chọn món quà quá cầu kỳ."
        ]
    },
    {
        id: 4,
        slug: "hieu-ty-le-cacao",
        title: "Hiểu tỷ lệ cacao trên thanh socola",
        category: "kien-thuc",
        date: "19/11/2026",
        summary: "Con số 70%, 85% trên bao bì có ý nghĩa gì?",
        image: "/images/products/socola-den-85.svg",
        content: [
            "Trên nhiều thanh socola đen, tỷ lệ phần trăm cacao cho biết lượng thành phần có nguồn gốc từ cacao trong sản phẩm. Đây là thông tin hữu ích khi bạn muốn so sánh các thanh socola.",
            "Tỷ lệ cacao cao thường đi kèm hương vị đậm và ít ngọt hơn, nhưng cảm nhận còn phụ thuộc công thức của từng nhà sản xuất. Hai thanh cùng ghi 70% vẫn có thể khác nhau về mùi và độ đắng.",
            "Nếu chưa quen socola đen, bạn có thể bắt đầu từ tỷ lệ vừa phải rồi thử dần những loại đậm hơn. Đọc thêm bảng thành phần sẽ giúp bạn lựa chọn phù hợp."
        ]
    },
    {
        id: 5,
        slug: "ket-hop-socola-voi-do-uong",
        title: "Kết hợp socola với trà và cà phê",
        category: "meo-hay",
        date: "15/11/2026",
        summary: "Thử những cách thưởng thức socola đơn giản tại nhà.",
        image: "/images/products/socola-hanh-nhan.svg",
        content: [
            "Một miếng socola nhỏ đi cùng trà hoặc cà phê có thể tạo nên bữa xế nhẹ nhàng. Bạn không cần chuẩn bị gì phức tạp, chỉ cần chọn thức uống quen thuộc và một loại socola mình thích.",
            "Socola sữa có vị ngọt dịu có thể dùng với trà nóng. Với người thích hương vị mạnh hơn, socola đen cùng một tách cà phê không đường cũng là cách kết hợp đáng thử.",
            "Hãy thử từng miếng nhỏ và uống một ngụm giữa các lần nếm. Bạn sẽ dễ cảm nhận sự thay đổi của hương vị hơn là ăn nhiều loại cùng lúc."
        ]
    },
    {
        id: 6,
        slug: "goi-y-qua-socola-cuoi-nam",
        title: "Gợi ý quà socola cho dịp cuối năm",
        category: "qua-tang",
        date: "10/11/2026",
        summary: "Một vài lựa chọn quà tặng dễ chuẩn bị cho bạn bè và đồng nghiệp.",
        image: "/images/products/hop-socola-mix.svg",
        content: [
            "Cuối năm là dịp nhiều người muốn gửi một món quà nhỏ để cảm ơn bạn bè, đồng nghiệp hoặc người thân. Socola là lựa chọn tiện lợi vì có nhiều kiểu hộp và hương vị.",
            "Với nhóm bạn cùng lớp hoặc đồng nghiệp, bạn có thể chọn các hộp nhỏ dễ chia. Với người thân, một hộp nhiều vị kèm lời nhắn sẽ tạo cảm giác gần gũi hơn.",
            "Trước khi tặng, nên kiểm tra thành phần nếu người nhận có dị ứng với sữa hoặc các loại hạt. Đừng quên bảo quản hộp quà ở nơi thoáng mát trước ngày tặng."
        ]
    }
];

export function getNewsCategoryName(category: string) {
    return newsCategories.find((item) => item.id === category)?.name || "Tin tức";
}
