$(document).ready(function () {
    // تفعيل Select2 إن وجدت في الصفحة
    if ($('.select2-init').length) {
        $('.select2-init').select2({
            theme: 'bootstrap-5',
            dir: 'rtl',
            dropdownAutoWidth: true,
            width: '100%'
        });
    }

    // تفعيل DataTables إن وجد في الصفحة
    if ($('#pricesDataTable').length) {
        $('#pricesDataTable').DataTable({
            responsive: true,
            pageLength: 6,
            lengthChange: false,
            ordering: false,
            language: {
                url: 'assets/data/datatables-ar.json'
            }
        });
    }

    // معالجة نموذج الحجز وتحويله لواتساب
    $('#serviceOrderForm').on('submit', function (e) {
        e.preventDefault();

        const name = $('#cust_name').val().trim();
        const phone = $('#cust_phone').val().trim();
        const gov = $('#cust_gov').val();
        const device = $('#cust_device').val();
        const issue = $('#cust_issue').val();
        const address = $('#cust_address').val().trim();
        const notes = $('#cust_notes').val().trim() || 'لا توجد ملاحظات إضافية';

        const whatsappNumber = "201112657449";

        const message =
            `🛠️ *طلب صيانة جديد - مركز CoolCare*
━━━━━━━━━━━━━━━━━
👤 *الاسم:* ${name}
📱 *رقم الموبايل:* ${phone}
📍 *المحافظة والنطاق:* ${gov}
🏠 *العنوان التفصيلي:* ${address}
❄️ *نوع الجهاز:* ${device}
⚠️ *الخدمة أو المشكلة:* ${issue}
📝 *ملاحظات إضافية:* ${notes}
━━━━━━━━━━━━━━━━━
📌 برجاء تأكيد موعد المعاينة من طرفكم.`;

        window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`, '_blank');
    });
});