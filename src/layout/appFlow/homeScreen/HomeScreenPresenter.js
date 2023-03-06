import React from 'react';
import 'flowbite';
import Excelexport from '../../../components/Excelexport';
import Navbar from '../../../components/Navbar';
import InputData from '../../../components/InputData';
function HomeScreenPresenter() {
    const Data=[
        {
            'Customer Name':'Naqeeb',
            'Customer Phone-No':'0315747649',
            'Total':'5000'
        },
        {
            'Customer Name':'Haseeb',
            'Customer Phone-No':'0315747649',
            'Total':'500550'
        },
    ]
  return (
    <>
      <Navbar/>
      <InputData/>
      {/* <Excelexport exelData={Data} fileName={"12-2-23"}/> */}
    </>
  )
};

export default HomeScreenPresenter;