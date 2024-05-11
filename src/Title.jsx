export default function Title({ locked }) {
  return (
    // &gt; = >
    <h1 className="title">
      {locked ? <span>Limit! buy <b>PRO</b> for &gt;5</span> : <span>Cart</span>}
    </h1>
  );
}
