import { fetchProperties } from "@/utils/requests";
import PropertySearchForm from "@/components/PropertySearchForm";
import Properties from "@/components/Properties";

const PropertiesPage = async () => {
  const data = await fetchProperties();

  data.properties.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
  return (
    <>
      <section class="bg-blue-700 py-4">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-start">
          <PropertySearchForm />
        </div>
      </section>
      <Properties />
    </>
  );
};

export default PropertiesPage;
