document.getElementById('reset-password-form').onsubmit = function(event) {
    event.preventDefault(); // منع الإرسال الافتراضي للنموذج

    const email = document.getElementById('email').value;

    // إرسال البيانات إلى الخادم
    fetch('reset_password.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email: email })
    })
    .then(response => response.json())
    .then(data => {
        // عرض رسالة استجابة من الخادم
        const responseMessage = document.getElementById('response-message');
        responseMessage.innerText = data.message;
        responseMessage.style.color = 'white'; // تغيير لون الرسالة
    })
    .catch(error => {
        console.error('Error:', error);
        const responseMessage = document.getElementById('response-message');
        responseMessage.innerText = 'حدث خطأ أثناء إرسال الطلب.';
        responseMessage.style.color = 'red'; // تغيير لون الرسالة إلى أحمر في حالة الخطأ
    });
};