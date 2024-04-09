const prisma = require("../utils/db.js");

class PolizaService {
  static async getByCedula(cedula) {
    try {
      const polizas = await prisma.polizas.findMany({
        where: {
          Cedula: cedula, // Filtrar por cedula
        },
      });
      const totalPago = 0;
      return polizas.map((poliza) => ({
        Poliza: poliza.Poliza,
        Cliente: poliza.Cliente,
        PagoGobierno: poliza.PagoGobierno,
      }));

    } catch (err) {
      console.log(err);
      return { error: "An error occurred while fetching data" };
    }
  }

  static async getAll(
    page,
    limit,
    cesionario,
    cedula,
    cliente,
    poliza,
    sucursal
  ) {
    try {
      page = parseInt(page);
      limit = parseInt(limit);

      // Construir el objeto de filtro para la consulta
      const filtro = {};
      if (cedula) filtro.Cedula = { contains: cedula };
      if (sucursal) filtro.Sucursal = { contains: sucursal };
      if (cedula) filtro.Cedula = { contains: cedula };
      if (cliente) filtro.Cliente = { contains: cliente };
      if (poliza) filtro.Poliza = { contains: poliza };
      if (sucursal) filtro.Sucursal = { contains: sucursal };
      if (cesionario) filtro.Cesionario = { contains: cesionario };

      const [total, polizas] = await Promise.all([
        prisma.polizas.count({
          where: filtro, // Aplicar el filtro a la cuenta total
        }),
        prisma.polizas.findMany({
          where: filtro, // Aplicar el filtro a la consulta de polizas
          skip: (page - 1) * limit,
          take: limit,
        }),
      ]);

      const totalPages = Math.ceil(parseInt(total) / limit); // Calcular el número total de páginas

      return {
        total,
        page,
        limit,
        totalPages, // Agregar el número total de páginas al resultado
        next:
          page < totalPages
            ? `/api/polizas?page=${page + 1}&limit=${limit}`
            : null,
        prev: page > 1 ? `/api/polizas?page=${page - 1}&limit=${limit}` : null,
        polizas: polizas.map((poliza) => ({
          Id: poliza.ProductosId,
          Provincia: poliza.Provincia,
          Sucursal: poliza.Sucursal,
          Nume: poliza.nume,
          Fecha_Emision: poliza.Femision,
          Factura: poliza.Factura,
          Poliza: poliza.Poliza,
          Prestamo: poliza.Prestamo,
          Cliente: poliza.Cliente,
          Rubro: poliza.Rubro,
          Telefono: poliza.Telefono,
          Cedula: poliza.Cedula,
          Cesionario: poliza.Cesionario,
          area: poliza.area,
          DescdelSeguro: poliza.DescdelSeguro,
          PrimaProductor: poliza.PrimaProductor,
          PagoGobierno: poliza.PagoGobierno,
          TotalPrima: poliza.TotalPrima,
          ValAsegurado: poliza.ValAsegurado,
          paquete_No: poliza.paquete_No,
          Fecha_pago: poliza.Fecha_pago,
          Intervalo: poliza.Intervalo,
          Longitud: poliza.Longitud,
          Latitud: poliza.Latitud,
          Fecha_Carga: poliza.Fecha_Carga,
          Espera: poliza.Espera,
        })),
      };
    } catch (err) {
      console.log(err);
      return { error: "An error occurred while fetching data" };
    }
  }

  static async create(data) {
    try {
      const created = await prisma.polizas.create({
        data,
      });
      return created;
    } catch (error) {
      console.log(error);
    }
  }
  static async update(id, data) {
    try {
      const updated = await prisma.polizas.update({
        where: {
          Id: parseInt(id),
        },
        data,
      });
      return updated;
    } catch (error) {
      console.log(error);
    }
  }
  static async deleted(id) {
    try {
      const deleted = await prisma.polizas.delete({
        where: {
          Id: id,
        },
      });
      return deleted;
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = PolizaService;
