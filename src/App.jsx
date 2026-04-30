import React, { useState, useEffect } from 'react';
import {
  ChevronRight, ChevronLeft, Flag, Clock, ArrowRight, Info, BookOpen
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
      detail: 'Une Exploration Détaillée de la Souveraineté Artistique Française',
      img: 'https://images.unsplash.com/photo-1549490349-8643362247b5?auto=format&fit=crop&q=80&w=1200',
      color: '#050505'
    },
    // 2. INTRODUCTION
    {
      type: 'manifesto',
      title: 'PRÉFACE',
      text: "L'art sert de miroir ultime à l'âme d'une nation. En France, la transition de l'indulgence ornée de la monarchie à la dure réalité de l'homme du commun ne fut pas seulement un choix stylistique, mais un acte révolutionnaire. Chaque coup de pinceau fut un appel à la liberté.",
      quote: '“L\'art français a transformé la peinture en un mégaphone pour la liberté.”',
      color: '#0a0a0a'
    },
    // 3. FRENCH RENAISSANCE
    {
      type: 'renaissance',
      title: 'LA RENAISSANCE FRANÇAISE',
      sub: 'La Renaissance de l\'Élégance Classique',
      content: "La Renaissance française (XVe-XVIIe siècles) fut un mouvement charnière par lequel la France sortit du Moyen Âge. Influencé par des maîtres italiens comme Léonard de Vinci, invités par le roi François Ier, l'art français a commencé à se concentrer sur l'humanisme et la symétrie classique. Cette époque a vu l'essor de l'École de Fontainebleau, qui combinait le maniérisme décoratif avec l'élégance de la cour française. Ce fut l'époque des grands châteaux et des premiers véritables artistes 'stars' du royaume. Ce mouvement a jeté les bases architecturales et esthétiques de la grandeur qui allait finalement mener à l'excès du Rococo, constituant la première étape du voyage de la France pour devenir la capitale mondiale de l'art.",
      img1: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Meister_der_Schule_von_Fontainebleau_001.jpg/1280px-Meister_der_Schule_von_Fontainebleau_001.jpg',
      img2: 'https://upload.wikimedia.org/wikipedia/commons/3/38/Jean_Cousin_the_Elder%2C_Eva_Prima_Pandora.jpg',
      img3: 'https://upload.wikimedia.org/wikipedia/commons/4/4f/S%C3%A9pulcre_Ligier_Richier_301008_02.jpg',
      color: '#151515'
    },
    // 4. COMPARISON TABLE
    {
      type: 'table',
      title: 'SOMMAIRE ANALYTIQUE',
      data: [
        { era: 'Rococo', focus: 'Romance Aristocratique', mood: 'Orné et Ludique' },
        { era: 'Romantisme', focus: 'Esprit Révolutionnaire', mood: 'Intense et Dramatique' },
        { era: 'Réalisme', focus: 'La Classe Ouvrière', mood: 'Vérité Sociale' },
        { era: 'Modernisme', focus: 'Lumière Moderne', mood: 'Serein et Abstrait' }
      ],
      color: '#300505'
    },
    // --- ERA I: ROCOCO ---
    {
      type: 'splash',
      era: 'I',
      title: 'L\'ÈHRE DU ROCOCO',
      dates: 'Années 1730 — 1760',
      intro: 'Le dernier souffle extravagant de la monarchie française, où l\'art était un bouclier contre la réalité.',
      img: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?auto=format&fit=crop&q=80&w=1200',
      color: '#1a1012',
      accent: '#fbcfe8'
    },
    {
      type: 'flowchart',
      title: 'CHRONOLOGIE DU ROCOCO',
      img: 'https://thegourmetgazette.com/wp-content/uploads/2023/12/5.-anonyme-le-regent-et-son-fils-dans-son-cabinet-de-travail.jpg',
      steps: [
        { year: '1715', t: 'Régence', d: 'La mort de Louis XIV conduit à un style de cour plus détendu et ludique.' },
        { year: '1730', t: 'Domination de la Cour', d: 'Boucher définit l\'esthétique de la haute aristocratie.' },
        { year: '1750', t: 'Les Lumières', d: 'Les philosophes commencent à se moquer de la nature "frivole" de l\'art.' },
        { year: '1763', t: 'Défaite de l\'État', d: 'L\'échec économique rend le luxe royal insultant pour les pauvres.' }
      ],
      color: '#16090d'
    },
    {
      type: 'article',
      title: 'L\'ART DU DÉNI',
      content: 'Alors que la France se rapprochait de l\'effondrement financier, l\'élite se retira dans un monde de fantaisies pastel. Les peintures rococo évitaient intentionnellement la dureté des rues. Elles dépeignaient un monde éternellement jeune, coquet et riche. Cet "Art du Déni" a involontairement alimenté le feu de la Révolution de 1789 à venir en visualisant le fossé massif entre la cour et les citoyens.',
      sub: 'Évasion Aristocratique',
      img: 'https://artincontext.org/wp-content/uploads/2023/08/Famous-French-Art.avif',
      color: '#1a1012'
    },
    {
      type: 'spotlight',
      name: 'FRANÇOIS BOUCHER',
      dates: '1703 — 1770',
      bio: "Boucher fut le peintre définitif de la cour française. Nommé Premier Peintre du Roi, son œuvre était inséparable de l'influence de Madame de Pompadour. Il était passé maître dans l''Idylle Pastorale', créant des scènes mythologiques floues qui privilégiaient la beauté décorative au poids moral. Son influence s'est étendue aux tapisseries et à la porcelaine, faisant de lui l'artiste le plus célèbre de sa génération.",
      work: 'Le Triomphe de Vénus (1740)',
      img: 'https://upload.wikimedia.org/wikipedia/commons/a/a3/The_Triumph_of_Venus%2C_by_Fran%C3%A7ois_Boucher.jpg',
      caption: 'Un chef-d\'œuvre de mythologie sensuelle et de fantaisie royale.',
      color: '#0d0809'
    },
    {
      type: 'spotlight',
      name: 'JEAN-HONORÉ FRAGONARD',
      dates: '1732 — 1806',
      bio: "Élève de Boucher, Fragonard a poussé le style rococo à ses extrêmes les plus coquets. Il était célèbre pour son coup de pinceau 'fluide' et sa capacité à capturer des moments éphémères de joie et d'érotisme. Bien qu'il ait remporté le Prix de Rome, il a choisi de travailler pour des mécènes aristocratiques privés plutôt que pour l'État, ce qui lui a permis de produire les scènes de jardin ludiques et emblématiques pour lesquelles il est reconnu aujourd'hui.",
      work: 'Les Hasards Heureux de l\'Escarpolette (1767)',
      img: 'https://artincontext.org/wp-content/uploads/2023/08/French-Art-Examples.avif',
      caption: 'Le symbole définitif du plaisir de l\'élite du XVIIIe siècle.',
      color: '#0a0607'
    },
    // CHANGED TO SPECIAL TYPE ONLY FOR PAGE 10 
    {
      type: 'tech-detail-special',
      title: 'TECHNIQUES DU ROCOCO',
      items: [
        { t: 'Palette Pastel', d: 'Accent sur les roses, les bleus clairs et les crèmes pour éliminer la lourdeur des ombres.' },
        { t: 'Coup de Pinceau Plumeux', d: 'Coups légers et vaporeux conçus pour imiter la texture de la soie et des nuages.' },
        { t: 'Composition en Courbe S', d: 'Rejette les lignes droites au profit de courbes fluides, asymétriques et de formes en coquillage.' },
        { t: 'Glaçis Translucide', d: 'Application de fines couches de peinture pour créer un teint de peau éclatant, semblable à de la porcelaine.' }
      ],
      imgA: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/L%27Embarquement_pour_Cyth%C3%A8re%2C_by_Antoine_Watteau%2C_from_C2RMF_retouched.jpg/3840px-L%27Embarquement_pour_Cyth%C3%A8re%2C_by_Antoine_Watteau%2C_from_C2RMF_retouched.jpg',
      caption: 'Pèlerinage à Cythère (1717) – Antoine Watteau',
      color: '#1a1012'
    },
    // --- ERA II: ROMANTICISM ---
    {
      type: 'splash',
      era: 'II',
      title: 'LE FEU ROMANTIQUE',
      dates: 'Années 1780 — 1850',
      intro: 'L\'art devient une arme. La passion, le sang et la révolution s\'emparent de la toile.',
      img: 'https://images.unsplash.com/photo-1505672678657-cc7037095e60?auto=format&fit=crop&q=80&w=1200',
      color: '#1a0505',
      accent: '#ef4444'
    },
    {
      type: 'flowchart',
      title: 'CHRONOLOGIE RÉVOLUTIONNAIRE',
      img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Pierre-Antoine_Demachy_-_D%C3%A9molition_de_la_Bastille%2C_le_17_juillet_1789_-_P53_-_Mus%C3%A9e_Carnavalet.jpg/3840px-Pierre-Antoine_Demachy_-_D%C3%A9molition_de_la_Bastille%2C_le_17_juillet_1789_-_P53_-_Mus%C3%A9e_Carnavalet.jpg',
      steps: [
        { year: '1789', t: 'Bastille', d: 'La chute de la monarchie oriente l\'art vers le sacrifice héroïque.' },
        { year: '1804', t: 'Empire', d: 'Napoléon utilise l\'art pour documenter ses ambitions mondiales et sa gloire.' },
        { year: '1819', t: 'La Méduse', d: 'Un passage de la gloire à l\'horreur de l\'échec gouvernemental.' },
        { year: '1830', t: 'Liberté', d: 'L\'homme du commun occupe enfin le devant de la scène dans la peinture d\'histoire.' }
      ],
      color: '#1a0505'
    },
    {
      type: 'article',
      title: 'LE CRI DU SENTIMENT',
      content: "Le Romantisme fut un rejet de la froide logique des Lumières. En France, il a été alimenté par le chaos des constants changements de régime. Les artistes ont cessé de peindre l''idéal' pour commencer à peindre l''intense'. Qu'il s'agisse d'un naufrage ou d'une barricade, le but était de faire ressentir au spectateur l'adrénaline et la douleur de la lutte pour la liberté.",
      sub: 'L\'Émotion sur la Raison',
      img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Eug%C3%A8ne_Delacroix_-_Les_baigneuses_%281854%29.jpg/1280px-Eug%C3%A8ne_Delacroix_-_Les_baigneuses_%281854%29.jpg?_=20180513233653',
      color: '#0f0202'
    },
    {
      type: 'spotlight',
      name: 'EUGÈNE DELACROIX',
      dates: '1798 — 1863',
      bio: "Chef de file de l'école romantique, Delacroix était un coloriste qui croyait que le pouvoir émotionnel d'une peinture provenait de sa vibration. Il fut profondément inspiré par la littérature et ses voyages au Maroc, qui ont introduit l'exotisme dans son œuvre. Son pinceau n'était jamais calme; il utilisait de grands mouvements violents pour donner vie à l'histoire, le plus célèbre étant lors de la Révolution de Juillet 1830.",
      work: 'La Liberté guidant le peuple (1830)',
      img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/La_Libert%C3%A9_guidant_le_peuple_-_Eug%C3%A8ne_Delacroix_-_Mus%C3%A9e_du_Louvre_Peintures_RF_129_-_apr%C3%A8s_restauration_2024.jpg/960px-La_Libert%C3%A9_guidant_le_peuple_-_Eug%C3%A8ne_Delacroix_-_Mus%C3%A9e_du_Louvre_Peintures_RF_129_-_apr%C3%A8s_restauration_2024.jpg',
      caption: 'La personnification ultime de l\'âme révolutionnaire française.',
      color: '#0a0202'
    },
    {
      type: 'spotlight',
      name: 'THÉODORE GÉRICAULT',
      dates: '1791 — 1824',
      bio: "Un génie éphémère mais explosif. Géricault fut un pionnier qui a étudié de vrais cadavres humains et des survivants pour peindre 'Le Radeau de la Méduse'. Il a éloigné l'art du 'beau' pour aller vers la 'sublime horreur'. Son œuvre a servi d'attaque politique directe contre la corruption de la monarchie française restaurée.",
      work: 'Le Radeau de la Méduse (1819)',
      img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/JEAN_LOUIS_TH%C3%89ODORE_G%C3%89RICAULT_-_La_Balsa_de_la_Medusa_%28Museo_del_Louvre%2C_1818-19%29.jpg/3840px-JEAN_LOUIS_TH%C3%89ODORE_G%C3%89RICAULT_-_La_Balsa_de_la_Medusa_%28Museo_del_Louvre%2C_1818-19%29.jpg',
      caption: 'Une scène de désespoir transformée en porte-voix politique.',
      color: '#050000'
    },
    {
      type: 'tech-detail-special',
      title: 'TECHNIQUES ROMANTIQUES',
      items: [
        { t: 'Clair-Obscur', d: 'Utilisation dramatique d\'ombres profondes et de reflets aveuglants pour se concentrer sur le héros.' },
        { t: 'Lignes Diagonales', d: 'Agencement des figures en pyramide ou en diagonale pour créer une énergie cinétique instable.' },
        { t: 'Rouges/Bleus Vibrants', d: 'Utilisation de couleurs saturées pour signaler le sang, la passion et le drapeau national.' },
        { t: 'Texture Visible', d: 'Application épaisse de peinture (empâtement) qui montre la main de l\'artiste en mouvement.' }
      ],
      imgA: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/La_Mort_de_Sardanapale_-_Eug%C3%A8ne_Delacroix_-_Mus%C3%A9e_du_Louvre_Peintures_RF_2346.jpg/960px-La_Mort_de_Sardanapale_-_Eug%C3%A8ne_Delacroix_-_Mus%C3%A9e_du_Louvre_Peintures_RF_2346.jpg',
      caption: 'La Mort de Sardanapale (1827) – Eugène Delacroix',
      color: '#1a0505'
    },
    // --- ERA III: REALISM ---
    {
      type: 'splash',
      era: 'III',
      title: 'LA VÉRITÉ DU PEUPLE',
      dates: 'Années 1840 — 1880',
      intro: 'Plus de héros, plus de mythes. Seulement la lutte honnête de la classe ouvrière.',
      img: 'https://www.escapemotions.com/images/mainpage/images/blog_posts_bg/landing-page_blog_93303117480.jpg',
      color: 'rgb(91, 5, 43)',
      accent: 'rgb(16, 17, 72)'
    },
    {
      type: 'flowchart',
      title: 'CHRONOLOGIE SOCIALE',
      img: 'https://upload.wikimedia.org/wikipedia/commons/c/c1/Barricade18March1871_%28cropped%29.jpg',
      steps: [
        { year: '1848', t: '2ème République', d: 'Les ouvriers exigent des droits ; le roi est de nouveau renversé.' },
        { year: '1855', t: 'Le Pavillon', d: 'Courbet organise sa propre exposition, contournant l\'élite du Salon.' },
        { year: '1870', t: 'Guerre', d: 'La défaite contre la Prusse conduit à la fin du Second Empire.' },
        { year: '1871', t: 'La Commune', d: 'Le moment le plus radical pour les ouvriers dans l\'histoire de France.' }
      ],
      color: '#1a1410'
    },
    {
      type: 'article',
      title: 'LE MIROIR SOCIAL',
      content: "Le Réalisme fut un mouvement démocratique. Des artistes comme Courbet et Millet ont tourné le dos aux grandes fantaisies du Romantisme pour peindre la vérité 'sans embellissement'. Ils ont peint des casseurs de pierres, des enterrements dans de petites villes et des femmes travaillant dans les champs. En donnant à ces sujets communs la même échelle qu'aux rois, ils faisaient une déclaration politique profonde sur l'égalité de tous les Français.",
      sub: 'L\'Honnêteté avant le Drame',
      img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Telemaco_Signorini%2C_Il_ghetto_di_Firenze%2C_1882%2C_95x65_cm.jpg/960px-Telemaco_Signorini%2C_Il_ghetto_di_Firenze%2C_1882%2C_95x65_cm.jpg',
      color: '#120f0d'
    },
    {
      type: 'spotlight',
      name: 'GUSTAVE COURBET',
      dates: '1819 — 1877',
      bio: "Courbet était un radical qui a dit la célèbre phrase : 'Montrez-moi un ange et je le peindrai.' Il a rejeté toute idéalisation. C'était un maître autodidacte qui a appris en copiant les maîtres anciens au Louvre, devenant finalement la figure la plus controversée du monde de l'art français. Il a même participé à la Commune de Paris, ce qui lui a valu d'être exilé par la suite.",
      work: 'Un Enterrement à Ornans (1849)',
      img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Gustave_Courbet_-_A_Burial_at_Ornans_-_Google_Art_Project.jpg/3840px-Gustave_Courbet_-_A_Burial_at_Ornans_-_Google_Art_Project.jpg',
      caption: 'Donner la dignité d\'un enterrement royal à une simple mort de village.',
      color: '#0f0c0a'
    },
    {
      type: 'spotlight',
      name: 'JEAN-FRANÇOIS MILLET',
      dates: '1814 — 1875',
      bio: "Millet était fils de paysan, et il a apporté un respect profondément personnel pour le travail manuel sur la toile. Contrairement à l'urbain Courbet, Millet s'est concentré sur le poids spirituel et physique de la vie rurale. Ses peintures avaient souvent une aura calme et religieuse, élevant l'acte de cultiver la terre en un rituel sacré de l'âme française.",
      work: 'Les Glaneuses (1857)',
      img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Jean-Fran%C3%A7ois_Millet_-_Gleaners_-_Google_Art_Project_2.jpg/1920px-Jean-Fran%C3%A7ois_Millet_-_Gleaners_-_Google_Art_Project_2.jpg',
      caption: 'Une protestation silencieuse contre l\'inégalité sociale par la dignité du travail.',
      color: '#0a0807'
    },
    {
      type: 'tech-detail',
      title: 'TECHNIQUES RÉALISTES',
      layout: 'vertical-strip',
      img2: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Les_Baigneuses-Courbet.jpg/960px-Les_Baigneuses-Courbet.jpg',
      caption2: 'Les Baigneuses (1853) – Gustave Courbet',
      img3: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Millet%2C_Jean-Fran%C3%A7ois_-_Man_with_a_Hoe_-_Google_Art_Project.jpg/960px-Millet%2C_Jean-Fran%C3%A7ois_-_Man_with_a_Hoe_-_Google_Art_Project.jpg',
      caption3: 'L\'Homme à la houe (1860) – Jean-François Millet',
      items: [
        { t: 'Tons Terreux', d: 'Accent sur les bruns, les ocres et les verts pour ancrer les sujets dans le monde naturel.' },
        { t: 'Formes Lourdes', d: 'Les figures sont peintes avec poids et solidité, soulignant leur labeur physique.' },
        { t: 'Perspective à Hauteur d\'Yeux', d: 'Placer le spectateur dans le même espace que le sujet, sans le regarder de haut.' },
        { t: 'Lumière Naturelle', d: 'Évite les projecteurs dramatiques au profit de la lumière plate et honnête d\'un jour nuageux.' }
      ],
      color: '#1a1410'
    },
    // --- ERA IV: MODERNISM ---
    {
      type: 'splash',
      era: 'IV',
      title: 'LA MODERNITÉ',
      dates: 'Années 1860 — 1970',
      intro: 'De la lumière du port à la géométrie de l\'esprit. La naissance de l\'avant-garde.',
      img: 'https://images.unsplash.com/photo-1541119638723-c51cbe2262aa?auto=format&fit=crop&q=80&w=1200',
      color: '#0a1a1a',
      accent: '#10b981'
    },
    {
      type: 'flowchart',
      title: 'L\'ÉVOLUTION MODERNE',
      img: 'https://www.thisiscolossal.com/wp-content/uploads/2026/02/carrington-4.jpg',
      steps: [
        { year: '1872', t: 'Impression', d: 'Monet peint un port à l\'aube ; le mouvement trouve son nom.' },
        { year: '1905', t: 'Fauves', d: 'Matisse utilise des couleurs pures pour choquer les sens (Fauvisme).' },
        { year: '1907', t: 'Cubisme', d: 'Picasso et Braque brisent la perspective en plans géométriques.' },
        { year: '1924', t: 'Surréalisme', d: 'Paris devient la capitale mondiale des rêves et de l\'inconscient.' }
      ],
      color: '#04142e'
    },
    {
      type: 'article',
      title: 'LA CITÉ RAPIDE',
      content: "Alors que Paris s'industrialisait, l'art devait avancer à la vitesse de la ville. Des impressionnistes comme Monet ont capté la lumière éphémère des machines à vapeur et des cafés. Le Modernisme ne concernait pas seulement ce qui était peint, mais la liberté de le peindre. Ce fut l'ultime révolution : l'artiste gagnant enfin une autonomie totale face à l'État et à l'académie.",
      sub: 'Liberté et Forme',
      img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Alfred_Sisley_-_Snow_at_Louveciennes_-_Google_Art_Project.jpg/1280px-Alfred_Sisley_-_Snow_at_Louveciennes_-_Google_Art_Project.jpg?_=20130105031253',
      color: '#051111'
    },
    {
      type: 'spotlight',
      name: 'CLAUDE MONET',
      dates: '1840 — 1926',
      bio: "Monet était le maître de l'atmosphère. Il a passé sa vie à poursuivre la lumière sur des meules de foin, des cathédrales et des nénuphars. Il a rejeté le 'fini' traditionnel d'une peinture, préférant montrer l''impression' d'une seconde éphémère. Son jardin à Giverny est devenu un laboratoire de la couleur qui influencera plus tard le mouvement vers l'abstraction totale.",
      work: 'Impression, soleil levant (1872)',
      img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Monet_-_Impression%2C_Sunrise.jpg/960px-Monet_-_Impression%2C_Sunrise.jpg',
      caption: 'L\'aube d\'une nouvelle façon de voir le monde.',
      color: '#020d0d'
    },
    {
      type: 'spotlight',
      name: 'HENRI MATISSE',
      dates: '1869 — 1954',
      bio: "Matisse était le roi des Fauves. Pour lui, la couleur n'était pas un outil de description, mais d'expression. Il a simplifié les formes humaines en lignes élégantes et puissantes et en aplats audacieux de pigments purs. Il est resté un révolutionnaire toute sa vie, inventant même le 'dessin avec des ciseaux' dans ses dernières années.",
      work: 'La Danse (1910)',
      img: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/Matissedance.jpg',
      caption: 'L\'énergie rythmique de la joie humaine pure.',
      color: '#000000'
    },
    {
      type: 'tech-detail-special',
      title: 'TECHNIQUES MODERNES',
      layout: 'split',
      imgA: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/%27White_Water_Lilies%27_by_Claude_Monet%2C_1899%2C_Pushkin_Museum.JPG/500px-%27White_Water_Lilies%27_by_Claude_Monet%2C_1899%2C_Pushkin_Museum.JPG',
      caption: 'Série des Nymphéas (1896–1926) – Claude Monet',
      items: [
        { t: 'Couleur Brisée', d: 'Petites touches de peinture pure côte à côte que l\'œil mélange de loin.' },
        { t: 'En Plein Air', d: 'Peindre directement à l\'extérieur pour capturer la vraie lumière et la météo.' },
        { t: 'Pigment Plat', d: 'Supprimer les ombres pour souligner la puissance bidimensionnelle de la toile.' },
        { t: 'Plans Géométriques', d: 'Briser les sujets en cubes et en triangles pour montrer plusieurs angles à la fois.' }
      ],
      color: '#0a1a1a'
    },
    // --- FINAL ---

    {
      type: 'manifesto',
      title: 'L\'ÉPILOGUE',
      text: "La France est un pays bâti sur les barricades. Son art n'est pas différent. Des palais de Versailles aux rues de Paris, chaque peinture ici est le témoin de l'histoire d'un peuple qui refuse de se taire.",
      quote: '“L\'art français a transformé la peinture en un mégaphone pour la liberté.”',
      color: '#0a0a0a'
    },
    {
      type: 'tech',
      title: 'RÉFÉRENCES',
      col1Title: 'Sources Iconographiques',
      col1: [
        'The Met Museum (metmuseum.org)',
        'Musée du Louvre (collections.louvre.fr)',
        'Musée d’Orsay (musee-orsay.fr)',
        'National Gallery UK (nationalgallery.org.uk)',
        'Google Arts & Culture (artsandculture.google.com)',
        'Wikimedia Commons (commons.wikimedia.org)'
      ],
      col2Title: 'Sources Historiques',
      col2: [
        'Smarthistory (smarthistory.org)',
        'Heilbrunn Timeline (metmuseum.org/toah)',
        'Musée d’Orsay Archives (musee-orsay.fr)',
        'Encyclopaedia Britannica (britannica.com)',
        'Tate Museum (tate.org.uk/art)'
      ],
      color: '#000000'
    },
    {
      type: 'cover',
      title: 'FIN',
      sub: 'L\'HÉRITAGE DE LA TOILE',
      detail: 'Édition Monumentale MMXXIV',
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

          {/* RENAISSANCE TYPE */}
          {page.type === 'renaissance' && (
            <div className="w-full h-full p-24 grid grid-cols-12 gap-8 relative">
              <div className="col-span-4 flex flex-col shadow-2xl relative">
                {/* Image Container */}
                <div className="flex-1 border border-white/10 bg-white/5 overflow-hidden flex items-center justify-center italic text-white/20 text-xs tracking-widest uppercase">
                  {page.img1 ? <img src={page.img1} alt="Left Corner" className="w-full h-full object-cover" /> : '[AJOUTER IMAGE COIN GAUCHE]'}
                </div>
                {/* Caption Block */}
                <div className="bg-black p-6 flex items-center z-20">
                  <p className="text-xs text-white opacity-80 uppercase tracking-widest leading-relaxed font-sans font-bold">
                    Diane chasseresse, école de Fontainebleau (1550-1560)
                  </p>
                </div>
              </div>
              <div className="col-span-4 flex flex-col justify-center space-y-6 text-center px-8">
                <h2 className="text-5xl font-black text-white tracking-tighter leading-tight">{page.title}</h2>
                <p className="text-white/40 uppercase tracking-[0.3em] font-sans text-xs italic">{page.sub}</p>
                <p className="text-white/70 text-base leading-relaxed font-light">{page.content}</p>
              </div>
              <div className="col-span-4 flex flex-col gap-6">
                {/* First Image Box with Caption */}
                <div className="flex-1 flex flex-col shadow-2xl relative">
                  <div className="flex-1 border border-white/10 bg-white/5 overflow-hidden flex items-center justify-center italic text-white/20 text-xs tracking-widest uppercase">
                    {page.img2 ? <img src={page.img2} alt="Right Corner" className="w-full h-full object-cover" /> : '[AJOUTER IMAGE COIN DROIT]'}
                  </div>
                  <div className="bg-black p-6 flex items-center z-20">
                    <p className="text-xs text-white opacity-80 uppercase tracking-widest leading-relaxed font-sans font-bold">
                      Ève, Première Pandore par Jean Cousin l'Ancien (vers 1550)
                    </p>
                  </div>
                </div>
                {/* Second Image Box */}
                <div className="flex-1 flex flex-col shadow-2xl relative">
                  <div className="flex-1 border border-white/10 bg-white/5 overflow-hidden flex items-center justify-center italic text-white/20 text-xs tracking-widest uppercase">
                    {page.img3 ? <img src={page.img3} alt="Second Image" className="w-full h-full object-cover" /> : '[AJOUTER IMAGE SECOND]'}
                  </div>
                  <div className="bg-black p-6 flex items-center z-20">
                    <p className="text-xs text-white opacity-80 uppercase tracking-widest leading-relaxed font-sans font-bold">
                      Ligier Richier, Lamentation du Christ, église Saint-Étienne, Saint-Mihiel
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* =======================================================
              SPECIAL TECH DETAIL TYPE (ROCOCO & ROMANTICISM)
              ======================================================= */}
          {page.type === 'tech-detail-special' && (
            <div className="w-full h-full relative flex items-center justify-center p-24 overflow-hidden z-0">

              <div className="w-full h-full grid grid-cols-12 gap-16 relative z-10 items-center">

                {/* Left Column: Technique List */}
                <div className="col-span-5 flex flex-col justify-center space-y-12">
                  <h2 className="text-6xl font-black text-white tracking-tighter uppercase border-b border-white border-opacity-20 pb-6">
                    {page.title}
                  </h2>
                  <div className="space-y-10">
                    {page.items.map((it, i) => (
                      <div key={i} className="flex gap-6 group">
                        <div className="flex flex-col items-center mt-1.5">
                          {/* Circular detail zoom marker */}
                          <div className="w-4 h-4 rounded-full border-2 border-[#ed2939] group-hover:bg-[#ed2939] transition-all duration-300 shadow-[0_0_10px_rgba(237,41,57,0)] group-hover:shadow-[0_0_15px_rgba(237,41,57,0.8)]" />
                        </div>
                        <div>
                          <h4 className="text-[#ed2939] text-xl font-black uppercase tracking-tighter mb-2 leading-none">{it.t}</h4>
                          <p className="text-white opacity-60 text-sm leading-relaxed uppercase font-sans tracking-wide">{it.d}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right Column: 1 Hero Image + Black Caption Box */}
                <div className="col-span-7 h-[85%] flex flex-col shadow-2xl relative">

                  {/* Hero Image */}
                  <div className="flex-1 bg-white/5 border border-white/10 overflow-hidden flex items-center justify-center italic text-white/20 uppercase text-sm tracking-[0.5em] relative group">
                    <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity z-10" />
                    {page.imgA ? (
                      <img src={page.imgA} alt="Hero" className="absolute inset-0 w-full h-full object-cover" />
                    ) : (
                      '[AJOUTER IMAGE ICÔNE ICI]'
                    )}
                  </div>

                  {/* Black Caption Block */}
                  <div className="bg-black p-8 min-h-[100px] flex items-center z-20">
                    <p className="text-xs text-white opacity-80 uppercase tracking-widest leading-relaxed font-sans font-bold">
                      {page.caption || 'Description de l\'image'}
                    </p>
                  </div>

                </div>

              </div>
            </div>
          )}

          {/* ORIGINAL TECH DETAIL TYPE (Kept exactly as it was for other pages) */}
          {page.type === 'tech-detail' && page.img && (
            <div className="w-full h-full p-16 flex flex-col relative">
              {/* Title - Top Left */}
              <h3 className="text-white/40 uppercase tracking-[1em] text-lg font-bold mb-8 absolute top-8 left-8">{page.title}</h3>

              {/* Main Layout - Center image with techniques around */}
              <div className="flex-1 flex flex-col items-center justify-center relative">
                {/* Top Technique */}
                {page.items[0] && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-full mb-8 text-center group">
                    <h4 className="text-white text-lg font-bold uppercase tracking-widest mb-2 group-hover:text-[#ed2939] transition-colors">{page.items[0].t}</h4>
                    <p className="text-white/50 text-xs leading-snug font-light max-w-[180px]">{page.items[0].d}</p>
                  </div>
                )}

                {/* Left and Right Techniques - Horizontal Layout */}
                <div className="flex w-full items-center justify-between gap-12 mb-12">
                  {/* Left Technique */}
                  {page.items[3] && (
                    <div className="flex-1 text-left group">
                      <h4 className="text-white text-lg font-bold uppercase tracking-widest mb-2 group-hover:text-[#ed2939] transition-colors">{page.items[3].t}</h4>
                      <p className="text-white/50 text-xs leading-snug font-light">{page.items[3].d}</p>
                    </div>
                  )}

                  {/* Center Image with Caption */}
                  <div className="flex-1 flex flex-col shadow-2xl relative max-w-md">
                    {/* Image Box */}
                    <div className="h-80 bg-white/5 border border-white/10 overflow-hidden flex items-center justify-center">
                      <div className="absolute inset-0 bg-center bg-cover opacity-60" style={{ backgroundImage: `url(${page.img})` }} />
                    </div>
                    {/* Caption Box */}
                    <div className="bg-black p-6 flex items-center z-20">
                      <p className="text-xs text-white opacity-80 uppercase tracking-widest leading-relaxed font-sans font-bold">
                        Description de l'image
                      </p>
                    </div>
                  </div>

                  {/* Right Technique */}
                  {page.items[1] && (
                    <div className="flex-1 text-right group">
                      <h4 className="text-white text-lg font-bold uppercase tracking-widest mb-2 group-hover:text-[#ed2939] transition-colors">{page.items[1].t}</h4>
                      <p className="text-white/50 text-xs leading-snug font-light">{page.items[1].d}</p>
                    </div>
                  )}
                </div>

                {/* Bottom Technique */}
                {page.items[2] && (
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-full mt-8 text-center group">
                    <h4 className="text-white text-lg font-bold uppercase tracking-widest mb-2 group-hover:text-[#ed2939] transition-colors">{page.items[2].t}</h4>
                    <p className="text-white/50 text-xs leading-snug font-light max-w-[180px]">{page.items[2].d}</p>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Original Tech Detail - Without Image */}
          {page.type === 'tech-detail' && !page.img && !page.img2 && (
            <div className="w-full h-full p-24 flex flex-col items-center justify-center space-y-16">
              <h3 className="text-white/40 uppercase tracking-[1em] mb-8 text-sm font-bold text-center">{page.title}</h3>
              <div className="grid grid-cols-2 gap-16 max-w-5xl">
                {page.items.map((it, i) => (
                  <div key={i} className="group">
                    <h4 className="text-white text-xl font-bold uppercase tracking-widest mb-4 group-hover:text-[#ed2939] transition-colors">{it.t}</h4>
                    <p className="text-white/50 text-sm leading-relaxed font-light">{it.d}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tech Detail - Split Two Images */}
          {page.type === 'tech-detail' && !page.img && page.img2 && (
            <div className="w-full h-full p-20 flex flex-col items-center justify-center">
              <h3 className="text-white/40 uppercase tracking-[1em] mb-12 text-sm font-bold text-center">{page.title}</h3>
              
              <div className="flex w-full max-w-6xl gap-8 mb-16 h-[45%]">
                {/* First Image Box */}
                <div className="flex-1 flex flex-col shadow-2xl relative">
                  <div className="flex-1 border border-white/10 bg-white/5 overflow-hidden flex items-center justify-center italic text-white/20 text-xs tracking-widest uppercase relative group">
                    <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity z-10" />
                    {page.img2 ? <img src={page.img2} alt="Image 1" className="w-full h-full object-cover" /> : '[AJOUTER IMAGE 1]'}
                  </div>
                  <div className="bg-black p-6 flex items-center z-20">
                     <p className="text-xs text-white opacity-80 uppercase tracking-widest leading-relaxed font-sans font-bold">
                        {page.caption2 || 'Description 1'}
                     </p>
                  </div>
                </div>

                {/* Second Image Box */}
                <div className="flex-1 flex flex-col shadow-2xl relative">
                  <div className="flex-1 border border-white/10 bg-white/5 overflow-hidden flex items-center justify-center italic text-white/20 text-xs tracking-widest uppercase relative group">
                    <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity z-10" />
                    {page.img3 ? <img src={page.img3} alt="Image 2" className="w-full h-full object-cover" /> : '[AJOUTER IMAGE 2]'}
                  </div>
                  <div className="bg-black p-6 flex items-center z-20">
                     <p className="text-xs text-white opacity-80 uppercase tracking-widest leading-relaxed font-sans font-bold">
                        {page.caption3 || 'Description 2'}
                     </p>
                  </div>
                </div>
              </div>

              {/* Text Below */}
              <div className="grid grid-cols-4 gap-8 w-full max-w-6xl">
                  {page.items.map((it, i) => (
                    <div key={i} className="group flex flex-col">
                      <h4 className="text-white text-lg font-bold uppercase tracking-widest mb-4 group-hover:text-[#ed2939] transition-colors">{it.t}</h4>
                      <p className="text-white/50 text-sm leading-relaxed font-light">{it.d}</p>
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
            <div className="w-full h-full flex flex-col items-center justify-center p-24 relative overflow-hidden">
              {page.img && <div className="absolute inset-0 bg-center bg-cover opacity-20 scale-110 z-0" style={{ backgroundImage: `url(${page.img})` }} />}
              <h3 className="relative z-10 text-white/50 uppercase tracking-[1em] mb-20 text-sm font-bold drop-shadow-md">{page.title}</h3>
              <div className="relative z-10 flex w-full items-start gap-0 drop-shadow-lg">
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

          {/* TECH TYPE */}
          {page.type === 'tech' && (
            <div className="w-full h-full flex flex-col items-center justify-start p-24 pt-32 text-left relative">
              <h2 className="text-7xl font-black text-white tracking-tighter mb-24 uppercase text-center w-full opacity-40">{page.title}</h2>
              
              {page.col1 ? (
                <div className="w-full max-w-7xl flex gap-32 mt-4">
                  <div className="flex-1">
                    <h3 className="text-white text-2xl font-bold mb-10 uppercase tracking-widest">{page.col1Title}</h3>
                    <div className="space-y-6">
                      {page.col1.map((item, i) => (
                        <p key={i} className="text-white/60 text-lg font-light uppercase tracking-widest leading-relaxed">{item}</p>
                      ))}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-white text-2xl font-bold mb-10 uppercase tracking-widest">{page.col2Title}</h3>
                    <div className="space-y-6">
                      {page.col2.map((item, i) => (
                        <p key={i} className="text-white/60 text-lg font-light uppercase tracking-widest leading-relaxed">{item}</p>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <div className="space-y-6 text-center w-full">
                  {page.items && page.items.map((item, i) => (
                    <p key={i} className="text-white/60 text-2xl font-light uppercase tracking-widest">{item}</p>
                  ))}
                </div>
              )}
            </div>
          )}

        </div>
      </main>

      {/* Footer Scrubber */}
      <footer className="fixed bottom-0 w-full p-16 flex justify-between items-center z-[110] bg-gradient-to-t from-black/80 to-transparent">
        <div className="flex gap-1 overflow-hidden">
          {initialData.map((_, i) => (
            <button key={i} onClick={() => setCurrentPage(i)} className={`h-1.5 transition-all duration-300 ${currentPage === i ? 'w-16 bg-white shadow-[0_0_15px_white]' : 'w-1 bg-white/10'}`} />
          ))}
        </div>
        <div className="text-right flex flex-col items-end">
          <div className="flex items-center gap-6">
            <p className="text-5xl font-black text-white/25 tracking-tighter leading-none">{currentPage + 1 < 10 ? `0${currentPage + 1}` : currentPage + 1}</p>
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