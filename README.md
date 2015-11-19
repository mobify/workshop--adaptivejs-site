#Step 6: Update the Footer

With the header done, let's move on to last part of this page, the footer. Start to add content to the template and to make a few adjustments to the markup. This prepares the files for Step 7, where you style the footer.
##Task

###Add Content to the Footer

1. In Terminal, ensure you are in the `workshop--adaptivejs-site` directory. On the command line, enter the `grunt preview` command to start the preview.
2. [Preview your Project](http://adaptivejs.mobify.com/v1.0/docs/preview-your-project).

    * Use `http://www.merlinspotions.com/potions` as the site URL.

    Make changes to the footer HTML. As you do, refresh the page to see your changes take effect.
3. In an editor app, from the `app/global/includes/footer` folder, open the `context.js` JavaScript footer file.
4. Inside the `context` block, remove the entire `documentationLink` function.
5. Inside the `context` block, add these functions to select and to return the newsletter sign up and copyright text with the following code snippet:

    ```javascript
    context: {
        context: {
            newsletter: function() {
                return $('footer table>tbody>tr>td[width="45%"]>div').children();
            },
            copyright: function() {
                return $('footer table td:nth-child(1)>table tr:nth-child(3)');
            }
        }
    }
    ```

    Save the changes to your `context.js` file and close it.

6. In your editor app, from the `app/global/includes/footer` folder, open the `template.dust` Dust template footer file.
7. Remove the contents of the `<footer>...</footer>` block. Add the two new `newsletter` and `copyright` footer elements to the template file:

    ```html
    {#footer}
        <footer class="t-footer" role="contentinfo">
            {newsletter}
            {copyright}
        </footer>
    {/footer}
    ```

8. Wrap each element in a `<div>` tag. Use the classes in the snippet below:

    ```html
    {#footer}
        <footer class="t-footer" role="contentinfo">
            <div class="t-footer__form">
                {newsletter}
            </div>
            <div class="t-footer__fineprint">
                {copyright}
            </div>
        </footer>
    {/footer}
    ```

    Save your changes to the `template.dust` template file and close it.

9. Open the `context.js` footer view file from Step 3 again to change the newsletter element.
10. Inside the `newsletter` element function, add the `c-button` and `c--accent` classes to the button just above the return line.

    ```javascript
    context: {
        newsletter: function() {
            var $newsletter = $('footer table>tbody>tr>td[width="45%"]>div').children();

            $newsletter.find('button').addClass('c-button c--accent');

            return $newsletter;
        },
        copyright: function() {
            return $('footer table td:nth-child(1)>table tr:nth-child(3)');
        }
    }
    ```

11. Wrap the `input` and `button` in a `c-newsletter` class with the following code snippet:

    ```javascript
    context: {
        newsletter: function() {
            var $newsletter = $('footer table>tbody>tr>td[width="45%"]>div').children();

            $newsletter.find('input, button').wrapAll('<div class="c-newsletter"></div>');
            $newsletter.find('button').addClass('c-button c--accent');

            return $newsletter;
        },
        copyright: function() {
            return $('footer table td:nth-child(1)>table tr:nth-child(3)');
        }
    }
    ```

    Save the `context.js` footer file again and close it.

    The view file now looks like this:

    ```javascript
    define(['$'], function($) {
        return {
            context: {
                newsletter: function() {
                    var $newsletter = $('footer table>tbody>tr>td[width="45%"]>div').children();

                    $newsletter.find('input, button').wrapAll('<div class="c-newsletter"></div>');
                    $newsletter.find('button').addClass('c-button c--accent');

                    return $newsletter;
                },
                copyright: function() {
                    return $('footer table td:nth-child(1)>table tr:nth-child(3)');
                }
            }
        };
    });
    ```
    Refresh the Potions preview page. Scroll to the bottom to see the footer.

12. Stop the preview with the `[control] c` command in Terminal.

## Continue to Step 7

When you're ready to continue, run the following command:

```
git reset --hard HEAD && git clean -df && git checkout step-7-style-footer
```

Then, follow the directions in the [README](https://github.com/mobify/workshop--adaptivejs-site/blob/step-7-style-footer/README.md) in the Step 7 branch.
