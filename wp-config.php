<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * Localized language
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'local' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', 'root' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',          'l^7]Q/X?LHh|`B1NEvC;tdz6UvWKPT+wCHUve%P N>H!drCSf%k^D-{taa_u1mO!' );
define( 'SECURE_AUTH_KEY',   '*EvTOfAhVEe4X-geH~5HB;G{pmXEfK)G-,dXUe;:UId3++lnb:go^XSQvV{Qm~G|' );
define( 'LOGGED_IN_KEY',     '&t)=S%GvAo&Nd=1E_HGICCc3BX${XFUG4,y|b~[pGu(Fy&cGDg>&ZpLCMSzC}YTo' );
define( 'NONCE_KEY',         'CAE6(YDOW.jv<DF(|+yd i)u=z<<,m:IKA6=k3je>&)F44rri/y`::@.=)(&[PC}' );
define( 'AUTH_SALT',         'KD]s#X=:btzDmOs`B}*|jUW*_C~WtS<I*vCO.zU=KEfX)N%HNIgA[~7OqG1#z^5q' );
define( 'SECURE_AUTH_SALT',  'NED0R)/0.lyO)rEA$)$^7,5D^/6{$ofAt$xd:/VcX@:+A88mqSDNO:|E,F62z=*g' );
define( 'LOGGED_IN_SALT',    '4Q=x%BRCa3r^AcC(oCo8Glw2xlt+mi_+Ij3X4zpT}!uU//0=BBb?:vtScC?>!&<&' );
define( 'NONCE_SALT',        '!m>FmBHg%~~=o{;%?TT<oOr{of(1vf0L+U)UIZG|R`vG{Ks&+WWu^+5m%X9>:|P)' );
define( 'WP_CACHE_KEY_SALT', 'Ye:Mc/CT%30oE{BjYl5}a&,KbQAVC^6p:0z~})Zz~}V}_L2Rw>R4_FVMR$>U%8_+' );


/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';


/* Add any custom values between this line and the "stop editing" line. */



/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
if ( ! defined( 'WP_DEBUG' ) ) {
	define( 'WP_DEBUG', false );
}

define( 'WP_ENVIRONMENT_TYPE', 'local' );
/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
