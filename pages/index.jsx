import Image from 'next/image';

export default function Home() {
  return (
    <div>
      Hello
      <img src="/images/Banner/banner.png" alt="Alt"></img>
      <button className="button button-primary">Button Primary</button>
      <button className="button button-primary button-large">
        Button Primary Large
      </button>
      <a className="button button-primary">Button Primary</a>
      <a className="button button-primary button-large">Button Primary Large</a>
    </div>
  );
}
