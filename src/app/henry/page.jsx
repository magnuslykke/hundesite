export default async function Henry() {
  console.log("test");

  const res = await fetch("https://nice-dogs.vercel.app/api/dogs?slug=henry");
  const data = await res.json();
  console.log(data);

  return (
    <main>
      <h1>{data.name}</h1>
      <p>{data.favouriteColor}</p>
      <img src={data.image.url} width="500px" alt="hund" />
    </main>
  );
}
