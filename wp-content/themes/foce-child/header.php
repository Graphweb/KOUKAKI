<?php
/**
 * The header for our theme
 *
 * This is the template that displays all of the <head> section and everything up until <div id="content">
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package Fleurs_d\'oranger_&_Chats_errants
 */

?>
<!doctype html>
<html <?php language_attributes(); ?>>
<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="profile" href="https://gmpg.org/xfn/11">
    <link rel="stylesheet"href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css"/>
    <!-- <link rel="stylesheet" href="style.css"/> -->

	<?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
<?php wp_body_open(); ?>

<div id="page" class="site">
	<a class="skip-link screen-reader-text" href="#primary"><?php esc_html_e( 'Skip to content', 'foce' ); ?></a>

	<header id="masthead" class="site-header">
		<nav id="site-navigation overlay-navigation" class="main-navigation">
        <a href="<?php echo esc_url( home_url( '/' ) ); ?>" id="i-site-title" class="site-title" rel="home"><?php bloginfo( 'name' ); ?></a>
            <div id="all-header" class="all-head">
                <img id="logo-kou-burg" class="logo-koukaki-burg" src="<?php echo get_stylesheet_directory_uri() . '/images/Image-logo-en-paralax.png'; ?> " alt="logo Fleurs d'oranger & chats errants">
                <ul id="ul-nav">
                    <li class="nav-anchor"><a href="#story1" class="a-no-active a-active-1">Histoire</a></li>
                    <li class="nav-anchor"><a href="#characters" class="a-no-active a-active-2">Personnages</a></li>
                    <li class="nav-anchor"><a href="#place" class="a-no-active a-active-3">Lieu</a></li>
                    <li class="nav-anchor"><a href="#studio" class="a-no-active a-active-4">Studio Koukaki</a></li>
                </ul>
                <span class="foot-burg">Studio Koukaki</span>
                <div id="i-img-burg" class="img-burg-all">
                    <img class="img-burg flower-burg hibiscus-burg" src="<?php echo get_stylesheet_directory_uri() . '/images/hibiscus_footer.png'; ?> " alt="Fleur d'hibiscus">
                    <img class="img-burg flower-burg flower-simple-burg" src="<?php echo get_stylesheet_directory_uri() . '/images/flower.png'; ?> " alt="Fleur simple">
                    <img class="img-burg flower-burg orchid-burg" src="<?php echo get_stylesheet_directory_uri() . '/images/orchid.png'; ?> " alt="Fleur d'orchidé">
                    <img class="img-burg flower-burg flower-random-burg" src="<?php echo get_stylesheet_directory_uri() . '/images/random_flower.png'; ?> " alt="Fleur simple">
                    <img class="img-burg flower-burg sunflower-burg" src="<?php echo get_stylesheet_directory_uri() . '/images/sunflower.png'; ?> " alt="Fleur de tournesol">
                    <img class="img-burg cat-burg cat-1-burg" src="<?php echo get_stylesheet_directory_uri() . '/images/cat-2.png'; ?> " alt="Chat 1">
                    <img class="img-burg cat-burg cat-2-burg" src="<?php echo get_stylesheet_directory_uri() . '/images/cat-3.png'; ?> " alt="Chat 2">
                    <img class="img-burg cat-burg cat-3-burg" src="<?php echo get_stylesheet_directory_uri() . '/images/cat-1.png'; ?> " alt="Chat 3">
                </div>
            </div>
                <div id="openBtn" class="open-btn">
                    <span class="burger-icon">
                        <span id="span-1"></span>
                        <span id="span-2"></span>
                        <span id="span-3"></span>
                    </span>
                </div>


                <div id="closeBtn" class="close-btn">
                    <span class="burger-icon">
                        <span id="span-4"></span>
                        <span id="span-5"></span>
                        <span id="span-6"></span>
                    </span>
                </div>
		
		</nav><!-- #site-navigation -->
	</header><!-- #masthead -->
