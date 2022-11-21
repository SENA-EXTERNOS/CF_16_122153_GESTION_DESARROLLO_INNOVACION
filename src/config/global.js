export default {
  global: {
    componenteFormativo: 'Contratos de trabajo y liquidación de nómina',
    descripcionCurso:
      'En este componente formativo se explica la forma de liquidar la nómina empresarial, según la normativa, abordando conceptos claves, salarios, auxilio de transporte y qué trabajadores tienen derecho a recibirlo, liquidación mensual y anual de prestaciones sociales, normativa aplicable, parafiscales, seguridad social y todos los conceptos deducidos en la liquidación de nómina, tanto para el empleado, como para el empleador.',

    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.svg'),

    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-5'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-5.svg'),
      },

      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
      {
        clases: ['banner-principal-decorativo-4'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-4.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Legislación laboral ',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Contrato de trabajo ',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Deberes y derechos del empleado y el empleador  ',
            hash: 't_1_2',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Nómina ',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo:
          'Hojas de cálculo para la generación de informes financieros y <em>software<em> contable',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Nómina',
      referencia:
        'Ley 100 de 1993. Por la cual se crea el sistema de seguridad social integral y se dictan otras disposiciones. Diciembre 23 de 1993. DO No. 41.148 ',
      tipo: 'Ley',
      link:
        'http://www.secretariasenado.gov.co/senado/basedoc/ley_0100_1993.html',
    },
    {
      tema:
        'Hojas de cálculo para la generación de informes financieros y <em>software<em> contable',
      referencia:
        'IFRS Foundation. (s.f.).<em> Norma Internacional de Contabilidad 8. Políticas Contables, Cambios en las Estimaciones Contables y Errores. <em> ',
      tipo: 'PDF',
      link:
        'https://www.ctcp.gov.co/proyectos/contabilidad-e-informacion-financiera/documentos-organismos-internacionales/compilacion-marcos-tecnicos-de-informacion-financi/1534369239-2962',
    },
    {
      tema:
        'Hojas de cálculo para la generación de informes financieros y <em>software<em> contable',
      referencia:
        '<em>IFRS Foundation. (s.f.). Norma Internacional de Contabilidad 8. Políticas Contables, Cambios en las Estimaciones Contables y Errores. <em> ',
      tipo: 'PDF',
      link:
        'https://www.ctcp.gov.co/proyectos/contabilidad-e-informacion-financiera/documentos-organismos-internacionales/compilacion-marcos-tecnicos-de-informacion-financi/1534369239-2962 ',
    },
    {
      tema:
        'Hojas de cálculo para la generación de informes financieros y software contable ',
      referencia:
        'Videos Siigo. (2020). Siigo Nube – Aprende todo lo que puedes hacer con tu <em>software<em> administrativo (video). YouTube.  ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=Njn33SBa5SI',
    },
    {
      tema:
        'Hojas de cálculo para la generación de informes financieros y software contable',
      referencia:
        'Siigo – Centro de Ayuda. (s.f.).<em> Siigo Nube Primeros Pasos.  <em> ',
      tipo: 'Página web',
      link:
        'https://siigonube.portaldeclientes.siigo.com/pp/siigo-nube-primeros-pasos/ ',
    },
  ],
  glosario: [
    {
      termino: 'Cesantía',
      significado:
        'en Colombia, se refiere a una prestación social que todo empleador debe reconocer a sus trabajadores, con la finalidad que estos puedan atender sus necesidades primarias, en caso de quedar cesante.',
    },
    {
      termino: 'Deducciones laborales',
      significado:
        'valores que se le retienen al trabajador, ordenados por la ley laboral o aprobados por el empleado y que constituyen un menor valor del pago en nómina. ',
    },
    {
      termino: 'Despido laboral',
      significado:
        'es la acción a través de la cual un empleador da por finalizado, unilateralmente, un contrato laboral con su empleado.',
    },
    {
      termino: 'Devengado',
      significado:
        'es el reconocimiento y registro de un ingreso o un gasto en el periodo contable a que se refiere, a pesar que el desembolso o el cobro pueda ser hecho, todo o en parte, en el periodo anterior o posterior.',
    },
    {
      termino: 'Empleador',
      significado:
        'en un contrato de trabajo, la parte que provee un puesto de trabajo a una persona física para que preste un servicio personal bajo su dependencia, a cambio del pago de una remuneración o salario. La otra parte del contrato se denomina trabajador o empleado.',
    },
    {
      termino: 'Hoja de cálculo',
      significado:
        'programa informático que simula una tabla de valores organizada en filas y columnas y que se emplea, entre otras muchas aplicaciones, en tareas de administración financiera y en contabilidad.',
    },
    {
      termino: 'Salario',
      significado:
        'es el pago que recibe de forma periódica, un trabajador de mano de su empleador, a cambio de cierta actividad productiva. El empleado recibe un salario a cambio de poner su trabajo a disposición del empleador, siendo estas las obligaciones principales de su relación contractual.',
    },
    {
      termino: '<em>Software contable<em>',
      significado:
        'programa o aplicación informática que trata los datos contables de una empresa, mediante métodos sistemáticos.',
    },
    {
      termino: 'Vacaciones',
      significado:
        'corresponden a una determinada cantidad de tiempo en que el trabajador puede ausentarse de su trabajo, sin dejar de percibir su remuneración, por un acumulado de horas laboradas. Por ejemplo, en el ordenamiento costarricense, el trabajador puede disfrutar de dos semanas de vacaciones por cada 50 semanas de trabajo.',
    },
  ],
  referencias: [
    {
      referencia:
        'Código Sustantivo de Trabajo (CST). DO No 27.622 del 7 de junio de 1951. (Colombia). ',
      link:
        'https://www.ilo.org/dyn/travail/docs/1539/CodigoSustantivodelTrabajoColombia.pdf ',
    },
    {
      referencia:
        'Rivera, D. M., Rivera Zarate, D. F. & Angulo Guiza, U. G. (2022).<em> Cartilla laboral Teoría y práctica 2022: Medidas laborales, seguridad social y nómina electrónica.<em> Ediciones de la U. ',
      link: '',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
