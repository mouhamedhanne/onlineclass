export default function page() {
  return (
    <div className="h-screen flex flex-col justify-center items-center text-center">
      <h1 className="text-2xl">Confirmation de la creation de compte</h1>
      <span
        className="text-green-500 text-xl w-full md:w-2/3 lg:w-1/2 p-4
      border rounded-lg shadow-xl mt-4"
      >
        Votre compte est creer, veillez confimer sur votre boite email
      </span>
    </div>
  );
}
