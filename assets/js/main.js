// مثال JS بسيط: رسالة عند إرسال الفورم
const form = document.querySelector('form');
if(form){
    form.addEventListener('submit', function(e){
        e.preventDefault();
        alert('تم إرسال رسالتك بنجاح! سنتواصل معك قريبًا.');
        form.reset();
    });
}
