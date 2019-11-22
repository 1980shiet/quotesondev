<?php
/**
 * The template for displaying the footer.
 *
 * @package QOD_Starter_Theme
 */

?>

			</div><!-- #content -->

			<footer id="colophon" class="site-footer" role="contentinfo">
			<nav id="site-navigation" class="main-navigation" role="navigation">
					<?php wp_nav_menu( array( 'theme_location' => 'primary', 'menu_id' => 'primary-menu' ) ); ?>
				</nav><!-- #site-navigation -->
				<div class="site-info">
					<p>Brought to you by <a href="https://redacademy.com/programs/?campus=vancouver&ads_cmpid=1478373743&ads_adid=62938959051&ads_matchtype=e&ads_network=g&ads_creative=352325975507&utm_term=red%20academy&ads_targetid=aud-495692225674:kwd-296950416601&utm_campaign=&utm_source=adwords&utm_medium=ppc&ttv=2&gclid=EAIaIQobChMIve7G6Yb65QIVYhh9Ch2fzwO-EAAYASAAEgJ43fD_BwE">RED Academy</a>
				</div><!-- .site-info -->
			</footer><!-- #colophon -->
		</div><!-- #page -->

		<?php wp_footer(); ?>

	</body>
</html>
