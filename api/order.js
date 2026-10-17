export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ success: false, message: "Chỉ chấp nhận phương thức POST!" });
    }

    const { service, link, quantity } = req.body;

    // --- ĐOẠN NÀY DÙNG ĐỂ ĐẤU NỐI VỚI WEB MẸ ---
    // (Sau này lấy Link API và API Key do "web mẹ" cung cấp để thay vào đây)
    const WEB_ME_URL = "https://api.web-me-cua-ban.com/v2/order";
    const WEB_ME_API_KEY = "DIEN_API_KEY_CUA_BAN_O_DAY";

    try {
        // Gửi lệnh tự động sang web mẹ xử lý đơn
        /* 
        let response = await fetch(WEB_ME_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${WEB_ME_API_KEY}`
            },
            body: JSON.stringify({ service, link, quantity })
        });
        let data = await response.json();
        */

        // Tạm thời trả về thông báo giả lập thành công để bạn test giao diện trước:
        return res.status(200).json({ 
            success: true, 
            message: `Đặt thành công ${quantity} cho dịch vụ ${service}! Hệ thống đang xử lý.` 
        });

    } catch (error) {
        return res.status(500).json({ success: false, message: "Không thể kết nối đến web mẹ!" });
    }
}
