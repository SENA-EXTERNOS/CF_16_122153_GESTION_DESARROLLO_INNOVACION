<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Nómina 
    .row
        .col-lg-5
              figure
                img(src='@/assets/curso/temas/tema2/img1.png' ).imagen-deco
        .col-lg-7.mt-4
            p De igual manera, en materia de contabilidad, la nómina se refiere a los pagos quincenales o mensuales que el empleador realiza a los trabajadores, vinculados mediante contrato de trabajo. Estos pagos comprenden salario, comisiones, horas extras, recargos, prestaciones sociales, vacaciones y auxilios; es así como la nómina es el documento que recibe cada mes, un trabajador de la empresa, en el que consta el salario o compensación salarial recibido por el trabajo realizado durante ese mes. Según el artículo 144 del Código Sustantivo del Trabajo, es lo que todo trabajador tiene derecho a percibir para subvenir a sus necesidades normales y a las de su familia, en el orden material, moral y cultural.
        
              
    p.mt-4 En la nómina, se tienen en cuenta varios apartados, como:


    .row.justify-content-around.align-items-centerrd.mt-5
      .col-lg-11
        AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--yellow")
          .row(titulo="Devengos ")
            .col-md-2
              figure
                img(src='@/assets/curso/temas/tema2/img1.svg', alt='Texto que describa la imagen').dimensionimg
            .col-md-9.mb-4.mb-md-0
              p Son aquellas sumas pagadas al trabajador como retribución de sus servicios. Entre estos conceptos, se encuentran aquellos pagados directamente como remuneración salarial y son la parte que suma dentro de una nómina. En el apartado de devengos, existen los salariales y los no salariales.
              p.mt-3.mb-2 Son clasificados como salariales:          
              
              ul.lista-ul--color.morado.mb-4
                li 
                  i.fas.fa-check
                  p.mb-0
                    b Salario base: 
                    | corresponde al pago mensual mínimo que recibirá un trabajador.
                li 
                  i.fas.fa-check
                  p.mb-0
                    b Complementos salariales: 
                    | son percepciones económicas que se añaden al salario base, por una causa específica y determinada, derivada de la prestación del trabajo.
                li 
                  i.fas.fa-check
                  p.mb-0
                    b Horas extraordinarias: 
                    | las horas extraordinarias son las cantidades de tiempo adicionales que un trabajador realiza, además de su jornada de trabajo.
                li 
                  i.fas.fa-check
                  p.mb-0
                    b Pagos extras: 
                    | según cada convenio o acuerdo, entre empleado y empresa.
                li 
                  i.fas.fa-check
                  p.mb-0
                    b Mejoras voluntarias: 
                    | el sueldo que se percibe como salario en especie o retribución.

              p.mt-.mb-2 Por otra parte, los no salariales son los que se compensan, como:

              ul.lista-ul--color.morado
                li 
                  i.fas.fa-check
                  |  Indemnizaciones. 
                li 
                  i.fas.fa-check
                  |  Prestaciones de seguridad social.
                li 
                  i.fas.fa-check
                  |  Indemnizaciones por traslados.
                li 
                  i.fas.fa-check
                  |  Suspensión o despido.

            

          .row(titulo="Deducciones")
            .col-md-2
              figure
                img(src='@/assets/curso/temas/tema2/img2.svg', alt='Texto que describa la imagen').dimensionimg
            .col-md-9.mb-4.mb-md-0
              p Son descuentos del monto total devengado por el trabajador, es decir, la suma de los salarios percibidos durante un mes o una quincena, son conceptos o valores descontados de la nómina. Estas deducciones se encuentran previstas en la ley, y se llevan a cabo para efectos de realizar los aportes a seguridad social, sobre el porcentaje que deba ser asumido por el trabajador.
              p.mt-3 Dentro de los valores que se deducen de la nómina tenemos:

              ul.lista-ul--color.morado.mb-4
                li
                  i.fas.fa-check
                  | Aporte a la salud.
                li 
                  i.fas.fa-check
                  | Aporte a la pensión.
                li 
                  i.fas.fa-check
                  | Fondo de solidaridad.
                li 
                  i.fas.fa-check
                  | Cuotas sindicales.
                li 
                  i.fas.fa-check
                  | Aportes a cooperativas.
                li 
                  i.fas.fa-check
                  | Embargos.
                li 
                  i.fas.fa-check
                  | Créditos.
                li 
                  i.fas.fa-check
                  | Deudas.
                li 
                  i.fas.fa-check
                  | Retención en la fuente.

              p.mt-3 Es necesario dejar en claro que la empresa, la compañía u organización, no podrá retener ningún valor del salario de un empleado sin el consentimiento expreso del mismo, a menos que lo ordene un tribunal competente.
      
      p.mt-3 El documento en el que se relacionan estos conceptos, se conoce de manera común como nómina, y está compuesta por los siguientes elementos:

    .row.justify-content-around.align-items-centerrd.mt-3
      .col-lg-5
        ImagenInfografica.color-acento-botones
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/temas/tema2/img3.svg', alt='Texto que describa la imagen')
              

          .tarjeta.color-acento-botones.yellowpt.p-3(x="20%" y="23%" numero="+")
            .h5.mb-2 Datos de identificación de la empresa.
            

          .tarjeta.color-acento-botones.yellowpt.p-3(x="20%" y="33%" numero="+")
            .h5.mb-2 Datos básicos del trabajador.

          .tarjeta.color-acento-botones.yellowpt.p-3(x="20%" y="43%" numero="+")
            .h5.mb-2 Periodo de liquidación.

          .tarjeta.color-acento-botones.yellowpt.p-3(x="20%" y="63%" numero="+")
            .h5.mb-2 Compensaciones salariales y no salariales, que componen el salario bruto.

          .tarjeta.color-acento-botones.yellowpt.p-3(x="67%" y="63%" numero="+")
            .h5.mb-2 Deducciones que se realizan al salario bruto.


          .tarjeta.color-acento-botones.yellowpt.p-3(x="20%" y="81%" numero="+")
            .h5.mb-2 Detalles de las bases de cotización de la nómina.


          .tarjeta.color-acento-botones.yellowpt.p-3(x="67%" y="80%" numero="+")
            .h5.mb-2 Total neto a percibir.

          .tarjeta.color-acento-botones.yellowpt.p-3(x="20%" y="91%" numero="+")
            .h5.mb-2 Lugar y emisión, fecha y empresa.

      p.mt-3 Antes de continuar, es importante tener presente que existen varios tipos de salarios.

      p.mt-1 Conozcamos cada uno de ellos:


      .row.mb-5
        .col-lg-12
          ImagenInfografica.color-acento-botones
            template(v-slot:imagen)
              figure
                img(src='@/assets/curso/temas/tema2/img5.png', alt='Texto que describa la imagen')
                
            .tarjeta.color-acento-botones.morado.p-3(x="38%" y="20%" numero="+")
              .h5.mb-2 
              p.mt-2 Está estipulado por el artículo 132 del CST. Está conformado por un valor salarial equivalente a 10 salarios mínimos, que constituye un 70 % del total de la remuneración.
              
            .tarjeta.color-acento-botones.morado.p-3(x="74%" y="20%" numero="+")
              .h5.mb-2 
              p.mt-2 Cuando el trabajador recibe pagos sujetos a la ejecución de determinados hechos, comisiones o bonificaciones. 

            .tarjeta.color-acento-botones.morado.p-3(x="21%" y="66%" numero="+")
              .h5.mb-2 
              p.mt-2 Está estipulado en el artículo 145 del CST. Monto mínimo al que todo trabajador tiene derecho. Es decretado por el gobierno nacional anualmente; para el año 2023, en Colombia se decretó por un valor de $1.160.000. 


            .tarjeta.color-acento-botones.morado.p-3(x="56%" y="66%" numero="+")
              .h5.mb-2 
              p.mt-2 Toda retribución material diferente al dinero, que recibe el trabajador como parte de su remuneración salarial y contraprestación directa del servicio. Está estipulada por el artículo 129 del CST.

            .tarjeta.color-acento-botones.morado.p-3(x="92%" y="66%" numero="+")
              .h5.mb-2 
              p.mt-2 Establecido en el artículo 132 del CST, es una modalidad de salario variable, donde se paga un valor determinado, por una labor específica. 
      
    .cuadrado(data-aos="zoom-in-left")
      h3 
        i.fas.fa-square   
        |  Trabajo extra y recargos 

    .row.mt-3
        .col-lg-5
              figure
                img(src='@/assets/curso/temas/tema2/img6.png' ).imagen-deco
        .col-lg-7.mt-4
            p Recuerde que la jornada ordinaria consiste en 8 horas diarias y 48 horas semanales y, al realizar un exceso de horas de trabajo fuera del horario estipulado o pactado mediante el contrato, se presentan las horas extras, aquellas que se desarrollan más allá de la jornada ordinaria; cabe aclarar que, en ningún caso, las horas extras de trabajo diurnas o nocturnas, podrán exceder a 2 diarias y 12 a la semana.

              .cajon.color-acento-botones.p-3            
                p.mb-0 Para poder laborar el tiempo suplementario, el empleador deberá solicitar autorización del Ministerio de Salud y Protección Social, y si lo obtiene, deberá llevar un registro de trabajo suplementario y está obligado a entregar al trabajador, una relación de las horas extras laboradas.
    
    p.mt-2 La liquidación del trabajo extra o suplementario, se llevará a cabo de acuerdo con las fórmulas presentadas a continuación:



    .row.justify-content-around.mt-4
        .col-lg-3
          img(src='@/assets/curso/temas/tema2/img7.png' )
        .col-lg-3        
          img(src='@/assets/curso/temas/tema2/img8.png' )
        .col-lg-3
          img(src='@/assets/curso/temas/tema2/img9.png' )
        

    .row.justify-content-around.mt-4
        .col-lg-11
          .bloque-texto-a.color-primario.p-4.p-md-5.mb-5.bg-gray
            .row.m-0.align-items-center.justify-content-between
              .col-lg-4.mb-4.mb-lg-0
                img(src='@/assets/curso/temas/tema2/img10.svg' alt='AvatarTop')
              .col-lg-8
                .bloque-texto-a__texto.p-4
                  p Igualmente, los recargos nocturnos, los dominicales y los festivos, son términos y condiciones sujetos a la jornada normal de trabajo del empleado, según lo acordado entre las partes.
                    br
                    br
                  p Para efectos legales, se considera como trabajo diurno, el comprendido entre las 6:00 a.m. y las 10:00 p.m. y trabajo nocturno entre las 10:00 p.m. y las 6:00 a.m. Esta distinción ofrece importancia para el régimen de retribución de los recargos legales como horas extras y trabajo nocturno. En este caso, no hay trabajo extra, sino un recargo por trabajar en dicho horario.  

    .row.justify-content-around.mb-5
      .col-lg-8
        .cajon.color-acento-botones.p-3            
              p Debemos tener en cuenta que los días tienen una duración de 24 horas, contados desde las 12:00 de la noche hasta las 12:00 de la noche del día siguiente. Por otra parte, el recargo dominical y festivo es para los empleados que, por cualquier razón, deben trabajar un festivo donde no hay cabida a horas extras, porque se aplica el sistema legal de 8 horas. A la hora de determinar la compensación obligatoria de vacaciones, hay que tener en cuenta que, si el salario de un trabajador es fijo, incluye el pago de los domingos y festivos.


    .cuadrado
      h3 
        i.fas.fa-square   
        |  Prestaciones sociales 

    p.mt-4 Las prestaciones sociales son los pagos adicionales, aparte del salario, que el trabajador recibe en determinadas épocas del año, y que, a su vez, le representan beneficios; estas prestaciones son una remuneración obligatoria por parte del empleador, para los trabajadores que se encuentren vinculados a la empresa, por medio de un contrato de trabajo.
    p.mt-2 A continuación, se mostrarán detalladamente, cada una de estas prestaciones, con sus respectivas fórmulas de liquidación.

    .row
      .col-lg-8
        AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--coloramarillo")
          .row(titulo="Auxilio de cesantías")
            .col-md-11.mb-4.mb-md-0
              p Se refiere a una prestación social a cargo de todo empleador, cuyo fin es un ahorro que tiene el trabajador para cuando esté desempleado, o para invertir en el pago de sus estudios, o de su cónyuge/compañero permanente, o el de sus hijos, para compra, mejora o liberación de gravámenes de su vivienda.
              b.mt-1 Fórmula para liquidar cesantías = valor del salario mensual x los días laborados en el año / 360.
              p.mt-1 Las cesantías se causan a 31 de diciembre de cada año y se consignan en el fondo de cesantías que elija el trabajador, a más tardar el 14 de febrero del año siguiente. De no consignarse en la fecha establecida, el empleador deberá pagar una multa de un día de salario por cada día de retraso, a favor del trabajador.

          .row(titulo="Intereses sobre las cesantías")
            .col-md-11.mb-4.mb-md-0
              p Todos los empleadores deberán pagar a sus trabajadores los intereses sobre las cesantías, que equivalen al 12 % anual. Los intereses se causan y se pagan a más tardar el 31 de enero de cada año, con base en el saldo de cesantías que el trabajador tuviere acumuladas a su favor al 31 de diciembre del año inmediatamente anterior.
              b.mt-1 Fórmula para liquidar intereses sobre las cesantías = valor de las cesantías x días trabajados en el año x 0.12 / 360. 
     
          .row(titulo="Prima de servicios")
            .col-md-11.mb-4.mb-md-0
              p Es una prestación social que debe pagar el empleador que tenga carácter de empresa, con la finalidad que sus trabajadores disfruten por las utilidades que arroja la empresa. Se pagará, por concepto de prima de servicios, 30 días de salario por cada año de prestación del servicio, los cuales se pagan de forma semestral por partes iguales, el quince de junio y el 20 de diciembre.
              b.mt-1 Fórmula para liquidar la prima de servicios = valor del promedio del salario mensual x los días laborados en el semestre / 360. 
      .col-lg-4
          figure
            img(src='@/assets/curso/temas/tema2/img11.svg', alt='Texto que describa la imagen')
            
    .row.justify-content-center.mb-5.mt-5
      .col-lg-8
        .cajon.color-primario.verde.p-3            
          p Teniendo clara la clasificación anterior, se puede decir que las vacaciones no son salario, ni prestación social, sino un descanso remunerado, que debe tomarse como base para liquidar aportes.

    .cuadrado
      h3 
        i.fas.fa-square   
        |  Salario integral  
    
    .row.mt-3
      .col-lg-4
            figure
              img(src='@/assets/curso/temas/tema2/img12.png' )
      .col-lg-8.mt-4
          p Ampliemos un poco más la información sobre el salario integral.
          p.mt-2 Se encuentra estipulado a través del artículo 132 del CST. Se conforma por un factor salarial equivalente a diez (10) smmlv (salario mínimo mensual vigente) que constituyen el 70 % del total de la remuneración, más uno prestacional de (3) smmlv que equivalen al 30 % de la misma. El factor salarial comprende el valor que debe utilizarse como base para la liquidación de aportes al sistema de seguridad social, parafiscales, vacaciones, licencias e incapacidades.

    p.mt-4 El salario integral incluye los siguientes conceptos:


    SlyderF.mb-5.mt-5(columnas="col-lg-4 col-xl-3")
      .tarjeta-avatar
        img(src='@/assets/curso/temas/tema2/slider1.svg' alt='AvatarTop')
        .tarjeta.tarjeta--amarilla-1.p-4
          p.text-center Salario.

      .tarjeta-avatar
        img(src='@/assets/curso/temas/tema2/slider2.svg' alt='AvatarTop')
        .tarjeta.tarjeta--amarilla-1.p-4
          p.text-center Prima de servicios.

      .tarjeta-avatar
        img(src='@/assets/curso/temas/tema2/slider3.svg' alt='AvatarTop')
        .tarjeta.tarjeta--amarilla-1.p-4
          p.text-center Auxilio de cesantías.

      .tarjeta-avatar
        img(src='@/assets/curso/temas/tema2/slider4.svg' alt='AvatarTop')
        .tarjeta.tarjeta--amarilla-1.p-4
          p.text-center Horas extras.
      
      .tarjeta-avatar
        img(src='@/assets/curso/temas/tema2/slider5.svg' alt='AvatarTop')
        .tarjeta.tarjeta--amarilla-1.p-4
          p.text-center Recargos nocturnos.
      
      .tarjeta-avatar
        img(src='@/assets/curso/temas/tema2/slider6.svg' alt='AvatarTop')
        .tarjeta.tarjeta--amarilla-1.p-4
          p.text-center Trabajo dominical y festivo.



    .row.mt-5.justify-content-center
      .col-11
        .bloque-texto-g.color-primario.tarjetaimgcar.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img.carimg(
            :style="{'background-image': `url(${require('@/assets/curso/temas/tema2/img14.png')})`}"
          )
          .bloque-texto-g__texto2.p-4
            .col-10.col-lg-12
              p Sin embargo, el salario integral no incluye:
              p <i class="fas fa-check" STYLE="Color: red"></i>   Vacaciones.
              p <i class="fas fa-check" STYLE="Color: red"></i>   Aportes a seguridad social.
              p <i class="fas fa-check" STYLE="Color: red"></i>   Aportes parafiscales.
              p <i class="fas fa-check" STYLE="Color: red"></i>   Sanciones moratorias.
    
    .row.mt-5
      .col-md-6.mb-3.mb-md-0
        .cuadrado
          h3 
            i.fas.fa-square   
            |  Novedades

    .row
        
        .col-lg-8.mt-3
            p El numeral 10 del artículo 2.1.1.3 del Decreto 780 de 2016, establece que se entiende por novedad toda modificación que afecta el estado o condición de afiliación del trabajador, la inscripción, cambio o retiro de una EPS y las actualizaciones que se efectúen de los datos de los afiliados. Estas novedades deben ser reportadas, de manera obligatoria una vez se presenten, a modo que el empleador no sea objeto de determinadas sanciones, según el tipo de novedad que debería reportarse. 
        
              .cajon.color-acento-botones.p-3            
                p Existen dos tipos de novedades: las permanentes, que son aquellas que se mantienen de manera constante durante la relación laboral, como por ejemplo, traslado de EPS o de fondo de pensiones; y las transitorias que, como su nombre lo indica, se presentan por un período determinado, como por ejemplo, una incapacidad o una licencia no remunerada. Para prestar estos servicios, los operadores deben estar autorizados por parte del Ministerio de Salud y Protección Social.
        .col-lg-4.mt-5
              figure
                img(src='@/assets/curso/temas/tema2/img15.png' ).imagen-deco

    p.mt-4 Algunas novedades que pueden presentarse son:


    .row.justify-content-center.mb-5
      .col-xl-4.col-lg-7.col-md-9.col-11.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/temas/tema2/tarjeta5.png", alt="alt")
          .crd_hover_txt--body
            h4.mb-3.text-center Licencia por luto
            p.mb-0 5 días hábiles cuando el fallecido es familiar dentro del grado de parentesco que exige la ley.
      .col-xl-4.col-lg-7.col-md-9.col-11.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/temas/tema2/tajeta1.png", alt="alt")
          .crd_hover_txt--body
            h5.mb-0.text-center.textmargin Licencia o descanso durante el periodo de lactancia
            p.mb-0 2 descansos de 30 minutos cada uno, durante la jornada laboral.


      .col-xl-4.col-lg-7.col-md-9.col-11.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/temas/tema2/tarjeta2.png", alt="alt")
          .crd_hover_txt--body
            h5.mb-3.text-center Licencia de maternidad
            p.mb-0 12 semanas u 84 días después del parto, la cubre la EPS 10 % del IBC (Ingreso Base de Cotización).

      .col-xl-4.col-lg-7.col-md-9.col-11.mb-4.mb-xl-0.mt-5
        .crd_hover_txt(data-aos="flip-left")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/temas/tema2/tarjeta3.png", alt="alt")
          .crd_hover_txt--body
            h5.mb-3.text-center Licencia de aborto o parto prematuro
            p.mb-0 De dos a cuatro semanas, la paga la EPS al 100%.

      .col-xl-4.col-lg-7.col-md-9.col-11.mb-4.mb-xl-0.mt-5
        .crd_hover_txt(data-aos="flip-left")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/temas/tema2/tarjeta4.png", alt="alt")
          .crd_hover_txt--body
            h5.mb-3.text-center Licencia de paternidad
            p.mb-0 Ley María 755 de 2002, son 8 días hábiles, si ambos cotizan, o 4 días si solo cotiza el padre; 100 % la cubre la EPS.

    .row.mt-5
      .col-md-6.mb-4.mb-md-0
        .cuadrado
          h3 
            i.fas.fa-square   
            |  Liquidación de nómina

    .row.mt-4
      .col-lg-4
            figure
              img(src='@/assets/curso/temas/tema2/img16.png' ).imagen-deco
      .col-lg-8
          p Una vez conocidos todos los términos, vamos con la liquidación de nómina, la cual consiste en calcular el valor acumulado de la cantidad de días trabajados y la cantidad deducida del pago de un empleado, durante un período determinado, para llegar al valor total pagado. Se liquida mensual o quincenalmente, dependiendo de las condiciones de pago pactadas; las empresas deberán continuar liquidando sus respectivos salarios, para determinar los diversos conceptos que adeudan a los trabajadores y que deben descontar.
            .cajon.color-acento-botones.p-3            
              p En la liquidación de la nómina se deben tener en cuenta dos cosas que deberá pagar el empleador y que se le deducirá al empleado, como vemos que se presenta en la siguiente tabla.



      .row.justify-content-center.mt-3
        .col-lg-7.sm-8
          .titulo-sexto.color-acento-contenido
            p.mb-0
              b Tabla 1
            p.mb-0
              em Obligaciones del empleador y del empleado
          figure
            img(src='@/assets/curso/temas/tema2/img18.svg' )

      .row.justify-content-center.mt-5
        .col-lg-8.sm-8

          .cajon.color-acento-botones.p-3            
            p El fondo de solidaridad pensional, lo pagan los asalariados que ganen más de 4 salarios mínimos; equivale al 1 % del ingreso base de cotización, sin subsidio de transporte.
            p.mb-0 El formato estándar utilizado para la liquidación de nómina, se debe regir por la legislación vigente, que define la estructura mínima y el contenido que debe seguirse en todo momento.

    

</template>

<script>
export default {
  name: 'Tema2',
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
