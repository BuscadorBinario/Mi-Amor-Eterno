// ========================================
// DATOS GLOBALES
// ========================================

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

// Poemas
const poems = [
    { 
        title: 'Luz de Mi Vida', 
        text: 'En tus ojos veo el infinito,\nun universo de amor tan bonito.\nEres mi sol, mi luna y más,\nmi corazón late solo por ti, jamás.' 
    },
    { 
        title: 'Eterno Amor', 
        text: 'Como el mar que besa la arena,\nasí mi amor por ti se llena.\nCada ola trae un te quiero,\neres mi todo, mi amor verdadero.' 
    },
    { 
        title: 'Juntos', 
        text: 'Tomados de la mano caminamos,\nen este viaje que juntos creamos.\nCada paso es un nuevo comienzo,\ncontigo el amor es inmenso.' 
    },
    { 
        title: 'Mi Musa', 
        text: 'Eres la poesía que escribo,\nla razón por la que vivo.\nEn cada verso está tu esencia,\nmi amor por ti es mi existencia.' 
    },
    { 
        title: 'Destino', 
        text: 'El destino nos unió aquel día,\ny desde entonces mi vida es alegría.\nEres mi sueño hecho realidad,\nmi amor eterno, mi verdad.' 
    },
    { 
        title: 'Promesa', 
        text: 'Prometo amarte cada amanecer,\nen cada atardecer volver a crecer.\nNuestro amor es infinito y real,\neres mi todo, mi amor especial.' 
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

// Variables del puzzle
let currentPuzzleLevel = 1;
let puzzleSize = 2;
let puzzleMoves = 0;
let puzzleGrid = [];
let emptyPos = { row: 0, col: 0 };

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
        
        // Eliminar después de la animación
        setTimeout(() => {
            heart.remove();
        }, 8000);
    }, 2000); // Crear un corazón cada 2 segundos
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
// FUNCIÓN: CARGAR POEMAS
// ========================================
function loadPoems() {
    const grid = document.getElementById('poem-grid');
    poems.forEach(poem => {
        const card = document.createElement('div');
        card.className = 'poem-card';
        card.innerHTML = `
            <h3>${poem.title}</h3>
            <p>${poem.text}</p>
        `;
        grid.appendChild(card);
    });
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

// ========================================
// INICIALIZACIÓN AL CARGAR LA PÁGINA
// ========================================
document.addEventListener('DOMContentLoaded', () => {
    // Cargar todas las secciones
    loadGallery();
    loadMemoryWall();
    loadReasons();
    loadPoems();
    initPuzzle();
    shufflePuzzle();
    
    // Iniciar corazones flotantes
    createFloatingHearts();
    
    // Configurar transición suave para mensajes
    document.getElementById('rotating-message').style.transition = 'opacity 0.3s';
    document.getElementById('romantic-phrase').style.transition = 'opacity 0.5s';
    
    console.log('Mi Amor Eterno - Sitio cargado correctamente ❤️');
});