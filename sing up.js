// تحديد عناصر النموذج
const form = document.querySelector('.signup-form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');

// التعامل مع الحدث عند إرسال النموذج
form.addEventListener('submit', (e) => {
    e.preventDefault(); // منع الإرسال الافتراضي للنموذج

    // جلب البيانات المدخلة
    const userData = {
        name: nameInput.value,
        email: emailInput.value,
        password: passwordInput.value,
    };

    // الحصول على البيانات الحالية المخزنة في localStorage
    let storedUsers = JSON.parse(localStorage.getItem('users')) || [];

    // إضافة البيانات الجديدة
    storedUsers.push(userData);

    // تخزين البيانات في localStorage
    localStorage.setItem('users', JSON.stringify(storedUsers));

    // إعادة تعيين الحقول بعد الحفظ
    form.reset();

    // رسالة تأكيد
    alert('تم إنشاء الحساب بنجاح!');
});

// استرجاع وعرض البيانات من localStorage (اختياري)
document.addEventListener('DOMContentLoaded', () => {
    const storedUsers = JSON.parse(localStorage.getItem('users')) || [];
    console.log('المستخدمون المخزنون:', storedUsers);
});