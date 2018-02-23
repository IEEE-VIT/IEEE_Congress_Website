this.$el.on( 'mouseenter.hoverdir, mouseleave.hoverdir', function( event ) {

	var $el = $( this ),
		$hoverElem = $el.find( 'div' ),
		direction = self._getDir( $el, { x : event.pageX, y : event.pageY } ),
		styleCSS = self._getStyle( direction );

	if( event.type === 'mouseenter' ) {

		$hoverElem.hide().css( styleCSS.from );
		clearTimeout( self.tmhover );

		self.tmhover = setTimeout( function() {

			$hoverElem.show( 0, function() {

				var $el = $( this );
				if( self.support ) {
					$el.css( 'transition', self.transitionProp );
				}
				self._applyAnimation( $el, styleCSS.to, self.options.speed );

			} );


		}, self.options.hoverDelay );

	}
	else {

		if( self.support ) {
			$hoverElem.css( 'transition', self.transitionProp );
		}
		clearTimeout( self.tmhover );
		self._applyAnimation( $hoverElem, styleCSS.from, self.options.speed );

	}

} );
