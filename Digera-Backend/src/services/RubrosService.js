const prisma = require("../utils/db.js");

class RubroService {
  static async getAll(page, limit) {
    try {
      page = parseInt(page); // Convertir page a número
      limit = parseInt(limit); // Convertir limit a número

      const [total, rubros] = await Promise.all([
        prisma.rubros.count(),
        prisma.rubros.findMany({
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
            ? `/api/rubros?page=${page + 1}&limit=${limit}`
            : null,
        prev: page > 1 ? `/api/rubros?page=${page - 1}&limit=${limit}` : null,
        rubros: rubros.map((rubro) => ({
          Id: rubro.Id,
          Productor: rubro.Productor,
          Poliza: rubro.Poliza,
          Rubros: rubro.Rubros,
          Area: rubro.Area,
          CedulaRnc: rubro.CedulaRnc,
          Prestamos: rubro.Prestamos,
          Fecha_Emision: rubro.Fecha_Emision,
          Total_Prima: rubro.Total_Prima,
          PagoProducto: rubro.PagoProducto,
          PagoGobierno: rubro.PagoGobierno,
          ValorAsegurado: rubro.ValorAsegurado,
        })),
      };
    } catch (err) {
      console.log(err);
      return { error: "An error occurred while fetching data" };
    }
  }

  static async create(data) {
    try {
      const created = await prisma.rubros.create({
        data,
      });
      return created;
    } catch (error) {
      console.log(error);
    }
  }
  static async update(id, data) {
    try {
      const updated = await prisma.rubros.update({
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
      const deleted = await prisma.rubros.delete({
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

module.exports = RubroService;
