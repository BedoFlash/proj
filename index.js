// تحديد عناصر النموذج
const loginForm = document.querySelector('form');
const usernameInput = document.querySelector('input[name="username"]');
const passwordInput = document.querySelector('input[name="password"]');

// التعامل مع الحدث عند محاولة تسجيل الدخول
loginForm.addEventListener('submit', (e) => {
    e.preventDefault(); // منع السلوك الافتراضي للنموذج

    // جلب القيم المدخلة
    const enteredUsername = usernameInput.value;
    const enteredPassword = passwordInput.value;

    // استرجاع البيانات المخزنة في localStorage
    const storedUsers = JSON.parse(localStorage.getItem('users')) || [];

    // التحقق من وجود مستخدم بنفس البيانات
    const userFound = storedUsers.find(user => 
        user.name === enteredUsername && user.password === enteredPassword
    );

    if (userFound) {
        // إذا كان المستخدم موجودًا
        // alert('تم تسجيل الدخول بنجاح!');
        // قم بتوجيه المستخدم إلى الرابط المطلوب
        window.location.href = './home.html';
    } else {
        // إذا كانت البيانات غير صحيحة
        alert('اسم المستخدم أو كلمة المرور غير صحيحة.');
    }

    // إعادة تعيين الحقول
    loginForm.reset();
})