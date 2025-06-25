function initializeApp() {
    const contractData = {
        header: `<h2>HỢP ĐỒNG THUÊ CHÍNH</h2><p><strong>GIỮA CÁC BÊN GỒM :</strong></p><p><strong>BÊN CHO THUÊ (CHỦ SỞ HỮU) :</strong><br/>[HỌ VÀ TÊN ĐẦY ĐỦ CỦA CHỦ SỞ HỮU]<br/>[ĐỊA CHỈ ĐẦY ĐỦ CỦA CHỦ SỞ HỮU]<br/>[SỐ ĐIỆN THOẠI CỦA CHỦ SỞ HỮU]<br/>[ĐỊA CHỈ EMAIL CỦA CHỦ SỞ HỮU]</p><p>VÀ</p><p><strong>BÊN THUÊ CHÍNH :</strong><br/>Công ty Thăng Long Event<br/>Đại diện bởi Ông LERALE Alexis, Người Sáng Lập & Giám Đốc Điều Hành của MINĒRI</p>`,
        articles: [
            { id: 1, title: "Điều 1 : Mục Đích Hợp Đồng", content: "<p>Hợp đồng này nhằm mục đích Bên Cho Thuê bàn giao tài sản được mô tả dưới đây cho Bên Thuê Chính, để khai thác kinh doanh dưới thương hiệu MINĒRI, chuyên về lưu trú du lịch cao cấp và tổ chức sự kiện. Quan hệ đối tác này nhằm tối đa hóa giá trị của Biệt Thự và tạo ra doanh thu tối ưu cho cả hai Bên.</p>" },
            { id: 2, title: "Điều 2 : Mô Tả Tài Sản", content: "<p>Hợp đồng này áp dụng cho biệt thự tọa lạc tại : [ĐỊA CHỈ ĐẦY ĐỦ CỦA BIỆT THỰ], bao gồm [SỐ LƯỢNG] phòng ngủ và các tiện nghi khác như hồ bơi riêng, sân vườn, v.v.</p>" },
            { id: 3, title: "Điều 3 : Thời Hạn Hợp Đồng và Điều Khoản Gia Hạn", content: "<p>Thời Hạn Ban Đầu : Hợp đồng thuê chính này được ký kết với thời hạn ban đầu là mười hai (12) tháng liên tục, có hiệu lực kể từ ngày ký. Khi kết thúc thời hạn ban đầu, hợp đồng sẽ được tự động gia hạn thêm các thời kỳ liên tiếp mỗi thời kỳ mười hai (12) tháng, trừ khi một trong hai bên thông báo cho bên còn lại về ý định không gia hạn ít nhất ba (3) tháng trước ngày hết hạn của thời hạn hiện tại.</p>" },
            { id: 4, title: "Điều 4 : Điều Kiện Tài Chính", content: "<p><strong>Tiền Thuê Cố Định Hàng Tháng :</strong> Bên Thuê Chính cam kết thanh toán cho Bên Cho Thuê một khoản tiền thuê cố định hàng tháng là 3.000 USD (Ba nghìn Đô la Mỹ). Đây là một mức cơ bản có thể đàm phán.</p><p><strong>Hoa Hồng trên Tổng Doanh Thu Gộp :</strong> Ngoài tiền thuê cố định, Bên Thuê Chính cam kết thanh toán cho Bên Cho Thuê một khoản hoa hồng là 15% (Mười lăm phần trăm) trên tổng doanh thu gộp được tạo ra từ việc khai thác Biệt Thự.</p>", options: [{ name: "securityDeposit", legend: "A. Về Khoản Đặt Cọc Bảo Đảm", choices: [{ value: "A.1", title: "Lựa Chọn A.1 : Miễn Trừ Tạm Thời và Hình Thành Dần.", text: "Không yêu cầu đặt cọc bảo đảm khi bắt đầu hợp đồng. Khoản đặt cọc bảo đảm sẽ được hình thành dần bằng 10% lợi nhuận ròng hàng tháng của MINĒRI, bắt đầu từ tháng thứ tư hoạt động, cho đến khi đạt mức tương đương 1,5 tháng tiền thuê cố định." },{ value: "A.2", title: "Lựa Chọn A.2 : Thanh Toán Dần Trong 6 Tháng Đầu.", text: "Khoản đặt cọc bảo đảm, tương đương 1,5 tháng tiền thuê cố định, sẽ được chia thành 6 lần thanh toán bằng nhau trong sáu tháng đầu tiên của hợp đồng." }]}, { name: "initialRent", legend: "B. Về Thời Kỳ Thuê Ban Đầu", choices: [{ value: "B.1", title: "Lựa Chọn B.1 : Thời Gian Ân Hạn Ban Đầu (Chỉ Hoa Hồng).", text: "Trong hai (2) tháng đầu tiên của hợp đồng, chỉ phần trăm hoa hồng trên tổng doanh thu gộp (15%) sẽ được thanh toán. Tiền thuê cố định 3.000 USD/tháng sẽ bắt đầu được thanh toán từ tháng thứ ba trở đi." },{ value: "B.2", title: "Lựa Chọn B.2 : Giảm Tiền Thuê Cố Định Trong 3 Tháng.", text: "Tiền thuê cố định sẽ giảm xuống còn 1.500 USD/tháng (tức là 50% số tiền ban đầu) trong ba (3) tháng đầu tiên của hợp đồng. Tiền thuê cố định đầy đủ 3.000 USD/tháng sẽ bắt đầu được thanh toán từ tháng thứ tư trở đi." }]}]},
            { id: 5, title: "Điều 5 : Sử Dụng Tài Sản và Giấy Phép Kinh Doanh", content: "<p>Bên Cho Thuê cho phép rõ ràng và không điều kiện công ty Thăng Long Event (hoạt động dưới thương hiệu MINĒRI) sử dụng Biệt Thự với mục đích hoàn toàn thương mại, bao gồm lưu trú du lịch cao cấp và địa điểm tổ chức sự kiện. Bên Cho Thuê cấp cho Bên Thuê Chính quyền không thể hủy bỏ để cho thuê lại Biệt Thự cho bên thứ ba (Khách) dưới trách nhiệm hoàn toàn và duy nhất của mình.</p>" },
            { id: 6, title: "Điều 6 : Phân Chia Trách Nhiệm và Bảo Trì Biệt Thự", content: "<p><strong>Trách Nhiệm Của Bên Cho Thuê:</strong> Bên Cho Thuê vẫn chịu trách nhiệm về các yếu tố cấu trúc và cơ sở hạ tầng nặng của Biệt Thự (ví dụ : mái nhà, móng, hệ thống điện và nước chính, máy bơm hồ bơi).<br><strong>Trách Nhiệm Của MINĒRI:</strong> MINĒRI đảm nhận trách nhiệm quản lý vận hành và bảo trì thường xuyên (ví dụ : giám sát chung, đón tiếp khách, thay thế bóng đèn, sửa chữa nhỏ do hao mòn thông thường).</p>", options: [{ name: "cleaning", legend: "C. Trách Nhiệm Cụ Thể : Dọn Dẹp Sâu & Quản Lý Đồ Giặt", choices: [{ value: "C.1", title: "Lựa Chọn C.1 : Chủ Nhà Chịu Trách Nhiệm Hoàn Toàn Về Dọn Dẹp và Giặt Ủi.", text: "Chủ nhà chịu trách nhiệm tổ chức và tài trợ toàn bộ việc dọn dẹp sâu biệt thự sau mỗi lần khách trả phòng, cũng như cung cấp, thay mới và bảo trì tất cả đồ vải gia đình." },{ value: "C.2", title: "Lựa Chọn C.2 : MINĒRI Quản Lý Dọn Dẹp và Giặt Ủi Thông Qua Dịch Vụ Của Chủ Nhà (Được Hoàn Trả Chi Phí).", text: "MINĒRI sẽ tổ chức và giám sát việc dọn dẹp sâu và quản lý đồ giặt sau mỗi lần khách trả phòng, sử dụng các nhà cung cấp dịch vụ thường xuyên của Chủ nhà. Các chi phí sẽ được lập hóa đơn cho MINĒRI bởi Chủ nhà." },{ value: "C.3", title: "Lựa Chọn C.3 : MINĒRI Chịu Trách Nhiệm Hoàn Toàn Về Dọn Dẹp và Giặt Ủi.", text: "MINĒRI chịu trách nhiệm tổ chức, giám sát và tài trợ toàn bộ việc dọn dẹp sâu biệt thự sau mỗi lần khách trả phòng, cũng như cung cấp, thay mới và bảo trì tất cả đồ vải gia đình." }]}]},
            { id: 7, title: "Điều 7 : Bảo Hiểm và Trách Nhiệm Liên Quan Đến Bảo Hiểm", content: "<p>Bên Cho Thuê cam kết mua và duy trì một hợp đồng bảo hiểm đa rủi ro nhà ở bao gồm cấu trúc Biệt Thự. MINĒRI (Thăng Long Event) cam kết mua và duy trì một Bảo Hiểm Trách Nhiệm Dân Sự Chuyên Nghiệp / Khai Thác bao gồm các hoạt động kinh doanh của mình.</p>" },
            { id: 8, title: "Điều 8 : Nghĩa Vụ Chung Của Các Bên", content: "<p>Bên Cho Thuê sẽ bàn giao Biệt Thự trong tình trạng hoạt động hoàn hảo và có thể ở được và đảm bảo quyền sử dụng yên bình. Bên Thuê Chính sẽ sử dụng Biệt Thự phù hợp với mục đích đã xác định, duy trì nó trong tình trạng tốt, và tuân thủ tất cả các luật và quy định hiện hành.</p>" },
            { id: 9, title: "Điều 9 : Giải Quyết Tranh Chấp", content: "<p>Mọi tranh chấp sẽ được giải quyết bằng cách ưu tiên các giải pháp hòa giải thông qua một phương pháp tiếp cận theo giai đoạn: 1. Đàm Phán Hòa Giải Trực Tiếp, 2. Hòa Giải, 3. Trọng Tài, 4. Biện Pháp Pháp Lý tại các tòa án có thẩm quyền của Đà Nẵng/Quảng Nam.</p>" },
            { id: 10, title: "Điều 10 : Điều Khoản Chấm Dứt Hợp Đồng Sớm", content: "<p>Hợp đồng có thể bị chấm dứt bởi một trong hai bên trong trường hợp có vi phạm nghiêm trọng và lặp đi lặp lại các nghĩa vụ hợp đồng của mình bởi bên kia, sau khi có thông báo chính thức mà không có hiệu lực. Hợp đồng cũng có thể bị chấm dứt trong trường hợp bất khả kháng hoặc hư hỏng hoàn toàn Biệt Thự.</p>" },
            { id: 11, title: "Điều 11 : Các Điều Khoản Chung", content: "<p>Hợp đồng này được điều chỉnh và giải thích theo pháp luật Việt Nam. Bất kỳ sửa đổi nào phải được lập thành văn bản và được cả hai Bên ký.</p>" }
        ],
        footer: "<br/><br/><p><strong>BÊN CHO THUÊ</strong><br/><br/>_________________________<br/>[HỌ VÀ TÊN ĐẦY ĐỦ CỦA CHỦ SỞ HỮU]</p><br/><br/><p><strong>BÊN THUÊ CHÍNH</strong><br/>Cho Công ty Thăng Long Event<br/><br/>_________________________<br/>Ông LERALE Alexis</p>"
    };
    
    function buildContractHTML() {
        const container = document.getElementById('full-contract-content-wrapper');
        if (!container) return;
        let html = '';
        contractData.articles.forEach(article => {
            html += `<div class="contract-article"><h3>${article.title}</h3>${article.content || ''}`;
            if (article.options) {
                article.options.forEach(optionGroup => {
                    html += `<fieldset><legend>${optionGroup.legend}</legend><div class="option-group">`;
                    optionGroup.choices.forEach(choice => {
                        html += `<label class="option-label"><input type="radio" name="${optionGroup.name}" value="${choice.value}"><div><strong>${choice.title}</strong><p>${choice.text}</p></div></label>`;
                    });
                    html += `</div></fieldset>`;
                });
            }
            html += `</div>`;
        });
        container.innerHTML = html;
    }
    
    document.querySelectorAll('.accordion-header').forEach(header => {
        header.addEventListener('click', () => {
            const content = header.nextElementSibling;
            const isActive = content.style.maxHeight;
            if (isActive) {
                content.style.maxHeight = null;
                header.querySelector('.plus-minus').textContent = '+';
            } else {
                content.style.maxHeight = content.scrollHeight + "px";
                header.querySelector('.plus-minus').textContent = '-';
            }
        });
    });

    const occupancySlider = document.getElementById('occupancyRate');
    const nightlyRateSlider = document.getElementById('nightlyRate');
    function calculateFinancials() {
        if (!occupancySlider) return;
        const occupancy = parseInt(occupancySlider.value);
        const rate = parseInt(nightlyRateSlider.value);
        document.getElementById('occupancyValue').textContent = occupancy;
        document.getElementById('nightlyRateValue').textContent = rate;
        const nPM=30, eR=4000, fC=480, oC=3380, oFR=3000, oCR=0.15;
        const oN = nPM * (occupancy / 100);
        const rR = oN * rate;
        const tGR = rR + eR;
        const oS = oFR + (tGR * oCR);
        const tOC = oC + (oN * fC);
        const mP = tGR - oS - tOC;
        document.getElementById('simGrossRevenue').textContent = '$' + Math.round(tGR).toLocaleString();
        document.getElementById('simOwnerShare').textContent = '$' + Math.round(oS).toLocaleString();
        document.getElementById('simMineriProfit').textContent = '$' + Math.round(mP).toLocaleString();
    }
    if (occupancySlider) {
        [occupancySlider, nightlyRateSlider].forEach(s => s.addEventListener('input', calculateFinancials));
        calculateFinancials();
    }

    function initializeContract() {
        buildContractHTML();
        const contractOptions = document.querySelectorAll('#contract input[type="radio"]');
        const summaryList = document.getElementById('summary-list');
        function updateSummary() {
            if (!summaryList) return;
            const selectedOptions = document.querySelectorAll('#contract input[type="radio"]:checked');
            document.querySelectorAll('.option-label').forEach(label => label.classList.remove('selected'));
            selectedOptions.forEach(radio => radio.closest('.option-label').classList.add('selected'));
            summaryList.innerHTML = ''; 
            if (selectedOptions.length === 0) {
                summaryList.innerHTML = `<li><p>Vui lòng chọn một tùy chọn trong mỗi danh mục...</p></li>`;
            } else {
                selectedOptions.forEach(option => {
                    const groupNameEl = option.closest('fieldset').querySelector('legend');
                    const optionTitleEl = option.closest('.option-label').querySelector('strong');
                    const li = document.createElement('li');
                    li.innerHTML = `<strong>${groupNameEl.textContent}:</strong> ${optionTitleEl.textContent}`;
                    summaryList.appendChild(li);
                });
            }
            const accordionContent = summaryList.closest('.accordion-content');
            if (accordionContent && accordionContent.style.maxHeight) {
                accordionContent.style.maxHeight = accordionContent.scrollHeight + "px";
            }
        }
        contractOptions.forEach(option => option.addEventListener('change', updateSummary));
        updateSummary();
    }
    initializeContract();

    const printButton = document.getElementById('printButton');
    if(printButton) {
        printButton.addEventListener('click', () => {
            let printableHTML = `<h1>HỢP ĐỒNG THUÊ CHÍNH</h1>${contractData.header}`;
            contractData.articles.forEach(article => {
                printableHTML += `<h3>${article.title}</h3>`;
                if (article.options) {
                    printableHTML += article.content;
                    article.options.forEach(optionGroup => {
                        const selectedOption = document.querySelector(`input[name="${optionGroup.name}"]:checked`);
                        printableHTML += `<h4>${optionGroup.legend}</h4>`;
                        if (selectedOption) {
                            const choiceData = optionGroup.choices.find(c => c.value === selectedOption.value);
                            printableHTML += `<div style="border:1px solid #ccc; padding:10px;"><strong>${choiceData.title}</strong><p>${choiceData.text}</p></div>`;
                        } else {
                            printableHTML += `<p><em>Chưa chọn tùy chọn cho mục này.</em></p>`;
                        }
                    });
                } else {
                    printableHTML += article.content;
                }
            });
            printableHTML += contractData.footer;

            const printWindow = window.open('', '_blank');
            printWindow.document.write(`<html><head><title>MINĒRI - Hợp Đồng Thuê Chính</title><style>body { font-family: 'Times New Roman', Times, serif; line-height: 1.5; margin: 2cm; } h1, h2, h3, h4, strong { font-family: Arial, sans-serif; } h3 { color: #770099; border-top: 1px solid #ccc; padding-top: 1em; margin-top: 1em;} p { margin-top: 0.5em; margin-bottom: 0.5em; }</style></head><body>${printableHTML}</body></html>`);
            printWindow.document.close();
            printWindow.focus();
            setTimeout(() => { printWindow.print(); }, 500);
        });
    }
}
window.addEventListener('load', initializeApp);
