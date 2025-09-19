import { useAtom } from 'jotai'
import { useState } from 'react'
import ExpandableSidebar from '@/components/ExpandableSidebar'
import { sidebarOpenAtom } from '@/stores'
import MetricasGenerales from '@/components/MetricasGenerales'
import GraficoEvolucion from '@/components/charts/GraficoEvolucion'
import GraficoDistribucionMonto from '@/components/charts/GraficoDistribucionMonto'
import GraficoVariacionPorcentual from '@/components/charts/GraficoVariacionPorcentual'
import GraficoEvolucionCategorias from '@/components/charts/GraficoEvolucionCategorias'
import TablaAnalisisProveedores from '@/components/TablaAnalisisProveedores'
import FiltrosFecha from '@/components/FiltrosFecha'

const Proveedores = () => {
  const [isSidebarOpen] = useAtom(sidebarOpenAtom)
  const [activeTab, setActiveTab] = useState('evolucion')
  const [fechaInicio, setFechaInicio] = useState('2025-07-28')
  const [fechaFin, setFechaFin] = useState('2025-08-28')

  // Datos simulados para el gráfico de evolución de compras
  const datosEvolucionCompras = [
    { fecha: '01/08', gasto: 95000 },
    { fecha: '02/08', gasto: 92000 },
    { fecha: '03/08', gasto: 98000 },
    { fecha: '04/08', gasto: 94000 },
    { fecha: '05/08', gasto: 96000 },
    { fecha: '06/08', gasto: 93000 },
    { fecha: '07/08', gasto: 97000 },
    { fecha: '08/08', gasto: 95000 },
    { fecha: '09/08', gasto: 92000 },
    { fecha: '10/08', gasto: 98000 },
    { fecha: '11/08', gasto: 94000 },
    { fecha: '12/08', gasto: 96000 },
    { fecha: '13/08', gasto: 93000 },
    { fecha: '14/08', gasto: 97000 },
    { fecha: '15/08', gasto: 95000 },
    { fecha: '16/08', gasto: 92000 },
    { fecha: '17/08', gasto: 98000 },
    { fecha: '18/08', gasto: 94000 },
    { fecha: '19/08', gasto: 96000 },
    { fecha: '20/08', gasto: 93000 },
    { fecha: '21/08', gasto: 97000 },
    { fecha: '22/08', gasto: 95000 },
    { fecha: '23/08', gasto: 92000 },
    { fecha: '24/08', gasto: 98000 },
    { fecha: '25/08', gasto: 94000 },
    { fecha: '26/08', gasto: 96000 },
    { fecha: '27/08', gasto: 93000 },
    { fecha: '28/08', gasto: 97000 },
    { fecha: '29/08', gasto: 95000 },
    { fecha: '30/08', gasto: 92000 },
    { fecha: '31/08', gasto: 98000 },
    { fecha: '01/09', gasto: 79000 },
    { fecha: '02/09', gasto: 76000 },
    { fecha: '03/09', gasto: 82000 },
    { fecha: '04/09', gasto: 78000 },
    { fecha: '05/09', gasto: 80000 },
    { fecha: '06/09', gasto: 77000 },
    { fecha: '07/09', gasto: 81000 },
    { fecha: '08/09', gasto: 79000 },
    { fecha: '09/09', gasto: 76000 },
    { fecha: '10/09', gasto: 82000 },
    { fecha: '11/09', gasto: 78000 },
    { fecha: '12/09', gasto: 80000 },
    { fecha: '13/09', gasto: 77000 },
    { fecha: '14/09', gasto: 81000 },
    { fecha: '15/09', gasto: 79000 },
    { fecha: '16/09', gasto: 76000 },
    { fecha: '17/09', gasto: 82000 },
    { fecha: '18/09', gasto: 78000 },
    { fecha: '19/09', gasto: 80000 },
    { fecha: '20/09', gasto: 77000 },
    { fecha: '21/09', gasto: 81000 },
    { fecha: '22/09', gasto: 79000 },
    { fecha: '23/09', gasto: 76000 },
    { fecha: '24/09', gasto: 82000 },
    { fecha: '25/09', gasto: 78000 },
    { fecha: '26/09', gasto: 80000 },
    { fecha: '27/09', gasto: 77000 },
    { fecha: '28/09', gasto: 81000 },
    { fecha: '29/09', gasto: 79000 },
    { fecha: '30/09', gasto: 76000 },
    { fecha: '01/10', gasto: 85000 },
    { fecha: '02/10', gasto: 82000 },
    { fecha: '03/10', gasto: 88000 },
    { fecha: '04/10', gasto: 84000 },
    { fecha: '05/10', gasto: 86000 },
    { fecha: '06/10', gasto: 83000 },
    { fecha: '07/10', gasto: 87000 },
    { fecha: '08/10', gasto: 85000 },
    { fecha: '09/10', gasto: 82000 },
    { fecha: '10/10', gasto: 88000 },
    { fecha: '11/10', gasto: 84000 },
    { fecha: '12/10', gasto: 86000 },
    { fecha: '13/10', gasto: 83000 },
    { fecha: '14/10', gasto: 87000 },
    { fecha: '15/10', gasto: 85000 },
    { fecha: '16/10', gasto: 82000 },
    { fecha: '17/10', gasto: 88000 },
    { fecha: '18/10', gasto: 84000 },
    { fecha: '19/10', gasto: 86000 },
    { fecha: '20/10', gasto: 83000 },
    { fecha: '21/10', gasto: 87000 },
    { fecha: '22/10', gasto: 85000 },
    { fecha: '23/10', gasto: 82000 },
    { fecha: '24/10', gasto: 88000 },
    { fecha: '25/10', gasto: 84000 },
    { fecha: '26/10', gasto: 86000 },
    { fecha: '27/10', gasto: 83000 },
    { fecha: '28/10', gasto: 87000 },
    { fecha: '29/10', gasto: 85000 },
    { fecha: '30/10', gasto: 82000 },
    { fecha: '31/10', gasto: 88000 },
    { fecha: '01/11', gasto: 80000 },
    { fecha: '02/11', gasto: 77000 },
    { fecha: '03/11', gasto: 83000 },
    { fecha: '04/11', gasto: 79000 },
    { fecha: '05/11', gasto: 81000 },
    { fecha: '06/11', gasto: 78000 },
    { fecha: '07/11', gasto: 82000 },
    { fecha: '08/11', gasto: 80000 },
    { fecha: '09/11', gasto: 77000 },
    { fecha: '10/11', gasto: 83000 },
    { fecha: '11/11', gasto: 79000 },
    { fecha: '12/11', gasto: 81000 },
    { fecha: '13/11', gasto: 78000 },
    { fecha: '14/11', gasto: 82000 },
    { fecha: '15/11', gasto: 80000 },
    { fecha: '16/11', gasto: 77000 },
    { fecha: '17/11', gasto: 83000 },
    { fecha: '18/11', gasto: 79000 },
    { fecha: '19/11', gasto: 81000 },
    { fecha: '20/11', gasto: 78000 },
    { fecha: '21/11', gasto: 82000 },
    { fecha: '22/11', gasto: 80000 },
    { fecha: '23/11', gasto: 77000 },
    { fecha: '24/11', gasto: 83000 },
    { fecha: '25/11', gasto: 79000 },
    { fecha: '26/11', gasto: 81000 },
    { fecha: '27/11', gasto: 78000 },
    { fecha: '28/11', gasto: 82000 },
    { fecha: '29/11', gasto: 80000 },
    { fecha: '30/11', gasto: 77000 },
    { fecha: '01/12', gasto: 90000 },
    { fecha: '02/12', gasto: 87000 },
    { fecha: '03/12', gasto: 93000 },
    { fecha: '04/12', gasto: 89000 },
    { fecha: '05/12', gasto: 91000 },
    { fecha: '06/12', gasto: 88000 },
    { fecha: '07/12', gasto: 92000 },
    { fecha: '08/12', gasto: 90000 },
    { fecha: '09/12', gasto: 87000 },
    { fecha: '10/12', gasto: 93000 },
    { fecha: '11/12', gasto: 89000 },
    { fecha: '12/12', gasto: 91000 },
    { fecha: '13/12', gasto: 88000 },
    { fecha: '14/12', gasto: 92000 },
    { fecha: '15/12', gasto: 90000 },
    { fecha: '16/12', gasto: 87000 },
    { fecha: '17/12', gasto: 93000 },
    { fecha: '18/12', gasto: 89000 },
    { fecha: '19/12', gasto: 91000 },
    { fecha: '20/12', gasto: 88000 },
    { fecha: '21/12', gasto: 92000 },
    { fecha: '22/12', gasto: 90000 },
    { fecha: '23/12', gasto: 87000 },
    { fecha: '24/12', gasto: 93000 },
    { fecha: '25/12', gasto: 89000 },
    { fecha: '26/12', gasto: 91000 },
    { fecha: '27/12', gasto: 88000 },
    { fecha: '28/12', gasto: 92000 },
    { fecha: '29/12', gasto: 90000 },
    { fecha: '30/12', gasto: 87000 },
    { fecha: '31/12', gasto: 93000 }
  ]

  // Datos simulados para la variación del costo promedio
  const datosVariacionCosto = [
    { fecha: '01/02', variacion: 4.0 },
    { fecha: '02/02', variacion: 3.8 },
    { fecha: '03/02', variacion: 4.2 },
    { fecha: '04/02', variacion: 3.9 },
    { fecha: '05/02', variacion: 4.1 },
    { fecha: '06/02', variacion: 3.7 },
    { fecha: '07/02', variacion: 4.3 },
    { fecha: '08/02', variacion: 3.6 },
    { fecha: '09/02', variacion: 4.0 },
    { fecha: '10/02', variacion: 3.8 },
    { fecha: '11/02', variacion: 4.1 },
    { fecha: '12/02', variacion: 3.9 },
    { fecha: '13/02', variacion: 4.2 },
    { fecha: '14/02', variacion: 3.7 },
    { fecha: '15/02', variacion: 4.0 },
    { fecha: '16/02', variacion: 3.8 },
    { fecha: '17/02', variacion: 4.1 },
    { fecha: '18/02', variacion: 3.9 },
    { fecha: '19/02', variacion: 4.3 },
    { fecha: '20/02', variacion: 3.6 },
    { fecha: '21/02', variacion: 4.0 },
    { fecha: '22/02', variacion: 3.8 },
    { fecha: '23/02', variacion: 4.2 },
    { fecha: '24/02', variacion: 3.7 },
    { fecha: '25/02', variacion: 4.1 },
    { fecha: '26/02', variacion: 3.9 },
    { fecha: '27/02', variacion: 4.0 },
    { fecha: '28/02', variacion: 3.8 },
    { fecha: '01/03', variacion: -7.0 },
    { fecha: '02/03', variacion: -6.8 },
    { fecha: '03/03', variacion: -7.2 },
    { fecha: '04/03', variacion: -6.9 },
    { fecha: '05/03', variacion: -7.1 },
    { fecha: '06/03', variacion: -6.7 },
    { fecha: '07/03', variacion: -7.3 },
    { fecha: '08/03', variacion: -6.6 },
    { fecha: '09/03', variacion: -7.0 },
    { fecha: '10/03', variacion: -6.8 },
    { fecha: '11/03', variacion: -7.1 },
    { fecha: '12/03', variacion: -6.9 },
    { fecha: '13/03', variacion: -7.2 },
    { fecha: '14/03', variacion: -6.7 },
    { fecha: '15/03', variacion: -7.0 },
    { fecha: '16/03', variacion: -6.8 },
    { fecha: '17/03', variacion: -7.1 },
    { fecha: '18/03', variacion: -6.9 },
    { fecha: '19/03', variacion: -7.3 },
    { fecha: '20/03', variacion: -6.6 },
    { fecha: '21/03', variacion: -7.0 },
    { fecha: '22/03', variacion: -6.8 },
    { fecha: '23/03', variacion: -7.2 },
    { fecha: '24/03', variacion: -6.7 },
    { fecha: '25/03', variacion: -7.1 },
    { fecha: '26/03', variacion: -6.9 },
    { fecha: '27/03', variacion: -7.0 },
    { fecha: '28/03', variacion: -6.8 },
    { fecha: '29/03', variacion: -7.1 },
    { fecha: '30/03', variacion: -6.9 },
    { fecha: '31/03', variacion: -7.0 },
    { fecha: '01/04', variacion: -6.0 },
    { fecha: '02/04', variacion: -5.8 },
    { fecha: '03/04', variacion: -6.2 },
    { fecha: '04/04', variacion: -5.9 },
    { fecha: '05/04', variacion: -6.1 },
    { fecha: '06/04', variacion: -5.7 },
    { fecha: '07/04', variacion: -6.3 },
    { fecha: '08/04', variacion: -5.6 },
    { fecha: '09/04', variacion: -6.0 },
    { fecha: '10/04', variacion: -5.8 },
    { fecha: '11/04', variacion: -6.1 },
    { fecha: '12/04', variacion: -5.9 },
    { fecha: '13/04', variacion: -6.2 },
    { fecha: '14/04', variacion: -5.7 },
    { fecha: '15/04', variacion: -6.0 },
    { fecha: '16/04', variacion: -5.8 },
    { fecha: '17/04', variacion: -6.1 },
    { fecha: '18/04', variacion: -5.9 },
    { fecha: '19/04', variacion: -6.3 },
    { fecha: '20/04', variacion: -5.6 },
    { fecha: '21/04', variacion: -6.0 },
    { fecha: '22/04', variacion: -5.8 },
    { fecha: '23/04', variacion: -6.2 },
    { fecha: '24/04', variacion: -5.7 },
    { fecha: '25/04', variacion: -6.1 },
    { fecha: '26/04', variacion: -5.9 },
    { fecha: '27/04', variacion: -6.0 },
    { fecha: '28/04', variacion: -5.8 },
    { fecha: '29/04', variacion: -6.1 },
    { fecha: '30/04', variacion: -5.9 },
    { fecha: '01/05', variacion: 6.5 },
    { fecha: '02/05', variacion: 6.3 },
    { fecha: '03/05', variacion: 6.7 },
    { fecha: '04/05', variacion: 6.4 },
    { fecha: '05/05', variacion: 6.6 },
    { fecha: '06/05', variacion: 6.2 },
    { fecha: '07/05', variacion: 6.8 },
    { fecha: '08/05', variacion: 6.1 },
    { fecha: '09/05', variacion: 6.5 },
    { fecha: '10/05', variacion: 6.3 },
    { fecha: '11/05', variacion: 6.6 },
    { fecha: '12/05', variacion: 6.4 },
    { fecha: '13/05', variacion: 6.7 },
    { fecha: '14/05', variacion: 6.2 },
    { fecha: '15/05', variacion: 6.5 },
    { fecha: '16/05', variacion: 6.3 },
    { fecha: '17/05', variacion: 6.6 },
    { fecha: '18/05', variacion: 6.4 },
    { fecha: '19/05', variacion: 6.8 },
    { fecha: '20/05', variacion: 6.1 },
    { fecha: '21/05', variacion: 6.5 },
    { fecha: '22/05', variacion: 6.3 },
    { fecha: '23/05', variacion: 6.7 },
    { fecha: '24/05', variacion: 6.2 },
    { fecha: '25/05', variacion: 6.6 },
    { fecha: '26/05', variacion: 6.4 },
    { fecha: '27/05', variacion: 6.5 },
    { fecha: '28/05', variacion: 6.3 },
    { fecha: '29/05', variacion: 6.6 },
    { fecha: '30/05', variacion: 6.4 },
    { fecha: '31/05', variacion: 6.5 },
    { fecha: '01/06', variacion: -9.0 },
    { fecha: '02/06', variacion: -8.8 },
    { fecha: '03/06', variacion: -9.2 },
    { fecha: '04/06', variacion: -8.9 },
    { fecha: '05/06', variacion: -9.1 },
    { fecha: '06/06', variacion: -8.7 },
    { fecha: '07/06', variacion: -9.3 },
    { fecha: '08/06', variacion: -8.6 },
    { fecha: '09/06', variacion: -9.0 },
    { fecha: '10/06', variacion: -8.8 },
    { fecha: '11/06', variacion: -9.1 },
    { fecha: '12/06', variacion: -8.9 },
    { fecha: '13/06', variacion: -9.2 },
    { fecha: '14/06', variacion: -8.7 },
    { fecha: '15/06', variacion: -9.0 },
    { fecha: '16/06', variacion: -8.8 },
    { fecha: '17/06', variacion: -9.1 },
    { fecha: '18/06', variacion: -8.9 },
    { fecha: '19/06', variacion: -9.3 },
    { fecha: '20/06', variacion: -8.6 },
    { fecha: '21/06', variacion: -9.0 },
    { fecha: '22/06', variacion: -8.8 },
    { fecha: '23/06', variacion: -9.2 },
    { fecha: '24/06', variacion: -8.7 },
    { fecha: '25/06', variacion: -9.1 },
    { fecha: '26/06', variacion: -8.9 },
    { fecha: '27/06', variacion: -9.0 },
    { fecha: '28/06', variacion: -8.8 },
    { fecha: '29/06', variacion: -9.1 },
    { fecha: '30/06', variacion: -8.9 },
    { fecha: '01/07', variacion: -1.0 },
    { fecha: '02/07', variacion: -0.8 },
    { fecha: '03/07', variacion: -1.2 },
    { fecha: '04/07', variacion: -0.9 },
    { fecha: '05/07', variacion: -1.1 },
    { fecha: '06/07', variacion: -0.7 },
    { fecha: '07/07', variacion: -1.3 },
    { fecha: '08/07', variacion: -0.6 },
    { fecha: '09/07', variacion: -1.0 },
    { fecha: '10/07', variacion: -0.8 },
    { fecha: '11/07', variacion: -1.1 },
    { fecha: '12/07', variacion: -0.9 },
    { fecha: '13/07', variacion: -1.2 },
    { fecha: '14/07', variacion: -0.7 },
    { fecha: '15/07', variacion: -1.0 },
    { fecha: '16/07', variacion: -0.8 },
    { fecha: '17/07', variacion: -1.1 },
    { fecha: '18/07', variacion: -0.9 },
    { fecha: '19/07', variacion: -1.3 },
    { fecha: '20/07', variacion: -0.6 },
    { fecha: '21/07', variacion: -1.0 },
    { fecha: '22/07', variacion: -0.8 },
    { fecha: '23/07', variacion: -1.2 },
    { fecha: '24/07', variacion: -0.7 },
    { fecha: '25/07', variacion: -1.1 },
    { fecha: '26/07', variacion: -0.9 },
    { fecha: '27/07', variacion: -1.0 },
    { fecha: '28/07', variacion: -0.8 },
    { fecha: '29/07', variacion: -1.1 },
    { fecha: '30/07', variacion: -0.9 },
    { fecha: '31/07', variacion: -1.0 },
    { fecha: '01/08', variacion: 10.0 },
    { fecha: '02/08', variacion: 9.8 },
    { fecha: '03/08', variacion: 10.2 },
    { fecha: '04/08', variacion: 9.9 },
    { fecha: '05/08', variacion: 10.1 },
    { fecha: '06/08', variacion: 9.7 },
    { fecha: '07/08', variacion: 10.3 },
    { fecha: '08/08', variacion: 9.6 },
    { fecha: '09/08', variacion: 10.0 },
    { fecha: '10/08', variacion: 9.8 },
    { fecha: '11/08', variacion: 10.1 },
    { fecha: '12/08', variacion: 9.9 },
    { fecha: '13/08', variacion: 10.2 },
    { fecha: '14/08', variacion: 9.7 },
    { fecha: '15/08', variacion: 10.0 },
    { fecha: '16/08', variacion: 9.8 },
    { fecha: '17/08', variacion: 10.1 },
    { fecha: '18/08', variacion: 9.9 },
    { fecha: '19/08', variacion: 10.3 },
    { fecha: '20/08', variacion: 9.6 },
    { fecha: '21/08', variacion: 10.0 },
    { fecha: '22/08', variacion: 9.8 },
    { fecha: '23/08', variacion: 10.2 },
    { fecha: '24/08', variacion: 9.7 },
    { fecha: '25/08', variacion: 10.1 },
    { fecha: '26/08', variacion: 9.9 },
    { fecha: '27/08', variacion: 10.0 },
    { fecha: '28/08', variacion: 9.8 },
    { fecha: '29/08', variacion: 10.1 },
    { fecha: '30/08', variacion: 9.9 },
    { fecha: '31/08', variacion: 10.0 },
    { fecha: '01/09', variacion: -9.0 },
    { fecha: '02/09', variacion: -8.8 },
    { fecha: '03/09', variacion: -9.2 },
    { fecha: '04/09', variacion: -8.9 },
    { fecha: '05/09', variacion: -9.1 },
    { fecha: '06/09', variacion: -8.7 },
    { fecha: '07/09', variacion: -9.3 },
    { fecha: '08/09', variacion: -8.6 },
    { fecha: '09/09', variacion: -9.0 },
    { fecha: '10/09', variacion: -8.8 },
    { fecha: '11/09', variacion: -9.1 },
    { fecha: '12/09', variacion: -8.9 },
    { fecha: '13/09', variacion: -9.2 },
    { fecha: '14/09', variacion: -8.7 },
    { fecha: '15/09', variacion: -9.0 },
    { fecha: '16/09', variacion: -8.8 },
    { fecha: '17/09', variacion: -9.1 },
    { fecha: '18/09', variacion: -8.9 },
    { fecha: '19/09', variacion: -9.3 },
    { fecha: '20/09', variacion: -8.6 },
    { fecha: '21/09', variacion: -9.0 },
    { fecha: '22/09', variacion: -8.8 },
    { fecha: '23/09', variacion: -9.2 },
    { fecha: '24/09', variacion: -8.7 },
    { fecha: '25/09', variacion: -9.1 },
    { fecha: '26/09', variacion: -8.9 },
    { fecha: '27/09', variacion: -9.0 },
    { fecha: '28/09', variacion: -8.8 },
    { fecha: '29/09', variacion: -9.1 },
    { fecha: '30/09', variacion: -8.9 },
    { fecha: '01/10', variacion: 7.0 },
    { fecha: '02/10', variacion: 6.8 },
    { fecha: '03/10', variacion: 7.2 },
    { fecha: '04/10', variacion: 6.9 },
    { fecha: '05/10', variacion: 7.1 },
    { fecha: '06/10', variacion: 6.7 },
    { fecha: '07/10', variacion: 7.3 },
    { fecha: '08/10', variacion: 6.6 },
    { fecha: '09/10', variacion: 7.0 },
    { fecha: '10/10', variacion: 6.8 },
    { fecha: '11/10', variacion: 7.1 },
    { fecha: '12/10', variacion: 6.9 },
    { fecha: '13/10', variacion: 7.2 },
    { fecha: '14/10', variacion: 6.7 },
    { fecha: '15/10', variacion: 7.0 },
    { fecha: '16/10', variacion: 6.8 },
    { fecha: '17/10', variacion: 7.1 },
    { fecha: '18/10', variacion: 6.9 },
    { fecha: '19/10', variacion: 7.3 },
    { fecha: '20/10', variacion: 6.6 },
    { fecha: '21/10', variacion: 7.0 },
    { fecha: '22/10', variacion: 6.8 },
    { fecha: '23/10', variacion: 7.2 },
    { fecha: '24/10', variacion: 6.7 },
    { fecha: '25/10', variacion: 7.1 },
    { fecha: '26/10', variacion: 6.9 },
    { fecha: '27/10', variacion: 7.0 },
    { fecha: '28/10', variacion: 6.8 },
    { fecha: '29/10', variacion: 7.1 },
    { fecha: '30/10', variacion: 6.9 },
    { fecha: '31/10', variacion: 7.0 },
    { fecha: '01/11', variacion: -2.0 },
    { fecha: '02/11', variacion: -1.8 },
    { fecha: '03/11', variacion: -2.2 },
    { fecha: '04/11', variacion: -1.9 },
    { fecha: '05/11', variacion: -2.1 },
    { fecha: '06/11', variacion: -1.7 },
    { fecha: '07/11', variacion: -2.3 },
    { fecha: '08/11', variacion: -1.6 },
    { fecha: '09/11', variacion: -2.0 },
    { fecha: '10/11', variacion: -1.8 },
    { fecha: '11/11', variacion: -2.1 },
    { fecha: '12/11', variacion: -1.9 },
    { fecha: '13/11', variacion: -2.2 },
    { fecha: '14/11', variacion: -1.7 },
    { fecha: '15/11', variacion: -2.0 },
    { fecha: '16/11', variacion: -1.8 },
    { fecha: '17/11', variacion: -2.1 },
    { fecha: '18/11', variacion: -1.9 },
    { fecha: '19/11', variacion: -2.3 },
    { fecha: '20/11', variacion: -1.6 },
    { fecha: '21/11', variacion: -2.0 },
    { fecha: '22/11', variacion: -1.8 },
    { fecha: '23/11', variacion: -2.2 },
    { fecha: '24/11', variacion: -1.7 },
    { fecha: '25/11', variacion: -2.1 },
    { fecha: '26/11', variacion: -1.9 },
    { fecha: '27/11', variacion: -2.0 },
    { fecha: '28/11', variacion: -1.8 },
    { fecha: '29/11', variacion: -2.1 },
    { fecha: '30/11', variacion: -1.9 },
    { fecha: '01/12', variacion: 4.0 },
    { fecha: '02/12', variacion: 3.8 },
    { fecha: '03/12', variacion: 4.2 },
    { fecha: '04/12', variacion: 3.9 },
    { fecha: '05/12', variacion: 4.1 },
    { fecha: '06/12', variacion: 3.7 },
    { fecha: '07/12', variacion: 4.3 },
    { fecha: '08/12', variacion: 3.6 },
    { fecha: '09/12', variacion: 4.0 },
    { fecha: '10/12', variacion: 3.8 },
    { fecha: '11/12', variacion: 4.1 },
    { fecha: '12/12', variacion: 3.9 },
    { fecha: '13/12', variacion: 4.2 },
    { fecha: '14/12', variacion: 3.7 },
    { fecha: '15/12', variacion: 4.0 },
    { fecha: '16/12', variacion: 3.8 },
    { fecha: '17/12', variacion: 4.1 },
    { fecha: '18/12', variacion: 3.9 },
    { fecha: '19/12', variacion: 4.3 },
    { fecha: '20/12', variacion: 3.6 },
    { fecha: '21/12', variacion: 4.0 },
    { fecha: '22/12', variacion: 3.8 },
    { fecha: '23/12', variacion: 4.2 },
    { fecha: '24/12', variacion: 3.7 },
    { fecha: '25/12', variacion: 4.1 },
    { fecha: '26/12', variacion: 3.9 },
    { fecha: '27/12', variacion: 4.0 },
    { fecha: '28/12', variacion: 3.8 },
    { fecha: '29/12', variacion: 4.1 },
    { fecha: '30/12', variacion: 3.9 },
    { fecha: '31/12', variacion: 4.0 }
  ]

  // Datos simulados para la evolución de costos por categoría
  const datosEvolucionCategorias = [
    { fecha: '01/02', carnes: 11429, lacteos: 11429, granos: 17143, verduras: 11429, frutas: 22857 },
    { fecha: '02/02', carnes: 12000, lacteos: 11000, granos: 18000, verduras: 12000, frutas: 22000 },
    { fecha: '03/02', carnes: 10800, lacteos: 11800, granos: 16500, verduras: 10800, frutas: 23500 },
    { fecha: '01/03', carnes: 8500, lacteos: 9000, granos: 12000, verduras: 8500, frutas: 15000 },
    { fecha: '02/03', carnes: 8000, lacteos: 8500, granos: 11500, verduras: 8000, frutas: 14500 },
    { fecha: '03/03', carnes: 9000, lacteos: 9500, granos: 12500, verduras: 9000, frutas: 15500 },
    { fecha: '01/04', carnes: 20000, lacteos: 20000, granos: 22000, verduras: 20000, frutas: 18000 },
    { fecha: '02/04', carnes: 21000, lacteos: 19500, granos: 22500, verduras: 21000, frutas: 17500 },
    { fecha: '03/04', carnes: 19000, lacteos: 20500, granos: 21500, verduras: 19000, frutas: 18500 },
    { fecha: '01/05', carnes: 18000, lacteos: 12000, granos: 20000, verduras: 18000, frutas: 16000 },
    { fecha: '02/05', carnes: 17500, lacteos: 12500, granos: 19500, verduras: 17500, frutas: 16500 },
    { fecha: '03/05', carnes: 18500, lacteos: 11500, granos: 20500, verduras: 18500, frutas: 15500 },
    { fecha: '01/06', carnes: 22000, lacteos: 22000, granos: 20000, verduras: 22000, frutas: 20000 },
    { fecha: '02/06', carnes: 21500, lacteos: 22500, granos: 19500, verduras: 21500, frutas: 20500 },
    { fecha: '03/06', carnes: 22500, lacteos: 21500, granos: 20500, verduras: 22500, frutas: 19500 },
    { fecha: '01/07', carnes: 8000, lacteos: 8000, granos: 6000, verduras: 8000, frutas: 10000 },
    { fecha: '02/07', carnes: 7500, lacteos: 8500, granos: 5500, verduras: 7500, frutas: 10500 },
    { fecha: '03/07', carnes: 8500, lacteos: 7500, granos: 6500, verduras: 8500, frutas: 9500 },
    { fecha: '01/08', carnes: 25000, lacteos: 25000, granos: 22000, verduras: 25000, frutas: 23000 },
    { fecha: '02/08', carnes: 24500, lacteos: 25500, granos: 21500, verduras: 24500, frutas: 23500 },
    { fecha: '03/08', carnes: 25500, lacteos: 24500, granos: 22500, verduras: 25500, frutas: 22500 },
    { fecha: '01/09', carnes: 12000, lacteos: 12000, granos: 10000, verduras: 12000, frutas: 14000 },
    { fecha: '02/09', carnes: 11500, lacteos: 12500, granos: 9500, verduras: 11500, frutas: 14500 },
    { fecha: '03/09', carnes: 12500, lacteos: 11500, granos: 10500, verduras: 12500, frutas: 13500 },
    { fecha: '01/10', carnes: 20000, lacteos: 20000, granos: 18000, verduras: 20000, frutas: 22000 },
    { fecha: '02/10', carnes: 19500, lacteos: 20500, granos: 17500, verduras: 19500, frutas: 22500 },
    { fecha: '03/10', carnes: 20500, lacteos: 19500, granos: 18500, verduras: 20500, frutas: 21500 },
    { fecha: '01/11', carnes: 15000, lacteos: 15000, granos: 13000, verduras: 15000, frutas: 17000 },
    { fecha: '02/11', carnes: 14500, lacteos: 15500, granos: 12500, verduras: 14500, frutas: 17500 },
    { fecha: '03/11', carnes: 15500, lacteos: 14500, granos: 13500, verduras: 15500, frutas: 16500 },
    { fecha: '01/12', carnes: 22000, lacteos: 22000, granos: 20000, verduras: 22000, frutas: 24000 },
    { fecha: '02/12', carnes: 21500, lacteos: 22500, granos: 19500, verduras: 21500, frutas: 24500 },
    { fecha: '03/12', carnes: 22500, lacteos: 21500, granos: 20500, verduras: 22500, frutas: 23500 }
  ]

  // Configuración de categorías
  const categoriasProductos = [
    { key: 'carnes', label: 'Carnes' },
    { key: 'lacteos', label: 'Lácteos' },
    { key: 'granos', label: 'Granos' },
    { key: 'verduras', label: 'Verduras' },
    { key: 'frutas', label: 'Frutas' }
  ]

  // Datos simulados para las métricas generales
  const metricasGenerales = {
    titulo: "Métricas Generales",
    subsecciones: [
      {
        titulo: "Métricas Generales",
        metricas: [
          { nombre: "Monto total de compras", valor: 1247890, formato: "moneda" },
          { nombre: "Cantidad de proveedores activos", valor: 89, formato: "numero" },
          { nombre: "Variación del costo promedio vs período anterior", valor: 5.2, formato: "porcentaje" },
          { nombre: "Variación del costo promedio vs mismo período año anterior", valor: -2.1, formato: "porcentaje" },
          { nombre: "Relación cantidad comprada vs vendida", valor: 1.15, formato: "numero" }
        ]
      }
    ]
  }

  return (
    <div className={`transition-all duration-300 ${isSidebarOpen ? 'mr-[30%]' : 'mr-1'} py-4`}>
      <div className="max-w-7xl mx-auto px-4">
          <div className="mb-5">
           <h1 className="text-2xl font-bold bg-gradient-to-r from-slate-800 via-amber-800 to-orange-800 bg-clip-text text-transparent mb-2">
             Análisis de Proveedores
           </h1>
            <p className="text-sm text-gray-600">Análisis completo de métricas y tendencias de proveedores por dimensión</p>
          </div>

        {/* Filtros */}
        <FiltrosFecha 
          fechaInicio={fechaInicio}
          fechaFin={fechaFin}
          onFechaInicioChange={setFechaInicio}
          onFechaFinChange={setFechaFin}
        />

        {/* Métricas Generales y Visualizaciones */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mb-5">
          {/* Métricas Generales */}
          <div className="lg:col-span-1">
            <MetricasGenerales
              titulo={metricasGenerales.titulo}
              subsecciones={metricasGenerales.subsecciones}
              columnas={1}
              colorTema="#1e40af"
            />
          </div>

          {/* Gráficos */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-5">
              {/* Pestañas de gráficos */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex space-x-1">
                  <button 
                    onClick={() => setActiveTab('evolucion')}
                    className={`px-4 py-2 text-xs font-medium rounded-t-lg ${
                      activeTab === 'evolucion' ? 'text-slate-600 border-b-2 border-slate-600 bg-slate-50' : 'text-gray-500'
                    }`}
                  >
                    Evolución
                  </button>
                  <button 
                    onClick={() => setActiveTab('distribucion-compra')}
                    className={`px-4 py-2 text-xs font-medium rounded-t-lg ${
                      activeTab === 'distribucion-compra' ? 'text-slate-600 border-b-2 border-slate-600 bg-slate-50' : 'text-gray-500'
                    }`}
                  >
                    Distribución por compra
                  </button>
                  <button 
                    onClick={() => setActiveTab('variacion-costo')}
                    className={`px-4 py-2 text-xs font-medium rounded-t-lg ${
                      activeTab === 'variacion-costo' ? 'text-slate-600 border-b-2 border-slate-600 bg-slate-50' : 'text-gray-500'
                    }`}
                  >
                    Variación del costo promedio
                  </button>
                  <button 
                    onClick={() => setActiveTab('evolucion-categorias')}
                    className={`px-4 py-2 text-xs font-medium rounded-t-lg ${
                      activeTab === 'evolucion-categorias' ? 'text-slate-600 border-b-2 border-slate-600 bg-slate-50' : 'text-gray-500'
                    }`}
                  >
                    Evolución de costos por categoría
                  </button>
                  <button 
                    onClick={() => setActiveTab('curva-abc')}
                    className={`px-4 py-2 text-xs font-medium rounded-t-lg ${
                      activeTab === 'curva-abc' ? 'text-slate-600 border-b-2 border-slate-600 bg-slate-50' : 'text-gray-500'
                    }`}
                  >
                    Curva ABC
                  </button>
                </div>
              </div>

              {/* Contenido de gráficos */}
              <div className="bg-gray-50 rounded-lg p-5" style={{ height: '500px' }}>
            {activeTab === 'evolucion' && (
              <div>
                <GraficoEvolucion
                  datos={datosEvolucionCompras}
                  titulo="Evolución del Gasto en Compras por Mes"
                  color="#d97706"
                  altura="400px"
                  opcionesMetricas={[
                    { value: 'gasto', label: 'Gasto en Compras ($)' }
                  ]}
                  campoDatos="gasto"
                  formatearEjeY={(value) => `$${value.toLocaleString()}`}
                  formatearTooltip={(value, name) => [`$${value.toLocaleString()}`, 'Gasto en Compras']}
                />
              </div>
            )}
            
            {activeTab === 'distribucion-compra' && (
              <div>
                <GraficoDistribucionMonto
                  titulo="Distribución de Costos Unitarios por Producto"
                  altura="400px"
                  etiquetaEjeY="Cantidad de Productos"
                  etiquetaLeyenda="Cantidad de Productos"
                  formatearEjeY={(value) => `${value}`}
                  formatearTooltip={(value, name) => [`${value}`, 'Cantidad de Productos']}
                />
              </div>
            )}
            
            {activeTab === 'variacion-costo' && (
              <div>
                <GraficoVariacionPorcentual
                  datos={datosVariacionCosto}
                  titulo="Variación del Costo Promedio vs Comparador"
                  color="#d97706"
                  altura="400px"
                  opcionesAgrupacion={[
                    { value: 'mes', label: 'Mes' }
                  ]}
                  opcionesComparacion={[
                    { value: 'vs-mes-anterior', label: 'vs mes anterior' },
                    { value: 'vs-año-anterior', label: 'vs año anterior' }
                  ]}
                  campoDatos="variacion"
                  formatearEjeY={(value) => `${value}%`}
                  formatearTooltip={(value) => [`${value}%`, 'Variación Costo Promedio']}
                />
              </div>
            )}
            
            {activeTab === 'evolucion-categorias' && (
              <div>
                <GraficoEvolucionCategorias
                  datos={datosEvolucionCategorias}
                  titulo="Evolución de Costos por Categoría de Producto"
                  altura="400px"
                  categorias={categoriasProductos}
                  formatearEjeY={(value) => `$${value.toLocaleString()}`}
                  formatearTooltip={(value, name) => [`$${value.toLocaleString()}`, name]}
                />
              </div>
            )}
            
            {activeTab === 'curva-abc' && (
              <div className="flex items-center justify-center h-full">
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gray-200 rounded-lg flex items-center justify-center">
                    <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Curva ABC</h3>
                  <p className="text-sm text-gray-500">Análisis de clasificación ABC de proveedores por valor</p>
                </div>
              </div>
            )}
              </div>
            </div>
          </div>
        </div>

        {/* Tabla de Análisis de Proveedores */}
        <div className="mt-5">
          <TablaAnalisisProveedores />
        </div>

        {/* Sidebar de ayuda educativa */}
        <ExpandableSidebar
          title="Ayuda educativa - Análisis de Proveedores"
          iconPosition="right"
        >
          <div className="space-y-4">
            <div>
              <h3 className="text-sm font-semibold text-gray-800 mb-2">¿Qué es el Análisis de Proveedores?</h3>
              <p className="text-xs text-gray-600 break-words">
                El análisis de proveedores te permite evaluar el rendimiento, la confiabilidad y el valor de tus proveedores. 
                Incluye métricas como retención, frecuencia de compras, y segmentación RFM para optimizar las relaciones comerciales.
              </p>
            </div>
            
            <div>
              <h3 className="text-sm font-semibold text-gray-800 mb-2">Métricas Generales</h3>
              <p className="text-xs text-gray-600 break-words">
                <strong>Proveedores Activos:</strong> Total de proveedores con actividad reciente.<br/>
                <strong>Proveedores Nuevos:</strong> Proveedores incorporados en el período.<br/>
                <strong>Proveedores Recurrentes:</strong> Proveedores con compras regulares.
              </p>
            </div>
            
            <div>
              <h3 className="text-sm font-semibold text-gray-800 mb-2">Tasas de Retención</h3>
              <p className="text-xs text-gray-600 break-words">
                <strong>Tasa de Retención:</strong> Porcentaje de proveedores que continúan activos.<br/>
                <strong>Tasa de Abandono:</strong> Porcentaje de proveedores que dejaron de comprar.
              </p>
            </div>
            
            <div>
              <h3 className="text-sm font-semibold text-gray-800 mb-2">Valor del Proveedor</h3>
              <p className="text-xs text-gray-600 break-words">
                <strong>Valor Promedio:</strong> Monto promedio de compras por proveedor.<br/>
                <strong>Frecuencia:</strong> Número promedio de compras por período.<br/>
                <strong>Tiempo entre Compras:</strong> Días promedio entre transacciones.
              </p>
            </div>
            
            <div>
              <h3 className="text-sm font-semibold text-gray-800 mb-2">Segmentación RFM</h3>
              <p className="text-xs text-gray-600 break-words">
                <strong>Premium:</strong> Proveedores de alto valor y frecuencia.<br/>
                <strong>Regulares:</strong> Proveedores con comportamiento moderado.<br/>
                <strong>En Riesgo:</strong> Proveedores con actividad decreciente.
              </p>
            </div>
            
            <div>
              <h3 className="text-sm font-semibold text-gray-800 mb-2">Gráficos Disponibles</h3>
              <p className="text-xs text-gray-600 break-words">
                <strong>Evolución:</strong> Tendencias de proveedores nuevos vs recurrentes.<br/>
                <strong>Distribución por Compra:</strong> Análisis de frecuencia de compras.<br/>
                <strong>Curva de Retención:</strong> Análisis temporal de retención.<br/>
                <strong>Mapa de Calor:</strong> Patrones de actividad por tiempo.
              </p>
            </div>
          </div>
        </ExpandableSidebar>
      </div>
    </div>
  )
}

export default Proveedores
