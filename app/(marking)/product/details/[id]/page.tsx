export default function ProductDetailsPage({ params }: { params: { id: string } }) {
  const id = params.id;

  return (
    <div>
      <h1>Product Details {id}</h1>
    </div>
  );
}