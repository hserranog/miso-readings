// script.js - Application logic for course readings management

// Global variables
let currentClass = 'class1';
let currentWeek = 1;
const maxWeeks = 8;
let currentLanguage = 'es'; // 'en' or 'es' - Spanish is default

// DOM elements
const classSelect = document.getElementById('classSelect');
const currentWeekSpan = document.getElementById('currentWeek');
const readingCountSpan = document.getElementById('readingCount');
const prevWeekBtn = document.getElementById('prevWeek');
const nextWeekBtn = document.getElementById('nextWeek');
const readingsContainer = document.getElementById('readingsContainer');
const languageBtn = document.getElementById('languageBtn');
const imageModal = document.getElementById('imageModal');
const modalImage = document.getElementById('modalImage');
const modalClose = document.getElementById('modalClose');

// Initialize the application
function init() {
  updateLanguage(); // Set initial language to Spanish
  populateClassSelector();
  updateHeroTitle();
  updateWeekDisplay();
  updateNavigationButtons();
  displayReadings();
  
  // Event listeners
  classSelect.addEventListener('change', handleClassChange);
  prevWeekBtn.addEventListener('click', () => changeWeek(-1));
  nextWeekBtn.addEventListener('click', () => changeWeek(1));
  languageBtn.addEventListener('click', toggleLanguage);
  modalClose.addEventListener('click', closeModal);
  
  // Handle window resize for mobile responsiveness
  window.addEventListener('resize', handleResize);
  
  // Handle modal overlay click to close
  imageModal.addEventListener('click', (e) => {
    if (e.target === imageModal) {
      closeModal();
    }
  });
  
  // Handle escape key to close modal
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && imageModal.style.display === 'block') {
      closeModal();
    }
  });
}

// Handle window resize for mobile responsiveness
function handleResize() {
  // Debounce resize events for better performance
  clearTimeout(window.resizeTimeout);
  window.resizeTimeout = setTimeout(() => {
    resizeSelectToContent();
  }, 150);
}

// Modal functions
function openModal(imageSrc, imageAlt) {
  modalImage.src = imageSrc;
  modalImage.alt = imageAlt;
  imageModal.style.display = 'block';
  document.body.style.overflow = 'hidden'; // Prevent background scrolling
}

function closeModal() {
  imageModal.style.display = 'none';
  document.body.style.overflow = 'auto'; // Restore scrolling
}

// Language translations
const translations = {
  en: {
    week: 'Week',
    requiredReading: 'Required Reading:',
    findBook: 'Go to this reading',
    noReadings: 'No readings assigned for this week',
    entireDocument: 'Read the entire document',
    noContent: 'No content to display here',
    reading: 'reading',
    readings: 'readings'
  },
  es: {
    week: 'Semana',
    requiredReading: 'Lectura Requerida:',
    findBook: 'Ir a esta lectura',
    noReadings: 'No hay lecturas asignadas para esta semana',
    entireDocument: 'Leer todo el documento',
    noContent: 'No hay contenido para mostrar aquí',
    reading: 'lectura',
    readings: 'lecturas'
  }
};

// Toggle language
function toggleLanguage() {
  currentLanguage = currentLanguage === 'en' ? 'es' : 'en';
  updateLanguage();
  updateHeroTitle();
  updateWeekDisplay();
  displayReadings();
  resizeSelectToContent(); // Recalculate width for new language
}

// Update hero title with selected course name
function updateHeroTitle() {
  const heroTitle = document.querySelector('.hero-title');
  const classData = readingsData[currentClass];
  
  if (classData && classData.name) {
    heroTitle.textContent = classData.name;
  } else {
    // Fallback to default text based on current language
    const defaultText = currentLanguage === 'es' ? 'Aprende sin límites' : 'Learn without limits';
    heroTitle.textContent = defaultText;
  }
}

// Update all text elements with current language
function updateLanguage() {
  // Update language button
  const langText = languageBtn.querySelector('.lang-text');
  langText.textContent = currentLanguage.toUpperCase();
  
  // Update all elements with data attributes
  const elements = document.querySelectorAll('[data-en][data-es]');
  elements.forEach(element => {
    const text = element.getAttribute(`data-${currentLanguage}`);
    if (text) {
      element.innerHTML = text;
    }
  });
}

// Populate class selector with data from readingsData
function populateClassSelector() {
  classSelect.innerHTML = '';
  
  Object.keys(readingsData).forEach(classId => {
    const classData = readingsData[classId];
    const option = document.createElement('option');
    option.value = classId;
    option.textContent = classData.name;
    classSelect.appendChild(option);
  });
  
  // Calculate and set optimal width based on longest course name
  resizeSelectToContent();
}

// Resize select element to fit the longest option content
function resizeSelectToContent() {
  // Check if we're on mobile to use different sizing strategy
  const isMobile = window.innerWidth <= 768;
  
  if (isMobile) {
    // On mobile, use full width with proper constraints
    classSelect.style.width = '100%';
    classSelect.style.maxWidth = '100%';
    return;
  }
  
  // Create a temporary element to measure text width
  const tempElement = document.createElement('span');
  tempElement.style.visibility = 'hidden';
  tempElement.style.position = 'absolute';
  tempElement.style.whiteSpace = 'nowrap';
  tempElement.style.fontSize = '18px';
  tempElement.style.fontWeight = '500';
  tempElement.style.fontFamily = 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
  document.body.appendChild(tempElement);
  
  let maxWidth = 0;
  
  // Measure each option's text width
  Object.keys(readingsData).forEach(classId => {
    const classData = readingsData[classId];
    tempElement.textContent = classData.name;
    const textWidth = tempElement.offsetWidth;
    maxWidth = Math.max(maxWidth, textWidth);
  });
  
  // Clean up temporary element
  document.body.removeChild(tempElement);
  
  // Set the select width (add padding for dropdown arrow and some extra space)
  const padding = 80; // Account for padding and dropdown arrow
  const newWidth = Math.max(maxWidth + padding, 400); // Minimum width of 400px
  
  classSelect.style.width = `${newWidth}px`;
}

// Handle class selection change
function handleClassChange(event) {
  currentClass = event.target.value;
  currentWeek = 1; // Reset to week 1 when changing classes
  updateHeroTitle();
  updateWeekDisplay();
  updateNavigationButtons();
  displayReadings();
}

// Change week (increment or decrement)
function changeWeek(direction) {
  const newWeek = currentWeek + direction;
  if (newWeek >= 1 && newWeek <= maxWeeks) {
    currentWeek = newWeek;
    updateWeekDisplay();
    updateNavigationButtons();
    displayReadings();
  }
}

// Update the week display
function updateWeekDisplay() {
  const t = translations[currentLanguage];
  const classData = readingsData[currentClass];
  const weekReadings = classData.weeks && classData.weeks[currentWeek] ? classData.weeks[currentWeek] : [];
  const readingCount = weekReadings.length;
  
  const readingText = readingCount === 1 ? t.reading : t.readings;
  currentWeekSpan.textContent = `${t.week} ${currentWeek}`;
  readingCountSpan.textContent = `(${readingCount} ${readingText})`;
}

// Update navigation button states
function updateNavigationButtons() {
  prevWeekBtn.disabled = currentWeek <= 1;
  nextWeekBtn.disabled = currentWeek >= maxWeeks;
}

// Display readings for current class and week
function displayReadings() {
  const classData = readingsData[currentClass];
  
  // Check if class has no weeks or weeks is empty
  if (!classData.weeks || Object.keys(classData.weeks).length === 0) {
    const t = translations[currentLanguage];
    readingsContainer.innerHTML = `
      <div class="empty-state">
        <h3>${t.noContent}</h3>
      </div>
    `;
    return;
  }
  
  const weekReadings = classData.weeks[currentWeek] || [];
  
  if (weekReadings.length === 0) {
    const t = translations[currentLanguage];
    readingsContainer.innerHTML = `
      <div class="empty-state">
        <h3>${t.noReadings}</h3>
      </div>
    `;
    return;
  }
  
  readingsContainer.innerHTML = weekReadings.map(reading => createReadingCard(reading)).join('');
}

// Create a reading card HTML element
function createReadingCard(reading) {
  const t = translations[currentLanguage];
  
  // Handle missing chapters
  let chaptersHtml = '';
  if (reading.chapters && reading.chapters.length > 0) {
    chaptersHtml = `
      <div class="chapters">
        <h4>${t.requiredReading}</h4>
        <ul>
          ${reading.chapters.map(chapter => `<li>${chapter}</li>`).join('')}
        </ul>
      </div>
    `;
  } else {
    chaptersHtml = `
      <div class="chapters">
        <h4>${t.requiredReading}</h4>
        <ul>
          <li>${t.entireDocument}</li>
        </ul>
      </div>
    `;
  }
  
  // Handle missing author
  let authorHtml = '';
  if (reading.author && reading.author.trim() !== '') {
    authorHtml = `<p class="book-author">${currentLanguage === 'es' ? 'por' : 'by'} ${reading.author}</p>`;
  }
  
  // Handle missing description
  let descriptionHtml = '';
  if (reading.description && reading.description.trim() !== '') {
    descriptionHtml = `<div class="book-description">${reading.description}</div>`;
  }
  
  return `
    <div class="reading-card">
      <div class="book-cover" onclick="openModal('${reading.coverImage}', '${reading.title}')" style="cursor: pointer;">
        <img src="${reading.coverImage}" alt="${reading.title}" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
        <div class="fallback" style="display: none;">
          <div class="fallback-icon">📚</div>
          <div>${currentLanguage === 'es' ? 'Portada del Libro' : 'Book Cover'}</div>
        </div>
      </div>
      <div class="book-info">
        <h3 class="book-title">${reading.title}</h3>
        ${authorHtml}
        ${descriptionHtml}
        
        ${chaptersHtml}
        
        <a href="${reading.link}" target="_blank" class="book-link">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M6 4L10 8L6 12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          ${t.findBook}
        </a>
      </div>
    </div>
  `;
}

// Add a new reading (for future functionality)
function addReading(classId, week, reading) {
  if (!readingsData[classId]) {
    readingsData[classId] = { name: classId, weeks: {} };
  }
  if (!readingsData[classId].weeks[week]) {
    readingsData[classId].weeks[week] = [];
  }
  readingsData[classId].weeks[week].push(reading);
}

// Initialize the application when the page loads
document.addEventListener('DOMContentLoaded', init);