import React from 'react';
import * as FileSaver from 'file-saver';
import XLSX from 'sheetjs-style';

function Excelexport({exelData,fileName}) {
    const fileType='application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
    const fileExtension='.xlsx';

    const exportToExcel=async()=>{
        const ws=XLSX.utils.json_to_sheet(exelData);
        const wb={Sheets:{'data':ws},SheetNames:['data']};
        const excelBuffer=XLSX.write(wb,{bookType:'xlsx',type:'array'});
        const data=new Blob([excelBuffer],{type:fileType});
        FileSaver.saveAs(data,fileName+fileExtension);
    }
  return (
    <>
        <button onClick={(e)=>exportToExcel(fileName)}>Excel Export</button>
    </>
  )
};

export default Excelexport;