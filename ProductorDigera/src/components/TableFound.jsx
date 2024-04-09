import { Table } from "flowbite-react";
import { useEffect } from "react";

export const TableFound = ({ poliza }) => {
  useEffect(()=>{
    console.log(poliza)
  },[poliza])
  return (
    <div className="overflow-x-auto dark">
      <Table hoverable className="dark:text-white">
        <Table.Head className="dark:text-white">
          <Table.HeadCell>Poliza</Table.HeadCell>
          <Table.HeadCell>Cliente</Table.HeadCell>
          <Table.HeadCell>Pago Gobierno</Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          {poliza &&
            poliza?.map((poliza, index) => (
              <Table.Row
                key={index}
                className="bg-white font-sans text-slate-800 dark:text-slate-300 dark:border-white dark:bg-gray-700"
              >
                <Table.Cell>{poliza.Poliza}</Table.Cell>
                <Table.Cell>{poliza.Cliente}</Table.Cell>
                <Table.Cell>
                  {poliza.PagoGobierno.toLocaleString("es-DO", {
                    style: "currency",
                    currency: "DOP",
                  })}
                </Table.Cell>
              </Table.Row>
            ))}
        </Table.Body>
      </Table>
    </div>
  );
};
