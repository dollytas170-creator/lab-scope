document.addEventListener('DOMContentLoaded', () => {
  // تحديث السنة في الفوتر
  const y = new Date().getFullYear();
  ['year','year2','year3'].forEach(id => {
    const el = document.getElementById(id);
    if(el) el.textContent = y;
  });

  // تفعيل تحقق الفورم Bootstrap
  const forms = document.querySelectorAll('.needs-validation');
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
      } else {
        event.preventDefault();
        const alertBox = document.getElementById('formAlert');
        if(alertBox){
          alertBox.classList.remove('d-none','alert-danger');
          alertBox.classList.add('alert-success');
          alertBox.textContent = 'تم استلام الطلب بنجاح. سنتواصل معك قريبًا.';
        }
        form.reset();
      }
      form.classList.add('was-validated');
    }, false);
  });

  // لا تغييرات إضافية لازمة لأزرار الواتساب لأن الروابط تحتوي target و rel
});