// import { ArrowRight, ArrowRightAlt } from "@mui/icons-material";
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { data } from '../../../utils/Data/PaymentOptionsData';

const Card = styled.div`
  border: 1px solid rgba(255, 255, 255, 0.1);
  background: linear-gradient(152.58deg, #5e36ce 17.08%, #502eb0 98.96%);
  border-radius: 18px;
  height: 300px;
  .card-overlay {
    background-position: left bottom;
    background-size: cover;
  }
  .btn-card-container {
    background: linear-gradient(91.41deg, #ff9900 0%, #f39f1f 100%);
    box-shadow: inset 10px 7px 6px rgba(0, 0, 0, 0.19);
  }
  .img-bg-pg {
    border-radius: 0 0 30px 30px;
  }
`;

const SupportedGateways = () => {
  return (
    <>
      <div className='grid grid-cols-4 gap-8 items-center'>
        {data.map((item) => {
          return (
            <GatewayCard
              key={item.name}
              item={item}
            />
          );
        })}
      </div>
    </>
  );
};

const GatewayCard = ({ item }) => {
  return (
    <Card className='relative'>
      <div className='bg-[url(https://res.cloudinary.com/lpmaker/image/upload/v1684096588/Supported%20Payment%20Gateways/pg_asset_v3faqm.png)] card-overlay p-4 h-full flex flex-col justify-between'>
        <div className='w-full'>
          <img
            src={item.logo}
            alt={item.name}
            className='p-2 h-20 object-contain w-6/12 mx-auto relative z-20 -mt-3'
          />
          <div className='w-1/2 h-20 bg-white absolute translate-x-1/2 top-0 right-1/2 img-bg-pg'></div>
          <h4 className='text-white text-shadow uppercase tracking-widest text-xl font-bold text-center  pt-3'>
            {item.name}
          </h4>
          <p className='text-white/70 text-xs text-center leading-4 mt-1'>
            {item.description}
          </p>
        </div>
        <Link
          to={'/payment-gateways/add?gateway=' + item.id}
          className='w-full flex h-12 bg-white rounded-lg btn-card-container flex-row p-2 cursor-pointer'
        >
          <div className='grow justify-center flex items-center'>
            <p className='text-[#16093A] text-sm tracking-wide text-medium uppercase font-bold'>
              Add {item.name}
            </p>
          </div>
          <div className='bg-white/40 w-8 rounded flex justify-center items-center'>
            {/* <ArrowRightAlt className="text-gray-800" /> */}
          </div>
        </Link>
      </div>
    </Card>
  );
};

export default SupportedGateways;
