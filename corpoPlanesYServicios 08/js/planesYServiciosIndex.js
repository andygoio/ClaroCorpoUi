$(document).ready(function() {
        //Horizontal Tab
        $('#parentHorizontalTab').easyResponsiveTabs({
            type: 'default',
            width: 'auto',
            fit: true,
            tabidentify: 'hor_1',
            activate: function(event) {
                var $tab = $(this);
                var $info = $('#nested-tabInfo');
                var $name = $('span', $info);
                $name.text($tab.text());
                $info.show();
            }
        });

        // Child Tab
        $('#ChildVerticalTab_1').easyResponsiveTabs({
            type: 'vertical',
            width: 'auto',
            fit: true,
            tabidentify: 'ver_1',
            activetab_bg: '#fff',
            inactive_bg: '#F5F5F5',
            active_border_color: '#c1c1c1',
            active_content_border_color: '#5AB1D0'
        });

        //Vertical Tab
        $('#parentVerticalTab').easyResponsiveTabs({
            type: 'vertical',
            width: 'auto',
            fit: true,
            closed: 'accordion',
            tabidentify: 'hor_1',
            activate: function(event) {
                var $tab = $(this);
                var $info = $('#nested-tabInfo2');
                var $name = $('span', $info);
                $name.text($tab.text());
                $info.show();
            }
        });
    });