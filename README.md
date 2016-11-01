#Step 5: Style the Header

Now that there is content in the header, we add style to it.

##Task

###Style the Header


1. In Terminal, ensure you are in the `workshop--adaptivejs-site directory`. On the command line, enter the `grunt preview` command to start the preview.
2. [Preview your Project](http://adaptivejs.mobify.com/v1.0/docs/preview-your-project).

    * Use `http://training.merlinspotions.com/potions` as the site URL.

3. In an editor app, from the `app/global/includes/header` directory, open the `_style.scss` header SCSS file.

    This file was created by the Adaptive.js project generator with some default styles. We now replace these with styles for our site header.

4. Replace the contents of the file with the following:

    ```SCSS
    // Header
    // ===

    .t-header {
        display: flex;
        justify-content: space-between;
        padding: $v-space $h-space;
    }


    // Header: Logo
    // ---
    //
    // 1. Height comes from the logo img tag
    // 2. Legacy flexbox fix

    .t-header__logo {
        padding: 0 $h-space;

        a {
            display: block; // 2
            height: 39px; //1
        }

        img {
            max-height: 100%;
        }
    }
    ```

    Save the `_style.scss` header SCSS file and close it.

    We have the header layout set up. Let's add the menu and the cart buttons to fill in this layout.

5. In your editor app, in the `app/components` folder, create a new `button` directory, then `_style.scss` SCSS file within it.

6. Add the following content to the file:

    ```SCSS
    // Button
    // ===

    .c-button {
        @extend %button;
    }


    // Button Themes
    // ---

    .c-button.c--brand {
        border: 0;

        background-color: $brand-color;

        color: white;
    }
    ```

    Save the `_style.scss` SCSS file and close it.

7. In your editor app, from the `app/global/styles` directory, open the `_components.scss` file.

8. Add the `_button.scss` file to the list of components with the `@import` statement at the bottom of this code snippet:

    ```SCSS
    // Project Components
    // ------------------
    //
    // Styles for project-specific components.
    //
    // eg. @import 'components/button';

    @import 'components/card/style';
    @import 'components/product-list/style';
    @import 'components/price/style';
    @import 'components/button/style';
    ```

    Save the `_components.scss` file and close it.

    Now that we have common button styles, let's adjust our header menu button.
9. In your editor app, from the `app/global/includes/header` directory, open the `_style.scss` header file.
10. Add a new block `.t-header__menu` to modify buttons with the following `c-button` code block:

    ```SCSS
    // Header: Menu
    // ---

    .t-header__menu {
        display: flex;
        justify-content: space-between;

        .c-button {
            display: block;
            min-width: 45px;
            min-height: 45px;

            background-image: url('/img/menu.png');
            background-repeat: no-repeat;
            background-position: center;
            background-size: 25px auto;
        }
    }
    ```

    Save and close the file.

10. Repeat Steps 5 - 8 of this Task to add another component called `cart-count` with the following styles:

    ```SCSS
    // Cart Count
    // ===
    //
    // 1. Relative for absolutely positioned .c-cart-count__number
    // 2. Width must account for the presence of the number badge

    .c-cart-count {
        position: relative; // 1

        width: 40px; // 2
        height: 40px;

        background: url('/img/cauldron.png') top left no-repeat;
    }


    // Card Count: Number
    // ---
    //
    // 1. Absolutely positioned number badge relative to the parent .c-cart-count

    .c-cart-count__number {
        position: absolute; // 1
        top: 0;
        right: 0;

        display: block;
        width: 20px;
        height: 20px;

        border-radius: 50%;
        background-color: $accent-color;

        color: #fff;
        font-family: $oswald;
        font-weight: 300;
        text-align: center;
    }
    ```

    Remember to add the `cart-count` component with the `@import 'components/cart-count/style';` statement to the list of components in the `_components.scss` file.

11. Refresh the Potions page from Step 2 of this Task.

    The header now looks like this:

    ![Header final styling](https://s3.amazonaws.com/uploads.hipchat.com/15359/64553/Z8Dwb5hT0q9nYXO/Screen%20Shot%202015-01-19%20at%2010.28.56%20AM.png)


12. Stop preview with the command `[control] c` in Terminal.

## Continue to Step 6

When you're ready to continue, run the following command:

```
git reset --hard HEAD && git clean -df && git checkout step-6-update-footer
```

Then, follow the directions in the  [README](https://github.com/mobify/workshop--adaptivejs-site/blob/step-6-update-footer/README.md) in the Step 6 branch.
