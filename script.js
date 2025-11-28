// Открытие/закрытие бургер меню
const burgerMenu = document.getElementById('burgerMenu');
const sideMenu = document.getElementById('sideMenu');
const closeMenu = document.getElementById('closeMenu');
const menuOverlay = document.getElementById('menuOverlay');

function toggleMenu() {
    burgerMenu.classList.toggle('active');
    sideMenu.classList.toggle('active');
    menuOverlay.classList.toggle('active');
    document.body.style.overflow = sideMenu.classList.contains('active') ? 'hidden' : '';
}

burgerMenu.addEventListener('click', toggleMenu);
closeMenu.addEventListener('click', toggleMenu);
menuOverlay.addEventListener('click', toggleMenu);

// Закрытие меню при клике на ссылку
const menuLinks = document.querySelectorAll('.side-menu a');
menuLinks.forEach(link => {
    link.addEventListener('click', toggleMenu);
});

// Плавная прокрутка к якорям
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Функция для показа уведомления
function showNotification(message, isError = false) {
    const notification = document.getElementById('notification');
    const notificationText = document.getElementById('notificationText');
    
    notificationText.textContent = message;
    
    if (isError) {
        notification.classList.add('error');
    } else {
        notification.classList.remove('error');
    }
    
    notification.classList.add('show');
    
    // Автоматическое скрытие через 5 секунд
    setTimeout(() => {
        notification.classList.remove('show');
    }, 5000);
}

// Закрытие уведомления по клику на крестик
document.getElementById('notificationClose').addEventListener('click', function() {
    document.getElementById('notification').classList.remove('show');
});

// Обработка формы для отправки в Telegram
const telegramForm = document.getElementById('telegramForm');

telegramForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Ваши данные (ЗАМЕНИТЕ на правильные!)
    const botToken = '8520745312:AAHMU0WsPx4pnlcaD1DRwPf1AphdgE1miq0';
    const chatID = '6812412253'; // ← ВАШ НАСТОЯЩИЙ CHAT ID!
    
    const name = this.name.value;
    const phone = this.phone.value;
    const messageText = this.message.value || 'Не указано';
    
    const message = `📦 Новая заявка с сайта!\n👤 Имя: ${name}\n📞 Телефон: ${phone}\n📝 Сообщение: ${messageText}`;})
    
    // Показываем индикатор загрузки