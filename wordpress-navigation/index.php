<!-----------------------------------------------
 ----- Insert below code in header.php file -----
 ----------------------------------------------->


<!-- Hamburger menu -->
<div id="ham" class="ham-menu">
    <div id="ham-container" class="ham-container">
        <span class="ham-text">Menu</span>
        <img src="/assets/haburger-blue.png" class="ham-icon" alt="Hamburger">
    </div>
</div>

<!-- Navigation call via WP function -->
<div id="nav-wrap" class="nav-wrap">
    <nav class="main-navigation">
        <?php
        wp_nav_menu(array(
            'theme_location' => 'principleNav'
        ))
        ?>
    </nav>
</div>

<script defer src="/wordpress-navigation.js"></script>