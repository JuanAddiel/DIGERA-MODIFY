import { Table } from "flowbite-react";

export const TablePoliza = ({polizas})=>{
    return (
      <div className="overflow-x-auto ">
        <Table hoverable>
          <Table.Head className="dark:text-white">
            <Table.HeadCell>Provincia</Table.HeadCell>
            <Table.HeadCell>Surcursal</Table.HeadCell>
            <Table.HeadCell>Poliza</Table.HeadCell>
            <Table.HeadCell>Cliente</Table.HeadCell>
            <Table.HeadCell>Cesionario</Table.HeadCell>
            <Table.HeadCell>Area</Table.HeadCell>
            <Table.HeadCell>CedulaRnc</Table.HeadCell>
            <Table.HeadCell>Prestamos</Table.HeadCell>
            <Table.HeadCell>Fecha Emision</Table.HeadCell>
            <Table.HeadCell>Fecha Carga</Table.HeadCell>
            <Table.HeadCell>Total Prima</Table.HeadCell>
            <Table.HeadCell>Pago Productor</Table.HeadCell>
            <Table.HeadCell>Pago Gobierno</Table.HeadCell>
            <Table.HeadCell>Valor Asegurado</Table.HeadCell>
          </Table.Head>
          <Table.Body className="divide-y">
            {polizas &&
              polizas?.polizas?.map((poliza, index) => (
                <Table.Row
                  key={index}
                  className="bg-white font-sans text-slate-800 dark:text-slate-300 dark:border-white dark:bg-gray-700"
                >
                  <Table.Cell className="p-2 m-10">
                    {poliza.Provincia}
                  </Table.Cell>
                  <Table.Cell className="p-2 m-10">
                    {poliza.Sucursal}
                  </Table.Cell>
                  <Table.Cell className="p-2 m-10">{poliza.Poliza}</Table.Cell>
                  <Table.Cell>{poliza.Cliente}</Table.Cell>
                  <Table.Cell className="p-2 m-10">
                    {poliza.Cesionario}
                  </Table.Cell>
                  <Table.Cell>{poliza.area}</Table.Cell>
                  <Table.Cell>{poliza.Cedula}</Table.Cell>
                  <Table.Cell>{poliza.Prestamo}</Table.Cell>
                  <Table.Cell>{poliza.Fecha_Emision}</Table.Cell>
                  <Table.Cell>{poliza.Fecha_Carga}</Table.Cell>
                  <Table.Cell>
                    {poliza.TotalPrima.toLocaleString("es-DO", {
                      style: "currency",
                      currency: "DOP",
                    })}
                  </Table.Cell>
                  <Table.Cell>
                    {poliza.PrimaProductor.toLocaleString("es-DO", {
                      style: "currency",
                      currency: "DOP",
                    })}
                  </Table.Cell>
                  <Table.Cell>
                    {poliza.PagoGobierno.toLocaleString("es-DO", {
                      style: "currency",
                      currency: "DOP",
                    })}
                  </Table.Cell>
                  <Table.Cell>
                    {poliza.ValAsegurado.toLocaleString("es-DO", {
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
}