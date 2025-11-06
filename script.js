// ========================================
// DATOS GLOBALES
// ========================================

// Fecha de inicio de la relación
const startDate = new Date('2024-11-06');

// Imágenes de la galería de belleza (16 imágenes)
const soloImages = Array.from({length: 16}, (_, i) => `${i + 1}.jpeg`);
const soloCaptions = [
    'Tu sonrisa ilumina mi mundo',
    'Eres la más hermosa',
    'Cada mirada tuya me enamora',
    'Belleza pura y natural',
    'Mi musa eterna',
    'Radiante como el sol',
    'Dulce y encantadora',
    'Inolvidable',
    'Perfecta en todo sentido',
    'Mi amor por ti crece cada día',
    'Eres mi todo',
    'Hermosa por dentro y fuera',
    'Te adoro',
    'Siempre en mi corazón',
    'Mi reina',
    'Luz de mi vida'
];

// Imágenes del muro de recuerdos cinematográficos (23 imágenes)
const cinemaImages = [
    '18.jpeg', '19.jpeg', '20.jpeg', '21.jpeg', '22.png', 
    '23.png', '24.png', '25.png', '26.jpeg', '27.jpeg',
    '28.jpeg', '29.jpeg', '30.jpeg', '31.jpeg', '32.jpeg',
    '33.jpeg', '34.jpeg','35.jpeg', '36.png', '37.png',
    '38.png', '39.png', '40.jpeg',
];

const cinemaCaptions = [
    'Nuestro primer día en el cine juntos',
    'Compartiendo palomitas y sonrisas',
    'La película que nos hizo llorar de risa',
    'Tomados de la mano en la sala oscura',
    'Susurrando durante los créditos finales',
    'Tu expresión al ver tu película favorita',
    'El abrazo después de esa escena emotiva',
    'Saliendo del cine, hablando de la trama',
    'Esperando en la fila, emocionados',
    'La selfie antes de entrar a la sala',
    'Eligiendo los mejores asientos',
    'Momento dulce entre previews',
    'Riendo juntos en la comedia romántica',
    'Concentrados en el thriller',
    'Tu cara de sorpresa en el plot twist',
    'Compartiendo una bebida',
    'El ticket como recuerdo',
    'Salida nocturna del cine',
    'Comentando nuestras escenas favoritas',
    'Planeando la próxima película',
    'Abrazados en la función de tarde',
    'Disfrutando los trailers juntos',
    'Nuestro rincón especial en el cine'
];

// Lugares del mapa de amor en Piura
const loveMapPins = [
    {
        name: 'Parque Abelardo Quiñones',
        address: 'Los Capulies 25, Piura 20002',
        icon: '🌳',
        image: '2.jpeg',
        date: 'Diciembre 2024',
        phrase: 'Donde paseamos bajo las estrellas'
    },
    {
        name: 'Cinerama Piura',
        address: 'Av. Grau, Piura 20001',
        icon: '🎬',
        image: '18.jpeg',
        date: 'Noviembre 2024',
        phrase: 'Nuestra primera cita mágica'
    },
    {
        name: 'Plaza de Armas Piura',
        address: 'Jr. Huancavelica 724, Piura 20001',
        icon: '⛲',
        image: '5.jpeg',
        date: 'Enero 2025',
        phrase: 'Caminatas románticas en el corazón de la ciudad'
    },
    {
        name: 'Real Plaza Piura',
        address: 'Av. Sánchez Cerro 234, Piura 20001',
        icon: '🛍️',
        image: '8.jpeg',
        date: 'Febrero 2025',
        phrase: 'Tardes de compras y risas'
    },
    {
        name: 'Parque Miguel Cortés',
        address: 'Calle, Piura 20001',
        icon: '🌺',
        image: '12.jpeg',
        date: 'Marzo 2025',
        phrase: 'Nuestro refugio de paz'
    }
];

// Frases románticas
const romanticPhrases = [
    '"Contigo descubrí que el amor verdadero no se busca, se encuentra"',
    '"Cada día a tu lado es una página nueva de nuestra historia de amor"',
    '"Eres la respuesta a preguntas que nunca supe formular"',
    '"En tus ojos encontré el hogar que siempre busqué"',
    '"Tu amor me enseñó que los sueños sí se hacen realidad"',
    '"Contigo aprendí que amar es el acto más valiente"',
    '"Eres mi lugar favorito en cualquier parte del mundo"',
    '"Tu presencia convierte lo ordinario en extraordinario"',
    '"Amar es elegirte a ti, una y mil veces más"',
    '"Eres la melodía que mi corazón siempre quiso cantar"'
];

// Mensajes de amor
const loveMessages = [
    'Eres mi universo entero, mi razón de sonreír cada mañana.',
    'Cada latido de mi corazón lleva tu nombre grabado.',
    'Contigo descubrí que el amor verdadero existe.',
    'Eres mi hogar, mi paz, mi todo.',
    'Tu amor es la melodía más hermosa de mi vida.',
    'Cada día contigo es un nuevo capítulo de nuestra historia.',
    'Eres la respuesta a todas mis oraciones.',
    'Tu sonrisa es mi amanecer favorito.'
];

// Mensajes de sorpresa
const surprises = [
    'Eres la persona más especial en mi vida. Cada día contigo es un regalo.',
    'Tu sonrisa ilumina mis días más oscuros. Eres mi luz.',
    'Contigo descubrí el verdadero significado del amor.',
    'Eres mi hogar, mi paz, mi felicidad infinita.',
    'Cada momento a tu lado es un tesoro que guardo en mi corazón.'
];

// Mensajes de burbujas
const bubbleMessages = [
    'Te amo más cada día ❤️',
    'Eres mi sueño hecho realidad 💫',
    'Gracias por existir 🌟',
    'Contigo todo es mejor 💕',
    'Mi amor eterno eres tú 💖',
    'Juntos para siempre 💑',
    'Eres mi felicidad 😊',
    'Te necesito siempre 🥰'
];

// Poemas
const poems = [
    { 
        title: 'Luz de Mi Vida', 
        text: 'En tus ojos veo el infinito,\nun universo de amor tan bonito.\nEres mi sol, mi luna y más,\nmi corazón late solo por ti, jamás.',
        author: 'Original'
    },
    { 
        title: 'Eterno Amor', 
        text: 'Como el mar que besa la arena,\nasí mi amor por ti se llena.\nCada ola trae un te quiero,\neres mi todo, mi amor verdadero.',
        author: 'Original'
    },
    { 
        title: 'Juntos', 
        text: 'Tomados de la mano caminamos,\nen este viaje que juntos creamos.\nCada paso es un nuevo comienzo,\ncontigo el amor es inmenso.',
        author: 'Original'
    },
    { 
        title: 'Mi Musa', 
        text: 'Eres la poesía que escribo,\nla razón por la que vivo.\nEn cada verso está tu esencia,\nmi amor por ti es mi existencia.',
        author: 'Original'
    },
    { 
        title: 'Destino', 
        text: 'El destino nos unió aquel día,\ny desde entonces mi vida es alegría.\nEres mi sueño hecho realidad,\nmi amor eterno, mi verdad.',
        author: 'Original'
    },
    { 
        title: 'Promesa', 
        text: 'Prometo amarte cada amanecer,\nen cada atardecer volver a crecer.\nNuestro amor es infinito y real,\neres mi todo, mi amor especial.',
        author: 'Original'
    }
];

// 100 Razones por las que te amo
const reasons100 = [
    'Por tu sonrisa que ilumina mis días',
    'Por cómo me miras con amor',
    'Por tu risa contagiosa',
    'Por tu bondad infinita',
    'Por ser mi mejor amiga',
    'Por entender mi silencio',
    'Por tu paciencia conmigo',
    'Por tus abrazos reconfortantes',
    'Por creer en mí',
    'Por tu belleza interior y exterior',
    'Por hacerme reír cuando estoy triste',
    'Por compartir tus sueños conmigo',
    'Por tu forma única de ver el mundo',
    'Por estar ahí en los momentos difíciles',
    'Por celebrar mis logros',
    'Por tu apoyo incondicional',
    'Por tu honestidad',
    'Por tu dulzura',
    'Por tu fortaleza',
    'Por inspirarme cada día',
    'Por tu amor por la vida',
    'Por cómo cuidas los detalles',
    'Por tus mensajes de buenos días',
    'Por las noches de películas',
    'Por compartir palomitas conmigo',
    'Por tu sentido del humor',
    'Por escucharme con atención',
    'Por aceptarme tal como soy',
    'Por hacerme una mejor persona',
    'Por tu valentía',
    'Por tus ojos que brillan',
    'Por tu cabello hermoso',
    'Por tu voz melodiosa',
    'Por tus manos suaves',
    'Por cómo bailas',
    'Por cómo cantas',
    'Por tu creatividad',
    'Por tu inteligencia',
    'Por tu sabiduría',
    'Por tu empatía',
    'Por tu generosidad',
    'Por compartir tu tiempo conmigo',
    'Por las aventuras juntos',
    'Por los momentos de tranquilidad',
    'Por respetar mi espacio',
    'Por incluirme en tu vida',
    'Por presentarme a tu familia',
    'Por conocer a mis seres queridos',
    'Por las conversaciones profundas',
    'Por las tonterías que decimos',
    'Por los silencios cómodos',
    'Por tu forma de vestir',
    'Por tu estilo único',
    'Por cómo me haces sentir especial',
    'Por recordar las pequeñas cosas',
    'Por los detalles inesperados',
    'Por tu espontaneidad',
    'Por tu compromiso',
    'Por tu lealtad',
    'Por tu confianza en nosotros',
    'Por soñar un futuro juntos',
    'Por amar a mi familia',
    'Por tu corazón noble',
    'Por perdonar mis errores',
    'Por crecer juntos',
    'Por aprender de ti',
    'Por enseñarme tantas cosas',
    'Por tu pasión',
    'Por tu determinación',
    'Por nunca rendirte',
    'Por luchar por nosotros',
    'Por las mañanas a tu lado',
    'Por las noches estrelladas',
    'Por los atardeceres compartidos',
    'Por los amaneceres juntos',
    'Por cada beso',
    'Por cada abrazo',
    'Por cada caricia',
    'Por cada "te amo"',
    'Por tu perfume',
    'Por cómo hueles',
    'Por tu calidez',
    'Por ser mi hogar',
    'Por ser mi paz',
    'Por ser mi refugio',
    'Por ser mi motivación',
    'Por ser mi inspiración',
    'Por ser mi razón',
    'Por ser mi alegría',
    'Por ser mi esperanza',
    'Por ser mi presente',
    'Por ser mi futuro',
    'Por las promesas cumplidas',
    'Por los planes por cumplir',
    'Por respetar mis sueños',
    'Por apoyar mis metas',
    'Por caminar a mi lado',
    'Por no dejarme caer',
    'Por levantarme cuando caigo',
    'Por ser mi fuerza',
    'Por ser mi luz en la oscuridad',
    'Por ser simplemente tú',
    'Por existir en mi vida',
    'Por ser el amor de mi vida'
];

// Citas pendientes
const pendingDates = [
    {
        emoji: '🎡',
        title: 'Parque de Diversiones',
        date: 'Próximamente',
        place: 'Aventura total'
    },
    {
        emoji: '🍕',
        title: 'Cena Romántica',
        date: 'Próximamente',
        place: 'Restaurante especial'
    },
    {
        emoji: '🏖️',
        title: 'Día de Playa',
        date: 'Próximamente',
        place: 'Máncora o Colán'
    },
    {
        emoji: '🎭',
        title: 'Noche de Teatro',
        date: 'Próximamente',
        place: 'Teatro Municipal'
    },
    {
        emoji: '🌄',
        title: 'Escapada al Campo',
        date: 'Próximamente',
        place: 'Naturaleza pura'
    }
];

// Datos del juego "Adivina la Foto"
const guessGameImages = [
    { img: '3.jpeg', options: ['En el parque', 'En casa', 'En el cine', 'En la playa'], correct: 0 },
    { img: '6.jpeg', options: ['Día soleado', 'Noche estrellada', 'Atardecer', 'Amanecer'], correct: 2 },
    { img: '9.jpeg', options: ['Sonriendo feliz', 'Pensativa', 'Sorprendida', 'Riendo'], correct: 0 },
    { img: '11.jpeg', options: ['Con amigos', 'Sola', 'Conmigo', 'Con familia'], correct: 2 },
    { img: '13.jpeg', options: ['Casual', 'Elegante', 'Deportiva', 'Pijama'], correct: 1 },
    { img: '14.jpeg', options: ['Interior', 'Exterior', 'Calle', 'Parque'], correct: 1 },
    { img: '15.jpeg', options: ['Mañana', 'Tarde', 'Noche', 'Madrugada'], correct: 1 },
    { img: '16.jpeg', options: ['Feliz', 'Seria', 'Juguetona', 'Emocionada'], correct: 2 }
];

// Carta de amor
const loveLetter = `Mi Amor,

Mientras escribo estas palabras, mi corazón late al ritmo de tu nombre. Cada letra es un suspiro, cada palabra un latido que te pertenece.

Desde el 6 de noviembre de 2024, mi vida cambió para siempre. Ese día, el universo conspiró para unir nuestros caminos, y desde entonces, cada amanecer tiene un propósito: amarte más que ayer.

Eres la respuesta a preguntas que nunca supe formular, el sueño que no sabía que estaba soñando, la melodía que mi alma siempre quiso cantar.

En tus ojos encuentro mi hogar, en tu sonrisa mi felicidad, y en tus brazos, mi refugio perfecto.

Gracias por existir, por amarme, por elegirme cada día.

Te amo con todo mi ser, hoy, mañana y por siempre.

Tuyo eternamente,
Tu amor`;

// Poema final del rompecabezas
const finalPoem = `Mi Amor Sincero

En el lienzo de mi vida, tú eres el color,
la pincelada perfecta que llena mi corazón de amor.
Cada día a tu lado es un regalo celestial,
un momento mágico, un sentimiento tan real.

Tu esencia ilumina mi camino oscuro,
tu risa es la melodía de mi futuro.
En tus ojos encuentro mi hogar,
en tus brazos, mi lugar para descansar.

No hay palabras suficientes para expresar,
lo que siento cuando estoy junto a ti sin cesar.
Eres mi sueño hecho realidad,
mi amor eterno, mi verdad.

Este amor que siento es puro y sincero,
nace del alma, profundo y verdadero.
Prometo amarte cada despertar,
y en cada momento, juntos caminar.

Eres mi todo, mi razón de existir,
mi compañera perfecta hasta el fin.
Gracias por ser tú, por tu amor sin fin,
por hacer de mi vida un hermoso jardín.

Te amo con todo mi ser,
hoy, mañana y por siempre, hasta el amanecer.`;

// Recuerdos del reloj (12 horas)
const clockMemories = [
    { hour: 0, memory: 'Medianoche - Conversaciones hasta el amanecer', date: 'Noviembre 2024' },
    { hour: 1, memory: 'Madrugada - Mensajes de buenas noches', date: 'Diciembre 2024' },
    { hour: 2, memory: 'De madrugada - Soñando contigo', date: 'Enero 2025' },
    { hour: 3, memory: 'Antes del alba - Pensando en ti', date: 'Febrero 2025' },
    { hour: 4, memory: 'Amanecer - Buenos días mi amor', date: 'Marzo 2025' },
    { hour: 5, memory: 'Mañana temprano - Preparándonos para vernos', date: 'Abril 2025' },
    { hour: 6, memory: 'Mañana - Desayunos juntos', date: 'Mayo 2025' },
    { hour: 7, memory: 'Media mañana - Mensajes de te extraño', date: 'Junio 2025' },
    { hour: 8, memory: 'Antes del mediodía - Planeando nuestra cita', date: 'Julio 2025' },
    { hour: 9, memory: 'Mediodía - Almuerzo romántico', date: 'Agosto 2025' },
    { hour: 10, memory: 'Tarde - Paseos por el parque', date: 'Septiembre 2025' },
    { hour: 11, memory: 'Noche - Cine y palomitas', date: 'Octubre 2025' }
];

// Variables del puzzle
let currentPuzzleLevel = 1;
let puzzleSize = 2;
let puzzleMoves = 0;
let puzzleGrid = [];
let emptyPos = { row: 0, col: 0 };

// Variables del juego "Adivina la Foto"
let currentGuessIndex = 0;

// Variables del juego "Encuentra el Beso"
let kissClicks = 7;

// Variable para modo historia
let storyMode = false;
let currentStorySection = 0;

// ========================================
// INICIALIZACIÓN AL CARGAR LA PÁGINA
// ========================================
document.addEventListener('DOMContentLoaded', () => {
    // Cargar todas las secciones
    loadGallery();
    loadLoveMap();
    loadMemoryWall();
    loadReasons();
    loadPoems();
    loadPendingDates();
    initPuzzle();
    shufflePuzzle();
    initGuessGame();
    initScratchCard();
    initConstellation();
    initLoveTree();
    
    // Iniciar corazones flotantes
    createFloatingHearts();
    
    // Actualizar reloj
    updateClock();
    setInterval(updateClock, 1000);
    
    // Actualizar contador de días
    updateDaysCounter();
    
    // Configurar transición suave para mensajes
    document.getElementById('rotating-message').style.transition = 'opacity 0.3s';
    document.getElementById('romantic-phrase').style.transition = 'opacity 0.5s';
    
    // Verificar y mostrar carta de amor (solo primera vez del día)
    checkAndShowLetter();
    
    // Verificar modo nocturno
    checkNightMode();
    
    // Evento para tecla L
    document.addEventListener('keydown', (e) => {
        if (e.key === 'l' || e.key === 'L') {
            createHeartRain();
        }
    });
    
    // Contador de clics para mensaje secreto en Morse
    let clickCount = 0;
    let clickTimer;
    document.getElementById('main-title').addEventListener('click', () => {
        clickCount++;
        clearTimeout(clickTimer);
        if (clickCount === 5) {
            showMorseMessage();
            clickCount = 0;
        }
        clickTimer = setTimeout(() => clickCount = 0, 2000);
    });
    
    console.log('Mi Amor Eterno - Sitio cargado correctamente ❤️');
});

// ========================================
// FUNCIÓN: CORAZONES FLOTANTES
// ========================================
function createFloatingHearts() {
    const container = document.getElementById('floating-hearts');
    
    setInterval(() => {
        const heart = document.createElement('div');
        heart.className = 'floating-heart';
        heart.innerHTML = '❤️';
        heart.style.left = Math.random() * 100 + '%';
        heart.style.bottom = '0';
        
        container.appendChild(heart);
        
        setTimeout(() => {
            heart.remove();
        }, 8000);
    }, 2000);
}

// ========================================
// FUNCIÓN: ACTUALIZAR RELOJ
// ========================================
function updateClock() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const time = `${hours}:${minutes}`;
    
    const clockEl = document.getElementById('clock-time');
    if (clockEl) clockEl.textContent = time;
    
    // Cambiar imagen de fondo según la hora
    const clockWidget = document.getElementById('clock-widget');
    const hourIndex = hours % 12;
    const imageIndex = hourIndex % soloImages.length;
    if (clockWidget) {
        clockWidget.style.backgroundImage = `url('${soloImages[imageIndex]}')`;
    }
}

function showClockMemory() {
    const hour = new Date().getHours() % 12;
    const memory = clockMemories[hour];
    document.getElementById('clock-memory-text').textContent = 
        `${memory.memory}\n${memory.date}`;
    document.getElementById('clock-memory-modal').classList.add('active');
}

function closeClockMemory() {
    document.getElementById('clock-memory-modal').classList.remove('active');
}

// ========================================
// FUNCIÓN: CONTADOR DE DÍAS JUNTOS
// ========================================
function updateDaysCounter() {
    const now = new Date();
    const diffTime = Math.abs(now - startDate);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    const daysEl = document.getElementById('days-together');
    if (daysEl) {
        daysEl.textContent = diffDays;
    }
}

function toggleHeartDetails() {
    const now = new Date();
    const diffTime = Math.abs(now - startDate);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    const months = Math.floor(diffDays / 30);
    const weeks = Math.floor(diffDays / 7);
    
    document.getElementById('detailed-days').textContent = 
        `Llevamos ${diffDays} días juntos\n${weeks} semanas de amor\n${months} meses de felicidad\n\nCada día contigo es un regalo ❤️`;
    
    document.getElementById('heart-details-modal').classList.add('active');
}

function closeHeartDetails() {
    document.getElementById('heart-details-modal').classList.remove('active');
}

// ========================================
// FUNCIÓN: FUEGOS ARTIFICIALES
// ========================================
function triggerFireworks() {
    const canvas = document.getElementById('fireworks-canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    canvas.classList.add('active');
    
    const particles = [];
    const colors = ['#ff69b4', '#ffd700', '#ff1493', '#ffb6c1', '#ff6347'];
    
    // Crear múltiples explosiones
    for (let i = 0; i < 5; i++) {
        setTimeout(() => {
            const x = Math.random() * canvas.width;
            const y = Math.random() * canvas.height / 2;
            
            for (let j = 0; j < 50; j++) {
                particles.push({
                    x: x,
                    y: y,
                    vx: (Math.random() - 0.5) * 10,
                    vy: (Math.random() - 0.5) * 10,
                    color: colors[Math.floor(Math.random() * colors.length)],
                    life: 100
                });
            }
        }, i * 500);
    }
    
    function animate() {
        ctx.fillStyle = 'rgba(26, 26, 46, 0.1)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        particles.forEach((p, index) => {
            p.x += p.vx;
            p.y += p.vy;
            p.vy += 0.1; // gravedad
            p.life--;
            
            if (p.life <= 0) {
                particles.splice(index, 1);
            } else {
                ctx.fillStyle = p.color;
                ctx.globalAlpha = p.life / 100;
                ctx.beginPath();
                ctx.arc(p.x, p.y, 3, 0, Math.PI * 2);
                ctx.fill();
            }
        });
        
        if (particles.length > 0) {
            requestAnimationFrame(animate);
        } else {
            canvas.classList.remove('active');
        }
    }
    
    animate();
}

// ========================================
// FUNCIÓN: LLUVIA DE PÉTALOS
// ========================================
function createPetalRain() {
    for (let i = 0; i < 30; i++) {
        setTimeout(() => {
            const petal = document.createElement('div');
            petal.className = 'petal';
            petal.innerHTML = '🌸';
            petal.style.left = Math.random() * 100 + '%';
            petal.style.top = '-50px';
            petal.style.animationDelay = Math.random() * 2 + 's';
            document.body.appendChild(petal);
            
            setTimeout(() => petal.remove(), 4000);
        }, i * 50);
    }
}

// ========================================
// FUNCIÓN: LLUVIA DE CORAZONES (Tecla L)
// ========================================
function createHeartRain() {
    for (let i = 0; i < 50; i++) {
        setTimeout(() => {
            const heart = document.createElement('div');
            heart.innerHTML = '❤️';
            heart.style.position = 'fixed';
            heart.style.left = Math.random() * window.innerWidth + 'px';
            heart.style.top = '-50px';
            heart.style.fontSize = (Math.random() * 30 + 20) + 'px';
            heart.style.opacity = '1';
            heart.style.pointerEvents = 'none';
            heart.style.zIndex = '9999';
            heart.style.transition = 'all 3s ease-out';
            document.body.appendChild(heart);
            
            setTimeout(() => {
                heart.style.top = window.innerHeight + 'px';
                heart.style.opacity = '0';
                heart.style.transform = `translateX(${Math.random() * 200 - 100}px) rotate(${Math.random() * 720}deg)`;
            }, 50);
            
            setTimeout(() => heart.remove(), 3500);
        }, i * 30);
    }
}

// ========================================
// FUNCIÓN: MENSAJE MORSE SECRETO
// ========================================
function showMorseMessage() {
    alert('.- -- --- .-. / . - . .-. -. ---\n\nAMOR ETERNO ❤️');
}

// ========================================
// FUNCIÓN: CARTA DE AMOR
// ========================================
function checkAndShowLetter() {
    const today = new Date().toDateString();
    const lastShown = localStorage.getItem('letterLastShown');
    
    if (lastShown !== today) {
        setTimeout(() => {
            showLetter();
            localStorage.setItem('letterLastShown', today);
        }, 2000);
    }
}

function showLetter() {
    const modal = document.getElementById('letter-modal');
    const letterEl = document.getElementById('letter-text');
    letterEl.textContent = '';
    modal.classList.add('active');
    
    let index = 0;
    const interval = setInterval(() => {
        if (index < loveLetter.length) {
            letterEl.textContent += loveLetter[index];
            index++;
        } else {
            clearInterval(interval);
        }
    }, 50);
}

function closeLetterModal() {
    document.getElementById('letter-modal').classList.remove('active');
}

// ========================================
// FUNCIÓN: MODO NOCTURNO
// ========================================
function checkNightMode() {
    const hour = new Date().getHours();
    if (hour >= 20 || hour < 6) {
        document.body.classList.add('night-mode');
        createStars();
    }
}

function createStars() {
    for (let i = 0; i < 50; i++) {
        const star = document.createElement('div');
        star.className = 'twinkling-star';
        star.innerHTML = '⭐';
        star.style.left = Math.random() * 100 + '%';
        star.style.top = Math.random() * 100 + '%';
        star.style.animationDelay = Math.random() * 3 + 's';
        document.body.appendChild(star);
    }
}

// ========================================
// FUNCIÓN: CARGAR GALERÍA DE TU BELLEZA
// ========================================
function loadGallery() {
    const gallery = document.getElementById('solo-gallery');
    soloImages.forEach((img, i) => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <img src="${img}" alt="${soloCaptions[i]}" loading="lazy">
            <div class="card-content">
                <p class="caption">${soloCaptions[i]}</p>
            </div>
        `;
        gallery.appendChild(card);
    });
}

// ========================================
// FUNCIÓN: CARGAR MAPA DEL AMOR
// ========================================
function loadLoveMap() {
    const mapContainer = document.getElementById('love-map');
    const svgContainer = document.getElementById('love-connections');
    
    // Posiciones de los pines (distribución en forma de corazón)
    const positions = [
        { x: 50, y: 20 },  // Arriba centro
        { x: 20, y: 40 },  // Izquierda
        { x: 80, y: 40 },  // Derecha
        { x: 35, y: 70 },  // Abajo izquierda
        { x: 65, y: 70 }   // Abajo derecha
    ];
    
    loveMapPins.forEach((pin, index) => {
        const pinEl = document.createElement('div');
        pinEl.className = 'love-pin';
        pinEl.innerHTML = pin.icon;
        pinEl.style.left = positions[index].x + '%';
        pinEl.style.top = positions[index].y + '%';
        pinEl.onclick = () => showPinModal(pin);
        mapContainer.appendChild(pinEl);
    });
    
    // Dibujar conexiones en forma de corazón
    drawHeartConnections(svgContainer, positions);
}

function drawHeartConnections(svg, positions) {
    svg.innerHTML = '';
    svg.setAttribute('viewBox', '0 0 100 100');
    svg.setAttribute('preserveAspectRatio', 'none');
    
    // Crear path de corazón conectando todos los puntos
    const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    const d = `
        M ${positions[0].x} ${positions[0].y}
        Q ${positions[1].x} ${positions[1].y - 10} ${positions[3].x} ${positions[3].y}
        Q 50 90 ${positions[4].x} ${positions[4].y}
        Q ${positions[2].x} ${positions[2].y - 10} ${positions[0].x} ${positions[0].y}
    `;
    
    path.setAttribute('d', d);
    path.setAttribute('stroke', 'rgba(255, 182, 193, 0.4)');
    path.setAttribute('stroke-width', '0.5');
    path.setAttribute('fill', 'none');
    svg.appendChild(path);
}

function showPinModal(pin) {
    document.getElementById('pin-image').src = pin.image;
    document.getElementById('pin-title').textContent = pin.name;
    document.getElementById('pin-date').textContent = pin.date;
    document.getElementById('pin-phrase').textContent = pin.phrase;
    document.getElementById('pin-modal').classList.add('active');
}

function closePinModal() {
    document.getElementById('pin-modal').classList.remove('active');
}

// ========================================
// FUNCIÓN: CARGAR MURO DE RECUERDOS
// ========================================
function loadMemoryWall() {
    const wall = document.getElementById('memory-wall');
    cinemaImages.forEach((img, i) => {
        const item = document.createElement('div');
        item.className = 'memory-item';
        item.innerHTML = `<img src="${img}" alt="${cinemaCaptions[i]}" loading="lazy">`;
        item.onclick = () => showImageModal(img, cinemaCaptions[i]);
        wall.appendChild(item);
    });
}

// ========================================
// FUNCIÓN: MOSTRAR MODAL DE IMAGEN
// ========================================
function showImageModal(imageSrc, caption) {
    const modal = document.getElementById('image-modal');
    const modalImage = document.getElementById('modal-image');
    const modalCaption = document.getElementById('modal-caption');
    
    modalImage.src = imageSrc;
    modalImage.alt = caption;
    modalCaption.textContent = caption;
    modal.classList.add('active');
}

// ========================================
// FUNCIÓN: CERRAR MODAL DE IMAGEN
// ========================================
function closeImageModal() {
    document.getElementById('image-modal').classList.remove('active');
}

// ========================================
// FUNCIÓN: JUEGO ADIVINA LA FOTO
// ========================================
function initGuessGame() {
    loadGuessRound();
}

function loadGuessRound() {
    const data = guessGameImages[currentGuessIndex];
    const imgEl = document.getElementById('guess-image');
    const overlayEl = document.getElementById('guess-overlay');
    const optionsEl = document.getElementById('guess-options');
    
    imgEl.src = data.img;
    imgEl.classList.remove('revealed');
    overlayEl.classList.remove('show');
    overlayEl.textContent = '';
    
    optionsEl.innerHTML = '';
    data.options.forEach((option, i) => {
        const btn = document.createElement('button');
        btn.textContent = option;
        btn.onclick = () => checkGuess(i, data.correct);
        optionsEl.appendChild(btn);
    });
}

function checkGuess(selected, correct) {
    const imgEl = document.getElementById('guess-image');
    const overlayEl = document.getElementById('guess-overlay');
    
    if (selected === correct) {
        imgEl.classList.add('revealed');
        overlayEl.textContent = '✅';
        overlayEl.classList.add('show');
        createCelebrationHearts();
    } else {
        overlayEl.textContent = '❌';
        overlayEl.classList.add('show');
        setTimeout(() => overlayEl.classList.remove('show'), 1000);
    }
}

function newGuessRound() {
    currentGuessIndex = (currentGuessIndex + 1) % guessGameImages.length;
    loadGuessRound();
}

// ========================================
// FUNCIÓN: JUEGO ENCUENTRA EL BESO
// ========================================
function clickKissGame(e) {
    if (kissClicks <= 0) return;
    
    kissClicks--;
    document.getElementById('kiss-clicks').textContent = kissClicks;
    
    // Crear marca de clic
    const mark = document.createElement('div');
    mark.innerHTML = '💕';
    mark.style.position = 'absolute';
    mark.style.left = e.offsetX + 'px';
    mark.style.top = e.offsetY + 'px';
    mark.style.fontSize = '30px';
    mark.style.animation = 'confettiFall 1s ease-out forwards';
    document.getElementById('kiss-wrapper').appendChild(mark);
    setTimeout(() => mark.remove(), 1000);
    
    if (kissClicks === 0) {
        document.getElementById('kiss-heart').classList.add('revealed');
        createKissConfetti();
    }
}

function createKissConfetti() {
    const container = document.getElementById('kiss-confetti');
    for (let i = 0; i < 30; i++) {
        setTimeout(() => {
            const heart = document.createElement('div');
            heart.className = 'confetti-heart';
            heart.innerHTML = '❤️';
            heart.style.left = Math.random() * 100 + '%';
            heart.style.top = '0';
            container.appendChild(heart);
            setTimeout(() => heart.remove(), 2000);
        }, i * 50);
    }
}

// ========================================
// FUNCIÓN: CAMBIAR FRASE ROMÁNTICA
// ========================================
function changePhrase() {
    const phraseEl = document.getElementById('romantic-phrase');
    const randomPhrase = romanticPhrases[Math.floor(Math.random() * romanticPhrases.length)];
    
    phraseEl.style.opacity = '0';
    setTimeout(() => {
        phraseEl.textContent = randomPhrase;
        phraseEl.style.opacity = '1';
    }, 500);
}

// ========================================
// FUNCIÓN: CARGAR 100 RAZONES
// ========================================
function loadReasons() {
    const grid = document.getElementById('reasons-grid');
    reasons100.forEach((reason, i) => {
        const card = document.createElement('div');
        card.className = 'reason-card';
        card.innerHTML = `
            <div class="reason-number">${i + 1}</div>
            <div class="reason-text">${reason}</div>
        `;
        grid.appendChild(card);
    });
}

// ========================================
// FUNCIÓN: CARGAR CITAS PENDIENTES
// ========================================
function loadPendingDates() {
    const container = document.getElementById('dates-list');
    const savedDates = JSON.parse(localStorage.getItem('completedDates') || '[]');
    
    pendingDates.forEach((date, index) => {
        const isCompleted = savedDates.includes(index);
        const item = document.createElement('div');
        item.className = 'date-item' + (isCompleted ? ' completed' : '');
        item.innerHTML = `
            <div class="date-emoji">${date.emoji}</div>
            <div class="date-info">
                <div class="date-title">${date.title}</div>
                <div class="date-details">${date.date} - ${date.place}</div>
            </div>
            <input type="checkbox" class="date-checkbox" ${isCompleted ? 'checked' : ''} 
                   onchange="toggleDateComplete(${index})">
        `;
        container.appendChild(item);
    });
}

function toggleDateComplete(index) {
    const savedDates = JSON.parse(localStorage.getItem('completedDates') || '[]');
    
    if (savedDates.includes(index)) {
        savedDates.splice(savedDates.indexOf(index), 1);
    } else {
        savedDates.push(index);
        createCelebrationHearts();
    }
    
    localStorage.setItem('completedDates', JSON.stringify(savedDates));
}

// ========================================
// FUNCIÓN: CARGAR POEMAS
// ========================================
function loadPoems() {
    const grid = document.getElementById('poem-grid');
    
    // Cargar poemas originales
    poems.forEach(poem => {
        const card = document.createElement('div');
        card.className = 'poem-card';
        card.innerHTML = `
            <h3>${poem.title}</h3>
            <p>${poem.text}</p>
            <p class="poem-author">- ${poem.author}</p>
        `;
        grid.appendChild(card);
    });
    
    // Cargar poemas personalizados
    const customPoems = JSON.parse(localStorage.getItem('customPoems') || '[]');
    customPoems.forEach(poem => {
        const card = document.createElement('div');
        card.className = 'poem-card';
        card.innerHTML = `
            <h3>${poem.title}</h3>
            <p>${poem.text}</p>
            <p class="poem-author">- ${poem.author} (${poem.date})</p>
        `;
        grid.appendChild(card);
    });
}

// ========================================
// FUNCIÓN: EDITOR DE POEMAS
// ========================================
function insertWord(word) {
    const textarea = document.getElementById('poem-text');
    const cursorPos = textarea.selectionStart;
    const textBefore = textarea.value.substring(0, cursorPos);
    const textAfter = textarea.value.substring(cursorPos);
    textarea.value = textBefore + word + ' ' + textAfter;
    textarea.focus();
    textarea.selectionStart = textarea.selectionEnd = cursorPos + word.length + 1;
}

function saveCustomPoem() {
    const title = document.getElementById('poem-title').value.trim();
    const text = document.getElementById('poem-text').value.trim();
    
    if (!title || !text) {
        alert('Por favor completa el título y el texto del poema');
        return;
    }
    
    const customPoems = JSON.parse(localStorage.getItem('customPoems') || '[]');
    customPoems.push({
        title: title,
        text: text,
        author: 'Personalizado',
        date: new Date().toLocaleDateString()
    });
    
    localStorage.setItem('customPoems', JSON.stringify(customPoems));
    
    document.getElementById('poem-title').value = '';
    document.getElementById('poem-text').value = '';
    
    // Recargar poemas
    document.getElementById('poem-grid').innerHTML = '';
    loadPoems();
    
    alert('¡Poema guardado con éxito! ❤️');
    createCelebrationHearts();
}

// ========================================
// FUNCIÓN: MODO HISTORIA
// ========================================
function startStoryMode() {
    storyMode = true;
    currentStorySection = 0;
    const sections = document.querySelectorAll('.section');
    
    // Ocultar todo inicialmente
    sections.forEach(s => s.style.opacity = '0.3');
    
    highlightNextSection(sections);
}

function highlightNextSection(sections) {
    if (currentStorySection >= sections.length) {
        sections.forEach(s => {
            s.style.opacity = '1';
            s.classList.remove('story-highlight');
        });
        alert('¡Has completado el recorrido de nuestra historia! ❤️');
        storyMode = false;
        return;
    }
    
    const section = sections[currentStorySection];
    section.style.opacity = '1';
    section.classList.add('story-highlight');
    section.scrollIntoView({ behavior: 'smooth', block: 'center' });
    
    // Narración simple
    const titles = [
        'Bienvenida a nuestra galería de momentos especiales',
        'Los lugares donde nuestro amor florece',
        'Nuestros recuerdos en el cine',
        'Las palabras que me inspiraste',
        'Todas las razones por las que te amo',
        'Nuestros planes futuros juntos',
        'Un juego especial para ti',
        'Poemas escritos con el corazón',
        'Nuestra historia juntos',
        'Y muchas sorpresas más...'
    ];
    
    if (currentStorySection < titles.length) {
        setTimeout(() => {
            const speech = new SpeechSynthesisUtterance(titles[currentStorySection]);
            speech.lang = 'es-ES';
            speech.rate = 0.9;
            window.speechSynthesis.speak(speech);
        }, 500);
    }
    
    setTimeout(() => {
        section.classList.remove('story-highlight');
        section.style.opacity = '0.3';
        currentStorySection++;
        highlightNextSection(sections);
    }, 5000);
}

// ========================================
// FUNCIÓN: CAMBIAR MENSAJE DE AMOR
// ========================================
function changeMessage() {
    const messageEl = document.getElementById('rotating-message');
    const randomMsg = loveMessages[Math.floor(Math.random() * loveMessages.length)];
    
    messageEl.style.opacity = '0';
    setTimeout(() => {
        messageEl.textContent = randomMsg;
        messageEl.style.opacity = '1';
    }, 300);
}

// ========================================
// FUNCIÓN: MOSTRAR SORPRESA
// ========================================
function showSurprise() {
    const modal = document.getElementById('surprise-modal');
    const surpriseText = surprises[Math.floor(Math.random() * surprises.length)];
    
    document.getElementById('surprise-text').textContent = surpriseText;
    modal.classList.add('active');
    createCelebrationHearts();
}

// ========================================
// FUNCIÓN: CERRAR SORPRESA
// ========================================
function closeSurprise() {
    document.getElementById('surprise-modal').classList.remove('active');
}

// ========================================
// FUNCIÓN: CREAR CORAZONES DE CELEBRACIÓN
// ========================================
function createCelebrationHearts() {
    for (let i = 0; i < 20; i++) {
        setTimeout(() => {
            const heart = document.createElement('div');
            heart.innerHTML = '❤️';
            heart.style.position = 'fixed';
            heart.style.left = Math.random() * window.innerWidth + 'px';
            heart.style.top = window.innerHeight + 'px';
            heart.style.fontSize = (Math.random() * 30 + 20) + 'px';
            heart.style.opacity = '0.8';
            heart.style.pointerEvents = 'none';
            heart.style.zIndex = '9999';
            heart.style.transition = 'all 3s ease-out';
            document.body.appendChild(heart);
            
            setTimeout(() => {
                heart.style.top = '-100px';
                heart.style.opacity = '0';
                heart.style.transform = `translateX(${Math.random() * 200 - 100}px) rotate(${Math.random() * 360}deg)`;
            }, 50);
            
            setTimeout(() => heart.remove(), 3500);
        }, i * 100);
    }
}

// ========================================
// FUNCIONES DEL ROMPECABEZAS
// ========================================

function initPuzzle() {
    puzzleSize = Math.min(currentPuzzleLevel + 1, 5);
    puzzleMoves = 0;
    document.getElementById('puzzle-level').textContent = currentPuzzleLevel;
    document.getElementById('puzzle-moves').textContent = puzzleMoves;
    
    const imageIndex = (currentPuzzleLevel - 1) % soloImages.length;
    const imageSrc = soloImages[imageIndex];
    
    puzzleGrid = [];
    for (let i = 0; i < puzzleSize; i++) {
        puzzleGrid[i] = [];
        for (let j = 0; j < puzzleSize; j++) {
            puzzleGrid[i][j] = i * puzzleSize + j;
        }
    }
    
    emptyPos = { row: puzzleSize - 1, col: puzzleSize - 1 };
    puzzleGrid[emptyPos.row][emptyPos.col] = -1;
    
    renderPuzzle(imageSrc);
}

function renderPuzzle(imageSrc) {
    const grid = document.getElementById('puzzle-grid');
    grid.innerHTML = '';
    grid.style.gridTemplateColumns = `repeat(${puzzleSize}, 1fr)`;
    
    const pieceSize = Math.min(500 / puzzleSize, 120);
    
    for (let i = 0; i < puzzleSize; i++) {
        for (let j = 0; j < puzzleSize; j++) {
            const piece = document.createElement('div');
            piece.className = 'puzzle-piece';
            piece.style.width = pieceSize + 'px';
            piece.style.height = pieceSize + 'px';
            piece.setAttribute('role', 'button');
            piece.setAttribute('tabindex', '0');
            
            const value = puzzleGrid[i][j];
            if (value === -1) {
                piece.classList.add('empty');
                piece.setAttribute('aria-label', 'Espacio vacío');
            } else {
                const row = Math.floor(value / puzzleSize);
                const col = value % puzzleSize;
                const bgPosX = -(col * pieceSize);
                const bgPosY = -(row * pieceSize);
                
                piece.style.backgroundImage = `url(${imageSrc})`;
                piece.style.backgroundPosition = `${bgPosX}px ${bgPosY}px`;
                piece.style.backgroundSize = `${pieceSize * puzzleSize}px ${pieceSize * puzzleSize}px`;
                piece.setAttribute('aria-label', `Pieza ${value + 1}`);
            }
            
            piece.onclick = () => movePiece(i, j);
            piece.onkeypress = (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    movePiece(i, j);
                }
            };
            
            grid.appendChild(piece);
        }
    }
}

function movePiece(row, col) {
    const rowDiff = Math.abs(row - emptyPos.row);
    const colDiff = Math.abs(col - emptyPos.col);
    
    if ((rowDiff === 1 && colDiff === 0) || (rowDiff === 0 && colDiff === 1)) {
        puzzleGrid[emptyPos.row][emptyPos.col] = puzzleGrid[row][col];
        puzzleGrid[row][col] = -1;
        emptyPos = { row, col };
        
        puzzleMoves++;
        document.getElementById('puzzle-moves').textContent = puzzleMoves;
        
        const imageIndex = (currentPuzzleLevel - 1) % soloImages.length;
        renderPuzzle(soloImages[imageIndex]);
        
        if (checkPuzzleComplete()) {
            setTimeout(() => {
                if (currentPuzzleLevel === 16) {
                    showFinalPoem();
                } else {
                    alert('¡Nivel completado! 🎉');
                }
            }, 300);
        }
    }
}

function checkPuzzleComplete() {
    for (let i = 0; i < puzzleSize; i++) {
        for (let j = 0; j < puzzleSize; j++) {
            const expected = i * puzzleSize + j;
            if (i === puzzleSize - 1 && j === puzzleSize - 1) {
                if (puzzleGrid[i][j] !== -1) return false;
            } else {
                if (puzzleGrid[i][j] !== expected) return false;
            }
        }
    }
    return true;
}

function shufflePuzzle() {
    for (let i = 0; i < puzzleSize * puzzleSize * 3; i++) {
        const directions = [];
        if (emptyPos.row > 0) directions.push({row: -1, col: 0});
        if (emptyPos.row < puzzleSize - 1) directions.push({row: 1, col: 0});
        if (emptyPos.col > 0) directions.push({row: 0, col: -1});
        if (emptyPos.col < puzzleSize - 1) directions.push({row: 0, col: 1});
        
        const dir = directions[Math.floor(Math.random() * directions.length)];
        const newRow = emptyPos.row + dir.row;
        const newCol = emptyPos.col + dir.col;
        
        puzzleGrid[emptyPos.row][emptyPos.col] = puzzleGrid[newRow][newCol];
        puzzleGrid[newRow][newCol] = -1;
        emptyPos = { row: newRow, col: newCol };
    }
    
    puzzleMoves = 0;
    document.getElementById('puzzle-moves').textContent = puzzleMoves;
    
    const imageIndex = (currentPuzzleLevel - 1) % soloImages.length;
    renderPuzzle(soloImages[imageIndex]);
}

function nextPuzzleLevel() {
    if (currentPuzzleLevel < 16) {
        currentPuzzleLevel++;
        initPuzzle();
        shufflePuzzle();
    } else {
        alert('¡Ya completaste todos los niveles! 🎊');
    }
}

function showFinalPoem() {
    const modal = document.getElementById('puzzle-complete-modal');
    document.getElementById('final-poem').textContent = finalPoem;
    modal.classList.add('active');
    createCelebrationHearts();
}

function closePuzzleComplete() {
    document.getElementById('puzzle-complete-modal').classList.remove('active');
}

// ========================================
// FUNCIÓN: CONSTELACIÓN
// ========================================
function initConstellation() {
    const canvas = document.getElementById('constellation-canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
    
    const stars = [
        { x: 200, y: 100, name: 'Mi Amor', size: 8 },
        { x: 400, y: 150, name: 'Tú', size: 8 },
        { x: 150, y: 250, name: '❤️', size: 6 },
        { x: 450, y: 250, name: '💕', size: 6 },
        { x: 300, y: 300, name: 'Juntos', size: 7 }
    ];
    
    let revealedStars = 0;
    
    function drawConstellation() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        // Dibujar conexiones
        if (revealedStars > 1) {
            ctx.strokeStyle = 'rgba(255, 215, 0, 0.3)';
            ctx.lineWidth = 2;
            ctx.beginPath();
            for (let i = 0; i < Math.min(revealedStars, stars.length); i++) {
                if (i === 0) {
                    ctx.moveTo(stars[i].x, stars[i].y);
                } else {
                    ctx.lineTo(stars[i].x, stars[i].y);
                }
            }
            ctx.stroke();
        }
        
        // Dibujar estrellas
        stars.forEach((star, i) => {
            if (i < revealedStars) {
                ctx.fillStyle = '#ffd700';
                ctx.beginPath();
                ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
                ctx.fill();
                
                ctx.fillStyle = '#ffb6c1';
                ctx.font = '14px Arial';
                ctx.textAlign = 'center';
                ctx.fillText(star.name, star.x, star.y - 15);
            }
        });
    }
    
    // Animación de revelación al hacer scroll
    window.addEventListener('scroll', () => {
        const rect = canvas.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
            if (revealedStars < stars.length) {
                revealedStars++;
                drawConstellation();
            }
        }
    });
    
    drawConstellation();
}

// ========================================
// FUNCIÓN: BURBUJAS DE AMOR
// ========================================
function createBubbles() {
    const container = document.getElementById('bubbles-container');
    container.innerHTML = '';
    
    for (let i = 0; i < 10; i++) {
        const bubble = document.createElement('div');
        bubble.className = 'bubble';
        bubble.innerHTML = '💖';
        bubble.style.left = Math.random() * 80 + 10 + '%';
        bubble.style.top = Math.random() * 80 + 10 + '%';
        bubble.style.animationDelay = Math.random() * 2 + 's';
        
        bubble.onclick = (e) => {
            const message = bubbleMessages[Math.floor(Math.random() * bubbleMessages.length)];
            bubble.classList.add('bubble-pop');
            
            const msgEl = document.createElement('div');
            msgEl.className = 'bubble-message';
            msgEl.textContent = message;
            msgEl.style.left = e.pageX - container.offsetLeft + 'px';
            msgEl.style.top = e.pageY - container.offsetTop + 'px';
            container.appendChild(msgEl);
            
            setTimeout(() => {
                bubble.remove();
                msgEl.remove();
            }, 2000);
        };
        
        container.appendChild(bubble);
    }
}

// ========================================
// FUNCIÓN: SCRATCH CARD
// ========================================
function initScratchCard() {
    const canvas = document.getElementById('scratch-canvas');
    const ctx = canvas.getContext('2d');
    const img = document.getElementById('scratch-image');
    
    canvas.width = 500;
    canvas.height = 500;
    
    // Llenar con color de rascado
    ctx.fillStyle = '#666';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    // Agregar texto
    ctx.fillStyle = '#fff';
    ctx.font = '30px Arial';
    ctx.textAlign = 'center';
    ctx.fillText('Rasca para revelar', canvas.width / 2, canvas.height / 2);
    
    let isDrawing = false;
    
    canvas.addEventListener('mousedown', () => isDrawing = true);
    canvas.addEventListener('mouseup', () => isDrawing = false);
    canvas.addEventListener('mouseleave', () => isDrawing = false);
    
    canvas.addEventListener('mousemove', (e) => {
        if (!isDrawing) return;
        
        const rect = canvas.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        ctx.globalCompositeOperation = 'destination-out';
        ctx.beginPath();
        ctx.arc(x, y, 30, 0, Math.PI * 2);
        ctx.fill();
    });
    
    // Touch support
    canvas.addEventListener('touchstart', (e) => {
        e.preventDefault();
        isDrawing = true;
    });
    
    canvas.addEventListener('touchend', () => isDrawing = false);
    
    canvas.addEventListener('touchmove', (e) => {
        if (!isDrawing) return;
        e.preventDefault();
        
        const rect = canvas.getBoundingClientRect();
        const touch = e.touches[0];
        const x = touch.clientX - rect.left;
        const y = touch.clientY - rect.top;
        
        ctx.globalCompositeOperation = 'destination-out';
        ctx.beginPath();
        ctx.arc(x, y, 30, 0, Math.PI * 2);
        ctx.fill();
    });
}

// ========================================
// FUNCIÓN: ÁRBOL DEL AMOR
// ========================================
function initLoveTree() {
    const svg = document.getElementById('love-tree');
    const visitCount = parseInt(localStorage.getItem('visitCount') || '0') + 1;
    localStorage.setItem('visitCount', visitCount);
    
    const leafCount = Math.min(visitCount, 100);
    
    document.getElementById('visit-count').textContent = visitCount;
    document.getElementById('leaf-count').textContent = leafCount;
    
    // Dibujar tronco
    const trunk = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
    trunk.setAttribute('x', '90');
    trunk.setAttribute('y', '120');
    trunk.setAttribute('width', '20');
    trunk.setAttribute('height', '80');
    trunk.setAttribute('fill', '#8B4513');
    svg.appendChild(trunk);
    
    // Dibujar copa base
    const crown = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    crown.setAttribute('cx', '100');
    crown.setAttribute('cy', '100');
    crown.setAttribute('r', '60');
    crown.setAttribute('fill', '#228B22');
    svg.appendChild(crown);
    
    // Agregar hojas
    const leaves = JSON.parse(localStorage.getItem('treeLeaves') || '[]');
    const today = new Date().toDateString();
    
    if (!leaves.includes(today)) {
        leaves.push(today);
        localStorage.setItem('treeLeaves', JSON.stringify(leaves));
        
        // Animación de nueva hoja
        setTimeout(() => {
            addLeafToTree(svg, leafCount);
        }, 500);
    }
    
    // Dibujar todas las hojas existentes
    for (let i = 0; i < Math.min(leafCount, 100); i++) {
        addLeafToTree(svg, i, false);
    }
    
    // Si llegó a 100, florecer
    if (leafCount >= 100) {
        bloomTree(svg);
    }
}

function addLeafToTree(svg, index, animate = true) {
    const angle = (index / 100) * Math.PI * 2 * 3;
    const radius = 30 + Math.random() * 25;
    const x = 100 + Math.cos(angle) * radius;
    const y = 100 + Math.sin(angle) * radius;
    
    const leaf = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    leaf.setAttribute('cx', x);
    leaf.setAttribute('cy', y);
    leaf.setAttribute('r', '3');
    leaf.setAttribute('fill', '#FFD700');
    if (animate) {
        leaf.classList.add('tree-leaf');
    }
    svg.appendChild(leaf);
}

function bloomTree(svg) {
    const message = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    message.setAttribute('x', '100');
    message.setAttribute('y', '100');
    message.setAttribute('text-anchor', 'middle');
    message.setAttribute('fill', '#FF1493');
    message.setAttribute('font-size', '16');
    message.setAttribute('font-weight', 'bold');
    message.textContent = '¡100 Visitas!';
    svg.appendChild(message);
    
    // Crear pétalos que caen
    for (let i = 0; i < 20; i++) {
        setTimeout(() => {
            const petal = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
            petal.setAttribute('cx', 100 + (Math.random() - 0.5) * 100);
            petal.setAttribute('cy', '80');
            petal.setAttribute('r', '4');
            petal.setAttribute('fill', '#FFB6C1');
            petal.classList.add('tree-blossom');
            svg.appendChild(petal);
            
            setTimeout(() => petal.remove(), 3000);
        }, i * 100);
    }
    
    alert('¡El árbol ha florecido! 🌸\n¡100 visitas de amor! 💕');
}

// ========================================
// MANEJO DE EVENTOS GLOBALES
// ========================================

// Cerrar modales al hacer clic en el fondo
window.addEventListener('click', (e) => {
    if (e.target.classList.contains('modal')) {
        e.target.classList.remove('active');
    }
});

// Cerrar modales con tecla Escape
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        document.querySelectorAll('.modal').forEach(modal => {
            modal.classList.remove('active');
        });
    }
});

// Detectar scroll para animaciones
let lastScroll = 0;
window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    // Animaciones basadas en scroll
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.8) {
            section.style.opacity = '1';
            section.style.transform = 'translateY(0)';
        }
    });
    
    lastScroll = currentScroll;
});

// ========================================
// SORPRESA ALEATORIA DIARIA
// ========================================
function checkDailySurprise() {
    const today = new Date().toDateString();
    const lastSurprise = localStorage.getItem('lastDailySurprise');
    
    if (lastSurprise !== today) {
        const surpriseType = Math.floor(Math.random() * 4);
        
        setTimeout(() => {
            switch(surpriseType) {
                case 0:
                    // Foto inédita
                    showImageModal('7.jpeg', 'Foto especial del día ✨');
                    break;
                case 1:
                    // Poema nuevo
                    alert('Poema del día ❤️\n\n' + poems[Math.floor(Math.random() * poems.length)].text);
                    break;
                case 2:
                    // Mensaje de amor
                    showSurprise();
                    break;
                case 3:
                    // Corazones especiales
                    createCelebrationHearts();
                    alert('¡Una lluvia de amor para ti! 💕');
                    break;
            }
            
            localStorage.setItem('lastDailySurprise', today);
        }, 3000);
    }
}

// Ejecutar sorpresa diaria
setTimeout(checkDailySurprise, 5000);

// ========================================
// FUNCIONES DE UTILIDAD
// ========================================

// Función para reproducir audio de notificación
function playNotificationSound() {
    // Crear un tono simple usando Web Audio API
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();
    
    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);
    
    oscillator.frequency.value = 800;
    oscillator.type = 'sine';
    
    gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.5);
    
    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + 0.5);
}

// Función para crear efecto de partículas
function createParticleEffect(x, y, emoji) {
    for (let i = 0; i < 10; i++) {
        const particle = document.createElement('div');
        particle.innerHTML = emoji;
        particle.style.position = 'fixed';
        particle.style.left = x + 'px';
        particle.style.top = y + 'px';
        particle.style.fontSize = '20px';
        particle.style.pointerEvents = 'none';
        particle.style.zIndex = '9999';
        particle.style.transition = 'all 1s ease-out';
        document.body.appendChild(particle);
        
        setTimeout(() => {
            particle.style.left = (x + (Math.random() - 0.5) * 200) + 'px';
            particle.style.top = (y - Math.random() * 200) + 'px';
            particle.style.opacity = '0';
            particle.style.transform = 'scale(2)';
        }, 50);
        
        setTimeout(() => particle.remove(), 1100);
    }
}

// Función para vibración (si está disponible)
function vibrate(pattern = [100, 50, 100]) {
    if ('vibrate' in navigator) {
        navigator.vibrate(pattern);
    }
}

// ========================================
// ANIMACIONES ESPECIALES EN HOVER
// ========================================

// Hacer que las fotos de la galería tengan corazones al pasar el mouse
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        const cards = document.querySelectorAll('.card');
        cards.forEach(card => {
            card.addEventListener('mouseenter', function() {
                const rect = this.getBoundingClientRect();
                const x = rect.left + rect.width / 2;
                const y = rect.top + rect.height / 2;
                
                // Crear mini corazón
                const heart = document.createElement('div');
                heart.innerHTML = '💗';
                heart.style.position = 'fixed';
                heart.style.left = x + 'px';
                heart.style.top = y + 'px';
                heart.style.fontSize = '30px';
                heart.style.pointerEvents = 'none';
                heart.style.zIndex = '9999';
                heart.style.transition = 'all 1s ease-out';
                heart.style.opacity = '1';
                document.body.appendChild(heart);
                
                setTimeout(() => {
                    heart.style.top = (y - 100) + 'px';
                    heart.style.opacity = '0';
                }, 50);
                
                setTimeout(() => heart.remove(), 1100);
            });
        });
    }, 1000);
});

// ========================================
// EASTER EGGS Y CARACTERÍSTICAS OCULTAS
// ========================================

// Doble clic en el contador de días
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        const heartCounter = document.querySelector('.heartbeat-counter');
        if (heartCounter) {
            let clickTimeout;
            let clickCount = 0;
            
            heartCounter.addEventListener('click', () => {
                clickCount++;
                clearTimeout(clickTimeout);
                
                if (clickCount === 2) {
                    // Doble clic detectado
                    createHeartRain();
                    clickCount = 0;
                } else {
                    clickTimeout = setTimeout(() => {
                        clickCount = 0;
                    }, 300);
                }
            });
        }
    }, 1000);
});

// Combinación de teclas secreta (Ctrl + Shift + L)
document.addEventListener('keydown', (e) => {
    if (e.ctrlKey && e.shiftKey && e.key === 'L') {
        e.preventDefault();
        alert('💖 Código secreto activado 💖\n\nTe amo más de lo que las palabras pueden expresar.\nEres mi todo, mi siempre, mi para siempre.\n\n❤️ Con amor eterno ❤️');
        createCelebrationHearts();
        triggerFireworks();
    }
});

// Shake detection (si está en móvil)
if (window.DeviceMotionEvent) {
    let lastX, lastY, lastZ;
    let moveCounter = 0;
    
    window.addEventListener('devicemotion', (e) => {
        const acc = e.accelerationIncludingGravity;
        
        if (lastX !== undefined) {
            const deltaX = Math.abs(acc.x - lastX);
            const deltaY = Math.abs(acc.y - lastY);
            const deltaZ = Math.abs(acc.z - lastZ);
            
            if (deltaX + deltaY + deltaZ > 30) {
                moveCounter++;
                if (moveCounter > 3) {
                    createHeartRain();
                    vibrate([200, 100, 200]);
                    moveCounter = 0;
                }
            }
        }
        
        lastX = acc.x;
        lastY = acc.y;
        lastZ = acc.z;
    });
}

// ========================================
// FUNCIONES DE PERFORMANCE
// ========================================

// Lazy loading de imágenes
document.addEventListener('DOMContentLoaded', () => {
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    if (img.dataset.src) {
                        img.src = img.dataset.src;
                        img.removeAttribute('data-src');
                    }
                    observer.unobserve(img);
                }
            });
        });
        
        // Observar todas las imágenes con data-src
        document.querySelectorAll('img[data-src]').forEach(img => {
            imageObserver.observe(img);
        });
    }
});

// Precargar imágenes importantes
function preloadImages() {
    const importantImages = [soloImages[0], cinemaImages[0], '1.jpeg'];
    importantImages.forEach(src => {
        const img = new Image();
        img.src = src;
    });
}

preloadImages();

// ========================================
// ANALYTICS Y TRACKING (Opcional)
// ========================================

// Rastrear tiempo en la página
let pageStartTime = Date.now();
window.addEventListener('beforeunload', () => {
    const timeSpent = Math.floor((Date.now() - pageStartTime) / 1000);
    const totalTime = parseInt(localStorage.getItem('totalTimeSpent') || '0') + timeSpent;
    localStorage.setItem('totalTimeSpent', totalTime);
    
    // Mensaje especial si pasa mucho tiempo
    if (timeSpent > 300) { // 5 minutos
        return '¿Ya te vas? 💔';
    }
});

// ========================================
// MODO DEBUG (Solo para desarrollo)
// ========================================
const DEBUG = false;

if (DEBUG) {
    console.log('🎨 Mi Amor Eterno - Debug Mode');
    console.log('📅 Fecha de inicio:', startDate);
    console.log('🖼️ Total de imágenes solo:', soloImages.length);
    console.log('🎬 Total de imágenes cine:', cinemaImages.length);
    console.log('📍 Total de lugares:', loveMapPins.length);
    console.log('💭 Total de frases:', romanticPhrases.length);
    console.log('💝 Total de razones:', reasons100.length);
    
    // Función helper para testing
    window.testAllFeatures = () => {
        console.log('Probando todas las funcionalidades...');
        triggerFireworks();
        setTimeout(createHeartRain, 2000);
        setTimeout(createPetalRain, 4000);
        setTimeout(createCelebrationHearts, 6000);
        console.log('✅ Test completado');
    };
}

// ========================================
// INICIALIZACIÓN FINAL
// ========================================

console.log('%c💖 Mi Amor Eterno 💖', 'font-size: 24px; color: #ff69b4; font-weight: bold;');
console.log('%cCreado con amor el 6 de noviembre de 2024', 'font-size: 14px; color: #ffd700;');
console.log('%c❤️ Te amo ❤️', 'font-size: 18px; color: #ff1493;');

// Mensaje de bienvenida
setTimeout(() => {
    if (!localStorage.getItem('welcomeShown')) {
        console.log('%c¡Bienvenida a nuestro universo de amor! 🌟', 'font-size: 16px; color: #ffb6c1;');
        localStorage.setItem('welcomeShown', 'true');
    }
}, 1000);

// ========================================
// EXPORTAR FUNCIONES GLOBALES (Para HTML)
// ========================================

window.changePhrase = changePhrase;
window.changeMessage = changeMessage;
window.showSurprise = showSurprise;
window.closeSurprise = closeSurprise;
window.shufflePuzzle = shufflePuzzle;
window.nextPuzzleLevel = nextPuzzleLevel;
window.closePuzzleComplete = closePuzzleComplete;
window.closeImageModal = closeImageModal;
window.triggerFireworks = triggerFireworks;
window.showClockMemory = showClockMemory;
window.closeClockMemory = closeClockMemory;
window.toggleHeartDetails = toggleHeartDetails;
window.closeHeartDetails = closeHeartDetails;
window.closePinModal = closePinModal;
window.newGuessRound = newGuessRound;
window.clickKissGame = clickKissGame;
window.toggleDateComplete = toggleDateComplete;
window.insertWord = insertWord;
window.saveCustomPoem = saveCustomPoem;
window.startStoryMode = startStoryMode;
window.createBubbles = createBubbles;
window.closeLetterModal = closeLetterModal;
