import jsPDF from "jspdf";
export const uploadPdf = (data)=>{
    const doc = new jsPDF();
    doc.text(JSON.stringify(data),10,10);
    doc.save("data.pdf");
}