'use client';
import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { FaArrowLeft } from 'react-icons/fa';
import { fetchProperty } from '@/utils/requests';
import PropertyHeaderImage from '@/components/PropertyHeaderImage';
import PropertyImages from '@/components/PropertyImages';
import Spinner from '@/components/Spinner';
import PropertyDetails from '@/components/PropertyDetails';
import BookmarkButton from '@/components/BookmarkButton';
import ShareButtons from '@/components/ShareButtons';
import PropertyContactForm from '@/components/PropertyContactForm';

const PropertyPage = () => {
  const { id } = useParams();

  const [property, setProperty] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPropertyData = async () => {
      const property = await fetchProperty(id);
      console.log(property)
      setProperty(property);
      setLoading(false);
    };

    fetchPropertyData();
  }, [id]);

  return (
    <>
      {!loading && <PropertyHeaderImage image={property.images[0]} />}

      {!loading && (
        <section>
          <div className='container m-auto py-6 px-6'>
            <Link
              href='/properties'
              className='text-blue-500 hover:text-blue-600 flex items-center'
            >
              <FaArrowLeft className='mr-2' /> Back to Properties
            </Link>
          </div>
        </section>
      )}

      {loading ? (
        <Spinner loading={loading} />
      ) : (
        <section className='bg-blue-50'>
          <div className='container m-auto py-10 px-6'>
            <div className='grid grid-cols-1 md:grid-cols-70/30 w-full gap-6'>
              <PropertyDetails property={property} />

              {/* <!-- Sidebar --> */}
              <aside className='space-y-4'>
                <BookmarkButton property={property} />
                <ShareButtons property={property} />
                <PropertyContactForm property={property} />
              </aside>
            </div>
          </div>
        </section>
      )}
      {!loading && <PropertyImages images={property.images} />}
    </>
  );
};

export default PropertyPage;