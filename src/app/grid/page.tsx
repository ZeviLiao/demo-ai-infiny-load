'use client';

import styles from './page.module.scss';

const titles = [
  'Title 1', 'Title 2', 'Title 3', 'Title 4',
  'Title 5', 'Title 6', 'Title 7', 'Title 8',
  'Title 9', 'Title 10', 'Title 11', 'Title 12'
];

const descriptions = [
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  'Nullam vitae justo et sapien vulputate vestibulum.',
  'Proin ut diam ut quam suscipit dictum eget nec lorem.',
  'Donec pharetra ligula non nunc tristique, in posuere metus.',
  'Mauris tincidunt justo sed velit posuere tincidunt.',
  'Cras interdum magna a quam pellentesque laoreet.',
  'Pellentesque in nisi non turpis sagittis viverra.',
  'Vivamus id dolor a velit vestibulum suscipit.',
  'Suspendisse potenti. Phasellus id dui orci.',
  'Etiam varius quam ac leo pretium, in fermentum nunc tincidunt.',
  'Aenean dapibus lectus eget sem vestibulum scelerisque.',
  'Ut tincidunt nisl eget mi aliquam, nec porttitor urna placerat.'
];

export default function Page() {
  return (
    <div className={styles.container}>
      {titles.map((title, index) => (
        <div key={index} className={styles.box}>
          <h3>{title}</h3>
          <p>{descriptions[index]}</p>
        </div>
      ))}
    </div>
  );
}
