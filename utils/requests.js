const apiDomain = process.env.NEXT_PUBLIC_API_DOMAIN || null;

//Fetch all properties
async function fetchProperties({ showFeatured = false } = {}) {
  try {
    if (!apiDomain) {
      return [];
    }
    console.log(showFeatured)

    const res = await fetch(`${apiDomain}/properties${showFeatured ? '/featured' : ''}`, { cache: 'no-store' });

    if (!res.ok) {
      throw new Error("failed to fetch data");
    }

    return res.json();
  } catch (error) {
    console.log(error);
  }
}

// Fetch a single property
async function fetchProperty(id) {
  try {
    if (!apiDomain) {
      return null;
    }

    const res = await fetch(`${apiDomain}/properties/${id}`);

    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }

    return await res.json();
  } catch (error) {
    console.error("Error fetching property:", error);
    return null;
  }
}

export { fetchProperties, fetchProperty };
