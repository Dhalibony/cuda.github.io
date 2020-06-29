//progress bar starts
        $(function(){

            // Remove svg.radial-progress .complete inline styling
            $('svg.radial-progress').each(function( index, value ) { 
                $(this).find($('circle.complete')).removeAttr( 'style' );
            });

            // Activate progress animation on scroll
            $(window).scroll(function(){
                $('svg.radial-progress').each(function( index, value ) { 
                    // If svg.radial-progress is approximately 25% vertically into the window when scrolling from the top or the bottom
                    if ( 
                        $(window).scrollTop() > $(this).offset().top - ($(window).height() * 0.75) &&
                        $(window).scrollTop() < $(this).offset().top + $(this).height() - ($(window).height() * 0.25)
                    ) {
                        // Get percentage of progress
                        percent = $(value).data('percentage');
                        // Get radius of the svg's circle.complete
                        radius = $(this).find($('circle.complete')).attr('r');
                        // Get circumference (2πr)
                        circumference = 2 * Math.PI * radius;
                        // Get stroke-dashoffset value based on the percentage of the circumference
                        strokeDashOffset = circumference - ((percent * circumference) / 100);
                        // Transition progress for 1.25 seconds
                        $(this).find($('circle.complete')).animate({'stroke-dashoffset': strokeDashOffset}, 1250);
                    }
                });
            }).trigger('scroll');

        });
//progress bar end



// portfolio starts
        // init Isotope
          var $grid = $('.grid').isotope({
            itemSelector: '.element-item',
            layoutMode: 'fitRows',
            getSortData: {
              category: '[data-category]',
            }
          });
          // filter functions
          var filterFns = {};
          // bind filter button click
          $('#filters').on( 'click', 'button', function() {
            var filterValue = $( this ).attr('data-filter');
            // use filterFn if matches value
            filterValue = filterFns[ filterValue ] || filterValue;
            $grid.isotope({ filter: filterValue });
          });
          // change is-checked class on buttons
          $('.button-group').each( function( i, buttonGroup ) {
            var $buttonGroup = $( buttonGroup );
            $buttonGroup.on( 'click', 'button', function() {
              $buttonGroup.find('.is-checked').removeClass('is-checked');
              $( this ).addClass('is-checked');
            });
          });
// portfolio end