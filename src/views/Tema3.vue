<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Hojas de cálculo para la generación de informes financieros y #[i software]  contable


    .row
      .col-lg-5
            figure
              img(src='@/assets/curso/temas/tema3/img1.png' )
      .col-lg-7.mt-4
          p Con el desarrollo de las herramientas tecnológicas, se ha facilitado el registro de la información contable, lo que permite a las empresas contar con información en tiempo real y sin recurrir al cierre de sus instalaciones, para determinar cantidades en inventarios, utilidades o pérdidas en cada periodo. Dentro de las herramientas ofimáticas comunes, encontramos las hojas de cálculo y los #[i software] contables. 
      
            .cajon.color-primario.verde.p-3            
                p Se entiende por hoja de cálculo a la aplicación organizada en filas y columnas que, a su vez, permite el uso de fórmulas para el cálculo de diferentes operaciones aritméticas; cada documento es un libro en donde se puede crear un sin número de hojas. Esta herramienta es útil tanto en organizaciones, como en diferentes escenarios personales. Su importancia radica en la versatilidad para realizar bases de datos, informes, datos estadísticos, clasificaciones entre otros.
    p.mt-2 Los conceptos básicos a tener presentes son:

    .row
        .col-lg-4.mt-5
            figure
              img(src='@/assets/curso/temas/tema3/img2.png' )
        .col-lg-8
            
            TabsA.color-acento-contenido.mb-5.mt-5
              .tarjeta.colorverde.p-4(titulo="Libro")
                .row                  
                  .col-xl-10
                    
                    p Compilación de hojas, se puede almacenar en el disco duro y su extensión es .xls/ods.

              .tarjeta.colorverde.p-4(titulo="Celda")
                .row
                  
                  .col-xl-10
                    
                    p Lugar para digitar datos, sean numéricos o alfabéticos. Es un espacio rectangular, formado al hacer la intersección entre fila y columna.


              .tarjeta.colorverde.p-4(titulo="Fórmula")
                .row
                  
                  .col-xl-10
                    
                    p Expresiones numéricas para realizar el cálculo de alguna operación. 

              .tarjeta.colorverde.p-4(titulo="Función")
                .row
                  
                  .col-xl-10
                    
                    p Fórmula definida para realizar cálculos, utilizando valores puntuales y en un orden establecido.  

    .row.mt-5
      .col-md-6.mb-4.mb-md-0
        .cuadrado
          h3 
            i.fas.fa-square   
            |  Aplicación de fórmulas en un  libro mayor y un diario 

    p.mt-3 #[b Libro diario:] teniendo en cuenta que el libro diario es necesario para el registro cotidiano de las operaciones mercantiles de una organización, puede ser diligenciado en hojas de cálculo, donde las principales fórmulas son fechas, y suma de los valores. Los asientos deben relacionarse en orden cronológico y el número de orden, consecutivo. Se diseñan para que, de manera automática, alimente los libros mayores.
    p.mb-4 La siguiente imagen presenta un ejemplo sobre cómo se visualiza el libro diario en hojas de cálculo.

    .row.justify-content-center.mt-3
      .col-lg-9.sm-8
        .titulo-sexto.color-acento-contenido
            p.mb-0
              b Figura 1 
            p.mb-0
              em Ejemplo libro diario en una hoja de cálculo
      .row.justify-content-center.mt-1
        .col-lg-9.sm-8
          figure
           img(src='@/assets/curso/temas/tema3/img3.svg' )


    p.mt-5 #[b Libro mayor:]  es conocido como el libro de balances, debido a que resume o sintetiza la información registrada en el libro diario, en donde se compilan las cuentas para la posterior elaboración de los estados financieros, de propósito general, al finalizar el periodo contable: Estado de situación financiera y Estado de resultados integrales. 
    p.mt2- En una hoja de cálculo se diseñaría de esta forma:

    .row.justify-content-center.mt-3
      .col-lg-9.sm-8
        .titulo-sexto.color-acento-contenido
            p.mb-0
              b Figura 2 
            p.mb-0
              em Ejemplo libro mayor en hoja de cálculo
          
      .row.justify-content-center.mt-1.mb-4
        .col-lg-9.sm-8
          figure
           img(src='@/assets/curso/temas/tema3/img4.svg' )

    .row.mt-5
      .col-md-6.mb-4.mb-md-0
        .cuadrado
          h3 
            i.fas.fa-square   
            |  Tarjetas kardex o de inventario 

    p.mt-2 Las hojas de cálculo hacen parte de un libro auxiliar, en el que se diligencia la información de los productos existentes, referenciando características, unidades, proveedores, y detalles que permitan conocer su ubicación y la cantidad de existencias totales. 
    p.mt-2 En una hoja de cálculo, se podría construir de la siguiente manera:

    
    .row.justify-content-center.mt-3
      .col-lg-9.sm-8
        .titulo-sexto.color-acento-contenido
            p.mb-0
              b Figura 3 
            p.mb-0
              em Ejemplo de kardex en una hoja de cálculo

      .row.justify-content-center.mt-1
        .col-lg-9.sm-8
          figure
           img(src='@/assets/curso/temas/tema3/img5.svg' )


    .row.mt-5
      .col-md-6.mb-4.mb-md-0
        .cuadrado
          h3 
            i.fas.fa-square   
            |  Comprobantes de cierres y ajustes    

    .row
        .col-lg-4.mt-5
              figure
                img(src='@/assets/curso/temas/tema3/img6.png' ).imagen-deco
        .col-lg-8.mt-5
            p Con el objetivo de realizar un cierre en el periodo contable, las organizaciones llevan a cabo una cancelación de las cuentas de resultados (ingresos, costos y gastos) hasta llevarlas a cero, para iniciar un nuevo periodo contable. Al realizar este proceso en las hojas de cálculo, se debe lograr una conexión de estos comprobantes de cierre, con los balances de prueba para, de esta forma, emitir estados financieros. 
            p En una hoja de cálculo se puede crear todo el ciclo contable en un libro, en donde cada hoja da lugar a alguno de estos ítems: libro diario, libro mayor, inventarios, balances de prueba, balance ajustado y estados financieros. 

    .row.mt-4
        
        .col-lg-8.mt-4
            p Es importante comprender que un estado financiero es una declaración de lo que se cree que es cierto, expresado en términos de una unidad monetaria, por ejemplo, en pesos. Cuando los administradores preparan estados financieros, están describiendo, en términos financieros, ciertos atributos de las empresas que están representando, de forma razonable.
        
              .cajon.color-acento-botones.p-3            
                p El tiempo es un factor importante al preparar y entender los estados financieros de una empresa. Los estados pueden cubrir un periodo tan corto como una semana, o tan largo como un año.

        .col-lg-4
              figure
                img(src='@/assets/curso/temas/tema3/img7.png' )

    p.mt-4 En las NIIF (Normas Internacionales de la Información Financiera), dependiendo de las características e información que ofrecen los reportes financieros, estos se clasifican de la siguiente manera:

    .row.justify-content-center.mt-3
      .col-lg-11.sm-8
        AcordionA(tipo="a" clase-tarjeta="tarjeta--coloramarillo").mt-4
          .row(titulo="De propósito general")
            .col-md-12.mb-4.mb-md-0
              p Son estados financieros cuya elaboración y presentación es obligatoria al menos una vez al año; los usuarios de estos informes son un público indeterminado y su propósito es dar a conocer información financiera sobre el ente económico. El conjunto completo está conformado por:
              ul.lista-ul.mt-4
                li 
                  i.lista-ul__vineta 
                  | Estado de situación financiera.
                
                li 
                  i.lista-ul__vineta
                  |  Estado de resultados.
                li 
                  i.lista-ul__vineta
                  |  Estado de cambios en el patrimonio.
                
                li 
                  i.lista-ul__vineta
                  |  Estado de flujo de efectivo.

                li 
                  i.lista-ul__vineta
                  |  Estados financieros consolidados.
                li 
                  i.lista-ul__vineta
                  |   Notas a los estados financieros, las cuales hacen parte integral de los mismos.







          div(titulo="Estados financieros intermedios")
             p Están conformados por aquellos estados financieros que se preparan y se presentan aplicando principalmente las NIC 1 y 7 (Normas Internacionales de Contabilidad Oficializadas), para satisfacer necesidades de información de periodos intermedios (entre enero y diciembre); entre estos estados, tenemos:
              ul.lista-ul.mt-4
                li 
                  i.lista-ul__vineta 
                  | Estado de situación condensada.
                li 
                  i.lista-ul__vineta 
                  |  Estado de situación de resultados condensado. 
                li 
                  i.lista-ul__vineta 
                  |  Estado de cambios en el patrimonio condensado. 
                li 
                  i.lista-ul__vineta 
                  |  Estado de flujo de efectivos condensado.
                li 
                  i.lista-ul__vineta 
                  |  Notas explicativas seleccionadas. 
                
          div(titulo="Estados financieros separados")
            p Se refiere a aquellos estados financieros elaborados por cada inversionista, sea este un controlador o matriz, un inversionista en una organización asociada, o un partícipe en una compañía controlada conjuntamente, donde los inversionistas han contabilizado su inversión por el costo histórico y no por los cambios patrimoniales que la sociedad receptora ha experimentado.

          div(titulo="Estados financieros consolidados")
            
            p Son aquellos que se elaboran y se presentan en un grupo empresarial, como si fuera una sola entidad. Los estados financieros consolidados que se deben preparar, elaborar y presentar, son:
              ul.lista-ul.mt-4
                li 
                  i.lista-ul__vineta 
                  | Estado de situación financiera consolidado.
                li 
                  i.lista-ul__vineta 
                  |  Estado de resultados consolidado.
                li 
                  i.lista-ul__vineta 
                  |  Estado de cambios en el patrimonio consolidado. 
                li 
                  i.lista-ul__vineta 
                  |  Estado de flujo de efectivo consolidado.
                li 
                  i.lista-ul__vineta 
                  |   Notas a los estados financieros consolidados.


      .row.mt-5
        
        .col-lg-7.mt-4
            p Gracias a la evolución tecnológica, tenemos acceso a múltiples herramientas que sirven para que la labor contable sea completa y veraz; esto facilita que las organizaciones cuenten con información oportuna e inmediata, sea cual sea el momento en que se requiera. 
            p.mt-2 En la actualidad, las empresas apoyan el registro de sus operaciones contables en sistemas contables que, en muchos casos, son actualizados en línea, siendo algo muy conveniente para que cualquier usuario de la información contable, pueda acceder a ella sin importar el lugar donde se encuentre.
            p.mt-2 Aquí aparece el #[i software] de contabilidad, el cual es un programa o aplicación informática que trata los datos contables de una empresa, mediante métodos sistemáticos. En Colombia existen varios, pero el más reconocido es SIIGO. 
        
        .col-lg-4
              figure
                img(src='@/assets/curso/temas/tema3/img8.png' )

      .row.justify-content-center.mt-3
        .col-lg-9.sm-8
        
          .cajon.color-acento-botones.p-3            
            p Este #[i software]  contable permite que la información sea registrada de manera inmediata, tiene un alto nivel de confiabilidad en el riesgo de pérdida de información, muchos usuarios comentan aspectos positivos del mismo, indicando la simplicidad y facilidad de gestionar las tareas contables.
      
      p.mt-4 Lo invitamos a ver el siguiente video, el cual nos habla sobre la importancia de tener en las empresas un #[i software]  contable.

      .row
      .col-lg-12.mt-4
        figure
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/uvLAqgwhREo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
        


      p.mt-4 Y para finalizar, respondamos dos interrogantes sobre el 
        i software 
        | contable:


      .row.mt-3
        .col-lg-12.sm-8
          .tarjeta.tarjeta--amarillo.p-4
            SlyderA(tipo="b")
              .row
                .col-md-6.mb-4.mb-md-0
                  b ¿Cómo se ingresa información al #[i software] ?
                  p.mt-2 Cada #[i software]  maneja su propia plataforma o interfaz y, aunque puede semejarse una de otra, es necesario contar con una capacitación completa por parte del prestador del servicio, a los colaboradores que harán uso del mismo. 
                  p.mt-2 Para que el ingreso de la información se registre de manera adecuada, se debe tener presente:
                  ul.lista-ul.mt-4
                    li 
                      i.lista-ul__vineta 
                      |  Una correcta clasificación de los hechos contables.
                    li 
                      i.lista-ul__vineta 
                      | Una revisión de las cuentas que integran el sistema contable.
                    li 
                      i.lista-ul__vineta 
                      | Cómo es la organización y su estructura.
                .col-md-5
                  figure
                    img(src='@/assets/curso/temas/tema3/img9.png', alt='Texto que describa la imagen')
              
              .row
                .col-md-6.mb-4.mb-md-0
                  b ¿Qué sucede cuando se registra la información?
                  p.mt-2 Posterior a que la organización haya registrado las diferentes transacciones o hechos económicos en los libros de acuerdo con el periodo contable, se procede a la generación de reportes.
                  p.mt-2 Se podría decir que estos reportes son el resultado final de los hechos económicos de la organización, aquellos que sirven para determinar la utilidad o pérdida de la misma y, a su vez, tomar decisiones de mejora o de oportunidad.
                  p.mt-2 Los reportes permiten conocer el estado real de la organización y son imprescindibles para la toma de decisiones (estado de situación financiera, estado de resultados, estado de pérdidas y ganancias, entre otros).
                 
                .col-md-5
                  figure
                    img(src='@/assets/curso/temas/tema3/img10.png', alt='Texto que describa la imagen')
                    
        .row.justify-content-center.mt-5
          .col-lg-9.sm-8
              .cajon.color-primario.verde.p-3            
                p Recuerde explorar los demás recursos que se encuentran disponibles en este componente formativo; para ello, diríjase al menú principal, donde encontrará la síntesis, una actividad didáctica para reforzar los conceptos estudiados, material complementario, entre otros.
              
</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
