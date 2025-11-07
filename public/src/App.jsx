const heroImage =
  'https://images.unsplash.com/photo-1526481280695-3c46917b26ab?auto=format&fit=crop&w=1200&q=80';

const galleryImages = [
  {
    id: 1,
    title: 'Golden Hour Peaks',
    category: 'Mountains',
    image:
      'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 2,
    title: 'City Lights Reflections',
    category: 'Urban',
    image:
      'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 3,
    title: 'Emerald Coastline',
    category: 'Seaside',
    image:
      'https://images.unsplash.com/photo-1470246973918-29a93221c455?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 4,
    title: 'Dust & Dunes',
    category: 'Desert',
    image:
      'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 5,
    title: 'Forest Breeze',
    category: 'Woods',
    image:
      'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 6,
    title: 'Waves in Motion',
    category: 'Ocean',
    image:
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=900&q=80',
  },
];

const curatedStories = [
  {
    id: 1,
    title: 'Journey to the North',
    description:
      'A week-long expedition chasing auroras, frozen fjords, and the resilient wildlife that calls the Arctic home.',
  },
  {
    id: 2,
    title: 'Desert Silhouettes',
    description:
      'Documenting the interplay of shadows and light as the sun paints endless dunes in hues of amber and crimson.',
  },
  {
    id: 3,
    title: 'Living Streets of Seoul',
    description:
      'From sunrise food stalls to neon-drenched nights, an intimate portrait of a city that never loses its heartbeat.',
  },
];

const App = () => {
  return (
    <div className="app">
      <header className="header">
        <div className="logo">Naniku Studio</div>
        <nav className="nav">
          <a href="#collections">Collections</a>
          <a href="#stories">Stories</a>
          <a href="#about">About</a>
          <button className="cta">Book a Session</button>
        </nav>
      </header>

      <main>
        <section className="hero">
          <div className="hero-content">
            <p className="eyebrow">Featured Story</p>
            <h1>Visual narratives that linger long after the moment fades.</h1>
            <p className="description">
              We craft immersive photo essays that celebrate untold stories through bold composition, evocative colors,
              and careful pacing. Explore curated journeys from across the globe and book your own visual experience.
            </p>
            <div className="hero-actions">
              <button className="primary">Explore Stories</button>
              <button className="secondary">View Portfolio</button>
            </div>
          </div>
          <div className="hero-image">
            <img src={heroImage} alt="Mountain landscape" />
            <div className="image-caption">
              <span>New Release</span>
              <strong>Summits & Sunsets</strong>
              <p>Photographed in the Dolomites, Italy</p>
            </div>
          </div>
        </section>

        <section id="collections" className="gallery">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Collections</p>
              <h2>Curated visual stories for every destination.</h2>
            </div>
            <a href="#" className="view-all">
              View all collections →
            </a>
          </div>
          <div className="gallery-grid">
            {galleryImages.map((item) => (
              <article key={item.id} className="gallery-card">
                <div className="image-wrapper">
                  <img src={item.image} alt={item.title} />
                  <span className="badge">{item.category}</span>
                </div>
                <div className="card-content">
                  <h3>{item.title}</h3>
                  <p>Explore the full story →</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="stories" className="stories">
          <div className="section-heading">
            <div>
              <p className="eyebrow">In Focus</p>
              <h2>Latest stories from the field.</h2>
            </div>
          </div>
          <div className="story-list">
            {curatedStories.map((story) => (
              <article key={story.id} className="story-card">
                <div className="story-meta">
                  <span className="story-index">0{story.id}</span>
                  <h3>{story.title}</h3>
                </div>
                <p>{story.description}</p>
                <button className="story-action">Read story</button>
              </article>
            ))}
          </div>
        </section>
      </main>

      <footer id="about" className="footer">
        <div>
          <h3>Naniku Studio</h3>
          <p>
            A collective of storytellers, photographers, and motion artists creating cinematic experiences for brands and
            adventurers.
          </p>
        </div>
        <div className="footer-links">
          <a href="#">Instagram</a>
          <a href="#">Behance</a>
          <a href="#">Contact</a>
        </div>
      </footer>
    </div>
  );
};

export default App;
