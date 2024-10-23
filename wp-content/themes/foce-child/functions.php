<?php
add_action( 'wp_enqueue_scripts', 'theme_enqueue_styles' );
function theme_enqueue_styles() {
    // CHARGER LE STYLE DU THÈME PARENT
    wp_enqueue_style( 'parent-style', get_template_directory_uri() . '/style.css' );

    // CHARGER LE STYLE ET LE SCRIPT DU THÈME ENFANT
    wp_enqueue_style('theme-style', get_stylesheet_directory_uri() . '/install-sass/assets/css/theme.css', array(), filemtime(get_stylesheet_directory() . '/install-sass/assets/css/theme.css'));
    wp_enqueue_script('theme-script', get_stylesheet_directory_uri() . '/script.js', array(), false, true);
    
    function theme_enqueue_swiper() {
        // Enqueue Swiper CSS
        wp_enqueue_style('swiper-css', 'https://unpkg.com/swiper/swiper-bundle.min.css');
    
        // Enqueue Swiper JS
        wp_enqueue_script('swiper-js', 'https://unpkg.com/swiper/swiper-bundle.min.js', array(), null, true);
    
        // Enqueue custom JS to initialize Swiper (if needed)
        wp_enqueue_script('custom-swiper-js', get_template_directory_uri() . '/path-to-your-custom-swiper.js', array('swiper-js'), null, true);
    }
    add_action('wp_enqueue_scripts', 'theme_enqueue_swiper');
}

// GET CUSTOMIZER OPTIONS FORM PARENT THEME
if ( get_stylesheet() !== get_template() ) {
    add_filter( 'pre_update_option_theme_mods' . get_stylesheet(), function ( $value, $old_value ) {
        update_option( 'theme_mods' . gettemplate(), $value );
        return $old_value; // prevent update to child theme mods
    }, 10, 2 );
    add_filter( 'pre_option_theme_mods' . get_stylesheet(), function ( $default ) {
        return get_option( 'theme_mods' . get_template(), $default );
    } );
}