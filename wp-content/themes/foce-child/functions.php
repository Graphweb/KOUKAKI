<?php
add_action( 'wp_enqueue_scripts', 'theme_enqueue_styles' );
function theme_enqueue_styles() {
    // CHARGER LE STYLE DU THÈME PARENT
    wp_enqueue_style( 'parent-style', get_template_directory_uri() . '/style.css' );

    // CHARGER LE STYLE ET LE SCRIPT DU THÈME ENFANT
    wp_enqueue_style('theme-style', get_stylesheet_directory_uri() . '/assets/css/theme.css', array(), filemtime(get_stylesheet_directory() . '/assets/css/theme.css'));
    wp_enqueue_script('theme-script', get_stylesheet_directory_uri() . '/assets/js/script.js', array(), false, true);
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