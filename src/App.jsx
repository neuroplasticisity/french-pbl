import React, { useState, useEffect } from 'react';
import {
  ChevronRight, ChevronLeft, Flag, Clock, ArrowRight, Info, BookOpen, Palette, Sparkles, MoveDiagonal, Sun
} from 'lucide-react';

const FlagMotif = () => (
  <div className="fixed left-0 top-0 bottom-0 w-2 flex flex-col opacity-60 z-[100]">
    <div className="flex-1 bg-[#002395]" />
    <div className="flex-1 bg-[#ffffff]" />
    <div className="flex-1 bg-[#ed2939]" />
  </div>
);

const App = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const initialData = [
    // 1. COVER PAGE
    {
      type: 'cover',
      title: 'ÉCLAT',
      sub: 'L\'ART COMME VOIX DE LA RÉVOLUTION',
      detail: 'A Detailed Exploration of French Artistic Sovereignty',
      img: 'https://images.unsplash.com/photo-1549490349-8643362247b5?auto=format&fit=crop&q=80&w=1200',
      color: '#050505'
    },
    // 2. INTRODUCTION
    {
      type: 'manifesto',
      title: 'PRÉFACE',
      text: "Art serves as the ultimate mirror of a nation's soul. In France, the transition from the ornate indulgence of the monarchy to the gritty reality of the common man was not just a stylistic choice, but a revolutionary act. Each brushstroke was a call for liberty.",
      quote: '“L\'art français a transformé la peinture en un mégaphone pour la liberté.”',
      color: '#0a0a0a'
    },
    // 3. FRENCH RENAISSANCE (NEW)
    {
      type: 'renaissance',
      title: 'LA RENAISSANCE FRANÇAISE',
      sub: 'The Rebirth of Classical Elegance',
      content: "The French Renaissance (15th-17th century) was a pivotal movement where France transitioned out of the Middle Ages. Influenced by Italian masters like Leonardo da Vinci, invited by King Francis I, French art began to focus on humanism and classical symmetry. This era saw the rise of the School of Fontainebleau, which combined decorative mannerism with French courtly elegance. It was a time of grand chateaus and the first real 'star' artists of the kingdom. The movement laid the architectural and aesthetic foundation for the grandiosity that would eventually lead to the Rococo excess, serving as the first step in France's journey to becoming the world's art capital.",
      img1: 'https://upload.wikimedia.org/wikipedia/commons/9/90/Meister_der_Schule_von_Fontainebleau_001.jpg', // Corner Top-Left
      img2: 'https://artincontext.org/wp-content/uploads/2023/08/Explore-Art-in-France.avif', // Corner Bottom-Right
      color: '#151515'
    },
    // 4. COMPARISON TABLE
    {
      type: 'table',
      title: 'SOMMAIRE ANALYTIQUE',
      data: [
        { era: 'Rococo', focus: 'Aristocratic Romance', mood: 'Ornate & Playful' },
        { era: 'Romantisme', focus: 'Revolutionary Spirit', mood: 'Intense & Dramatic' },
        { era: 'Réalisme', focus: 'The Working Class', mood: 'Social Truth' },
        { era: 'Modernisme', focus: 'Modern Light', mood: 'Serene & Abstract' }
      ],
      color: '#0f0f0f'
    },
    // --- ERA I: ROCOCO ---
    {
      type: 'splash',
      era: 'I',
      title: 'L\'ÉRE DU ROCOCO',
      dates: '1730s — 1760s',
      intro: 'The final, extravagant breath of the French Monarchy, where art was a shield against reality.',
      img: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?auto=format&fit=crop&q=80&w=1200',
      color: '#1a1012',
      accent: '#fbcfe8'
    },
    {
      type: 'flowchart',
      title: 'CHRONOLOGIE DU ROCOCO',
      steps: [
        { year: '1715', t: 'Regency', d: 'The death of Louis XIV leads to a more relaxed and playful court style.' },
        { year: '1730', t: 'Court Dominance', d: 'Boucher defines the aesthetic of the high aristocracy.' },
        { year: '1750', t: 'Enlightenment', d: 'Philosophers begin to mock the "frivolous" nature of the art.' },
        { year: '1763', t: 'State Defeat', d: 'Economic failure makes royal luxury look insulting to the poor.' }
      ],
      color: '#120a0d'
    },
    {
      type: 'article',
      title: 'L\'ART DU DÉNI',
      content: 'As France edged closer to financial collapse, the elite retreated into a world of pastel fantasies. Rococo paintings intentionally avoided the grit of the streets. They depicted a world that was eternally young, flirtatious, and wealthy. This "Art of Denial" unknowingly fueled the fire of the coming 1789 Revolution by visualizing the massive gap between the court and the citizens.',
      sub: 'Aristocratic Escapism',
      img: 'https://artincontext.org/wp-content/uploads/2023/08/Famous-French-Art.avif', 
      color: '#1a1012'
    },
    {
      type: 'spotlight',
      name: 'FRANÇOIS BOUCHER',
      dates: '1703 — 1770',
      bio: "Boucher was the definitive painter of the French court. Appointed as the First Painter to the King, his work was inseparable from the influence of Madame de Pompadour. He was a master of the 'Pastoral Idyll', creating soft-focus mythological scenes that prioritized decorative beauty over moral weight. His influence extended to tapestries and porcelain, making him the most famous artist of his generation.",
      work: 'Le Triomphe de Vénus (1740)',
      img: 'https://upload.wikimedia.org/wikipedia/commons/a/a3/The_Triumph_of_Venus%2C_by_Fran%C3%A7ois_Boucher.jpg', 
      caption: 'A masterpiece of sensual mythology and royal fantasy.',
      color: '#0d0809'
    },
    {
      type: 'spotlight',
      name: 'JEAN-HONORÉ FRAGONARD',
      dates: '1732 — 1806',
      bio: "A student of Boucher, Fragonard took the Rococo style to its most flirtatious extremes. He was famous for his 'fluid' brushwork and his ability to capture fleeting moments of joy and eroticism. Though he won the Prix de Rome, he chose to work for private aristocratic patrons rather than the state, allowing him to produce the iconic, playful garden scenes for which he is remembered today.",
      work: 'Les Hasards Heureux de l\'Escarpolette (1767)',
      img: 'https://artincontext.org/wp-content/uploads/2023/08/French-Art-Examples.avif', 
      caption: 'The definitive symbol of 18th-century elite pleasure.',
      color: '#0a0607'
    },
    {
      type: 'tech-detail',
      title: 'TECHNIQUES DU ROCOCO',
      items: [
        { t: 'Pastel Palette', d: 'Focus on pinks, baby blues, and creams to eliminate the weight of shadows.', img: '' },
        { t: 'Feathery Brushwork', d: 'Light, wispy strokes designed to mimic the texture of silk and clouds.', img: '' },
        { t: 'S-Curve Composition', d: 'Rejects straight lines for flowing, asymmetrical curves and shell-like shapes.', img: '' },
        { t: 'Translucent Glazing', d: 'Applying sheer layers of paint to create a glowing, porcelain-like skin tone.', img: '' }
      ],
      color: '#1a1012'
    },
    // --- ERA II: ROMANTICISM ---
    {
      type: 'splash',
      era: 'II',
      title: 'LE FEU ROMANTIQUE',
      dates: '1780s — 1850s',
      intro: 'Art becomes a weapon. Passion, blood, and revolution take over the canvas.',
      img: 'https://images.unsplash.com/photo-1505672678657-cc7037095e60?auto=format&fit=crop&q=80&w=1200',
      color: '#1a0505',
      accent: '#ef4444'
    },
    {
      type: 'flowchart',
      title: 'CHRONOLOGIE RÉVOLUTIONNAIRE',
      steps: [
        { year: '1789', t: 'Bastille', d: 'The fall of the monarchy shifts art toward heroic sacrifice.' },
        { year: '1804', t: 'Empire', d: 'Napoleon uses art to document his global ambitions and glory.' },
        { year: '1819', t: 'The Medusa', d: 'A shift from glory to the horror of government failure.' },
        { year: '1830', t: 'Liberty', d: 'The common man finally takes center stage in history painting.' }
      ],
      color: '#1a0505'
    },
    {
      type: 'article',
      title: 'LE CRI DU SENTIMENT',
      content: "Romanticism was a rejection of the cold logic of the Enlightenment. In France, it was fueled by the chaos of constant regime changes. Artists stopped painting the 'ideal' and started painting the 'intense'. Whether it was a shipwreck or a barricade, the goal was to make the viewer feel the adrenaline and the pain of the struggle for liberty.",
      sub: 'Emotion Over Reason',
      img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Eug%C3%A8ne_Delacroix_-_Les_baigneuses_%281854%29.jpg/1280px-Eug%C3%A8ne_Delacroix_-_Les_baigneuses_%281854%29.jpg?_=20180513233653', 
      color: '#0f0202'
    },
    {
      type: 'spotlight',
      name: 'EUGÈNE DELACROIX',
      dates: '1798 — 1863',
      bio: "The leader of the Romantic school. Delacroix was a colorist who believed that a painting's emotional power came from its vibration. He was deeply inspired by literature and his travels to Morocco, which introduced exoticism into his work. His brush was never calm; he used sweeping, violent movements to bring history to life, most famously during the July Revolution of 1830.",
      work: 'La Liberté guidant le peuple (1830)',
      img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/La_Libert%C3%A9_guidant_le_peuple_-_Eug%C3%A8ne_Delacroix_-_Mus%C3%A9e_du_Louvre_Peintures_RF_129_-_apr%C3%A8s_restauration_2024.jpg/960px-La_Libert%C3%A9_guidant_le_peuple_-_Eug%C3%A8ne_Delacroix_-_Mus%C3%A9e_du_Louvre_Peintures_RF_129_-_apr%C3%A8s_restauration_2024.jpg', 
      caption: 'The ultimate personification of the French revolutionary soul.',
      color: '#0a0202'
    },
    {
      type: 'spotlight',
      name: 'THÉODORE GÉRICAULT',
      dates: '1791 — 1824',
      bio: "A short-lived but explosive genius. Géricault was a pioneer who studied real human corpses and survivors to paint 'The Raft of the Medusa'. He moved art away from the 'beautiful' and toward the 'sublime horror'. His work served as a direct political attack on the corruption of the restored French monarchy.",
      work: 'Le Radeau de la Méduse (1819)',
      img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/JEAN_LOUIS_TH%C3%89ODORE_G%C3%89RICAULT_-_La_Balsa_de_la_Medusa_%28Museo_del_Louvre%2C_1818-19%29.jpg/3840px-JEAN_LOUIS_TH%C3%89ODORE_G%C3%89RICAULT_-_La_Balsa_de_la_Medusa_%28Museo_del_Louvre%2C_1818-19%29.jpg', 
      caption: 'A scene of despair transformed into a political megaphone.',
      color: '#050000'
    },
    {
      type: 'tech-detail',
      title: 'TECHNIQUES ROMANTIQUES',
      items: [
        { t: 'Chiaroscuro', d: 'Dramatic use of deep shadows and blinding highlights to focus on the hero.', img: '' },
        { t: 'Diagonal Lines', d: 'Arranging figures in a pyramid or diagonal to create unstable, kinetic energy.', img: '' },
        { t: 'Vibrant Reds/Blues', d: 'Using saturated colors to signal blood, passion, and the national flag.', img: '' },
        { t: 'Visible Texture', d: 'Thick application of paint (impasto) that shows the artist’s hand in motion.', img: '' }
      ],
      color: '#1a0505'
    },
    // --- ERA III: REALISM ---
    {
      type: 'splash',
      era: 'III',
      title: 'LA VÉRITÉ DU PEUPLE',
      dates: '1840s — 1880s',
      intro: 'No more heroes, no more myths. Just the honest struggle of the working class.',
      img: 'https://images.unsplash.com/photo-1518998053504-539cbf6c3fd2?auto=format&fit=crop&q=80&w=1200',
      color: '#1a1410',
      accent: '#92400e'
    },
    {
      type: 'flowchart',
      title: 'CHRONOLOGIE SOCIALE',
      steps: [
        { year: '1848', t: '2nd Republic', d: 'Workers demand rights; the king is overthrown once more.' },
        { year: '1855', t: 'Pavilion', d: 'Courbet holds his own exhibition, bypassing the elite Salon.' },
        { year: '1870', t: 'War', d: 'The defeat against Prussia leads to the end of the Second Empire.' },
        { year: '1871', t: 'The Commune', d: 'The most radical moment for workers in French history.' }
      ],
      color: '#1a1410'
    },
    {
      type: 'article',
      title: 'LE MIROIR SOCIAL',
      content: "Realism was a democratic movement. Artists like Courbet and Millet turned their backs on the grand fantasies of Romanticism to paint the 'unbeautified' truth. They painted stone-breakers, funerals in small towns, and women working in fields. By giving these common subjects the same scale as kings, they were making a profound political statement about the equality of all Frenchmen.",
      sub: 'Honesty Over Drama',
      img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Telemaco_Signorini%2C_Il_ghetto_di_Firenze%2C_1882%2C_95x65_cm.jpg/960px-Telemaco_Signorini%2C_Il_ghetto_di_Firenze%2C_1882%2C_95x65_cm.jpg', 
      color: '#120f0d'
    },
    {
      type: 'spotlight',
      name: 'GUSTAVE COURBET',
      dates: '1819 — 1877',
      bio: "Courbet was a radical who famously said, 'Show me an angel and I will paint one.' He rejected all idealization. He was a self-taught master who learned by copying old masters in the Louvre, eventually becoming the most controversial figure in the French art world. He even participated in the Paris Commune, for which he was later exiled.",
      work: 'Un Enterrement à Ornans (1849)',
      img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Gustave_Courbet_-_A_Burial_at_Ornans_-_Google_Art_Project.jpg/3840px-Gustave_Courbet_-_A_Burial_at_Ornans_-_Google_Art_Project.jpg', 
      caption: 'Giving the dignity of a royal funeral to a simple village death.',
      color: '#0f0c0a'
    },
    {
      type: 'spotlight',
      name: 'JEAN-FRANÇOIS MILLET',
      dates: '1814 — 1875',
      bio: "Millet was the son of a peasant, and he brought a deeply personal respect for manual labor to the canvas. Unlike the urban Courbet, Millet focused on the spiritual and physical weight of rural life. His paintings often had a quiet, religious aura, elevating the act of farming into a sacred ritual of the French soul.",
      work: 'Les Glaneuses (1857)',
      img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Jean-Fran%C3%A7ois_Millet_-_Gleaners_-_Google_Art_Project_2.jpg/1920px-Jean-Fran%C3%A7ois_Millet_-_Gleaners_-_Google_Art_Project_2.jpg', 
      caption: 'A quiet protest against social inequality through the dignity of work.',
      color: '#0a0807'
    },
    {
      type: 'tech-detail',
      title: 'TECHNIQUES RÉALISTES',
      items: [
        { t: 'Earth Tones', d: 'Focus on browns, ochres, and greens to ground the subjects in the natural world.', img: '' },
        { t: 'Heavy Forms', d: 'Figures are painted with weight and solidity, emphasizing their physical labor.', img: '' },
        { t: 'Eye-Level Perspective', d: 'Placing the viewer in the same space as the subject, not looking down on them.', img: '' },
        { t: 'Natural Light', d: 'Avoids dramatic spotlights for the flat, honest light of a cloudy day.', img: '' }
      ],
      color: '#1a1410'
    },
    // --- ERA IV: MODERNISM ---
    {
      type: 'splash',
      era: 'IV',
      title: 'LA MODERNITÉ',
      dates: '1860s — 1970s',
      intro: 'From the light of the harbor to the geometry of the mind. The birth of the avant-garde.',
      img: 'https://images.unsplash.com/photo-1541119638723-c51cbe2262aa?auto=format&fit=crop&q=80&w=1200',
      color: '#0a1a1a',
      accent: '#10b981'
    },
    {
      type: 'flowchart',
      title: 'L\'ÉVOLUTION MODERNE',
      steps: [
        { year: '1872', t: 'Impression', d: 'Monet shows a harbor at dawn; the movement gets its name.' },
        { year: '1905', t: 'Wild Beasts', d: 'Matisse uses pure color to shock the senses (Fauvism).' },
        { year: '1907', t: 'Cubism', d: 'Picasso and Braque shatter the perspective into geometric planes.' },
        { year: '1924', t: 'Surrealism', d: 'Paris becomes the world capital for dreams and the subconscious.' }
      ],
      color: '#0a1a1a'
    },
    {
      type: 'article',
      title: 'LA CITÉ RAPIDE',
      content: "As Paris industrialized, art had to move at the speed of the city. Impressionists like Monet caught the transient light of steam engines and cafes. Modernism wasn't just about what was painted, but the freedom to paint it. It was the ultimate revolution—where the artist finally gained total autonomy from the state and the academy.",
      sub: 'Freedom and Form',
      img: '', 
      color: '#051111'
    },
    {
      type: 'spotlight',
      name: 'CLAUDE MONET',
      dates: '1840 — 1926',
      bio: "Monet was the master of atmosphere. He spent his life chasing light across haystacks, cathedrals, and water lilies. He rejected the traditional 'finish' of a painting, preferring to show the 'impression' of a fleeting second. His garden at Giverny became a laboratory for color that would eventually influence the move toward total abstraction.",
      work: 'Impression, soleil levant (1872)',
      img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Monet_-_Impression%2C_Sunrise.jpg/960px-Monet_-_Impression%2C_Sunrise.jpg', 
      caption: 'The dawn of a new way of seeing the world.',
      color: '#020d0d'
    },
    {
      type: 'spotlight',
      name: 'HENRI MATISSE',
      dates: '1869 — 1954',
      bio: "Matisse was the king of the Fauves (the Wild Beasts). For him, color was not a tool for description, but for expression. He simplified human forms into elegant, powerful lines and bold, flat areas of pure pigment. He remained a revolutionary throughout his life, even inventing 'drawing with scissors' in his final years.",
      work: 'La Danse (1910)',
      img: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/Matissedance.jpg', 
      caption: 'The rhythmic energy of pure human joy.',
      color: '#000000'
    },
    {
      type: 'tech-detail',
      title: 'TECHNIQUES MODERNES',
      items: [
        { t: 'Broken Color', d: 'Dabs of pure paint side-by-side that the eye mixes from a distance.', img: '' },
        { t: 'En Plein Air', d: 'Painting directly outside to capture real light and weather effects.', img: '' },
        { t: 'Flat Pigment', d: 'Removing shadows to emphasize the two-dimensional power of the canvas.', img: '' },
        { t: 'Geometric Planes', d: 'Breaking subjects into cubes and triangles to show multiple angles at once.', img: '' }
      ],
      color: '#0a1a1a'
    },
    // --- FINAL ---
    {
      type: 'lexique',
      title: 'LEXIQUE D\'HONNEUR',
      references: [
        { term: 'Rococo', context: 'The ornate final act of the monarchy (1730s).' },
        { term: 'Romantisme', context: 'The emotional cry of the 1830 revolutionary generation.' },
        { term: 'Réalisme', context: 'The democratic truth-speaking of the working man (1848).' },
        { term: 'Impressionnisme', context: 'The modern celebration of light and speed (1870s).' },
        { term: 'École de Fontainebleau', context: 'The Italian-influenced start of the French Renaissance.' }
      ],
      color: '#050505'
    },
    {
      type: 'manifesto',
      title: 'L\'ÉPILOGUE',
      text: "France is a country built on the barricades. Its art is no different. From the palaces of Versailles to the streets of Paris, every painting here is a witness to the history of a people who refuse to be silent.",
      quote: '“L\'art français a transformé la peinture en un mégaphone pour la liberté.”',
      color: '#0a0a0a'
    },
    {
      type: 'tech',
      title: 'RÉFÉRENCES',
      items: [
        'Wikipedia (French Art History)',
        'The Met Museum (School of Fontainebleau)',
        'Artsy (The Realist Revolt)',
        'The Art Story (Romanticism)'
      ],
      color: '#b69797'
    },
    {
      type: 'cover',
      title: 'FIN',
      sub: 'L\'HÉRITAGE DE LA TOILE',
      detail: 'Monumental Edition MMXXIV',
      img: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&q=80&w=1200',
      color: '#000'
    }
  ];

  useEffect(() => {
    setIsVisible(false);
    const timer = setTimeout(() => setIsVisible(true), 50);
    return () => clearTimeout(timer);
  }, [currentPage]);

  const next = () => setCurrentPage((p) => Math.min(initialData.length - 1, p + 1));
  const prev = () => setCurrentPage((p) => Math.max(0, p - 1));

  const page = initialData[currentPage];
  const isModern = ['RÉALISME', 'MODERNISME', 'FIN', 'LEXIQUE'].some(era => (page.title || '').includes(era));

  return (
    <div className={`min-h-screen flex flex-col items-center justify-center overflow-hidden transition-colors duration-1000 ${isModern ? 'font-sans' : 'font-serif'}`} style={{ backgroundColor: page.color }}>
      <FlagMotif />
      <div className="fixed inset-0 pointer-events-none z-50 opacity-10 mix-blend-overlay bg-[url('https://www.transparenttextures.com/patterns/black-linen.png')]" />

      <nav className="fixed top-0 w-full p-10 flex justify-between items-center z-[100]">
        <div className="flex items-center gap-4">
          <Flag size={18} className="text-white/20" />
          <span className="text-2xl tracking-[0.4em] text-white font-bold opacity-80 uppercase">ÉCLAT</span>
        </div>
        <span className="text-[10px] text-white/30 uppercase tracking-[0.5em] font-sans">Art as Revolution</span>
      </nav>

      <main className="relative w-full h-screen flex items-center justify-center p-0">
        <div className={`w-full h-full relative transition-all duration-1000 transform ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-105'}`}>
          
          {/* COVER TYPE */}
          {page.type === 'cover' && (
            <div className="w-full h-full flex flex-col items-center justify-center text-center relative px-10">
              <div className="absolute inset-0 bg-center bg-cover opacity-30" style={{ backgroundImage: `url(${page.img})` }} />
              <div className="border-[20px] border-white/5 absolute inset-20 pointer-events-none" />
              <h1 className="text-[18vw] font-black text-white tracking-tighter leading-none z-10 uppercase">{page.title}</h1>
              <p className="text-3xl tracking-[0.8em] text-white/80 uppercase mt-4 z-10">{page.sub}</p>
              <p className="text-xs text-white/40 uppercase mt-8 z-10 font-sans tracking-widest">{page.detail}</p>
            </div>
          )}

          {/* RENAISSANCE TYPE (NEW) */}
          {page.type === 'renaissance' && (
            <div className="w-full h-full p-24 grid grid-cols-12 gap-8 relative">
              <div className="col-span-3 border border-white/10 bg-white/5 overflow-hidden flex items-center justify-center italic text-white/20 text-xs tracking-widest uppercase">
                {page.img1 ? <img src={page.img1} /> : '[AJOUTER IMAGE COIN GAUCHE]'}
              </div>
              <div className="col-span-6 flex flex-col justify-center space-y-8 text-center px-10">
                <h2 className="text-6xl font-black text-white tracking-tighter leading-none">{page.title}</h2>
                <p className="text-white/40 uppercase tracking-[0.3em] font-sans text-xs italic">{page.sub}</p>
                <p className="text-white/70 text-lg leading-relaxed font-light">{page.content}</p>
              </div>
              <div className="col-span-3 col-start-10 border border-white/10 bg-white/5 overflow-hidden flex items-center justify-center italic text-white/20 text-xs tracking-widest uppercase mt-auto h-1/2">
                {page.img2 ? <img src={page.img2} /> : '[AJOUTER IMAGE COIN DROIT]'}
              </div>
            </div>
          )}

          {/* TECH DETAIL TYPE (NEW) */}
          {page.type === 'tech-detail' && (
            <div className="w-full h-full p-24 flex flex-col justify-center">
               <h3 className="text-white/30 uppercase tracking-[1em] mb-16 text-sm font-bold text-center">{page.title}</h3>
               <div className="grid grid-cols-2 gap-x-20 gap-y-16">
                 {page.items.map((it, i) => (
                   <div key={i} className="flex items-center gap-8 group">
                     <div className="w-24 h-24 border border-white/10 bg-white/5 flex-shrink-0 flex items-center justify-center text-[8px] text-white/20 uppercase tracking-tighter text-center px-2">
                       {it.img ? <img src={it.img} /> : '[VISUEL TECHNIQUE]'}
                     </div>
                     <div>
                       <h4 className="text-white text-2xl font-bold uppercase tracking-widest mb-2 group-hover:text-[#ed2939] transition-colors">{it.t}</h4>
                       <p className="text-white/50 text-sm leading-snug font-light">{it.d}</p>
                     </div>
                   </div>
                 ))}
               </div>
            </div>
          )}

          {/* SPLASH TYPE */}
          {page.type === 'splash' && (
            <div className="w-full h-full flex items-center justify-center relative overflow-hidden">
               <div className="absolute inset-0 bg-center bg-cover opacity-20 scale-110" style={{ backgroundImage: `url(${page.img})` }} />
               <div className="relative text-center max-w-5xl px-10">
                 <span className="text-xl font-bold tracking-[1em] mb-6 block" style={{ color: page.accent }}>{page.era}</span>
                 <h2 className="text-[12vw] font-black text-white tracking-tighter mb-4 leading-none uppercase">{page.title}</h2>
                 <p className="text-2xl tracking-[0.5em] text-white/40 mb-12 uppercase">{page.dates}</p>
                 <p className="text-3xl text-white/90 leading-tight italic max-w-4xl mx-auto font-light">"{page.intro}"</p>
               </div>
            </div>
          )}

          {/* SPOTLIGHT TYPE */}
          {page.type === 'spotlight' && (
            <div className="w-full h-full flex flex-col md:flex-row">
              <div className="w-full md:w-3/5 h-full relative flex items-center justify-center bg-white/5 overflow-hidden border-r border-white/5">
                <div className="absolute inset-0 bg-center bg-cover opacity-60 hover:scale-105 transition-transform duration-[10s]" style={{ backgroundImage: `url(${page.img})` }} />
                {!page.img && <div className="z-10 p-8 border-2 border-white/10 text-xs text-white/30 tracking-[0.5em] uppercase">[AJOUTER ŒUVRE ICI]</div>}
              </div>
              <div className="w-full md:w-2/5 p-20 flex flex-col justify-center bg-black">
                 <h2 className="text-7xl font-black text-white leading-tight mb-6 tracking-tighter uppercase">{page.name}</h2>
                 <p className="text-white/40 text-lg italic mb-10">{page.dates}</p>
                 <p className="text-white/60 text-lg leading-relaxed font-light mb-10">{page.bio}</p>
                 <div className="p-8 border-l-4 border-white/20 bg-white/5">
                    <p className="text-[10px] text-white/30 uppercase tracking-[0.5em] mb-4 font-sans">Œuvre Maîtresse</p>
                    <p className="text-white font-bold text-2xl italic leading-none">{page.work}</p>
                    <p className="text-white/40 text-xs uppercase mt-4 leading-relaxed font-sans italic">{page.caption}</p>
                 </div>
              </div>
            </div>
          )}

          {/* ARTICLE TYPE */}
          {page.type === 'article' && (
             <div className="w-full h-full flex flex-col md:flex-row">
                <div className="flex-1 p-24 flex flex-col justify-center space-y-10">
                   <h2 className="text-8xl font-black text-white leading-[0.8] tracking-tighter uppercase">{page.title}</h2>
                   <h4 className="text-white/40 uppercase tracking-[0.5em] text-xl font-light">{page.sub}</h4>
                   <p className="text-white/70 text-2xl leading-relaxed font-light first-letter:text-8xl first-letter:float-left first-letter:mr-6 first-letter:text-[#ed2939] first-letter:font-black">
                     {page.content}
                   </p>
                </div>
                <div className="flex-1 bg-white/5 flex items-center justify-center relative overflow-hidden">
                   <div className="absolute inset-0 bg-center bg-cover opacity-40" style={{ backgroundImage: `url(${page.img})` }} />
                   {!page.img && <div className="z-10 p-8 border-2 border-white/10 text-xs text-white/30 tracking-[0.5em] uppercase">[AJOUTER VISUEL HISTORIQUE]</div>}
                </div>
             </div>
          )}

          {/* LEXIQUE TYPE */}
          {page.type === 'lexique' && (
            <div className="w-full h-full flex items-center justify-center p-24">
               <div className="w-full max-w-6xl">
                 <h2 className="text-9xl font-black text-white tracking-tighter mb-20 opacity-20 leading-none">{page.title}</h2>
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-12">
                    {page.references.map((ref, i) => (
                      <div key={i} className="group border-b border-white/10 pb-8 hover:border-[#ed2939] transition-colors">
                        <h4 className="text-white text-3xl font-bold uppercase tracking-widest mb-4">{ref.term}</h4>
                        <p className="text-white/50 text-lg leading-snug font-light">{ref.context}</p>
                      </div>
                    ))}
                 </div>
               </div>
            </div>
          )}

          {/* TABLE TYPE */}
          {page.type === 'table' && (
            <div className="w-full h-full flex flex-col items-center justify-center p-24">
               <h2 className="text-6xl font-black text-white tracking-tighter mb-16 self-start uppercase">{page.title}</h2>
               <div className="w-full border-t border-white/20">
                  {page.data.map((row, i) => (
                    <div key={i} className="grid grid-cols-3 py-12 border-b border-white/10 group cursor-pointer hover:bg-white/5 transition-all px-6">
                      <div className="text-white text-5xl font-black tracking-tighter uppercase group-hover:translate-x-4 transition-transform">{row.era}</div>
                      <div className="text-white/60 text-lg uppercase tracking-widest self-center font-sans px-10">{row.focus}</div>
                      <div className="text-white/30 text-lg italic self-center text-right">{row.mood}</div>
                    </div>
                  ))}
               </div>
            </div>
          )}

          {/* FLOWCHART TYPE */}
          {page.type === 'flowchart' && (
            <div className="w-full h-full flex flex-col items-center justify-center p-24">
               <h3 className="text-white/30 uppercase tracking-[1em] mb-20 text-sm font-bold">{page.title}</h3>
               <div className="flex w-full items-start gap-0">
                 {page.steps.map((s, i) => (
                   <div key={i} className="flex-1 flex flex-col items-start px-8 group relative">
                     <span className="text-white text-6xl font-black mb-6 opacity-20 group-hover:opacity-100 transition-opacity leading-none">{s.year}</span>
                     <div className="h-1 w-full bg-white/10 mb-8 overflow-hidden"><div className="h-full bg-white w-0 group-hover:w-full transition-all duration-1000" /></div>
                     <h4 className="text-white text-xl font-bold uppercase tracking-widest mb-4">{s.t}</h4>
                     <p className="text-sm text-white/40 leading-relaxed uppercase">{s.d}</p>
                   </div>
                 ))}
               </div>
            </div>
          )}

          {/* MANIFESTO TYPE */}
          {page.type === 'manifesto' && (
            <div className="w-full h-full flex items-center justify-center p-24 text-center">
              <div className="max-w-4xl space-y-16">
                <p className="text-4xl text-white/80 leading-tight font-light">{page.text}</p>
                <blockquote className="text-2xl font-bold italic text-[#ed2939] border-t border-white/10 pt-16 tracking-tighter uppercase">{page.quote}</blockquote>
              </div>
            </div>
          )}

        </div>
      </main>

      {/* Footer Scrubber */}
      <footer className="fixed bottom-0 w-full p-16 flex justify-between items-center z-[110] bg-gradient-to-t from-black/80 to-transparent">
        <div className="flex gap-1 overflow-hidden">
           {initialData.map((_, i) => (
             <button key={i} onClick={() => setCurrentPage(i)} className={`h-1 transition-all duration-300 ${currentPage === i ? 'w-16 bg-white shadow-[0_0_15px_white]' : 'w-1 bg-white/10'}`} />
           ))}
        </div>
        <div className="text-right flex flex-col items-end">
          <p className="text-[10px] tracking-[0.6em] text-white/20 uppercase mb-2 font-sans">Folio d'Art Française</p>
          <div className="flex items-center gap-6">
            <span className="text-white/40 text-sm font-light font-sans tracking-[0.3em]">PAGE {currentPage + 1} / {initialData.length}</span>
            <p className="text-6xl font-black text-white tracking-tighter leading-none">{currentPage + 1 < 10 ? `0${currentPage + 1}` : currentPage + 1}</p>
          </div>
        </div>
      </footer>

      <button onClick={prev} className="fixed left-12 top-1/2 -translate-y-1/2 p-4 text-white/5 hover:text-white transition-all z-[120] hover:scale-125"><ChevronLeft size={80} strokeWidth={1} /></button>
      <button onClick={next} className="fixed right-12 top-1/2 -translate-y-1/2 p-4 text-white/5 hover:text-white transition-all z-[120] hover:scale-125"><ChevronRight size={80} strokeWidth={1} /></button>

      <style>{`
        body { background: #000; overflow: hidden; margin: 0; }
        .font-sans { font-family: 'Inter', 'Helvetica Neue', sans-serif; }
        .font-serif { font-family: 'Playfair Display', serif; }
        ::selection { background: #ed2939; color: white; }
      `}</style>
    </div>
  );
};

export default App;