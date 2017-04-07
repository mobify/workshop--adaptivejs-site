# Step 10: Style the Homepage

## Task

### Style the Homepage

1. In Terminal, ensure that you are in the `workshop--adaptivejs-site` directory. On the command line, enter the `grunt preview` command to start the preview.
2. [Preview your Project](http://adaptivejs.mobify.com/v1.0/docs/preview-your-project).

    * Use `http://training.merlinspotions.com/` as the site URL.

    To see the new styles take effect, refresh this page.

3. Launch an editor app. From the `app/pages/home` folder, open the `_style.scss` homepage template file.
4. Remove the existing styles for the homepage template. Add this styling for the promo image and for the `t-home__content` block:

    ``` SCSS
    // Home
    // ===

    .t-home {
    }


    // Home: Promo
    // ---

    .t-home__promo {
        padding: $v-space 0;

        text-align: center;

        .banner-message {
            font-family: $serif;
            font-style: italic;
        }
    }


    // Home: Content
    // ---

    .t-home__content {
        padding: 0 $small-h-space;
    }
    ```

    Save the `_style.scss` template file and close it.

5. In the editor, in the `app/components` folder, create a new `tab` directory. Then, within the new directory, create `_style.scss` tabs component SCSS file with the following styles:

    ``` SCSS
    // Tab
    // ===

    .c-tab {
    }


    // Tab: Header
    // ---

    .c-tab__controls {
        display: flex;
        padding-bottom: $v-space;

        color: $grey-55;
        text-align: center;
    }


    // Tab: Button
    // ---

    .c-tab__button {
        @extend %heading;

        display: block;
        width: 100%;
        min-height: $line-height;
        padding: 0;

        font-size: $font-size - 1;
        text-transform: uppercase;

        &.c--active {
            position: relative;

            color: $accent-color;
            font-weight: normal;
            font-size: $font-size + 1;

            &::after {
                content: '';

                position: absolute;
                right: 0;
                bottom: -12px;
                left: 0;

                width: 0;
                margin: auto;
                border-top: 5px solid $accent-color;
                border-right: 5px solid transparent;
                border-left: 5px solid transparent;

                background-color: white;
                box-shadow: 5px 0 0 0 white, -5px 0 0 0 white;
            }
        }
    }


    // Tab: Section
    // ---

    .c-tab__section {
        @include clearfix;

        display: none;
        padding: $large-v-space 0;
        border-top: 1px solid $grey-80;
        border-bottom: 1px solid $grey-80;

        &.c--active {
            display: block;
        }
    }
    ```

    Save the `_style.scss` tab component SCSS file and close it.

6. In your editor, from the `app/global/styles` folder, open the `_components.scss` components list file. Import the new tab component at the bottom of the file.

    ```SCSS
    // Project Components
    // ------------------
    //
    // Styles for project-specific components.
    //
    // eg. @import 'components/button';

    ...
    @import 'components/newsletter/style';
    @import 'components/tab/style';
    ```

    Save the `_components.scss` components list file.

7. Refresh the homepage preview from Step 2 in your browser.

    The homepage now looks like this:

    ![Homepage end result](https://s3.amazonaws.com/uploads.hipchat.com/15359/1627975/zcuGs1MNCSY2FWE/Screen%20Shot%202015-05-05%20at%2010.58.22%20AM.png)


## We're done!

Congratulations! You created and styled a sample Adaptive.js site.
