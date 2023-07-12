import PageTitle from "../components/PageTitle";

export default function User() {
  return (
    <>
      <PageTitle title="Usuarios">
        <button
          type="button"
          className="order-0 inline-flex items-center rounded-md border border-transparent bg-purple-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 sm:order-1 sm:ml-3"
        >
          Crear
        </button>
      </PageTitle>

      <div className="mt-6 px-4 sm:px-6 lg:px-8"></div>
    </>
  );
}
