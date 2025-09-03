import { useAtom } from 'jotai'
import { useState } from 'react'
import ExpandableSidebar from '@/components/ExpandableSidebar'
import { sidebarOpenAtom } from '@/stores'
import GraficoEvolucion from '@/components/charts/GraficoEvolucion'
import GraficoVariacionPorcentual from '@/components/charts/GraficoVariacionPorcentual'
import GraficoDistribucionPorDia from '@/components/charts/GraficoDistribucionPorDia'
import GraficoDistribucionHoraria from '@/components/charts/GraficoDistribucionHoraria'
import GraficoDispersion from '@/components/charts/GraficoDispersion'
import MetricasGenerales from '@/components/MetricasGenerales'
import GraficoMapaCalor from '@/components/charts/GraficoMapaCalor'
import TablaComparacionVentas from '@/components/TablaComparacionVentas'

const Ventas = () => {
  const [isSidebarOpen] = useAtom(sidebarOpenAtom)
  const [activeTab, setActiveTab] = useState('evolucion')
  const [metrica, setMetrica] = useState('ventas')
  const [agrupacionVariacion, setAgrupacionVariacion] = useState('dia')
  const [comparacionVariacion, setComparacionVariacion] = useState('vs-anio-anterior')
  const [metricaDistribucion, setMetricaDistribucion] = useState('ventas')
  const [metricaDistribucionHoraria, setMetricaDistribucionHoraria] = useState('ventas')
  const [metricaDispersion, setMetricaDispersion] = useState('ventas')
  const [metricaMapaCalor, setMetricaMapaCalor] = useState('ventas')



  // Datos simulados para el gráfico
  const datosVentas = [
    { fecha: '19/7', ventas: 85000 },
    { fecha: '20/7', ventas: 92000 },
    { fecha: '21/7', ventas: 78000 },
    { fecha: '22/7', ventas: 105000 },
    { fecha: '23/7', ventas: 118000 },
    { fecha: '24/7', ventas: 95000 },
    { fecha: '25/7', ventas: 87000 },
    { fecha: '26/7', ventas: 102000 },
    { fecha: '27/7', ventas: 115000 },
    { fecha: '28/7', ventas: 89000 },
    { fecha: '29/7', ventas: 98000 },
    { fecha: '30/7', ventas: 110000 },
    { fecha: '31/7', ventas: 85000 },
    { fecha: '1/8', ventas: 92000 },
    { fecha: '2/8', ventas: 108000 },
    { fecha: '3/8', ventas: 95000 },
    { fecha: '4/8', ventas: 87000 },
    { fecha: '5/8', ventas: 102000 },
    { fecha: '6/8', ventas: 115000 },
    { fecha: '7/8', ventas: 89000 },
    { fecha: '8/8', ventas: 98000 },
    { fecha: '9/8', ventas: 110000 },
    { fecha: '10/8', ventas: 85000 },
    { fecha: '11/8', ventas: 92000 },
    { fecha: '12/8', ventas: 108000 },
    { fecha: '13/8', ventas: 95000 },
    { fecha: '14/8', ventas: 87000 },
    { fecha: '15/8', ventas: 102000 },
    { fecha: '16/8', ventas: 115000 },
    { fecha: '17/8', ventas: 89000 },
    { fecha: '18/8', ventas: 98000 },
    { fecha: '19/8', ventas: 110000 },
    { fecha: '20/8', ventas: 85000 },
    { fecha: '21/8', ventas: 92000 },
    { fecha: '22/8', ventas: 108000 },
    { fecha: '23/8', ventas: 95000 },
    { fecha: '24/8', ventas: 87000 },
    { fecha: '25/8', ventas: 102000 },
    { fecha: '26/8', ventas: 115000 },
    { fecha: '27/8', ventas: 89000 }
  ];

  // Datos simulados para unidades
  const datosUnidades = [
    { fecha: '19/7', unidades: 1250 },
    { fecha: '20/7', unidades: 1380 },
    { fecha: '21/7', unidades: 980 },
    { fecha: '22/7', unidades: 1650 },
    { fecha: '23/7', unidades: 1820 },
    { fecha: '24/7', unidades: 1450 },
    { fecha: '25/7', unidades: 1320 },
    { fecha: '26/7', unidades: 1580 },
    { fecha: '27/7', unidades: 1750 },
    { fecha: '28/7', unidades: 1280 },
    { fecha: '29/7', unidades: 1420 },
    { fecha: '30/7', unidades: 1680 },
    { fecha: '31/7', unidades: 1180 },
    { fecha: '1/8', unidades: 1350 },
    { fecha: '2/8', unidades: 1620 },
    { fecha: '3/8', unidades: 1480 },
    { fecha: '4/8', unidades: 1260 },
    { fecha: '5/8', unidades: 1540 },
    { fecha: '6/8', unidades: 1780 },
    { fecha: '7/8', unidades: 1290 },
    { fecha: '8/8', unidades: 1460 },
    { fecha: '9/8', unidades: 1690 },
    { fecha: '10/8', unidades: 1210 },
    { fecha: '11/8', unidades: 1390 },
    { fecha: '12/8', unidades: 1640 },
    { fecha: '13/8', unidades: 1510 },
    { fecha: '14/8', unidades: 1280 },
    { fecha: '15/8', unidades: 1560 },
    { fecha: '16/8', unidades: 1810 },
    { fecha: '17/8', unidades: 1310 },
    { fecha: '18/8', unidades: 1490 },
    { fecha: '19/8', unidades: 1720 },
    { fecha: '20/8', unidades: 1240 },
    { fecha: '21/8', unidades: 1410 },
    { fecha: '22/8', unidades: 1670 },
    { fecha: '23/8', unidades: 1530 },
    { fecha: '24/8', unidades: 1270 },
    { fecha: '25/8', unidades: 1550 },
    { fecha: '26/8', unidades: 1790 },
    { fecha: '27/8', unidades: 1300 }
  ];

  // Datos simulados para variación porcentual
  const datosVariacion = [
    { fecha: '19/7', variacion: 2.5 },
    { fecha: '20/7', variacion: 7.0 },
    { fecha: '21/7', variacion: -3.2 },
    { fecha: '22/7', variacion: 15.8 },
    { fecha: '23/7', variacion: 29.0 },
    { fecha: '24/7', variacion: 12.3 },
    { fecha: '25/7', variacion: -5.7 },
    { fecha: '26/7', variacion: 18.9 },
    { fecha: '27/7', variacion: 25.4 },
    { fecha: '28/7', variacion: 8.1 },
    { fecha: '29/7', variacion: -2.4 },
    { fecha: '30/7', variacion: 22.7 },
    { fecha: '31/7', variacion: 11.5 },
    { fecha: '1/8', variacion: 16.8 },
    { fecha: '2/8', variacion: -8.9 },
    { fecha: '3/8', variacion: 19.2 },
    { fecha: '4/8', variacion: 6.7 },
    { fecha: '5/8', variacion: 24.1 },
    { fecha: '6/8', variacion: 13.6 },
    { fecha: '7/8', variacion: -1.3 },
    { fecha: '8/8', variacion: 28.5 },
    { fecha: '9/8', variacion: 9.8 },
    { fecha: '10/8', variacion: 17.4 },
    { fecha: '11/8', variacion: -4.6 },
    { fecha: '12/8', variacion: 21.9 },
    { fecha: '13/8', variacion: 14.2 },
    { fecha: '14/8', variacion: 3.1 },
    { fecha: '15/8', variacion: 26.8 },
    { fecha: '16/8', variacion: 10.7 },
    { fecha: '17/8', variacion: -6.2 },
    { fecha: '18/8', variacion: 18.3 },
    { fecha: '19/8', variacion: 7.9 },
    { fecha: '20/8', variacion: 23.6 },
    { fecha: '21/8', variacion: 12.8 },
    { fecha: '22/8', variacion: -2.1 },
    { fecha: '23/8', variacion: 20.4 },
    { fecha: '24/8', variacion: 15.7 },
    { fecha: '25/8', variacion: 5.3 },
    { fecha: '26/8', variacion: 27.2 },
    { fecha: '27/8', variacion: 11.9 }
  ];

  // Datos simulados para distribución por día de la semana
  const datosDistribucionPorDia = [
    { dia: 'Lun', ventas: 95000, unidades: 1420 },
    { dia: 'Mar', ventas: 87000, unidades: 1280 },
    { dia: 'Mié', ventas: 92000, unidades: 1350 },
    { dia: 'Jue', ventas: 105000, unidades: 1580 },
    { dia: 'Vie', ventas: 110000, unidades: 1650 },
    { dia: 'Sáb', ventas: 148000, unidades: 2200 },
    { dia: 'Dom', ventas: 90000, unidades: 1320 }
  ];

  // Datos simulados para distribución horaria
  const datosDistribucionHoraria = [
    { hora: '00:00', ventas: 15000, unidades: 75 },
    { hora: '01:00', ventas: 12000, unidades: 60 },
    { hora: '02:00', ventas: 8000, unidades: 40 },
    { hora: '03:00', ventas: 5000, unidades: 25 },
    { hora: '04:00', ventas: 3000, unidades: 15 },
    { hora: '05:00', ventas: 2000, unidades: 10 },
    { hora: '06:00', ventas: 5000, unidades: 25 },
    { hora: '07:00', ventas: 15000, unidades: 75 },
    { hora: '08:00', ventas: 35000, unidades: 175 },
    { hora: '09:00', ventas: 45000, unidades: 225 },
    { hora: '10:00', ventas: 55000, unidades: 275 },
    { hora: '11:00', ventas: 65000, unidades: 325 },
    { hora: '12:00', ventas: 75000, unidades: 375 },
    { hora: '13:00', ventas: 70000, unidades: 350 },
    { hora: '14:00', ventas: 60000, unidades: 300 },
    { hora: '15:00', ventas: 55000, unidades: 275 },
    { hora: '16:00', ventas: 65000, unidades: 325 },
    { hora: '17:00', ventas: 80000, unidades: 400 },
    { hora: '18:00', ventas: 90000, unidades: 450 },
    { hora: '19:00', ventas: 85000, unidades: 425 },
    { hora: '20:00', ventas: 70000, unidades: 350 },
    { hora: '21:00', ventas: 50000, unidades: 250 },
    { hora: '22:00', ventas: 30000, unidades: 150 },
    { hora: '23:00', ventas: 20000, unidades: 100 }
  ];

  // Datos simulados para dispersión
  const datosDispersion = [
    { fecha: '19/7', ventas: 85000, ticketPromedio: 1200 },
    { fecha: '20/7', ventas: 92000, ticketPromedio: 1350 },
    { fecha: '21/7', ventas: 78000, ticketPromedio: 1100 },
    { fecha: '22/7', ventas: 105000, ticketPromedio: 1550 },
    { fecha: '23/7', ventas: 118000, ticketPromedio: 1650 },
    { fecha: '24/7', ventas: 95000, ticketPromedio: 1400 },
    { fecha: '25/7', ventas: 87000, ticketPromedio: 1250 },
    { fecha: '26/7', ventas: 102000, ticketPromedio: 1500 },
    { fecha: '27/7', ventas: 115000, ticketPromedio: 1600 },
    { fecha: '28/7', ventas: 89000, ticketPromedio: 1300 },
    { fecha: '29/7', ventas: 98000, ticketPromedio: 1450 },
    { fecha: '30/7', ventas: 110000, ticketPromedio: 1580 },
    { fecha: '31/7', ventas: 85000, ticketPromedio: 1200 },
    { fecha: '1/8', ventas: 92000, ticketPromedio: 1350 },
    { fecha: '2/8', ventas: 108000, ticketPromedio: 1520 },
    { fecha: '3/8', ventas: 95000, ticketPromedio: 1400 },
    { fecha: '4/8', ventas: 87000, ticketPromedio: 1250 },
    { fecha: '5/8', ventas: 102000, ticketPromedio: 1500 },
    { fecha: '6/8', ventas: 115000, ticketPromedio: 1600 },
    { fecha: '7/8', ventas: 89000, ticketPromedio: 1300 },
    { fecha: '8/8', ventas: 98000, ticketPromedio: 1450 },
    { fecha: '9/8', ventas: 110000, ticketPromedio: 1580 },
    { fecha: '10/8', ventas: 85000, ticketPromedio: 1200 },
    { fecha: '11/8', ventas: 92000, ticketPromedio: 1350 },
    { fecha: '12/8', ventas: 108000, ticketPromedio: 1520 },
    { fecha: '13/8', ventas: 95000, ticketPromedio: 1400 },
    { fecha: '14/8', ventas: 87000, ticketPromedio: 1250 },
    { fecha: '15/8', ventas: 102000, ticketPromedio: 1500 },
    { fecha: '16/8', ventas: 115000, ticketPromedio: 1600 },
    { fecha: '17/8', ventas: 89000, ticketPromedio: 1300 },
    { fecha: '18/8', ventas: 98000, ticketPromedio: 1450 },
    { fecha: '19/8', ventas: 110000, ticketPromedio: 1580 },
    { fecha: '20/8', ventas: 85000, ticketPromedio: 1200 },
    { fecha: '21/8', ventas: 92000, ticketPromedio: 1350 },
    { fecha: '22/8', ventas: 108000, ticketPromedio: 1520 },
    { fecha: '23/8', ventas: 95000, ticketPromedio: 1400 },
    { fecha: '24/8', ventas: 87000, ticketPromedio: 1250 },
    { fecha: '25/8', ventas: 102000, ticketPromedio: 1500 },
    { fecha: '26/8', ventas: 115000, ticketPromedio: 1600 },
    { fecha: '27/8', ventas: 89000, ticketPromedio: 1300 }
  ];


 // Datos simulados para el mapa de calor
 const datosMapaCalor = [
  // Lunes
  { dia: 'Lun', hora: '00:00', ventas: 15000, unidades: 75 },
  { dia: 'Lun', hora: '01:00', ventas: 12000, unidades: 60 },
  { dia: 'Lun', hora: '02:00', ventas: 8000, unidades: 40 },
  { dia: 'Lun', hora: '03:00', ventas: 5000, unidades: 25 },
  { dia: 'Lun', hora: '04:00', ventas: 3000, unidades: 15 },
  { dia: 'Lun', hora: '05:00', ventas: 2000, unidades: 10 },
  { dia: 'Lun', hora: '06:00', ventas: 5000, unidades: 25 },
  { dia: 'Lun', hora: '07:00', ventas: 15000, unidades: 75 },
  { dia: 'Lun', hora: '08:00', ventas: 25000, unidades: 125 },
  { dia: 'Lun', hora: '09:00', ventas: 35000, unidades: 175 },
  { dia: 'Lun', hora: '10:00', ventas: 40000, unidades: 200 },
  { dia: 'Lun', hora: '11:00', ventas: 45000, unidades: 225 },
  { dia: 'Lun', hora: '12:00', ventas: 60000, unidades: 300 },
  { dia: 'Lun', hora: '13:00', ventas: 55000, unidades: 275 },
  { dia: 'Lun', hora: '14:00', ventas: 35000, unidades: 175 },
  { dia: 'Lun', hora: '15:00', ventas: 50000, unidades: 250 },
  { dia: 'Lun', hora: '16:00', ventas: 65000, unidades: 325 },
  { dia: 'Lun', hora: '17:00', ventas: 70000, unidades: 350 },
  { dia: 'Lun', hora: '18:00', ventas: 75000, unidades: 375 },
  { dia: 'Lun', hora: '19:00', ventas: 80000, unidades: 400 },
  { dia: 'Lun', hora: '20:00', ventas: 70000, unidades: 350 },
  { dia: 'Lun', hora: '21:00', ventas: 55000, unidades: 275 },
  { dia: 'Lun', hora: '22:00', ventas: 40000, unidades: 200 },
  { dia: 'Lun', hora: '23:00', ventas: 25000, unidades: 125 },
  
  // Martes
  { dia: 'Mar', hora: '00:00', ventas: 12000, unidades: 60 },
  { dia: 'Mar', hora: '01:00', ventas: 10000, unidades: 50 },
  { dia: 'Mar', hora: '02:00', ventas: 7000, unidades: 35 },
  { dia: 'Mar', hora: '03:00', ventas: 4000, unidades: 20 },
  { dia: 'Mar', hora: '04:00', ventas: 2500, unidades: 12 },
  { dia: 'Mar', hora: '05:00', ventas: 1500, unidades: 8 },
  { dia: 'Mar', hora: '06:00', ventas: 4000, unidades: 20 },
  { dia: 'Mar', hora: '07:00', ventas: 12000, unidades: 60 },
  { dia: 'Mar', hora: '08:00', ventas: 22000, unidades: 110 },
  { dia: 'Mar', hora: '09:00', ventas: 32000, unidades: 160 },
  { dia: 'Mar', hora: '10:00', ventas: 38000, unidades: 190 },
  { dia: 'Mar', hora: '11:00', ventas: 42000, unidades: 210 },
  { dia: 'Mar', hora: '12:00', ventas: 58000, unidades: 290 },
  { dia: 'Mar', hora: '13:00', ventas: 52000, unidades: 260 },
  { dia: 'Mar', hora: '14:00', ventas: 32000, unidades: 160 },
  { dia: 'Mar', hora: '15:00', ventas: 48000, unidades: 240 },
  { dia: 'Mar', hora: '16:00', ventas: 62000, unidades: 310 },
  { dia: 'Mar', hora: '17:00', ventas: 68000, unidades: 340 },
  { dia: 'Mar', hora: '18:00', ventas: 72000, unidades: 360 },
  { dia: 'Mar', hora: '19:00', ventas: 78000, unidades: 390 },
  { dia: 'Mar', hora: '20:00', ventas: 68000, unidades: 340 },
  { dia: 'Mar', hora: '21:00', ventas: 52000, unidades: 260 },
  { dia: 'Mar', hora: '22:00', ventas: 38000, unidades: 190 },
  { dia: 'Mar', hora: '23:00', ventas: 22000, unidades: 110 },
  
  // Miércoles
  { dia: 'Mie', hora: '00:00', ventas: 10000, unidades: 50 },
  { dia: 'Mie', hora: '01:00', ventas: 8000, unidades: 40 },
  { dia: 'Mie', hora: '02:00', ventas: 6000, unidades: 30 },
  { dia: 'Mie', hora: '03:00', ventas: 3500, unidades: 18 },
  { dia: 'Mie', hora: '04:00', ventas: 2000, unidades: 10 },
  { dia: 'Mie', hora: '05:00', ventas: 1200, unidades: 6 },
  { dia: 'Mie', hora: '06:00', ventas: 3500, unidades: 18 },
  { dia: 'Mie', hora: '07:00', ventas: 10000, unidades: 50 },
  { dia: 'Mie', hora: '08:00', ventas: 20000, unidades: 100 },
  { dia: 'Mie', hora: '09:00', ventas: 30000, unidades: 150 },
  { dia: 'Mie', hora: '10:00', ventas: 35000, unidades: 175 },
  { dia: 'Mie', hora: '11:00', ventas: 40000, unidades: 200 },
  { dia: 'Mie', hora: '12:00', ventas: 55000, unidades: 275 },
  { dia: 'Mie', hora: '13:00', ventas: 50000, unidades: 250 },
  { dia: 'Mie', hora: '14:00', ventas: 30000, unidades: 150 },
  { dia: 'Mie', hora: '15:00', ventas: 45000, unidades: 225 },
  { dia: 'Mie', hora: '16:00', ventas: 60000, unidades: 300 },
  { dia: 'Mie', hora: '17:00', ventas: 65000, unidades: 325 },
  { dia: 'Mie', hora: '18:00', ventas: 70000, unidades: 350 },
  { dia: 'Mie', hora: '19:00', ventas: 75000, unidades: 375 },
  { dia: 'Mie', hora: '20:00', ventas: 65000, unidades: 325 },
  { dia: 'Mie', hora: '21:00', ventas: 50000, unidades: 250 },
  { dia: 'Mie', hora: '22:00', ventas: 35000, unidades: 175 },
  { dia: 'Mie', hora: '23:00', ventas: 20000, unidades: 100 },
  
  // Jueves
  { dia: 'Jue', hora: '00:00', ventas: 11000, unidades: 55 },
  { dia: 'Jue', hora: '01:00', ventas: 9000, unidades: 45 },
  { dia: 'Jue', hora: '02:00', ventas: 6500, unidades: 32 },
  { dia: 'Jue', hora: '03:00', ventas: 4000, unidades: 20 },
  { dia: 'Jue', hora: '04:00', ventas: 2500, unidades: 12 },
  { dia: 'Jue', hora: '05:00', ventas: 1500, unidades: 8 },
  { dia: 'Jue', hora: '06:00', ventas: 4000, unidades: 20 },
  { dia: 'Jue', hora: '07:00', ventas: 11000, unidades: 55 },
  { dia: 'Jue', hora: '08:00', ventas: 21000, unidades: 105 },
  { dia: 'Jue', hora: '09:00', ventas: 31000, unidades: 155 },
  { dia: 'Jue', hora: '10:00', ventas: 36000, unidades: 180 },
  { dia: 'Jue', hora: '11:00', ventas: 41000, unidades: 205 },
  { dia: 'Jue', hora: '12:00', ventas: 57000, unidades: 285 },
  { dia: 'Jue', hora: '13:00', ventas: 51000, unidades: 255 },
  { dia: 'Jue', hora: '14:00', ventas: 31000, unidades: 155 },
  { dia: 'Jue', hora: '15:00', ventas: 47000, unidades: 235 },
  { dia: 'Jue', hora: '16:00', ventas: 61000, unidades: 305 },
  { dia: 'Jue', hora: '17:00', ventas: 67000, unidades: 335 },
  { dia: 'Jue', hora: '18:00', ventas: 71000, unidades: 355 },
  { dia: 'Jue', hora: '19:00', ventas: 77000, unidades: 385 },
  { dia: 'Jue', hora: '20:00', ventas: 67000, unidades: 335 },
  { dia: 'Jue', hora: '21:00', ventas: 51000, unidades: 255 },
  { dia: 'Jue', hora: '22:00', ventas: 37000, unidades: 185 },
  { dia: 'Jue', hora: '23:00', ventas: 21000, unidades: 105 },
  
  // Viernes
  { dia: 'Vie', hora: '00:00', ventas: 13000, unidades: 65 },
  { dia: 'Vie', hora: '01:00', ventas: 11000, unidades: 55 },
  { dia: 'Vie', hora: '02:00', ventas: 8000, unidades: 40 },
  { dia: 'Vie', hora: '03:00', ventas: 5000, unidades: 25 },
  { dia: 'Vie', hora: '04:00', ventas: 3000, unidades: 15 },
  { dia: 'Vie', hora: '05:00', ventas: 2000, unidades: 10 },
  { dia: 'Vie', hora: '06:00', ventas: 5000, unidades: 25 },
  { dia: 'Vie', hora: '07:00', ventas: 13000, unidades: 65 },
  { dia: 'Vie', hora: '08:00', ventas: 23000, unidades: 115 },
  { dia: 'Vie', hora: '09:00', ventas: 33000, unidades: 165 },
  { dia: 'Vie', hora: '10:00', ventas: 38000, unidades: 190 },
  { dia: 'Vie', hora: '11:00', ventas: 43000, unidades: 215 },
  { dia: 'Vie', hora: '12:00', ventas: 62000, unidades: 310 },
  { dia: 'Vie', hora: '13:00', ventas: 56000, unidades: 280 },
  { dia: 'Vie', hora: '14:00', ventas: 36000, unidades: 180 },
  { dia: 'Vie', hora: '15:00', ventas: 52000, unidades: 260 },
  { dia: 'Vie', hora: '16:00', ventas: 68000, unidades: 340 },
  { dia: 'Vie', hora: '17:00', ventas: 73000, unidades: 365 },
  { dia: 'Vie', hora: '18:00', ventas: 78000, unidades: 390 },
  { dia: 'Vie', hora: '19:00', ventas: 83000, unidades: 415 },
  { dia: 'Vie', hora: '20:00', ventas: 72000, unidades: 360 },
  { dia: 'Vie', hora: '21:00', ventas: 57000, unidades: 285 },
  { dia: 'Vie', hora: '22:00', ventas: 42000, unidades: 210 },
  { dia: 'Vie', hora: '23:00', ventas: 27000, unidades: 135 },
  
  // Sábado
  { dia: 'Sab', hora: '00:00', ventas: 16000, unidades: 80 },
  { dia: 'Sab', hora: '01:00', ventas: 14000, unidades: 70 },
  { dia: 'Sab', hora: '02:00', ventas: 11000, unidades: 55 },
  { dia: 'Sab', hora: '03:00', ventas: 8000, unidades: 40 },
  { dia: 'Sab', hora: '04:00', ventas: 6000, unidades: 30 },
  { dia: 'Sab', hora: '05:00', ventas: 4000, unidades: 20 },
  { dia: 'Sab', hora: '06:00', ventas: 7000, unidades: 35 },
  { dia: 'Sab', hora: '07:00', ventas: 16000, unidades: 80 },
  { dia: 'Sab', hora: '08:00', ventas: 26000, unidades: 130 },
  { dia: 'Sab', hora: '09:00', ventas: 36000, unidades: 180 },
  { dia: 'Sab', hora: '10:00', ventas: 42000, unidades: 210 },
  { dia: 'Sab', hora: '11:00', ventas: 48000, unidades: 240 },
  { dia: 'Sab', hora: '12:00', ventas: 70000, unidades: 350 },
  { dia: 'Sab', hora: '13:00', ventas: 65000, unidades: 325 },
  { dia: 'Sab', hora: '14:00', ventas: 45000, unidades: 225 },
  { dia: 'Sab', hora: '15:00', ventas: 60000, unidades: 300 },
  { dia: 'Sab', hora: '16:00', ventas: 75000, unidades: 375 },
  { dia: 'Sab', hora: '17:00', ventas: 80000, unidades: 400 },
  { dia: 'Sab', hora: '18:00', ventas: 85000, unidades: 425 },
  { dia: 'Sab', hora: '19:00', ventas: 90000, unidades: 450 },
  { dia: 'Sab', hora: '20:00', ventas: 78000, unidades: 390 },
  { dia: 'Sab', hora: '21:00', ventas: 62000, unidades: 310 },
  { dia: 'Sab', hora: '22:00', ventas: 47000, unidades: 235 },
  { dia: 'Sab', hora: '23:00', ventas: 32000, unidades: 160 },
  
  // Domingo
  { dia: 'Dom', hora: '00:00', ventas: 14000, unidades: 70 },
  { dia: 'Dom', hora: '01:00', ventas: 12000, unidades: 60 },
  { dia: 'Dom', hora: '02:00', ventas: 9000, unidades: 45 },
  { dia: 'Dom', hora: '03:00', ventas: 6000, unidades: 30 },
  { dia: 'Dom', hora: '04:00', ventas: 4000, unidades: 20 },
  { dia: 'Dom', hora: '05:00', ventas: 2500, unidades: 12 },
  { dia: 'Dom', hora: '06:00', ventas: 6000, unidades: 30 },
  { dia: 'Dom', hora: '07:00', ventas: 14000, unidades: 70 },
  { dia: 'Dom', hora: '08:00', ventas: 24000, unidades: 120 },
  { dia: 'Dom', hora: '09:00', ventas: 34000, unidades: 170 },
  { dia: 'Dom', hora: '10:00', ventas: 40000, unidades: 200 },
  { dia: 'Dom', hora: '11:00', ventas: 46000, unidades: 230 },
  { dia: 'Dom', hora: '12:00', ventas: 68000, unidades: 340 },
  { dia: 'Dom', hora: '13:00', ventas: 62000, unidades: 310 },
  { dia: 'Dom', hora: '14:00', ventas: 42000, unidades: 210 },
  { dia: 'Dom', hora: '15:00', ventas: 58000, unidades: 290 },
  { dia: 'Dom', hora: '16:00', ventas: 72000, unidades: 360 },
  { dia: 'Dom', hora: '17:00', ventas: 77000, unidades: 385 },
  { dia: 'Dom', hora: '18:00', ventas: 82000, unidades: 410 },
  { dia: 'Dom', hora: '19:00', ventas: 87000, unidades: 435 },
  { dia: 'Dom', hora: '20:00', ventas: 75000, unidades: 375 },
  { dia: 'Dom', hora: '21:00', ventas: 59000, unidades: 295 },
  { dia: 'Dom', hora: '22:00', ventas: 44000, unidades: 220 },
  { dia: 'Dom', hora: '23:00', ventas: 29000, unidades: 145 }
];

  // Configuración de métricas para el gráfico
  const opcionesMetricas = [
    { value: 'ventas', label: 'Ventas totales ($)' },
    { value: 'unidades', label: 'Unidades' },
    { value: 'ticket-promedio', label: 'Ticket promedio' }
  ];

  // Opciones para el gráfico de variación porcentual
  const opcionesAgrupacion = [
    { value: 'dia', label: 'Día' },
    { value: 'mes', label: 'Mes' },
    { value: 'año', label: 'Año' }
  ];

  const opcionesComparacion = [
    { value: 'vs-anio-anterior', label: 'vs Año anterior' },
    { value: 'vs-mes-anterior', label: 'vs Mes anterior' },
    { value: 'vs-año-anterior', label: 'vs Año anterior' }
  ];

  // Función para obtener datos de distribución según la métrica seleccionada
  const obtenerDatosDistribucion = (metrica) => {
    if (metrica === 'ticket-promedio') {
      return datosDistribucionPorDia.map(item => ({
        dia: item.dia,
        ventas: Math.round(item.ventas / item.unidades)
      }));
    }
    return datosDistribucionPorDia;
  };

  // Función para obtener datos de mapa de calor según la métrica seleccionada
  const obtenerDatosMapaCalor = (metrica) => {
    if (metrica === 'unidades') {
      return datosMapaCalor.map(item => ({
        ...item,
        ventas: item.unidades
      }));
    } else if (metrica === 'ticket-promedio') {
      return datosMapaCalor.map(item => ({
        ...item,
        ventas: Math.round(item.ventas / item.unidades)
      }));
    }
    return datosMapaCalor;
  };

  // Función para obtener datos de distribución horaria según la métrica seleccionada
  const obtenerDatosDistribucionHoraria = (metrica) => {
    if (metrica === 'ticket-promedio') {
      return datosDistribucionHoraria.map(item => ({
        hora: item.hora,
        ventas: Math.round(item.ventas / item.unidades)
      }));
    }
    return datosDistribucionHoraria;
  };

  // Función para obtener datos de dispersión según la métrica seleccionada
  const obtenerDatosDispersion = (metrica) => {
    if (metrica === 'unidades') {
      return datosDispersion.map(item => ({
        fecha: item.fecha,
        ventas: item.unidades,
        ticketPromedio: Math.round(item.ventas / item.unidades)
      }));
    }
    return datosDispersion;
  };

  // Función para obtener datos según la métrica seleccionada
  const obtenerDatosPorMetrica = (metrica) => {
    switch (metrica) {
      case 'ventas':
        return datosVentas;
      case 'unidades':
        return datosUnidades;
      case 'ticket-promedio':
        return datosVentas.map((item, index) => ({
          fecha: item.fecha,
          ventas: Math.round(item.ventas / datosUnidades[index].unidades)
        }));
      default:
        return datosVentas;
    }
  };

  // Estructura de datos para las métricas generales
  const metricasGenerales = {
    titulo: "Métricas Generales",
    subsecciones: [
      {
        titulo: "Ventas Totales",
        metricas: [
          { nombre: "Ventas totales ($)", valor: 2450000, formato: "moneda" },
          { nombre: "Unidades vendidas", valor: 1250, formato: "numero" }
        ]
      },
      {
        titulo: "Variación Interanual",
        metricas: [
          { nombre: "Variación vs año anterior", valor: 267500, formato: "moneda", color: "#10b981" },
          { nombre: "Variación full year", valor: 187500, formato: "moneda", color: "#10b981" },
          { nombre: "Variación vs mes anterior", valor: 118750, formato: "moneda", color: "#10b981" }
        ]
      },
      {
        titulo: "Variación Porcentual",
        metricas: [
          { nombre: "% vs año anterior", valor: 15.2, formato: "porcentaje", color: "#10b981" },
          { nombre: "% full year", valor: 10.8, formato: "porcentaje", color: "#10b981" },
          { nombre: "% vs mes anterior", valor: 7.1, formato: "porcentaje", color: "#10b981" }
        ]
      },
      {
        titulo: "Promedio Diario",
        metricas: [
          { nombre: "Promedio ventas diarias ($)", valor: 81667, formato: "moneda" }
        ]
      }
    ]
  };

  return (
    <div className="min-h-screen bg-gray-50 relative">
      <ExpandableSidebar 
        title="Ayuda educativa - Análisis de Ventas" 
        iconPosition="left"
      >
        <div>
          {/* Propósito de la página */}
          <div className="bg-blue-50 rounded-lg p-4">
            <h3 className="text-sm font-semibold text-blue-900 mb-2">📊 Propósito de esta página</h3>
            <p className="text-blue-800 text-xs leading-relaxed break-words">
              Esta página te permite analizar el rendimiento de ventas desde múltiples perspectivas temporales y métricas. 
              Podrás identificar tendencias, patrones y oportunidades de mejora en tu negocio.
            </p>
          </div>

          {/* Gráfico de Evolución */}
          <div className="bg-green-50 rounded-lg p-4">
            <h3 className="text-sm font-semibold text-green-900 mb-2">📈 Gráfico de Evolución</h3>
            <p className="text-green-800 text-xs leading-relaxed break-words mb-2">
              <strong>Qué muestra:</strong> La tendencia de ventas a lo largo del tiempo.
            </p>
            <p className="text-green-800 text-xs leading-relaxed break-words mb-2">
              <strong>Implicancias:</strong> Te ayuda a identificar si las ventas están creciendo, decreciendo o se mantienen estables. 
              Detecta estacionalidad y patrones cíclicos.
            </p>
            <p className="text-green-800 text-xs leading-relaxed break-words">
              <strong>Acciones:</strong> Usa los filtros de agrupación (Día/Mes/Año) para analizar diferentes períodos. 
              Cambia entre métricas (Ventas, Unidades, Ticket promedio) según tu análisis.
            </p>
          </div>

          {/* Gráfico de Variación Porcentual */}
          <div className="bg-purple-50 rounded-lg p-4">
            <h3 className="text-sm font-semibold text-purple-900 mb-2">📊 Gráfico de Variación %</h3>
            <p className="text-purple-800 text-xs leading-relaxed break-words mb-2">
              <strong>Qué muestra:</strong> El cambio porcentual de ventas comparado con períodos anteriores.
            </p>
            <p className="text-purple-800 text-xs leading-relaxed break-words mb-2">
              <strong>Implicancias:</strong> Identifica si estás mejorando o empeorando respecto a períodos pasados. 
              Valores positivos (verdes) indican crecimiento, negativos (rojos) indican disminución.
            </p>
            <p className="text-purple-800 text-xs leading-relaxed break-words">
              <strong>Acciones:</strong> Analiza comparaciones vs Año anterior, Mes anterior o Año anterior según tu necesidad. 
              Usa agrupaciones temporales para diferentes niveles de detalle.
            </p>
          </div>

          {/* Gráfico de Distribución por Día */}
          <div className="bg-orange-50 rounded-lg p-4">
            <h3 className="text-sm font-semibold text-orange-900 mb-2">📅 Distribución por Día</h3>
            <p className="text-orange-800 text-xs leading-relaxed break-words mb-2">
              <strong>Qué muestra:</strong> Qué días de la semana generan más ventas.
            </p>
            <p className="text-orange-800 text-xs leading-relaxed break-words mb-2">
              <strong>Implicancias:</strong> Te ayuda a planificar recursos, personal y promociones según los días más rentables. 
              Identifica si hay días problemáticos que requieren atención.
            </p>
            <p className="text-orange-800 text-xs leading-relaxed break-words">
              <strong>Acciones:</strong> Optimiza horarios de personal y promociones para días de mayor demanda. 
              Investiga causas de bajo rendimiento en días específicos.
            </p>
          </div>

          {/* Gráfico de Distribución Horaria */}
          <div className="bg-teal-50 rounded-lg p-4">
            <h3 className="text-sm font-semibold text-teal-900 mb-2">🕐 Distribución Horaria</h3>
            <p className="text-teal-800 text-xs leading-relaxed break-words mb-2">
              <strong>Qué muestra:</strong> En qué horas del día se concentran las ventas.
            </p>
            <p className="text-teal-800 text-xs leading-relaxed break-words mb-2">
              <strong>Implicancias:</strong> Permite optimizar horarios de atención, personal y promociones. 
              Identifica picos y valles de demanda durante el día.
            </p>
            <p className="text-teal-800 text-xs leading-relaxed break-words">
              <strong>Acciones:</strong> Ajusta horarios de personal según demanda. 
              Programa promociones en horas de menor actividad para estimular ventas.
            </p>
          </div>

          {/* Gráfico de Dispersión */}
          <div className="bg-pink-50 rounded-lg p-4">
            <h3 className="text-sm font-semibold text-pink-900 mb-2">🎯 Gráfico de Dispersión</h3>
            <p className="text-pink-800 text-xs leading-relaxed break-words mb-2">
              <strong>Qué muestra:</strong> La relación entre ventas totales y ticket promedio por día.
            </p>
            <p className="text-pink-800 text-xs leading-relaxed break-words mb-2">
              <strong>Implicancias:</strong> Te ayuda a entender si las ventas altas se deben a muchos clientes con tickets bajos 
              o pocos clientes con tickets altos.
            </p>
            <p className="text-pink-800 text-xs leading-relaxed break-words">
              <strong>Acciones:</strong> Si hay días con ventas altas pero tickets bajos, enfócate en aumentar el valor promedio. 
              Si hay días con tickets altos pero pocas ventas, trabaja en atraer más clientes.
            </p>
          </div>

          {/* Mapa de Calor */}
          <div className="bg-red-50 rounded-lg p-4">
            <h3 className="text-sm font-semibold text-red-900 mb-2">🔥 Mapa de Calor</h3>
            <p className="text-red-800 text-xs leading-relaxed break-words mb-2">
              <strong>Qué muestra:</strong> Intensidad de ventas combinando día de la semana y hora del día.
            </p>
            <p className="text-red-800 text-xs leading-relaxed break-words mb-2">
              <strong>Implicancias:</strong> Identifica los momentos exactos de mayor y menor actividad. 
              Útil para planificación detallada de recursos y estrategias.
            </p>
            <p className="text-red-800 text-xs leading-relaxed break-words">
              <strong>Acciones:</strong> Planifica promociones específicas para momentos de baja actividad. 
              Asegura recursos suficientes en períodos de alta demanda.
            </p>
          </div>

          {/* Tabla de Comparación */}
          <div className="bg-indigo-50 rounded-lg p-4">
            <h3 className="text-sm font-semibold text-indigo-900 mb-2">📋 Tabla de Comparación</h3>
            <p className="text-indigo-800 text-xs leading-relaxed break-words mb-2">
              <strong>Objetivo:</strong> Comparar rendimiento actual vs períodos anteriores de manera detallada.
            </p>
            <p className="text-indigo-800 text-xs leading-relaxed break-words mb-2">
              <strong>Criterio "Fecha a fecha":</strong> Compara el mismo día de diferentes períodos (ej: 15 de agosto 2024 vs 15 de agosto 2023).
            </p>
            <p className="text-indigo-800 text-xs leading-relaxed break-words">
              <strong>Criterio "Día a día":</strong> Compara días consecutivos para identificar tendencias inmediatas y cambios rápidos en el negocio.
            </p>
          </div>
        </div>
      </ExpandableSidebar>

      <div className={`
        transition-all duration-300 ease-in-out
        ${isSidebarOpen ? 'mr-[30%]' : 'mr-0'}
        py-4
      `}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="mb-5">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-green-800 via-green-700 to-green-600 bg-clip-text text-transparent mb-2">
              Análisis de Ventas
            </h1>
            <p className="text-sm text-gray-600">Análisis completo de métricas y tendencias de ventas por dimensión</p>
          </div>

          {/* Filtro de fechas */}
          <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-5 mb-5">
            <div className="flex items-center justify-between">
              <h3 className="text-base font-semibold text-gray-800">Filtros de Fecha</h3>
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <label className="text-xs font-medium text-gray-700">Fecha inicio:</label>
                  <input type="date" className="px-3 py-2 border border-gray-300 rounded-lg text-xs" defaultValue="2025-07-28" />
                </div>
                <div className="flex items-center space-x-2">
                  <label className="text-xs font-medium text-gray-700">Fecha fin:</label>
                  <input type="date" className="px-3 py-2 border border-gray-300 rounded-lg text-xs" defaultValue="2025-08-28" />
                </div>
              </div>
            </div>
          </div>

          {/* Layout principal */}
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-5">
            {/* Métricas Generales */}
            <div className="xl:col-span-1">
              <MetricasGenerales 
                {...metricasGenerales}
                colorTema="#10b981"
                columnas={1}
              />
            </div>

            {/* Gráficos */}
            <div className="xl:col-span-2">
              <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-5 min-h-[550px]">
                <h3 className="text-lg font-bold mb-5">Visualizaciones</h3>
                
                {/* Pestañas */}
                <div className="flex space-x-1 border-b mb-4">
                  <button 
                    onClick={() => setActiveTab('evolucion')}
                    className={`px-4 py-2 text-xs font-medium rounded-t-lg ${
                      activeTab === 'evolucion' ? 'text-blue-600 border-b-2 border-blue-600 bg-blue-50' : 'text-gray-500'
                    }`}
                  >
                    Evolución
                  </button>
                  <button 
                    onClick={() => setActiveTab('variacion')}
                    className={`px-4 py-2 text-xs font-medium rounded-t-lg ${
                      activeTab === 'variacion' ? 'text-blue-600 border-b-2 border-blue-600 bg-blue-50' : 'text-gray-500'
                    }`}
                  >
                    Variación %
                  </button>
                  <button 
                    onClick={() => setActiveTab('distribucion-dia')}
                    className={`px-4 py-2 text-xs font-medium rounded-t-lg ${
                      activeTab === 'distribucion-dia' ? 'text-blue-600 border-b-2 border-blue-600 bg-blue-50' : 'text-gray-500'
                    }`}
                  >
                    Distribución por día
                  </button>
                  <button 
                    onClick={() => setActiveTab('distribucion-hora')}
                    className={`px-4 py-2 text-xs font-medium rounded-t-lg ${
                      activeTab === 'distribucion-hora' ? 'text-blue-600 border-b-2 border-blue-600 bg-blue-50' : 'text-gray-500'
                    }`}
                  >
                    Distribución horaria
                  </button>
                  <button 
                    onClick={() => setActiveTab('dispersion')}
                    className={`px-4 py-2 text-xs font-medium rounded-t-lg ${
                      activeTab === 'dispersion' ? 'text-blue-600 border-b-2 border-blue-600 bg-blue-50' : 'text-gray-500'
                    }`}
                  >
                    Dispersión
                  </button>
                  <button 
                    onClick={() => setActiveTab('mapa-calor')}
                    className={`px-4 py-2 text-xs font-medium rounded-t-lg ${
                      activeTab === 'mapa-calor' ? 'text-blue-600 border-b-2 border-blue-600 bg-blue-50' : 'text-gray-500'
                    }`}
                  >
                    Mapa de Calor
                  </button>
                </div>

                {/* Contenido de gráficos */}
                <div className="bg-gray-50 rounded-lg p-5" style={{ height: '500px' }}>
                  {activeTab === 'evolucion' && (
                      <div>
                    <GraficoEvolucion 
                      datos={obtenerDatosPorMetrica(metrica)}
                      titulo="Evolución de Ventas"
                      color="#10b981"
                         altura="400px"
                      opcionesMetricas={opcionesMetricas}
                      campoDatos={metrica === 'unidades' ? 'unidades' : 'ventas'}
                      formatearEjeY={(value) => {
                        if (metrica === 'ventas') {
                          return `$${(value / 1000).toFixed(0)}k`;
                        } else if (metrica === 'unidades') {
                          return `${(value / 1000).toFixed(1)}k`;
                        } else {
                          return `$${value.toLocaleString()}`;
                        }
                      }}
                      formatearTooltip={(value) => {
                        if (metrica === 'ventas') {
                          return [`$${value.toLocaleString()}`, 'Ventas'];
                        } else if (metrica === 'unidades') {
                             return [`${value.toLocaleString()}`, 'Ticket Promedio'];
                        }
                      }}
                      onMetricaChange={setMetrica}
                    />
                     </div>
                  )}
                  
                  {activeTab === 'variacion' && (
                      <div>
                    <GraficoVariacionPorcentual 
                      datos={datosVariacion}
                      titulo="Evolución de Variación % de Ventas"
                      color="#3b82f6"
                         altura="400px"
                      opcionesAgrupacion={opcionesAgrupacion}
                      opcionesComparacion={opcionesComparacion}
                      campoDatos="variacion"
                      formatearEjeY={(value) => `${value}%`}
                      formatearTooltip={(value) => [`${value}%`, 'Variación']}
                      onAgrupacionChange={setAgrupacionVariacion}
                      onComparacionChange={setComparacionVariacion}
                    />
                     </div>
                  )}
                  
                  {activeTab === 'distribucion-dia' && (
                    <GraficoDistribucionPorDia 
                      datos={obtenerDatosDistribucion(metricaDistribucion)}
                      titulo="Distribución de Ventas por Día de la Semana"
                      color="#3b82f6"
                       altura="400px"
                      opcionesMetricas={opcionesMetricas}
                      campoDatos={metricaDistribucion === 'unidades' ? 'unidades' : 'ventas'}
                      campoEtiqueta="dia"
                      formatearEjeY={(value) => {
                        if (metricaDistribucion === 'ventas') {
                          return `$${(value / 1000).toFixed(0)}k`;
                        } else if (metricaDistribucion === 'unidades') {
                          return `${(value / 1000).toFixed(1)}k`;
                        } else {
                          return `$${value.toLocaleString()}`;
                        }
                      }}
                      formatearTooltip={(value, name) => {
                        if (metricaDistribucion === 'ventas') {
                          return [`$${value.toLocaleString()}`, 'Ventas'];
                        } else if (metricaDistribucion === 'unidades') {
                          return [`${value.toLocaleString()}`, 'Unidades'];
                        } else {
                          return [`$${value.toLocaleString()}`, 'Ticket Promedio'];
                        }
                      }}
                      onMetricaChange={setMetricaDistribucion}
                    />
                  )}
                  
                  {activeTab === 'distribucion-hora' && (
                    <GraficoDistribucionHoraria
                      datos={obtenerDatosDistribucionHoraria(metricaDistribucionHoraria)}
                      titulo="Distribución Horaria de Ventas"
                      color="#10b981"
                       altura="400px"
                      opcionesMetricas={opcionesMetricas}
                      campoDatos={metricaDistribucionHoraria === 'unidades' ? 'unidades' : 'ventas'}
                      campoEtiqueta="hora"
                      formatearEjeY={(value) => {
                        if (metricaDistribucionHoraria === 'ventas') {
                          return `$${(value / 1000).toFixed(0)}k`;
                        } else if (metricaDistribucionHoraria === 'unidades') {
                          return `${(value / 1000).toFixed(1)}k`;
                        } else {
                          return `$${value.toLocaleString()}`;
                        }
                      }}
                      formatearTooltip={(value, name) => {
                        if (metricaDistribucionHoraria === 'ventas') {
                          return [`$${value.toLocaleString()}`, 'Ventas'];
                        } else if (metricaDistribucionHoraria === 'unidades') {
                          return [`${value.toLocaleString()}`, 'Unidades'];
                        } else {
                          return [`$${value.toLocaleString()}`, 'Ticket Promedio'];
                        }
                      }}
                      onMetricaChange={setMetricaDistribucionHoraria}
                    />
                  )}
                  

                  
                  {activeTab === 'dispersion' && (
                    <GraficoDispersion
                      datos={obtenerDatosDispersion(metricaDispersion)}
                      titulo="Dispersión: Ventas vs Ticket Promedio"
                      color="#ec4899"
                       altura="400px"
                      opcionesMetricas={opcionesMetricas}
                      campoX={metricaDispersion === 'unidades' ? 'ventas' : 'ventas'}
                      campoY="ticketPromedio"
                      formatearEjeX={(value) => {
                        if (metricaDispersion === 'ventas') {
                          return `$${(value / 1000).toFixed(0)}k`;
                        } else if (metricaDispersion === 'unidades') {
                          return `${(value / 1000).toFixed(1)}k`;
                        } else {
                          return `$${value.toLocaleString()}`;
                        }
                      }}
                      formatearEjeY={(value) => `$${value.toLocaleString()}`}
                      formatearTooltip={(ventas, ticketPromedio) => {
                        if (metricaDispersion === 'ventas') {
                          return [`$${ventas.toLocaleString()}`, `$${ticketPromedio.toLocaleString()}`];
                        } else if (metricaDispersion === 'unidades') {
                          return [`${ventas.toLocaleString()}`, `$${ticketPromedio.toLocaleString()}`];
                        } else {
                          return [`$${ventas.toLocaleString()}`, `$${ticketPromedio.toLocaleString()}`];
                        }
                      }}
                      onMetricaChange={setMetricaDispersion}
                    />
                  )}
                                  
                    {activeTab === 'mapa-calor' && (
                      <GraficoMapaCalor
                        datos={obtenerDatosMapaCalor(metricaMapaCalor)}
                        titulo="Mapa de Calor Ventas por Día y Hora"
                         altura="400px"
                        opcionesMetricas={opcionesMetricas}
                        onMetricaChange={setMetricaMapaCalor}
                      />
                    )}
                  
                </div>
              </div>
            </div>
          </div>

           {/* Tabla de Comparación de Ventas */}
           <div className="mt-5">
             <TablaComparacionVentas />
           </div>
        </div>
      </div>
    </div>
  )
}

export default Ventas 