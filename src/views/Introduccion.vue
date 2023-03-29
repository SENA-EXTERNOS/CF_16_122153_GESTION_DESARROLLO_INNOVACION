<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .row.justify-content-center.align-items-center.mb-5     
      .col-lg-11
        .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/introduccion/img1.png')})`}"
          )
          .bloque-texto-g__texto.p-4
            p(data-aos="fade-down").mb-0 Apreciado aprendiz, bienvenido a este componente formativo, donde profundizará sus conocimientos en las áreas de legislación laboral, prestaciones sociales, deberes y derechos del trabajador, nómina, liquidación de nómina, salarios y contratos de trabajo; un contrato que consiste en un acuerdo de voluntades suscrito entre el empleador y el trabajador, con respecto a la forma como uno de ellos va a dar fuerza de trabajo física o intelectual, al servicio del otro, bajo la continuada subordinación, o dependencia, a cambio de una remuneración determinada.    

    p En el siguiente video conocerá, de forma general, la temática que se estudiará a lo largo del componente formativo.


    .row
      .col-lg-12.mt-4
        figure
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/OwiJ8XUc9OE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
        



    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
