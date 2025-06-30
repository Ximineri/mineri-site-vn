window.addEventListener('load', function() {

    // --- ACCORDION LOGIC ---
    document.querySelectorAll('.accordion-header').forEach(header => {
        header.addEventListener('click', () => {
            const content = header.nextElementSibling;
            const isActive = content.style.maxHeight;
            header.classList.toggle('active');
            if (isActive) {
                content.style.maxHeight = null;
                header.querySelector('.plus-minus').textContent = '+';
            } else {
                content.style.maxHeight = content.scrollHeight + "px";
                header.querySelector('.plus-minus').textContent = '-';
            }
        });
    });

    // --- DUAL SIMULATOR LOGIC ---
    function initializeSimulator() {
        const allSliders = document.querySelectorAll('.slider');
        if (allSliders.length === 0) return;

        function updateAllFinancials() {
            const occupancy = parseInt(document.getElementById('occupancyRate').value);
            const eventCount = parseInt(document.getElementById('eventRentals').value);
            const bottlesSold = parseInt(document.getElementById('bottlesSold').value);
            const workshopRevenue = parseInt(document.getElementById('workshopRevenue').value);

            document.getElementById('occupancyValue').textContent = occupancy;
            document.getElementById('eventRentalsValue').textContent = eventCount;
            document.getElementById('bottlesSoldValue').textContent = bottlesSold;
            document.getElementById('workshopRevenueValue').textContent = workshopRevenue.toLocaleString();

            const nightlyRate = 1000, eventRate = 2000, bottlePrice = 290, bottleCostRate = 0.20, fAndBRate = 60, avgGuests = 8;
            const fixedRent = 3000, managerSalary = 1657, otherFixedCosts = 600 + 300 + 500 + 1000, ownerCommRate = 0.15;
            
            const residentialRevenue = occupancy * nightlyRate;
            const eventRentalRevenue = eventCount * eventRate;
            const perfumeRevenue = bottlesSold * bottlePrice;
            const totalGrossRevenue = residentialRevenue + eventRentalRevenue + perfumeRevenue + workshopRevenue;
            
            const fAndBCost = occupancy * avgGuests * fAndBRate;
            const perfumeCost = perfumeRevenue * bottleCostRate;
            const totalOperatingCosts = fAndBCost + perfumeCost + managerSalary + otherFixedCosts;
            
            const netProfit = totalGrossRevenue - totalOperatingCosts - fixedRent;
            
            const ownerCommission = netProfit > 0 ? netProfit * ownerCommRate : 0;
            const ownerTotalIncome = fixedRent + ownerCommission;
            const mineriNetProfit = netProfit - ownerCommission;

            document.getElementById('simGrossRevenue').textContent = '$' + Math.round(totalGrossRevenue).toLocaleString();
            document.getElementById('simOwnerShare').textContent = '$' + Math.round(ownerTotalIncome).toLocaleString();
            document.getElementById('simMineriProfit').textContent = '$' + Math.round(mineriNetProfit).toLocaleString();
        }
        
        allSliders.forEach(slider => slider.addEventListener('input', updateAllFinancials));
        updateAllFinancials();
    }
    
    // --- CONTRACT LOGIC ---
    function initializeContract() {
        const contractWrapper = document.getElementById('full-contract-content-wrapper');
        if(!contractWrapper) return;
        
        // The contract HTML is now hardcoded in the index.html file for reliability.
        // This script only needs to handle the interactivity.
        const contractOptions = contractWrapper.querySelectorAll('input[type="radio"]');
        const summaryList = document.getElementById('summary-list');
        
        function updateSummary() {
            if (!summaryList) return;
            const selectedOptions = contractWrapper.querySelectorAll('input[type="radio"]:checked');
            
            contractWrapper.querySelectorAll('.option-label').forEach(label => label.classList.remove('selected'));
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
    
    // --- PRINT LOGIC ---
    const printButton = document.getElementById('printButton');
    if(printButton) {
        printButton.addEventListener('click', () => {
             const contractWrapper = document.getElementById('full-contract-content-wrapper');
             if(!contractWrapper) return;

             let printableHTML = ``;
             const headerInfo = `<h2>HỢP ĐỒNG THUÊ CHÍNH</h2><p><strong>GIỮA CÁC BÊN GỒM :</strong>...</p><p>VÀ</p><p><strong>BÊN THUÊ CHÍNH :</strong>...</p><hr>`;
             printableHTML += headerInfo;

             contractWrapper.querySelectorAll('.contract-article').forEach(article => {
                let articleClone = article.cloneNode(true);
                let fieldsets = articleClone.querySelectorAll('fieldset');
                
                if (fieldsets.length > 0) {
                    fieldsets.forEach(fieldset => {
                        let selectedRadio = fieldset.querySelector('input[type="radio"]:checked');
                        if (selectedRadio) {
                            fieldset.querySelectorAll('.option-label').forEach(label => {
                                if (!label.contains(selectedRadio)) label.remove();
                            });
                        }
                    });
                }
                printableHTML += articleClone.innerHTML + '<hr>';
             });
            
             const footerInfo = `<br/><br/><br/><table style="width: 100%; margin-top: 5em; border-collapse: collapse;"><tr><td style="width: 50%;"><strong>BÊN CHO THUÊ</strong><br/><br/><br/>_________________________</td><td style="width: 50%;"><strong>BÊN THUÊ CHÍNH</strong><br/><br/><br/>_________________________</td></tr></table>`;
             printableHTML += footerInfo;

            const printWindow = window.open('', '_blank');
            printWindow.document.write(`
                <html><head><title>MINĒRI - Hợp Đồng Hợp Tác</title>
                <style>
                    body { font-family: 'Times New Roman', Times, serif; line-height: 1.5; margin: 2cm; } 
                    h2, h3, h4, strong, legend { font-family: 'Barlow Condensed', sans-serif; } 
                    h3 { border-top: 1px solid #ccc; padding-top: 1em; margin-top: 2em; }
                    fieldset { border: 0; padding: 0; margin: 0; }
                    .option-label { border: 1px solid #ccc; padding: 1em; margin-top: 0.5em; }
                    p { margin: 0.5em 0; }
                </style></head><body>${printableHTML}</body></html>
            `);
            printWindow.document.close();
            printWindow.focus();
            setTimeout(() => { printWindow.print(); }, 500);
        });
    }

    // --- INITIALIZE ALL ---
    initializeSimulator();
    initializeContract();
});
