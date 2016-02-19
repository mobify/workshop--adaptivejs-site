#Step 7: Style the Footer

Let's style the newsletter component of the footer. In this tutorial, you repeat tasks that you are already familiar with from the header tutorial:

* Add a new component SCSS file to style the footer.
* Then add styles to the existing button component.
* Finally, add template-specifc styles for the footer partial.

##Task

###Style the Footer

1. In Terminal, ensure you are in the `workshop--adaptivejs-site` directory. On the command line, enter the `grunt preview` command to start the preview.
2. [Preview your Project](http://adaptivejs.mobify.com/v1.0/docs/preview-your-project).

   * Use `http://training.merlinspotionss.com/potions` as the site URL.

3. In your editor app, in the `app/components/newsletter` folder, create a new `_style.scss` newsletter component SCSS file.
4. Add the following style content to your file:

    ```SCSS
    // Newsletter
    // ===
    //
    // 1. Legacy flexbox fix

    .c-newsletter {
        display: flex;

        .c-button {
            display: block; // 1
            flex: 0 0 auto;
            margin-left: $small-h-space;
        }
    }
    ```
    Save the `_style.scss` newsletter component file and close it.

5. In your editor app, from the `app/components/button` folder, open the `_style.scss` file.

6. At the bottom of the file, add the following button accent style:

    ```SCSS
    .c-button.c--accent {
        border: 0;

        background-color: $accent-color;

        color: white;
    }
    ```

    Save the `_style.scss` file and close it.

7. In the editor, in the `app/global/includes/footer` folder, create a new `_style.scss` file.

8. Add the following style snippet to the new file:

    ```SCSS
    // Footer
    // ===

    .t-footer {
        text-align: center;

        h3 {
            font-family: $serif;
            font-style: italic;
            font-size: 15px;
        }

        p {
            margin: $v-space 0;

            font-size: 12px;
        }
    }


    // Footer: Form
    // ---

    .t-footer__form {
        padding: $v-space $h-space;

        .c-newsletter {
            @include clearfix;

            padding: $v-space 0;
        }
    }


    // Footer: Fineprint
    // ---

    .t-footer__fineprint {
        display: block;
        padding: $v-space 0;

        background: $grey-90;

        color: $grey-55;
        font-size: 12px;
    }
    ```

    Save the `_style.scss` file and close it.

9. In the editor, from the `app` folder, open the `stylesheet.scss` file.
10. Add the `_footer.scss` file to the list of templates. Ensure that you specify the path correctly.

    ```SCSS
    // Includes
    // ---

    @import 'global/includes/header/style';
    @import 'global/includes/footer/style';
    ```
    Save the `stylesheet.scss` file and close it.

11. Refresh the Potions category page from Step 2.

    The footer now looks like this:

    ![Footer](https://s3.amazonaws.com/uploads.hipchat.com/15359/64553/KcuPmBLRbJMAG0Y/Screen%20Shot%202015-01-19%20at%201.28.56%20PM.png)


12. Stop the preview with the `[control] c` command in Terminal.

## Continue to Step 8

When you're ready to continue, run the following command:

```
git reset --hard HEAD && git clean -df && git checkout step-8-update-homepage
```

Then, follow the directions in the  [README](https://github.com/mobify/workshop--adaptivejs-site/blob/step-8-update-homepage/README.md) in the Step 8 branch.
