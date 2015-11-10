define([
    '$',
    'global/baseView',
    'dust!pages/category/template'
],
function($, BaseView, template) {
    return {
        template: template,
        extend: BaseView,

        context: {
            templateName: 'category',
            title: function() {
                return $('.title');
            },
            listing: function() {
                return $('.category-listing');
            }
        }

        /**
         * If you wish to override preProcess/postProcess in this view, have a look at the documentation:
         * http://adaptivejs.mobify.com/v1.0/docs/views
         */
    };
});
