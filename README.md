#Step 9: Implement Tab Behavior on the Home Page

##Task

###Add Click Handlers to the Homepage `view-script`

1. Launch an editor app. From the `app/pages/home` folder, open the `ui.js` view script.

    `ui.js` runs on the page after it is rendered. Any UI functionality for the page is added here.

2. In the `homeUI` function, add a click handler for `.js-tab__header`

    ```javascript
    define([
        '$'
    ],
    function($) {
        var homeUI = function() {
            $('.js-tabs__header').on('click', function(e) {
                // The tab functionality will be added up here.
            });
        };

        return homeUI;
    });
    ```

    We create the effect that as a user clicks on a tab, the matching section is displayed and all other panels are hidden. The click handler adds and removes classes from the tabs and tab section. Then, we hide or show the elements with CSS.

3. In the new click handler, add an active class to the clicked tab. Remove the active class from all other tabs.

    ```javascript
    define([
        '$'
    ],
    function($) {
        var homeUI = function() {
            $('.js-tabs__header').on('click', function(e) {
                var $tab = $(this);

                $tab.siblings().removeClass('c--active');
                $tab.addClass('c--active');
            });
        };

        return homeUI;
    });
    ```

    Use this class to highlight the active tab.

4. Update the click handler to add an active class to the corresponding tab section. Ensure that the active class is removed from other tab sections.

    ```javascript
    define([
        '$'
    ],
    function($) {
        var homeUI = function() {
            $('.js-tabs__header').on('click', function(e) {
                var $tab = $(this);
                var tabIndex = $tab.index();
                var $sections = $('.js-tabs__sections');

                $tab.siblings().removeClass('c--active');
                $tab.addClass('c--active');

                $sections.removeClass('c--active');
                $sections.eq(tabIndex).addClass('c--active');
            });
        };

        return homeUI;
    });
    ```

5. Trigger a click on the first tab.

    ```javascript
    define([
        '$'
    ],
    function($) {
        var homeUI = function() {
            $('.js-tabs__header').on('click', function(e) {
                var $tab = $(this);
                var tabIndex = $tab.index();
                var $sections = $('.js-tabs__sections');

                $tab.siblings().removeClass('c--active');
                $tab.addClass('c--active');

                $sections.removeClass('c--active');
                $sections.eq(tabIndex).addClass('c--active');
            });

            $('.js-tabs__header').first().click();
        };

        return homeUI;
    });
    ```

    Finally, save the `ui.js` view script and close it.

6. In Terminal, ensure you are in the `workshop--adaptivejs-site` directory. On the command line, enter the `grunt preview` command to start the preview.
7. [Preview your Project](http://adaptivejs.mobify.com/v1.0/docs/preview-your-project).

    * Use `http://training.merlinspotions.com/` as the site URL.

8. Inspect the tabs in the site preview to test the active classes.

    In Step 10, we add the tab styling and styling for the active classes.

9. Stop the preview with the `[control] c` command in Terminal.


## Continue to Step 10

When you're ready to continue, run the following command:

```
git reset --hard HEAD && git clean -df && git checkout step-10-style-homepage
```

Then, follow the directions in the [README](https://github.com/mobify/workshop--adaptivejs-site/blob/step-10-style-homepage/README.md) in the Step 10 branch.
