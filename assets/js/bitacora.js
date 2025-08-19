document.addEventListener("DOMContentLoaded", function () {
  const tablaBitacora = document.getElementById("tabla-bitacora");
  const filtro1 = document.getElementById("filtro1");
  const filtro2 = document.getElementById("filtro2");
  const totalRegistros = document.getElementById("total-registros");

  const registros = [
    {
      Cod: "AGO23-01",
      Fecha: "21/08/2023",
      NoCatastral: "GP423A-09-0099",
      Ubicacion: "Campo Colombia",
      NombreContribuyente: "N/A",
      NoIdentidad: "N/A",
      TipoDeTrabajo: "Inspección de Campo",
      Responsables: "Alejandro Castillo",
      ResolucionDelTrabajo: "N/A",
      Observaciones: "Apoyo: (...)"
    },
    {
      Cod: "AGO23-02",
      Fecha: "22/08/2023",
      NoCatastral: "GP421Y-15-0004",
      Ubicacion: "Suyapa",
      NombreContribuyente: "N/A",
      NoIdentidad: "N/A",
      TipoDeTrabajo: "Remedición de Terreno",
      Responsables: "Alejandro Castillo",
      ResolucionDelTrabajo: "Se verificó que el solar de atrás se le metió",
      Observaciones: "Apoyó Amado Brandon y (...)"
    },
    {
      Cod: "SEP23-01",
      Fecha: "9/4/2023",
      NoCatastral: "GP424M-43-0009",
      Ubicacion: "Alvarez Martinez",
      NombreContribuyente: "N/A",
      NoIdentidad: "N/A",
      TipoDeTrabajo: "Inspección de Campo",
      Responsables: "Alejandro Castillo",
      ResolucionDelTrabajo: "N/A",
      Observaciones: "Apoyo: (...)"
    },
    {
      Cod: "SEP23-02",
      Fecha: "21/09/2023",
      NoCatastral: "GP424V-35-0009",
      Ubicacion: "Centro Norte",
      NombreContribuyente: "JUAN RAMÓN RODRÍGUEZ PIERROBON Y COPROPIETARIOS",
      NoIdentidad: "0501 1970 04840",
      TipoDeTrabajo: "Elaboración de Croquis",
      Responsables: "Alejandro Castillo",
      ResolucionDelTrabajo: "N/A",
      Observaciones: "Apoyo: (...)"
    },
    {
      Cod: "SEP23-03",
      Fecha: "29/09/2023",
      NoCatastral: "GP424V-19-0007",
      Ubicacion: "Centro Norte",
      NombreContribuyente: "N/A",
      NoIdentidad: "N/A",
      TipoDeTrabajo: "Elaboración de Croquis",
      Responsables: "Alejandro Castillo",
      ResolucionDelTrabajo: "N/A",
      Observaciones: "Apoyó Amadito y (...)"
    },
    {
      Cod: "OCT23-01",
      Fecha: "17/10/2023",
      NoCatastral: "GP421Y-35-0018",
      Ubicacion: "Suyapa",
      NombreContribuyente: "VALENTINA ORELLANA ORELLANA",
      NoIdentidad: "N/A",
      TipoDeTrabajo: "Cambio de Propietario",
      Responsables: "Alejandro Castillo",
      ResolucionDelTrabajo: "Terminado",
      Observaciones: "Prop. ant.: Lester Eugenio Romero"
    },
    {
      Cod: "OCT23-02",
      Fecha: "30/10/2023",
      NoCatastral: "GP424V-35-0009",
      Ubicacion: "Centro Norte",
      NombreContribuyente: "PURIFICACIÓN ORTEZ",
      NoIdentidad: "1706 1961 00077",
      TipoDeTrabajo: "Cambio de Propietario",
      Responsables: "Alejandro Castillo",
      ResolucionDelTrabajo: "Terminado",
      Observaciones: "Prop. ant.: Juan Ramón Rodriguez Pierrobon y coop."
    },
    {
      codigo: "ABR24-01",
      fecha: "4/11/2024",
      noCatastral: "GP422G-30-0015",
      ubicacion: "Res. Oro Verde",
      nombreContribuyente: "Yajayra Osorio",
      noIdentidad: "N/A",
      tipoTrabajo: "Inspección de Campo",
      responsables: "Alejandro Castillo",
      resolucionTrabajo: "En el frente tiene menos 20 cm, atrás el ancho del muro está a favor del vecino de atrás",
      observaciones: "Apoyó: Said, Brandon, (...) y Cristian"
    },
    {
      codigo: "JUL24-02",
      fecha: "19/07/2024",
      noCatastral: "GP423G-16-0015",
      ubicacion: "Col. Municipal",
      nombreContribuyente: "Maria Menjivar",
      noIdentidad: "N/A",
      tipoTrabajo: "Remedición de Terreno",
      responsables: "Alejandro Castillo",
      resolucionTrabajo: "Se encontró que no se reportó al IP el pasaje que doña Maria le vendió a don Luis (vecino de atrás) cuando Regularización Predial les inscribió los resp. Lotes",
      observaciones: "Apoyó Cristian"
    },
    {
      codigo: "JUL24-03",
      fecha: "19/07/2024",
      noCatastral: "GP424Q-45-0009",
      ubicacion: "El Maestro",
      nombreContribuyente: "N/A",
      noIdentidad: "N/A",
      tipoTrabajo: "Elaboración de Croquis",
      responsables: "Alejandro Castillo",
      resolucionTrabajo: "Finalizado",
      observaciones: "Brandon y Orlando"
    },
    {
      codigo: "JUL24-04",
      fecha: "26/07/2024",
      noCatastral: "GP424W-03-0005",
      ubicacion: "4 De Julio",
      nombreContribuyente: "Banco del País S.A.",
      noIdentidad: "N/A",
      tipoTrabajo: "Elaboración de Croquis",
      responsables: "Alejandro Castillo",
      resolucionTrabajo: "Finalizado",
      observaciones: "Apoyó Cristian. Se levantaron las mejoras, ya que no se encontró la ficha"
    },
    {
      codigo: "JUL24-05",
      fecha: "26/07/2024",
      noCatastral: "GP412Q-03-0020",
      ubicacion: "Nuevo San Juan",
      nombreContribuyente: "Jose Livaldo Sanchez",
      noIdentidad: "N/A",
      tipoTrabajo: "Elaboración de Croquis",
      responsables: "Alejandro Castillo",
      resolucionTrabajo: "Finalizado",
      observaciones: "Apoyó Cristian. Se postergó el trabajo por problemas de energía"
    },
    {
      codigo: "JUL24-06",
      fecha: "30/07/2024",
      noCatastral: "GP423H-02-0017",
      ubicacion: "Barrio Alpha",
      nombreContribuyente: "N/A",
      noIdentidad: "N/A",
      tipoTrabajo: "Asistencia Técnica al Juez",
      responsables: "Alejandro Castillo",
      resolucionTrabajo: "El pasaje de servidumbre (adjudicado a esta clave por resolución del Juzgado de Letras de lo Civil) se le reducirá al área 531.34 M² de la Esc. Pública de la clave GP423H-02-0016",
      observaciones: "Apoyó Modesto. 1.5 horas"
    },
    {
      codigo: "AGO24-01",
      fecha: "8/1/2024",
      noCatastral: "GP424Y-12-0007",
      ubicacion: "La Paz",
      nombreContribuyente: "Dilcia Inestroza García",
      noIdentidad: "N/A",
      tipoTrabajo: "Fraccionamiento",
      responsables: "Alejandro Castillo",
      resolucionTrabajo: "Finalizado",
      observaciones: "Apoyó Orlando"
    },
    {
      codigo: "AGO24-02",
      fecha: "8/9/2024",
      noCatastral: "0512-0507-00053",
      ubicacion: "Col. Cruz De Valencia",
      nombreContribuyente: "N/A",
      noIdentidad: "N/A",
      tipoTrabajo: "Remedición de Terreno",
      responsables: "Christopher Cáceres",
      resolucionTrabajo: "No llegaron los involucrados en la medición del terreno",
      observaciones: "Apoyaron: Brandon, memín y Alejandro"
    },
    {
      codigo: "AGO24-03",
      fecha: "16/08/2024",
      noCatastral: "GP423G-16-0015",
      ubicacion: "Col. Municipal",
      nombreContribuyente: "Maria Menjivar",
      noIdentidad: "N/A",
      tipoTrabajo: "Fraccionamiento",
      responsables: "Alejandro Castillo",
      resolucionTrabajo: "Finalizado",
      observaciones: "Apoyó Cristian"
    },
    {
      codigo: "AGO24-04",
      fecha: "21/8/2024",
      noCatastral: "0512-0507-00053",
      ubicacion: "Col. Cruz De Valencia",
      nombreContribuyente: "N/A",
      noIdentidad: "N/A",
      tipoTrabajo: "Remedición de Terreno",
      responsables: "Christopher Cáceres",
      resolucionTrabajo: "El área de 7 X 22 que aduce don Fabian no se encuentra en lote en cuestión",
      observaciones: "Apoyaron: Brandon, Orlando y Alejandro"
    },
    {
      codigo: "AGO24-05",
      fecha: "23/08/2024",
      noCatastral: "GP423C-09-0052",
      ubicacion: "Centro Sur",
      nombreContribuyente: "N/A",
      noIdentidad: "N/A",
      tipoTrabajo: "Elaboración de Croquis",
      responsables: "Alejandro Castillo",
      resolucionTrabajo: "Finalizado",
      observaciones: "Apoyó Cristian"
    },
    {
      codigo: "AGO24-05",
      fecha: "23/08/2024",
      noCatastral: "GP423H-02-0017",
      ubicacion: "Barrio Alpha",
      nombreContribuyente: "N/A",
      noIdentidad: "N/A",
      tipoTrabajo: "Elaboración de Croquis",
      responsables: "Alejandro Castillo",
      resolucionTrabajo: "Finalizado",
      observaciones: "Apoyó Isaul"
    },
    {
      codigo: "SEP24-01",
      fecha: "//2024",
      noCatastral: "GP134U-03-0013",
      ubicacion: "El Buen Samaritano",
      nombreContribuyente: "N/A",
      noIdentidad: "N/A",
      tipoTrabajo: "Cambio de Propietario",
      responsables: "Alejandro Castillo",
      resolucionTrabajo: "La información de la ficha se sacó del SAFT, porque no se encontró la ficha",
      observaciones: "Prop. ant.:"
    },
    {
      codigo: "SEP24-02",
      fecha: "//2024",
      noCatastral: "GP442W-10-0003",
      ubicacion: "Res. Buenos Aires",
      nombreContribuyente: "N/A",
      noIdentidad: "N/A",
      tipoTrabajo: "Cambio de Propietario",
      responsables: "Alejandro Castillo",
      resolucionTrabajo: "Se efectuó primero en el SAFT, y después se hizo en la ficha",
      observaciones: "Prop. ant.:"
    },
    {
      codigo: "SEP24-03",
      fecha: "29/08/2024",
      noCatastral: "GP423E-06-0010",
      ubicacion: "Luis Thiebaud",
      nombreContribuyente: "N/A",
      noIdentidad: "N/A",
      tipoTrabajo: "Fraccionamiento",
      responsables: "Alejandro Castillo",
      resolucionTrabajo: "Contribuyente solicitó constancia de avalúo para liberar hipoteca",
      observaciones: "Apoyó Cristian. Las medidas de la Escritura difiere con las medidas físicas (las mismas del PATH)"
    },
    {
      codigo: "SEP24-04",
      fecha: "11/8/2024",
      noCatastral: "GP423E-06-0016",
      ubicacion: "Luis Thiebaud",
      nombreContribuyente: "N/A",
      noIdentidad: "N/A",
      tipoTrabajo: "Fraccionamiento",
      responsables: "Alejandro Castillo",
      resolucionTrabajo: "Se le asignó clave catastral ya que se trajo Esc. Pública",
      observaciones: "Apoyó Cristian. Las medidas de la Escritura difiere con las medidas físicas (las mismas del PATH)"
    },
    {
      Cod: "SEP24-05",
      Fecha: "9/6/2024",
      NoCatastral: "GP422L-06-0009",
      Ubicacion: "Res. Oro Verde",
      NombreContribuyente: "N/A",
      NoIdentidad: "N/A",
      TipoDeTrabajo: "Remedición de Terreno",
      Responsables: "Alejandro Castillo",
      ResolucionDelTrabajo: "Está salido 0.85 mts para uno de los lados del rumbo sur",
      Observaciones: "Apoyó Cristian"
    },
    {
      Cod: "SEP24-06",
      Fecha: "9/10/2024",
      NoCatastral: "GP424Y-27-0005",
      Ubicacion: "La Paz",
      NombreContribuyente: "N/A",
      NoIdentidad: "N/A",
      TipoDeTrabajo: "Cambio de Propietario",
      Responsables: "Alejandro Castillo",
      ResolucionDelTrabajo: "Finalizado",
      Observaciones: "Prop. ant.:"
    },
    {
      Cod: "SEP24-07",
      Fecha: "9/11/2024",
      NoCatastral: "GP424M-39-0002",
      Ubicacion: "Alvarez Martinez",
      NombreContribuyente: "N/A",
      NoIdentidad: "N/A",
      TipoDeTrabajo: "Cambio de Propietario",
      Responsables: "Alejandro Castillo",
      ResolucionDelTrabajo: "Finalizado",
      Observaciones: "Prop. ant.:"
    },
    {
      Cod: "SEP24-08",
      Fecha: "17/9/2024",
      NoCatastral: "0512-0503-00113",
      Ubicacion: "Sector Indiana",
      NombreContribuyente: "N/A",
      NoIdentidad: "N/A",
      TipoDeTrabajo: "Asistencia Técnica al Juez",
      Responsables: "Christopher Cáceres",
      ResolucionDelTrabajo: "El sr. (...) del margen de la orilla de la calle pral. cierra constantemente el paso a la calle de acceso de los otros propietarios adyacentes y daña la calle de acceso con su maquinaria en tiempos de lluvias",
      Observaciones: "Apoyaron: Orlando y Alejandro"
    },
    {
      Cod: "SEP24-09",
      Fecha: "20/9/2024",
      NoCatastral: "GP431C-22-0008",
      Ubicacion: "San Cristobal",
      NombreContribuyente: "N/A",
      NoIdentidad: "N/A",
      TipoDeTrabajo: "Fraccionamiento",
      Responsables: "Alejandro Castillo",
      ResolucionDelTrabajo: "Finalizado",
      Observaciones: "Apoyó Cristian"
    },
    {
      Cod: "SEP24-10",
      Fecha: "20/9/2024",
      NoCatastral: "GP431D-49-0009",
      Ubicacion: "Independencia",
      NombreContribuyente: "N/A",
      NoIdentidad: "N/A",
      TipoDeTrabajo: "Remedición de Terreno",
      Responsables: "Alejandro Castillo",
      ResolucionDelTrabajo: "Finalizado",
      Observaciones: "Apoyó Brandon"
    },
    {
      Cod: "OCT24-01",
      Fecha: "18/10/2024",
      NoCatastral: "GP423D-16-0004",
      Ubicacion: "Campo Pineda",
      NombreContribuyente: "N/A",
      NoIdentidad: "N/A",
      TipoDeTrabajo: "Inspección de Campo",
      Responsables: "Alejandro Castillo",
      ResolucionDelTrabajo: "Se verificó que ya no funciona Escuela Timonel",
      Observaciones: "N/A"
    },
    {
      Cod: "OCT24-02",
      Fecha: "21/10/2024",
      NoCatastral: "GP421Y-28-0018",
      Ubicacion: "Suyapa",
      NombreContribuyente: "N/A",
      NoIdentidad: "N/A",
      TipoDeTrabajo: "Inspección de Campo",
      Responsables: "Alejandro Castillo",
      ResolucionDelTrabajo: "Se me envió a verificar si contribuyente estaba de acuerdo con un fraccionamiento que pretendía la familia",
      Observaciones: "N/A"
    },
    {
      Cod: "OCT24-03",
      Fecha: "22/10/2024",
      NoCatastral: "GP423B-02-0005",
      Ubicacion: "Guadalupe",
      NombreContribuyente: "N/A",
      NoIdentidad: "N/A",
      TipoDeTrabajo: "Cambio de Propietario",
      Responsables: "Alejandro Castillo",
      ResolucionDelTrabajo: "Finalizado",
      Observaciones: "Prop. ant.:"
    },
    {
      Cod: "OCT24-04",
      Fecha: "23/10/2024",
      NoCatastral: "GP421Y-28-0018",
      Ubicacion: "Suyapa",
      NombreContribuyente: "N/A",
      NoIdentidad: "N/A",
      TipoDeTrabajo: "Fraccionamiento",
      Responsables: "Alejandro Castillo",
      ResolucionDelTrabajo: "Se fraccionaron 2 áreas: un Área de Terreno de 600 M² a favor de Hector Almendarez, y 300 M² a favor de Juan Pastor Matute.",
      Observaciones: "Apoyaron: Orlando y Cristian"
    },
    {
      Cod: "OCT24-05",
      Fecha: "25/10/2024",
      NoCatastral: "GP442R-56-0008",
      Ubicacion: "Col. San Francisco",
      NombreContribuyente: "N/A",
      NoIdentidad: "N/A",
      TipoDeTrabajo: "Remedición de Terreno",
      Responsables: "Modesto Rodríguez",
      ResolucionDelTrabajo: "Finalizado",
      Observaciones: "Apoyaron: Alejandro y Cristian"
    },
    {
      Cod: "OCT24-06",
      Fecha: "28/10/2024",
      NoCatastral: "GP431D-71-0005",
      Ubicacion: "El Rosario",
      NombreContribuyente: "N/A",
      NoIdentidad: "N/A",
      TipoDeTrabajo: "Cambio de Propietario",
      Responsables: "Alejandro Castillo",
      ResolucionDelTrabajo: "Finalizado",
      Observaciones: "Prop. ant.:"
    },
    {
      Cod: "OCT24-07",
      Fecha: "28/10/2024",
      NoCatastral: "GP421Y-06-0003",
      Ubicacion: "Flores De Oriente",
      NombreContribuyente: "N/A",
      NoIdentidad: "N/A",
      TipoDeTrabajo: "Cambio de Propietario",
      Responsables: "Alejandro Castillo",
      ResolucionDelTrabajo: "Finalizado",
      Observaciones: "Prop. ant.:"
    },
    {
      Cod: "OCT24-08",
      Fecha: "29/10/2024",
      NoCatastral: "GP421Y-28-0018",
      Ubicacion: "Suyapa",
      NombreContribuyente: "N/A",
      NoIdentidad: "N/A",
      TipoDeTrabajo: "Fraccionamiento",
      Responsables: "Alejandro Castillo",
      ResolucionDelTrabajo: "Se fraccionaron 2 áreas: un Área de Terreno de 300 M², y 300 M² a favor de Maria de Jesus Flores",
      Observaciones: "Apoyaron: Orlando"
    },
    { cod: "NOV24-01", fecha: "22/11/2024", noCatastral: "GP431C-18-0128", ubicacion: "San Cristobal", nombreContribuyente: "AMILCAR ZABALA", noIdentidad: "N/A", tipoTrabajo: "Inspección de Campo", responsables: "Alejandro Castillo", resolucionTrabajo: "Se valuó Edif. De madera con detalles adicionales, y se remidió el terreno, para actualizar datos, con el fin de extender Constancia solicitada por contribuyente.", observaciones: "Apoyó: Orlando. Se confirmó que las edificaciones de la clave GP431C-18-0127 estaban en esta clave." },
    { cod: "NOV24-02", fecha: "25/11/2024", noCatastral: "GP431C-18-0128", ubicacion: "San Cristobal", nombreContribuyente: "TABATA ZABALA", noIdentidad: "N/A", tipoTrabajo: "Cambio de Propietario", responsables: "Orlando Arjuna Ayala", resolucionTrabajo: "Finalizado", observaciones: "Prop. ant.: Amilcar Zabala" },
    { cod: "NOV24-03", fecha: "26/11/2024", noCatastral: "GP431C-18-0127", ubicacion: "San Cristobal", nombreContribuyente: "AMILCAR ZABALA", noIdentidad: "N/A", tipoTrabajo: "Reavaluo", responsables: "Alejandro Castillo", resolucionTrabajo: "Se trasladaron las edificaciones y detalles adic. de la clave GP431C-18-0128 para esta clave; se corrigió el propietario del predio; se cambió el tipo de predio (a Esquina)", observaciones: "Apoyó: Alejandro Castillo" },
    { cod: "NOV24-04", fecha: "29/11/2024", noCatastral: "GP423K-12-0099", ubicacion: "Martinez Rivera", nombreContribuyente: "LUIS SAGASTUME", noIdentidad: "N/A", tipoTrabajo: "Remedición de Terreno", responsables: "Alejandro Castillo", resolucionTrabajo: "Se verificó que el lote se delineó en espacio de calle desde el año 2005 a favor de MAYRA VELAZQUEZ de parte de MARINA ROSADO; en el año 2009 se le traspasó a YOALNO CHICAS; en el año 2024 se traspasó a nombre de LUIS SAGASTUME", observaciones: "Apoyó: Isaul Lainez" },
    { cod: "DIC24-01", fecha: "06/12/2024", noCatastral: "GP423K-12-0099", ubicacion: "Martinez Rivera", nombreContribuyente: "LUIS SAGASTUME", noIdentidad: "N/A", tipoTrabajo: "Elaboración de Croquis", responsables: "Alejandro Castillo", resolucionTrabajo: "Finalizado", observaciones: "Apoyó: Orlando." },
    { cod: "DIC24-02", fecha: "18/12/2024", noCatastral: "GP442R-18-0001", ubicacion: "Gracias A Dios", nombreContribuyente: "CARLOS ISAAC KAWELL GUERRA", noIdentidad: "N/A", tipoTrabajo: "Inspección de Campo", responsables: "Alejandro Castillo", resolucionTrabajo: "Posible comprador pagó los impuestos de otra clave, por eso solicitó la inspección", observaciones: "Apoyó: Orlando." },
    { cod: "DIC24-03", fecha: "20/12/2024", noCatastral: "GP412Q-01-0046", ubicacion: "Nuevo San Juan", nombreContribuyente: "MIRIAM FLORES", noIdentidad: "N/A", tipoTrabajo: "Cambio de Propietario", responsables: "Alejandro Castillo", resolucionTrabajo: "Finalizado", observaciones: "Prop. Ant.: MIREYA TURCIOS" },
    { cod: "DIC24-04", fecha: "20/12/2024", noCatastral: "GP431C-31-0024", ubicacion: "Res. Buenos Aires", nombreContribuyente: "BAYRON VEGA", noIdentidad: "N/A", tipoTrabajo: "Cambio de Propietario", responsables: "Alejandro Castillo", resolucionTrabajo: "La Propiedad fue vendida por los herederos (Ivan Martinez, Damaris Martinez y Juan Ramon Martinez) al sr. Bayron Vega", observaciones: "Prop. ant.: ALMA RAUDALES" },
    { cod: "ENE25-01", fecha: "08/01/2025", noCatastral: "GP423G-16-0096", ubicacion: "Col. Municipal", nombreContribuyente: "LUIS REYES/DELFINA YOBETH MEZA", noIdentidad: "N/A", tipoTrabajo: "Fraccionamiento", responsables: "Alejandro Castillo", resolucionTrabajo: "Se le asignó Clave nueva.", observaciones: "Mat: 2251896; Asiento: 1" },
    { cod: "ENE25-02", fecha: "08/01/2025", noCatastral: "GP423G-16-0015", ubicacion: "Col. Municipal", nombreContribuyente: "Maria Menjivar", noIdentidad: "N/A", tipoTrabajo: "Rest. del Terreno/Remanente", responsables: "Alejandro Castillo", resolucionTrabajo: "Se actualizó el Área de Terreno por venta de Fracc. A favor de Luis Reyes/Delfina Meza, quedando el Resto Registral de este terreno en 416.41 M2", observaciones: "N/A" },
    { cod: "ENE25-03", fecha: "09/01/2025", noCatastral: "GP442V-50-0009", ubicacion: "Nueva Jerusalen", nombreContribuyente: "JOSE OVIL RIVERA", noIdentidad: "N/A", tipoTrabajo: "Cambio de Propietario", responsables: "Alejandro Castillo", resolucionTrabajo: "Finalizado", observaciones: "Prop. ant.: Ministerio Monte de Santidad" },
    { cod: "ENE25-04", fecha: "14/01/2025", noCatastral: "GP422L-13-0007", ubicacion: "Res. Oro Verde", nombreContribuyente: "HAYDEE SUAZO", noIdentidad: "N/A", tipoTrabajo: "Remedición de Terreno", responsables: "Alejandro Castillo", resolucionTrabajo: "Finalizado", observaciones: "Apoyó: Orlando." },
    { cod: "ENE25-05", fecha: "17/01/2025", noCatastral: "GP423B-16-0026", ubicacion: "Barrio Las Flores", nombreContribuyente: "RAFAEL OLIVA", noIdentidad: "N/A", tipoTrabajo: "Remedición de Terreno", responsables: "Alejandro Castillo", resolucionTrabajo: "El contribuyente solicitó remedición por sospecha que su vecina construyó un muro dentro de la propiedad de él. El personal de Catastro corroboró que no es así.", observaciones: "Apoyó: Orlando y Cristian." },
    { cod: "ENE25-06", fecha: "17/01/2025", noCatastral: "0501-6318-00014", ubicacion: "Brisas del Polvorin", nombreContribuyente: "FRANCISCO CHINCHILLA", noIdentidad: "N/A", tipoTrabajo: "Elaboración de Croquis", responsables: "Alejandro Castillo", resolucionTrabajo: "Se canceló el proceso porque se verificó que el predio está fuera del límite del municipio. SPS no lo tiene catastrado.", observaciones: "Apoyó: Modesto y Cristian." },
    { cod: "ENE25-07", fecha: "20/01/2025", noCatastral: "GP422A-20-0011", ubicacion: "Res. Villa Esther", nombreContribuyente: "N/A", noIdentidad: "N/A", tipoTrabajo: "Valuación Total", responsables: "Alejandro Castillo", resolucionTrabajo: "Finalizado", observaciones: "Apoyó: Juan y Maria." },
    { cod: "ENE25-08", fecha: "21/01/2025", noCatastral: "GP423H-02-0016", ubicacion: "Barrio Alpha", nombreContribuyente: "N/A", noIdentidad: "N/A", tipoTrabajo: "Elaboración de Croquis", responsables: "Alejandro Castillo", resolucionTrabajo: "No se efectuó el trabajo debido a inconsistencias en los planos originales y la disposición física de las edificaciones en los terrenos", observaciones: "Apoyó: Orlando y Maria." },
    { cod: "ENE25-09", fecha: "23/01/2025", noCatastral: "GP423G-16-0015", ubicacion: "Col. Municipal", nombreContribuyente: "Maria Menjivar", noIdentidad: "N/A", tipoTrabajo: "Remedición de Terreno", responsables: "Alejandro Castillo", resolucionTrabajo: "Contribuyente solicitó remedición del terreno para corroborar los puntos físicos del terreno.", observaciones: "Apoyó: Orlando." },
    {
      codigo: "ENE25-11",
      fecha: "31/1/2025",
      noCatastral: "GP442R-60-0007",
      ubicacion: "Col. San Francisco",
      nombreContribuyente: "VICENTE LARA",
      noIdentidad: "N/A",
      tipoTrabajo: "Inspección de Campo",
      responsables: "Alejandro Castillo",
      resolucionTrabajo: "Contribuyente solicitó inspección de campo porque no existe casa desde antes del 2020",
      observaciones: "Apoyó: Isaul."
    },
    {
      codigo: "FEB25-01",
      fecha: "7/2/2025",
      noCatastral: "GP422E-54-0015",
      ubicacion: "Las Mañanitas",
      nombreContribuyente: "N/A",
      noIdentidad: "N/A",
      tipoTrabajo: "Remedición de Terreno",
      responsables: "Brandon Amaya",
      resolucionTrabajo: "Finalizado",
      observaciones: "Apoyó: Said, Juan y Alejandro"
    },
    {
      codigo: "FEB25-02",
      fecha: "13/2/2025",
      noCatastral: "GP424V-32-0007",
      ubicacion: "Centro Norte",
      nombreContribuyente: "JUAN RODRIGUEZ",
      noIdentidad: "N/A",
      tipoTrabajo: "Elaboración de Croquis",
      responsables: "Alejandro Castillo",
      resolucionTrabajo: "Finalizado",
      observaciones: "Apoyó: Said, Juan e Isaul"
    },
    {
      codigo: "FEB25-03",
      fecha: "14/2/2025",
      noCatastral: "GP431B-59-0018",
      ubicacion: "Nueva Jerusalen",
      nombreContribuyente: "N/A",
      noIdentidad: "N/A",
      tipoTrabajo: "Inspección de Campo",
      responsables: "Alejandro Castillo",
      resolucionTrabajo: "Contribuyente solicitó inspección de campo porque la casa está deshabitada desde el año 2004",
      observaciones: "Apoyó: María"
    },
    {
      codigo: "FEB25-04",
      fecha: "21/2/2025",
      noCatastral: "GP431D-74-0001",
      ubicacion: "Villas del Campo",
      nombreContribuyente: "PATRONATO",
      noIdentidad: "N/A",
      tipoTrabajo: "Remedición de Terreno",
      responsables: "Alejandro Castillo",
      resolucionTrabajo: "La forma del poligono del Lote en el plano original difiere de la forma que tiene en físico (P.A.T.H.)",
      observaciones: "Apoyó: Gonzalo y Elvis"
    },
    {
      codigo: "FEB25-05",
      fecha: "26/2/2025",
      noCatastral: "GP442V-49-0008",
      ubicacion: "Nueva Jerusalen",
      nombreContribuyente: "N/A",
      noIdentidad: "N/A",
      tipoTrabajo: "Rest. del Terreno/Remanente",
      responsables: "Alejandro Castillo",
      resolucionTrabajo: "Se actualizó el Área de Terreno por venta de Fracc., quedando el Resto Registral de este terreno en 137.87 M²",
      observaciones: "N/A"
    },
    {
      codigo: "FEB25-06",
      fecha: "26/2/2025",
      noCatastral: "GP442V-49-0021",
      ubicacion: "Nueva Jerusalen",
      nombreContribuyente: "N/A",
      noIdentidad: "N/A",
      tipoTrabajo: "Fraccionamiento",
      responsables: "Alejandro Castillo",
      resolucionTrabajo: "Se le asignó Clave nueva.",
      observaciones: "N/A"
    },
    {
      codigo: "MAR25-01",
      fecha: "21/3/2025",
      noCatastral: "GP423D-03-0008",
      ubicacion: "Zona Americama",
      nombreContribuyente: "N/A",
      noIdentidad: "N/A",
      tipoTrabajo: "Fraccionamiento",
      responsables: "Alejandro Castillo",
      resolucionTrabajo: "Se corroboraron medidas de Fraccioamiento de acuerdo al plano levantado por Topógrafo privado y contribuyente solamente solicitó Constancia de Medidas y Colindancias, que le solicitó el abog.",
      observaciones: "Apoyó: Brandon Amaya"
    },
    {
      codigo: "MAR25-02",
      fecha: "28/3/2025",
      noCatastral: "GP424V-28-0021",
      ubicacion: "Sitraterco",
      nombreContribuyente: "N/A",
      noIdentidad: "N/A",
      tipoTrabajo: "Valuación Total",
      responsables: "Alejandro Castillo",
      resolucionTrabajo: "Finalizado",
      observaciones: "Apoyó: Gonzalo"
    },
    {
      codigo: "MAR25-03",
      fecha: "4/4/2025",
      noCatastral: "GP424R-01-0007",
      ubicacion: "Sitraterco",
      nombreContribuyente: "N/A",
      noIdentidad: "N/A",
      tipoTrabajo: "Inspección de Campo",
      responsables: "Alejandro Castillo",
      resolucionTrabajo: "No se pudo efectuar la inspección porque una de las partes alegó que no le avisaron para estar presente en la inspección",
      observaciones: "Apoyó: Orlando"
    },
    {
      codigo: "MAY25-01",
      fecha: "14/5/2025",
      noCatastral: "GP423A-07-0009",
      ubicacion: "23 De Septiembre",
      nombreContribuyente: "N/A",
      noIdentidad: "N/A",
      tipoTrabajo: "Elaboración de Croquis",
      responsables: "Alejandro Castillo",
      resolucionTrabajo: "Finalizado en 19/05/2025",
      observaciones: "Apoyó: Gonzalo"
    },
    {
      codigo: "MAY25-02",
      fecha: "15/5/2025",
      noCatastral: "GP424R-01-0007",
      ubicacion: "Sitraterco",
      nombreContribuyente: "N/A",
      noIdentidad: "N/A",
      tipoTrabajo: "Inspección de Campo",
      responsables: "Alejandro Castillo",
      resolucionTrabajo: "Se dictaminó la existencia de invasiones aéreas recíprocas y el incumplimiento de los retiros reglamentarios en las propiedades en mención.",
      observaciones: "Apoyó: Orlando"
    },
    {
    codigo: "AGO25-01",
    fecha: "15/5/2025",
    noCatastral: "GP423G-16-0100",
    ubicacion: "Municipal",
    nombreContribuyente: "SAYDA MIRANDA",
    noIdentidad: "N/A",
    tipoTrabajo: "Valuación Total",
    responsables: "Alejandro Castillo",
    resolucionTrabajo: "Finalizado",
    observaciones: "Apoyó: María"
  },
  {
    codigo: "AGO25-02",
    fecha: "15/5/2025",
    noCatastral: "GP423D-26-0001",
    ubicacion: "Nuevo Renacer",
    nombreContribuyente: "JULIO A. BUESO",
    noIdentidad: "N/A",
    tipoTrabajo: "Valuación Parcial",
    responsables: "Alejandro Castillo",
    resolucionTrabajo: "Finalizado",
    observaciones: "Apoyó: Orlando"
  },
  {
    codigo: "AGO25-03",
    fecha: "18/8/2025",
    noCatastral: "GP431D-74-0001",
    ubicacion: "Villas del Campo",
    nombreContribuyente: "PATRONATO",
    noIdentidad: "N/A",
    tipoTrabajo: "Elaboración de Croquis",
    responsables: "Alejandro Castillo",
    resolucionTrabajo: "Finalizado",
    observaciones: "N/A"
  }
    
    // Agrega más registros aquí
  ];

  function actualizarTabla() {
    const filtro1Valor = filtro1.value.toLowerCase();
    const filtro2Valor = filtro2.value.toLowerCase();
    const tbody = tablaBitacora.querySelector("tbody");

    // Limpia la tabla antes de insertar datos nuevos
    tbody.innerHTML = "";

    let totalFiltrados = 0;

    for (const registro of registros) {
      const coincideFiltro1 = Object.values(registro).some(valor =>
        String(valor).toLowerCase().includes(filtro1Valor)
      );
      const coincideFiltro2 = Object.values(registro).some(valor =>
        String(valor).toLowerCase().includes(filtro2Valor)
      );

      if (coincideFiltro1 && coincideFiltro2) {
        const row = document.createElement("tr");
        for (const campo in registro) {
          const cell = document.createElement("td");
          cell.textContent = registro[campo];
          row.appendChild(cell);
        }
        tbody.appendChild(row);
        totalFiltrados++;
      }
    }

    // Actualiza el total de registros filtrados
    totalRegistros.textContent = totalFiltrados;
  }

  filtro1.addEventListener("input", actualizarTabla);
  filtro2.addEventListener("input", actualizarTabla);
  actualizarTabla(); // Llena la tabla al cargar la página

  // Código para el botón flotante
  const scrollToTopBtn = document.createElement("button");
  scrollToTopBtn.id = "scroll-to-top";
  scrollToTopBtn.textContent = " ↑ ";

  // Agregar el botón al final de la sección
  const mainSection = document.getElementById("bitacora");
  mainSection.appendChild(scrollToTopBtn);

  // Estilos del botón flotante
  scrollToTopBtn.style.fontSize = "23px";
  scrollToTopBtn.style.fontFamily = "Arial Black, Arial, sans-serif";
  scrollToTopBtn.style.fontWeight = "bold";
  scrollToTopBtn.style.opacity = "0.8";
  scrollToTopBtn.style.position = "fixed";
  scrollToTopBtn.style.bottom = "20px";
  scrollToTopBtn.style.left = "50%";
  scrollToTopBtn.style.transform = "translateX(-50%)";
  scrollToTopBtn.style.padding = "10px 20px";
  scrollToTopBtn.style.backgroundColor = "#FFFF66";
  scrollToTopBtn.style.color = "#008000";
  scrollToTopBtn.style.border = "none";
  scrollToTopBtn.style.borderRadius = "40px";
  scrollToTopBtn.style.cursor = "pointer";
  scrollToTopBtn.style.display = "none"; // Inicialmente oculto

  scrollToTopBtn.addEventListener("click", function () {
    mainSection.scrollIntoView({ behavior: "smooth" });
  });

  window.addEventListener("scroll", function () {
    const sectionRect = mainSection.getBoundingClientRect();
    const footer = document.querySelector("footer"); // Cambiar esto si el footer tiene un ID diferente
    const footerRect = footer.getBoundingClientRect();

    if (window.scrollY > 600 && sectionRect.bottom > window.innerHeight) {
      scrollToTopBtn.style.display = "block";
    } else {
      scrollToTopBtn.style.display = "none";
    }

    // Asegurarse de que el botón no se desplace más allá del final de la sección
    if (sectionRect.bottom <= window.innerHeight) {
      scrollToTopBtn.style.position = "absolute";
      scrollToTopBtn.style.bottom = "20px";
    } else {
      scrollToTopBtn.style.position = "fixed";
      scrollToTopBtn.style.bottom = "20px";
    }
  });
});
