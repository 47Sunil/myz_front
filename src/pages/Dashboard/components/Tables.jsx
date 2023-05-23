import React from 'react';
import image from '../../../assets/images/pantIcon.jpg';

const LocationTable = ({ locationData }) => {
  return (
    <table className='text-white min-w-full'>
      {locationData?.map((item) => {
        return (
          <tr className='border-white '>
            <td className='border-white border-2 border-dotted border-collapse '>
              <img
                src={image}
                alt='pant Icon'
                width={40}
                height={40}
              />
            </td>
            <td className='border-white border-2 border-dotted border-collapse  '>
              {item.country}
            </td>
            <td className='border-white border-2 border-dotted border-collapse  flex justify-between'>
              <p>{item.visits}</p>
            </td>
          </tr>
        );
      })}
    </table>
  );
};

const TopProducts = ({ topProducts }) => {
  return (
    <table className='text-white min-w-full'>
      {topProducts?.map((product) => {
        return (
          <tr
            className='border-white '
            key={product._id}
          >
            <td className='border-white border-2 border-dotted border-collapse '>
              <img
                src={image}
                alt='pant Icon'
                width={40}
                height={40}
              />
            </td>
            <td className='border-white border-2 border-dotted border-collapse  '>
              {product.productName}
            </td>
            <td className='border-white border-2 border-dotted border-collapse  flex justify-between'>
              <p>{product.price}</p>
            </td>
          </tr>
        );
      })}
    </table>
  );
};

function Tables({ heading, locationData, topProducts }) {
  return (
    <div
      className='bg-[#1E222D] gap-[20px] rounded-2xl pt-[40px] max-h-[24rem]  max-w-[570px] flex  items-center flex-col'
      style={{
        boxShadow: '#2D333D 3px 3px 25px 10px inset',
        border: '1px solid #909094',
      }}
    >
      <div className='w-full'>
        <span className='text-[#BDB9B9] border border-[#BDB9B9] rounded-lg text-xl  p-2 ml-[20px] font-semibold uppercase'>
          {heading}
        </span>
      </div>
      <LocationTable locationData={locationData} />
      <TopProducts topProducts={topProducts} />
    </div>
  );
}

export { Tables };
