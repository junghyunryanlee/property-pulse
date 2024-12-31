const PropertyPage = async ({ params }) => {
  const { id } = await params;

  return (
    <div>
      <h1>Property Page {id}</h1>
    </div>
  );
};

export default PropertyPage;
