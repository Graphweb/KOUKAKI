
  <?php
  $args = array(
    'post_type' => 'characters',
    'posts_per_page' => -1,
    'meta_key'  => '_main_char_field',
    'orderby'   => 'meta_value_num',
  );
  $characters_query = new WP_Query($args);
?>


<div class="swiper">
  
  <!-- Additional required wrapper -->
  <div class="swiper-wrapper">
    <!-- Slides -->
    <?php
    while ( $characters_query->have_posts() ) {
      $characters_query->the_post(); 
    ?>
    <figure class="swiper-slide">
      <img src="<?php echo get_the_post_thumbnail_url( get_the_ID(), 'full' )?>">
      <figcaption>
        <?php the_title() ?>
      </figcaption>
    </figure>
    <?php
    }
    ?>
  </div>

</div>