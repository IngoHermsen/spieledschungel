interface GalleryImage {
  src: string;
  alt: string;
}

class ImageGallery extends HTMLElement {
  static observedAttributes = ['images'];
  private currentIndex = 0;

  connectedCallback() {
    this.render();
    this.setupControls();
    
    // Tastatur
    document.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowLeft') this.prev();
      if (e.key === 'ArrowRight') this.next();
    });
  }

  attributeChangedCallback() {
    this.currentIndex = 0;
    this.render();
    this.setupControls();
  }

  get images(): GalleryImage[] {
    try {
      return JSON.parse(this.getAttribute('images') || '[]');
    } catch {
      return [];
    }
  }

  prev() {
    this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
    this.updateSlide();
  }

  next() {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
    this.updateSlide();
  }

  updateSlide() {
    const track = this.querySelector('.carousel-track') as HTMLElement;
    if (track) {
      track.style.transform = `translateX(-${this.currentIndex * 100}%)`;
    }
    // Dots aktualisieren
    this.querySelectorAll('.dot').forEach((dot, i) => {
      dot.classList.toggle('active', i === this.currentIndex);
    });
  }

  setupControls() {
    this.querySelector('.prev')?.addEventListener('click', () => this.prev());
    this.querySelector('.next')?.addEventListener('click', () => this.next());
    this.querySelectorAll('.dot').forEach((dot, i) => {
      dot.addEventListener('click', () => {
        this.currentIndex = i;
        this.updateSlide();
      });
    });
  }

  render() {
    this.innerHTML = `
      <style>
        :host { display: block; }

        .carousel {
          position: relative;
          overflow: hidden;
        }

        .carousel-track {
          display: flex;
          transition: transform 0.4s ease;
        }

        .carousel-slide {
          min-width: 100%;
        }

        .carousel-slide img {
        width: 100%;
        height: auto;       
        max-height: 300px;
        object-fit: contain;
        display: block;
        cursor: zoom-in;
        }

        .prev, .next {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          background: rgba(255,255,255,0.8);
          border: none;
          border-radius: 50%;
          width: 40px;
          height: 40px;
          font-size: 1.2rem;
          cursor: pointer;
          z-index: 10;
        }

        .prev { left: 1rem; }
        .next { right: 1rem; }

        .dots {
          display: flex;
          justify-content: center;
          gap: 0.5rem;
          margin-top: 0.75rem;
        }

        .dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: #ccc;
          cursor: pointer;
          border: none;
        }

        .dot.active {
          background: #555;
        }

        .slide-caption {
        text-align: center;
        margin: 0.5rem 0 0;
        font-size: 0.9rem;
        color: #555;
}
      </style>

      <div class="carousel">
        <button class="prev">&#8592;</button>
        <div class="carousel-track">
${this.images.map((img: GalleryImage) => {
      const name = img.src.split('/').pop()?.replace(/\.[^.]+$/, '') ?? '';
      return `
    <div class="carousel-slide">
      <img src="${img.src}" alt="${img.alt}" loading="lazy">
      <p class="slide-caption">${name}</p>
    </div>
  `;
    }).join('')}
        </div>
        <button class="next">&#8594;</button>
      </div>

      <div class="dots">
        ${this.images.map((_: GalleryImage, i: number) => `
          <button class="dot ${i === 0 ? 'active' : ''}"></button>
        `).join('')}
      </div>
    `;
  }
}

customElements.define('image-gallery', ImageGallery);

export { };