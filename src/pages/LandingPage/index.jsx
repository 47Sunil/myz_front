import React, { useState } from 'react';
import TransparentButton from '../../components/TransparentButton/TransparentButton';
import TemplateSlider from './components/TemplateSlider';
import ViewAllTemplatesModal from './components/ViewAllTemplatesModal';
import Banner from './components/Banner';
import FilterIcon from '../../assets/svg/FilterIcon';
import Bitmoji from '../../assets/images/bitmoji_landingpage.png';
import { useParams } from 'react-router-dom';
import CreateLandingPage from './components/CreateLandingPage';
import { LandingTables } from '../../components/Tables/Tables';
import { landingTableData } from '../../utils/Data/constant';
import { GrFormPrevious, GrFormNext } from 'react-icons/gr';
import { useQueryClient } from 'react-query';
import { useLandingTablesMutation } from '../../actions/LandingPage';
import { toast } from 'react-hot-toast';

const LandingPages = () => {
  const [isOpened, setIsOpened] = useState(false);
  const [isEmpty, setIsEmpty] = useState(true);
  const { method } = useParams();
  const [totalPages, setTotalPages] = useState('');
  const [page, setPage] = useState(1);
  // const queryClient = useQueryClient();
  const [length, setLength] = useState('');
  const [deleteCNF, setDeleteCNF] = useState('');
  const { mutateAsync: deleteRowTable } = useLandingTablesMutation();
  const handleDeleteRow = async (id, page) => {
    toast.promise(deleteRowTable({ id, page }), {
      loading: 'Deleting....',
      success: <b>Deleted successfully</b>,
      error: <b>Error in deleting</b>,
    });
    // await deleteRowTable(id);
  };
  console.log(deleteCNF, 'dasdadadadasd');
  const handleClickDelete = (id, page) => {
    console.log(id, 'row id ');
    handleDeleteRow(id, page);
    setDeleteCNF('');
  };
  // const { length } = queryClient.getQueryData(['LandingTablesAll', page]);
  return (
    <>
      {method === 'home' ? (
        <div>
          {isOpened && <ViewAllTemplatesModal />}
          {deleteCNF !== '' && (
            <div className='w-screen h-screen z-[1000000] bg-[rgba(0,0,0,.5)] fixed inset-0 flex justify-center items-center'>
              <div className='w-[40vw] h-[40vh] min-w-[300px] bg-gray-300 rounded-2xl p-4 flex flex-col justify-center items-center gap-8'>
                <h2 className='font-bold text-[2rem] text-center'>
                  Are you sure you want to delete this funnel?
                </h2>
                <div className='w-full  flex justify-center gap-[5rem]'>
                  <button
                    className='px-12 py-3 border-2 border-solid border-black rounded-xl font-semibold bg-[rgba(0,0,0,.2)] hover:bg-[#1d1d1d] hover:text-[#e1e1e1] transition-all duration-300'
                    onClick={() => setDeleteCNF('')}
                  >
                    Cancel
                  </button>
                  <button
                    className='px-12 py-3 border-2 border-solid border-red-800 rounded-xl font-semibold text-red-800 bg-[rgba(153,27,27,.2)] hover:bg-[rgba(153,27,27,1)] hover:text-[#e1e1e1] transition-all duration-300'
                    onClick={() => handleClickDelete(deleteCNF, page)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          )}
          <div className=' relative z-[33333]'>
            <Banner />
            <TemplateSlider
              open={isOpened}
              setOpen={setIsOpened}
            />

            <div className='heading-filter-container flex justify-between mt-4 mb-4'>
              <h4 className='text-xl text-white'>Landing pages</h4>
              <div className='flex gap-4 items-center'>
                <TransparentButton
                  buttonText={'Filter'}
                  transparent={true}
                  filterBtn={true}
                  icon={<FilterIcon />}
                />
                {isEmpty && (
                  <div className=' w-[15rem] h-full flex items-center gap-2 text-white'>
                    <p className='text-[12px]'>
                      Showing {length} of <span>{totalPages}</span>
                    </p>
                    <button
                      className='w-[3rem] bg-[rgba(255,255,255,.5)] h-full rounded-xl flex justify-center items-center text-[25px]'
                      onClick={() => setPage((old) => Math.max(old - 1, 1))}
                      disabled={page === 1}
                    >
                      <GrFormPrevious />
                    </button>
                    <button
                      className='w-[3rem] bg-[rgba(255,255,255,.5)] h-full rounded-xl flex justify-center items-center text-[25px]'
                      onClick={() => {
                        if (Math.ceil(totalPages / 10)) {
                          setPage((old) => old + 1);
                        }
                      }}
                      disabled={page === Math.ceil(totalPages / 10)}
                    >
                      <GrFormNext />
                    </button>
                  </div>
                )}
              </div>
            </div>
            {!isEmpty ? (
              <div className='rounded-xl mt-3 py-14 border w-full border-gray-50/20 flex items-center gap-16 bg-[rgba(255,255,255,.1)]'>
                <div className='bg-[#1e2833] w-[500px] h-[200px] rounded-r-[300px] relative'>
                  <img
                    src={Bitmoji}
                    alt=''
                    className=' h-[120%] absolute left-[50%] top-[40%] translate-x-[-50%] translate-y-[-50%]'
                  />
                </div>
                <div className='flex flex-col justify-center w-[40%]'>
                  <h2 className='uppercase text-white text-[30px] leading-[58px] tracking-[0.04em] font-semibold'>
                    {' '}
                    no landing page found
                  </h2>
                  <p className='capitalize text-[22px] leading-[45px] tracking-[0.04em] text-[#D1D1D1]'>
                    Select A Template to Create a Landing page in 7 Minutes
                  </p>
                </div>
              </div>
            ) : (
              <div className='bg-[rgba(255,255,255,1)] border border-solid border-[rgba(255,255,255,0.15)] min-h-full rounded-t-3xl w-full  flex flex-col justify-between overflow-hidden'>
                <LandingTables
                  headerData={landingTableData}
                  setTotalPages={setTotalPages}
                  page={page}
                  setLength={setLength}
                  setDeleteCNF={setDeleteCNF}
                />
              </div>
            )}
          </div>
        </div>
      ) : (
        <CreateLandingPage />
      )}
    </>
  );
};

export default LandingPages;
